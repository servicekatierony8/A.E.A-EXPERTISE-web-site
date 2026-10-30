import React, { useState } from 'react';
import { Calculator, CheckCircle2, Clock, FileText, Send, Sparkles, MessageSquare } from 'lucide-react';
import { PROPERTY_TYPES, MISSION_OBJECTIVES, LOCATIONS_LIST, COMPANY_INFO } from '../data/companyData';

interface MissionSimulatorProps {
  onPreloadQuote: (data: {
    propertyType: string;
    objective: string;
    location: string;
    surface: string;
    details: string;
  }) => void;
}

export const MissionSimulator: React.FC<MissionSimulatorProps> = ({ onPreloadQuote }) => {
  const [selectedProperty, setSelectedProperty] = useState(PROPERTY_TYPES[0].id);
  const [selectedObjective, setSelectedObjective] = useState(MISSION_OBJECTIVES[0].id);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS_LIST[0]);
  const [surfaceArea, setSurfaceArea] = useState('350');
  const [urgencyLevel, setUrgencyLevel] = useState<'standard' | 'express'>('standard');

  // Dynamic calculation of recommended methodology and document checklist
  const getMethodologyAdvice = () => {
    switch (selectedProperty) {
      case 'residential':
        return {
          methods: [
            "Méthode par comparaison directe (analyse des transactions récentes dans la commune)",
            "Méthode du coût de remplacement déprécié (valeur du terrain + coût de reconstruction vétusté déduite)"
          ],
          delay: urgencyLevel === 'express' ? '48 heures' : '3 à 4 jours ouvrés',
          docs: [
            "Titre foncier / Arrêté de Concession Définitive (ACD) ou Lettre d'attribution",
            "Extrait topographique ou plan de situation visé",
            "Permis de construire ou certificat de conformité (si disponible)",
            "Dernières quittances d'impôt foncier ou avis d'imposition"
          ]
        };
      case 'building':
        return {
          methods: [
            "Méthode par capitalisation du revenu locatif (évaluation du rendement brut et net)",
            "Méthode par comparaison directe par mètre carré pondéré",
            "Méthode du coût de reconstruction à neuf déprécié"
          ],
          delay: urgencyLevel === 'express' ? '72 heures' : '5 jours ouvrés',
          docs: [
            "Titre foncier ou ACD de la parcelle",
            "Plans architecturaux complets (RDC et étages types)",
            "État locatif actuel : liste des locataires, loyers mensuels et charges",
            "Contrats de bail en cours et justificatifs de paiement"
          ]
        };
      case 'land':
        return {
          methods: [
            "Méthode par comparaison directe avec ajustement topographique et viabilisation",
            "Méthode de la charge foncière (bilan promoteur déduit du potentiel constructible)"
          ],
          delay: urgencyLevel === 'express' ? '48 heures' : '3 jours ouvrés',
          docs: [
            "Titre de propriété (ACD, CMP, Arrêté ministériel)",
            "Plan de bornage contradictoire dressé par un géomètre-expert agréé",
            "Certificat d'urbanisme ou statut au Plan d'Occupation des Sols (POS)",
            "Protocole de purge des droits coutumiers (le cas échéant)"
          ]
        };
      case 'commercial':
        return {
          methods: [
            "Méthode par le chiffre d'affaires et la marge brute moyenne des 3 derniers exercices",
            "Méthode de calcul du droit au bail selon le différentiel locatif de marché",
            "Évaluation du pas-de-porte et coefficient de commercialité"
          ],
          delay: urgencyLevel === 'express' ? '72 heures' : '4 à 5 jours ouvrés',
          docs: [
            "Contrat de bail commercial en cours (régime OHADA)",
            "États financiers des 3 dernières années (bilans & comptes de résultat)",
            "Tableau d'amortissement des agencements et matériels",
            "Quittances de loyer des 6 derniers mois"
          ]
        };
      case 'industrial':
        return {
          methods: [
            "Méthode de la valeur d'utilité et valeur à neuf de remplacement",
            "Analyse technique de la vétusté mécanique et structurelle",
            "Évaluation combinée foncier + corps de bâtiment + installations techniques"
          ],
          delay: urgencyLevel === 'express' ? '4 à 5 jours' : '6 à 8 jours ouvrés',
          docs: [
            "Bail emphytéotique ou titre foncier en zone industrielle",
            "Plans des installations industrielles et réseaux fluides/électricité",
            "Inventaire côtés des machines avec dates de mise en service et factures",
            "Rapports de conformité et arrêtés d'exploitation classée (ICPE)"
          ]
        };
      case 'damage':
        return {
          methods: [
            "Constat contradictoire technique in situ avec métré précis des désordres",
            "Devis estimatif quantitatif de remise en état à l'identique (prix bordereau BTP)",
            "Détermination de la causalité technique et des responsabilités présumées"
          ],
          delay: urgencyLevel === 'express' ? '24 heures (Visite immédiate)' : '48 heures',
          docs: [
            "Contrat d'assurance multirisque habitation ou professionnelle",
            "Déclaration initiale de sinistre transmise à l'assureur",
            "Factures d'origine ou d'entretien des équipements sinistrés",
            "Historique des interventions et correspondances avec les tiers"
          ]
        };
      default:
        return {
          methods: ["Méthode par comparaison directe et coût de remplacement"],
          delay: "3 à 5 jours ouvrés",
          docs: ["Titre de propriété", "Pièce d'identité du demandeur", "Extrait cadastral"]
        };
    }
  };

  const advice = getMethodologyAdvice();
  const currentPropertyObj = PROPERTY_TYPES.find((p) => p.id === selectedProperty);
  const currentObjectiveObj = MISSION_OBJECTIVES.find((o) => o.id === selectedObjective);

  const handleTransferToQuote = () => {
    onPreloadQuote({
      propertyType: currentPropertyObj?.label || selectedProperty,
      objective: currentObjectiveObj?.label || selectedObjective,
      location: selectedLocation,
      surface: surfaceArea ? `${surfaceArea} m²` : 'Non précisée',
      details: `Demande formulée via le simulateur A.E.A - Délai souhaité: ${urgencyLevel === 'express' ? 'Traitement Express' : 'Standard'}`,
    });
  };

  const generateWhatsAppMessage = () => {
    const text = `Bonjour A.E.A EXPERTISE,\nJe souhaite solliciter une mission d'expertise :\n- Type de bien : ${currentPropertyObj?.label}\n- Objectif : ${currentObjectiveObj?.label}\n- Localisation : ${selectedLocation}\n- Superficie : ${surfaceArea} m²\n- Délai souhaité : ${urgencyLevel === 'express' ? 'Urgent / Express' : 'Standard'}\nMerci de me recontacter pour fixer la visite.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="simulateur" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Outil d'Orientation en Ligne
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Simulateur de Mission & Guide Documentaire
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Configurez les caractéristiques de votre actif pour obtenir instantanément la méthodologie recommandée, la liste des justificatifs requis et le délai moyen d'instruction par le cabinet.
          </p>
        </div>

        {/* 2-Column Layout: Controls on Left, Synthesis on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Typologie */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                1. Typologie du bien ou de l'actif
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROPERTY_TYPES.map((pt) => {
                  const isChecked = selectedProperty === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedProperty(pt.id)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all ${
                        isChecked
                          ? 'border-slate-900 bg-white ring-1 ring-slate-900 font-semibold text-slate-950'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-slate-900 mb-0.5">{pt.label}</div>
                      <div className="text-[11px] text-slate-500 font-normal">{pt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Objectif */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                2. Finalité de l'expertise
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {MISSION_OBJECTIVES.map((obj) => {
                  const isChecked = selectedObjective === obj.id;
                  return (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`text-left px-3 py-2.5 rounded-lg border text-xs transition-all ${
                        isChecked
                          ? 'border-slate-900 bg-white ring-1 ring-slate-900 font-semibold text-slate-950'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {obj.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Localisation & Superficie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  3. Localisation géographique
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {LOCATIONS_LIST.map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  4. Superficie approximative (m²)
                </label>
                <input
                  type="number"
                  min="10"
                  max="1000000"
                  value={surfaceArea}
                  onChange={(e) => setSurfaceArea(e.target.value)}
                  placeholder="Ex : 450"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            {/* Step 5: Délai souhaité */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                5. Niveau d'urgence
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgencyLevel('standard')}
                  className={`py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                    urgencyLevel === 'standard'
                      ? 'border-slate-900 bg-white ring-1 ring-slate-900 font-bold text-slate-950'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  Délai Régulier (3 à 5 jours)
                </button>
                <button
                  type="button"
                  onClick={() => setUrgencyLevel('express')}
                  className={`py-2 px-3 text-xs rounded-lg border text-center transition-all ${
                    urgencyLevel === 'express'
                      ? 'border-amber-600 bg-amber-50 ring-1 ring-amber-600 font-bold text-amber-900'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  Urgence Express (24h à 48h)
                </button>
              </div>
            </div>

          </div>

          {/* Results Synthesis Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Diagnostic Pré-Cadrage A.E.A</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Cabinet Hamza · Plateau
              </span>
            </div>

            {/* Timing */}
            <div className="flex items-start gap-3 p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-300">Délai estimé pour remise du rapport</div>
                <div className="text-sm font-bold text-white tabular-nums">{advice.delay}</div>
              </div>
            </div>

            {/* Recommended methods */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Méthodes d'évaluation applicables
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {advice.methods.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checklist of docs */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Pièces à préparer pour l'expert</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {advice.docs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span className="leading-snug">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={handleTransferToQuote}
                className="w-full py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Transférer au formulaire de devis officiel</span>
              </button>

              <a
                href={`https://wa.me/2250707529517?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Envoyer ce récapitulatif sur WhatsApp (+225 07 07 52 95 17)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
