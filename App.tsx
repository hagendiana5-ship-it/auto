import React, { useState } from 'react';
import { Gauge } from 'lucide-react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Visualizer from './components/Visualizer';
import BookingForm from './components/BookingForm';
import { getServices } from './constants';
import { TRANSLATIONS } from './translations';
import { AppView, Language } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [lang] = useState<Language>('de');
  const t = TRANSLATIONS[lang];
  const services = getServices(lang);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      
      {/* 1. DAS VIDEO - Mit festen CSS-Werten für maximale Sicherheit */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          zIndex: 0,
          objectFit: 'cover',
          opacity: 0.5
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* 2. DER INHALT - Wir zwingen alles auf z-10 und machen Hintergründe transparent */}
      <div className="relative z-10 w-full">
        <nav className="fixed top-0 w-full h-20 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 z-50">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo(AppView.HOME)}>
            <div className="w-10 h-10 bg-brand-400 rounded flex items-center justify-center skew-x-[-12deg]">
              <Gauge className="text-black w-6 h-6" />
            </div>
            <span className="font-bold text-2xl italic">APEX <span className="text-brand-400">AUTOWORKS</span></span>
          </div>
          
          <div className="flex gap-6">
            <button onClick={() => navigateTo(AppView.HOME)} className="uppercase text-xs tracking-tighter hover:text-brand-400">{t.nav.home}</button>
            <button onClick={() => navigateTo(AppView.SERVICES)} className="uppercase text-xs tracking-tighter hover:text-brand-400">{t.nav.services}</button>
            <button onClick={() => navigateTo(AppView.VISUALIZER)} className="uppercase text-xs tracking-tighter hover:text-brand-400">{t.nav.visualizer}</button>
          </div>
        </nav>

        <main className="pt-20 w-full bg-transparent">
          {currentView === AppView.HOME && <Hero onCtaClick={() => navigateTo(AppView.VISUALIZER)} lang={lang} />}
          {currentView === AppView.SERVICES && (
            <div className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {services.map(s => <ServiceCard key={s.id} service={s} onClick={() => navigateTo(AppView.BOOKING)} />)}
            </div>
          )}
          {currentView === AppView.VISUALIZER && <Visualizer lang={lang} />}
          {currentView === AppView.BOOKING && <BookingForm lang={lang} />}
        </main>
      </div>
    </div>
  );
}

export default App;