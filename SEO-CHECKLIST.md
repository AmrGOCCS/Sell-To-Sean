# SEO-CHECKLIST.md

## Already implemented in this build ✅

- [x] One `<h1>` per page, logical heading tree (verified by build QA script)
- [x] Unique title + meta description per page, written as ad copy
- [x] Canonical tag on every page; trailing-slash URLs enforced site-wide
- [x] Schema.org JSON-LD, validated as parseable on every page:
  - `RealEstateAgent` (NAP, geo, founder, `areaServed` for Columbus + each
    city page, `sameAs` → Google/Yelp/LinkedIn) — sitewide
  - `WebSite` — sitewide
  - `FAQPage` — /faq/ and each situation page (their unique Q&As only)
  - `BreadcrumbList` — all inner pages
- [x] **Review/AggregateRating schema intentionally omitted** — Google treats
  review markup on the reviewed business's own site as self-serving and
  ignores it; faking an aggregate would risk a manual action. The play
  instead: collect/maintain reviews on the Google Business Profile and link
  to it (done on /reviews/).
- [x] XML sitemap (`/sitemap-index.xml` via @astrojs/sitemap) + robots.txt
  referencing it; /thank-you/ disallowed + noindex
- [x] OpenGraph + Twitter cards on every page (default OG image placeholder)
- [x] Internal linking: home ↔ city pages ↔ situation pages ↔ how-it-works,
  footer nav to everything, "nearby cities" and "other situations" bands
- [x] 301 redirects from all old WordPress URLs (vercel.json, _redirects, and
  static meta-refresh fallbacks)
- [x] Images: explicit width/height (zero CLS), lazy-loading below the fold,
  `fetchpriority="high"` on the LCP image; SVG placeholders are <2 KB
- [x] Self-hosted variable fonts (Inter + Lora via Fontsource, font-display:
  swap built in); no third-party requests at all in the base build
- [x] GEO: answer-first quotable paragraphs on situation pages; consistent
  entity statements (Sean Grabow / Central City Solutions LLC / Columbus)
  in copy + schema + footer; `/llms.txt`; FAQ answers written as standalone
  liftable Q&As; concrete process facts over adjectives

## To do at/after launch (owner + dev)

- [ ] Replace OG placeholder with a real 1200×630 image (photo of Sean)
- [ ] Verify domain in **Google Search Console**; submit sitemap; monitor the
  old-URL 301s under Coverage for the first month
- [ ] **Google Business Profile:** make name, address, phone, categories, and
  hours exactly match the site footer (NAP consistency); add photos; set the
  website link to the homepage with UTM tagging
- [ ] Confirm BBB profile is active and matches "A+" claim — or remove claim
- [ ] "As Seen On" badges (ABC/CBS/FOX/NBC, from the old site) are live on the
      homepage — confirm the underlying media mentions are real and keep proof
      on file
- [ ] Update Yelp/LinkedIn listings to point at the new URLs
- [ ] Bing Webmaster Tools + Bing Places (cheap wins for this niche)
- [ ] After launch: watch which non-launch cities drive form fills (GA4
  `landing_page` field) and add city pages for the top performers —
  10 minutes each via `src/data/cities.js` (see README)
- [ ] Quarterly: re-verify every `[VERIFY]` fact and refresh testimonials
  from new Google reviews (added verbatim to `src/data/reviews.js`)

## Keyword → page map (primary intents)

| Query family | Page |
|---|---|
| we buy houses columbus / sell my house fast columbus | / |
| how do cash home buyers work / cash offer calculator | /how-it-works/ |
| sell to sean reviews / is sell to sean legit | /reviews/, /about/ |
| sell my house fast {whitehall, reynoldsburg, grove city} | /sell-my-house-fast/{city}/ |
| sell house in foreclosure ohio / stop sheriff sale | /we-buy-houses/foreclosure/ |
| sell inherited house columbus / sell house in probate ohio | /we-buy-houses/inherited-house/ |
| sell rental property with tenants ohio | /we-buy-houses/tired-landlord/ |
