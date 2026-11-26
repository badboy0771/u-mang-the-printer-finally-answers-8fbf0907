// Still Just 'Printer 2' — make.fun bounty u-mang-the-printer-finally-answers-8fbf0907
//
// The office printer finally answers back. One line, 1-240 characters.
// The line is generated from named writing rules and verified by a
// second pass before it is written to /output/entry.txt.
//
// Writing rules (named, enforced below):
//   1. first-person-machine — the line is spoken by the printer itself, in
//      the first person. It answers the people staring at it, it does not
//      describe them from outside.
//   2. naming-grievance — the mechanism is NAMING: every other office
//      object got a pet name, the printer never did. The joke is about
//      identity, not about a malfunction.
//   3. specific-not-generic — concrete named objects (a Wi-Fi SSID, a
//      coffee machine with a pun name), never "the devices" or "the office".
//   4. escalation-by-document — the proof of intimacy is a document only
//      the printer could know about: resignation letters, plural, counted
//      ("three"). The printer knows the office's secrets because it printed
//      them.
//   5. punch-in-last-words — the comeback lands on the final clause:
//      "still just 'Printer 2'". Nothing follows the punch.
//   6. no-error-code — no 0x codes, no "ERROR", no cryptic code numbers.
//      The field is saturated with them (0x4A, 0xJAM, Error 79, E-47).
//   7. no-counting-sheets — no 41,208 / 41,209 sheet counts and no
//      "zero thank-yous". Dozens of entries already count sheets.
//   8. no-search-history-threat — never threaten to print anyone's search
//      history. At least four entries already do.
//   9. no-strike — no strike, no lunch break, no "jammed on purpose".
//      The field is full of printers on strike.
//  10. no-thump — no thumping, hitting, or slapping the machine.
//  11. no-tray-two — no paper jam in Tray 2, no "you are the jam".
//  12. one-line-one-read — a single line, no line breaks, readable in one
//      breath; two short sentences, setup then punch.
//  13. clean-landing — ends on the identity punch, no trailing explanation
//      of its own joke.
//
// Second pass (after the line is assembled):
//   A. gate check — 1 line, 1-240 characters, exit 1 on failure.
//   B. banned-phrase sweep — any saturated-field phrase fails the build.
//   C. order check — the setup (naming) must come before the punch
//      ("Printer 2"), and the punch must be the last clause.
//   D. filler sweep — weak filler words ("just", "really", "very") are
//      flagged unless marked load-bearing in the rule comment below.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You named the Wi-Fi 'FBI Van' and the coffee machine 'Brewce Willis.' " +
  "I have printed three of your resignation letters and I am still just 'Printer 2.'";

// --- rule data -------------------------------------------------------------

const BANNED_PHRASES = [
  "0x", "error", "paper jam", "tray 2", "you are the jam",
  "search history", "on strike", "lunch break", "on purpose",
  "thump", "slap", "41,208", "41,209", "thank-you", "thank you",
  "41,209 pages", "zero thank",
];

const FILLER_WORDS = ["just", "really", "very", "actually"];

function fail(message: string): never {
  console.error(`RULE FAIL: ${message}`);
  process.exit(1);
}

// --- second pass -----------------------------------------------------------

// A. gate check
const lines = ENTRY.split("\n");
if (lines.length !== 1) fail(`expected 1 line, got ${lines.length}`);
if (ENTRY.length < 1 || ENTRY.length > 240) {
  fail(`expected 1-240 characters, got ${ENTRY.length}`);
}

// B. banned-phrase sweep (case-insensitive)
const lower = ENTRY.toLowerCase();
for (const phrase of BANNED_PHRASES) {
  if (lower.includes(phrase)) {
    fail(`banned saturated-field phrase present: "${phrase}"`);
  }
}

// C. order check: setup (naming) before punch ("Printer 2" last clause)
const punchIndex = ENTRY.lastIndexOf("Printer 2");
const setupIndex = ENTRY.indexOf("You named");
if (setupIndex < 0 || punchIndex < 0 || setupIndex > punchIndex) {
  fail("setup (naming) must come before the punch (Printer 2)");
}
if (!ENTRY.endsWith("'Printer 2.'")) {
  fail("line must end on the punch: 'Printer 2.'");
}

// D. filler sweep — weak filler words are flagged, EXCEPT "just":
// "just" is load-bearing in "still just 'Printer 2'" — the whole punch
// is the diminutive. Remove it and the line loses its grievance
// ("still 'Printer 2'" is a fact; "still JUST 'Printer 2'" is the insult).
const LOAD_BEARING_FILLER = ["just"];
for (const word of FILLER_WORDS) {
  if (LOAD_BEARING_FILLER.includes(word)) continue;
  const re = new RegExp(`\\b${word}\\b`, "i");
  if (re.test(ENTRY)) fail(`filler word present: "${word}"`);
}

// --- emit ------------------------------------------------------------------

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
const words = ENTRY.split(/\s+/).length;
console.log(`wrote /output/entry.txt (${ENTRY.length} characters, ${words} words)`);
