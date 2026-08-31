# frontier-26 reader-2 report

Date: Sunday, August 30, 2026.
Batch: `research/frontier-26-batch-2.pages.json`

## Opened scope

- Control and dispatch artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-26-reader.task.md`, `research/frontier-26-dispatch/reader-reader-2.prompt.md`, `research/frontier-26-step6-hash-2-pre.json`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts opened: `research/frontier-26-batch-2.pages.json`, `research/frontier-26-batch-2.coverage.json`, `research/frontier-26-batch-2.proof-contracts.json`, and `research/frontier-26-batch-2.notes.md`.
- Assigned pages opened: `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`, `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres-examples.md`, `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md`, and `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation-examples.md`.
- Prerequisite page context opened: `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md`, `library/real-analysis/inverse-and-implicit-function-theorems.md`, and `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`.
- Assigned item scope: opened all `60` batch-owned item files from the manifest.
- Direct published dependency items opened for verification: `16`.

```text
cor-a-simple-eigenvalue-has-one-dimensional-eigenspace
cor-inverse-matrix-by-adjugate
def-determinant-of-a-square-matrix
def-eigenvalue-eigenvector-eigenspace-and-spectrum
def-frobenius-matrix-norm
def-inner-product-norm
def-invertible-matrix-and-general-linear-group
def-self-adjoint-and-normal-endomorphism
def-trace-of-a-square-matrix
def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
lem-matrix-inversion-preserves-ck-regularity
thm-least-squares-solutions-and-normal-equation
thm-matrix-of-the-adjoint-is-the-conjugate-transpose
thm-operator-invertible-iff-determinant-nonzero
thm-parametrized-implicit-function-theorem-with-higher-regularity
thm-singular-value-decomposition
```

## Edits kept

- `items/thm-derivative-of-matrix-inversion.md`
  Repaired the proof so it now actually proves local invertibility and the `o(\|H\|)` remainder estimate before identifying the derivative formula.
- `items/thm-directional-derivative-of-a-simple-positive-singular-value.md`
  Repaired the proof by adding the missing simple-eigenvalue branch existence route for the Hermitian block path and by making the simplicity transfer to the block matrix explicit.
- `items/cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning.md`
  Replaced the decimal conditioning estimate with the exact value `(3+\sqrt5)/2`, which removes the bogus proof-contract step parse and the denominator-side boundary false positive.
- `items/prop-reduced-resolvent-identities-for-a-simple-eigenvalue.md`
  Replaced the unused dependency with the actually used spectral-projector definition and made the `(I-P)v=z` computation explicit.
- `items/thm-derivative-of-the-simple-spectral-projector.md`
  Removed the unused fact row so the proof contract matches the current proof.
- `items/prop-simple-spectral-projector-is-scale-invariant.md`
  Made the nonzero-denominator check explicit before cancelling the rescaling factor.
- `research/frontier-26-batch-2.proof-contracts.json`
  Regenerated the touched contract entries and corrected the remaining zero-boundary row for `prop-simple-spectral-projector-is-scale-invariant` to match the repaired proof.

## Confirmed defects

1. `items/thm-derivative-of-matrix-inversion.md`
   Disposition: repaired in the owned A-page item.
   Severity: fatal.
   Evidence: the original proof only differentiated `AA^{-1}=I` formally and solved for a candidate linear map; it never established that inversion is differentiable on a neighborhood of the invertible matrix.
   Repair: added the local-invertibility and remainder estimate argument, then recovered the same derivative formula from the product rule.

2. `items/thm-directional-derivative-of-a-simple-positive-singular-value.md`
   Disposition: repaired in the owned A-page item.
   Severity: fatal.
   Evidence: the original proof invoked the Hermitian simple-eigenvalue derivative formula for the block matrix without first justifying that the block path has a local differentiable simple-eigenvalue branch through `\sigma`.
   Repair: added `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` to `deps`, inserted fact `[L2]`, and rewrote the proof to construct the block path, verify simplicity of the `\sigma` eigenspace there, and only then apply the Hermitian derivative formula.

3. `items/cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning.md`
   Disposition: repaired in the owned B-page item.
   Severity: nonfatal.
   Evidence: the step text `\approx 2.618` was parsed by `proof-contract --strict` as a spurious forward step reference `2.618`, so the item failed the focused contract check on current bytes.
   Repair: replaced the decimal by the exact condition number `(3+\sqrt5)/2`.

4. `items/prop-reduced-resolvent-identities-for-a-simple-eigenvalue.md`
   Disposition: repaired in the owned A-page item.
   Severity: nonfatal.
   Evidence: the item carried an unused dependency and an unused labeled citation row, which left the proof contract inconsistent with the actual proof.
   Repair: swapped the dependency to `def-simple-spectral-projector`, added the corresponding fact row, and cited it where the proof computes `(I-P)v`.

5. `items/thm-derivative-of-the-simple-spectral-projector.md`
   Disposition: repaired in the owned A-page item.
   Severity: nonfatal.
   Evidence: the fact row `[F1]` was present but unused, so `proof-contract --strict` failed on citation-use consistency.
   Repair: removed the unused fact row.

6. `items/prop-simple-spectral-projector-is-scale-invariant.md`
   Disposition: repaired in the owned A-page item and the assigned batch proof contract.
   Severity: nonfatal.
   Evidence: the proof cancelled the rescaled denominator without explicitly recording that it remains nonzero, and the batch contract still marked the zero axis as `not_applicable`, which `boundary-audit` flagged on the current text.
   Repair: made the nonzero-denominator step explicit in the item and updated the batch contract boundary row to `checked` with matching evidence.

- No changed item carried a `verification.judge` block, so no stale judge record needed removal.
- No additional editable or uneditable page, item, or published-dependency defect remained after those repairs on the opened scope.

## Uneditable artifact drift

- `research/frontier-26-batch-2.pages.json` is stale against the current item `deps` frontmatter for these `2` owned ids:

```text
prop-reduced-resolvent-identities-for-a-simple-eigenvalue
  manifest: [def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue, prop-simple-spectral-projector-is-scale-invariant]
  current:  [def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue, def-simple-spectral-projector]

