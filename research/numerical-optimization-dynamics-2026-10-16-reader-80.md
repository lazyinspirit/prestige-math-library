# Step 3a reader report — batch 80

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader  
Coverage: batch 80

## Summary

I reviewed the two assigned pages and all 33 listed items, following the assigned items’ dependency levels and opening their direct mathematical suppliers where needed. The current run status still reports the run as active and its reader stage unfinished. No separate rendered evidence bundle was present in the active .autopilot state directory or the task-specific research paths, so I used the current manifest, current authored files, supplier items, and the referenced source passages.

I repaired four assigned in-flight items: the dimension parameter in the empirical W1 example, the Simpson residual and RK4 tube hypotheses in the same-sign vortex example, the RK4 open-domain/compact-convex-tube hypotheses in the signed error-budget theorem, and missing measurability/finiteness steps in the weighted path-space completeness proof. Their proof contracts were updated. The changed items passed reflow and precheck, and the final batched proof-layout check reported zero defects. No assigned page prose was edited.

## Opened inventory

Assigned pages:

- library/numerical-pdes-and-spatial-discretization/interacting-particle-mean-field-and-vortex-blob-error.md (A page)
- library/numerical-pdes-and-spatial-discretization/interacting-particle-mean-field-and-vortex-blob-error-examples.md (B page)

Assigned A-page items:

- Level 0: def-bounded-lipschitz-dual-norm-for-signed-measures; def-globally-lipschitz-mean-field-kernel; def-mollified-biot-savart-vortex-kernel; def-p-one-wasserstein-one; def-signed-split-transport-cost; lem-weighted-continuous-path-space-is-complete.
- Level 1: alg-tensor-simpson-force-evaluator; def-characteristic-mean-field-solution; def-mean-field-and-weighted-vortex-particle-systems; def-signed-vorticity-characteristic-solution; lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz; lem-signed-bl-norm-dominated-by-split-coupling-cost; lem-w1-is-finite-on-probability-measures-with-finite-first-moment.
- Level 2: def-separable-regularized-vortex-interaction-hamiltonian; thm-dobrushin-w1-stability-for-characteristic-flows; thm-empirical-measures-solve-mean-field-equation-exactly; thm-mean-field-characteristic-flow-exists-uniquely; thm-mean-field-characteristics-satisfy-weak-transport-identity; thm-mollified-biot-savart-kernel-has-l1-consistency; thm-signed-dobrushin-stability-with-force-defect; thm-signed-regularized-vorticity-characteristics-preserve-total-variation; thm-w1-dobrushin-stability-with-force-defect; thm-weighted-signed-vortex-particles-satisfy-weak-transport-identity.
- Level 3: lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube; thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two; thm-tensor-simpson-force-error.
- Level 4: thm-rk4-global-error-for-regularized-vortex-particles.
- Level 5: thm-mean-field-vortex-blob-error-budget.

Assigned B-page items:

- ex-softened-newtonian-particles-not-collision-model
- ex-dimension-dependent-empirical-w1-error
- ex-mixed-sign-vorticity-needs-signed-distance
- ex-globally-lipschitz-alignment-model
- ex-same-sign-smooth-vortex-blob-approximation

Required page dependencies opened:

- picard-lindelof-and-first-order-odes
- one-step-ode-consistency-and-local-error
- composite-quadrature-rules
- global-ode-and-density-error
- runge-kutta-methods-and-order
- geometric-numerical-integration

Direct supplier items opened included the measure and transport foundations (signed measures, total variation, signed integration bounds, Jordan decomposition and variation formulas, product measures, Borel products, Tonelli, Fubini, dominated convergence, nonnegative integration, and path-space measurability); ODE and RK4 definitions/results (first-order IVPs, one-step defects, RK tableaus and order conditions, the discrete recurrence, global error, and maximal ODE solutions); Simpson’s algorithm, panel kernel, and error bound; and the local leapfrog, symplectic, determinant, and change-of-variables suppliers. The current-run cross-batch suppliers independently opened included alg-composite-simpson-rule (batch 20), def-local-leapfrog-domain-on-an-open-configuration-set and the local symplectic suppliers (batch 54), the RK4 tableau/order suppliers (batch 35), and the one-step ODE definition (batch 7).

## Mathematical review

The bounded-Lipschitz and W1 definitions preserve their different domains: the former applies to finite signed measures with finite total variation, while W1 is reserved for finite-first-moment probability measures. The sign-split transport definition and its coupling inequality use matching Jordan masses and do not assume an optimal coupling is attained.

The weighted path-space completeness argument uses Countable Choice only for the countable representatives and conull continuity sets. Its repaired proof now makes the measurable increment suprema explicit, invokes the finite-integral-implies-finite-a.e. result before taking a pointwise uniform limit, and grounds joint measurability of the limit in the measurable-limit and Euclidean-product suppliers.

