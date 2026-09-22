# Owner-authorised escalation resolution 3 — published rank-zero Euler normalisation

Owner directive, 2026-09-20: resolve the Step-7 final-adjudicator escalations in
parallel, one escalation per lane. You are a Sol/xhigh owner-authorised repair
lane, and this one touches published items, so the owner's published-repair rule
applies: the repair is authorised, the certification is still owed.

## The escalation

Two published defects, recorded as deferred owner work in
`research/defect-ledger.jsonl` (ids `phase-2-remaining-27-fa-rank-zero-*`):

- `def-thom-euler-class-of-an-oriented-vector-bundle` — the rank-zero paragraph asserts `u = 1` and `e = 1` for an arbitrary supplied R-orientation, while the definition `e = s*j*u` gives `e = -1` for the reversed generator.
- `thm-thom-isomorphism-for-oriented-vector-bundles` — Proof 4.1 asserts `u = 1` and identity maps at rank zero for an arbitrary supplied R-orientation; for the reversed generator the cup-product map is multiplication by `-1`. The isomorphism conclusion itself survives.
- The final adjudicator's full proofs are the `basis` of the `escalated-to-owner` row for `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` in `research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`, and in the round-1 group-b evidence file.

## Job

Decide and land the minimal consistent repair:

- Read `def-r-oriented-vector-bundle-and-orientation-local-system`, `def-thom-euler-class-of-an-oriented-vector-bundle`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `thm-naturality-and-uniqueness-of-thom-classes` and the repaired run item `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` before editing.
- Choose between restricting the rank-zero statements to the standard unit orientation (equivalently to orientations with `e(0,o) = 1`) and strengthening the defining interface so the rank-zero class is orientation-independent. Keep the four items mutually consistent and keep the reversal convention that `thm-naturality-and-uniqueness-of-thom-classes` allows.
- Verify with authoritative sources (Milnor–Stasheff, Bott–Tu, Hatcher, May or equivalent); record exact URLs and what each supports.
- Apply the minimal repair to the published items.

## Authority and limits

- Published items in this repo live under `items/` and are marked published by the published-repair ledger and their consumers; you may repair only the items named above.
- No judge verdicts, pass stamps, FA terminal receipts or closure files. Do not edit the terminal-resolution ledger, queues, `*.task.md` or `tools/`.
- Other FA lanes are running: keep the edit set minimal and report which receipts your edits freeze.

## Deliverables

1. The repaired items, with quoted witnesses.
2. One licence row per edited item appended to `research/phase-2-remaining-27-step7-published-repairs.jsonl`, matching the existing row's shape exactly (`kind:"repaired"`, `id`, `group:"b"`, `repair_owner_group`, `found_via`, `found_at_stage`, `pre_sha256`, `post_sha256`, `defect`, `correction_basis`, `repair_confidence:1`, `source_urls:[...]`). `found_via` must be an item with a real `keep:false` judge verdict (`thm-naturality-orientation-sign-and-whitney-product-for-euler-classes` is one); `pre_sha256` is the edited item's `pre-step7` hash from `research/phase-2-remaining-27-touches.json`.
3. Evidence at `research/phase-2-remaining-27-escalation-sol-3-rank-zero-euler.md`: the decision, why the rejected option lost, sources with URLs, hashes before/after, focused-check output, and an explicit statement that each changed published item now owes one current judge verdict — a paid Terra call the terminal stage cannot buy, which only the owner can authorise.
4. Focused checks: `node tools/prosecheck.mjs <your files>`, the proof contracts that quote these items, `node tools/depcheck.mjs`, `git diff --check`, and `queue-status` for the round-2 b queue if your edits freeze receipts.
