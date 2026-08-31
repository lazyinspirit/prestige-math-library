# Frontier 27 contract audit

Date: Monday, August 31, 2026.
Dispatch: `contract-audit-8`
Run: `frontier-27`

## Reproduced detector state on current disk

From the repo root I ran:

- `node tools/merge-proof-contracts.mjs --level frontier-27 research/frontier-27-proof-contracts.json research/frontier-27-batch-1.proof-contracts.json research/frontier-27-batch-2.proof-contracts.json research/frontier-27-batch-3.proof-contracts.json research/frontier-27-batch-4.proof-contracts.json research/frontier-27-batch-5.proof-contracts.json research/frontier-27-batch-6.proof-contracts.json research/frontier-27-batch-7.proof-contracts.json research/frontier-27-batch-8.proof-contracts.json research/frontier-27-batch-9.proof-contracts.json research/frontier-27-batch-10.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-27-proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-27-proof-contracts.json --fail-on-missing-quote`
- `node tools/finite-smoke.mjs research/frontier-27-proof-contracts.json`
- `node tools/gate-liveness.mjs --run frontier-27 --contracts research/frontier-27-proof-contracts.json --checklists research/frontier-27-batch-1.coverage.json,research/frontier-27-batch-2.coverage.json,research/frontier-27-batch-3.coverage.json,research/frontier-27-batch-4.coverage.json,research/frontier-27-batch-5.coverage.json,research/frontier-27-batch-6.coverage.json,research/frontier-27-batch-7.coverage.json,research/frontier-27-batch-8.coverage.json,research/frontier-27-batch-9.coverage.json,research/frontier-27-batch-10.coverage.json --min-checks 1`
- `node tools/risk-report.mjs research/frontier-27-proof-contracts.json --require-reviewed`

Current results on Monday, August 31, 2026:

- `merge-proof-contracts` wrote `research/frontier-27-proof-contracts.json` with `357` scoped items from `10` batch contracts.
- `boundary-audit` reported `2856` boundary rows, `2464` marked `not_applicable`, no template reuse at or above `3`, no contradicted dispositions, and `10` upheld candidate rows for human review.
- `citation-fidelity` reported `935` citations checked over `357` authored items, with `0` missing quotes and `0` widening candidates.
- `finite-smoke` reported `0 error(s), 0 check(s) over 0/357 item(s) carrying obligations`.
- `gate-liveness` failed only on `VACUOUS finite-smoke 0 checks`; its other probes were live: `proof-contract 357 items checked`, `coverage-checklist 579 harvested results`, `precheck 8823 items checked`.
- `risk-report --require-reviewed` exited `0` and reported `0 error(s), 357 item(s) routed`.

## Boundary candidates reviewed

I re-opened each currently flagged item and its owning batch-contract row. All ten current detector hits remain detector inapplicability on the present bytes, and each owning row already carries an item-specific `reviewed.upheld` rationale by `alpha-contract-audit-6`.

| Candidate | Batch | Disposition | Evidence on current bytes | Changed record |
| --- | --- | --- | --- | --- |
| `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` `[zero]` | `2` | upheld | Steps `1.1` and `2.1` compute the relevant denominators explicitly as `9`, `5`, and `200/729`; the zero initial guess is part of one fixed witness, not an omitted zero-denominator branch. | None. Kept the existing `reviewed.upheld` row. |
| `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` `[zero]` | `2` | upheld | Step `2.1` computes `p_0^T A p_0 = 2`, so the detector is reacting to symbolic notation inside a fixed one-step witness rather than to a live zero case. | None. Kept the existing `reviewed.upheld` row. |
| `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` `[zero]` | `2` | upheld | Step `1.1` fixes `r_0^T r_0 = 1` and carries out the next-direction computation directly; the claim is about loss of `A`-conjugacy, not a zero-residual branch. | None. Kept the existing `reviewed.upheld` row. |
| `lem-finite-product-norms-are-equivalent` `[empty]` | `4` | upheld | The statement assumes `n >= 1`, so the product index is already nonempty and the empty-product case is outside the written scope. | None. Kept the existing `reviewed.upheld` row. |
| `thm-finite-products-of-banach-spaces-are-banach` `[empty]` | `4` | upheld | The theorem is also stated only for `n >= 1`, so there is no empty product to analyze separately. | None. Kept the existing `reviewed.upheld` row. |
| `lem-absolutely-convergent-series-is-cauchy` `[empty]` | `4` | upheld | Step `1.1` quantifies only over indices with `m > ell >= N`, so the proof never ranges over an empty tail family. | None. Kept the existing `reviewed.upheld` row. |
| `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws` `[empty]` | `6` | upheld | Here `family` names the fixed collection `(H_n, partial_n)`; step `2.1` imports exactness and naturality, not an empty-index split. | None. Kept the existing `reviewed.upheld` row. |
| `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph` `[empty]` | `7` | upheld | The proof fixes a forbidden family `F` and immediately chooses `H in F` in step `1.1`; no aggregate in the argument collapses to a separate empty-family case. | None. Kept the existing `reviewed.upheld` row. |
| `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair` `[empty]` | `7` | upheld | The actual split is outcomes `1`, `2`, and `3`, and step `1.3` explicitly records nonempty sets `A` and `B`; the detector is firing on notation, not a live empty-case branch. | None. Kept the existing `reviewed.upheld` row. |
| `thm-parametric-transversality` `[empty]` | `8` | upheld | The item studies one fixed smooth family `F`; step `4.1` proves the bad-parameter set is null via Sard for `pi_S`, not by splitting off a separate empty-family branch. | None. Kept the existing `reviewed.upheld` row. |

