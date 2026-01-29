import React, { useState } from 'react';
import { Menu, X, Gauge, Phone, MapPin, ShieldCheck, Lock } from 'lucide-react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Visualizer from './components/Visualizer';
import BookingForm from './components/BookingForm';
import { getServices } from './constants';
import { TRANSLATIONS } from './translations';
import { AppView, ServiceItem, Language } from './types';

function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('de'); 
  const [showPrivacy, setShowPrivacy] = useState(false);

  const t = TRANSLATIONS[lang];
  const services = getServices(lang);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-400 selection:text-black">
      
      {/* VIDEO BACKGROUND SECTION */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50 z-10" /> 
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          {/* Greift auf die Datei im public-Ordner zu */}
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateTo(AppView.HOME)}>
                <div className="w-10 h-10 bg-brand-400 rounded flex items-center justify-center skew-x-[-12deg]">
                  <Gauge className="text-black w-6 h-6" />
                </div>
                <span className="font-display italic font-extrabold text-2xl tracking-tighter uppercase">
                  APEX <span className="text-brand-400">AUTOWORKS</span>
                </span>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => navigateTo(AppView.HOME)} className="hover:text-brand-400 font-medium uppercase tracking-widest text-sm">{t.nav.home}</button>
                <button onClick={() => navigateTo(AppView.SERVICES)} className="hover:text-brand-400 font-medium uppercase tracking-widest text-sm">{t.nav.services}</button>
                <button onClick={() => navigateTo(AppView.VISUALIZER)} className="hover:text-brand-400 font-medium uppercase tracking-widest text-sm">{t.nav.visualizer}</button>
                <button onClick={() => navigateTo(AppView.BOOKING)} className="bg-brand-400 text-black px-6 py-2 font-bold uppercase tracking-widest skew-x-[-12deg] hover:bg-white transition-colors">
                  {t.nav.book}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {currentView === AppView.HOME && (
            <Hero onCtaClick={() => navigateTo(AppView.VISUALIZER)} lang={lang} />
          )}
          {currentView === AppView.SERVICES && (
            <div className="py-24 px-4 max-w-7xl mx-auto">
              <h2 className="text-4xl font-display italic font-black mb-12 uppercase">{t.services.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map(s => (
                  <ServiceCard key={s.id} service={s} onClick={() => navigateTo(AppView.BOOKING)} />
                ))}
              </div>
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