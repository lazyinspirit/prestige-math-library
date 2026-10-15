# Step 5 adjudication — group **b**, run `statistical-models-experiments-62`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/statistical-models-experiments-62-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/statistical-models-experiments-62-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/statistical-models-experiments-62-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 4 | `generalized-linear-models-and-fisher-scoring` | A | statistical-models-and-experiments | 1924 | `scientific-statistical-model-contracts`, `dominated-experiments-likelihood-and-sufficiency`, `complete-sufficiency-exponential-families-and-basu`, `fisher-information-and-finite-sample-information-bounds`, `likelihood-asymptotics-wald-score-and-likelihood-ratio`, `matrix-differentiation-and-first-order-spectral-perturbation`, `central-limit-theorems`, `independence-borel-cantelli-and-zero-one-laws`, `inner-product-spaces-and-orthogonality` |
| 4 | `generalized-linear-models-and-fisher-scoring-examples` | B | statistical-models-and-experiments | 1925 | `generalized-linear-models-and-fisher-scoring` |
| 5 | `multivariate-normal-wishart-hotelling` | A | statistical-models-and-experiments | 1926 | `scientific-statistical-model-contracts`, `exact-gaussian-linear-regression-inference`, `dominated-experiments-likelihood-and-sufficiency`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `likelihood-asymptotics-wald-score-and-likelihood-ratio`, `central-limit-theorems`, `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `inner-product-spaces-and-orthogonality` |
| 5 | `multivariate-normal-wishart-hotelling-examples` | B | statistical-models-and-experiments | 1927 | `multivariate-normal-wishart-hotelling` |
| 6 | `principal-components-and-eigenspace-stability` | A | statistical-models-and-experiments | 1928 | `scientific-statistical-model-contracts`, `fixed-design-linear-regression-and-estimability`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `the-spectral-theorem-and-singular-value-decomposition`, `probability-spaces-random-variables-and-expectation`, `robust-covariance-and-high-dimensional-stability` |
| 6 | `principal-components-and-eigenspace-stability-examples` | B | statistical-models-and-experiments | 1929 | `principal-components-and-eigenspace-stability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `generalized-linear-models-and-fisher-scoring` — Generalized linear models and Fisher scoring (12 item(s))

- `def-glm-observation-family` · definition — Explicit exponential-family response contracts
- `lem-glm-mean-and-variance-identities` · lemma — Mean and variance from the cumulant function
- `lem-glm-product-density` · lemma — The product response law has the product density
- `def-generalized-linear-model` · definition — Generalized linear model with explicit conditioning
- `def-nested-model-deviance` · definition — Likelihood deviance for nested models on common support
- `thm-canonical-glm-score-and-hessian` · theorem — Canonical-link score and Hessian
- `thm-glm-general-link-score-and-information` · theorem — General-link score and Fisher information
- `alg-fisher-scoring-irls` · algorithm — One minimum-norm IRLS step
- `lem-fisher-scoring-irls-is-well-defined` · lemma — The minimum-norm IRLS step is well-defined for every design rank
- `lem-nested-model-deviance-nonnegative` · lemma — Nested-model deviance is nonnegative
- `thm-canonical-glm-strict-concavity` · theorem — Strict concavity and uniqueness of a finite stationary maximizer
- `thm-irls-is-fisher-scoring-step` · theorem — IRLS equals the Fisher-scoring step when information is invertible

### `generalized-linear-models-and-fisher-scoring-examples` — Generalized linear models and Fisher scoring — Examples (6 item(s))

- `ex-poisson-overdispersion` · example — A mean-matched count law can be overdispersed relative to Poisson
- `ex-identity-link-bernoulli-boundary` · example — The Bernoulli identity-link boundary leaves the regular family
- `ex-logistic-separation-no-finite-mle` · example — Complete separation prevents a finite logistic MLE
- `ex-singular-fisher-information-nonunique-irls` · example — Rank deficiency gives singular information and nonunique weighted least squares
- `ex-bernoulli-logit-glm-one-step` · example — A one-observation Bernoulli-logit Fisher-scoring step
- `ex-poisson-log-glm-one-step` · example — A one-observation Poisson-log Fisher-scoring step

