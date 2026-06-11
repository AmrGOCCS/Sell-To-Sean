/**
 * Situation landing pages: /we-buy-houses/{slug}/
 * Each page is both an SEO landing page and a persona-matched conversion page.
 *
 * `answerFirst` is the GEO block: a direct, quotable, factually careful
 * paragraph that an AI answer engine can lift verbatim.
 * Legal-adjacent statements stay general and point to professionals.
 */
export const SITUATIONS = [
  {
    slug: 'foreclosure',
    persona: 'foreclosure',
    emoji: '⏰',
    title: 'Sell Your House in Foreclosure in Columbus, Ohio',
    metaTitle: 'Facing Foreclosure in Columbus? You Can Still Sell — Sell to Sean',
    metaDescription:
      'Yes, you can sell a house in foreclosure in Ohio — right up until the sheriff\'s sale is confirmed. Get a written cash offer in 24 hours and keep your equity. No fees.',
    h1: 'Behind on payments? You can still sell — and keep your equity.',
    answerFirst:
      "Yes — you can sell a house in foreclosure in Ohio. Ohio uses a court-supervised (judicial) foreclosure process, which usually takes several months from the first missed-payment notice to a sheriff's sale. Until the court confirms that sale, the house is still yours to sell. Selling before the sale pays off the loan, stops the foreclosure, limits the damage to your credit, and puts any remaining equity in your pocket instead of losing it.",
    sections: [
      {
        h2: 'What happens if you do nothing',
        body: "If the foreclosure finishes, the court orders your house sold at a sheriff's auction. Auctions usually bring low prices, the proceeds go to the bank and the lawyers first, and the foreclosure stays on your credit for years. You can lose the house and walk away with little or nothing.",
      },
      {
        h2: 'How selling to Sean stops it',
        body: "We buy your house directly, for cash, before the auction. At closing, the title company pays off your mortgage and any back payments from the sale price — you don't need cash up front. Whatever is left after the payoff is yours. Because we close in as little as 7 days, this works even when the clock is short. Everything is confidential: no sign in the yard, no public listing.",
      },
      {
        h2: 'What it costs you',
        body: 'Nothing out of pocket. No fees, no commissions, no closing costs. You get a written offer first, with no obligation — if it doesn\'t help your situation, you owe us nothing and we\'ll tell you what other options might work better. We are not credit counselors or attorneys; for advice on your loan or the court case, a HUD-approved housing counselor or a foreclosure attorney can help, and talking to one costs nothing.',
      },
    ],
    steps: [
      'Tell us about the house — it takes about 2 minutes, and it\'s confidential.',
      'We call you within [X — VERIFY] hours, find out where you are in the process, and give you a written cash offer, usually within 24 hours.',
      'You pick the closing date. The title company pays off the loan; you keep what\'s left.',
    ],
    faqs: [
      {
        q: "How late in the foreclosure process can I still sell my house in Ohio?",
        a: "In Ohio you can generally sell your house at any point until the court confirms the sheriff's sale. Even after the auction happens, there is a window before confirmation. The earlier you act, the more options and equity you keep — but it is rarely too late to ask.",
      },
      {
        q: 'Will selling stop the damage to my credit?',
        a: 'Selling before the foreclosure is completed means no completed foreclosure appears on your record. Missed payments already reported will remain, but you avoid the biggest, longest-lasting hit.',
      },
      {
        q: "What if I owe more than the house is worth?",
        a: "Tell us anyway. In some cases a short sale (where the bank agrees to accept less) is possible, and we can talk through whether that path fits. You'll get straight answers either way.",
      },
    ],
    reviewPersona: 'foreclosure',
    reviewIntro: 'From a Columbus seller who was where you are:',
  },
  {
    slug: 'inherited-house',
    persona: 'inherited',
    emoji: '📦',
    title: 'Sell an Inherited House in Columbus, Ohio',
    metaTitle: 'Sell an Inherited or Probate House in Columbus — Sell to Sean',
    metaDescription:
      'Inherited a Columbus house? Sell it as-is for cash — even from out of state. Leave what you don\'t want, we handle the cleanout. Written offer in 24 hours.',
    h1: 'Inherited a house? We make the hard part simple.',
    answerFirst:
      "Yes — you can sell an inherited house in Ohio, and in many cases sooner than people expect. If the property passed to you through a transfer-on-death designation or joint ownership, you may be able to sell right away. If it has to go through probate, the executor or administrator can usually sell it during the process with the proper authority. A probate attorney can confirm which situation applies to you — and we work alongside them all the time.",
    sections: [
      {
        h2: 'You don\'t have to empty the house',
        body: 'This is the question we hear most. The answer: take the things that matter to you and leave everything else — furniture, clothes, boxes, all of it. We handle the cleanout after closing. You never have to rent a dumpster or spend weekends sorting a full house.',
      },
      {
        h2: 'Out of state? You may never need to fly in',
        body: 'Much of what we do can be handled remotely: we can walk the property from photos or a video call, documents can be signed with a mobile notary or by mail, and funds are wired at closing. Many of our sellers never set foot in Ohio.',
      },
      {
        h2: 'Multiple heirs? We move at your family\'s pace',
        body: "Estates often involve siblings in different states with different opinions. There's no countdown clock with us — we put the offer in writing, answer everyone's questions, and wait while your family decides. One of our sellers, Deanne, put it best: we \"walked us through the process step by step and even allowed us to take the time we needed.\"",
      },
    ],
    steps: [
      'Tell us about the property — address first, 2 minutes, no obligation.',
      'We call within [X — VERIFY] hours, answer your probate questions honestly, and give you a written cash offer, usually within 24 hours.',
      'Close when the estate is ready — 7 days or 7 months. Take what you want; leave the rest.',
    ],
    faqs: [
      {
        q: 'Can I sell an inherited house in Ohio before probate is finished?',
        a: 'Often, yes. The executor or administrator of the estate can usually sell real estate during probate with the right authority, and houses that pass by transfer-on-death deed or joint survivorship can skip probate entirely. A probate attorney can tell you which applies — the answer is usually simpler than people fear.',
      },
      {
        q: 'Do I have to clean out my parent\'s house before selling?',
        a: 'Not when you sell to us. Take the keepsakes and anything you want; leave the rest. We handle the entire cleanout after closing at no cost to you.',
      },
      {
        q: 'I live out of state. How does closing work?',
        a: 'Remotely, in most cases. Documents can be signed by mail or with a mobile notary where you live, and your proceeds are wired to your bank. Many sellers never have to travel to Ohio.',
      },
    ],
    reviewPersona: 'inherited',
    reviewIntro: 'From a family we helped through an estate sale:',
  },
  {
    slug: 'tired-landlord',
    persona: 'landlord',
    emoji: '🔑',
    title: 'Sell Your Rental Property in Columbus, Ohio',
    metaTitle: 'Tired Landlord? Sell Your Columbus Rental As-Is — Sell to Sean',
    metaDescription:
      'Sell your Columbus rental for cash — tenants in place, deferred maintenance and all. Single houses or whole portfolios. Firm written offer, close on your date.',
    h1: 'Done being a landlord? Sell the rental — tenants and all.',
    answerFirst:
      'Yes — you can sell a rental property in Ohio with tenants still living in it. The lease transfers to the buyer at closing, so you don\'t have to wait for it to end or go through an eviction first. We buy occupied rentals directly, for cash, in any condition — including properties with difficult tenants, deferred maintenance, or code violations — and we buy portfolios, not just single houses.',
    sections: [
      {
        h2: 'Run the numbers like an investor',
        body: 'You know the math: another roof, another turnover, another month of chasing rent. Compare that to a firm cash number with no commission (typically 6% on a listed sale), no repair credits after inspection, no financing contingency that can kill the deal in week five, and a closing date you pick. We\'ll show you exactly how we got to our number — see "How we calculate your offer."',
      },
      {
        h2: 'Tenants are our problem, not yours',
        body: 'Current lease? It transfers to us. Month-to-month? Fine. Behind on rent or worse? We\'ve handled it before — one seller, Leeta, came to us mid-eviction; we worked through it with her and bought the house without lowballing her at the end. You don\'t have to deliver the property empty.',
      },
      {
        h2: 'Selling more than one?',
        body: 'We buy portfolios. One seller, Don, needed to sell six rentals quickly — his attorney sent him to Sean, and he had a workable cash offer in under a week. One negotiation, one closing process, done.',
      },
    ],
    steps: [
      'Send the address (or the list of addresses). 2 minutes, no obligation.',
      'We call within [X — VERIFY] hours, talk numbers like adults, and put a firm cash offer in writing, usually within 24 hours.',
      'Pick your closing date. Leases, tenants, and repairs become our problem at closing.',
    ],
    faqs: [
      {
        q: 'Can I sell a rental property in Ohio with tenants still in it?',
        a: 'Yes. The lease transfers to the buyer at closing. You don\'t need the tenant\'s permission to sell, and you don\'t have to wait for the lease to end. We buy occupied rentals routinely, including month-to-month and behind-on-rent situations.',
      },
      {
        q: 'How is your offer different from listing with an agent?',
        a: 'A listing might bring a higher gross price, but subtract the ~6% commission, repair credits after inspection, months of holding costs, and the risk of a financed buyer falling through. Our offer is net: no fees, no repairs, no contingencies, your closing date. We\'ll help you compare both numbers honestly.',
      },
      {
        q: 'Do you buy multi-family or portfolios?',
        a: 'Yes — single-family rentals, doubles, small multi-family, and entire portfolios across Central Ohio. One conversation can cover all of it.',
      },
    ],
    reviewPersona: 'landlord',
    reviewIntro: 'From Columbus landlords who sold to Sean:',
  },
];
