# Step 3a reader report — batch 59

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Verdict: reviewed; no uneditable finding remains.

## Opened inventory

Assigned pages:

- `barrier-and-primal-dual-interior-point-methods` (A)
- `barrier-and-primal-dual-interior-point-methods-examples` (B)

Assigned items, in supplier-before-consumer order:

- `def-self-concordant-log-homogeneous-barrier`
- `def-conic-optimization-primal-dual-models`
- `lem-self-concordant-local-newton-calculus`
- `lem-nonnegative-orthant-log-barrier`
- `lem-lorentz-cone-log-barrier`
- `lem-psd-cone-self-dual-logdet-barrier`
- `lem-loghom-barrier-gradient-is-dual`
- `def-barrier-central-path-and-newton-residuals`
- `thm-phase-i-margin-status-and-weak-infeasibility`
- `thm-central-path-barrier-gap-and-dual-certificate`
- `alg-short-step-self-concordant-path-following`
- `thm-inexact-central-path-distance-and-gap-certificate`
- `thm-short-step-complexity-and-primal-gap-bound`
- `lem-primal-dual-lp-qp-newton-matrix-nonsingular`
- `alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones`
- `thm-fraction-to-boundary-and-primal-dual-gap-certificates`
- `ex-robust-least-squares-as-a-second-order-cone-program`
- `ex-boundary-barrier-conditioning`
- `ex-strict-versus-weak-semidefinite-feasibility`
- `ex-resource-allocation-barrier-central-path`
- `ex-lp-primal-dual-residual-and-gap`
- `ex-small-semidefinite-relaxation-primal-dual-certificate`

Direct external item dependencies opened:

- `def-convex-program-duality-and-slater-condition`
- `def-inequality-constrained-program-and-kkt-geometry`
- `thm-cauchy-schwarz-and-the-euclidean-norm`
- `lem-log-determinant-concavity-on-positive-definite-matrices`
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
- `thm-determinant-differential-and-jacobis-formula`
- `thm-derivative-of-matrix-inversion`
- `prop-differentials-of-trace-and-frobenius-linear-functionals`
- `def-trace-of-a-square-matrix`
- `thm-differentiable-convex-functions-and-gradient-inequality`
- `thm-inexact-gradient-residual-distance-certificate`
- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations`
- `alg-scaled-householder-reflector-formation-and-application`
- `lem-rounded-triangular-substitution-componentwise-backward-error`
- `thm-computed-full-rank-least-squares-backward-stability`
- `thm-lagrangian-weak-duality`

Additional supporting items opened for the cited finite-precision and calculus arguments:
`def-standard-relative-floating-point-model-and-unit-roundoff`, `def-householder-reflector`, `def-forward-and-back-substitution-for-triangular-systems`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `lem-product-of-one-plus-deltas-gives-theta-n`, `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`, `thm-scaled-householder-qr-backward-stability`, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, `thm-cauchy-schwarz-in-an-inner-product-space`, `lem-hessian-lower-bound-strong-convexity-gradient-gap`, `lem-scaled-householder-step-meets-local-backward-error-premise`, and `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`.

The four A-page prerequisite pages were opened: `finite-precision-direct-factorizations`, `inequality-kkt-duality-and-optimality-certificates`, `numerical-optimization-globalization-and-inexact-certificates`, and `response-surfaces-and-optimal-design`. All 17 proof-contract entries were checked against their assigned proof steps; every contracted step existed and its claim matched the authored step text. The fraction-to-boundary contract was updated with the proof repair below.

## Repairs and evidence

- In `items/def-barrier-central-path-and-newton-residuals.md`, the standard LP/QP residual clause now states `n≥1`. Its definition sets `μ=xᵀs/n`, so dimension zero would leave the residual undefined. The associated primal-dual algorithm already requires `n≥1`.
- In `items/thm-short-step-complexity-and-primal-gap-bound.md`, the title now includes `t₀`. The theorem’s bound uses `R=3ν/(2εt₀)` and gives complexity in terms of that quantity, so the previous title omitted an input that affects the number of steps.
- In `items/thm-fraction-to-boundary-and-primal-dual-gap-certificates.md`, proof step 2.1 now distinguishes dimension-bounded loops from the outer loop, which terminates at the user-supplied finite cap `N`. The former phrase incorrectly said every loop is bounded by input dimension. Its proof-contract derivation was updated to match.
- In the assigned A page’s Objective, the central-point `m/t` and `ν/t` values are identified as primal-dual barrier gaps, with objective-error bounds stated separately. The Phase-I summary now says a zero value without an attainment check is inconclusive, matching `thm-phase-i-margin-status-and-weak-infeasibility`.

No other confirmed defect required an uneditable finding. The reviewed draft suppliers from other batches and published dependencies supported the claims for which they were cited; I found no defect to route.

## Page verdicts

- `barrier-and-primal-dual-interior-point-methods` (A): pass after the summary clarification. Its item list, dependency requirements, and summary agree with the reviewed definitions, barrier results, central-path bounds, algorithms, and phase-I qualifications.
- `barrier-and-primal-dual-interior-point-methods-examples` (B): pass. Its listed examples support the summary’s SOCP/SDP formulations, central-path computations, conditioning example, feasibility distinction, and exact LP/SDP certificates.

The four prerequisite-page summaries are consistent with the opened item claims and do not introduce a conflicting hypothesis or conclusion.

## Validation and blocker

- Reflow: unchanged for all three changed items.
- Precheck: pass for both changed proof-bearing items; the changed definition has no proof sections.
- Batched proof layout: 3 items, 11 steps, 0 defects.
- Blocker: none.

## Coverage note

The assigned 22 item bodies, both assigned pages, all 17 direct external item dependencies, the four declared prerequisite pages, selected supporting items, and all 17 proof-contract entries were reviewed. I did not re-audit every transitive dependency of those external items; the additional support items listed above were opened where needed for the reviewed calculations and inferences.
