# frontier-27 reader-2 report

Date: Monday, August 31, 2026.
Batch: `research/frontier-27-batch-2.pages.json`

## Opened scope

- Control and run artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-27-reader.task.md`, `briefs/reader.md`, `.autopilot/frontier-27/state.json`, `.autopilot/frontier-27/status.md`, `research/frontier-27-step6-hash-2-pre.json`.
- Batch-local artifacts: `research/frontier-27-batch-2.pages.json`, `research/frontier-27-batch-2.coverage.json`, `research/frontier-27-batch-2.notes.md`, `research/frontier-27-batch-2.proof-contracts.json`, `research/frontier-27-beta-2.task.md`, `research/frontier-27-beta-author.task.md`, `research/frontier-27-alpha-a-step3-scaffold-review.md`, `research/frontier-27-alpha-a-recheck.md`, `research/frontier-27-alpha-a-scope-decisions.json`, and the live `research/plan-spec.json` row set for the owned pair.
- Design and prerequisite-page context: `research/plan-algebra-track-expansion-v2.md` at LA-22, `library/linear-algebra/krylov-subspaces-arnoldi-and-gmres.md`, and `library/real-analysis/convex-and-semicontinuous-functions-on-rn.md`.
- Assigned page files: `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md` and `library/linear-algebra/conjugate-gradients-minres-and-preconditioning-examples.md`.
- Assigned item files opened: all `30` current batch-2 items from the A/B manifest.
- Direct dependency items opened for verification: `21` published items, namely `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form`, `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade`, `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space`, `def-arnoldi-process`, `def-cholesky-factorisation-with-positive-diagonal`, `def-condition-number-of-a-nonsingular-linear-system`, `def-gmres-iterate`, `def-grade-and-relative-minimal-polynomial-of-a-start-vector`, `def-invertible-matrix-and-general-linear-group`, `def-krylov-subspace-of-a-matrix-and-start-vector`, `def-matrix-product-and-identity-matrix`, `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `prop-standard-coordinate-inner-products`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-least-squares-solutions-and-normal-equation`, `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`, and `thm-the-complex-numbers-are-algebraically-closed`.

## Confirmed defects repaired

1. `items/prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the Statement used the error term `x_*-x_m` without first introducing `x_*`, so the equivalence was written with undefined notation.
   Repair: added `x_*` explicitly as the exact solution of `Ax=b` in the Statement.

2. `items/thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the Statement compared `\|x_*-x_m\|_A` and `\|x_*-x\|_A` without defining `x_*`.
   Repair: added `x_*` explicitly as the exact solution of `Ax=b` in the Statement.

3. `items/thm-conjugate-gradient-chebyshev-bound-in-the-a-norm.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old item cited `def-condition-number-of-a-nonsingular-linear-system`, whose current Statement is restricted to invertible real matrices, but the CG theorem is stated for Hermitian positive-definite `A\in M_n(\mathbb C)`. The old citation therefore widened a published dependency across a dropped scalar-field hypothesis.
   Repair: removed the real-only dependency from the item, stated the controlling spectral ratio directly via the extremal eigenvalues `\lambda_{\min}` and `\lambda_{\max}`, and rewrote the proof so it no longer leans on the real-only condition-number definition.

4. `items/thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old `\rho(B)<1` direction only derived `B^k\to0` and then said the iteration converges, but it did not construct the fixed point or close the statement's promised existence and uniqueness of the solution to `Ax=b`.
   Repair: rewrote the proof to identify fixed points with solutions, construct `x_*=(I-B)^{-1}M^{-1}b` when `1\notin\sigma(B)`, prove convergence to that `x_*`, and then prove uniqueness of the solution by iteration of the fixed-point equation.

5. `items/thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem.md`
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the old Statement used `x_*`, `y_*`, and `\kappa_2(\widetilde A)` without defining the solution symbols, and its condition-number language inherited the same real-only dependency gap as the unrepaired CG Chebyshev theorem.
   Repair: introduced `x_*` and `y_*:=C^*x_*` explicitly in the Statement, replaced the unsupported `\kappa_2(\widetilde A)` reference with the transformed spectral ratio `\lambda_{\max}(\widetilde A)/\lambda_{\min}(\widetilde A)`, and updated the proof to cite only the repaired Chebyshev theorem.

## Edits

- Patched `items/prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate.md`.
- Patched `items/thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error.md`.
- Patched `items/thm-conjugate-gradient-chebyshev-bound-in-the-a-norm.md`.
- Patched `items/thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one.md`.
- Patched `items/thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem.md`.
- Regenerated the affected citation and derivation rows in `research/frontier-27-batch-2.proof-contracts.json`. The refresh covered the `5` edited items plus `4` downstream quote consumers: `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic`, `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues`, `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number`, and `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`.
- No changed item carried a `verification.judge` block, so no stale judge record needed removal.

## Uneditable control-artifact drift

- `research/frontier-27-batch-2.pages.json` still records the removed `def-condition-number-of-a-nonsingular-linear-system` dependency for `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` and `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem`. I left the manifest untouched because this dispatch only licenses item repairs and assigned A-page prose edits.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate.md items/thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error.md items/thm-conjugate-gradient-chebyshev-bound-in-the-a-norm.md items/thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one.md items/thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem.md`
  Result: all five changed items were reflowed into canonical one-line proof paragraphs.

- `node tools/regen-contract-entries.mjs research/frontier-27-batch-2.proof-contracts.json prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error thm-conjugate-gradient-chebyshev-bound-in-the-a-norm thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`
  Result: regenerated the `9` affected contract entries.

- `node tools/tsx-run.mjs tools/precheck.mts <5 changed items>`
  Result: `5` checked, `0` failing.

- `node tools/tsx-run.mjs tools/precheck.mts <21 proof-bearing batch-2 items>`
  Result: `21` checked, `0` failing.

- `node tools/proof-contract.mjs research/frontier-27-batch-2.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 21/21 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-27-batch-2.proof-contracts.json --fail-on-missing-quote`
  Result: `52` citations checked, no missing quotes, no widening candidates.

- `node tools/rendercheck.mjs library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md library/linear-algebra/conjugate-gradients-minres-and-preconditioning-examples.md <30 batch item files>`
  Result: `32` files checked, clean.

- `node tools/boundary-audit.mjs research/frontier-27-batch-2.proof-contracts.json`
  Result: only template-reuse warnings plus three `zero`-axis candidates. I re-read those witnesses and kept the current rows: each item fixes a concrete numerator/denominator computation, so the reported symbolic divisors are not an omitted free boundary branch on the current bytes.

- `node tools/content-policy.mjs research/frontier-27-batch-2.pages.json`
  Result: `content-policy: 30 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json`
  Result: `coverage-checklist: 1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-2.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass on the current bytes; the command ends `OK` and reports only the repository's standing out-of-batch `redundant-prereq` advisories.

## Page verdicts

- `library/linear-algebra/conjugate-gradients-minres-and-preconditioning.md`: sufficient on the current bytes after the five A-page item repairs.
- `library/linear-algebra/conjugate-gradients-minres-and-preconditioning-examples.md`: sufficient on the current bytes; no B-page prose edit was needed.

## Uneditable defects and blockers

- No in-scope uneditable `in-flight-item`, `page`, or `published-dependency` defect remains on the current bytes.
- No batch-local blocker remains.
