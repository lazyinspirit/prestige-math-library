# Step 5 adjudication — group **z**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 60, 64, 69: 3 A/B pair(s), 6 page(s), 65 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **60**: `research/numerical-optimization-dynamics-2026-10-16-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **64**: `research/numerical-optimization-dynamics-2026-10-16-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/numerical-optimization-dynamics-2026-10-16-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 60 | `operator-splitting-admm-and-primal-dual-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2404 | `sparse-matrix-models-and-kernel-costs`, `inequality-kkt-duality-and-optimality-certificates`, `proximal-gradient-and-accelerated-composite-optimization`, `krylov-methods-and-lanczos-convergence` |
| 60 | `operator-splitting-admm-and-primal-dual-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2405 | `operator-splitting-admm-and-primal-dual-methods` |
| 64 | `stochastic-approximation-and-stochastic-gradient-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2412 | `proximal-gradient-and-accelerated-composite-optimization`, `numerical-optimization-globalization-and-inexact-certificates`, `martingale-inequalities-and-convergence` |
| 64 | `stochastic-approximation-and-stochastic-gradient-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2413 | `stochastic-approximation-and-stochastic-gradient-methods` |
| 69 | `global-optimization-and-certified-branch-and-bound` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2422 | `matrix-norms-condition-numbers-and-numerical-stability`, `nonlinear-equations-and-newton-methods`, `inequality-kkt-duality-and-optimality-certificates`, `outward-rounded-interval-and-ball-arithmetic`, `barrier-and-primal-dual-interior-point-methods`, `gaussian-process-priors-and-posterior-laws` |
| 69 | `global-optimization-and-certified-branch-and-bound-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2423 | `global-optimization-and-certified-branch-and-bound` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `operator-splitting-admm-and-primal-dual-methods` — Operator splitting admm and primal dual methods (21 item(s))

- `def-maximal-monotone-relation-on-euclidean-space` · definition — Monotone and maximal-monotone relations on Euclidean space
- `def-saddle-point-for-convex-concave-lagrangian` · definition — Saddle points of extended-real Lagrangians
- `lem-firmly-nonexpansive-picard-iteration-converges` · lemma — Picard iterates of a firmly nonexpansive map converge in finite dimensions
- `lem-one-point-extension-for-finite-dimensional-nonexpansive-map` · lemma — One-point extension of a nonexpansive map in finite dimensions
- `lem-schur-reduction-for-polynomial-unit-disk-roots` · lemma — Schur reduction preserves strict unit-disk root location
- `alg-naive-sequential-three-block-admm` · algorithm — Naive sequential three-block ADMM
- `alg-two-block-admm-scaled` · algorithm — Scaled two-block ADMM with explicit capped-solve statuses
- `def-fenchel-conjugate-on-finite-dimensional-euclidean-space` · definition — Fenchel conjugate of an extended-real function
- `def-resolvent-of-a-monotone-relation` · definition — Resolvent of a monotone relation
- `lem-admm-exact-subproblem-optimality-relations` · lemma — Optimality relations for exact two-block ADMM subproblems
- `lem-fenchel-conjugate-is-proper-closed-convex` · lemma — The Fenchel conjugate of a proper closed convex function is proper closed convex
- `lem-fenchel-young-equality-characterizes-subgradients` · lemma — Fenchel–Young inequality and its equality case
- `thm-maximal-monotone-resolvent-is-firmly-nonexpansive` · theorem — A maximal-monotone resolvent is everywhere-defined and firmly nonexpansive
- `alg-douglas-rachford-splitting` · algorithm — Douglas–Rachford splitting for two maximal-monotone relations
- `alg-pdhg-primal-dual-hybrid-gradient` · algorithm — Chambolle–Pock primal-dual hybrid gradient
- `lem-two-block-admm-energy-and-objective-estimates` · lemma — Two-block ADMM energy descent and objective gap estimates
- `lem-douglas-rachford-map-is-firmly-nonexpansive` · lemma — The Douglas–Rachford fixed-point map is firmly nonexpansive
- `lem-pdhg-one-step-gap-telescope` · lemma — PDHG one-step primal-dual gap telescope
- `thm-two-block-admm-residual-objective-and-dual-convergence` · theorem — Two-block ADMM residual, objective and dual sequence convergence
- `thm-douglas-rachford-shadow-converges-to-zero-of-sum` · theorem — Douglas–Rachford shadows converge to a zero of the operator sum
- `thm-pdhg-ergodic-saddle-gap-o1k` · theorem — PDHG has an O(1/k) ergodic saddle-gap bound

