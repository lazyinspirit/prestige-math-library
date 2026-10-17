# Step 3a Reader Report — Batch 89

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader  
Batch: 89

## Opened inventory

Opened the assigned manifest, the A page variational-crimes-and-strang-lemmas, the B page variational-crimes-and-strang-lemmas-examples, all 12 A-page items, and all 3 B-page examples.

The A-page items reviewed were def-variational-crime-error-framework, lem-one-dimensional-p1-interpolation-error, lem-one-dimensional-zero-boundary-poincare, def-geometry-lift-and-tensor-discrepancy, lem-discrete-form-perturbation-preserves-coercivity, thm-first-strang-lemma-for-conforming-perturbed-galerkin, thm-second-strang-lemma-for-nonconforming-galerkin, lem-geometry-tensor-gap-bounds-cellwise-form-defect, lem-midpoint-quadrature-defect-for-p1-stiffness, cor-midpoint-quadrature-strang-error-for-p1, cor-perturbed-conforming-galerkin-bound-from-cea, and cor-shape-regular-fe-strang-error-bound.

The B-page examples reviewed were ex-midpoint-underintegrated-p2-stiffness-loses-coercivity, ex-nonconforming-residual-breaks-galerkin-orthogonality, and ex-two-node-gauss-polynomial-exactness-and-x4-error.

Opened the direct published dependencies named by the assigned items, including the Hilbert and coercive-form definitions; Lax–Milgram and finite-dimensional closedness; calculus, Riemann integration, Lebesgue measure and integral, L²/Sobolev, Cauchy–Schwarz, Holder, and Countable Choice suppliers.

Opened the cross-batch current-run suppliers in dependency context:

- Batch 20: alg-composite-midpoint-rule, lem-composite-midpoint-panel-error-kernel, thm-composite-midpoint-error-bound.
- Batch 24: def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-broken-and-conforming-polynomial-spaces, thm-local-finite-element-interpolation-estimates.
- Batch 38: lem-galerkin-orthogonality-for-conforming-galerkin-approximations, thm-cea-quasi-optimality-for-conforming-galerkin-approximations, cor-symmetric-galerkin-best-approximation-in-energy-norm.
- Batch 82: def-gauss-moment-data, thm-monic-gauss-orthogonal-polynomials-exist-uniquely, thm-gauss-orthogonal-polynomial-has-simple-interior-zeros, def-gauss-quadrature-rule, lem-gauss-quadrature-rule-data-well-defined, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights.

Those 16 cross-batch supplier files remained byte-identical at the final source-hash check. Supplemental published targets opened to close the repairs included the Lp and essential-supremum definitions, simple-integral definitions, the bounded Riemann/Lebesgue agreement theorem, finite-point Riemann invariance, the graph-content and Jordan/Lebesgue conversion theorems, completeness of Lebesgue measure, finite subadditivity, and null-set integral vanishing.

## Repairs

1. lem-one-dimensional-p1-interpolation-error: added Countable Choice to the statement and direct dependencies. The proof obtains interval measures from thm-lebesgue-measure-of-a-box-of-every-kind, whose statement assumes Countable Choice, and uses that value in the cell-integral and global L²-norm estimates.

2. lem-one-dimensional-zero-boundary-poincare: made the unit-interval measure value explicit and used monotonicity of the nonnegative integral to pass from the pointwise bound to the L²-norm bound. This closes the use of λ₁((0,1))=1.

3. lem-geometry-tensor-gap-bounds-cellwise-form-defect: proved that the stability assumptions bound DΦ_h⁻¹, J_h, and hence B_h; finite cell discrepancies then bound the implemented tensor. The exact and implemented forms are therefore finite on the stated gradient-norm Hilbert space before coercivity is applied.

4. lem-midpoint-quadrature-defect-for-p1-stiffness: stated Countable Choice, defined the exact stiffness as the global Lebesgue form used by its Strang consumer, proved the cell-slope L²-norm identity from the simple-integral and interval-measure definitions, and supplied the Riemann/Lebesgue bridge and finite-point argument used to sum panel errors. The norm identity is included in the item statement for downstream use.

5. cor-midpoint-quadrature-strang-error-for-p1: explicitly proved boundedness of the exact and midpoint forms in the H¹ norm before applying the first Strang theorem. The proof uses Holder for the exact form and finite Cauchy–Schwarz with the cell-slope norm identity for the discrete form.

6. cor-shape-regular-fe-strang-error-bound: proved the finite simplex skeleton is Lebesgue null by containing each facet in a bounded affine graph, applying the graph-content and Jordan/Lebesgue results, and using completeness. Finite additivity of the nonnegative integral then gives the cellwise/global Sobolev seminorm decomposition used for the interpolation estimate. Also stated the unisolvence step identifying each global nodal restriction with its local interpolant.

7. ex-two-node-gauss-polynomial-exactness-and-x4-error: added Countable Choice and explicit Lebesgue-measure and Riemann/Lebesgue dependencies for moment-data verification and polynomial computations. Replaced the unrelated variational-crime references with the relevant source [MATH 373 Lecture Notes, Lecture 14](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf). I opened the source: §10.3, printed p. 44, gives Φ₂(x)=x²−1/3; §10.4, printed p. 44, gives the two-node rule with nodes ±1/√3, weights 1, and Theorem 11’s degree-three exactness. The previously listed Guermond Chapter 27 and Schöberl nonconforming-FE references concern variational-crime and finite-element error analysis, not this Gauss computation.

8. ex-nonconforming-residual-breaks-galerkin-orthogonality: established that the mean-zero exact space is the kernel of a bounded linear integral functional; made the interval-measure and Riemann/Lebesgue steps explicit for L² and piecewise-polynomial calculations; and stated the finite-interval Riemann facts used for the broken-load computations.

9. Renamed lem-one-dimensional-p1-interpolation-error to “One-dimensional P1 interpolation has a first-derivative error bound” so its title matches the stated one-dimensional result.

Updated the affected entries in research/numerical-optimization-dynamics-2026-10-16-batch-89.proof-contracts.json. None of the eight edited items carried a stale verification.judge record.

## Unedited defects

None confirmed. No withdrawal is proposed.

## Page verdicts

- variational-crimes-and-strang-lemmas (A): pass. Its summary accurately preserves the separate stability, form/load defect, bounded-extension, interpolation, and smallness hypotheses.
- variational-crimes-and-strang-lemmas-examples (B): pass. Its three summaries accurately report the computed instability, nonconforming residual, and Gauss error. B-page prose was not edited.

## Validation and blockers

All eight changed items passed reflow.mts and precheck.mts. The final batched proof-layout.mjs run reported 8 items, 32 steps, 0 defects.

Batch 89 has no mathematical blocker. The run status at completion was still running; it showed a separate 3a-collect blocker because collect-83 had failed three times (batch 83).

One ordering lapse occurred: I opened cor-midpoint-quadrature-strang-error-for-p1 before its direct supplier lem-midpoint-quadrature-defect-for-p1-stiffness. I then opened that supplier and checked the corollary against it before finalizing. No assigned consumer or supplier was left unchecked.
