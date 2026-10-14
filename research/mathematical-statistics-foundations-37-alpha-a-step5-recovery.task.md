# Step 5 adjudication — group **a**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/mathematical-statistics-foundations-37-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/mathematical-statistics-foundations-37-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/mathematical-statistics-foundations-37-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/mathematical-statistics-foundations-37-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `statistical-experiments-models-and-identifiability` | A | mathematical-statistics | 1844 | `probability-spaces-random-variables-and-expectation`, `measures-and-their-basic-properties` |
| 1 | `statistical-experiments-models-and-identifiability-examples` | B | mathematical-statistics | 1845 | `statistical-experiments-models-and-identifiability` |
| 2 | `estimators-and-randomized-procedures` | A | mathematical-statistics | 1846 | `statistical-experiments-models-and-identifiability`, `measurable-functions-and-simple-approximation`, `conditional-distributions-and-regular-conditional-probability` |
| 2 | `estimators-and-randomized-procedures-examples` | B | mathematical-statistics | 1847 | `estimators-and-randomized-procedures` |
| 3 | `losses-risk-and-decision-rules` | A | mathematical-statistics | 1848 | `estimators-and-randomized-procedures`, `statistical-experiments-models-and-identifiability`, `probability-spaces-random-variables-and-expectation`, `conditional-expectation`, `convex-and-semicontinuous-functions-on-rn` |
| 3 | `losses-risk-and-decision-rules-examples` | B | mathematical-statistics | 1849 | `losses-risk-and-decision-rules` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `statistical-experiments-models-and-identifiability` — Statistical Experiments, Models and Identifiability (7 item(s))

- `def-statistical-experiment` · definition — Statistical experiments
- `def-parametric-statistical-model` · definition — Parametric statistical models
- `def-parameter-measurable-statistical-model-as-markov-kernel` · definition — Parameter-measurable statistical models as kernels
- `def-observational-equivalence` · definition — Observational equivalence
- `def-estimand-on-a-statistical-model` · definition — Estimands on a statistical model
- `def-identifiability-of-an-estimand` · definition — Identifiability of an estimand
- `thm-identifiability-iff-constant-on-equivalence-classes` · theorem — Identifiability is constancy on observational classes

### `statistical-experiments-models-and-identifiability-examples` — Statistical Experiments, Models and Identifiability — Examples (2 item(s))

- `ex-identifiable-bernoulli-model-and-estimand` · example — Identifiable Bernoulli model and parameter target
- `cex-nonidentifiable-redundant-bernoulli-parameterization` · counterexample — A redundant Bernoulli parameterization has a nonidentifiable coordinate

### `estimators-and-randomized-procedures` — Estimators and Randomized Procedures (4 item(s))

- `def-randomized-procedure-as-a-markov-kernel` · definition — Randomized procedures as probability kernels
- `lem-procedure-action-law-is-measurable` · lemma — A randomized procedure has a measurable action law
- `def-statistic-and-estimator` · definition — Statistics and estimators
- `def-randomized-test` · definition — Randomized tests

### `estimators-and-randomized-procedures-examples` — Estimators and Randomized Procedures — Examples (3 item(s))

- `ex-deterministic-statistic-as-dirac-kernel` · example — A deterministic statistic is a Dirac kernel
- `ex-coin-flip-randomized-test` · example — A coin-flip randomized test
- `cex-nonmeasurable-rule-is-not-a-statistic-or-test` · counterexample — A nonmeasurable rule is not a statistic or test

### `losses-risk-and-decision-rules` — Loss, Risk and Decision Theory (7 item(s))

- `lem-finite-dimensional-integral-jensen-for-convex-loss` · lemma — Integral Jensen inequality for finite-dimensional convex losses
- `lem-prior-and-model-kernel-define-joint-law` · lemma — A prior and model kernel define a joint law
- `def-loss-function-and-risk` · definition — Loss functions and risk
- `def-risk-domination-and-admissibility` · definition — Risk domination and admissibility
- `def-bayes-and-minimax-risk` · definition — Bayes risk and minimax risk
- `thm-randomization-does-not-improve-convex-action-loss` · theorem — Randomization does not improve convex action loss
- `thm-bayes-rule-minimizes-prior-risk` · theorem — A posterior-risk minimizer minimizes prior risk

### `losses-risk-and-decision-rules-examples` — Loss, Risk and Decision Theory — Examples (4 item(s))

- `ex-squared-error-risk-for-bernoulli-observation` · example — Squared-error risk for a Bernoulli observation
- `ex-zero-one-loss-randomization-minimax` · example — Randomization lowers worst-case risk under zero-one loss
- `ex-data-rule-dominates-constant-rule` · example — A data-dependent rule dominates a constant rule
- `cex-open-action-set-no-minimizer` · counterexample — An open action set need not contain a posterior-risk minimizer

## Your seams

Another group's pages depend on yours:

- `dominated-experiments-likelihood-and-sufficiency` (group b) requires your `statistical-experiments-models-and-identifiability`
- `complete-sufficiency-exponential-families-and-basu` (group b) requires your `estimators-and-randomized-procedures`
- `finite-sample-point-estimation-and-unbiased-optimality` (group b) requires your `estimators-and-randomized-procedures`
- `finite-sample-point-estimation-and-unbiased-optimality` (group b) requires your `losses-risk-and-decision-rules`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c) requires your `estimators-and-randomized-procedures`
- `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c) requires your `losses-risk-and-decision-rules`
- `gaussian-orthogonal-decomposition-and-quadratic-forms` (group d) requires your `estimators-and-randomized-procedures`
- `asymptotic-convergence-consistency-and-identification` (group e) requires your `statistical-experiments-models-and-identifiability`
- `minimax-lower-bounds-and-information-theoretic-methods` (group f) requires your `losses-risk-and-decision-rules`
- `decision-theoretic-upper-bounds-and-oracle-risk` (group f) requires your `losses-risk-and-decision-rules`
- `m-and-z-estimation-and-uniform-laws` (group g) requires your `losses-risk-and-decision-rules`
- `nonparametric-density-estimation-and-kernels` (group i) requires your `statistical-experiments-models-and-identifiability`
- `nonparametric-density-estimation-and-kernels` (group i) requires your `estimators-and-randomized-procedures`
- `nonparametric-regression-and-smoothing` (group i) requires your `losses-risk-and-decision-rules`
- `splines-series-and-approximation-rates` (group i) requires your `losses-risk-and-decision-rules`
- `contamination-models-and-robust-risk` (group k) requires your `losses-risk-and-decision-rules`
- `sequential-testing-and-anytime-valid-inference` (group l) requires your `estimators-and-randomized-procedures`
- `conformal-prediction-and-exchangeable-ranks` (group m) requires your `estimators-and-randomized-procedures`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/mathematical-statistics-foundations-37-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `mathematical-statistics-foundations-37`

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
