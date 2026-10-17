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

    // Ton logo : mets le chemin de ton fichier (SVG ou PNG transparent),
    // ex. "assets/img/logo.svg". Laisse vide pour garder le monogramme « mp. ».
    logo: "",
    // Version claire du logo pour les fonds sombres (facultatif)
    logoSombre: "",

    // Compteur de visites GoatCounter (gratuit, sans cookie) : mets ici ton code,
    // par ex. "mateopuertas" si ton tableau de bord est mateopuertas.goatcounter.com
    goatcounter: "mateopuertas",
  },

  /* ---------------------------------------------------------------- */
  // Showreel : quand ton showreel sera prêt, mets son chemin dans "video".
  // Tant qu'il est vide, l'extrait de la pub Lindt est utilisé.
  showreel: {
    video: "",
    poster: "",
    extrait: "assets/videos/lindt-preview.mp4",
    extraitComplet: "assets/videos/lindt.mp4",
    extraitPoster: "assets/img/lindt-poster.jpg",
  },

  /* ---------------------------------------------------------------- */
  chiffres: [
    { valeur: 50, suffixe: "M+", label: "vues cumulées sur TikTok", detail: "Ma meilleure vidéo : 4,5 millions de vues" },
    { valeur: 30, suffixe: "k+", label: "abonnés TikTok", detail: "Compte @dingovlr, construit de zéro" },
    { valeur: 1588, suffixe: "\u00a0$", label: "de ventes générées pour IQUNIX", detail: "9 commandes via mon code affilié" },
    { valeur: 7, suffixe: "", label: "marques partenaires", detail: "Wooting, Logitech, IQUNIX, GearUP…" },
  ],

  /* ---------------------------------------------------------------- */
  // categorie : "motion" | "montage"
  projets: [
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
      galerie: [],
    },
    {
      slug: "alternance-iut",
      categorie: "motion",
      titre: "Pub alternance — IUT de Béziers",
      accroche: "35 secondes de motion pour donner envie de recruter un alternant MMI.",
      annee: "2026",
      duree: "≈ 35 s",
      format: "16:9 · publicité",
      role: "Projet solo : écriture, design et animation",
      equipe: "Solo",
      outils: ["After Effects", "Premiere Pro"],
      statut: "En cours de production",
      progression: 65,    // pourcentage affiché sur la carte
      video: "",
      apercu: "",
      poster: "",
      sections: [
        { titre: "Le contexte", texte: "L'IUT de Béziers souhaite convaincre les entreprises de la région d'accueillir des alternants du BUT MMI." },
        { titre: "La demande", texte: "Une publicité courte, en motion design, qui explique en une trentaine de secondes pourquoi et comment recruter un étudiant MMI." },
        { titre: "Mes choix", texte: "Un message direct, des animations rythmées et une hiérarchie d'information pensée pour un public de chefs d'entreprise pressés." },
        { titre: "Le résultat", texte: "Projet en cours de finalisation — la vidéo sera ajoutée ici dès qu'elle sera terminée." },
      ],
      galerie: [],
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
      galerie: [],
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
      galerie: [],
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