For the mollified Biot–Savart kernel, the near-field derivative estimate is O(epsilon^-2), the far-field Taylor remainder is O(epsilon^2 |x|^-3), and its radial integral gives the stated L1 O(epsilon) consistency bound. The signed and probability Dobrushin estimates preserve their respective mass factors and two-variable Lipschitz convention. The coupling estimates are conditional on the stated sign-preserving flows, finite path moments, and bounded force defects.

The tensor Simpson proof applies the scalar Peano-kernel bound in each coordinate and then combines the two componentwise bounds with the Euclidean norm, producing the stated sqrt(2) factor. The RK4 theorem uses the exact-start O(h^5) defect, the stage-wise one-step Lipschitz estimate, and the finite recurrence; its tube and paired-stage assumptions are stated explicitly. The signed error-budget proof adds the Euler-to-regularized force defects before applying signed Dobrushin, then bounds RK4 particle displacement by the total variation mass. Its zero-mass case is covered.

The separable regularized Hamiltonian is kept distinct from the first-order Biot–Savart particle system. The leapfrog reversibility, symplecticity, local volume preservation, and second-order trajectory estimate are conditional on their stated admitted-domain and tube hypotheses.

The B-page examples were checked individually. The Newtonian softening example distinguishes the collision force; the empirical cube bound follows from unsampled vertices; the mixed-sign example is outside W1’s probability domain; the alignment trajectories and mean are computed correctly; and the same-sign estimate is a probability coupling argument.

## Repairs

- ex-dimension-dependent-empirical-w1-error: made the dimension hypothesis explicit as M in the natural numbers with M >= 1. This is the domain required for V_M subset R^M and the count 2^M. The existing coupling lower-bound proof is unchanged.
- ex-same-sign-smooth-vortex-blob-approximation: specified the rectangle, even integer panel counts, C4 force integrands, uniform fourth-derivative bounds, residual definition, eta_q formula, and open-domain compact-convex RK4 tube conditions required by the cited Simpson and RK4 theorems. The coupling proof is unchanged.
- thm-mean-field-vortex-blob-error-budget: made the RK4 field's open time-state domain and common compact convex tube explicit, with derivative bounds on the tube. Its final stage-admissibility clause already specifies both exact/numerical starts and defined one-step maps.
- lem-weighted-continuous-path-space-is-complete: supplied the measurable conull continuity set, measurable countable time-suprema, pointwise measurability of the limit, and the finite-integral-implies-finite-a.e. step. Added the corresponding supplier dependencies and updated the proof contract.

For all four changed items, reflow reported unchanged, precheck passed, and the final proof-layout command reported 4 items, 12 steps, 0 defects. None of the changed items contained a verification.judge record to remove.

## Remaining uneditable finding

- prop-jordan-parts-and-total-variation-formulas-for-signed-measures: the opening sentence of the published Statement has an unmatched closing parenthesis in “on (X, A))”. The intended domain is clear and the formulas are unaffected, but the text is ill-formed. The assigned consumer lem-signed-bl-norm-dominated-by-split-coupling-cost depends on this item. The finding is included in research/numerical-optimization-dynamics-2026-10-16-reader-findings-80.json with nonfatal severity.

## Page verdicts and blockers

- interacting-particle-mean-field-and-vortex-blob-error: pass. Its summary matches the conditional mean-field, signed-flow, quadrature, RK4, and Hamiltonian-comparison claims.
- interacting-particle-mean-field-and-vortex-blob-error-examples: pass after the same-sign example repair. Its summary remains a high-level account of the example and its coupling/tube conditions.
- Batch 80 blocker: none. At handoff the run status remains active and still lists batch 80 as missing from 3a-read. It also reports an unrelated 3a-collect blocker for batch 83 after three failed collection attempts; that issue is outside this assignment.
- Coverage limitation: no separately rendered evidence bundle was available, so the current manifest and source files were reviewed directly.

## Source checks

- François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1, §§1.5–1.6, PDF pp. 5–8: Theorem 1.5 and its coupling-propagation proof (Lemmas 1.6–1.7 and Steps 1–3) support the W1/Dobrushin comparison framework. The local proof was checked separately for this two-variable kernel convention.
- Tobin Driscoll and Richard Braun, Fundamentals of Numerical Computation, §5.6.2, equations (5.6.14)–(5.6.15), and Exercise 5.6.4–5.6.5: confirms the composite Simpson formula and fourth-order behavior. The exact derivative-norm constant used here is derived from the local Peano-kernel item.
- Liu and Xin, “Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data,” §§1 and 3, PDF pp. 612–615 and 624–625: consulted for the regularized Biot–Savart and weak-consistency context. The batch’s explicit L1 kernel estimate was verified from its own Taylor and radial-integration argument.
