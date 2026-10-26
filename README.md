# E.DOT Entertainment V3.7 — Adaptive, five-page preview

Five stand-alone pages: `index.html`, `services.html`, `about.html`, `second-venue.html`, `contact.html`. The homepage has a hero and navigation to subpages, with no duplicated service cards.

## Viewport logic
`script.js` reads `visualViewport.width/height` (falling back to `innerWidth/innerHeight`) on resize, orientation changes, mobile browser chrome shrink/expand, and zoom; it writes `data-device` (phone < 600, tablet 600–899, laptop 900–1199, desktop 1200–1919, wide 1920+) and `data-orient` on `<html>`, and updates `--vh` (1% visible viewport height) and `--header-h` (actual header height). A `ResizeObserver` recalculates when the header wraps. CSS adds special scaling at 1920+ and 2560+.

The home hero fills viewport minus header with 480–920px clamping for desktop and a 560px minimum on phones. Landscape phones/short viewports let content determine height. Every page fills at least the viewport when short, and pages with more text scroll normally. The contact panel flexes to center in available space.

## Preview
Extract the ZIP, open `index.html`, test links and 中文/EN switch. Test wide resolutions (1920, 2560), laptop (1440, 1024), tablet (768), phone (390, 320), and phone landscape. `assets/cinema-second-venue.jpg` is an AI concept illustration, not an actual concert photo.

## Deploy
This ZIP is a preview. No GitHub/Cloudflare changes have been made. When approved, upload the files at repository root with `assets/` intact. `wrangler.jsonc` configures static assets.
