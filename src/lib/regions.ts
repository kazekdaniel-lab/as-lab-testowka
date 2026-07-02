// Mapping regionalny - jedno źródło prawdy dla local SEO
// Weryfikacja oparta na danych GUS, mapach klastrów przemysłowych Polski, lokalizacjach grup branżowych
// (PGZ dla zbrojeniówki, JSW/KGHM dla kopalni, lista zakładów recyklingu Pt/Pd/Rh).

export interface Region {
  slug: string;
  name: string;          // "Śląskie"
  longName: string;      // "województwo śląskie"
  longNameLocative: string; // "w województwie śląskim"
  isoCode: string;       // ISO 3166-2:PL code (PL-24 dla śląskiego)
  capital: string;       // miasto wojewódzkie
  centroid: { lat: number; lng: number };
  population: string;    // przybliżona populacja
  cities: string[];      // główne miasta przemysłowe
  priority: 1 | 2 | 3 | 4; // 1 = top priorytet dla klienta
  industries: {
    recyklingKatalizatorow?: 1 | 2 | 3;  // 1 = silna obecność, 3 = słaba
    serwisPrzemyslowy?: 1 | 2 | 3;
    zbrojeniowka?: 1 | 2 | 3;
    laboratoria?: 1 | 2 | 3;
    kopalnie?: 1 | 2 | 3;
  };
  keyCompanies: string[];  // gracze przemysłowi regionu - NIE klienci, tylko firmy z naszych grup docelowych operujące w regionie
  description: string;
  whyHere: string;       // dlaczego AS‑LAB obsługuje ten region
  hero: {
    eyebrow: string;     // mocny hook nad H1
    headlineLead: string;     // część H1 przed accent
    headlineAccent: string;   // część H1 z bordo gradientem (kluczowe słowo/fraza)
    headlineTrail?: string;   // opcjonalna część H1 po accent
    sub: string;         // krótki, konkretny sub z liczbami/klientami
    stat?: { value: string; label: string }; // opcjonalny stat tile
  };
}

