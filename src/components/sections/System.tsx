import { site } from "@/content/site";
import { Icon } from "@/components/icons";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Das System (Whitepaper S. 4): oben Überschrift und Text nebeneinander, darunter die drei Stufen als Ablauf
 * (Grafik-Feld oben, Text unten, Link zur jeweiligen Stufe), dann die Ergebnis-Leiste mit den vier Prüfpunkten
 * und dem Maßstab, zuletzt die breite Karte „Nachhaltig“ mit Webseite, Handy und Kanal-Symbolen.
 */
const IMG = "/images/wp/system";
const GLOW = "rgba(242,107,75,0.38) 0%, rgba(201,71,43,0.149) 45%, rgba(201,71,43,0) 68%";

// Grafik je Stufe: Größe der SVG-Fläche, Mittelpunkt des Motivs darin, Lage des Mittelpunkts im Feld (in %) und Maßstab
const graphics = [
  { src: "grafik-angebot.svg", w: 238.4, h: 260, cx: 165, cy: 172, at: [52, 62], s: 0.95 },
  { src: "grafik-sichtbarkeit.svg", w: 298, h: 290, cx: 168, cy: 160, at: [50, 66], s: 1 },
  { src: "grafik-vertrieb.svg", w: 230, h: 218, cx: 132, cy: 148, at: [50, 52], s: 1.15 },
];

