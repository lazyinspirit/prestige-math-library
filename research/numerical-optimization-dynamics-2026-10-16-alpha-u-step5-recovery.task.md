# Step 5 adjudication — group **u**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 3, 6, 93: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **3**: `research/numerical-optimization-dynamics-2026-10-16-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/numerical-optimization-dynamics-2026-10-16-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **93**: `research/numerical-optimization-dynamics-2026-10-16-batch-93-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 3 | `nonlinear-equations-and-newton-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2290 | `completeness-and-uniform-continuity`, `inverse-and-implicit-function-theorems`, `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes`, `numerical-optimization-for-statistical-computation` |
| 3 | `nonlinear-equations-and-newton-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2291 | `nonlinear-equations-and-newton-methods` |
| 6 | `inequality-kkt-duality-and-optimality-certificates` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2296 | `constant-rank-submersions-and-regular-level-sets`, `locally-convex-spaces-and-continuous-separation`, `jacobi-fields-conjugate-points-and-the-cut-locus` |
| 6 | `inequality-kkt-duality-and-optimality-certificates-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2297 | `inequality-kkt-duality-and-optimality-certificates` |
| 93 | `sparse-grid-cubature-and-mixed-regularity` | A | numerical-linear-algebra-and-approximation | 2470 | `composite-quadrature-rules`, `clenshaw-curtis-and-extrapolation-quadrature`, `gaussian-quadrature`, `combinatorial-classes-and-the-symbolic-method` |
| 93 | `sparse-grid-cubature-and-mixed-regularity-examples` | B | numerical-linear-algebra-and-approximation | 2471 | `sparse-grid-cubature-and-mixed-regularity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonlinear-equations-and-newton-methods` — Nonlinear equations and Newton methods (12 item(s))

- `alg-fixed-point-iteration` · algorithm — Fixed-point iteration with a residual stop and finite budget
- `lem-finite-budget-fixed-point-iteration-work` · lemma — Finite-budget fixed-point iteration returns a status in bounded outer work
- `alg-newton-correction-for-vector-residuals` · algorithm — Newton correction for a square vector residual
- `alg-forward-difference-jacobian` · algorithm — Forward-difference Jacobian on an open domain
- `lem-vector-newton-correction-error-under-lipschitz-jacobian` · lemma — Vector Newton remainder under a Lipschitz Jacobian
- `lem-forward-difference-jacobian-error-bound` · lemma — Forward-difference Jacobian error bound
- `alg-finite-budget-newton-for-vector-residuals` · algorithm — Finite-budget Newton for a square vector residual
- `lem-finite-budget-newton-work-and-status` · lemma — Finite-budget Newton preserves its domain and returns a status in bounded outer work
- `alg-damped-newton-for-vector-residuals` · algorithm — Finite-budget residual-merit damped Newton
- `alg-finite-difference-newton-for-vector-residuals` · algorithm — Finite-budget forward-difference Newton for a square vector residual
- `thm-updated-jacobian-newton-local-quadratic-convergence` · theorem — Updated-Jacobian Newton has local quadratic convergence at a simple root
- `thm-damped-newton-vector-residual-accepted-merit-decrease` · theorem — An accepted damped Newton step strictly decreases the residual merit

### `nonlinear-equations-and-newton-methods-examples` — Nonlinear equations and Newton methods — Examples (1 item(s))

- `ex-nonlinear-equations-and-newton-methods-boundary-cases` · example — Fixed points, local Newton behavior, and failure boundaries

### `inequality-kkt-duality-and-optimality-certificates` — Inequality kkt duality and optimality certificates (17 item(s))

