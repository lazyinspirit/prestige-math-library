# Step 5 adjudication — group **ae**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 99, 100, 101: 3 A/B pair(s), 6 page(s), 83 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **99**: `research/numerical-optimization-dynamics-2026-10-16-batch-99-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **100**: `research/numerical-optimization-dynamics-2026-10-16-batch-100-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **101**: `research/numerical-optimization-dynamics-2026-10-16-batch-101-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 99 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2482 | `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `gaussian-quadrature`, `spectral-collocation-and-galerkin-methods`, `sparse-grid-cubature-and-mixed-regularity`, `robust-covariance-and-high-dimensional-stability`, `gaussian-process-support-and-concentration`, `parabolic-finite-element-methods` |
| 99 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2483 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq` |
| 100 | `direct-transcription-and-numerical-ode-optimal-control` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2484 | `inequality-kkt-duality-and-optimality-certificates`, `nonlinear-boundary-value-solvers`, `runge-kutta-methods-and-order`, `adaptive-ode-solvers-and-error-estimation`, `barrier-and-primal-dual-interior-point-methods`, `sqp-active-set-and-augmented-lagrangian-methods`, `discrete-continuous-and-pde-adjoint-sensitivities` |
| 100 | `direct-transcription-and-numerical-ode-optimal-control-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2485 | `direct-transcription-and-numerical-ode-optimal-control` |
| 101 | `finite-element-pde-constrained-optimization` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2486 | `inequality-kkt-duality-and-optimality-certificates`, `finite-element-meshes-and-interpolation`, `proximal-gradient-and-accelerated-composite-optimization`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `parabolic-finite-element-methods`, `variational-crimes-and-strang-lemmas`, `discrete-continuous-and-pde-adjoint-sensitivities`, `sqp-active-set-and-augmented-lagrangian-methods` |
| 101 | `finite-element-pde-constrained-optimization-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2487 | `finite-element-pde-constrained-optimization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `polynomial-chaos-stochastic-collocation-and-galerkin-uq` — Polynomial chaos stochastic collocation and galerkin uq (25 item(s))

- `def-finite-product-chaos-input` · definition — Finite product-law polynomial-chaos input data
- `rem-chaos-completeness-and-spectral-rate-caveats` · remark — Completeness and spectral rates require law-specific hypotheses
- `def-chaos-total-degree-and-hyperbolic-cross-index-sets` · definition — Total-degree and hyperbolic-cross chaos index sets
- `def-finite-input-bochner-l2-space` · definition — Bochner L2 space for a finite product-law input
- `lem-positive-moment-gram-produces-univariate-chaos-polynomials` · lemma — Positive moment Gram matrices produce orthonormal polynomial families
- `def-chaos-orthonormal-tensor-basis` · definition — Finite orthonormal polynomial tensor basis
- `def-uniformly-elliptic-affine-random-diffusion` · definition — Uniformly elliptic affine random diffusion model
- `lem-chaos-index-sets-are-finite` · lemma — The stated chaos index sets are finite and contain zero
- `thm-finite-input-bochner-l2-is-hilbert` · theorem — Finite-input Bochner L2 of a separable Hilbert space is Hilbert
- `alg-christoffel-weighted-least-squares-collocation` · algorithm — Christoffel-weighted least-squares polynomial collocation
- `def-finite-chaos-orthogonal-projection` · definition — Finite polynomial-chaos orthogonal projection
- `lem-affine-form-integrable-on-bochner-l2` · lemma — Affine diffusion forms are well-defined on Bochner L2
- `thm-independent-polynomial-chaos-tensors-are-orthonormal` · theorem — Independent polynomial-chaos tensor products are orthonormal
- `def-chaos-quadrature-coefficient-estimator` · definition — Quadrature estimates of polynomial-chaos coefficients
- `lem-christoffel-sampling-law-and-gram-mean` · lemma — Christoffel sampling is normalized and its weighted Gram has mean identity
- `thm-affine-random-diffusion-solution-is-bochner` · theorem — Affine random diffusion has a measurable Bochner solution
- `thm-finite-chaos-projection-parseval-and-moments` · theorem — Finite chaos projection, Parseval identity, mean, and variance
- `thm-product-chaos-and-spatial-density-in-bochner-l2` · theorem — Tensor products are dense in Bochner L2 under scalar and spatial density
- `thm-chaos-quadrature-coefficient-error-split` · theorem — Projection and quadrature errors split in L2
- `thm-christoffel-gram-concentration-bound` · theorem — Bounded-Christoffel sampling stabilizes the empirical Gram matrix
- `thm-stochastic-galerkin-coercivity-and-cea` · theorem — Stochastic Galerkin coercivity and Cea quasi-optimality
- `cor-smolyak-chaos-coefficient-error-bound` · corollary — Smolyak mixed-regularity bounds control chaos coefficient error
- `cor-stochastic-galerkin-fe-interpolation-rate` · corollary — Conditional spatial finite-element rate for stochastic Galerkin
- `thm-weighted-least-squares-stability-and-error` · theorem — Weighted least squares is stable on the good Gram event
- `cor-tensor-gauss-exact-chaos-coefficients` · corollary — Tensor Gaussian rules recover polynomial-chaos coefficients exactly

