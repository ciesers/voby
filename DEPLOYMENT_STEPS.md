# 🚀 Quick Deployment Guide - VOOBYTHEDOG

## ✅ Already Done For You:
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Project structure verified

## 📋 What You Need To Do (5 minutes):

### Step 1: Create GitHub Repository (2 minutes)
1. Go to https://github.com/new
2. Repository name: `voobythedog-website` (or any name you like)
3. **DO NOT** check "Initialize with README"
4. Click "Create repository"

### Step 2: Link and Push to GitHub (Copy these commands)

After creating the repo, GitHub will show you commands. **OR** use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` = Your GitHub username
- `YOUR_REPO_NAME` = The repository name you chose

### Step 3: Deploy to Vercel (2 minutes)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your repository
5. **Important Settings:**
   - Framework Preset: **Other**
   - Root Directory: `./` (leave as is)
   - Build Command: (leave empty)
   - Output Directory: `public`
   - Install Command: `npm install`
6. Click "Deploy"
7. Wait for deployment (takes ~1 minute)
8. **Copy your Vercel URL** (e.g., `voobythedog.vercel.app`)

### Step 4: Configure Porkbun DNS (1 minute)
1. Log in to https://porkbun.com
2. Go to **Domain Management** → Click your domain
3. Click **"DNS Records"** or **"Edit DNS Records"**
4. Add these **2 records**:

   **Record 1 - A Record:**
   ```
   Type: A
   Host: @ (or leave blank)
   Answer: 76.76.21.21
   TTL: 600
   ```

   **Record 2 - CNAME Record:**
   ```
   Type: CNAME
   Host: www
   Answer: cname.vercel-dns.com
   TTL: 600
   ```
5. Click **Save**

### Step 5: Add Domain in Vercel (1 minute)
1. In Vercel project → Go to **Settings** tab
2. Click **"Domains"** in sidebar
3. Click **"Add Domain"**
4. Enter your domain: `yourdomain.com`
5. Click **"Add"**
6. Vercel will verify DNS (may take a few minutes)

### Step 6: Wait & Test
- DNS propagation can take 5 minutes to 24 hours
- Check status: https://www.whatsmydns.net
- Once verified, visit your domain!

## 🎉 That's It!

Your website will be live at your domain!

## 🔧 Troubleshooting

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Double-check DNS records match exactly
- Check Vercel domain status shows "Valid Configuration"

**Need help?** Check Vercel logs or Porkbun DNS settings.

