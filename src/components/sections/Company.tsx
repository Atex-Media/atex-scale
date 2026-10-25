import { site } from "@/content/site";

/**
 * Über Atex Media (Whitepaper S. 3, Figma „03 Über uns“): links Adresse, Überschrift, Text und Siegel,
 * rechts die Kennzahlen mit hell hinterlegtem Anfang, darunter das Gebäudefoto. Der Himmel im Foto ist
 * transparent, so scheint der orange Verlauf oben links durch. Ab xl liegt der Text wie im Figma über dem Himmel.
 */
export function Company() {
  const c = site.company;
  const b = c.badges;
  return (
    <section id="ueber" className="relative overflow-hidden bg-[#f7f7f7]">
      {/* Orange Schein oben links (Figma „glow“) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 aspect-[1123/794] blur-[5px]"
        style={{ backgroundImage: "radial-gradient(ellipse 110% 77% at 9% -23%, rgba(242,107,75,0.3) 0%, rgba(242,107,75,0) 65%)" }}
      />

      <div className="container-x relative z-10 grid gap-10 pt-16 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-16 xl:absolute xl:inset-x-0 xl:top-0 xl:pt-[6.5%]">
        <div>
          <p className="flex items-center gap-1.5 text-[14px] font-semibold text-[#f26b4b]">
            <span aria-hidden>📍</span>
            {c.address}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[#231f20]">{c.headline}</h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.5] text-[#6b6869]">{c.text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.bafa.src} alt={b.bafa.alt} width={64} height={64} className="size-16 shrink-0 rounded-full" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.certified.src} alt={b.certified.alt} width={109} height={20} className="h-[26px] w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.premium.src} alt={b.premium.alt} width={113} height={23} className="h-[29px] w-auto" />
          </div>
        </div>

        <ul className="flex flex-col gap-4 text-[16px] leading-[1.25] text-[#464646] lg:items-end lg:text-right">
          {c.facts.map((f) => (
            <li key={f.mark + f.rest} className="max-w-[260px]">
              {f.mark && <span className="bg-[#fdebe5] [box-decoration-break:clone] px-0.5">{f.mark}</span>}
              {f.mark && f.rest ? " " : ""}
              {f.rest}
            </li>
          ))}
        </ul>
      </div>

      {/* Gebäudefoto: unter xl unter dem Text, ab xl über die ganze Sektion */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.photo.src} alt={c.photo.alt} width={1600} height={1067} loading="lazy" className="relative -mt-[6%] block w-full xl:mt-[2%]" />
    </section>
  );
}
