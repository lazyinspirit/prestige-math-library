# Step 3a reader report — batch 12

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `12`  
Role: `reader-12`

## Scope and opened inventory

The recomputed autopilot status was `running` at `3a-read`, with no dispatch in flight. I read the batch-12 page manifest, `briefs/reader.md`, the batch coverage and notes, the batch proof contracts, and the run status. Those materials were treated as review context rather than mathematical verdicts.

Assigned pages opened:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-differentiation-and-derivative-error-control.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-differentiation-and-derivative-error-control-examples.md`

Assigned items opened in supplier-first order within the batch:

- Level 0: `def-complex-step-derivative-estimator`, `def-finite-difference-stencils-and-evaluation-error-model`, `def-jacobian-and-hessian-vector-difference-products`, `def-structural-column-coloring-for-sparse-jacobian-recovery`.
- Level 1: `lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative`, `thm-complex-step-derivative-has-second-order-error-under-holomorphy`, `thm-forward-and-central-difference-truncation-and-evaluation-error-bounds`, `thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds`, `thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring`.
- Level 2: `def-richardson-extrapolation-under-a-fourth-order-remainder`, `thm-optimal-step-for-forward-and-central-difference-error-bounds`, `cex-colliding-column-colors-do-not-identify-a-jacobian`, `cex-complex-step-absolute-value-returns-the-wrong-derivative`, `ex-colored-jacobian-of-two-independent-reactions`.
- Level 3: `thm-richardson-extrapolation-has-fourth-order-error-bound`, `ex-forward-difference-noise-bound-has-a-balanced-step`.

The four page prerequisites named by the manifest were opened: `matrix-norms-condition-numbers-and-numerical-stability`, `nonlinear-equations-and-newton-methods`, `polynomial-interpolation-and-remainder`, and `analyticity-liouville-and-morera`. For the Newton caveat, I also opened `alg-finite-difference-newton-for-vector-residuals`, `thm-updated-jacobian-newton-local-quadratic-convergence`, and `lem-vector-newton-correction-error-under-lipschitz-jacobian`.

The direct item suppliers opened for the assigned proofs were `def-complex-differentiability-holomorphic-and-entire`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-abs-value`, `def-jacobian-matrix-and-gradient`, `def-hessian-and-euclidean-critical-point`, `def-ck-and-multi-index-notation-in-several-variables`, `def-p-norms-on-rn`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `def-matrix-product-and-identity-matrix`, `def-finite-sum-in-a-commutative-monoid`, `def-semigroup-and-monoid`, `cor-taylor-lagrange-and-cauchy-remainders`, `def-taylor-polynomial-and-remainder`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`, `cor-holomorphic-functions-are-real-analytic-and-smooth`, `thm-cauchy-integral-formula-higher-derivatives`, `thm-c2-holomorphic-function-has-holomorphic-derivative`, `lem-derivatives-along-a-line-have-the-multinomial-expansion`, `thm-symmetry-of-higher-mixed-partials`, `def-moments-variance-and-covariance`, `lem-variance-and-covariance-identities-for-random-variables`, `thm-factorization-of-expectations-for-independent-variables`, `thm-of-square-roots`, and `thm-nth-roots-exist`. I also opened the transitive Taylor supplier `thm-taylor-schlomilch-roche-remainder` and the finite-product suppliers `thm-generalised-associativity` and `def-monoid-finite-product` needed to check the cited remainder and order-independent finite-sum claims.

## Review and edits

The authored finite-difference, complex-step, Richardson, vector-product, coloring, and example arguments were checked against their stated domains, smoothness, derivative bounds, error models, support patterns, and exact citations. The Taylor remainder constants, Richardson cancellation and evaluation-noise coefficient, balancing steps and boundary cases, vector norm aggregation, covariance formulas, and coloring recovery/collision calculations are consistent. The Newton page states the exact-Jacobian hypotheses and the finite-difference Newton procedure expressly has no quadratic-rate claim; the assigned page does not import a Newton convergence claim.

Three assigned items were repaired:

1. In `thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds`, Facts & Assumptions now states that square-integrable real noises on a probability space are integrable, citing `lem-variance-and-covariance-identities-for-random-variables`, Proof step 1.1. Proof step 1.3 uses that fact before applying the independence factorization theorem. The dependency proves the implication from total mass one and $2|X|\le1+X^2$.

2. In `thm-richardson-extrapolation-has-fourth-order-error-bound`, the evaluation-error clause now defines $\widehat R_h f(x)$ by replacing the four exact function values at $x\pm h/2$ and $x\pm h$ with their inexact evaluations. Proof step 4.1 now points to this definition before calculating the perturbation. This removes the undefined hatted quantity while retaining the bound $3\delta/h$.

3. In `cex-complex-step-absolute-value-returns-the-wrong-derivative`, the title and false statement now concern the unqualified quotient $\operatorname{Im}f(x+ih)/h$. Facts & Assumptions distinguish that quotient from the formally defined $C_hf(x)$, which `def-complex-step-derivative-estimator` defines only for holomorphic $f$. The proof computes the quotient for $f(z)=|z|$ and shows that this extension is not complex differentiable at $1$, so neither the formal estimator definition nor the holomorphic error theorem applies. This is supported by the local definition and theorem, and by Higham's author post, which derives the approximation from a holomorphic Taylor expansion and the real-axis-valued condition (paragraphs containing formula (*) and the real/imaginary-part deduction, [Higham](https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/)).

The corresponding entries for all three items were updated in `research/numerical-optimization-dynamics-2026-10-16-batch-12.proof-contracts.json`. None of the three items had a `verification.judge` record to remove. No page prose was edited.

Additional source checks: the FNC finite-difference section gives the forward and centered formulas at equations (132) and (135) ([FNC](https://fncbook.github.io/v1.0/localapprox/finitediffs.html)); Bell and Kristensen §2.5, PDF p. 8, describes graph-coloring compression for sparse Jacobians ([paper](https://arxiv.org/pdf/2111.05207)). The assigned recovery proof supplies the exact collision-free entry argument locally. Direct retrieval of the cited Coleman–Moré report through the UNT archive timed out; I did not use it to fill a proof gap.

## Page verdicts

- `numerical-differentiation-and-derivative-error-control` (A page): **pass after the item repairs**. Its summary matches the current bounds and hypotheses, explicitly limits complex-step to holomorphic extensions real on the real axis, states the safe-pattern and no-collision conditions for recovery, and does not claim Newton convergence. No A-page prose repair was needed.
- `numerical-differentiation-and-derivative-error-control-examples` (B page): **pass**. Its summary accurately describes the noisy forward example, the modulus quotient counterexample, the collision witness, and the one-color reaction example. No B-page prose was edited.

## Checks, remaining defects, and blockers

- `reflow.mts` reported `unchanged` for each of the three changed items.
- `precheck.mts` passed for each changed item: one checked, zero failing.
- Final `proof-layout` run: three changed items, 14 numbered steps, zero defects.
- Defects left unedited: none found.
- Blocker: none.

Coverage limitation: this review checked all assigned carriers, their directly used suppliers, and the specific transitive Taylor, finite-product, and Newton context listed above; it did not re-audit every transitive dependency of each supplier. The direct Coleman–Moré archive fetch also failed as recorded above. Neither limitation leaves an unresolved issue in the assigned proofs.
