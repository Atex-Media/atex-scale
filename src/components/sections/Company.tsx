import { site } from "@/content/site";
import { Icon } from "@/components/icons";

/**
 * Über Atex Media (Whitepaper S. 3): links Adresse, Überschrift, Text, vier Kennzahl-Kacheln und die Siegel,
 * rechts das Gebäudefoto in einer Karte. Der Himmel im Foto ist transparent, dahinter liegt ein heller oranger Verlauf.
 */
export function Company() {
  const c = site.company;
  const b = c.badges;
  return (
    <section id="ueber" className="section-y border-t border-[#efefec] bg-white">
      <div className="container-x grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-1.5 text-[14px] font-semibold text-[#f26b4b]">
            <Icon.pin className="size-4 shrink-0" />
            {c.address}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.4vw,2.75rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[#231f20]">{c.headline}</h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.5] text-[#6b6869]">{c.text}</p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {c.facts.map((f) => (
              <li key={f.value} className="rounded-[14px] border border-[#f1ece9] bg-[#fbf9f8] p-4 sm:p-5">
                <p className="text-[clamp(1.6rem,2.4vw,2rem)] font-bold leading-none tracking-[-0.02em] text-[#231f20]">
                  {f.value.endsWith("+") ? (
                    <>
                      {f.value.slice(0, -1)}
                      <span className="text-[#f26b4b]">+</span>
                    </>
                  ) : (
                    f.value
                  )}
                </p>
                <p className="mt-2 text-[13px] leading-[1.35] text-[#6b6869] sm:text-[14px]">{f.label}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.bafa.src} alt={b.bafa.alt} width={64} height={64} className="size-14 shrink-0 rounded-full" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.certified.src} alt={b.certified.alt} width={109} height={20} className="h-[24px] w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.premium.src} alt={b.premium.alt} width={113} height={23} className="h-[27px] w-auto" />
            <a href={c.more.href} className="basis-full text-[15px] font-semibold text-[#231f20] underline-offset-4 hover:underline sm:ml-auto sm:basis-auto">
              {c.more.label} ›
            </a>
          </div>
        </div>

        {/* Foto-Karte: oranger Himmel hinter dem freigestellten Gebäude */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#f1ece9] lg:aspect-auto lg:min-h-[520px]"
          style={{ backgroundImage: "radial-gradient(ellipse 90% 70% at 15% 0%, rgba(242,107,75,0.32) 0%, rgba(242,107,75,0) 70%), linear-gradient(180deg, #fde7df 0%, #fbf3f0 55%, #f7f5f4 100%)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.photo.src}
            alt={c.photo.alt}
            width={1400}
            height={932}
            loading="lazy"
            className="absolute inset-x-0 bottom-0 h-[88%] w-full object-cover object-bottom"
          />
          <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-[#231f20] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <Icon.building className="size-3.5 text-[#f26b4b]" />
            {c.photoLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
