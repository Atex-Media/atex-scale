import { site } from "@/content/site";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Stufe 3 · Vertrieb & Automatisierung (Whitepaper S. 7, Figma „07 Vertrieb & Automatisierung“):
 * dunkles Anfragen-Board mit fünf Spalten (neu, qualifiziert, kontaktiert, abgeschlossen, abgelehnt) und Kennzahlen.
 * Das Board ist auf seiner Figma-Fläche (987 × 426) nachgebaut; auf schmalen Bildschirmen lässt es sich seitlich wischen.
 */
const IMG = "/images/wp/vertrieb";
const { pos, px } = figmaScale(987, 426);
const GLOW = "rgba(242,107,75,0.38) 0%, rgba(201,71,43,0.149) 45%, rgba(201,71,43,0) 68%";

type Card = (typeof site.sales.board.columns)[number]["cards"][number];

const cardTone = {
  plain: {
    bg: "linear-gradient(180deg, #2b2b2b, #1a1a1a)",
    border: "rgba(255,255,255,0.1)",
    shadow: `0 ${px(6)} ${px(14)} rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`,
    pill: "rgba(255,255,255,0.08)",
    pillText: "#e9e9e6",
    time: "#8f8f8b",
    title: "#ffffff",
    who: "#cfcfcb",
    status: "#f26b4b",
  },
  hot: {
    bg: "linear-gradient(148.9deg, #262322 10.7%, #352620 53.6%, #9a442b 82.1%)",
    border: "rgba(242,107,75,0.4)",
    shadow: `0 ${px(8)} ${px(18)} rgba(242,107,75,0.16), inset 0 1px 0 rgba(255,255,255,0.14)`,
    pill: "rgba(255,255,255,0.16)",
    pillText: "#e9e9e6",
    time: "#8f8f8b",
    title: "#ffffff",
    who: "#cfcfcb",
    status: "#f7a98f",
  },
  muted: {
    bg: "linear-gradient(180deg, #2b2b2b, #1a1a1a)",
    border: "rgba(255,255,255,0.06)",
    shadow: `0 ${px(6)} ${px(14)} rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`,
    pill: "rgba(255,255,255,0.08)",
    pillText: "#9a9a96",
    time: "#6f6f6c",
    title: "#9a9a96",
    who: "#777774",
    status: "#c8463a",
  },
} as const;

export function Sales() {
  const s = site.sales;
  return (
    <section id="vertrieb" className="section-y border-t border-[#efefec] bg-white">
      <div className="container-x">
        <p className="text-[13px] font-semibold tracking-[0.1em] text-[#f26b4b]">{s.eyebrow}</p>
        <h2 className="mt-2 max-w-[860px] text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#231f20]">
          <span className="font-semibold">{s.headlineBold}</span> <span className="font-light">{s.headlineLight}</span>
        </h2>
        <p className="mt-5 max-w-[860px] text-[17px] leading-[1.5] text-[#3a3637]">{s.text}</p>

        <p className="mt-8 text-[13px] text-[#8a8a86] lg:hidden" aria-hidden>
          ← {s.swipe} →
        </p>
        <div className="-mx-5 mt-3 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10 lg:mx-0 lg:mt-10 lg:overflow-visible lg:px-0 lg:pb-0">
          <Board />
        </div>
        <p className="mt-4 text-[13px] leading-[1.45] text-[#8a8a86]">{s.note}</p>
      </div>
    </section>
  );
}

