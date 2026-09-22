# Final Adjudicator queue — phase-2-remaining-27, group d, round 2

This is the exact queue frozen in `research/phase-2-remaining-27-step7-fa-d-round-2.json`. It contains 72 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## Recovery rules (part of this dispatch)

- Before recording any position, run `node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json`.
- A repair can change the shared page context of an earlier position and freeze its receipt. That is expected, never an escalation.
- Reseal every `stale` position the command lists, in ascending order, before recording a later position: re-read the item against its new context, confirm its bytes still match the recorded `item_sha256`, repair it when the new context invalidates its justification, write the reseal evidence to the printed `--basis-file` path, then run the printed `RESEAL` command.
- Never escalate a context-hash conflict, never skip a stale predecessor, never edit a receipt file by hand.
- Never edit `published/`. When a published supplier is internally inconsistent, or contradicts the convention this item needs, repair the queued run item so it is correct and source-supported under a convention you state, record the published inconsistency in `research/defect-ledger.jsonl` (class `published`), and continue.
- Escalate only when the queued item is itself published scope, a required existing-supplier edit is outside your authority, or the point cannot be settled from authoritative sources and the library. Record the escalation, then continue with the next position; a queue never stalls on an owner decision.

## 1. `thm-ito-integral-process-has-a-continuous-martingale-version` (run)

1. Read `items/thm-ito-integral-process-has-a-continuous-martingale-version.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-1-thm-ito-integral-process-has-a-continuous-martingale-version.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-integral-process-has-a-continuous-martingale-version --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-1-thm-ito-integral-process-has-a-continuous-martingale-version.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-integral-process-has-a-continuous-martingale-version --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-1-thm-ito-integral-process-has-a-continuous-martingale-version.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-integral-process-has-a-continuous-martingale-version --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-1-thm-ito-integral-process-has-a-continuous-martingale-version.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 2. `thm-doob-maximal-bound-for-the-ito-integral` (run)

1. Read `items/thm-doob-maximal-bound-for-the-ito-integral.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-2-thm-doob-maximal-bound-for-the-ito-integral.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-doob-maximal-bound-for-the-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-2-thm-doob-maximal-bound-for-the-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-doob-maximal-bound-for-the-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-2-thm-doob-maximal-bound-for-the-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-doob-maximal-bound-for-the-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-2-thm-doob-maximal-bound-for-the-ito-integral.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 3. `thm-localized-ito-integral` (run)

1. Read `items/thm-localized-ito-integral.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-3-thm-localized-ito-integral.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-localized-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-3-thm-localized-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-localized-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-3-thm-localized-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-localized-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-3-thm-localized-ito-integral.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 4. `def-continuous-brownian-ito-process` (run)

1. Read `items/def-continuous-brownian-ito-process.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-4-def-continuous-brownian-ito-process.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-continuous-brownian-ito-process --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-4-def-continuous-brownian-ito-process.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-continuous-brownian-ito-process --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-4-def-continuous-brownian-ito-process.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-continuous-brownian-ito-process --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-4-def-continuous-brownian-ito-process.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 5. `def-quadratic-variation-along-a-partition-sequence` (run)

1. Read `items/def-quadratic-variation-along-a-partition-sequence.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-5-def-quadratic-variation-along-a-partition-sequence.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-variation-along-a-partition-sequence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-5-def-quadratic-variation-along-a-partition-sequence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-variation-along-a-partition-sequence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-5-def-quadratic-variation-along-a-partition-sequence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-variation-along-a-partition-sequence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-5-def-quadratic-variation-along-a-partition-sequence.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 6. `def-quadratic-covariation-of-brownian-ito-processes` (run)

1. Read `items/def-quadratic-covariation-of-brownian-ito-processes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-6-def-quadratic-covariation-of-brownian-ito-processes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-6-def-quadratic-covariation-of-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-6-def-quadratic-covariation-of-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-6-def-quadratic-covariation-of-brownian-ito-processes.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 7. `lem-adapted-continuous-processes-are-progressively-measurable` (run)

