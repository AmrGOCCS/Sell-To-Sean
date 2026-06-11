/**
 * FAQ content. Written as standalone Q&As an LLM or featured snippet can lift
 * verbatim (GEO). Answers marked "from current site" preserve real claims;
 * everything else is objection-handling copy at a 6th–8th grade reading level.
 * Used on /faq/ with FAQPage schema; subsets appear on other pages.
 */
export const FAQS = [
  {
    q: 'Is there any obligation if I request an offer?',
    a: "No. Filling out the form and talking with us comes with no obligations. You get a written cash offer, and you can take it, think it over, or walk away. Nothing is final until you sign a purchase agreement — and that's always your choice.",
    topics: ['home', 'process'],
  },
  {
    q: 'Are there any fees or commissions?',
    a: "No. There are no fees to sell your house to Sean. You don't pay an agent commission, closing costs, or anything else. The cash offer we put in writing is the amount you walk away with at closing, minus only what you still owe on the house (like a mortgage balance or back taxes).",
    topics: ['home', 'process'],
  },
  {
    q: 'How do you decide how much to offer for my house?',
    a: "We use a simple formula: what your house will be worth after it's fixed up (the after-repair value), minus the cost of repairs, minus our costs and a fair margin for the risk we take on. We explain the numbers to you openly — see the \"How we calculate your offer\" section on our How It Works page for a worked example.",
    topics: ['home', 'process'],
  },
  {
    q: 'Are you actually buying my house, or just listing it?',
    a: 'We are the actual buyer. Sell to Sean (Central City Solutions LLC) is a Columbus company that buys houses directly with cash. We are not real estate agents listing your home on the MLS, and we are not a website that sells your information to other investors.',
    topics: ['home', 'trust'],
  },
  {
    q: 'How do I know this is legitimate and not a scam?',
    a: "Fair question — this industry has bad actors. Here's how to check us: we are a Columbus company at 520 E Rich St, in business since 2018, BBB A+ rated [VERIFY], with dozens of reviews from local sellers you can read. Every offer is in writing, and every closing happens at a licensed Ohio title company — the same neutral third party that handles a normal home sale. You never hand money or your deed to us directly.",
    topics: ['home', 'trust'],
  },
  {
    q: 'My house needs a lot of work. Will you still buy it?',
    a: "Yes. We buy houses in any condition — fire damage, roof problems, code violations, full of stuff, you name it. Fixing houses is our business; many of the homes we buy need major repairs. You don't need to repair, paint, or even clean anything.",
    topics: ['home', 'condition'],
  },
  {
    q: 'Do I need to clean out the house before closing?',
    a: 'No. Take what you want and leave the rest — furniture, boxes, anything. We handle the cleanout after closing. This is one of the biggest reliefs for people selling an inherited home.',
    topics: ['inherited', 'condition'],
  },
  {
    q: 'I have tenants in the property. Is that a problem?',
    a: 'No. We regularly buy rentals with tenants in place, including difficult situations. You don\'t have to wait for a lease to end or handle an eviction yourself — we take over the property as-is, tenants and all.',
    topics: ['landlord'],
  },
  {
    q: 'How fast can you close?',
    a: "We can close in as little as 7 days. But the date is your call — if you need 30, 60, or 90 days to line up your next move, we close on your timeline. You pick the date; we hit it.",
    topics: ['home', 'process'],
  },
  {
    q: 'Would a real estate agent get me more money?',
    a: "Honestly: maybe — if your house is in good shape, you can pay for repairs and commissions, and you can wait 90 days or more with showings and the risk of a buyer's loan falling through. A cash offer trades some of that top price for speed, certainty, and zero costs. We'll lay out both paths so you can compare real numbers. Plenty of people talk to us and decide to list with an agent instead — that's fine with us.",
    topics: ['home', 'trust'],
  },
  {
    q: 'What happens after I submit my address?',
    a: "Three things: (1) Sean or a team member calls you within [X — VERIFY] hours to learn about the house and your situation. (2) We do a quick walkthrough — in person or from photos if you're out of state. (3) You get a written, no-obligation cash offer, usually within 24 hours. Then the decision is 100% yours.",
    topics: ['home', 'process'],
  },
  {
    q: 'Is my information private?',
    a: "Yes. Your information goes to Sean's team only — we never sell it to other investors or list brokers. There's no sign in your yard and no public listing unless you choose that route. See our Privacy Policy for the details.",
    topics: ['trust'],
  },
];

export function faqsFor(topic) {
  return FAQS.filter((f) => f.topics.includes(topic));
}
