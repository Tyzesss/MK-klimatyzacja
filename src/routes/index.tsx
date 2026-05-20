import { createFileRoute } from "@tanstack/react-router";
import {
  Snowflake,
  Wrench,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Sparkles,
  Car,
  Gauge,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero.jpg";
import heroFront from "@/assets/hero.webp";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "M&K – Serwis klimatyzacji samochodowej Wrocław (stacjonarnie)" },
      {
        name: "description",
        content:
          "Serwis klimatyzacji samochodowej we Wrocławiu. Nabijanie, odgrzybianie, diagnostyka i test szczelności. Zapraszamy stacjonarnie — Parking Kaufland, Sieradzka 7.",
      },
      { property: "og:title", content: "M&K – Serwis klimatyzacji samochodowej Wrocław" },
      {
        property: "og:description",
        content:
          "Stacjonarny serwis klimatyzacji samochodowej we Wrocławiu. Nabijanie, odgrzybianie, diagnostyka, test szczelności.",
      },
    ],
  }),
});

const BRAND_NAME = "M&K";
const BRAND_TAGLINE = "Serwis klimatyzacji samochodowej";

const PHONE = "+48 537 800 037";
const PHONE_HREF = "tel:+48537800037";
const SMS_HREF = "sms:+48537800037";