### `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples` — Polynomial chaos stochastic collocation and galerkin uq — Examples (5 item(s))

- `cex-cauchy-input-has-no-degree-one-chaos` · counterexample — A Cauchy input has no L2 degree-one polynomial chaos
- `cex-finite-support-makes-high-degree-moment-gram-singular` · counterexample — Finite support can make a higher-degree moment Gram matrix singular
- `ex-affine-random-diffusion-uniform-coercivity` · example — A bounded random diffusion coefficient remains uniformly coercive
- `ex-two-state-reaction-rate-chaos` · example — A two-state uncertain reaction rate has an exact degree-one chaos expansion
- `ex-total-degree-versus-tensor-product-work` · example — Total-degree chaos uses fewer modes than a tensor product

### `direct-transcription-and-numerical-ode-optimal-control` — Direct transcription and numerical ode optimal control (24 item(s))

- `def-ctrl1-linear-lqr-control-problem` · definition — Finite-horizon bounded-control linear-quadratic ODE problem
- `def-ctrl1-smooth-transcription-data` · definition — Smooth finite-horizon ODE optimal-control transcription data
- `lem-ctrl1-measurable-linear-ode-state-map` · lemma — The bounded measurable linear ODE has a unique affine state map
- `lem-ctrl1-control-box-is-weakly-closed` · lemma — Under Countable Choice, pointwise compact convex control constraints are weakly closed in L2
- `def-ctrl1-control-mesh-and-piecewise-constant-parameterization` · definition — Time meshes and piecewise-constant control parameterization
- `lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence` · lemma — Weakly convergent bounded controls have uniformly convergent states
- `lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence` · lemma — Cell averages give a strong recovery sequence for compact convex controls
- `def-ctrl1-runge-kutta-tableau-and-stage-collocation` · definition — Runge–Kutta tableaux and stage collocation equations
- `def-ctrl1-lqr-adjoint-equation` · definition — Continuous adjoint equation for the linear-quadratic ODE
- `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous` · lemma — Under Countable Choice, the LQR objective is weakly lower semicontinuous
- `lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice` · lemma — AC zero-derivative constancy and integrable-derivative reconstruction under Countable Choice
- `lem-ctrl1-lqr-adjoint-exists-uniquely` · lemma — The backward LQR adjoint equation has a unique solution
- `thm-ctrl1-lqr-existence-and-unique-optimal-control` · theorem — A bounded-control linear-quadratic ODE has a unique minimizer
- `alg-ctrl1-indirect-shooting-for-the-ode-optimality-system` · algorithm — Finite-budget indirect shooting for an interior-control ODE optimality system
- `lem-ctrl1-lqr-adjoint-identity-and-gradient` · lemma — The LQR adjoint identity gives the reduced gradient
- `thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch` · theorem — LQR minimizers satisfy a feasible-set variational inequality
- `cex-ctrl1-terminal-constraints-break-pointwise-control-vi` · counterexample — An active terminal constraint invalidates the pointwise control-only variational inequality
- `alg-ctrl1-runge-kutta-shooting-and-collocation-transcription` · algorithm — Finite-horizon shooting and Runge–Kutta collocation transcription
- `lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent` · lemma — Exact single and multiple shooting have the same reduced feasible controls
- `lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program` · lemma — A linear-quadratic transcription with affine constraints is a convex QP
- `thm-ctrl1-mesh-consistent-lqr-minimizers-converge` · theorem — Mesh-consistent LQR minimizers converge to the unique continuous minimizer
- `thm-ctrl1-objective-and-control-error-from-consistency-bounds` · theorem — Strong convexity converts transcription objective error into a control bound
- `alg-ctrl1-finite-budget-transcription-solver-dispatch` · algorithm — Finite-budget barrier or SQP solve for a transcription NLP
- `thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription` · theorem — Exact-Hessian SQP converges locally to a regular transcription KKT point

### `direct-transcription-and-numerical-ode-optimal-control-examples` — Direct transcription and numerical ode optimal control — Examples (3 item(s))

- `ex-ctrl1-bounded-actuator-lqr` · example — A bounded-actuator LQR control and its exact objective
- `ex-ctrl1-chemical-dosing-linear-model` · example — A chemical-dosing model under a constant admissible dose
- `ex-ctrl1-single-versus-multiple-shooting-two-intervals` · example — Two-interval single and multiple shooting for x-prime equals u

### `finite-element-pde-constrained-optimization` — Finite element pde constrained optimization (23 item(s))