thm-directional-derivative-of-a-simple-positive-singular-value
  manifest: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces, thm-singular-value-decomposition, cor-hermitian-simple-eigenpair-derivative-simplifications]
  current:  [def-real-frechet-derivative-on-real-and-complex-matrix-spaces, thm-singular-value-decomposition, cor-hermitian-simple-eigenpair-derivative-simplifications, thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]
```

- This is real batch-local manifest drift on current bytes, but Step 6a only licensed item repairs and assigned A-page prose repairs. I verified the mathematics against the current item files and left the manifest unchanged. I also left this out of the JSON findings because the schema has no manifest subject type.

## Page verdicts

- `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`: sufficient on the current bytes. I found no A-page summary defect requiring a page-prose edit.
- `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres-examples.md`: sufficient on the current bytes. I made no B-page edit.
- `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md`: sufficient on the current bytes after the repaired A-page item defects. I found no A-page summary defect requiring a page-prose edit.
- `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation-examples.md`: sufficient on the current bytes. I made no B-page edit.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-derivative-of-matrix-inversion.md items/thm-directional-derivative-of-a-simple-positive-singular-value.md`
  Result: both changed items reflowed once and then passed precheck.

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning.md items/prop-reduced-resolvent-identities-for-a-simple-eigenvalue.md items/thm-derivative-of-the-simple-spectral-projector.md items/prop-simple-spectral-projector-is-scale-invariant.md`
  Result: the three proof-bearing repairs reflowed to canonical form; the GMRES counterexample already matched canonical reflow after the exact-value edit.

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-derivative-of-matrix-inversion.md items/thm-directional-derivative-of-a-simple-positive-singular-value.md items/cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning.md items/prop-reduced-resolvent-identities-for-a-simple-eigenvalue.md items/thm-derivative-of-the-simple-spectral-projector.md items/prop-simple-spectral-projector-is-scale-invariant.md`
  Result: `6 checked, 0 failing`.

- `node tools/regen-contract-entries.mjs research/frontier-26-batch-2.proof-contracts.json ...`
  Result: regenerated the touched entries for the six repaired items; one remaining boundary row then needed one manual batch-contract correction to match the repaired projector-scaling proof.

- `node tools/proof-contract.mjs research/frontier-26-batch-2.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 48/48 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-26-batch-2.proof-contracts.json --fail-on-missing-quote`
  Result: `66` citations checked, no quote-not-found rows, and no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-26-batch-2.proof-contracts.json --fail-on-contradicted`
  Result: `384` boundary rows, `374` marked `not_applicable`, no contradicted dispositions.

- `node tools/rendercheck.mjs items/thm-derivative-of-matrix-inversion.md items/thm-directional-derivative-of-a-simple-positive-singular-value.md items/cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning.md items/prop-reduced-resolvent-identities-for-a-simple-eigenvalue.md items/thm-derivative-of-the-simple-spectral-projector.md items/prop-simple-spectral-projector-is-scale-invariant.md library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md library/linear-algebra/krylov-subspaces-arnoldi-and-gmres-examples.md library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation-examples.md`
  Result: `OK — 10 file(s)`.

- `node tools/content-policy.mjs research/frontier-26-batch-2.pages.json`
  Result: `content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/coverage-checklist.mjs research/frontier-26-batch-2.coverage.json --require-destination`
  Result: `coverage-checklist: 2 page(s), 58 harvested result(s), 0 error(s), 0 warning(s)`.

## Blockers

- None in the opened batch-2 mathematical scope.
