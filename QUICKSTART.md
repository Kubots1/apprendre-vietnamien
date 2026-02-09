# ⚡ Démarrage Express - 3 Minutes

## 🎯 Pour tester IMMÉDIATEMENT

### Étape 1️⃣ - Prépare l'image de ta mascotte (30 sec)

Place une image de tortue (ou autre) ici :
```
📁 assets/
  └── turtle.jpg  👈 Ton image ici
```

**Pas d'image ?** Pas de problème ! L'app fonctionnera quand même, l'image ne s'affichera juste pas.

---

### Étape 2️⃣ - Crée tes icônes (1 min)

**Option A - Super facile (recommandé) :**

1. Ouvre `create-icon.html` dans ton navigateur
2. Change le texte/emoji (ex: 🇻🇳, VN, 越)
3. Choisis tes couleurs
4. Clique sur "Télécharger toutes les icônes"
5. Place les 8 fichiers PNG dans le dossier `icons/`

**Option B - Automatique avec Python :**

```bash
# Si tu as déjà une image 512x512
python generate_icons.py mon-logo.png
```

**Option C - Sans icônes :**
L'app fonctionnera quand même ! Les icônes par défaut du navigateur seront utilisées.

---

### Étape 3️⃣ - Lance l'app (30 sec)

**Windows :**
Double-clique sur `START.bat`

**Mac/Linux :**
```bash
chmod +x START.sh
./START.sh
```

**Ou manuellement :**
```bash
python -m http.server 8000
```

Puis ouvre : **http://localhost:8000**

---

## 📱 Installation sur ton téléphone

### Pour tester sur WiFi local :

1. **Trouve ton IP locale** (sur ton ordinateur) :
   - Windows : Ouvre CMD → tape `ipconfig`
   - Mac : Ouvre Terminal → tape `ifconfig`
   - Cherche quelque chose comme `192.168.1.45`

2. **Sur ton téléphone** (même WiFi !) :
   - Ouvre Chrome/Safari
   - Va sur `http://TON-IP:8000`
   - Exemple : `http://192.168.1.45:8000`

3. **Installe l'app** :
   - **Android** : Menu ⋮ → "Ajouter à l'écran d'accueil"
   - **iPhone** : Partager □↑ → "Sur l'écran d'accueil"

---

## 🌐 Mise en ligne GRATUITE (5 min)

### Méthode GitHub Pages :

```bash
# 1. Crée un compte sur GitHub.com

# 2. Crée un nouveau repository "apprendre-vietnamien"

# 3. Upload tous tes fichiers

# 4. Active GitHub Pages dans Settings → Pages

# 5. Ton app sera sur :
# https://ton-username.github.io/apprendre-vietnamien/
```

### Méthode Netlify (encore plus rapide) :

1. Va sur **netlify.com**
2. Glisse ton dossier dans la zone de drop
3. C'est en ligne ! 🎉

---

## ✅ Checklist avant de commencer

- [ ] Python installé (pour serveur local)
- [ ] Image mascotte dans `assets/turtle.jpg` (optionnel)
- [ ] 8 icônes PNG dans dossier `icons/` (optionnel)
- [ ] Serveur lancé
- [ ] App accessible sur `localhost:8000`

---

## 🎮 Utilisation de l'app

1. **JOUER** - Choisis une leçon
2. Clique sur les tuiles pour apprendre (+10 🪙)
3. Réponds aux quiz (+50 🪙)
4. **BOUTIQUE** - Achète de nouveaux cours avec tes pièces
5. **STATS** - Vérifie ta progression

---

## 🆘 Problèmes courants

**"Le serveur ne démarre pas"**
→ Installe Python : python.org/downloads

**"L'app ne charge pas"**
→ Vérifie l'URL : `http://localhost:8000` (pas `file://`)

**"Pas d'icône sur mobile"**
→ Normal si tu n'as pas créé les icônes. Utilise `create-icon.html`

**"Le son ne marche pas"**
→ Teste dans Chrome. Vérifie que le volume n'est pas coupé.

**"Ma progression ne se sauvegarde pas"**
→ Pas de navigation privée. LocalStorage doit être activé.

---

## 📚 Fichiers importants

| Fichier | Description |
|---------|-------------|
| `index.html` | Page principale |
| `app.js` | Logique de l'app |
| `styles.css` | Design |
| `manifest.json` | Config PWA |
| `sw.js` | Service Worker (cache) |
| `create-icon.html` | Créateur d'icônes |
| `test-pwa.html` | Page de diagnostic |

---

## 🚀 Une fois que ça marche

Lis le `README.md` pour :
- Personnaliser les couleurs
- Ajouter de nouvelles leçons
- Créer les jeux de mise en situation
- Déployer en production

---

**C'est tout ! Ton app PWA est prête ! 🎉**

**Question ?** Regarde `README.md` ou `INSTALL.md` pour plus de détails.

**Cố lên! (Bon courage!) 🇻🇳**
