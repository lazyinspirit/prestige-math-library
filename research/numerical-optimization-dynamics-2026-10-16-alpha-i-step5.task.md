# Step 5 adjudication — group **i**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 75, 76, 77: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **75**: `research/numerical-optimization-dynamics-2026-10-16-batch-75-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/numerical-optimization-dynamics-2026-10-16-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **77**: `research/numerical-optimization-dynamics-2026-10-16-batch-77-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 75 | `differential-algebraic-equations-and-consistent-initialization` | A | numerical-differential-equations-and-stochastic-dynamics | 2434 | `nonlinear-equations-and-newton-methods`, `implicit-stiff-time-stepping-and-algebraic-error` |
| 75 | `differential-algebraic-equations-and-consistent-initialization-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2435 | `differential-algebraic-equations-and-consistent-initialization` |
| 76 | `stable-sde-schemes-for-superlinear-drift` | A | numerical-differential-equations-and-stochastic-dynamics | 2436 | `euler-maruyama-convergence`, `milstein-stochastic-taylor-and-iterated-integrals`, `implicit-stiff-time-stepping-and-algebraic-error` |
| 76 | `stable-sde-schemes-for-superlinear-drift-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2437 | `stable-sde-schemes-for-superlinear-drift` |
| 77 | `parallel-in-time-parareal-and-mgrit` | A | numerical-differential-equations-and-stochastic-dynamics | 2438 | `runge-kutta-methods-and-order`, `implicit-stiff-time-stepping-and-algebraic-error` |
| 77 | `parallel-in-time-parareal-and-mgrit-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2439 | `parallel-in-time-parareal-and-mgrit` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `differential-algebraic-equations-and-consistent-initialization` — Differential algebraic equations and consistent initialization (12 item(s))

- `def-semi-explicit-index-one-dae-and-consistent-initial-data` · definition — Semi-explicit index-one DAEs and consistent initial data
- `def-regular-differentiation-index` · definition — Differentiation index for a regular local semi-explicit DAE
- `thm-index-one-dae-implicit-function-reduction` · theorem — A regular index-one DAE has a local reduced ODE branch
- `lem-index-one-dae-algebraic-residual-to-state-error` · lemma — An index-one algebraic residual locally bounds algebraic state error
- `alg-index-one-dae-consistent-initialization` · algorithm — Finite-budget index-one DAE consistent initialization
- `alg-index-one-dae-backward-euler-stepper` · algorithm — Finite-budget coupled backward Euler for an index-one DAE
- `alg-index-one-dae-bdf2-stepper` · algorithm — Finite-budget coupled constant-step BDF2 for an index-one DAE
- `lem-index-one-dae-backward-euler-local-branch` · lemma — The coupled index-one backward-Euler equations have a local branch
- `lem-index-one-dae-bdf2-local-branch` · lemma — The coupled index-one constant-step BDF2 equations have a local branch
- `thm-index-one-dae-finite-budget-solvers-terminate` · theorem — The finite-budget index-one DAE solvers return a status in finite work
- `thm-index-one-dae-backward-euler-first-order-with-residuals` · theorem — Coupled backward Euler is first order for a regular index-one DAE
- `thm-index-one-dae-bdf2-second-order-with-residuals` · theorem — Coupled constant-step BDF2 is second order for a regular index-one DAE

### `differential-algebraic-equations-and-consistent-initialization-examples` — Differential algebraic equations and consistent initialization — Examples (3 item(s))

- `ex-index-one-circuit-consistent-initialization-and-be-step` · example — A capacitor-resistor circuit has one consistent algebraic current
- `ex-index-two-dae-algebraic-residual-does-not-control-state` · example — An index-two DAE can have zero algebraic residual and an arbitrary algebraic variable
- `ex-index-three-pendulum-by-differentiation` · example — The constrained pendulum has differentiation index three

### `stable-sde-schemes-for-superlinear-drift` — Stable sde schemes for superlinear drift (13 item(s))

- `def-locally-lipschitz-ito-sde-and-maximal-solution` · definition — Locally Lipschitz Itô SDE on an open state domain
- `lem-brownian-ito-integral-bdg-moment-bound` · lemma — Lp maximal moment bound for Brownian Itô integrals
- `alg-cir-lamperti-positive-implicit-scheme` · algorithm — Positive Lamperti drift-implicit scheme for the CIR process
- `alg-tamed-euler-superlinear-drift` · algorithm — Tamed Euler scheme for a superlinear drift
- `thm-local-sde-existence-and-uniqueness-until-exit` · theorem — Local strong existence and uniqueness up to exit for locally Lipschitz SDEs
- `lem-cir-lamperti-transform-and-positive-root` · lemma — CIR Lamperti equation and unique positive implicit root
- `lem-tamed-euler-uniform-moment-bounds` · lemma — Uniform finite-horizon moments for tamed Euler approximations
- `thm-superlinear-sde-global-existence-and-moments` · theorem — Global existence and finite-horizon moments for one-sided Lipschitz SDEs
- `alg-drift-implicit-euler-sde` · algorithm — Drift-implicit Euler–Maruyama with explicit solve-failure status
- `thm-cir-positive-solution-and-nonattainment` · theorem — CIR paths stay positive and do not explode under the Feller condition
- `thm-tamed-euler-strong-order-half` · theorem — Strong order one-half for tamed Euler under polynomial drift growth
- `thm-cir-lamperti-scheme-converges-in-probability` · theorem — Lamperti drift-implicit CIR scheme converges on finite horizons in probability
- `thm-drift-implicit-euler-sde-strong-order-half` · theorem — Strong order one-half for drift-implicit Euler–Maruyama

### `stable-sde-schemes-for-superlinear-drift-examples` — Stable sde schemes for superlinear drift — Examples (3 item(s))

- `cex-euler-moments-diverge-for-cubic-dissipative-sde` · counterexample — Explicit Euler moments diverge for a cubic dissipative SDE
- `ex-cir-lamperti-scheme-positive-root-at-boundary` · example — The CIR Lamperti step remains positive from the boundary value
- `ex-noise-induced-instability-in-explicit-em` · example — Noise destabilizes explicit Euler while drift-implicit Euler contracts

### `parallel-in-time-parareal-and-mgrit` — Parallel in time parareal and mgrit (14 item(s))

- `def-parareal-propagator-pair` · definition — Fine and coarse propagators on a common macro grid
- `alg-parareal-correction-sweeps` · algorithm — Finite-budget Parareal correction sweeps
- `def-linear-all-at-once-time-operator` · definition — The all-at-once bidiagonal time operator and C/F points
- `lem-parareal-first-k-nodes-are-fine-exact` · lemma — Parareal reproduces the first k fine-grid nodes after k sweeps
- `thm-parareal-binomial-error-bound` · theorem — A conditional binomial error bound for Parareal
- `lem-mgrit-exact-coarse-elimination` · lemma — Eliminating F-points gives the exact coarse time operator
- `thm-parareal-inexact-sweep-error-ledger` · theorem — An additive error ledger for inexact Parareal sweeps
- `alg-mgrit-two-level-cycle` · algorithm — A declared two-level MGRIT coarse-correction cycle
- `cor-parareal-continuous-target-error-decomposition` · corollary — Separate Parareal iteration error from fine-method error
- `thm-mgrit-contraction-implies-residual-and-error-decay` · theorem — A verified MGRIT error-matrix contraction controls error and residual
- `alg-mgrit-multilevel-recursive-cycle` · algorithm — Recursive multilevel MGRIT cycles
- `lem-parareal-sweep-work-and-span` · lemma — Work and idealized span of completed Parareal sweeps
- `lem-mgrit-two-level-call-counts` · lemma — Propagator call counts for the two-level MGRIT cycle
- `lem-mgrit-recursive-work-and-visits` · lemma — Finite recursion and work accounting for multilevel MGRIT

### `parallel-in-time-parareal-and-mgrit-examples` — Parallel in time parareal and mgrit — Examples (4 item(s))

- `ex-parareal-dissipative-scalar-heat-mode` · example — A dissipative scalar heat mode with Parareal correction
- `ex-parareal-oscillatory-coarse-phase-error` · example — A coarse phase mismatch can increase the Parareal error
- `ex-parareal-nonlinear-tube-escape` · example — A nonlinear Parareal iterate can leave its local Lipschitz tube
- `ex-mgrit-scalar-diffusion-two-grid-contraction` · example — A scalar diffusion mode gives an explicit two-grid MGRIT matrix

## Your seams

Your pages depend on another group's:

- `differential-algebraic-equations-and-consistent-initialization` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `differential-algebraic-equations-and-consistent-initialization` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)
- `stable-sde-schemes-for-superlinear-drift` requires `milstein-stochastic-taylor-and-iterated-integrals` (group a, batch 9)
- `stable-sde-schemes-for-superlinear-drift` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)
- `parallel-in-time-parareal-and-mgrit` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `parallel-in-time-parareal-and-mgrit` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)

Another group's pages depend on yours:

- `constrained-dynamics-shake-and-rattle` (group j) requires your `differential-algebraic-equations-and-consistent-initialization`

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
