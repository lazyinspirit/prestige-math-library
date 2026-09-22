# Final Adjudicator queue — phase-2-remaining-27, group a, round 2

This is the exact queue frozen in `research/phase-2-remaining-27-step7-fa-a-round-2.json`. It contains 77 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## Recovery rules (part of this dispatch)

- Before recording any position, run `node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json`.
- A repair can change the shared page context of an earlier position and freeze its receipt. That is expected, never an escalation.
- Reseal every `stale` position the command lists, in ascending order, before recording a later position: re-read the item against its new context, confirm its bytes still match the recorded `item_sha256`, repair it when the new context invalidates its justification, write the reseal evidence to the printed `--basis-file` path, then run the printed `RESEAL` command.
- Never escalate a context-hash conflict, never skip a stale predecessor, never edit a receipt file by hand.
- Never edit `published/`. When a published supplier is internally inconsistent, or contradicts the convention this item needs, repair the queued run item so it is correct and source-supported under a convention you state, record the published inconsistency in `research/defect-ledger.jsonl` (class `published`), and continue.
- Escalate only when the queued item is itself published scope, a required existing-supplier edit is outside your authority, or the point cannot be settled from authoritative sources and the library. Record the escalation, then continue with the next position; a queue never stalls on an owner decision.

## 1. `def-torus-and-maximal-torus-in-a-compact-lie-group` (run)

1. Read `items/def-torus-and-maximal-torus-in-a-compact-lie-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-1-def-torus-and-maximal-torus-in-a-compact-lie-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-torus-and-maximal-torus-in-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-1-def-torus-and-maximal-torus-in-a-compact-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-torus-and-maximal-torus-in-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-1-def-torus-and-maximal-torus-in-a-compact-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-torus-and-maximal-torus-in-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-1-def-torus-and-maximal-torus-in-a-compact-lie-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 2. `thm-maximal-tori-exist-in-compact-lie-groups` (run)

1. Read `items/thm-maximal-tori-exist-in-compact-lie-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-2-thm-maximal-tori-exist-in-compact-lie-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-maximal-tori-exist-in-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-2-thm-maximal-tori-exist-in-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-maximal-tori-exist-in-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-2-thm-maximal-tori-exist-in-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-maximal-tori-exist-in-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-2-thm-maximal-tori-exist-in-compact-lie-groups.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 3. `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus` (run)

1. Read `items/cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-3-cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-3-cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-3-cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-3-cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 4. `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` (run)

1. Read `items/thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-4-thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-4-thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-4-thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-4-thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 5. `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram` (run)

1. Read `items/prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-5-prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-5-prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-5-prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-5-prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 6. `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers` (run)

1. Read `items/thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-6-thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-6-thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-6-thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-6-thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 7. `thm-classification-of-irreducible-reduced-crystallographic-root-systems` (run)

1. Read `items/thm-classification-of-irreducible-reduced-crystallographic-root-systems.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-7-thm-classification-of-irreducible-reduced-crystallographic-root-systems.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-irreducible-reduced-crystallographic-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-7-thm-classification-of-irreducible-reduced-crystallographic-root-systems.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-irreducible-reduced-crystallographic-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-7-thm-classification-of-irreducible-reduced-crystallographic-root-systems.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-irreducible-reduced-crystallographic-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-7-thm-classification-of-irreducible-reduced-crystallographic-root-systems.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 8. `thm-existence-of-each-classified-root-system` (run)

1. Read `items/thm-existence-of-each-classified-root-system.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-8-thm-existence-of-each-classified-root-system.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-existence-of-each-classified-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-8-thm-existence-of-each-classified-root-system.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-existence-of-each-classified-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-8-thm-existence-of-each-classified-root-system.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-existence-of-each-classified-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-8-thm-existence-of-each-classified-root-system.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 9. `thm-serre-presentation-theorem` (run)

