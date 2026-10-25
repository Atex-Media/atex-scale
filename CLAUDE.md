@AGENTS.md
@ATEX-WEBSITE-PROZESS.md

# Atex Scale – Projektnotizen für Claude

## Was das ist
Landingpage der Marke **Atex Scale** (Neukundengewinnung für den Mittelstand). Rechtsträger: Atex Media GmbH,
Kumpfmühler Str. 15, 93047 Regensburg, GF Daniel Meier. Schwesterprojekt von **AtexJobs** (`~/Documents/atexjobs`,
Repo `vndno/atexjobs`, live www.atex-jobs.de) – gleiche Komponenten, gleiche Optik, **Akzentfarbe Orange statt Blau**.

- Repo: `Atex-Media/atex-scale` (GitHub-Organisation, öffentlich; vorher `vndno/atex-scale`), Branch `main` → https://atex-scale.vercel.app
- Vercel-Projekt `atex-scale` (Team „Atex Media GmbH“, Slug `atexmedia`). Env: CLOSE_API_KEY, RESEND_API_KEY, NOTIFY_TO.
- Stand 25.10.2026: Vercel baut nach einem Push NICHT automatisch (Git-Verknüpfung zeigt noch auf vndno/atex-scale).
  Builds per Vercel-Tool `create_deployment` (gitSource github, org Atex-Media, repo atex-scale, ref main, sha) anstoßen.
- Live-Seite blockt curl mit „Vercel Security Checkpoint“ → Live-Prüfung im Browser-Pane, Deploy-Status über Vercel-Tool.
- Domain: noch keine (später z. B. atex-scale.de → dann NEXT_PUBLIC_SITE_URL setzen).

