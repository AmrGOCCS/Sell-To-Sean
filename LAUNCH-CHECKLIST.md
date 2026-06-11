# LAUNCH-CHECKLIST.md — go-live runbook

Work top to bottom. Nothing ships while a **BLOCKER** is open.

## 1. Content verification (owner) — BLOCKERS

- [x] ~~Replace `[PHOTO OF SEAN]` placeholders~~ — done: real
      `sean-profile-pic-2026.webp` (hero + about) and
      `sean-in-a-house-he-bought-sq.webp` (homepage story). Optional upgrade:
      a higher-res version (900px+) of the profile photo for crisper retina
      rendering
- [ ] **BLOCKER** Set the callback promise: replace `[X — VERIFY]` hours in
      `src/data/site.js` (`callbackPromise`) with a number the team will
      actually hit, every time, including Saturdays
- [ ] **BLOCKER** Confirm BBB A+ status (or remove the badge & FAQ mention)
- [ ] **BLOCKER** Attorney review: /privacy/, /terms/, and both form consent
      checkboxes (TCPA + Ohio law); set "Last updated" dates
- [ ] Sean's first-person paragraph on /about/ (`[PLACEHOLDER]`)
- [ ] Before/after project photos (4 pairs) + one-line real descriptions
- [ ] Verify email address + office hours on /contact/ (`src/data/site.js`)
- [ ] Verify Whitehall point-of-sale inspection note on the city page
- [ ] "As Seen On" strip restored with the ABC/CBS/FOX/NBC + BBB + Google
      badges that the old site displays — **verify which affiliate
      stories/mentions these refer to** (keep links/proof on file), or remove
      the strip (`src/components/AsSeenOn.astro`)
- [ ] Final sweep: `grep -rn "VERIFY\|PLACEHOLDER\|\[PHOTO\|\[REAL" src/ public/`
      must return nothing

## 2. Lead plumbing — BLOCKERS

- [ ] **BLOCKER** Connect the form (README §"Connect the form"): set
      `PUBLIC_LEAD_WEBHOOK_URL`, wire CRM/Zapier
- [ ] **BLOCKER** Test end-to-end ON A PHONE: submit a real test lead → it
      appears in the CRM → team SMS fires → /thank-you/ loads
- [ ] Configure Twilio speed-to-lead SMS (recommended) and decide who's on
      first-response duty; goal = call back in minutes
- [ ] Test the failure path: point webhook at a bad URL → form shows the
      "call us instead" error with the phone number
- [ ] Submit a test lead with `?gclid=TEST&utm_source=test` on the landing
      URL and confirm attribution fields arrive in the CRM

## 3. Redirects & DNS

- [ ] Deploy to Vercel or Netlify; add custom domain; HTTPS auto-provisioned
- [ ] Crawl the OLD site for any URLs beyond the known set
      (`/about-us/, /frequently-asked-questions/, /review/, /before-after/,
      /contact-us/, /get-offer/, /terms-of-use/, /privacy/`) and add 301s for
      stragglers (vercel.json / public/_redirects)
      — note `/before-after/`, `/get-offer/`, `/privacy/` keep their URLs
- [ ] After DNS cutover: curl every old URL → expect 301 → 200

## 4. Analytics & ads

- [ ] Add GTM or GA4 snippet to `src/layouts/BaseLayout.astro` (below the
      dataLayer init), loaded **deferred/async** — keep it the only
      third-party script
- [ ] Register the dataLayer events (README table) in GA4; mark
      `lead_thank_you_view` as conversion; import to Google Ads
- [ ] Update Google Ads / Facebook Ads destination URLs to the new pages
      (PPC Force currently runs these — coordinate the cutover so tracking
      params keep flowing; the form already forwards gclid/fbclid/utm_*)
- [ ] Verify Consent/privacy disclosures match the tools actually installed
      (update the Cookies section of /privacy/)

## 5. Listings & profiles

- [ ] Google Business Profile: align NAP with footer exactly; new site link
- [ ] Google Search Console: verify, submit sitemap-index.xml
- [ ] Update Yelp + LinkedIn website links
- [ ] Bing Places / Webmaster Tools

## 6. Pre-flight QA (already automated, re-run on final content)

- [ ] `npm run build` clean
- [ ] `npm run qa`: JSON-LD parses, 1 H1/page, titles/canonicals present,
      internal links resolve (re-run after every content edit)
- [ ] Manual: every page at 375px viewport — no horizontal scroll, sticky bar
      thumb-reachable, form usable one-handed
- [ ] Keyboard-only pass: tab through nav → form steps → submit
- [ ] Lighthouse on deployed URL (mobile): expect 95+ perf (static HTML,
      ~0 KB external JS, self-hosted fonts, SVG LCP) — investigate anything
      below
- [ ] Validate schema on live URLs with Google's Rich Results Test
- [ ] Check browser console on every template: zero errors

## 7. Day-1 after launch

- [ ] Watch the first real leads end-to-end; time the actual callback
- [ ] Check Search Console for crawl errors / redirect issues
- [ ] Screen-record a real phone session of the form for UX review
- [ ] Start A/B test #1 from the README backlog once ~100 form starts/week
