import React, { useState } from 'react';
import { ArrowUpRight, Check, Calculator, KeyRound, Handshake, AlertTriangle, Factory, FileSearch } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'estimation-evaluation':
        return <Calculator className="w-5 h-5" />;
      case 'gestion-locative':
        return <KeyRound className="w-5 h-5" />;
      case 'transaction-conseil':
        return <Handshake className="w-5 h-5" />;
      case 'constats-sinistres-degats':
        return <AlertTriangle className="w-5 h-5" />;
      case 'materiel-industrie':
        return <Factory className="w-5 h-5" />;
      case 'conseil-gestion-amo':
        return <FileSearch className="w-5 h-5" />;
      default:
        return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertises" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              Nos Pôles de Compétences
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Nos Services Immobiliers & Expertises Agréées
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              A.E.A EXPERTISE intervient sur l'ensemble de la chaîne de valeur immobilière en Côte d'Ivoire : de l'estimation vénale certifiée à la transaction sécurisée, en passant par la gestion locative rigoureuse et le règlement technique des sinistres.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-slate-500 font-medium">
            Siège Abidjan Plateau · Imm. HAMZA · Rayonnement National
          </div>
        </div>

        {/* 3 Core Pillar Focus Cards: Estimation, Gestion Locative, Transaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Estimation */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs hover:border-amber-400/80 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-slate-400 mb-1">01 · ÉVALUATION AGRÉÉE</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Estimation Immobilière
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Détermination certifiée de la valeur vénale, locative et hypothécaire de vos bâtiments, terrains (ACD), sites industriels et fonds de commerce. Rapports reconnus par les banques et tribunaux.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Valeur vénale marchande & forcée</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dossiers de crédit hypothécaire UMOA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Calcul d'indemnité d'éviction & bail</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceId('estimation-evaluation')}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                Détails méthodologiques
              </button>
              <button
                onClick={() => onSelectServiceForQuote('Estimation & Évaluation Immobilière')}
                className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
              >
                <span>Demander l'estimation</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Gestion Locative */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs hover:border-amber-400/80 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5">
                <KeyRound className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-slate-400 mb-1">02 · ADMINISTRATION DU PATRIMOINE</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Gestion Locative
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Prise en charge intégrale de vos biens pour sécuriser vos revenus. Filtrage des locataires, baux conformes au droit OHADA, recouvrement des loyers et entretien technique permanent.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sélection et solvabilité des locataires</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Encaissement ponctuel et reversements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>États des lieux certifiés par expert</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceId('gestion-locative')}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                Formules de gestion
              </button>
              <button
                onClick={() => onSelectServiceForQuote('Gestion Locative & Administration de Biens')}
                className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
              >
                <span>Confier un mandat</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Transaction */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-xs hover:border-amber-400/80 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center mb-5">
                <Handshake className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-slate-400 mb-1">03 · ACHAT & VENTE SÉCURISÉS</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Transaction Immobilière
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Assistance d'expert pour acheter ou vendre au juste prix. Audit technique avant acquisition (Due Diligence), vérification absolue des titres fonciers (ACD, CMP) et négociation sécurisée.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vente au cours réel du marché abidjanais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Audit des titres fonciers & conformité ACD</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Accompagnement notarié sans litige</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceId('transaction-conseil')}
                className="text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                Audit & Protocole
              </button>
              <button
                onClick={() => onSelectServiceForQuote('Transaction Immobilière & Conseil en Investissement')}
                className="text-xs font-semibold text-slate-900 hover:text-amber-600 flex items-center gap-1"
              >
                <span>Confier un projet</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Interactive Explorer */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Sélectionnez une mission pour afficher la fiche technique complète :
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-200/80 rounded-xl">
            {SERVICES_DATA.map((srv) => {
              const isActive = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`flex flex-col items-center justify-center p-3 text-center rounded-lg transition-all text-xs font-semibold ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/60'
                  }`}
                >
                  <span className={`mb-1.5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`}>
                    {getServiceIcon(srv.id)}
                  </span>
                  <span className="leading-tight line-clamp-2">{srv.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Detailed Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Mission {activeService.number}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-500 font-medium">
                  Cabinet Afrique Experts Associés
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                {activeService.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeService.fullDesc}
              </p>

              {/* Subcategories / Scope */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Périmètre technique & Opérations couvertes
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.subCategories.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Target Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Livrables officiels
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {activeService.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Profils mandants
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {activeService.clientTypes.map((client, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>Demander un devis pour {activeService.title.split('&')[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Contextual illustration */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={
                    activeService.image ||
                    '/src/assets/images/real_estate_valuation_inspection_1793313108928.jpg'
                  }
                  alt={activeService.title}
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-900">
                    Garantie d'impartialité & d'opposabilité A.E.A
                  </div>
                  <div>
                    Toutes nos interventions sont conduites selon la réglementation en vigueur en République de Côte d'Ivoire et les normes internationales d'évaluation.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
