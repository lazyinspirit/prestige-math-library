# Step 5 adjudication — group **w**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 59 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/numerical-optimization-dynamics-2026-10-16-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/numerical-optimization-dynamics-2026-10-16-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/numerical-optimization-dynamics-2026-10-16-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 25 | `numerical-inverse-problems-and-regularization-error` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2334 | `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `compact-operators-and-riesz-schauder-theory` |
| 25 | `numerical-inverse-problems-and-regularization-error-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2335 | `numerical-inverse-problems-and-regularization-error` |
| 26 | `revised-simplex-linear-programming-and-certificates` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2336 | `finite-precision-direct-factorizations`, `sparse-matrix-models-and-kernel-costs`, `inequality-kkt-duality-and-optimality-certificates` |
| 26 | `revised-simplex-linear-programming-and-certificates-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2337 | `revised-simplex-linear-programming-and-certificates` |
| 27 | `proximal-gradient-and-accelerated-composite-optimization` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2338 | `constrained-variational-problems-and-variational-inequalities`, `convex-and-semicontinuous-functions-on-rn`, `inequality-kkt-duality-and-optimality-certificates`, `sparse-high-dimensional-estimation-and-covariance` |
| 27 | `proximal-gradient-and-accelerated-composite-optimization-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2339 | `proximal-gradient-and-accelerated-composite-optimization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `numerical-inverse-problems-and-regularization-error` — Numerical inverse problems and regularization error (6 item(s))

- `lem-hilbert-tikhonov-normal-operator-invertible` · lemma — The shifted Hilbert-space normal operator is invertible with inverse norm at most $1/\lambda$
- `lem-truncated-svd-bias-and-data-noise-decomposition` · lemma — A truncated SVD separates discarded-direction bias from retained data noise
- `lem-hilbert-tikhonov-noise-amplification-bound` · lemma — Hilbert-space Tikhonov amplifies data by at most $1/(2\sqrt{\lambda})$
- `thm-tikhonov-error-chain-with-discretization-and-residual` · theorem — Tikhonov error separates bias, data noise, discretization and solve residual
- `cor-l2-inverse-error-budget-and-cross-term-condition` · corollary — An inverse-error chain obeys Minkowski in $L^2$; root-sum-square is equivalent to aggregate cross-term cancellation
- `lem-computed-augmented-tikhonov-solve-residual-and-output-error` · lemma — Computed augmented Tikhonov solves have certified residual and output-error bounds

### `numerical-inverse-problems-and-regularization-error-examples` — Numerical inverse problems and regularization error — Examples (4 item(s))

- `ex-tikhonov-normal-equation-residual-bound` · example — An exact normal-equation residual gives an a posteriori solution bound
- `ex-diagonal-inverse-noise-amplification` · example — A small singular value makes the Tikhonov noise bound sharp
- `ex-tikhonov-bias-noise-tradeoff` · example — Increasing the Tikhonov parameter trades smaller data response for more bias
- `ex-quadrature-discretization-residual-before-inversion` · example — A scalar quadrature residual appears before the regularized inverse

### `revised-simplex-linear-programming-and-certificates` — Revised simplex linear programming and certificates (15 item(s))

- `def-revised-simplex-standard-form-linear-program` · definition — Revised simplex standard-form linear program
- `def-revised-simplex-basis-dictionary` · definition — Basis dictionaries and reduced costs for revised simplex
- `alg-revised-simplex-residual-audit` · algorithm — Exact residual audit of finite-precision simplex candidates
- `lem-revised-simplex-basic-feasible-extreme-point-equivalence` · lemma — Basic feasible solutions, extreme points, and basis existence
- `thm-revised-simplex-primal-pivot-objective-ray-optimality` · theorem — Primal revised-simplex pivot identities and certificates
- `alg-revised-primal-simplex-bland-rule` · algorithm — Primal revised simplex with Bland's rule
- `alg-revised-dual-simplex-with-finite-budget` · algorithm — Dual revised simplex with a finite pivot budget
- `prop-revised-simplex-sparse-pricing-operation-count` · proposition — Sparse reduced-cost pricing operation count
- `thm-revised-simplex-primal-dual-residual-gap` · theorem — Primal-dual residual gap bound for a simplex candidate
- `thm-revised-simplex-bland-rule-finite-termination` · theorem — Bland-rule finite termination and optimal-basis existence
- `thm-revised-dual-simplex-invariant-and-farkas` · theorem — Dual-simplex invariant and Farkas infeasibility certificate
- `alg-revised-simplex-phase-one` · algorithm — Phase I revised simplex and rank reduction
- `thm-revised-simplex-phase-one-extraction-and-farkas` · theorem — Phase I feasible-basis extraction and infeasibility certificate
- `alg-revised-simplex-qr-basis-recompute-and-audit` · algorithm — Revised-simplex basis QR recomputation with finite residual and pivot statuses
- `thm-revised-simplex-qr-basis-residual-status-sound` · theorem — Finite QR basis recomputation has sound residual and stored-data audit statuses

### `revised-simplex-linear-programming-and-certificates-examples` — Revised simplex linear programming and certificates — Examples (5 item(s))

