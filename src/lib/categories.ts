// Mapping kategorii i branż - jedno źródło prawdy dla całej strony

export const categories = {
  'kruszarki-mlynki': {
    label: 'Kruszarki i młynki',
    longLabel: 'Kruszarki i młynki laboratoryjne',
    path: '/kruszarki-i-mlynki-laboratoryjne/',
    description: 'Wstępne rozdrabnianie próbek - kruszarki szczękowe, walcowe, młotkowe, młynki wibracyjne',
  },
  'mielenie-katalizatorow': {
    label: 'Mielenie katalizatorów',
    longLabel: 'Urządzenia do mielenia katalizatorów',
    path: '/urzadzenia-do-mielenia-katalizatorow/',
    description: 'Linie recyklingu - młyny kulowe, kruszarki młotkowe, zestawy odzysku metali szlachetnych',
  },
  'sita': {
    label: 'Sita laboratoryjne',
    longLabel: 'Sita analityczne i prętowe',
    path: '/sita-laboratoryjne/',
    description: 'Sita analityczne PN-ISO 3310, sita prętowe, sita do zbóż, rozmiary niestandardowe',
  },
  'przesiewacze': {
    label: 'Przesiewacze',
    longLabel: 'Przesiewacze posuwisto-zwrotne',
    path: '/przesiewacze-posuwisto-zwrotne/',
    description: 'Mechaniczne przesiewacze do analizy sitowej PN-C-04310, PN-ISO 728',
  },
  'beben-los-angeles': {
    label: 'Bęben Los Angeles',
    longLabel: 'Bęben Los Angeles - test kruszyw',
    path: '/beben-los-angeles/',
    description: 'Testy odporności kruszyw EN 1097-2, EN 12697-43, ASTM C131',
  },
  'mas-pirotechniczne': {
    label: 'Mas pirotechniczne',
    longLabel: 'Urządzenia do mas pirotechnicznych',
    path: '/urzadzenia-do-mas-pirotechnicznych/',
    description: 'Gniotowniki obiegowe, biegaczewanie, sektor zbrojeniowy',
  },
  'inne-urzadzenia': {
    label: 'Inne urządzenia',
    longLabel: 'Akcesoria i sprzęt pomocniczy',
    path: '/inne-urzadzenia/',
    description: 'Próbniki, wózki, stoły EX, ucieraki moździerzowe',
  },
  'nietypowe-zamowienia': {
    label: 'Nietypowe zamówienia',
    longLabel: 'Indywidualne zamówienia',
    path: '/nietypowe-zamowienia/',
    description: 'Sondy, cylindry, kadzie kwasoodporne, podzielniki - na specyfikację klienta',
  },
} as const;

export const industries = {
  'recykling-katalizatorow': {
    label: 'Recykling katalizatorów',
    shortLabel: 'Recykling',
    description: 'Zakłady przetwarzania katalizatorów samochodowych i przemysłowych - odzysk Pt, Pd, Rh',
    priority: 1,
    icon: 'M4 4v6h6M20 20v-6h-6M20 4l-6 6M4 20l6-6',
  },
  'serwis-przemyslowy': {
    label: 'Serwis maszyn przemysłowych',
    shortLabel: 'Serwis przemysłowy',
    description: 'Firmy odpowiedzialne za naprawy, konserwację i utrzymanie ruchu w fabrykach',
    priority: 2,
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  },
  'zbrojeniowka': {
    label: 'Sektor zbrojeniowy',
    shortLabel: 'Zbrojeniówka',
    description: 'Producenci uzbrojenia, technologie obronne, służby mundurowe',
    priority: 3,
    icon: 'M12 2L3 7v6c0 5.5 3.8 10.5 9 12 5.2-1.5 9-6.5 9-12V7l-9-5z',
  },
  'laboratoria': {
    label: 'Laboratoria',
    shortLabel: 'Laboratoria',
    description: 'Laboratoria przemysłowe, badawcze i analityczne wymagające specjalistycznej aparatury',
    priority: 4,
    icon: 'M9 3v8l-4 6a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-6V3M8 3h8',
  },
  'kopalnie': {
    label: 'Kopalnie i wydobycie',
    shortLabel: 'Kopalnie',
    description: 'Przemysł wydobywczy - ciężki sprzęt pracujący w trudnych warunkach',
    priority: 5,
    icon: 'M3 13l3-3 4 4 5-5 4 4M3 18l3-3 4 4 5-5 4 4',
  },
  'budownictwo': {
    label: 'Budownictwo',
    shortLabel: 'Budownictwo',
    description: 'Laboratoria budowlane - testy kruszyw, materiałów drogowych',
    priority: 6,
    icon: 'M3 21V9l9-6 9 6v12M9 21V12h6v9',
  },
  'farmaceutyka': {
    label: 'Farmaceutyka',
    shortLabel: 'Farmacja',
    description: 'Mielenie substancji aktywnych, sita standaryzowane, kontrola jakości',
    priority: 7,
    icon: 'M12 6v12M6 12h12M9.5 9.5l5 5M14.5 9.5l-5 5',
  },
  'chemia': {
    label: 'Przemysł chemiczny',
    shortLabel: 'Chemia',
    description: 'Procesy chemiczne, kadzie kwasoodporne, rozdrabnianie reaktywne',
    priority: 8,
    icon: 'M10 3v5l-4 7a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-4-7V3M9 3h6',
  },
} as const;

export type CategoryKey = keyof typeof categories;
export type IndustryKey = keyof typeof industries;
