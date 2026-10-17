# Step 3a reader report — batch 100

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-100`  
Review date: 2026-10-17

## Opened inventory

Assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/direct-transcription-and-numerical-ode-optimal-control.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/direct-transcription-and-numerical-ode-optimal-control-examples.md`

Assigned items, read in dependency order:

- `def-ctrl1-linear-lqr-control-problem`
- `def-ctrl1-smooth-transcription-data`
- `lem-ctrl1-measurable-linear-ode-state-map`
- `lem-ctrl1-control-box-is-weakly-closed`
- `def-ctrl1-control-mesh-and-piecewise-constant-parameterization`
- `lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence`
- `lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence`
- `def-ctrl1-runge-kutta-tableau-and-stage-collocation`
- `def-ctrl1-lqr-adjoint-equation`
- `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous`
- `lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice`
- `lem-ctrl1-lqr-adjoint-exists-uniquely`
- `thm-ctrl1-lqr-existence-and-unique-optimal-control`
- `alg-ctrl1-indirect-shooting-for-the-ode-optimality-system`
- `lem-ctrl1-lqr-adjoint-identity-and-gradient`
- `thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch`
- `cex-ctrl1-terminal-constraints-break-pointwise-control-vi`
- `alg-ctrl1-runge-kutta-shooting-and-collocation-transcription`
- `lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent`
- `lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program`
- `thm-ctrl1-mesh-consistent-lqr-minimizers-converge`
- `thm-ctrl1-objective-and-control-error-from-consistency-bounds`
- `alg-ctrl1-finite-budget-transcription-solver-dispatch`
- `thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription`
- `ex-ctrl1-bounded-actuator-lqr`
- `ex-ctrl1-chemical-dosing-linear-model`
- `ex-ctrl1-single-versus-multiple-shooting-two-intervals`

The 62 unique direct prerequisite IDs listed by the batch manifest were opened. They are:

```text
alg-bounded-adaptive-runge-kutta-controller
alg-finite-budget-newton-for-vector-residuals
alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones
alg-single-shooting-for-nonlinear-bvps
alg-sqp-exact-hessian-newton-step
alg-sqp-merit-globalization-with-finite-budgets
cor-boundedness-theorem-r
cor-cauchy-schwarz-inequality-for-l-two
cor-finite-dimensional-normed-spaces-are-banach
cor-hilbert-spaces-are-reflexive
cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
def-absolutely-continuous-function
def-certified-ivp-approximation-and-sensitivity-interface
def-ck-euclidean-maps-and-diffeomorphisms
def-conic-optimization-primal-dual-models
def-countable-choice
def-dependent-choice
def-derivative
def-euclidean-inner-product
def-explicit-runge-kutta-tableau-and-stage-map
def-gauge-and-fine-tagged-partition
def-hahn-banach-extension-principle-relative
def-inequality-constrained-program-and-kkt-geometry
def-l-p-space-as-a-quotient-by-null-functions
def-nonlinear-two-point-bvp-and-boundary-residual
def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
def-parameterized-finite-state-step-objective
def-ultrafilter-extension-principle
def-vector-valued-derivative-and-integral
def-weak-convergence-of-nets-and-sequences
lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence
lem-dependent-choice-implies-countable-choice
lem-geometric-sequence-null
lem-l-two-with-the-integral-pairing-is-a-hilbert-space
prop-order-and-scalar-rules-for-the-nonnegative-integral
prop-shooting-residual-derivative
thm-algebra-of-derivatives
thm-banach-fixed-point
thm-bounded-adaptive-runge-kutta-controller-terminates
thm-box-step-functions-are-dense-in-l-p-of-rn
thm-c-k-complete-in-the-sup-metric
thm-c1-lipschitz-ac-bv-hierarchy
thm-cauchy-schwarz-and-the-euclidean-norm
thm-cousins-lemma-for-gauges
thm-direct-method-in-a-reflexive-banach-space
thm-discrete-adjoint-gradient-recursion
thm-discrete-continuous-gradient-error-order-p
thm-extreme-value-metric
thm-first-fundamental-theorem-of-calculus-for-l-one
thm-fraction-to-boundary-and-primal-dual-gap-certificates
thm-gronwall-integral-inequality
thm-implicit-differentiation-forward-and-adjoint-formulas
thm-integral-triangle-inequality
thm-integration-by-parts-for-absolutely-continuous-functions
thm-lebesgue-measure-is-a-complete-measure
thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
thm-lebesgue-outer-regularity-for-arbitrary-subsets
thm-linearity-of-the-lebesgue-integral-on-l-one
thm-nonnegative-integral-zero-iff-zero-almost-everywhere
thm-second-order-sufficient-condition-on-the-critical-cone
thm-sqp-exact-hessian-local-quadratic-convergence
thm-well-ordering-principle
```

