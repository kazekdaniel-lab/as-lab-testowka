<?php
// AS-LAB contact form handler for lh.pl shared hosting (PHP).
// Drop-in: receives POST from /kontakt/, sends mail() to TO_EMAIL, returns JSON.

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const TO_EMAIL = 'aslab.bochnia@gmail.com';
const FROM_EMAIL = 'noreply@as-lab.pl';
const SITE_NAME = 'AS-LAB';
const MAX_LEN = 5000;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Honeypot - bots usually fill all fields
if (!empty($_POST['_honeypot'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$company = trim((string)($_POST['company'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$consent = !empty($_POST['consent']);

// Anty-wstrzykiwanie nagłówków: usuń CR/LF z pól trafiających do nagłówków maila
$name = preg_replace('/[\r\n]+/', ' ', $name);
$company = preg_replace('/[\r\n]+/', ' ', $company);

if ($name === '' || $email === '' || !$consent) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'missing_required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_email']);
    exit;
}

if (mb_strlen($name) > 200 || mb_strlen($message) > MAX_LEN) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'too_long']);
    exit;
}

// Build email
$subject = '[AS-LAB] Nowe zapytanie od ' . $name;
$body  = "Imię i nazwisko: {$name}\n";
$body .= "E-mail: {$email}\n";
if ($company !== '') $body .= "Firma: {$company}\n";
$body .= "\nWiadomość:\n{$message}\n";
$body .= "\n---\nWysłane z formularza https://as-lab.pl/kontakt/";
$body .= "\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$body .= "\nUser-Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown');

$headers  = "From: " . SITE_NAME . " <" . FROM_EMAIL . ">\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: AS-LAB-Form/1.0";

$ok = @mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

if (!$ok) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
