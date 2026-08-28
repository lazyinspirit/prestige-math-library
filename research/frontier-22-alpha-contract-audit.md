# Frontier 22 contract audit

Date: Friday, August 28, 2026.
Dispatch: `contract-audit-3`
Run: `frontier-22`

## Reproduced detector state before repair

From the repo root I reran:

- `node tools/merge-proof-contracts.mjs --level frontier-22 research/frontier-22-proof-contracts.json research/frontier-22-batch-*.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-22-proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/citation-fidelity.mjs research/frontier-22-proof-contracts.json --fail-on-missing-quote`
- `node tools/gate-liveness.mjs --run frontier-22 --contracts research/frontier-22-proof-contracts.json --checklists research/frontier-22-batch-1.coverage.json,research/frontier-22-batch-2.coverage.json,research/frontier-22-batch-3.coverage.json,research/frontier-22-batch-4.coverage.json,research/frontier-22-batch-5.coverage.json,research/frontier-22-batch-6.coverage.json,research/frontier-22-batch-7.coverage.json,research/frontier-22-batch-8.coverage.json,research/frontier-22-batch-9.coverage.json --min-checks 1`
- Diagnostic only: `node tools/risk-report.mjs research/frontier-22-proof-contracts.json --require-reviewed`

Initial state on current disk:

- `boundary-audit`: `24` template clusters covering `609` rows, plus `14` contradicted candidates.
- `citation-fidelity`: `0` missing quotes and `2` widening candidates.
- `gate-liveness`: `VACUOUS finite-smoke 0 checks`.
- `risk-report --require-reviewed`: already clean on current disk; no missing `risk_review` row was part of this dispatch.

## Boundary audit

### Template clusters

Decision: `confirmed real contract defects`.

Evidence:

- Batch `6` carried `8` template clusters covering `352` rows across the Riemann-sphere and normal-family items.
- Batch `7` carried `8` template clusters covering `226` rows across the several-complex-variables items.
- Batch `1` carried `5` checked-evidence clusters covering `19` rows on the Britton/tree items.
- Batch `4` carried `1` checked-evidence cluster covering `5` rows on the graph-theory items.
- Batch `3` carried `2` endpoint-rationale clusters covering `7` rows in the representation-theory batch.

Repair:

- Batch `1`: rewrote the generic `checked` boundary evidence so each row now cites the actual numbered-step claim for that exact axis.
- Batch `3`: replaced the bare `No ordered endpoint parameter appears/occurs.` rows with item-specific endpoint rationales.
- Batch `4`: rewrote the generic `nonempty-choice` evidence to cite the actual step text making the choice.
- Batch `6`: rewrote every clustered `not_applicable` rationale with item-specific text keyed to the item title and the actual axis.
- Batch `7`: rewrote every clustered `not_applicable` rationale with item-specific text keyed to the item title and the actual axis.

Changed records:

- `research/frontier-22-batch-1.proof-contracts.json`
- `research/frontier-22-batch-3.proof-contracts.json`
- `research/frontier-22-batch-4.proof-contracts.json`
- `research/frontier-22-batch-6.proof-contracts.json`
- `research/frontier-22-batch-7.proof-contracts.json`

Result:

- `boundary-audit` now reports `TEMPLATE REUSE — none at or above 3 members`.

### Contradicted candidates

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `cor-support-is-union-of-closures-of-associated-primes [empty]` | repaired | The empty associated-prime family is real: when `M=0`, step `1.1` uses the empty prime filtration and step `1.2` makes the reverse inclusion vacuous. | Batch `2` `empty` row changed from `not_applicable` to `checked`. |
| `thm-zero-divisors-on-a-module [empty]` | repaired | The empty associated-prime family is real: step `1.1` is vacuous when `Ass_R(M)=∅`, and step `1.2` shows every zero divisor lies in an associated prime, so the zero module contributes no counterexample. | Batch `2` `empty` row changed from `not_applicable` to `checked`. |
| `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field [empty]` | upheld | Step `1.1` proves `k[G]` is a nonzero semisimple ring and then invokes Wedderburn-Artin with a positive number of factors, so the product index is never empty. | Batch `3` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `cor-sum-of-squares-formula-for-irreducible-degrees [empty]` | upheld | A finite group always has the trivial irreducible representation, so the list `V_1,\dots,V_r` is nonempty and the sum in step `2.1` is not an empty aggregate. | Batch `3` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-spectral-radius-is-bounded-by-average-and-maximum-degree [empty]` | upheld | The hypothesis `n>=1` makes `V(G)` nonempty, so the average-degree sum is over a fixed nonempty vertex set rather than an empty family. | Batch `4` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-binet-cauchy-formula [empty]` | upheld | The theorem assumes `m>=1`; when `m>n`, step `2.1` handles that branch directly, and when `m<=n` the family of `m`-subsets is nonempty. | Batch `4` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `cor-kirchhoff-eigenvalue-product-formula [empty]` | upheld | The statement assumes `n>=2`, so the product over `j=2,\dots,n` always has at least one factor. | Batch `4` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-spectral-gap-implies-connectivity-and-edge-expansion [zero]` | upheld | The Given line fixes a nonempty proper subset `S`, so `1<=|S|<=n-1` and therefore `n>=2` before the proof divides by `n`. | Batch `4` `zero` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces [empty]` | repaired | The empty family really is a boundary case: steps `1.1` and `2.1` handle the forward implication, and step `1.2` handles the reverse implication vacuously when `F=∅`. | Batch `5` `empty` row changed from `not_applicable` to `checked`. |
| `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces [empty]` | upheld | The only family named is the sequence family `{f_n : n in N}`, whose index set is not empty; the detector tripped on the word `family`, not on an empty aggregate. | Batch `5` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `cor-dominated-convergence-is-a-vitali-corollary [zero]` | upheld | Step `2.2` explicitly chooses `epsilon>0` before using `epsilon^{-1}`, so the denominator seen by the detector is already restricted away from zero. | Batch `5` `zero` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations [empty]` | upheld | Every substantive clause quantifies only over nonempty `H`-free graphs; the family token names the forbidden family `H`, not an indexed aggregate with an empty-value branch. | Batch `9` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical [empty]` | upheld | The hypothesis `kappa(G)<|V(G)|^tau` already forces `G` to be nonempty, and the word `family` only names the forbidden family `H`. | Batch `9` `empty` row kept `not_applicable`; added `reviewed.upheld`. |
| `thm-pure-blockades-with-cograph-patterns-have-additive-kappa [empty]` | upheld | A blockade has length `t>=1` and each block is nonempty by definition, so the sum over `i=1,\dots,t` cannot collapse to an empty aggregate. | Batch `9` `empty` row kept `not_applicable`; added `reviewed.upheld`. |

