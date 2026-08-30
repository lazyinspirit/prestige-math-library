# Frontier 24 contract audit

Date: Saturday, August 29, 2026.
Dispatch: `contract-audit-1`
Run: `frontier-24`

## Reproduced detector state before repair

From the repo root I reran:

- `node tools/merge-proof-contracts.mjs --level frontier-24 research/frontier-24-proof-contracts.json research/frontier-24-batch-{1,2,3,4,5,6,7,8,9,10}.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-24-proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-24 --contracts research/frontier-24-proof-contracts.json --checklists research/frontier-24-batch-1.coverage.json,research/frontier-24-batch-2.coverage.json,research/frontier-24-batch-3.coverage.json,research/frontier-24-batch-4.coverage.json,research/frontier-24-batch-5.coverage.json,research/frontier-24-batch-6.coverage.json,research/frontier-24-batch-7.coverage.json,research/frontier-24-batch-8.coverage.json,research/frontier-24-batch-9.coverage.json,research/frontier-24-batch-10.coverage.json --min-checks 1`
- Diagnostic only: `node tools/risk-report.mjs research/frontier-24-proof-contracts.json --require-reviewed --json`

Initial state on current disk:

- `boundary-audit`: `46` template clusters covering `467` rows, plus `25` contradicted candidates.
- `citation-fidelity`: `0` missing quotes and `1` widening candidate.
- `gate-liveness`: already live, not vacuous: `finite-smoke 1`, `proof-contract 398`, `coverage-checklist 554`, `precheck 7824`.
- `risk-report --require-reviewed`: already clean on current disk; `149` required high/critical reviews, `0` errors.

## Boundary audit

### Template clusters

- Batch `2`: rewrote the `8` induction/character-theory template clusters (`216` clustered rows). The stock `not_applicable` sentences were replaced with item-specific reasons, and the rows that were genuinely load-bearing on current bytes were converted to `checked`: the two real iff rows (`cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction`, `thm-mackeys-irreducibility-criterion-for-finite-groups`), the choose-bearing induction/character rows, and `thm-burnsides-p-a-q-b-theorem [zero]`.
- Batch `4`: rewrote the `34` single-item template clusters (`231` clustered rows) produced by the generic `For <title> ...` sentence. The three real empty-boundary rows were converted to `checked`; the remaining axes now carry item-specific reasons.
- Batch `10`: rewrote the `4` formal-language iff clusters (`20` clustered rows) with item-specific reasons keyed to the example/counterexample/theorem form of the item.

Changed records:

- `research/frontier-24-batch-2.proof-contracts.json`
- `research/frontier-24-batch-4.proof-contracts.json`
- `research/frontier-24-batch-10.proof-contracts.json`

Result:

- `boundary-audit` now reports `TEMPLATE REUSE — none at or above 3 members`.

