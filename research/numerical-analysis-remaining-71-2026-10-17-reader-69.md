# Step 3a reader report — batch 69

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `69`  
Role: reader

## Opened inventory

Assigned pages opened:

- `library/numerical-pdes-and-spatial-discretization/isogeometric-galerkin-methods.md` (A page).
- `library/numerical-pdes-and-spatial-discretization/isogeometric-galerkin-methods-examples.md` (B page).

The A page's three required prerequisite pages were also opened:

- `library/numerical-linear-algebra-and-approximation/spline-evaluation-and-interpolation-algorithms.md`.
- `library/numerical-pdes-and-spatial-discretization/curved-mesh-geometry-and-conservative-mesh-transfer.md`.
- `library/numerical-pdes-and-spatial-discretization/elasticity-near-incompressibility-and-locking-free-discretization.md`.

All 19 A-page items and all four B-page examples listed in the batch manifest were opened and reviewed:

- `def-nurbs-patch-map-and-rational-spline-space`
- `lem-compactly-supported-h1-belongs-to-h-zero`
- `lem-tensor-q1-interpolation-h1-estimate`
- `lem-isogeometric-pullback-energy-norm-equivalence`
- `lem-matching-nurbs-patch-traces-give-h1-conformity`
- `lem-positive-nurbs-basis-and-quotient-derivative`
- `lem-nurbs-laplace-tensor-gap-under-map-error`
- `thm-nurbs-quotient-best-approximation-transfer`
- `lem-nurbs-knot-cell-simplicial-geometry-adapter`
- `lem-boundary-preserving-tensor-schoenberg-h1-approximation`
- `thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry`
- `lem-nurbs-homogeneous-data-perturbation-geometry-bounds`
- `def-isogeometric-galerkin-patch-space-and-refinement`
- `thm-isogeometric-elasticity-galerkin-quasioptimality`
- `thm-isogeometric-perturbed-geometry-quadrature-strang-bound`
- `thm-isogeometric-poisson-galerkin-quasioptimality`
- `thm-nurbs-tensor-product-l2-approximation`
- `thm-nurbs-p1-tensor-spline-h1-error-rate`
- `thm-boundary-preserving-nurbs-projector-and-h1-rate`
- `cex-positive-nurbs-weights-do-not-imply-admissible-patch`
- `ex-isogeometric-quarter-annulus-nurbs-patch`
- `cex-multipatch-trace-mismatch-not-h1`
- `ex-isogeometric-k-refinement-of-the-identity-patch`

Relevant dependency statements and proofs were opened before their consumers. The opened supplier inventory included the B-spline basis, polynomial reproduction, knot-insertion algorithm, basis-refinement identity and curve-preservation theorem; the Sobolev, zero-boundary closure, zero-extension, Meyers–Serrin, cutoff, Hilbert-space, weak-derivative, change-of-variables and divergence results; the finite-piecewise-boundary and matching-mesh definitions; the NURBS and curved-cell interfaces; the inverse-function, compactness and lower-dimensional-null results; the mean-value and tensor interpolation estimates; the local spline quasi-interpolant and its Sobolev rate; the elasticity model, Korn identity and finite-Lamé Galerkin bound; the Poincaré, Céa, variational-crime and first-Strang suppliers; and the measure, Fubini, dominated-convergence, countability and inner-product inequalities used by the projector proof.

## Mathematical review and edits

Six assigned items received repairs.

1. **`thm-nurbs-p1-tensor-spline-h1-error-rate`, Statement and proof step 1.2.** The uniform Q1 numerator interpolant was used as a Galerkin best-approximation candidate without requiring its analysis grid to refine the geometry grid. The patch-space definition requires this refinement. The Statement now identifies the Q1 numerator space and its rational trial space and requires that grid compatibility; step 1.2 records that this puts the interpolant in the trial numerator space. The Q1 estimate and quotient-transfer bound then supply the displayed rate.

2. **`thm-nurbs-tensor-product-l2-approximation`, Statement and fact F4.** The prior phrase “anisotropic Sobolev class” did not define the required global (L^2) membership, and the real-linear univariate operators had no stated real-valued input. The Statement now requires real-valued (g\in L^2), its weak pure derivatives in (L^2), and the section hypotheses used by the univariate theorem. It also ties the coordinate analysis grids to the geometry grid and defines their product as the numerator space of the patch trial space. Fact F4 now cites that patch-space definition for (S_h/W) and the positive-basis lemma for (W\ge w_-). These conditions support both the tensor estimate and its interpretation as an admissible rational analysis approximation.

3. **`thm-boundary-preserving-nurbs-projector-and-h1-rate`, Statement.** The projector equation uses the real bilinear (H^1) inner product without complex conjugation, while the library's Sobolev convention permits either scalar field when context does not fix one. The Statement now fixes real-valued scalar Sobolev spaces and a real-linear projector. It also requires the analysis grids defining (V_h) to refine the geometry grids and says the selected knots define the local numerator spaces of (V_h), so the constructed spline (s_a=\mathcal S_ag_a) is an element of the stated trial space.

4. **`thm-nurbs-quotient-best-approximation-transfer`, Statement and Given clause.** The proof invokes the trace-to-(H^1) supplier, which is stated for real-valued fields. The Statement now specifies real-valued (\widehat u) and numerator (s), and the real-valued target (H^1(\Omega;\mathbb R)), matching that supplier's scope.

5. **`lem-boundary-preserving-tensor-schoenberg-h1-approximation`, Statement and fact F1.** The trace supplier used for the Sobolev conclusion is real-valued, so the input is now explicitly real-valued. Fact F1 now gives exact local support for the Greville identity and derivative formula: polynomial-reproduction proof steps 3.1 (specialized to (k=1)) and 3.2, respectively.

6. **`thm-isogeometric-perturbed-geometry-quadrature-strang-bound`, Statement.** The form uses real bilinear dot products without complex conjugation. The Statement now fixes real scalar Sobolev spaces and a real-linear physical load, matching the stated bilinear form and its real scalar application.

For all six repairs, the batch-69 proof-contract entries were regenerated from the current item facts and proof steps. None of these six carriers had a `verification.judge` record to remove. No other confirmed defect required repair, and no uneditable mathematical defect was found in the assigned carriers or pages.

## Page verdicts

- **`isogeometric-galerkin-methods` (A): pass after the six item repairs.** Its statements about admissibility, separate geometry and quadrature defects, conditional approximation rates, finite-Lamé dependence, and multipatch compatibility match the reviewed item hypotheses. Its three required pages exist and the relevant NURBS, curved-cell and finite-Lamé interfaces are consistent with the page summary. No A-page prose edit was needed.
- **`isogeometric-galerkin-methods-examples` (B): pass.** The folded unit-weight patch, quarter-annulus patch, trace-jump counterexample and identity k-refinement example have the stated formulas and conclusions. The page's diagrams are illustrative and do not substitute for any proof. No B-page prose edit was made.

## Validation and blockers

- Reflow and precheck were run for all six changed items. Reflow reported no further changes; all six prechecks passed.
- The strict proof-contract check passed for all six changed items: 6/6 checked, zero errors and zero warnings.
- The required final `node tools/proof-layout.mjs` run covered all six changed item paths in one command: 27 proof steps, zero defects.
- No tests or unrelated run gates were run. The autopilot status check showed the run in `3a-read`; no run transition was attempted.
- No batch-local blocker remained. A rendered reader evidence bundle was not present in the run state directory; the review used the current assigned pages and items and directly opened dependencies. Earlier coverage notes and author conclusions were treated as leads only, not as verdicts.
