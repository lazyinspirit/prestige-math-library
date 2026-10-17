# Step 5 adjudication — group **ab**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 73, 83, 84: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **73**: `research/numerical-optimization-dynamics-2026-10-16-batch-73-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **83**: `research/numerical-optimization-dynamics-2026-10-16-batch-83-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **84**: `research/numerical-optimization-dynamics-2026-10-16-batch-84-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 73 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2430 | `variance-reduction-and-randomized-integration`, `proximal-gradient-and-accelerated-composite-optimization`, `stochastic-approximation-and-stochastic-gradient-methods` |
| 73 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2431 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization` |
| 83 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2450 | `gradient-like-vector-fields-and-morse-trajectories`, `riemannian-metrics-length-distance-and-volume`, `finite-precision-direct-factorizations`, `krylov-methods-and-lanczos-convergence`, `nonconvex-line-search-and-inexact-newton-methods`, `trust-region-and-cubic-regularization-methods`, `topological-vector-bundles-and-grassmannian-classification`, `products-segre-and-veronese-embeddings-and-grassmannians`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory` |
| 83 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2451 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds` |
| 84 | `gauss-newton-and-levenberg-marquardt-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2452 | `finite-precision-direct-factorizations`, `nonlinear-equations-and-newton-methods`, `trust-region-and-cubic-regularization-methods` |
| 84 | `gauss-newton-and-levenberg-marquardt-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2453 | `gauss-newton-and-levenberg-marquardt-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `variance-reduced-finite-sum-and-adaptive-gradient-optimization` — Variance reduced finite sum and adaptive gradient optimization (19 item(s))

- `alg-adam-update` · algorithm — Bias-corrected Adam update
- `alg-amsgrad-update` · algorithm — Bias-corrected AMSGrad update
- `lem-finite-sum-gradient-is-average` · lemma — Gradient of a finite sum is the finite sum of gradients
- `lem-positive-diagonal-map-preserves-closed-convexity` · lemma — Positive diagonal maps preserve closed convex sets
- `alg-saga-finite-sum-method` · algorithm — Finite-sum SAGA
- `alg-svrg-finite-sum-method` · algorithm — Finite-sum SVRG
- `cex-adam-periodic-linear-losses-force-divergence` · counterexample — Adam diverges on a periodic bounded-gradient loss sequence
- `lem-convex-smooth-component-gradient-cocoercivity` · lemma — Cocoercive gradient bound for a convex smooth finite sum
- `thm-independent-minibatch-conditional-variance` · theorem — Conditional variance of independent and without-replacement minibatches
- `alg-diagonal-adagrad-online-regret` · algorithm — Diagonal AdaGrad for online convex losses
- `cex-saga-linear-factor-fails-under-standard-initialization` · counterexample — The assigned SAGA Lyapunov factor fails under standard initialization
- `lem-saga-estimator-and-table-recurrence` · lemma — SAGA conditional estimator, variance, and table recurrence
- `lem-svrg-unbiasedness-and-variance-bound` · lemma — SVRG conditional unbiasedness and variance bound
- `lem-diagonal-adagrad-subproblem-well-defined` · lemma — Diagonal AdaGrad subproblem has a unique minimizer
- `thm-saga-expected-linear-contraction` · theorem — SAGA expected linear contraction with a memory-scaled step size
- `thm-svrg-epoch-expected-linear-contraction` · theorem — Expected linear contraction of an SVRG epoch
- `lem-diagonal-adagrad-one-step-regret-bound` · lemma — One-step diagonal AdaGrad regret inequality
- `thm-diagonal-adagrad-regret-bound` · theorem — Diagonal AdaGrad regret bound
- `thm-saga-constant-step-memory-capped-linear-contraction` · theorem — SAGA constant-step linear contraction with a memory-capped factor

### `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples` — Variance reduced finite sum and adaptive gradient optimization — Examples (3 item(s))

- `ex-regularized-logistic-finite-sum` · example — A regularized logistic finite sum with an exact minimizer
- `ex-svrg-saga-gradient-work-storage-comparison` · example — SVRG and SAGA gradient-work and storage ledger
- `ex-adam-adaptive-step-divergence` · example — A bounded periodic gradient sequence with divergent Adam iterates

### `riemannian-optimization-on-stiefel-and-grassmann-manifolds` — Riemannian optimization on stiefel and grassmann manifolds (20 item(s))

