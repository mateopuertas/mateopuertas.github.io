/* =====================================================================
   CONTENU DU PORTFOLIO — c'est le SEUL fichier à modifier au quotidien.
   ---------------------------------------------------------------------
   • Les textes entre guillemets peuvent être changés librement.
   • Une vidéo laissée vide ("") affiche automatiquement un écran
     « Bientôt en ligne » élégant à la place.
   • Les chemins sont relatifs au dossier du site
     (ex. "assets/videos/ma-video.mp4").
   ===================================================================== */

window.PORTFOLIO = {
  /* ---------------------------------------------------------------- */
  site: {
    nom: "Matéo Puertas",
    email: "puertasmateo.pro@gmail.com",
    linkedin: "https://www.linkedin.com/in/mat%C3%A9o-puertas/",
    youtube: "https://www.youtube.com/@dingofps1",
    disponibilite: "Stage · avril → juin 2027",
    ville: "Béziers",

    // Statistiques YouTube en temps réel (facultatif) :
    // colle ici ta clé « YouTube Data API v3 » (voir README.md).
    // Laisse vide pour utiliser les chiffres écrits plus bas.
    youtubeApiKey: "",
    youtubeChaine: "@dingofps1",

    // Ton logo (PNG transparent ou SVG). Laisse vide pour garder le monogramme « mp. ».
    logo: "assets/img/logo-noir.png",
    // Version claire du logo pour les fonds sombres
    logoSombre: "assets/img/logo-blanc.png",
    // Logo animé (MP4 noir sur fond blanc, recadré au plus près du logo).
    // Le blanc devient transparent et le logo passe en blanc en mode nuit.
    // S'il est rempli, il remplace le logo fixe. Laisse vide pour l'enlever.
    logoAnimation: "assets/videos/logo-anim.mp4",

    // Compteur de visites GoatCounter (gratuit, sans cookie) : mets ici ton code,
    // par ex. "mateopuertas" si ton tableau de bord est mateopuertas.goatcounter.com
    goatcounter: "mateopuertas",
  },

  /* ---------------------------------------------------------------- */
  // Showreel : "video" est la version complète (ouverte au clic),
  // "apercu" la version légère qui tourne en boucle dans la section.
  // Pour mettre ton propre showreel, remplace ces deux fichiers.
  showreel: {
    video: "assets/videos/showreel.mp4",
    apercu: "assets/videos/showreel-preview.mp4",
    poster: "assets/img/showreel-poster.jpg",
    badge: "Showreel 2026 · 45 s",
  },

  /* ---------------------------------------------------------------- */
  chiffres: [
    { valeur: 50, suffixe: "M+", label: "vues cumulées sur TikTok", detail: "Ma meilleure vidéo : 4,5 millions de vues" },
    { valeur: 30, suffixe: "k+", label: "abonnés TikTok", detail: "Compte @dingovlr, construit de zéro" },
    { valeur: 1588, suffixe: "\u00a0$", label: "de ventes générées pour IQUNIX", detail: "9 commandes via mon code affilié" },
    { valeur: 7, suffixe: "", label: "marques partenaires", detail: "Wooting, Logitech, IQUNIX, GearUP…" },
  ],

  /* ---------------------------------------------------------------- */
  // categorie : "motion" | "montage" | "design"
  // image : grande image en haut de la page projet (si pas de vidéo)
  projets: [
    {
      slug: "alternance-iut",
      categorie: "motion",
      titre: "Pub alternance — IUT de Béziers",
      accroche: "33 secondes de motion design façon interface d'appli, pour donner envie à une entreprise de recruter un alternant MMI.",
      annee: "2026",
      duree: "33 s",
      format: "16:9 · 1080p 60 i/s",
      role: "Script, design, animation et montage son",
      equipe: "Seul · projet de cours",
      outils: ["After Effects", "Premiere Pro", "ElevenLabs"],
      statut: "",
      video: "assets/videos/alternance-iut.mp4",
      apercu: "assets/videos/alternance-iut-preview.mp4",
      poster: "assets/img/alternance-iut-poster.jpg",
      sections: [
        { titre: "Le contexte", texte: "Un projet de cours en BUT MMI : une publicité en motion design pour l'alternance à l'IUT de Béziers, avec le CFA EnSup-LR." },
        { titre: "Le message", texte: "Montrer à un chef d'entreprise, en une demi-minute, ce que coûte vraiment un alternant : la formation prise en charge, la participation qui reste, et l'aide de l'État." },
        { titre: "Mes choix", texte: "J'adore les vidéos de présentation de logiciels, façon Apple : des interfaces propres qui s'animent, des chiffres qui défilent, un curseur qui clique. J'ai repris l'orange, le bleu et le rose du logo du BUT MMI pour rester dans l'identité de la formation." },
        { titre: "Le son", texte: "Voix off générée avec ElevenLabs et musique libre de droits, calées sur l'animation dans Premiere Pro." },
        { titre: "Le résultat", texte: "Environ 10 heures de travail, du script à l'export. La vidéo vient d'être rendue : la note sera ajoutée ici dès que je l'aurai." },
      ],
      galerie: [
        { src: "assets/img/galerie/alternance-iut-1.jpg", legende: "Le calculateur : le coût de la formation tombe à 0 €" },
        { src: "assets/img/galerie/alternance-iut-2.jpg", legende: "Le récapitulatif, en gros plan" },
        { src: "assets/img/galerie/alternance-iut-3.jpg", legende: "L'aide de l'État selon la taille de l'entreprise" },
        { src: "assets/img/galerie/alternance-iut-4.jpg", legende: "Le final, sur un MacBook" },
      ],
    },
    {
      slug: "orphelieres",
      categorie: "motion",
      titre: "La Maison des Orpellières",
      accroche: "Une vidéo pour les écrans du lieu, avec une finale en motion design.",
      annee: "2026",
      duree: "1 min 15",
      format: "16:9 · diffusion sur écrans",
      role: "Réalisation complète : tournage, montage et motion design",
      equipe: "Projet de groupe, vidéo réalisée seul",
      outils: ["After Effects", "Premiere Pro"],
      statut: "",
      video: "assets/videos/orphelieres.mp4",
      apercu: "assets/videos/orphelieres-preview.mp4",   // extrait court en boucle (5 à 8 s, sans son)
      poster: "assets/img/orphelieres-poster.jpg",       // image de couverture (jpg)
      sections: [
        { titre: "Le contexte", texte: "La Maison des Orpellières avait besoin d'une vidéo pour ses écrans : un support qui tourne en boucle, regardé par des visiteurs de passage, souvent sans le son." },
        { titre: "La demande", texte: "Présenter le lieu et donner envie d'utiliser son application (recenser les espèces, signaler ce qu'on observe via un QR code), en moins d'une minute et demie." },
        { titre: "Mes choix", texte: "J'ai construit la vidéo en deux temps : d'abord des plans du site pour installer l'ambiance, puis 22 secondes de motion design où l'application s'anime dans un téléphone, avec des messages courts et lisibles à distance." },
        { titre: "Le résultat", texte: "Une vidéo de 1 min 15 pensée pour l'écran : lisible sans le son, rythmée, et cohérente du premier plan jusqu'à l'animation finale." },
      ],
      galerie: [
        { src: "assets/img/galerie/orphelieres-1.jpg", legende: "Ouverture en drone sur le site" },
        { src: "assets/img/galerie/orphelieres-2.jpg", legende: "Une soirée concert sur place" },
        { src: "assets/img/galerie/orphelieres-3.jpg", legende: "L'accès, animé sur la carte" },
        { src: "assets/img/galerie/orphelieres-4.jpg", legende: "Le QR code qui mène à l'application" },
      ],
    },
    {
      slug: "lindt",
      categorie: "montage",
      titre: "Lindt — publicité fictive",
      accroche: "Une pub sans un mot, portée par la nostalgie et la famille.",
      annee: "2026",
      duree: "55 s",
      format: "16:9 · 4K",
      role: "Montage, étalonnage et rythme",
      equipe: "Projet scolaire",
      outils: ["Premiere Pro"],
      statut: "",
      video: "assets/videos/lindt.mp4",
      apercu: "assets/videos/lindt-preview.mp4",
      poster: "assets/img/lindt-poster.jpg",
      sections: [
        { titre: "Le contexte", texte: "Un exercice de publicité fictive pour une vraie marque, Lindt, avec un objectif simple : créer une émotion sans un seul mot." },
        { titre: "La demande", texte: "Réaliser un spot crédible, au niveau d'une diffusion télé, en respectant l'univers premium de la marque." },
        { titre: "Mes choix", texte: "Tout repose sur le montage : des plans serrés et chaleureux (mains, cuisine, gestes transmis), une musique qui porte le récit et un rythme lent qui laisse respirer la nostalgie et le côté familial du chocolat." },
        { titre: "Le résultat", texte: "Une publicité de 55 secondes, sans dialogue, où l'image et le son racontent seuls l'histoire." },
      ],
      galerie: [
        { src: "assets/img/galerie/lindt-1.jpg", legende: "Le grand-père en cuisine" },
        { src: "assets/img/galerie/lindt-2.jpg", legende: "Gros plan sur les mains" },
        { src: "assets/img/galerie/lindt-3.jpg", legende: "La transmission avec sa petite-fille" },
        { src: "assets/img/galerie/lindt-4.jpg", legende: "Le packshot final" },
      ],
    },
    {
      slug: "yoga-du-rire",
      categorie: "montage",
      titre: "Yoga du rire — santé",
      accroche: "Un mini-documentaire entre interviews et séances, en EHPAD et à l'IUT.",
      annee: "2026",
      duree: "3 min 19",
      format: "16:9 · documentaire",
      role: "Montage, interviews et habillage",
      equipe: "Projet scolaire",
      outils: ["Premiere Pro", "After Effects"],
      statut: "",
      video: "assets/videos/yoga-du-rire.mp4",
      sousTitres: "assets/videos/yoga-du-rire.vtt",   // fichier .vtt, modifiable dans un éditeur de texte
      apercu: "assets/videos/yoga-du-rire-preview.mp4",
      poster: "assets/img/yoga-du-rire-poster.jpg",
      sections: [
        { titre: "Le contexte", texte: "Faire découvrir le yoga du rire et ses bienfaits sur la santé, à travers des séances menées dans un EHPAD et à l'IUT." },
        { titre: "La demande", texte: "Une vidéo informative et humaine, qui donne la parole aux participants tout en montrant concrètement la pratique." },
        { titre: "Mes choix", texte: "Une alternance entre interviews et extraits de séances : la parole explique, les images prouvent. Le rythme suit l'énergie des séances pour transmettre la bonne humeur à l'écran." },
        { titre: "Le résultat", texte: "Un format de 3 min 19 en horizontal, clair et chaleureux, qui donne envie d'essayer." },
      ],
      galerie: [
        { src: "assets/img/galerie/yoga-du-rire-1.jpg", legende: "Une séance en cercle" },
        { src: "assets/img/galerie/yoga-du-rire-2.jpg", legende: "L'interview de l'animatrice" },
        { src: "assets/img/galerie/yoga-du-rire-3.jpg", legende: "Une séance avec un public assis" },
        { src: "assets/img/galerie/yoga-du-rire-4.jpg", legende: "Le final, sous-titré" },
      ],
    },
    {
      slug: "ways",
      categorie: "design",
      titre: "Way's — identité visuelle",
      accroche: "Une marque de glaces qui fait voyager : chaque parfum représente un pays. Du croquis au pot de glace.",
      annee: "2025",
      duree: "",
      format: "Logo, charte de 45 pages, packaging",
      role: "Création du logo",
      equipe: "SAÉ design à 4 · noté 20/20",
      outils: ["Illustrator"],
      statut: "",
      video: "",
      image: "assets/img/design/ways-cover.jpg",
      poster: "assets/img/design/ways-cover.jpg",
      sections: [
        { titre: "Le contexte", texte: "Une SAÉ design en BUT MMI, à quatre : inventer une marque de glaces et construire toute son identité visuelle. Way's veut transformer chaque dégustation en voyage, avec une recette par pays : pain au chocolat, arepa, pizza…" },
        { titre: "Du croquis au logo", texte: "Mes premiers croquis partaient sur tout autre chose : une glace en comète, une planète, un soleil. La première version, « En route ! », posait déjà le pot, le couvercle qui saute et le parasol. Elle a ensuite évolué jusqu'à Way's, la version finale." },
        { titre: "Les symboles", texte: "Le couvercle qui saute, c'est l'ouverture et la surprise d'une nouvelle recette. Le pot, la fraîcheur et la gourmandise. Le trait sous le nom donne l'élan du départ en voyage." },
        { titre: "La charte", texte: "45 pages : déclinaisons du logo, palette, typographies (Itim, Butler, Nunito), formes, motifs, stickers, pastilles, icônes, mises en situation et packaging." },
        { titre: "Le résultat", texte: "Noté 20/20. C'est le projet où j'ai vraiment pris en main Illustrator et appliqué les règles de la création graphique." },
      ],
      galerie: [
        { src: "assets/img/design/ways-croquis.jpg", legende: "Les croquis de départ" },
        { src: "assets/img/design/ways-en-route.jpg", legende: "Première version : « En route ! »" },
        { src: "assets/img/design/ways-logo.jpg", legende: "Version finale : Way's" },
        { src: "assets/img/design/ways-charte-6.jpg", legende: "Les déclinaisons du logo" },
        { src: "assets/img/design/ways-charte-14.jpg", legende: "La palette de couleurs" },
        { src: "assets/img/design/ways-charte-27.jpg", legende: "Les motifs" },
        { src: "assets/img/design/ways-charte-31.jpg", legende: "Les stickers" },
        { src: "assets/img/design/ways-charte-42.jpg", legende: "Mise en situation : Instagram" },
        { src: "assets/img/design/ways-charte-43.jpg", legende: "Mise en situation : site web" },
        { src: "assets/img/design/ways-mockup-jaune.jpg", legende: "Packaging : goût arepa" },
      ],
    },
    {
      slug: "lynpex",
      categorie: "design",
      titre: "Lyn'pex — identité visuelle",
      accroche: "Mon tout premier logo : une marque d'équipement de montagne, entre le lynx et le sommet.",
      annee: "2025",
      duree: "",
      format: "Logo, couleurs, typographie, mockups",
      role: "Logo et mockups",
      equipe: "Premier projet graphique en BUT MMI",
      outils: ["Illustrator"],
      statut: "",
      video: "",
      image: "assets/img/design/lynpex-versions.jpg",
      poster: "assets/img/design/lynpex-concept.jpg",
      sections: [
        { titre: "Le contexte", texte: "Mon tout premier projet graphique en BUT MMI : créer l'identité d'une marque d'équipement de montagne." },
        { titre: "Les pistes", texte: "Trois pistes autour du lynx : assis, en tête, en pleine course." },
        { titre: "Le concept", texte: "Le logo retenu fusionne une tête de lynx et un sommet. Trois valeurs pour la marque : fiable, libre, audacieuse." },
        { titre: "La charte", texte: "Bleu profond, beige, noir et blanc, la typographie Cinzel, des pictos d'équipement et des mockups : bonnets, doudoune, sac à dos." },
        { titre: "Ce que j'en retiens", texte: "C'est ici que j'ai fait mes premiers logos sur Illustrator et mes premiers mockups. Way's montre le chemin parcouru depuis." },
      ],
      galerie: [
        { src: "assets/img/design/lynpex-explo.jpg", legende: "Les trois pistes de logo" },
        { src: "assets/img/design/lynpex-concept.jpg", legende: "Le concept : lynx + montagne" },
        { src: "assets/img/design/lynpex-versions.jpg", legende: "Le logo sur fond bleu et sur fond noir" },
        { src: "assets/img/design/lynpex-charte.jpg", legende: "Couleurs, typographie et pictos" },
        { src: "assets/img/design/lynpex-mockups.jpg", legende: "Les mockups" },
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  // Les vues sont mises à jour en direct si une clé API est renseignée.
  // Sinon, ce sont ces chiffres qui s'affichent.
  youtube: {
    nom: "dingofps",
    abonnes: 2700,
    description: "Ma chaîne Valorant : des vidéos divertissement et des défis, très dynamiques, avec énormément de montage. Tournage, montage, miniatures sous Photoshop : je fais tout.",
    // Les 3 vidéos les plus vues (remplacées automatiquement si une clé API est renseignée)
    populaires: [
      { id: "LTz3Qu1q13A", titre: "J'AFFRONTE un CHEATER sur VALORANT.. C'est IMPOSSIBLE !", vues: 57522, duree: "12:06" },
      { id: "tKnJ6a9hTpk", titre: "J'ai infiltré le \"Marché Noir\" de Valorant : 1€ vs 1 000€ de Skins !", vues: 51512, duree: "13:45" },
      { id: "fRnGAFxU1gk", titre: "J'ai 24h pour me faire BAN de VALORANT !", vues: 37456, duree: "7:35" },
    ],
    // Les vidéos que tu considères comme tes meilleurs montages
    selection: [
      { id: "lnAg1PFEq10", titre: "J'ai défié un CHEATER en 1v1.. C'est IMPOSSIBLE !", vues: 6771, duree: "11:08" },
      { id: "nHP6VBcMXY4", titre: "10 YOUTUBEURS me donnent leurs PIRES défis.. C'était IMPOSSIBLE !", vues: 4210, duree: "12:20" },
    ],
  },

  /* ---------------------------------------------------------------- */
  tiktok: {
    compte: "@dingovlr",
    abonnes: "30k+",
    vues: "50M+",
    jaime: "2,2M",
    texte: "Un compte Valorant lancé avant la fac et géré seul de A à Z : concept, tournage, montage, partenariats. Plusieurs vidéos ont dépassé le million de vues.",
    note: "Le compte n'existe plus aujourd'hui, mais les résultats et les vidéos, eux, restent.",
    // Vidéos : src = vidéo complète, apercu = boucle courte sans son.
    // format: "16:9" pour une vidéo horizontale, rien pour une vidéo verticale 9:16.
    videos: [
      { src: "assets/videos/tiktok-wooting.mp4", apercu: "assets/videos/tiktok-wooting-preview.mp4", poster: "assets/img/tiktok-wooting.jpg", marque: "Wooting", legende: "Collab Wooting", format: "16:9" },
      { src: "assets/videos/tiktok-logitech.mp4", apercu: "assets/videos/tiktok-logitech-preview.mp4", poster: "assets/img/tiktok-logitech.jpg", marque: "Logitech", legende: "Collab Logitech", format: "16:9" },
      { src: "assets/videos/tiktok-iqunix.mp4", apercu: "assets/videos/tiktok-iqunix-preview.mp4", poster: "assets/img/tiktok-iqunix.jpg", marque: "IQUNIX", legende: "Collab IQUNIX", format: "16:9" },
      { src: "assets/videos/tiktok-hone.mp4", apercu: "assets/videos/tiktok-hone-preview.mp4", poster: "assets/img/tiktok-hone.jpg", marque: "Hone", legende: "Collab Hone", format: "16:9" },
      { src: "assets/videos/tiktok-wallhack.mp4", apercu: "assets/videos/tiktok-wallhack-preview.mp4", poster: "assets/img/tiktok-wallhack.jpg", marque: "Wallhack", legende: "Collab Wallhack", format: "16:9" },
    ],
  },

  /* ---------------------------------------------------------------- */
  // logo : chemin vers un SVG/PNG (ex. "assets/logos/wooting.svg").
  // Laisse vide pour afficher le nom de la marque en texte.
  marques: [
    { nom: "IQUNIX", type: "Produit offert · code promo affilié", resultat: "1 588 $ de ventes, 9 commandes", logo: "assets/logos/iqunix.png", fond: "#ffffff" },
    { nom: "Wooting", type: "Produit offert", resultat: "Félicitations de la marque", logo: "assets/logos/wooting.svg", fond: "#ffffff" },
    { nom: "Logitech", type: "Collaboration", resultat: "Vidéo produit", logo: "assets/logos/logitech.png", fond: "#ffffff" },
    { nom: "GearUP", type: "Rémunéré · code promo", resultat: "Campagne sponsorisée", logo: "assets/logos/gearup.png", fond: "#0b1030" },
    { nom: "Hone", type: "Collaboration rémunérée", resultat: "Vidéo sponsorisée", logo: "assets/logos/hone.png", fond: "#0b0f1a" },
    { nom: "MaxEsport", type: "Partenariat", resultat: "Mise en avant produit", logo: "assets/logos/maxesport.svg", fond: "#ffffff" },
    { nom: "Wallhack", type: "Partenariat", resultat: "Vidéo produit", logo: "assets/logos/wallhack.png", fond: "#ffffff" },
  ],

  // Témoignage affiché sous les collaborations
  temoignage: {
    citation: "I really liked how you showcased all features to your viewers. Thanks for working with us!",
    traduction: "",  // facultatif : une traduction affichée sous la citation
    auteur: "Max Janssen",
    role: "Partnership Manager, Wooting",
  },

  // Captures d'écran (stats, messages de marques…). Ex. { src: "assets/img/wooting-merci.jpg", legende: "Message de Wooting" }
  preuves: [
    { src: "assets/img/preuve-compte.jpg", legende: "Profil @dingovlr : 30 K abonnés, 2,2 M de j'aime", format: "portrait" },
    { src: "assets/img/preuve-stats-1.jpg", legende: "1,5 M de vues, monétisée", format: "portrait" },
    { src: "assets/img/preuve-stats-2.jpg", legende: "911 K vues, monétisée", format: "portrait" },
    { src: "assets/img/preuve-wooting.png", legende: "Message de Wooting", format: "paysage" },
    { src: "assets/img/preuve-iqunix.png", legende: "Ventes affiliées IQUNIX", format: "paysage" },
  ],
};