const ADDRESS_SHORT = "Parking Kaufland, Sieradzka 7";
const ADDRESS_FULL = "Parking Kaufland, Sieradzka 7, 50-568 Wrocław";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`;

const EMAIL = "kontakt@mk-serwis.pl";
const EMAIL_HREF = `mailto:${EMAIL}`;

const HOURS = "Pn–Pt 8:00–18:00, Sob 9:00–14:00";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Why />
        <Area />
        <Contact />
      </main>
      <Footer />
      <StickyBottomCTA />
    </div>
  );
}

const TILE_CLASS =
  "group relative rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 shadow-card hover:shadow-cool hover:-translate-y-1 transition-spring overflow-hidden before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.14),transparent_55%)]";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt={`${BRAND_NAME} logo`}
            className="h-12 w-12 object-contain"
            width={48}
            height={48}
          />
          <div className="leading-tight">
            <div className="font-bold tracking-tight">{BRAND_NAME}</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-widest">
              {BRAND_TAGLINE}
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#uslugi" className="hover:text-accent transition-smooth">
            Usługi
          </a>
          <a href="#cennik" className="hover:text-accent transition-smooth">
            Cennik
          </a>
          <a href="#jak" className="hover:text-accent transition-smooth">
            Jak to działa
          </a>
          <a href="#kontakt" className="hover:text-accent transition-smooth">
            Kontakt
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-cool hover:shadow-glow transition-smooth"
          >
            <Phone className="h-4 w-4" /> Zadzwoń
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-foreground hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4 text-base font-semibold">
            <a
              href="#uslugi"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-border/50 hover:text-accent transition-smooth"
            >
              Usługi
            </a>
            <a
              href="#cennik"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-border/50 hover:text-accent transition-smooth"
            >
              Cennik
            </a>
            <a
              href="#jak"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-border/50 hover:text-accent transition-smooth"
            >
              Jak to działa
            </a>
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-accent transition-smooth"
            >
              Kontakt
            </a>
            <a
              href={PHONE_HREF}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent text-primary-foreground py-3 text-sm font-semibold shadow-cool transition-smooth"
            >
              <Phone className="h-4 w-4" /> Zadzwoń teraz
            </a>
            <a
              href={MAPS_HREF}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card py-3 text-sm font-semibold shadow-card hover:shadow-cool transition-smooth"
            >
              <MapPin className="h-4 w-4 text-accent" /> Nawiguj do nas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
function TiltVanImage() {
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  );
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const rotateX = (y - 0.5) * -10; // Max 5 deg
    const rotateY = (x - 0.5) * 10;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div className="relative hidden lg:flex items-center justify-center w-full max-w-[650px] z-10 mx-auto">
      <div
        className={`absolute -inset-2 bg-gradient-to-tr from-brand-teal/40 to-brand-cyan/40 blur-3xl rounded-3xl transition-opacity duration-700 ease-out ${isHovered ? "opacity-100" : "opacity-40"}`}
      />
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="relative w-full aspect-[16/11] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,180,216,0.3)] ring-1 ring-white/10 ring-inset will-change-transform z-10"
      >
        <img
          src={heroFront}
          alt="Serwis klimatyzacji samochodowej M&K"
          className={`w-full h-full object-cover object-[70%_70%] transition-transform duration-1000 ease-out ${isHovered ? "scale-105" : "scale-100"}`}
          style={{ filter: "contrast(1.05) brightness(1.05) saturate(1.10)" }}
          width={650}
          height={446}
        />
        {/* Subtle vignette gradient instead of heavy mix-blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/20 ring-inset pointer-events-none" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> {ADDRESS_SHORT}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Serwis klimatyzacji <span className="text-brand-cyan">stacjonarnie</span> we Wrocławiu.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            Nabijanie czynnika, diagnostyka, ozonowanie i odgrzybianie — zapraszamy do naszego
            punktu. Szybko, profesjonalnie i w dobrej cenie.
          </p>
          <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 font-semibold shadow-cool hover:shadow-glow transition-smooth"
            >
              <Phone className="h-4 w-4" /> Umów wizytę
            </a>
            <a
              href={MAPS_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur hover:bg-white/10 transition-smooth"
            >
              Nawiguj do nas <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 w-full">
            {[
              { k: "10+", v: "lat doświadczenia" },
              { k: "2 500+", v: "obsłużonych aut" },
              { k: "24h", v: "czas reakcji" },
            ].map((s) => (
              <div key={s.v} className="text-center lg:text-left">
                <dt className="text-2xl md:text-3xl font-bold text-brand-cyan">{s.k}</dt>
                <dd className="text-xs text-white/70 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <TiltVanImage />
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Gauge,
      title: "Nabijanie klimatyzacji",
      desc: "Pełna obsługa czynnika R134a i R1234yf z odzyskiem, próżnią i kontrolą szczelności.",
    },
    {
      icon: Droplets,
      title: "Odgrzybianie i ozonowanie",
      desc: "Likwidacja nieprzyjemnych zapachów, bakterii i grzybów z układu klimatyzacji.",
    },
    {
      icon: Wrench,
      title: "Diagnostyka i naprawa",
      desc: "Wykrywanie wycieków, wymiana sprężarek, osuszaczy, czujników i przewodów.",
    },
    {
      icon: Sparkles,
      title: "Wymiana filtra kabinowego",
      desc: "Czyste powietrze w kabinie — dobierzemy i wymienimy filtr pod Twój model auta.",
    },
    {
      icon: Car,
      title: "Przegląd sezonowy",
      desc: "Kompleksowy check-up przed sezonem letnim. Bądź pewien, że nie zawiedzie.",
    },
    {
      icon: ShieldCheck,
      title: "Gwarancja jakości",
      desc: "Profesjonalny sprzęt, oryginalne czynniki, faktura VAT i pełna gwarancja.",
    },
  ];

  const length = items.length;
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const handleNext = () => {
    if (length !== 0) {
      if (index >= length + 1) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (length !== 0) {
      if (index <= 0) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (length !== 0) {
      if (index >= length + 1) {
        setTransitionEnabled(false);
        setIndex(1);
        return;
      }
      if (index <= 0) {
        setTransitionEnabled(false);
        setIndex(length);
        return;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = e.changedTouches[0]?.clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (diff && Math.abs(diff) >= 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Cloned items for infinite loop: last item cloned at start, first item cloned at end
  const extendedItems = [items[items.length - 1], ...items, items[0]];

  return (
    <section id="uslugi" className="py-16 md:py-32 bg-gradient-cool overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Usługi"
          title="Wszystko, czego potrzebuje Twoja klima"
          subtitle={`Pracujemy stacjonarnie we Wrocławiu. Zapraszamy: ${ADDRESS_FULL}.`}
        />

        {/* Mobile Swipe Carousel */}
        <div className="mt-16 md:hidden">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${index * 85 - 7.5}%)`,
                transition: transitionEnabled
                  ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedItems.map((s, idx) => {
                const isCardActive = idx === index;
                return (
                  <div key={idx} className="w-[85%] flex-shrink-0 px-2.5">
                    <div
                      className={`group relative rounded-2xl border border-border bg-card p-7 shadow-card h-full text-center transition-all duration-500 ease-out origin-center ${
                        isCardActive
                          ? "scale-100 opacity-100 shadow-cool"
                          : "scale-[0.94] opacity-50 blur-[0.5px]"
                      }`}
                    >
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.14),transparent_55%)]" />
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow mx-auto">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, idx) => {
              const isActive =
                index === idx + 1 ||
                (index === 0 && idx === items.length - 1) ||
                (index === items.length + 1 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map((s) => (
            <div key={s.title} className={TILE_CLASS}>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.14),transparent_55%)]" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Zadzwoń i umów termin",
      d: "Krótko ustalimy zakres usługi i zaproponujemy dogodną godzinę.",
    },
    { n: "02", t: "Podjedź do warsztatu", d: `Jesteśmy we Wrocławiu: ${ADDRESS_FULL}.` },
    {
      n: "03",
      t: "Serwis na miejscu",
      d: "Diagnostyka, nabijanie, ozonowanie i test szczelności — sprawnie i konkretnie.",
    },
    {
      n: "04",
      t: "Chłodzi jak nowa",
      d: "Odbierasz auto gotowe do sezonu. Komfort jazdy w komplecie.",
    },
  ];

  const length = steps.length;
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const handleNext = () => {
    if (length !== 0) {
      if (index >= length + 1) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (length !== 0) {
      if (index <= 0) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (length !== 0) {
      if (index >= length + 1) {
        setTransitionEnabled(false);
        setIndex(1);
        return;
      }
      if (index <= 0) {
        setTransitionEnabled(false);
        setIndex(length);
        return;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = e.changedTouches[0]?.clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (diff && Math.abs(diff) >= 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const extendedSteps = [steps[steps.length - 1], ...steps, steps[0]];

  return (
    <section
      id="jak"
      className="py-16 md:py-32 bg-brand-deep text-primary-foreground overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          light
          eyebrow="Jak to działa"
          title="Cztery proste kroki do chłodnego komfortu"
        />

        {/* Mobile Swipe Carousel */}
        <div className="mt-16 md:hidden text-left">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${index * 85 - 7.5}%)`,
                transition: transitionEnabled
                  ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSteps.map((s, idx) => {
                const isCardActive = idx === index;
                return (
                  <div key={idx} className="w-[85%] flex-shrink-0 px-2.5">
                    <div
                      className={`relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur h-full text-center transition-all duration-500 ease-out origin-center ${
                        isCardActive
                          ? "scale-100 opacity-100 shadow-cool"
                          : "scale-[0.94] opacity-50 blur-[0.5px]"
                      }`}
                    >
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_55%)]" />
                      <div className="text-brand-cyan font-mono text-sm tracking-widest mx-auto">
                        {s.n}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, idx) => {
              const isActive =
                index === idx + 1 ||
                (index === 0 && idx === steps.length - 1) ||
                (index === steps.length + 1 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-2xl border border-white/12 bg-white/5 p-7 backdrop-blur hover:border-white/25 transition-smooth overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
              <div className="text-brand-cyan font-mono text-sm tracking-widest">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Nabijanie R134a",
      price: "199 zł",
      tag: "Najczęściej wybierane",
      features: [
        "Odzysk czynnika",
        "Próżnia i test szczelności",
        "Nabicie + olej + kontrast UV",
        "Test wydajności układu",
      ],
      highlight: false,
    },
    {
      name: "Pakiet Premium",
      price: "299 zł",
      tag: "Najlepszy stosunek jakości do ceny",
      features: [
        "Pełne nabijanie R134a",
        "Ozonowanie kabiny (45 min)",
        "Wymiana filtra kabinowego*",
        "Przegląd układu",
      ],
      highlight: true,
    },
    {
      name: "Nabijanie R1234yf",
      price: "od 449 zł",
      tag: "Nowsze pojazdy",
      features: ["Czynnik ekologiczny", "Odzysk i próżnia", "Olej PAG/POE", "Test szczelności"],
      highlight: false,
    },
  ];

  const length = plans.length;
  // Centering the Premium Pack (index 2) by default
  const [index, setIndex] = useState(2);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const handleNext = () => {
    if (length !== 0) {
      if (index >= length + 1) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (length !== 0) {
      if (index <= 0) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (length !== 0) {
      if (index >= length + 1) {
        setTransitionEnabled(false);
        setIndex(1);
        return;
      }
      if (index <= 0) {
        setTransitionEnabled(false);
        setIndex(length);
        return;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = e.changedTouches[0]?.clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (diff && Math.abs(diff) >= 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const extendedPlans = [plans[plans.length - 1], ...plans, plans[0]];

  return (
    <section id="cennik" className="py-16 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Cennik"
          title="Uczciwe ceny, bez ukrytych kosztów"
          subtitle="Wybrane usługi. Pełen cennik podajemy telefonicznie — wycena zależy od modelu auta."
        />

        {/* Mobile Swipe Carousel */}
        <div className="mt-16 md:hidden">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${index * 85 - 7.5}%)`,
                transition: transitionEnabled
                  ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPlans.map((p, idx) => {
                const isCardActive = idx === index;
                return (
                  <div key={idx} className="w-[85%] flex-shrink-0 px-2.5">
                    <div
                      className={`relative rounded-3xl p-8 h-full flex flex-col justify-between text-center transition-all duration-500 ease-out origin-center ${
                        isCardActive
                          ? "scale-100 opacity-100 shadow-cool animate-none"
                          : "scale-[0.94] opacity-50 blur-[0.5px]"
                      } ${p.highlight ? "bg-gradient-hero text-primary-foreground" : "bg-card border border-border shadow-card"}`}
                    >
                      {!p.highlight && (
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
                      )}
                      <div className="flex flex-col items-center">
                        <div
                          className={`text-xs uppercase tracking-widest font-semibold ${p.highlight ? "text-brand-cyan" : "text-accent"}`}
                        >
                          {p.tag}
                        </div>
                        <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
                        <div className="mt-5 text-4xl font-bold">{p.price}</div>
                        <ul className="mt-7 space-y-3 flex flex-col items-start text-left w-fit mx-auto">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm">
                              <CheckCircle2
                                className={`h-5 w-5 mt-0.5 flex-shrink-0 ${p.highlight ? "text-brand-cyan" : "text-accent"}`}
                              />
                              <span
                                className={p.highlight ? "text-white/85" : "text-muted-foreground"}
                              >
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={PHONE_HREF}
                        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-smooth ${p.highlight ? "bg-white text-brand-deep hover:bg-brand-cyan animate-pulse" : "bg-gradient-accent text-primary-foreground hover:shadow-glow"}`}
                      >
                        Umów wizytę <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {plans.map((_, idx) => {
              const isActive =
                index === idx + 1 ||
                (index === 0 && idx === plans.length - 1) ||
                (index === plans.length + 1 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-16 text-left">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`group relative rounded-3xl p-8 transition-spring hover:-translate-y-1 overflow-hidden ${p.highlight ? "bg-gradient-hero text-primary-foreground shadow-cool" : "bg-card/85 border border-border/70 backdrop-blur-sm shadow-card hover:shadow-cool"}`}
            >
              {!p.highlight && (
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
              )}
              <div
                className={`text-xs uppercase tracking-widest font-semibold ${p.highlight ? "text-brand-cyan" : "text-accent"}`}
              >
                {p.tag}
              </div>
              <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
              <div className="mt-5 text-4xl font-bold">{p.price}</div>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className={`h-5 w-5 mt-0.5 flex-shrink-0 ${p.highlight ? "text-brand-cyan" : "text-accent"}`}
                    />
                    <span className={p.highlight ? "text-white/85" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-smooth ${p.highlight ? "bg-white text-brand-deep hover:bg-brand-cyan" : "bg-gradient-accent text-primary-foreground hover:shadow-glow"}`}
              >
                Umów wizytę <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          * Filtr kabinowy w cenie do 50 zł — droższe filtry wg cennika.
        </p>
      </div>
    </section>
  );
}

function Why() {
  const reasons = [
    { icon: MapPin, t: "Dogodna lokalizacja", d: `Parking Kaufland — ${ADDRESS_FULL}.` },
    {
      icon: Clock,
      t: "Szybka obsługa",
      d: "Sprawny serwis i konkretna diagnostyka bez zbędnego czekania.",
    },
    {
      icon: ShieldCheck,
      t: "Profesjonalny sprzęt",
      d: "Stacje markowe, oryginalne czynniki i pełna kontrola układu.",
    },
    {
      icon: Sparkles,
      t: "Czyste powietrze w kabinie",
      d: "Ozonowanie i odgrzybianie — komfort i higiena na co dzień.",
    },
  ];

  const length = reasons.length;
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const handleNext = () => {
    if (length !== 0) {
      if (index >= length + 1) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (length !== 0) {
      if (index <= 0) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (length !== 0) {
      if (index >= length + 1) {
        setTransitionEnabled(false);
        setIndex(1);
        return;
      }
      if (index <= 0) {
        setTransitionEnabled(false);
        setIndex(length);
        return;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = e.changedTouches[0]?.clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (diff && Math.abs(diff) >= 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const extendedReasons = [reasons[reasons.length - 1], ...reasons, reasons[0]];

  return (
    <section className="py-16 md:py-32 bg-gradient-cool overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Dlaczego my"
              title="Wiemy, jak schłodzić każde auto"
              subtitle="Nie jesteśmy kolejnym warsztatem. Jesteśmy zespołem, który dojeżdża, doradza i robi robotę porządnie."
              align="left"
            />
          </div>

          {/* Desktop/Tablet 2x2 Grid View */}
          <div className="hidden md:grid grid-cols-2 gap-5 lg:mt-0 text-left">
            {reasons.map((r) => (
              <div
                key={r.t}
                className="group relative rounded-xl border border-border/70 bg-card/85 backdrop-blur-sm p-6 shadow-card hover:shadow-cool transition-smooth overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
                <r.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 font-semibold">{r.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Carousel - Placed cleanly outside of the grid wrapper so it never gets grid-width stretched on mobile */}
        <div className="md:hidden mt-10">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${index * 85 - 7.5}%)`,
                transition: transitionEnabled
                  ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedReasons.map((r, idx) => {
                const isCardActive = idx === index;
                return (
                  <div key={idx} className="w-[85%] flex-shrink-0 px-2.5">
                    <div
                      className={`rounded-2xl border border-border bg-card p-6 shadow-card h-full text-center transition-all duration-500 ease-out origin-center ${
                        isCardActive
                          ? "scale-100 opacity-100 shadow-cool"
                          : "scale-[0.94] opacity-50 blur-[0.5px]"
                      }`}
                    >
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
                      <r.icon className="h-7 w-7 text-accent mx-auto" />
                      <h3 className="mt-4 font-semibold">{r.t}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reasons.map((_, idx) => {
              const isActive =
                index === idx + 1 ||
                (index === 0 && idx === reasons.length - 1) ||
                (index === reasons.length + 1 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section className="py-16 md:py-32 bg-brand-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            light
            eyebrow="Lokalizacja"
            title="Podjedź do nas — łatwy dojazd"
            subtitle={`Zapraszamy stacjonarnie: ${ADDRESS_FULL}.`}
            align="left"
          />
          <ul className="mt-8 space-y-3 text-white/80">
            {[
              { label: "Adres", value: ADDRESS_FULL },
              { label: "Godziny", value: HOURS },
              { label: "Telefon", value: PHONE },
            ].map((row) => (
              <li key={row.label} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 border border-white/10 shrink-0">
                  <MapPin className="h-4 w-4 text-brand-cyan" />
                </span>
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-widest">{row.label}</div>
                  <div className="font-semibold">{row.value}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 font-semibold hover:bg-brand-cyan transition-smooth"
            >
              <MapPin className="h-4 w-4" /> Nawiguj
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur hover:bg-white/10 transition-smooth"
            >
              <Phone className="h-4 w-4" /> Zadzwoń
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-cool aspect-[4/3]">
          <iframe
            title="Mapa — M&K Wrocław"
            src="https://www.google.com/maps?q=51.0925101,17.032424&hl=pl&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactCards = [
    {
      type: "link",
      href: PHONE_HREF,
      icon: Phone,
      label: "Telefon",
      value: PHONE,
    },
    {
      type: "link",
      href: MAPS_HREF,
      icon: MapPin,
      label: "Adres",
      value: ADDRESS_FULL,
    },
    {
      type: "link",
      href: EMAIL_HREF,
      icon: Mail,
      label: "E-mail",
      value: EMAIL,
    },
    {
      type: "static",
      icon: Clock,
      label: "Godziny",
      value: HOURS,
    },
  ];

  const length = contactCards.length;
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStartRef = useRef<number | null>(null);

  const handleNext = () => {
    if (length !== 0) {
      if (index >= length + 1) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (length !== 0) {
      if (index <= 0) return;
      setTransitionEnabled(true);
      setIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (length !== 0) {
      if (index >= length + 1) {
        setTransitionEnabled(false);
        setIndex(1);
        return;
      }
      if (index <= 0) {
        setTransitionEnabled(false);
        setIndex(length);
        return;
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = e.changedTouches[0]?.clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (diff && Math.abs(diff) >= 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const extendedCards = [contactCards[contactCards.length - 1], ...contactCards, contactCards[0]];

  return (
    <section id="kontakt" className="py-16 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          eyebrow="Kontakt"
          title="Umów termin lub podjedź do nas"
          subtitle={`Zadzwoń albo włącz nawigację: ${ADDRESS_SHORT}.`}
        />

        {/* Mobile Swipe Carousel */}
        <div className="mt-12 md:hidden text-left">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform"
              style={{
                transform: `translateX(-${index * 85 - 7.5}%)`,
                transition: transitionEnabled
                  ? "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCards.map((c, idx) => {
                const CardWrapper = c.type === "link" ? "a" : "div";
                const extraProps = c.type === "link" ? { href: c.href } : {};
                const isCardActive = idx === index;
                return (
                  <div key={idx} className="w-[85%] flex-shrink-0 px-2.5">
                    {/* @ts-expect-error CardWrapper is a dynamic intrinsic element */}
                    <CardWrapper
                      {...extraProps}
                      className={`block rounded-2xl border border-border bg-card p-7 shadow-card h-full text-center transition-all duration-500 ease-out origin-center ${
                        isCardActive
                          ? "scale-100 opacity-100 shadow-cool"
                          : "scale-[0.94] opacity-50 blur-[0.5px]"
                      }`}
                    >
                      <c.icon className="h-6 w-6 text-accent mx-auto" />
                      <div className="mt-4 text-sm text-muted-foreground">{c.label}</div>
                      <div className="mt-1 font-semibold">{c.value}</div>
                    </CardWrapper>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {contactCards.map((_, idx) => {
              const isActive =
                index === idx + 1 ||
                (index === 0 && idx === contactCards.length - 1) ||
                (index === contactCards.length + 1 && idx === 0);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setIndex(idx + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="mt-12 hidden md:grid sm:grid-cols-4 gap-5 text-left">
          <a
            href={PHONE_HREF}
            className="group relative rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 shadow-card hover:shadow-cool transition-smooth overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
            <Phone className="h-6 w-6 text-accent" />
            <div className="mt-4 text-sm text-muted-foreground">Telefon</div>
            <div className="mt-1 font-semibold">{PHONE}</div>
          </a>
          <a
            href={MAPS_HREF}
            className="group relative rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 shadow-card hover:shadow-cool transition-smooth overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
            <MapPin className="h-6 w-6 text-accent" />
            <div className="mt-4 text-sm text-muted-foreground">Adres</div>
            <div className="mt-1 font-semibold">{ADDRESS_FULL}</div>
          </a>
          <a
            href={EMAIL_HREF}
            className="group relative rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 shadow-card hover:shadow-cool transition-smooth overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
            <Mail className="h-6 w-6 text-accent" />
            <div className="mt-4 text-sm text-muted-foreground">E-mail</div>
            <div className="mt-1 font-semibold">{EMAIL}</div>
          </a>
          <div className="group relative rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm p-7 shadow-card overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--accent)/0.12),transparent_55%)]" />
            <Clock className="h-6 w-6 text-accent" />
            <div className="mt-4 text-sm text-muted-foreground">Godziny</div>
            <div className="mt-1 font-semibold">{HOURS}</div>
          </div>
        </div>
        <a
          href={PHONE_HREF}
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground px-9 py-4 font-semibold shadow-cool hover:shadow-glow transition-smooth"
        >
          <Phone className="h-5 w-5" /> Umów wizytę teraz
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-brand-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-11 w-11 object-contain" width={44} height={44} />
          <div>
            <div className="font-semibold">{BRAND_NAME}</div>
            <div className="text-xs text-white/60">{BRAND_TAGLINE} · Wrocław</div>
          </div>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND_NAME}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "text-center max-w-2xl mx-auto"
          : "text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
      }
    >
      <div
        className={`text-xs uppercase tracking-[0.2em] font-semibold ${light ? "text-brand-cyan" : "text-accent"}`}
      >
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function StickyBottomCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden bg-background/90 backdrop-blur-xl border border-border/60 rounded-2xl p-3 flex gap-3 shadow-cool transition-all duration-300 transform ${show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
    >
      <a
        href={SMS_HREF}
        className="w-12 h-12 bg-card border border-border/60 text-foreground flex items-center justify-center rounded-xl hover:bg-muted transition-smooth active:scale-95 shrink-0"
        aria-label="Wyślij SMS"
      >
        <MessageSquare className="h-5 w-5 text-accent" />
      </a>
      <a
        href={PHONE_HREF}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent text-primary-foreground font-semibold shadow-glow transition-smooth active:scale-[0.98] py-3 text-sm"
      >
        <Phone className="h-4 w-4" /> Zadzwoń teraz
      </a>
      <a
        href={MAPS_HREF}
        className="w-12 h-12 bg-card border border-border/60 text-foreground flex items-center justify-center rounded-xl hover:bg-muted transition-smooth active:scale-95 shrink-0"
        aria-label="Nawiguj"
      >
        <MapPin className="h-5 w-5 text-accent" />
      </a>
    </div>
  );
}
