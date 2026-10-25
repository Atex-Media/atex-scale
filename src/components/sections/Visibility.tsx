import { site } from "@/content/site";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Stufe 2 · Zielgruppen-Sichtbarkeit (Whitepaper S. 6, Figma „06 Zielgruppen-Sichtbarkeit“):
 * drei Mockups nebeneinander (Google-Treffer auf Platz 1, KI-Antwort mit Quelle, Anzeige auf Foto),
 * darunter je Schlagwort, Titel und Text. Die Mockups sind auf ihren Figma-Flächen nachgebaut.
 */
const IMG = "/images/wp/sichtbar";
const PROFIL_BG = "linear-gradient(154.59deg, rgba(0,0,0,0.2) 41.19%, rgba(1,174,240,0.2) 106.43%), linear-gradient(90deg, #1c1c1c, #1c1c1c)";
type CSS = React.CSSProperties;

export function Visibility() {
  const v = site.visibility;
  return (
    <section id="sichtbarkeit" className="section-y border-t border-[#efefec] bg-white">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-[#f26b4b]">{v.eyebrow}</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.01em] text-[#231f20]">
              {v.headline}
              <br />
              <span className="text-[#f26b4b]">{v.headlineAccent}</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.45] text-[#4a4a4a]">{v.text}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[390fr_284fr_276fr] lg:gap-6">
          {[<SeoMockup key="seo" />, <GeoMockup key="geo" />, <AdsMockup key="ads" />].map((mock, i) => {
            const ch = v.channels[i];
            return (
              <div key={ch.tag} className="mx-auto w-full max-w-[460px] lg:max-w-none">
                {mock}
                <p className="mt-5">
                  <span className="inline-block rounded-full bg-[#fdebe5] px-3 py-1 text-[12px] font-bold text-[#c9472b]">{ch.tag}</span>
                </p>
                <h3 className="mt-3 text-[21px] font-bold leading-[1.25] text-[#231f20]">{ch.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.45] text-[#4a4a4a]">{ch.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Kleines Profilbild „ES“ (Logo im runden Feld) */
function Profil({ style, px, size, logo }: { style: CSS; px: (n: number) => string; size: number; logo: { x: number; y: number; w: number; h: number } }) {
  return (
    <span style={{ ...style, width: px(size), height: px(size), backgroundImage: PROFIL_BG }} className="absolute overflow-hidden rounded-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/logo-klein.png`} alt="" aria-hidden style={{ position: "absolute", left: px(logo.x), top: px(logo.y), width: px(logo.w), height: px(logo.h) }} className="max-w-none object-cover" />
    </span>
  );
}

function SeoMockup() {
  const s = site.visibility.seo;
  const { pos, px } = figmaScale(390, 392);
  // Koordinaten innerhalb des Browserfensters (liegt bei 18/40)
  const at = (x: number, y: number): CSS => ({ position: "absolute", left: px(x), top: px(y) });
  const logoParts = [
    ["logo-1.svg", "30.47% 36.99% 53.72% 37.24%"],
    ["logo-2.svg", "51.55% 17.33% 43.47% 17.58%"],
    ["logo-3.svg", "58.75% 32.43% 37% 32.68%"],
    ["logo-4.svg", "60.67% 71.46% 38.92% 17.58%"],
    ["logo-5.svg", "60.67% 17.33% 38.92% 71.71%"],
    ["logo-6.svg", "66.54% 18.95% 30.66% 19.19%"],
  ];
  return (
    <Stage w={390} h={392} className="w-full rounded-[18px] bg-[#f3f2ef]">
      <p style={{ ...pos(18, 16), fontSize: px(10), letterSpacing: px(1.2), lineHeight: px(13) }} className="whitespace-nowrap font-bold uppercase text-[#8a8580]">
        {s.label}
      </p>
      <div style={{ ...pos(18, 40, 354, 336), borderRadius: px(10), boxShadow: `0 ${px(10)} ${px(28)} rgba(0,0,0,0.14)` }} className="overflow-hidden bg-white">
        {/* Browserleiste */}
        <span style={{ ...at(0, 0), width: "100%", height: px(24) }} className="bg-[#ececec]" />
        {["punkt-1.svg", "punkt-2.svg", "punkt-3.svg"].map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p} src={`${IMG}/${p}`} alt="" aria-hidden style={{ ...at(10 + i * 11, 8), width: px(7), height: px(7) }} />
        ))}
        <span style={{ ...at(50, 5), width: px(240), height: px(14), borderRadius: px(7) }} className="bg-white" />
        <span style={{ ...at(58, 6), fontSize: px(9), lineHeight: px(12) }} className="whitespace-nowrap text-[#6b6b6b]">
          {s.url}
        </span>
        {/* Suchfeld */}
        <span style={{ ...at(14, 36), width: px(326), height: px(30), borderRadius: px(15) }} className="bg-[#f1f3f4]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/lupe.svg`} alt="" aria-hidden style={{ ...at(26, 44), width: px(14), height: px(14) }} />
        <span style={{ ...at(46, 43), fontSize: px(12), lineHeight: px(16) }} className="whitespace-nowrap text-[#231f20]">
          {s.query}
        </span>
        {/* Treffer 1: Ihre Webseite */}
        <div style={{ ...at(14, 78), width: px(326), height: px(122), borderRadius: px(10), borderWidth: px(1.5) }} className="border-solid border-[#f26b4b] bg-[#fff5f1]">
          <Profil px={px} size={19} style={at(10.5, 12.5)} logo={{ x: 3.56, y: 5.79, w: 11.875, h: 7.45 }} />
          <span style={{ ...at(34.5, 10.5), fontSize: px(10), lineHeight: px(13) }} className="whitespace-nowrap text-[#6b6b6b]">
            {s.domain}
          </span>
          <span style={{ ...at(34.5, 22.5), fontSize: px(9), lineHeight: px(12) }} className="whitespace-nowrap text-[#9a9a9a]">
            {s.crumb}
          </span>
          <span style={{ ...at(12.5, 38.5), width: px(200), fontSize: px(13), lineHeight: px(17) }} className="font-bold text-[#1a3fb5]">
            {s.title}
          </span>
          <span style={{ ...at(12.5, 76.5), width: px(200), fontSize: px(10), lineHeight: px(13) }} className="text-[#4a4a4a]">
            {s.desc}
          </span>
          {/* Vorschaubild mit Logo */}
          <span style={{ ...at(223.5, 11.5), width: px(88), height: px(88), borderRadius: px(3), backgroundImage: PROFIL_BG }} className="overflow-hidden">
            {logoParts.map(([src, inset]) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={`${IMG}/${src}`} alt="" aria-hidden style={{ position: "absolute", inset }} className="max-w-none" />
            ))}
          </span>
        </div>
        {/* Abzeichen „1 Platz“ */}
        <span style={{ ...at(312, 64), width: px(36), height: px(36), borderRadius: px(18), filter: `drop-shadow(0 ${px(10)} ${px(14)} rgba(0,0,0,0.25))` }} className="bg-white text-center font-bold">
          <span style={{ position: "absolute", left: 0, right: 0, top: px(4), fontSize: px(16), lineHeight: px(21) }} className="text-[#f26b4b]">
            {s.rank}
          </span>
          <span style={{ position: "absolute", left: 0, right: 0, top: px(22), fontSize: px(6), lineHeight: px(8), letterSpacing: px(0.5) }} className="uppercase text-[#9a9a9a]">
            {s.rankLabel}
          </span>
        </span>
        {/* Mitbewerber */}
        {[214, 262].map((y) => (
          <span key={y}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/punkt-treffer.svg`} alt="" aria-hidden style={{ ...at(14, y), width: px(16), height: px(16) }} />
            <span style={{ ...at(36, y + 2), width: px(110), height: px(7), borderRadius: px(4) }} className="bg-[#d9d9d9]" />
            <span style={{ ...at(14, y + 20), width: px(190), height: px(9), borderRadius: px(4) }} className="bg-[#cfcfcf]" />
            <span style={{ ...at(14, y + 34), width: px(280), height: px(6), borderRadius: px(3) }} className="bg-[#e6e6e6]" />
          </span>
        ))}
        <span style={{ ...at(14, 312), fontSize: px(10), lineHeight: px(13) }} className="whitespace-nowrap font-semibold text-[#c9472b]">
          {s.footer}
        </span>
      </div>
    </Stage>
  );
}

function GeoMockup() {
  const g = site.visibility.geo;
  const { pos, px } = figmaScale(284, 392);
  return (
    <Stage w={284} h={392} className="w-full rounded-[18px] bg-[#101013]">
      <p style={{ ...pos(18, 16), fontSize: px(10), letterSpacing: px(1.2), lineHeight: px(13) }} className="whitespace-nowrap font-bold uppercase text-[#7d7d84]">
        {g.label}
      </p>
      <p style={{ ...pos(18, 38), fontSize: px(12), lineHeight: px(16) }} className="whitespace-pre font-semibold text-[#bdbdc4]">
        {g.model}
      </p>
      <div style={{ ...pos(70, 66, 196, 54), borderRadius: `${px(16)} ${px(16)} ${px(4)} ${px(16)}` }} className="bg-[#2b2b30]">
        <p style={{ position: "absolute", left: px(12), top: px(9), width: px(172), fontSize: px(12), lineHeight: px(17) }} className="text-[#f2f2f2]">
          {g.question}
        </p>
      </div>
      <span style={{ ...pos(18, 140, 24, 24), borderRadius: px(12) }} className="bg-[#f26b4b]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/sparkle.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(5), top: px(5), width: px(14), height: px(14) }} />
      </span>
      <p style={{ ...pos(52, 138, 214), fontSize: px(12), lineHeight: px(17) }} className="text-[#e6e6ea]">
        {g.answerBefore}
        <strong className="font-bold text-[#f26b4b]">{g.answerName}</strong>
        {g.answerAfter}
      </p>
      <div style={{ ...pos(52, 232, 176, 26), borderRadius: px(13), borderWidth: px(1) }} className="border-solid border-[#34343a] bg-[#1d1d22]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/globus.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(9), top: px(6), width: px(12), height: px(12) }} />
        <span style={{ position: "absolute", left: px(27), top: px(4), fontSize: px(11), lineHeight: px(14) }} className="whitespace-nowrap font-semibold text-[#d6d6dc]">
          {g.source}
        </span>
      </div>
      <span style={pos(52, 270, 2, 14)} className="animate-pulse bg-[#f26b4b] motion-reduce:animate-none" aria-hidden />
      <p style={{ ...pos(18, 296, 248), fontSize: px(10), lineHeight: px(13) }} className="text-[#8a8a92]">
        {g.note}
      </p>
      <div style={{ ...pos(18, 336, 248, 40), borderRadius: px(20), borderWidth: px(1) }} className="border-solid border-[#2e2e35] bg-[#1a1a1f]">
        <span style={{ position: "absolute", left: px(15), top: px(10), fontSize: px(12), lineHeight: px(16) }} className="whitespace-nowrap text-[#6f6f78]">
          {g.input}
        </span>
        <span style={{ position: "absolute", left: px(205), top: px(5), width: px(28), height: px(28), borderRadius: px(14) }} className="bg-[#f26b4b]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/pfeil.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(8), top: px(8), width: px(12), height: px(12) }} />
        </span>
      </div>
    </Stage>
  );
}

function AdsMockup() {
  const a = site.visibility.ads;
  const { pos, px } = figmaScale(276, 392);
  return (
    <Stage w={276} h={392} className="w-full rounded-[18px] bg-[#cdc6be]">
      {/* Werbefoto mit dunkler Lasur */}
      <div style={{ ...pos(-66, 0, 365.74, 392.28), borderRadius: px(7.4) }} className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a.photo} alt="Monteur eines Elektrobetriebs als Werbefoto" loading="lazy" className="absolute inset-0 size-full max-w-none object-cover" />
        <span className="absolute inset-0 bg-[rgba(10,24,29,0.54)]" />
      </div>
      <span style={pos(0, 160, 276, 232)} className="bg-[linear-gradient(180deg,rgba(35,31,32,0),rgba(35,31,32,0.85))]" />
      <span style={{ ...pos(18, 16, 146, 22), borderRadius: px(11), fontSize: px(10), lineHeight: px(22), letterSpacing: px(1) }} className="bg-[rgba(35,31,32,0.78)] text-center font-bold uppercase text-white">
        {a.label}
      </span>
      <span style={{ ...pos(18, 48, 116, 24), borderRadius: px(12), fontSize: px(10), lineHeight: px(24) }} className="bg-[rgba(255,255,255,0.95)] text-center font-bold text-[#231f20]">
        {a.channels}
      </span>
      {/* Anzeige */}
      <div
        style={{ ...pos(18, 238, 240, 136), borderRadius: px(12), borderWidth: px(1), filter: `drop-shadow(0 ${px(10)} ${px(14)} rgba(0,0,0,0.3))` }}
        className="border-solid border-[rgba(0,0,0,0.26)] bg-[rgba(27,28,29,0.68)]"
      >
        <Profil px={px} size={26} style={{ position: "absolute", left: px(13), top: px(9) }} logo={{ x: 4.88, y: 7.92, w: 16.25, h: 10.19 }} />
        <span style={{ position: "absolute", left: px(45), top: px(9), fontSize: px(11), lineHeight: px(14) }} className="whitespace-nowrap font-bold text-white">
          {a.account}
        </span>
        <span style={{ position: "absolute", left: px(45), top: px(22), fontSize: px(9), lineHeight: px(12) }} className="whitespace-nowrap text-[#6b6b6b]">
          {a.sponsored}
        </span>
        <span style={{ position: "absolute", left: px(13), top: px(45), width: px(212), fontSize: px(11), lineHeight: px(15) }} className="text-[#bdbdbd]">
          {a.text}
        </span>
        <span style={{ position: "absolute", left: px(13), top: px(95), width: px(212), height: px(28), borderRadius: px(8), fontSize: px(12), lineHeight: px(28) }} className="bg-[#00aeef] text-center font-bold text-white">
          {a.button}
        </span>
      </div>
      <span
        style={{ ...pos(150, 196, 108, 30), borderRadius: px(15), fontSize: px(11), lineHeight: px(30), filter: `drop-shadow(0 ${px(10)} ${px(14)} rgba(0,0,0,0.25))` }}
        className="bg-white text-center font-bold text-[#c9472b]"
      >
        {a.hint}
      </span>
    </Stage>
  );
}
