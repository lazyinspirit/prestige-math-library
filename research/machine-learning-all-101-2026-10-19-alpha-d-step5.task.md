# Step 5 adjudication — group **d**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 11, 12, 13: 3 A/B pair(s), 6 page(s), 39 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **11**: `research/machine-learning-all-101-2026-10-19-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/machine-learning-all-101-2026-10-19-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/machine-learning-all-101-2026-10-19-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 11 | `adversarial-robustness-and-robust-risk` | A | machine-learning | 2716 | `central-limit-theorems`, `finite-class-pac-learning-and-erm`, `relations-functions-and-quotients`, `mixed-effects-and-longitudinal-models` |
| 11 | `adversarial-robustness-and-robust-risk-examples` | B | machine-learning | 2717 | `adversarial-robustness-and-robust-risk` |
| 12 | `fairness-criteria-and-impossibility-boundaries` | A | machine-learning | 2718 | `calibration-proper-losses-and-surrogate-classification` |
| 12 | `fairness-criteria-and-impossibility-boundaries-examples` | B | machine-learning | 2719 | `fairness-criteria-and-impossibility-boundaries` |
| 13 | `ml02-linear-sparse-models` | A | machine-learning | 2720 | `inner-product-spaces-and-orthogonality`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `the-spectral-theorem-and-singular-value-decomposition`, `sparse-high-dimensional-estimation-and-covariance`, `gaussian-process-support-and-concentration` |
| 13 | `ml02-linear-sparse-models-examples` | B | machine-learning | 2721 | `ml02-linear-sparse-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `adversarial-robustness-and-robust-risk` — Adversarial robustness and robust risk (15 item(s))

- `def-adversarial-threat-set-and-robust-risk` · definition — Measurable threat correspondences and robust risk
- `def-two-class-spherical-gaussian-mixture-model` · definition — Two-class spherical Gaussian model
- `def-binary-feature-bernoulli-model` · definition — Binary-feature Bernoulli model
- `alg-gaussian-mixture-robust-mean-classifier` · algorithm — Class-weighted mean classifier
- `alg-coordinate-threshold-preprocessing` · algorithm — Coordinatewise threshold preprocessing
- `lem-gaussian-vector-norm-concentration` · lemma — Gaussian vector norm and maximum-coordinate tails
- `lem-gaussian-sample-mean-signal-alignment` · lemma — Signal alignment of a Gaussian sample mean
- `cor-one-sample-natural-classification-error-gaussian-mixture` · corollary — One-sample natural error in the Gaussian model
- `thm-robust-sample-upper-bound-gaussian-mixture` · theorem — Robust sample upper bound in the Gaussian model
- `lem-common-shift-robust-risk-lower-bound` · lemma — Common shifts force binary robust risk at least one half
- `lem-gaussian-normal-prior-posterior` · lemma — Gaussian normal-prior posterior
- `thm-robust-sample-lower-bound-gaussian-mixture` · theorem — Robust sample lower bound in the Gaussian model
- `lem-finite-independent-sign-sum-tail` · lemma — Tail bound for finite sums of independent signs
- `lem-bernoulli-coordinate-posterior-odds-bound` · lemma — Posterior-odds concentration in the Bernoulli model
- `thm-architecture-dependent-robustness-binary-feature-model` · theorem — Architecture-dependent robustness in the Bernoulli model

### `adversarial-robustness-and-robust-risk-examples` — Adversarial robustness and robust risk — Examples (3 item(s))

- `ex-gaussian-robust-risk-dimension-radius-scaling` · example — Gaussian robust risk across dimensions and radii
- `ex-bernoulli-perturbations-preserve-signs` · example — Thresholding removes Bernoulli sign perturbations
- `ex-natural-and-robust-risk-on-gaussian-model` · example — Natural and robust risk in the Gaussian model

### `fairness-criteria-and-impossibility-boundaries` — Fairness criteria, impossibility boundaries, and limits (4 item(s))

- `def-group-risk-score-and-calibration` · definition — KMR's finite group-conditioned risk-score assignment and calibration
- `def-positive-and-negative-score-balance` · definition — Balance for positive and negative outcomes
- `lem-score-means-as-threshold-rate-areas` · lemma — Class-conditional mean risk scores are areas under threshold rates
- `thm-calibration-and-balance-incompatibility-for-risk-scores` · theorem — Calibration and both outcome-balance criteria force equal base rates or perfect prediction

### `fairness-criteria-and-impossibility-boundaries-examples` — Fairness criteria, impossibility boundaries, and limits — Examples (3 item(s))

- `ex-equal-base-rates-admit-constant-calibrated-score` · example — Equal base rates admit a constant calibrated score
- `ex-perfect-risk-prediction-with-unequal-base-rates` · example — Perfect prediction permits unequal base rates
- `ex-threshold-rates-vary-under-score-balance` · example — Threshold rates can vary despite balanced mean scores

### `ml02-linear-sparse-models` — Linear prediction, shrinkage, and sparse regression (11 item(s))

- `def-linear-regression-objectives` · definition — Fixed-design least-squares, ridge, lasso, group, and fused objectives
- `lem-gaussian-sample-covariance-operator-concentration` · lemma — Gaussian sample covariance converges in operator norm when dimension is little-o of sample size
- `lem-chi-square-degree-ratio` · lemma — A chi-square variable divided by a comparable dimension converges to one
- `lem-finite-gaussian-max-comparison` · lemma — Finite Sudakov–Fernique comparison for Gaussian maxima
- `lem-standard-gaussian-maximum-expectation-lower-bound` · lemma — The maximum of independent standard normals has expectation of order at least the square root of log dimension
- `cex-wainwright-conditional-covariance-eigenvalue-bound` · counterexample — A unit-diagonal covariance can have conditional covariance below the reciprocal global eigenvalue bound
- `fs-wainwright-lower-signed-support-threshold` · false-statement — The Cmax-only Wainwright lower signed-support threshold can predict failure when Lasso succeeds
- `thm-ols-and-ridge-solutions` · theorem — The full ordinary least-squares solution set and the unique ridge solution
- `lem-orthonormal-lasso-soft-thresholding` · lemma — Lasso on an orthonormal design is coordinatewise soft-thresholding
- `lem-lasso-active-set-stationarity` · lemma — The active coordinates of a signed Lasso optimizer satisfy restricted normal equations
- `fs-wainwright-signed-support-threshold-claim` · false-statement — The unrestricted Wainwright signed-support threshold claim fails without active-dimension control

### `ml02-linear-sparse-models-examples` — Linear prediction, shrinkage, and sparse regression — Examples (3 item(s))

- `ex-correlated-predictors-and-shrinkage` · example — Duplicate predictors give a least-squares line, a ridge point, and a lasso segment
- `ex-orthonormal-lasso-soft-thresholding` · example — An orthonormal design makes the Lasso threshold visible coordinate by coordinate
- `ex-beta-min-below-lasso-threshold-loses-support` · example — A coefficient below the orthonormal Lasso threshold is set to zero

## Your seams

Your pages depend on another group's:

- `adversarial-robustness-and-robust-risk` requires `finite-class-pac-learning-and-erm` (group a, batch 3)
- `fairness-criteria-and-impossibility-boundaries` requires `calibration-proper-losses-and-surrogate-classification` (group c, batch 8)

Another group's pages depend on yours:

- `ml02-federated-optimization` (group j) requires your `ml02-linear-sparse-models`
- `linear-contextual-bandits-and-linucb` (group z) requires your `ml02-linear-sparse-models`

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

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
