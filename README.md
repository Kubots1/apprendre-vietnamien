# 🇻🇳 Apprendre le Vietnamien - Application PWA

Application mobile ludique pour apprendre le vietnamien avec des cours interactifs, des quiz et un système de progression.

## 🎯 Fonctionnalités

- ✅ **Cours interactifs** : Alphabet, tons, vocabulaire, famille, etc.
- ✅ **Système de monnaie** : Gagne des pièces en apprenant
- ✅ **Quiz bidirectionnel** : FR→VN et VN→FR
- ✅ **Synthèse vocale** : Écoute la prononciation vietnamienne
- ✅ **Progressive Web App** : Installable sur mobile et desktop
- ✅ **Mode hors-ligne** : Fonctionne sans connexion Internet
- ✅ **Sauvegarde locale** : Ta progression est automatiquement sauvegardée

## 📱 Installation

### Option 1 : Tester en local

1. **Télécharge tous les fichiers** dans un dossier sur ton ordinateur

2. **Structure des fichiers** :
```
mon-app-vietnamien/
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── sw.js
├── assets/
│   └── turtle.jpg (ton image de mascotte)
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

3. **Lance un serveur local** (obligatoire pour PWA) :

**Méthode Python** (recommandée) :
```bash
cd mon-app-vietnamien
python -m http.server 8000
```

**Méthode Node.js** :
```bash
cd mon-app-vietnamien
npx http-server -p 8000
```

**Méthode VS Code** :
- Installe l'extension "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

4. **Ouvre ton navigateur** sur `http://localhost:8000`

### Option 2 : Hébergement gratuit en ligne

#### Avec GitHub Pages (GRATUIT)

1. **Crée un compte** sur [GitHub](https://github.com)

2. **Crée un nouveau repository** :
   - Nom : `apprendre-vietnamien`
   - Public
   - Initialise avec README

3. **Upload tes fichiers** :
   - Utilise l'interface web ou Git
   - Upload tous les fichiers (index.html, styles.css, etc.)

4. **Active GitHub Pages** :
   - Settings → Pages
   - Source : Deploy from a branch
   - Branch : main / (root)
   - Save

5. **Ton app sera disponible** sur :
   `https://ton-username.github.io/apprendre-vietnamien/`

#### Avec Netlify (GRATUIT)

1. Va sur [Netlify](https://www.netlify.com/)
2. Dépose ton dossier dans la zone de drag & drop
3. Ton app est en ligne en 30 secondes !

## 📱 Installation sur mobile

### Android

1. Ouvre ton app dans Chrome
2. Menu (⋮) → "Ajouter à l'écran d'accueil"
3. L'icône apparaît sur ton écran d'accueil
4. Lance comme une vraie app !

### iOS (iPhone/iPad)

1. Ouvre ton app dans Safari
2. Bouton Partager (□↑)
3. "Sur l'écran d'accueil"
4. Ajouter

## 🎨 Créer les icônes de l'app

Tu as besoin d'icônes aux dimensions suivantes :

- 72x72 px
- 96x96 px
- 128x128 px
- 144x144 px
- 152x152 px
- 192x192 px
- 384x384 px
- 512x512 px

### Méthode facile (gratuite) :

1. **Crée une image 512x512** (ton logo/mascotte)
   - Utilise Canva (gratuit) : [canva.com](https://www.canva.com/)
   - Ou GIMP (gratuit) : [gimp.org](https://www.gimp.org/)

2. **Génère toutes les tailles automatiquement** :
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
   - [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
   - Ou en ligne : [favicon.io](https://favicon.io/)

3. **Place les images** dans le dossier `icons/`

## 🛠️ Personnalisation

### Modifier les couleurs

Édite le fichier `styles.css`, section `:root` :

```css
:root {
    --viet-red: #E63946;      /* Rouge principal */
    --bamboo-green: #2A9D8F;  /* Vert bambou */
    --money-green: #06D6A0;   /* Vert monnaie */
    --wood: #8B4513;          /* Marron bois */
}
```

### Ajouter des leçons

Édite le fichier `app.js`, section `data` :

```javascript
const data = [
    {
        id: "ma-nouvelle-lecon",
        name: "Nom de la leçon",
        icon: "fa-heart", // Icône Font Awesome
        price: 300, // Prix en pièces
        items: [
            {l:"🏠", w:"Nhà", t:"Maison"},
            {l:"🚗", w:"Xe hơi", t:"Voiture"},
            // ... autres items
        ]
    },
    // ... autres leçons
];
```

### Modifier l'image de la mascotte

Remplace `assets/turtle.jpg` par ton image préférée.

## 🐛 Dépannage

### L'app ne s'installe pas

- ✅ Vérifie que tu utilises HTTPS ou localhost
- ✅ Vérifie que le Service Worker est bien enregistré (Console F12)
- ✅ Vide le cache du navigateur (Ctrl+Shift+Delete)

### Les sons ne fonctionnent pas

- ✅ Vérifie que ton navigateur supporte la synthèse vocale
- ✅ Active le son sur ton appareil
- ✅ Teste dans un autre navigateur (Chrome recommandé)

### La progression ne se sauvegarde pas

- ✅ Vérifie que localStorage est activé dans ton navigateur
- ✅ Ne pas être en navigation privée
- ✅ Vérifie la Console (F12) pour les erreurs

## 📊 Technologies utilisées

- **HTML5** : Structure de l'app
- **CSS3** : Design responsive et animations
- **JavaScript** (Vanilla) : Logique de l'application
- **Web Speech API** : Synthèse vocale vietnamienne
- **LocalStorage** : Sauvegarde locale
- **Service Worker** : Mode hors-ligne
- **Web App Manifest** : Configuration PWA
- **Font Awesome** : Icônes
- **Google Fonts** : Typographies

## 🚀 Prochaines étapes

Idées pour améliorer l'app :

1. **Jeux de mise en situation** :
   - 🍜 Restaurant : Commander un plat
   - 🛒 Marché : Négocier des prix
   - ✈️ Aéroport : Passer l'immigration
   - 🏨 Hôtel : Réserver une chambre

2. **Fonctionnalités supplémentaires** :
   - Système de niveaux et badges
   - Mode révision espacée (Spaced Repetition)
   - Reconnaissance vocale pour la prononciation
   - Classement entre amis
   - Thèmes personnalisables

3. **Synchronisation cloud** :
   - Backend avec Firebase (gratuit)
   - Sauvegarde sur plusieurs appareils
   - Partage de progression

## 📝 Licence

Ce projet est libre d'utilisation pour un usage personnel et éducatif.

## 🙏 Crédits

Développé avec ❤️ pour apprendre le vietnamien

---

**Bon apprentissage ! Cố lên! 🇻🇳**
