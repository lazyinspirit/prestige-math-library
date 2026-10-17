# Step 3a reader report — batch 98

Run: numerical-optimization-dynamics-2026-10-16  
Role: reader-98  
Review scope: batch 98 only

## Opened inventory

Assigned pages:

- library/numerical-differential-equations-and-stochastic-dynamics/imex-and-operator-splitting-methods.md
- library/numerical-differential-equations-and-stochastic-dynamics/imex-and-operator-splitting-methods-examples.md

Assigned items, read in dependency order:

1. def-additive-ode-and-partition
2. def-dirichlet-sine-mode-heat-splitting-model
3. alg-imex-euler-step
4. def-exact-split-flows-lie-strang-and-bracket
5. lem-diagonal-heat-semigroup-generator-domain
6. lem-imex-euler-local-branch
7. def-ars222-additive-tableau-and-stages
8. lem-lie-strang-local-error-expansions
9. lem-dirichlet-forcing-coefficients-exceed-the-generator-domain
10. thm-imex-euler-local-order-and-stability
11. lem-ars222-coefficient-identities
12. lem-ars222-stage-branch-and-residual-control
13. thm-lie-strang-global-orders-and-subflow-error
14. thm-imex-euler-global-order-one
15. thm-imex-euler-algebraic-residual-budget
16. thm-ars222-additive-order-two-and-tolerance
17. prop-ars222-bivariate-stability-region
18. ex-stiff-explicit-partition-is-unstable
19. ex-noncommuting-matrices-show-lie-and-strang-orders
20. ex-finite-matrix-schrodinger-potential-kinetic-split
21. ex-dirichlet-boundary-forcing-strang-order-reduction
22. ex-reaction-diffusion-ars222-mode-amplification

Direct page prerequisites opened:

- global-ode-and-density-error
- runge-kutta-methods-and-order
- implicit-stiff-time-stepping-and-algebraic-error
- exponential-and-integrating-factor-integrators

Dependency items opened to check definitions, hypotheses, and cited conclusions:

- def-first-order-ode-initial-value-problem-and-solution; thm-existence-and-uniqueness-of-a-maximal-ode-solution; thm-picard-lindelof-local-existence-and-uniqueness; cor-bounded-derivative-implies-lipschitz
- def-implicit-residual-and-algebraic-error-units; def-explicit-runge-kutta-tableau-and-stage-map; def-implicit-runge-kutta-stage-equations; lem-small-step-implicit-rk-branch-and-residual-error; def-one-step-ode-method-local-defect-order-and-stability; thm-global-error-from-one-step-defect-and-stability; lem-discrete-one-step-error-recurrence-bound
- def-euclidean-inner-product; thm-cauchy-schwarz-and-the-euclidean-norm; def-metric-space; def-complete-metric-space; thm-euclidean-space-complete; def-lipschitz-holder-contraction; thm-banach-fixed-point
- prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation; cor-vector-valued-ftc-and-lipschitz-bound; thm-continuous-implies-integrable; thm-norm-inequality-for-the-vector-valued-integral; thm-ftc-second-part; cor-mean-value-theorem; thm-gronwall-integral-inequality
- cor-exponential-reciprocal-and-positivity; def-real-exponential-function-and-e; thm-exponential-addition-formula; thm-exponential-is-strictly-increasing; thm-derivative-of-exponential; thm-chain-rule-for-total-derivatives; def-square-summable-family-on-an-arbitrary-index-set; thm-p-series-real-exponents
- thm-of-square-roots; lem-of-square-monotone; lem-of-inverse-positive; def-real-power; thm-real-power-laws; lem-power-monotone
- def-pi-via-first-positive-cosine-zero; thm-sine-and-cosine-derivatives; thm-quarter-turn-values-and-shift-formulas; thm-symmetry-of-higher-mixed-partials; thm-multivariable-taylor-formula-with-lagrange-remainder
- def-complex-numbers-and-arithmetic; def-complex-conjugate-real-imaginary-part-and-modulus; def-matrix-product-and-identity-matrix; lem-exponential-series-of-a-bounded-operator
- def-inner-product-norm; prop-standard-coordinate-inner-products; def-adjoint-of-a-linear-map-between-inner-product-spaces; thm-matrix-of-the-adjoint-is-the-conjugate-transpose; thm-algebra-of-derivatives

