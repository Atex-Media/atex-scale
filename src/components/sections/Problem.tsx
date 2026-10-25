import { site } from "@/content/site";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Der Engpass (Whitepaper S. 2, Figma „02 Der Engpass“): vier Karten mit Mini-Grafik oben
 * (Säulen, Suche ohne Treffer, unpassende Anfragen, niemand zuständig), darunter ein helles Band mit Button.
 * Die Mini-Grafiken sind auf ihrer Figma-Fläche (198 × 180) nachgebaut und skalieren mit der Karte.
 */
const IMG = "/images/wp/engpass";
const W = 198;
const H = 180;
const { pos, px } = figmaScale(W, H);

const ink = "#231f20";
const red = "#c9411c";
const boxStyle = {
  background: "#fff",
  border: "1px solid #e7bfb1",
  boxShadow: "0 4px 6px rgba(201,71,43,0.08)",
} as const;

export function Problem() {
  const p = site.problem;
  const [c1, c2, c3, c4] = p.cards;
  return (
    <section id="engpass" className="section-y bg-[#f3f3f3]">
      <div className="container-x">
        <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f26b4b]">{p.eyebrow}</p>
        <h2 className="mt-2 max-w-[760px] text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#231f20]">{p.headline}</h2>
        <p className="mt-5 max-w-[700px] text-[17px] leading-[1.5] text-[#3a3637]">{p.text}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card n={1} title={c1.title} text={c1.text}>
            <Trend src="trend-1a.svg" y={28.5} h={55} />
            <Trend src="trend-1b.svg" y={94.5} h={55} />
            <p style={{ ...pos(11, 38), fontSize: px(9.5), lineHeight: 1.3, color: "#5e4238" }} className="whitespace-nowrap">
              {c1.chartLabel}
            </p>
            {[
              [13, 89, 49, false],
              [35, 117, 21, true],
              [57, 78.5, 59.5, false],
              [79, 129.6, 8.4, true],
              [101, 96, 42, false],
              [123, 110, 28, false],
            ].map(([x, y, bh, hot]) => (
              <span
                key={x as number}
                style={{
                  ...pos(x as number, y as number, 14, bh as number),
                  borderRadius: px(3),
                  backgroundImage: hot ? "linear-gradient(180deg,#f26b4b,#c4441f)" : "linear-gradient(180deg,#f2cfc3,#dba493)",
                }}
              />
            ))}
          </Card>

          <Card n={2} title={c2.title} text={c2.text}>
            <Trend src="trend-2.svg" y={38.5} h={57} />
            <div style={{ ...pos(11, 40, 134.2, 28), ...boxStyle, borderRadius: px(8) }}>
              <p style={{ position: "absolute", left: px(10), top: px(8), fontSize: px(9), color: ink }} className="whitespace-pre">
                🔍  {c2.search}
              </p>
            </div>
            <span style={{ ...pos(11, 80, 107.36, 6), background: "#e6b6a6", borderRadius: px(3) }} />
            <span style={{ ...pos(11, 91, 134.2, 6), background: "#e6b6a6", borderRadius: px(3) }} />
            <span style={{ ...pos(11, 102, 93.94, 6), background: "#e6b6a6", borderRadius: px(3) }} />
            <p style={{ ...pos(11, 120), fontSize: px(9), color: red }} className="whitespace-nowrap font-semibold">
              ✕ {c2.notFound}
            </p>
          </Card>

          <Card n={3} title={c3.title} text={c3.text}>
            <Trend src="trend-3.svg" y={28.5} h={59} />
            {c3.messages.map((m, i) => (
              <div key={m.tag} style={{ ...pos(11, i === 0 ? 38 : 92, 134.2, 48), ...boxStyle, borderRadius: px(8) }}>
                <p style={{ position: "absolute", left: px(7), top: px(4), width: px(118.2), fontSize: px(9), lineHeight: 1.2, color: ink }}>{m.text}</p>
                <p style={{ position: "absolute", left: px(7), top: px(31), fontSize: px(8.5), color: red }} className="whitespace-nowrap font-semibold">
                  ✕ {m.tag}
                </p>
              </div>
            ))}
          </Card>

          <Card n={4} title={c4.title} text={c4.text}>
            <Trend src="trend-4.svg" y={34.5} h={57} />
            {[
              [10.75, 42, 45, c4.roles.left[0]],
              [138.75, 42, 44, c4.roles.right[0]],
              [10.75, 76, 45, c4.roles.left[1]],
              [138.75, 76, 44, c4.roles.right[1]],
              [138.75, 110, 44, c4.roles.right[2]],
            ].map(([x, y, bw, label]) => (
              <div key={label as string} style={{ ...pos(x as number, y as number, bw as number, 24), ...boxStyle, borderRadius: px(5) }}>
                <p style={{ position: "absolute", left: px(5), top: px(5), fontSize: px(8.5), color: ink }} className="whitespace-nowrap">
                  {label}
                </p>
              </div>
            ))}
            {[45, 81].map((y) => (
              <p key={y} style={{ ...pos(70.75, y), fontSize: px(8.5), color: red }} className="whitespace-nowrap font-semibold">
                {c4.roles.arrow}
              </p>
            ))}
            {[56.3, 91.3].map((y) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={y} src={`${IMG}/pfeil.svg`} alt="" aria-hidden style={pos(61.75, y, 70.5, 7.36)} className="max-w-none" />
            ))}
            <p style={{ ...pos(11, 116, 134.2), fontSize: px(8.5), lineHeight: 1.2, color: "#5e4238" }}>{c4.roles.nobody}</p>
          </Card>
        </div>

        {/* Band mit Fazit und Button */}
        <div className="mt-6 flex flex-col gap-4 rounded-[14px] border border-[#f1dcd4] bg-[linear-gradient(90deg,#ffffff,#fff0ea)] px-6 py-5 shadow-[0_8px_12px_rgba(201,71,43,0.06)] md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="max-w-[860px] text-[16px] leading-[1.45] text-[#231f20]">{p.band}</p>
          <a
            href={site.contact.bookingHref}
            className="shrink-0 self-start rounded-[8px] bg-[linear-gradient(90deg,#f6845f,#d4522e)] px-6 py-3 text-center text-[15px] font-semibold text-white shadow-[0_6px_8px_rgba(201,71,43,0.25)] transition-transform hover:-translate-y-px md:self-auto"
          >
            {p.cta} ›
          </a>
        </div>
      </div>
    </section>
  );
}

