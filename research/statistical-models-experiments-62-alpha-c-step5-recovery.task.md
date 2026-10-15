# Step 5 adjudication — group **c**, run `statistical-models-experiments-62`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/statistical-models-experiments-62-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/statistical-models-experiments-62-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/statistical-models-experiments-62-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `mixed-effects-and-longitudinal-models` | A | statistical-models-and-experiments | 1930 | `scientific-statistical-model-contracts`, `fixed-design-linear-regression-and-estimability`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `dominated-experiments-likelihood-and-sufficiency`, `losses-risk-and-decision-rules`, `central-limit-theorems`, `probability-spaces-random-variables-and-expectation`, `inner-product-spaces-and-orthogonality`, `independence-borel-cantelli-and-zero-one-laws`, `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 7 | `mixed-effects-and-longitudinal-models-examples` | B | statistical-models-and-experiments | 1931 | `mixed-effects-and-longitudinal-models` |
| 8 | `finite-populations-and-sampling-designs` | A | statistical-models-and-experiments | 1932 | `scientific-statistical-model-contracts`, `fixed-design-linear-regression-and-estimability`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `probability-spaces-random-variables-and-expectation`, `finite-probability-spaces-and-random-variables`, `finite-sample-point-estimation-and-unbiased-optimality` |
| 8 | `finite-populations-and-sampling-designs-examples` | B | statistical-models-and-experiments | 1933 | `finite-populations-and-sampling-designs` |
| 9 | `horvitz-thompson-variance-and-srswor` | A | statistical-models-and-experiments | 1934 | `finite-populations-and-sampling-designs`, `probability-spaces-random-variables-and-expectation` |
| 9 | `horvitz-thompson-variance-and-srswor-examples` | B | statistical-models-and-experiments | 1935 | `horvitz-thompson-variance-and-srswor` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `mixed-effects-and-longitudinal-models` — Mixed effects and longitudinal models (18 item(s))

- `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent` · lemma — Jointly Gaussian blocks with zero cross-covariance are independent, including singular blocks
- `thm-nondegenerate-multivariate-normal-law-has-density` · theorem — A positive-definite multivariate normal law has its Gaussian density
- `def-error-contrast-matrix` · definition — Error-contrast matrix for a full-rank fixed design
- `def-known-covariance-generalized-least-squares-estimator` · definition — Generalized least-squares estimator for known covariance
- `def-linear-mixed-model` · definition — Finite-dimensional linear mixed model with explicit longitudinal roles
- `def-gaussian-linear-mixed-model` · definition — Gaussian branch of the linear mixed model
- `def-longitudinal-missingness-mechanisms` · definition — Longitudinal observation patterns and missingness mechanisms
- `lem-error-contrast-matrix-exists` · lemma — A full-rank error-contrast matrix exists when n exceeds p
- `lem-gls-information-matrix-is-positive-definite` · lemma — The GLS information matrix is positive definite
- `lem-marginal-covariance-of-linear-mixed-model` · lemma — Marginal covariance of the linear mixed model
- `lem-reml-error-contrast-covariance-is-positive-definite` · lemma — The REML error-contrast covariance is positive definite
- `lem-gaussian-error-contrast-is-multivariate-normal` · lemma — A Gaussian error contrast has the induced multivariate-normal law
- `thm-gaussian-conditional-law-of-random-effects` · theorem — Conditional Gaussian law of random effects
- `thm-variance-component-identifiability-iff-covariance-map-injective` · theorem — Gaussian variance-component identifiability is covariance-map injectivity
- `def-restricted-maximum-likelihood-error-contrasts` · definition — Restricted maximum likelihood from error contrasts
- `thm-known-covariance-gls-is-blue` · theorem — Known-covariance GLS is BLUE
- `lem-reml-error-contrast-basis-change-is-parameter-free` · lemma — Changing an error-contrast basis changes the REML likelihood by a constant
- `thm-known-covariance-blup-for-random-effects` · theorem — Known-covariance BLUP and its prediction-error covariance

