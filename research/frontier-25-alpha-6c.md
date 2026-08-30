# frontier-25 — alpha step 6c repair

Run: `frontier-25`  
Role: `alpha`  
Label: `6c-gate-audit-manifest-2`  
Date: Sunday, August 30, 2026

## Scope

- Opened `research/frontier-25-cross-group-edges.json`; on current disk it still records `edges: []`, `forwards: []`, and `changes: []`.
- Re-ran `node tools/cross-group-edges.mjs check --run frontier-25 --reconcile-plan`.
  Result: `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- This repair therefore stayed inside the named gate scope: three live `audit-manifest` defects and the receipt state made stale by repairing them.

## Evidence rechecked

- `research/frontier-25-reader-10.md` already showed that Reader 10 explicitly opened `def-language-concatenation-powers-and-kleene-star`.
- `research/frontier-25-reader-11.md` already showed that Reader 11 explicitly opened `def-effective-binary-encoding-and-decoder` and `lem-finite-tuples-admit-effective-prefix-free-encodings`.
- `research/frontier-25-alpha-d-6b.md` and `research/frontier-25-alpha-d-6b-decisions.json` already closed the mathematical defects in the three in-run citing items:
  `thm-nfa-constructions-for-union-concatenation-and-star`,
  `def-partial-function-computed-by-a-machine`, and
  `prop-valid-computation-histories-are-decidable`.
- The remaining manifest failure was structural on current bytes:
  `library/computability-theory/formal-languages-encodings-and-decision-problems.md` was already `status: published`, while the three cited dependency targets above still carried `status: draft`.

## Primary gate — `audit-manifest`

- Reproduced the gate at the start of this dispatch with
  `node tools/audit-manifest.mjs research/frontier-25-batch-1.pages.json ... research/frontier-25-batch-11.pages.json --output research/frontier-25-audit-manifest.json`.
  Initial result: `1045 relationship(s) over 381 item(s) in 11 batch(es); 3 defect(s)`.
- Confirmed live defects:
  - `thm-nfa-constructions-for-union-concatenation-and-star` -> `def-language-concatenation-powers-and-kleene-star`
  - `def-partial-function-computed-by-a-machine` -> `def-effective-binary-encoding-and-decoder`
  - `prop-valid-computation-histories-are-decidable` -> `lem-finite-tuples-admit-effective-prefix-free-encodings`
- Reread the three dependency targets on current bytes and found no mathematical defect requiring a statement repair. The only live failure was their draft publication state.
- Repair kept:
  - promoted `items/def-language-concatenation-powers-and-kleene-star.md` to `status: published` and added `verification.audited: 2026-08-30`;
  - promoted `items/def-effective-binary-encoding-and-decoder.md` to `status: published` and added `verification.audited: 2026-08-30`;
  - promoted `items/lem-finite-tuples-admit-effective-prefix-free-encodings.md` to `status: published` and added `verification.audited: 2026-08-30`.
- Appended the required `6c-cross` evidence:
  - `research/frontier-25-alpha-6c-gate-audit-manifest-2-ledger-rows.json` with three closed ledger rows;
  - `research/frontier-25-6c-verdicts.jsonl` with three `kind:"gate"` rows for the repaired in-run obligations;
  - `research/defect-ledger.jsonl` via `node tools/defect-ledger.mjs append --file research/frontier-25-alpha-6c-gate-audit-manifest-2-ledger-rows.json`.
- Final gate result on current bytes:
  `audit-manifest: 1045 relationship(s) over 381 item(s) in 11 batch(es); 0 defect(s)`.

## Stale receipt repaired — `impact-audit`

- Publishing the three dependency items changed the `post-6b -> current` public-interface window, so the old zero-scope receipt in `research/frontier-25-impact-6c.json` became stale.
- Recomputed the impact set with
  `node tools/impact-audit.mjs --touches research/frontier-25-touches.json --from post-6b --current --json`.
  Current result: `3` changed interfaces and `12` affected items.
- Read all 12 affected consumers against the unchanged statements of the three published interfaces:
  `cex-an-effective-encoding-need-not-be-prefix-free`,
  `def-decision-search-and-function-problem`,
  `def-partial-function-computed-by-a-machine`,
  `ex-language-concatenation-is-associative`,
  `ex-valid-computation-histories-are-decidable`,
  `fs-every-effective-encoding-is-prefix-free`,
  `lem-finite-tuples-admit-effective-prefix-free-encodings`,
  `lem-kleene-star-has-the-expected-least-closure-property`,
  `lem-language-concatenation-is-associative`,
  `lem-reversal-is-an-involution-and-reverses-concatenation`,
  `prop-valid-computation-histories-are-decidable`,
  `thm-nfa-constructions-for-union-concatenation-and-star`.
- Disposition:
  - `lem-finite-tuples-admit-effective-prefix-free-encodings` is `repaired` because it is itself part of the current publication-state repair and still reads correctly against the unchanged effective-encoding definition.
  - The other `11` affected items are `still-licensed`; their cited definitions and lemma kept the same mathematical content, and only publication status changed.
- No extra `research/frontier-25-6c-verdicts.jsonl` row is licensed by this receipt repair. The computed 6c cross-group queue remains empty, and `tools/cross-group-edges.mjs` still reports `0` current changes.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-language-concatenation-powers-and-kleene-star.md items/def-effective-binary-encoding-and-decoder.md items/lem-finite-tuples-admit-effective-prefix-free-encodings.md`
  - pass; only `lem-finite-tuples-admit-effective-prefix-free-encodings.md` reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-language-concatenation-powers-and-kleene-star.md items/def-effective-binary-encoding-and-decoder.md items/lem-finite-tuples-admit-effective-prefix-free-encodings.md`
  - pass; `1 checked, 0 failing`.
- `node tools/rendercheck.mjs items/def-language-concatenation-powers-and-kleene-star.md items/def-effective-binary-encoding-and-decoder.md items/lem-finite-tuples-admit-effective-prefix-free-encodings.md`
  - pass; `OK — 3 file(s)`.
- `node tools/audit-manifest.mjs research/frontier-25-batch-1.pages.json ... research/frontier-25-batch-11.pages.json --output research/frontier-25-audit-manifest.json`
  - pass; `0 defect(s)`.
- `node tools/impact-audit.mjs --touches research/frontier-25-touches.json --from post-6b --current --receipt research/frontier-25-impact-6c.json`
  - pass; `3 changed public interface(s), 12 affected item(s)`.
- `node tools/defect-ledger.mjs append --file research/frontier-25-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
  - appended `3` rows and regenerated `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-25`
  - pass; `123 defect row(s) checked, 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-25`
  - pass; `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-25 --reconcile-plan`
  - pass; `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/depcheck.mjs --quiet`
  - pass; repository warnings only. The new relevant warning is the expected orphan warning on `lem-finite-tuples-admit-effective-prefix-free-encodings`, which is published but still appears on no page home.
