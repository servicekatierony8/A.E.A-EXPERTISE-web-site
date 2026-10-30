export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  subCategories: string[];
  clientTypes: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  location: string;
  metric: string;
  metricLabel: string;
  description: string;
  context: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  brandName: "A.E.A EXPERTISE",
  legalName: "Cabinet Afrique Experts Associés",
  tagline: "Expertise Immobilière, Évaluation Patrimoniale & Conseil Technique Agréé",
  address: "Plateau, 24 Boulevard de la République, Immeuble HAMZA, 1er Étage",
  landmark: "Au-dessus de Canal+ Store, à proximité de l'Agence Centrale de la SIB, face au jardin public",
  city: "Abidjan",
  country: "Côte d'Ivoire",
  postalBox: "04 BP 183 Abidjan 04",
  phones: {
    landline1: "+225 27 20 21 21 53",
    landline2: "+225 27 20 22 33 27",
    mobileWhatsApp: "+225 07 07 52 95 17",
  },
  email: "aea.expertise@yahoo.fr",
  businessHours: {
    weekdays: "Lundi au Vendredi : 08h00 – 17h00",
    weekend: "Samedi & Dimanche : Permanence / Sur rendez-vous",
  },
  stats: [
    { value: "15+", label: "Années d'exercice", note: "Ancrage historique au Plateau" },
    { value: "1 850+", label: "Dossiers certifiés", note: "Bâtiments, foncier et industrie" },
    { value: "100%", label: "Opposabilité légale", note: "Normes bancaires & judiciaires" },
    { value: "48h", label: "Délai de réactivité", note: "Abidjan et villes de l'intérieur" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "estimation-evaluation",
    number: "01",
    title: "Estimation & Évaluation Immobilière",
    shortDesc: "Détermination rigoureuse et certifiée de la valeur vénale, locative et marchande de vos biens.",
    fullDesc: "Estimation experte et certifiée pour particuliers, entreprises et institutions bancaires. Nous déterminons la juste valeur marchande, la valeur vénale en vente normale ou forcée, la valeur locative de référence et la valeur hypothécaire de vos bâtiments résidentiels, immeubles de rapport, complexes commerciaux, terrains nus (ACD), sites industriels et fonds de commerce.",
    image: "/src/assets/images/real_estate_valuation_inspection_1793313108928.jpg",
    subCategories: [
      "Estimation vénale d'immeubles, villas de standing et appartements",
      "Évaluation foncière de parcelles nues, lotissements et réserves (ACD)",
      "Détermination de la valeur locative de marché et de référence",
      "Évaluation de fonds de commerce, matériel d'exploitation et outillage",
      "Expertise hypothécaire opposable aux comités de crédit bancaire",
    ],
    clientTypes: ["Banques & Établissements financiers", "Propriétaires & Héritiers", "Entreprises & Notaires"],
    deliverables: ["Rapport d'expertise certifié opposable", "Fiche de calculs multicritères", "Dossier photographique in situ"],
  },
  {
    id: "gestion-locative",
    number: "02",
    title: "Gestion Locative & Administration de Biens",
    shortDesc: "Prise en charge intégrale de votre patrimoine immobilier pour sécuriser et maximiser vos revenus locatifs.",
    fullDesc: "Le Cabinet A.E.A EXPERTISE assure la gestion complète et sereine de vos biens immobiliers à Abidjan et à l'intérieur du pays. De la sélection rigoureuse des locataires à l'encaissement ponctuel des loyers, en passant par le suivi technique des travaux, les états des lieux contradictoires et la gestion des contentieux, nous veillons à la valorisation pérenne de vos actifs.",
    image: "/src/assets/images/cabinet_office_meeting_1793313109771.jpg",
    subCategories: [
      "Recherche, filtrage de solvabilité et installation des locataires",
      "Rédaction des contrats de bail conformes au droit OHADA révisé",
      "Émission des avis d'échéance, quittances et recouvrement des loyers",
      "États des lieux d'entrée et de sortie rigoureux dressés par un expert",
      "Coordination des travaux d'entretien, maintenance et réparations techniques",
    ],
    clientTypes: ["Propriétaires bailleurs résidents", "Diaspora ivoirienne à l'étranger", "Sociétés civiles immobilières (SCI)"],
    deliverables: ["Comptes-rendus de gestion mensuels", "Reversement automatisé des loyers", "Rapports d'état technique annuel"],
  },
  {
    id: "transaction-conseil",
    number: "03",
    title: "Transaction Immobilière & Conseil en Investissement",
    shortDesc: "Accompagnement d'expert pour l'achat, la vente et la sécurisation juridique de vos opérations immobilières.",
    fullDesc: "Bénéficiez de la caution technique d'un cabinet d'expertise pour vos transactions immobilières. Nous vous accompagnons dans la commercialisation au juste prix de marché, la négociation, la Due Diligence technique avant acquisition et la sécurisation intégrale des titres fonciers (ACD, purge des droits coutumiers, conformité cadastrale).",
    image: "/src/assets/images/hero_abidjan_architecture_1793313108178.jpg",
    subCategories: [
      "Assistance à la vente et valorisation préalable au prix de marché",
      "Accompagnement à l'acquisition et audit technique préalable du bien",
      "Vérification de la régularité des titres (ACD, CMP, plan de bornage)",
      "Négociation sécurisée et interface avec les études notariales",
      "Conseil en montage d'opérations et programmes de promotion",
    ],
    clientTypes: ["Acquéreurs & Investisseurs", "Vendeurs institutionnels & privés", "Promoteurs immobiliers"],
    deliverables: ["Audit préalable d'acquisition (Due Diligence)", "Dossier de vente certifié", "Attestation de conformité technique"],
  },
  {
    id: "constats-sinistres-degats",
    number: "04",
    title: "Constats des Lieux, Sinistres & Dégâts des Eaux",
    shortDesc: "Constats contradictoires d'urgence, chiffrage des désordres et défense des assurés.",
    fullDesc: "En cas d'infiltrations, dégâts des eaux, incendie, fissures ou malfaçons de construction, nos experts interviennent pour dresser un constat technique objectif, identifier la cause racine des désordres et chiffrer précisément les travaux de remise en état face aux assurances et aux tribunaux.",
    image: "/src/assets/images/industrial_facility_assessment_1793313109515.jpg",
    subCategories: [
      "Dégâts des eaux et infiltrations en toiture ou canalisation",
      "Expertise après incendie et risques industriels",
      "Constat contradictoire avant travaux (référé préventif mitoyen)",
      "Chiffrage objectif des dommages et recours contre assurance",
      "Calcul des indemnités d'éviction et préjudices d'exploitation",
    ],
    clientTypes: ["Assurés particuliers & professionnels", "Syndics de copropriété", "Compagnies d'assurances"],
    deliverables: ["Procès-verbal de constat technique", "Devis quantitatif estimatif de réfection", "Note de causalité d'expert"],
  },
  {
    id: "materiel-industrie",
    number: "03",
    title: "Matériel, Outillage & Sites Industriels",
    shortDesc: "Évaluation technique d'usines de transformation, entrepôts logistiques, parcs machines et matériel d'exploitation.",
    fullDesc: "Spécialisés dans l'évaluation des installations industrielles en Côte d'Ivoire (zones industrielles de Yopougon, Vridi, Koumassi, PK 24, San Pedro), nous calculons la valeur résiduelle, la valeur d'utilité et la valeur à neuf de vos équipements.",
    image: "/src/assets/images/industrial_facility_assessment_1793313109515.jpg",
    subCategories: [
      "Usines agroalimentaires, unités de transformation (cacao, anacarde, hévéa)",
      "Entrepôts logistiques, quais de stockage et plateformes frigorifiques",
      "Parcs de matériels de travaux publics, engins lourds et outillage",
      "Lignes de production automatisées & équipements techniques",
      "Calcul de vétusté technique et valeur de remplacement",
    ],
    clientTypes: ["Industriels", "Compagnies d'assurances", "Fonds d'investissement", "Commissaires aux comptes"],
    deliverables: ["Inventaire côté et valorisé", "Fiches techniques machine par machine", "Attestation de valeur comptable"],
  },
  {
    id: "commercial-fonds-bail",
    number: "04",
    title: "Évaluation Commerciale & Droit au Bail",
    shortDesc: "Estimation de la valeur marchande des fonds de commerce, pas-de-porte, valeurs locatives et indemnités d'éviction.",
    fullDesc: "En stricte conformité avec le droit commercial OHADA révisé, notre cabinet détermine le juste prix de vos actifs incorporels commerciaux, protégeant tant les bailleurs que les preneurs lors des cessions ou renouvellements de baux.",
    subCategories: [
      "Évaluation de fonds de commerce (hôtels, restaurants, pharmacies, commerces)",
      "Détermination de la valeur du pas-de-porte et du droit au bail",
      "Fixation de la valeur locative commerciale de référence",
      "Calcul des indemnités d'éviction en cas de résiliation de bail",
      "Audit de rentabilité et coefficient d'emplacement",
    ],
    clientTypes: ["Avocats d'affaires", "Bailleurs institutionnels", "Commerçants & Franchiseurs", "Administrateurs judiciaires"],
    deliverables: ["Étude d'indemnité d'éviction opposable", "Rapport de valeur vénale commerciale", "Tableau d'amortissement de bail"],
  },
  {
    id: "sinistres-degats-risques",
    number: "05",
    title: "Constat de Sinistres, Dégâts des Eaux & Risques",
    shortDesc: "Constats techniques d'experts, chiffrage objectif des désordres après sinistre et contre-expertise contradictoire.",
    fullDesc: "En cas de dégât des eaux, incendie, fissuration de structure ou malfaçon, nos experts interviennent en urgence pour constater les désordres, déterminer l'origine causale et chiffrer les réparations nécessaires pour faire valoir vos droits auprès des assureurs.",
    subCategories: [
      "Dégâts des eaux et infiltrations dans les immeubles et entrepôts",
      "Constats après incendie, explosion et risques divers",
      "Expertise de désordres structurels, fissures et affaissements",
      "Contre-expertise d'assurance en défense de l'assuré",
      "Constat contradictoire avant travaux (référé préventif de mitoyenneté)",
    ],
    clientTypes: ["Assurés professionnels & particuliers", "Syndics de copropriété", "Compagnies d'assurances", "Auxiliaires de justice"],
    deliverables: ["Procès-verbal de constat technique", "Devis quantitatif estimatif de remise en état", "Note causale circonstanciée"],
  },
  {
    id: "conseil-gestion-amo",
    number: "06",
    title: "Conseil en Investissement, AMO & Études",
    shortDesc: "Assistance technique à maîtrise d'ouvrage, études de faisabilité et stratégie de valorisation de patrimoine foncier.",
    fullDesc: "Pour les investisseurs locaux et de la diaspora désireux de sécuriser un projet de construction ou d'acquisition en Côte d'Ivoire, nous proposons un accompagnement sur mesure pour auditer la rentabilité et le respect des règles de l'art.",
    image: "/src/assets/images/cabinet_office_meeting_1793313109771.jpg",
    subCategories: [
      "Assistance à Maîtrise d'Ouvrage (AMO) pour projets immobiliers",
      "Études de faisabilité technique, financière et urbanistique",
      "Audit technique préalable à l'acquisition (Due Diligence)",
      "Conseil en structuration et valorisation de portefeuille foncier",
      "Suivi d'exécution et levée de réserves techniques",
    ],
    clientTypes: ["Diaspora ivoirienne & internationale", "Sociétés d'investissement", "Family offices", "Groupes privés"],
    deliverables: ["Rapport de faisabilité pluriannuelle", "Bilan financier prévisionnel", "Fiche de recommandations stratégiques"],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Cadrage & Instruction Documentaire",
    description: "Réception de la lettre de mission, analyse approfondie des titres de propriété, extraits cadastraux, arrêtés de concession (ACD) et documents d'urbanisme.",
  },
  {
    step: "02",
    title: "Inspection In Situ & Relevé Technique",
    description: "Visite contradictoire sur les lieux par un expert du cabinet. Mesurage, examen minutieux de l'état du bâti, de la qualité des finitions et de l'environnement immédiat.",
  },
  {
    step: "03",
    title: "Calculs Multicritères & Analyse de Marché",
    description: "Croisement des 3 méthodes d'évaluation reconnues : méthode par comparaison directe, méthode par capitalisation du revenu locatif et méthode du coût de remplacement déprécié.",
  },
  {
    step: "04",
    title: "Rapport d'Expertise Certifié & Opposable",
    description: "Édition du rapport définitif complet comprenant description technique, analyse du marché abidjanais, dossier photographique haute définition et conclusions de valeur.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-plateau",
    title: "Valorisation d'un Immeuble de Bureaux R+10",
    category: "Expertise Immobilière Bancaire",
    location: "Abidjan, Le Plateau",
    metric: "4,6 Milliards FCFA",
    metricLabel: "Valeur vénale certifiée",
    description: "Mission d'évaluation commanditée par un consortium bancaire régional pour la constitution de sûretés hypothécaires dans le cadre d'un refinancement institutionnel.",
    context: "Audit complet de la solidité structurelle, des baux commerciaux en cours et projection de la valeur vénale selon le marché prime du quartier des affaires.",
  },
  {
    id: "case-vridi",
    title: "Chiffrage de Dommages & Constat Sinistre",
    category: "Sinistres & Risques Industriels",
    location: "Zone Industrielle de Vridi",
    metric: "320 Millions FCFA",
    metricLabel: "Préjudice intégralement validé",
    description: "Intervention en urgence suite à une infiltration majeure d'eau en toiture ayant endommagé un stock de matières premières et des automates industriels.",
    context: "Établissement du constat contradictoire en présence de l'expert d'assurance, permettant un dédommagement équitable et rapide sans contentieux judiciaire.",
  },
  {
    id: "case-bassam",
    title: "Audit Foncier & Évaluation d'une Réserve de 30 Hectares",
    category: "Foncier & Régularisation",
    location: "Axe Abidjan - Grand-Bassam",
    metric: "100% Sécurisé",
    metricLabel: "ACD & Purge coutumière certifiés",
    description: "Mission d'assistance pour un investisseur de la diaspora envisageant un projet de complexe résidentiel intégré et éco-lotissement.",
    context: "Vérification des limites géodésiques, calcul des indemnités de purge coutumière et évaluation de la plus-value projetée à l'achèvement.",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: "Général",
    question: "Quelle est la différence entre un avis de valeur d'agence et un rapport d'expertise A.E.A ?",
    answer: "Un avis de valeur émis par un agent immobilier n'a qu'une portée indicative et n'engage pas juridiquement son auteur. À l'inverse, le rapport délivré par le Cabinet A.E.A EXPERTISE est un acte d'expertise technique et financière certifié, indépendant et strictement opposable aux banques, assurances, notaires et administrations judiciaires.",
  },
  {
    category: "Bancaire",
    question: "Vos rapports d'expertise sont-ils agréés par les banques ivoiriennes et régionales ?",
    answer: "Oui. Nos rapports d'expertise sont rédigés selon les normes rigoureuses requises par la Commission Bancaire de l'UMOA et les comités de crédit des principales banques de la place (SIB, SGCI, BICICI, Ecobank, BOA, NSIA, BGFI...). Ils constituent la base reconnue pour les garanties hypothécaires.",
  },
  {
    category: "Délais",
    question: "En combien de temps pouvez-vous remettre un rapport d'expertise ?",
    answer: "Pour les missions standards à Abidjan (appartement, villa, terrain urbain), l'intervention sur le terrain a lieu sous 24 à 48 heures suivant la validation de la mission. Le rapport provisoire ou définitif est généralement transmis sous 3 à 5 jours ouvrés. Des procédures express sont envisageables pour les urgences bancaires ou judiciaires.",
  },
  {
    category: "Documents",
    question: "Quels sont les documents à fournir pour démarrer une mission ?",
    answer: "Les pièces principales comprennent : le titre de propriété (Arrêté de Concession Définitive - ACD, Certificat de Mutation Foncière, ou Lettre d'attribution), l'extrait topographique ou plan de situation, les plans architecturaux si disponibles, et le cas échéant les baux locatifs et quittances fiscales récentes.",
  },
  {
    category: "Zone",
    question: "Intervenez-vous en dehors de la ville d'Abidjan ?",
    answer: "Absolument. Bien que notre cabinet soit implanté au Plateau à Abidjan, nos experts se déplacent sur l'ensemble du territoire national de Côte d'Ivoire (Yamoussoukro, San Pedro, Bouaké, Korhogo, Daloa, Grand-Bassam, Assinie...) ainsi que dans la sous-région ouest-africaine sur demande spécifique.",
  },
];

