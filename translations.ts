import { Language } from './types';

interface TranslationData {
  nav: {
    home: string;
    services: string;
    visualizer: string;
    contact: string;
    book: string;
  };
  hero: {
    pill: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaVisualizer: string;
    ctaServices: string;
  };
  services: {
    pill: string;
    title: string;
    subtitle: string;
    menuTitle: string;
    startsAt: string;
    bookNow: string;
  };
  visualizer: {
    title: string;
    subtitle: string;
    label: string;
    placeholder: string;
    buttonGenerate: string;
    buttonGenerating: string;
    mechanicNote: string;
    emptyState: string;
    download: string;
    loading: string;
    quickPrompts: string[];
  };
  booking: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    details: string;
    submit: string;
  };
  footer: {
    tagline: string;
    services: string;
    contact: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      visualizer: "Visualizador IA",
      contact: "Contacto",
      book: "Reservar"
    },
    hero: {
      pill: "Reparación de Auto de Nueva Generación",
      titleStart: "Mecánica de Precisión para",
      titleHighlight: "Máquinas Modernas",
      subtitle: "Desde restauraciones clásicas hasta diagnósticos de EV. Apex AutoWorks combina artesanía experta con diagnósticos impulsados por IA para que vuelvas a la carretera más rápido.",
      ctaVisualizer: "Visualiza tu Reparación",
      ctaServices: "Ver Servicios"
    },
    services: {
      pill: "Cuidado Experto",
      title: "Soluciones Automotrices Integrales",
      subtitle: "Combinamos décadas de experiencia mecánica con tecnología de punta para diagnosticar, reparar y mejorar tu vehículo.",
      menuTitle: "Nuestro Menú Completo",
      startsAt: "Desde",
      bookNow: "Reservar Ahora"
    },
    visualizer: {
      title: "Visualizador de Reparación IA",
      subtitle: "Describe tu modificación soñada, trabajo de pintura o el problema que enfrentas. Nuestra IA generará una referencia visual y brindará consejos preliminares.",
      label: "Describe tu solicitud",
      placeholder: "ej., Un auto deportivo negro mate con luces de neón azules y rines personalizados, o 'Un motor oxidado que necesita restauración'",
      buttonGenerate: "Visualizar",
      buttonGenerating: "Generando...",
      mechanicNote: "Nota del Mecánico",
      emptyState: "Tu visualización aparecerá aquí.",
      download: "Descargar",
      loading: "Renderizando vista previa de alta calidad...",
      quickPrompts: ['Kit de Carrocería Ancha', 'Detallado de Motor', 'Pintura Azul Medianoche', 'Recubrimiento Cerámico']
    },
    booking: {
      title: "Reserva una Cita",
      subtitle: "Listo para mejorar tu auto? Programa una visita con nuestro equipo experto.",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      details: "Detalles del Servicio",
      submit: "Enviar Solicitud"
    },
    footer: {
      tagline: "Redefiniendo el cuidado automotriz con tecnología y precisión.",
      services: "Servicios",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      visualizer: "AI Visualizer",
      contact: "Contact",
      book: "Book Now"
    },
    hero: {
      pill: "Next-Gen Auto Repair",
      titleStart: "Precision Mechanics for",
      titleHighlight: "Modern Machines",
      subtitle: "From classic restorations to EV diagnostics. Apex AutoWorks combines expert craftsmanship with AI-driven diagnostics to get you back on the road faster.",
      ctaVisualizer: "Visualize Your Repair",
      ctaServices: "View Services"
    },
    services: {
      pill: "Expert Care",
      title: "Comprehensive Automotive Solutions",
      subtitle: "We combine decades of mechanical experience with cutting-edge technology to diagnose, repair, and upgrade your vehicle.",
      menuTitle: "Our Full Service Menu",
      startsAt: "Starts at",
      bookNow: "Book Now"
    },
    visualizer: {
      title: "AI Repair Visualizer",
      subtitle: "Describe your dream modification, paint job, or the issue you're facing. Our AI will generate a visual reference and provide preliminary advice.",
      label: "Describe your request",
      placeholder: "e.g., A matte black sports car with neon blue underglow and custom rims, or 'A rusty engine needing restoration'",
      buttonGenerate: "Visualize",
      buttonGenerating: "Generating...",
      mechanicNote: "Mechanic's Note",
      emptyState: "Your visualization will appear here.",
      download: "Download",
      loading: "Rendering high-quality preview...",
      quickPrompts: ['Widebody Kit', 'Engine Bay Detailing', 'Midnight Blue Paint', 'Ceramic Coating']
    },
    booking: {
      title: "Book an Appointment",
      subtitle: "Ready to upgrade your ride? Schedule a visit with our expert team.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      details: "Service Details",
      submit: "Submit Request"
    },
    footer: {
      tagline: "Redefining automotive care with technology and precision.",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      visualizer: "KI-Visualisierer",
      contact: "Kontakt",
      book: "Buchen"
    },
    hero: {
      pill: "Autoreparatur der nächsten Generation",
      titleStart: "Präzisionsmechanik für",
      titleHighlight: "Moderne Maschinen",
      subtitle: "Von klassischen Restaurierungen bis hin zur EV-Diagnose. Apex AutoWorks kombiniert handwerkliches Können mit KI-gesteuerter Diagnose.",
      ctaVisualizer: "Reparatur Visualisieren",
      ctaServices: "Dienste Ansehen"
    },
    services: {
      pill: "Expertenpflege",
      title: "Umfassende Fahrzeuglösungen",
      subtitle: "Wir kombinieren jahrzehntelange mechanische Erfahrung mit modernster Technologie, um Ihr Fahrzeug zu diagnostizieren, zu reparieren und aufzurüsten.",
      menuTitle: "Unser komplettes Serviceangebot",
      startsAt: "Ab",
      bookNow: "Jetzt Buchen"
    },
    visualizer: {
      title: "KI-Reparatur-Visualisierer",
      subtitle: "Beschreiben Sie Ihren Traumumbau, Ihre Lackierung oder das Problem. Unsere KI erstellt eine visuelle Referenz und gibt erste Ratschläge.",
      label: "Beschreiben Sie Ihre Anfrage",
      placeholder: "z.B. Ein mattschwarzer Sportwagen mit neonblauem Unterbodenlicht und speziellen Felgen oder 'Ein rostiger Motor, der restauriert werden muss'",
      buttonGenerate: "Visualisieren",
      buttonGenerating: "Generieren...",
      mechanicNote: "Mechaniker-Notiz",
      emptyState: "Ihre Visualisierung erscheint hier.",
      download: "Herunterladen",
      loading: "Rendere hochwertige Vorschau...",
      quickPrompts: ['Breitbau-Kit', 'Motorraum-Detaillierung', 'Mitternachtsblaue Farbe', 'Keramikbeschichtung']
    },
    booking: {
      title: "Termin Vereinbaren",
      subtitle: "Bereit für ein Upgrade? Vereinbaren Sie einen Besuch bei unserem Expertenteam.",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      details: "Service-Details",
      submit: "Anfrage Senden"
    },
    footer: {
      tagline: "Neudefinition der Fahrzeugpflege mit Technologie und Präzision.",
      services: "Dienstleistungen",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten."
    }
  }
};
