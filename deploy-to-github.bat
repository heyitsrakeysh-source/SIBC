@echo off
echo ========================================
echo GitHub Deployment Script
echo ========================================
echo.

set /p username="Enter your GitHub username: "
set /p reponame="Enter your repository name: "

echo.
echo Initializing Git...
git init

echo.
echo Adding all files...
git add .

echo.
echo Committing files...
git commit -m "Initial commit - Restaurant website with all images"

echo.
echo Connecting to GitHub...
git remote add origin https://github.com/%username%/%reponame%.git

echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo Done! Now enable GitHub Pages:
echo 1. Go to: https://github.com/%username%/%reponame%/settings/pages
echo 2. Select 'main' branch under Source
echo 3. Click Save
echo 4. Your site will be live at: https://%username%.github.io/%reponame%/
echo ========================================
pause
