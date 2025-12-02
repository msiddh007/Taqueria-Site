# Taquería La Family — React + Vite + Tailwind Site

A bilingual, mobile-first website with content (menu, hours, contact) driven by `public/data.json` so the owners can edit easily.

## Quick Start
```bash
npm install
npm run dev   # open http://localhost:5173
npm run build # output in dist/
npm run preview
```

## Edit Content
Open `public/data.json` and change:
- `business.phone`, `business.address`, `business.hours`, `business.email`, social links
- Add/remove menu categories and items with prices

Changes are loaded at runtime (no rebuild needed in dev). On production hosting, update the JSON file and redeploy.

## Images
Replace files in `public/images/`:
- `logo.png` — the round logo
- `truck.jpg` — wide hero image of the truck
- `owners.jpg` — portrait for the About section

## Tech
- React 18 + Vite 5
- Tailwind CSS 3
- No database required. Optional: Add an admin UI later with Netlify CMS / Firebase.