1. Read `items/lem-adapted-continuous-processes-are-progressively-measurable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-7-lem-adapted-continuous-processes-are-progressively-measurable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-adapted-continuous-processes-are-progressively-measurable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-7-lem-adapted-continuous-processes-are-progressively-measurable.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-adapted-continuous-processes-are-progressively-measurable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-7-lem-adapted-continuous-processes-are-progressively-measurable.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-adapted-continuous-processes-are-progressively-measurable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-7-lem-adapted-continuous-processes-are-progressively-measurable.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 8. `thm-stopping-an-ito-integral` (run)

1. Read `items/thm-stopping-an-ito-integral.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-8-thm-stopping-an-ito-integral.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-stopping-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-8-thm-stopping-an-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-stopping-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-8-thm-stopping-an-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-stopping-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-8-thm-stopping-an-ito-integral.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 9. `thm-quadratic-variation-of-an-ito-integral` (run)

1. Read `items/thm-quadratic-variation-of-an-ito-integral.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-9-thm-quadratic-variation-of-an-ito-integral.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-variation-of-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-9-thm-quadratic-variation-of-an-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-variation-of-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-9-thm-quadratic-variation-of-an-ito-integral.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-variation-of-an-ito-integral --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-9-thm-quadratic-variation-of-an-ito-integral.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 10. `thm-quadratic-covariation-of-brownian-ito-processes` (run)

1. Read `items/thm-quadratic-covariation-of-brownian-ito-processes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-10-thm-quadratic-covariation-of-brownian-ito-processes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-10-thm-quadratic-covariation-of-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-10-thm-quadratic-covariation-of-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-quadratic-covariation-of-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-10-thm-quadratic-covariation-of-brownian-ito-processes.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 11. `thm-ito-formula-one-dimensional` (run)

1. Read `items/thm-ito-formula-one-dimensional.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-11-thm-ito-formula-one-dimensional.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-formula-one-dimensional --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-11-thm-ito-formula-one-dimensional.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-formula-one-dimensional --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-11-thm-ito-formula-one-dimensional.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-ito-formula-one-dimensional --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-11-thm-ito-formula-one-dimensional.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 12. `lem-brownian-transition-semigroup-property` (run)

1. Read `items/lem-brownian-transition-semigroup-property.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-12-lem-brownian-transition-semigroup-property.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-transition-semigroup-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-12-lem-brownian-transition-semigroup-property.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-transition-semigroup-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-12-lem-brownian-transition-semigroup-property.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-transition-semigroup-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-12-lem-brownian-transition-semigroup-property.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 13. `lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times` (run)

1. Read `items/lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-13-lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-13-lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-13-lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-13-lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 14. `thm-strong-markov-property-of-brownian-motion` (run)

1. Read `items/thm-strong-markov-property-of-brownian-motion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-14-thm-strong-markov-property-of-brownian-motion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-strong-markov-property-of-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-14-thm-strong-markov-property-of-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-strong-markov-property-of-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-14-thm-strong-markov-property-of-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-strong-markov-property-of-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-14-thm-strong-markov-property-of-brownian-motion.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 15. `thm-brownian-reflection-principle` (run)

1. Read `items/thm-brownian-reflection-principle.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-15-thm-brownian-reflection-principle.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-reflection-principle --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-15-thm-brownian-reflection-principle.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-reflection-principle --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-15-thm-brownian-reflection-principle.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-reflection-principle --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-15-thm-brownian-reflection-principle.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 16. `cor-law-of-the-brownian-maximum` (run)

1. Read `items/cor-law-of-the-brownian-maximum.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-16-cor-law-of-the-brownian-maximum.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-law-of-the-brownian-maximum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-16-cor-law-of-the-brownian-maximum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-law-of-the-brownian-maximum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-16-cor-law-of-the-brownian-maximum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-law-of-the-brownian-maximum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-16-cor-law-of-the-brownian-maximum.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 17. `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` (run)

1. Read `items/thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-17-thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-17-thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-17-thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-17-thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 18. `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability` (run)

1. Read `items/cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-18-cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-18-cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-18-cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-18-cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 19. `def-resolvent-and-spectrum-of-a-closed-unbounded-operator` (run)

1. Read `items/def-resolvent-and-spectrum-of-a-closed-unbounded-operator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-19-def-resolvent-and-spectrum-of-a-closed-unbounded-operator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-resolvent-and-spectrum-of-a-closed-unbounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-19-def-resolvent-and-spectrum-of-a-closed-unbounded-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-resolvent-and-spectrum-of-a-closed-unbounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-19-def-resolvent-and-spectrum-of-a-closed-unbounded-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-resolvent-and-spectrum-of-a-closed-unbounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-19-def-resolvent-and-spectrum-of-a-closed-unbounded-operator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 20. `def-unbounded-integral-against-a-pvm` (run)

1. Read `items/def-unbounded-integral-against-a-pvm.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-20-def-unbounded-integral-against-a-pvm.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-unbounded-integral-against-a-pvm --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-20-def-unbounded-integral-against-a-pvm.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-unbounded-integral-against-a-pvm --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-20-def-unbounded-integral-against-a-pvm.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-unbounded-integral-against-a-pvm --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-20-def-unbounded-integral-against-a-pvm.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 21. `lem-unbounded-pvm-integral-is-well-defined-and-closed` (run)

