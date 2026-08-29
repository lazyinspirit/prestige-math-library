# frontier-23 reader-5 report

Date: Friday, August 28, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-23-reader.task.md`, `research/frontier-23-dispatch/reader-reader-5.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-23-batch-5.pages.json`, `research/frontier-23-batch-5.coverage.json`, `research/frontier-23-batch-5.notes.md`, and `research/frontier-23-batch-5.proof-contracts.json`.
- Assigned pages: `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md` and `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability-examples.md`.
- Assigned items: all 34 batch-5 manifest items under `items/`, namely the 23 A-page items and 11 B-page items named in `research/frontier-23-batch-5.pages.json`.
- Required page dependencies opened: `library/real-analysis/rn-as-a-normed-space.md` and `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`.
- Direct dependency items opened for verification: `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `cor-rank-equals-number-of-nonzero-singular-values`, `def-abs-value`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-inner-product-norm`, `def-invertible-matrix-and-general-linear-group`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-matrix-product-and-identity-matrix`, `def-norm-and-normed-space`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-p-norms-on-rn`, `lem-complex-conjugation-and-modulus-laws`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-standard-basis-of-f-n`, `prop-standard-coordinate-inner-products`, `thm-all-norms-on-rn-are-equivalent`, `thm-binomial-theorem`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-eckart-young-best-rank-k-approximation`, `thm-geometric-series`, `thm-gram-schmidt-orthonormalisation`, `thm-invertible-matrix-theorem`, `thm-least-squares-solutions-and-normal-equation`, `thm-matrix-multiplication-laws`, `thm-operator-norm-is-the-largest-singular-value`, and `thm-singular-value-decomposition`.

## Edits kept

- `items/def-absolute-and-relative-local-condition-numbers-of-a-problem-map.md`
  Added an explicit empty-perturbation convention so `S_{f,x}(\delta)` is defined even when `x` is isolated in the domain.
- `items/def-normwise-and-componentwise-backward-error-for-linear-systems.md`
  Replaced the broken existence argument with the universal witness `\Delta A=-A`, `\Delta b=-b`, which proves both defining infima are over nonempty sets.
- `items/thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order.md`
  Corrected the monotonicity direction in the facts block to match the repaired condition-number definition.
- `items/thm-floating-point-dot-product-componentwise-and-normwise-error-bounds.md`
  Repaired the off-by-one indexing and rewrote the setup/proof to include the rounded products as well as the rounded additions.
- `items/ex-a-floating-point-dot-product-error-bound.md`
  Updated the concrete two-term witness to the repaired zero-based indexing and summand bookkeeping.
- `items/ex-catastrophic-cancellation-and-a-stable-reformulation.md`
  Corrected the `\sqrt{1-10^{-8}}` comparison bounds and fixed the binary64 precision discussion.
- `items/ex-vandermonde-conditioning-improves-after-centering-and-scaling.md`
  Corrected the centered/scaled Vandermonde row-sum computation.
- `items/ex-normal-equations-versus-qr-conditioning.md`
  Removed the unsupported rectangular invariance citation and computed the Gram-Schmidt `QR` factor directly for this matrix.
- `research/frontier-23-batch-5.proof-contracts.json`
  Regenerated the seven affected contract entries after the item repairs and reflow pass.

No page prose change was needed.

## Confirmed defects repaired

1. `def-absolute-and-relative-local-condition-numbers-of-a-problem-map` left the supremum undefined when no admissible perturbation existed.
2. `def-normwise-and-componentwise-backward-error-for-linear-systems` claimed a componentwise admissible perturbation witness that need not satisfy the zero-pattern bounds.
3. `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds` and `ex-a-floating-point-dot-product-error-bound` used inconsistent one-based indexing and omitted the rounded multiplications from the dot-product model.
4. `ex-catastrophic-cancellation-and-a-stable-reformulation` contained a false square comparison at `z=10^{-8}` and misstated the available decimal precision of binary64.
5. `ex-vandermonde-conditioning-improves-after-centering-and-scaling` misstated one centered/scaled row sum.
6. `ex-normal-equations-versus-qr-conditioning` relied on a singular-value invariance claim not licensed by its cited theorem.
7. `thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order` misstated the monotonicity direction of `\delta\mapsto S_{f,x}(\delta)`.

No uneditable in-flight-item, page, or published-dependency defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <8 changed item files>`
  Result: 6 proof-bearing files reflowed; the 2 definition files were already canonical.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-5.proof-contracts.json prop-explicit-formulas-for-normwise-and-componentwise-backward-error thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order thm-floating-point-dot-product-componentwise-and-normwise-error-bounds ex-a-floating-point-dot-product-error-bound ex-catastrophic-cancellation-and-a-stable-reformulation ex-vandermonde-conditioning-improves-after-centering-and-scaling ex-normal-equations-versus-qr-conditioning`
  Result: regenerated all 7 targeted entries.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-5 item scope>`
  Result: pass, `25 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-23-batch-5.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 25/25 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass, `73 citation(s) over 25 authored item(s)` with no quote mismatches and no widening candidates.
- `node tools/rendercheck.mjs <assigned pages plus full batch-5 item scope>`
  Result: pass, `OK — 36 file(s)`.
- `git diff --check -- <8 changed items> research/frontier-23-batch-5.proof-contracts.json`
  Result: pass.

## Page verdicts

- `matrix-norms-condition-numbers-and-numerical-stability`
  Sufficient after repair on the opened scope. The conditioning definitions now handle isolated-domain and backward-error edge cases honestly, and the floating-point theorem now matches the page’s indexing and arithmetic model.
- `matrix-norms-condition-numbers-and-numerical-stability-examples`
  Sufficient after repair on the opened scope. The concrete witnesses now compute the stated quantities correctly and no longer rely on an unsupported QR invariance shortcut.

## Blockers

- None in the opened batch-5 scope.
- No uneditable published-dependency defect remains.
