import fs from "node:fs";
import path from "node:path";

const file = path.resolve("src/routes/index.tsx");
let s = fs.readFileSync(file, "utf8");
const start = s.indexOf("function Pricing()");
const end = s.indexOf("function Why()", start);
if (start < 0 || end < 0) {
  console.error("Pricing block not found");
  process.exit(1);
}
s = s.slice(0, start) + s.slice(end);
fs.writeFileSync(file, s, "utf8");
console.log("Removed Pricing section");
