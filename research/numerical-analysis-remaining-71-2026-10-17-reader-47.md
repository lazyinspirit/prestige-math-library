# Step 3a reader report — batch 47

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader (`reader-47`)  
Scope: batch 47 only

## Opened inventory

Opened the batch manifest, coverage record, authoring notes, proof contracts, and cross-batch dependency record as evidence. The current manifest contains one A page and its B/examples page, with 17 A-page items and 5 B-page examples/counterexamples.

Opened assigned page carriers:

- A page `meshfree-kernel-approximation-and-conservative-sph` at `library/numerical-pdes-and-spatial-discretization/meshfree-kernel-approximation-and-conservative-sph.md`.
- B page `meshfree-kernel-approximation-and-conservative-sph-examples` at `library/numerical-pdes-and-spatial-discretization/meshfree-kernel-approximation-and-conservative-sph-examples.md`.
- The published prerequisite page `interacting-particle-mean-field-and-vortex-blob-error` and its three relevant interface items: `def-mean-field-and-weighted-vortex-particle-systems`, `thm-w1-dobrushin-stability-with-force-defect`, and `thm-rk4-global-error-for-regularized-vortex-particles`.

Opened all 22 assigned items in local dependency order:

- A page, levels 0–5: `def-meshfree-cell-quadrature-and-fill-radius`, `def-scaled-symmetric-compact-kernel-family`, `def-regularized-conservative-sph-system`, `lem-cellwise-particle-quadrature-oscillation-bound`, `lem-symmetric-kernel-moment-cancellation`, `lem-compact-kernel-derivative-moment-identities`, `lem-scaled-kernel-moments-and-derivative-bounds`, `lem-sph-pair-forces-antisymmetric-and-central`, `thm-second-order-meshfree-convolution-bias`, `lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube`, `prop-sph-conserves-linear-and-angular-momentum`, `prop-sph-matched-internal-energy-conserves-total-energy`, `thm-first-derivative-meshfree-convolution-bias`, `thm-meshfree-particle-kernel-quadrature-error`, `cor-meshfree-joint-refinement-consistency`, `thm-regularized-sph-local-wellposedness`, and `thm-forward-euler-global-error-on-controlled-sph-tube`.
- B page, levels 1–5: `cex-truncated-kernel-loses-boundary-constant-reproduction`, `ex-interior-constant-and-affine-kernel-reproduction`, `ex-two-particle-sph-force-pair`, `cex-fixed-neighbor-irregular-derivative-not-consistent`, and `cex-conservative-sph-can-clump-under-positive-pressure`.

Opened all 24 distinct direct item dependencies listed in the assigned manifest: `cor-change-of-variables-for-compactly-supported-functions`, `def-euclidean-inner-product`, `def-jordan-inner-and-outer-content`, `def-metric-ball`, `def-riemann-integral-over-a-jordan-set`, `def-support-and-compactly-supported-riemann-integral-in-rn`, `lem-exponential-dominates-one-plus-x`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-additivity-over-subintervals`, `thm-algebra-of-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule-for-total-derivatives`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-exponential-addition-formula`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-integration-by-parts-with-interior-derivatives`, `thm-mean-value-inequality`, `thm-multidimensional-integral-properties`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-picard-lindelof-local-existence-and-uniqueness`, and `thm-riemann-fubini-on-product-rectangles`.

## Review and page verdicts

**A page — pass after the listed statement repair.** The cell rule supplies the finite partition identity, fill-radius and local-volume assumptions used in the cellwise quadrature estimate. The kernel moments, Taylor bounds, and cellwise errors give the stated value and gradient consistency rates. The SPH identities use fixed width, radial symmetry, positive densities and the displayed matched internal-energy equation. The ODE and forward-Euler conclusions retain their finite-state, tube-margin and exact-path hypotheses. The page does not claim arbitrary boundary consistency, shock convergence, or conservation by the Euler time discretization. Its summary of the published mean-field prerequisite is accurate; the local pressure-force claims do not rely on that page’s distinct fixed-kernel mean-field or vortex systems.

**B page — pass.** The half-line truncation witness integrates to one half at the boundary. The full-space affine reproduction follows from unit mass and first-moment cancellation. The two-particle force pairing follows from antisymmetry and radial centrality. In the periodic fixed-neighbor witness the four gaps, Voronoi lengths, fill radius, local-volume constant, and two nonzero derivative-sum terms check exactly; its derivative sum is greater than one while the continuous target equals one. In the three-particle SPH witness, the pressure coefficients are initially equal and positive, the 1–3 interaction is outside kernel support, and the computed relative gap acceleration is negative. The semidiscrete invariants cited there apply on the same local solution.

## Repairs made

- In `lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube`, repaired the malformed maximum index `z∈K,,i` to the explicit finite index set `z∈K,1≤i≤N` in each of the three maxima. Refreshed the exact statement excerpts in the proof contracts for `thm-regularized-sph-local-wellposedness` and `thm-forward-euler-global-error-on-controlled-sph-tube`.
- In `thm-forward-euler-global-error-on-controlled-sph-tube`, stated that $T>0$, the mesh count is an integer $n\ge1$, and the speed bound $\|F(w)\|_\#\le B$ for every $w\in K$ explicitly. The defect estimate uses this bound on the exact path, and the induction uses the same tube $K$. Reworded step 1.1 to trace the path-speed bound directly to that hypothesis and updated the matching contract derivation.
- Neither changed item had a `verification.judge` record to remove.

Validation after the final item edits:

- `reflow.mts` reported both changed items unchanged.
- `precheck.mts` passed each changed item.
- `node tools/proof-layout.mjs items/lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube.md items/thm-forward-euler-global-error-on-controlled-sph-tube.md` reported 2 items, 7 steps, 0 defects.

## Source passages reviewed

- Volker Springel, “Smoothed Particle Hydrodynamics in Astrophysics,” [arXiv full text](https://arxiv.org/html/1109.2219): §2.1, equations (1), (4), and (5) on normalized symmetric kernels, convolution and density sums; §2.2, equations (22)–(25) and the accompanying conservation discussion on the symmetrized pressure force and matched energy equation; §5.7, pp. 419–420, on tensile/clumping behavior from close-pair forces under surrounding particles. Springel’s equations include adaptive-smoothing correction factors; the assigned system fixes the width and proves its identities locally.
- Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 25, [Particle Methods PDF](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf): printed pp. 2–5 on non-equidistant particles, meshfree approximation, kernel convolution and point-cloud quadrature, followed by the SPH momentum and energy equations. These passages provide method context; the assigned quantitative estimates are proved in the local items.

## Uneditable defects and blockers

No confirmed defect remained outside edit scope. No blocker.

Coverage limitation: the review opened every assigned carrier, every manifest-listed direct item supplier, and the three published interface items needed to check the page’s prerequisite summary. It did not independently re-audit the full transitive prerequisite closures beneath those published suppliers.
