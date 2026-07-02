#!/usr/bin/env node
// Generuje unikalny OG image dla każdej maszyny (1200×630).
import sharp from 'sharp';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MACHINES_DIR = join(__dirname, '..', 'src', 'content', 'machines');
const OUT_DIR = join(__dirname, '..', 'public', 'og');

const categoryMap = {
  'kruszarki-mlynki': 'Kruszarki i młynki',
  'mielenie-katalizatorow': 'Mielenie katalizatorów',
  'sita': 'Sita laboratoryjne',
  'przesiewacze': 'Przesiewacze',
  'beben-los-angeles': 'Bęben Los Angeles',
  'mas-pirotechniczne': 'Mas pirotechniczne',
  'inne-urzadzenia': 'Inne urządzenia',
  'nietypowe-zamowienia': 'Nietypowe zamówienia',
};

function escapeXml(s) {
  return String(s || '').replace(/[<>&"']/g, (c) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

function truncate(s, n) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

function svgForMachine(m) {
  const name = escapeXml(truncate(m.name, 42));
  const model = m.model ? escapeXml(m.model) : '';
  const category = escapeXml(categoryMap[m.category] || '');
  const tagline = escapeXml(truncate(m.tagline, 110));
  const norms = (m.norms || []).slice(0, 2).map(escapeXml);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bordoGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B23438"/>
      <stop offset="100%" stop-color="#4A1418"/>
    </linearGradient>
    <radialGradient id="glowBordo" cx="50%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#902B30" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#902B30" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowPeach" cx="100%" cy="100%" r="60%">
      <stop offset="0%" stop-color="#FFBC7D" stop-opacity="0.12"/>
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

  <text x="80" y="270" font-family="JetBrains Mono, monospace" font-size="15" font-weight="500" fill="#FFBC7D" letter-spacing="3">${category.toUpperCase()}${model ? ' · ' + model : ''}</text>

  <text x="80" y="360" font-family="Inter, -apple-system, sans-serif" font-size="${name.length > 30 ? 56 : 68}" font-weight="700" fill="#F0E8E5" letter-spacing="-1.5">${name}</text>

  ${tagline ? `<foreignObject x="80" y="400" width="1040" height="120">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Inter,-apple-system,sans-serif;font-size:24px;line-height:1.4;color:#A89B97;font-weight:400;letter-spacing:-0.2px">${tagline}</div>
  </foreignObject>` : ''}

  <g transform="translate(80,560)">
    <circle cx="4" cy="0" r="3" fill="#902B30"/>
    <text x="20" y="6" font-family="JetBrains Mono, monospace" font-size="15" font-weight="500" fill="#A89B97">as-lab.pl/maszyny/</text>
  </g>

  ${norms.length > 0 ? `<g transform="translate(960,540)">
    ${norms.map((n, i) => `<rect x="0" y="${i * 36}" width="160" height="28" rx="4" fill="none" stroke="rgba(144, 43, 48, 0.5)" stroke-width="1"/>
    <text x="80" y="${i * 36 + 19}" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" text-anchor="middle" fill="#FFBC7D" letter-spacing="1">${n}</text>`).join('')}
  </g>` : ''}
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(MACHINES_DIR)).filter((f) => f.endsWith('.md'));

  let count = 0;
  for (const f of files) {
    const md = await readFile(join(MACHINES_DIR, f), 'utf-8');
    const fm = md.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) continue;
    const data = yaml.load(fm[1]);
    const slug = f.replace('.md', '');

    const svg = svgForMachine(data);
    const buf = Buffer.from(svg, 'utf-8');
    await sharp(buf).jpeg({ quality: 86, mozjpeg: true }).toFile(join(OUT_DIR, `${slug}.jpg`));
    count++;
  }
  console.log(`✓ Wygenerowano ${count} OG images do public/og/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