1. Read `items/lem-unbounded-pvm-integral-is-well-defined-and-closed.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-21-lem-unbounded-pvm-integral-is-well-defined-and-closed.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-unbounded-pvm-integral-is-well-defined-and-closed --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-21-lem-unbounded-pvm-integral-is-well-defined-and-closed.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-unbounded-pvm-integral-is-well-defined-and-closed --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-21-lem-unbounded-pvm-integral-is-well-defined-and-closed.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-unbounded-pvm-integral-is-well-defined-and-closed --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-21-lem-unbounded-pvm-integral-is-well-defined-and-closed.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 22. `thm-unbounded-borel-functional-calculus` (run)

1. Read `items/thm-unbounded-borel-functional-calculus.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-22-thm-unbounded-borel-functional-calculus.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-unbounded-borel-functional-calculus --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-22-thm-unbounded-borel-functional-calculus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-unbounded-borel-functional-calculus --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-22-thm-unbounded-borel-functional-calculus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-unbounded-borel-functional-calculus --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-22-thm-unbounded-borel-functional-calculus.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 23. `ex-unbounded-multiplication-operator-and-its-domain` (run)

1. Read `items/ex-unbounded-multiplication-operator-and-its-domain.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-23-ex-unbounded-multiplication-operator-and-its-domain.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-unbounded-multiplication-operator-and-its-domain --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-23-ex-unbounded-multiplication-operator-and-its-domain.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-unbounded-multiplication-operator-and-its-domain --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-23-ex-unbounded-multiplication-operator-and-its-domain.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-unbounded-multiplication-operator-and-its-domain --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-23-ex-unbounded-multiplication-operator-and-its-domain.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 24. `cex-strongly-continuous-unitary-group-need-not-be-norm-continuous` (run)

1. Read `items/cex-strongly-continuous-unitary-group-need-not-be-norm-continuous.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-24-cex-strongly-continuous-unitary-group-need-not-be-norm-continuous.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-strongly-continuous-unitary-group-need-not-be-norm-continuous --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-24-cex-strongly-continuous-unitary-group-need-not-be-norm-continuous.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-strongly-continuous-unitary-group-need-not-be-norm-continuous --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-24-cex-strongly-continuous-unitary-group-need-not-be-norm-continuous.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-strongly-continuous-unitary-group-need-not-be-norm-continuous --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-24-cex-strongly-continuous-unitary-group-need-not-be-norm-continuous.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 25. `cex-symmetric-need-not-be-self-adjoint` (run)

1. Read `items/cex-symmetric-need-not-be-self-adjoint.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-25-cex-symmetric-need-not-be-self-adjoint.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-symmetric-need-not-be-self-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-25-cex-symmetric-need-not-be-self-adjoint.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-symmetric-need-not-be-self-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-25-cex-symmetric-need-not-be-self-adjoint.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cex-symmetric-need-not-be-self-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-25-cex-symmetric-need-not-be-self-adjoint.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 26. `cor-brownian-paths-have-infinite-total-variation-on-every-interval` (run)

1. Read `items/cor-brownian-paths-have-infinite-total-variation-on-every-interval.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-26-cor-brownian-paths-have-infinite-total-variation-on-every-interval.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-total-variation-on-every-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-26-cor-brownian-paths-have-infinite-total-variation-on-every-interval.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-total-variation-on-every-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-26-cor-brownian-paths-have-infinite-total-variation-on-every-interval.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-total-variation-on-every-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-26-cor-brownian-paths-have-infinite-total-variation-on-every-interval.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 27. `cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation` (run)

1. Read `items/cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-27-cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-27-cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-27-cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-27-cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 28. `cor-critical-holder-boundary-at-zero-from-the-brownian-lil` (run)

1. Read `items/cor-critical-holder-boundary-at-zero-from-the-brownian-lil.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-28-cor-critical-holder-boundary-at-zero-from-the-brownian-lil.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-critical-holder-boundary-at-zero-from-the-brownian-lil --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-28-cor-critical-holder-boundary-at-zero-from-the-brownian-lil.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-critical-holder-boundary-at-zero-from-the-brownian-lil --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-28-cor-critical-holder-boundary-at-zero-from-the-brownian-lil.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-critical-holder-boundary-at-zero-from-the-brownian-lil --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-28-cor-critical-holder-boundary-at-zero-from-the-brownian-lil.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 29. `cor-distribution-of-a-one-sided-brownian-hitting-time` (run)

