import React from 'react';
import { METHODOLOGY_STEPS } from '../data/companyData';
import { FileText, Camera, BarChart3, Award } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileText className="w-5 h-5" />;
      case 1:
        return <Camera className="w-5 h-5" />;
      case 2:
        return <BarChart3 className="w-5 h-5" />;
      case 3:
        return <Award className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <section id="methodologie" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Rigueur & Processus d'Évaluation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Notre Méthodologie en 4 Étapes
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Pour garantir l'opposabilité juridique et financière de nos conclusions, chaque mission suit un protocole technique standardisé, éprouvé auprès des banques de l'UMOA et des tribunaux ivoiriens.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 relative flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-500 font-mono">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                {idx === 0 && 'Contrôle préalable & conformité'}
                {idx === 1 && 'Relevé in situ & prise de cotes'}
                {idx === 2 && 'Croisement de 3 méthodes'}
                {idx === 3 && 'Conclusions définitives scellées'}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Explanatory Note on Methods */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                A. Méthode par Comparaison Directe
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Observation statistique et confrontation avec les transactions récentes constatées dans la même commune ou quartier (Plateau, Cocody, Marcory, Zone 4...), corrigées des facteurs de localisation et d'état général.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                B. Méthode par Capitalisation du Revenu
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Évaluation de la capacité bénéficiaire nette du bien immobilier, calculée en appliquant un taux de rendement locatif constaté sur le marché ivoirien aux loyers effectifs ou potentiels.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                C. Coût de Remplacement Déprécié
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Estimation de la valeur marchande du terrain nu augmentée du coût actuel de reconstruction à neuf des bâtiments, minoré d'un coefficient d'abattement pour vétusté technique et désuétude.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
