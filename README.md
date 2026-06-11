# Sell to Sean — selltosean.com rebuild

Conversion-focused static site for Sell to Sean (Central City Solutions LLC),
a Columbus, OH cash home buyer. Built with **Astro 5 + Tailwind CSS 4**, zero
client frameworks, fonts self-hosted, all JS inlined (~0 KB external bundles).

- **Strategy & rationale:** [STRATEGY.md](./STRATEGY.md)
- **All copy in one reviewable file:** [COPY.md](./COPY.md)
- **SEO state & tasks:** [SEO-CHECKLIST.md](./SEO-CHECKLIST.md)
- **Go-live runbook:** [LAUNCH-CHECKLIST.md](./LAUNCH-CHECKLIST.md)

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy

**Vercel:** import the repo → framework preset "Astro" → deploy. The
`vercel.json` in the repo handles the 301 redirects from the old WordPress
URLs, and `api/lead.js` deploys automatically as a serverless function.

**Netlify:** import the repo → build command `npm run build`, publish dir
`dist` → deploy. `public/_redirects` handles the 301s and
`netlify/functions/lead.mjs` deploys as a function.

Set environment variables from `.env.example` in the host's dashboard.

## Connect the form to a CRM / email / Zapier (pick one)

The multi-step form POSTs a JSON payload to whatever URL is in
`PUBLIC_LEAD_WEBHOOK_URL`. With it unset, the form still works end-to-end
(logs the payload to the console and proceeds to /thank-you/) so you can test.

**Option A — Zapier/Make (10 minutes, no code):**
1. Create a Zap with trigger "Webhooks by Zapier → Catch Hook" (or Make's
   "Custom webhook"). Copy the hook URL.
2. Set `PUBLIC_LEAD_WEBHOOK_URL=<hook url>` in your host's env vars; redeploy.
3. Add actions: create CRM contact (e.g. Podio/REISift/Salesforce/HubSpot),
   send the team an email/SMS/Slack ping. Done.

**Option B — the bundled serverless function (keeps secrets server-side):**
1. Set `PUBLIC_LEAD_WEBHOOK_URL=/api/lead` (Vercel) or
   `/.netlify/functions/lead` (Netlify).
2. Set `CRM_WEBHOOK_URL` to your CRM's inbound webhook.
3. **Speed-to-lead SMS (recommended — first caller wins the deal):** add the
   Twilio env vars from `.env.example` and uncomment the Twilio block in
   `api/lead.js`. Sean's phone buzzes the second a lead lands.

**Payload fields:** `street_address, condition, timeline, name, phone, email,
consent_transactional, consent_marketing, utm_source, utm_medium,
utm_campaign, utm_term, utm_content, gclid, fbclid, campaignid, uid,
landing_page, source_page, submitted_at`.

## Add a new city page (< 10 minutes)

1. Open `src/data/cities.js`.
2. Copy an existing entry; change `slug`, `name`, `county`, `intro`,
   `localNotes`, `nearby`, `situationLinks`.
   **Rule: every sentence must be true and specific to that city** — if you
   can't say something real about it, don't ship the page.
3. `npm run build`. The page, sitemap entry, footer link, and internal links
   all generate automatically at `/sell-my-house-fast/<slug>/`.

Situation pages work the same way in `src/data/situations.js`.

## Replace the placeholder images

Sean's real photos are in place (`sean-profile-pic-2026.webp` in the hero and
About page, `sean-in-a-house-he-bought-sq.webp` in the homepage story
section — both 450×450 from the original site; a 900px+ re-export would be
crisper on retina screens). Still placeholders — search the repo for `[PHOTO`
/ `[BEFORE` / `[AFTER`:
1. Before/after project photos (4 pairs) from the current site.
2. `public/images/og-default.svg` → a real 1200×630 social share image
   (ideally built around the profile photo).

## Analytics & event tracking (GA4-ready)

Events are pushed to `window.dataLayer` (GTM/GA4 convention). Installed events:

| Event | Fires when | Extra params |
|---|---|---|
| `form_start` | first interaction with any lead form | `form_location`, `variant` |
| `form_step_2` / `_3` / `_4` | advancing each step | `form_location` |
| `form_submit` | successful submit | `timeline`, `condition` |
| `lead_thank_you_view` | thank-you page view (conversion proxy) | — |
| `phone_click` | any tel: link tap | `location` (header/sticky_bar/footer/…) |
| `cta_click` | sticky-bar CTA tap | `location` |
| `scroll_75` | 75% scroll depth | `page` |

To activate: add the GTM (or GA4 gtag) snippet in
`src/layouts/BaseLayout.astro` below the dataLayer init, **deferred** — see
LAUNCH-CHECKLIST.md. Mark `lead_thank_you_view` (or `form_submit`) as the
conversion in GA4/Google Ads.

## A/B test backlog (run in priority order, one at a time)

1. **Hero headline:** outcome framing ("Get a fair cash offer… in 24 hours")
   vs. empathy framing ("Need to sell? Skip the repairs, fees, and showings").
2. **Form architecture:** current 4-step vs. single-step short form
   (address+phone only) for paid traffic landings.
3. **Sean's photo in hero** vs. hero without photo (form wider).
4. **Offer-math section position:** mid-page vs. directly under hero.
5. **Sticky bar copy:** "Call Sean" vs. the raw phone number.
6. **Step-2 question order:** condition-first vs. timeline-first (watch step
   abandonment in GA4 funnel).

## Project structure

```
src/
  data/        ← edit content here (site facts, reviews, FAQs, cities, situations)
  components/  ← LeadForm (multi-step), HeroForm, OfferMath, ComparisonTable…
  layouts/     ← BaseLayout: head/meta/schema, header, footer, sticky CTA
  lib/         ← JSON-LD schema builders
  pages/       ← one file per route + [city] and [situation] templates
public/        ← robots.txt, llms.txt, _redirects, images, favicon
api/lead.js                 ← Vercel lead endpoint (+ Twilio stub)
netlify/functions/lead.mjs  ← Netlify equivalent
```

## Hard content rules (do not break)

- Never invent testimonials, review counts, ratings, awards, or statistics.
- All 47 reviews in `src/data/reviews.js` are real and verbatim from the old
  site — don't edit their text.
- Anything marked `[VERIFY]` or `[PLACEHOLDER]` must be confirmed by the
  owner before launch (grep for both).
- Copy stays at a 6th–8th grade reading level. Sellers in distress skim.
