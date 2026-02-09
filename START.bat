@echo off
REM Script de démarrage rapide pour Windows
echo ========================================
echo  Demarrage de l'app Apprendre le Vietnamien
echo ========================================
echo.

REM Essaye Python 3
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python detecte
    echo Lancement du serveur sur http://localhost:8000
    echo.
    echo Appuie sur Ctrl+C pour arreter le serveur
    echo.
    start http://localhost:8000
    python -m http.server 8000
    goto :end
)

REM Essaye Python (ancienne version)
py --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python detecte
    echo Lancement du serveur sur http://localhost:8000
    echo.
    echo Appuie sur Ctrl+C pour arreter le serveur
    echo.
    start http://localhost:8000
    py -m http.server 8000
    goto :end
)

REM Python non trouvé
echo [ERREUR] Python n'est pas installe
echo.
echo Telecharge Python sur : https://www.python.org/downloads/
echo Ou utilise une autre methode (voir README.md)
echo.
pause
goto :end

:end
