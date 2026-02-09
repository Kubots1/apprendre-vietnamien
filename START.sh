#!/bin/bash
# Script de démarrage rapide pour Mac/Linux

echo "========================================"
echo " Démarrage de l'app Apprendre le Vietnamien"
echo "========================================"
echo ""

# Vérifie si Python est installé
if command -v python3 &> /dev/null; then
    echo "✅ Python3 détecté"
    echo "🚀 Lancement du serveur sur http://localhost:8000"
    echo ""
    echo "💡 Appuie sur Ctrl+C pour arrêter le serveur"
    echo ""
    
    # Ouvre le navigateur (selon l'OS)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open http://localhost:8000
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        xdg-open http://localhost:8000 2>/dev/null || echo "Ouvre http://localhost:8000 dans ton navigateur"
    fi
    
    # Lance le serveur
    python3 -m http.server 8000
    
elif command -v python &> /dev/null; then
    echo "✅ Python détecté"
    echo "🚀 Lancement du serveur sur http://localhost:8000"
    echo ""
    echo "💡 Appuie sur Ctrl+C pour arrêter le serveur"
    echo ""
    
    # Ouvre le navigateur
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open http://localhost:8000
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open http://localhost:8000 2>/dev/null || echo "Ouvre http://localhost:8000 dans ton navigateur"
    fi
    
    # Lance le serveur
    python -m http.server 8000
    
else
    echo "❌ Python n'est pas installé"
    echo ""
    echo "Télécharge Python sur : https://www.python.org/downloads/"
    echo "Ou utilise une autre méthode (voir README.md)"
    echo ""
    exit 1
fi
