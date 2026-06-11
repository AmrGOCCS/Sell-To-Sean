import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical production URL. Update if the domain changes.
export default defineConfig({
  site: 'https://selltosean.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // 301s from the old WordPress URLs. Platform-level redirects also exist in
  // vercel.json and public/_redirects (Netlify); these are the static fallback.
  redirects: {
    '/about-us/': '/about/',
    '/frequently-asked-questions/': '/faq/',
    '/review/': '/reviews/',
    '/contact-us/': '/contact/',
    '/terms-of-use/': '/terms/',
  },
});
