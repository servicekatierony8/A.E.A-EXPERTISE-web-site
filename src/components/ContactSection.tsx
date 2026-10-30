import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, Building, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || SERVICES_DATA[0].title);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field validation
    if (!fullName.trim()) {
      setErrorMessage('Veuillez indiquer votre nom complet.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Veuillez saisir une adresse email valide.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setErrorMessage('Veuillez saisir un numéro de téléphone valide (ex : +225 07 07 52 95 17).');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Veuillez préciser votre demande dans le message (au moins 10 caractères).');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission latency settled within budget
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrorMessage('');
  };

  const generateWhatsAppDirectLink = () => {
    const text = `Bonjour Cabinet A.E.A EXPERTISE,\nJe vous contacte depuis votre site vitrine :\n- Nom : ${fullName || 'Client'}\n- Service : ${service}\n- Téléphone : ${phone || 'Non renseigné'}\n- Email : ${email || 'Non renseigné'}\n- Message : ${message || 'Demande de renseignement pour expertise immobilière'}`;
    return `https://wa.me/2250707529517?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Contact & Consultation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Échangez avec un Expert du Cabinet
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Que vous soyez une institution bancaire, une entreprise, un notaire ou un particulier, nos experts sont à votre disposition pour analyser vos besoins et convenir d'une visite sur les lieux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Merci <strong>{fullName}</strong>. Votre dossier a été enregistré par le Cabinet Afrique Experts Associés. Un expert vous rappellera sous <strong>24 heures ouvrées</strong> pour convenir des modalités.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                  <div className="font-bold text-slate-900 text-sm pb-1 border-b border-slate-100">
                    Récapitulatif de votre demande :
                  </div>
                  <div><strong>Prestation :</strong> {service}</div>
                  <div><strong>Email :</strong> {email}</div>
                  <div><strong>Téléphone :</strong> {phone}</div>
                  <div className="pt-1 text-slate-500 italic">"{message}"</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a
                    href={generateWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Transmettre aussi sur WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-200 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Formulaire de Contact & Devis d'Expertise
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Tous les champs sont requis. Réponse rapide garantie par notre secrétariat général du Plateau.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Nom */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Nom complet ou Raison sociale <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex : M. Koffi Kouamé / Société Civile Immobilière"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Adresse email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Téléphone / WhatsApp <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+225 07 07 52 95 17"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                      required
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Prestation immobilière souhaitée <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Autre demande spécifique">Autre demande spécifique / Conseil patrimonial</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Description de votre bien ou projet <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Précisez la typologie du bien (villa, immeuble, terrain nu, entrepôt...), sa commune ou ville en Côte d'Ivoire (Plateau, Cocody, Marcory, San Pedro...) et l'objet de l'expertise (crédit bancaire, vente, succession, litige)..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 resize-y"
                    required
                  />
                </div>

                {/* Submit button & WhatsApp alternative */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande d'expertise</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/2250707529517?text=${encodeURIComponent("Bonjour Cabinet A.E.A EXPERTISE, je souhaite échanger directement avec un expert.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-2">
                  🔒 Vos données personnelles et patrimoniales sont couvertes par le strict secret professionnel.
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Verified Office Coordinates & Plateau Map Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Coordinates Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Siège Social Officiel
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Cabinet Afrique Experts Associés
                </h3>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Adresse géographique :</div>
                  <div>Plateau, 24 Boulevard de la République</div>
                  <div>Immeuble HAMZA, 1er Étage</div>
                  <div className="text-amber-400/90 text-xs mt-1">
                    Au-dessus de Canal+ Store, près de la SIB, face au jardin public
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Boîte Postale : 04 BP 183 Abidjan 04
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-white">Lignes téléphoniques directes :</div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+2252720212153" className="hover:text-amber-400 font-mono">
                      (+225) 27 20 21 21 53 (Standard 1)
                    </a>
                    <a href="tel:+2252720223327" className="hover:text-amber-400 font-mono">
                      (+225) 27 20 22 33 27 (Standard 2)
                    </a>
                    <a href="tel:+2250707529517" className="hover:text-amber-400 font-mono text-emerald-400 font-semibold">
                      (+225) 07 07 52 95 17 (Mobile & WhatsApp)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Courrier électronique :</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-4">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Horaires d'ouverture :</div>
                  <div>Lundi au Vendredi : 08h00 – 17h00</div>
                  <div className="text-slate-400 text-xs">Samedi & Dimanche : Permanence d'urgence sur RDV</div>
                </div>
              </div>

            </div>

            {/* Visual Location Map Guide */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Building className="w-4 h-4 text-amber-600" />
                  <span>Repérage Plateau Abidjan</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Immeuble Hamza</span>
              </div>

              {/* Stylized Architectural Locator */}
              <div className="relative h-44 rounded-xl bg-slate-200 border border-slate-300 overflow-hidden p-4 flex flex-col justify-between">
                {/* Visual streets grid representation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold text-slate-700 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded">
                  <span>Bd de la République</span>
                  <span className="text-emerald-700">Face Jardin Public</span>
                </div>

                <div className="relative z-10 p-3 bg-white border border-slate-200 rounded-lg shadow-sm text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>A.E.A EXPERTISE (1er Étage)</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    Au-dessus de <strong>Canal+ Store</strong> · À 50m de la <strong>SIB Centrale</strong>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=24+Boulevard+de+la+Republique+Plateau+Abidjan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 text-[11px] font-semibold text-slate-800 hover:text-amber-700 flex items-center justify-end gap-1"
                >
                  <span>Ouvrir l'itinéraire Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed">
                Parking sécurisé disponible à proximité du jardin public et le long du Boulevard de la République.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
