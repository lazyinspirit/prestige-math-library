# Step 5 adjudication — group **q**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 50, 51, 52: 3 A/B pair(s), 6 page(s), 77 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **50**: `research/machine-learning-all-101-2026-10-19-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/machine-learning-all-101-2026-10-19-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **52**: `research/machine-learning-all-101-2026-10-19-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 50 | `wasserstein-metric-and-continuity-equation` | A | machine-learning | 2667.5 | `conditional-distributions-and-regular-conditional-probability`, `hilbert-space-geometry-and-riesz-representation`, `measures-and-their-basic-properties`, `probability-spaces-random-variables-and-expectation`, `weak-convergence-tightness-and-representation`, `detection-and-quantification-limits`, `finite-window-spatial-point-process-likelihoods` |
| 50 | `wasserstein-metric-and-continuity-equation-examples` | B | machine-learning | 2874 | `wasserstein-metric-and-continuity-equation` |
| 51 | `wasserstein-gradient-flow-existence-and-stability` | A | machine-learning | 2793 | `banach-valued-integration-and-the-radon-nikodym-property`, `hilbert-space-geometry-and-riesz-representation`, `wasserstein-metric-and-continuity-equation` |
| 51 | `wasserstein-gradient-flow-existence-and-stability-examples` | B | machine-learning | 2875 | `wasserstein-gradient-flow-existence-and-stability`, `logarithmic-potential-capacity-and-riesz-decomposition` |
| 52 | `mean-field-training-and-feature-learning` | A | machine-learning | 2794 | `banach-valued-integration-and-the-radon-nikodym-property`, `feedforward-networks-and-universal-approximation`, `hilbert-space-geometry-and-riesz-representation`, `homology-axioms-degree-and-classical-applications`, `prediction-problems-risks-and-empirical-minimization`, `probability-spaces-random-variables-and-expectation`, `wasserstein-gradient-flow-existence-and-stability`, `measures-and-their-basic-properties`, `signed-and-complex-measures-hahn-and-jordan`, `the-lebesgue-integral-and-the-convergence-theorems`, `ascoli-arzela` |
| 52 | `mean-field-training-and-feature-learning-examples` | B | machine-learning | 2876 | `mean-field-training-and-feature-learning` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `wasserstein-metric-and-continuity-equation` — Wasserstein metric and continuity-equation foundations (19 item(s))

- `def-wasserstein-two-space-and-couplings` · definition — The Euclidean quadratic Wasserstein space
- `def-ac2-curves-in-wasserstein-two` · definition — Absolutely continuous curves of order two in Wasserstein space
- `lem-spacetime-law-of-a-narrow-probability-curve` · lemma — A narrow probability curve defines its space-time measure
- `def-continuity-equation-with-finite-action` · definition — Finite-action continuity equation in Euclidean space
- `lem-wasserstein-gluing` · lemma — Gluing two Euclidean couplings
- `prop-existence-and-lower-semicontinuity-of-optimal-couplings` · proposition — Optimal quadratic couplings exist and their cost is weakly lower semicontinuous
- `thm-wasserstein-two-is-a-metric` · theorem — The quadratic Wasserstein distance is a metric
- `thm-wasserstein-two-is-complete` · theorem — The quadratic Wasserstein space is complete
- `thm-wasserstein-two-metric-topology` · theorem — The topology of W2 is narrow convergence plus uniform second-moment tails
- `thm-metric-derivative-of-ac2-wasserstein-curves` · theorem — Metric derivatives of AC2 Wasserstein curves
- `lem-gaussian-regularization-of-continuity-equation` · lemma — Gaussian regularization preserves finite-action continuity equations
- `lem-lower-semicontinuity-of-path-quadratic-energy` · lemma — Quadratic path energy is lower semicontinuous
- `lem-smooth-unit-mass-compact-bump-on-euclidean-space` · lemma — Euclidean spaces admit a smooth compactly supported unit-mass bump
- `lem-smooth-compact-tests-dense-in-finite-radon-l2` · lemma — Smooth compactly supported tests are dense for finite Radon L2 measures
- `lem-carath-ode-flow-with-integrable-local-bounds` · lemma — Local flows for time-measurable fields with integrable local bounds
- `lem-regularized-continuity-equation-has-characteristic-flow` · lemma — Regularized continuity equations are represented by characteristic flows
- `thm-superposition-for-finite-action-continuity-equations` · theorem — Superposition for finite-action Euclidean continuity equations
- `thm-continuity-equation-implies-ac2` · theorem — Finite-action continuity equations generate AC2 Wasserstein curves
- `thm-ac2-curve-admits-minimal-velocity` · theorem — AC2 curves admit a unique minimum-action velocity field

