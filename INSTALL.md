# 🚀 Installation Rapide - 5 Minutes

## Étape 1 : Télécharge les fichiers ⬇️

Télécharge tous les fichiers dans un dossier sur ton ordinateur.

## Étape 2 : Ajoute tes images 🖼️

### Image de la mascotte
- Place ton image de tortue dans le dossier `assets/`
- Nomme-la : `turtle.jpg`

### Icônes de l'application
Crée les icônes de ton app (facile et gratuit) :

**Méthode la plus simple :**

1. Va sur [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload une image 512x512 px de ton choix
3. Clique sur "Generate your Favicons and HTML code"
4. Télécharge le package
5. Place les fichiers PNG dans le dossier `icons/`

**Ou utilise une image par défaut temporaire :**
- Trouve une image simple sur [Unsplash](https://unsplash.com/)
- Redimensionne-la avec [ResizeImage.net](https://resizeimage.net/)
- Crée toutes les tailles : 72, 96, 128, 144, 152, 192, 384, 512 pixels

## Étape 3 : Teste en local 💻

### Si tu as Python (recommandé) :

```bash
cd chemin/vers/ton/dossier
python -m http.server 8000
```

Puis ouvre : `http://localhost:8000`

### Si tu as VS Code :

1. Installe l'extension **"Live Server"**
2. Clic droit sur `index.html`
3. "Open with Live Server"

### Si tu as Node.js :

```bash
npx http-server -p 8000
```

## Étape 4 : Teste sur ton téléphone 📱

### Méthode WiFi local :

1. Vérifie que ton téléphone et ton ordinateur sont sur le même WiFi
2. Sur ton ordinateur, trouve ton adresse IP locale :
   - Windows : `ipconfig` dans CMD
   - Mac/Linux : `ifconfig` dans Terminal
3. Sur ton téléphone, ouvre Chrome/Safari et va sur :
   `http://TON-IP:8000` (exemple : `http://192.168.1.45:8000`)

### Installe l'app sur ton téléphone :

**Android (Chrome) :**
- Menu ⋮ → "Ajouter à l'écran d'accueil"

**iPhone (Safari) :**
- Partager □↑ → "Sur l'écran d'accueil"

## Étape 5 : Mets en ligne GRATUITEMENT 🌐

### Avec GitHub Pages (gratuit à vie) :

1. Crée un compte sur [GitHub.com](https://github.com/)

2. Crée un nouveau repository :
   - Clique sur "+" → "New repository"
   - Nom : `apprendre-vietnamien`
   - Public ✅
   - "Create repository"

3. Upload tes fichiers :
   - "uploading an existing file"
   - Sélectionne TOUS tes fichiers
   - "Commit changes"

4. Active GitHub Pages :
   - Settings (⚙️)
   - Pages (menu gauche)
   - Source : "Deploy from a branch"
   - Branch : "main" + "/(root)"
   - Save

5. Attends 2-3 minutes, ton app sera sur :
   `https://TON-USERNAME.github.io/apprendre-vietnamien/`

### Avec Netlify (encore plus simple !) :

1. Va sur [Netlify.com](https://www.netlify.com/)
2. "Add new site" → "Deploy manually"
3. **Glisse ton dossier** dans la zone
4. C'est en ligne en 30 secondes ! 🎉

---

## ✅ Checklist finale

- [ ] Tous les fichiers téléchargés
- [ ] Image `assets/turtle.jpg` présente
- [ ] Icônes dans le dossier `icons/` (8 fichiers PNG)
- [ ] Testé en local avec un serveur
- [ ] Fonctionne sur mobile (WiFi local)
- [ ] Installé comme app sur ton téléphone
- [ ] (Optionnel) Mis en ligne sur GitHub Pages ou Netlify

---

## 🆘 Besoin d'aide ?

**Problème : "Ça ne marche pas en local"**
→ Tu as bien lancé un serveur ? (pas juste ouvrir index.html)

**Problème : "Les icônes ne s'affichent pas"**
→ Vérifie que les fichiers PNG sont bien nommés (icon-192x192.png, etc.)

**Problème : "L'app ne s'installe pas sur mobile"**
→ Il faut utiliser HTTPS ou localhost. Mets en ligne sur GitHub Pages/Netlify.

**Problème : "Le son ne marche pas"**
→ Vérifie que le son est activé sur ton appareil. Teste dans Chrome.

---

**C'est tout ! Ton app est prête ! 🎉**

Cố lên! (Bon courage!)
