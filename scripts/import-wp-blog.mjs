#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const API = 'https://as-lab.pl/wp-json/wp/v2/posts';

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/[—–]/g, '-')
    .replace(/&hellip;/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanContent(html) {
  return html
    .replace(/\sfetchpriority="[^"]*"/g, '')
    .replace(/\sdecoding="[^"]*"/g, '')
    .replace(/\sloading="[^"]*"/g, '')
    .replace(/\ssrcset="[^"]*"/g, '')
    .replace(/\ssizes="[^"]*"/g, '')
    .replace(/class="wp-[^"]*"/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/http:\/\/as-lab\.pl/g, 'https://as-lab.pl')
    .replace(/[—–]/g, '-')
    .trim();
}

function escapeYaml(s) {
  if (!s) return '';
  return s.replace(/"/g, '\\"').replace(/\n/g, ' ');
}

async function fetchAll() {
  const all = [];
  let page = 1;
  while (true) {
    const url = `${API}?per_page=100&page=${page}&_embed=wp:featuredmedia,wp:term&orderby=date&order=desc`;
    process.stdout.write(`Fetching page ${page}... `);
    const res = await fetch(url);
    if (res.status === 400 && page > 1) {
      console.log('end.');
      break;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts = await res.json();
    console.log(`${posts.length} posts`);
    if (!posts.length) break;
    all.push(...posts);
    if (posts.length < 100) break;
    page++;
  }
  return all;
}

async function main() {
  if (!existsSync(BLOG_DIR)) await mkdir(BLOG_DIR, { recursive: true });
  const posts = await fetchAll();
  console.log(`\nTotal: ${posts.length} posts. Writing to ${BLOG_DIR}/\n`);

  for (const p of posts) {
    const slug = p.slug;
    const title = stripHtml(p.title.rendered);
    const excerpt = stripHtml(p.excerpt.rendered).slice(0, 220);
    const date = p.date;
    const updated = p.modified !== p.date ? p.modified : undefined;
    const hero = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const heroAlt = p._embedded?.['wp:featuredmedia']?.[0]?.alt_text || title;
    const categories = (p._embedded?.['wp:term']?.[0] || [])
      .map((t) => t.name)
      .filter((n) => n && n !== 'Bez kategorii');

    const fm = [
      '---',
      `title: "${escapeYaml(title)}"`,
      `description: "${escapeYaml(excerpt)}"`,
      `date: ${date}`,
      updated && `updated: ${updated}`,
      hero && `hero: "${hero}"`,
      heroAlt && `heroAlt: "${escapeYaml(heroAlt)}"`,
      categories.length && `categories: [${categories.map((c) => `"${c}"`).join(', ')}]`,
      '---',
      '',
    ]
      .filter(Boolean)
      .join('\n');

    const content = cleanContent(p.content.rendered);
    await writeFile(join(BLOG_DIR, `${slug}.md`), fm + content + '\n');
    console.log(`  ✓ ${slug}`);
  }
  console.log(`\nDone. ${posts.length} posts written.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
