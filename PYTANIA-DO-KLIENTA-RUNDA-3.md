# Pytania do klienta AS-LAB - runda 3 (przed wdrożeniem)

> Gotowe do wklejenia w mail. Pogrupowane wg priorytetu.

---

Dzień dobry,

wprowadziłem wszystkie nowe modele i poprawki. Strona jest już bardzo rozbudowana - żeby ją dokończyć i wdrożyć na docelowej domenie, potrzebuję jeszcze kilku rzeczy. Pogrupowałem je od najważniejszych.

## A. NIEZBĘDNE DO URUCHOMIENIA STRONY

### 1. Domena i hosting
- Czy strona ma działać pod adresem **as-lab.pl** (zastępując obecną), czy najpierw na podstronie testowej?
- Potrzebuję **dostępu do hostingu lh.pl** (login FTP/panel), żeby wgrać stronę. Alternatywnie - mogę przygotować paczkę i przesłać instrukcję, jeśli wolicie wgrać sami.
- Czy obecna strona stoi na WordPressie na tym samym hostingu? (ważne, żeby nic nie nadpisać przy wdrożeniu)

### 2. Dane rejestrowe firmy (do stopki i Google)
Potrzebne do profesjonalnej stopki, polityki prywatności i danych dla Google:
- **NIP**
- **REGON**
- **KRS** (skoro Sp. z o.o.)
- Pełna nazwa rejestrowa i adres rejestrowy (jeśli inny niż warsztat)

### 3. Formularz kontaktowy
- Na jaki adres e-mail mają trafiać wiadomości z formularza? (obecnie ustawione na aslab.bochnia@gmail.com)
- Czy zostajemy przy gmailu, czy uruchamiamy adres firmowy (np. biuro@as-lab.pl)? Firmowy wygląda znacznie poważniej w korespondencji B2B.

## B. WIARYGODNOŚĆ I JAKOŚĆ

### 4. Logo
- Czy macie **gotowe logo** (plik wektorowy SVG/AI/PDF lub PNG w wysokiej rozdzielczości)? Obecnie używam tymczasowego znaku tekstowego "AS" w kwadracie. Prawdziwe logo mocno podniesie odbiór.

### 5. Zdjęcia - uzupełnienia
- **Tokarka do mas pirotechnicznych** - nie ma zdjęcia (jest placeholder). Jest jakieś do pokazania, czy zostaje bez (NDA)?
- Modele **ZKS-260, KM-300, MP-250, LKW-280** - na razie pokazuję je na zdjęciach modeli pokrewnych (np. ZKS-260 na zdjęciu ZKS-130). Macie własne zdjęcia tych maszyn?
- **Trzecie niejasne zdjęcie** (trzy pokłady sitowe na stalowej ramie, plik `e421c569...`) - co to dokładnie? Na razie jest tylko w galerii realizacji.
- **Zdjęcia warsztatu w Łazach** (hala, stanowiska, ludzie przy pracy) - to byłby mocny dowód dla hasła "polski producent, całość u siebie". Macie takie? Jeśli nie - warto rozważyć krótką sesję telefonem.

### 6. Specyfikacje techniczne maszyn
Przy maszynach podałem ogólne parametry. Jeśli macie konkretne dane (moc silnika, wymiary, masa, wydajność, pojemność, napięcie), chętnie je dodam - to bardzo podnosi wiarygodność w oczach inżynierów. Wystarczy lista przy modelach, które uznacie za priorytetowe.

### 7. Referencje / realizacje
- Czy przy trzech case studies możemy podać **nazwy klientów**, czy zostają anonimowe (jak teraz)?
- Macie więcej realizacji do pokazania (zdjęcie + 2-3 zdania opisu)?
- Czy są klienci, którzy zgodziliby się na **logo w sekcji "Zaufali nam"**?

## C. ROZSZERZENIA (do decyzji)

### 8. Wersja angielska
Skoro eksportujecie (Hiszpania, Litwa, Czechy, Dubaj...), czy chcecie **wersję angielską strony**? To większa praca, ale dla eksportu B2B bardzo się opłaca. Można zrobić od razu albo w drugim etapie.

### 9. Blog
- Czy przenieść **stare wpisy** z obecnej strony WordPress, czy zaczynamy blog od zera?
- Czy będziecie dostarczać treści na blog (artykuły techniczne), czy mam zaproponować tematy?

### 10. Mapa, social media, analityka
- Czy podpiąć **mapę Google** na stronie kontaktu (z lokalizacją w Łazach)?
- Macie **profile w social media** (LinkedIn, Facebook, YouTube) do wpięcia w stopkę?
- Czy podpinamy **Google Analytics** i **Google Search Console** (statystyki odwiedzin + monitoring w wyszukiwarce)? Zalecam - to podstawa do późniejszej optymalizacji.

### 11. Materiały do pobrania
- Czy chcecie udostępnić do pobrania **katalog PDF** lub **karty katalogowe** maszyn? Jeśli macie takie pliki, dodam przyciski "Pobierz kartę".

Pozdrawiam

---

## NOTATKA WEWNĘTRZNA (nie wysyłać)

Priorytety wdrożeniowe:
- BLOKERY: dostęp do hostingu, dane rejestrowe (NIP/REGON/KRS), adres e-mail formularza
- JAKOŚĆ: logo wektorowe, zdjęcia warsztatu, specyfikacje, zdjęcia 4 nowych modeli + tokarki
- OPCJE: wersja EN (eksport!), import bloga WP, mapa, GA4+GSC, katalog PDF

Stan techniczny: 74 strony, 42 maszyny, build czysty. Formularz = PHP mail() pod lh.pl. Po danych rejestrowych: uzupełnić stopkę + politykę prywatności + schema LocalBusiness (taxID, vatID).
