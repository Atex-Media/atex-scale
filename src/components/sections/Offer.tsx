import { site } from "@/content/site";
import { Stage, figmaScale } from "@/components/figma";

/**
 * Stufe 1 · Angebot (Whitepaper S. 5, Figma „05 Angebot“): links drei Schritte mit Verbindungslinie und die
 * Karte „Schnelle Formulare“, rechts die dunkle Bühne mit der Beispiel-Angebotsseite (Desktop + Smartphone).
 * Die Bühne ist auf ihrer Figma-Fläche (659 × 450) nachgebaut und skaliert mit.
 */
const IMG = "/images/wp/angebot";

export function Offer() {
  const o = site.offer;
  return (
    <section id="angebot" className="section-y bg-white">
      <div className="container-x">
        <p className="text-[13px] font-semibold tracking-[0.1em] text-[#f26b4b]">{o.eyebrow}</p>
        <h2 className="mt-2 max-w-[700px] text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.12] tracking-[-0.02em] text-[#231f20]">
          <span className="font-semibold">{o.headlineBold}</span> <span className="font-light">{o.headlineLight}</span>
        </h2>
        <p className="mt-5 max-w-[700px] text-[17px] leading-[1.5] text-[#4a4a4a]">{o.text}</p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-12">
          <div>
            <ol className="flex flex-col">
              {o.steps.map((st, i) => (
                <li key={st.title} className="relative flex gap-4 pb-7 last:pb-0">
                  {/* Verbindungslinie zum nächsten Schritt */}
                  {i < o.steps.length - 1 && <span aria-hidden className="absolute bottom-0 left-[14.5px] top-9 w-px bg-[#e4e4e0]" />}
                  <span className="relative grid size-[30px] shrink-0 place-items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/schritt.svg`} alt="" aria-hidden className="absolute inset-0 size-full" />
                    <span className="relative text-[13px] font-semibold text-white">{i + 1}</span>
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[17px] font-semibold text-[#231f20]">{st.title}</h3>
                    <p className="mt-1 text-[14.5px] leading-[1.4] text-[#3a3637]">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Karte „Schnelle Formulare“ (Darstellung, kein echtes Formular) */}
            <div className="mt-9 rounded-[12px] border border-[#e4e4e4] bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f26b4b]">{o.form.eyebrow}</p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.25] text-[#231f20]">{o.form.title}</p>
              <div aria-hidden className="mt-4 flex gap-2">
                {o.form.fields.map((f) => (
                  <span key={f} className="flex h-8 min-w-0 flex-1 items-center truncate rounded-[6px] border border-[#dcdcd8] bg-[#f6f6f4] px-2.5 text-[12px] text-[#9a9a96]">
                    {f}
                  </span>
                ))}
                <span className="flex h-8 flex-1 items-center justify-center rounded-[12px] bg-[#f26b4b] text-[12px] font-semibold text-white">{o.form.button}</span>
              </div>
            </div>
          </div>

          <OfferStage />
        </div>
      </div>
    </section>
  );
}

function OfferStage() {
  const s = site.offer.stage;
  const { pos, px } = figmaScale(659, 450);
  return (
    <Stage w={659} h={450} className="w-full rounded-[18px]" style={{ backgroundImage: "linear-gradient(152.9deg, #262626 0%, #050505 71.4%)" }}>
      <span
        aria-hidden
        className="opacity-50 blur-[3.7px]"
        style={{
          ...pos(339.95, -350.96, 638.1, 638.1),
          backgroundImage: `radial-gradient(circle ${px(451.2)} at 50% 50%, rgba(242,107,75,0.38) 0%, rgba(201,71,43,0.149) 45%, rgba(201,71,43,0) 68%)`,
        }}
      />
      <p style={{ ...pos(22, 18), fontSize: px(8.5), letterSpacing: px(1.2) }} className="whitespace-nowrap font-semibold uppercase text-[#f26b4b]">
        {s.eyebrow}
      </p>

      {/* Desktop-Mockup mit Browserleiste */}
      <div
        style={{ ...pos(22, 88, 487.66, 266), borderRadius: px(10), boxShadow: `0 ${px(14)} ${px(30)} rgba(0,0,0,0.5)` }}
        className="overflow-hidden border border-[#3a3a3a] bg-white"
      >
        <span style={{ position: "absolute", left: 0, top: 0, width: "100%", height: px(22) }} className="bg-[#eeeeec]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/punkt-rot.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(9), top: px(6.5), width: px(7), height: px(7) }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/punkt-grau.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(20), top: px(6.5), width: px(7), height: px(7) }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/punkt-grau.svg`} alt="" aria-hidden style={{ position: "absolute", left: px(31), top: px(6.5), width: px(7), height: px(7) }} />
        <span style={{ position: "absolute", left: px(130.67), top: px(5), width: px(224.3), height: px(10), borderRadius: px(5) }} className="bg-white" />
        <span style={{ position: "absolute", left: px(138.67), top: px(5.6), fontSize: px(7), lineHeight: px(9) }} className="whitespace-nowrap text-[#9a9a96]">
          {s.url}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.desktop.src} alt={s.desktop.alt} loading="lazy" style={{ position: "absolute", left: 0, top: px(21), width: "100%", height: px(244) }} className="max-w-none object-cover" />
      </div>

      {/* Smartphone */}
      <div
        style={{ ...pos(494.37, 121.07, 142.63, 310.93), borderRadius: px(19.93), filter: `drop-shadow(0 ${px(18)} ${px(18)} rgba(0,0,0,0.55))` }}
        className="bg-[#1a1a1a]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.mobile.src}
          alt={s.mobile.alt}
          loading="lazy"
          style={{ position: "absolute", left: px(5.31), top: px(5.31), width: px(132), height: px(300.3), borderRadius: px(15.94) }}
          className="max-w-none object-cover"
        />
      </div>

      <p style={{ ...pos(22, 426), fontSize: px(9) }} className="whitespace-nowrap text-[#8a8a86]">
        {s.caption}
      </p>
    </Stage>
  );
}
