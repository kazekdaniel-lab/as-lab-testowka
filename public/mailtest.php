<?php
// TYMCZASOWY skrypt diagnostyczny - USUNAC PO TESCIE
declare(strict_types=1);
header('Content-Type: text/plain; charset=utf-8');
error_reporting(E_ALL);
ini_set('display_errors', '1');

echo "=== DIAGNOSTYKA 2 - dlaczego mail() zawodzi ===\n";
echo "PHP: " . PHP_VERSION . "\n";
echo "sendmail_path: " . (ini_get('sendmail_path') ?: '(puste)') . "\n";
echo "SMTP (ini): " . (ini_get('SMTP') ?: '(puste)') . "\n";
echo "smtp_port:   " . (ini_get('smtp_port') ?: '(puste)') . "\n";
echo "sendmail_from: " . (ini_get('sendmail_from') ?: '(puste)') . "\n\n";

echo "--- czy binarka sendmail istnieje ---\n";
foreach (['/usr/sbin/sendmail', '/usr/lib/sendmail', '/usr/bin/sendmail'] as $p) {
    echo sprintf("%-22s exists=%s\n", $p, file_exists($p) ? 'TAK' : 'nie');
}

echo "\n--- proba mail() BEZ tlumienia bledow ---\n";
$err = null;
set_error_handler(function ($no, $str) use (&$err) { $err = $str; return true; });
$ok = mail('daniel@bujnowlosa.pl', 'AS-LAB test 2', "test\n", "From: AS-LAB <noreply@as-lab.pl>");
restore_error_handler();
echo "wynik mail(): " . ($ok ? 'true' : 'false') . "\n";
echo "blad PHP:     " . ($err ?: '(brak komunikatu)') . "\n";
$le = error_get_last();
echo "error_get_last: " . ($le['message'] ?? '(brak)') . "\n";

echo "\n--- czy da sie polaczyc z serwerem SMTP lh.pl (potrzebne do planu B) ---\n";
foreach ([['mail12.lh.pl',587],['mail12.lh.pl',465],['localhost',25],['smtp.lh.pl',587]] as [$h,$p]) {
    $t0 = microtime(true);
    $c = @fsockopen($h, $p, $errno, $errstr, 5);
    if ($c) { $banner = trim((string)@fgets($c, 256)); fclose($c);
        printf("%-18s:%-4d POLACZONO  %s\n", $h, $p, substr($banner, 0, 60));
    } else { printf("%-18s:%-4d brak (%s)\n", $h, $p, $errstr); }
}
