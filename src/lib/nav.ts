import { categories } from './categories';

export const productLinks = [
  { href: '/kruszarki-i-mlynki-laboratoryjne/', label: 'Kruszarki i młynki' },
  { href: '/urzadzenia-do-mielenia-katalizatorow/', label: 'Mielenie katalizatorów' },
  { href: '/beben-los-angeles/', label: 'Bęben Los Angeles' },
  { href: '/sita-laboratoryjne/', label: 'Sita laboratoryjne' },
  { href: '/przesiewacze-posuwisto-zwrotne/', label: 'Przesiewacze posuwisto-zwrotne' },
  { href: '/urzadzenia-do-mas-pirotechnicznych/', label: 'Mas pirotechnicznych' },
  { href: '/inne-urzadzenia/', label: 'Inne urządzenia' },
] as const;

// Mega menu - 3 kolumny: maszyny po kategoriach. Każdy link ma `key` do preview po prawej.
export const megaMenuColumns = [
  {
    heading: 'Rozdrabnianie i mielenie',
    links: [
      { key: 'kruszarki-mlynki', href: '/kruszarki-i-mlynki-laboratoryjne/', label: 'Kruszarki i młynki' },
      { key: 'mielenie-katalizatorow', href: '/urzadzenia-do-mielenia-katalizatorow/', label: 'Mielenie katalizatorów' },
      { key: 'mas-pirotechniczne', href: '/urzadzenia-do-mas-pirotechnicznych/', label: 'Mas pirotechniczne' },
    ],
  },
  {
    heading: 'Analizy sitowe',
    links: [
      { key: 'sita', href: '/sita-laboratoryjne/', label: 'Sita laboratoryjne' },
      { key: 'przesiewacze', href: '/przesiewacze-posuwisto-zwrotne/', label: 'Przesiewacze posuwisto-zwrotne' },
      { key: 'beben-los-angeles', href: '/beben-los-angeles/', label: 'Bęben Los Angeles' },
    ],
  },
  {
    heading: 'Akcesoria i custom',
    links: [
      { key: 'inne-urzadzenia', href: '/inne-urzadzenia/', label: 'Inne urządzenia' },
      { key: 'nietypowe-zamowienia', href: '/nietypowe-zamowienia/', label: 'Nietypowe zamówienia' },
    ],
  },
] as const;

