# Subhashree Manjari Jena – Portfolio

React + Vite + Tailwind CSS + framer-motion + react-icons.

## Run locally
    npm install
    npm run dev          # http://localhost:5173
    npm run build        # production build in dist/

## Edit content
Everything (bio, stats, skills, experience, projects, links) lives in `src/data.js`.
- Replace the `'#'` GitHub / Live Demo links in `projects`.
- Photo: `public/photo.jpg` (change `profile.photo` to `/photo-alt.jpg` to use the other picture).
- Resume: replace `public/Subhashree_Manjari_Jena_Resume.pdf`.

## Contact form (get messages in your Gmail)
1. Go to formspree.io, sign up free, click New Form, enter manjarisubhashree@gmail.com and confirm the verification email.
2. Copy the form ID (the part after /f/ in the endpoint).
3. Set `VITE_FORMSPREE_ID` to it (in `.env` locally and in Vercel/Netlify environment variables), then redeploy.
Every message then lands in your inbox.

Call and WhatsApp buttons (plus floating icons) use +91 9348387198; change them in `src/data.js`.

Old note:
Without setup it opens the visitor's email app (mailto fallback).
For real submissions: create a free form at formspree.io, copy the form ID, then set `VITE_FORMSPREE_ID` (copy `.env.example` to `.env` locally, and add it as an environment variable on Vercel/Netlify).

## Deploy
**Vercel:** push to GitHub → vercel.com → New Project → import the repo → Framework "Vite" (auto-detected) → Deploy.
**Netlify:** push to GitHub → app.netlify.com → Add new site → Import from Git → build `npm run build`, publish `dist` (set in netlify.toml) → Deploy.
Optional: update the `<title>`, description and `og:image` in `index.html` to your final domain (use a full https URL for og:image).