export const regions: Region[] = [
  {
    slug: 'slaskie',
    name: 'Śląskie',
    longName: 'województwo śląskie',
    longNameLocative: 'w województwie śląskim',
    isoCode: 'PL-24',
    capital: 'Katowice',
    centroid: { lat: 50.2649, lng: 19.0238 },
    population: '4,3 mln',
    cities: ['Katowice', 'Gliwice', 'Sosnowiec', 'Bytom', 'Zabrze', 'Ruda Śląska', 'Tychy', 'Częstochowa', 'Dąbrowa Górnicza', 'Chorzów', 'Jastrzębie-Zdrój', 'Rybnik', 'Bielsko-Biała'],
    priority: 1,
    industries: {
      recyklingKatalizatorow: 1,
      serwisPrzemyslowy: 1,
      zbrojeniowka: 2,
      laboratoria: 2,
      kopalnie: 1,
    },
    keyCompanies: ['JSW (Jastrzębska Spółka Węglowa)', 'PGG (Polska Grupa Górnicza)', 'Tauron Wydobycie', 'ArcelorMittal Poland', 'Huta Łabędy', 'Bumar-Łabędy (zbrojeniówka)', 'Politechnika Śląska', 'Główny Instytut Górnictwa'],
    description: 'Największe zagłębie górnicze w Polsce - 21 czynnych kopalń węgla kamiennego. Centrum przemysłu ciężkiego, hutniczego, motoryzacyjnego. Działają tu m.in. JSW (Jastrzębska Spółka Węglowa), PGG (Polska Grupa Górnicza), Tauron Wydobycie, ArcelorMittal, Bumar-Łabędy.',
    whyHere: 'Śląsk to naturalny rynek dla naszej oferty - tu koncentruje się polskie górnictwo, hutnictwo i recykling. Dostarczamy kruszarki, młynki próbne, sita analityczne i serwis kruszarek do zakładów przemysłowych, laboratoriów technicznych i firm serwisowych z regionu - niezależnie od skali zlecenia.',
    hero: {
      eyebrow: 'Polski Górny Śląsk · 21 kopalń węgla',
      headlineLead: 'Maszyny dla',
      headlineAccent: 'przemysłu śląskiego',
      headlineTrail: '- od warsztatów po duże zakłady',
      sub: 'Region zdominowany przez polskie górnictwo i hutnictwo (JSW, PGG, Tauron Wydobycie, ArcelorMittal, Bumar-Łabędy). Dostarczamy kruszarki, młynki próbne, sita analityczne i mobilny serwis kruszarek do zakładów przemysłowych, laboratoriów technicznych i mniejszych firm serwisowych regionu. Dojazd z Łazów w 48-72h.',
      stat: { value: '21', label: 'czynnych kopalń węgla' },
    },
  },
  {
    slug: 'dolnoslaskie',
    name: 'Dolnośląskie',
    longName: 'województwo dolnośląskie',
    longNameLocative: 'w województwie dolnośląskim',
    isoCode: 'PL-02',
    capital: 'Wrocław',
    centroid: { lat: 51.1079, lng: 17.0385 },
    population: '2,9 mln',
    cities: ['Wrocław', 'Legnica', 'Lubin', 'Głogów', 'Wałbrzych', 'Jelenia Góra', 'Polkowice', 'Świdnica', 'Bolesławiec', 'Dzierżoniów'],
    priority: 1,
    industries: {
      recyklingKatalizatorow: 2,
      serwisPrzemyslowy: 1,
      zbrojeniowka: 2,
      laboratoria: 1,
      kopalnie: 1,
    },
    keyCompanies: ['KGHM Polska Miedź', 'Sitech (VW components)', 'Politechnika Wrocławska', 'Uniwersytet Wrocławski', 'PCO (zbrojeniówka, Warszawa-okolice)', 'Volvo Wrocław', 'KGHM ZANAM', 'Kopalnia Granitu Strzegom'],
    description: 'Region drugi pod względem potencjału klientów. Zagłębie Miedziowe LGOM (Lubin, Polkowice, Głogów) - tu działa KGHM Polska Miedź, największy w Europie kompleks górniczo-hutniczy miedzi. Wrocław jako centrum badawcze i motoryzacyjne (Volvo, Sitech VW).',
    whyHere: 'Dolny Śląsk to naturalny rynek dla testów odporności kruszyw (bęben Los Angeles), sit prętowych do klasyfikacji rudy oraz serwisu kruszarek wirnikowych. Region przemysłu wydobywczego miedzi, laboratoriów akademickich (PWr, UWr) i zakładów motoryzacyjnych - przestrzeń dla firm różnej skali.',
    hero: {
      eyebrow: 'Zagłębie miedziowe LGOM · Wrocław · Volvo',
      headlineLead: 'Sprzęt dla',
      headlineAccent: 'firm Dolnego Śląska',
      headlineTrail: '- od korporacji po mniejsze zakłady',
      sub: 'Region przemysłu miedziowego (KGHM Polska Miedź - Lubin, Polkowice, Głogów), motoryzacyjnego (Volvo, Sitech VW) i akademickiego (PWr, UWr). Nasza oferta - bęben Los Angeles, sita prętowe, serwis kruszarek wirnikowych - trafia tu do kamieniołomów, zakładów przeróbczych, laboratoriów budowlanych i firm serwisowych każdej wielkości.',
      stat: { value: '#1', label: 'producent miedzi w UE' },
    },
  },
  {
    slug: 'lubuskie',
    name: 'Lubuskie',
    longName: 'województwo lubuskie',
    longNameLocative: 'w województwie lubuskim',
    isoCode: 'PL-08',
    capital: 'Gorzów Wielkopolski',
    centroid: { lat: 52.7368, lng: 15.2288 },
    population: '1,0 mln',
    cities: ['Gorzów Wielkopolski', 'Zielona Góra', 'Nowa Sól', 'Żary', 'Żagań', 'Świebodzin'],
    priority: 1,
    industries: {
      recyklingKatalizatorow: 2,
      serwisPrzemyslowy: 2,
      zbrojeniowka: 1,
      laboratoria: 3,
      kopalnie: 2,
    },
    keyCompanies: ['Lumel (Zielona Góra)', 'Stelmet', 'Mercedes-Benz Manufacturing Poland (Jawor - blisko granicy)', '11. Lubuska Dywizja Kawalerii Pancernej', 'Zakłady papiernicze (Kostrzyn)'],
    description: 'Mniej zaludnione województwo z silną obecnością przemysłu drzewnego i papierniczego. Pas zachodni z jednostkami wojskowymi (m.in. 11. Lubuska Dywizja Kawalerii Pancernej) i zakładami logistycznymi okolic granicy.',
    whyHere: 'Region naturalny dla naszej oferty akcesoriów EX i serwisu maszyn przetwórczych. Bliska obecność obiektów obronnych otwiera przestrzeń dla specjalistycznych urządzeń pirotechnicznych.',
    hero: {
      eyebrow: 'Pas zachodni · obrona, przetwórstwo, motoryzacja',
      headlineLead: 'Akcesoria',
      headlineAccent: 'EX i serwis',
      headlineTrail: 'dla firm Lubuskiego',
      sub: 'Region z obiektami wojskowymi (11. Lubuska Dywizja Kawalerii Pancernej), zakładami motoryzacyjnymi w pobliżu (Mercedes-Benz Jawor przy granicy z Dolnym Śląskiem) i przemysłem papierniczym (Kostrzyn). Nasza oferta - stoły do mycia materiałów przeciwwybuchowych (EX), sondy, akcesoria specjalistyczne - kierowana do zakładów przetwórczych, firm serwisowych i obiektów obronnych regionu.',
    },
  },
  {
    slug: 'malopolskie',
    name: 'Małopolskie',
    longName: 'województwo małopolskie',
    longNameLocative: 'w województwie małopolskim',
    isoCode: 'PL-12',
    capital: 'Kraków',
    centroid: { lat: 50.0647, lng: 19.945 },
    population: '3,4 mln',
    cities: ['Kraków', 'Tarnów', 'Nowy Sącz', 'Oświęcim', 'Chrzanów', 'Bochnia', 'Wieliczka', 'Olkusz', 'Rzezawa (siedziba AS‑LAB)'],
    priority: 1,
    industries: {
      recyklingKatalizatorow: 2,
      serwisPrzemyslowy: 2,
      zbrojeniowka: 2,
      laboratoria: 1,
      kopalnie: 2,
    },
    keyCompanies: ['AGH (Akademia Górniczo-Hutnicza)', 'Uniwersytet Jagielloński', 'ArcelorMittal Kraków', 'Synthos (Oświęcim)', 'Grupa Azoty Tarnów', 'Kopalnia soli Wieliczka', 'Bochnia - region siedziby AS‑LAB'],
    description: 'Region siedziby AS‑LAB (Łazy 32, Rzezawa k. Bochni). Działają tu m.in. AGH (Akademia Górniczo-Hutnicza), Uniwersytet Jagielloński, ArcelorMittal Kraków, Grupa Azoty Tarnów, Synthos Oświęcim - silna koncentracja przemysłu i ośrodków akademickich.',
    whyHere: 'To nasz dom - warsztat w Łazach pozwala obsługiwać klientów w Krakowie, Tarnowie, Oświęcimiu i okolicach z dnia na dzień. Lokalna obecność oznacza krótsze terminy, brak logistyki dla demonstracji u klienta i osobiste doradztwo techniczne.',
    hero: {
      eyebrow: 'Region siedziby · warsztat w Łazach k. Bochni',
      headlineLead: 'U siebie:',
      headlineAccent: 'Kraków, Tarnów,',
      headlineTrail: 'cała Małopolska',
      sub: 'Warsztat w Łazach k. Bochni - jesteśmy lokalnie dostępni. Region z dużymi ośrodkami naukowo-przemysłowymi (AGH, UJ, ArcelorMittal Kraków, Grupa Azoty Tarnów, Synthos Oświęcim) oraz licznymi mniejszymi laboratoriami i firmami serwisowymi. Dla klientów z Małopolski możliwy serwis tego samego dnia i demonstracja urządzeń bez logistyki.',
      stat: { value: '0 km', label: 'do naszego warsztatu' },
    },
  },
  {
    slug: 'podkarpackie',
    name: 'Podkarpackie',
    longName: 'województwo podkarpackie',
    longNameLocative: 'w województwie podkarpackim',
    isoCode: 'PL-18',
    capital: 'Rzeszów',
    centroid: { lat: 50.0413, lng: 21.999 },
    population: '2,1 mln',
    cities: ['Rzeszów', 'Stalowa Wola', 'Mielec', 'Krosno', 'Tarnobrzeg', 'Przemyśl', 'Jasło', 'Dębica'],
    priority: 2,
    industries: {
      zbrojeniowka: 1,
      serwisPrzemyslowy: 2,
      laboratoria: 2,
      kopalnie: 2,
    },
    keyCompanies: ['HSW S.A. Stalowa Wola (PGZ)', 'PZL Mielec (Sikorsky/Lockheed Martin)', 'Polskie Zakłady Lotnicze', 'Grupa Azoty Tarnobrzeg', 'KiZPS Siarkopol', 'Politechnika Rzeszowska'],
    description: 'Polska Dolina Lotnicza i Stalowa Wola - serce polskiego przemysłu obronnego. Działają tu zakłady Polskiej Grupy Zbrojeniowej (PGZ): HSW Stalowa Wola (haubice Krab, transportery Rosomak), PZL Mielec (śmigłowce Black Hawk).',
    whyHere: 'Region o najsilniejszej koncentracji sektora obronnego w Polsce. Naturalny rynek dla naszej oferty urządzeń pirotechnicznych (gniotowniki obiegowe), stołów do mycia EX i akcesoriów specjalistycznych.',
    hero: {
      eyebrow: 'Polska Dolina Lotnicza · serce PGZ',
      headlineLead: 'Pirotechnika i precyzja dla',
      headlineAccent: 'sektora obronnego',
      headlineTrail: 'Podkarpacia',
      sub: 'Region zdominowany przez zakłady Polskiej Grupy Zbrojeniowej (PGZ): HSW Stalowa Wola (Huta Stalowa Wola - haubice Krab, transportery Rosomak), PZL Mielec (Polskie Zakłady Lotnicze - śmigłowce Black Hawk dla Sikorsky/Lockheed Martin), KiZPS Siarkopol. Nasza oferta - gniotowniki obiegowe, stoły EX, akcesoria pirotechniczne - kierowana do zakładów przeróbczych, laboratoriów technicznych i firm serwisowych regionu.',
      stat: { value: 'PGZ', label: 'Polska Grupa Zbrojeniowa' },
    },
  },
  {
    slug: 'swietokrzyskie',
    name: 'Świętokrzyskie',
    longName: 'województwo świętokrzyskie',
    longNameLocative: 'w województwie świętokrzyskim',
    isoCode: 'PL-26',
    capital: 'Kielce',
    centroid: { lat: 50.8661, lng: 20.6286 },
    population: '1,2 mln',
    cities: ['Kielce', 'Skarżysko-Kamienna', 'Ostrowiec Świętokrzyski', 'Starachowice', 'Sandomierz', 'Końskie'],
    priority: 2,
    industries: {
      zbrojeniowka: 1,
      serwisPrzemyslowy: 2,
      kopalnie: 3,
      laboratoria: 3,
    },
    keyCompanies: ['Mesko S.A. Skarżysko-Kamienna (PGZ - amunicja, rakiety)', 'Celsa Huta Ostrowiec', 'Star Trucks Starachowice', 'Targi Kielce'],
    description: 'Region kontynuujący tradycje COP (Centralny Okręg Przemysłowy II RP). Działa tu Mesko Skarżysko-Kamienna - flagowy zakład amunicji w Polskiej Grupie Zbrojeniowej, oraz Celsa Huta Ostrowiec, Star Trucks Starachowice.',
    whyHere: 'Drugi po Podkarpackim region zbrojeniowy w Polsce. Naturalny rynek dla naszej oferty urządzeń do mas pirotechnicznych i akcesoriów specjalistycznych - przy lokalnej obecności producentów amunicji, rakiet i granatów.',
    hero: {
      eyebrow: 'COP · Centralny Okręg Przemysłowy II RP',
      headlineLead: 'Amunicja, rakiety i przemysł',
      headlineAccent: 'świętokrzyski',
      sub: 'Region z silną obecnością Polskiej Grupy Zbrojeniowej - Mesko S.A. Skarżysko-Kamienna (flagowy zakład amunicji PGZ: granaty, pociski, rakiety). Działa tu też Celsa Huta Ostrowiec, Star Trucks Starachowice, Politechnika Świętokrzyska. Nasza oferta - gniotowniki obiegowe, akcesoria dla mas pirotechnicznych - kierowana do zakładów obronnych, hut, laboratoriów i mniejszych firm regionu.',
    },
  },
  {
    slug: 'lubelskie',
    name: 'Lubelskie',
    longName: 'województwo lubelskie',
    longNameLocative: 'w województwie lubelskim',
    isoCode: 'PL-06',
    capital: 'Lublin',
    centroid: { lat: 51.2465, lng: 22.5684 },
    population: '2,1 mln',
    cities: ['Lublin', 'Puławy', 'Chełm', 'Zamość', 'Biała Podlaska', 'Bogdanka', 'Łęczna'],
    priority: 2,
    industries: {
      kopalnie: 1,
      serwisPrzemyslowy: 2,
      laboratoria: 2,
      recyklingKatalizatorow: 3,
    },
    keyCompanies: ['LW Bogdanka (kopalnia węgla)', 'Grupa Azoty Puławy', 'Cementownia Chełm', 'Uniwersytet Marii Curie-Skłodowskiej', 'Politechnika Lubelska'],
    description: 'Działa tu LW Bogdanka - najwyżej rentowna kopalnia węgla kamiennego w Polsce, Grupa Azoty Puławy, Cementownia Chełm oraz uczelnie (UMCS, Politechnika Lubelska).',
    whyHere: 'Region atrakcyjny dla naszej oferty serwisu kruszarek, młynów próbnych i bębna Los Angeles do testów kruszyw - przy lokalnej obecności kopalni węgla i cementowni.',
    hero: {
      eyebrow: 'Bogdanka · najbardziej rentowna kopalnia węgla w PL',
      headlineLead: 'Maszyny dla',
      headlineAccent: 'kopalni i zakładów',
      headlineTrail: 'Lubelskiego',
      sub: 'Region z silnym przemysłem wydobywczym i chemicznym - LW Bogdanka (Lubelski Węgiel Bogdanka, najbardziej rentowna kopalnia węgla kamiennego w Polsce), Grupa Azoty Puławy, Cementownia Chełm, UMCS, Politechnika Lubelska. Nasza oferta - serwis kruszarek, młyny próbne, bęben Los Angeles - kierowana do zakładów przeróbczych, laboratoriów technicznych i mniejszych firm regionu.',
    },
  },
  {
    slug: 'mazowieckie',
    name: 'Mazowieckie',
    longName: 'województwo mazowieckie',
    longNameLocative: 'w województwie mazowieckim',
    isoCode: 'PL-14',
    capital: 'Warszawa',
    centroid: { lat: 52.2297, lng: 21.0122 },
    population: '5,5 mln',
    cities: ['Warszawa', 'Radom', 'Płock', 'Pruszków', 'Piaseczno', 'Legionowo', 'Siedlce', 'Otwock'],
    priority: 2,
    industries: {
      laboratoria: 1,
      zbrojeniowka: 2,
      recyklingKatalizatorow: 2,
      serwisPrzemyslowy: 2,
    },
    keyCompanies: ['Politechnika Warszawska', 'Uniwersytet Warszawski', 'PCO S.A. (Warszawa - PGZ optoelektronika)', 'PKN Orlen Płock', 'WAT (Wojskowa Akademia Techniczna)', 'Centralne Laboratorium Kryminalistyczne Policji'],
    description: 'Najwięcej laboratoriów uniwersyteckich i badawczych w Polsce. Działają tu PW, UW, WAT (Wojskowa Akademia Techniczna), PCO S.A. (PGZ - optoelektronika), PKN Orlen Płock. Centrum administracyjne kraju z dużą koncentracją instytucji R&D.',
    whyHere: 'Region naturalny dla naszej oferty sit analitycznych PN-ISO 3310 i akcesoriów laboratoryjnych - przy największej w Polsce koncentracji laboratoriów uniwersyteckich, badawczych i analitycznych.',
    hero: {
      eyebrow: 'Akademia · zbrojeniówka · Orlen Płock',
      headlineLead: 'Sita analityczne dla',
      headlineAccent: 'laboratoriów Mazowsza',
      sub: 'Region z największą w Polsce koncentracją laboratoriów uniwersyteckich (Politechnika Warszawska, Uniwersytet Warszawski, WAT - Wojskowa Akademia Techniczna), badawczo-rozwojowych i analitycznych. Działają tu też PCO S.A. (Polskie Centrum Optoelektroniki z PGZ) i PKN Orlen Płock. Nasza oferta - sita PN-ISO 3310, akcesoria laboratoryjne, specjalistyczne stoły - kierowana do laboratoriów akademickich, prywatnych, średnich zakładów chemicznych i firm badawczych.',
    },
  },
  {
    slug: 'wielkopolskie',
    name: 'Wielkopolskie',
    longName: 'województwo wielkopolskie',
    longNameLocative: 'w województwie wielkopolskim',
    isoCode: 'PL-30',
    capital: 'Poznań',
    centroid: { lat: 52.4082, lng: 16.9335 },
    population: '3,5 mln',
    cities: ['Poznań', 'Konin', 'Kalisz', 'Piła', 'Gniezno', 'Leszno', 'Ostrów Wielkopolski'],
    priority: 3,
    industries: {
      kopalnie: 2,
      serwisPrzemyslowy: 1,
      laboratoria: 2,
      recyklingKatalizatorow: 2,
    },
    keyCompanies: ['Volkswagen Poznań', 'Solaris Bus & Coach', 'PAK Konin (kopalnie węgla brunatnego)', 'Uniwersytet im. Adama Mickiewicza', 'Politechnika Poznańska'],
    description: 'Region z silną motoryzacją (Volkswagen Poznań, Solaris) i przemysłem wydobywczym węgla brunatnego (PAK - Pątnów-Adamów-Konin). Działa tu też Politechnika Poznańska, UAM.',
    whyHere: 'Połączenie przemysłu motoryzacyjnego i wydobywczego daje przestrzeń dla naszych dwóch nurtów oferty: linii do recyklingu katalizatorów oraz serwisu ciężkiego sprzętu odkrywkowego.',
    hero: {
      eyebrow: 'Motoryzacja · węgiel brunatny · akademia',
      headlineLead: 'Sprzęt dla',
      headlineAccent: 'przemysłu Wielkopolski',
      sub: 'Region połączenia motoryzacji (Volkswagen Poznań, Solaris Bus & Coach) z górnictwem węgla brunatnego (PAK - Pątnów-Adamów-Konin: kopalnie i elektrownie). Działają tu też Politechnika Poznańska i UAM. Nasza oferta - linie do recyklingu katalizatorów + ciężki serwis odkrywkowy - kierowana do zakładów motoryzacyjnych, kopalnianych oraz mniejszych firm serwisowych regionu.',
    },
  },
  {
    slug: 'lodzkie',
    name: 'Łódzkie',
    longName: 'województwo łódzkie',
    longNameLocative: 'w województwie łódzkim',
    isoCode: 'PL-10',
    capital: 'Łódź',
    centroid: { lat: 51.7592, lng: 19.4559 },
    population: '2,4 mln',
    cities: ['Łódź', 'Bełchatów', 'Piotrków Trybunalski', 'Pabianice', 'Kutno', 'Zgierz', 'Tomaszów Mazowiecki'],
    priority: 3,
    industries: {
      kopalnie: 1,
      serwisPrzemyslowy: 2,
      laboratoria: 2,
    },
    keyCompanies: ['Bełchatów (PGE Górnictwo i Energetyka Konwencjonalna) - największa kopalnia węgla brunatnego w UE', 'Politechnika Łódzka', 'Cementownia Warta'],
    description: 'W regionie działa Bełchatów - największa kopalnia węgla brunatnego w UE i największa elektrownia konwencjonalna w Europie (PGE GiEK). Plus Cementownia Warta i Politechnika Łódzka.',
    whyHere: 'Region z gigantycznym przemysłem wydobywczym (Bełchatów) - naturalny rynek dla naszej oferty zestawów bębnów Los Angeles, młynów próbnych i sit do węgla brunatnego i nadkładu.',
    hero: {
      eyebrow: 'Bełchatów · największa kopalnia węgla brunatnego UE',
      headlineLead: 'Maszyny dla',
      headlineAccent: 'przemysłu Łódzkiego',
      sub: 'W regionie działa PGE Górnictwo i Energetyka Konwencjonalna - Bełchatów to największa odkrywka węgla brunatnego i elektrownia konwencjonalna w Europie. Plus Cementownia Warta i Politechnika Łódzka. Nasza oferta - zestawy bębnów Los Angeles, młyny próbne, sita do węgla i nadkładu - kierowana do zakładów przeróbczych, laboratoriów technicznych i firm serwisowych regionu.',
      stat: { value: '#1 UE', label: 'kopalnia węgla brunatnego' },
    },
  },
  {
    slug: 'pomorskie',
    name: 'Pomorskie',
    longName: 'województwo pomorskie',
    longNameLocative: 'w województwie pomorskim',
    isoCode: 'PL-22',
    capital: 'Gdańsk',
    centroid: { lat: 54.352, lng: 18.6466 },
    population: '2,3 mln',
    cities: ['Gdańsk', 'Gdynia', 'Sopot', 'Słupsk', 'Tczew', 'Starogard Gdański'],
    priority: 3,
    industries: {
      serwisPrzemyslowy: 2,
      laboratoria: 2,
      zbrojeniowka: 2,
    },
    keyCompanies: ['Stocznia Gdańsk', 'Politechnika Gdańska', 'Lotos (rafineria)', 'Stocznia Marynarki Wojennej (Gdynia)'],
    description: 'Region wybrzeża z silnym przemysłem stoczniowym (Stocznia Gdańsk, Stocznia Marynarki Wojennej Gdynia), rafineryjnym (Lotos) i akademickim (Politechnika Gdańska).',
    whyHere: 'Pomorze to naturalny rynek dla naszych sond do pobierania prób, akcesoriów laboratoryjnych dla rafinerii oraz specjalistycznych narzędzi dla sektora morskiego i obronnego.',
    hero: {
      eyebrow: 'Wybrzeże · stocznie · rafinerie · marynarka',
      headlineLead: 'Sprzęt dla',
      headlineAccent: 'wybrzeża i rafinerii',
      headlineTrail: 'Pomorza',
      sub: 'Region wybrzeża z silnym przemysłem stoczniowym (Stocznia Gdańsk, Stocznia Marynarki Wojennej Gdynia), rafineryjnym (Lotos) i akademickim (Politechnika Gdańska). Nasza oferta - sondy do pobierania prób, akcesoria laboratoryjne, specjalistyczne narzędzia - kierowana do zakładów przemysłowych, laboratoriów i firm serwisowych Pomorza.',
    },
  },
];