- `def-pde-box-control-set` · definition — Closed pointwise box of L2 controls
- `lem-pde-box-control-set-basic-properties` · lemma — A pointwise L2 box is nonempty, bounded, closed, and convex
- `lem-pde-l2-control-space-separable` · lemma — L2 controls on a bounded spatial region form a separable Hilbert space
- `def-linear-elliptic-pde-constrained-control-problem` · definition — Linear coercive elliptic PDE control problem and reduced objective
- `lem-separable-hilbert-bounded-sequence-weak-subsequence` · lemma — A bounded sequence in a separable Hilbert space has a weakly convergent subsequence
- `lem-pde-box-control-set-weakly-sequentially-closed` · lemma — A pointwise L2 box is weakly sequentially closed
- `thm-linear-elliptic-control-state-and-adjoint-wellposedness` · theorem — Well-posedness of elliptic control state and adjoint equations
- `thm-linear-elliptic-reduced-control-gradient-and-hessian` · theorem — Reduced gradient and coercive Hessian for linear elliptic tracking control
- `thm-linear-elliptic-control-existence-and-variational-inequality` · theorem — Existence, uniqueness, and variational inequality for elliptic PDE control
- `lem-box-control-projection-is-pointwise-clipping` · lemma — The L2 projection onto a pointwise box is clipping
- `cor-linear-elliptic-control-projection-formula` · corollary — The optimal elliptic control is the clipped negative adjoint
- `lem-piecewise-constant-control-h1-projection-error` · lemma — Cell averaging preserves constant box bounds and has an H1 error bound
- `lem-fem-control-gradient-residual-bound` · lemma — State and adjoint Strang bounds give a reduced-gradient error certificate
- `thm-p0-control-fem-o-h-error` · theorem — Piecewise-constant control with shape-regular finite elements has O(h) error
- `thm-variational-fem-control-o-h2-error` · theorem — Variational control discretization has O(h2) error under primal and adjoint H2 regularity
- `thm-parabolic-control-adjoint-gradient-extension` · theorem — Parabolic linear-quadratic control has an energy adjoint and reduced gradient
- `alg-fem-control-proximal-gradient-certified-residual` · algorithm — Finite-budget projected-gradient loop with state-adjoint residual certificates
- `thm-fem-control-proximal-gradient-residual-distance-bound` · theorem — A certified projected-gradient residual bounds distance to the control-mesh optimum
- `alg-fem-control-active-set-box-quadratic-solve` · algorithm — Finite exhaustive active-set solve for a box-constrained positive quadratic
- `thm-fem-control-active-set-box-quadratic-solve-sound-finite` · theorem — The exhaustive box quadratic solve returns the unique minimizer in finite time
- `alg-fem-control-active-set-sqp-with-finite-residual-status` · algorithm — Finite-budget active-set SQP with a certified KKT-system residual status
- `thm-fem-control-active-set-sqp-finite-budget-certificate` · theorem — Finite SQP status is sound and the exact local branch inherits OPT6 conditions
- `lem-p0-box-projection-is-clipped-cell-average` · lemma — The L2 projection onto a cellwise constant box clips cell averages

### `finite-element-pde-constrained-optimization-examples` — Finite element pde constrained optimization — Examples (3 item(s))

- `ex-distributed-heat-source-control-with-an-exact-box-optimum` · example — A distributed heat source has an exact box-constrained optimum
- `ex-boundary-control-needs-a-trace-space` · example — A boundary flux control uses the H1 trace and a different control operator
- `ex-bang-bang-control-is-the-alpha-zero-box-limit` · example — The alpha-zero linear box problem has a bang-bang active set

## Your seams

Your pages depend on another group's:

- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `gaussian-quadrature` (group t, batch 82)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `spectral-collocation-and-galerkin-methods` (group aj, batch 90)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `sparse-grid-cubature-and-mixed-regularity` (group u, batch 93)
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `parabolic-finite-element-methods` (group ai, batch 56)
- `direct-transcription-and-numerical-ode-optimal-control` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `direct-transcription-and-numerical-ode-optimal-control` requires `nonlinear-boundary-value-solvers` (group b, batch 22)
- `direct-transcription-and-numerical-ode-optimal-control` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `direct-transcription-and-numerical-ode-optimal-control` requires `adaptive-ode-solvers-and-error-estimation` (group g, batch 53)
- `direct-transcription-and-numerical-ode-optimal-control` requires `barrier-and-primal-dual-interior-point-methods` (group y, batch 59)
- `direct-transcription-and-numerical-ode-optimal-control` requires `sqp-active-set-and-augmented-lagrangian-methods` (group ac, batch 85)
- `direct-transcription-and-numerical-ode-optimal-control` requires `discrete-continuous-and-pde-adjoint-sensitivities` (group ad, batch 96)
- `finite-element-pde-constrained-optimization` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `finite-element-pde-constrained-optimization` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `finite-element-pde-constrained-optimization` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `finite-element-pde-constrained-optimization` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `finite-element-pde-constrained-optimization` requires `parabolic-finite-element-methods` (group ai, batch 56)
- `finite-element-pde-constrained-optimization` requires `variational-crimes-and-strang-lemmas` (group aj, batch 89)
- `finite-element-pde-constrained-optimization` requires `discrete-continuous-and-pde-adjoint-sensitivities` (group ad, batch 96)
- `finite-element-pde-constrained-optimization` requires `sqp-active-set-and-augmented-lagrangian-methods` (group ac, batch 85)

Another group's pages depend on yours:

- `global-sensitivity-anova-and-sobol-estimation` (group af) requires your `polynomial-chaos-stochastic-collocation-and-galerkin-uq`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