1. Read `items/thm-serre-presentation-theorem.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-9-thm-serre-presentation-theorem.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-serre-presentation-theorem --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-9-thm-serre-presentation-theorem.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-serre-presentation-theorem --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-9-thm-serre-presentation-theorem.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-serre-presentation-theorem --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-9-thm-serre-presentation-theorem.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 10. `prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero` (run)

1. Read `items/prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-10-prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-10-prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-10-prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-10-prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 11. `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k` (run)

1. Read `items/prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-11-prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-11-prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-11-prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-11-prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 12. `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space` (run)

1. Read `items/thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-12-thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-12-thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-12-thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-12-thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 13. `cor-normalized-haar-measure-on-a-compact-lie-group` (run)

1. Read `items/cor-normalized-haar-measure-on-a-compact-lie-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-13-cor-normalized-haar-measure-on-a-compact-lie-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-normalized-haar-measure-on-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-13-cor-normalized-haar-measure-on-a-compact-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-normalized-haar-measure-on-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-13-cor-normalized-haar-measure-on-a-compact-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-normalized-haar-measure-on-a-compact-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-13-cor-normalized-haar-measure-on-a-compact-lie-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 14. `prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics` (run)

1. Read `items/prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-14-prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-14-prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-14-prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-14-prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 15. `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group` (run)

1. Read `items/cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-15-cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-15-cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-15-cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-15-cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 16. `thm-schur-orthogonality-for-compact-lie-groups` (run)

1. Read `items/thm-schur-orthogonality-for-compact-lie-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-16-thm-schur-orthogonality-for-compact-lie-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-schur-orthogonality-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-16-thm-schur-orthogonality-for-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-schur-orthogonality-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-16-thm-schur-orthogonality-for-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-schur-orthogonality-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-16-thm-schur-orthogonality-for-compact-lie-groups.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 17. `thm-conjugacy-of-maximal-tori` (run)

1. Read `items/thm-conjugacy-of-maximal-tori.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-17-thm-conjugacy-of-maximal-tori.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-conjugacy-of-maximal-tori --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-17-thm-conjugacy-of-maximal-tori.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-conjugacy-of-maximal-tori --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-17-thm-conjugacy-of-maximal-tori.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-conjugacy-of-maximal-tori --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-17-thm-conjugacy-of-maximal-tori.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 18. `def-roots-of-a-compact-connected-lie-group` (run)

1. Read `items/def-roots-of-a-compact-connected-lie-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-18-def-roots-of-a-compact-connected-lie-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-roots-of-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-18-def-roots-of-a-compact-connected-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-roots-of-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-18-def-roots-of-a-compact-connected-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-roots-of-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-18-def-roots-of-a-compact-connected-lie-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 19. `thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part` (run)

1. Read `items/thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-19-thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-19-thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-19-thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-19-thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 20. `thm-compact-group-weyl-group-is-finite` (run)

1. Read `items/thm-compact-group-weyl-group-is-finite.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-20-thm-compact-group-weyl-group-is-finite.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-weyl-group-is-finite --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-20-thm-compact-group-weyl-group-is-finite.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-weyl-group-is-finite --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-20-thm-compact-group-weyl-group-is-finite.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-group-weyl-group-is-finite --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-20-thm-compact-group-weyl-group-is-finite.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 21. `thm-analytic-and-root-system-weyl-groups-agree` (run)

1. Read `items/thm-analytic-and-root-system-weyl-groups-agree.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-21-thm-analytic-and-root-system-weyl-groups-agree.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-analytic-and-root-system-weyl-groups-agree --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-21-thm-analytic-and-root-system-weyl-groups-agree.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-analytic-and-root-system-weyl-groups-agree --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-21-thm-analytic-and-root-system-weyl-groups-agree.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-analytic-and-root-system-weyl-groups-agree --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-21-thm-analytic-and-root-system-weyl-groups-agree.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 22. `def-dominant-integrable-highest-weight-cyclic-module` (run)

1. Read `items/def-dominant-integrable-highest-weight-cyclic-module.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-22-def-dominant-integrable-highest-weight-cyclic-module.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-dominant-integrable-highest-weight-cyclic-module --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-22-def-dominant-integrable-highest-weight-cyclic-module.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-dominant-integrable-highest-weight-cyclic-module --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-22-def-dominant-integrable-highest-weight-cyclic-module.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-dominant-integrable-highest-weight-cyclic-module --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-22-def-dominant-integrable-highest-weight-cyclic-module.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 23. `prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group` (run)

