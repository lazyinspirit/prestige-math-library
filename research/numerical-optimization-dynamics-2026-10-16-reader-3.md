# Step 3a reader report — batch 3

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `3`  
Date: 2026-10-17

## Verdict

- **A page — pass:** `nonlinear-equations-and-newton-methods` accurately summarizes the assigned procedures and results. Its distinctions between residual tolerance and an exact root, updated and fixed-inverse Newton maps, local and global claims, and objective and arbitrary-residual Newton are supported by the opened items.
- **B page — pass:** `nonlinear-equations-and-newton-methods-examples` summarizes the computations in its example. The fixed-point, simple-root, double-root, frozen-inverse, and singular-start calculations check out.
- **Uneditable mathematical defects:** none found in assigned pages or published dependencies.
- **Reader blocker:** none for batch 3. Current run status separately reports that `3a-split` failed three times for batch 6; that blocker is outside this assignment.

## Opened inventory

Instructions and run evidence opened: `CLAUDE.md`, `README.md`, the relevant sections of `SCHEMA.md` and `WORKFLOW.md`, `briefs/reader.md`, the batch-3 page manifest, batch-3 proof contracts, batch-3 author notes, the empty batch-3 cross-batch dependency file, and current autopilot status.

Assigned pages opened:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-equations-and-newton-methods.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-equations-and-newton-methods-examples.md`

The five page-level prerequisites listed for the A page were also opened: `library/topology/completeness-and-uniform-continuity.md`, `library/real-analysis/inverse-and-implicit-function-theorems.md`, `library/real-analysis/mixed-partials-taylor-and-extrema.md`, `library/real-analysis/picard-lindelof-and-first-order-odes.md`, and `library/bayesian-computational-statistics/numerical-optimization-for-statistical-computation.md`. The Picard–Lindelöf page supplies no claim used by this batch; the assigned notes likewise identify no shooting residual.

All 13 assigned items in `items/<id>.md` were opened in dependency order: `alg-fixed-point-iteration`, `lem-finite-budget-fixed-point-iteration-work`, `alg-newton-correction-for-vector-residuals`, `alg-forward-difference-jacobian`, `lem-vector-newton-correction-error-under-lipschitz-jacobian`, `lem-forward-difference-jacobian-error-bound`, `alg-finite-budget-newton-for-vector-residuals`, `lem-finite-budget-newton-work-and-status`, `alg-damped-newton-for-vector-residuals`, `alg-finite-difference-newton-for-vector-residuals`, `thm-updated-jacobian-newton-local-quadratic-convergence`, `thm-damped-newton-vector-residual-accepted-merit-decrease`, and `ex-nonlinear-equations-and-newton-methods-boundary-cases`.

Item suppliers opened to check the exact statements and conventions used: `def-metric-space`, `thm-euclidean-space-complete`, `thm-banach-fixed-point`, `cor-banach-error-estimates`, `lem-geometric-sequence-null`, `def-invertible-euclidean-linear-map`, `def-c-one-map-and-local-inverse`, `def-jacobian-matrix-and-gradient`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-vector-valued-derivative-and-integral`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-norm-inequality-for-the-vector-valued-integral`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-continuous-implies-integrable`, `thm-newton-leibniz-with-interior-derivative`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-newton-contraction-near-an-invertible-derivative`, `thm-of-square-roots`, and `lem-of-square-monotone`. The A-page’s published objective-method references were checked at the item level: `alg-damped-newton`, `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`, and `lem-armijo-backtracking-terminates-for-strict-descent-directions`.

Notation and hypothesis definitions opened where needed: `def-euclidean-inner-product`, `def-total-derivative-in-euclidean-space`, `def-p-norms-on-rn`, `lem-metrics-on-rn`, `def-euclidean-linear-map`, `def-complete-metric-space`, `def-real-numbers`, `def-ordered-field`, `def-complete-ordered-field`, and `def-field`. The non-assigned item suppliers outside batch 3 are published in their current carriers; the batch-3 cross-batch dependency file is empty.

## Mathematical review

The fixed-point procedure is a finite loop over indices `k = 0, ..., N`; its residual test precedes the budget test. The work lemma correctly bounds updates by `N` and residual evaluations by `N+1`, conditional on the supplied evaluations returning. The example’s affine recurrence, residual, zero-tolerance boundary, and Banach error estimate are correct.

The vector Newton correction solves `J s = -F(x)` when the square linear map is invertible and reports singularity otherwise. The exact and damped finite-budget procedures check residual and update budget before solving, and they check trial-domain membership before updating. The damped method’s strict merit decrease follows from its acceptance test for a nonzero residual; the item makes no claim that finite backtracking must accept.

The forward-difference estimate uses scalar Taylor expansions along each coordinate segment, allowing distinct remainder points for distinct entries. Its column bounds and Cauchy–Schwarz operator-norm estimate give the stated M-times-step-size-over-two bound. The vector remainder lemma’s segment, componentwise FTC, integral norm estimate, and monotonicity argument yield the L-times-distance-squared-over-two remainder bound.

The updated-Jacobian theorem applies the local inverse bound from `lem-newton-contraction-near-an-invertible-derivative` only to obtain uniform inverses; its quadratic recurrence comes from the updated-Jacobian remainder lemma. The stated invariant ball and convergence of an indefinitely continued exact recurrence follow. The finite-budget caveat correctly prevents treating the tolerance status as an exact-root certificate.

The example’s scalar Newton recurrence, invariant radius, double-root linear error recurrence, frozen-inverse arithmetic, and singular start all check out. The fixed-point application of Banach now explicitly establishes that ℝ is nonempty.

The primary-source locations were opened: [Hairer–Wanner, *Solving Ordinary Differential Equations II*](https://www.unige.ch/~hairer/poly/chap6.pdf), Chapter VI §VI.1 (fixed-point iteration and stopping discussion, printed pp. 134–136 / PDF pp. 1–2) and §VI.3 (Newton correction, Theorem 3.2, numerical Jacobian formula (3.8), and damping modification (3.13), printed pp. 138–141 / PDF pp. 5–7); [Driscoll–Braun, *Fundamentals of Numerical Computation*, version 1.0](https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html), Chapter 4.5.2, equations (90)–(93) and the system-Newton implementation; and the [official FNC fixed-point page](https://fncbook.com/fixed-point/), §4.2, definitions 4.2.1–4.2.2 and Theorem 4.2.1. The local error estimates and finite-budget work claims were checked from the assigned proofs rather than inferred from these source summaries.

## Repairs and evidence

1. **`alg-finite-difference-newton-for-vector-residuals`, Definition:** the original procedure listed statuses but did not state its output tuple or which iterate accompanied a return. I added an explicit last-valid-iterate/status output and paired every return branch with `x_k`. This meets the algorithm requirement to specify outputs and branches; the listed statuses and existing dependency closure remain consistent.
2. **`ex-nonlinear-equations-and-newton-methods-boundary-cases`, Verification 1.1:** Banach’s theorem requires a nonempty complete metric space, while the original step established completeness but omitted nonemptiness. `def-complete-metric-space` does not impose nonemptiness; `thm-banach-fixed-point` does. I added the witness `0 ∈ ℝ`, using the field structure recorded through `def-metric-space`. I updated the `contractive-fixed-point-example` proof-contract derivation.
3. **`lem-vector-newton-correction-error-under-lipschitz-jacobian`, Proof 3.1:** monotonicity of the integral requires the scalar comparison function to be integrable. I stated that it is continuous and hence integrable by the existing `thm-continuous-implies-integrable` dependency. I updated the `lipschitz-remainder-bound` proof-contract derivation.
4. **`thm-damped-newton-vector-residual-accepted-merit-decrease`, Proof 1.1:** strictness requires `||F(x)||_2^2 > 0` when `F(x) != 0`. I stated the coordinate-square argument from the Euclidean norm definition. I updated the `positive-accepted-decrement` proof-contract derivation.

None of the four repaired carriers contained a stale `verification.judge` record; no judge stamp was added. The assigned pages were not edited.

## Validation

- `reflow` and `precheck` were run for each changed item. The finite-difference algorithm had 0 proof sections to check; the example, vector-remainder lemma, and damped-decrease theorem each passed with 1 checked proof and 0 failures.
- Final `node tools/proof-layout.mjs` on all four changed items reported: `4 items, 12 steps, 0 defects`.
- No gate, judgment, or self-certification was performed.

## Unedited defects and evidence limits

No confirmed mathematical defect remains in an assigned item or page, and no defective published or other-batch dependency was found. The batch-3 author notes are stale relative to current carriers: line 5 says there are 10 A-page items, while the current manifest lists 12; line 38 reports five proof-bearing items, while the current proof-contract scope lists seven. These notes were treated as evidence, not verdict, and were not edited because they are outside this reader’s carrier scope.

The web text extraction for the Hairer PDF garbles some displayed symbols. I used it to check the cited section and general method locations, not to establish the exact local estimates; those estimates were verified from the assigned proofs and the clearly rendered FNC statements. No mathematical uncertainty remains for this batch.