function Board() {
  const b = site.sales.board;
  return (
    <Stage
      w={987}
      h={426}
      className="w-full min-w-[920px] rounded-[18px] lg:min-w-0"
      style={{ backgroundImage: "linear-gradient(162.1deg, #242424 0%, #050505 71.4%)", boxShadow: "0 16px 40px -8px rgba(0,0,0,0.25)" }}
    >
      <span aria-hidden className="opacity-50 blur-[4px]" style={{ ...pos(610.97, -376.03, 683.7, 683.7), backgroundImage: `radial-gradient(circle ${px(483.4)} at 50% 50%, ${GLOW})` }} />
      <span aria-hidden className="opacity-25 blur-[2.6px]" style={{ ...pos(-205.11, 243.68, 455.8, 455.8), backgroundImage: `radial-gradient(circle ${px(322.3)} at 50% 50%, ${GLOW})` }} />

      <p style={{ ...pos(18, 14), fontSize: px(9), letterSpacing: px(1.2) }} className="whitespace-nowrap font-semibold uppercase text-[#f26b4b]">
        {b.title}
      </p>
      <p style={{ ...pos(18, 28), fontSize: px(9) }} className="whitespace-nowrap text-[#a8a8a4]">
        {b.sub}
      </p>
      <span style={{ ...pos(883, 14, 86, 18), borderRadius: px(9), borderWidth: px(1) }} className="border-solid border-[rgba(47,143,91,0.5)] bg-[rgba(47,143,91,0.18)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/live.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(8), top: px(5), width: px(6), height: px(6) }} />
        <span style={{ position: "absolute", left: px(19), top: px(3), fontSize: px(7.5) }} className="whitespace-nowrap font-semibold text-[#7ed4a0]">
          {b.live}
        </span>
      </span>

      {b.columns.map((col, i) => (
        <div
          key={col.title}
          style={{ ...pos(18 + i * 192.6, 52, 180.6, 294), borderRadius: px(10), borderWidth: px(1) }}
          className="overflow-hidden border-solid border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)]"
        >
          <span style={{ position: "absolute", left: 0, top: 0, width: "100%", height: px(2), background: col.bar }} />
          <span style={{ position: "absolute", left: px(9), top: px(9), fontSize: px(10) }} className="whitespace-nowrap font-semibold text-[#f4f4f2]">
            {col.title}
          </span>
          <span
            style={{ position: "absolute", left: px(151.6), top: px(8), width: px(18), height: px(16), borderRadius: px(8), fontSize: px(8), lineHeight: px(16) }}
            className="bg-[rgba(255,255,255,0.12)] text-center font-semibold text-[#f4f4f2]"
          >
            {col.cards.length}
          </span>
          {col.cards.map((c, j) => (
            <LeadCard key={c.title} card={c} top={33 + j * 94} />
          ))}
        </div>
      ))}

      {/* Kennzahlen */}
      <div style={{ ...pos(18, 358, 951, 52), borderRadius: px(10), borderWidth: px(1) }} className="border-solid border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)]">
        {b.kpis.map((k, i) => (
          <span key={k.label}>
            {i > 0 && <span style={{ position: "absolute", left: px(190.2 * i - 1), top: px(11), width: px(1), height: px(28) }} className="bg-[rgba(255,255,255,0.1)]" />}
            <span style={{ position: "absolute", left: px(17 + i * 190.2), top: px(8), fontSize: px(16) }} className={`whitespace-nowrap font-semibold ${k.accent ? "text-[#f26b4b]" : "text-[#f4f4f2]"}`}>
              {k.value}
            </span>
            <span style={{ position: "absolute", left: px(17 + i * 190.2), top: px(30), fontSize: px(8.5) }} className="whitespace-nowrap text-[#a8a8a4]">
              {k.label}
            </span>
          </span>
        ))}
      </div>
    </Stage>
  );
}

function LeadCard({ card, top }: { card: Card; top: number }) {
  const t = cardTone[card.tone];
  const at = (x: number, y: number) => ({ position: "absolute" as const, left: px(x), top: px(y) });
  return (
    <div
      style={{ ...at(7, top), width: px(164.6), height: px(86), borderRadius: px(10), borderWidth: px(1), borderColor: t.border, backgroundImage: t.bg, boxShadow: t.shadow }}
      className="overflow-hidden border-solid"
    >
      <span style={{ ...at(9, 8), height: px(14), borderRadius: px(7), paddingLeft: px(6), paddingRight: px(6), gap: px(3), background: t.pill }} className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/quelle-${card.dot}.svg`} alt="" aria-hidden style={{ width: px(6), height: px(6) }} />
        <span style={{ fontSize: px(7), color: t.pillText }} className="whitespace-nowrap font-semibold">
          {card.source}
        </span>
      </span>
      <span style={{ position: "absolute", right: px(9), top: px(10), fontSize: px(7), color: t.time }} className="whitespace-nowrap">
        {card.time}
      </span>
      <span style={{ ...at(9, 27), fontSize: px(10), color: t.title }} className="whitespace-nowrap font-semibold">
        {card.title}
      </span>
      <span style={{ ...at(9, 43), fontSize: px(8.5), color: t.who }} className="whitespace-nowrap">
        {card.who}
      </span>
      {card.value && (
        <span style={{ position: "absolute", right: px(9), top: px(42), fontSize: px(9) }} className="whitespace-nowrap font-semibold text-white">
          {card.value}
        </span>
      )}
      <span style={{ ...at(9, 65), fontSize: px(7.5), color: t.status }} className="whitespace-nowrap">
        {card.status}
      </span>
      {card.tone === "hot" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${IMG}/qualifiziert.svg`} alt="Atex-Scale-qualifiziert" style={{ ...at(139.6, 61), width: px(14), height: px(14) }} />
      )}
    </div>
  );
}
