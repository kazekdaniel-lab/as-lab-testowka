// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://as-lab.pl',
  trailingSlash: 'always',
  compressHTML: true,
  security: {
    // CSP - Astro automatycznie liczy hashe inline'owych <script>/<style>
    // i wstrzykuje <meta http-equiv="content-security-policy"> na każdej stronie.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-src 'self' https://www.google.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  image: {
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        // Higher priority for home and main product pages
        if (url === 'https://as-lab.pl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.includes('/blog/') && url !== 'https://as-lab.pl/blog/') {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (url.includes('/kontakt/') || url.includes('/polityka-')) {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
