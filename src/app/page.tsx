import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Problem } from "@/components/sections/Problem";
import { Company } from "@/components/sections/Company";
import { Platform } from "@/components/sections/Platform";
import { Process } from "@/components/sections/Process";
import { Audiences } from "@/components/sections/Audiences";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

/**
 * Seitenaufbau nach dem Whitepaper „Neue Kunden gewinnen“ (Figma „Atex Whitepaper Webseiten“):
 * Hero → Logo-Band → Der Engpass → Über Atex Media → Das System → Stufe 1 Angebot → Stufe 2 Sichtbarkeit
 * → Stufe 3 Vertrieb → Privat- und Geschäftskunden → Der Ablauf → Schluss mit Formular → Footer
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Problem />
        <Company />
        <Platform />
        <Audiences />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
