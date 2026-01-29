import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  t: {
    pill: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaVisualizer: string;
    ctaServices: string;
  };
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, t }) => {
  return (
    <div className="relative isolate pt-14 lg:pt-32">
      
      <div className="py-12 sm:py-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            
            <div className="animate-slide-up opacity-0" style={{animationFillMode: 'forwards'}}>
              <div className="mb-8 inline-flex items-center gap-2 border-l-2 border-brand-400 bg-black/60 backdrop-blur-md px-4 py-2 pr-6">
                <Zap className="h-4 w-4 text-brand-400" />
                <span className="text-sm font-bold text-white tracking-widest uppercase shadow-black drop-shadow-md">
                  {t.pill}
                </span>
              </div>
            </div>

            <h1 className="font-display text-6xl font-black tracking-tighter text-white sm:text-8xl animate-slide-up opacity-0 uppercase italic leading-[0.9] drop-shadow-2xl" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              {t.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-300 to-brand-600">{t.titleHighlight}</span>
            </h1>
            
            <p className="mt-8 text-xl leading-8 text-white font-light max-w-2xl mx-auto animate-slide-up opacity-0 drop-shadow-lg" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              {t.subtitle}
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <button
                onClick={onCtaClick}
                className="group relative flex items-center gap-3 bg-brand-400 px-8 py-4 text-base font-black text-black uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(250,204,21,0.3)] skew-x-[-12deg]"
              >
                <span className="skew-x-[12deg] flex items-center gap-2">
                   {t.ctaVisualizer}
                   <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <a href="#services" className="group flex items-center gap-2 text-base font-bold text-white uppercase tracking-wider hover:text-brand-400 transition-colors bg-black/40 px-6 py-3 backdrop-blur-sm skew-x-[-12deg]">
                <span className="skew-x-[12deg] flex items-center gap-2">
                  {t.ctaServices} <ChevronRight className="h-4 w-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;