# Step 5 adjudication — group **h**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 65, 66, 74: 3 A/B pair(s), 6 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **65**: `research/numerical-optimization-dynamics-2026-10-16-batch-65-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **66**: `research/numerical-optimization-dynamics-2026-10-16-batch-66-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **74**: `research/numerical-optimization-dynamics-2026-10-16-batch-74-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 65 | `implicit-stiff-time-stepping-and-algebraic-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2414 | `nonlinear-equations-and-newton-methods`, `global-ode-and-density-error`, `linear-multistep-methods-and-dahlquist-equivalence`, `homology-axioms-degree-and-classical-applications` |
| 65 | `implicit-stiff-time-stepping-and-algebraic-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2415 | `implicit-stiff-time-stepping-and-algebraic-error` |
| 66 | `certified-stationary-distribution-and-hitting-statistic-numerics` | A | numerical-differential-equations-and-stochastic-dynamics | 2416 | `matrix-norms-condition-numbers-and-numerical-stability`, `stationary-markov-chains-and-ergodic-limits`, `finite-precision-direct-factorizations`, `sparse-matrix-models-and-kernel-costs`, `krylov-methods-and-lanczos-convergence`, `finite-generator-master-equations-and-uniformization` |
| 66 | `certified-stationary-distribution-and-hitting-statistic-numerics-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2417 | `certified-stationary-distribution-and-hitting-statistic-numerics` |
| 74 | `rosenbrock-and-linearly-implicit-methods` | A | numerical-differential-equations-and-stochastic-dynamics | 2432 | `finite-precision-direct-factorizations`, `nonlinear-equations-and-newton-methods`, `implicit-stiff-time-stepping-and-algebraic-error` |
| 74 | `rosenbrock-and-linearly-implicit-methods-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2433 | `rosenbrock-and-linearly-implicit-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `implicit-stiff-time-stepping-and-algebraic-error` — Implicit stiff time stepping and algebraic error (16 item(s))

- `def-implicit-residual-and-algebraic-error-units` · definition — Implicit residuals and their update and derivative units
- `lem-strongly-monotone-continuous-map-is-bijective` · lemma — A continuous strongly monotone map of finite-dimensional space is bijective
- `def-backward-euler-step-equation` · definition — Backward Euler step map and algebraic residual
- `def-implicit-runge-kutta-stage-equations` · definition — Implicit Runge–Kutta stage equations and update
- `def-two-stage-sdirk-tableau` · definition — Selected two-stage singly diagonally implicit Runge–Kutta tableau
- `def-two-stage-radau-iia-tableau` · definition — Two-stage Radau IIA tableau
- `def-scalar-rk-a-and-l-stability` · definition — Scalar stability function, A-stability, and L-stability for Runge–Kutta methods
- `lem-small-step-implicit-rk-branch-and-residual-error` · lemma — Small-step implicit Runge–Kutta stages have a unique branch and controlled residual error
- `alg-newton-chord-implicit-residual-with-factorization-reuse` · algorithm — Finite-budget Newton and chord solves with scheduled factorization reuse
- `thm-backward-euler-dissipative-resolvent-contraction` · theorem — Backward Euler has a globally defined nonexpansive resolvent (contractive when strongly dissipative)
- `prop-two-stage-sdirk-order-two-and-l-stability` · proposition — The selected two-stage SDIRK method has order two and is scalar L-stable
- `prop-two-stage-radau-iia-order-three-and-l-stability` · proposition — Two-stage Radau IIA has order three and is scalar L-stable
- `thm-backward-euler-algebraic-update-residual-error-budget` · theorem — Backward Euler propagates unscaled algebraic update residuals
- `thm-implicit-rk-global-order-with-stage-residual-control` · theorem — Backward Euler, the selected SDIRK, and two-stage Radau IIA converge at their stated orders under controlled stage residuals
- `cor-constant-step-bdf2-order-two-with-consistent-start` · corollary — Constant-step BDF2 is second-order convergent with a consistent start and selected roots
- `alg-implicit-stiff-time-stepper-with-consistent-starts` · algorithm — Implicit stiff time stepping with a branch and residual ledger

