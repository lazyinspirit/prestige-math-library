# Step 3a reader report — batch 56

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `56`

## Opened inventory

Assigned pages opened:

- A: `library/numerical-pdes-and-spatial-discretization/parabolic-finite-element-methods.md`
- B: `library/numerical-pdes-and-spatial-discretization/parabolic-finite-element-methods-examples.md`

The A-page prerequisites were also opened: `finite-element-meshes-and-interpolation` and `ceas-lemma-and-aubin-nitsche-error-estimates` in `library/numerical-pdes-and-spatial-discretization/`, and the published `the-direct-method-and-euler-lagrange-equations` page in `library/pde/`.

All 21 assigned A-page items and all 3 assigned B-page examples were opened in dependency order:

- A: `def-parabolic-evolution-triple-and-energy-space`; `lem-parabolic-bochner-l2-approximate-identity`; `lem-parabolic-discrete-energy-identity`; `lem-parabolic-hilbert-bnb-criterion`; `alg-parabolic-backward-euler-averaged-forms`; `alg-parabolic-crank-nicolson-cg1`; `lem-parabolic-bochner-time-mollification`; `lem-parabolic-measurable-form-operators-and-inverse`; `lem-parabolic-projection-time-product-rule`; `lem-parabolic-weak-compactness-separable-bochner-hilbert`; `lem-parabolic-zero-boundary-sobolev-space-is-separable`; `thm-parabolic-finite-dimensional-measurable-ode`; `def-parabolic-ritz-projection`; `lem-parabolic-energy-pairing-and-trace`; `thm-parabolic-backward-euler-error-and-reconstruction`; `thm-parabolic-crank-nicolson-second-order`; `lem-parabolic-ritz-projection-well-defined`; `thm-parabolic-variational-wellposedness-and-energy-stability`; `thm-parabolic-fem-semidiscrete-existence-energy`; `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound`; `cor-parabolic-semidiscrete-spatial-error-rates`.
- B: `ex-parabolic-crank-nicolson-time-regularity-order-loss`; `ex-parabolic-heat-initial-projection-error`; `ex-parabolic-semidiscrete-ritz-error-identity`.

The relevant direct dependency items and supporting items needed to inspect the finite-element conformity and approximation arguments were opened. The unique external item IDs were: `cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `cor-finite-dimensional-subspaces-are-closed`, `cor-shape-regular-affine-fe-primal-energy-approximation`; `def-bochner-integrable-function`, `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `def-broken-and-conforming-polynomial-spaces`, `def-countable-choice`, `def-hilbert-space`, `def-lebesgue-outer-measure`, `def-matching-affine-simplicial-meshes`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-reference-finite-element-and-unisolvent-dofs`, `def-separable-space`, `def-sobolev-space-wkp-and-its-norm`, `def-strongly-measurable-banach-valued-function`, `def-translation-of-a-function-on-rn`, `def-wkp-zero-as-a-sobolev-closure`; `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-affine-simplex-gauss-green-formula`, `lem-bochner-integral-norm-inequality`, `lem-compact-support-zero-extension-in-wkp`, `lem-fundamental-lemma-of-the-calculus-of-variations`, `lem-galerkin-orthogonality-for-conforming-galerkin-approximations`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-oriented-facet-cancellation-on-matching-meshes`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `lem-shape-regular-affine-simplex-scaling`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `lem-smooth-density-on-reference-simplex`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-unisolvent-dofs-define-reference-interpolant`, `lem-vector-valued-continuous-curve-space-is-complete`, `lem-weak-leibniz-rule-with-a-smooth-factor`; `thm-adjoint-problem-for-bounded-coercive-variational-forms`, `thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity`, `thm-banach-fixed-point`, `thm-bochner-integrability-criterion`, `thm-bolzano-weierstrass`, `thm-bramble-hilbert-on-reference-simplex`, `thm-bounded-linear-maps-commute-with-bochner-integration`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`, `thm-chain-rule-for-differentials-of-smooth-maps`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `thm-dominated-convergence`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-holder-inequality-for-integrals`, `thm-lax-milgram`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-minkowski-inequality-for-integrals`, `thm-monotone-convergence-for-the-integral`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-reference-simplex-poincare-wirtinger`, `thm-riesz-representation-for-hilbert-space`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`, and `thm-zero-boundary-piecewise-polynomials-in-w10p`.

The batch proof-contract file contains one contract for each of the 24 manifest items. I checked that inventory, risk/step coverage, and the high-risk contracts against the opened proof sections; the corrected example contract is described below.

## Review and edits