### `operator-splitting-admm-and-primal-dual-methods-examples` — Operator splitting admm and primal dual methods — Examples (4 item(s))

- `cex-naive-three-block-admm-divergence` · counterexample — The direct three-block ADMM extension can diverge
- `ex-consensus-admm-least-squares` · example — Two-agent consensus least squares with exact ADMM iterates
- `ex-lanczos-ritz-value-is-not-a-norm-certificate` · example — A Lanczos Ritz value can miss the operator norm
- `ex-two-pixel-pdhg-total-variation-step` · example — A two-pixel TV denoising PDHG step in CSR form

### `stochastic-approximation-and-stochastic-gradient-methods` — Stochastic approximation and stochastic gradient methods (10 item(s))

- `def-stochastic-gradient-oracle-and-unconstrained-update` · definition — Filtration-adapted stochastic-gradient oracles and Robbins–Monro updates
- `lem-robbins-siegmund-almost-supermartingale` · lemma — Robbins–Siegmund almost-supermartingale convergence
- `thm-robbins-monro-strongly-monotone-root-convergence` · theorem — Robbins–Monro converges almost surely for a strongly monotone root
- `thm-stochastic-gradient-nonconvex-randomized-iterate-bound` · theorem — Nonconvex SGD stationarity bound for a uniform randomized iterate
- `thm-stochastic-gradient-biased-noise-floor` · theorem — Biased SGD has an explicit weighted stationarity floor
- `lem-strong-convexity-implies-strong-monotonicity-of-gradient` · lemma — Strong convexity makes a differentiable gradient strongly monotone
- `thm-stochastic-gradient-strong-convex-diminishing-step-rate` · theorem — Last-iterate SGD rate for smooth strongly convex objectives
- `def-projected-stochastic-gradient-update` · definition — Projected stochastic-gradient update
- `thm-projected-stochastic-gradient-strong-convex-a-s-convergence` · theorem — Projected SGD converges almost surely on a strongly convex objective
- `thm-projected-stochastic-gradient-convex-average-bound` · theorem — Finite-time projected SGD bound for a convex objective

### `stochastic-approximation-and-stochastic-gradient-methods-examples` — Stochastic approximation and stochastic gradient methods — Examples (3 item(s))

- `ex-streaming-least-squares-single-sample-update` · example — One streaming least-squares SGD update
- `ex-noisy-scalar-root-robbins-monro-convergence` · example — A bounded-noise Robbins–Monro scalar root
- `ex-biased-simulator-gradient-stationarity-floor` · example — A biased simulator gradient has limiting squared gradient $b^2$

### `global-optimization-and-certified-branch-and-bound` — Global optimization and certified branch and bound (23 item(s))

