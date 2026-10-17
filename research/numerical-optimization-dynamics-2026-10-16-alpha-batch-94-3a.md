# Batch 94 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-94`.

Scope, reader report/findings, refuter JSON, and dependency-order task read. No touched/page/reader/refuter obligations are routed, so the decisions array is empty. Risk reviews remain required for 13 items. No repair has been made.

## `lem-finite-matrix-semilinear-variation-of-constants`

Realification is isometric into R^(2d), d>=1. The bounded-operator exponential supplier gives commutation, derivative and inverse for real times. Product differentiation cancels A, continuous forcing permits componentwise FTC, and fixed multiplication commutes with integration. The s=t case is the identity with zero oriented integral. No existence or uniqueness is inferred from this conditional solution statement; no AC is used.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-skew-hermitian-matrix-exponential-is-unitary`

For every real time, entrywise conjugation commutes with differentiation. The adjoint supplier and product rule give (U*U)'=U*(A*+A)U=0; real/imaginary coordinate MVT and U(0)=I identify the constant. v*U*Uv gives the Euclidean norm identity, including v=0 and t=0. Finite d>=1, no spectral or choice assumption is needed.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-exponential-phi-integral-representations`

The operator exponential tail is bounded uniformly in theta in [0,1] and in unit vectors by sum_{j>J}||X||^j/j!. Integral norm bounds allow passage from finite sums to the matrix integral in operator norm. Coefficients integrate to 1/(j+1)! and 1/(j+2)!. Zero and singular X require no inverse: values I and I/2 follow directly. Absolute convergence supplier applies to all finite complex matrices.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-exponential-euler-local-defect`

The forcing q is C1 with derivative bounded Q1, so realified FTC gives ||q(t+s)-q(t)||<=Q1*s. Variation of constants and the phi1 integral leave exactly the forcing-increment integral. Kernel norm <=K+ gives K+Q1*h^2/2. The supremum is nonempty and bounded by exp(T||A||); h>0, zero A and constant forcing cause no singularity. This is an exact-start, fixed-matrix bound.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-exponential-integrator-interaction-picture-stability`

Admissible time means 0<=t<t+h<=T as in the defining maps. Removing the flow yields kernels exp(-(t+s)A), bounded by K-. Initial state differences cost K+; the predictor costs K+(1+kappa*h). ETD2 nonnegative weights integrate to h/2, giving 1+kappa*h+kappa^2*h^2/2 and the claimed h<=T bound. The common tube includes both inputs and predictors. K+/- are finite; L=0 gives identity Lipschitz constant. No uniform-in-stiffness claim or AC.

Disposition: no defect found; risk review complete. No routed decision.

## `ex-nonnormal-transient-growth-exponential-step`

N^2=0 proves the displayed power formula by induction and hence exp(tA)=exp(-t)(I+tN). Direct AA* and A*A differ by the stated diagonal entries. The exact solution has norm sqrt(4+exp(-2))>2 at t=1, starts at 1 and tends to zero by exp(t)>=t^2/2 for t>0. With g=0 both maps are the exponential and the semigroup identity proves all grid values. The example is a finite witness, not a uniform stability claim.

Disposition: no defect found; risk review complete. No routed decision.

## `ex-phi-functions-at-zero-no-division`

For the scalar IVP y'=t with y(0)=0, FTC gives t^2/2. At A=0 the convergent series give phi1=1, phi2=1/2. The Euler predictor is zero, endpoint forcing h, and ETD2 returns h^2/2. No state dependence or matrix inverse is invoked; h>0 is the stated domain.

Disposition: no defect found; risk review complete. No routed decision.

## `alg-certified-exponential-euler-etd2-step`