### `mixed-effects-and-longitudinal-models-examples` — Mixed effects and longitudinal models — Examples (3 item(s))

- `cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout` · counterexample — A mixed-model covariance does not imply MAR dropout
- `ex-random-intercept-intraclass-correlation` · example — Random-intercept covariance and intraclass correlation
- `cex-two-visits-alias-random-slope-and-residual-variance` · counterexample — Two visits can alias random-slope and residual variance components

### `finite-populations-and-sampling-designs` — Finite populations and design probability (4 item(s))

- `def-finite-population-and-sampling-design` · definition — Finite populations and sampling designs
- `lem-finite-population-design-law-is-a-probability-measure` · lemma — A finite-population design induces probability laws on observed records
- `thm-horvitz-thompson-total-is-design-unbiased` · theorem — The Horvitz–Thompson total and mean are design-unbiased under positive inclusion probabilities
- `thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness` · theorem — A zero inclusion probability prevents total identification and universal unbiased estimation

### `finite-populations-and-sampling-designs-examples` — Finite populations and design probability — Examples (3 item(s))

- `ex-srswor-inclusion-probabilities-and-negative-covariance` · example — SRSWOR inclusion probabilities, pairwise nonpositive indicator covariance, and the sample mean
- `ex-census-and-certainty-units-under-ht` · example — A certainty unit and a census under Horvitz–Thompson estimation
- `ex-zero-inclusion-probability-and-unobserved-unit` · example — An unobserved unit prevents universal unbiased estimation

### `horvitz-thompson-variance-and-srswor` — HT variance and SRSWOR (5 item(s))

- `def-inclusion-covariance-difference` · definition — Inclusion-covariance difference
- `def-simple-random-sampling-without-replacement` · definition — Simple random sampling without replacement
- `thm-horvitz-thompson-variance-and-pair-inclusion-estimator` · theorem — Horvitz–Thompson variance and pair-inclusion estimate
- `thm-sen-yates-grundy-variance-identity` · theorem — Sen–Yates–Grundy variance identity
- `thm-srswor-mean-variance-and-finite-population-correction` · theorem — SRSWOR inclusion covariance and sample-mean variance

### `horvitz-thompson-variance-and-srswor-examples` — HT variance and SRSWOR — Examples (4 item(s))

- `ex-srswor-ht-variance-and-yates-grundy` · example — A three-unit SRSWOR variance calculation
- `ex-zero-pair-support-prevents-universal-unbiased-variance-estimation` · example — Zero pair support can prevent universal unbiased variance estimation
- `ex-srswor-census-and-singleton-boundaries` · example — Census and singleton SRSWOR boundaries
- `ex-syg-sign-condition-and-negative-estimate` · example — Positive pair covariances and a negative SYG estimate

## Your seams

Your pages depend on another group's:

- `mixed-effects-and-longitudinal-models` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `mixed-effects-and-longitudinal-models` requires `fixed-design-linear-regression-and-estimability` (group a, batch 2)
- `finite-populations-and-sampling-designs` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `finite-populations-and-sampling-designs` requires `fixed-design-linear-regression-and-estimability` (group a, batch 2)

Another group's pages depend on yours:

- `stratified-sampling-and-allocation` (group d) requires your `finite-populations-and-sampling-designs`
- `stratified-sampling-and-allocation` (group d) requires your `horvitz-thompson-variance-and-srswor`
- `cluster-and-two-stage-sampling` (group d) requires your `finite-populations-and-sampling-designs`
- `power-and-sample-size-planning` (group f) requires your `finite-populations-and-sampling-designs`
- `biological-and-technical-replication` (group f) requires your `mixed-effects-and-longitudinal-models`
- `measurement-batch-and-process-variation` (group m) requires your `mixed-effects-and-longitudinal-models`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `statistical-models-experiments-62`

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