## Branding
- Logo: „Atex“ fett dunkelgrau (#3a3a3a), „Scale“ dünn in Orange. Wortmarke = `brand.name` + `brand.nameAccent` in site.ts.
- Tokens in `src/app/globals.css`: accent **#f26a4a**, accent-strong #dd4f2d, accent-soft #fbd3c8. Rest identisch mit AtexJobs
  (Navy #0e1721, Creme, Surface …). Hintergrund-Verläufe dürfen orange getönt sein. Grün (#66a182) bleibt für „läuft/geprüft“.
- Schrift Myriad Pro (Adobe Fonts Kit uei1ums), Fallback Source Sans 3. Headline-Muster: fetter Teil + dünner Teil (`h-light`).
- Favicon: orange Kugel auf warmem Verlauf (`src/app/icon.svg` → icon.png/apple-icon.png via qlmanage + sips).

## Arbeitsregeln (vom Auftraggeber Daniel Meier, nicht technisch, Deutsch)
- **Keine Texte, Bilder oder 1:1-Designs von fremden Seiten übernehmen.** Referenzseiten (z. B. trimando.at) liefern nur
  Aufbau, Reihenfolge und Argumentation; Wording, Grafiken und Zahlen sind immer eigene. Grafiken dürfen „ähnlich nachgebaut“
  werden, aber in unserer Optik (Komponentenstil von AtexJobs, Orange).
- Alle Inhalte in `src/content/site.ts`, Rechtstexte in `src/content/legal.ts`. Komponenten enthalten keine Inhalte.
  Unbestätigte Zahlen mit `// TODO prüfen` markieren, nie als Fakt erfinden.
- Bezeichnungen, die der Auftraggeber festgelegt hat, nicht eigenmächtig ändern (z. B. „Zusage möglich“, „Markt-Score“).
- Jede Änderung: commit + push auf `main`, dann live prüfen und auf Deutsch berichten. Commit-Trailer:
  `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.
- API-Schlüssel werden nie im Chat verwendet; nur der Auftraggeber trägt sie in Vercel ein.

## Technik & Prüfen
- Node 24 liegt unter /usr/local/bin. Projektordner in ~/Documents nicht mit node_modules füllen: für Tests eine Kopie im
  Scratchpad anlegen (`rsync` ohne .git/node_modules/.next, dort `npm ci`, dann `npx next build`). ESLint meldet 3 Altfehler in
  ConsentBanner/ContactModal/BookingWidget (set-state-in-effect) – bewusst unverändert, der Build prüft ESLint nicht.
- Vorschau: `next start` des Produktions-Builds (der Dev-Server lieferte einmal veraltetes Tailwind-CSS). Screenshots per
  Headless-Chrome (`--headless=new --screenshot --window-size=1440,12500`); unter ~500 px Breite schneidet Headless-Chrome ab →
  Handy nur per Browser-Pane-Emulation (375 px) und DOM-Messung prüfen.
- Nach dem Push: `curl` gegen https://atex-scale.vercel.app pollen (Deploy ~30–40 s), DOM mit dem Browser-Pane
  (`javascript_tool`) messen. Screenshots dieser Origin schlagen oft fehl → Text/DOM prüfen.
- Build-Fehler: Vercel-Dashboard im Chrome des Nutzers (claude-in-chrome) öffnen → Projekt atex-scale → Deployments →
  Eintrag anklicken → Build Logs lesen. Tabs danach schließen. Erster Fehler war eine leere NEXT_PUBLIC_SITE_URL (behoben).
- TypeScript: `site.ts` ist `as const`; Sektionen greifen fest auf Schlüssel zu → beim Umbauen von site.ts Komponenten
  mitprüfen (`grep` nach den Schlüsseln), sonst bricht der Vercel-Build.
- Bildbearbeitung ohne PIL: `sips` (Größe/Format/Zuschnitt), `qlmanage` (SVG→PNG). Figma-Datei (AtexJobs-Kacheln):
  Key `Yu46JDPRhYAeTIREiUrGN9`; Uploads per `curl -F` nur als einzelne Top-Level-Befehle.
- Kontaktformular → `src/app/api/anfrage/route.ts`: Close-Lead mit Lead-Quelle „Inbound: Webseite - AtexScale“,
  Lead-Kanal „Website“; Mail über Resend (Absender anfrage@versand.atex-media.de, Domain ist verifiziert).

## Aufbau der Startseite (seit 25.10.2026 nach dem Whitepaper „Neue Kunden gewinnen“)
Figma: Datei `pNNIkRVJ3qXkFiXB3PZmZP` („Atex Whitepaper Webseiten“), Seite „Whitepaper Scale“ (node 79-10804).
Hero (Layout alt, ohne Grafik) → Logo-Band → `#engpass` (4 Karten) → `#ueber` Über Atex Media → `#leistungen` Das System →
`#angebot` Stufe 1 → `#sichtbarkeit` Stufe 2 → `#vertrieb` Stufe 3 (Board) → `#branchen` Privat/Geschäftskunden (Layout alt)
→ `#ablauf` Der Ablauf (alt) → `#kontakt` Schluss mit Formular (alt). Figma-Grafiken liegen unter `public/images/wp/`
und werden mit `src/components/figma.tsx` (Zeichenfläche in Figma-Maßen, Positionen in %, Schrift in cqw) nachgebaut.
„Über uns“ und „Das System“ sind seit 25.10.2026 freier gelayoutet als im Figma (Foto-Karte + Kennzahl-Kacheln; Stufen als
Ablauf mit Grafik-Feld). Das Vertriebs-Board (`SalesBoard.tsx`, @dnd-kit) ist verschiebbar: Maus, Finger (kurz halten),
Tastatur; Status, Wert und Kennzahlen richten sich nach der Spalte, Karten und Spalten stehen in `site.sales.board`.

## Bekannte offene Punkte
- Vercel-Git-Verknüpfung auf `Atex-Media/atex-scale` umstellen, damit Pushes wieder automatisch bauen.
- Bilder: echtes `og-image.jpg` (aktuell Bürofoto). Google-Bewertung 4,8 (Hero) ohne Link zum Google-Profil.
- Zahlen mit `TODO prüfen` in site.ts (24 h, Calendly-Dauer, Über-uns-Seite: 14 Tage, 280+ auf /ueber-uns).
- „Schriftliche Zusage“ steht noch im Schluss-Text und im Seitentitel (meta), kommt im Whitepaper nicht vor.
