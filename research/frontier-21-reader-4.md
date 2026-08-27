# frontier-21 - reader-4 report

Run: `frontier-21`  
Role: independent reader (`reader-4`)  
Batch: `4`  
Date: Thursday, August 27, 2026

## Scope opened

- Control and design artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-beta-4.task.md`, `research/frontier-21-dispatch/reader-reader-4.prompt.md`, `research/frontier-21-batch-4.pages.json`, `research/frontier-21-batch-4.coverage.json`, `research/frontier-21-batch-4.proof-contracts.json`, `research/frontier-21-batch-4.notes.md`, the relevant `research/plan-algebra-track.md` X-2 section, and the live `.autopilot/status.md`.
- Assigned page files opened:
  - `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`
  - `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition-examples.md`
- Prerequisite page files opened:
  - `library/abstract-algebra/the-fundamental-theorem-of-algebra.md`
  - `library/linear-algebra/inner-product-spaces-and-orthogonality.md`
  - `library/linear-algebra/triangularisation-and-jordan-canonical-form.md`
- Assigned item scope: opened all `53` assigned item paths from the manifest.
  - Extant on current bytes: `53`
  - Missing on current bytes: `0`
- Dependency items opened for verification and repair analysis: `37`

```text
cor-algebraic-extensions-of-perfect-fields-are-separable
cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure
cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
cor-primary-projections-are-polynomials-in-the-endomorphism
def-adjoint-of-a-linear-map-between-inner-product-spaces
def-algebraic-closure
def-coordinate-column-and-matrix-of-a-linear-map
def-definiteness-inertia-and-signature-data-over-the-reals
def-diagonalisable-endomorphism
def-eigenvalue-eigenvector-eigenspace-and-spectrum
def-inner-product-norm
def-inner-product-space
def-linear-isometry-and-orthogonal-or-unitary-operator
def-nilpotent-endomorphism
def-orthogonal-projection
def-perfect-field
lem-complex-conjugation-and-modulus-laws
prop-adjoint-algebra
prop-complete-invariant-flags-and-upper-triangular-matrices
prop-standard-coordinate-inner-products
thm-bilinear-forms-correspond-to-linear-maps-into-the-dual
thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots
thm-dimension-formula
thm-dimension-of-a-linear-subspace
thm-finite-dimensional-orthogonal-decomposition
thm-finite-galois-extension-characterizations
thm-fundamental-theorem-of-finite-galois-theory
thm-gram-schmidt-orthonormalisation
thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
thm-matrix-of-a-composite-is-the-product
thm-matrix-of-the-adjoint-is-the-conjugate-transpose
thm-of-square-roots
thm-rank-nullity
thm-riesz-representation-in-finite-dimensions
thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
thm-the-complex-numbers-are-algebraically-closed
thm-triangularisation-splitting-criterion
```

## Editable defects confirmed and repaired

- `items/prop-operator-positivity-agrees-with-form-positivity-over-the-reals.md`
  - Confirmed defect: step `1.1` treated `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` as if it already identified `V` with `V^*`, so the written citation did not justify the claimed bijection between endomorphisms and bilinear forms.
  - Repair: added `thm-riesz-representation-in-finite-dimensions`, rewrote the bilinear-form-to-operator construction through `V^*` plus Riesz, reflowed the item, and regenerated the batch-4 proof-contract entry.
- `items/thm-non-negative-operator-characterisations.md`
  - Confirmed defect: the complex-case normality step cited `def-self-adjoint-and-normal-endomorphism` directly without declaring it; the dependency was avoidable and the proof step was cleaner as an elementary derivation from `T=T^*`.
  - Repair: rewrote the complex branch as `T=T^* => TT^*=T^*T`, reflowed the item, and regenerated the batch-4 proof-contract entry.
- `items/def-singular-values-of-an-endomorphism.md`, `items/thm-singular-value-decomposition.md`, `items/cor-rank-equals-number-of-nonzero-singular-values.md`
  - Confirmed defect: these titles still said `endomorphism` after the step-5 broadening of the written statements to arbitrary linear maps `T:V\to W`.
  - Repair: retitled the three items to match their current statements and reflowed the changed files.
- `items/thm-operator-norm-is-the-largest-singular-value.md`
  - Confirmed defect: the old statement and contract treated the zero-dimensional domain case as if a first singular value existed, but the current singular-value definition gives an empty list on the zero space.
  - Repair: split the zero-domain and nonzero-domain cases in the statement, retitled the item, rewrote the proof to introduce the largest singular value only after `V\ne0`, reflowed the item, regenerated its proof-contract entry, refreshed the three citing contract entries `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `thm-eckart-young-best-rank-k-approximation`, and `fs-operator-norm-is-the-largest-eigenvalue-modulus`, and updated the affected boundary row text.
- Batch-local render defects across the current item bytes
  - Confirmed defect: `rendercheck` found `22` errors on the assigned pair, all local to batch-4 items: unsupported `\begin{psmallmatrix}...\end{psmallmatrix}` uses and one multiline display matrix in `ex-real-symmetric-three-by-three-orthogonal-diagonalisation`.
  - Repair: replaced the unsupported matrix environment with KaTeX-supported `pmatrix`, flattened the multiline display source, reflowed the changed items, regenerated `20` affected proof-contract entries, and reran the render and proof gates to green.
- No edited draft item carried a `verification.judge` record, so no stale judge stamp had to be removed.

## Editable defects confirmed and left unrepaired

- None.

## Uneditable defects

- None confirmed on the current assigned page bytes or on the published dependency items opened for verification.

## Notes on artifact scope

- I did not edit `research/frontier-21-batch-4.pages.json`. It still carries the earlier scaffold snapshot for the repaired positivity dependency and the three singular-value title lines. Under the Step-6a license that manifest is evidence only; the live item bytes and refreshed batch proof contract are the editable authorities.

## Page verdicts

- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`: pass after the repaired proof, title, and zero-case statement defects.
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition-examples.md`: pass after the repaired batch-local render defects in the assigned example and false-statement items.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts <21 changed batch-4 item files>`
  - Result: clean second pass; every changed file was already normalized after the repair edits.
- `node tools/regen-contract-entries.mjs research/frontier-21-batch-4.proof-contracts.json <20 changed proof-bearing ids>`
  - Result: `regenerated 20, skipped 0`.
- `node tools/rendercheck.mjs <2 assigned page files + 53 assigned batch-4 item files>` via a local `node` wrapper
  - Result: `55` files checked, all clean.
- `node tools/tsx-run.mjs tools/precheck.mts <20 changed proof-bearing batch-4 item files>`
  - Result: `20 checked, 0 failing - all clean`.
- `node tools/content-policy.mjs research/frontier-21-batch-4.pages.json`
  - Result: `53 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-21-batch-4.proof-contracts.json --strict`
  - Result: `0 error(s), 0 warning(s), 45/45 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-4.proof-contracts.json --fail-on-missing-quote`
  - Result: `89 citation(s) over 45 authored item(s)`; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-21-batch-4.proof-contracts.json --fail-on-contradicted --fail-on-template`
  - Result: no contradicted dispositions and no template reuse cluster at or above the threshold.
- `node tools/depcheck.mjs --quiet`
  - Result: no hard errors; only standing repo-wide warnings outside batch 4.
- `git diff --check`
  - Result: clean.

## Blocker

- None.

Opened count: `53` assigned item files, `37` dependency items, `5` page files, and `12` control/design artifacts.