Current post-read `boundary-audit` state on the merged contract:

- `TEMPLATE REUSE — none at or above 3 members`
- `CONTRADICTED DISPOSITIONS — none found by the three detectors`
- `UPHELD BY REVIEW — 10 row(s)`

Note on the earlier batch-8 repair:

- `prop-local-coordinate-expression-for-a-differential-form` is not a current candidate. Its `empty` boundary row is already `checked` on current disk with step-specific evidence: step `1.1` expands over the increasing multi-index basis, and when `k > n` that basis is empty, so the local expression is the empty sum.

## Citation fidelity

Decision: no live citation defect.

Evidence:

- `node tools/citation-fidelity.mjs research/frontier-27-proof-contracts.json --fail-on-missing-quote`
- Output: `citation-fidelity: 935 citation(s) over 357 authored item(s)`
- Output: `QUOTE NOT FOUND — none`
- Output: `WIDENING CANDIDATES — none`

Changed record:

- None.

## Gate liveness / finite smoke

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Decision: remaining blocker; no contract-row repair is licensed by the current frontier-27 statements.

Evidence:

- `node tools/finite-smoke.mjs research/frontier-27-proof-contracts.json`
- Output: `finite-smoke: 0 error(s), 0 check(s) over 0/357 item(s) carrying obligations`
- The live registry in `tools/finite-smoke.mjs` still contains only these checks:
  - `tree-characterisation`
  - `forest-edge-component-count`
  - `induced-complement-commutes`
  - `monotone-map-need-not-preserve-meets`
  - `full-subposet-meet-differs-from-ambient`
  - `cyclic-subgroup-lagrange`
  - `binomial-congruence-solution-count`
  - `vieta-elementary-symmetric`
  - `linear-recurrence-matches-rational-series`
  - `matrix-ring-laws-mod-n`
- I re-opened the frontier-27 items closest to those themes on current bytes:
  - `fs-a-cartesian-closed-category-has-all-finite-limits`
  - `fs-every-cartesian-closed-category-is-locally-cartesian-closed`
  - `cex-a-monoidal-category-need-not-be-closed`
  - `ex-the-e-graph-and-co-e-graph-by-adjacency`
  - `ex-the-bird-graph-and-co-bird-graph-by-adjacency`
  - `cor-dimension-of-the-kth-exterior-power-is-binomial`
  - `prop-exterior-power-duality-pairing`
  - `ex-determinant-as-the-pairing-of-top-exterior-powers`
  - `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence`
- None of those written statements asserts one of the registered invariants tightly enough to support a `finite_smoke` row without inventing coverage:
  - the category-theory false statements and counterexample use nonempty sets, missing equalizers, missing slice pullbacks, and failure of right adjoints, not the registry's two meet-preservation counterexamples;
  - the graph examples identify named complements, not the theorem that complement and induced-subgraph formation commute;
  - the exterior-algebra items count basis vectors or identify determinant pairings, not binomial congruence counts, Vieta identities, or matrix-ring laws modulo `n`;
  - the Arnoldi/Lanczos theorem states a three-term recurrence and tridiagonal projection, not the registry's rational-series criterion for linear recurrences.

Changed record:

- None. I did not add a synthetic `finite_smoke` row.

Post-rerun `gate-liveness` state:

- `VACUOUS finite-smoke 0 checks (exit 0)`
- `live proof-contract 357 items checked`
- `live coverage-checklist 579 harvested results`
- `live precheck 8823 items checked`

## Risk reviews

`node tools/risk-report.mjs research/frontier-27-proof-contracts.json --require-reviewed` exited `0` on Monday, August 31, 2026. There is no missing `risk_review` defect on the current merged bytes.

## Defect ledger

I did not append a `research/defect-ledger.jsonl` row in this dispatch. No current detector candidate resolved to an item-content defect.

## Final state

- `research/frontier-27-proof-contracts.json` was regenerated from the batch contracts.
- `research/frontier-27-alpha-contract-audit.md` was rewritten for `contract-audit-8`.
- No batch contract changed in this dispatch.
- `boundary-audit` is clean on templates and contradicted rows, with `10` upheld detector-inapplicability rows remaining.
- `citation-fidelity` is clean.
- `risk-report --require-reviewed` is clean.
- `gate-liveness` still fails because `finite-smoke` executes over an empty obligation set on the current registry and current frontier-27 statements.