1. Read `items/prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-23-prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-23-prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-23-prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-23-prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 24. `thm-cartan-killing-classification-of-complex-simple-lie-algebras` (run)

1. Read `items/thm-cartan-killing-classification-of-complex-simple-lie-algebras.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-24-thm-cartan-killing-classification-of-complex-simple-lie-algebras.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-killing-classification-of-complex-simple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-24-thm-cartan-killing-classification-of-complex-simple-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-killing-classification-of-complex-simple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-24-thm-cartan-killing-classification-of-complex-simple-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cartan-killing-classification-of-complex-simple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-24-thm-cartan-killing-classification-of-complex-simple-lie-algebras.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 25. `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems` (run)

1. Read `items/thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-25-thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-25-thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-25-thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-25-thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 26. `thm-compact-connected-lie-groups-are-classified-by-root-data` (run)

1. Read `items/thm-compact-connected-lie-groups-are-classified-by-root-data.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-26-thm-compact-connected-lie-groups-are-classified-by-root-data.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-lie-groups-are-classified-by-root-data --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-26-thm-compact-connected-lie-groups-are-classified-by-root-data.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-lie-groups-are-classified-by-root-data --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-26-thm-compact-connected-lie-groups-are-classified-by-root-data.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-compact-connected-lie-groups-are-classified-by-root-data --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-26-thm-compact-connected-lie-groups-are-classified-by-root-data.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 27. `thm-highest-weight-classification-for-a-compact-connected-lie-group` (run)

1. Read `items/thm-highest-weight-classification-for-a-compact-connected-lie-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-27-thm-highest-weight-classification-for-a-compact-connected-lie-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-highest-weight-classification-for-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-27-thm-highest-weight-classification-for-a-compact-connected-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-highest-weight-classification-for-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-27-thm-highest-weight-classification-for-a-compact-connected-lie-group.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-highest-weight-classification-for-a-compact-connected-lie-group --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-27-thm-highest-weight-classification-for-a-compact-connected-lie-group.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 28. `lem-weyl-denominator-and-anti-invariant-orbit-sum-basis` (run)

1. Read `items/lem-weyl-denominator-and-anti-invariant-orbit-sum-basis.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-28-lem-weyl-denominator-and-anti-invariant-orbit-sum-basis.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-denominator-and-anti-invariant-orbit-sum-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-28-lem-weyl-denominator-and-anti-invariant-orbit-sum-basis.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-denominator-and-anti-invariant-orbit-sum-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-28-lem-weyl-denominator-and-anti-invariant-orbit-sum-basis.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-denominator-and-anti-invariant-orbit-sum-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-28-lem-weyl-denominator-and-anti-invariant-orbit-sum-basis.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 29. `thm-weyl-integration-formula` (run)

1. Read `items/thm-weyl-integration-formula.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-29-thm-weyl-integration-formula.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-integration-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-29-thm-weyl-integration-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-integration-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-29-thm-weyl-integration-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-weyl-integration-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-29-thm-weyl-integration-formula.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 30. `lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator` (run)

1. Read `items/lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-30-lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-30-lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-30-lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-30-lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 31. `prop-central-quotients-correspond-to-intermediate-character-lattices` (run)

