# Step 5 adjudication — group **h**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/mathematical-statistics-foundations-37-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/mathematical-statistics-foundations-37-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/mathematical-statistics-foundations-37-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 22 | `likelihood-asymptotics-wald-score-and-likelihood-ratio` | A | mathematical-statistics | 1886 | `fisher-information-and-finite-sample-information-bounds`, `asymptotic-convergence-consistency-and-identification`, `m-and-z-estimation-and-uniform-laws`, `delta-method-and-asymptotic-normality`, `gaussian-orthogonal-decomposition-and-quadratic-forms` |
| 22 | `likelihood-asymptotics-wald-score-and-likelihood-ratio-examples` | B | mathematical-statistics | 1887 | `likelihood-asymptotics-wald-score-and-likelihood-ratio` |
| 23 | `local-asymptotic-normality-contiguity-and-efficiency` | A | mathematical-statistics | 1888 | `likelihood-asymptotics-wald-score-and-likelihood-ratio`, `minimax-lower-bounds-and-information-theoretic-methods`, `central-limit-theorems`, `inner-product-spaces-and-orthogonality` |
| 23 | `local-asymptotic-normality-contiguity-and-efficiency-examples` | B | mathematical-statistics | 1889 | `local-asymptotic-normality-contiguity-and-efficiency` |
| 24 | `boundary-and-misspecified-asymptotics` | A | mathematical-statistics | 1890 | `delta-method-and-asymptotic-normality`, `likelihood-asymptotics-wald-score-and-likelihood-ratio`, `local-asymptotic-normality-contiguity-and-efficiency` |
| 24 | `boundary-and-misspecified-asymptotics-examples` | B | mathematical-statistics | 1891 | `boundary-and-misspecified-asymptotics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `likelihood-asymptotics-wald-score-and-likelihood-ratio` — Likelihood Theory and Classical Calibration (6 item(s))

- `def-qmd-path` · definition — Quadratic-mean differentiability at a parameter
- `lem-parametric-qmd-score-has-mean-zero` · lemma — A finite-dimensional QMD score has mean zero
- `def-wald-score-likelihood-ratio-statistics` · definition — Wald, score, and likelihood-ratio statistics for regular nulls
- `thm-regular-mle-asymptotic-linearity-and-normality` · theorem — Asymptotic linearity and normality of a regular MLE
- `thm-wald-score-likelihood-ratio-asymptotic-chi-square` · theorem — Wald, score, and likelihood-ratio asymptotic chi-square calibration
- `cor-wald-score-lr-asymptotic-equivalence` · corollary — First-order equivalence of Wald, score, and likelihood-ratio statistics

### `likelihood-asymptotics-wald-score-and-likelihood-ratio-examples` — Likelihood Theory and Classical Calibration — Examples (2 item(s))

- `ex-normal-mean-exact-likelihood-calibration` · example — Known-variance normal mean and exact likelihood calibration
- `cex-boundary-null-has-nonstandard-lr-limit` · counterexample — A boundary null has a nonstandard likelihood-ratio limit

### `local-asymptotic-normality-contiguity-and-efficiency` — LAN, Contiguity and Efficiency (18 item(s))

- `def-contiguous-sequences-of-measures` · definition — Contiguous sequences of probability measures
- `lem-boundary-of-convex-set-is-lebesgue-null` · lemma — The boundary of a convex set is Lebesgue null
- `def-lan-experiment` · definition — Local asymptotic normality for local experiments
- `thm-brunn-minkowski-for-compact-convex-sets` · theorem — Brunn–Minkowski inequality for compact convex sets
- `thm-mean-one-likelihood-ratio-limit-implies-contiguity` · theorem — A mean-one likelihood-ratio limit implies contiguity
- `def-regular-estimator-under-local-alternatives` · definition — Regular estimator under local alternatives
- `lem-compact-uniform-lan-posterior-approximation` · lemma — Compact-uniform LAN approximates compact-prior posteriors
- `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss` · lemma — A centered Gaussian minimizes bounded symmetric quasi-convex loss
- `thm-le-cam-third-lemma` · theorem — Le Cam's third lemma for a Gaussian likelihood-ratio limit
- `lem-bowl-shaped-loss-has-centered-lipschitz-minorants` · lemma — Bounded bowl-shaped losses have Gaussian-centered Lipschitz minorants
- `lem-qmd-score-centered-and-finite-information` · lemma — A QMD score is centered and has finite information
- `thm-convolution-bound-for-regular-estimators` · theorem — Convolution bound for regular estimators
- `lem-qmd-singular-and-zero-overlap-masses` · lemma — QMD controls singular and zero-overlap masses
- `lem-finite-prior-lan-bayes-envelope-convergence` · lemma — Finite-prior Bayes envelopes converge under pointwise LAN
- `lem-finite-priors-approximate-gaussian-shift-bayes-risk` · lemma — Finite priors approximate Gaussian-shift Bayes values
- `lem-qmd-normalized-product-likelihood-expansion` · lemma — Normalized product likelihood expansion under QMD
- `thm-local-asymptotic-minimax-bound` · theorem — Local asymptotic minimax bound
- `thm-qmd-implies-lan-for-iid` · theorem — Quadratic-mean differentiability implies iid LAN

### `local-asymptotic-normality-contiguity-and-efficiency-examples` — LAN, Contiguity and Efficiency — Examples (2 item(s))

- `cex-noncontiguous-binary-sequences` · counterexample — Binary laws with a rare event are not contiguous
- `ex-gaussian-shift-lan-and-regular-sample-mean` · example — Gaussian shift LAN and the regular sample mean

### `boundary-and-misspecified-asymptotics` — Nonregular and Misspecified Limits (6 item(s))

- `def-pseudo-true-parameter-under-misspecification` · definition — Pseudo-true parameter under misspecification
- `thm-m-estimator-sandwich-limit-under-misspecification` · theorem — Misspecified M-estimator sandwich limit
- `def-fisher-information-metric-distance` · definition — Fisher-information metric distance to a set
- `lem-quadratic-likelihood-optimization-is-fisher-distance` · lemma — Quadratic likelihood optimization is squared Fisher distance
- `thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model` · theorem — Likelihood-ratio limit for local cones in a QMD model
- `cex-uniform-maximum-has-n-rate-not-root-n` · counterexample — The uniform endpoint MLE has rate n, not square-root n

### `boundary-and-misspecified-asymptotics-examples` — Nonregular and Misspecified Limits — Examples (3 item(s))

- `ex-uniform-endpoint-mle` · example — The endpoint MLE for a uniform scale
- `ex-one-sided-normal-likelihood-ratio-at-boundary` · example — A one-sided normal likelihood ratio at the boundary
- `ex-normal-location-under-wrong-variance` · example — Normal location fitted under the wrong variance

## Your seams

Your pages depend on another group's:

- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `fisher-information-and-finite-sample-information-bounds` (group c, batch 7)
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `asymptotic-convergence-consistency-and-identification` (group e, batch 13)
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `m-and-z-estimation-and-uniform-laws` (group g, batch 20)
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `delta-method-and-asymptotic-normality` (group g, batch 21)
- `likelihood-asymptotics-wald-score-and-likelihood-ratio` requires `gaussian-orthogonal-decomposition-and-quadratic-forms` (group d, batch 10)
- `local-asymptotic-normality-contiguity-and-efficiency` requires `minimax-lower-bounds-and-information-theoretic-methods` (group f, batch 17)
- `boundary-and-misspecified-asymptotics` requires `delta-method-and-asymptotic-normality` (group g, batch 21)

Another group's pages depend on yours:

- `semiparametric-models-and-tangent-spaces` (group j) requires your `local-asymptotic-normality-contiguity-and-efficiency`
- `pathwise-differentiability-influence-functions-and-efficient-scores` (group j) requires your `local-asymptotic-normality-contiguity-and-efficiency`
- `semiparametric-efficiency-and-regular-estimation` (group j) requires your `local-asymptotic-normality-contiguity-and-efficiency`

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