1. Read `items/cor-distribution-of-a-one-sided-brownian-hitting-time.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-29-cor-distribution-of-a-one-sided-brownian-hitting-time.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-distribution-of-a-one-sided-brownian-hitting-time --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-29-cor-distribution-of-a-one-sided-brownian-hitting-time.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-distribution-of-a-one-sided-brownian-hitting-time --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-29-cor-distribution-of-a-one-sided-brownian-hitting-time.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-distribution-of-a-one-sided-brownian-hitting-time --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-29-cor-distribution-of-a-one-sided-brownian-hitting-time.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 30. `thm-continuous-functional-calculus-under-resolvent-convergence` (run)

1. Read `items/thm-continuous-functional-calculus-under-resolvent-convergence.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-30-thm-continuous-functional-calculus-under-resolvent-convergence.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-continuous-functional-calculus-under-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-30-thm-continuous-functional-calculus-under-resolvent-convergence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-continuous-functional-calculus-under-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-30-thm-continuous-functional-calculus-under-resolvent-convergence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-continuous-functional-calculus-under-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-30-thm-continuous-functional-calculus-under-resolvent-convergence.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 31. `lem-laplace-resolvents-of-a-unitary-group` (run)

1. Read `items/lem-laplace-resolvents-of-a-unitary-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-31-lem-laplace-resolvents-of-a-unitary-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-laplace-resolvents-of-a-unitary-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-31-lem-laplace-resolvents-of-a-unitary-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-laplace-resolvents-of-a-unitary-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-31-lem-laplace-resolvents-of-a-unitary-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-laplace-resolvents-of-a-unitary-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-31-lem-laplace-resolvents-of-a-unitary-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 32. `lem-generator-of-a-unitary-group-is-skew-adjoint` (run)

1. Read `items/lem-generator-of-a-unitary-group-is-skew-adjoint.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-32-lem-generator-of-a-unitary-group-is-skew-adjoint.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-generator-of-a-unitary-group-is-skew-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-32-lem-generator-of-a-unitary-group-is-skew-adjoint.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-generator-of-a-unitary-group-is-skew-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-32-lem-generator-of-a-unitary-group-is-skew-adjoint.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-generator-of-a-unitary-group-is-skew-adjoint --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-32-lem-generator-of-a-unitary-group-is-skew-adjoint.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 33. `cor-unitary-groups-converge-under-strong-resolvent-convergence` (run)

1. Read `items/cor-unitary-groups-converge-under-strong-resolvent-convergence.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-33-cor-unitary-groups-converge-under-strong-resolvent-convergence.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-unitary-groups-converge-under-strong-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-33-cor-unitary-groups-converge-under-strong-resolvent-convergence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-unitary-groups-converge-under-strong-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-33-cor-unitary-groups-converge-under-strong-resolvent-convergence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-unitary-groups-converge-under-strong-resolvent-convergence --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-33-cor-unitary-groups-converge-under-strong-resolvent-convergence.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 34. `lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t` (run)

1. Read `items/lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-34-lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-34-lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-34-lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-34-lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 35. `cor-vector-levy-characterization` (run)

1. Read `items/cor-vector-levy-characterization.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-35-cor-vector-levy-characterization.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-vector-levy-characterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-35-cor-vector-levy-characterization.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-vector-levy-characterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-35-cor-vector-levy-characterization.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-vector-levy-characterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-35-cor-vector-levy-characterization.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 36. `thm-multidimensional-ito-formula-for-brownian-driven-processes` (run)

1. Read `items/thm-multidimensional-ito-formula-for-brownian-driven-processes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-36-thm-multidimensional-ito-formula-for-brownian-driven-processes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-multidimensional-ito-formula-for-brownian-driven-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-36-thm-multidimensional-ito-formula-for-brownian-driven-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-multidimensional-ito-formula-for-brownian-driven-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-36-thm-multidimensional-ito-formula-for-brownian-driven-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-multidimensional-ito-formula-for-brownian-driven-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-36-thm-multidimensional-ito-formula-for-brownian-driven-processes.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 37. `thm-space-time-harmonic-functions-yield-brownian-local-martingales` (run)