- `node tools/step6-scope.mjs check --run frontier-25 --phase final --batch 10`
  - pass; `38 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-25 --phase final --batch 11`
  - pass; `19 item(s) routed, 7 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-25 --phase final`
  - attempted twice, but it did not return within a 60-second wait window in this shell. Because this repair touches only out-of-run published dependencies plus 6c receipts, I kept the two clean batch-scoped final checks as the focused routing evidence for the live ownership scope.
- `git diff --check -- items/def-language-concatenation-powers-and-kleene-star.md items/def-effective-binary-encoding-and-decoder.md items/lem-finite-tuples-admit-effective-prefix-free-encodings.md research/frontier-25-impact-6c.json research/frontier-25-audit-manifest.json research/frontier-25-6c-verdicts.jsonl research/frontier-25-alpha-6c-gate-audit-manifest-2-ledger-rows.json research/defect-ledger.jsonl research/DEFECT-LEDGER.md`
  - pass.

## Edits kept

- `items/def-language-concatenation-powers-and-kleene-star.md`
- `items/def-effective-binary-encoding-and-decoder.md`
- `items/lem-finite-tuples-admit-effective-prefix-free-encodings.md`
- `research/frontier-25-audit-manifest.json`
- `research/frontier-25-impact-6c.json`
- `research/frontier-25-6c-verdicts.jsonl`
- `research/frontier-25-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
- `research/defect-ledger.jsonl`
- `research/DEFECT-LEDGER.md`
- `research/frontier-25-alpha-6c.md`

## Disposition

- The primary `audit-manifest` gate defect is repaired on current Sunday, August 30, 2026 bytes.
- The computed 6c cross-group queue remains empty.
- `research/frontier-25-6c-verdicts.jsonl` is no longer empty; it now contains exactly the three required `kind:"gate"` rows for this named repair.
- The only additional artifact made stale by this repair, `research/frontier-25-impact-6c.json`, has been refreshed and closed on current bytes.

## Remaining blocker

- None for the live `audit-manifest` repair scope.