1. Read `items/prop-central-quotients-correspond-to-intermediate-character-lattices.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-31-prop-central-quotients-correspond-to-intermediate-character-lattices.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-central-quotients-correspond-to-intermediate-character-lattices --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-31-prop-central-quotients-correspond-to-intermediate-character-lattices.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-central-quotients-correspond-to-intermediate-character-lattices --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-31-prop-central-quotients-correspond-to-intermediate-character-lattices.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-central-quotients-correspond-to-intermediate-character-lattices --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-31-prop-central-quotients-correspond-to-intermediate-character-lattices.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 32. `cor-representation-ring-has-the-dominant-character-basis` (run)

1. Read `items/cor-representation-ring-has-the-dominant-character-basis.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-32-cor-representation-ring-has-the-dominant-character-basis.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-representation-ring-has-the-dominant-character-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-32-cor-representation-ring-has-the-dominant-character-basis.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-representation-ring-has-the-dominant-character-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-32-cor-representation-ring-has-the-dominant-character-basis.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-representation-ring-has-the-dominant-character-basis --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-32-cor-representation-ring-has-the-dominant-character-basis.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 33. `cor-zero-level-symplectic-reduction-and-dimension-formula` (run)

1. Read `items/cor-zero-level-symplectic-reduction-and-dimension-formula.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-33-cor-zero-level-symplectic-reduction-and-dimension-formula.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-zero-level-symplectic-reduction-and-dimension-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-33-cor-zero-level-symplectic-reduction-and-dimension-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-zero-level-symplectic-reduction-and-dimension-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-33-cor-zero-level-symplectic-reduction-and-dimension-formula.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id cor-zero-level-symplectic-reduction-and-dimension-formula --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-33-cor-zero-level-symplectic-reduction-and-dimension-formula.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 34. `thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one` (run)

1. Read `items/thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-34-thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-34-thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-34-thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-34-thm-every-real-cartan-subalgebra-is-conjugate-to-a-theta-stable-one.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 35. `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification` (run)

1. Read `items/thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-35-thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-35-thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-35-thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-35-thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 36. `def-vogan-diagram` (run)

1. Read `items/def-vogan-diagram.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-36-def-vogan-diagram.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-vogan-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-36-def-vogan-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-vogan-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-36-def-vogan-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-vogan-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-36-def-vogan-diagram.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 37. `def-satake-diagram` (run)

1. Read `items/def-satake-diagram.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-37-def-satake-diagram.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-satake-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-37-def-satake-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-satake-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-37-def-satake-diagram.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-satake-diagram --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-37-def-satake-diagram.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 38. `prop-root-systems-of-the-classical-complex-lie-algebras` (run)

1. Read `items/prop-root-systems-of-the-classical-complex-lie-algebras.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-38-prop-root-systems-of-the-classical-complex-lie-algebras.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-systems-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-38-prop-root-systems-of-the-classical-complex-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-systems-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-38-prop-root-systems-of-the-classical-complex-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-root-systems-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-38-prop-root-systems-of-the-classical-complex-lie-algebras.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 39. `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` (run)

1. Read `items/ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-39-ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-39-ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-39-ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-39-ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 40. `ex-a-nonreduced-bc-root-system-from-a-real-form` (run)

1. Read `items/ex-a-nonreduced-bc-root-system-from-a-real-form.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-40-ex-a-nonreduced-bc-root-system-from-a-real-form.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-a-nonreduced-bc-root-system-from-a-real-form --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-40-ex-a-nonreduced-bc-root-system-from-a-real-form.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-a-nonreduced-bc-root-system-from-a-real-form --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-40-ex-a-nonreduced-bc-root-system-from-a-real-form.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-a-nonreduced-bc-root-system-from-a-real-form --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-40-ex-a-nonreduced-bc-root-system-from-a-real-form.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 41. `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle` (run)

1. Read `items/ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-41-ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-41-ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-41-ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-41-ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 42. `ex-cotangent-reduction-for-a-principal-bundle-at-zero` (run)

1. Read `items/ex-cotangent-reduction-for-a-principal-bundle-at-zero.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-42-ex-cotangent-reduction-for-a-principal-bundle-at-zero.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-cotangent-reduction-for-a-principal-bundle-at-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-42-ex-cotangent-reduction-for-a-principal-bundle-at-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-cotangent-reduction-for-a-principal-bundle-at-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-42-ex-cotangent-reduction-for-a-principal-bundle-at-zero.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-cotangent-reduction-for-a-principal-bundle-at-zero --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-42-ex-cotangent-reduction-for-a-principal-bundle-at-zero.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 43. `ex-diagonal-action-and-addition-of-angular-momenta` (run)