1. Read `items/thm-space-time-harmonic-functions-yield-brownian-local-martingales.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-37-thm-space-time-harmonic-functions-yield-brownian-local-martingales.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-space-time-harmonic-functions-yield-brownian-local-martingales --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-37-thm-space-time-harmonic-functions-yield-brownian-local-martingales.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-space-time-harmonic-functions-yield-brownian-local-martingales --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-37-thm-space-time-harmonic-functions-yield-brownian-local-martingales.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-space-time-harmonic-functions-yield-brownian-local-martingales --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-37-thm-space-time-harmonic-functions-yield-brownian-local-martingales.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 38. `def-brownian-generator` (run)

1. Read `items/def-brownian-generator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-38-def-brownian-generator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-brownian-generator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-38-def-brownian-generator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-brownian-generator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-38-def-brownian-generator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-brownian-generator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-38-def-brownian-generator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 39. `def-deficiency-subspaces-and-deficiency-indices` (run)

1. Read `items/def-deficiency-subspaces-and-deficiency-indices.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-39-def-deficiency-subspaces-and-deficiency-indices.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-deficiency-subspaces-and-deficiency-indices --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-39-def-deficiency-subspaces-and-deficiency-indices.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-deficiency-subspaces-and-deficiency-indices --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-39-def-deficiency-subspaces-and-deficiency-indices.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-deficiency-subspaces-and-deficiency-indices --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-39-def-deficiency-subspaces-and-deficiency-indices.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 40. `def-discrete-and-essential-spectrum-of-a-self-adjoint-operator` (run)

1. Read `items/def-discrete-and-essential-spectrum-of-a-self-adjoint-operator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-40-def-discrete-and-essential-spectrum-of-a-self-adjoint-operator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-discrete-and-essential-spectrum-of-a-self-adjoint-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-40-def-discrete-and-essential-spectrum-of-a-self-adjoint-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-discrete-and-essential-spectrum-of-a-self-adjoint-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-40-def-discrete-and-essential-spectrum-of-a-self-adjoint-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-discrete-and-essential-spectrum-of-a-self-adjoint-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-40-def-discrete-and-essential-spectrum-of-a-self-adjoint-operator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 41. `def-relative-compactness-with-respect-to-an-operator` (run)

1. Read `items/def-relative-compactness-with-respect-to-an-operator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-41-def-relative-compactness-with-respect-to-an-operator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-relative-compactness-with-respect-to-an-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-41-def-relative-compactness-with-respect-to-an-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-relative-compactness-with-respect-to-an-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-41-def-relative-compactness-with-respect-to-an-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-relative-compactness-with-respect-to-an-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-41-def-relative-compactness-with-respect-to-an-operator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 42. `thm-two-sided-exit-probability-for-brownian-motion` (run)

1. Read `items/thm-two-sided-exit-probability-for-brownian-motion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-42-thm-two-sided-exit-probability-for-brownian-motion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-two-sided-exit-probability-for-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-42-thm-two-sided-exit-probability-for-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-two-sided-exit-probability-for-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-42-thm-two-sided-exit-probability-for-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-two-sided-exit-probability-for-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-42-thm-two-sided-exit-probability-for-brownian-motion.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 43. `ex-brownian-hitting-probability-from-an-exponential-martingale` (run)

1. Read `items/ex-brownian-hitting-probability-from-an-exponential-martingale.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-43-ex-brownian-hitting-probability-from-an-exponential-martingale.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-hitting-probability-from-an-exponential-martingale --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-43-ex-brownian-hitting-probability-from-an-exponential-martingale.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-hitting-probability-from-an-exponential-martingale --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-43-ex-brownian-hitting-probability-from-an-exponential-martingale.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-hitting-probability-from-an-exponential-martingale --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-43-ex-brownian-hitting-probability-from-an-exponential-martingale.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 44. `ex-brownian-path-p-variation-threshold` (run)

1. Read `items/ex-brownian-path-p-variation-threshold.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-44-ex-brownian-path-p-variation-threshold.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-path-p-variation-threshold --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-44-ex-brownian-path-p-variation-threshold.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-path-p-variation-threshold --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-44-ex-brownian-path-p-variation-threshold.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-brownian-path-p-variation-threshold --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-44-ex-brownian-path-p-variation-threshold.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 45. `thm-dynkin-formula-for-bounded-brownian-stopping` (run)

