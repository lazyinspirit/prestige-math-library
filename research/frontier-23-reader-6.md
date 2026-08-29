# frontier-23 reader-6 report

Date: Saturday, August 29, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `research/frontier-23-reader.task.md`, `research/frontier-23-dispatch/reader-reader-6.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-23-batch-6.pages.json`, `research/frontier-23-batch-6.coverage.json`, `research/frontier-23-batch-6.notes.md`, and `research/frontier-23-batch-6.proof-contracts.json`.
- Assigned pages: `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems.md` and `library/measure-theory/product-measures-and-the-fubini-tonelli-theorems-examples.md`.
- Assigned items: all 50 batch-6 manifest items under `items/`, namely the 39 A-page items and 11 B-page items named in `research/frontier-23-batch-6.pages.json`.
- Direct published dependencies opened for verification: the section/product-measure, completion, Euclidean Borel/Lebesgue, polar-coordinate, change-of-variables, countable-cocountable, and calculus prerequisites listed during the read pass, including `def-measurable-space`, `def-measurable-function-between-measurable-spaces`, `thm-generated-sigma-algebra-exists-and-is-minimal`, `thm-monotone-class`, `thm-monotone-convergence-for-the-integral`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-ae-equality-preserves-measurability-on-complete-spaces`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-principal-inverse-tangent-calculus`, and `ex-countable-cocountable-zero-infinity-measure`.

## Edits attempted

- Repaired the notation defect in `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` by changing the fixed-first-coordinate section from `(G_f)^x` to `(G_f)_x`.
- Repaired the analogous notation defect in `cor-graph-of-a-measurable-function-is-lebesgue-null` by changing `(\Gamma_f)^x` to `(\Gamma_f)_x`.
- Strengthened `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` so the forward inclusion is proved via coordinate projections and Borel preimages.
- Strengthened `thm-polar-coordinates-formula-for-lebesgue-measure` so uniqueness is proved using the cone set `E_1 \subseteq \mathbb R^n` on the theorem’s actual domain.
- Repaired `cex-measurable-sections-do-not-imply-product-measurability` by replacing the source-only appeal with a finite-measure contradiction using the section-integral theorem.
- Strengthened `thm-tonelli-and-fubini-for-completed-product-measures` by replacing the illegal direct use of a completed null disagreement set with a product-measurable null superset and by separating the complex-valued `L^1` case into real and imaginary representatives.
- Attempted to normalize malformed multiline display math across the batch-6 item scope and partially regenerated `research/frontier-23-batch-6.proof-contracts.json`.

## Confirmed defects

1. `thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral` used the wrong section notation for a fixed first-coordinate parameter.
2. `cor-graph-of-a-measurable-function-is-lebesgue-null` used the same wrong section notation.
3. `thm-borel-products-of-euclidean-spaces-are-euclidean-borel` did not justify the forward inclusion from arbitrary Borel rectangles to Borel subsets of `\mathbb R^{m+n}`.
4. `thm-polar-coordinates-formula-for-lebesgue-measure` attempted to prove uniqueness from an indicator on `(0,1] \times E`, which is not a function on the theorem’s stated domain.
5. `cex-measurable-sections-do-not-imply-product-measurability` relied on the external witness without carrying the non-measurability argument in the current item.
6. `thm-tonelli-and-fubini-for-completed-product-measures` incorrectly treated the completed null disagreement set as product-measurable and also used a real-valued representative theorem directly on a complex-valued `L^1` function.
7. The batch-6 item corpus contained widespread render-format defects from multiline `$$...$$` displays, and the batch-6 proof-contract artifact was already stale against several current item texts.

## Checks

- `node tools/rendercheck.mjs <full batch-6 item scope>`
  Result: failing. After the attempted display normalization, current output reports `225` render errors across `50` files.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-6 item scope>`
  Result: failing. Current output reports `24` proof-bearing batch-6 items with `untagged-steps`.
- `node tools/proof-contract.mjs --strict research/frontier-23-batch-6.proof-contracts.json`
  Result: failing. Current output reports `48` contract errors.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-6.proof-contracts.json ...`
  Result: partial only; `12` entries regenerated and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` was skipped because the parser could no longer read the item cleanly after the failed bulk normalization.

## Page verdicts

- `product-measures-and-the-fubini-tonelli-theorems`
  Blocked. I confirmed several real mathematical defects and repaired some of them, but the subsequent bulk display-normalization pass corrupted multiple in-flight batch-6 items, so the page is not presently in a check-clean state.
- `product-measures-and-the-fubini-tonelli-theorems-examples`
  Blocked for the same reason. The repaired sectionwise-measurability counterexample is stronger, but several example and counterexample files now fail render/precheck after the failed normalization attempt.

## Blockers

- My bulk rewrite attempt to collapse multiline display math across the batch-6 scope introduced additional formatting corruption in many in-flight batch-6 items.
- Because those files are still editable batch-6 items, this is not an uneditable published-dependency finding; it is a local blocker that needs another repair pass before Step 6 for batch 6 can close cleanly.
- I did not isolate any confirmed uneditable published-dependency defect on the opened scope.
