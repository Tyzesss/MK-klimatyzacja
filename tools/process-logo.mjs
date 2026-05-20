import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

function isNearWhite(r, g, b) {
  // Tuned for "white background" PNGs with light antialiasing.
  const threshold = 245;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max >= threshold && max - min <= 20;
}

// OKLCH -> sRGB conversion (D65) adapted for our limited use (brand colors).
// We keep it local to avoid adding new deps.
function clamp01(n) {
  return Math.min(1, Math.max(0, n));
}

function oklchToSrgb({ L, C, h }) {
  const hr = (h * Math.PI) / 180;
  const a = C * Math.cos(hr);
  const b = C * Math.sin(hr);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  let rLin = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const toSrgb = (x) => {
    x = clamp01(x);
    return x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
  };

  return {
    r: Math.round(toSrgb(rLin) * 255),
    g: Math.round(toSrgb(gLin) * 255),
    b: Math.round(toSrgb(bLin) * 255),
  };
}

function mixRgb(a, b, t) {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  };
}

function srgbLuma(r, g, b) {
  // Perceived brightness for shading retention (sRGB approximate).
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

async function main() {
  const [, , input, output] = process.argv;
  if (!input || !output) {
    console.error("Usage: node tools/process-logo.mjs <input.png> <output.png>");
    process.exit(1);
  }

  const inPath = path.resolve(input);
  const outPath = path.resolve(output);

  const { data, info } = await sharp(inPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Brand palette from src/styles.css (:root):
  // --brand-teal: oklch(0.44 0.14 245);
  // --brand-cyan: oklch(0.72 0.13 225);
  const brandTeal = oklchToSrgb({ L: 0.44, C: 0.14, h: 245 });
  const brandCyan = oklchToSrgb({ L: 0.72, C: 0.13, h: 225 });

  // RGBA in Uint8.
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (a === 0) continue;
    if (isNearWhite(r, g, b)) {
      data[i + 3] = 0;
      continue;
    }

    // Recolor to match site gradient while keeping shading.
    const px = (i / 4) % info.width;
    const t = info.width <= 1 ? 0.5 : px / (info.width - 1);
    const base = mixRgb(brandTeal, brandCyan, t);
    const l = srgbLuma(r, g, b);
    const shade = 0.18 + 0.82 * l;

    data[i] = Math.round(base.r * shade);
    data[i + 1] = Math.round(base.g * shade);
    data[i + 2] = Math.round(base.b * shade);
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await sharp(data, { raw: info })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
