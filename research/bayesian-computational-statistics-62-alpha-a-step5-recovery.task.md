# Step 5 adjudication — group **a**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 5, 6, 7: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **5**: `research/bayesian-computational-statistics-62-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/bayesian-computational-statistics-62-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **7**: `research/bayesian-computational-statistics-62-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 5 | `posterior-propriety-and-dominated-bayes-formula` | A | bayesian-computational-statistics | 2050 | `bayesian-models-priors-and-posterior-laws`, `dominated-experiments-likelihood-and-sufficiency` |
| 5 | `posterior-propriety-and-dominated-bayes-formula-examples` | B | bayesian-computational-statistics | 2051 | `posterior-propriety-and-dominated-bayes-formula` |
| 6 | `conjugate-families-and-posterior-prediction` | A | bayesian-computational-statistics | 2052 | `posterior-propriety-and-dominated-bayes-formula`, `complete-sufficiency-exponential-families-and-basu`, `central-limit-theorems`, `mixed-effects-and-longitudinal-models`, `poisson-and-cox-point-process-models` |
| 6 | `conjugate-families-and-posterior-prediction-examples` | B | bayesian-computational-statistics | 2053 | `conjugate-families-and-posterior-prediction` |
| 7 | `posterior-prediction-and-bayesian-decision` | A | bayesian-computational-statistics | 2054 | `posterior-propriety-and-dominated-bayes-formula`, `losses-risk-and-decision-rules` |
| 7 | `posterior-prediction-and-bayesian-decision-examples` | B | bayesian-computational-statistics | 2055 | `posterior-prediction-and-bayesian-decision` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `posterior-propriety-and-dominated-bayes-formula` — Posterior propriety and dominated Bayes formula (2 item(s))

- `def-posterior-evidence-normalizer-and-fiberwise-update` · definition — Evidence normalizer and fiberwise posterior update
- `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence` · proposition — Fiberwise posterior propriety is equivalent to finite positive evidence

### `posterior-propriety-and-dominated-bayes-formula-examples` — Posterior propriety and dominated Bayes formula — Examples (4 item(s))

- `ex-valid-finite-evidence-and-normalized-update` · example — A finite model with positive finite evidence
- `ex-prior-predictive-null-fiber` · example — A prior-predictive null fiber has no quotient posterior
- `ex-flat-prior-normal-mean-proper-posterior` · example — A flat prior gives a proper known-variance normal-mean posterior
- `ex-improper-beta-zero-zero-endpoint-divergence` · example — The improper Beta(0,0) prior has a divergent binomial endpoint posterior

### `conjugate-families-and-posterior-prediction` — Conjugate families and Gaussian conditioning (21 item(s))

- `lem-beta-density-normalization` · lemma — The Beta density has finite positive Lebesgue integral
- `lem-binomial-count-law` · lemma — The Binomial count has its usual probability mass function
- `lem-gamma-density-normalization` · lemma — The shape-rate Gamma density is normalized
- `def-poisson-law` · definition — Exposure-parameterized Poisson law
- `def-exponential-conjugate-prior-family` · definition — Conjugate-form prior for an exponential family
- `lem-finite-euclidean-space-is-standard-borel` · lemma — Finite-dimensional Euclidean space with its Borel sigma-algebra is standard Borel
- `def-dirichlet-density-kernel` · definition — Dirichlet simplex density kernel
- `lem-multinomial-law-normalization` · lemma — The Multinomial mass function is normalized
- `thm-multivariate-normal-conditional-law` · theorem — Conditional law of a jointly Gaussian block with positive-definite observed covariance
- `thm-iid-exponential-family-statistic-is-sufficient` · theorem — The sum of exponential-family statistics is sufficient for an IID sample
- `def-beta-distribution` · definition — Beta distribution
- `def-gamma-distribution-shape-rate` · definition — Shape-rate Gamma distribution
- `thm-dirichlet-density-normalization` · theorem — Dirichlet density normalization by iterated Beta integrals
- `def-multinomial-distribution` · definition — Multinomial distribution
- `def-dirichlet-distribution` · definition — Dirichlet distribution, including the one-category case
- `thm-beta-binomial-conjugate-update` · theorem — Beta-Binomial conjugate update
- `thm-gamma-poisson-exposure-adjusted-update` · theorem — Exposure-adjusted Gamma-Poisson conjugate update
- `thm-exponential-family-conjugate-update` · theorem — Conjugate update for an exponential-family likelihood
- `thm-dirichlet-multinomial-conjugate-update` · theorem — Dirichlet-Multinomial conjugate update
- `lem-normal-location-scale-density` · lemma — A positive-variance normal law has its location-scale density
- `thm-normal-normal-conjugate-update` · theorem — Known-variance Normal-Normal conjugate update

