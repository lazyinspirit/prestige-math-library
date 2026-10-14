# Step 5 adjudication — group **k**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 31, 32, 33: 3 A/B pair(s), 6 page(s), 47 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/mathematical-statistics-foundations-37-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/mathematical-statistics-foundations-37-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/mathematical-statistics-foundations-37-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 31 | `contamination-models-and-robust-risk` | A | mathematical-statistics | 1904 | `losses-risk-and-decision-rules`, `minimax-lower-bounds-and-information-theoretic-methods` |
| 31 | `contamination-models-and-robust-risk-examples` | B | mathematical-statistics | 1905 | `contamination-models-and-robust-risk` |
| 32 | `robust-influence-and-breakdown` | A | mathematical-statistics | 1906 | `contamination-models-and-robust-risk`, `pathwise-differentiability-influence-functions-and-efficient-scores` |
| 32 | `robust-influence-and-breakdown-examples` | B | mathematical-statistics | 1907 | `robust-influence-and-breakdown` |
| 33 | `robust-mean-estimation-under-heavy-tails` | A | mathematical-statistics | 1908 | `concentration-inequalities-and-tail-bounds`, `contamination-models-and-robust-risk`, `hilbert-space-geometry-and-riesz-representation`, `banach-valued-integration-and-the-radon-nikodym-property`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 33 | `robust-mean-estimation-under-heavy-tails-examples` | B | mathematical-statistics | 1909 | `robust-mean-estimation-under-heavy-tails` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `contamination-models-and-robust-risk` — Contamination and Robust Risk (9 item(s))

- `lem-convex-mixture-of-probability-laws` · lemma — A convex mixture of probability laws is a probability law
- `lem-common-law-forces-two-point-tail-loss-bound` · lemma — A common data law forces a two-point tail-loss bound
- `def-gross-error-path` · definition — Gross-error contamination path
- `def-huber-contamination-model` · definition — Huber contamination model
- `def-adversarial-sample-replacement` · definition — Adversarial sample replacement
- `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold` · lemma — TV-close laws have identical Huber mixtures at the contamination threshold
- `def-contamination-robust-risk` · definition — Contamination-robust expected risk and tail risk
- `def-contamination-modulus` · definition — Huber contamination modulus
- `thm-huber-contamination-modulus-lower-bound` · theorem — Huber contamination modulus lower bound for tail risk

### `contamination-models-and-robust-risk-examples` — Contamination and Robust Risk — Examples (3 item(s))

- `ex-mean-gross-error-path-has-unbounded-sensitivity` · example — The mean has an unbounded directional derivative supremum
- `ex-bounded-sample-mean-under-replacement` · example — Bounded sample-mean change under replacements and a common corrupted sample
- `ex-bernoulli-huber-modulus-and-identical-mixtures` · example — Exact Bernoulli Huber modulus and indistinguishable mixtures

### `robust-influence-and-breakdown` — Influence and Breakdown (9 item(s))

- `def-finite-sample-replacement-breakdown` · definition — Finite-sample replacement breakdown
- `def-lower-median-functional` · definition — The lower median of a real probability law
- `lem-finite-empirical-measure-is-a-probability-law` · lemma — A finite empirical measure is a probability law
- `lem-lower-median-of-odd-empirical-sample-is-middle-order-statistic` · lemma — The lower median of an odd empirical sample is its middle order statistic
- `thm-mean-and-median-replacement-breakdown` · theorem — Replacement breakdown of the sample mean and odd-sample median
- `def-statistical-functional-and-influence-function` · definition — Statistical functionals and gross-error influence functions
- `def-gross-error-sensitivity` · definition — Gross-error sensitivity of a functional
- `thm-influence-function-for-m-location-estimator` · theorem — Influence function for a regular M-location functional
- `thm-median-influence-function` · theorem — Influence function and sensitivity of the median

### `robust-influence-and-breakdown-examples` — Influence and Breakdown — Examples (3 item(s))

- `ex-mean-influence-and-replacement-breakdown` · example — The mean has unbounded influence and 1/n breakdown
- `ex-median-influence-and-replacement-breakdown` · example — A smooth median has bounded influence and about one-half breakdown
- `cex-bounded-influence-does-not-imply-positive-breakdown` · counterexample — Bounded influence can coexist with vanishing replacement breakdown

