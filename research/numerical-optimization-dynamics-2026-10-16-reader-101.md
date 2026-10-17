# Step 3a reader report — batch 101

Run: `numerical-optimization-dynamics-2026-10-16`  
Review date: 2026-10-17  
Scope: batch `101` only.

## Verdict

Reviewed both assigned pages and all 26 assigned items in supplier-before-consumer order. Repaired nine assigned items, updated the seven affected proof contracts, and made no page-prose edits. The A-page is mathematically coherent after those repairs. The B-page examples are sound after the repairs to the boundary-control and zero-regularization examples. Two nonfatal defects remain in current-run supplier items outside batch 101; both are reported in the findings JSON. No other blocker was found.

## Opened assigned pages and items

- A-page: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/finite-element-pde-constrained-optimization.md`
- B-page: `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/finite-element-pde-constrained-optimization-examples.md`

Items opened in dependency order:

1. A: `def-pde-box-control-set`
2. A: `lem-separable-hilbert-bounded-sequence-weak-subsequence`
3. A: `alg-fem-control-active-set-box-quadratic-solve`
4. A: `lem-pde-box-control-set-basic-properties`
5. A: `lem-pde-l2-control-space-separable`
6. A: `def-linear-elliptic-pde-constrained-control-problem`
7. A: `lem-pde-box-control-set-weakly-sequentially-closed`
8. A: `thm-linear-elliptic-control-state-and-adjoint-wellposedness`
9. A: `thm-linear-elliptic-reduced-control-gradient-and-hessian`
10. A: `thm-linear-elliptic-control-existence-and-variational-inequality`
11. A: `lem-box-control-projection-is-pointwise-clipping`
12. A: `cor-linear-elliptic-control-projection-formula`
13. A: `lem-piecewise-constant-control-h1-projection-error`
14. A: `lem-fem-control-gradient-residual-bound`
15. A: `thm-p0-control-fem-o-h-error`
16. A: `thm-variational-fem-control-o-h2-error`
17. A: `thm-parabolic-control-adjoint-gradient-extension`
18. A: `alg-fem-control-proximal-gradient-certified-residual`
19. A: `thm-fem-control-proximal-gradient-residual-distance-bound`
20. A: `thm-fem-control-active-set-box-quadratic-solve-sound-finite`
21. A: `alg-fem-control-active-set-sqp-with-finite-residual-status`
22. A: `thm-fem-control-active-set-sqp-finite-budget-certificate`
23. A: `lem-p0-box-projection-is-clipped-cell-average`
24. B: `ex-distributed-heat-source-control-with-an-exact-box-optimum`
25. B: `ex-boundary-control-needs-a-trace-space`
26. B: `ex-bang-bang-control-is-the-alpha-zero-box-limit`

## Dependencies and source checks

Opened and checked the relevant statements and proof passages of these published dependencies: `def-countable-choice`, `def-axiom-of-choice`, `def-l-p-space-as-a-quotient-by-null-functions`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `def-countable`, `def-hilbert-space`, `def-separable-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-nested-interval-property`, `thm-riesz-representation-for-hilbert-space`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `def-bounded-linear-operator`, `def-dual-space-of-a-normed-space`, `def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-lax-milgram`, `lem-weak-derivatives-are-unique-almost-everywhere`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `thm-holder-inequality-for-integrals`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-of-archimedean`, `thm-choice-implies-dependent-implies-countable-choice`, `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, `thm-integration-by-parts-for-absolutely-continuous-functions`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.

Opened relevant current-run dependencies from other batches: `def-matching-affine-simplicial-meshes`, `lem-affine-pullback-weak-derivatives-and-scaling`, `thm-reference-simplex-poincare-wirtinger`, `alg-proximal-gradient-and-fista`, `cor-shape-regular-affine-fe-primal-energy-approximation`, `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`, `cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation`, `thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity`, `thm-first-strang-lemma-for-conforming-perturbed-galerkin`, `def-parabolic-evolution-triple-and-energy-space`, `lem-parabolic-energy-pairing-and-trace`, `lem-parabolic-projection-time-product-rule`, `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound`, `thm-parabolic-variational-wellposedness-and-energy-stability`, `alg-sqp-exact-hessian-newton-step`, `alg-sqp-finite-precision-kkt-qr-solve-and-residual-check`, `thm-sqp-finite-precision-kkt-residual-certificate-sound`, `thm-sqp-exact-hessian-local-quadratic-convergence`, `def-inequality-constrained-program-and-kkt-geometry`, `def-sqp-linearized-quadratic-subproblem`, and `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`.

External source checks relevant to the reviewed approximation and algorithm claims:

- Casas and Tröltzsch, [*Error estimates for linear-quadratic elliptic control problems*](https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download), §1.1, printed pp. 3–5 (Lemma 1.1, projection formula (1.4), cell-average projection estimate (1.5), and Theorem 1.2).
- Hinze, [*A Variational Discretization Concept in Control Constrained Optimization*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf), §§1–3, printed pp. 2–7 (including the distinction between piecewise-constant and variational discretization rates).
- Clason, [*Introduction to Finite Element Methods*](https://arxiv.org/pdf/1709.08618v2.pdf), Chapter 11, Theorem 11.1, Lemma 11.2, and Theorem 11.3, PDF pp. 99–103 (evolution-space traces, energy integration by parts, and parabolic well-posedness).
- Nocedal and Wright, [*Numerical Optimization*, 2nd ed.](https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf), Chapter 18 §§18.1 and 18.10, printed pp. 528–531 and 561–562 (SQP/KKT systems and exact-Hessian local quadratic convergence, with Assumption 18.2(a)).
- Beck and Teboulle, [*A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems*](https://www.cs.cmu.edu/~airg/readings/2012_02_21_a_fast_iterative_shrinkage-thresholding.pdf), §§1–2, pp. 183–190 (proximal-gradient/FISTA context).

The two reported supplier findings are exact: Step 1.1 of the affine-pullback lemma applies its cited nonnegative change-of-variables result to signed integrands, and the Aubin–Nitsche endpoint note omits the theorem's required inclusion of its regularity space in `V`. The consumer assigned in this batch uses the needed intersection in the second case.

## Repairs made

- `lem-pde-box-control-set-weakly-sequentially-closed`: replaced the indirect exceptional-set argument with fixed indicator tests in `L^2`; made integrability explicit using Hölder and closed the almost-everywhere conclusion with the cited zero-integral theorem.
- `lem-p0-box-projection-is-clipped-cell-average`: stated the matching affine-mesh and Countable Choice conditions, justified finite cell averages and projection estimates, and accounted for null cell facets using the affine-hyperplane null-set result.
- `lem-piecewise-constant-control-h1-projection-error`: made the mesh/domain hypotheses explicit, justified cell means by Hölder, split signed integrands before invoking the nonnegative change-of-variables theorem, and handled facets as null sets. The remaining signed change-of-variables omission is in the unassigned supplier listed in findings; it does not make the repaired estimate's local derivation complete by itself, so that supplier issue is explicitly preserved.
- `ex-boundary-control-needs-a-trace-space`: stated Countable Choice, supplied the one-dimensional absolutely continuous representative and the integrability/IBP prerequisites, and proved nonrepresentability for nonzero boundary flux using endpoint tent functions. Qualified the claim so zero flux is not falsely excluded.
- `ex-bang-bang-control-is-the-alpha-zero-box-limit`: supplied the cited nonnegative zero-integral fact needed to infer the pointwise bang-bang minimizer almost everywhere.
- `thm-fem-control-active-set-box-quadratic-solve-sound-finite`: justified nonsingularity of each free Hessian block directly from positive definiteness of the full Hessian.
- `alg-fem-control-proximal-gradient-certified-residual`: added a finite certified bound `beta_B >= ||B||`, used `delta = beta_B epsilon_p`, and required returned state/adjoint values to solve the stated discrete equations with the adjoint right-hand side based on the computed state; uncertified backend results now return failure.
- `thm-fem-control-proximal-gradient-residual-distance-bound`: made the gradient error estimate explicit, deriving `||g - g_tilde|| <= ||B|| epsilon_p <= beta_B epsilon_p = delta` from the algorithm's certified bounds.
- `alg-fem-control-active-set-sqp-with-finite-residual-status`: specified full multiplier-vector transfer when active sets change, zeroed inactive multipliers, stated finite evaluation/applicability conditions, and defined the best-tuple output on budget exhaustion.

No item in the assigned batch contained a stale `verification.judge` record requiring removal. No page prose was edited. The nine changed item files are the seven proof-bearing items above and the two algorithms.

## Uneditable findings and page verdicts

1. `lem-affine-pullback-weak-derivatives-and-scaling`, Proof Step 1.1: the cited change-of-variables theorem covers nonnegative measurable integrands, whereas the proof applies it directly to signed weak-derivative integrands. Close this with an integrability argument and separate positive/negative parts (and real/imaginary parts if the scalar field is complex). This is an unassigned current-run supplier of `lem-piecewise-constant-control-h1-projection-error`.
2. `thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity`, Statement: the displayed theorem requires `R_s` to lie in `V`, but its endpoint note permits `R_1 = H^2(Ω)` without that inclusion. State `R_1 = H^2(Ω) ∩ V` or add the condition `H^2(Ω) ⊆ V`. The assigned consumer `thm-variational-fem-control-o-h2-error` uses the appropriate intersection.

- A-page `finite-element-pde-constrained-optimization`: verdict pass after repairs; its statements and summaries agree with the reviewed items. The two supplier findings are recorded for the owner; the assigned A-page consumer in the Aubin–Nitsche case states the intersection needed for its application.
- B-page `finite-element-pde-constrained-optimization-examples`: verdict pass after repairs; the distributed heat source example is sound, and the boundary-control and bang-bang examples now state and establish their needed hypotheses and conclusions.

## Validation

- Updated `research/numerical-optimization-dynamics-2026-10-16-batch-101.proof-contracts.json` for the seven changed proof-bearing items; strict validation reported 0 errors, 0 warnings, and 7/7 items checked.
- Ran reflow and precheck on each of the nine changed item paths. All reflows reported unchanged. Precheck passed for all seven proof-bearing items; the two algorithm items correctly had no proof steps to check.
- Ran the required final layout command once, after all item edits: `node tools/proof-layout.mjs` with all nine changed item paths. Result: 9 items, 23 steps, 0 defects.
- The current-run source hashes are recorded in `research/numerical-optimization-dynamics-2026-10-16-reader-findings-101.json` and were rechecked after edits.

## Coverage limitation

All assigned pages and items, the dependencies needed for their claims, and the listed relevant source passages were opened. This review did not independently re-prove every transitive theorem in the published foundational library; its proof chains were checked at the cited statements and at the steps needed by this batch.
