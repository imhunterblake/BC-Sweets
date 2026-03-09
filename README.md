# BC's Sweets & Treats — Redesigned Website

## What Changed

- Full visual redesign: warm cream/brown/berry color palette, Playfair Display + DM Sans typography
- Mobile-first responsive layout (hamburger menu on mobile)
- Hero section with gradient background, animated badge, scroll indicator
- About section with side-by-side image + text layout
- **Full menu rebuilt** from the menu board images — all items, prices, and descriptions included
- Gallery section with colored placeholder tiles (replace with real photos)
- Contact section with step-by-step ordering guide
- Smooth scroll reveal animations throughout
- **Video removed** as requested
- Footer with logo, nav links, copyright

## How to Deploy Updates to Vercel

1. Copy these 3 files into your existing repo: `index.html`, `styles.css`, `script.js`
2. Make sure your `images/` folder stays in place (all existing image paths are preserved)
3. Push to GitHub — Vercel auto-deploys

## Adding Real Photos to Gallery

Replace the `.gallery-placeholder` divs in `index.html` with:

```html
<img src="images/YOUR_PHOTO.jpg" alt="Description" />
```

Recommended: 800×800px square crops work best for the grid.

## Files

- `index.html` — full page markup
- `styles.css` — all styling
- `script.js` — nav scroll, mobile menu, scroll reveal animations
