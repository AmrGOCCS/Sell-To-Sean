# Sell To Sean — Rebuild Strategy (Phases 1–3)

> Prepared 2026-06-11. Sources: full crawl of selltosean.com (Home, About, FAQ,
> Reviews, Before & After, Contact, Get Offer pages) plus live competitive review
> of expresshomebuyers.com and opendoor.com. Everything marked **[ASSUMPTION]**
> or **[VERIFY]** needs client confirmation before launch.

---

## PHASE 1 — BUSINESS BRIEF

### What the business is

**Sell to Sean** (legal entity: **Central City Solutions LLC** — confirmed via the
site's Yelp and LinkedIn links) is a direct cash home buyer in **Columbus /
Central Ohio**, founded **2018**, led by **Sean Grabow**, a Columbus native who
started the company after a stressful home sale of his own. The company buys
houses directly — it is the actual buyer, not a listing agent or lead broker —
renovates them (documented on the Before & After page), and resells or rents
them.

**NAP (from current site):**
- Name: Sell to Sean (Central City Solutions LLC)
- Address: 520 E Rich St, Columbus, OH 43215
- Phone: (614) 412-1601

**Team named in real reviews:** Sean, Liam, Noah, Marie, Jessica, Adam, Dave.
This matters — multiple named humans is a trust asset no national buyer has.

### Current offer and promises (all pulled from the live site — preserve)

- Free, no-obligation cash offer, any condition, any situation
- Zero fees: no agent commission, no closing costs
- Sell as-is: no repairs, no cleanup
- Close in **as little as 7 days**, on the seller's timeline
- "Fair and transparent pricing grounded in current market conditions"; offer
  uses "a specific formula that takes into account many different factors"
- Comparison claim used on site: traditional sale = "6% plus other fees" and
  "90–120 days minimum"
- BBB A+ Rated **[VERIFY current rating before launch]**
- "Columbus' Favorite Homebuyer Since 2018" (brand tagline)
- "As Seen On" badge with **no outlets named** — **[VERIFY which outlets, or cut;
  an unnamed "As Seen On" reads as fake and hurts trust]**

### Current lead capture (the conversion problem)

- Single-step form asking for **everything at once**: street address, city,
  state, zip, name, email, phone, message — 8+ visible fields. This is the #1
  conversion leak. Industry pattern (verified on Express Homebuyers, Opendoor)
  is address-first with progressive disclosure.
- Phone (614) 412-1601 appears 8+ times — phone is clearly a valued channel.
- Hidden tracking fields (utm_*, gclid, fbclid, campaignid) confirm **active
  Google Ads and Facebook Ads traffic** (site credits "PPC Force"). The rebuild
  must preserve this tracking or paid attribution breaks.
- The form already carries **two-checkbox TCPA consent** (transactional +
  marketing). Good — we keep and refine this.

### Proof inventory (all real, all preserved verbatim)

- **47 written testimonials** on the Reviews page, with first names + last
  initials. Standouts: Don S (sold 6 rentals via attorney referral), Leeta P
  (tenant eviction handled), Lin D (long, character-focused), Patrick D
  (avoided losing his home with nothing), Deanne S (grandmother's estate).
  These map almost perfectly onto our four personas — rare luck.
- 4 before/after renovation projects with paired photos.
- Photos: Sean profile photo ("Sean Profile Pic 2026"), Sean inside a purchased
  house, drone neighborhood shot, a YouTube video ("Sell To Sean Columbus
  Living"). **[NEED: original image assets from client]**
- No aggregate star rating or review count is claimed anywhere.
  **[VERIFY Google Business Profile rating/count — if strong, surface it; we
  will not invent one]**

### Business model & economics

- **Who pays:** No one pays Sell to Sean directly. Revenue = spread between
  purchase price and resale value after renovation (plus rental holds).
- **[ASSUMPTION] Unit economics:** local fix-and-flip operations typically gross
  five figures per closed deal. With PPC traffic costing real money per click in
  the "sell my house fast" auction (among the most expensive keywords in paid
  search), a qualified submitted lead is plausibly worth **hundreds of dollars**.
  Exact figures need client P&L; the design decision it drives is safe either
  way: *every marginal conversion-rate point on this site is worth real money,
  so the site should sacrifice everything secondary to lead capture.*
- **#1 conversion event:** form submission containing property address + phone.
- **#2 conversion event:** inbound phone call (click-to-call on mobile).
- **Speed-to-lead is decisive:** in this niche, sellers submit to 2–4 buyers at
  once; the first responder usually wins the appointment. The rebuild includes
  webhook + SMS-notification stubs so Sean's team is pinged the moment a lead
  lands.

### Explicit assumptions / open questions

1. **[VERIFY]** BBB A+ status and "As Seen On" outlets.
2. **[VERIFY]** Google review count/rating for the AggregateRating schema and
   trust badges. Schema ships disabled until real numbers are supplied.
3. **[ASSUMPTION]** Service area = Columbus + Franklin County suburbs +
   surrounding Central Ohio counties. City pages chosen accordingly; trivially
   editable.
4. **[ASSUMPTION]** No CRM integration details known. Form ships with a clean
   webhook/API placeholder + documented Zapier/Make/Twilio wiring instructions.
5. **[ASSUMPTION]** "Houses bought" count, average days-to-close, and similar
   stats are **not** on the current site, so the rebuild uses none — only
   placeholders like `[X HOUSES BOUGHT — CLIENT TO CONFIRM]`.
6. Old URLs (`/about-us/`, `/frequently-asked-questions/`, `/review/`,
   `/before-after/`, `/contact-us/`, `/get-offer/`, `/terms-of-use/`,
   `/privacy/`) will be preserved or 301-redirected — mapped in
   LAUNCH-CHECKLIST.md.

---

## PHASE 2 — PERSONAS & PSYCHOLOGY

A note on evidence: each persona below is anchored to at least one *real
testimonial already on the site*, which we'll reuse as persona-matched proof.

### Persona 1 — "Underwater Dana": distressed / pre-foreclosure
*(Site evidence: Patrick D — "thought I was going to lose my home and get
nothing out of it… He got me paid and made sure I didn't lose my house for
nothing.")*

- **Situation:** Behind on payments, foreclosure notice received or feared.
  Often also behind on taxes or utilities. Clock is literally running.
- **Emotional state:** Shame, panic, paralysis. Has been bombarded by predatory
  mail and robocalls, so default stance is *"this is probably a scam."*
- **Objections:** "You'll lowball me because you know I'm desperate." "Is this
  even legal?" "Will I walk away with anything?"
- **What builds trust:** A real local person with a face and address; plain
  statements of Ohio-specific facts (you can sell up to the sheriff's sale; a
  sale stops foreclosure and protects your credit and remaining equity); the
  written, no-obligation offer; Patrick D's testimonial.
- **What triggers action:** Urgency made *hopeful*, not threatening: "There is
  still time — here's exactly how much and what happens next."
- **Info needed before giving address+phone:** that contacting Sean doesn't
  commit them to anything, that it's confidential, and what the very next step
  is (a phone call, not a stranger at the door).

### Persona 2 — "Out-of-State Omar": inherited / probate property
*(Site evidence: Deanne S — grandmother's house, "walked us through the process
step by step and even allowed us to take the time we needed"; Tim L — out-of-
state owner.)*

- **Situation:** Inherited a Columbus house, often lives elsewhere. House may be
  full of belongings, dated, maybe in probate with sibling co-heirs. Grieving.
- **Emotional state:** Overwhelmed by logistics + guilt about "selling Mom's
  house." Decision-by-committee with family.
- **Objections:** "I don't understand probate." "What about everything inside
  the house?" "I can't manage this from another state." "My siblings need to
  agree."
- **What builds trust:** Hand-holding language; explicit "take what you want,
  leave the rest — we handle cleanout"; remote/flexible closing; patience
  ("move at your pace" is already Sean's stated philosophy — lean in).
- **What triggers action:** Simplicity. One clear path replacing twelve chores.
- **Info needed first:** whether they can sell before/during probate in Ohio,
  whether they must empty the house (no), whether they must fly in (usually no).

### Persona 3 — "Spreadsheet Steve": tired landlord
*(Site evidence: the richest vein — Joshua K, Tim L, Leeta P with the tenant
eviction, Don S selling 6 rentals on attorney referral.)*

- **Situation:** Owns 1–10 rentals; tenant problems, deferred maintenance, or
  just done. May have tenants in place. Numbers-driven, time-poor.
- **Emotional state:** Pragmatic irritation, not distress. Evaluates like an
  investor; allergic to fluff.
- **Objections:** "What about my tenants/lease?" "Your offer minus my mortgage —
  what do I actually net?" "Don't waste my time with a tire-kicker offer."
- **What builds trust:** Talking numbers transparently (the "how we calculate
  your offer" section is aimed squarely at Steve); buying *with tenants in
  place*; portfolio deals; the Don S and Leeta P testimonials verbatim.
- **What triggers action:** Certainty and net-proceeds math: cash, no financing
  contingency, no repair credits, no 6% commission, pick the closing date.
- **Info needed first:** that tenants/leases aren't a dealbreaker, and that the
  offer is firm once written.

### Persona 4 — "Turning-Point Tina": divorce / relocation / downsizing
*(Site evidence: Raquel S — "Thank you for making my transition easy";
Bethany R; Kimberly F.)*

- **Situation:** Life event forces a sale on a deadline — divorce decree, job
  relocation, health, downsizing. House may be fine; *time and privacy* are the
  problem.
- **Emotional state:** Stressed, decision-fatigued, values discretion (no sign
  in the yard, no 30 showings, no neighbors knowing).
- **Objections:** "Am I leaving too much money on the table for speed?" "Can you
  really hit my date?" "Will this stay private?"
- **What builds trust:** Discretion explicitly promised; honest framing of the
  speed-vs-price tradeoff (acknowledging it builds more trust than denying it);
  the agent-vs-Sean comparison table with *time and certainty* as columns, not
  just dollars.
- **What triggers action:** A guaranteed date on a calendar.
- **Info needed first:** the realistic timeline (offer in 24h, close in as
  little as 7 days or on their date) and that the offer is free to walk away
  from.

### Message hierarchy

- **Homepage speaks primarily to a blend of Tina + Steve** — the "I need
  certainty and speed without games" mindset — because it's the broadest common
  denominator and matches PPC intent ("sell my house fast columbus"). Hero =
  concrete outcome + address field; transparency section = Steve; humanity and
  process clarity = Tina and Omar.
- **Dana and Omar are served by dedicated situation pages** (foreclosure,
  inherited) linked prominently from a homepage "Whatever the situation" band —
  they need persona-specific reassurance the homepage shouldn't dilute itself
  to provide.
- **Every persona gets matched proof:** testimonials are tagged and placed by
  persona (Patrick D on the foreclosure page, Deanne S on inherited, Don S +
  Leeta P on tired landlord, Raquel S on the homepage).
- **One verb everywhere: "Get My Cash Offer."**

---

## PHASE 3 — COMPETITIVE & CONVERSION STRATEGY

### What the best in class do (and what we take)

**Verified live (June 2026):**
- **Express Homebuyers** — closest structural comp. Hero: outcome headline +
  "No Fees. No Repairs. No Hassles." + **address-only field in the hero** with
  "Get Your Cash Offer" button; trust stack of houses-bought count, years, BBB
  A+, local media logos; prominent phone number. *Take: address-first hero
  form, stacked quantified trust, phone parity.*
- **Opendoor** — "Get cash offer" CTA with two micro-reassurances right at the
  button: **"takes 5 minutes"** and **"your information stays private."**
  Massive scale proof. *Take: time-cost and privacy reassurance at the point of
  commitment. Skip: their cool, corporate anonymity — that's exactly what Sean
  differentiates against.*

**From established niche patterns [industry knowledge, not re-verified this
session]:**
- **HomeVestors / We Buy Ugly Houses** — franchise model whose strongest asset
  is *local franchisee faces* backed by a national brand; phone-forward.
  *Take: the local-face strategy (Sean does this natively). Avoid: the shouty
  yellow-sign aesthetic that triggers scam associations.*
- **Offerpad** — multi-step offer flow with progress indication and condition
  questions. *Take: progressive disclosure mechanics.*
- **Typical local competitor sites** (Carrot-template style): single long form,
  stock photos, vague "we buy houses" copy, no offer-math transparency, no real
  faces. *This is the bar we clear easily.*

**The strategic gap Sell to Sean exploits:** national buyers have scale but no
face; local competitors have a face but template sites and opaque math. A site
with *fintech-level polish + Sean's actual face + transparent offer math + 47
real testimonials* occupies a position nobody in the Columbus market holds.

### Conversion strategy

**Hero (above the fold, mobile-first):**
> **H1:** "Get a fair cash offer on your Columbus house in 24 hours."
> **Sub:** "No fees. No repairs. No obligation. Sell as-is and close in as
> little as 7 days — on your timeline."
> **Form:** single address field + "Get My Cash Offer" button, with
> micro-reassurance under it: "Takes about 2 minutes · No obligation · Your
> info stays private."
> Plus Sean's real photo in/near the hero — the differentiator, not a footer
> afterthought — and a click-to-call link.

**Multi-step lead form (the core machine):**
1. **Step 1 — Address only** (lowest friction, highest perceived relevance;
   autocomplete-ready). Starting commits the visitor (sunk-cost /
   micro-commitment).
2. **Step 2 — Property condition** (one-tap chips: needs nothing / a little
   work / major repairs — feels like *getting* an offer, not *giving* data).
3. **Step 3 — Timeline** (ASAP / 1–3 months / just exploring — qualifies the
   lead for speed-to-lead triage).
4. **Step 4 — Contact info last** (name, phone, email), with TCPA consent
   checkboxes carried over from the current site, refined for compliance.
   Progress bar throughout; back navigation; state preserved; inline
   validation; phone input mask. Partial-progress events fire to the dataLayer
   so abandonment is measurable per step.
- All current hidden tracking fields (utm_*, gclid, fbclid, campaignid, uid)
  preserved — paid attribution must not break.

**Sticky mobile CTA bar:** persistent bottom bar with "📞 Call Sean" +
"Get My Cash Offer," thumb-reachable, hidden while the form itself is on
screen (no competing CTAs in one viewport).

**Trust stack (homepage order):**
1. Hero reassurance line + BBB A+ badge **[pending verification]**
2. "How it works" in 3 steps with what happens at each (including "Sean or a
   team member calls you within [X] hours" — speed-to-lead as a *promise*)
3. **"How we calculate your offer"** — the rare-transparency section: After
   Repair Value − repair costs − our costs and margin = your offer, with a
   worked illustrative example clearly labeled as an example. Aimed at Steve;
   disarms "lowball" for everyone.
4. Sean's story block (face, name, Columbus native, founded 2018, why) →
   links to About
5. Testimonial band — real reviews, persona-matched
6. Comparison table: Selling to Sean vs. listing with an agent (fees, repairs,
   showings, time, certainty) — *honest*: it will say an agent may net you more
   if the house is market-ready and you have 90+ days. Honesty here is the
   conversion tactic; every persona has been lied to by a postcard already.
7. "Any situation" band → links to situation pages
8. FAQ (objection-killers from Phase 2, FAQPage schema)
9. Final CTA section repeating the address-first form.

**Risk reversal, stated verbatim and repeated:** no obligation · no fees ·
offer in writing · you can walk away at any point, even after the offer.

**Speed-to-lead messaging + plumbing:** thank-you page sets the expectation
("Here's what happens in the next 24 hours"); webhook fires instantly with a
Twilio SMS stub so the team can call back in minutes, not hours.

### SEO / GEO architecture

```
/                          Homepage (head term: "sell my house fast columbus" / "we buy houses columbus")
/how-it-works/             Process + offer-math deep dive
/about/                    Sean Grabow entity page (E-E-A-T anchor)
/reviews/                  All 47 real testimonials + Review schema (rating schema only when verified)
/before-after/             Renovation proof (preserved from current site)
/faq/                      FAQPage schema; standalone Q&A blocks
/sell-my-house-fast/{city}/         City template — launch: whitehall, reynoldsburg, grove-city
/we-buy-houses/{situation}/         Situation template — launch: foreclosure, inherited-house, tired-landlord
/contact/  /privacy/  /terms/  /thank-you/  /404
```

- **City pages** (launch set: **Whitehall, Reynoldsburg, Grove City** —
  inner-ring Franklin County suburbs with older housing stock where as-is cash
  sales are genuinely common; easy to extend). Each gets genuinely unique
  content: neighborhood-level housing-stock notes, what Sean's team has done
  nearby (Before & After tie-ins where real), city-specific FAQ, localized
  schema `areaServed`. Not doorway spam: if we can't say something true and
  specific about a city, we don't ship the page.
- **Situation pages** (launch set: **foreclosure, inherited house, tired
  landlord** — matching Dana, Omar, Steve) are dual-purpose: SEO landing page
  *and* persona-matched conversion page, opening with a direct, quotable,
  answer-first paragraph (GEO), e.g. "Yes — you can sell a house in foreclosure
  in Ohio at any point before the sheriff's sale is confirmed. Here's how it
  works…", followed by Ohio-specific steps, timelines, the persona's matched
  testimonial, and the same multi-step form.
- **GEO layer across the site:** consistent entity statements (who Sean Grabow
  is, what Central City Solutions LLC d/b/a Sell to Sean does, where it
  operates) repeated in copy + LocalBusiness/RealEstateAgent JSON-LD; FAQ
  answers written as liftable standalone Q&As; concrete numbers and process
  steps over adjectives; `llms.txt` describing the business.
- **Internal linking:** homepage → all city + situation pages; city ↔ situation
  cross-links ("Facing foreclosure in Whitehall?"); every page → /how-it-works/
  and the form. BreadcrumbList schema on templated pages.

### Measurement & test backlog (built in Phase 4)

- GA4-ready dataLayer events: `form_start`, `form_step_2/3/4`, `form_submit`,
  `phone_click`, `scroll_75`, per-page CTA clicks. Documented in README.
- A/B backlog (priority order): hero headline (outcome vs. empathy framing);
  multi-step vs. single-step form; Sean's photo in hero vs. below; offer-math
  section position; sticky-bar copy ("Call Sean" vs. phone number).

---

## Approval gate

Phase 4 (build) starts on your "go." If you say "go" without edits, I proceed
with the stated assumptions: launch cities Whitehall / Reynoldsburg / Grove
City; situations foreclosure / inherited / tired landlord; Astro + Tailwind
static stack; all unverified stats/badges shipped as clearly marked
placeholders; old URLs 301-mapped.