// Helper: regiony sortowane po priorytecie
export const regionsByPriority = [...regions].sort((a, b) => a.priority - b.priority);

// Helper: regiony top dla branży
export function regionsForIndustry(industryKey: keyof Region['industries'], maxLevel: 1 | 2 | 3 = 2): Region[] {
  return regions
    .filter((r) => r.industries[industryKey] !== undefined && r.industries[industryKey]! <= maxLevel)
    .sort((a, b) => (a.industries[industryKey] || 99) - (b.industries[industryKey] || 99));
}

// Klastry przemysłowe - grupy województw o wspólnej specyfice
export const industryClusters = {
  weglowy: {
    label: 'Polski klaster węglowy',
    regions: ['slaskie', 'lubelskie', 'lodzkie', 'dolnoslaskie'],
    description: 'Górnictwo węgla kamiennego (Śląsk, Lubelskie) i brunatnego (Bełchatów, Konin). Główny rynek kruszarek, młynów próbnych i przesiewaczy do analizy sitowej węgla.',
  },
  miedziowy: {
    label: 'Zagłębie Miedziowe',
    regions: ['dolnoslaskie'],
    description: 'KGHM Polska Miedź - kompleks LGOM (Legnicko-Głogowski Okręg Miedziowy). Bęben Los Angeles do testów kruszyw, sita prętowe, serwis kruszarek wirnikowych.',
  },
  zbrojeniowy: {
    label: 'Polska Grupa Zbrojeniowa',
    regions: ['podkarpackie', 'swietokrzyskie', 'lubuskie', 'mazowieckie', 'slaskie'],
    description: 'Kluczowe zakłady PGZ: HSW Stalowa Wola, Mesko Skarżysko, PCO Warszawa, Bumar-Łabędy. Gniotowniki do mas pirotechnicznych, stoły do mycia EX, akcesoria.',
  },
  motoryzacyjny: {
    label: 'Polski przemysł motoryzacyjny',
    regions: ['slaskie', 'wielkopolskie', 'dolnoslaskie', 'malopolskie'],
    description: 'VW Poznań, Toyota, Opel/Stellantis Gliwice. Recykling katalizatorów z linii produkcyjnych i serwisów.',
  },
  laboratoryjny: {
    label: 'Polskie centra akademickie',
    regions: ['mazowieckie', 'malopolskie', 'dolnoslaskie', 'wielkopolskie', 'pomorskie', 'slaskie'],
    description: 'AGH, UJ, PW, UW, PWr, PG, PSl, UAM. Sita analityczne PN-ISO 3310, młynki MW-200, akcesoria do laboratoriów badawczych.',
  },
} as const;