Result:

- `boundary-audit` now reports `CONTRADICTED DISPOSITIONS — none found by the three detectors`.
- `boundary-audit` reports `11` upheld rows, exactly the detector-inapplicable candidates above.

## Citation fidelity

Decision: `confirmed real fact-line widenings`.

Evidence:

- `thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field`, fact `[L3]`, restated `thm-simple-modules-over-semisimple-rings` without its explicit `r>=1` hypothesis.
- `thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree`, fact `[L2]`, made the same omission.

Repair:

- Added `with r>=1` to the two fact lines so they now preserve the cited theorem's positive-factor hypothesis verbatim.

Changed records:

- `items/thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field.md`
- `items/thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree.md`

Result:

- `citation-fidelity` now reports `0` missing quotes and `0` widening candidates.

## Gate liveness / finite smoke

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Decision: `confirmed real contract defect`.

Evidence:

- The run contains finitely checkable graph and matrix claims, so zero smoke checks is under-selection rather than registry inapplicability.
- The cleanest exact matches on current disk were both in batch `4`:
  - `thm-matrix-tree-theorem`, step `1.2`: `If G_S is connected, then G_S has n-1 edges and is therefore a tree by [L2].`
  - `thm-binet-cauchy-formula`, Statement: the displayed determinant formula, whose square case is what `matrix-ring-laws-mod-n` probes.

Repair:

- Added `tree-characterisation` to the `finite_smoke` array of `thm-matrix-tree-theorem`.
- Added `matrix-ring-laws-mod-n` to the `finite_smoke` array of `thm-binet-cauchy-formula`.

Changed record:

- `research/frontier-22-batch-4.proof-contracts.json`

Result:

- `finite-smoke` now reports `0 error(s), 2 check(s) over 2/332 item(s) carrying obligations`.
- `gate-liveness` now reports `finite-smoke live 2 checks`.

## Risk reviews

`node tools/risk-report.mjs research/frontier-22-proof-contracts.json --require-reviewed` already exited `0` on Friday, August 28, 2026, so there was no missing-`risk_review` contract defect to repair in this dispatch.

## Defect ledger

Appended and rendered in the same act:

- `frontier-22-contract-audit-001` — boundary rows
- `frontier-22-contract-audit-002` — citation widenings
- `frontier-22-contract-audit-003` — finite-smoke under-selection

Receipts:

- `node tools/defect-ledger.mjs append --file /tmp/frontier-22-alpha-contract-audit-ledger-rows.json`
- `node tools/defect-ledger.mjs validate --run frontier-22`

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-22 research/frontier-22-proof-contracts.json research/frontier-22-batch-*.proof-contracts.json`
  - pass; wrote the merged run contract with `332` scoped items.
- `node tools/proof-contract.mjs research/frontier-22-proof-contracts.json --strict`
  - pass; `0` errors, `1` warning, `332/332` items checked.
- `node tools/finite-smoke.mjs research/frontier-22-proof-contracts.json`
  - pass; `2` checks.
- `node tools/boundary-audit.mjs research/frontier-22-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `11` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-22-proof-contracts.json --fail-on-missing-quote`
  - pass; `951` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-22 --contracts research/frontier-22-proof-contracts.json --checklists research/frontier-22-batch-1.coverage.json,research/frontier-22-batch-2.coverage.json,research/frontier-22-batch-3.coverage.json,research/frontier-22-batch-4.coverage.json,research/frontier-22-batch-5.coverage.json,research/frontier-22-batch-6.coverage.json,research/frontier-22-batch-7.coverage.json,research/frontier-22-batch-8.coverage.json,research/frontier-22-batch-9.coverage.json --min-checks 1`
  - pass; `finite-smoke 2`, `proof-contract 332`, `coverage-checklist 403`, `precheck 7037`.
- `node tools/risk-report.mjs research/frontier-22-proof-contracts.json --require-reviewed`
  - pass; `0 error(s), 332 item(s) routed`.
- `node tools/defect-ledger.mjs validate --run frontier-22`
  - pass; `235` frontier-22 defect rows checked, `0` errors.

## Remaining blocker

No remaining blocker in this dispatch scope.

Residual note:

- `proof-contract --strict` still emits one existing `shotgun-bracket` warning on `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`, but it is a warning only and did not block any contract detector in this pass.
