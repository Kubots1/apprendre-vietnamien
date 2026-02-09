# 📂 Structure du Projet PWA

```
apprendre-vietnamien/
│
├── 📄 index.html              ← Page principale de l'app
├── 📄 styles.css              ← Styles et design
├── 📄 app.js                  ← Logique JavaScript
├── 📄 manifest.json           ← Configuration PWA
├── 📄 sw.js                   ← Service Worker (cache)
│
├── 📁 assets/                 ← Médias et images
│   └── turtle.jpg            ← Image de la mascotte (À AJOUTER)
│
├── 📁 icons/                  ← Icônes PWA (À CRÉER)
│   ├── icon-72x72.png        ← 72x72 pixels
│   ├── icon-96x96.png        ← 96x96 pixels
│   ├── icon-128x128.png      ← 128x128 pixels
│   ├── icon-144x144.png      ← 144x144 pixels
│   ├── icon-152x152.png      ← 152x152 pixels
│   ├── icon-192x192.png      ← 192x192 pixels ⭐
│   ├── icon-384x384.png      ← 384x384 pixels
│   └── icon-512x512.png      ← 512x512 pixels ⭐
│
├── 🛠️ OUTILS
│   ├── create-icon.html       ← Créateur d'icônes interactif
│   ├── generate_icons.py      ← Script Python pour générer icônes
│   ├── test-pwa.html          ← Page de diagnostic PWA
│   ├── START.bat              ← Lanceur Windows
│   └── START.sh               ← Lanceur Mac/Linux
│
└── 📚 DOCUMENTATION
    ├── README.md              ← Documentation complète
    ├── INSTALL.md             ← Guide d'installation détaillé
    ├── QUICKSTART.md          ← Démarrage rapide (3 min)
    ├── CHANGELOG.md           ← Liste des changements
    └── STRUCTURE.md           ← Ce fichier !
```

---

## 📋 Détails des fichiers

### Fichiers Core (OBLIGATOIRES) ✅

**index.html**
- Point d'entrée de l'application
- Structure HTML avec meta PWA
- Enregistrement du Service Worker

**app.js**
- Logique complète de l'app
- Données des leçons
- Gestion du quiz
- Sauvegarde LocalStorage
- Synthèse vocale

**styles.css**
- Design responsive
- Animations et transitions
- Variables CSS pour personnalisation
- Support mobile/desktop

**manifest.json**
- Nom de l'app
- Icônes et thème
- Mode d'affichage (standalone)
- Configuration PWA

**sw.js**
- Service Worker
- Gestion du cache
- Mode hors-ligne
- Stratégie Cache-First

---

### Assets (À COMPLÉTER) 📸

**assets/turtle.jpg**
- Image de la mascotte
- Format : JPG ou PNG
- Taille recommandée : 500x500 px minimum
- Peut être remplacée par n'importe quelle image

---

### Icônes (À GÉNÉRER) 🎨