### Assigned items

1. `ex-parabolic-crank-nicolson-time-regularity-order-loss`: corrected the Example prose that said the exact solution and load both had the first-order setting's (H^1) regularity. Verification 1.1 proves (u\in H^1(0,1)\setminus H^2(0,1)) and (f=u'+u\in L^2(0,1)); it does not prove (f\in H^1), and in fact (f'(t)=-\frac3{16}t^{-5/4}+\frac34t^{-1/4}\notin L^2(0,1)). The corrected prose now states only the regularity required by the method. The matching step-1.1 proof-contract derivation now records that the load is asserted only to be in (L^2). No `verification.judge` record was present to remove.

2. `thm-parabolic-backward-euler-error-and-reconstruction` and `thm-parabolic-crank-nicolson-second-order`: clarified the titles to state that the first- and second-order nodal rates require exact initial data. Their error bounds include \(\|e^0\|_H^2\); the stated rates follow when \(U^0=u_h(0)\), with the additional \(H^2(0,T;V_h)\) hypothesis for Crank–Nicolson.

3. `parabolic-finite-element-methods` A-page summary: updated its time-stepping paragraph to preserve both exact-initial-data conditions alongside the respective order and regularity hypotheses.

No proof statement, computation, dependency, or page membership was otherwise changed. Reflow and precheck passed for all four changed item paths. Final `proof-layout` command covered those four items and reported `4 items, 19 steps, 0 defects`. The modified items had no stale `verification.judge` records.

No other confirmed defect was found in the 24 assigned items or the two assigned page summaries.

### Uneditable dependency finding

`thm-zero-boundary-piecewise-polynomials-in-w10p`, Proof 2.1 (line 63): in dimension two, at a point in the relative interior of an interior mesh edge, the normal link is \(S^0\), which is disconnected. The proof's claim that the direction set is a whole connected sphere and its facet-adjacency argument do not cover this case. The conclusion is supplied immediately by the stated matching-trace condition, which equates the two incident polynomial traces along the edge; an explicit codimension-one interior-facet case would close the proof. I did not edit this batch-24 supplier. The assigned consumers reaching it include `thm-parabolic-fem-semidiscrete-existence-energy`, `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound`, `cor-parabolic-semidiscrete-spatial-error-rates`, `ex-parabolic-heat-initial-projection-error`, and `ex-parabolic-semidiscrete-ritz-error-identity`. At split the source bytes remained current with SHA-256 `d89dea6c751121ad51caa2e7cddb7cbe199b8ae82e47211f90be9e660aa04ef6`. The finding is nonfatal because the missing case follows directly from the supplier's conformity hypothesis.

## Page verdicts

- **A — `parabolic-finite-element-methods`:** summary is accurate after the exact-initial-data qualification was added. The continuous well-posedness route, interval-averaged methods, energy identities, Ritz residual, and conditional spatial rates agree with the reviewed items. The nonfatal batch-24 supplier proof gap above remains in the dependency closure.
- **B — `parabolic-finite-element-methods-examples`:** summary and page membership are accurate. The projection coefficients and semidiscrete residual computations check out. Its Crank–Nicolson example's load-regularity prose was repaired in the assigned item.
- **Required pages:** `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, and `the-direct-method-and-euler-lagrange-equations` were opened; their summaries and the relevant listed prerequisite context were consistent with the assigned uses.

## Sources and limitations

Christian Clason, *Introduction to Finite Element Methods*, author PDF `https://imsc.uni-graz.at/clason/preprints/FEMNotes.pdf`, was opened at the relevant passages: Chapter 8, Theorem 8.1 (PDF pp. 60–62); Chapter 11, §§11.1–11.2 and Theorem 11.3 (PDF pp. 98–103); and Chapter 12, §§12.1–12.2 (PDF pp. 104–106). Theorem 11.3 invokes measurability of the inverse form action without proving it; the assigned local Galerkin-approximation lemma supplies that argument. The Chapter 12 schemes use point-sampled data, while the assigned algorithms use interval averages for (L^2) equivalence classes.

Long Chen, *Finite Element Methods for Parabolic Equations*, `https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf`, could not be fully extracted by the browser tool (it returned an internal error). The official PDF search index exposed §3.1's backward Euler and Crank–Nicolson formulas, but I did not verify the complete note or claim full-text coverage. The assigned local proofs were checked directly.

The autopilot run remains open. At handoff, batch 56 had no assignment-specific blocker and no worker was running. The run status showed an unrelated `3a-split` blocker: `split-25` had failed three times; it was left untouched.
