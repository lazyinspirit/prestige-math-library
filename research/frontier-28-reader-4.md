# frontier-28 reader-4 report

Date: 2026-09-01.
Run: `frontier-28`
Batch: `4`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-28-dispatch/reader-reader-4.prompt.md`, `research/frontier-28-beta-4.task.md`, `research/frontier-28-batch-4.pages.json`, `research/frontier-28-batch-4.coverage.json`, `research/frontier-28-batch-4.proof-contracts.json`, `research/frontier-28-batch-4.notes.md`, `research/frontier-28-step6-hash-4-pre.json`, `.autopilot/frontier-28/status.md`, and the live `research/plan-spec.json` entry for MT-16.
- Assigned pages: `library/measure-theory/the-duality-of-lp-and-lq.md` and `library/measure-theory/the-duality-of-lp-and-lq-examples.md`.
- Assigned A-page items: `def-bounded-linear-functional-on-l-p-and-its-operator-norm`, `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`, `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`, `prop-semifinite-measures-make-l-q-representatives-unique`, `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p`, `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures`, `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu`, `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`, `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q`, `thm-sigma-finite-duality-for-bounded-functionals-on-l-p`, `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`, `cor-l-p-norm-recovery-by-unit-l-q-pairings`, `cor-ell-p-duality-by-counting-measure`, `rem-the-p-equals-infinity-case-is-recorded-not-proved-here`, and `rem-duality-as-a-dual-space-statement`.
- Assigned B-page items: `ex-a-power-function-realises-the-duality-norm-on-unit-interval`, `ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q`, `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing`, `cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval`, `cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality`, and `rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one`.
- Published dependency items opened for verification: `def-calligraphic-l-p-on-a-measure-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-holder-inequality-for-integrals`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-conjugate-exponents`, `def-finite-sigma-finite-and-semifinite-measures`, `prop-essential-supremum-is-attained-as-the-least-essential-bound`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-dominated-convergence`, `thm-monotone-convergence-for-the-integral`, `def-signed-measure`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `cor-measurable-functions-admit-dominated-simple-approximations`, `def-l-infinity-on-a-measure-space`, `def-l-one-of-a-measure`, `rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative`, `rem-ell-p-is-l-p-of-counting-measure`, `ex-counting-measure-and-sigma-finiteness`, `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership`, `ex-countable-cocountable-zero-infinity-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm`, `def-integrable-real-and-complex-functions-and-their-integrals`, and `thm-integral-triangle-inequality`.

## Design/spec check

- The live spec and the batch manifest agree on the owned A/B pair, order `288.031` / `288.032`, and the page-level prerequisite `density-separability-and-convolution-in-lp-examples`.
- The repository was already dirty in `research/plan-spec.json` when I started. I read the live MT-16 entry there and did not edit it.

## Confirmed defects and edits

1. Repaired the page-wide scalar-field mismatch across the in-flight duality items. The repository's current finite-`p` `L^p` formalism is real-valued and only proves real vector-space structure, but the MT-16 draft had silently widened to complex-valued `L^p/L^q` data and complex-valued functionals. I narrowed the affected statements and proofs to real-valued `L^p(\mu)`, `L^q(\mu)`, `\ell^p`, and `\ell^2`, and I removed the unsupported complex-measure branch from the finite-measure carrier:
   `def-bounded-linear-functional-on-l-p-and-its-operator-norm`,
   `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`,
   `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures`,
   `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu`,
   `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`,
   `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q`,
   `thm-sigma-finite-duality-for-bounded-functionals-on-l-p`,
   `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`,
   `cor-ell-p-duality-by-counting-measure`,
   `ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing`,
   and `rem-duality-as-a-dual-space-statement`.
2. Repaired `items/thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p.md`.
   The proof only descended the integral pairing through the representative of `[f]`; it did not verify that the value is also independent of the chosen representative of `g \in L^q(\mu)`. I added that missing quotient check.
3. Repaired `items/prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm.md`.
   The `q=\infty` endpoint branch used an undeclared representative `u` and undeclared sign function `s`, and the phase numbering/boundary references became stale once that branch was fixed. I rewrote the endpoint branch with explicit choices and aligned the proof structure.
4. Repaired `items/thm-sigma-finite-duality-for-bounded-functionals-on-l-p.md`.
   The proof used monotone convergence to pass from the local `L^q` bounds on `X_n` to the global `L^q` bound on `X`, but the item had not declared or cited monotone convergence there. I added the missing dependency and fact row.
5. Updated `research/frontier-28-batch-4.proof-contracts.json`.
   I regenerated the batch-4 entries after the item repairs and fixed the stale boundary evidence rows for `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`. I also changed the `empty` boundary row for `cor-ell-p-duality-by-counting-measure` from an unsupported `not_applicable` template to explicit checked evidence, matching the proof's exhibited counting-measure exhaustion.

## Per-page verdicts

- `the-duality-of-lp-and-lq`: pass after the repairs above. The current A-page statements, proof steps, and contracts now match the opened repository definitions and dependencies.
- `the-duality-of-lp-and-lq-examples`: pass. The B-page items are consistent with the repaired real-valued A-page theorem route; no B-page prose edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the changed batch-4 items
  Result: the touched proof-bearing items reflowed cleanly.
- `node tools/tsx-run.mjs tools/precheck.mts` on all 17 proof-bearing batch-4 scope items
  Result: `17 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-4.proof-contracts.json ...`
  Result: `regenerated 17, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-28-batch-4.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-4.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-4.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `node tools/content-policy.mjs research/frontier-28-batch-4.pages.json`
  Result: `21 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- ...batch-4 touched files...`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
