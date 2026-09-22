# Final Adjudicator queue — phase-2-remaining-27, group b, round 3

This is the exact queue frozen in `research/phase-2-remaining-27-step7-fa-b-round-3.json`. It contains 1 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## Recovery rules (part of this dispatch)

- Before recording any position, run `node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-b-round-3.json`.
- A repair can change the shared page context of an earlier position and freeze its receipt. That is expected, never an escalation.
- Reseal every `stale` position the command lists, in ascending order, before recording a later position: re-read the item against its new context, confirm its bytes still match the recorded `item_sha256`, repair it when the new context invalidates its justification, write the reseal evidence to the printed `--basis-file` path, then run the printed `RESEAL` command.
- Never escalate a context-hash conflict, never skip a stale predecessor, never edit a receipt file by hand.
- Never edit `published/`. When a published supplier is internally inconsistent, or contradicts the convention this item needs, repair the queued run item so it is correct and source-supported under a convention you state, keep the finding and its citations in your evidence file, add one line `PUBLISHED-DEFECT <item>: <exact defect>` there, and continue. Published repairs need a paid judge round this stage cannot buy, so the owner schedules them.
- Escalate only when the queued item is itself published scope, a required existing-supplier edit is outside your authority, or the point cannot be settled from authoritative sources and the library. Record the escalation, then continue with the next position; a queue never stalls on an owner decision.

## 1. `def-reduced-generalized-cohomology-theory` (run)

1. Read `items/def-reduced-generalized-cohomology-theory.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently review the current repair, the Terra verdict and any later licensed correction. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/phase-2-remaining-27-step7-fa-b-1-def-reduced-generalized-cohomology-theory.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Accept or repair the queued licensed fatal item and its own contracts/metadata. You may add only fully proved new dependency lemma chains directly required by that repair, on the same owned page and within the same group, before their consumers.
   Fully author each new lemma and register it in the owning manifest, proof contract and Step-7 scope. The engine supplies hash-bound auditor/adjudicator-created-item certification after the successful dispatch; do not create self-review decisions, judge verdicts or pass stamps for new lemmas. Normal content, dependency, licence, scope and proof-contract gates still apply.
   Existing supplier edits, new theorems, pages or pairs, other scope changes and unresolved mathematics require an owner escalation: record `escalated-to-owner` for the untouched item, then continue with the next position. Never record an escalation over partially repaired bytes. Do not launch another judge or review wave or reopen settled items.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step7-terminal-resolution.mjs queue-status --run phase-2-remaining-27 --queue research/phase-2-remaining-27-step7-fa-b-round-3.json
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-reduced-generalized-cohomology-theory --resolved-by final-adjudicator --group b --queue research/phase-2-remaining-27-step7-fa-b-round-3.json --state-dir .autopilot/phase-2-remaining-27 --disposition accepted-after-review --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-b-1-def-reduced-generalized-cohomology-theory.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-reduced-generalized-cohomology-theory --resolved-by final-adjudicator --group b --queue research/phase-2-remaining-27-step7-fa-b-round-3.json --state-dir .autopilot/phase-2-remaining-27 --disposition repaired --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-b-1-def-reduced-generalized-cohomology-theory.md
node tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27 --id def-reduced-generalized-cohomology-theory --resolved-by final-adjudicator --group b --queue research/phase-2-remaining-27-step7-fa-b-round-3.json --state-dir .autopilot/phase-2-remaining-27 --disposition escalated-to-owner --source-status verified --basis-file research/phase-2-remaining-27-step7-fa-b-1-def-reduced-generalized-cohomology-theory.md
```

The `queue-status` line must show every earlier position `current` first. The record commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.
Use `escalated-to-owner` only while the item still holds its rejected bytes. Its evidence must name the exact unresolved point, the decision the owner owes, and the authorities consulted. The item stays unresolved until the owner decides it.