export function System() {
  const s = site.system;
  return (
    <section id="leistungen" className="section-y relative overflow-hidden bg-navy-2 text-white">
      {/* Hintergrund wie der Schluss-CTA: Punktraster + orange getönter Schein oben links */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1.2px)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(50% 60% at 15% 20%, rgba(242,106,74,0.16) 0%, rgba(242,106,74,0) 100%)" }} />
      </div>

      <div className="container-x relative">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f26b4b]">{s.eyebrow}</p>
            <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.12] tracking-[-0.02em]">
              <span className="font-semibold">{s.headlineBold}</span> <span className="font-light">{s.headlineLight}</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.5] text-on-navy-muted">{s.text}</p>
        </div>

        {/* Die drei Stufen als Ablauf */}
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {s.stages.map((st, i) => (
            <StageCard key={st.title} n={i + 1} stage={st} graphic={graphics[i]} arrow={i < s.stages.length - 1} />
          ))}
        </ol>

        {/* Ergebnis-Leiste mit Prüfpunkten und Maßstab */}
        <div
          className="mt-5 rounded-[18px] p-6 shadow-[0_0_8px_rgba(242,107,75,0.27)] md:px-8 md:py-7"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(14,23,33,0.74), rgba(14,23,33,0.74)), linear-gradient(95.4deg, #f26b4b 9%, #442016 90%)" }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="flex items-center gap-3 text-[19px] font-semibold leading-snug">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/qualifiziert.svg`} alt="" aria-hidden width={28} height={28} className="size-7 shrink-0" />
              {s.result.title}
            </p>
            <ul className="flex flex-wrap gap-2">
              {s.result.criteria.map((c) => (
                <li key={c} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[13.5px] text-[#ffe4db]">
                  <Icon.check className="size-3.5 shrink-0 text-[#f26b4b]" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 border-t border-white/10 pt-4 text-[15px] leading-[1.45] text-[#e6e6e2]">{s.definition}</p>
        </div>

        <Lasting />
      </div>
    </section>
  );
}

/* Stufen-Karte: Grafik-Feld mit Nummer oben, Titel, Text und Link unten; Pfeil zur nächsten Stufe ab md */
function StageCard({
  n,
  stage,
  graphic,
  arrow,
}: {
  n: number;
  stage: (typeof site.system.stages)[number];
  graphic: (typeof graphics)[number];
  arrow: boolean;
}) {
  const g = graphic;
  const s = site.system;
  return (
    <li className="relative">
      <div className="flex h-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#1a2633,#0e1721)] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <div className="relative h-[170px] overflow-hidden border-b border-white/[0.06] lg:h-[190px]">
          <span
            aria-hidden
            className="absolute -top-[60%] left-1/2 aspect-square w-[150%] -translate-x-1/2 opacity-55 blur-[2px]"
            style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${GLOW})` }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${IMG}/${g.src}`}
            alt=""
            aria-hidden
            className="absolute max-w-none"
            style={{ left: `calc(${g.at[0]}% - ${g.cx * g.s}px)`, top: `calc(${g.at[1]}% - ${g.cy * g.s}px)`, width: g.w * g.s, height: g.h * g.s }}
          />
          <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 py-1 pl-1 pr-3 text-[12px] font-semibold text-[#e6e6e2] backdrop-blur-sm">
            <span className="grid size-6 place-items-center rounded-full bg-[linear-gradient(135deg,#f26b4b,#c9472b)] text-white">{n}</span>
            {s.stageLabel} {n}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-[21px] font-semibold leading-[1.2]">{stage.title}</h3>
          <p className="mt-2.5 text-[15px] leading-[1.45] text-[#cfcfcf]">{stage.text}</p>
          <a href={stage.href} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-[#f26b4b] hover:text-[#ff8a6d]">
            {s.stageLink}
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
      {arrow && (
        <span
          aria-hidden
          className="absolute -right-[28px] top-[67px] z-10 hidden size-9 place-items-center rounded-full border border-white/15 bg-navy-card text-[16px] text-[#e6e6e2] shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:grid lg:top-[77px]"
        >
          →
        </span>
      )}
    </li>
  );
}

/* Karte „Nachhaltig“: links Text, rechts Webseite, SEO-Leiste, Handy und Kanal-Symbole (Figma-Fläche ab y = 210) */
function Lasting() {
  const l = site.system.lasting;
  const { pos, px } = figmaScale(273, 226);
  const y = (v: number) => v - 210;
  return (
    <div className="mt-5 grid overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#1a2633,#0e1721)] md:grid-cols-2 md:items-end lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-10">
      <div className="p-6 md:self-center md:p-10 lg:pl-14">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f26b4b]">{l.eyebrow}</p>
        <h3 className="mt-2 text-[clamp(1.5rem,2.4vw,1.9rem)] font-semibold leading-[1.15]">{l.title}</h3>
        <p className="mt-4 max-w-[520px] text-[16px] leading-[1.5] text-[#cfcfcf]">{l.text}</p>
      </div>
      <Stage w={273} h={226} className="mx-auto w-full max-w-[480px] md:mr-0 lg:max-w-[540px]">
        <span
          aria-hidden
          className="opacity-55 blur-[2px]"
          style={{ ...pos(55.74, y(139.74), 395, 395), backgroundImage: `radial-gradient(circle ${px(279.3)} at 50% 50%, ${GLOW})` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/webseite.jpg`} alt="" aria-hidden loading="lazy" style={{ ...pos(78, y(239), 223, 223), borderRadius: px(2.6) }} className="max-w-none object-cover" />
        <div style={{ ...pos(91.97, y(353.24), 195.06, 24.66), borderRadius: px(2.6) }} className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/seo-leiste.png`} alt="" aria-hidden loading="lazy" style={{ position: "absolute", left: "-4.99%", top: "-16.67%", width: "116.24%", height: "134.21%" }} className="max-w-none" />
        </div>
        <span style={{ ...pos(56, y(248), 30.56, 30.56), boxShadow: "0 0 7px rgba(0,0,0,0.25)" }} className="overflow-hidden rounded-full bg-[#0080fb]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/meta.png`} alt="Meta" style={{ position: "absolute", left: "14.56%", top: "25.13%", width: "70.57%", height: "46.85%" }} className="max-w-none object-contain object-bottom" />
        </span>
        <span style={{ ...pos(207, y(219), 40, 40), boxShadow: "0 0 16.6px rgba(0,0,0,0.25)" }} className="overflow-hidden rounded-full bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/google-ads.svg`} alt="Google Ads" style={{ position: "absolute", left: "23.63%", top: "26.37%", right: "23.69%", bottom: "26.37%" }} />
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/handy.png`} alt="" aria-hidden loading="lazy" style={pos(20, y(294), 170.88, 143.59)} className="max-w-none object-cover" />
      </Stage>
    </div>
  );
}