### `wasserstein-metric-and-continuity-equation-examples` — Wasserstein metric and continuity-equation foundations — Examples (2 item(s))

- `ex-wasserstein-translation-of-a-dirac-mass` · example — Translation of a Dirac mass
- `ex-isotropic-gaussian-wasserstein-geodesic` · example — An isotropic Gaussian Wasserstein geodesic

### `wasserstein-gradient-flow-existence-and-stability` — Existence, uniqueness, and stability of Wasserstein gradient flows (19 item(s))

- `def-feature-measure-energy` · definition — Feature-measure energy and its regularity assumptions
- `lem-label-l2-space-is-separable-hilbert` · lemma — A Euclidean probability label space gives a separable Hilbert L2 space
- `lem-bochner-time-l2-is-separable-hilbert` · lemma — Bochner L2 on a finite interval is a separable Hilbert space
- `lem-hilbert-valued-path-energy-characterization` · lemma — Finite partition energy yields Hilbert-valued AC2 paths
- `def-localized-hilbert-lift` · definition — Localized Hilbert lift of the feature energy
- `thm-semiconvex-hilbert-gradient-flow` · theorem — A lower-bounded semiconvex Hilbert energy generates a unique gradient flow
- `lem-lifted-energy-lipschitz-gradient` · lemma — The localized lifted feature energy is semiconvex
- `lem-localized-lift-subdifferential` · lemma — The localized lifted subdifferential is a pointwise constrained subdifferential
- `def-generalized-wasserstein-geodesic-and-strong-subgradient` · definition — Generalized W2 geodesics and strong Wasserstein subgradients
- `def-wasserstein-gradient-flow-for-feature-energy` · definition — Wasserstein gradient flow for a feature-measure energy
- `lem-feature-energy-geodesically-semiconvex` · lemma — The localized feature energy is semiconvex along generalized geodesics
- `lem-characteristics-unique-and-stable` · lemma — One-sided semiconvex characteristics give W2 uniqueness and stability
- `lem-w2-distance-derivative-under-a-continuity-equation` · lemma — Derivative of squared W2 distance along a finite-action continuity equation
- `lem-feature-energy-strong-wasserstein-subgradient` · lemma — The selected pointwise field is a strong Wasserstein subgradient
- `lem-localized-lift-generates-continuity-equation` · lemma — The Hilbert lift induces the localized Wasserstein continuity equation
- `thm-localized-wasserstein-flow` · theorem — The localized Wasserstein gradient flow exists, satisfies EVI, and is unique
- `lem-feature-flow-escape-bound` · lemma — The localized flow cannot escape all cutoffs in finite time
- `thm-global-wasserstein-flow-existence-uniqueness-and-stability` · theorem — The global Wasserstein gradient flow exists uniquely and is stable
- `thm-finite-particle-flows-converge-in-w2` · theorem — Finite-particle flows converge to the measure-valued flow in W2

### `wasserstein-gradient-flow-existence-and-stability-examples` — Existence, uniqueness, and stability of Wasserstein gradient flows — Examples (3 item(s))

- `ex-separated-and-nonseparated-initialization` · example — Separated and nonseparated initial supports
- `ex-mixture-convexity-not-displacement-convex` · example — Mixture convexity does not imply displacement convexity
- `ex-quadratic-feature-energy-flow` · example — Exact quadratic feature-energy flow and particle limit

### `mean-field-training-and-feature-learning` — Mean-field training and feature learning (31 item(s))

