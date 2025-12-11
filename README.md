# 🐕 VOOBYTHEDOG Website

A fun, interactive website featuring VOOBY the Banana Dog with spinning animations, falling GIFs, and draggable stickers!

## 🚀 Quick Start

### Local Development
```bash
npm install
npm start
```
Then open http://localhost:3000

## 📦 Project Structure

```
├── index.html          # Root entry point (for static hosting)
├── public/             # All website files
│   ├── index.html      # Main page (for Express server)
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript
│   ├── images/         # Images and GIFs
│   ├── music/          # Music files
│   └── sounds/         # Sound effects
├── server.js           # Express server
├── package.json        # Dependencies
└── vercel.json         # Vercel config
```

**Note:** The root `index.html` is the main entry point for static hosting platforms (Vercel, Netlify, etc.), while `public/index.html` is used by the Express server. Both work seamlessly with automatic path detection.

## 🌐 Deployment

See `DEPLOYMENT_STEPS.md` for detailed deployment instructions.

**Quick Steps:**
1. Push to GitHub
2. Deploy to Vercel
3. Configure Porkbun DNS
4. Add domain in Vercel

## ✨ Features

- 🐕 3D spinning banana dog (click to bark!)
- 🎨 Falling GIFs and stickers
- 🖱️ Draggable stickers
- 🎵 Background music
- 📱 Responsive design
- 🎯 Twitter & PumpFun links

## 🔗 Links

- Twitter: https://x.com/VOBYTHEDOG
- PumpFun: https://pump.fun/coin/2ahsyq36nyKbgNJzVSNhpTAFDHHZxEZnHEWCiGpHpump
- Contract: 2ahsyq36nyKbgNJzVSNhpTAFDHHZxEZnHEWCiGpHpump

## 📝 Notes

- Add `kawaii-techno.mp3` to `public/music/` for background music
- Add `bark.mp3` to `public/sounds/` for dog bark sound