1. Read `items/ex-diagonal-action-and-addition-of-angular-momenta.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-43-ex-diagonal-action-and-addition-of-angular-momenta.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-diagonal-action-and-addition-of-angular-momenta --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-43-ex-diagonal-action-and-addition-of-angular-momenta.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-diagonal-action-and-addition-of-angular-momenta --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-43-ex-diagonal-action-and-addition-of-angular-momenta.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-diagonal-action-and-addition-of-angular-momenta --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-43-ex-diagonal-action-and-addition-of-angular-momenta.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 44. `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces` (run)

1. Read `items/lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-44-lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-44-lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-44-lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-44-lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 45. `thm-peter-weyl-for-compact-lie-groups` (run)

1. Read `items/thm-peter-weyl-for-compact-lie-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-45-thm-peter-weyl-for-compact-lie-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-peter-weyl-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-45-thm-peter-weyl-for-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-peter-weyl-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-45-thm-peter-weyl-for-compact-lie-groups.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-peter-weyl-for-compact-lie-groups --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-45-thm-peter-weyl-for-compact-lie-groups.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 46. `ex-fourier-series-on-a-torus-as-peter-weyl` (run)

1. Read `items/ex-fourier-series-on-a-torus-as-peter-weyl.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-46-ex-fourier-series-on-a-torus-as-peter-weyl.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-fourier-series-on-a-torus-as-peter-weyl --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-46-ex-fourier-series-on-a-torus-as-peter-weyl.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-fourier-series-on-a-torus-as-peter-weyl --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-46-ex-fourier-series-on-a-torus-as-peter-weyl.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-fourier-series-on-a-torus-as-peter-weyl --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-46-ex-fourier-series-on-a-torus-as-peter-weyl.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 47. `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` (run)

1. Read `items/ex-hyperbolic-space-as-so-zero-n-one-mod-so-n.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-47-ex-hyperbolic-space-as-so-zero-n-one-mod-so-n.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-hyperbolic-space-as-so-zero-n-one-mod-so-n --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-47-ex-hyperbolic-space-as-so-zero-n-one-mod-so-n.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-hyperbolic-space-as-so-zero-n-one-mod-so-n --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-47-ex-hyperbolic-space-as-so-zero-n-one-mod-so-n.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-hyperbolic-space-as-so-zero-n-one-mod-so-n --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-47-ex-hyperbolic-space-as-so-zero-n-one-mod-so-n.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 48. `ex-normalized-haar-measure-on-a-torus` (run)

1. Read `items/ex-normalized-haar-measure-on-a-torus.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-48-ex-normalized-haar-measure-on-a-torus.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-normalized-haar-measure-on-a-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-48-ex-normalized-haar-measure-on-a-torus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-normalized-haar-measure-on-a-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-48-ex-normalized-haar-measure-on-a-torus.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-normalized-haar-measure-on-a-torus --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-48-ex-normalized-haar-measure-on-a-torus.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 49. `ex-polar-cartan-decomposition-of-sl-n-r` (run)

1. Read `items/ex-polar-cartan-decomposition-of-sl-n-r.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-49-ex-polar-cartan-decomposition-of-sl-n-r.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-polar-cartan-decomposition-of-sl-n-r --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-49-ex-polar-cartan-decomposition-of-sl-n-r.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-polar-cartan-decomposition-of-sl-n-r --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-49-ex-polar-cartan-decomposition-of-sl-n-r.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-polar-cartan-decomposition-of-sl-n-r --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-49-ex-polar-cartan-decomposition-of-sl-n-r.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 50. `prop-invariant-hamiltonians-descend-to-reduced-hamiltonians` (run)

1. Read `items/prop-invariant-hamiltonians-descend-to-reduced-hamiltonians.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-50-prop-invariant-hamiltonians-descend-to-reduced-hamiltonians.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-invariant-hamiltonians-descend-to-reduced-hamiltonians --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-50-prop-invariant-hamiltonians-descend-to-reduced-hamiltonians.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-invariant-hamiltonians-descend-to-reduced-hamiltonians --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-50-prop-invariant-hamiltonians-descend-to-reduced-hamiltonians.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-invariant-hamiltonians-descend-to-reduced-hamiltonians --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-50-prop-invariant-hamiltonians-descend-to-reduced-hamiltonians.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 51. `ex-reduced-harmonic-oscillator-flow-on-projective-space` (run)

