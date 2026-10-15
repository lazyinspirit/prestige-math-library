# Step 5 adjudication — group **o**, run `statistical-models-experiments-62`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 23 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/statistical-models-experiments-62-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/statistical-models-experiments-62-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/statistical-models-experiments-62-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 43 | `linear-prediction-for-dependent-data` | A | statistical-models-and-experiments | 2002 | `stationary-time-series-moments-and-autocovariance`, `probability-spaces-random-variables-and-expectation`, `conditional-expectation`, `central-limit-theorems` |
| 43 | `linear-prediction-for-dependent-data-examples` | B | statistical-models-and-experiments | 2003 | `linear-prediction-for-dependent-data` |
| 44 | `state-space-models-as-probability-laws` | A | statistical-models-and-experiments | 2004 | `scientific-statistical-model-contracts`, `stationary-time-series-moments-and-autocovariance`, `statistical-experiments-models-and-identifiability`, `infinite-product-measures-and-kolmogorov-extension`, `conditional-distributions-and-regular-conditional-probability`, `markov-kernels-and-markov-chains`, `independence-borel-cantelli-and-zero-one-laws`, `central-limit-theorems`, `characteristic-functions-inversion-and-continuity` |
| 44 | `state-space-models-as-probability-laws-examples` | B | statistical-models-and-experiments | 2005 | `state-space-models-as-probability-laws` |
| 45 | `random-fields-covariance-and-variograms` | A | statistical-models-and-experiments | 2006 | `stationary-time-series-moments-and-autocovariance`, `spectral-measures-and-periodogram-bias`, `central-limit-theorems`, `infinite-product-measures-and-kolmogorov-extension`, `bochner-inversion-and-plancherel-on-lca-groups`, `probability-spaces-random-variables-and-expectation`, `brownian-motion-construction-and-continuity`, `mackeys-imprimitivity-theorem` |
| 45 | `random-fields-covariance-and-variograms-examples` | B | statistical-models-and-experiments | 2007 | `random-fields-covariance-and-variograms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `linear-prediction-for-dependent-data` — Finite-history linear prediction (7 item(s))

- `lem-uncorrelated-jointly-gaussian-blocks-are-independent` · lemma — Uncorrelated jointly Gaussian blocks are independent
- `def-best-linear-forecast-from-a-finite-history` · definition — Best linear forecast from a finite history
- `thm-finite-history-best-linear-predictor-exists-uniquely` · theorem — Existence and uniqueness of the finite-history predictor class
- `alg-durbin-levinson-forecast-recursion` · algorithm — Durbin–Levinson forecast recursion
- `thm-forecast-normal-equations-and-error` · theorem — Finite-history forecast equations and error variance
- `thm-gaussian-best-linear-forecast-equals-conditional-expectation` · theorem — A Gaussian finite-history forecast is a conditional expectation
- `thm-durbin-levinson-solves-the-prediction-equations` · theorem — Durbin–Levinson solves the successive prediction equations

### `linear-prediction-for-dependent-data-examples` — Finite-history linear prediction — Examples (3 item(s))

- `ex-ar1-one-step-and-multistep-forecast` · example — One-step and multistep forecasts for a causal AR(1)
- `ex-singular-history-covariance-unique-predictor-class` · example — A singular history covariance can have nonunique coefficients
- `ex-nongaussian-conditional-mean-not-best-affine-predictor` · example — A finite-history conditional mean can be nonlinear

### `state-space-models-as-probability-laws` — State-space model laws (5 item(s))

- `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal` · lemma — A finite stack of independent Gaussian vectors is jointly Gaussian
- `def-general-state-space-model-by-kernels` · definition — General finite-horizon state-space models by kernels
- `thm-finite-horizon-state-space-kernel-law-exists-uniquely` · theorem — Finite-horizon state-space kernel law exists and is unique
- `def-linear-gaussian-state-space-model-with-independent-noises` · definition — Linear-Gaussian state-space models with independent noises
- `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian` · theorem — The finite linear-Gaussian state-space path is jointly Gaussian

### `state-space-models-as-probability-laws-examples` — State-space model laws — Examples (2 item(s))

- `ex-state-space-model-same-dynamics-distinct-observation-kernels` · example — Same state dynamics with distinct observation kernels
- `ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance` · example — Singular state covariance with positive innovation covariance

### `random-fields-covariance-and-variograms` — Random fields and variograms (5 item(s))

- `def-random-field-stationarity-covariance-and-variogram` · definition — Random fields, stationarity, covariance, and variograms
- `lem-random-field-covariance-kernel-is-positive-semidefinite` · lemma — Covariance kernels of square-integrable fields are positive semidefinite
- `thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel` · theorem — Gaussian field existence from a mean and a positive-semidefinite kernel
- `thm-order-two-field-variogram-is-conditionally-negative-definite` · theorem — Order-two intrinsic variograms are conditionally negative definite
- `thm-continuous-stationary-field-covariance-has-bochner-measure` · theorem — Bochner spectral measure of a continuous stationary field covariance

### `random-fields-covariance-and-variograms-examples` — Random fields and variograms — Examples (1 item(s))

- `ex-covariance-kernel-and-intrinsic-variogram-checks` · example — A failed stationary covariance and a valid quadratic variogram

## Your seams

Your pages depend on another group's:

- `linear-prediction-for-dependent-data` requires `stationary-time-series-moments-and-autocovariance` (group n, batch 40)
- `state-space-models-as-probability-laws` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `state-space-models-as-probability-laws` requires `stationary-time-series-moments-and-autocovariance` (group n, batch 40)
- `random-fields-covariance-and-variograms` requires `stationary-time-series-moments-and-autocovariance` (group n, batch 40)
- `random-fields-covariance-and-variograms` requires `spectral-measures-and-periodogram-bias` (group n, batch 41)

Another group's pages depend on yours:

- `spatial-field-summary-estimators` (group p) requires your `random-fields-covariance-and-variograms`
- `kriging-as-best-linear-prediction` (group p) requires your `linear-prediction-for-dependent-data`
- `kriging-as-best-linear-prediction` (group p) requires your `random-fields-covariance-and-variograms`

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
