# Reader report — physics-cm-qm-gr-79-2026-10-11, batch 8

## Scope and opened inventory

Reviewed independently as reader for batch `8`. The manifest assigns two pages and 39 items. Every assigned item and page was opened, along with the exact supplier statements/definitions needed to check the claims.

**A-page `cm-math-continuum` (32 items):**

`def-cm-euclidean-spatial-calculus`; `def-cm-continuum-motion`; `lem-cm-determinant-derivative-along-a-matrix-curve`; `lem-cm-localization-of-vanishing-integrals`; `thm-cm-transport-theorem`; `thm-cm-local-mass-balance`; `thm-cm-local-momentum-balance`; `thm-cm-traction-is-given-by-a-stress-matrix`; `thm-cm-stress-matrix-is-symmetric`; `thm-cm-control-volume-balance`; `def-cm-linear-elastic-constitutive-law`; `lem-cm-isotropic-elastic-strain-energy-positivity`; `thm-cm-plane-elastic-waves`; `def-cm-fluid-constitutive-models`; `thm-cm-barotropic-momentum-and-bernoulli`; `thm-cm-kelvin-circulation`; `thm-cm-dalembert-formula-and-string-solutions`; `def-cm-cyclic-spring-chain`; `thm-cm-spring-chain-dispersion-relation`; `lem-cm-second-difference-remainder-bound`; `lem-cm-discrete-periodic-summation-by-parts`; `thm-cm-spring-chain-continuum-limit`; `thm-cm-burgers-characteristics-and-gradient-blowup`; `def-cm-scalar-conservation-law-weak-and-entropy-solution`; `thm-cm-burgers-riemann-shock-and-rarefaction`; `thm-cm-plane-couette-and-poiseuille-flows`; `def-cm-sine-coefficients-of-periodic-functions`; `lem-cm-cosine-sine-orthogonality-and-odd-extension`; `lem-cm-fejer-completeness-for-continuous-periodic-functions`; `lem-cm-uniform-convergence-with-derivatives-on-a-rectangle`; `lem-cm-sine-coefficient-decay-by-integration-by-parts`; `thm-cm-smooth-string-fourier-series-solution`.

**B-page `cm-math-continuum-examples` (7 items):**

`ex-cm-transport-of-a-translating-uniform-flow`; `ex-cm-elastic-plane-wave-speeds-and-energy`; `ex-cm-string-modes-and-tail-constants`; `cex-cm-sine-tail-bound-fails-for-rough-data`; `ex-cm-burgers-riemann-checks`; `ex-cm-couette-poiseuille-numbers`; `ex-cm-spring-chain-mode-and-limit-check`.