Reviewed the complete Definition and actual Arnoldi/Taylor interfaces. k=0 uses (A,h,v); k=1,2 uses the positive-size full augmented matrix (B_k(hA,v),1,w_k) with index zero. Zero input returns before augmentation or division. The required relation, initial mismatch, basis norm, reduced-success and projection certificates justify the displayed residual-integral upper bound; a small subdiagonal alone supplies no exact-invariance claim. Both delta formulas include field and arithmetic errors; the ETD2 endpoint forcing includes L*eta_a. Exact and computed predictor membership are explicit input/service requirements. Finite service budgets, pre-call upper counts and returned actual counts bound calls; missing certificates return inconclusive. Properties are proved by the separate justified_by lemma, so no reverse dependency cycle is created.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-etd2-local-defect`

C2 forcing allows twice-integrated remainders ||r_s||<=Q2*s^2/2 and ||r_h||<=Q2*h^2/2. Their interpolation difference is bounded by Q2*h^2; this deliberately nonoptimal constant is sound. Euler local defect bounds the exact-start predictor by C_E*h^2, and tube Lipschitz continuity bounds its forcing error by L*C_E*h^2. The two kernel integrals cost K+*h and K+*h/2 respectively, giving precisely the displayed third-order bound. h>0 protects interpolation division; Q2=0 or L=0 causes no exception.

Disposition: no defect found; risk review complete. No routed decision.

## `lem-certified-exponential-step-action-error`

The Arnoldi theorem residual integral uses c(s)=exp(sH)*beta*e1. Its norm is <=beta*exp(s*rho_H), and (tau-s)*rho_B+s*rho_H<=tau*max(rho_B,rho_H) for positive tau. Together with initial mismatch, basis norm, successful reduced Taylor certificate and projection error this proves epsilon_act. Applying phi integrals to unit vectors gives B_h and B_h/2 for either sign of omega. Triangle inequalities reproduce Euler delta, predictor eta_a, ETD2 endpoint forcing L*eta_a+eta_a^g and the two phi2 errors. Zero actions are exact. The finite branch list and terminating nested services prove termination; induction using 0<=c<=b<=Cmax-C gives the counter bound and componentwise sums. No wall-clock or unconditional certification claim is made.

Disposition: no defect found; risk review complete. No routed decision.

## `ex-diagonal-stiff-diffusion-with-reaction-etd`

Each coordinate solves y_i'=-(lambda_i+1)y_i+1. The integrating factor, derivative suppliers and FTC give (1-exp(-(lambda_i+1)h))/(lambda_i+1). Positive denominator and exponential justify division. Diagonal series give Euler h*phi1 and predictor equal to it; substituting reaction 1-a gives ETD2 h*(phi1-h*phi1*phi2). For lambda2=1000 and h=.001, lambda2*h=1 while (lambda2+1)h=1.001. All three stated stiff-coordinate expressions follow. Implementation certification is explicitly separate from these exact actions.

Disposition: no defect found; risk review complete. No routed decision.

## `thm-exponential-euler-etd2-global-error-and-action`

Realification preserves the error norm. The time-dependent linear coordinate change is a homeomorphism with explicit inverse; its transformed domain is open and its tube compact with positive margin (empty complement handled separately). The elementary continuous-image compactness argument is sufficient here. Exact-start local constants acquire K- and transformed stability is 1+L_p*h. The supplied real one-step theorem then gives K+*K-*C_p*Gamma(L_p,T)*h^p, including L_p=0. Certified perturbations add K-*delta_n to the recurrence, whose finite induction and 1+x<=exp(x) give the second bound after multiplication by K+. Exact initial data, admitted compared predictors, C2 forcing and fixed finite A are retained. Constants are conditional on a common tube/bounds across a family when an order claim is used; no matrix-uniform or PDE result follows. No countable-choice converse from the metric-continuity supplier is used.

Disposition: no defect found; risk review complete. No routed decision.

## `ex-skew-hermitian-imaginary-time-unitary-step`

Diagonal series give imaginary-time exp(-tau),exp(-2tau), strictly reducing the initial squared norm 2 for tau>0 and agreeing at tau=0. Real-time A=-iH is skew Hermitian; its propagator is unitary for every real t and gives the stated exact state. With g=0 both grid methods reproduce the semigroup exactly. A finite run has a finite maximum of its state/stage coordinates, so an enclosing closed box in R^5 exists without AC. Its margin in the whole domain is positive. K+=K-=1, L_g=Q1=Q2=0 make the global bound exactly sum(delta_j). The negative-time explicit formula is also verified directly from the bounded-operator exponential series; the cited nonnegative-time variation formula is only needed on the grid.

Disposition: no defect found; risk review complete. No routed decision.

## Evidence and prerequisite review

Current carriers are `items/<id>.md` for the IDs above. The ordinary-risk `def-exponential-euler-and-etd2-step-maps` was read as a supplier: it defines the predictor and both exact maps on admitted stages. Both assigned page summaries were also read as context; neither owes a page decision.

Read the current Statement/Definition sections of the following direct citation suppliers (and the complete bounded-operator exponential proof and Arnoldi action Definition). This review checks the interfaces actually used here; it does not recursively audit all published supplier proofs:

`alg-arnoldi-exponential-and-phi-actions`, `cor-exponential-reciprocal-and-positivity`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-mean-value-theorem`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `cor-vector-valued-ftc-and-lipschitz-bound`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-bounded-linear-operator`, `def-complete-ordered-field`, `def-complex-exponential`, `def-euclidean-inner-product`, `def-first-order-ode-initial-value-problem-and-solution`, `def-inner-product-norm`, `def-logarithmic-norm-for-complex-matrices`, `def-matrix-product-and-identity-matrix`, `def-operator-norm`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-phi-functions-by-everywhere-convergent-series`, `def-real-exponential-function-and-e`, `def-vector-valued-derivative-and-integral`, `lem-exponential-dominates-one-plus-x`, `lem-exponential-series-has-infinite-radius`, `lem-exponential-series-of-a-bounded-operator`, `lem-phi-series-converges-absolutely`, `lem-relative-compact-closed-sets-have-a-positive-distance-gap`, `prop-standard-coordinate-inner-products`, `thm-algebra-of-derivatives`, `thm-arnoldi-exponential-action-error-bound`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-chain-rule`, `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `thm-global-error-from-one-step-defect-and-stability`, `thm-heine-borel-rn`, `thm-linearity-of-the-integral`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `thm-metric-continuity-characterisations`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-phi-recurrence-and-augmented-matrix-actions`, `thm-scaled-taylor-exponential-action-error-and-work`. Also read `def-certified-matvec-and-vector-arithmetic`, `lem-logarithmic-norm-is-real-and-variational`, and `lem-logarithmic-norm-bounds-the-matrix-exponential`.

Primary sources consulted directly:

- [Hochbruck–Ostermann, Exponential Integrators](https://na.math.kit.edu/download/papers/acta-final.pdf), §1 equations (1.5)–(1.6), §2.2 error recursion (2.34), and §2.3 Example 2.18 equations (2.38)–(2.39), PDF pp. 2–3 and 15–18. The source uses the opposite sign convention for A; choosing c2=1 gives this batch's ETD2 coefficients. Its stronger analytic-semigroup convergence hypotheses are not imported into the fixed-matrix result.
- [Niesen–Wright, arXiv:0907.4631v2](https://arxiv.org/html/0907.4631v2), §2 equation (1), Lemma 2.1 and proof, and §3.1 equation (5) and augmentation (6). These support the phi integral/projection identities. The authored certified implementation instead uses its local proved residual bound and successful reduced Taylor certificates; the paper's estimator is not accepted as a certificate.

The batch-local frontier dependency ledger remains valid at `research/numerical-optimization-dynamics-2026-10-16-batch-94.cross-batch-dependencies.json`: its item/page interfaces and positive-size action-domain restrictions match the current consumer uses. No dependency, claim, status or required consumer repair changed, so no ledger refresh or shared-ledger edit was needed. No defective published item was found in the inspected interfaces. No defect-ledger row is owed because no confirmed defect was found.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-94.proof-contracts.json`: exit 0, 14 items routed; 12 CRITICAL and one HIGH require review, while the exact-map definition is ORDINARY.
- Final same command with `--require-reviewed`: exit 0, zero errors; all 13 required reviews complete with item-specific evidence. Only the `risk_review` audit metadata was authored in the owning proof contracts.
- Pre/post snapshots have identical item/contract/manifest hash records. All 14 current raw item SHA-256 values equal the frozen post-reader values. Thus no reader repair requires acceptance, amendment or reversion. Contract changes in this dispatch are the required risk-review enrichment.
- Scope contains no touched carriers, page changes, reader findings or refuter findings. `research/numerical-optimization-dynamics-2026-10-16-alpha-batch-94-3a-decisions.json` has version 1, run/group identity, and an empty decisions array.
- No item or page was edited. Precheck, reflow and proof-layout are therefore not applicable to changed items; no empty item-selection check was substituted. No judge, stamp or gate battery was run.

Blockers, escalations and proposed withdrawals: none for batch 94. The engine retains decision hashing and gate ownership.