## Repairs and evidence

- alg-imex-euler-step, front matter: removed justified_by: [lem-imex-euler-local-branch]. The lemma depends on the algorithm, so the old justified_by edge formed a prerequisite cycle. The algorithm has explicit solver failure, branch-not-certified, out-of-ball, residual-too-large, and success outcomes; root existence is a separate branch result and is not needed to define those instructions.
- lem-imex-euler-local-branch, Statement: added d≥1. Its completeness supplier, thm-euclidean-space-complete, states the Euclidean completeness result only for dimensions at least one.
- thm-imex-euler-local-order-and-stability, Statement and facts: made the uniform branch-ball assumptions explicit for every input in the tube, including positive radius, containment in the tube, h M_b≤R, the contraction bound, root membership, and exact endpoint membership. The proof compared the exact endpoint to the selected root through the branch residual estimate and compared roots from arbitrary tube inputs for stability. Replaced the Volterra citation, whose statement requires F continuous on the open domain, with the pathwise FTC argument: F composed with the exact path is continuous because F is Lipschitz on the tube, each coordinate is integrable, and the vector-valued FTC applies. Added its direct sources and removed the unused Volterra dependency from this item.
- thm-imex-euler-global-order-one, Statement: restricted the fixed-time estimate to sufficiently small h=T/N, as required by its local-order supplier.
- thm-imex-euler-algebraic-residual-budget, Statement and proof step 1.1: defined the initial computed state by tilde y_0:=y_0 and centered each solve at c_n=tilde y_n+h a(tilde y_n). The previous text centered a candidate for the approximate recurrence at y_n and did not define tilde y_0.
- lem-ars222-stage-branch-and-residual-control, Statement: required positive-radius stage balls, as required by its Banach fixed-point supplier.
- thm-ars222-additive-order-two-and-tolerance, Statement and proof step 5.1: required the uniform branch conditions for every starting state and restricted the order statements to sufficiently small h (with h=T/N for the global bound). Replaced the incorrect step references in step 5.1: the computed-versus-exact-root stage error is step 1.3, stability is step 2.2, and the exact-root defect is step 4.1.
- lem-lie-strang-local-error-expansions, Statement: explicitly admitted the exact flow of a+b and required it to remain in the common tube, since the expansion compares the split maps to that full flow.
- thm-lie-strang-global-orders-and-subflow-error, Statement and proof: restricted the global estimates to sufficiently small h=T/N and required the approximate-map stability constant L-hat to be nonnegative, as required for the global-error supplier.
- def-dirichlet-sine-mode-heat-splitting-model, lem-diagonal-heat-semigroup-generator-domain, ex-stiff-explicit-partition-is-unstable, ex-dirichlet-boundary-forcing-strang-order-reduction, and thm-lie-strang-global-orders-and-subflow-error: replaced scalar e^x notation with the defined exp(x) notation where real-power dependencies were absent. In ex-dirichlet-boundary-forcing-strang-order-reduction, added def-real-power, thm-real-power-laws, and lem-of-square-monotone and stated the facts connecting H=1/sqrt(h), H^-5, and the h^(5/4) rate.
- prop-ars222-bivariate-stability-region, Statement: specified the complex extension of the real tableau (equivalently, realification as R²) before applying it to complex scalar test values.
- library/.../imex-and-operator-splitting-methods.md, summary: stated the sufficiently-small-step and branch/tube qualifications for the IMEX, ARS, and exact-splitting global-order summaries.

The batch 98 proof contract was synchronized with the changed statements, current proof steps, citations, and the added real-power and pathwise FTC sources. None of the edited items had a verification.judge record to remove.

## Page verdicts

- imex-and-operator-splitting-methods: Pass after the repairs. Its summary matches the finite-dimensional results and now records the small-step and branch qualifications.
- imex-and-operator-splitting-methods-examples: Pass. The five examples’ calculations and scope limits agree with their statements and proofs; no general nonnormal-matrix or unbounded-PDE conclusion is made.

No defect remained in an uneditable published or in-run dependency.

## Validation and blocker

All 14 changed items completed reflow and precheck with zero failures. The single batched proof-layout command reported 14 items, 52 proof steps, and 0 defects.

There was no blocker to the batch 98 review. The autopilot status observed during review still listed the unrelated 3a-split blocker for split-70 (batch 70).

