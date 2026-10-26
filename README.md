# E.DOT V4.4 — Inquiry Popup + Worker Email Backend

## Changes
- All email/contact CTA links launch an accessible bilingual inquiry popup.
- Fields: name, visitor email, service topic, message and privacy consent.
- Removes the previous Copy Email fallback; no mail app required.
- Submission posts to `POST /api/inquiry`, not a mailto link.
- Backend uses Cloudflare `send_email` binding; success appears only after Cloudflare accepts the email.
- SEO, images, current page paths and existing design retained.

## Important configuration before Production
1. Email Routing destination `kfma1015@gmail.com` has been confirmed Verified by site owner. `CONTACT_DESTINATION` and the EMAIL binding `destination_address` are fixed to this Gmail. Do not change them to the `hello@` routing alias.
2. Configure an eligible sending identity/domain in Cloudflare Email Service; change `CONTACT_SENDER` if necessary. The `From` identity must be allowed by your Cloudflare sending configuration.
3. Deploy using **Wrangler CLI**, e.g. `npx wrangler deploy` from this directory. Static file uploads alone will NOT execute worker.js / the `/api/inquiry` endpoint. The same Worker name is retained; check custom domain `edot-entertainment.com` still points to this Worker.
4. Confirm `POST /api/inquiry` works with the binding, then submit a test inquiry on both language versions and verify real inbox delivery. Do not consider form live before this test.
5. Anti-spam: honeypot and validation included. For public high-volume usage, additionally configure Cloudflare Turnstile and rate limiting/WAF rules for `/api/inquiry` to prevent abuse. There is no rate limiter bundled in this release.
6. Any email forwarding and MX/TXT DNS settings should be retained.

## Local checks
- `node --check public/script.js` and `node --check worker.js`
- Pages `/contact.html`, `/en/contact.html`; pop-up from header and Contact CTAs.
- Backend errors never display a success notification.

Note: This package has not been deployed to your Cloudflare account. Delivery depends on a verified recipient and allowed sender.

## Read before deploy
- Cloudflare Free permits sending to account-verified destinations, but the **sender domain/identity must also be authorized**. `CONTACT_SENDER` is currently `hello@edot-entertainment.com`; an E_SENDER_NOT_VERIFIED or E_SENDER_DOMAIN_NOT_AVAILABLE error means Cloudflare sender/domain setup is required. Do not upgrade the plan solely on the basis of the Email Sending landing page without testing available binding functionality.
- Deploy through `npx wrangler deploy` (requires Node.js and Cloudflare login); simply uploading `public/` omits the `/api/inquiry` backend.


## Typography update — Helvetica
- English and Latin characters now prefer Helvetica, falling back to Arial.
- Chinese glyphs continue to use Noto Sans TC (or a system CJK font).
- Logo images, layouts, SEO metadata, inquiry popup and Worker settings unchanged.
- Requires Helvetica to be installed on the visitor's device for an exact Helvetica rendering; no proprietary font file is bundled.
