/**
 * Single source of truth for business facts.
 * Everything here was pulled from the live selltosean.com site on 2026-06-11
 * unless marked [VERIFY] or [PLACEHOLDER]. Never add stats that the client
 * has not confirmed.
 */
export const SITE = {
  name: 'Sell to Sean',
  legalName: 'Central City Solutions LLC',
  tagline: "Columbus' Favorite Homebuyer Since 2018",
  url: 'https://selltosean.com',
  phone: '(614) 412-1601',
  phoneHref: 'tel:+16144121601',
  // [PLACEHOLDER] No public email on the current site — confirm before launch.
  email: '[VERIFY: lead inbox email, e.g. offers@selltosean.com]',
  address: {
    street: '520 E Rich St',
    city: 'Columbus',
    state: 'OH',
    zip: '43215',
  },
  geo: { lat: 39.9554, lng: -82.9881 }, // 520 E Rich St area — [VERIFY exact pin]
  founded: '2018',
  owner: 'Sean Grabow',
  serviceArea: 'Columbus and Central Ohio',
  // Speed-to-lead promise shown on thank-you page & how-it-works.
  // [VERIFY] Confirm the team can actually hit this before launch.
  callbackPromise: '[X — VERIFY, e.g. 2] hours',
  social: {
    googleMaps: 'https://maps.app.goo.gl/eu1yxyPJ4e8eiEBq6',
    yelp: 'https://www.yelp.com/biz/central-city-solutions-columbus',
    linkedin: 'https://www.linkedin.com/company/central-city-solutions/',
  },
  // BBB A+ is claimed on the current site. [VERIFY] current standing before launch.
  bbb: 'BBB A+ Rated',
  cta: 'Get My Cash Offer',
};
