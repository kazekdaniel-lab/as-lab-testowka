#!/bin/bash
# Weryfikacja przekierowan 301 ze starej strony - ODPALIC PO WDROZENIU NA lh.pl
# (na Vercel nie zadziala, bo .htaccess to Apache, a Vercel to Node)
B="${1:-https://as-lab.pl}"
echo "Sprawdzam przekierowania na: $B"; echo
declare -a P=(
"/laboratoryjna-kruszarka-4-walcowa-typ-kw-240/|/maszyny/kruszarka-walcowa-lkw-240/"
"/wplyw-precyzyjnego-mielenia-na-jakosc-wynikow-analitycznych/|/blog/wplyw-precyzyjnego-mielenia-na-jakosc-wynikow-analitycznych/"
"/serwis-maszyn-gorniczych/|/serwis-maszyn/"
"/category/bez-kategorii/|/blog/"
"/regiony/|/serwis-maszyn/"
)
ok=0; bad=0
for e in "${P[@]}"; do
  old="${e%%|*}"; want="${e##*|}"
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "$B$old")
  loc=$(curl -s -o /dev/null -w "%{redirect_url}" --max-time 15 "$B$old")
  if [ "$code" = "301" ] && [[ "$loc" == *"$want" ]]; then echo "  OK   $old -> $want"; ok=$((ok+1));
  else echo "  BLAD $old -> HTTP $code, Location: ${loc:-brak} (oczekiwano 301 -> $want)"; bad=$((bad+1)); fi
done
echo; echo "Zachowane 1:1 (powinny dawac 200):"
for u in / /kruszarki-i-mlynki-laboratoryjne/ /sita-laboratoryjne/ /przesiewacze-posuwisto-zwrotne/ /beben-los-angeles/ /urzadzenia-do-mielenia-katalizatorow/ /urzadzenia-do-mas-pirotechnicznych/ /inne-urzadzenia/ /nietypowe-zamowienia/ /serwis-maszyn/ /kontakt/ /blog/; do
  c=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "$B$u")
  [ "$c" = "200" ] && { echo "  OK   $u"; ok=$((ok+1)); } || { echo "  BLAD $u -> $c"; bad=$((bad+1)); }
done
echo; echo "Wynik: OK=$ok, BLEDOW=$bad"