1. Read `items/ex-reduced-harmonic-oscillator-flow-on-projective-space.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-51-ex-reduced-harmonic-oscillator-flow-on-projective-space.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-reduced-harmonic-oscillator-flow-on-projective-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-51-ex-reduced-harmonic-oscillator-flow-on-projective-space.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-reduced-harmonic-oscillator-flow-on-projective-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-51-ex-reduced-harmonic-oscillator-flow-on-projective-space.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-reduced-harmonic-oscillator-flow-on-projective-space --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-51-ex-reduced-harmonic-oscillator-flow-on-projective-space.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 52. `ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case` (run)

1. Read `items/ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-52-ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-52-ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-52-ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-52-ex-schur-orthogonality-for-a-finite-group-as-a-zero-dimensional-compact-case.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 53. `ex-serre-relations-for-a-two-recover-sl-three` (run)

1. Read `items/ex-serre-relations-for-a-two-recover-sl-three.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-53-ex-serre-relations-for-a-two-recover-sl-three.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-serre-relations-for-a-two-recover-sl-three --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-53-ex-serre-relations-for-a-two-recover-sl-three.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-serre-relations-for-a-two-recover-sl-three --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-53-ex-serre-relations-for-a-two-recover-sl-three.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-serre-relations-for-a-two-recover-sl-three --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-53-ex-serre-relations-for-a-two-recover-sl-three.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 54. `ex-shifting-trick-for-a-nonzero-coadjoint-orbit` (run)

1. Read `items/ex-shifting-trick-for-a-nonzero-coadjoint-orbit.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-54-ex-shifting-trick-for-a-nonzero-coadjoint-orbit.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-shifting-trick-for-a-nonzero-coadjoint-orbit --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-54-ex-shifting-trick-for-a-nonzero-coadjoint-orbit.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-shifting-trick-for-a-nonzero-coadjoint-orbit --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-54-ex-shifting-trick-for-a-nonzero-coadjoint-orbit.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-shifting-trick-for-a-nonzero-coadjoint-orbit --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-54-ex-shifting-trick-for-a-nonzero-coadjoint-orbit.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 55. `ex-standard-and-dual-representations-of-sl-n-by-highest-weights` (run)

1. Read `items/ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-55-ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-standard-and-dual-representations-of-sl-n-by-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-55-ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-standard-and-dual-representations-of-sl-n-by-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-55-ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-standard-and-dual-representations-of-sl-n-by-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-55-ex-standard-and-dual-representations-of-sl-n-by-highest-weights.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 56. `ex-the-adjoint-representation-and-the-highest-root` (run)

1. Read `items/ex-the-adjoint-representation-and-the-highest-root.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-56-ex-the-adjoint-representation-and-the-highest-root.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-adjoint-representation-and-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-56-ex-the-adjoint-representation-and-the-highest-root.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-adjoint-representation-and-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-56-ex-the-adjoint-representation-and-the-highest-root.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-adjoint-representation-and-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-56-ex-the-adjoint-representation-and-the-highest-root.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 57. `prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights` (run)

1. Read `items/prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-57-prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-57-prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-57-prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-57-prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 58. `ex-the-peter-weyl-decomposition-of-l-two-su-two` (run)

1. Read `items/ex-the-peter-weyl-decomposition-of-l-two-su-two.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-58-ex-the-peter-weyl-decomposition-of-l-two-su-two.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-peter-weyl-decomposition-of-l-two-su-two --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-58-ex-the-peter-weyl-decomposition-of-l-two-su-two.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-peter-weyl-decomposition-of-l-two-su-two --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-58-ex-the-peter-weyl-decomposition-of-l-two-su-two.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-the-peter-weyl-decomposition-of-l-two-su-two --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-58-ex-the-peter-weyl-decomposition-of-l-two-su-two.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 59. `thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence` (run)