### `multivariate-normal-wishart-hotelling` — Multivariate normal, Wishart, and Hotelling $T^2$ (9 item(s))

- `def-wishart-law` · definition — Wishart law by Gaussian outer products
- `lem-standard-normal-matrix-has-full-row-rank-almost-surely` · lemma — A standard-normal matrix with at least as many columns as rows has full row rank almost surely
- `def-multivariate-normal-sample-model-and-statistics` · definition — The iid multivariate-normal sample and covariance conventions
- `lem-standard-wishart-independent-normal-quadratic-form-is-f` · lemma — The standard Wishart inverse quadratic form has an exact Fisher law
- `thm-multivariate-normal-sample-mean-scatter-independence-and-wishart` · theorem — The Gaussian sample mean is independent of the Wishart sample scatter
- `thm-covariance-likelihood-ratio-asymptotic-chi-square` · theorem — The Gaussian covariance likelihood ratio has its fixed-dimensional Wilks limit
- `thm-hotelling-t2-exact-f-distribution` · theorem — The one-sample Hotelling statistic has an exact F law
- `thm-wishart-trace-statistic-is-chi-square` · theorem — The exact covariance trace statistic has p(n−1) chi-square degrees of freedom
- `cor-exact-hotelling-one-sample-test` · corollary — The one-sample Hotelling F test has exact size alpha

### `multivariate-normal-wishart-hotelling-examples` — Multivariate normal, Wishart, and Hotelling $T^2$ — Examples (3 item(s))

- `ex-sample-covariance-singular-when-sample-size-not-exceeding-dimension` · example — The unbiased sample covariance is singular when 2 ≤ n ≤ p
- `ex-exact-wishart-trace-and-asymptotic-covariance-lrt-differ` · example — The exact Wishart trace and covariance likelihood ratio are different statistics
- `ex-hotelling-t2-two-dimensional-exact-test` · example — A two-dimensional Hotelling statistic and its exact F cutoff

### `principal-components-and-eigenspace-stability` — PCA and eigengap stability (7 item(s))

- `thm-local-leading-eigenvector-stability-under-eigengap` · theorem — Local leading-eigenvector stability under a spectral gap
- `thm-sample-centered-covariance-root-n-frobenius` · theorem — Finite-fourth-moment root-n consistency of sample-centered covariance
- `def-covariance-and-correlation-principal-component-analysis` · definition — Covariance and correlation principal component analysis
- `lem-pca-sample-covariance-is-a-measurable-estimator` · lemma — Sample-centered covariance is a measurable statistic and estimator
- `thm-pca-leading-direction-maximizes-variance` · theorem — The leading PCA eigenspace maximizes projected variance
- `thm-repeated-leading-eigenvalue-identifies-subspace` · theorem — A repeated leading PCA eigenvalue identifies a subspace, not a vector
- `cor-pca-sample-leading-eigenspace-root-n-consistency` · corollary — A simple population eigengap gives root-n sample PCA eigenspace consistency

### `principal-components-and-eigenspace-stability-examples` — PCA and eigengap stability — Examples (3 item(s))

- `cex-small-eigengap-allows-fixed-angle-rotation` · counterexample — A vanishing eigengap allows a fixed eigenvector rotation
- `ex-covariance-and-correlation-pca-differ-after-rescaling` · example — Rescaling can change covariance-PCA directions
- `ex-pca-tied-eigenvalues-and-sign-ambiguity` · example — Tied PCA eigenvalues and sign ambiguity

## Your seams

Your pages depend on another group's:

- `generalized-linear-models-and-fisher-scoring` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `multivariate-normal-wishart-hotelling` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `multivariate-normal-wishart-hotelling` requires `exact-gaussian-linear-regression-inference` (group a, batch 3)
- `principal-components-and-eigenspace-stability` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `principal-components-and-eigenspace-stability` requires `fixed-design-linear-regression-and-estimability` (group a, batch 2)

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