### Contradicted candidates

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity [empty]` | repaired | The detector was right. Step `1.1` sets `E = union_n E_n`; when `E = emptyset`, every `E_n` is empty, and steps `1.2` and `2.1` still conclude absolute convergence. | Batch `4` `empty` row changed from `not_applicable` to `checked`. |
| `thm-continuity-from-below-and-above-for-signed-measures [empty]` | repaired | The detector was right. Step `1.1` already covers the increasing empty-union case, and step `1.2` already covers the decreasing empty-intersection case through the same Jordan-decomposition identities. | Batch `4` `empty` row changed from `not_applicable` to `checked`. |
| `prop-simple-integrals-are-bounded-by-total-variation [empty]` | repaired | The detector was right. The zero simple function has no nonzero level sets, so the canonical representation is an empty sum, and steps `1.1` and `2.1` already handle that case on both sides of the inequality. | Batch `4` `empty` row changed from `not_applicable` to `checked`. |
| `lem-cauchy-riemann-sums-give-rational-approximation [zero]` | upheld | The detector saw `1/(2 pi i)` and `1/(zeta-z)`. The first denominator is a fixed nonzero constant, and step `2.1` uses `Gamma* cap K = emptyset`, so `zeta-z` never vanishes on the approximation domain. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `lem-runge-pole-pushing-lemma [zero]` | upheld | Step `2.1` chooses `r < dist(K,u)/2` and proves `|u-v| < |z-v|` on `K`, which keeps the Laurent-expansion denominators `z-v` and `z-u` away from zero. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-runge-approximation-with-prescribed-poles [zero]` | repaired | The detector was right about the `N = 0` branch. Step `2.1` isolates `N = 0` before step `3.1` uses `epsilon/(2N)`, while step `1.1` already keeps every pole `a_nu` off `K`. | Batch `6` `zero` row changed from `not_applicable` to `checked`. |
| `thm-mittag-leffler-expansion-of-pi-cotangent [empty]` | upheld | The sums are over the fixed index sets `Z` and `{n >= 1}`. The detector is reacting to the expansion syntax, not to a family that can disappear. | Batch `6` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-mittag-leffler-expansion-of-pi-cotangent [zero]` | upheld | The statement assumes `z notin Z`, so `z != 0` before the residue denominators `2z` and `-2z` appear. The contour denominator `w^2-z^2` vanishes only at the isolated poles `w = +/- z` handled in step `1.1`. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared [empty]` | upheld | The corollary differentiates the fixed cotangent expansion termwise over the same fixed index sets `Z` and `{n >= 1}`; it does not introduce an optional empty family. | Batch `6` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared [zero]` | upheld | The hypothesis `a notin iZ` is exactly the condition excluding every integer `n` with `n^2 + a^2 = 0`, so the displayed denominator never vanishes on the stated carrier. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-euler-limit-formula-for-gamma [zero]` | upheld | The statement excludes `z in {0,-1,-2,...}`, which keeps every factor `z+j` in the denominator nonzero; step `3.1` also introduces `n >= 1` before `nz` appears. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-gamma-weierstrass-product [empty]` | upheld | The product is over the fixed index set `{n >= 1}`; the theorem is not parameterized by a family that can be empty. | Batch `6` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-gamma-weierstrass-product [zero]` | upheld | The detector only saw indexed denominators `k` and `n` from sums/products beginning at `1`, so there is no free zero-valued parameter to split off. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-euler-reflection-formula [zero]` | upheld | The proof applies the product formulas only on `C minus Z`, where `1-z` stays off Gamma's poles, and the only indexed denominator `n` is already positive. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-gauss-multiplication-formula [empty]` | upheld | The theorem starts with an integer `m >= 1`, so the product over `k = 0,...,m-1` is never empty. | Batch `6` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-gauss-multiplication-formula [zero]` | upheld | The only free scalar denominator is `m`, and the theorem explicitly assumes `m >= 1` before that denominator appears. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-stirling-formula-gamma [zero]` | upheld | The harmonic denominators `n` are positive integers, and step `4.1` proves the sector bound `|u+z| >= c_delta (u+|z|)`, which keeps `u+z` away from zero on the integration path. | Batch `6` `zero` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `lem-locally-finite-families-of-supports-have-locally-finite-cozero-families [empty]` | upheld | The lemma studies one fixed family `(f_i)_{i in I}` and reads local finiteness directly from the neighborhood condition in step `1.1`; the family regex does not create a separate empty-family branch. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-a-locally-finite-sum-of-smooth-functions-is-smooth [empty]` | upheld | The theorem begins with one fixed family `(f_i)_{i in I}`, and steps `1.1` and `2.1` reduce the global sum to a finite local sum on each neighborhood. The detector is reacting to `sum_i f_i`, not to a missing empty-family branch. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `lem-normalizing-a-locally-finite-positive-smooth-family [empty]` | upheld | On a nonempty manifold the hypothesis “for every `p` at least one `g_i(p)` is positive” already rules out an empty family, and on the empty manifold the conclusion is vacuous. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking [empty]` | upheld | The cover is indexed by `n >= 1` and the `U_n` are given data from the statement itself, so the detector is seeing cover notation rather than an optional empty family. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `lem-first-order-hadamard-factorization-near-a-point [empty]` | upheld | The displayed sum runs over the fixed coordinate directions of `R^n` after `n` is chosen; it is not a variable family whose disappearance changes the lemma. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-change-of-coordinate-formula-for-tangent-bases [empty]` | upheld | The summation index runs over the fixed target coordinate basis of the chart `y` at `p`; there is no optional family parameter whose empty instance needs its own branch. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-coordinate-formula-for-the-differential [empty]` | upheld | The only family notation is the finite coordinate list `y^1,...,y^m` attached to the chosen chart around `F(p)`, not a variable family whose emptiness changes the theorem. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |
| `thm-coordinate-formula-for-the-differential-of-a-function [empty]` | upheld | The theorem expands `df_p` in one fixed coordinate coframe `dx^i_p`; the index `i` ranges over those chart coordinates rather than over a variable family. | Batch `9` `empty` row kept `not_applicable`; added item-specific reason and `reviewed.upheld`. |