1. Read `items/thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-59-thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-59-thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-59-thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-59-thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 60. `thm-classification-of-real-forms-by-vogan-diagrams` (run)

1. Read `items/thm-classification-of-real-forms-by-vogan-diagrams.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-60-thm-classification-of-real-forms-by-vogan-diagrams.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-forms-by-vogan-diagrams --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-60-thm-classification-of-real-forms-by-vogan-diagrams.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-forms-by-vogan-diagrams --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-60-thm-classification-of-real-forms-by-vogan-diagrams.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-forms-by-vogan-diagrams --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-60-thm-classification-of-real-forms-by-vogan-diagrams.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 61. `thm-complexification-dichotomy-for-a-real-simple-lie-algebra` (run)

1. Read `items/thm-complexification-dichotomy-for-a-real-simple-lie-algebra.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-61-thm-complexification-dichotomy-for-a-real-simple-lie-algebra.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-complexification-dichotomy-for-a-real-simple-lie-algebra --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-61-thm-complexification-dichotomy-for-a-real-simple-lie-algebra.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-complexification-dichotomy-for-a-real-simple-lie-algebra --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-61-thm-complexification-dichotomy-for-a-real-simple-lie-algebra.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-complexification-dichotomy-for-a-real-simple-lie-algebra --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-61-thm-complexification-dichotomy-for-a-real-simple-lie-algebra.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 62. `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications` (run)

1. Read `items/thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-62-thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-62-thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-62-thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-62-thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 63. `thm-classification-of-real-semisimple-lie-algebras` (run)

1. Read `items/thm-classification-of-real-semisimple-lie-algebras.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-63-thm-classification-of-real-semisimple-lie-algebras.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-semisimple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-63-thm-classification-of-real-semisimple-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-semisimple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-63-thm-classification-of-real-semisimple-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-classification-of-real-semisimple-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-63-thm-classification-of-real-semisimple-lie-algebras.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 64. `prop-classical-real-forms-of-the-classical-complex-lie-algebras` (run)

1. Read `items/prop-classical-real-forms-of-the-classical-complex-lie-algebras.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-64-prop-classical-real-forms-of-the-classical-complex-lie-algebras.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-classical-real-forms-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-64-prop-classical-real-forms-of-the-classical-complex-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-classical-real-forms-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-64-prop-classical-real-forms-of-the-classical-complex-lie-algebras.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-classical-real-forms-of-the-classical-complex-lie-algebras --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-64-prop-classical-real-forms-of-the-classical-complex-lie-algebras.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 65. `ex-vogan-diagrams-for-real-forms-of-sl-three-c` (run)

1. Read `items/ex-vogan-diagrams-for-real-forms-of-sl-three-c.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-65-ex-vogan-diagrams-for-real-forms-of-sl-three-c.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-vogan-diagrams-for-real-forms-of-sl-three-c --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-65-ex-vogan-diagrams-for-real-forms-of-sl-three-c.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-vogan-diagrams-for-real-forms-of-sl-three-c --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-65-ex-vogan-diagrams-for-real-forms-of-sl-three-c.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-vogan-diagrams-for-real-forms-of-sl-three-c --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-65-ex-vogan-diagrams-for-real-forms-of-sl-three-c.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 66. `ex-weighted-circle-actions-and-weighted-projective-singular-quotients` (run)

1. Read `items/ex-weighted-circle-actions-and-weighted-projective-singular-quotients.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-66-ex-weighted-circle-actions-and-weighted-projective-singular-quotients.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weighted-circle-actions-and-weighted-projective-singular-quotients --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-66-ex-weighted-circle-actions-and-weighted-projective-singular-quotients.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weighted-circle-actions-and-weighted-projective-singular-quotients --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-66-ex-weighted-circle-actions-and-weighted-projective-singular-quotients.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id ex-weighted-circle-actions-and-weighted-projective-singular-quotients --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-66-ex-weighted-circle-actions-and-weighted-projective-singular-quotients.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 67. `prop-real-cartan-subalgebras-need-not-be-conjugate` (run)

