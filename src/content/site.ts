/**
 * ZENTRALE INHALTE – Atex Scale Landingpage
 * ------------------------------------------------------------------
 * Alles, was Text, Zahl, Link oder Bildpfad ist, wird hier gepflegt.
 * Komponenten enthalten keine Inhalte.
 *
 * Atex Scale = Neukundengewinnung für den Mittelstand, eine Marke der
 * Atex Media GmbH. Aufbau und Optik wie AtexJobs (Schwestermarke).
 *
 * Zahlen mit "// TODO prüfen" sind Platzhalter und noch nicht bestätigt.
 */

export const site = {
  meta: {
    title: "Atex Scale – Neue Kunden gewinnen mit schriftlicher Zusage",
    description:
      "Atex Scale bringt mittelständischen Betrieben qualifizierte Anfragen und gebuchte Termine: Kampagnen auf Meta, Google und LinkedIn, Landingpage, Qualifizierung jeder Anfrage binnen 24 Stunden. Vorab geprüft, schriftlich zugesagt.",
  },

  brand: {
    name: "Atex",
    nameAccent: "Scale",
    claim: "eine Marke der Atex Media Gruppe",
  },

  contact: {
    company: "Atex Media GmbH",
    street: "Kumpfmühler Str. 15",
    city: "93047 Regensburg",
    phone: "+49 176 77 88 0548",
    phoneHref: "tel:+4917677880548",
    // Direktanfrage per WhatsApp (Schluss-Sektion)
    whatsapp: {
      label: "Per WhatsApp anfragen",
      href: "https://wa.me/4917677880548?text=Hallo%20Atex%20Scale%2C%20wir%20wollen%20planbar%20neue%20Kunden%20gewinnen%20und%20h%C3%A4tten%20gern%20eine%20Einsch%C3%A4tzung.",
    },
    email: "info@atex-media.de",
    contactPerson: {
      name: "Daniel Meier",
      role: "Geschäftsführer",
      label: "Ihr Kontakt bei uns",
      image: "/images/team/daniel-meier-avatar.jpg",
    },
    // "#anfrage" öffnet das Kontaktformular (Modal) – alle CTA-Buttons zeigen darauf
    bookingHref: "#anfrage",
    calendly: {
      // Calendly von Christian Hopfner – Erstgespräch
      url: "https://calendly.com/hopfner-atex-media/erstgespraech-christianhopfner",
      durationLabel: "15 Minuten", // TODO prüfen (Dauer des Eventtyps)
      primaryColor: "f26a4a", // Akzentfarbe im eingebetteten Kalender (ohne #)
    },
  },

  // Kontaktformular (öffnet sich als Modal über jeden CTA-Button)
  cta: {
    title: "Wie viele Anfragen sind in Ihrer Region möglich?",
    text: "Kostenlos, unverbindlich, Antwort innerhalb eines Werktags.",
    fields: {
      name: { label: "Ihr Name", placeholder: "Vor- und Nachname" },
      company: { label: "Betrieb", placeholder: "Wie heißt Ihr Unternehmen?" },
      phone: { label: "Telefon", placeholder: "151 23456789", prefix: "+49" },
      email: { label: "E-Mail", placeholder: "name@firma.de" },
    },
    consent: "Meine Angaben dürfen zur Kontaktaufnahme verarbeitet werden. Was damit passiert, steht in der",
    consentLink: { label: "Datenschutzerklärung", href: "/datenschutz" },
    submit: "Markt-Check anfragen",
    sending: "Wird abgeschickt …",
    success: {
      title: "Angekommen.",
      text: "Ihre Anfrage ist bei uns. Innerhalb eines Werktags melden wir uns mit einer ersten Einschätzung zu Ihrem Markt.",
      calendly: "Lieber gleich sprechen? Termin wählen",
    },
    error: "Da ist etwas schiefgelaufen. Probieren Sie es erneut oder greifen Sie zum Hörer:",
  },

  // Kontaktseite /kontakt: Formular links, Calendly-Kalender rechts
  contactPage: {
    eyebrow: "Kontakt",
    headlineBold: "Erzählen Sie uns von",
    headlineLight: "Ihrem Angebot",
    text: "Formular ausfüllen oder gleich einen Termin wählen. Sie bekommen eine ehrliche Einschätzung: Wie viel Nachfrage gibt es in Ihrer Region, und was braucht es, um daraus Aufträge zu machen?",
    formTitle: "Schreiben Sie uns",
    calendarTitle: "Oder Termin aussuchen",
    calendarText: "15 Minuten mit Christian Hopfner, kostenlos und ohne Verpflichtung.",
    calendarFallback: "Kalender lädt nicht? Hier geht es direkt zu Calendly:",
  },

  // Schwebendes Termin-Widget unten rechts
  widget: {
    person: {
      name: "Christian Hopfner",
      role: "Strategieberatung",
      image: "/images/team/christian-hopfner-avatar.jpg",
    },
    title: "Wie viel Nachfrage steckt in Ihrer Region?",
    text: "15 Minuten am Telefon, eine ehrliche Antwort. Ohne Verkaufsgespräch.",
    chip: "Kostenlos, ohne Verpflichtung",
    button: "Termin vereinbaren",
    buttonHref: "/kontakt", // Kontaktseite mit eingebettetem Kalender; gewählter Tag wird als ?date= übergeben
    alt: "Lieber schreiben? Anfrage senden",
    delayMs: 6000, // Verzögerung, bis der Button erscheint
    openLabel: "Termin vereinbaren",
  },

  nav: {
    links: [
      { label: "Leistungen", href: "/#leistungen" },
      { label: "Ablauf", href: "/#ablauf" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Karriere", href: "https://www.atex-media.de/karriere" }, // Stellen bei Atex Media (öffnet in neuem Tab)
      { label: "Kontakt", href: "/kontakt" },
    ],
    // Zweiter Button (Rahmen): Schwestermarke AtexJobs für Mitarbeitergewinnung
    secondary: { label: "Mitarbeiter gewinnen", href: "https://www.atex-jobs.de" },
    cta: "Gespräch vereinbaren",
  },

  hero: {
    eyebrow: "Neukundengewinnung für den Mittelstand",
    headlineBold: "Neue Kunden gewinnen.",
    headlineLight: "Ohne Kaltakquise, ohne Portale.",
    text: "Wie kleine und mittlere Betriebe planbar Anfragen bekommen – und daraus Aufträge machen. Wir übernehmen den Vertrieb: sichtbar sein, Anfragen holen, nachfassen.",
    cta: "Gespräch vereinbaren",
    ctaSecondary: { label: "So funktioniert es", href: "#leistungen" },
    // Porträtreihe unter den Buttons (Dateien in /public/images/kunden)
    proof: {
      avatars: ["/images/kunden/01.jpg", "/images/kunden/02.jpg", "/images/kunden/03.jpg", "/images/kunden/04.jpg"],
      rating: "★ 4,8 / 5 auf Google", // laut Whitepaper; Link zum Google-Profil fehlt noch
      label: "160+ Partnerbetriebe im Neukundenbereich",
    },
    features: [
      { icon: "filter" as const, title: "Qualifizierte Anfragen.", text: "Name, Kontakt, konkreter Bedarf und Standort in Ihrem Einzugsgebiet." },
      { icon: "clock" as const, title: "Antwort in der ersten Minute.", text: "Jede Anfrage wird sofort bestätigt und bis zur Entscheidung nachgefasst." },
      { icon: "shield" as const, title: "Was wir aufbauen, bleibt bei Ihnen.", text: "Angebotsseite, Unternehmensprofil und Bewertungen gehören Ihrem Betrieb." },
    ],
  },

  logos: {
    // Dunkles Band unter dem Hero: Überschrift oben, Logos laufen durch, Hinweis darunter
    text: "Betriebe und Kanzleien, die mit der Atex Media Gruppe arbeiten",
    more: "und 160+ weitere Partnerbetriebe im Neukundenbereich",
    // Logos als SVG/PNG in /public/images/logos ablegen (werden auf dem dunklen Band weiß dargestellt)
    items: [
      { name: "Energie Optimal", src: "/images/logos/energie-optimal.svg" },
      { name: "Infinno", src: "/images/logos/infinno.svg" },
      { name: "Bastian Kaspar", src: "/images/logos/bastian-kaspar.svg" },
      { name: "Dentalkeramik", src: "/images/logos/dentalkeramik.svg" },
      { name: "Innengrün", src: "/images/logos/innengruen.svg" },
      { name: "Murr & Siedentop", src: "/images/logos/murr-siedentop.svg" },
    ],
  },

  // Der Engpass (Whitepaper S. 2): vier Karten mit Mini-Grafik oben, darunter ein Band mit Button
  problem: {
    eyebrow: "Der Engpass",
    headline: "Vier Gründe, warum gute Betriebe zu wenig Aufträge haben",
    text: "Die meisten Betriebe haben kein Leistungsproblem. Sie haben keinen Vertrieb: Niemand kümmert sich darum, dass neue Aufträge reinkommen. Und das sieht fast immer gleich aus.",
    cards: [
      { title: "Der Auftragseingang schwankt", text: "Aufträge kommen über Bestandskunden und Empfehlungen. Läuft das Tagesgeschäft, passiert keine Akquise.", chartLabel: "Anfragen pro Monat" },
      { title: "Unsichtbar für Suchende", text: "Generalunternehmer, Bauträger und Privatkunden suchen online. Wer dort nicht auftaucht, existiert für sie nicht.", search: "Elektriker Regensburg", notFound: "Ihr Betrieb: nicht gefunden" },
      {
        title: "Die falschen Anfragen kommen",
        text: "Irgendetwas auf die breite Masse schalten bringt Klicks, aber keine Kunden. Budget versickert.",
        messages: [
          { text: "„Was kostet das ungefähr? Nur zum Vergleichen.“", tag: "Kein Bedarf" },
          { text: "„Wir wohnen bei Hamburg, kommen Sie auch?“", tag: "Falsche Region" },
        ],
      },
      {
        title: "Kein eigener Vertrieb",
        text: "Kein Verkäufer, kein Marketing, keine Zeit. Akquise macht der Chef – zwischen zwei Baustellen, wenn überhaupt.",
        roles: { left: ["Chef", "Monteur"], right: ["Büro", "Angebot", "Vertrieb"], arrow: "zuständig für..", nobody: "Zuständig: niemand" },
      },
    ],
    band: "Meist fehlt keine weitere Werbemaßnahme. Es fehlt jemand, der den Vertrieb macht: sichtbar sein, Anfragen holen, nachfassen. Genau das übernehmen wir für Sie.",
    cta: "Engpass besprechen",
  },

  // Über Atex Media (Whitepaper S. 3): Adresse, Text, Siegel, Kennzahlen rechts, Gebäudefoto darunter
  company: {
    address: "Kumpfmühler Str. 15, 93047 Regensburg",
    headline: "Über Atex Media.",
    text: "Wir sind ein eingespieltes Team aus Regensburg für Entwicklung, Sichtbarkeit und Neukundengewinnung. Bei uns haben Sie einen festen Ansprechpartner, vom ersten Gespräch bis zur ersten Anfrage.",
    badges: {
      bafa: { src: "/images/bafa-berater.png", alt: "Gelisteter BAFA-Berater, Berater-ID 228969" },
      certified: { src: "/images/wp/ueber/webflow-certified.svg", alt: "Webflow Certified Partner" },
      premium: { src: "/images/wp/ueber/webflow-premium.svg", alt: "Webflow Premium Partner" },
    },
    // Kennzahl groß, Beschreibung klein darunter
    facts: [
      { value: "12+", label: "Mitarbeiter im Team" },
      { value: "160+", label: "Partnerbetriebe im Neukundenbereich" },
      { value: "4", label: "Fachbereiche unter einem Dach" },
      { value: "BAFA", label: "akkreditierter Berater beim Bundesamt für Wirtschaft und Ausfuhrkontrolle" },
    ],
    photoLabel: "Unser Büro in Regensburg",
    more: { label: "Mehr über uns", href: "/ueber-uns" },
    photo: { src: "/images/wp/ueber/gebaeude.png", alt: "Bürogebäude von Atex Media an der Kumpfmühler Straße in Regensburg" },
  },

  // Das System (Whitepaper S. 4): drei Stufen, Ergebnis-Leiste, Maßstab, Karte „Nachhaltig“
  system: {
    eyebrow: "Das System",
    headlineBold: "Wir liefern Anfragen.",
    headlineLight: "Sie machen die Aufträge.",
    text: "Atex Scale ist Ihr externer Vertrieb: drei Stufen, die aus Suchenden Anfragen und aus Anfragen Aufträge machen – aufgebaut auf einer Seite, die nur für Ihr Angebot da ist.",
    stages: [
      { title: "Angebot", text: "Wir definieren, was Sie verkaufen: Leistung, Vorzüge, Preisrahmen und das, was Sie besonders macht – und bauen daraus Ihre Angebotsseite auf Ihrer Webseite.", href: "#angebot" },
      { title: "Zielgruppen-Sichtbarkeit", text: "Wer Ihre Leistung sucht, findet Sie – über Google-Anzeigen, Ihr Unternehmensprofil, SEO und, wo es passt, Meta oder LinkedIn.", href: "#sichtbarkeit" },
      { title: "Vertrieb & Automatisierung", text: "Jede Anfrage wird in der ersten Minute beantwortet, an Sie weitergeleitet und bis zur Entscheidung nachgefasst – automatisiert, mit Dashboard.", href: "#vertrieb" },
    ],
    stageLabel: "Stufe",
    stageLink: "Mehr dazu",
    result: { title: "Das Ergebnis: Atex-Scale-qualifizierte Anfragen", criteria: ["Name", "Kontakt", "konkreter Bedarf", "Standort in Ihrem Einzugsgebiet"] },
    definition: "Alles andere zählen wir nicht. Sie bekommen nur Anfragen, die Sie auch beauftragen können – das ist unser Maßstab in jedem Review.",
    lasting: {
      eyebrow: "Nachhaltig",
      title: "Was wir aufbauen, bleibt bei Ihnen.",
      text: "Angebotsseite, Unternehmensprofil, Bewertungen, Abläufe und Zahlen gehören zu Ihrem Betrieb. Das System wirkt über die Laufzeit hinaus – und wird mit jedem Monat günstiger pro Anfrage.",
    },
  },

  // Stufe 1 · Angebot (Whitepaper S. 5): drei Schritte, Karte „Schnelle Formulare“, Bühne mit Beispiel-Angebotsseite
  offer: {
    eyebrow: "Stufe 1 · Angebot",
    headlineBold: "Erst wissen, wer kauft.",
    headlineLight: "Dann ein Angebot, das auffällt.",
    text: "In der Angebotsphase klären wir, wer Ihre Kunden sind, wo sie sitzen und wie wir sie erreichen – und formen daraus ein Angebot, mit dem Sie aus der Masse herausstechen oder als Premium-Anbieter wahrgenommen werden. Erst dann bauen wir die Angebotsseite.",
    steps: [
      { title: "Zielgruppenanalyse", text: "Wer kauft, wo und warum: Privat oder Gewerbe, Region und Radius, wer entscheidet, typischer Auftragswert." },
      { title: "Positionierung", text: "Masse oder Premium: Was Sie besonders macht, Ihr Preisrahmen, Ihr Versprechen in einem Satz – im Vergleich zu den Anbietern vor Ort." },
      { title: "Vorzüge herausarbeiten", text: "Festpreis, Termin in zehn Tagen, Meisterbetrieb, Garantie, Referenzen, Bewertungen – belegt, nicht behauptet." },
    ],
    form: { eyebrow: "Schnelle Formulare", title: "Drei Felder, ein Klick – jede Hürde weniger ist eine Anfrage mehr.", fields: ["Name", "Telefon", "Anliegen"], button: "Senden" },
    stage: {
      eyebrow: "Ihre Angebotsseite",
      url: "rf-allgaeu.de/preisanfrage",
      desktop: { src: "/images/wp/angebot/desktop.jpg", alt: "Angebotsseite Preisanfrage von RF Allgäu am Desktop" },
      mobile: { src: "/images/wp/angebot/mobil.png", alt: "Preisanfrage-Strecke von RF Allgäu auf dem Smartphone" },
      caption: "Beispiel: Preisanfrage-Strecke RF Allgäu – Angebotsseite als Erweiterung der Webseite",
    },
  },

  // Stufe 2 · Zielgruppen-Sichtbarkeit (Whitepaper S. 6): drei Mockups (Google-Treffer, KI-Antwort, Anzeige) mit Text darunter
  visibility: {
    eyebrow: "Stufe 2 · Zielgruppen-Sichtbarkeit",
    headline: "Sichtbar, wo Ihre Kunden suchen –",
    headlineAccent: "mit Schlagzahl.",
    text: "Ihre Kunden suchen auf drei Wegen: bei Google, in KI-Antworten und über Anzeigen. Wir sorgen dafür, dass Sie dort auftauchen – mit Schlagzahl: Anzeigen ab Tag 1, wöchentlich nachgeschärft, Budget dorthin, wo Anfragen entstehen.",
    channels: [
      { tag: "Ausbau · SEO", title: "Dauerhaft gefunden werden", text: "Leistungsseiten und Unternehmensprofil bringen Sie bei „Leistung + Ort“ nach oben – ohne Klickkosten. Baut sich über Monate auf und bleibt." },
      { tag: "Ausbau · GEO", title: "Empfohlen in KI-Antworten", text: "Immer mehr Kunden fragen ChatGPT oder die Google-KI nach einem Anbieter. Wir sorgen dafür, dass Ihr Name dort fällt – mit Quelle." },
      { tag: "Basis · Google Ads", title: "Ab Tag 1 sichtbar – mit Schlagzahl", text: "Google-Anzeigen auf Kaufabsicht im Einzugsgebiet, jede Woche optimiert: Suchbegriffe, Gebote, Budget auf die Leistung mit den meisten Anfragen. Meta oder LinkedIn, wenn Ihre Zielgruppe dort ist." },
    ],
    seo: {
      label: "SEO · Google-Suche",
      url: "google.de/search?q=elektriker+regensburg",
      query: "Elektriker Regensburg",
      domain: "ihre-webseite.de",
      crumb: "› Startseite",
      title: "Ihr Elektrotechnikbetrieb in Regensburg – Meisterbetrieb",
      desc: "Elektroinstallation, Smart Home und PV-Anlagen. Schnelle Terminvergabe, faire Preise.",
      rank: "1",
      rankLabel: "Platz",
      footer: "Dauerhaft sichtbar · ohne Klickkosten",
    },
    geo: {
      label: "GEO · KI-Antworten",
      model: "ChatGPT  ▾",
      question: "Welcher Elektriker in Regensburg ist empfehlenswert?",
      answerBefore: "Empfehlenswert ist ",
      answerName: "Ihr Betrieb",
      answerAfter: " in Regensburg. Der Meisterbetrieb übernimmt Elektroinstallationen, Smart Home und PV-Anlagen und wird von Kunden aus der Region sehr gut bewertet.",
      source: "Quelle: ihre-webseite.de",
      note: "Auch in Perplexity, Gemini und der Google-KI.",
      input: "Frage stellen …",
    },
    ads: {
      label: "Ads · Aktive Werbung",
      channels: "Google · Meta Ads",
      account: "Ihr Betrieb",
      sponsored: "Gesponsert",
      text: "Elektrotechnik aus Regensburg. Jetzt kostenlosen Beratungstermin sichern.",
      button: "Mehr dazu",
      hint: "Ab Tag 1 sichtbar",
      photo: "/images/wp/sichtbar/werbefoto.jpg",
    },
  },

  // Stufe 3 · Vertrieb & Automatisierung (Whitepaper S. 7): Anfragen-Board mit fünf Spalten und Kennzahlen (schematisch)
  sales: {
    eyebrow: "Stufe 3 · Vertrieb & Automatisierung",
    headlineBold: "Jede Anfrage kommt an, wird geprüft",
    headlineLight: "– und Sie sehen, was daraus wird.",
    text: "Anfragen laufen in ein gemeinsames Board: Wir bestätigen in der ersten Minute, prüfen Name, Kontakt, Bedarf und Standort und markieren, was Atex-Scale-qualifiziert ist. Sie rufen zurück, schieben die Karte weiter – und sehen am Monatsende, welche Anfragen zu Aufträgen wurden.",
    board: {
      title: "Anfragen · Oktober",
      sub: "Ø Erstantwort 48 Sek · Ø Rückruf 3 h 10 Min",
      live: "Live",
      requests: "Anfragen",
      // moved = Status, den eine hierher verschobene Karte zeigt · offen = Wert als „ca.“, gewonnen = fester Wert, sonst kein Wert
      columns: [
        { id: "neu", title: "Neu eingegangen", bar: "#8a8a86", moved: "Bestätigung gesendet" },
        { id: "qualifiziert", title: "Qualifiziert", bar: "#f26b4b", moved: "Rückruf offen" },
        { id: "kontaktiert", title: "Kontaktiert", bar: "#cfcfcb", moved: "Termin vereinbart" },
        { id: "abgeschlossen", title: "Abgeschlossen", bar: "#2f8f5b", moved: "Auftrag erteilt" },
        { id: "abgelehnt", title: "Abgelehnt", bar: "#c8463a", moved: "Passt nicht ins Angebot" },
      ],
      // col = Startspalte · dot = Punktfarbe der Quelle · amount = geschätzter Auftragswert in Euro
      cards: [
        { id: "wallbox", col: "neu", source: "Google Ads", dot: "google-ads", time: "vor 4 Min", title: "Wallbox-Installation", who: "Fam. Huber · Regensburg", status: "Bestätigung gesendet", amount: 2400, per: "" },
        { id: "pv-gewerbe", col: "neu", source: "Webseite", dot: "webseite", time: "vor 26 Min", title: "PV-Anlage 12,2 kWp", who: "HN Gewerbebau GmbH", status: "Bestätigung gesendet", amount: 21500, per: "" },
        { id: "bad", col: "qualifiziert", source: "Google Ads", dot: "google-ads", time: "heute", title: "Bad-Sanierung komplett", who: "Fam. Wagner · Neutraubling", status: "Rückruf offen · bis 16:00", amount: 18400, per: "" },
        { id: "zaehlerschrank", col: "qualifiziert", source: "Webseite", dot: "webseite", time: "heute", title: "Zählerschrank erneuern", who: "M. Schmid · Pentling", status: "Rückruf offen · bis 18:00", amount: 3100, per: "" },
        { id: "led", col: "qualifiziert", source: "LinkedIn", dot: "linkedin", time: "gestern", title: "Hallenbeleuchtung LED", who: "Kaiser GmbH · Regenstauf", status: "Rückruf offen", amount: 9500, per: "" },
        { id: "smarthome", col: "kontaktiert", source: "Google Ads", dot: "google-ads", time: "Mo", title: "Smart-Home-Nachrüstung", who: "T. Berger · Barbing", status: "Termin vor Ort · Do 14:00", amount: 6200, per: "" },
        { id: "dguv", col: "kontaktiert", source: "Mailing", dot: "mailing", time: "Fr", title: "Wartung DGUV V3", who: "Hiendl + Partner", status: "Angebot verschickt", amount: 4800, per: " / Jahr" },
        { id: "unterverteilung", col: "abgeschlossen", source: "Google Ads", dot: "google-ads", time: "KW 41", title: "Wallbox + Unterverteilung", who: "Fam. Lohrmeier · Regensburg", status: "Auftrag erteilt", amount: 3900, per: "" },
        { id: "speicher", col: "abgeschlossen", source: "Google Suche", dot: "google-suche", time: "KW 40", title: "PV + Speicher", who: "Fam. Huber · Lappersdorf", status: "Auftrag erteilt", amount: 18400, per: "" },
        { id: "hamburg", col: "abgelehnt", source: "Google Ads", dot: "google-ads", time: "KW 41", title: "Elektroinstallation Neubau", who: "Anfrage aus Hamburg", status: "Außerhalb Einzugsgebiet", amount: 0, per: "" },
      ],
      // Kennzahlen rechnen mit, wenn Karten verschoben werden; die Erstantwort bleibt fest
      kpis: {
        total: "Anfragen im Monat",
        qualified: "Atex-Scale-qualifiziert",
        won: "Aufträge erteilt",
        volume: "Auftragsvolumen",
        response: { value: "48 Sek", label: "Ø Erstantwort" },
      },
      approx: "ca.",
      reset: "Zurücksetzen",
      hint: "Probieren Sie es aus: Karten in eine andere Spalte ziehen.",
      hintTouch: "Seitlich wischen · Karte kurz gedrückt halten und ziehen.",
      a11y: {
        instructions: "Leertaste drücken, um die Karte aufzunehmen. Mit den Pfeiltasten verschieben, mit der Leertaste ablegen, mit Escape abbrechen.",
        picked: "aufgenommen",
        over: "über Spalte",
        dropped: "abgelegt in Spalte",
        cancelled: "Verschieben abgebrochen.",
      },
    },
    note: "Board-Ansicht schematisch · Das Siegel markiert Atex-Scale-qualifizierte Anfragen: Name, Kontakt, konkreter Bedarf und Standort im Einzugsgebiet geprüft.",
  },

  // Der Ablauf: vier Reiter links, Detail rechts (Text + vier Kärtchen), darunter der Kreislauf als Leiste
  process: {
    eyebrow: "Der Ablauf",
    headlineBold: "Von der ersten Anzeige",
    headlineLight: "bis zum Termin in Ihrem Kalender",
    text: "Vier Schritte greifen ineinander und laufen dauerhaft weiter, solange Ihre Kampagne läuft. Bei Ihnen kommt am Ende an, was zählt: Termine mit Menschen, die kaufen wollen.",
    stepLabel: "Schritt",
    loopTitle: "Der ganze Kreislauf",
    autoMs: 7000, // Reiter wechseln automatisch, bis jemand selbst klickt
    phases: [
      {
        icon: "megaphone" as const,
        title: "Sichtbar werden",
        sub: "Dort, wo Ihre Kunden suchen",
        text: "Für jedes Angebot entsteht eine eigene Kampagne mit eigenen Anzeigen. Wir schalten sie auf den Kanälen, die Ihre Kunden wirklich nutzen, und steuern sie genau auf Ihre Region aus.",
        items: [
          { title: "Meta", text: "Facebook und Instagram, auf Ihre Region zugeschnitten" },
          { title: "Google", text: "Suche und Maps, wenn jemand konkret sucht" },
          { title: "LinkedIn", text: "Entscheider in Unternehmen, für B2B-Angebote" },
          { title: "YouTube und TikTok", text: "Kurze Videos aus Ihrem Betrieb" },
        ],
      },
      {
        icon: "database" as const,
        title: "Anfragen sammeln",
        sub: "Alles an einer Stelle",
        text: "Anfragen aus Anzeigen, Landingpage, WhatsApp und Telefon landen in einem gemeinsamen Eingang. Nichts versandet mehr im Postfach oder auf einem Notizzettel.",
        items: [
          { title: "Landingpage", text: "Eine Seite pro Angebot, Anfrage in zwei Minuten" },
          { title: "WhatsApp", text: "Aus der Anzeige direkt in den Chat" },
          { title: "Formular in der Anzeige", text: "Anfrage ohne Umweg über die Webseite" },
          { title: "Telefon", text: "Anrufe aus der Kampagne werden mit erfasst" },
        ],
      },
      {
        icon: "filter" as const,
        title: "Prüfen und nachfassen",
        sub: "Nur Passendes geht weiter",
        text: "Binnen 24 Stunden sehen wir uns jede Anfrage an. Wer nicht gleich erreichbar ist, bekommt freundliche Erinnerungen per Nachricht, E-Mail oder Anruf.", // TODO prüfen (24 h)
        items: [
          { title: "Bedarf", text: "Was genau wird gebraucht?" },
          { title: "Region", text: "Liegt der Ort in Ihrem Gebiet?" },
          { title: "Zeitpunkt", text: "Wann soll es losgehen?" },
          { title: "Budget", text: "Passt die Größenordnung zu Ihrem Angebot?" },
        ],
      },
      {
        icon: "calendar" as const,
        title: "Termin und Auswertung",
        sub: "Direkt in Ihrem Kalender",
        text: "Passt alles, bucht der KI-Assistent den Termin in Ihren Kalender, auch abends und am Wochenende. Jeden Monat sehen Sie, welcher Kanal wie viele Termine gebracht hat.",
        items: [
          { title: "Terminbuchung", text: "Mit allen Angaben aus der Anfrage" },
          { title: "Erinnerung", text: "Kurz vorher per Nachricht, damit keiner vergisst" },
          { title: "Wiederansprache", text: "Wer noch nicht so weit ist, sieht Ihr Angebot erneut" },
          { title: "Auswertung", text: "Termine und Kosten je Kanal, jeden Monat" },
        ],
      },
    ],
  },

  // Privat- und Geschäftskunden (Inhalte nach Whitepaper S. 8, Layout wie bisher): links Text + zwei Karten (B2C/B2B), rechts Foto-Karte Erstgespräch
  audiences: {
    eyebrow: "Privat- und Geschäftskunden",
    headlineBold: "Für Privatkunden,",
    headlineLight: "genauso wie für Geschäftskunden",
    text: "Ob Sie Generalunternehmer, Hausverwaltungen und Industrie beliefern oder Eigenheimbesitzer – das System ist dasselbe. Was sich ändert, ist, wo Ihre Kunden suchen und wie wir sie erreichen.",
    text2: "Viele Betriebe haben beides – dann bauen wir das System für den Teil, der wachsen soll, und erweitern später.",
    groups: [
      {
        tag: "Privatkunden · B2C",
        tone: "accent" as const,
        title: "Schnelle Entscheidung, viel Vergleich",
        text: "Eigenheimbesitzer und Bauherren: einmaliger Auftrag, Vertrauen entscheidet. Angebotsseite mit Preisrahmen, Bewertungen, WhatsApp und Terminbuchung; Rückruf in 24 Stunden, Termin vor Ort.",
        items: ["Dach und Fenster", "PV und Elektro", "Bad und Sanitär", "Garten"],
      },
      {
        tag: "Geschäftskunden · B2B",
        tone: "navy" as const,
        title: "Lange Entscheidung, mehrere Beteiligte",
        text: "Bauleiter, Einkäufer, Hausverwalter und Planer – oft unter Zeitdruck, oft für wiederkehrende Aufträge. Sichtbar über Google und Fachbegriffe, dazu LinkedIn und Mailing an eine Zielkundenliste.",
        items: ["Elektro und Gebäudetechnik", "Metallbau und Transport", "Bauunternehmen", "Ingenieurbüros"],
      },
    ],
    media: {
      image: "/images/ueber-uns/beratung.jpg",
      alt: "Zwei Kollegen von Atex Media lachen bei der Beratung",
      label: "Erstgespräch",
      person: { name: "Christian Hopfner", role: "Strategieberatung", image: "/images/team/christian-hopfner-avatar.jpg" },
      text: "In 15 Minuten klären wir, wie Ihre Kunden suchen und welcher Weg für Ihr Angebot passt. Kostenlos und ohne Verkaufsgespräch.",
      cta: { label: "Termin wählen", href: "/kontakt" },
    },
  },

  // Über-uns-Seite /ueber-uns
  about: {
    meta: { title: "Über uns – Atex Scale", description: "Wer hinter Atex Scale steht: das Team aus Regensburg, unsere Geschichte seit 2018 und die Atex Media Gruppe." },
    hero: {
      headline: "Atex Media Gruppe, aus Regensburg in den DACH-Raum.",
      text: "Atex Scale bringt Betrieben, Praxen und Kanzleien im Mittelstand neue Kunden: mit Kampagnen, Landingpages, einem festen Team an Ihrer Seite und einer Zusage, die schriftlich gilt. Geplant in Regensburg, umgesetzt im gesamten DACH-Raum.",
      cta: "Jetzt Kunden gewinnen",
      stats: [
        { value: "280+", label: "Betriebe und Kanzleien" }, // TODO prüfen
        { value: "seit 2018", label: "Kampagnen für den Mittelstand" },
        { value: "14 Tage", label: "bis zum ersten gebuchten Termin, im Schnitt" }, // TODO prüfen
      ],
    },
    // Breites Foto unter dem Intro (Bürogebäude)
    photo: { src: "/images/ueber-uns/gebaeude.jpg", alt: "Bürogebäude von Atex Media in Regensburg" },
    story: {
      headline: "Spezialisiert auf Angebote, die erklärt werden müssen.",
      paragraphs: [
        "Badsanierung, Wärmepumpe, Steuerberatung, Implantologie, Ingenieurleistungen: Solche Angebote kauft niemand spontan. Kunden vergleichen, lesen, schauen sich Referenzen an. Deshalb bauen wir für jedes Angebot eine eigene Landingpage, schalten Kampagnen auf allen relevanten Kanälen und prüfen jede Anfrage, bevor sie bei Ihnen landet.",
        "Begonnen hat alles 2018 mit Atex Media: Webseiten und Social-Media-Kampagnen für mittelständische Betriebe. Daraus wurden zwei Marken: AtexJobs für Mitarbeiter, Atex Scale für Kunden. Geschäftsführer ist Daniel Meier. Für Ihr Projekt ist von der ersten Analyse bis zum gebuchten Termin dasselbe Team zuständig.", // TODO prüfen
      ],
    },
    // Vier Aufnahmen aus dem Büro, zwischen Geschichte und Team
    gallery: {
      headline: "Ein Blick in unser Büro in Regensburg.",
      images: [
        { src: "/images/ueber-uns/arbeitsplatz.jpg", alt: "Mitarbeiter mit Headset am Schreibtisch", span: "wide" as const },
        { src: "/images/ueber-uns/gespraech.jpg", alt: "Mitarbeiter im Gespräch am Besprechungstisch", span: "tall" as const },
        { src: "/images/ueber-uns/beratung.jpg", alt: "Zwei Kollegen lachen bei der Beratung", span: "wide" as const },
        { src: "/images/ueber-uns/team-arbeit.jpg", alt: "Kollegen arbeiten gemeinsam am Laptop", span: "wide" as const },
      ],
    },

    team: {
      headline: "Ein festes Team statt einer Hotline.",
      text: "Beratung, Kampagnen, Landingpage, Foto und Video, Qualifizierung der Anfragen: Sie sprechen direkt mit den Menschen, die Ihr Projekt bearbeiten.",
      members: [
        { name: "Daniel Meier", role: "Geschäftsführer", image: "/images/team/daniel-meier.jpg" },
        { name: "Christian Hopfner", role: "Strategieberatung", image: "/images/team/christian-hopfner.jpg" },
        { name: "Calvin Okoh", role: "Strategieberatung", image: "/images/team/calvin-okoh.jpg" },
        { name: "Kaan Ocaktan", role: "Strategieberatung", image: "/images/team/kaan-ocaktan.jpg" },
        { name: "Timotheus Musiol", role: "Strategieberatung", image: "/images/team/timotheus-musiol.jpg" }, // TODO echtes Foto (426×640) unter gleichem Namen ablegen
        { name: "Dominik Moggert", role: "Accountmanagement", image: "/images/team/dominik-moggert.jpg" },
        { name: "Liliia Mkhytarian", role: "Projektmanagement, Webentwicklung", image: "/images/team/liliia-mkhytarian.jpg" },
        { name: "Bator Pisch", role: "Projektmanagement", image: "/images/team/bator-pisch.jpg" },
        { name: "Roman Opitz", role: "Foto- und Videografie", image: "/images/team/roman-opitz.jpg" },
        { name: "Mona Schmidt", role: "Backoffice", image: "/images/team/mona-schmidt.jpg" },
      ],
      hiring: { title: "Wir wachsen weiter", cta: "Offene Stellen", href: "https://www.atex-media.de/karriere", image: "/images/ueber-uns/buero.jpg" },
    },
    // Dunkle Abschluss-Sektion: Atex Media als Firmengruppe, Link zur Hauptseite
    group: {
      headline: "Atex Scale ist eine Marke der Atex Media GmbH",
      text: "Unser Büro steht in Regensburg. Von hier aus betreuen wir Betriebe und Kanzleien im gesamten DACH-Raum.",
      cta: "Zu atex-media.de",
      href: "https://www.atex-media.de",
      city: "Regensburg",
      image: { src: "/images/ueber-uns/buero.jpg", alt: "Bürogebäude von Atex Media in Regensburg" },
      logoSymbol: "/images/ueber-uns/atex-logo-symbol.png",
    },
  },

  // Cookie-Banner. Optionale Dienste werden erst nach "Alle akzeptieren" geladen.
  consent: {
    title: "Ihre Cookie-Einstellungen",
    text: "Einige Cookies braucht die Seite, damit sie funktioniert. Andere zeigen uns, wie die Seite genutzt wird und ob unsere Anzeigen ankommen. Welche wir laden dürfen, entscheiden Sie. Die Seite funktioniert in jedem Fall vollständig.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    change: "Auswahl ändern",
    footerLink: "Cookies bearbeiten",
  },

  // Schluss (dunkel): links Versprechen und drei Punkte, rechts das Kontaktformular in einer weißen Karte
  finalCta: {
    eyebrow: "Kostenloser Markt-Check · unverbindlich",
    headlineBold: "Wie viele neue Kunden",
    headlineLight: "stecken in Ihrer Region?",
    text: "Im Erstgespräch sehen wir uns Ihr Angebot und Ihre Region an. Sie erfahren, wie oft gesucht wird, was eine Anfrage kosten wird und ob wir Ihnen eine Zusage geben können. Die Einschätzung bekommen Sie schriftlich, innerhalb eines Werktags.",
    bullets: [
      { icon: "search" as const, title: "Ihr Markt in Zahlen", text: "Suchvolumen und Wettbewerb in Ihrem Gebiet" },
      { icon: "chartLine" as const, title: "Ehrliche Einschätzung", text: "Lohnt sich Werbung für Ihr Angebot, und mit welchem Budget?" },
      { icon: "calendar" as const, title: "Konkreter Plan", text: "Was in den ersten 90 Tagen am meisten bringt" },
    ],
    formTitle: "Markt-Check anfragen",
    formText: "Kostenlos, unverbindlich, Antwort innerhalb eines Werktags.",
  },

  footer: {
    quicklinks: {
      title: "Quicklinks",
      items: [
        { label: "Startseite", href: "/" },
        { label: "Engpass", href: "/#engpass" },
        { label: "Leistungen", href: "/#leistungen" },
        { label: "Ablauf", href: "/#ablauf" },
        { label: "Über uns", href: "/ueber-uns" },
        { label: "Karriere", href: "https://www.atex-media.de/karriere" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
    legal: [
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Impressum", href: "/impressum" },
      { label: "AGB", href: "/agb" },
    ],
    copyright: "© Atex Media GmbH. Alle Rechte vorbehalten.",
  },
} as const;

export type Site = typeof site;
