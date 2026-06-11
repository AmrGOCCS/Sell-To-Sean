import { SITE } from '../data/site.js';
import { CITIES } from '../data/cities.js';

/**
 * JSON-LD builders. Entity facts stated here must match the visible copy
 * (GEO consistency). NOTE: Review/AggregateRating markup is intentionally
 * NOT emitted — Google treats reviews marked up on the reviewed business's
 * own site as "self-serving" and ignores/penalizes them. Real third-party
 * ratings belong on the Google Business Profile (see SEO-CHECKLIST.md).
 */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description:
      'Sell to Sean (Central City Solutions LLC) is a local cash home buyer in Columbus, Ohio, founded in 2018 by Sean Grabow. The company buys houses directly, in any condition, with no fees or commissions, and can close in as little as 7 days.',
    url: SITE.url,
    telephone: '+1-614-412-1601',
    foundingDate: SITE.founded,
    founder: { '@type': 'Person', name: SITE.owner },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: [
      { '@type': 'City', name: 'Columbus', sameAs: 'https://en.wikipedia.org/wiki/Columbus,_Ohio' },
      ...CITIES.map((c) => ({ '@type': 'City', name: c.name })),
      { '@type': 'AdministrativeArea', name: 'Central Ohio' },
    ],
    sameAs: [SITE.social.googleMaps, SITE.social.yelp, SITE.social.linkedin],
    priceRange: 'Free cash offer — no fees to sellers',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#business` },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs) {
  // crumbs: [{ name, path }]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}