### `implicit-stiff-time-stepping-and-algebraic-error-examples` — Implicit stiff time stepping and algebraic error — Examples (4 item(s))

- `ex-newton-budget-exhaustion-with-a-unique-backward-euler-root` · example — Newton can exhaust its budget although the dissipative backward Euler root is unique
- `ex-stiff-scalar-decay-and-trapezoid-ringing` · example — Trapezoidal ringing on a stiff scalar decay equation
- `ex-dissipative-backward-euler-residual-contraction` · example — A dissipative backward Euler solve with a controlled update residual
- `ex-robertson-reaction-system-newton-work` · example — One Robertson reaction step: Newton work and the chord reuse tradeoff

### `certified-stationary-distribution-and-hitting-statistic-numerics` — Certified stationary distribution and hitting statistic numerics (15 item(s))

- `def-finite-column-stochastic-matrix-and-law` · definition — Finite column-stochastic matrices and probability vectors
- `lem-finite-transient-block-geometric-escape` · lemma — Finite-step escape from a transient substochastic block
- `alg-finite-markov-closed-class-decomposition` · algorithm — Finite Markov closed-class graph decomposition
- `lem-column-stochastic-l1-nonexpansive` · lemma — Column-stochastic matrices preserve mass and contract ℓ1
- `thm-finite-transient-hitting-and-mean-exit-residual-bound` · theorem — Transient hitting, mean exit, and residual bounds
- `thm-irreducible-finite-class-has-unique-invariant-vector` · theorem — An irreducible finite class has a unique invariant vector
- `lem-dobrushin-zero-sum-l1-coefficient` · lemma — Column-overlap formula for the zero-sum ℓ1 coefficient
- `thm-finite-markov-closed-class-decomposition-correctness` · theorem — Correctness of finite Markov closed-class decomposition
- `alg-corrected-stationary-residual-certificate` · algorithm — Correct and certify a finite-chain stationary candidate
- `thm-finite-chain-closed-class-cesaro-weight-decomposition` · theorem — Closed-class stationary laws and initial-law-dependent Cesàro weights
- `thm-m-step-dobrushin-stationary-residual-bound` · theorem — m-step Dobrushin certificate for a stationary probability
- `thm-one-closed-class-augmented-stationary-system-is-nonsingular` · theorem — One closed class makes the normalized stationary system nonsingular
- `thm-corrected-stationary-residual-certificate-soundness` · theorem — Termination and soundness of the corrected stationary residual certificate
- `cor-uniformized-generator-stationary-residual-certificate` · corollary — Uniformized finite-generator stationary residual certificate
- `thm-stationary-generator-solve-and-model-error-ledger` · theorem — Separate stationary solve residual from generator error

### `certified-stationary-distribution-and-hitting-statistic-numerics-examples` — Certified stationary distribution and hitting statistic numerics — Examples (5 item(s))

- `ex-xd-finite-credit-absorption-hitting-statistics` · example — Finite credit reserve: certified absorption statistics
- `ex-xd-nearly-reducible-chain-residual-and-ill-conditioning` · example — A small residual can hide a large stationary error
- `ex-xd-periodic-iteration-versus-stationarity` · example — Periodic iteration can fail while the stationary solve is well-defined
- `ex-xd-reducible-absorbing-class-weights` · example — Two absorbing classes retain initial-law-dependent weights
- `ex-xd-birth-death-uniformization-detailed-balance` · example — A three-state birth–death generator and detailed balance

### `rosenbrock-and-linearly-implicit-methods` — Rosenbrock and linearly implicit methods (17 item(s))