- `lem-bounded-domain-degree-properties` · lemma — Properties of bounded-domain degree
- `lem-partial-negative-weight-crossing-time` · lemma — Correct finite-time bound for partial-homogeneity zero crossing
- `lem-pushforward-support-is-closure-of-image` · lemma — Support of a continuous pushforward is the image closure
- `def-bounded-domain-degree-from-relative-homology` · definition — Bounded-domain degree from relative homology
- `def-partial-one-homogeneous-measure-projection` · definition — Partially one-homogeneous signed measure projection
- `def-two-homogeneous-measure-projection` · definition — Two-homogeneous measure projection
- `lem-feature-energy-continuous-under-w2-on-a-common-cutoff` · lemma — Feature energy is W2-continuous on a common cutoff
- `lem-mean-field-first-variation-and-measure-optimality` · lemma — First variation and optimality over nonnegative measures
- `lem-partial-energy-continuous-under-w2` · lemma — Partial one-homogeneous energy is continuous under W2 convergence
- `def-partial-homogeneous-relaxed-objective` · definition — Relaxed objective for a partially one-homogeneous projection
- `def-signed-square-relu-feature-map` · definition — Signed-square ReLU feature parameterization
- `lem-mean-field-projection-identities` · lemma — Feature and energy identities for homogeneous projections
- `lem-w2-convergence-implies-homogeneous-projection-convergence` · lemma — W2 convergence implies weak convergence of homogeneous projections
- `lem-partial-relaxed-objective-signwise-optimality` · lemma — Signwise first-variation conditions minimize the relaxed objective
- `def-one-hidden-layer-particle-measure-model` · definition — One-hidden-layer particle-measure model
- `lem-flow-preserves-box-separation` · lemma — Partial-homogeneity flows preserve box separation
- `lem-flow-preserves-spherical-separation` · lemma — A homogeneous flow preserves spherical support separation
- `lem-partial-homogeneous-escape-from-nonoptimal-projection` · lemma — Nonoptimal partial projections have an escaping sign branch
- `lem-partial-homogeneous-projection-limit-is-stationary` · lemma — Stationarity of a partially homogeneous signed projection limit
- `lem-two-homogeneous-projection-limit-is-stationary` · lemma — A weak two-homogeneous projection limit is stationary on its support
- `lem-two-homogeneous-escape-from-nonoptimal-projection` · lemma — Negative regular sublevels force two-homogeneous projection escape
- `thm-mean-field-particle-time-limits-interchange` · theorem — Particle number and training time limits interchange qualitatively
- `thm-partial-homogeneous-projected-limit-is-global-minimizer` · theorem — A partially homogeneous signed projection limit is a minimizer
- `cor-partial-homogeneous-wasserstein-limit-is-global-minimizer` · corollary — A W2 limit in the partial one-homogeneous case is globally minimizing
- `thm-two-homogeneous-projected-limit-is-global-minimizer` · theorem — A separating two-homogeneous flow has globally minimizing projection limits
- `cor-two-homogeneous-wasserstein-limit-is-global-minimizer` · corollary — A W2 limit in the two-homogeneous case is globally minimizing
- `lem-partial-feature-flow-moment-and-energy-identities` · lemma — Partial feature flows have exact energy and weight-moment identities
- `lem-partial-homogeneous-negative-level-trapping` · lemma — Negative partial-homogeneity levels trap all sufficiently close forcings
- `lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses` · lemma — The full global partial-model hypotheses force a constant penalty coefficient
- `lem-signed-narrow-convergence-controls-bochner-moments` · lemma — Signed narrow convergence controls variation tails and Bochner moments
- `lem-partial-homogeneous-projection-limit-has-convergent-penalty` · lemma — A partial signed projection limit has convergent penalty and energy

### `mean-field-training-and-feature-learning-examples` — Mean-field training and feature learning — Examples (3 item(s))

- `ex-single-particle-initialization-does-not-separate` · example — A single particle does not separate two spheres
- `ex-moving-features-versus-fixed-features` · example — Moving features can represent a target missed by a fixed feature
- `cex-signed-square-relu-differential-is-not-locally-lipschitz` · counterexample — The signed-square ReLU differential need not be locally Lipschitz

## Your seams

Your pages depend on another group's:

- `mean-field-training-and-feature-learning` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `mean-field-training-and-feature-learning` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)

Another group's pages depend on yours:

- `gaussian-smoothing-densities-scores-and-endpoint-limits` (group ah) requires your `wasserstein-metric-and-continuity-equation`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

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
