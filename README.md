# A.E.A EXPERTISE — Site vitrine

Site vitrine du cabinet **A.E.A EXPERTISE**, expertise immobilière au Plateau, Abidjan (Côte d'Ivoire).
Baseline officielle : *« Votre partenaire en expertise immobilière »*.

Design premium « cabinet » : vert très foncé, ivoire et doré, titres en Playfair Display.
Site **100 % statique** (HTML/CSS/JS, aucun build, aucune dépendance serveur).

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : hero plein écran, bande de confiance, 10 domaines en liste éditoriale, 4 services en cartes, référence SCI Maison Terre d'Afrique (54 ha à Yamoussoukro), méthode en frise |
| `cabinet.html` | Présentation, crédibilité (expert agréé depuis 2006, Président CNEI-CI 2012–2016, Secrétaire Général 2009–2012), 3 piliers, clientèles, galerie |
| `expertises.html` | 4 services détaillés (garanties hypothécaires, successions, valorisation au bilan, administration d'immeubles, titres fonciers…) + les 10 domaines d'évaluation |
| `methode.html` | Méthode en 4 étapes et engagements qualité |
| `contact.html` | Coordonnées, horaires avec **statut d'ouverture en direct** (heure d'Abidjan), itinéraire Google Maps, formulaire → WhatsApp du cabinet |

## Fonctionnalités

- Statut « Ouvert / Fermé » calculé en JavaScript à l'heure d'Abidjan (Lun–Ven 08h00–18h00, Sam–Dim fermé)
- Formulaire « Demander une expertise » : ouvre WhatsApp avec un message pré-rempli vers le (+225) 07 07 52 95 17
- Galerie avec visionneuse plein écran, menu mobile, barre d'action mobile (Appeler / Demander une expertise)
- Responsive mobile d'abord

## Déploiement

### Cloudflare Pages — depuis GitHub
1. Pousser le contenu de ce dossier à la racine du dépôt.
2. Cloudflare → *Workers & Pages* → *Create* → *Pages* → *Connect to Git*.
3. Sélectionner le dépôt, framework preset : **None**, build output directory : `/` (racine).
4. Déployer : chaque push suivant met le site à jour automatiquement.

### Cloudflare Pages — par glisser-déposer
1. Zipper le contenu du dossier (ou utiliser `aea-expertise-site-premium.zip`).
2. Cloudflare → *Workers & Pages* → *Create* → *Pages* → *Upload assets*, puis glisser le zip.

## Notes

- Les photos du site sont des **photos d'illustration** (légendées comme telles dans la galerie) ; le logo est le logo officiel du cabinet.
- Le bandeau « Aperçu de démonstration — en attente de validation par l'entreprise » est à retirer pour la mise en ligne officielle (bloc `.bandeau-demo` en haut de chaque page + mention du pied de page).
