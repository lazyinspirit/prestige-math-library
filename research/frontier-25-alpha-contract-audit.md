# Frontier 25 contract audit

Date: Sunday, August 30, 2026.
Dispatch: `contract-audit-7`
Run: `frontier-25`

## Reproduced detector state before repair

From the repo root I reran:

- `node tools/boundary-audit.mjs research/frontier-25-proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-25-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-25 --contracts research/frontier-25-proof-contracts.json --checklists research/frontier-25-batch-1.coverage.json research/frontier-25-batch-2.coverage.json research/frontier-25-batch-3.coverage.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-5.coverage.json research/frontier-25-batch-6.coverage.json research/frontier-25-batch-7.coverage.json research/frontier-25-batch-8.coverage.json research/frontier-25-batch-9.coverage.json research/frontier-25-batch-10.coverage.json research/frontier-25-batch-11.coverage.json --min-checks 1`
- diagnostic only: `node tools/risk-report.mjs research/frontier-25-proof-contracts.json --require-reviewed`

Initial state on current disk:

- `boundary-audit`: `28` template clusters covering `288` rows, plus `13` contradicted candidates.
- `citation-fidelity`: `0` missing quotes and `0` widening candidates.
- `gate-liveness`: `VACUOUS finite-smoke 0 checks`.
- `risk-report --require-reviewed`: `1` missing Alpha `risk_review` row on `lem-null-homology-implies-connected-spherical-complement`.

## Template-cluster repairs

Decision: `confirmed real contract defects`.

Evidence:

- Batch `1` had a four-row example iff cluster in the valuation-ring examples.
- Batch `3` had repeated short checked evidence in the Radon-Nikodym / Lebesgue-decomposition batch (`zero`, `endpoints`, `one`, and iff rows).
- Batch `4` had the dominant failure: repeated simply-connected-plane `not_applicable` text across `empty`, `zero`, `one`, `degenerate`, `endpoints`, `nonempty-choice`, and both iff axes, plus one short checked iff row.
- Batch `6` had repeated categorical `not_applicable` rows for example iff, false-statement iff, endpoint, and zero axes.
- Batch `9` had five same-item checked clusters where one step excerpt was reused for `empty`, `zero`, and `degenerate`.

Repair:

- Rewrote the flagged clustered boundary rows in the owning batch contracts so each row now either:
  - cites the actual step text handling that axis; or
  - gives an item-specific mathematical reason tied to the current item title and claim.
- Left the detector-false-positive rows as `not_applicable`, but recorded specific `reviewed: { upheld: true, by: "contract-audit-7", reason: ... }` only where the detector was inapplicable.

Changed records:

- `research/frontier-25-batch-1.proof-contracts.json`
- `research/frontier-25-batch-3.proof-contracts.json`
- `research/frontier-25-batch-4.proof-contracts.json`
- `research/frontier-25-batch-6.proof-contracts.json`
- `research/frontier-25-batch-9.proof-contracts.json`

Result:

- `boundary-audit` now reports `TEMPLATE REUSE — none at or above 3 members`.

## Contradicted-candidate adjudications

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures [empty]` | upheld | The detector is reacting to the fixed exhaustion notation `\bigcup_n X_n = X`. The proof never branches on an optional empty family; the index set is the fixed `\mathbb N`. | Batch `3` `empty` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality [empty]` | upheld | Same issue: the only family is the fixed exhaustion `(X_n)`, so the detector's family regex is inapplicable. | Batch `3` `empty` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `thm-integration-against-a-radon-nikodym-derivative [empty]` | repaired | The empty simple-function case is real: in the canonical disjoint representation the zero function may contribute no nonzero level sets, and then step `2.1` still gives the same empty-sum identity on both sides. | Batch `3` `empty` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `thm-additivity-of-radon-nikodym-derivatives [zero]` | upheld | The detector is reading `d\nu/d\mu` as literal division. In this item that is derivative notation, and the proof never divides by a free scalar. | Batch `3` `zero` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `thm-chain-rule-for-radon-nikodym-derivatives [empty]` | upheld | The common exhaustion `(X_n)` is fixed data, not a separate empty-family branch. | Batch `3` `empty` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `thm-chain-rule-for-radon-nikodym-derivatives [zero]` | upheld | The detector is again reading derivative notation as arithmetic division. The proof multiplies representing densities instead. | Batch `3` `zero` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `cor-reciprocal-rule-for-equivalent-sigma-finite-measures [zero]` | upheld | The only slash symbols are Radon-Nikodym derivatives, not free denominators. The proof is chain-rule plus uniqueness. | Batch `3` `zero` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite [zero]` | upheld | `d\nu_a/d\mu` is derivative notation, and the argument uses integrals and total variation rather than dividing by a zero-sensitive parameter. | Batch `3` `zero` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one [zero]` | upheld | The example multiplies the explicit densities `x` and `2`; the detector false positive again comes from derivative notation. | Batch `3` `zero` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion [zero]` | repaired | Step `2.1` really does discharge the zero-denominator issue: the proof integrates over `E=(0,\delta/2)`, so `x>0` on the domain and the singularity appears only as the endpoint limit at `0`. | Batch `3` `zero` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure [zero]` | repaired | Same repair class: step `2.1` uses `E=(0,\delta/2)`, so `x` never vanishes on the domain and the counterexample is endpoint divergence at `0`. | Batch `3` `zero` row changed from `not_applicable` to `checked`, with step-linked evidence. |
| `thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers [empty]` | upheld | The detector is reacting to the displayed recurrence sums, but the theorem restricts them to `n >= 2` and `m >= 1`, so the shown index ranges are nonempty and the excluded `n = 0` case is outside the statement. | Batch `6` `empty` row kept `not_applicable`; added specific `reviewed.upheld`. |
| `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb [zero]` | repaired | The old `not_applicable` row was false because the proof divides by `|X|`. Steps `1.2` and `5.1` together show `|V(G)| > 2^{1/\tau} > 1`, and with `\delta > 0` and `|X| \ge \delta |V(G)|`, every later division by `|X|` is by a positive quantity. | Batch `8` `zero` row changed from `not_applicable` to `checked`, with step-linked evidence. |