### `robust-mean-estimation-under-heavy-tails` — Robust Means under Heavy Tails (20 item(s))

- `lem-variance-sensitive-bounded-empirical-process-concentration` · lemma — A variance-sensitive bound for bounded empirical suprema
- `alg-geometric-median-of-block-means` · algorithm — Geometric median of block means
- `alg-multivariate-trimmed-mean` · algorithm — Adaptive multivariate trimmed mean
- `alg-univariate-trimmed-mean` · algorithm — Split-sample univariate winsorized trimmed mean
- `lem-absolutely-continuous-upper-quantile-exact-tail-mass` · lemma — An absolutely continuous upper quantile has its specified tail mass
- `lem-finite-covariance-matrix-basic-properties` · lemma — Basic finite covariance matrix identities for robust mean bounds
- `lem-positive-real-has-dyadic-scale-in-factor-two` · lemma — Every positive real lies below a dyadic scale less than twice as large
- `cex-correct-scale-trimming-slab-radius-four-is-false` · counterexample — The four-Q0 trimming slab radius is false
- `cex-excess-tail-functional-does-not-bound-trimmed-mean` · counterexample — The excess-tail functional cannot upper-bound the trimmed mean
- `cex-univariate-clean-quantile-count-exponent-is-false` · counterexample — The claimed univariate clean-quantile count exponent is too strong
- `lem-geometric-median-majority-radius-bound` · lemma — A geometric median is close when a strict majority is close
- `lem-measurable-minimum-norm-geometric-median-selection` · lemma — Measurable minimum-norm geometric-median selection
- `lem-multivariate-trimmed-mean-selector-total-and-measurable` · lemma — Totality and measurability of the repaired multivariate trimmed-mean selector
- `lem-univariate-trimmed-mean-total-and-measurable` · lemma — The split-sample univariate trimmed mean is total and Borel measurable
- `lem-multivariate-mean-rate-given-correct-scale-event` · lemma — The multivariate trimmed-mean rate follows from a correct-scale slab event
- `lem-zero-covariance-multivariate-trimmed-mean-exact` · lemma — Exact recovery by the multivariate trimmed mean at zero covariance
- `prop-correct-scale-multivariate-trimming-slab-bound` · proposition — Correct-scale slab bound for multivariate trimming
- `thm-finite-variance-geometric-median-mean-bound` · theorem — Finite-variance Hilbert mean bound for geometric medians of means
- `thm-univariate-trimmed-mean-under-replacement` · theorem — Univariate trimmed-mean bound under sample replacement
- `thm-multivariate-trimmed-mean-under-replacement` · theorem — Multivariate trimmed-mean bound under sample replacement

### `robust-mean-estimation-under-heavy-tails-examples` — Robust Means under Heavy Tails — Examples (3 item(s))

- `ex-one-corrupted-block-is-rejected-by-the-geometric-median` · example — One corrupted block is rejected by the geometric median
- `cex-half-replacement-prevents-covariance-only-mean-recovery` · counterexample — Half-sample replacement prevents covariance-only mean recovery
- `ex-polynomial-tail-law-with-finite-variance` · example — A polynomial-tail law with finite variance

## Your seams

Your pages depend on another group's:

- `contamination-models-and-robust-risk` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `contamination-models-and-robust-risk` requires `minimax-lower-bounds-and-information-theoretic-methods` (group f, batch 17)
- `robust-influence-and-breakdown` requires `pathwise-differentiability-influence-functions-and-efficient-scores` (group j, batch 29)
- `robust-mean-estimation-under-heavy-tails` requires `concentration-inequalities-and-tail-bounds` (group e, batch 14)
- `robust-mean-estimation-under-heavy-tails` requires `symmetrization-rademacher-complexity-and-covering-entropy` (group e, batch 15)

Another group's pages depend on yours:

- `robust-covariance-and-high-dimensional-stability` (group l) requires your `contamination-models-and-robust-risk`
- `robust-covariance-and-high-dimensional-stability` (group l) requires your `robust-mean-estimation-under-heavy-tails`

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
