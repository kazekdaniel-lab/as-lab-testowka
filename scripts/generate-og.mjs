#!/usr/bin/env node
// Generuje statyczne OG images (1200×630) dla social shares.
// Paleta bordo zgodna z brandem AS-LAB.
import sharp from 'sharp';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public');

const svg = ({ title, subtitle, eyebrow }) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bordoGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B23438"/>
      <stop offset="100%" stop-color="#4A1418"/>
    </linearGradient>
    <radialGradient id="glowBordo" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#902B30" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#902B30" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowPeach" cx="100%" cy="100%" r="60%">
      <stop offset="0%" stop-color="#FFBC7D" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#FFBC7D" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="rgba(144, 43, 48, 0.08)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0A0707"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glowBordo)"/>
  <rect width="1200" height="630" fill="url(#glowPeach)"/>

  <g transform="translate(80,80)">
    <rect width="56" height="56" rx="10" fill="url(#bordoGrad)"/>
    <text x="28" y="38" font-family="Inter, -apple-system, sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#F8EDED">AS</text>
    <text x="76" y="28" font-family="Inter, -apple-system, sans-serif" font-size="22" font-weight="600" fill="#F0E8E5">AS-LAB</text>
    <text x="76" y="50" font-family="JetBrains Mono, monospace" font-size="11" font-weight="500" fill="#A89B97" letter-spacing="2">POLSKI PRODUCENT MASZYN</text>
  </g>

  ${eyebrow ? `<text x="80" y="280" font-family="JetBrains Mono, monospace" font-size="16" font-weight="500" fill="#FFBC7D" letter-spacing="4">${eyebrow.toUpperCase()}</text>` : ''}

  <text x="80" y="370" font-family="Inter, -apple-system, sans-serif" font-size="76" font-weight="700" fill="#F0E8E5" letter-spacing="-2">${title}</text>

  ${subtitle ? `<foreignObject x="80" y="410" width="1040" height="120">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Inter,-apple-system,sans-serif;font-size:26px;line-height:1.4;color:#A89B97;font-weight:400;letter-spacing:-0.2px">${subtitle}</div>
  </foreignObject>` : ''}

  <g transform="translate(80,560)">
    <circle cx="4" cy="0" r="3" fill="#902B30"/>
    <text x="20" y="6" font-family="JetBrains Mono, monospace" font-size="16" font-weight="500" fill="#A89B97">as-lab.pl</text>
  </g>

  <g transform="translate(1010,540)">
    <rect x="0" y="0" width="110" height="40" rx="6" fill="none" stroke="rgba(144, 43, 48, 0.5)" stroke-width="1"/>
    <text x="55" y="26" font-family="JetBrains Mono, monospace" font-size="12" font-weight="600" text-anchor="middle" fill="#FFBC7D" letter-spacing="2">PL · 20+ LAT</text>
  </g>
</svg>`;

async function makeOg(filename, opts) {
  const buf = Buffer.from(svg(opts), 'utf-8');
  await sharp(buf).jpeg({ quality: 88, mozjpeg: true }).toFile(join(OUT, filename));
  console.log(`✓ ${filename} (${opts.title.slice(0, 40)})`);
}

await makeOg('og-default.jpg', {
  eyebrow: 'Polski producent · 20+ lat doświadczenia',
  title: 'Maszyny dla przemysłu',
  subtitle: 'Projektujemy, konstruujemy i produkujemy kruszarki, młyny, sita i przesiewacze laboratoryjne. Serwis na terenie całej Polski.',
});

await makeOg('og-blog.jpg', {
  eyebrow: 'Blog AS-LAB',
  title: 'Wiedza techniczna',
  subtitle: 'Mielenie, przesiewanie, recykling katalizatorów, normy i procesy badawcze.',
});

console.log('Done.');
