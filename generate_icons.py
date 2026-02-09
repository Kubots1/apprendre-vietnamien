#!/usr/bin/env python3
"""
Générateur d'icônes PWA
Génère automatiquement toutes les tailles d'icônes nécessaires
à partir d'une seule image source.

Usage:
    python generate_icons.py mon_image.png
"""

import sys
import os

try:
    from PIL import Image
except ImportError:
    print("❌ Erreur : PIL (Pillow) n'est pas installé")
    print("📦 Installe-le avec : pip install Pillow")
    sys.exit(1)

# Tailles d'icônes requises pour une PWA
ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

def generate_icons(source_image_path, output_dir='icons'):
    """
    Génère toutes les icônes PWA à partir d'une image source.
    
    Args:
        source_image_path: Chemin vers l'image source (PNG recommandé)
        output_dir: Dossier de sortie pour les icônes
    """
    
    # Vérifie que l'image source existe
    if not os.path.exists(source_image_path):
        print(f"❌ Erreur : Le fichier {source_image_path} n'existe pas")
        return False
    
    # Crée le dossier de sortie s'il n'existe pas
    os.makedirs(output_dir, exist_ok=True)
    
    try:
        # Ouvre l'image source
        print(f"📂 Ouverture de {source_image_path}...")
        img = Image.open(source_image_path)
        
        # Convertit en RGBA si nécessaire (pour transparence)
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        print(f"✅ Image source : {img.size[0]}x{img.size[1]} pixels")
        print(f"🎨 Génération des icônes...")
        
        # Génère chaque taille
        for size in ICON_SIZES:
            # Redimensionne l'image
            resized = img.resize((size, size), Image.Resampling.LANCZOS)
            
            # Nom du fichier de sortie
            output_path = os.path.join(output_dir, f'icon-{size}x{size}.png')
            
            # Sauvegarde
            resized.save(output_path, 'PNG', optimize=True)
            
            print(f"  ✓ {output_path}")
        
        print(f"\n🎉 Succès ! {len(ICON_SIZES)} icônes générées dans {output_dir}/")
        print(f"\n📋 Fichiers créés :")
        for size in ICON_SIZES:
            print(f"   - icon-{size}x{size}.png")
        
        return True
        
    except Exception as e:
        print(f"❌ Erreur lors de la génération : {e}")
        return False

def main():
    """Point d'entrée du script"""
    
    print("=" * 60)
    print("🎨 GÉNÉRATEUR D'ICÔNES PWA")
    print("=" * 60)
    print()
    
    # Vérifie les arguments
    if len(sys.argv) < 2:
        print("Usage : python generate_icons.py <image_source>")
        print()
        print("Exemple :")
        print("  python generate_icons.py logo.png")
        print("  python generate_icons.py assets/turtle.jpg")
        print()
        print("💡 Conseil : Utilise une image carrée de minimum 512x512 pixels")
        sys.exit(1)
    
    source_image = sys.argv[1]
    
    # Génère les icônes
    success = generate_icons(source_image)
    
    if success:
        print()
        print("✅ C'est fait ! Tu peux maintenant utiliser ton app PWA.")
        print()
        print("📱 Prochaines étapes :")
        print("  1. Lance ton serveur local")
        print("  2. Ouvre l'app dans ton navigateur")
        print("  3. Installe-la sur ton écran d'accueil")
    else:
        sys.exit(1)

if __name__ == '__main__':
    main()
