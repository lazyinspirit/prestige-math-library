# Step 5 adjudication — group **a**, run `statistical-models-experiments-62`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/statistical-models-experiments-62-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/statistical-models-experiments-62-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/statistical-models-experiments-62-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `scientific-statistical-model-contracts` | A | statistical-models-and-experiments | 1918 | `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `probability-spaces-random-variables-and-expectation` |
| 1 | `scientific-statistical-model-contracts-examples` | B | statistical-models-and-experiments | 1919 | `scientific-statistical-model-contracts` |
| 2 | `fixed-design-linear-regression-and-estimability` | A | statistical-models-and-experiments | 1920 | `scientific-statistical-model-contracts`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `inner-product-spaces-and-orthogonality`, `linear-maps-rank-nullity-and-quotient-spaces`, `probability-spaces-random-variables-and-expectation` |
| 2 | `fixed-design-linear-regression-and-estimability-examples` | B | statistical-models-and-experiments | 1921 | `fixed-design-linear-regression-and-estimability` |
| 3 | `exact-gaussian-linear-regression-inference` | A | statistical-models-and-experiments | 1922 | `fixed-design-linear-regression-and-estimability`, `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `confidence-sets-pivots-and-test-inversion`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `inner-product-spaces-and-orthogonality`, `central-limit-theorems`, `independence-borel-cantelli-and-zero-one-laws` |
| 3 | `exact-gaussian-linear-regression-inference-examples` | B | statistical-models-and-experiments | 1923 | `exact-gaussian-linear-regression-inference` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `scientific-statistical-model-contracts` — Scientific model contracts and applicability (1 item(s))

- `def-scientific-statistical-model-contract` · definition — Scientific statistical model contracts

### `scientific-statistical-model-contracts-examples` — Scientific model contracts and applicability — Examples (2 item(s))

- `ex-technical-biological-units-and-repeated-visits` · example — Biological units, repeated visits, and technical assay replicates
- `ex-unvalidated-calibration-offset-is-not-identifiable` · example — An unvalidated calibration offset leaves the true quantity unidentified

### `fixed-design-linear-regression-and-estimability` — Fixed-design regression, estimability, and Gauss–Markov (8 item(s))

- `def-fixed-design-linear-regression-model` · definition — Fixed-design linear regression model
- `lem-linear-contrast-statistics-are-borel-measurable` · lemma — Linear statistics on Euclidean data are Borel-measurable
- `def-least-squares-solution-set` · definition — Least-squares solution set
- `thm-least-squares-fitted-vector-and-solution-set` · theorem — Least-squares fitted vectors and residuals are unique
- `def-linear-estimability-in-fixed-design` · definition — Linearly estimable contrasts in fixed-design regression
- `thm-linear-estimability-iff-row-space` · theorem — Linear estimability is equivalent to row-space membership
- `thm-ols-unbiasedness-and-covariance-full-rank` · theorem — Full-rank OLS is unbiased with its classical covariance
- `thm-gauss-markov-for-fixed-design-regression` · theorem — Gauss–Markov theorem for estimable contrasts

### `fixed-design-linear-regression-and-estimability-examples` — Fixed-design regression, estimability, and Gauss–Markov — Examples (3 item(s))

- `ex-collinear-fixed-design-estimability` · example — Collinear predictors can leave a contrast estimable
- `cex-heteroskedasticity-invalidates-ols-blue` · counterexample — Unequal error variances can make OLS fail to be BLUE
- `ex-high-leverage-is-a-design-feature` · example — Leverage is determined by the design

### `exact-gaussian-linear-regression-inference` — Exact Gaussian regression inference and prediction (3 item(s))

- `lem-full-column-rank-matrix-has-economy-qr` · lemma — A full-column-rank real matrix has an economy QR factorization
- `thm-exact-gaussian-linear-regression-inference` · theorem — Exact t and partial F inference in full-rank Gaussian regression
- `thm-gaussian-regression-confidence-and-prediction-intervals` · theorem — Exact confidence and prediction intervals in Gaussian regression

### `exact-gaussian-linear-regression-inference-examples` — Exact Gaussian regression inference and prediction — Examples (2 item(s))

- `cex-rademacher-errors-do-not-give-exact-regression-t` · counterexample — Independent Rademacher errors need not give the Gaussian regression t pivot
- `ex-gaussian-regression-mean-and-prediction-intervals` · example — Mean-response and prediction intervals from one Gaussian regression fit

## Your seams

Another group's pages depend on yours:

- `generalized-linear-models-and-fisher-scoring` (group b) requires your `scientific-statistical-model-contracts`
- `multivariate-normal-wishart-hotelling` (group b) requires your `scientific-statistical-model-contracts`
- `multivariate-normal-wishart-hotelling` (group b) requires your `exact-gaussian-linear-regression-inference`
- `principal-components-and-eigenspace-stability` (group b) requires your `scientific-statistical-model-contracts`
- `principal-components-and-eigenspace-stability` (group b) requires your `fixed-design-linear-regression-and-estimability`
- `mixed-effects-and-longitudinal-models` (group c) requires your `scientific-statistical-model-contracts`
- `mixed-effects-and-longitudinal-models` (group c) requires your `fixed-design-linear-regression-and-estimability`
- `finite-populations-and-sampling-designs` (group c) requires your `scientific-statistical-model-contracts`
- `finite-populations-and-sampling-designs` (group c) requires your `fixed-design-linear-regression-and-estimability`
- `randomized-treatment-assignment-and-sharp-null-tests` (group d) requires your `scientific-statistical-model-contracts`
- `biological-and-technical-replication` (group f) requires your `scientific-statistical-model-contracts`
- `event-time-censoring-and-truncation` (group j) requires your `scientific-statistical-model-contracts`
- `measurement-calibration-and-uncertainty` (group l) requires your `scientific-statistical-model-contracts`
- `method-agreement-and-limits` (group m) requires your `scientific-statistical-model-contracts`
- `stationary-time-series-moments-and-autocovariance` (group n) requires your `scientific-statistical-model-contracts`
- `state-space-models-as-probability-laws` (group o) requires your `scientific-statistical-model-contracts`

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

# Step 5 batch adjudication, `statistical-models-experiments-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