- `ex-revised-simplex-unbounded-ray` · example — A revised-simplex unbounded ray
- `ex-revised-simplex-ill-conditioned-basis-residual` · example — A small residual at an ill-conditioned basis
- `ex-revised-simplex-primal-dual-trace` · example — A one-pivot primal and dual certificate trace
- `ex-revised-simplex-degenerate-cycle-prevented-by-bland` · example — A degenerate six-pivot cycle prevented by Bland's rule
- `ex-revised-simplex-phase-one-infeasible` · example — An infeasible Phase I problem and its Farkas certificate

### `proximal-gradient-and-accelerated-composite-optimization` — Proximal gradient and accelerated composite optimization (25 item(s))

- `def-indicator-function-of-closed-convex-set` · definition — Extended-real indicator of a set
- `def-proper-closed-convex-function-on-rn` · definition — Proper closed convex extended-real functions on $\mathbb R^n$
- `lem-l-smoothness-descent-inequality` · lemma — Descent inequality for a Lipschitz gradient
- `def-extended-real-epsilon-subdifferential` · definition — Subdifferentials of proper extended-real convex functions
- `def-proximal-mapping` · definition — Proximal mapping
- `def-strong-convex-composite-objective` · definition — Strong convexity for an extended-real objective
- `lem-proper-closed-convex-function-affine-minorant` · lemma — A proper closed convex function has an affine minorant
- `lem-smooth-composite-sum-preserves-proper-closed-convexity` · lemma — A finite continuous convex summand preserves proper closed convexity
- `lem-prox-indicator-is-euclidean-projection` · lemma — The proximal map of an indicator is Euclidean projection
- `thm-proximal-operator-existence-resolvent-firm-nonexpansive` · theorem — Existence, resolvent characterization, and firm nonexpansiveness of the proximal map
- `def-proximal-gradient-mapping` · definition — Proximal-gradient mapping and projected-gradient mapping
- `lem-prox-l1-is-soft-thresholding` · lemma — The proximal map of the l1 norm is soft thresholding
- `lem-proximal-three-point-inequality` · lemma — Three-point inequality for the proximal-gradient model
- `alg-proximal-gradient-and-fista` · algorithm — Proximal-gradient, FISTA, and fixed-period restarted FISTA
- `lem-proximal-gradient-one-step-estimate` · lemma — One-step proximal-gradient estimate
- `thm-projected-gradient-fixed-point-kkt-certificate` · theorem — Projected-gradient fixed points are normal-cone certificates
- `alg-certified-inexact-proximal-gradient-and-fista` · algorithm — Certified inexact proximal-gradient and FISTA updates
- `lem-fista-energy-estimate-sequence` · lemma — FISTA energy estimate-sequence recurrence
- `thm-proximal-gradient-o1k-objective-bound` · theorem — The proximal-gradient method has an O(1/k) objective bound
- `lem-inexact-proximal-gradient-one-step-estimate` · lemma — One-step estimate for a certified inexact proximal call
- `thm-fista-o1k2-objective-bound` · theorem — FISTA has an O(1/k^2) objective bound
- `lem-inexact-fista-energy-estimate` · lemma — FISTA energy recurrence with certified proximal errors
- `thm-inexact-proximal-gradient-summable-error-bound` · theorem — Summable certified prox errors preserve an O(1/k) best-iterate bound
- `thm-strong-convex-proximal-gradient-and-restarted-fista-rates` · theorem — Strong convexity gives linear proximal-gradient and restarted-FISTA rates
- `thm-inexact-fista-weighted-error-bound` · theorem — Weighted prox-error summability preserves an O(1/k^2) FISTA bound

### `proximal-gradient-and-accelerated-composite-optimization-examples` — Proximal gradient and accelerated composite optimization — Examples (4 item(s))

- `ex-two-pixel-total-variation-proximal-map` · example — The two-pixel total-variation proximal map
- `ex-fista-objective-increases-on-a-quadratic` · example — FISTA can increase the objective between consecutive iterates
- `ex-nonorthogonal-lasso-proximal-gradient-step` · example — One proximal-gradient step for a nonorthogonal Lasso design
- `ex-projected-gradient-on-nonnegative-orthant` · example — Projected gradient on the nonnegative orthant

## Your seams

Your pages depend on another group's:

- `numerical-inverse-problems-and-regularization-error` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `revised-simplex-linear-programming-and-certificates` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `revised-simplex-linear-programming-and-certificates` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `revised-simplex-linear-programming-and-certificates` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `proximal-gradient-and-accelerated-composite-optimization` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)

Another group's pages depend on yours:

- `nonsmooth-contact-time-stepping-and-projections` (group f) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `spectral-regularization-and-parameter-choice` (group x) requires your `numerical-inverse-problems-and-regularization-error`
- `subgradient-bundle-and-derivative-free-optimization` (group x) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `coordinate-and-block-descent-methods` (group y) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `operator-splitting-admm-and-primal-dual-methods` (group z) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `stochastic-approximation-and-stochastic-gradient-methods` (group z) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` (group ab) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `iterative-regularization-and-early-stopping` (group ac) requires your `numerical-inverse-problems-and-regularization-error`
- `finite-element-pde-constrained-optimization` (group ae) requires your `proximal-gradient-and-accelerated-composite-optimization`
- `numerical-identifiability-and-optimal-experiment-design` (group af) requires your `proximal-gradient-and-accelerated-composite-optimization`

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

# Historical Step-5 closure recovery, `numerical-optimization-dynamics-2026-10-16`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