1. Read `items/thm-dynkin-formula-for-bounded-brownian-stopping.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-45-thm-dynkin-formula-for-bounded-brownian-stopping.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-dynkin-formula-for-bounded-brownian-stopping --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-45-thm-dynkin-formula-for-bounded-brownian-stopping.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-dynkin-formula-for-bounded-brownian-stopping --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-45-thm-dynkin-formula-for-bounded-brownian-stopping.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-dynkin-formula-for-bounded-brownian-stopping --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-45-thm-dynkin-formula-for-bounded-brownian-stopping.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 46. `ex-expected-exit-time-from-an-interval-via-ito-formula` (run)

1. Read `items/ex-expected-exit-time-from-an-interval-via-ito-formula.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-46-ex-expected-exit-time-from-an-interval-via-ito-formula.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-expected-exit-time-from-an-interval-via-ito-formula --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-46-ex-expected-exit-time-from-an-interval-via-ito-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-expected-exit-time-from-an-interval-via-ito-formula --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-46-ex-expected-exit-time-from-an-interval-via-ito-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-expected-exit-time-from-an-interval-via-ito-formula --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-46-ex-expected-exit-time-from-an-interval-via-ito-formula.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 47. `ex-exponential-martingale-and-a-brownian-tail-bound` (run)

1. Read `items/ex-exponential-martingale-and-a-brownian-tail-bound.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-47-ex-exponential-martingale-and-a-brownian-tail-bound.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-exponential-martingale-and-a-brownian-tail-bound --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-47-ex-exponential-martingale-and-a-brownian-tail-bound.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-exponential-martingale-and-a-brownian-tail-bound --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-47-ex-exponential-martingale-and-a-brownian-tail-bound.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-exponential-martingale-and-a-brownian-tail-bound --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-47-ex-exponential-martingale-and-a-brownian-tail-bound.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 48. `ex-harmonic-functions-of-planar-brownian-motion` (run)

1. Read `items/ex-harmonic-functions-of-planar-brownian-motion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-48-ex-harmonic-functions-of-planar-brownian-motion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-harmonic-functions-of-planar-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-48-ex-harmonic-functions-of-planar-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-harmonic-functions-of-planar-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-48-ex-harmonic-functions-of-planar-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-harmonic-functions-of-planar-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-48-ex-harmonic-functions-of-planar-brownian-motion.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 49. `ex-integral-of-brownian-motion-against-itself-preview` (run)

1. Read `items/ex-integral-of-brownian-motion-against-itself-preview.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-49-ex-integral-of-brownian-motion-against-itself-preview.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-integral-of-brownian-motion-against-itself-preview --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-49-ex-integral-of-brownian-motion-against-itself-preview.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-integral-of-brownian-motion-against-itself-preview --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-49-ex-integral-of-brownian-motion-against-itself-preview.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-integral-of-brownian-motion-against-itself-preview --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-49-ex-integral-of-brownian-motion-against-itself-preview.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 50. `ex-ito-formula-for-brownian-powers` (run)

1. Read `items/ex-ito-formula-for-brownian-powers.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-50-ex-ito-formula-for-brownian-powers.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-ito-formula-for-brownian-powers --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-50-ex-ito-formula-for-brownian-powers.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-ito-formula-for-brownian-powers --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-50-ex-ito-formula-for-brownian-powers.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-ito-formula-for-brownian-powers --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-50-ex-ito-formula-for-brownian-powers.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 51. `ex-logarithm-of-geometric-brownian-motion` (run)

1. Read `items/ex-logarithm-of-geometric-brownian-motion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-51-ex-logarithm-of-geometric-brownian-motion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-logarithm-of-geometric-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-51-ex-logarithm-of-geometric-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-logarithm-of-geometric-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-51-ex-logarithm-of-geometric-brownian-motion.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-logarithm-of-geometric-brownian-motion --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-51-ex-logarithm-of-geometric-brownian-motion.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 52. `ex-periodic-derivative-and-its-unitary-translation-group` (run)

1. Read `items/ex-periodic-derivative-and-its-unitary-translation-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-52-ex-periodic-derivative-and-its-unitary-translation-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-periodic-derivative-and-its-unitary-translation-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-52-ex-periodic-derivative-and-its-unitary-translation-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-periodic-derivative-and-its-unitary-translation-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-52-ex-periodic-derivative-and-its-unitary-translation-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-periodic-derivative-and-its-unitary-translation-group --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-52-ex-periodic-derivative-and-its-unitary-translation-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 53. `ex-successive-brownian-hits-restart-independent-copies` (run)