export const PROPERTY_TYPES = [
  { id: "residential", label: "Villa / Résidence individuelle", desc: "Maison de standing, villa, appartement duplex" },
  { id: "building", label: "Immeuble de rapport / Tour", desc: "Immeuble collectif d'habitation, bureaux ou usage mixte" },
  { id: "land", label: "Terrain nu / Réserve foncière", desc: "Parcelle urbaine, lotissement, concession rurale" },
  { id: "commercial", label: "Local commercial / Fonds de commerce", desc: "Boutique, restaurant, hôtel, supermarché, droit au bail" },
  { id: "industrial", label: "Site industriel / Entrepôt logistique", desc: "Usine de transformation, quai de stockage, parc machines" },
  { id: "damage", label: "Sinistre / Désordre technique", desc: "Dégât des eaux, fissures, affaissements, incendie" },
];

export const MISSION_OBJECTIVES = [
  { id: "bank_mortgage", label: "Garantie de prêt bancaire / Hypothèque" },
  { id: "sale_purchase", label: "Transaction immobilière (Achat ou Vente)" },
  { id: "succession", label: "Succession, partage familial ou donation" },
  { id: "insurance_dispute", label: "Litige d'assurance, sinistre ou procédure judiciaire" },
  { id: "tax_accounting", label: "Bilan comptable d'entreprise ou déclaration fiscale" },
  { id: "expropriation", label: "Purge coutumière ou expropriation d'utilité publique" },
];

export const LOCATIONS_LIST = [
  "Abidjan - Le Plateau (Centre d'affaires)",
  "Abidjan - Cocody (Ambassades, Riviera, Deux Plateaux, Angré)",
  "Abidjan - Marcory (Zone 4, Biétry, Résidentiel)",
  "Abidjan - Treichville & Port de Vridi",
  "Abidjan - Yopougon & Zone Industrielle PK 24",
  "Abidjan - Koumassi & Port-Bouët",
  "Grand Abidjan (Bingerville, Grand-Bassam, Songon, Anyama)",
  "Intérieur - San Pedro (Zone portuaire & ville)",
  "Intérieur - Yamoussoukro (District autonome)",
  "Intérieur - Bouaké",
  "Autre localité en Côte d'Ivoire",
];
