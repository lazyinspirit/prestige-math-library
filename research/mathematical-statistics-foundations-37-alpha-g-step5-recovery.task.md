# Step 5 adjudication — group **g**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 48 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/mathematical-statistics-foundations-37-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/mathematical-statistics-foundations-37-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/mathematical-statistics-foundations-37-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `sparse-high-dimensional-estimation-and-covariance` | A | mathematical-statistics | 1880 | `concentration-inequalities-and-tail-bounds`, `symmetrization-rademacher-complexity-and-covering-entropy`, `minimax-lower-bounds-and-information-theoretic-methods`, `the-spectral-theorem-and-singular-value-decomposition`, `euclidean-surface-measure-divergence-and-green-identities` |
| 19 | `sparse-high-dimensional-estimation-and-covariance-examples` | B | mathematical-statistics | 1881 | `sparse-high-dimensional-estimation-and-covariance` |
| 20 | `m-and-z-estimation-and-uniform-laws` | A | mathematical-statistics | 1882 | `asymptotic-convergence-consistency-and-identification`, `losses-risk-and-decision-rules`, `chaining-uniform-laws-and-empirical-process-limits` |
| 20 | `m-and-z-estimation-and-uniform-laws-examples` | B | mathematical-statistics | 1883 | `m-and-z-estimation-and-uniform-laws` |
| 21 | `delta-method-and-asymptotic-normality` | A | mathematical-statistics | 1884 | `asymptotic-convergence-consistency-and-identification`, `m-and-z-estimation-and-uniform-laws`, `weak-convergence-tightness-and-representation`, `matrix-differentiation-and-first-order-spectral-perturbation`, `inner-product-spaces-and-orthogonality` |
| 21 | `delta-method-and-asymptotic-normality-examples` | B | mathematical-statistics | 1885 | `delta-method-and-asymptotic-normality` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sparse-high-dimensional-estimation-and-covariance` — Sparse Estimation and Covariance (30 item(s))

- `def-gaussian-sequence-sparse-means-model` · definition — Gaussian sequence model with sparse means
- `def-subgaussian-fixed-design-regression-model` · definition — Fixed-design regression with sub-Gaussian noise
- `def-fixed-design-incoherence-condition` · definition — Fixed-design incoherence condition
- `def-restricted-eigenvalue-condition` · definition — Restricted eigenvalue condition on the Lasso cone
- `def-lasso-estimator` · definition — Lasso estimator for fixed design
- `lem-lasso-objective-has-minimizer` · lemma — The Lasso objective has a nonempty compact convex minimizer set
- `thm-lasso-basic-inequality` · theorem — Lasso basic inequality and cone constraint
- `lem-incoherence-implies-restricted-eigenvalue` · lemma — The stated incoherence bound implies the Lasso restricted eigenvalue condition
- `lem-fixed-design-subgaussian-score-concentration` · lemma — Sub-Gaussian score bound under fixed-design incoherence
- `thm-lasso-prediction-and-l1-error-under-incoherence` · theorem — Lasso prediction and coefficient bounds under incoherence
- `def-sample-covariance-and-operator-norm-loss` · definition — Sample covariance estimators and squared operator loss
- `def-weak-lq-sparse-covariance-class` · definition — Weak-lq covariance class with directional sub-Gaussian tails
- `def-minimax-squared-operator-risk` · definition — Minimax squared operator risk
- `def-soft-thresholding-function` · definition — Soft-thresholding map
- `lem-products-of-subgaussian-coordinates-are-subexponential` · lemma — Products of sub-Gaussian coordinates are sub-exponential
- `lem-epsilon-net-controls-symmetric-operator-norm` · lemma — A sphere net controls the operator norm of a symmetric matrix
- `lem-symmetric-matrix-operator-norm-rayleigh` · lemma — A symmetric matrix operator norm is its largest absolute Rayleigh quotient
- `thm-centered-subgaussian-sample-covariance-bound` · theorem — Dense sample covariance concentration for sub-Gaussian vectors
- `alg-entrywise-thresholded-sample-covariance` · algorithm — Entrywise-thresholded sample covariance
- `lem-weak-lq-thresholded-covariance-row-sum` · lemma — Weak-lq thresholding error from an entrywise deviation event
- `lem-directional-tail-implies-subgaussian-mgf` · lemma — A Gaussian tail bound implies a sub-Gaussian MGF bound
- `lem-directional-tail-products-are-subexponential` · lemma — Products of variables with Gaussian tails are sub-exponential
- `thm-weak-lq-sample-covariance-entrywise-deviation` · theorem — Entrywise deviation for sample-centered covariance under directional Gaussian tails
- `thm-thresholded-sparse-covariance-high-probability-bound` · theorem — High-probability operator error for thresholded weak-lq covariance
- `cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension` · counterexample — The stated sparse-covariance minimax rate is unbounded for super-exponential dimension
- `lem-gaussian-sparse-covariance-mixture-lower-bound` · lemma — Gaussian mixture lower bound for weakly sparse covariance
- `lem-weak-lq-thresholded-covariance-expected-risk` · lemma — Expected squared operator error of thresholded sparse covariance
- `lem-gaussian-kullback-leibler-covariance-formula` · lemma — Kullback–Leibler divergence between nondegenerate centered Gaussian laws
- `lem-diagonal-covariance-minimax-lower-bound` · lemma — Diagonal covariance lower bound with bounded-risk saturation
- `thm-thresholded-sparse-covariance-minimax-rate` · theorem — Capped thresholded minimax rate for weak-lq sparse covariance

### `sparse-high-dimensional-estimation-and-covariance-examples` — Sparse Estimation and Covariance — Examples (3 item(s))

- `ex-orthogonal-design-lasso-is-soft-thresholding` · example — The orthogonal-design Lasso is coordinatewise soft thresholding
- `cex-collinear-design-fails-re-and-incoherence` · counterexample — A collinear design defeats a sparsity-only coefficient guarantee
- `ex-sample-covariance-rank-deficiency-when-p-exceeds-n` · example — Sample covariance is singular when dimension exceeds sample size

### `m-and-z-estimation-and-uniform-laws` — M- and Z-Estimators (4 item(s))

- `def-m-estimator` · definition — M-estimators
- `def-z-estimator` · definition — Z-estimators
- `thm-m-estimator-consistency` · theorem — Consistency of M-estimators under a uniform law
- `thm-z-estimator-consistency` · theorem — Consistency of Z-estimators under a uniform law

### `m-and-z-estimation-and-uniform-laws-examples` — M- and Z-Estimators — Examples (4 item(s))

- `ex-quadratic-criterion-sample-mean` · example — The sample mean as a quadratic M-estimator
- `ex-absolute-criterion-sample-median` · example — Sample medians as absolute-criterion M-estimators
- `ex-finite-class-m-estimator-consistency` · example — A finite-class M-estimator and its uniform law
- `cex-unseparated-m-estimator-is-inconsistent` · counterexample — An exact M-estimator can fail without population separation

### `delta-method-and-asymptotic-normality` — Delta Method and Asymptotic Normality (2 item(s))

- `thm-first-and-second-order-delta-method-for-random-vectors` · theorem — First- and second-order delta method for random vectors
- `thm-z-estimator-asymptotic-linearity-and-normality` · theorem — Asymptotic linearity and normality of iid Z-estimators

### `delta-method-and-asymptotic-normality-examples` — Delta Method and Asymptotic Normality — Examples (5 item(s))

- `ex-log-transformation-delta-method` · example — A logarithmic transformation
- `ex-ratio-delta-method` · example — A ratio transformation
- `ex-second-order-delta-method-quadratic` · example — A zero-gradient quadratic limit
- `ex-sample-variance-delta-method` · example — Sample variance from a multivariate delta method
- `cex-continuity-alone-does-not-give-delta-method` · counterexample — Continuity alone does not give a delta-method limit

## Your seams

Your pages depend on another group's:

- `sparse-high-dimensional-estimation-and-covariance` requires `concentration-inequalities-and-tail-bounds` (group e, batch 14)
- `sparse-high-dimensional-estimation-and-covariance` requires `symmetrization-rademacher-complexity-and-covering-entropy` (group e, batch 15)
- `sparse-high-dimensional-estimation-and-covariance` requires `minimax-lower-bounds-and-information-theoretic-methods` (group f, batch 17)
- `m-and-z-estimation-and-uniform-laws` requires `asymptotic-convergence-consistency-and-identification` (group e, batch 13)
- `m-and-z-estimation-and-uniform-laws` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `m-and-z-estimation-and-uniform-laws` requires `chaining-uniform-laws-and-empirical-process-limits` (group f, batch 16)
- `delta-method-and-asymptotic-normality` requires `asymptotic-convergence-consistency-and-identification` (group e, batch 13)

Another group's pages depend on yours:

- `likelihood-asymptotics-wald-score-and-likelihood-ratio` (group h) requires your `m-and-z-estimation-and-uniform-laws`
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` (group h) requires your `delta-method-and-asymptotic-normality`
- `boundary-and-misspecified-asymptotics` (group h) requires your `delta-method-and-asymptotic-normality`
- `robust-covariance-and-high-dimensional-stability` (group l) requires your `sparse-high-dimensional-estimation-and-covariance`

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
