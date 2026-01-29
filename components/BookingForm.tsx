import React from 'react';

interface BookingFormProps {
  t: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    details: string;
    submit: string;
  }
}

const BookingForm: React.FC<BookingFormProps> = ({ t }) => {
  return (
    <div className="relative py-16 sm:py-24" id="contact">
      <div className="relative mx-auto max-w-5xl bg-black border border-white/10 p-1">
         {/* Decorative Bars */}
         <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 mb-1"></div>
         
         <div className="bg-dark-900 p-8 lg:p-16 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H100V100H0V0Z" fill="white"/>
              </svg>
            </div>

            <div className="mx-auto max-w-2xl text-center mb-12 relative z-10">
              <h2 className="text-4xl font-black italic tracking-tighter text-white sm:text-5xl uppercase">{t.title}</h2>
              <p className="mt-4 text-lg leading-8 text-gray-400 font-light">
                {t.subtitle}
              </p>
            </div>
            
            <form className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 relative z-10">
              <div className="group">
                <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{t.firstName}</label>
                <div className="mt-1">
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full bg-dark-800 border-0 border-b-2 border-white/10 px-0 py-3 text-white focus:border-brand-400 focus:ring-0 sm:text-sm transition-colors placeholder:text-gray-700" placeholder="ENTER NAME" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{t.lastName}</label>
                <div className="mt-1">
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full bg-dark-900 border-0 border-b-2 border-white/10 px-0 py-3 text-white focus:border-brand-400 focus:ring-0 sm:text-sm transition-colors placeholder:text-gray-700" placeholder="ENTER LAST NAME" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{t.email}</label>
                <div className="mt-1">
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full bg-dark-900 border-0 border-b-2 border-white/10 px-0 py-3 text-white focus:border-brand-400 focus:ring-0 sm:text-sm transition-colors placeholder:text-gray-700" placeholder="ENTER EMAIL ADDRESS" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-brand-400 mb-2">{t.details}</label>
                <div className="mt-1">
                  <textarea name="message" id="message" rows={4} className="block w-full bg-dark-900 border-0 border-b-2 border-white/10 px-0 py-3 text-white focus:border-brand-400 focus:ring-0 sm:text-sm transition-colors placeholder:text-gray-700 resize-none" placeholder="DESCRIBE REQUIRED SERVICES"></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 mt-4">
                  <button type="button" className="w-full bg-brand-400 py-4 text-center text-sm font-black text-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform active:scale-95 skew-x-[-12deg]">
                    <span className="block skew-x-[12deg]">{t.submit}</span>
                  </button>
              </div>
            </form>
         </div>
      </div>
    </div>
  );
};

export default BookingForm;