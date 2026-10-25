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
    // mark = hell hinterlegter Teil, rest = normaler Text danach
    facts: [
      { mark: "+12 Mitarbeiter", rest: "" },
      { mark: "+160 Partnerbetriebe", rest: "im Neukundenbereich" },
      { mark: "", rest: "4 Fachbereiche" },
      { mark: "akkreditierter Berater", rest: "beim Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)" },
    ],
    photo: { src: "/images/wp/ueber/gebaeude.png", alt: "Bürogebäude von Atex Media an der Kumpfmühler Straße in Regensburg" },
  },

  // Das System (Whitepaper S. 4): drei Stufen, Ergebnis-Leiste, Maßstab, Karte „Nachhaltig“
  system: {
    eyebrow: "Das System",
    headlineBold: "Wir liefern Anfragen.",
    headlineLight: "Sie machen die Aufträge.",
    text: "Atex Scale ist Ihr externer Vertrieb: drei Stufen, die aus Suchenden Anfragen und aus Anfragen Aufträge machen – aufgebaut auf einer Seite, die nur für Ihr Angebot da ist.",
    stages: [
      { title: "Angebot", text: "Wir definieren, was Sie verkaufen: Leistung, Vorzüge, Preisrahmen und das, was Sie besonders macht – und bauen daraus Ihre Angebotsseite auf Ihrer Webseite." },
      { title: "Zielgruppen-Sichtbarkeit", text: "Wer Ihre Leistung sucht, findet Sie – über Google-Anzeigen, Ihr Unternehmensprofil, SEO und, wo es passt, Meta oder LinkedIn." },
      { title: "Vertrieb & Automatisierung", text: "Jede Anfrage wird in der ersten Minute beantwortet, an Sie weitergeleitet und bis zur Entscheidung nachgefasst – automatisiert, mit Dashboard." },
    ],
    result: { title: "Das Ergebnis: Atex-Scale-qualifizierte Anfragen", text: "Name · Kontakt · konkreter Bedarf · Standort in Ihrem Einzugsgebiet" },
    definition: "Alles andere zählen wir nicht. Sie bekommen nur Anfragen, die Sie auch beauftragen können – das ist unser Maßstab in jedem Review.",
    lasting: {
      eyebrow: "Nachhaltig",
      title: "Was wir aufbauen, bleibt bei Ihnen.",
      text: "Angebotsseite, Unternehmensprofil, Bewertungen, Abläufe und Zahlen gehören zu Ihrem Betrieb. Das System wirkt über die Laufzeit hinaus – und wird mit jedem Monat günstiger pro Anfrage.",
    },
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

  // Privat- und Geschäftskunden: links Text + zwei Karten (B2C/B2B), rechts Foto-Karte Erstgespräch
  audiences: {
    eyebrow: "Privat- und Geschäftskunden",
    headlineBold: "Für Privatkunden,",
    headlineLight: "genauso wie für Geschäftskunden",
    text: "Ob jemand ein neues Bad plant oder ein Unternehmen einen Steuerberater sucht: Ohne Vertrauen fällt keine Entscheidung. Der Weg dahin ist unterschiedlich lang, der Ablauf dahinter bleibt derselbe.",
    text2: "Handwerksbetriebe, Praxen, Kanzleien und Ingenieurbüros setzen auf denselben Mechanismus: sichtbar sein, bis der Bedarf da ist, und dann als Erste sauber antworten.",
    groups: [
      {
        tag: "Privatkunden · B2C",
        tone: "accent" as const,
        title: "Schnelle Entscheidung, viel Vergleich",
        text: "Wer ein Angebot sucht, holt oft drei ein. Den Auftrag bekommt, wer schnell antwortet und vertrauenswürdig wirkt.",
        items: ["Handwerk und Sanierung", "Heizung, Solar und Energie", "Zahnarzt- und Arztpraxen", "Pflege und Gesundheit"],
      },
      {
        tag: "Geschäftskunden · B2B",
        tone: "navy" as const,
        title: "Lange Entscheidung, mehrere Beteiligte",
        text: "Entscheider vergleichen über Wochen. Regelmäßige Präsenz sorgt dafür, dass Sie gefragt werden, wenn der Bedarf entsteht.",
        items: ["Steuer- und Anwaltskanzleien", "Ingenieur- und Planungsbüros", "Software und IT", "Industrie und Zulieferer"],
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
