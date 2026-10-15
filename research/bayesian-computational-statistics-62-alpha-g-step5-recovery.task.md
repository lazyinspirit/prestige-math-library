# Step 5 adjudication — group **g**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 23, 24, 25: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **23**: `research/bayesian-computational-statistics-62-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/bayesian-computational-statistics-62-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/bayesian-computational-statistics-62-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 23 | `numerical-optimization-for-statistical-computation` | A | bayesian-computational-statistics | 2086 | `posterior-propriety-and-dominated-bayes-formula`, `minimax-lower-bounds-and-information-theoretic-methods`, `matrix-differentiation-and-first-order-spectral-perturbation` |
| 23 | `numerical-optimization-for-statistical-computation-examples` | B | bayesian-computational-statistics | 2087 | `numerical-optimization-for-statistical-computation` |
| 24 | `em-algorithm-and-latent-variable-likelihood-ascent` | A | bayesian-computational-statistics | 2088 | `numerical-optimization-for-statistical-computation` |
| 24 | `em-algorithm-and-latent-variable-likelihood-ascent-examples` | B | bayesian-computational-statistics | 2089 | `em-algorithm-and-latent-variable-likelihood-ascent`, `hierarchical-bayesian-models-and-partial-pooling` |
| 25 | `variational-inference-and-evidence-lower-bound` | A | bayesian-computational-statistics | 2090 | `numerical-optimization-for-statistical-computation` |
| 25 | `variational-inference-and-evidence-lower-bound-examples` | B | bayesian-computational-statistics | 2091 | `variational-inference-and-evidence-lower-bound` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `numerical-optimization-for-statistical-computation` — Computational foundations: factorization, KL, and optimization (8 item(s))

- `def-latent-variable-joint-and-observed-data-factorization` · definition — Latent-variable joint and observed-data factorization
- `thm-kullback-leibler-is-nonnegative` · theorem — Kullback–Leibler divergence is nonnegative
- `alg-gradient-descent` · algorithm — Gradient descent
- `alg-damped-newton` · algorithm — Damped Newton method
- `thm-observed-density-is-latent-marginal-under-tonelli` · theorem — The observed density is the latent marginal under Tonelli
- `lem-armijo-backtracking-terminates-for-strict-descent-directions` · lemma — Armijo backtracking terminates for strict descent directions
- `thm-gradient-descent-rate-under-strong-convexity-and-smoothness` · theorem — Gradient descent rate under strong convexity and smoothness
- `thm-newton-local-quadratic-convergence-under-lipschitz-hessian` · theorem — Newton's method has local quadratic convergence under a Lipschitz Hessian

### `numerical-optimization-for-statistical-computation-examples` — Computational foundations: factorization, KL, and optimization — Examples (5 item(s))

- `ex-gaussian-location-kl` · example — Equal-variance Gaussian location KL
- `ex-multimodal-nonconvex-objective` · example — A multimodal nonconvex objective
- `ex-finite-mixture-latent-factorization` · example — A finite mixture latent factorization
- `ex-zero-normalizer-latent-fiber` · example — A zero-normalizer latent fiber
- `ex-strongly-convex-quadratic-gradient-descent` · example — Gradient descent on a strongly convex quadratic

### `em-algorithm-and-latent-variable-likelihood-ascent` — Latent-variable EM and likelihood ascent (4 item(s))

- `alg-expectation-maximization` · algorithm — Expectation-maximization
- `thm-em-observed-log-likelihood-is-nondecreasing` · theorem — EM does not decrease the observed log likelihood
- `thm-generalized-em-is-nondecreasing-under-q-ascent` · theorem — Generalized EM does not decrease the observed log likelihood under Q-ascent
- `rem-em-ascent-does-not-imply-global-optimality-or-convergence` · remark — Likelihood ascent alone gives no global optimality or convergence conclusion

### `em-algorithm-and-latent-variable-likelihood-ascent-examples` — Latent-variable EM and likelihood ascent — Examples (5 item(s))

- `ex-em-finite-mixture-responsibilities` · example — Responsibilities in a two-component mixture
- `ex-generalized-em-increases-q-without-maximizing` · example — A generalized EM step can increase Q without maximizing it
- `ex-em-likelihood-has-two-local-maxima` · example — An EM likelihood with two strict local maxima
- `ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse` · example — Gaussian mixture likelihood is unbounded under covariance collapse
- `ex-em-support-losing-candidate-violates-finite-kl-condition` · example — A support-losing candidate has infinite directional KL

### `variational-inference-and-evidence-lower-bound` — Variational inference and the evidence lower bound (7 item(s))

- `def-variational-family-and-elbo` · definition — Variational family and evidence lower bound
- `thm-elbo-kl-decomposition` · theorem — Evidence lower bound is log evidence minus reverse KL
- `alg-coordinate-ascent-variational-inference` · algorithm — Coordinate-ascent variational inference
- `cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance` · counterexample — Gaussian mean-field reverse KL underestimates correlated marginal variance
- `lem-admissible-product-coordinate-normalizer-is-finite` · lemma — An admissible product has a finite coordinate normalizer
- `thm-exact-coordinate-ascent-does-not-decrease-elbo` · theorem — Exact coordinate updates are monotone and finite sweeps have a call bound
- `rem-high-elbo-alone-does-not-certify-posterior-calibration` · remark — A high ELBO alone does not certify posterior calibration

### `variational-inference-and-evidence-lower-bound-examples` — Variational inference and the evidence lower bound — Examples (3 item(s))

- `ex-discrete-elbo-equality-at-exact-posterior` · example — Exact discrete variational family attains log evidence
- `ex-variational-candidate-outside-posterior-support` · example — A candidate outside posterior support is not admissible
- `ex-coordinate-update-normalizer-diverges-outside-admissibility` · example — Finite evidence and finite expected logs do not replace admissibility

## Your seams

Your pages depend on another group's:

- `numerical-optimization-for-statistical-computation` requires `posterior-propriety-and-dominated-bayes-formula` (group a, batch 5)
- `em-algorithm-and-latent-variable-likelihood-ascent-examples` requires `hierarchical-bayesian-models-and-partial-pooling` (group b, batch 8)

Another group's pages depend on yours:

- `laplace-approximation-and-marginal-integration` (group h) requires your `numerical-optimization-for-statistical-computation`
- `approximate-bayesian-computation-and-simulation-based-inference` (group h) requires your `numerical-optimization-for-statistical-computation`
- `hamiltonian-monte-carlo-and-leapfrog` (group k) requires your `numerical-optimization-for-statistical-computation`
- `langevin-monte-carlo-mala-and-ula` (group l) requires your `numerical-optimization-for-statistical-computation`
- `data-assimilation-variational-and-ensemble-methods` (group o) requires your `numerical-optimization-for-statistical-computation`
- `synthetic-likelihood-and-indirect-inference` (group s) requires your `numerical-optimization-for-statistical-computation`
- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `em-algorithm-and-latent-variable-likelihood-ascent`
- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `variational-inference-and-evidence-lower-bound`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `bayesian-computational-statistics-62`

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