// Preview opisy dla mega menu - mapowane po `key` z linków powyżej.
// Dla `kruszarki-mlynki` etc. używamy danych z categories.ts.
export const megaMenuPreviews: Record<string, {
  title: string;
  description: string;
  bullets: string[];
  cta: { href: string; label: string };
}> = {
  'kruszarki-mlynki': {
    title: 'Kruszarki i młynki laboratoryjne',
    description: 'Wstępne rozdrabnianie próbek i głębokie mielenie. Kruszarki szczękowe, walcowe, młotkowe oraz młynki wibracyjne MW-200 do materiałów twardych (do 9 stopni w skali Mohsa).',
    bullets: ['Kruszarka ZKS-65 mobilna', 'Młynek wibracyjny MW-200', 'Walcowe i młotkowe', 'Model koncepcyjny LKW-240'],
    cta: { href: '/kruszarki-i-mlynki-laboratoryjne/', label: 'Zobacz kategorię' },
  },
  'mielenie-katalizatorow': {
    title: 'Urządzenia do mielenia katalizatorów',
    description: 'Kompletne linie recyklingu katalizatorów samochodowych - młyny kulowe, kruszarki młotkowe i gotowe zestawy do odzysku metali szlachetnych (Pt, Pd, Rh).',
    bullets: ['Zestaw katalizatorów metalowych', 'Młyn kulowy', 'Kruszarka młotkowa', 'Linia gotowa pod klucz'],
    cta: { href: '/urzadzenia-do-mielenia-katalizatorow/', label: 'Zobacz kategorię' },
  },
  'mas-pirotechniczne': {
    title: 'Urządzenia do mas pirotechnicznych',
    description: 'Specjalistyczne gniotowniki obiegowe ze stali nierdzewnej do biegaczewania mas pirotechnicznych. Wysoka homogeniczność mieszanki, sektor zbrojeniowy.',
    bullets: ['Gniotownik obiegowy', 'Stal nierdzewna', 'Sektor zbrojeniowy', 'Bezpieczeństwo pracy'],
    cta: { href: '/urzadzenia-do-mas-pirotechnicznych/', label: 'Zobacz kategorię' },
  },
  'sita': {
    title: 'Sita laboratoryjne',
    description: 'Sita analityczne PN-ISO 3310-1/2:2000 produkowane w Bochni. 78 standardowych rozmiarów oczek od 20 µm do 31,5 mm. Średnice 200 mm, 300 mm i niestandardowe.',
    bullets: ['Sita analityczne 200/300 mm', '78 rozmiarów oczek', 'Sita prętowe', 'Sita do zbóż'],
    cta: { href: '/sita-laboratoryjne/', label: 'Zobacz kategorię' },
  },
  'przesiewacze': {
    title: 'Przesiewacze posuwisto-zwrotne',
    description: 'Profesjonalne przesiewacze do analizy sitowej koksu. Zgodność z PN-C-04310:1984 oraz PN-ISO 728:1999. Pokłady 800×100 lub 760×960, konfiguracja 1-3 pokładowa.',
    bullets: ['Pokład 800×100 cm', 'Wariant 760×960 mm', '1-3 pokłady', 'Regulacja prędkości i czasu'],
    cta: { href: '/przesiewacze-posuwisto-zwrotne/', label: 'Zobacz kategorię' },
  },
  'beben-los-angeles': {
    title: 'Bęben Los Angeles',
    description: 'Testy odporności kruszyw na ścieranie i rozdrabnianie zgodnie z EN 1097-2, EN 12697-43, ASTM C131. Dostępny z kabiną dźwiękoszczelną lub bez.',
    bullets: ['EN 1097-2, ASTM C131', 'Kabina dźwiękoszczelna (opcja)', 'Bęben 711 × 508 mm', '12 kul + sito 1,6 mm'],
    cta: { href: '/beben-los-angeles/', label: 'Zobacz kategorię' },
  },
  'inne-urzadzenia': {
    title: 'Inne urządzenia laboratoryjne',
    description: 'Akcesoria i sprzęt pomocniczy - próbniki kubełkowe i szczelinowe, wózki transportowe, stoły do mycia materiałów przeciwwybuchowych, ucieraki moździerzowe.',
    bullets: ['Próbniki kubełkowe / szczelinowe', 'Wózki transportowe', 'Stoły do mycia EX', 'Ucierak moździerzowy'],
    cta: { href: '/inne-urzadzenia/', label: 'Zobacz kategorię' },
  },
  'nietypowe-zamowienia': {
    title: 'Nietypowe zamówienia',
    description: 'Indywidualne realizacje - sondy do pobierania prób, cylindry pomiarowe, kadzie kwasoodporne, podzielniki próbek, sita o niestandardowych wymiarach.',
    bullets: ['Sondy i cylindry pomiarowe', 'Kadzie kwasoodporne', 'Podzielniki próbek', 'Pełna personalizacja'],
    cta: { href: '/nietypowe-zamowienia/', label: 'Zobacz kategorię' },
  },
  'katalog': {
    title: 'Pełny katalog 2026',
    description: 'Wszystkie 25 maszyn AS‑LAB w jednym miejscu - filtruj po kategorii, branży klienta lub normach zgodności. Każda maszyna ma osobną kartę ze specyfikacją techniczną.',
    bullets: ['25+ modeli maszyn', '8 kategorii', '8 branż klienta', 'Filtry po kategorii i normach'],
    cta: { href: '/maszyny/', label: 'Otwórz katalog' },
  },
};

export const mainNav = [
  { href: '/maszyny/', label: 'Katalog maszyn', mega: true },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/serwis-maszyn/', label: 'Serwis' },
  { href: '/o-firmie/', label: 'O firmie', dropdown: [
    { href: '/o-firmie/', label: 'O firmie' },
    { href: '/proces-produkcji/', label: 'Proces produkcji' },
    { href: '/slownik/', label: 'Słownik techniczny' },
  ] },
  { href: '/blog/', label: 'Blog' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const;

export const siteConfig = {
  name: 'AS‑LAB',
  legalName: 'AS‑LAB Sp. z o.o.',
  tagline: 'Polski producent maszyn dla przemysłu, kopalń i laboratoriów',
  description: 'Producent kruszarek, młynów, sit i wstrząsarek laboratoryjnych. Serwis maszyn dla kopalń, laboratoriów, sektora zbrojeniowego i recyklingu katalizatorów na terenie całej Polski.',
  url: 'https://as-lab.pl',
  email: 'aslab.bochnia@gmail.com',
  phone: '+48 500 515 610',
  phoneClean: '+48500515610',
  foundingDate: '2022',
  teamExperienceYears: '20+',
  projectsCompleted: '300-400',
  nip: '8681987654',
  regon: '523625910',
  krs: '0001001460',
  address: {
    street: 'Łazy 32',
    postalCode: '32-765',
    locality: 'Rzezawa',
    region: 'małopolskie',
    country: 'PL',
  },
  geo: {
    latitude: 49.9900045,
    longitude: 20.513614,
  },
  serviceRegions: ['śląskie', 'dolnośląskie', 'lubuskie', 'małopolskie', 'cała Polska'],
  exportCountries: ['Hiszpania', 'Litwa', 'Bułgaria', 'Rumunia', 'Łotwa', 'Czechy', 'Dubaj (ZEA)'],
  industries: [
    'Recykling katalizatorów',
    'Serwis maszyn przemysłowych',
    'Sektor zbrojeniowy',
    'Laboratoria',
    'Kopalnie i wydobycie',
    'Budownictwo',
    'Farmaceutyka',
    'Przemysł chemiczny',
  ],
  socialImage: '/og-default.jpg',
  social: {},
} as const;
