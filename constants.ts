import { ServiceItem, Language } from './types';

const SERVICES_ES: ServiceItem[] = [
  {
    id: 'oil-change',
    title: 'Cambio de Aceite Sintético',
    description: 'Reemplazo de aceite sintético premium con revisión de filtro y llenado de fluidos.',
    icon: 'droplets',
    priceRange: '$89.99'
  },
  {
    id: 'engine-diagnostic',
    title: 'Diagnóstico de Motor IA',
    description: 'Escaneo completo por computadora utilizando nuestras herramientas de diagnóstico IA.',
    icon: 'zap',
    priceRange: '$120.00'
  },
  {
    id: 'brake-service',
    title: 'Mejora de Frenos Cerámicos',
    description: 'Instalación de pastillas y discos de cerámica de alto rendimiento.',
    icon: 'wrench',
    priceRange: '$350.00'
  },
  {
    id: 'custom-paint',
    title: 'Pintura y Vinilo Personalizado',
    description: 'Vinilos de cuerpo completo, recubrimiento cerámico y trabajos de pintura personalizados.',
    icon: 'paint',
    priceRange: '$2,500.00'
  },
  {
    id: 'suspension',
    title: 'Ajuste de Suspensión',
    description: 'Instalación de coilovers, rebaje y configuraciones de alineación para pista.',
    icon: 'gauge',
    priceRange: '$500.00'
  },
  {
    id: 'ev-maintenance',
    title: 'Salud de Batería EV',
    description: 'Mantenimiento especializado para Tesla, Rivian y otras plataformas EV.',
    icon: 'zap',
    priceRange: '$150.00'
  }
];

const SERVICES_EN: ServiceItem[] = [
  {
    id: 'oil-change',
    title: 'Synthetic Oil Change',
    description: 'Premium synthetic oil replacement with filter check and fluid top-up.',
    icon: 'droplets',
    priceRange: '$89.99'
  },
  {
    id: 'engine-diagnostic',
    title: 'AI Engine Diagnostic',
    description: 'Complete computer scanning using our proprietary AI diagnostic tools.',
    icon: 'zap',
    priceRange: '$120.00'
  },
  {
    id: 'brake-service',
    title: 'Ceramic Brake Upgrade',
    description: 'Installation of high-performance ceramic pads and rotors.',
    icon: 'wrench',
    priceRange: '$350.00'
  },
  {
    id: 'custom-paint',
    title: 'Custom Wrap & Paint',
    description: 'Full body vinyl wraps, ceramic coating, and custom paint jobs.',
    icon: 'paint',
    priceRange: '$2,500.00'
  },
  {
    id: 'suspension',
    title: 'Suspension Tuning',
    description: 'Coilover installation, lowering, and track-day alignment setups.',
    icon: 'gauge',
    priceRange: '$500.00'
  },
  {
    id: 'ev-maintenance',
    title: 'EV Battery Health',
    description: 'Specialized maintenance for Tesla, Rivian, and other EV platforms.',
    icon: 'zap',
    priceRange: '$150.00'
  }
];

const SERVICES_DE: ServiceItem[] = [
  {
    id: 'oil-change',
    title: 'Synthetischer Ölwechsel',
    description: 'Premium-Synthetikölwechsel mit Filterprüfung und Flüssigkeitsauffüllung.',
    icon: 'droplets',
    priceRange: '$89.99'
  },
  {
    id: 'engine-diagnostic',
    title: 'KI-Motordiagnose',
    description: 'Vollständiger Computerscan mit unseren proprietären KI-Diagnosetools.',
    icon: 'zap',
    priceRange: '$120.00'
  },
  {
    id: 'brake-service',
    title: 'Keramikbremsen-Upgrade',
    description: 'Installation von Hochleistungs-Keramikbelägen und -rotoren.',
    icon: 'wrench',
    priceRange: '$350.00'
  },
  {
    id: 'custom-paint',
    title: 'Individuelle Lackierung & Folierung',
    description: 'Ganzkörper-Vinylfolierung, Keramikbeschichtung und individuelle Lackierungen.',
    icon: 'paint',
    priceRange: '$2,500.00'
  },
  {
    id: 'suspension',
    title: 'Fahrwerksabstimmung',
    description: 'Gewindefahrwerk-Installation, Tieferlegung und Rennstrecken-Setup.',
    icon: 'gauge',
    priceRange: '$500.00'
  },
  {
    id: 'ev-maintenance',
    title: 'EV-Batteriegesundheit',
    description: 'Spezialisierte Wartung für Tesla, Rivian und andere EV-Plattformen.',
    icon: 'zap',
    priceRange: '$150.00'
  }
];

export const getServices = (lang: Language): ServiceItem[] => {
  switch (lang) {
    case 'es': return SERVICES_ES;
    case 'de': return SERVICES_DE;
    default: return SERVICES_EN;
  }
};