- `def-stiefel-grassmann-optimization-conventions` · definition — Real Stiefel and Grassmann optimization conventions
- `def-complex-stiefel-grassmann-optimization-conventions` · definition — Complex Stiefel and Grassmann optimization conventions
- `prop-stiefel-grassmann-are-compact` · proposition — Finite-dimensional Stiefel and Grassmann manifolds are compact
- `prop-complex-stiefel-grassmann-are-compact` · proposition — Finite-dimensional complex Stiefel and Grassmann manifolds are compact
- `thm-stiefel-grassmann-tangent-projections` · theorem — Tangent spaces and Frobenius projections on Stiefel and Grassmann
- `thm-complex-stiefel-grassmann-tangent-projections` · theorem — Complex Stiefel and Grassmann tangent projections
- `prop-stiefel-grassmann-riemannian-gradient-formulas` · proposition — Projected Euclidean gradients are the Stiefel and Grassmann gradients
- `def-complex-grassmann-polar-retraction` · definition — Polar retraction on the complex Grassmannian
- `thm-complex-grassmann-polar-retraction-is-first-order` · theorem — The complex Grassmann polar map is a first-order retraction
- `prop-complex-grassmann-projector-energy-gradient` · proposition — Gradient of a unitary-invariant Hermitian projector energy
- `def-stiefel-qr-polar-retractions` · definition — QR and polar retractions on Stiefel and Grassmann
- `thm-stiefel-retractions-are-first-order` · theorem — The QR and polar maps are first-order Stiefel and Grassmann retractions
- `alg-riemannian-armijo-backtracking` · algorithm — Finite-budget retraction Armijo backtracking
- `alg-riemannian-trust-region` · algorithm — Finite-budget Riemannian trust-region method
- `def-stiefel-grassmann-projected-vector-transport` · definition — Projected vector transport on Stiefel and Grassmann
- `lem-riemannian-trust-region-ratio-accuracy-for-small-radii` · lemma — Retraction trust-region ratios are accurate at small radii
- `prop-stiefel-grassmann-vector-transport-is-tangent` · proposition — Projected vector transports return tangent representatives
- `thm-retraction-armijo-acceptance-and-step-lower-bound` · theorem — Uniform pullback smoothness guarantees an Armijo step
- `thm-retraction-armijo-best-iterate-complexity` · theorem — Retraction Armijo reaches an epsilon-gradient iterate in finite budget
- `thm-riemannian-trust-region-first-order-complexity` · theorem — Riemannian trust regions reach an epsilon-gradient iterate

### `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` — Riemannian optimization on stiefel and grassmann manifolds — Examples (3 item(s))

- `ex-repeated-eigenspace-on-grassmann` · example — A repeated eigenvalue gives a continuum of Grassmann minimizers
- `ex-riemannian-stiefel-nonconvex-saddle` · example — A strict saddle of a quadratic Stiefel objective
- `ex-trace-eigenspace-optimization-with-lanczos-start-angle` · example — A trace eigenspace objective and a Lanczos start-angle bound

### `gauss-newton-and-levenberg-marquardt-methods` — Gauss newton and levenberg marquardt methods (9 item(s))

- `thm-nonlinear-least-squares-gradient-and-hessian` · theorem — The nonlinear least-squares gradient and Hessian formulas
- `lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian` · lemma — Rectangular residual linearization error under a Lipschitz Jacobian
- `lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer` · lemma — A damped least-squares step solves a scaled trust-region model
- `alg-gauss-newton-qr-svd-step-with-rank-safeguard` · algorithm — Gauss-Newton linearized least-squares step with QR/SVD rank safeguards
- `alg-safeguarded-levenberg-marquardt` · algorithm — Finite-budget Levenberg-Marquardt with a trust-ratio safeguard
- `thm-gauss-newton-local-linear-contraction` · theorem — Gauss-Newton contracts linearly under a controlled residual-curvature bound
- `thm-gauss-newton-zero-residual-quadratic-convergence` · theorem — Gauss-Newton converges quadratically at a full-rank zero-residual root
- `lem-levenberg-marquardt-large-damping-forces-sufficient-decrease` · lemma — Uniformly large damping forces an acceptable LM trial in finitely many attempts
- `thm-safeguarded-levenberg-marquardt-global-stationarity` · theorem — Exact safeguarded Levenberg-Marquardt iterates approach stationarity on compact sublevels

### `gauss-newton-and-levenberg-marquardt-methods-examples` — Gauss newton and levenberg marquardt methods — Examples (3 item(s))

- `ex-exponential-kinetics-gauss-newton-fit` · example — An exponential-decay kinetics fit has a full-rank exact solution
- `ex-rank-deficient-identifiability-and-lm-step` · example — Rank-deficient data do not identify both parameters, while LM has a unique damped step
- `ex-nonzero-residual-gauss-newton-is-only-linear` · example — A nonzero-residual stationary point gives only linear Gauss-Newton convergence

## Your seams

Your pages depend on another group's:

- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` requires `stochastic-approximation-and-stochastic-gradient-methods` (group z, batch 64)
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `nonconvex-line-search-and-inexact-newton-methods` (group y, batch 58)
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `trust-region-and-cubic-regularization-methods` (group aa, batch 72)
- `gauss-newton-and-levenberg-marquardt-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `gauss-newton-and-levenberg-marquardt-methods` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `gauss-newton-and-levenberg-marquardt-methods` requires `trust-region-and-cubic-regularization-methods` (group aa, batch 72)

Another group's pages depend on yours:

- `iterative-regularization-and-early-stopping` (group ac) requires your `gauss-newton-and-levenberg-marquardt-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` (group ac) requires your `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
- `finite-basis-projector-energies-and-variational-electronic-structure` (group ad) requires your `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
- `numerical-identifiability-and-optimal-experiment-design` (group af) requires your `gauss-newton-and-levenberg-marquardt-methods`

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
