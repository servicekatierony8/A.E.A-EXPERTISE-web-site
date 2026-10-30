import React from 'react';
import { ShieldCheck, Scale, Award, Users, CheckCircle, MapPin, Building, FileCheck2, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="cabinet" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            À Propos du Cabinet
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            A.E.A EXPERTISE : L'Indépendance & la Rigueur au Cœur du Plateau
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Établi au 24 Boulevard de la République au Plateau, le <strong>Cabinet Afrique Experts Associés (A.E.A EXPERTISE)</strong> est un acteur de référence dans l'évaluation technique, économique et juridique des actifs immobiliers, fonciers et industriels en Côte d'Ivoire.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-xl font-bold text-slate-900">
              Notre Histoire & Notre Vocation
            </h3>
            <p>
              Fondé pour répondre aux exigences croissantes de transparence sur le marché immobilier ivoirien, le Cabinet Afrique Experts Associés apporte un éclairage technique impartial aux acteurs économiques : directions de crédit bancaire, compagnies d'assurances, institutions judiciaires, promoteurs et familles détentrices de patrimoine.
            </p>
            <p>
              Situés au 1er étage de l'<strong>Immeuble HAMZA</strong> (au-dessus de Canal+ Store, à deux pas de la SIB et face au jardin public), nos bureaux constituent un centre névralgique pour instruire les dossiers de toute la Côte d'Ivoire, d'Abidjan jusqu'aux bassins économiques de San Pedro, Yamoussoukro, Bouaké et Korhogo.
            </p>
            <p>
              Notre statut de cabinet d'expertise indépendant nous interdit toute activité de spéculation immobilière. Cette étanchéité déontologique assure que chacune de nos conclusions reflète fidèlement la réalité économique et physique de l'actif, sans complaisance.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Siège Opérationnel & Archives</span>
              </div>
              <div className="text-xs text-slate-600">
                24 Boulevard de la République, Immeuble HAMZA, 1er Étage, Plateau · 04 BP 183 Abidjan 04
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src="/src/assets/images/cabinet_office_meeting_1793313109771.jpg"
                alt="Direction et experts en réunion au cabinet A.E.A EXPERTISE Plateau Abidjan"
                className="w-full h-[400px] lg:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent text-white">
                <div className="text-xs font-semibold text-amber-400">Pôle d'arbitrage et d'évaluation</div>
                <div className="text-sm font-bold">Cabinet Afrique Experts Associés · Abidjan Plateau</div>
                <div className="text-xs text-slate-300 mt-0.5">Visites contradictoires et délivrance de rapports certifiés</div>
              </div>
            </div>
          </div>

        </div>

        {/* Section: Notre Équipe Pluridisciplinaire */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
              Capital Humain & Savoir-Faire
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Une Équipe Pluridisciplinaire de Haut Niveau
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              L'évaluation patrimoniale ne se limite pas à un calcul mathématique : elle requiert le croisement de l'ingénierie civile, du droit foncier et de l'analyse financière.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Team Pole 1 */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Experts Immobiliers & Foncier</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spécialistes chevronnés du marché ivoirien, habilités pour l'évaluation de la valeur vénale, de la valeur locative et des garanties hypothécaires.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Bâtiments, terrains & lotissements
              </div>
            </div>

            {/* Team Pole 2 */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Ingénieurs Génie Civil & BTP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contrôle de la pathologie du bâtiment, solidité des structures, détection des fissures, affaissements et chiffrage des désordres.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Diagnostic structurel & chiffrage
              </div>
            </div>

            {/* Team Pole 3 */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Juristes & Experts Cadastraux</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vérification rigoureuse des chaînes de propriété, conformité des ACD, purge des droits coutumiers et régularisation des baux commerciaux OHADA.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Sécurisation juridique & contentieux
              </div>
            </div>

            {/* Team Pole 4 */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Évaluateurs Industriels & Sinistres</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chiffrage des unités d'exploitation, machines, parcs industriels et constat contradictoire de dégâts des eaux et incendies.
              </p>
              <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200">
                Usines, entrepôts & matériel
              </div>
            </div>

          </div>
        </div>

        {/* Section: Nos 4 Engagements Majeurs */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Charte Déontologique
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Les Engagements Fondamentaux d'A.E.A EXPERTISE
            </h3>
            <p className="mt-2 text-slate-300 text-sm">
              Chaque mission confiée à notre cabinet est régie par un cadre déontologique strict pour garantir la pleine opposabilité de nos conclusions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white">1. Indépendance & Impartialité Inconditionnelles</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nous agissons sans parti pris, indépendamment des intérêts de négociation des parties. Nos évaluations reflètent la réalité objective du marché sans surévaluation de complaisance ni sous-évaluation préjudiciable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white">2. Secret Professionnel & Confidentialité</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  L'ensemble des documents financiers, titres fonciers, plans de construction et données personnelles confiés au cabinet font l'objet d'un secret professionnel rigoureux et d'un archivage sécurisé.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white">3. Rigueur Scientifique & Normes Bancaires</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nos méthodes de calcul obéissent aux standards de la Charte de l'Expertise Immobilière et aux directives prudentielles de la BCEAO / UMOA pour l'octroi de concours bancaires et garanties réelles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white">4. Réactivité Opérationnelle & Proximité</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Présents au Plateau, nous garantissons une prise en charge immédiate avec visite des lieux sous 24h à 48h sur Abidjan et une restitution des rapports dans les délais contractuels convenus.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
