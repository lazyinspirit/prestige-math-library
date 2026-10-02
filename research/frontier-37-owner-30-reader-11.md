# Step 5a reader report — batch 11

Run: `frontier-37-owner-30`  
Role: reader (`reader-11`)

## Opened inventory

- Manifest: `research/frontier-37-owner-30-batch-11.pages.json`.
- A page: `library/fourier-analysis/hilbert-and-riesz-transforms.md`.
- B page: `library/fourier-analysis/hilbert-and-riesz-transforms-examples.md`.
- All 16 A-page items: `def-conjugate-function-on-the-circle`, `lem-conjugate-dirichlet-kernel-and-principal-value-formula`, `lem-periodic-conjugate-square-identity`, `thm-marcel-riesz-conjugate-function-theorem`, `lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp`, `thm-fourier-partial-sums-converge-in-periodic-lp`, `def-truncated-hilbert-transform-and-principal-value`, `lem-singular-kernel-sine-integral-under-countable-choice`, `lem-hilbert-transform-has-signum-fourier-multiplier`, `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity`, `lem-hilbert-transform-is-skew-adjoint-on-ltwo`, `def-riesz-transforms-on-euclidean-space`, `lem-riesz-transform-principal-value-kernel-formula`, `cor-riesz-transforms-are-ltwo-bounded`, `lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds`, and `rem-hilbert-and-riesz-transform-endpoint-map`.
- All 5 B-page items: `ex-hilbert-transform-of-an-interval-indicator`, `cex-hilbert-transform-is-not-strong-type-one-one`, `cex-hilbert-transform-does-not-map-linfinity-to-linfinity`, `ex-hilbert-transform-of-the-poisson-kernel`, and `ex-riesz-transforms-square-to-minus-the-identity-in-sum`.
- Exact dependency statements opened where needed: `lem-singular-kernel-sine-integral-under-countable-choice`, `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`, `lem-fourier-partial-sums-are-dirichlet-convolutions`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `def-polar-surface-measure-on-the-unit-sphere`, `cor-volume-of-the-unit-n-ball`, `thm-real-gamma-functional-equation`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-riesz-thorin-interpolation`, `lem-complex-lp-duality-from-real-lp-duality`, `cor-l-p-norm-recovery-by-unit-l-q-pairings`, `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`, `thm-fejer-convergence-in-lp`, `thm-l-one-fourier-inversion`, `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, `thm-l-one-approximate-identities-converge-in-l-p`, `lem-ltwo-fourier-multiplier-bound`, `thm-plancherel`, `thm-sequential-uniform-boundedness-under-countable-choice`, `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`, and `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`.

## Repairs and evidence

- `lem-conjugate-dirichlet-kernel-and-principal-value-formula`: made the finite-kernel convolution identity pointwise, as the finite kernel is bounded and the coefficient calculation holds for each translate. Replaced the assertion that a quotient is continuous away from the singularity with the valid L¹ argument: local boundedness near zero and a bounded reciprocal sine factor away from zero.
- `thm-marcel-riesz-conjugate-function-theorem`: split the two approximation errors in the L¹ Lebesgue-constant lower bound as `δ/2` each. Made the Riesz–Thorin common core explicit by restricting the L² extension to finite simple functions, deriving its endpoint bounds from polynomial density, and showing the interpolation extension agrees with the polynomial core. Added the density and finite-measure inclusion argument establishing consistency for every pair of strict-range exponents. Evidence: the cited Riesz–Thorin statement requires a common finite-simple-function core; the Fejér density and finite-measure inclusion statements supply the approximations used.
- `lem-riesz-transform-principal-value-kernel-formula`: replaced the unsupported bound `|∫_A^B sin(u)/u du|≤3` for all positive intervals with the valid bound `≤6`, derived from `|S(T)|≤3` when `A<1` and the cited `2/A` tail estimate when `A≥1`. The corrected bound remains uniform in the angular parameter and suffices for dominated convergence. Evidence: `lem-singular-kernel-sine-integral-under-countable-choice`, Statement and steps 2.2, 3.2, 4.2.
- `ex-hilbert-transform-of-an-interval-indicator`: corrected the mollifier support from radius `1/j` to `2/j`, stated that the convolution equals the indicator away from the `2/j` endpoint neighborhoods, and increased the local-constancy threshold to `j>4/δ`. Updated the support and separation estimate accordingly. Evidence: the cutoff has support contained in `[-2,2]`, and the mollifier definition scales that support by `1/j`.
- `cex-hilbert-transform-is-not-strong-type-one-one`: corrected the approximant support to `[-2/j,1+2/j]`. Changed the smooth test region from `[3,R-1]` to `[4,R-2]`, which contains the scale-one bump's support (contained in `[-2,2]`) and still gives a divergent logarithmic lower bound.
- `cex-hilbert-transform-does-not-map-linfinity-to-linfinity`: corrected the same mollified-indicator support bound to `[-2/j,1+2/j]`.
- `ex-hilbert-transform-of-the-poisson-kernel`: corrected the L² tail majorant and antiderivative in the integrability estimate to use `a²/(π² y⁴)`, matching the stated bound `∫P_a²≤8/(3π²a)`. Removed duplicated inline source links from facts F1 and F4 so each citation appears once.
- `rem-hilbert-and-riesz-transform-endpoint-map`: narrowed the endpoint distinction. The line Hilbert/Riesz endpoint questions are separate from circle partial-sum norms; the circle Lebesgue-constant lower bound is used to prove nonextension for the periodic conjugate operator. Evidence: `thm-marcel-riesz-conjugate-function-theorem`, especially steps 2.3–4.1.

No page prose was changed. No published item or out-of-batch item was edited. No stale `verification.judge` record was present on the changed items.

## Page verdicts

- `hilbert-and-riesz-transforms` (A): **Pass.** The page summary and assigned mathematics preserve the circle/line distinction and the stated endpoint qualifications. The overbroad sentence in its assigned endpoint remark was repaired.
- `hilbert-and-riesz-transforms-examples` (B): **Pass.** The interval, endpoint, Poisson-kernel, and Riesz-square claims are supported after the assigned item repairs; B-page prose was left unchanged.

## Checks, remaining defects, and blocker

- Reflow and precheck completed for all eight changed items. Final prechecks passed for each. The theorem precheck initially flagged a missing QED marker after an edit; the marker was restored and the final precheck passed.
- `node tools/regen-contract-entries.mjs` regenerated the seven changed proof-bearing item entries. The endpoint remark has no fact or derivation entries. `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-11.proof-contracts.json --strict` passed: 21/21 items, 0 errors, 0 warnings. Its initial duplicate-citation errors in the Poisson example were resolved by removing the repeated links and regenerating that entry.
- Uneditable defects: none. Blocker: none.
