import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const dist = 'dist';
const htmlFiles = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

let errors = 0;
const report = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(dist, '');

  // JSON-LD validation
  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, body] of ldBlocks) {
    try { JSON.parse(body); } catch (e) { errors++; report.push(`✗ ${rel}: invalid JSON-LD — ${e.message}`); }
  }

  // H1 count (redirect stubs have none)
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const isRedirect = /http-equiv="refresh"/.test(html);
  if (!isRedirect && h1s !== 1) { errors++; report.push(`✗ ${rel}: ${h1s} <h1> elements`); }

  // title + meta description present
  if (!isRedirect) {
    if (!/<title>[^<]{10,}<\/title>/.test(html)) { errors++; report.push(`✗ ${rel}: missing/short <title>`); }
    if (!/<meta name="description" content="[^"]{40,}"/.test(html)) { errors++; report.push(`✗ ${rel}: missing/short meta description`); }
    if (!/<link rel="canonical"/.test(html)) { errors++; report.push(`✗ ${rel}: missing canonical`); }
  }

  // Internal links resolve
  const links = [...html.matchAll(/href="(\/[^"#?]*)["#?]/g)].map((m) => m[1]);
  for (const link of new Set(links)) {
    if (link.startsWith('/images/') || link.startsWith('/fonts/') || link.startsWith('/_astro/') || link === '/favicon.svg') {
      if (!existsSync(join(dist, link))) { errors++; report.push(`✗ ${rel}: broken asset ${link}`); }
    } else {
      const target = link.endsWith('/') ? join(dist, link, 'index.html') : join(dist, link);
      if (!existsSync(target) && !existsSync(target + '/index.html')) { errors++; report.push(`✗ ${rel}: broken link ${link}`); }
    }
  }
}

console.log(`Checked ${htmlFiles.length} HTML files`);
console.log(report.join('\n') || '✓ All JSON-LD valid, one H1 per page, titles/descriptions/canonicals present, internal links resolve');

// JS payload
let jsTotal = 0;
const astroDir = join(dist, '_astro');
if (existsSync(astroDir)) for (const f of readdirSync(astroDir)) if (f.endsWith('.js')) jsTotal += statSync(join(astroDir, f)).size;
console.log(`\nTotal bundled JS in /_astro: ${(jsTotal / 1024).toFixed(1)} KB`);
console.log(`Sitemap exists: ${existsSync(join(dist, 'sitemap-index.xml'))}`);
console.log(`robots.txt exists: ${existsSync(join(dist, 'robots.txt'))}`);
console.log(`llms.txt exists: ${existsSync(join(dist, 'llms.txt'))}`);
process.exit(errors ? 1 : 0);
