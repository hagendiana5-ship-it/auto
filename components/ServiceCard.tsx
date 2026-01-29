import React from 'react';
import { ServiceItem } from '../types';
import { Wrench, Gauge, Droplets, Zap, Car, Paintbrush } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
  labels: {
    startsAt: string;
    bookNow: string;
  };
}

const getIcon = (iconName: string) => {
  const props = { className: "h-8 w-8 text-white group-hover:text-brand-900 transition-colors" };
  switch (iconName) {
    case 'wrench': return <Wrench {...props} />;
    case 'gauge': return <Gauge {...props} />;
    case 'droplets': return <Droplets {...props} />;
    case 'zap': return <Zap {...props} />;
    case 'paint': return <Paintbrush {...props} />;
    default: return <Car {...props} />;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, labels }) => {
  return (
    <div 
      onClick={() => onClick(service)}
      className="group relative flex flex-col h-full bg-black/60 backdrop-blur-sm border border-white/5 hover:border-brand-500/50 p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
    >
      {/* Hover Background Fill */}
      <div className="absolute inset-0 bg-brand-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
           <div className="flex h-16 w-16 items-center justify-center bg-white/5 border border-white/10 group-hover:bg-brand-500 group-hover:border-transparent transition-colors duration-300 transform -skew-x-12">
             <div className="skew-x-12">{getIcon(service.icon)}</div>
           </div>
           <span className="text-brand-500 group-hover:text-black font-mono text-xs opacity-50">0{Math.floor(Math.random() * 9) + 1}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white uppercase italic tracking-tight group-hover:text-black transition-colors mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-brand-900 transition-colors mb-6 flex-grow font-medium">
          {service.description}
        </p>
        
        <div className="mt-auto border-t border-white/10 group-hover:border-black/10 pt-4 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-900">
             {labels.startsAt} <span className="text-white group-hover:text-black text-sm ml-1">{service.priceRange}</span>
          </span>
          <div className="h-8 w-8 rounded-full bg-white/5 group-hover:bg-black/10 flex items-center justify-center">
             <span className="text-brand-400 group-hover:text-black font-bold text-lg leading-none mb-1">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;