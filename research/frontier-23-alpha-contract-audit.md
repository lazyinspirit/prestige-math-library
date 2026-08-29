# Frontier 23 contract audit

Date: Saturday, August 29, 2026.
Dispatch: `contract-audit-1`
Run: `frontier-23`

## Reproduced detector state before repair

From the repo root I reran:

- `node tools/boundary-audit.mjs research/frontier-23-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-23-batch-*.proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-23 --contracts research/frontier-23-proof-contracts.json --checklists research/frontier-23-batch-*.coverage.json --min-checks 1`
- diagnostic only: `node tools/risk-report.mjs research/frontier-23-proof-contracts.json --require-reviewed`

Initial state on current disk:

- `boundary-audit`: `66` template clusters covering `1647` rows, plus `14` contradicted candidates.
- `citation-fidelity`: `0` missing quotes and `0` widening candidates.
- `gate-liveness`: `VACUOUS finite-smoke 0 checks`.
- `risk-report --require-reviewed`: already clean on current disk; no missing `risk_review` row belonged to this dispatch.

## Template-cluster repairs

Decision: `confirmed real contract defects`.

Evidence:

- Batch `1` carried `327` clustered boundary rows in the decision-problems / Bass-Serre contracts, dominated by stock `not_applicable` iff/zero/degenerate/endpoints/nonempty-choice text and generic checked-step sentences.
- Batch `2` carried `164` clustered boundary rows in the complexification / exterior-power contracts, especially the bare endpoint sentence `There is no interval, sequence endpoint, or first/last index.` and short stock reasons for examples, counterexamples, and corollaries.
- Batch `6` carried `303` clustered boundary rows in the product-measure / Tonelli contracts, including repeated `The statement is not a biconditional` and repeated empty/zero/nonempty-choice boilerplate.
- Batch `7` carried `389` clustered boundary rows in the complex-analysis / infinite-product contracts, especially generic `checked` rows for zero/endpoint/degenerate/choice cases and stock `not_applicable` iff/empty rows.
- Batch `8` carried `333` clustered boundary rows in the exactness / members contracts, where the mathematical clause was usually right but templated through quoted titles.
- Batch `9` carried `137` clustered boundary rows in the smooth-manifold / ODE contracts, dominated by reused checked evidence such as `step 1.1 covers the distinguished one-dimensional or identity-value case ...`.

Repair:

- Rewrote every flagged clustered boundary row in the owning batch contracts so each row now names the current item and either:
  - cites the actual numbered step text handling that axis; or
  - gives an item-specific mathematical reason why the axis is not a separate obligation.
- Recorded `reviewed: { upheld: true, by: "contract-audit-1", reason: ... }` only on the seven contradicted candidates that are genuine detector false positives.

Changed records:

- `research/frontier-23-batch-1.proof-contracts.json`
- `research/frontier-23-batch-2.proof-contracts.json`
- `research/frontier-23-batch-6.proof-contracts.json`
- `research/frontier-23-batch-7.proof-contracts.json`
- `research/frontier-23-batch-8.proof-contracts.json`
- `research/frontier-23-batch-9.proof-contracts.json`

Result:

- `boundary-audit` now reports `TEMPLATE REUSE — none at or above 3 members`.

