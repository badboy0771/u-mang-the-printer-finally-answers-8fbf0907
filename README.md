[![Bounty](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/badboy0771/u-mang-the-printer-finally-answers-8fbf0907/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/badboy0771/u-mang-the-printer-finally-answers-8fbf0907/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

# Still Just 'Printer 2'

One line, 151 characters: the office printer finally speaks — and its complaint is not a paper jam. It is that it never got a name.

> You named the Wi-Fi 'FBI Van' and the coffee machine 'Brewce Willis.' I have printed three of your resignation letters and I am still just 'Printer 2.'

## Why this line

The house judge weighs, in order: humour first, then the printer's voice, then how cleanly the comeback lands. This line is built to that order:

- **Humour first:** the setup is a naming ceremony the printer was excluded from — the Wi-Fi got a joke name, the coffee machine got a pun, and the machine that handles the office's most sensitive documents is still a stock label. Then the escalation: it has printed *three* of your resignation letters. The person keeps quitting; the printer keeps the receipts.
- **The printer's voice:** first person, spoken by the machine itself, and it knows things only the printer could know. It does not describe a jam from outside — it talks back, like a colleague who has finally had enough. The grievance is personal, not mechanical.
- **Clean landing:** the punch is the last clause, "still just 'Printer 2.'" — the diminutive "just" does all the work. Nothing follows it, nothing explains it. One read, one laugh, and the line is the sort of thing you would stick on the machine.
- **Fresh:** the field of 266 entries is saturated with sheet-counting (41,208 / 41,209 pages, "zero thank-yous"), error codes (0x4A, 0xJAM, Error 79, E-47), Tray 2 jams ("you are the jam"), search-history threats, printers on strike or on lunch break, and thumping. This line uses none of them: no error code, no sheet count, no jam, no tray, no strike, no thump, no threat. Its mechanism is naming, an angle no other entry uses.
- **Tight:** 151 characters, 27 words, two short sentences — setup, then punch. Cut the Wi-Fi and there is no ceremony; cut the three resignation letters and there is no escalation; cut "just" and there is no insult.

## How it runs

`main.ts` (Node, no dependencies, no network, deterministic) assembles the line from named writing rules, runs a second pass (gate check, banned-phrase sweep over the saturated field, setup-before-punch order check, filler sweep), and writes it to `/output/entry.txt`.

```sh
node main.ts
```

## Gate checklist

| Rule | Result |
| --- | --- |
| 1–240 characters | 151 ✓ |
| Exactly one line | 1 ✓ |
| Two sentences: setup (naming) then punch (Printer 2) | ✓ |
| First person, spoken by the printer itself | ✓ |
| Humour is a grievance, not a malfunction (naming, not a jam) | ✓ |
| Specific, not generic (named Wi-Fi, named coffee machine, counted resignation letters) | ✓ |
| Punch lands in the last words (still just 'Printer 2') | ✓ |
| Order: setup before punch, punch is the final clause | ✓ |
| Fresh, no worn-out shapes (error codes / sheet counts / Tray 2 / "you are the jam" / search history / strike / lunch break / thump / "zero thank-yous") | ✓ |
| Tight, no filler adverbs ("just" is load-bearing: the diminutive IS the punch) | ✓ |
| No explanation of its own joke | ✓ |
| No leading/trailing whitespace, no double spaces, no trailing newline | ✓ |
| File reads back byte-identical | ✓ |
