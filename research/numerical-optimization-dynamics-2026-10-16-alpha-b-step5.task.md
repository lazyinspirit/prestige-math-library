# Step 5 adjudication — group **b**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 11, 21, 22: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **11**: `research/numerical-optimization-dynamics-2026-10-16-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/numerical-optimization-dynamics-2026-10-16-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/numerical-optimization-dynamics-2026-10-16-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 11 | `finite-bit-random-streams-and-variate-generation` | A | numerical-differential-equations-and-stochastic-dynamics | 2315.25 | `conditional-and-finite-group-exact-inference`, `probability-spaces-random-variables-and-expectation`, `outward-rounded-interval-and-ball-arithmetic`, `computed-fast-transforms-and-convolution`, `stationary-markov-chains-and-ergodic-limits` |
| 11 | `finite-bit-random-streams-and-variate-generation-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2315.5 | `finite-bit-random-streams-and-variate-generation` |
| 21 | `numerical-boundary-value-problems` | A | numerical-differential-equations-and-stochastic-dynamics | 2326 | `darboux-lhopital-and-taylor` |
| 21 | `numerical-boundary-value-problems-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2327 | `numerical-boundary-value-problems` |
| 22 | `nonlinear-boundary-value-solvers` | A | numerical-differential-equations-and-stochastic-dynamics | 2328 | `picard-lindelof-and-first-order-odes`, `nonlinear-equations-and-newton-methods` |
| 22 | `nonlinear-boundary-value-solvers-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2329 | `nonlinear-boundary-value-solvers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-bit-random-streams-and-variate-generation` — Finite bit random streams and variate generation (18 item(s))

- `alg-linear-congruential-generator-mod-power-of-two` · algorithm — Linear congruential generator modulo a power of two
- `alg-counter-based-keyed-permutation-stream` · algorithm — Counter stream from a keyed finite permutation
- `thm-finite-state-streams-eventually-periodic` · theorem — Every deterministic finite-state stream is eventually periodic
- `thm-independent-fair-bit-streams-produce-uniforms` · theorem — Disjoint streams of independent fair bits produce independent uniform variables
- `lem-generalized-inverse-sublevel-identity` · lemma — Generalized inverse sublevel identity for a CDF
- `lem-box-muller-product-density-and-radius-moment` · lemma — Box–Muller has a product Gaussian density and Rayleigh second moment
- `thm-midpoint-bit-stream-coupling-and-error` · theorem — Midpoint bit discretization has bounded coupling and CDF error
- `thm-lcg-full-period-and-adjacent-dependence` · theorem — The power-of-two mixed LCG has full period but dependent adjacent states
- `lem-counter-based-keyed-stream-no-reuse` · lemma — A keyed permutation stream does not reuse outputs before its counter interval ends
- `alg-rational-bernoulli-rejection-from-fair-bits` · algorithm — Unbiased rational Bernoulli sampling by bit rejection
- `alg-finite-categorical-inverse-cdf` · algorithm — Finite categorical sampling by inverse CDF and binary search
- `alg-certified-bracketed-cdf-inversion` · algorithm — Certified bracketed bisection for a continuous CDF
- `cor-box-muller-from-independent-bits-gives-standard-normals` · corollary — Disjoint ideal fair-bit streams yield independent standard normals by Box–Muller
- `thm-rational-bernoulli-rejection-law-and-cost` · theorem — Rational Bernoulli rejection has exact law, geometric failure, and bounded expected bit cost
- `thm-finite-categorical-midpoint-count-bound` · theorem — Midpoint categorical frequencies have at most one-grid-cell error
- `thm-certified-bracketed-inverse-error` · theorem — Certified bisection controls CDF residual, spatial error, and distribution error
- `alg-box-muller-finite-bit-transform` · algorithm — Finite-bit Box–Muller with certified elementary-function evaluators
- `thm-box-muller-finite-bit-coupling-error` · theorem — Certified finite-bit Box–Muller has explicit BL and W1 error

### `finite-bit-random-streams-and-variate-generation-examples` — Finite bit random streams and variate generation — Examples (4 item(s))

- `ex-lcg-low-bit-alternation` · example — A full-period LCG can alternate its low bit
- `ex-box-muller-finite-midpoint-tail` · example — Eight-bit Box–Muller has a finite radial cutoff
- `ex-box-muller-zero-endpoint` · example — A raw zero uniform breaks Box–Muller but the midpoint avoids it
- `ex-inverse-cdf-near-zero-density` · example — A vanishing density prevents a uniform spatial inverse bound

### `numerical-boundary-value-problems` — Linear numerical boundary-value problems (4 item(s))

- `alg-centered-difference-dirichlet-bvp` · algorithm — Centered finite differences for the zero-Dirichlet boundary-value problem
- `lem-centered-difference-dirichlet-inverse-maxnorm` · lemma — Discrete maximum principle and uniform inverse bound for the Dirichlet stencil
- `lem-centered-difference-dirichlet-truncation-residual` · lemma — Centered-difference residual bound with exact Dirichlet closure
- `thm-centered-difference-dirichlet-second-order-error` · theorem — Second-order max-norm error for the centered Dirichlet scheme

### `numerical-boundary-value-problems-examples` — Linear numerical boundary-value problems — Examples (3 item(s))

- `ex-centered-difference-dirichlet-quadratic-exact` · example — The quadratic Dirichlet solution is represented exactly
- `ex-first-order-neumann-closure-causes-first-order-bvp-error` · example — A first-order Neumann closure limits the global rate
- `ex-dirichlet-inverse-infinity-norm-tight-at-n3` · example — The inverse infinity row-sum bound is uniform and sharp

### `nonlinear-boundary-value-solvers` — Nonlinear boundary-value solvers (18 item(s))

- `def-nonlinear-two-point-bvp-and-boundary-residual` · definition — Square nonlinear two-point boundary-value problems and endpoint residuals
- `lem-c1-ode-flow-on-common-tube` · lemma — Initial-data sensitivity of an ODE flow on a common compact tube
- `def-certified-ivp-approximation-and-sensitivity-interface` · definition — Certified differentiable IVP approximation interface for shooting
- `def-linearized-two-point-bvp-operator-and-conditioning` · definition — Continuous linearized BVP operator and its conditioning
- `def-midpoint-collocation-residual-for-bvps` · definition — Normalized implicit-midpoint collocation residual for a two-point BVP
- `prop-multiple-shooting-residual-zero-iff-bvp-solution` · proposition — Zeros of the exact multiple-shooting residual are exactly BVP solutions
- `prop-shooting-residual-zero-iff-bvp-solution` · proposition — Zeros of the exact shooting residual are exactly BVP solutions
- `alg-midpoint-collocation-for-nonlinear-bvps` · algorithm — Finite-budget implicit-midpoint collocation for a nonlinear BVP
- `lem-midpoint-bvp-discrete-linearized-inverse` · lemma — Uniform inverse bound for the sampled midpoint linearized BVP
- `prop-midpoint-residual-zero-is-collocation` · proposition — Zeros of the normalized midpoint residual are precisely midpoint collocation solutions
- `prop-multiple-shooting-residual-block-jacobian` · proposition — The multiple-shooting Jacobian is bordered block-bidiagonal
- `prop-shooting-residual-derivative` · proposition — Derivative of the nonlinear shooting residual
- `alg-multiple-shooting-for-nonlinear-bvps` · algorithm — Finite-budget multiple shooting for a nonlinear two-point BVP
- `alg-single-shooting-for-nonlinear-bvps` · algorithm — Finite-budget single shooting for a nonlinear two-point BVP
- `thm-midpoint-collocation-local-branch-and-error-budget` · theorem — Local second-order midpoint collocation error with an algebraic residual budget
- `cor-local-newton-convergence-for-midpoint-bvp-collocation` · corollary — Local Newton convergence on the selected midpoint collocation branch
- `cor-local-newton-convergence-for-shooting-bvp-residual` · corollary — Local Newton convergence for a simple nonlinear shooting root
- `thm-shooting-residual-error-budget` · theorem — Shooting error separates IVP integration and nonlinear residual error

### `nonlinear-boundary-value-solvers-examples` — Nonlinear boundary-value solvers — Examples (3 item(s))

- `ex-midpoint-collocation-has-two-branches` · example — A midpoint BVP residual can have two simple solution branches
- `ex-unstable-single-shooting-amplifies-error` · example — Single shooting amplifies an initial-slope error on a decaying-mode BVP
- `ex-newton-shooting-fails-from-singular-start` · example — A valid shooting BVP can fail Newton at a singular initial guess

## Your seams

Your pages depend on another group's:

- `finite-bit-random-streams-and-variate-generation` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `finite-bit-random-streams-and-variate-generation` requires `computed-fast-transforms-and-convolution` (group n, batch 15)
- `nonlinear-boundary-value-solvers` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)

Another group's pages depend on yours:

- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `nonlinear-boundary-value-solvers`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `nonlinear-boundary-value-solvers`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `nonlinear-boundary-value-solvers`

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