## Contradicted-candidate adjudications

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `lem-finite-rectangle-unions-form-a-generating-algebra [empty]` | repaired | Step `2.1` explicitly says the family of finite disjoint unions contains `∅` and `X × Y` before proving closure, so the empty-union case is real and is already discharged on current bytes. | Batch `6` `empty` row changed from `not_applicable` to `checked`. |
| `thm-polar-coordinates-formula-for-lebesgue-measure [zero]` | upheld | The detector keys on the denominator `n`, but the Statement starts with `n ≥ 1`, and step `1.1` uses `1/n` only under that positive-dimension hypothesis. | Batch `6` `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `ex-zeta-two-from-tonelli-and-the-geometric-series [zero]` | upheld | The proof works on `(0,1)^2`, so `1 - xy > 0` in step `1.1`, and step `2.1` uses `(n+1)^2` with `n ≥ 0`. No free zero denominator remains. | Batch `6` `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-absolute-convergence-criterion-for-complex-infinite-products [empty]` | upheld | The product and series are over the fixed sequence `(a_n)_{n≥0}`; step `1.2` chooses a tail index `N`, but there is no optional empty family branch. | Batch `7` `empty` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-canonical-product-convergence-from-exponent-sum [empty]` | upheld | The Statement fixes `(a_n)_{n≥1}` and step `1.1` only chooses a tail threshold `N`; the proof never branches on whether a family exists. | Batch `7` `empty` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-weierstrass-product-theorem-on-the-complex-plane [empty]` | upheld | The theorem fixes one zero sequence `(a_n)_{n≥1}` with multiplicities, and step `1.1` chooses `N` for a radius `R`; emptiness of an index family is not part of the argument. | Batch `7` `empty` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-sine-has-its-weierstrass-product [empty]` | upheld | Step `2.1` fixes the nonzero zeros as the pairs `±n`, `n ≥ 1`; the product is over that fixed sequence, not over a variable possibly empty family. | Batch `7` `empty` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-zero-exponent-is-bounded-by-entire-order [empty]` | repaired | Step `4.1` already covers the vacuous shell case: when a dyadic shell contains no nonzero zeros, its shell sum is empty and the same estimate still feeds step `5.1`. | Batch `7` `empty` row changed from `not_applicable` to `checked`. |
| `lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas [empty]` | repaired | The library keeps the empty manifold by definition. Steps `1.1` and `2.1` therefore already cover the empty-manifold / empty-atlas case by a vacuous cover-and-compatibility argument. | Batch `9` `empty` row changed from `not_applicable` to `checked`. |
| `fs-a-bijective-smooth-map-is-a-diffeomorphism [zero]` | repaired | Step `2.1` isolates `y = 0` as the point where `F^{-1}(y) = y^{1/3}` fails to be differentiable, while the derivative formula is used only for `y ≠ 0`. | Batch `9` `zero` row changed from `not_applicable` to `checked`. |
| `ex-the-circle-from-two-stereographic-charts [zero]` | repaired | Step `2.1` writes the transition maps as `1/u` on `R \\ {0}`, so the overlap itself excludes the zero denominator. | Batch `9` `zero` row changed from `not_applicable` to `checked`. |
| `ex-the-n-sphere-with-its-standard-smooth-atlas [zero]` | repaired | Step `2.1` writes the overlap transition as `u / ||u||^2` on `R^n \\ {0}`; the proof already isolates the `u = 0` denominator boundary there, while `1 + ||u||^2` from step `1.1` is always positive. | Batch `9` `zero` row changed from `not_applicable` to `checked`. |
| `prop-a-fundamental-matrix-is-invertible [zero]` | upheld | The detector is reading `d/dt` as though it were division. The proof differentiates products and never divides by a free scalar or parameter. | Batch `9` `zero` row kept `not_applicable`; reason rewritten and `reviewed.upheld` added. |
| `thm-c1-dependence-of-solutions-on-initial-data [zero]` | repaired | Step `3.1` is exactly the zero-increment boundary analysis: it proves the difference quotient with denominator `||u||` tends to `0` as `u → 0`. | Batch `9` `zero` row changed from `not_applicable` to `checked`. |

Result:

- `boundary-audit` now reports `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `boundary-audit` reports `7` upheld rows, exactly the detector-false-positive candidates above.

## Citation fidelity

Decision: no repair required in this dispatch.

Evidence:

- `node tools/citation-fidelity.mjs research/frontier-23-proof-contracts.json --fail-on-missing-quote`
  reported `1102` citations over `389` authored items, with `0` missing quotes
  and `0` widening candidates.

Changed record:

- none

## Finite smoke / gate liveness

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Disposition: repaired by adding one applicable `matrix-ring-laws-mod-n` obligation.

Evidence:

- `cor-determinant-multiplicativity-from-the-top-exterior-power` states
  `det(S∘T)=det(S)det(T)`, which is exactly the determinant-multiplicativity
  half of `matrix-ring-laws-mod-n`.
- The check is a real falsification route for this item's asserted formula: any
  counterexample matrix pair modulo `n` would falsify the displayed corollary
  statement, not merely some auxiliary proof route.

Changed record:

- `research/frontier-23-batch-2.proof-contracts.json`

Result:

- `node tools/finite-smoke.mjs research/frontier-23-proof-contracts.json`
  now reports `0 error(s), 1 check(s) over 1/389 item(s) carrying obligations`.
- `node tools/gate-liveness.mjs --run frontier-23 --contracts research/frontier-23-proof-contracts.json --checklists research/frontier-23-batch-*.coverage.json --min-checks 1`
  now reports `live finite-smoke 1 checks`.

## Risk reviews

`node tools/risk-report.mjs research/frontier-23-proof-contracts.json --require-reviewed`
already exits `0` on Saturday, August 29, 2026, so there was no missing
`risk_review` contract defect to repair here.

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-23 research/frontier-23-proof-contracts.json research/frontier-23-batch-*.proof-contracts.json`
  - pass; wrote the merged run contract with `389` scoped items.
- `node tools/proof-contract.mjs research/frontier-23-proof-contracts.json --strict`
  - pass; `0` errors, `2` warnings, `389/389` items checked.
- `node tools/finite-smoke.mjs research/frontier-23-proof-contracts.json`
  - pass; `1` live check.
- `node tools/boundary-audit.mjs research/frontier-23-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `7` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-23-proof-contracts.json --fail-on-missing-quote`
  - pass; `1102` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-23 --contracts research/frontier-23-proof-contracts.json --checklists research/frontier-23-batch-*.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 389`, `coverage-checklist 605`, `precheck 7426`.
- `node tools/risk-report.mjs research/frontier-23-proof-contracts.json --require-reviewed`
  - pass; `0 error(s), 389 item(s) routed`.

## Defect ledger

No item-text defect was confirmed in this dispatch, so no
`research/defect-ledger.jsonl` row was appended here.

## Remaining blocker

No blocker remains in this dispatch scope.

Residual note:

- `proof-contract --strict` still emits two existing `shotgun-bracket`
  warnings on `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` and
  `thm-degenerate-exactness-criteria`, but they are warnings only and did not
  block this contract-detector pass.
