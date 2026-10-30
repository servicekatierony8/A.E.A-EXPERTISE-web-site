import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: (prefillCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
            <span className="w-8 h-8 rounded bg-slate-900 text-amber-500 font-bold flex items-center justify-center text-sm tracking-normal">
              AEA
            </span>
            <span>A.E.A EXPERTISE</span>
          </a>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a 
              href="#cabinet" 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Le Cabinet
            </a>
            <a 
              href="#expertises" 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Nos Expertises
            </a>
            <a 
              href="#simulateur" 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Simulateur
            </a>
            <a 
              href="#methodologie" 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Méthodologie
            </a>
            <a 
              href="#contact" 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-slate-900"
            >
              Demander une expertise
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 lg:hidden focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700">
            <a
              href="#cabinet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100"
            >
              Le Cabinet
            </a>
            <a
              href="#expertises"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100"
            >
              Nos Expertises
            </a>
            <a
              href="#simulateur"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100"
            >
              Simulateur de mission
            </a>
            <a
              href="#methodologie"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100"
            >
              Méthodologie & Déontologie
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-100"
            >
              Coordonnées & Accès Plateau
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              Demander une expertise
            </button>
            <a
              href={`tel:${COMPANY_INFO.phones.landline1.replace(/\s+/g, '')}`}
              className="w-full text-center py-2 px-4 text-xs font-medium text-slate-700 border border-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>Appeler le cabinet : {COMPANY_INFO.phones.landline1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
