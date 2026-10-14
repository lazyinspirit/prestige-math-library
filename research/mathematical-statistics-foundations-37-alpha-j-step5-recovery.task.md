# Step 5 adjudication — group **j**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/mathematical-statistics-foundations-37-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/mathematical-statistics-foundations-37-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/mathematical-statistics-foundations-37-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 28 | `semiparametric-models-and-tangent-spaces` | A | mathematical-statistics | 1898 | `dominated-experiments-likelihood-and-sufficiency`, `local-asymptotic-normality-contiguity-and-efficiency`, `hilbert-space-geometry-and-riesz-representation` |
| 28 | `semiparametric-models-and-tangent-spaces-examples` | B | mathematical-statistics | 1899 | `semiparametric-models-and-tangent-spaces` |
| 29 | `pathwise-differentiability-influence-functions-and-efficient-scores` | A | mathematical-statistics | 1900 | `semiparametric-models-and-tangent-spaces`, `fisher-information-and-finite-sample-information-bounds`, `local-asymptotic-normality-contiguity-and-efficiency` |
| 29 | `pathwise-differentiability-influence-functions-and-efficient-scores-examples` | B | mathematical-statistics | 1901 | `pathwise-differentiability-influence-functions-and-efficient-scores` |
| 30 | `semiparametric-efficiency-and-regular-estimation` | A | mathematical-statistics | 1902 | `pathwise-differentiability-influence-functions-and-efficient-scores`, `local-asymptotic-normality-contiguity-and-efficiency`, `central-limit-theorems` |
| 30 | `semiparametric-efficiency-and-regular-estimation-examples` | B | mathematical-statistics | 1903 | `semiparametric-efficiency-and-regular-estimation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `semiparametric-models-and-tangent-spaces` — Semiparametric Models and Tangent Spaces (9 item(s))

- `def-mean-zero-square-integrable-space` · definition — Mean-zero square-integrable functions
- `def-dqm-submodel-through-a-law` · definition — A dominated differentiable-in-quadratic-mean submodel
- `thm-mean-zero-square-integrable-space-is-hilbert` · theorem — The mean-zero L² space is a Hilbert space
- `thm-dqm-score-mean-zero` · theorem — A DQM score has mean zero and is unique
- `def-tangent-set` · definition — Tangent set of a statistical model at a law
- `def-tangent-space` · definition — Closed tangent space
- `thm-tangent-space-is-closed-linear-subspace` · theorem — A tangent space is a closed linear subspace
- `def-nuisance-tangent-space` · definition — Nuisance tangent space
- `def-nuisance-tangent-orthogonal-complement` · definition — Orthogonal complement of a nuisance tangent space

### `semiparametric-models-and-tangent-spaces-examples` — Semiparametric Models and Tangent Spaces — Examples (3 item(s))

- `ex-bounded-scores-generate-unrestricted-tangent-space` · example — Bounded mean-zero scores generate the unrestricted tangent space
- `ex-regular-bernoulli-submodel-dqm-score` · example — A regular Bernoulli submodel and its score
- `ex-boundary-score-cone-and-linear-tangent-space` · example — A boundary score cone differs from its tangent space

### `pathwise-differentiability-influence-functions-and-efficient-scores` — Influence Functions and Efficient Scores (5 item(s))

- `thm-influence-curve-representers` · theorem — Influence-curve representers form an affine orthogonal-complement class
- `def-asymptotically-linear-estimator-and-influence-function` · definition — Asymptotically linear estimators and influence functions
- `def-pathwise-differentiable-functional` · definition — Pathwise differentiability and parameter influence curves
- `def-efficient-score` · definition — Efficient score and efficient information
- `thm-efficient-score-canonical-gradient` · theorem — Efficient score gives the canonical gradient

### `pathwise-differentiability-influence-functions-and-efficient-scores-examples` — Influence Functions and Efficient Scores — Examples (3 item(s))

- `ex-pathwise-derivative-not-continuous-in-tangent-norm` · example — A mean derivative that is not continuous in the tangent norm
- `ex-mean-functional-and-sample-mean-influence-curve` · example — Mean functional and the sample-mean influence function
- `ex-efficient-score-nuisance-projection` · example — A finite nuisance-score projection

### `semiparametric-efficiency-and-regular-estimation` — Semiparametric Efficiency (5 item(s))

- `thm-asymptotic-linearity-implies-normality` · theorem — Asymptotic linearity implies asymptotic normality
- `lem-finite-dimensional-functional-convolution-bound` · lemma — Finite-dimensional LAN convolution bound for differentiable functionals
- `lem-one-sided-dqm-implies-iid-lan` · lemma — A one-sided DQM path yields an iid LAN proxy
- `thm-semiparametric-information-bound-for-regular-al-estimators` · theorem — Semiparametric information bound for regular asymptotically linear estimators
- `thm-general-regular-estimator-convolution-bound` · theorem — Convolution bound for general regular estimators

### `semiparametric-efficiency-and-regular-estimation-examples` — Semiparametric Efficiency — Examples (2 item(s))

- `cex-finite-mean-functional-without-l2-influence-curve` · counterexample — A finite-mean functional without a square-integrable influence curve
- `ex-sample-mean-attains-unrestricted-mean-bound` · example — The sample mean attains the unrestricted mean bound

## Your seams

Your pages depend on another group's:

- `semiparametric-models-and-tangent-spaces` requires `dominated-experiments-likelihood-and-sufficiency` (group b, batch 4)
- `semiparametric-models-and-tangent-spaces` requires `local-asymptotic-normality-contiguity-and-efficiency` (group h, batch 23)
- `pathwise-differentiability-influence-functions-and-efficient-scores` requires `fisher-information-and-finite-sample-information-bounds` (group c, batch 7)
- `pathwise-differentiability-influence-functions-and-efficient-scores` requires `local-asymptotic-normality-contiguity-and-efficiency` (group h, batch 23)
- `semiparametric-efficiency-and-regular-estimation` requires `local-asymptotic-normality-contiguity-and-efficiency` (group h, batch 23)

Another group's pages depend on yours:

- `robust-influence-and-breakdown` (group k) requires your `pathwise-differentiability-influence-functions-and-efficient-scores`

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
