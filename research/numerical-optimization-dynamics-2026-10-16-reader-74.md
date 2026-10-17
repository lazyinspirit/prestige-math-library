# Step 3a reader report — batch 74

Run: `numerical-optimization-dynamics-2026-10-16`  
Scope: Rosenbrock and linearly implicit methods, plus its examples page.

## Inventory and review order

Opened both assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/rosenbrock-and-linearly-implicit-methods.md` (A page)
- `library/numerical-differential-equations-and-stochastic-dynamics/rosenbrock-and-linearly-implicit-methods-examples.md` (B page)

Opened all 21 assigned items in supplier-before-consumer order:

- Dependency level 0: `def-rosenbrock-euler-step-map`, `lem-rosenbrock-shifted-matrix-invertibility-bound`.
- Dependency level 1: `lem-rosenbrock-stage-residual-certificate`, `lem-rosenbrock-shifted-inverse-perturbation`.
- Dependency level 2: `alg-rosenbrock-shifted-qr-solver-with-residual-certificate`, `lem-rosenbrock-euler-jacobian-approximation-defect`, `prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler`.
- Dependency level 3: `alg-rosenbrock-euler-step`, `alg-two-stage-rosenbrock-w-method`.
- Dependency level 4: `lem-rosenbrock-euler-local-defect-and-residual-error`, `lem-two-stage-rosenbrock-local-defect-and-residual-error`, `prop-two-stage-rosenbrock-reuses-one-factorization-and-two-solves`, `thm-rosenbrock-computational-steps-terminate-with-finite-work`, `thm-rosenbrock-euler-scalar-a-and-l-stability`, `thm-two-stage-rosenbrock-scalar-l-stability`, `cex-omitting-rosenbrock-stage-correction-loses-order-two`, `ex-two-stage-rosenbrock-factorization-reuse`.
- Dependency level 5: `thm-rosenbrock-euler-global-first-order-error`, `thm-two-stage-rosenbrock-global-order-two`, `ex-rosenbrock-euler-stiff-decay-and-backward-euler`, `cex-approximate-jacobian-breaks-stiff-damping`.

Also opened the batch proof contracts and cross-batch dependency evidence as context, not as verdicts. Opened the 38 distinct direct item dependencies named by the assigned manifest: `def-first-order-ode-initial-value-problem-and-solution`, `def-jacobian-matrix-and-gradient`, `def-invertible-euclidean-linear-map`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-rank-nullity`, `def-induced-matrix-p-norm`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, `thm-cauchy-schwarz-finite`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `alg-scaled-householder-reflector-formation-and-application`, `def-forward-and-back-substitution-for-triangular-systems`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `def-householder-reflector`, `def-backward-euler-step-equation`, `alg-newton-correction-for-vector-residuals`, `def-c-one-map-and-local-inverse`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-implicit-residual-and-algebraic-error-units`, `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `cor-vector-valued-ftc-and-lipschitz-bound`, `def-vector-valued-derivative-and-integral`, `thm-continuous-implies-integrable`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-algebra-of-derivatives`, `def-scalar-rk-a-and-l-stability`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `lem-complex-conjugation-and-modulus-laws`, `lem-exponential-dominates-one-plus-x`, `thm-exponential-ivp-uniqueness`, `thm-derivative-of-exponential`, and `thm-exponential-is-strictly-increasing`.

To interpret draft supplier interfaces, additionally opened `def-standard-relative-floating-point-model-and-unit-roundoff`, `def-complex-numbers-and-arithmetic`, and `def-implicit-runge-kutta-stage-equations`. The assigned item hashes matched the reviewed bytes at the final split check.

## Mathematical review and evidence

I independently checked the shifted-matrix lower bound and inverse estimate, the resolvent identity, the dot-product and subtraction residual allowance, the QR solve/status branches, the one-stage Newton correction, the two-stage Taylor expansion and stage-residual propagation, both global error recurrences, scalar stability functions, termination argument, examples, and the page summaries. The listed hypotheses supply the needed invertibility, derivative regularity, tube containment, stage-residual, arithmetic-range, and exact-storage conditions. The claims keep equation-residual certification separate from forward-error bounds and keep exact-J scalar stability separate from approximate-J behavior.

For the method coefficients and independent order/stability check, I consulted the WIAS Berlin *Numerical Methods for Stiff Ordinary Differential Equations*: Example 2.37, printed p. 45 (PDF pp. 45–46), gives the two-stage `ode23s` equations and shared coefficient; Theorem 2.38, printed pp. 46–47, gives the second-order consistency expansion; Remark 2.39 distinguishes order from exact-J stability transfer; and Theorem 2.40 with Corollary 2.41, printed p. 48, gives the scalar stability function and L-stability. URL: <https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf>. Kressner, *Advanced Numerical Analysis*, §3.5, printed pp. 42–44, independently records the common shifted matrix, factorization reuse, and two-stage Rosenbrock formula: <https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf>.

## Edits and defects

No confirmed defect was found in an assigned item or assigned page prose, so no carrier was edited. No defect requiring an out-of-scope repair was confirmed. The authored items’ existing caveats about approximate Jacobians, scalar-only stability, exact outer operations, representation failures, and residual-versus-forward-error limits are supported by the reviewed statements and proofs.

No material item edit was made; therefore no proof-contract update, stale-judge removal, reflow, precheck, or changed-item proof-layout run was required.

## Page verdicts

- `rosenbrock-and-linearly-implicit-methods` (A): **pass**. Its summary matches the one-stage and two-stage definitions and the qualified local/global, stability, residual, and arithmetic claims.
- `rosenbrock-and-linearly-implicit-methods-examples` (B): **pass**. Its summary accurately describes the examples, including the fixed stiff product and the absence of an order or uniform-convergence claim for the approximate-J damping example.

## Blocker and coverage limit

No blocker. Published supplier statements were used as established after opening the direct supplier items; this review did not re-audit every transitive proof dependency of the published library. The assigned items and pages, all direct dependencies, and the additional immediate interfaces of draft suppliers were read for this pass.