1. Read `items/ex-successive-brownian-hits-restart-independent-copies.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-53-ex-successive-brownian-hits-restart-independent-copies.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-successive-brownian-hits-restart-independent-copies --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-53-ex-successive-brownian-hits-restart-independent-copies.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-successive-brownian-hits-restart-independent-copies --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-53-ex-successive-brownian-hits-restart-independent-copies.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-successive-brownian-hits-restart-independent-copies --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-53-ex-successive-brownian-hits-restart-independent-copies.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 54. `lem-brownian-step-potential-resolvent-at-zero` (run)

1. Read `items/lem-brownian-step-potential-resolvent-at-zero.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-54-lem-brownian-step-potential-resolvent-at-zero.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-step-potential-resolvent-at-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-54-lem-brownian-step-potential-resolvent-at-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-step-potential-resolvent-at-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-54-lem-brownian-step-potential-resolvent-at-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-step-potential-resolvent-at-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-54-lem-brownian-step-potential-resolvent-at-zero.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 55. `lem-brownian-zero-set-has-lebesgue-measure-zero` (run)

1. Read `items/lem-brownian-zero-set-has-lebesgue-measure-zero.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-55-lem-brownian-zero-set-has-lebesgue-measure-zero.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-zero-set-has-lebesgue-measure-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-55-lem-brownian-zero-set-has-lebesgue-measure-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-zero-set-has-lebesgue-measure-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-55-lem-brownian-zero-set-has-lebesgue-measure-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-brownian-zero-set-has-lebesgue-measure-zero --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-55-lem-brownian-zero-set-has-lebesgue-measure-zero.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 56. `lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two` (run)

1. Read `items/lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-56-lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-56-lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-56-lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-56-lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 57. `lem-planar-brownian-annular-exit-probability` (run)

1. Read `items/lem-planar-brownian-annular-exit-probability.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-57-lem-planar-brownian-annular-exit-probability.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-planar-brownian-annular-exit-probability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-57-lem-planar-brownian-annular-exit-probability.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-planar-brownian-annular-exit-probability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-57-lem-planar-brownian-annular-exit-probability.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-planar-brownian-annular-exit-probability --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-57-lem-planar-brownian-annular-exit-probability.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 58. `lem-spectral-form-domain-and-core-of-a-semibounded-operator` (run)

1. Read `items/lem-spectral-form-domain-and-core-of-a-semibounded-operator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-58-lem-spectral-form-domain-and-core-of-a-semibounded-operator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-spectral-form-domain-and-core-of-a-semibounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-58-lem-spectral-form-domain-and-core-of-a-semibounded-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-spectral-form-domain-and-core-of-a-semibounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-58-lem-spectral-form-domain-and-core-of-a-semibounded-operator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-spectral-form-domain-and-core-of-a-semibounded-operator --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-58-lem-spectral-form-domain-and-core-of-a-semibounded-operator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 59. `rem-general-semimartingale-calculus-is-outside-this-block` (run)

1. Read `items/rem-general-semimartingale-calculus-is-outside-this-block.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-59-rem-general-semimartingale-calculus-is-outside-this-block.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-general-semimartingale-calculus-is-outside-this-block --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-59-rem-general-semimartingale-calculus-is-outside-this-block.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-general-semimartingale-calculus-is-outside-this-block --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-59-rem-general-semimartingale-calculus-is-outside-this-block.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-general-semimartingale-calculus-is-outside-this-block --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-59-rem-general-semimartingale-calculus-is-outside-this-block.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 60. `rem-ito-versus-stratonovich-boundary` (run)

1. Read `items/rem-ito-versus-stratonovich-boundary.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-60-rem-ito-versus-stratonovich-boundary.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-ito-versus-stratonovich-boundary --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-60-rem-ito-versus-stratonovich-boundary.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-ito-versus-stratonovich-boundary --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-60-rem-ito-versus-stratonovich-boundary.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id rem-ito-versus-stratonovich-boundary --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-60-rem-ito-versus-stratonovich-boundary.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 61. `thm-brownian-filtration-martingale-representation` (run)

1. Read `items/thm-brownian-filtration-martingale-representation.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-61-thm-brownian-filtration-martingale-representation.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-filtration-martingale-representation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-61-thm-brownian-filtration-martingale-representation.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-filtration-martingale-representation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-61-thm-brownian-filtration-martingale-representation.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-filtration-martingale-representation --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-61-thm-brownian-filtration-martingale-representation.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 62. `thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law` (run)

1. Read `items/thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-62-thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-62-thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-62-thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-62-thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 63. `thm-brownian-markov-property` (run)