- `def-mccormick-bilinear-box-envelope` · definition — McCormick envelope for a bilinear term on a box
- `def-spatial-global-optimization-problem` · definition — Compact-box global minimization problems
- `lem-positive-noise-regularizes-observed-covariance` · lemma — Positive Gaussian observation noise makes the observed covariance positive definite
- `alg-finite-candidate-gp-acquisition-search` · algorithm — Finite-candidate Gaussian-process acquisition search with explicit statuses
- `def-spatial-box-bound-certificate` · definition — Certified lower, upper, and emptiness bounds on a box
- `lem-mccormick-envelope-equals-graph-convex-hull` · lemma — The four McCormick inequalities give the convex hull of a bilinear graph over a box
- `alg-certified-spatial-branch-and-bound` · algorithm — Finite-budget certified spatial branch and bound
- `thm-adaptive-finite-candidate-gp-search-posterior-correct` · theorem — Adaptive finite-candidate Gaussian-process search uses the correct sequential posterior
- `thm-finite-candidate-gp-search-terminates` · theorem — Finite-candidate Gaussian-process acquisition search terminates within its budget
- `thm-finite-budget-spatial-bnb-terminates` · theorem — Finite-budget spatial branch and bound always returns a declared status
- `thm-spatial-bnb-eventual-epsilon-termination` · theorem — Consistent bounds and exhaustive longest-side branching give eventual epsilon termination
- `thm-spatial-bnb-gap-certificate-sound` · theorem — A spatial branch-and-bound gap certificate proves global epsilon-optimality
- `alg-interval-dag-box-enclosure-and-bound` · algorithm — Outward-rounded interval enclosures for factorable expression DAGs on boxes
- `def-factorable-box-convex-relaxation-interface` · definition — Certified factorable convex relaxations on a box
- `alg-factorable-mccormick-box-relaxation` · algorithm — Finite McCormick convex relaxation construction for factorable box problems
- `alg-lipschitz-midpoint-box-lower-bound` · algorithm — Validated Lipschitz midpoint lower bounds on boxes
- `thm-factorable-dual-certificate-is-valid-box-lower-bound` · theorem — A verified dual certificate for a McCormick relaxation is a valid global lower bound
- `thm-interval-lipschitz-bound-sound-consistent` · theorem — Outward interval and Lipschitz midpoint bounds are sound and consistent under refinement
- `alg-certified-constraint-emptiness-search` · algorithm — Certified constraint-emptiness search with a finite query budget
- `alg-bounded-mixed-integer-branch-and-bound` · algorithm — Bounded mixed-integer branch and bound with a finite enumeration fallback
- `thm-uniform-constraint-margin-enables-empty-box-detection` · theorem — A positive constraint-separation margin permits finite certified empty-box detection
- `thm-bounded-mixed-integer-finite-budget-terminates` · theorem — Finite-budget bounded mixed-integer branch and bound terminates
- `thm-bounded-mixed-integer-gap-certificate-sound` · theorem — A bounded mixed-integer gap certificate proves global epsilon-optimality

### `global-optimization-and-certified-branch-and-bound-examples` — Global optimization and certified branch and bound — Examples (4 item(s))

- `ex-noisy-biological-simulator-finite-candidate-gp-acquisition` · example — A noisy biological simulator search is conditional on its chosen Gaussian-process model
- `cex-invalid-spatial-lower-bound-can-prune-global-minimum` · counterexample — An invalid lower bound can prune the true global minimizer
- `ex-multimodal-polynomial-spatial-bnb-gap-certificate` · example — A multimodal quartic receives an exact spatial branch-and-bound gap certificate
- `ex-bounded-engineering-design-mixed-integer-gap-certificate` · example — A bounded engineering design has an exact mixed-integer gap certificate

## Your seams

Your pages depend on another group's:

- `operator-splitting-admm-and-primal-dual-methods` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `operator-splitting-admm-and-primal-dual-methods` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `operator-splitting-admm-and-primal-dual-methods` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `operator-splitting-admm-and-primal-dual-methods` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `stochastic-approximation-and-stochastic-gradient-methods` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `stochastic-approximation-and-stochastic-gradient-methods` requires `numerical-optimization-globalization-and-inexact-certificates` (group x, batch 39)
- `global-optimization-and-certified-branch-and-bound` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `global-optimization-and-certified-branch-and-bound` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `global-optimization-and-certified-branch-and-bound` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `global-optimization-and-certified-branch-and-bound` requires `barrier-and-primal-dual-interior-point-methods` (group y, batch 59)

Another group's pages depend on yours:

- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` (group ab) requires your `stochastic-approximation-and-stochastic-gradient-methods`
- `simulation-gradient-estimation-and-simultaneous-perturbation` (group af) requires your `stochastic-approximation-and-stochastic-gradient-methods`

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
