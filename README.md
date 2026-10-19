# Portfolio — Matéo Puertas

Un site statique en HTML, CSS et JavaScript : pas d'installation ni de « build ». Il suffit d'ouvrir les fichiers et de les modifier.

```
index.html            page d'accueil
projet.html           page « étude de cas » (une seule page pour tous les projets)
assets/js/data.js     ← TOUT LE CONTENU (textes, projets, vidéos, marques, chiffres)
assets/js/main.js     animations et interactions (pas besoin d'y toucher)
assets/css/style.css  design (couleurs, typos, mises en page)
assets/videos/        tes vidéos
assets/img/           images, affiches de vidéos, favicon
```

## Voir le site sur ton Mac

Dans le Terminal :

```bash
cd ~/Desktop/"Portfolio 2026" && python3 -m http.server 8000
```

Puis ouvre http://localhost:8000.

## Modifier le contenu

Tout se passe dans **`assets/js/data.js`**. Chaque projet ressemble à ceci :

```js
{
  slug: "orphelieres",        // identifiant dans l'URL : projet.html?p=orphelieres
  categorie: "motion",        // "motion" ou "montage"
  titre: "Maison des Orphelières",
  video: "assets/videos/orphelieres.mp4",          // vidéo complète (avec le son)
  apercu: "assets/videos/orphelieres-preview.mp4", // boucle de 5 à 8 s jouée au survol
  poster: "assets/img/orphelieres.jpg",            // image de couverture
  sections: [ { titre: "Le contexte", texte: "…" }, … ],
}
```

- Une vidéo laissée vide (`""`) affiche un écran « Bientôt en ligne ».
- Pour **ajouter un projet**, copie un bloc `{ … }`, colle-le à la suite et change le `slug`.
- Pour **terminer la pub alternance**, ajoute sa vidéo puis vide `statut` (`""`) et supprime `progression`.
- Pour **le showreel**, remplis `showreel.video`. Tant qu'il est vide, l'extrait Lindt s'affiche.
- **Logos des marques** : dépose les SVG dans `assets/logos/` et remplis `logo: "assets/logos/wooting.svg"`.
- **Captures** (stats TikTok, message de Wooting, ventes IQUNIX) : dépose-les dans `assets/img/` et remplis le tableau `preuves`.

## Mettre ton logo

1. Exporte ton logo en **SVG** (idéal) ou en **PNG transparent**, environ 40 px de haut à l'affichage.
2. Place-le dans `assets/img/`, par exemple `assets/img/logo.svg`.
3. Dans `data.js`, remplis `logo: "assets/img/logo.svg"`.
4. Si ton logo est foncé, ajoute une version claire pour le mode nuit et les sections noires : `logoSombre: "assets/img/logo-blanc.svg"`.
5. Logo animé : `logoAnimation` pointe vers un MP4 **noir sur fond blanc**, recadré au plus près du logo. Le site rend le blanc transparent et passe le logo en blanc en mode nuit. Pour en refaire un depuis After Effects, exporte en H.264 sur fond blanc.
5. Pour l'icône de l'onglet, remplace `assets/img/favicon.svg`.

## Préparer les vidéos pour le web

Le site doit rester léger. Vise des vidéos en **1280×720 ou 1920×1080, en H.264 (.mp4)**.

- **Vidéo complète** : 720p, idéalement moins de 50 Mo.
- **Aperçu au survol** : 5 à 8 s, 960×540, sans son, idéalement moins de 4 Mo.

Exporte directement depuis Premiere (préréglage *H.264 › Correspondance à la source – Débit moyen*, débit cible 5 à 8 Mbit/s), ou utilise la commande intégrée à macOS :

```bash
avconvert -s "ma-video.mp4" -p Preset1280x720 -o assets/videos/ma-video.mp4
```

Pour l'aperçu, ajoute `--start 4 --duration 8` et utilise `-p Preset960x540`.

## Statistiques YouTube en temps réel (facultatif)

Le bloc YouTube montre **tes 3 vidéos les plus vues** et **ta sélection de meilleurs montages** (`youtube.populaires` et `youtube.selection` dans `data.js`).

Sans configuration, le site affiche les chiffres écrits dans `data.js` (relevés le 17/10/2026). Avec une clé API, les abonnés, les vues et le **top 3 se mettent à jour tout seuls** : si une vidéo dépasse les autres, elle prend sa place automatiquement. Pour l'activer :

