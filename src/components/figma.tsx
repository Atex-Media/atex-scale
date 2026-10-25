import type { CSSProperties, ReactNode } from "react";

/**
 * Hilfen, um Grafiken aus dem Whitepaper-Figma maßstabsgetreu nachzubauen.
 * Eine Zeichenfläche hat die Maße aus Figma (w × h). Positionen werden in Prozent der Fläche
 * angegeben, Schriftgrößen und Abstände in cqw (Prozent der Flächenbreite). So skaliert die Grafik
 * mit ihrem Container und behält auf jedem Bildschirm exakt die Proportionen aus Figma.
 */
export function figmaScale(w: number, h: number) {
  const pos = (x: number, y: number, bw?: number, bh?: number): CSSProperties => ({
    position: "absolute",
    left: `${(x / w) * 100}%`,
    top: `${(y / h) * 100}%`,
    ...(bw !== undefined ? { width: `${(bw / w) * 100}%` } : {}),
    ...(bh !== undefined ? { height: `${(bh / h) * 100}%` } : {}),
  });
  /** Länge in Figma-Pixeln → relativ zur Breite der Zeichenfläche */
  const px = (n: number) => `${(n / w) * 100}cqw`;
  return { pos, px };
}

/** Zeichenfläche: feste Seitenverhältnisse aus Figma, Container für cqw-Einheiten */
export function Stage({ w, h, className = "", style, children }: { w: number; h: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className={`@container relative overflow-hidden ${className}`} style={{ aspectRatio: `${w} / ${h}`, ...style }}>
      {children}
    </div>
  );
}
