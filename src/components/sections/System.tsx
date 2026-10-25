import { site } from "@/content/site";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Das System (Whitepaper S. 4, Figma „04 Das System“): drei dunkle Stufen-Karten mit Grafik und Pfeilen,
 * darunter die Ergebnis-Leiste („Atex-Scale-qualifizierte Anfragen“) und der Maßstab, rechts die Karte
 * „Nachhaltig“ mit Webseite, Handy und Kanal-Symbolen. Stufen-Karten skalieren auf ihrer Figma-Fläche (206 × 284).
 */
const IMG = "/images/wp/system";
const GLOW = "rgba(242,107,75,0.38) 0%, rgba(201,71,43,0.149) 45%, rgba(201,71,43,0) 68%";

const stage = figmaScale(206, 284);
// Grafik je Stufe: Lage und Größe aus Figma (inklusive Überstand der Grafik)
const graphics = [
  { src: "grafik-angebot.svg", x: -20, y: 66, w: 238.4, h: 260 },
  { src: "grafik-sichtbarkeit.svg", x: -22, y: 66, w: 298, h: 290 },
  { src: "grafik-vertrieb.svg", x: -18, y: 72, w: 230, h: 218 },
];

export function System() {
  const s = site.system;
  return (
    <section
      id="leistungen"
      className="section-y text-white"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(102,102,102,0) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(90deg, #6a6a6a, #6a6a6a)" }}
    >
      <div className="container-x">
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f26b4b]">{s.eyebrow}</p>
        <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.12] tracking-[-0.02em]">
          <span className="font-semibold">{s.headlineBold}</span> <span className="font-light">{s.headlineLight}</span>
        </h2>
        <p className="mt-5 max-w-[720px] text-[17px] leading-[1.5] text-[#cfcfcf]">{s.text}</p>

        <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,682fr)_minmax(0,273fr)]">
          <div>
            <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-2">
              {s.stages.map((st, i) => (
                <StageCard key={st.title} n={i + 1} title={st.title} text={st.text} graphic={graphics[i]} arrow={i < s.stages.length - 1} />
              ))}
            </div>

            {/* Ergebnis-Leiste */}
            <div
              className="mt-6 flex flex-col gap-1 rounded-[12px] px-5 py-4 shadow-[0_0_8px_rgba(242,107,75,0.27)] md:flex-row md:items-center md:justify-between md:gap-6"
              style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.73), rgba(0,0,0,0.73)), linear-gradient(95.4deg, #f26b4b 9%, #442016 90%)" }}
            >
              <p className="flex items-center gap-3 text-[17px] font-semibold">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/qualifiziert.svg`} alt="" aria-hidden width={22} height={22} className="size-[26px] shrink-0" />
                {s.result.title}
              </p>
              <p className="pl-[38px] text-[15px] text-[#ffe4db] md:pl-0 md:text-right">{s.result.text}</p>
            </div>

            {/* Maßstab */}
            <p className="mt-4 rounded-[12px] bg-[linear-gradient(90deg,#1c1c1c,#000000)] px-5 py-4 text-[15px] font-semibold leading-[1.4] text-[#e6e6e2] shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
              {s.definition}
            </p>
          </div>

          <Lasting />
        </div>
      </div>
    </section>
  );
}

/* Stufen-Karte: Glow oben, Grafik unten, Nummer, Titel und Text (alles auf der Figma-Fläche) */
function StageCard({
  n,
  title,
  text,
  graphic,
  arrow,
}: {
  n: number;
  title: string;
  text: string;
  graphic: (typeof graphics)[number];
  arrow: boolean;
}) {
  const { pos, px } = stage;
  return (
    <>
      <Stage w={206} h={284} className="mx-auto w-full max-w-[320px] rounded-[16px] md:max-w-[360px] bg-[linear-gradient(180deg,#1c1c1c,#000000)] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        <span
          aria-hidden
          className="opacity-55 blur-[2px]"
          style={{ ...pos(1.81, -68.06, 340.3, 340.3), backgroundImage: `radial-gradient(circle ${px(240.6)} at 50% 50%, ${GLOW})` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/${graphic.src}`} alt="" aria-hidden style={pos(graphic.x, graphic.y, graphic.w, graphic.h)} className="max-w-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/nummer.svg`} alt="" aria-hidden style={pos(18, 18, 28, 28)} />
        <span style={{ ...pos(18, 18, 28, 28), fontSize: px(12), lineHeight: px(28) }} className="text-center font-semibold" aria-hidden>
          {n}
        </span>
        <div style={{ ...pos(18, 56, 170), gap: px(5) }} className="flex flex-col">
          <h3 style={{ fontSize: `clamp(18px, ${px(17)}, 22px)`, lineHeight: 1.3 }} className="font-semibold">
            {title}
          </h3>
          <p style={{ fontSize: `clamp(13px, ${px(11.5)}, 16px)`, lineHeight: 1.4 }} className="text-[#cfcfcf]">
            {text}
          </p>
        </div>
      </Stage>
      {arrow && (
        <span aria-hidden className="hidden text-[24px] leading-none text-[#b8bcc4] md:block">
          →
        </span>
      )}
    </>
  );
}

/* Karte „Nachhaltig“: Text oben, darunter Webseite, SEO-Leiste, Handy und Kanal-Symbole (Figma-Fläche ab y = 210) */
function Lasting() {
  const l = site.system.lasting;
  const { pos, px } = figmaScale(273, 226);
  const y = (v: number) => v - 210;
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#1c1c1c,#000000)] md:flex-row xl:flex-col">
      <div className="relative z-10 p-6 md:w-1/2 xl:w-auto">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f26b4b]">{l.eyebrow}</p>
        <h3 className="mt-2 text-[22px] font-semibold leading-[1.18]">{l.title}</h3>
        <p className="mt-4 text-[15px] leading-[1.45] text-[#cfcfcf]">{l.text}</p>
      </div>
      <Stage w={273} h={226} className="mt-auto w-full md:w-1/2 md:self-end xl:w-full">
        <span
          aria-hidden
          className="opacity-55 blur-[2px]"
          style={{ ...pos(55.74, y(139.74), 395, 395), backgroundImage: `radial-gradient(circle ${px(279.3)} at 50% 50%, ${GLOW})` }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/webseite.jpg`} alt="" aria-hidden style={{ ...pos(78, y(239), 223, 223), borderRadius: px(2.6) }} className="max-w-none object-cover" />
        <div style={{ ...pos(91.97, y(353.24), 195.06, 24.66), borderRadius: px(2.6) }} className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/seo-leiste.png`} alt="" aria-hidden style={{ position: "absolute", left: "-4.99%", top: "-16.67%", width: "116.24%", height: "134.21%" }} className="max-w-none" />
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
        <img src={`${IMG}/handy.png`} alt="" aria-hidden style={pos(20, y(294), 170.88, 143.59)} className="max-w-none object-cover" />
      </Stage>
    </div>
  );
}
