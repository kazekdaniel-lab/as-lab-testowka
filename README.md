# AS-LAB rebuild

Nowoczesna strona B2B dla [as-lab.pl](https://as-lab.pl) - producenta sprzętu laboratoryjnego dla kopalń i laboratoriów. Migracja z WordPress + Rank Math na statyczny build Astro 5 + Tailwind v4.

## Stack

- **Astro 6.3** (static output, SSG)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, design tokens w `@theme`)
- **astro:assets** (optymalizacja obrazów do WebP, responsive sizes)
- **@astrojs/sitemap** + **@astrojs/rss** (blog feed)
- **schema-dts** (typowane JSON-LD)
- **Inter Variable** (UI) + **JetBrains Mono Variable** (specs techniczne)
- **PHP `mail()`** handler dla formularza kontaktowego (lh.pl shared hosting)

## Komendy

```bash
npm run dev      # dev server na http://localhost:4321
npm run build    # production build do dist/
npm run preview  # podgląd buildu
```

## Import treści z istniejącej strony

```bash
node scripts/import-wp-blog.mjs   # pobiera posty z /wp-json/wp/v2/posts → src/content/blog/
```

## Deploy na lh.pl

1. `cp scripts/.env.example .env.local` i uzupełnij dane FTP z panelu lh.pl
2. `npm run build`
3. `bash scripts/deploy-lh.sh`

Wymaga `lftp` (`brew install lftp` lub `apt install lftp`).

Alternatywnie: ręczny upload przez FileZilla - cała zawartość katalogu `dist/` do `public_html/`.

## Struktura

```
src/
├── pages/              # 13 stron statycznych + blog dynamiczny
│   └── blog/
├── content/blog/       # MD posts (import z WP)
├── components/         # Header, Footer, Hero, ProductCard, SpecsTable, ContactForm, SEO, CTA
├── layouts/            # BaseLayout
├── lib/                # nav.ts, siteConfig
├── assets/products/    # 7 zdjęć (optymalizowane przez astro:assets)
└── styles/global.css   # Tailwind v4 + @theme tokens
public/
├── contact.php         # PHP handler formularza (lh.pl)
├── favicon.svg
└── robots.txt
```

## Co naprawiono względem obecnej as-lab.pl

- **Title tagi** - 3 podstrony miały zdublowany "Bęben Los Angeles..." zamiast właściwego tytułu
- **H1** - brak na większości podstron (h2 udawały h1)
- **Meta description** - dopisane tam, gdzie Rank Math nie wygenerował
- **JSON-LD** - schema Organization + Product/Service per typ strony
- **Performance** - statyczny HTML zamiast WP, zdjęcia AVIF/WebP (95% redukcja rozmiaru)
- **Wydajność** - inline critical CSS, lazy loading, brak runtime JS poza nawigacją mobilną i formularzem

## Co dodano z dokumentu klienta

- Sekcja "Kim jesteśmy" na home (nowy opis firmy)
- Nowe produkty: przesiewacze posuwisto-zwrotne (800×100, 760×960), gniotownik do mas pirotechnicznych, zestaw do katalizatorów metalowych
- Reorganizacja: ucierak moździerzowy z "Kruszarek" do "Inne urządzenia"
- Dodano w "Inne urządzenia": próbniki kubełkowe/szczelinowe, wózki transportowe, stół do mycia materiałów przeciwwybuchowych
- Lokalizacje serwisu: woj. śląskie, dolnośląskie, lubuskie, cała Polska
- Specyfikacje PN-C-04310:1984, PN-ISO 728:1999 dla przesiewaczy

## Kontakt techniczny

Konfiguracja `src/lib/nav.ts`: dane firmy, telefon, email, regiony serwisu.
