/**
 * City landing pages: /sell-my-house-fast/{slug}/
 *
 * RULE: every sentence must be true and city-specific, or marked [VERIFY].
 * No invented sale counts, no fake "we bought 12 houses here" claims.
 * To add a city: copy an entry, edit the fields, done (see README §"Add a city").
 */
export const CITIES = [
  {
    slug: 'whitehall',
    name: 'Whitehall',
    county: 'Franklin County',
    intro:
      'Whitehall is one of the closest-in suburbs on the east side of Columbus, and much of its housing was built in the 1950s and 60s. Many homes here are ranches and capes that have had one or two owners and still have original kitchens, baths, wiring, or roofs. That is exactly the kind of house we buy: solid bones, but needing more updates than most retail buyers want to take on.',
    localNotes: [
      'Older homes often need updates (electrical, plumbing, roofs) that scare off bank-financed buyers — none of that matters for a cash sale.',
      'Whitehall has its own city point-of-sale and code enforcement requirements [VERIFY current Whitehall inspection rules] — we buy as-is and handle violations after closing.',
      'A large share of Whitehall homes are rentals, so we often work with landlords here, including properties with tenants in place.',
    ],
    nearby: ['Bexley', 'Reynoldsburg', 'East Columbus'],
    situationLinks: ['tired-landlord', 'inherited-house'],
  },
  {
    slug: 'reynoldsburg',
    name: 'Reynoldsburg',
    county: 'Franklin, Licking & Fairfield Counties',
    intro:
      "Reynoldsburg sits on the east side of the Columbus metro, with neighborhoods ranging from 1960s ranches near Main Street to 1990s two-stories out toward Summit Road. Houses here sell well when they're updated — but if yours needs a roof, a kitchen, or just a fresh start after years of renting it out, a cash sale can be faster and simpler than fixing it up for the open market.",
    localNotes: [
      'Reynoldsburg spans three counties, which can complicate taxes and title work — our title company sorts that out; you don\'t have to.',
      'Many longtime owners here are downsizing or relocating; we close on your schedule so you only move once.',
      'We buy houses with deferred maintenance that would fail a picky FHA or VA appraisal — condition never kills a cash deal.',
    ],
    nearby: ['Whitehall', 'Pickerington', 'Blacklick'],
    situationLinks: ['inherited-house', 'foreclosure'],
  },
  {
    slug: 'grove-city',
    name: 'Grove City',
    county: 'Franklin County',
    intro:
      "Grove City, on the southwest side of Columbus, mixes older homes near the Town Center with newer subdivisions further out. The older stock — and rural-style properties on the edges of town — often needs work that traditional buyers can't finance. If you own a Grove City house that needs repairs, has tenants, or came to you through an estate, we'll make a cash offer as-is.",
    localNotes: [
      'Homes near the historic Town Center are older and often need systems updates — we buy them as-is.',
      'Estate and inherited properties are common here as longtime owners pass homes to out-of-area family; we handle cleanout and remote closings.',
      'No showings, no signs in the yard — neighbors don\'t need to know until the deal is done.',
    ],
    nearby: ['Urbancrest', 'Galloway', 'South Columbus'],
    situationLinks: ['inherited-house', 'tired-landlord'],
  },
];
