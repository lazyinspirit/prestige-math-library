# Step 3a reader report — batch 55

Run: `numerical-analysis-remaining-71-2026-10-17`  
Reader: `reader-55`

## Opened inventory

Reviewed both assigned pages:

- A page `volume-integral-scattering-and-partial-wave-error` at `library/numerical-pdes-and-spatial-discretization/volume-integral-scattering-and-partial-wave-error.md`.
- B page `volume-integral-scattering-and-partial-wave-error-examples` at `library/numerical-pdes-and-spatial-discretization/volume-integral-scattering-and-partial-wave-error-examples.md`.

Reviewed all 16 A-page items and all four B-page examples in manifest dependency order:

- `def-volume-integral-scattering-model`
- `lem-finite-volume-hilbert-schmidt-rescaling`
- `lem-dyadic-cell-average-projections-converge-in-l2`
- `def-spherical-harmonic-partial-wave-conventions`
- `lem-three-dimensional-scattering-kernel-is-square-integrable`
- `lem-volume-far-field-map-is-bounded`
- `lem-spherical-harmonics-form-complete-basis-and-addition-formula`
- `lem-outgoing-helmholtz-kernel-is-a-fundamental-solution`
- `lem-volume-integral-operator-well-defined-and-bounded`
- `thm-exponential-partial-wave-truncation-bound`
- `thm-volume-integral-operator-is-compact`
- `thm-volume-integral-scattering-born-neumann-error`
- `def-volume-product-integration-scheme`
- `thm-volume-integral-scattering-fredholm-stability`
- `thm-volume-scattering-radial-partial-wave-boundary-problem`
- `thm-volume-product-integration-solution-and-far-field-error`
- `ex-forward-plane-wave-fixed-partial-wave-cutoff-fails`
- `ex-small-norm-volume-scatterer-born-truncation`
- `ex-near-resonant-volume-operator-error-amplification`
- `ex-radial-square-well-exact-partial-wave-matching`

Also opened the three required prerequisite pages: `nystrom-product-integration-and-fredholm-error`, `stable-special-function-recurrences-and-certified-evaluation`, and `randomized-quasi-monte-carlo-and-replicates`.

Relevant dependency statements and definitions were checked for the measure and complex $L^2$ interfaces; completed-product Tonelli/Fubini, polar coordinates, surface measure and ball volume; the harmonic, Radon, Green identity, compactness and Fredholm interfaces; distribution/test-function conventions; and spherical Bessel evaluation and radial-solution interfaces. The central supplier proofs read in full included `lem-square-integrable-kernels-define-bounded-compact-integral-operators`, `thm-collectively-compact-operator-stability-and-error`, `thm-fredholm-alternative-for-identity-minus-compact`, `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, and `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`.

## Repairs and evidence

Eight assigned items were repaired. The batch proof-contract file was updated for each affected claim. None of the eight source items contained a `verification.judge` record.

1. `def-volume-integral-scattering-model`: the exterior-potential definition had asserted $qv\in L^1(D)$ without establishing it. It now states the attained essential bound and the estimate $\|qv\|_1\le\|q\|_\infty\sqrt{|D|}\|v\|_2$, citing `prop-essential-supremum-is-attained-as-the-least-essential-bound` and complex $L^2$ Cauchy–Schwarz. The positive-distance argument now uses that $\overline D$ is closed.

2. `lem-three-dimensional-scattering-kernel-is-square-integrable`: the proof now cites the Euler modulus identity for $|e^{ik|x-y|}|=1$, the essential-supremum attainment result for a bounded representative of $q$, and completed-product Tonelli/Fubini for the diagonal nullity. It also states why the off-diagonal kernel is product-measurable.

3. `lem-outgoing-helmholtz-kernel-is-a-fundamental-solution`: the complex exponential’s real-parameter derivative is derived from its complex difference quotient; its modulus is cited from Euler’s identity. The near-origin derivative expansion is tied to the defining power series. The global almost-everywhere convolution claim now uses a countable exhaustion by balls and countable subadditivity.

4. `lem-volume-far-field-map-is-bounded`: `thm-chain-rule` only states a real-valued chain rule, so it did not justify differentiating the complex exponential path. The fact now derives the path derivative directly from the complex derivative definition and then applies the vector-valued FTC bound.

5. `def-spherical-harmonic-partial-wave-conventions`: the definition now says explicitly that the Laplacian and polar-coordinate formulas for complex functions act componentwise on their real and imaginary parts.

6. `lem-spherical-harmonics-form-complete-basis-and-addition-formula`: the proof now establishes that nonempty open subsets of $S^2$ have positive polar-surface measure, so the continuous harmonic restrictions embed faithfully in $L^2$ and point evaluation is well defined. It also supplies compactness/second-countability for the Stone–Weierstrass finite-subcover argument and replaces the unsupported multivariable complex chain-rule citation with termwise polynomial differentiation under rotations.

7. `thm-volume-integral-operator-is-compact`: the Schur truncation now cites the attained essential bound that supplies an everywhere-bounded representative. The continuous-kernel approximation explicitly uses Cauchy–Schwarz and gives the $C(\overline D)\to L^2(D)$ inclusion bound.

8. `ex-forward-plane-wave-fixed-partial-wave-cutoff-fails`: the zonal surface-integration formula is now derived from the radial-cone surface measure using the spherical-coordinate Jacobian, with the omitted meridian null justified by the singular change-of-variables clause. The projection-kernel formula and real-parameter derivative of $e^{ikt}$ are stated; the nondiverging-cutoff argument now explicitly uses a sequence $k_n\to\infty$.

The check commands were run on all eight changed item paths. Reflow reported all unchanged; precheck reported all clean (the two definitions had no proof sections to check); the final batched proof-layout run reported `8 items, 24 steps, 0 defects`.

## Defects not repaired

None found in the assigned items or page prose. No proposed withdrawal was added.

## Page verdicts

- `volume-integral-scattering-and-partial-wave-error`: no remaining defect found. The page summary matches the conditional Fredholm, product-integration, radial-mode and certified-special-function claims in its items.
- `volume-integral-scattering-and-partial-wave-error-examples`: no remaining defect found. Its examples remain explicitly conditional where required, and its summary matches the four examples.

## Blocker

None.

## Coverage limitation

I reviewed the run’s source-evidence index but did not independently re-fetch or re-read the five external PDFs; their bibliographic locators are therefore not independently verified here. The mathematical conclusions reviewed above are supported by the local proofs and the opened library dependency statements. The worktree contained extensive changes outside this dispatch; I left those paths untouched and did not attribute them to this review.
