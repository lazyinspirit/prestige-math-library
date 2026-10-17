# Step 5 adjudication — group **e**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 42, 44, 45: 3 A/B pair(s), 6 page(s), 57 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **42**: `research/numerical-optimization-dynamics-2026-10-16-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/numerical-optimization-dynamics-2026-10-16-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/numerical-optimization-dynamics-2026-10-16-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 42 | `local-bifurcation-normal-forms-and-numerical-certificates` | A | numerical-differential-equations-and-stochastic-dynamics | 2368 | `the-inverse-function-theorem-completed`, `pseudo-arclength-continuation-and-fold-certificates`, `codimension-one-foliations-and-secondary-classes` |
| 42 | `local-bifurcation-normal-forms-and-numerical-certificates-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2369 | `local-bifurcation-normal-forms-and-numerical-certificates` |
| 44 | `delay-differential-equations-and-history-discretization` | A | numerical-differential-equations-and-stochastic-dynamics | 2372 | `global-ode-and-density-error`, `normed-and-banach-spaces` |
| 44 | `delay-differential-equations-and-history-discretization-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2373 | `delay-differential-equations-and-history-discretization` |
| 45 | `fractional-evolution-and-convolution-quadrature` | A | numerical-differential-equations-and-stochastic-dynamics | 2374 | `composite-quadrature-rules`, `conformal-mapping-branches-and-the-schwarz-lemma` |
| 45 | `fractional-evolution-and-convolution-quadrature-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2375 | `fractional-evolution-and-convolution-quadrature` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `local-bifurcation-normal-forms-and-numerical-certificates` — Local bifurcation normal forms and numerical certificates (14 item(s))

- `def-hopf-normal-form-data` · definition — Hopf spectral and multilinear normal-form data
- `def-hopf-weighted-trajectory-space` · definition — Weighted trajectory space for a local center-manifold construction
- `lem-characteristic-roots-stay-in-separated-neighborhoods` · lemma — Characteristic roots preserve separated cluster counts under matrix perturbation
- `lem-hopf-smooth-eigenpair-branch` · lemma — A simple eigenpair has a regularity-matched gauge-fixed parameter branch
- `def-local-periodic-orbit-poincare-and-floquet-data` · definition — Local periodic-orbit, Poincare-return, and Floquet data
- `thm-hyperbolic-local-map-stability` · theorem — A hyperbolic fixed point of a local map is stable exactly when all multipliers contract
- `lem-hopf-weighted-trajectory-space-is-banach` · lemma — The weighted trajectory space is complete
- `alg-validate-local-hopf-certificate` · algorithm — Validate a proof-carrying local Hopf certificate
- `thm-poincare-map-stability-implies-orbital-stability` · theorem — Hyperbolic return-map stability is orbital stability
- `lem-local-center-manifold-for-a-simple-hopf-point` · lemma — A parameterized C5 center manifold exists at a simple Hopf spectral split
- `lem-hopf-first-lyapunov-coefficient-from-multilinear-data` · lemma — The first Lyapunov coefficient is the resonant cubic Hopf coefficient
- `thm-scalar-fold-transcritical-pitchfork-local-normal-forms` · theorem — Scalar fold, transcritical, and symmetric pitchfork equilibrium branches
- `thm-hopf-local-branch-and-stability` · theorem — A simple nondegenerate Hopf point creates a local periodic branch
- `thm-local-hopf-certificate-is-sound` · theorem — A certified interval Hopf record verifies only the local Hopf hypotheses

### `local-bifurcation-normal-forms-and-numerical-certificates-examples` — Local bifurcation normal forms and numerical certificates — Examples (5 item(s))

- `ex-degenerate-hopf-with-zero-lyapunov-coefficient` · example — An imaginary eigenvalue crossing with zero Lyapunov coefficient
- `ex-hopf-interval-enclosure-containing-zero` · example — An interval containing zero makes a Hopf certificate inconclusive
- `ex-pitchfork-symmetry-breaking-unfolding` · example — A constant imperfection removes the pitchfork's trivial branch
- `ex-supercritical-hopf-cubic-normal-form` · example — A supercritical planar cubic Hopf bifurcation
- `ex-subcritical-hopf-cubic-normal-form` · example — A subcritical planar cubic Hopf bifurcation

### `delay-differential-equations-and-history-discretization` — Delay differential equations and history discretization (15 item(s))

- `def-retarded-delay-equation-and-history-space` · definition — Retarded delay equations and their history space
- `lem-delay-history-space-is-banach` · lemma — The continuous delay-history space is Banach
- `lem-retarded-delay-gronwall-bound` · lemma — A Gronwall bound for retarded-delay inequalities
- `thm-retarded-delay-method-of-steps-well-posedness` · theorem — Method of steps gives a unique retarded-delay solution
- `alg-retarded-delay-euler-with-stored-history` · algorithm — Explicit Euler with a stored piecewise-linear delay history
- `lem-piecewise-linear-delay-history-error` · lemma — Error bound for piecewise-linear stored delay histories
- `thm-retarded-delay-euler-first-order-global-error` · theorem — Grid-aligned Euler has first-order error for retarded delays
- `def-scalar-neutral-delay-equation-and-segment-shift` · definition — Scalar neutral delay equations and the derivative-segment shift
- `thm-neutral-delay-method-of-steps-well-posedness` · theorem — Method of steps gives a unique compatible neutral-delay solution
- `lem-neutral-delay-shift-neumann-inverse` · lemma — The neutral derivative shift has a bounded Neumann inverse when $|a|<1$
- `alg-neutral-delay-euler-compatible-grid` · algorithm — Explicit Euler for a scalar neutral delay on a compatible grid
- `thm-neutral-delay-euler-first-order-error` · theorem — Compatible-grid Euler has first-order solution and derivative error for a stable neutral delay
- `def-distributed-delay-equation-and-window-integral` · definition — Distributed delays through a finite-window history integral
- `alg-distributed-delay-composite-midpoint-rule` · algorithm — Composite midpoint quadrature for a distributed delay history
- `lem-distributed-delay-midpoint-error-split` · lemma — Distributed-delay midpoint error separates history and quadrature errors

### `delay-differential-equations-and-history-discretization-examples` — Delay differential equations and history discretization — Examples (4 item(s))

- `ex-retarded-delayed-feedback-euler` · example — Delayed feedback gives an explicit two-block Euler recurrence
- `ex-rk4-delay-breakpoint-local-order-loss` · example — A breakpoint-crossing RK4 step has a second-order defect
- `ex-neutral-delay-derivative-amplification` · example — Neutral derivative feedback amplifies outside the stable branch
- `ex-distributed-delay-midpoint-history-error` · example — Distributed-delay midpoint quadrature separates two history errors

### `fractional-evolution-and-convolution-quadrature` — Fractional evolution and convolution quadrature (16 item(s))

- `lem-fractional-integral-kernel-power-integral` · lemma — Integral of the fractional power kernel
- `def-caputo-derivative-and-fractional-integral` · definition — Fractional integral and Caputo derivative
- `lem-continuous-fractional-integral-is-holder` · lemma — Fractional integrals of continuous data are Hölder continuous
- `lem-fractional-integral-semigroup` · lemma — Semigroup law for fractional integrals
- `alg-uniform-and-graded-grid-l1` · algorithm — Uniform-grid and graded-grid L1 discretization
- `alg-backward-euler-convolution-quadrature` · algorithm — Backward-Euler convolution quadrature for a Caputo equation
- `lem-backward-euler-cq-principal-branch-generating-function` · lemma — Principal-branch generating function for backward-Euler convolution quadrature
- `lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions` · lemma — Caputo and Volterra formulations are equivalent for absolutely continuous solutions
- `lem-l1-positive-weights-and-discrete-comparison` · lemma — Positive L1 weights, discrete comparison, and residual stability
- `lem-weakly-singular-fractional-gronwall` · lemma — Weakly singular fractional Grönwall inequality
- `lem-backward-euler-cq-weights-and-partial-sums` · lemma — Backward-Euler fractional weights and positive partial sums
- `thm-lipschitz-local-existence-for-caputo-volterra-equation` · theorem — A local Lipschitz existence theorem for the Caputo Volterra equation
- `thm-l1-stability-and-smooth-data-error` · theorem — L1 stability and the smooth-data error bound
- `lem-cq-quadratic-generating-coefficient-estimate` · lemma — Generating-coefficient estimate for the quadratic CQ datum
- `thm-backward-euler-cq-scalar-resolvent-stability` · theorem — Scalar resolvent stability for backward-Euler convolution quadrature
- `thm-backward-euler-cq-compatible-quadratic-first-order-error` · theorem — First-order CQ error for a compatible quadratic datum

### `fractional-evolution-and-convolution-quadrature-examples` — Fractional evolution and convolution quadrature — Examples (3 item(s))

- `ex-l1-and-cq-fractional-relaxation-first-step` · example — First steps for a scalar fractional relaxation
- `ex-l1-full-history-cost-and-truncation-bias` · example — Full-history cost and the bias from truncating memory
- `ex-caputo-startup-singularity-and-graded-grid` · example — A Caputo startup singularity and a graded-grid calculation

## Your seams

Your pages depend on another group's:

- `local-bifurcation-normal-forms-and-numerical-certificates` requires `pseudo-arclength-continuation-and-fold-certificates` (group c, batch 29)
- `delay-differential-equations-and-history-discretization` requires `global-ode-and-density-error` (group c, batch 28)
- `fractional-evolution-and-convolution-quadrature` requires `composite-quadrature-rules` (group p, batch 20)

Another group's pages depend on yours:

- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `local-bifurcation-normal-forms-and-numerical-certificates`

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
