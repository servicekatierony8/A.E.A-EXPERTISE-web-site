import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MissionSimulator } from './components/MissionSimulator';
import { MethodologySection } from './components/MethodologySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>();
  const [simulatorPreloadData, setSimulatorPreloadData] = useState<
    | {
        propertyType: string;
        objective: string;
        location: string;
        surface: string;
        details: string;
      }
    | undefined
  >();

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setSelectedServiceForQuote(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(undefined);
    setSimulatorPreloadData(undefined);
  };

  const handleSimulatorPreload = (data: {
    propertyType: string;
    objective: string;
    location: string;
    surface: string;
    details: string;
  }) => {
    setSimulatorPreloadData(data);
    setSelectedServiceForQuote(`Expertise : ${data.propertyType}`);
    setIsQuoteModalOpen(true);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToSimulator={scrollToSimulator}
        />

        {/* Section À Propos (Histoire, Équipe pluridisciplinaire, Engagements) */}
        <AboutSection />

        {/* Section Nos Services Immobiliers (Estimation, Gestion Locative, Transaction, Sinistres...) */}
        <ServicesSection
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        {/* Interactive Mission Simulator & Document Guide */}
        <MissionSimulator onPreloadQuote={handleSimulatorPreload} />

        {/* Méthodologie d'Évaluation en 4 Étapes */}
        <MethodologySection />

        {/* Cas Pratiques & Références en Côte d'Ivoire */}
        <CaseStudiesSection />

        {/* Foire Aux Questions Pratiques */}
        <FaqSection />

        {/* Section Contact & Formulaire Interactif */}
        <ContactSection initialService={selectedServiceForQuote} />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Direct Contact Actions */}
      <aside aria-label="Assistance directe" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={`https://wa.me/2250707529517?text=${encodeURIComponent(
            "Bonjour Cabinet A.E.A EXPERTISE,\nJe souhaite échanger directement avec un expert évaluateur concernant un bien immobilier en Côte d'Ivoire."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transition-all hover:scale-105 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          aria-label="Contacter sur WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Expert : 07 07 52 95 17</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </aside>

      {/* Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        prefillService={selectedServiceForQuote}
        prefillData={simulatorPreloadData}
      />
    </div>
  );
}