Result:

- `boundary-audit` now reports `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `boundary-audit` reports `9` upheld rows, exactly the detector-false-positive candidates above.

## Citation fidelity

Decision: no repair required in this dispatch.

Evidence:

- `node tools/citation-fidelity.mjs research/frontier-25-proof-contracts.json --fail-on-missing-quote`
  reported `755` citations over `290` authored items, with `0` missing quotes
  and `0` widening candidates.

Changed record:

- none

## Finite smoke / gate liveness

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Disposition: repaired by adding one applicable `matrix-ring-laws-mod-n` obligation.

Evidence:

- `ex-the-special-linear-group-as-a-regular-level-set` explicitly states in
  fact `[F1]` that the determinant is multiplicative, and step `1.1` factors
  `\det(A+tH)` through that law.
- The bounded matrix-law check is a real falsification route for that asserted
  formula: a counterexample modulo `n` would directly expose a sign or index
  convention error in the item's determinant step.

Changed record:

- `research/frontier-25-batch-9.proof-contracts.json`

Result:

- `node tools/finite-smoke.mjs research/frontier-25-proof-contracts.json`
  now reports `0 error(s), 1 check(s) over 1/290 item(s) carrying obligations`.
- `node tools/gate-liveness.mjs --run frontier-25 --contracts research/frontier-25-proof-contracts.json --checklists ... --min-checks 1`
  now reports `live finite-smoke 1 checks`.

## Risk reviews

Candidate: `risk-report --require-reviewed` reported one missing complete
`risk_review`.

Disposition: repaired.

Evidence:

- `lem-null-homology-implies-connected-spherical-complement` is still
  `critical` on current bytes and had no `risk_review` block in its owning
  batch contract.
- I reread the live proof against the cited dependencies and recorded the
  actual high-risk point: turning disconnected spherical complement into a
  cycle in `\Omega` with nonzero index at an omitted point.

Changed record:

- `research/frontier-25-batch-4.proof-contracts.json`

Result:

- `node tools/risk-report.mjs research/frontier-25-proof-contracts.json --require-reviewed`
  now reports `0 error(s), 290 item(s) routed`.

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-25 research/frontier-25-proof-contracts.json research/frontier-25-batch-1.proof-contracts.json research/frontier-25-batch-2.proof-contracts.json research/frontier-25-batch-3.proof-contracts.json research/frontier-25-batch-4.proof-contracts.json research/frontier-25-batch-5.proof-contracts.json research/frontier-25-batch-6.proof-contracts.json research/frontier-25-batch-7.proof-contracts.json research/frontier-25-batch-8.proof-contracts.json research/frontier-25-batch-9.proof-contracts.json research/frontier-25-batch-10.proof-contracts.json research/frontier-25-batch-11.proof-contracts.json`
  - pass; wrote the merged run contract with `290` scoped items.
- `node tools/proof-contract.mjs research/frontier-25-proof-contracts.json --strict`
  - pass; `0` errors, `0` warnings, `290/290` items checked.
- `node tools/finite-smoke.mjs research/frontier-25-proof-contracts.json`
  - pass; `0` errors, `1` live check.
- `node tools/boundary-audit.mjs research/frontier-25-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `9` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-25-proof-contracts.json --fail-on-missing-quote`
  - pass; `755` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-25 --contracts research/frontier-25-proof-contracts.json --checklists research/frontier-25-batch-1.coverage.json research/frontier-25-batch-2.coverage.json research/frontier-25-batch-3.coverage.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-5.coverage.json research/frontier-25-batch-6.coverage.json research/frontier-25-batch-7.coverage.json research/frontier-25-batch-8.coverage.json research/frontier-25-batch-9.coverage.json research/frontier-25-batch-10.coverage.json research/frontier-25-batch-11.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 290`, `coverage-checklist 532`, `precheck 8114`.
- `node tools/risk-report.mjs research/frontier-25-proof-contracts.json --require-reviewed`
  - pass; `0` errors, `290` items routed.

## Defect ledger

No item-text defect was confirmed in this dispatch, so no
`research/defect-ledger.jsonl` row was appended here.

## Remaining blocker

No blocker remains in this dispatch scope.
