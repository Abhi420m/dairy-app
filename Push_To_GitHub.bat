@echo off
title Push Dairy App to GitHub
color 0B
cd /d "%~dp0"
echo ========================================================
echo        डेयरी हिसाब (Dairy Hisab) - GitHub Upload
echo ========================================================
echo.
set /p REPO_URL="Apne GitHub Repo ka URL dale (e.g. https://github.com/username/dairy-app.git): "
if "%REPO_URL%"=="" (
    echo Koi URL nahi dala gaya!
    pause
    exit /b
)

echo.
echo Remote URL set kiya ja raha hai...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo.
echo GitHub par code upload ho raha hai (Pushing code)...
git push -u origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo  Code safaltapurvak GitHub par upload ho gaya hai!
    echo ========================================================
) else (
    echo.
    echo Upload me koi dikkat aayi. Kripya apna GitHub login / token check kare.
)
echo.
pause
