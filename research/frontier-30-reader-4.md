# frontier-30 reader-4 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `4`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-beta-4.task.md`, `research/frontier-30-batch-4.pages.json`, `research/frontier-30-batch-4.coverage.json`, `research/frontier-30-batch-4.proof-contracts.json`, `research/frontier-30-batch-4.notes.md`, `research/frontier-30-step6-hash-4-pre.json`, `research/plan-functional-analysis-track.md` (FA-4), `research/plan-spec.json`, and `.autopilot/status.md`.
- Assigned pages: `library/functional-analysis/the-analytic-hahn-banach-theorem.md` and `library/functional-analysis/the-analytic-hahn-banach-theorem-examples.md`.
- Assigned A-page items: `def-sublinear-functional`, `lem-hahn-banach-one-step-extension`, `lem-union-of-a-chain-of-dominated-extensions`, `thm-hahn-banach-dominated-extension`, `def-dual-space-of-a-normed-space`, `thm-hahn-banach-norm-preserving-extension`, `lem-real-part-determines-a-complex-linear-functional`, `thm-complex-hahn-banach-norm-preserving-extension`, `thm-dual-norms-every-vector`, `cor-dual-separates-points`, `cor-norm-recovered-from-the-dual-unit-ball`, `thm-norm-preserving-extension-from-any-subspace`, and `rem-choice-strength-of-hahn-banach`.
- Assigned B-page items: `ex-norming-functionals-in-lp-from-the-measure-duality-page`, `ex-many-extensions-from-a-codimension-one-subspace`, `ex-banach-limit-from-hahn-banach`, `lem-banach-limit-properties`, `cex-hahn-banach-extension-need-not-be-unique`, and `rem-hahn-banach-open-choice-questions`.
- Dependency items opened for verification: `def-algebraic-dual-and-linear-functional`, `def-linear-subspace`, `def-chain`, `thm-zorn`, `def-space-of-bounded-linear-operators`, `def-operator-norm`, `rem-real-and-complex-normed-space-convention`, `def-bounded-linear-operator`, `def-normed-subspace`, `def-cesaro-mean`, `def-limsup-liminf`, `thm-limsup-subadditive`, `def-sequence`, `cor-l-p-norm-recovery-by-unit-l-q-pairings`, `rem-halpern-levy-bpi-not-ac`, `rem-hahn-banach-choice-strength`, `rem-hahn-banach-hamel-basis-open`, `rem-hahn-banach-discontinuous-additive-open`, and `rem-hahn-banach-theorem`.

## Design/spec check

- The live spec and the batch manifest agree on the owned pair, companion page, and order `288.053`.
- The FA-4 design block still names a wider prerequisite set than `research/plan-spec.json`; I recorded the drift and kept the live spec prerequisite `finite-dimensional-normed-spaces-and-riesz-lemma-examples` unchanged.
- `.autopilot/status.md` currently reports `frontier-23`, not `frontier-30`. I treated that as control-state background only and audited the named `frontier-30` batch from its current on-disk artifacts.

## Confirmed defects and edits

1. Repaired `items/ex-many-extensions-from-a-codimension-one-subspace.md`.
   Step `3.1` asserted the dual-norm formula on `(\mathbb R^2,\|\cdot\|_\infty)` without exhibiting the maximizing unit-ball witness. I added the explicit upper bound and the corner-point equality witness, then kept the interval conclusion unchanged.
2. Repaired `items/ex-banach-limit-from-hahn-banach.md`.
   Step `1.1` defined `p(x)=\limsup \sigma_n(x)` as a real-valued map on `\ell^\infty` without recording why the value is finite. I added the bounded-Cesaro-means argument so the codomain `\mathbb R` is justified directly from the on-disk dependencies.
3. Repaired `items/lem-banach-limit-properties.md`.
   Step `2.2` used constant-sequence values `L(c\mathbf 1)=c` that were only implicit. I made that consequence explicit in step `1.1`, so the later liminf/limsup squeeze no longer relies on an unstated linearity inference.
4. Updated `research/frontier-30-batch-4.proof-contracts.json`.
   I regenerated the contract entries for `ex-many-extensions-from-a-codimension-one-subspace`, `ex-banach-limit-from-hahn-banach`, and `lem-banach-limit-properties` to match the repaired on-disk proofs.

## Per-page verdicts

- `the-analytic-hahn-banach-theorem`: pass. The A-page prose and item graph match the opened dependencies and the current proofs.
- `the-analytic-hahn-banach-theorem-examples`: pass after the three B-item repairs above. No B-page body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-many-extensions-from-a-codimension-one-subspace.md items/ex-banach-limit-from-hahn-banach.md items/lem-banach-limit-properties.md`
  Result: all three changed items reflowed cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-many-extensions-from-a-codimension-one-subspace.md items/ex-banach-limit-from-hahn-banach.md items/lem-banach-limit-properties.md`
  Result: `3 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-4.proof-contracts.json ex-many-extensions-from-a-codimension-one-subspace ex-banach-limit-from-hahn-banach lem-banach-limit-properties`
  Result: `regenerated 3, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-hahn-banach-one-step-extension.md items/lem-union-of-a-chain-of-dominated-extensions.md items/thm-hahn-banach-dominated-extension.md items/thm-hahn-banach-norm-preserving-extension.md items/lem-real-part-determines-a-complex-linear-functional.md items/thm-complex-hahn-banach-norm-preserving-extension.md items/thm-dual-norms-every-vector.md items/cor-dual-separates-points.md items/cor-norm-recovered-from-the-dual-unit-ball.md items/thm-norm-preserving-extension-from-any-subspace.md items/ex-norming-functionals-in-lp-from-the-measure-duality-page.md items/ex-many-extensions-from-a-codimension-one-subspace.md items/ex-banach-limit-from-hahn-banach.md items/lem-banach-limit-properties.md items/cex-hahn-banach-extension-need-not-be-unique.md`
  Result: `15 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-4.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 15/15 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-4.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-4.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: one candidate on `lem-union-of-a-chain-of-dominated-extensions` for the `empty` axis. I re-read the item and kept it as a false positive: the statement explicitly assumes a nonempty chain, so the contract row marked `not_applicable` is accurate.
- `node tools/content-policy.mjs research/frontier-30-batch-4.pages.json`
  Result: `19 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/ex-many-extensions-from-a-codimension-one-subspace.md items/ex-banach-limit-from-hahn-banach.md items/lem-banach-limit-properties.md research/frontier-30-batch-4.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