- `def-rosenbrock-euler-step-map` · definition — The Rosenbrock–Euler step map with an exact or approximate Jacobian
- `lem-rosenbrock-shifted-matrix-invertibility-bound` · lemma — A small shifted Jacobian has an explicit inverse bound
- `lem-rosenbrock-shifted-inverse-perturbation` · lemma — Perturbing a shifted Jacobian perturbs its inverse explicitly
- `lem-rosenbrock-stage-residual-certificate` · lemma — A computed shifted-system residual has a certified upper bound
- `alg-rosenbrock-shifted-qr-solver-with-residual-certificate` · algorithm — Reusable Householder QR solve for a shifted matrix with residual status
- `lem-rosenbrock-euler-jacobian-approximation-defect` · lemma — The one-stage update has an explicit Jacobian-approximation defect
- `prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler` · proposition — Autonomous Rosenbrock–Euler is one Newton correction of backward Euler
- `alg-rosenbrock-euler-step` · algorithm — Finite-precision Rosenbrock–Euler step with residual status
- `alg-two-stage-rosenbrock-w-method` · algorithm — Two-stage second-order Rosenbrock W-method with shared factorization
- `lem-rosenbrock-euler-local-defect-and-residual-error` · lemma — Rosenbrock–Euler has an explicit one-step defect and solve-residual allowance
- `lem-two-stage-rosenbrock-local-defect-and-residual-error` · lemma — The two-stage Rosenbrock W-method has a cubic local defect and explicit stage-residual allowance
- `prop-two-stage-rosenbrock-reuses-one-factorization-and-two-solves` · proposition — The two-stage Rosenbrock update reuses one shifted factorization for two solves
- `thm-rosenbrock-computational-steps-terminate-with-finite-work` · theorem — The Rosenbrock factorization and stage procedures terminate with finite work
- `thm-rosenbrock-euler-scalar-a-and-l-stability` · theorem — The Rosenbrock–Euler scalar stability function is A-stable exactly for gamma at least one half
- `thm-two-stage-rosenbrock-scalar-l-stability` · theorem — The selected exact-J two-stage Rosenbrock method is scalar L-stable
- `thm-rosenbrock-euler-global-first-order-error` · theorem — Rosenbrock–Euler has a first-order global error bound on a common tube
- `thm-two-stage-rosenbrock-global-order-two` · theorem — The selected two-stage Rosenbrock W-method has a second-order global error bound

### `rosenbrock-and-linearly-implicit-methods-examples` — Rosenbrock and linearly implicit methods — Examples (4 item(s))

- `cex-omitting-rosenbrock-stage-correction-loses-order-two` · counterexample — Omitting the second-stage correction destroys cubic local accuracy
- `ex-two-stage-rosenbrock-factorization-reuse` · example — Two stage right-hand sides reuse one shifted-Jacobian factorization
- `ex-rosenbrock-euler-stiff-decay-and-backward-euler` · example — Rosenbrock–Euler damps a stiff scalar decay with the backward-Euler factor
- `cex-approximate-jacobian-breaks-stiff-damping` · counterexample — A bounded approximate Jacobian can destroy Rosenbrock stiff damping

## Your seams

Your pages depend on another group's:

- `implicit-stiff-time-stepping-and-algebraic-error` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `implicit-stiff-time-stepping-and-algebraic-error` requires `global-ode-and-density-error` (group c, batch 28)
- `implicit-stiff-time-stepping-and-algebraic-error` requires `linear-multistep-methods-and-dahlquist-equivalence` (group d, batch 36)
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-generator-master-equations-and-uniformization` (group f, batch 47)
- `rosenbrock-and-linearly-implicit-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `rosenbrock-and-linearly-implicit-methods` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)

Another group's pages depend on yours:

- `differential-algebraic-equations-and-consistent-initialization` (group i) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `stable-sde-schemes-for-superlinear-drift` (group i) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `parallel-in-time-parareal-and-mgrit` (group i) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `constrained-dynamics-shake-and-rattle` (group j) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `deferred-correction-and-collocation-iterations` (group k) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `imex-and-operator-splitting-methods` (group l) requires your `implicit-stiff-time-stepping-and-algebraic-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `implicit-stiff-time-stepping-and-algebraic-error`

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