1. Read `items/prop-real-cartan-subalgebras-need-not-be-conjugate.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-67-prop-real-cartan-subalgebras-need-not-be-conjugate.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-real-cartan-subalgebras-need-not-be-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-67-prop-real-cartan-subalgebras-need-not-be-conjugate.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-real-cartan-subalgebras-need-not-be-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-67-prop-real-cartan-subalgebras-need-not-be-conjugate.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-real-cartan-subalgebras-need-not-be-conjugate --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-67-prop-real-cartan-subalgebras-need-not-be-conjugate.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 68. `thm-global-iwasawa-decomposition` (run)

1. Read `items/thm-global-iwasawa-decomposition.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-68-thm-global-iwasawa-decomposition.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-global-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-68-thm-global-iwasawa-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-global-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-68-thm-global-iwasawa-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-global-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-68-thm-global-iwasawa-decomposition.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 69. `fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k` (run)

1. Read `items/fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-69-fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-69-fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-69-fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-69-fs-global-cartan-and-iwasawa-decompositions-hold-for-every-nonlinear-cover-without-modified-k.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 70. `fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant` (run)

1. Read `items/fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-70-fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-70-fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-70-fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-70-fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 71. `fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition` (run)

1. Read `items/fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-71-fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-71-fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-71-fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-71-fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 72. `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system` (run)

1. Read `items/prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-72-prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-72-prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-72-prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-72-prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 73. `prop-reduction-commutes-with-products` (run)

1. Read `items/prop-reduction-commutes-with-products.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-73-prop-reduction-commutes-with-products.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-reduction-commutes-with-products --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-73-prop-reduction-commutes-with-products.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-reduction-commutes-with-products --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-73-prop-reduction-commutes-with-products.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-reduction-commutes-with-products --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-73-prop-reduction-commutes-with-products.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 74. `prop-the-adjoint-representation-has-highest-weight-the-highest-root` (run)

1. Read `items/prop-the-adjoint-representation-has-highest-weight-the-highest-root.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-74-prop-the-adjoint-representation-has-highest-weight-the-highest-root.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-the-adjoint-representation-has-highest-weight-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-74-prop-the-adjoint-representation-has-highest-weight-the-highest-root.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-the-adjoint-representation-has-highest-weight-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-74-prop-the-adjoint-representation-has-highest-weight-the-highest-root.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-the-adjoint-representation-has-highest-weight-the-highest-root --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-74-prop-the-adjoint-representation-has-highest-weight-the-highest-root.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 75. `prop-top-highest-weight-summand-in-a-tensor-product` (run)

1. Read `items/prop-top-highest-weight-summand-in-a-tensor-product.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-75-prop-top-highest-weight-summand-in-a-tensor-product.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-top-highest-weight-summand-in-a-tensor-product --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-75-prop-top-highest-weight-summand-in-a-tensor-product.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-top-highest-weight-summand-in-a-tensor-product --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-75-prop-top-highest-weight-summand-in-a-tensor-product.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-top-highest-weight-summand-in-a-tensor-product --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-75-prop-top-highest-weight-summand-in-a-tensor-product.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 76. `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition` (run)

1. Read `items/prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-76-prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-76-prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-76-prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-76-prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

## 77. `thm-reduction-in-stages-for-free-proper-regular-actions` (run)

1. Read `items/thm-reduction-in-stages-for-free-proper-regular-actions.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-a-77-thm-reduction-in-stages-for-free-proper-regular-actions.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-a-round-2.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-reduction-in-stages-for-free-proper-regular-actions --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-77-thm-reduction-in-stages-for-free-proper-regular-actions.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-reduction-in-stages-for-free-proper-regular-actions --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-77-thm-reduction-in-stages-for-free-proper-regular-actions.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id thm-reduction-in-stages-for-free-proper-regular-actions --resolved-by final-adjudicator --group a --queue research/phase-2-remaining-27-step7-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-a-77-thm-reduction-in-stages-for-free-proper-regular-actions.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