- `def-inequality-constrained-program-and-kkt-geometry` · definition — Inequality constrained programs, tangent cones, constraint qualifications, and KKT
- `def-convex-program-duality-and-slater-condition` · definition — Finite-dimensional convex program, Lagrangian dual, and Slater condition
- `lem-finitely-generated-euclidean-cones-are-closed` · lemma — A finitely generated cone in Euclidean space is closed
- `lem-second-order-jet-on-a-regular-level-set` · lemma — A regular level set realizes every compatible second-order jet
- `def-kkt-residual-and-normal-cone` · definition — Scaled KKT residual and convex normal cone
- `thm-farkas-alternative-for-finite-linear-systems` · theorem — Farkas alternative for a finite linear system
- `thm-mfcq-linearized-cone-equals-bouligand-tangent-cone` · theorem — MFCQ identifies the linearized and Bouligand tangent cones
- `thm-critical-cone-equivalence-under-kkt` · theorem — Critical directions are tangent to every positively weighted active inequality
- `thm-lagrangian-weak-duality` · theorem — Every Lagrangian dual feasible pair is a lower-bound certificate
- `thm-convex-value-function-support-at-relative-interior-domain-points` · theorem — A finite-dimensional convex value function has a support at relative-interior points
- `thm-first-order-kkt-necessity-under-mfcq` · theorem — MFCQ gives KKT multipliers at a smooth local minimizer
- `thm-convex-kkt-sufficiency-and-normal-cone-certificate` · theorem — Convex KKT conditions certify a global minimum and an outward normal
- `thm-kkt-residual-vanishes-exactly-on-kkt-tuples` · theorem — The scaled KKT residual vanishes exactly at KKT tuples
- `thm-second-order-sufficient-condition-on-the-critical-cone` · theorem — Strict second-order positivity on the critical cone gives a strict local minimum
- `thm-slater-strong-duality-and-dual-attainment` · theorem — Slater gives zero duality gap and an attained dual certificate
- `prop-licq-implies-mfcq-and-unique-kkt-multipliers` · proposition — LICQ implies MFCQ and makes KKT multipliers unique
- `thm-second-order-necessary-condition-on-the-critical-cone` · theorem — Second-order necessity on the critical cone under LICQ

### `inequality-kkt-duality-and-optimality-certificates-examples` — Inequality kkt duality and optimality certificates — Examples (4 item(s))

- `ex-failed-constraint-qualification-blocks-kkt` · example — A true minimizer with no KKT multipliers when MFCQ fails
- `ex-closed-convex-program-with-positive-duality-gap` · example — A closed convex program with a positive duality gap when Slater fails
- `ex-active-set-quadratic-kkt-certificate` · example — Active-set quadratic with an exact KKT certificate
- `ex-kkt-stationary-saddle-point` · example — An unconstrained KKT point that is a saddle

### `sparse-grid-cubature-and-mixed-regularity` — Sparse grid cubature and mixed regularity (12 item(s))

- `def-smolyak-univariate-level-hierarchy` · definition — Nested one-dimensional quadrature levels and differences
- `def-smolyak-cubature` · definition — Smolyak cubature on a finite downward-closed index set
- `lem-smolyak-dyadic-tensor-simpson-convergence` · lemma — Convergence of dyadic tensor composite-Simpson rules
- `alg-smolyak-node-deduplication` · algorithm — Deterministic node merging for Smolyak cubature
- `def-smolyak-absolute-detail-summability` · definition — Absolute summability of a multi-index detail family
- `lem-smolyak-mixed-simpson-detail-decay` · lemma — Mixed-derivative bounds for dyadic Simpson details
- `lem-smolyak-rectangular-telescope` · lemma — Rectangular telescoping of tensor details
- `alg-dimension-adaptive-smolyak-surplus-selection` · algorithm — Finite-budget dimension-adaptive Smolyak surplus selection
- `thm-smolyak-absolute-detail-reconstruction-and-tail-error` · theorem — Absolute detail reconstruction and omitted-tail error bound
- `thm-smolyak-polynomial-multi-degree-exactness` · theorem — Smolyak polynomial exactness from actual one-dimensional levels
- `lem-smolyak-adaptive-surplus-termination` · lemma — Termination of finite-cap surplus selection
- `thm-smolyak-isotropic-mixed-smoothness-work-error-rate` · theorem — Explicit work and error rate for dyadic Simpson Smolyak cubature