Also opened 89 unique direct external item suppliers needed by the assigned items: 87 pinned published mathematical imports and the two draft mathematical suppliers `def-cm-material-region-and-density` and `def-cm-traction-and-stress` from current-run batch 1. Checked their relevant exact statement, definition, or fact clauses against the uses in batch 8. Read the four required published mathematics dependency pages (`euclidean-surface-measure-divergence-and-green-identities`, `fejer-and-poisson-summability-of-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `uniform-convergence-of-functions`), the local dependency pages `cm-math-dynamics` and `cm-math-geometry`, and the published root theorem `thm-clairaut-schwarz-mixed-partials`. The latter states that a (C^2) function on an open set has equal mixed partial derivatives; where batch 8 needed this result but lacked an import, I used a local rectangular-increment proof from the one-variable FTC and continuity.

## Repairs and evidence

All assigned items are classified `domain: mathematics`; their conclusions are conditional mathematical claims, not empirical reports about physical systems.

- `def-cm-sine-coefficients-of-periodic-functions`: made the coefficient integrals ordinary Riemann integrals, removed unrelated Lebesgue-integral prerequisites, and added the continuous-implies-Riemann-integrable supplier. This matches the stated continuous periodic domain and the exact supplier theorem on a compact interval.
- `def-cm-scalar-conservation-law-weak-and-entropy-solution`: defined the signed space-time integral as one joint Lebesgue integral with respect to λ₂, the initial term with respect to λ₁, and `sgn` by its three cases. Added the box-measure and nonnegative-integral facts needed for the bounded Borel, compact-support integrands.
- `lem-cm-cosine-sine-orthogonality-and-odd-extension`: specified the Riemann-integral convention, quantified the cosine identity over every integer (k), and supplied the continuous-integrability and FTC steps used in the proof.
- `lem-cm-determinant-derivative-along-a-matrix-curve`: corrected the determinant remainder estimate: after dividing increment entries by (h), their bounds are uniform, and every multilinear term with at least two increment columns contributes a factor (h^2). This repairs the prior estimate that omitted powers of (h).
- `lem-cm-localization-of-vanishing-integrals`: stated the countable-choice hypothesis explicitly, declared the integration/choice prerequisites, fixed the signed-integral convention, and kept each compact box inside the chosen open positivity set. Corrected the stale fact label and used positivity on that specific box before taking a minimum.
- `lem-cm-sine-coefficient-decay-by-integration-by-parts`: stated why the continuous derivative and trigonometric-product integrands are Riemann integrable on the compact interval.
- `lem-cm-uniform-convergence-with-derivatives-on-a-rectangle`: added the FTC, integrability, and oriented-integral prerequisites; proved equality of mixed partials locally by rectangular increments; and replaced the unsupported assertion of global uniform convergence of the limit with a local coordinate-increment argument establishing joint continuity.
- `thm-cm-burgers-characteristics-and-gradient-blowup`: added the mean-value and Bolzano–Weierstrass prerequisites. The inverse-function argument now uses an open rectangle around each point of the half-open time domain, proves local injectivity there, and identifies the local inverse with the global inverse for (tge0). The endpoint label convergence is justified by boundedness and a subsequence argument.
- `thm-cm-plane-elastic-waves`: stated the positivity assumptions μ>0 and λ+2μ/3>0, defined the displacement, spatial derivative, strain/stress fields and branch phase speeds, and required nonzero wave number and amplitude for the speed formulas. Replaced the false inequality with λ+2μ=(λ+2μ/3)+4μ/3>0. Updated `ex-cm-elastic-plane-wave-speeds-and-energy` to use the defined spatial derivative notation (D_x\xi).
- `thm-cm-dalembert-formula-and-string-solutions`: supplied the local rectangular-increment proof needed to commute mixed partials under the stated (C^2) hypothesis.
- `thm-cm-smooth-string-fourier-series-solution`: replaced unused Lebesgue/differentiation-under-integral dependencies with the exact Riemann tools used. Added a local proof differentiating the energy integral using FTC, uniform continuity, and the uniform integral-error estimate; proved mixed partial commutation; and applied the rectangle convergence lemma after translation on arbitrary compact rectangles to obtain global (C^2) regularity.
- `thm-cm-transport-theorem`: changed the title and statement to the actual (C^2)-family hypothesis. Fixed the compact-inner-time-cylinder argument, supplied the local mixed-partial proof, established finite measure for bounded measurable sets by containment in a box, and restricted change of variables to the open set where its hypotheses apply. Updated the A-page summary to the (C^2) scope.
- `thm-cm-spring-chain-continuum-limit`: removed an ellipsis in the finite-difference argument, corrected the sign in (u_j''=c^2\Delta_a u_j-R_j), replaced the invalid interpolation estimate with a two-Rolle proof, and justified the vector integral norm bound by finite-dimensional triangle inequality and Riemann sums.
- `thm-cm-stress-matrix-is-symmetric`: defined the alternating symbol εᵢⱼ explicitly before using it.
- `thm-cm-traction-is-given-by-a-stress-matrix`: replaced undefined sign notation in the tetrahedron orientation argument with the explicit coordinate-sign cases.
- `thm-cm-burgers-riemann-shock-and-rarefaction`: linked `sgn` to its explicit definition, corrected the outward normals on the two shock-interface regions, stated the divergence-theorem cancellation across the fan boundaries, and expanded the monotonicity argument for a convex (C^1) entropy.
- `thm-cm-local-mass-balance` and `thm-cm-local-momentum-balance`: specified the swept spacetime domain and the open set on which the fields are defined, so the hypotheses no longer evaluate fields outside their domains.
- `thm-cm-control-volume-balance`: defined the swept spacetime domain and required the field domain to contain it.
- `thm-cm-barotropic-momentum-and-bernoulli`: defined a streamline by its ODE, made the steady hypotheses inherited by the irrotational clause explicit, defined the collection-specific irrotational condition as symmetry of (Du), corrected the time argument in a fact, and completed the connected-component/local-constancy argument.
- `thm-cm-plane-couette-and-poiseuille-flows`: specified the stationary spacetime fields and spatial derivative, defined the convective term and component Laplacian, stated the profile regularity and endpoint convention, identified the collection's irrotational condition, and made the flux integrals Riemann integrals. The continuous-integrability prerequisite now supports the uniqueness proof on compact subintervals.
- `cex-cm-sine-tail-bound-fails-for-rough-data`: replaced an unjustified improper-integral comparison with finite-interval comparisons followed by a limit, preserving the stated (N^{-5/2}) lower bound.
- A-page prose `cm-math-continuum`: corrected the opening summary's transport hypothesis from (C^1) to the theorem's stated (C^2) family.

The affected proof-contract entries were regenerated from the current facts and numbered steps, including same-batch consumers whose stored supplier quotes had become stale. No `verification.judge` record was present on the repaired items, so none required removal. The current-run batch 1 suppliers and published dependencies presented no additional defect requiring escalation.

## Page verdicts

- **`cm-math-continuum` — pass after repair.** Its summary agrees with the transport theorem's (C^2) motion hypothesis; the page's mathematical-only scope and dependency organization remain accurate.
- **`cm-math-continuum-examples` — pass.** The seven examples and counterexample remain within the A-page scope; the cited supplier clauses were checked, and affected citation contracts were refreshed.

## Validation and unresolved findings

- Reflow and precheck were run for each of the 23 changed item files: 46 checks, no failures.
- `proof-contract.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-8.proof-contracts.json --strict`: 0 errors, 0 warnings, 32/32 entries checked.
- Final combined `proof-layout.mjs` pass: 23 items, 86 steps, 0 defects.
- Uneditable confirmed or suspected defects: none. Blocker: none. The review checked exact direct supplier clauses needed for batch 8; it did not re-audit the complete proofs of every published imported supplier.
