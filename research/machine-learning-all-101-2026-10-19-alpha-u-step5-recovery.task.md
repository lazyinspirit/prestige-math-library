# Step 5 adjudication — group **u**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 62, 63, 64: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **62**: `research/machine-learning-all-101-2026-10-19-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **63**: `research/machine-learning-all-101-2026-10-19-batch-63-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **64**: `research/machine-learning-all-101-2026-10-19-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 62 | `compact-metric-kantorovich-rubinstein-duality` | A | machine-learning | 2813 | `finite-metric-transport-duality`, `metric-spaces`, `compactness-in-metric-spaces`, `compactness`, `subspaces-products-and-quotients`, `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties`, `the-lebesgue-integral-and-the-convergence-theorems`, `finite-window-spatial-point-process-likelihoods` |
| 62 | `compact-metric-kantorovich-rubinstein-duality-examples` | B | machine-learning | 2872 | `compact-metric-kantorovich-rubinstein-duality`, `finite-sample-point-estimation-and-unbiased-optimality` |
| 63 | `integral-probability-metrics-and-wasserstein-gans` | A | machine-learning | 2814 | `compact-metric-kantorovich-rubinstein-duality`, `construction-of-r-via-cauchy-sequences`, `measurable-functions-and-simple-approximation`, `series-and-nonnegative-tests`, `the-lebesgue-integral-and-the-convergence-theorems`, `lebesgue-measure-on-euclidean-space`, `monotone-hjb-schemes-and-policy-iteration` |
| 63 | `integral-probability-metrics-and-wasserstein-gans-examples` | B | machine-learning | 2815 | `integral-probability-metrics-and-wasserstein-gans` |
| 64 | `normalizing-flows-and-exact-density-models` | A | machine-learning | 2816 | `fubini-and-change-of-variables`, `matrix-differentiation-and-first-order-spectral-perturbation`, `product-measures-and-the-fubini-tonelli-theorems` |
| 64 | `normalizing-flows-and-exact-density-models-examples` | B | machine-learning | 2817 | `normalizing-flows-and-exact-density-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `compact-metric-kantorovich-rubinstein-duality` — Kantorovich–Rubinstein duality on compact metric spaces (9 item(s))

- `def-compact-metric-wasserstein-one` · definition — The coupling definition of the 1-Wasserstein cost on a compact metric space
- `lem-compact-metric-space-has-finite-borel-net-quantization` · lemma — A compact metric space has a finite Borel nearest-center quantization at every positive scale
- `lem-mcshane-extension-from-a-finite-subset` · lemma — The McShane formula extends a 1-Lipschitz function from a finite subset
- `lem-compact-metric-space-is-second-countable-under-countable-choice` · lemma — A compact metric space is second-countable under countable choice
- `lem-finite-metric-plan-lifts-to-a-borel-coupling` · lemma — A finite coupling lifts to a Borel coupling with a controlled metric cost
- `thm-kantorovich-rubinstein-duality-on-compact-second-countable-metric-spaces` · theorem — Kantorovich–Rubinstein duality on compact second-countable metric spaces
- `thm-kantorovich-rubinstein-duality-on-compact-metric-spaces-under-countable-choice` · theorem — Kantorovich–Rubinstein duality on compact metric spaces under countable choice
- `lem-borel-section-product-on-compact-metric-spaces` · lemma — Borel product probabilities on compact metric spaces by sections
- `thm-kantorovich-rubinstein-duality-on-compact-metric-spaces` · theorem — Kantorovich–Rubinstein duality on compact metric spaces

### `compact-metric-kantorovich-rubinstein-duality-examples` — Kantorovich–Rubinstein duality on compact metric spaces — Examples (2 item(s))

- `ex-kantorovich-rubinstein-on-a-compact-interval` · example — Kantorovich–Rubinstein duality for endpoint masses on a compact interval
- `ex-kantorovich-rubinstein-for-two-separated-point-masses` · example — Kantorovich–Rubinstein duality for masses on two separated points

### `integral-probability-metrics-and-wasserstein-gans` — Integral probability metrics and Wasserstein GANs (3 item(s))

- `def-integral-probability-metric` · definition — Integral probability metrics
- `thm-wgan-ideal-critic-generator-gradient` · theorem — Continuity and ideal-critic gradients for compact-space Wasserstein GAN objectives
- `cor-wgan-loss-differentiable-almost-everywhere-under-choice` · corollary — The compact-space WGAN value is differentiable almost everywhere under choice

### `integral-probability-metrics-and-wasserstein-gans-examples` — Integral probability metrics and Wasserstein GANs — Examples (3 item(s))

- `ex-weight-clipping-is-not-exact-lipschitz-enforcement` · example — Point masses, Jensen–Shannon saturation, and weight clipping
- `fs-pointwise-integrable-generator-constants-imply-locally-lipschitz-wgan-loss` · false-statement — FALSE: pointwise-integrable generator constants imply a locally Lipschitz WGAN loss
- `fs-pointwise-integrable-generator-constants-justify-critic-gradient-exchange` · false-statement — FALSE: pointwise-integrable generator constants justify ideal-critic gradient exchange

### `normalizing-flows-and-exact-density-models` — Exact-density normalizing flows (3 item(s))

- `def-normalizing-flow` · definition — A normalizing flow and its base density
- `thm-change-of-variables-density-for-diffeomorphic-flow` · theorem — A diffeomorphic flow has the inverse-Jacobian density
- `thm-triangular-flow-universal-density-representation` · theorem — Positive densities with smooth conditional CDFs admit an exact triangular-flow representation

### `normalizing-flows-and-exact-density-models-examples` — Exact-density normalizing flows — Examples (2 item(s))

- `ex-affine-coupling-triangular-jacobian` · example — A unit-scale affine coupling has a triangular Jacobian
- `ex-singular-data-support-limitation` · example — A full-dimensional flow cannot represent a line-supported law exactly

## Your seams

Your pages depend on another group's:

- `compact-metric-kantorovich-rubinstein-duality` requires `finite-metric-transport-duality` (group t, batch 61)

Another group's pages depend on yours:

- `conditional-flow-matching-and-transport-paths` (group w) requires your `compact-metric-kantorovich-rubinstein-duality`

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

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

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