Result:

- `boundary-audit` now reports `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `boundary-audit` reports `21` upheld rows, exactly the detector-inapplicable candidates above.

## Citation fidelity

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model [L2] -> lem-product-of-one-plus-deltas-gives-theta-n` | upheld | The cited lemma states the product estimate for `n >= 1` factors, but the fact line is used only inside step `1.1` at an actual Householder step `k < n`, where there is a nonempty block of arithmetic operations to aggregate. The `n = 0` corner produces no step-`1.1` product at all. | Batch `3` citation row kept; added `reviewed.upheld` to the `L2` citation. |

Changed record:

- `research/frontier-24-batch-3.proof-contracts.json`

Result:

- `citation-fidelity` now reports `0` missing quotes and `0` widening candidates.
- `citation-fidelity` reports `1` upheld citation row, the detector-inapplicable candidate above.

## Gate liveness and risk reviews

- `gate-liveness` did not expose a contract defect on this run. On the first reproduced rerun it already reported live scopes: `finite-smoke 1`, `proof-contract 398`, `coverage-checklist 554`, `precheck 7824`. No `finite_smoke` row had to be added.
- `risk-report --require-reviewed` also did not expose a contract defect. It already exited clean on the merged run contract with `149` required high/critical reviews and `0` missing `risk_review` rows.

## Defect ledger

Appended and rendered in the same act:

- `frontier-24-contract-audit-001` — boundary contract defects

Receipt:

- `node tools/defect-ledger.mjs append --file /tmp/frontier-24-alpha-contract-audit-ledger-rows.json`
- `node tools/defect-ledger.mjs validate --run frontier-24`

## Post-merge reruns

After updating the owning batch contracts, I re-merged into `research/frontier-24-proof-contracts.json` and reran the detector set sequentially on the fresh merged file:

- `node tools/merge-proof-contracts.mjs --level frontier-24 research/frontier-24-proof-contracts.json research/frontier-24-batch-{1,2,3,4,5,6,7,8,9,10}.proof-contracts.json`
  - pass; wrote the merged run contract with `398` scoped items.
- `node tools/proof-contract.mjs research/frontier-24-proof-contracts.json --strict`
  - pass; `0` errors, `0` warnings, `398/398` items checked.
- `node tools/boundary-audit.mjs research/frontier-24-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `21` upheld boundary rows.
- `node tools/citation-fidelity.mjs research/frontier-24-proof-contracts.json --fail-on-missing-quote`
  - pass; `961` citations checked, no missing quote, no widening candidate, `1` upheld citation row.
- `node tools/gate-liveness.mjs --run frontier-24 --contracts research/frontier-24-proof-contracts.json --checklists research/frontier-24-batch-1.coverage.json,research/frontier-24-batch-2.coverage.json,research/frontier-24-batch-3.coverage.json,research/frontier-24-batch-4.coverage.json,research/frontier-24-batch-5.coverage.json,research/frontier-24-batch-6.coverage.json,research/frontier-24-batch-7.coverage.json,research/frontier-24-batch-8.coverage.json,research/frontier-24-batch-9.coverage.json,research/frontier-24-batch-10.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 398`, `coverage-checklist 554`, `precheck 7824`.
- `node tools/risk-report.mjs research/frontier-24-proof-contracts.json --require-reviewed --json`
  - pass; `0` errors, `149` required high/critical review rows present.
- `node tools/defect-ledger.mjs validate --run frontier-24`
  - pass; `125` frontier-24 defect rows checked, `0` errors.

## Remaining blocker

No remaining blocker in this dispatch scope.
