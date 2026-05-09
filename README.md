# 🛰️ Satelit AI — Deploy Guide

## Struktur Project
```
satelit-vercel/
├── index.html        ← Frontend (UI)
├── api/
│   └── chat.js       ← Backend serverless (API key aman di sini)
└── vercel.json       ← Config routing Vercel
```

---

## Cara Deploy ke Vercel (5 menit)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Daftar / Login Vercel
Buka https://vercel.com → daftar gratis pakai GitHub/Google

### 3. Upload project
Taruh semua file di satu folder, lalu:
```bash
cd satelit-vercel
vercel
```
Ikutin promptnya, pilih defaults semua.

### 4. Set API Key (PENTING!)
Di dashboard Vercel → Project → Settings → Environment Variables

Tambah:
- **Name:** `ANTHROPIC_API_KEY`
- **Value:** `sk-ant-xxxxxxxxxxxxxxxx` (API key lo dari console.anthropic.com)
- **Environment:** Production, Preview, Development ✅ semua

### 5. Redeploy
```bash
vercel --prod
```

Atau di dashboard klik **Redeploy**.

### 6. Done! 🎉
Vercel kasih URL gratis: `https://satelit-ai-xxx.vercel.app`

---

## Ambil API Key Anthropic
1. Buka https://console.anthropic.com
2. Login / daftar
3. Masuk ke **API Keys** → **Create Key**
4. Copy dan simpan di environment variable Vercel

---

## Tips
- API key **JANGAN** dimasukin ke kode HTML/JS — udah dihandle backend
- Vercel free tier cukup untuk personal use
- Mau custom domain? Bisa setting di Vercel Dashboard → Domains
