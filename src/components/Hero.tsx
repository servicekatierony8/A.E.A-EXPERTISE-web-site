import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onScrollToSimulator }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image with deliberate contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_abidjan_architecture_1793313108178.jpg"
          alt="Vue aérienne du quartier d'affaires du Plateau à Abidjan"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          
          {/* Unboxed subtle kicker (Zero-Pill compliant) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-4">
            <span>Cabinet Afrique Experts Associés</span>
            <span aria-hidden="true">·</span>
            <span>Abidjan Le Plateau</span>
            <span aria-hidden="true">·</span>
            <span>Agréé & Opposable</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight mb-6">
            Expertise Immobilière, Évaluation Patrimoniale & Foncier en Côte d'Ivoire
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            Implanté au cœur du Plateau, le Cabinet A.E.A EXPERTISE évalue avec impartialité et exactitude vos immeubles, terrains, unités industrielles et fonds de commerce. Des rapports techniques certifiés pour vos crédits bancaires, successions, assurances et transactions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Demander une expertise certifiée</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onScrollToSimulator}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg backdrop-blur-sm transition-colors whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Simulateur & Documents requis</span>
            </button>
          </div>

          {/* Trust points list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Conforme aux normes bancaires de l'UMOA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rapports opposables aux tribunaux & assurances</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>24 Bd de la République, Imm. HAMZA, Plateau</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Visite sur site sous 24h à 48h</span>
            </div>
          </div>

        </div>
      </div>

      {/* KPI Proof Strip */}
      <div className="relative z-10 bg-slate-950 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