1. Va sur https://console.cloud.google.com/ et crée un projet.
2. Active **YouTube Data API v3** (*API et services › Bibliothèque*).
3. Crée une **clé API** (*Identifiants › Créer des identifiants › Clé API*).
4. **Important** : restreins la clé (*Restrictions d'application › Sites web*) à l'adresse de ton site, par exemple `https://tonpseudo.github.io/*`, et limite-la à « YouTube Data API v3 ».
5. Colle la clé dans `data.js`, dans `youtubeApiKey`.

La clé est visible dans le code du site, c'est normal pour ce type d'API. La restriction de l'étape 4 empêche qu'elle soit utilisée ailleurs. Le classement du top 3 est gardé 12 h dans le navigateur de chaque visiteur pour ne pas épuiser le quota gratuit.

## Mode jour / nuit

Le site s'ouvre toujours en **mode jour**. Le mode nuit choisi par un visiteur est gardé pendant sa visite (pages projet comprises), puis oublié à la visite suivante.

## Mettre en ligne gratuitement (GitHub Pages)

100 % gratuit, sans nom de domaine payant. L'adresse du site sera `https://tonpseudo.github.io`.

1. Crée un compte gratuit sur https://github.com. Ton pseudo sera dans l'adresse du site : choisis-le sobre, par exemple `mateopuertas`.
2. Installe **GitHub Desktop** (gratuit) : https://desktop.github.com, puis connecte-toi avec ton compte.
3. Dans GitHub Desktop : *File › Add local repository…* et choisis le dossier `Portfolio 2026` (il est déjà prêt).
4. En bas à gauche, écris un message comme « Mise en ligne du portfolio », puis clique sur **Commit to main**.
5. Clique sur **Publish repository** :
   - nom : `tonpseudo.github.io` (exactement ton pseudo suivi de `.github.io`) ;
   - **décoche** « Keep this code private » (GitHub Pages gratuit demande un dépôt public).
6. Sur github.com, ouvre le dépôt : *Settings › Pages › Branch : main / (root) › Save*.
7. Après une à deux minutes, ton site est en ligne sur `https://tonpseudo.github.io`.

Pour une **mise à jour** : modifie tes fichiers, puis dans GitHub Desktop *Commit to main › Push origin*. Le site se met à jour tout seul en une minute.

> Le site pèse environ 210 Mo, vidéos comprises. Ça passe sur GitHub (limite de 100 Mo par fichier, 1 Go par site). Pense à toujours compresser tes nouvelles vidéos (voir plus haut).

**Après la mise en ligne**, donne ton adresse finale à Claude (ou remplace `assets/img/og-image.jpg` par l'adresse complète `https://tonpseudo.github.io/assets/img/og-image.jpg` dans la balise `og:image` de `index.html` et `projet.html`). LinkedIn et WhatsApp ont besoin de l'adresse complète pour afficher l'image d'aperçu.

## Compteur de visites (GoatCounter, gratuit et sans cookie)

1. Crée un compte sur https://www.goatcounter.com/signup.
2. Choisis un code, par exemple `mateopuertas` : ton tableau de bord sera sur `https://mateopuertas.goatcounter.com`.
3. Dans `data.js`, remplis `goatcounter: "mateopuertas"`.

Tu verras le nombre de visites, les pages vues, d'où viennent les visiteurs (LinkedIn, mail…) et des « événements » :
- `video/lindt`, `video/orphelieres`… : une vidéo a été lancée ;
- `youtube/…` : une vidéo YouTube a été ouverte ;
- `contact/email`, `contact/copie-email`, `contact/linkedin` : quelqu'un a voulu te contacter.

Le compteur ne s'active pas sur ton ordinateur (`localhost`), pour ne pas compter tes propres visites pendant que tu modifies le site.

## Sous-titres

Les sous-titres de *Yoga du rire* sont dans `assets/videos/yoga-du-rire.vtt`. Ils ont été générés automatiquement : **relis-les une fois**. Les noms propres peuvent être mal orthographiés. Le fichier s'ouvre dans n'importe quel éditeur de texte (TextEdit, VS Code) :

```
12
00:00:41.200 --> 00:00:44.900
Le texte affiché à l'écran
```

Pour ajouter des sous-titres à une autre vidéo, crée un fichier `.vtt` et indique son chemin dans `sousTitres` du projet, dans `data.js`.

## Changer les couleurs ou les typos

En haut de `assets/css/style.css`, les variables `:root` contrôlent tout :
`--g1` à `--g4` (couleurs des halos), `--peach` / `--sienna` (carte d'accent), `--serif` / `--sans` (typographies).

## CV

- `assets/cv/CV-Mateo-Puertas.pdf` : version **web**, sans adresse ni téléphone. C'est celle que le bouton « Télécharger mon CV » du site propose.
- `CV/CV-Mateo-Puertas-complet.pdf` : version **complète** (adresse, téléphone, âge), à joindre à tes candidatures par mail. Le dossier `CV/` n'est **jamais publié** sur le site.
- Pour modifier le CV, édite `CV/cv.html`, puis demande à Claude de régénérer les deux PDF.
