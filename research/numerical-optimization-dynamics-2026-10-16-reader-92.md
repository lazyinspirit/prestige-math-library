# Step 3a reader report — batch 92

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `92`

## Review state

The run status was `running` at the start and final status checks, with no worker in flight. Both assigned pages and all 26 assigned item files were opened and reviewed in dependency order, with suppliers read before the claims that use them. The batch pages and items are draft. Manifests, contracts, coverage records, and prior reviews were used for navigation only; their conclusions were not treated as verdicts.

## Opened inventory

Pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/finite-basis-projector-energies-and-variational-electronic-structure.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/finite-basis-projector-energies-and-variational-electronic-structure-examples.md`

Assigned A-page items, reviewed in dependency-level order:

- Level 0: `def-rank-r-orthogonal-projector-domain`, `def-finite-temperature-density-matrix-free-energy`, `lem-complex-hermitian-eigenvalues-lipschitz`, `thm-nested-finite-basis-infimum-monotonicity`.
- Level 1: `lem-hermitian-idempotent-trace-equals-rank`, `def-finite-basis-projector-energy-model`, `lem-finite-temperature-density-domain-compact`, `lem-finite-temperature-entropy-continuous-at-endpoints`, `prop-interior-entropy-trace-derivative`.
- Level 2: `lem-rank-r-projector-grassmann-chart-and-tangent`, `lem-finite-projector-domain-compact`, `prop-finite-projector-energy-reality-and-gradient`, `thm-finite-temperature-free-energy-attains-minimum`, `lem-finite-temperature-minimizer-is-interior`.
- Level 3: `lem-complex-projector-tangent-commutator-curves`, `thm-finite-projector-energy-attains-minimum`, `thm-finite-temperature-fermi-dirac-stationarity`.
- Levels 4–5: `thm-finite-projector-commutator-stationarity`, `thm-positive-tangent-hessian-implies-strict-projector-minimum`.

Assigned B-page examples:

- `ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy`
- `ex-nested-trial-spaces-may-have-equal-energies`
- `ex-zero-ritz-residual-does-not-identify-ground-state`
- `ex-overlap-whitening-can-amplify-coefficient-errors`
- `ex-nonsmooth-exchange-correlation-functional-breaks-c2`
- `ex-two-level-nonlinear-projector-stationary-maximum`
- `ex-finite-basis-projector-optimization-on-grassmann`

Relevant supplier files opened included the matrix and spectral results (`def-self-adjoint-and-normal-endomorphism`, `def-matrix-product-and-identity-matrix`, `def-trace-of-a-square-matrix`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-weyl-inequalities-for-self-adjoint-sums`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`); finite-dimensional compactness and extrema (`thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`); matrix calculus and scalar analysis (`prop-differentials-of-trace-and-frobenius-linear-functionals`, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, `thm-derivative-of-matrix-inversion`, `thm-logarithm-derivative-and-integral`, `thm-intermediate-value`, `cor-mean-value-theorem`, `thm-ftc-first-part`); and the complex Grassmann and optimization chain (`def-complex-stiefel-grassmann-optimization-conventions`, `thm-complex-stiefel-grassmann-tangent-projections`, `prop-complex-stiefel-grassmann-are-compact`, `prop-complex-grassmann-projector-energy-gradient`, `def-complex-grassmann-polar-retraction`, `thm-complex-grassmann-polar-retraction-is-first-order`, `alg-riemannian-trust-region`, `lem-riemannian-trust-region-ratio-accuracy-for-small-radii`, `lem-trust-region-cauchy-decrease`, `thm-riemannian-trust-region-first-order-complexity`). I also opened the overlap-whitening and finite Hermitian Ritz-residual suppliers assigned outside batch 92.

## Repairs and evidence

- `lem-finite-temperature-entropy-continuous-at-endpoints`: replaced the real-only Cauchy–Schwarz support for the complex operator/Frobenius norm comparison with the published singular-value comparison theorem, and updated the item dependency and proof contract. The new supplier states the inequality for both real and complex matrices.
- `prop-interior-entropy-trace-derivative`: proved the Fréchet derivative of the matrix logarithm from the resolvent identity. The local remainder is bounded by `2 ||H||_2^2 / m^2`, so the derivative is Fréchet rather than only directional. Added the operator-norm definition to the dependencies and updated the proof contract.
- `ex-overlap-whitening-can-amplify-coefficient-errors`: replaced the unsupported singular-value shortcut with the calculation `||A||_2^2 = lambda_max(A* A)`, applied to `L^{-1}` and `L^{-*}`; the latter Gram matrix is similar to `S_epsilon^{-1}`. Clarified that the condition number is the spectral (2-norm) condition number and updated the proof contract.
- `thm-finite-projector-commutator-stationarity`: defined constrained stationarity as vanishing derivative on every projector tangent and used that definition in both directions of the proof; updated the proof contract.
- A-page summary: added the nonempty compact feasible-set and common continuous-energy hypotheses to the nested-set convergence sentence. The ambient-set equality remains qualified by the energy-recovery property.

No stale `verification.judge` records were present on the changed items. Reflow reported the entropy-derivative item reflowed and the other three unchanged. Precheck passed on all four changed items. The required final batch command, `node tools/proof-layout.mjs items/lem-finite-temperature-entropy-continuous-at-endpoints.md items/prop-interior-entropy-trace-derivative.md items/ex-overlap-whitening-can-amplify-coefficient-errors.md items/thm-finite-projector-commutator-stationarity.md`, reported 4 items, 12 steps, and 0 defects.

## Uneditable findings

- `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil` is a current-run supplier from batch 57 for `def-finite-basis-projector-energy-model`. In `Proof 1.1–3.1`, `F2` cites only the matrix-product definition, which supplies neither `(AB)* = B*A*` nor `(L^{-1})* = (L*)^{-1}`. The proof uses these rules to establish that the whitened matrix is Hermitian and to transform the pencil and Rayleigh quotient. Add the adjoint/inverse identities as dependencies and prove or cite their use. The observed source hash remained current at split: `b8e5b8747e8bc78b152936997ffd67a2ee57587c02c8e503ea6633fa535a8626`. This is a short algebraic omission and is nonfatal.
- Published `thm-derivative-of-matrix-inversion`, `Proof 1.1`: the step infers `det(A) != 0` from invertibility and uses continuity of `det(A+K)` to make the invertible locus open, but its dependencies do not supply either the determinant criterion or determinant continuity. Cite or prove those facts, or use a local inverse argument. The assigned consumer is `lem-rank-r-projector-grassmann-chart-and-tangent`. Nonfatal.
- Published `thm-derivative-of-matrix-inversion`, `Proof 2.1`: the inverse and remainder estimates use operator-norm submultiplicativity and operator/Frobenius compatibility, including `||K||_2 <= ||K||_F`, without a supplying dependency or derivation. Add the corresponding complex matrix norm estimates. The assigned consumer is `lem-rank-r-projector-grassmann-chart-and-tangent`. Nonfatal.
- Published `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, `Proof 2.1`: differentiability of multiplication uses `||HK||_F <= ||H||_F ||K||_F` and `o(||(H,K)||)` without stating a product-space norm or proving the estimate. Specify the product Frobenius norm and prove/cite the estimate. The assigned consumer is `prop-finite-projector-energy-reality-and-gradient`. Nonfatal.

## Page verdicts

- `finite-basis-projector-energies-and-variational-electronic-structure`: pass after the summary repair. Its finite-model, entropy, stationarity, Hessian, and nested-set claims match the reviewed items and retain their hypotheses and caveats.
- `finite-basis-projector-energies-and-variational-electronic-structure-examples`: pass. Its summary matches the seven examples; no B-page prose was changed.

## Blocker

No blocker prevents this reader handoff. The four uneditable proof gaps above remain for their supplier owners.

## Coverage note

All assigned pages and items were opened. Relevant direct supplier statements and the proof sections needed to assess the assigned arguments were opened, including the current-run batch-57 suppliers. I did not independently re-audit every transitive proof dependency beneath the published core linear-algebra and analysis results; the report records only supplier gaps directly observed in the opened proof text.
