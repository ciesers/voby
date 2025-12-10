@echo off
echo ========================================
echo VOOBYTHEDOG - Quick Deployment Helper
echo ========================================
echo.
echo Step 1: Create a GitHub repository first!
echo Go to: https://github.com/new
echo.
echo Step 2: After creating the repo, enter your GitHub details:
echo.
set /p GITHUB_USER="Enter your GitHub username: "
set /p REPO_NAME="Enter your repository name: "
echo.
echo Linking to GitHub repository...
git remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo ========================================
echo Done! Now go to Vercel and import your repo.
echo ========================================
pause