Additional targets opened to check or repair specific dependencies were `alg-newton-correction-for-vector-residuals`, `alg-reverse-mode-automatic-differentiation`, `alg-sqp-exhaustive-active-set-qp-solve`, `alg-sqp-second-order-correction`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-indefinite-lebesgue-integral-on-a-compact-interval`, `def-l-one-of-a-measure`, `def-sqp-l1-exact-penalty-merit`, `def-sqp-linearized-quadratic-subproblem`, `lem-product-topology-on-rn`, `lem-rat-embeds-dense`, `lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature`, `prop-explicit-rk-order-conditions-through-four`, `thm-all-norms-on-rn-are-equivalent`, `thm-critical-cone-equivalence-under-kkt`, `thm-differentiation-along-families-shrinking-nicely`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-geometric-series`, `thm-global-error-from-one-step-defect-and-stability`, `thm-inexact-newton-local-forcing-rates`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-minkowski-inequality-for-integrals`, `thm-rational-points-and-boxes-in-rn`, `thm-rationals-countable`, `thm-reverse-mode-computes-gradient`, `thm-sqp-exhaustive-active-set-qp-solve-correct-finite`, and `cor-second-order-taylor-expansion-with-the-hessian`.

## Repairs made

- `def-ctrl1-smooth-transcription-data`: declared both dimensions `n,m\ge1`; the definition uses `\mathbb R^m` but had not introduced `m`.
- `lem-ctrl1-measurable-linear-ode-state-map`: added `thm-geometric-series` and cited the finite sum bound needed to make the Picard iterates Cauchy in step 2.1.
- `lem-ctrl1-control-box-is-weakly-closed`: made Countable Choice explicit; added the countable rational-basis/topology suppliers and countable subadditivity/measure suppliers for the separating directions and exceptional-null-set union. Step 1.1 now cites rational density, and step 2.1 cites the countable null-union result.
- `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous`: propagated the Countable Choice hypothesis needed by weak closedness of the pointwise control set.
- `lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence`: added Minkowski's inequality and cited the $L^2$ triangle inequality for finite interval-step sums and the density approximation estimate.
- `def-ctrl1-lqr-adjoint-equation`: defined vector absolute continuity coordinatewise using the scalar absolute-continuity definition.
- `lem-ctrl1-lqr-adjoint-exists-uniquely`: added the one-dimensional $C^1$ change-of-variables result and used reflection invariance to justify that the reversed forcing is in $L^2$, the reversed coefficients are in $L^\infty$, and exceptional null sets remain null.
- `thm-ctrl1-lqr-existence-and-unique-optimal-control` and `thm-ctrl1-mesh-consistent-lqr-minimizers-converge`: made explicit that their weak-closedness supplier uses Countable Choice, supplied by the existing Dependent Choice branch.
- `thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch`: added the countable Euclidean basis, Lebesgue sigma-algebra/countable-subadditivity, and integral order/linearity dependencies. Step 2.1 now derives the dense set and measurable null union from those explicit sources and obtains the negative integral using integral order and linearity.
- `alg-ctrl1-runge-kutta-shooting-and-collocation-transcription`: specified the optional exact pointwise linear representation required by the direct linear-stage solve; added node, stage, and endpoint domain checks; rechecked stage times after path-node insertion; set control sampling at declared nodes and terminal time; and stated the successful `constructed` output status.
- `alg-ctrl1-finite-budget-transcription-solver-dispatch`: specified the canonical QP start tuple and mapped the primal-dual solver's shared dual/complementarity tolerance to `min(\tau_d,\tau_c)`, with `\tau_c` also bounding the discrete gap.
- A-page prose: stated that Countable Choice is needed for the compact-convex control weak-closedness, weak-to-uniform convergence, and recovery results.

Affected proof contracts were updated. No changed item's `verification.judge` record was present to remove. Reflow reported all 12 changed items unchanged. Precheck passed for all 12 changed items (definitions and algorithms reported zero proof checks and zero failures). The final proof-layout pass reported `12 items, 29 steps, 0 defects`.

## Defects not editable in batch 100

- `alg-sqp-exhaustive-active-set-qp-solve` (`research/numerical-optimization-dynamics-2026-10-16-batch-85.pages.json`): in `## Definition`, active-set loop instruction 2, the KKT system uses `G_i p=-d_i` and fills `b_J` from that value, but the algorithm defines neither `d_i` nor its relationship to the SQP linearized inequality. Its direct prerequisite `def-sqp-linearized-quadratic-subproblem` instead specifies `g_i(x)+Dg_i(x)p\le0`; the exact right-hand side of the enumerated KKT systems is therefore unspecified. The supplier needs to define the selected inequality right-hand side (for example, `d_i:=g_i(x)`) and the resulting `b_J` entries. The assigned consumer whose dependency closure reaches this batch-85 draft is `alg-ctrl1-finite-budget-transcription-solver-dispatch`. This remains an in-run dependency finding and is returned in the findings JSON. No raw digest was retained with the original observation, so the finding is not bound to a producer pre-snapshot or claimed current-source hash.

## Page verdicts and blocker

- `direct-transcription-and-numerical-ode-optimal-control`: pass after the Countable Choice qualification. Its summary now matches the actual hypotheses and conditional results, including the separately stated mesh-family KKT theorem.
- `direct-transcription-and-numerical-ode-optimal-control-examples`: pass. The bounded-actuator minimizer/objective, midpoint stage and endpoint calculation, and two-cell shooting equations agree with their stated conventions.
- No batch-100 blocker remains. At the last live-run status check the run was still active and reported an unrelated `3a-split` blocker (`split-70` failed three times); no run control was changed from this reader assignment.

## Coverage note

No rendered evidence bundle or reader bundle for this dispatch was present in the run state or task-specific research files, so the review used the batch manifest, current item/page files, contracts, and the direct prerequisite texts. I did not re-audit the entire transitive dependency graph inside each external supplier. The in-run finding about batch 85 is intentionally unbound because its raw digest was not captured at observation time.