/* Karte: Mini-Grafik oben (Figma-Fläche), Titel und Text darunter */
function Card({ n, title, text, children }: { n: number; title: string; text: string; children: React.ReactNode }) {
  return (
    <article className="flex flex-col gap-3.5 rounded-[14px] border border-[#f1dcd4] bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_55%,#fff3ee_100%)] p-4 shadow-[0_10px_14px_rgba(201,71,43,0.07)]">
      <Stage
        w={W}
        h={H}
        className="w-full rounded-[12px] border border-[#efc9bc]"
        style={{ backgroundImage: "linear-gradient(137.7deg, #fffaf8 14.3%, #ffece5 85.7%)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/glow.svg`} alt="" aria-hidden style={pos(76.75, 69, 220, 220)} className="max-w-none" />
        {children}
        {/* Nummer oben rechts */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/badge.svg`} alt="" aria-hidden style={pos(154.75, 4, 40, 40)} className="max-w-none" />
        <span
          style={{ ...pos(162.75, 9, 24, 24), fontSize: px(12), lineHeight: px(24) }}
          className="text-center font-bold text-white"
          aria-hidden
        >
          {n}
        </span>
      </Stage>
      <h3 className="text-[19px] font-semibold leading-[1.2] text-[#231f20]">{title}</h3>
      <p className="text-[14.5px] leading-[1.45] text-[#3a3637]">{text}</p>
    </article>
  );
}

/* Gestrichelte Trendlinie im Hintergrund der Mini-Grafik */
function Trend({ src, y, h }: { src: string; y: number; h: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`${IMG}/${src}`} alt="" aria-hidden style={pos(-1, y, 198.75, h)} className="max-w-none" />;
}
