# Step 5 adjudication — group **b**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 8, 9, 10: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **8**: `research/bayesian-computational-statistics-62-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/bayesian-computational-statistics-62-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **10**: `research/bayesian-computational-statistics-62-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 8 | `hierarchical-bayesian-models-and-partial-pooling` | A | bayesian-computational-statistics | 2056 | `conjugate-families-and-posterior-prediction`, `markov-kernels-and-markov-chains`, `structural-causal-models-dags-and-adjustment` |
| 8 | `hierarchical-bayesian-models-and-partial-pooling-examples` | B | bayesian-computational-statistics | 2057 | `hierarchical-bayesian-models-and-partial-pooling` |
| 9 | `marginal-likelihoods-bayes-factors-and-empirical-bayes` | A | bayesian-computational-statistics | 2058 | `hierarchical-bayesian-models-and-partial-pooling`, `detection-and-quantification-limits`, `posterior-propriety-and-dominated-bayes-formula` |
| 9 | `marginal-likelihoods-bayes-factors-and-empirical-bayes-examples` | B | bayesian-computational-statistics | 2059 | `marginal-likelihoods-bayes-factors-and-empirical-bayes` |
| 10 | `posterior-consistency-and-tests` | A | bayesian-computational-statistics | 2060 | `posterior-propriety-and-dominated-bayes-formula`, `minimax-lower-bounds-and-information-theoretic-methods`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 10 | `posterior-consistency-and-tests-examples` | B | bayesian-computational-statistics | 2061 | `posterior-consistency-and-tests` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hierarchical-bayesian-models-and-partial-pooling` — Hierarchical Bayes and partial pooling (7 item(s))

- `lem-finite-products-of-dominated-kernels-have-product-density` · lemma — Finite products of dominated kernels have the product density
- `def-hierarchical-bayesian-model` · definition — Finite-group hierarchical Bayesian model
- `thm-hierarchical-latent-tuple-has-rcd-given-data` · theorem — A finite-group hierarchical model has a conditional law of its latent tuple
- `thm-hierarchical-posterior-normalization-on-positive-finite-evidence` · theorem — Hierarchical posterior normalization on positive finite evidence
- `thm-normal-normal-hierarchical-shrinkage` · theorem — Conditional normal shrinkage in a finite hierarchy
- `def-current-and-new-group-posterior-predictive-laws` · definition — Current-group and new-group posterior prediction
- `thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels` · theorem — Current-group and new-group posterior predictions are probability kernels

### `hierarchical-bayesian-models-and-partial-pooling-examples` — Hierarchical Bayes and partial pooling — Examples (3 item(s))

- `ex-improper-variance-hyperprior-can-make-posterior-improper` · example — An improper variance hyperprior can give an improper posterior
- `ex-full-hyperposterior-versus-plug-in-normal-hierarchy` · example — Integrating hyperparameter uncertainty versus plugging in
- `ex-hierarchical-normal-pooling-extremes` · example — Complete, partial, and no-pooling limits in the normal hierarchy

### `marginal-likelihoods-bayes-factors-and-empirical-bayes` — Marginal likelihoods, Bayes factors, and empirical Bayes (4 item(s))

- `thm-balanced-one-way-random-effects-expected-mean-squares` · theorem — Expected mean squares in the balanced one-way normal random-effects model
- `def-marginal-likelihood-and-bayes-factor` · definition — Marginal likelihoods, proper model evidence, and Bayes factors
- `thm-finite-model-posterior-odds-from-marginal-evidence` · theorem — Finite-model posterior probabilities and Bayes-factor odds
- `def-type-ii-marginal-likelihood-and-empirical-bayes-posterior` · definition — Type-II maximum marginal likelihood and empirical-Bayes plug-in posterior

### `marginal-likelihoods-bayes-factors-and-empirical-bayes-examples` — Marginal likelihoods, Bayes factors, and empirical Bayes — Examples (5 item(s))

- `ex-negative-balanced-anova-moment-estimate` · example — A negative balanced-ANOVA moment estimate
- `ex-diffuse-normal-prior-changes-bayes-factor` · example — A diffuse normal prior changes the point-null Bayes factor
- `ex-improper-flat-prior-arbitrary-evidence-scale` · example — An improper flat-prior scale makes a formal evidence arbitrary
- `ex-hyperparameter-uncertainty-can-induce-group-dependence` · example — A shared hyperparameter can couple group parameters
- `ex-point-null-needs-a-model-atom` · example — A point-null hypothesis needs a model atom

### `posterior-consistency-and-tests` — Hellinger geometry and posterior consistency (4 item(s))

- `def-hellinger-distance-for-dominated-laws` · definition — Root-L2 Hellinger distance for dominated laws
- `thm-hellinger-tv-comparison-under-library-convention` · theorem — Hellinger invariance and comparison with library total variation
- `thm-posterior-consistency-under-prior-mass-and-tests` · theorem — Posterior consistency from KL support and uniformly summable tests
- `cex-identifiability-alone-does-not-imply-posterior-consistency` · counterexample — Identifiability and KL support do not replace testability

### `posterior-consistency-and-tests-examples` — Hellinger geometry and posterior consistency — Examples (2 item(s))

- `ex-identifiable-finite-model` · example — A finite identifiable model with posterior consistency
- `ex-l1-distance-convention-factor-of-two` · example — The factor of two between density L1 and library total variation

## Your seams

Your pages depend on another group's:

- `hierarchical-bayesian-models-and-partial-pooling` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)
- `marginal-likelihoods-bayes-factors-and-empirical-bayes` requires `posterior-propriety-and-dominated-bayes-formula` (group a, batch 5)
- `posterior-consistency-and-tests` requires `posterior-propriety-and-dominated-bayes-formula` (group a, batch 5)

Another group's pages depend on yours:

- `iid-posterior-contraction` (group c) requires your `posterior-consistency-and-tests`
- `dirichlet-normal-mixture-contraction` (group e) requires your `hierarchical-bayesian-models-and-partial-pooling`
- `adaptive-empirical-bayes-credible-set-calibration` (group f) requires your `marginal-likelihoods-bayes-factors-and-empirical-bayes`
- `em-algorithm-and-latent-variable-likelihood-ascent-examples` (group g) requires your `hierarchical-bayesian-models-and-partial-pooling`

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