### `sparse-grid-cubature-and-mixed-regularity-examples` — Sparse grid cubature and mixed regularity — Examples (3 item(s))

- `ex-smolyak-diagonal-ridge-breaks-mixed-regularity` · example — A diagonal ridge fails the mixed fourth-derivative hypothesis
- `ex-smolyak-four-dimensional-product-integrand` · example — A four-dimensional product exactly integrated on a sparse node union
- `ex-smolyak-signed-weights-polynomial-chaos-coefficient` · example — A signed Simpson-Smolyak weight makes a nonnegative chaos coefficient estimate negative

## Your seams

Your pages depend on another group's:

- `sparse-grid-cubature-and-mixed-regularity` requires `composite-quadrature-rules` (group p, batch 20)
- `sparse-grid-cubature-and-mixed-regularity` requires `clenshaw-curtis-and-extrapolation-quadrature` (group q, batch 43)
- `sparse-grid-cubature-and-mixed-regularity` requires `gaussian-quadrature` (group t, batch 82)

Another group's pages depend on yours:

- `nonlinear-boundary-value-solvers` (group b) requires your `nonlinear-equations-and-newton-methods`
- `pseudo-arclength-continuation-and-fold-certificates` (group c) requires your `nonlinear-equations-and-newton-methods`
- `nonsmooth-contact-time-stepping-and-projections` (group f) requires your `inequality-kkt-duality-and-optimality-certificates`
- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `nonlinear-equations-and-newton-methods`
- `implicit-stiff-time-stepping-and-algebraic-error` (group h) requires your `nonlinear-equations-and-newton-methods`
- `rosenbrock-and-linearly-implicit-methods` (group h) requires your `nonlinear-equations-and-newton-methods`
- `differential-algebraic-equations-and-consistent-initialization` (group i) requires your `nonlinear-equations-and-newton-methods`
- `interval-newton-krawczyk-and-polynomial-root-isolation` (group s) requires your `nonlinear-equations-and-newton-methods`
- `numerical-differentiation-and-derivative-error-control` (group v) requires your `nonlinear-equations-and-newton-methods`
- `revised-simplex-linear-programming-and-certificates` (group w) requires your `inequality-kkt-duality-and-optimality-certificates`
- `proximal-gradient-and-accelerated-composite-optimization` (group w) requires your `inequality-kkt-duality-and-optimality-certificates`
- `numerical-optimization-globalization-and-inexact-certificates` (group x) requires your `nonlinear-equations-and-newton-methods`
- `subgradient-bundle-and-derivative-free-optimization` (group x) requires your `inequality-kkt-duality-and-optimality-certificates`
- `nonconvex-line-search-and-inexact-newton-methods` (group y) requires your `nonlinear-equations-and-newton-methods`
- `barrier-and-primal-dual-interior-point-methods` (group y) requires your `inequality-kkt-duality-and-optimality-certificates`
- `operator-splitting-admm-and-primal-dual-methods` (group z) requires your `inequality-kkt-duality-and-optimality-certificates`
- `global-optimization-and-certified-branch-and-bound` (group z) requires your `nonlinear-equations-and-newton-methods`
- `global-optimization-and-certified-branch-and-bound` (group z) requires your `inequality-kkt-duality-and-optimality-certificates`
- `gauss-newton-and-levenberg-marquardt-methods` (group ab) requires your `nonlinear-equations-and-newton-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` (group ac) requires your `inequality-kkt-duality-and-optimality-certificates`
- `minimum-energy-paths-string-neb-and-saddle-certificates` (group ac) requires your `nonlinear-equations-and-newton-methods`
- `self-consistent-projector-iterations-and-certified-mixing` (group ad) requires your `nonlinear-equations-and-newton-methods`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `sparse-grid-cubature-and-mixed-regularity`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `inequality-kkt-duality-and-optimality-certificates`
- `finite-element-pde-constrained-optimization` (group ae) requires your `inequality-kkt-duality-and-optimality-certificates`
- `numerical-identifiability-and-optimal-experiment-design` (group af) requires your `inequality-kkt-duality-and-optimality-certificates`

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