### `conjugate-families-and-posterior-prediction-examples` — Conjugate families and Gaussian conditioning — Examples (5 item(s))

- `ex-multivariate-normal-conditioning-singular-state` · example — Gaussian conditioning with singular state covariance
- `ex-beta-binomial-update` · example — A Beta(2,3) prior updated by five Bernoulli trials
- `ex-exposure-gamma-poisson-update` · example — Gamma-Poisson updating with a zero exposure
- `ex-normal-normal-conjugate-update` · example — Normal precision pooling with two observations
- `ex-dirichlet-multinomial-update` · example — A three-category Dirichlet-Multinomial update

### `posterior-prediction-and-bayesian-decision` — Posterior prediction, credible sets, and Bayes actions (12 item(s))

- `def-posterior-predictive-law` · definition — Posterior-predictive probability kernel
- `thm-posterior-predictive-mixture-is-a-kernel` · theorem — A posterior mixture of future kernels is a probability kernel
- `thm-posterior-predictive-moment-decomposition` · theorem — Posterior-predictive mean and variance decomposition
- `def-posterior-credible-set` · definition — Posterior credible set
- `lem-measurable-posterior-quantile-and-cdf-bracketing` · lemma — Posterior quantiles are measurable and bracket their probability level
- `thm-central-posterior-quantile-interval-is-credible` · theorem — Equal-tailed posterior quantile intervals are credible
- `def-posterior-median` · definition — Posterior median
- `lem-lower-posterior-median-is-measurable` · lemma — The lower posterior median is a measurable rule
- `def-posterior-risk-and-bayes-action` · definition — Finite posterior risk and Bayes action rule
- `thm-posterior-mean-is-squared-error-bayes-action` · theorem — Under AC, the finite-second-moment posterior mean uniquely minimizes squared risk
- `thm-posterior-median-minimizes-absolute-risk` · theorem — Every posterior median minimizes absolute risk when the first absolute moment is finite
- `thm-finite-class-maximal-mass-is-zero-one-bayes-action` · theorem — A maximal-mass action is Bayes under finite-class zero–one loss

### `posterior-prediction-and-bayesian-decision-examples` — Posterior prediction, credible sets, and Bayes actions — Examples (5 item(s))

- `ex-posterior-predictive-mixture-adds-parameter-uncertainty` · example — Posterior prediction adds parameter uncertainty to future sampling variation
- `ex-asymmetric-loss-changes-the-posterior-optimal-action` · example — Asymmetric loss can change the posterior-optimal action
- `ex-posterior-median-can-be-nonunique` · example — A posterior median need not be unique
- `ex-continuous-density-mode-under-zero-one-loss` · example — A continuous density mode need not distinguish exact zero–one actions
- `ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage` · example — Posterior credibility does not ensure nominal frequentist coverage

## Your seams

Your pages depend on another group's:

- `posterior-propriety-and-dominated-bayes-formula` requires `bayesian-models-priors-and-posterior-laws` (group t, batch 4)

Another group's pages depend on yours:

- `hierarchical-bayesian-models-and-partial-pooling` (group b) requires your `conjugate-families-and-posterior-prediction`
- `marginal-likelihoods-bayes-factors-and-empirical-bayes` (group b) requires your `posterior-propriety-and-dominated-bayes-formula`
- `posterior-consistency-and-tests` (group b) requires your `posterior-propriety-and-dominated-bayes-formula`
- `gaussian-process-priors-and-posterior-laws` (group d) requires your `conjugate-families-and-posterior-prediction`
- `dirichlet-process-priors-and-finite-partition-updates` (group e) requires your `conjugate-families-and-posterior-prediction`
- `functional-bayesian-limits-and-credible-set-calibration` (group f) requires your `posterior-prediction-and-bayesian-decision`
- `adaptive-empirical-bayes-credible-set-calibration` (group f) requires your `conjugate-families-and-posterior-prediction`
- `generalized-bayes-loss-updates-and-temperature` (group f) requires your `posterior-propriety-and-dominated-bayes-formula`
- `numerical-optimization-for-statistical-computation` (group g) requires your `posterior-propriety-and-dominated-bayes-formula`
- `hamiltonian-monte-carlo-and-leapfrog` (group k) requires your `conjugate-families-and-posterior-prediction`
- `langevin-monte-carlo-mala-and-ula` (group l) requires your `conjugate-families-and-posterior-prediction`
- `state-space-filtering-and-predictive-laws` (group m) requires your `posterior-propriety-and-dominated-bayes-formula`
- `kalman-filtering` (group m) requires your `conjugate-families-and-posterior-prediction`

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
