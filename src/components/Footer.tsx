import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Wordmark & Presentation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="w-7 h-7 rounded bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
                AEA
              </span>
              <span>A.E.A EXPERTISE</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Cabinet Afrique Experts Associés. Société spécialisée dans l'expertise immobilière, l'évaluation de matériel et d'usines, les constats contradictoires après sinistre et la régularisation foncière en Côte d'Ivoire.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Rapports certifiés conformes aux normes bancaires UMOA.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#cabinet" className="hover:text-amber-400 transition-colors">
                  Le Cabinet & L'Équipe
                </a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">
                  Nos Services Immobiliers
                </a>
              </li>
              <li>
                <a href="#simulateur" className="hover:text-amber-400 transition-colors">
                  Simulateur & Documents requis
                </a>
              </li>
              <li>
                <a href="#methodologie" className="hover:text-amber-400 transition-colors">
                  Méthodologie d'Évaluation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Repérage Plateau
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Pôles d'Expertise
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Estimation Vénale & Hypothécaire</li>
              <li>Gestion Locative & Administration</li>
              <li>Transaction & Audit Foncier (ACD)</li>
              <li>Matériel, Usines & Industrie</li>
              <li>Évaluation de Fonds de Commerce & Baux</li>
              <li>Constats de Dégâts des Eaux & Sinistres</li>
            </ul>
          </div>

          {/* Col 4: Contact & Coordinates */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Coordonnées Abidjan
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Plateau, 24 Bd de la République, Imm. HAMZA, 1er étage (face Jardin Public)</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Fixe : (+225) 27 20 21 21 53</span>
                  <span>Fixe : (+225) 27 20 22 33 27</span>
                  <span className="text-emerald-400">WhatsApp : (+225) 07 07 52 95 17</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-500 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Lun - Ven : 08h00 - 17h00 · 04 BP 183 Abidjan 04</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} A.E.A EXPERTISE (Afrique Experts Associés). Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span>Abidjan · Côte d'Ivoire</span>
            <span>Secret Professionnel Garanti</span>
            <button
              onClick={onOpenQuoteModal}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Demander une expertise
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
