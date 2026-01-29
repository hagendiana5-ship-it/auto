export type Language = 'es' | 'en' | 'de';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

export enum AppView {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  VISUALIZER = 'VISUALIZER',
  BOOKING = 'BOOKING'
}