1. Read `items/thm-brownian-markov-property.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-63-thm-brownian-markov-property.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-markov-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-63-thm-brownian-markov-property.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-markov-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-63-thm-brownian-markov-property.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-markov-property --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-63-thm-brownian-markov-property.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 64. `thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval` (run)

1. Read `items/thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-64-thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-64-thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-64-thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-64-thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 65. `thm-brownian-paths-are-nowhere-differentiable` (run)

1. Read `items/thm-brownian-paths-are-nowhere-differentiable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-65-thm-brownian-paths-are-nowhere-differentiable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-nowhere-differentiable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-65-thm-brownian-paths-are-nowhere-differentiable.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-nowhere-differentiable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-65-thm-brownian-paths-are-nowhere-differentiable.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-paths-are-nowhere-differentiable --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-65-thm-brownian-paths-are-nowhere-differentiable.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 66. `thm-brownian-zero-set-has-no-isolated-points` (run)

1. Read `items/thm-brownian-zero-set-has-no-isolated-points.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-66-thm-brownian-zero-set-has-no-isolated-points.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-zero-set-has-no-isolated-points --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-66-thm-brownian-zero-set-has-no-isolated-points.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-zero-set-has-no-isolated-points --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-66-thm-brownian-zero-set-has-no-isolated-points.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-brownian-zero-set-has-no-isolated-points --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-66-thm-brownian-zero-set-has-no-isolated-points.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 67. `thm-canonical-spectral-type-decomposition` (run)

1. Read `items/thm-canonical-spectral-type-decomposition.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-67-thm-canonical-spectral-type-decomposition.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-canonical-spectral-type-decomposition --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-67-thm-canonical-spectral-type-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-canonical-spectral-type-decomposition --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-67-thm-canonical-spectral-type-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-canonical-spectral-type-decomposition --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-67-thm-canonical-spectral-type-decomposition.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 68. `thm-integration-by-parts-for-brownian-ito-processes` (run)

1. Read `items/thm-integration-by-parts-for-brownian-ito-processes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-68-thm-integration-by-parts-for-brownian-ito-processes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-integration-by-parts-for-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-68-thm-integration-by-parts-for-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-integration-by-parts-for-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-68-thm-integration-by-parts-for-brownian-ito-processes.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-integration-by-parts-for-brownian-ito-processes --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-68-thm-integration-by-parts-for-brownian-ito-processes.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 69. `thm-kato-rellich` (run)

1. Read `items/thm-kato-rellich.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-69-thm-kato-rellich.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-kato-rellich --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-69-thm-kato-rellich.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-kato-rellich --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-69-thm-kato-rellich.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-kato-rellich --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-69-thm-kato-rellich.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 70. `thm-weyl-criterion-for-essential-spectrum` (run)

1. Read `items/thm-weyl-criterion-for-essential-spectrum.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-70-thm-weyl-criterion-for-essential-spectrum.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-criterion-for-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-70-thm-weyl-criterion-for-essential-spectrum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-criterion-for-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-70-thm-weyl-criterion-for-essential-spectrum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-criterion-for-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-70-thm-weyl-criterion-for-essential-spectrum.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 71. `thm-min-max-principle-below-essential-spectrum` (run)

1. Read `items/thm-min-max-principle-below-essential-spectrum.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-71-thm-min-max-principle-below-essential-spectrum.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-min-max-principle-below-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-71-thm-min-max-principle-below-essential-spectrum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-min-max-principle-below-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-71-thm-min-max-principle-below-essential-spectrum.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-min-max-principle-below-essential-spectrum --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-71-thm-min-max-principle-below-essential-spectrum.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 72. `thm-von-neumann-self-adjoint-extension-parameterization` (run)

1. Read `items/thm-von-neumann-self-adjoint-extension-parameterization.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-d-72-thm-von-neumann-self-adjoint-extension-parameterization.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-d-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-von-neumann-self-adjoint-extension-parameterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-72-thm-von-neumann-self-adjoint-extension-parameterization.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-von-neumann-self-adjoint-extension-parameterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-72-thm-von-neumann-self-adjoint-extension-parameterization.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-von-neumann-self-adjoint-extension-parameterization --resolved-by final-adjudicator --group d --queue research/phase-2-remaining-27-step7-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-d-72-thm-von-neumann-self-adjoint-extension-parameterization.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

