# frontier-25 reader-2 report

Date: 2026-08-30
Batch: `2`
Run: `frontier-25`

## Opened scope

- Reader instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-25-reader.task.md`, and `research/frontier-25-dispatch/reader-reader-2.prompt.md`
- Build state: `.autopilot/state.json` and `node tools/autopilot/bin/autopilot.mts status`
- Batch artifacts: `research/frontier-25-batch-2.pages.json`, `research/frontier-25-batch-2.coverage.json`, `research/frontier-25-batch-2.proof-contracts.json`, and `research/frontier-25-batch-2.notes.md`
- Assigned pages:
  - `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`
  - `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples.md`
  - `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md`
  - `library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm-examples.md`
- Assigned items: all 55 item files named in `research/frontier-25-batch-2.pages.json`
- Dependency items opened for verification:
  - `cor-rank-equals-number-of-nonzero-singular-values`
  - `def-diagonalisable-endomorphism`
  - `def-full-reduced-and-column-pivoted-computational-qr-factorisations`
  - `def-householder-reflector`
  - `def-inner-product-norm`
  - `def-invariant-subspace-and-induced-quotient-operator`
  - `def-invertible-matrix-and-general-linear-group`
  - `def-linear-isometry-and-orthogonal-or-unitary-operator`
  - `def-matrix-product-and-identity-matrix`
  - `def-numerical-rank-relative-to-a-norm-scale-and-tolerance`
  - `def-rayleigh-quotient`
  - `def-self-adjoint-and-normal-endomorphism`
  - `def-triangular-and-diagonal-matrices-over-a-commutative-ring`
  - `thm-adjoint-kernel-and-range-orthogonality`
  - `thm-complex-spectral-theorem-for-normal-endomorphisms`
  - `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`
  - `thm-least-squares-solutions-and-normal-equation`
  - `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`
  - `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`
  - `thm-singular-value-decomposition`

## Confirmed repairs

1. `items/def-power-iteration.md`
   - The current definition cited the published real-only `def-rayleigh-quotient` while using the estimate on the Hermitian block of this batch.
   - Repair: replaced that cross-reference with the explicit inner-product formula for the Rayleigh estimate on the unit iterates.

2. `items/def-rayleigh-quotient-iteration.md`
   - The current definition had the same domain mismatch through `[[def-rayleigh-quotient]]`.
   - Repair: wrote the shift directly as `\langle Ax_k,x_k\rangle` and recorded the quotient interpretation in the item body.

3. `items/prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient.md`
   - Step `2.1` on the current bytes incorrectly invoked the tangent-direction derivative with `h=x`, even though `x` is not tangent to the unit sphere at itself.
   - Repair: rewrote the proof to differentiate the explicit quotient formula, then derived `\langle r(x),x\rangle=0` directly from the unit-length hypothesis.

4. `items/prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration.md`
   - The current proof jumped from stationarity to the quadratic Rayleigh-error bound without a local expansion.
   - Repair: replaced that appeal with the orthogonal decomposition `\alpha_k x_k=c_k q_1+z_k`, used Hermitian invariance of `q_1^\perp`, and derived the quadratic and linear rates directly.

5. `items/thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence.md`
   - The current statement overclaimed that the Rayleigh step is defined for every nearby iterate, and the proof relied on an unquantified transfer from shifted inverse iteration.
   - Repair: restricted the statement to nearby iterates for which the Rayleigh step is actually defined, then supplied an explicit spectral-gap proof of the cubic estimate.

6. `research/frontier-25-batch-2.proof-contracts.json`
   - Regenerated the contract entries for the repaired Hermitian/Rayleigh items, refreshed the dependent quote carriers, and corrected the zero-boundary rows so the stored boundary evidence matches the current proofs.

No stale `verification.judge` record was present on any repaired in-flight item, so no judge removal was needed.

## Remaining editable defect

1. `items/thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties.md`
   - Steps `1.1` through `3.1` still rely on two substantial bridge claims that are not proved in the current dependency closure: that the bottom coordinate vector gives the right local eigenvector carrier near deflation, and that the Wilkinson-shifted QR step acts on that carrier exactly like the relevant Rayleigh-quotient iteration step.
   - I reopened the cited local dependencies and the repaired Hermitian iteration block, but I did not find a current on-disk theorem that licenses that QR-to-RQI transfer at the needed strength.
   - I left this as an editable proof-sufficiency defect rather than fabricating a source-level bridge.

## Page verdicts

- `the-moore-penrose-pseudoinverse-and-regularised-least-squares`: pass.
- `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples`: pass.
- `eigenvalue-iterations-and-the-qr-algorithm`: needs follow-up because `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` is still under-justified on the current bytes.
- `eigenvalue-iterations-and-the-qr-algorithm-examples`: needs follow-up because `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` overstates the defined domain of the Rayleigh step at `t=0`.

## Uneditable defects

1. `items/ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix.md`
   - The example statement at lines `33` to `34` says one Rayleigh-quotient iteration step can be started from `x(t)` and step `2.1` at line `47` treats the `t=0` case as having next slope `0`.
   - But `def-rayleigh-quotient-iteration` defines the step only when `A-\mu(t)I` is invertible, and here `\mu(0)=2`, so `A-\mu(0)I=\operatorname{diag}(0,-1)` is singular.
   - Because this is B-page body content, I recorded it as an uneditable in-flight defect instead of patching the item.

## Blockers

None external.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/def-power-iteration.md items/def-rayleigh-quotient-iteration.md items/prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient.md items/prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration.md items/thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence.md`
  - Result: definitions unchanged; the three repaired proof items reflowed and then stayed stable.
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-2.proof-contracts.json thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue cex-equal-dominant-moduli-can-make-power-iteration-cycle prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix`
  - Result: regenerated the affected contract entries and dependent quote carriers.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-power-iteration.md items/def-rayleigh-quotient-iteration.md items/prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient.md items/prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration.md items/thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence.md`
  - Result: pass, `3 checked, 0 failing`; the two repaired definitions are `precheck: n/a`.
- `node tools/tsx-run.mjs tools/precheck.mts $(jq -r '.scope[] | "items/" + . + ".md"' research/frontier-25-batch-2.proof-contracts.json)`
  - Result: pass, `45 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-25-batch-2.proof-contracts.json --strict`
  - Result: pass, `45/45 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-2.proof-contracts.json --fail-on-missing-quote`
  - Result: pass; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-25-batch-2.proof-contracts.json --fail-on-contradicted`
  - Result: pass; no contradicted boundary dispositions.
- `node tools/rendercheck.mjs items/def-power-iteration.md items/def-rayleigh-quotient-iteration.md items/prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient.md items/prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration.md items/thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence.md library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm-examples.md`
  - Result: pass, `OK — 7 file(s)`.
- `node tools/content-policy.mjs research/frontier-25-batch-2.pages.json`
  - Result: pass, `55 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/def-power-iteration.md items/def-rayleigh-quotient-iteration.md items/prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient.md items/prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration.md items/thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence.md research/frontier-25-batch-2.proof-contracts.json library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm.md library/linear-algebra/eigenvalue-iterations-and-the-qr-algorithm-examples.md`
  - Result: pass.
