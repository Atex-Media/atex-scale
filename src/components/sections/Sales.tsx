import { site } from "@/content/site";
import { SalesBoard } from "@/components/sections/SalesBoard";

/**
 * Stufe 3 · Vertrieb & Automatisierung (Whitepaper S. 7, Figma „07 Vertrieb & Automatisierung“):
 * dunkles Anfragen-Board mit fünf Spalten (neu, qualifiziert, kontaktiert, abgeschlossen, abgelehnt) und Kennzahlen.
 * Die Karten lassen sich verschieben (SalesBoard); auf schmalen Bildschirmen lässt sich das Board seitlich wischen.
 */
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

        <SalesBoard />
        <p className="mt-1 text-[13px] leading-[1.45] text-[#8a8a86]">{s.note}</p>
      </div>
    </section>
  );
}
