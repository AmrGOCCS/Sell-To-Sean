# COPY.md — All site copy in one reviewable file

Reading level target: 6th–8th grade. One CTA verb everywhere: **"Get My Cash
Offer."** Items in `[BRACKETS]` need the owner's input before launch.
Where copy lives in code: page copy is in `src/pages/*`, repeated blocks in
`src/components/*`, and structured content (FAQs, reviews, cities,
situations) in `src/data/*`.

---

## Global

- **Header CTA:** Get My Cash Offer · phone: (614) 412-1601
- **Sticky mobile bar:** "Call Sean" + "Get My Cash Offer"
- **Form reassurance line (everywhere):** "Takes about 2 minutes · No
  obligation · Your info stays private"
- **Footer boilerplate:** "Central City Solutions LLC, doing business as Sell
  to Sean, is a local cash home buyer in Columbus, Ohio — buying houses in any
  condition across Central Ohio since 2018."

## Homepage (/)

- **Title tag:** Sell Your House Fast in Columbus, OH — Cash Offer in 24 Hours | Sell to Sean
- **Meta description:** Get a fair, written cash offer on your Columbus house in 24 hours. No fees, no repairs, no obligation. Local buyer since 2018 — close in as little as 7 days.
- **Eyebrow pill (with Sean's avatar):** Hi, I'm Sean 👋 — Columbus' favorite homebuyer since 2018
- **H1:** Sell your house the easy way — cash offer in 24 hours.
- **Sub:** No fees. No repairs. No strangers wandering through your living room. Tell us about the house and Sean brings you a fair, **written** cash offer — usually by tomorrow.
- **Hero quick form (THE conversion element — address + phone + email in one card):**
  - Card heading: "Get your free cash offer 👇" · "Takes 2 minutes. No obligation — just a real number."
  - Button: "Get My Cash Offer →" (XL, pulsing glow)
  - Microcopy: "Free · No obligation · 🔒 Your info goes to Sean only — never sold"
- **Mid-page loud bands (clay gradient, white XL button):**
  1. "👋 Curious what your house is worth in cash?" / "Finding out is free, takes 2 minutes, and you don't have to do anything with the answer."
  2. "👋 Still scrolling? Your offer is one form away." / "Address, phone, email — that's all Sean needs to get started on your number."
- **Trust strip:** BBB A+ Rated `[VERIFY]` · Locally owned & operated · Buying in Columbus since 2018
- **Situations band H2:** Whatever brought you here, we've helped someone through it.
  - Body: Most people don't sell to a cash buyer because everything is going great. Behind on payments, a house you inherited, tenants you're done with — there's a page for your situation, with straight answers and a story from someone who's been there.
- **How-it-works H2:** From "what's it worth?" to money in your account.
- **Sean story H2:** You're not selling to a call center. You're selling to Sean.
  - Body 1: Sean Grabow is a Columbus native who started this company in 2018 after going through a stressful home sale of his own. The big national buyers are a phone tree. Sean is a guy with an office on East Rich Street who answers his phone, explains every number, and moves at your pace — that's been the whole playbook since day one.
  - Body 2: His rules for the team: listen first, explain everything clearly, and never push. Read the reviews — Columbus sellers mention Sean, Liam, Noah, and Marie by name, because they actually met them.
- **Reviews H2:** Don't take our word for it.
- **Comparison H2:** Selling to Sean vs. listing with an agent
  - Intro: A cash sale isn't right for everyone — and we'll tell you if it's not right for you. Here's the real tradeoff, including the row most buyers hide.
- **FAQ H2:** Asked and answered.
- **Final CTA H2:** See your number. Then decide.
  - Sub: A written cash offer costs nothing and commits you to nothing. Worst case, you'll know exactly what your house is worth to a cash buyer.

## How It Works (/how-it-works/)

- **Title tag:** How It Works — Sell Your Columbus House for Cash in 3 Steps | Sell to Sean
- **H1:** How selling your house to Sean works
- **The 3 steps (also reused on homepage & city pages):**
  1. **Tell us about your house** — Start with just the address — it takes about 2 minutes. Sean or a team member calls you within `[X — VERIFY]` hours to hear your situation. No pressure, no scripts.
  2. **Get your written cash offer** — We do a quick walkthrough — in person, or from photos if you're out of town — and put a fair cash offer in writing, usually within 24 hours. We'll show you how we got to the number.
  3. **Pick your closing date** — Close in as little as 7 days, or take the time you need. We close at a licensed Ohio title company, and you walk away with your money. No fees come out of it.
- Long-form sections: "What happens right after you submit," "The walkthrough"
  ("…you can't fail this inspection: condition changes the math, never the
  respect you get"), "Your written offer," "Closing day" — full text in
  `src/pages/how-it-works.astro`.

## Offer math section (homepage + how-it-works)

- **H2:** How we calculate your offer
- **Formula card:** Your offer = what the fixed-up house will sell for − repair costs − our costs & margin
- **Example (clearly labeled "Example only — not a quote"):** $220,000 ARV − $40,000 repairs − $40,000 costs & margin = **$140,000 offer**
- **Honesty kicker:** "…If a higher price on the open market makes more sense for you, we'll say so. Some people should list with an agent. We'd rather tell you the truth than buy your house."

## Comparison table (homepage + how-it-works)

Rows: commissions & fees ($0 vs ~6% plus other fees*) · repairs & cleanup ·
showings · timeline (7 days vs 90–120 days*) · certainty (cash vs financing
risk) · privacy · **sale price ("Below full market — that's the honest
tradeoff" vs "Often higher, if the home shows well")**.
*Figures are the claims used on the current live site, footnoted as such.

## Multi-step lead form

- **Heading:** Get your free cash offer · "Where should we send your offer?" (step 4)
- **Step 1:** Property street address → button "Get My Cash Offer →" · microcopy "Free written offer · You decide after you see the number"
- **Step 2 (condition):** Move-in ready / Needs some work / Needs major repairs ("Roof, systems, damage — we've seen it all") / I'm not sure ("That's okay — we'll figure it out together")
- **Step 3 (timeline):** As soon as possible ("We can close in as little as 7 days") / In the next 1–3 months / Just exploring my options ("Smart — get the number first")
- **Step 4:** name, phone, email + consent (below) → button "Send Me My Offer" · microcopy "🔒 Your info goes to Sean's team only — never sold to other investors."
- **Error tone:** helpful, never scolding — e.g. "Please enter a 10-digit phone number so we can deliver your offer."
- **TCPA consent (required box):** "I agree to receive calls, texts, and emails from Central City Solutions LLC d/b/a Sell to Sean about my property inquiry, such as my offer, questions, and appointment details. Message frequency varies. Message & data rates may apply. Reply STOP to opt out. See our Terms and Privacy Policy. (Required)"
- **TCPA consent (optional box):** "I also agree to receive occasional marketing calls, texts, and emails, such as offers and real-estate updates. Not required to sell your house. Consent is not a condition of purchase. Reply STOP to opt out. (Optional)"
  `[HAVE ATTORNEY REVIEW both consents]`

## About (/about/)

- **H1:** The "Sean" in Sell to Sean is a real person.
- Key sections: "Why Sean started this company" (includes
  `[PLACEHOLDER — 2–3 sentences from Sean in his own words about his stressful
  sale]` — **this is the most important missing copy on the site**),
  "How the team works" (listen first / explain everything / homeowner's pace),
  "What we actually do with the houses" (not wholesalers; renovate with local
  crews → Before & After), "Check us out before you call" (Google, Yelp,
  LinkedIn, BBB `[VERIFY]`).

## Reviews (/reviews/)

- **H1:** What Columbus sellers say about Sell to Sean
- Intro: "Every review below is from a real seller, shown exactly as they
  wrote it — typos and all. We didn't clean them up, because real beats
  polished." + links to Google/Yelp "where we can't touch them."
- All 47 reviews: verbatim in `src/data/reviews.js`. **Do not edit.**

## Before & After (/before-after/)

- **H1:** The houses other buyers run from? We buy them.
- Four projects, each `[REAL BEFORE/AFTER PHOTOS + one-line real description]`.
- CTA: "Your house could be the next 'before.'"

## FAQ (/faq/)

- **H1:** Frequently asked questions
- 12 Q&As in `src/data/faqs.js`, including the trust-critical ones: "How do I
  know this is legitimate and not a scam?" and "Would a real estate agent get
  me more money?" (answered honestly: "maybe — if…").

## Get Offer (/get-offer/)

- **H1:** Let's find out what your house is worth in cash.
- Bullets: real person calls within `[X]` hours · written offer ~24h · any
  condition · info never sold. + Allison R review verbatim.

## Thank You (/thank-you/)

- **H1:** Done. Your house is on Sean's desk.
- The 3 next-step cards: (1) "Within `[X]` hours: a real person calls you" —
  names Liam/Noah/Marie, "will call from a Columbus number"; (2) "Usually
  within 24 hours: your written offer"; (3) "Then: you decide. That's it."
- Secondary action: call now + "jot down anything you know about the roof's
  age, the furnace, and roughly what you still owe."

## Contact (/contact/)

- **H1:** Talk to us — no pressure, ever.
- NAP block + `[VERIFY office hours]` + `[VERIFY email]`.

## 404

- **H1:** This page moved out. Your offer didn't.

## City pages (template + 3)

- **H1:** Sell your house fast in {City}, Ohio
- **Title pattern:** Sell My House Fast in {City}, OH — Cash Offer in 24 Hours | Sell to Sean
- Unique local copy per city in `src/data/cities.js` (Whitehall, Reynoldsburg,
  Grove City) — housing-stock notes, local pain points, cross-links to
  matching situation pages. One `[VERIFY Whitehall inspection rules]` flag.

## Situation pages (template + 3)

Each opens with a quotable answer-first paragraph (GEO), e.g.:

- **Foreclosure H1:** "Behind on payments? You can still sell — and keep your equity."
  - Answer-first: "Yes — you can sell a house in foreclosure in Ohio. Ohio uses a court-supervised (judicial) foreclosure process… Until the court confirms that sale, the house is still yours to sell…"
- **Inherited H1:** "Inherited a house? We make the hard part simple."
  - Answer-first: "Yes — you can sell an inherited house in Ohio… A probate attorney can confirm which situation applies to you — and we work alongside them all the time."
- **Tired landlord H1:** "Done being a landlord? Sell the rental — tenants and all."
  - Answer-first: "Yes — you can sell a rental property in Ohio with tenants still living in it. The lease transfers to the buyer at closing…"

Full body copy, steps, and per-page FAQs: `src/data/situations.js`.

## Legal (/privacy/, /terms/)

Plain-language policies including SMS STOP/HELP language, "we never sell your
information," and "consent to marketing is not a condition of purchase."
Both pages are marked `[HAVE ATTORNEY REVIEW THIS ENTIRE PAGE BEFORE LAUNCH]`.
