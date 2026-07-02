#!/usr/bin/env bash
# AS-LAB deploy to lh.pl (FTP via lftp).
# Wymaga: brew install lftp (lub apt install lftp).
# Konfiguracja: skopiuj .env.example do .env.local i uzupełnij dane.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$PROJECT_DIR/.env.local"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Brak pliku $ENV_FILE. Skopiuj scripts/.env.example i uzupełnij dane FTP." >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

: "${LH_HOST:?Brakuje LH_HOST}"
: "${LH_USER:?Brakuje LH_USER}"
: "${LH_PASS:?Brakuje LH_PASS}"
: "${LH_REMOTE_DIR:=public_html}"

DIST_DIR="$PROJECT_DIR/dist"
if [[ ! -d "$DIST_DIR" ]]; then
  echo "Brak katalogu dist/. Najpierw uruchom: npm run build" >&2
  exit 1
fi

echo "Deployment: $DIST_DIR -> $LH_USER@$LH_HOST:$LH_REMOTE_DIR"
read -rp "Kontynuować? [y/N] " confirm
[[ "${confirm,,}" == "y" ]] || { echo "Anulowano."; exit 0; }

lftp -u "$LH_USER","$LH_PASS" "$LH_HOST" <<EOF
set ssl:verify-certificate no
set ftp:ssl-protect-data true
set ftp:ssl-force true
set mirror:use-pget-n 4
mirror --reverse --delete --verbose --exclude-glob .DS_Store --parallel=4 "$DIST_DIR/" "$LH_REMOTE_DIR/"
quit
EOF

echo "Deploy zakończony pomyślnie."