**icons/*.png**
- 8 tailles différentes
- Format : PNG avec transparence
- Générées avec `create-icon.html` ou `generate_icons.py`

**Pourquoi 8 tailles ?**
- 72×72 : Android petit écran
- 96×96 : Android moyen écran
- 128×128 : Android et Chrome
- 144×144 : Windows et Chrome
- 152×152 : iOS et Safari
- 192×192 : Android icône principale ⭐
- 384×384 : Android haute résolution
- 512×512 : Splash screen et store ⭐

---

### Outils (OPTIONNELS mais utiles) 🛠️

**create-icon.html**
- Interface visuelle pour créer des icônes
- Pas besoin de compétences design
- Génère toutes les tailles automatiquement

**generate_icons.py**
- Script Python pour automatiser
- Nécessite Pillow : `pip install Pillow`
- Usage : `python generate_icons.py source.png`

**test-pwa.html**
- Diagnostic complet de la PWA
- Vérifie Service Worker, Cache, Manifest
- Outils de débogage

**START.bat / START.sh**
- Lanceurs automatiques
- Détecte Python
- Lance le serveur local
- Ouvre le navigateur

---

### Documentation 📚

**README.md**
- Documentation complète et détaillée
- Toutes les fonctionnalités
- Guide de personnalisation
- Résolution de problèmes

**INSTALL.md**
- Guide pas à pas pour débutants
- Instructions détaillées
- Captures d'écran conceptuelles

**QUICKSTART.md**
- Démarrage en 3 minutes
- Pour les pressés
- Étapes essentielles seulement

**CHANGELOG.md**
- Historique des modifications
- Ce qui a été ajouté/amélioré
- Différences avec l'ancienne version

---

## 🎯 Fichiers à créer TOI-MÊME

### 1. Image de la mascotte
```
📁 assets/
  └── turtle.jpg  ← Trouve une image de tortue ou autre
```

**Où trouver une image ?**
- Photos perso
- Unsplash.com (images libres)
- Pexels.com (images libres)
- Pixabay.com (images libres)

### 2. Icônes de l'app
```
📁 icons/
  └── icon-XXX.png  ← 8 fichiers à créer
```

**Comment créer ?**
1. Utilise `create-icon.html` (le plus facile)
2. Ou `generate_icons.py source.png`
3. Ou un site comme realfavicongenerator.net

---

## 🔄 Workflow de développement

### 1. Première installation
```bash
1. Télécharge tous les fichiers
2. Ajoute assets/turtle.jpg
3. Crée les icônes dans icons/
4. Lance START.bat ou START.sh
5. Ouvre http://localhost:8000
```

### 2. Développement local
```bash
1. Modifie app.js ou styles.css
2. Recharge la page (Ctrl+R)
3. Teste les changements
4. Répète
```

### 3. Test sur mobile (WiFi)
```bash
1. Trouve ton IP locale
2. Sur mobile : http://TON-IP:8000
3. Teste l'app
4. Installe sur l'écran d'accueil
```

### 4. Mise en production
```bash
1. Upload sur GitHub
2. Active GitHub Pages
3. Partage le lien
4. Les users peuvent installer
```

---

## 💡 Personnalisation

### Couleurs (styles.css)
```css
:root {
    --viet-red: #E63946;      /* Change ici */
    --bamboo-green: #2A9D8F;  /* Et ici */
    --money-green: #06D6A0;   /* Et ici */
}
```

### Leçons (app.js)
```javascript
const data = [
    {
        id: "nouvelle-lecon",
        name: "Ma Leçon",
        icon: "fa-star",
        price: 200,
        items: [...]
    }
];
```

### Textes (index.html, app.js)
- Tous les textes sont en français
- Faciles à modifier
- Cherche avec Ctrl+F

---

## 📦 Poids total du projet

```
index.html      : ~3 KB
styles.css      : ~8 KB
app.js          : ~20 KB
manifest.json   : ~2 KB
sw.js           : ~5 KB
assets/         : ~100 KB (dépend de ton image)
icons/          : ~200 KB (8 PNG)
─────────────────────────
TOTAL          : ~340 KB

En cache       : ~50 KB (gzip)
Premier load   : ~200 KB
Chargements suivants : 0 KB (cache)
```

**Super léger ! 🚀**

---

## ✅ Checklist de vérification

Avant de mettre en ligne, vérifie que tu as :

- [ ] `index.html` présent et fonctionnel
- [ ] `app.js` avec toutes tes leçons
- [ ] `styles.css` personnalisé (couleurs)
- [ ] `manifest.json` configuré (nom, couleurs)
- [ ] `sw.js` présent (ne pas modifier sauf besoin)
- [ ] `assets/turtle.jpg` présent
- [ ] 8 icônes PNG dans `icons/`
- [ ] Testé en local
- [ ] Testé sur mobile
- [ ] Installé comme PWA
- [ ] Mode hors-ligne testé

---

## 🎉 Félicitations !

Si tous les fichiers sont là, ton app PWA est complète et professionnelle !

**Prochaines étapes :**
1. Personnalise les couleurs
2. Ajoute de nouvelles leçons
3. Mets en ligne sur GitHub Pages
4. Partage avec tes amis !

**Bon apprentissage ! Cố lên! 🇻🇳**
