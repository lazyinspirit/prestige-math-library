# Step 5 adjudication — group **d**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 31 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `minimax-testing-and-detection-rates` | A | inverse-problems | 3016 | `statistical-inverse-experiments-and-white-noise`, `gaussian-sequence-models-and-risk-decomposition`, `minimax-lower-bounds-and-information-theoretic-methods`, `cost-constrained-gaussian-and-feedback-channels`, `outward-rounded-interval-and-ball-arithmetic` |
| 10 | `minimax-testing-and-detection-rates-examples` | B | inverse-problems | 3017 | `minimax-testing-and-detection-rates` |
| 11 | `adaptive-spectral-regularization-and-solit` | A | inverse-problems | 3018 | `statistical-inverse-experiments-and-white-noise`, `gaussian-sequence-models-and-risk-decomposition`, `deterministic-source-conditions-and-optimal-recovery`, `spectral-regularization-and-parameter-choice` |
| 11 | `adaptive-spectral-regularization-and-solit-examples` | B | inverse-problems | 3019 | `adaptive-spectral-regularization-and-solit` |
| 12 | `feature-inference-and-map-testing` | A | inverse-problems | 3020 | `statistical-inverse-experiments-and-white-noise`, `linear-operators-pseudoinverses-and-picard-criteria`, `hilbert-space-geometry-and-riesz-representation`, `bayesian-models-priors-and-posterior-laws`, `gaussian-process-priors-and-posterior-laws`, `gaussian-process-support-and-concentration`, `numerical-inverse-problems-and-regularization-error`, `detection-and-quantification-limits`, `continuous-functional-calculus-for-self-adjoint-and-normal-operators` |
| 12 | `feature-inference-and-map-testing-examples` | B | inverse-problems | 3021 | `feature-inference-and-map-testing`, `spectral-regularization-and-parameter-choice` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `minimax-testing-and-detection-rates` — Minimax signal detection and separation rates (10 item(s))

- `lem-ip-weighted-chi-square-triangular-array-limit` · lemma — Weighted chi-square triangular-array limit
- `lem-ip-sparse-gaussian-extremal-profile` · lemma — Sparse Gaussian scalar certificate and extremal profile
- `lem-ip-finite-independent-array-fourth-moment-normal-limit` · lemma — A finite-array normal limit from vanishing fourth moments
- `def-ip-minimax-detection-risk-and-separation` · definition — Minimax detection risk and separation rate
- `lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r` · lemma — Existence of a finite q=2 ellipsoid extremal profile for small radius
- `lem-ip-q2-ellipsoid-extremal-profile-is-minimizer` · lemma — The q=2 ellipsoid extremal profile minimizes the fourth-power objective
- `lem-ip-gaussian-product-mixture-testing-bound` · lemma — Symmetric Gaussian product-mixture testing bound
- `thm-ip-sparse-detection-regime-split` · theorem — Sparse q<2 detection regime split
- `thm-ip-ellipsoid-detection-boundary` · theorem — q=2 Gaussian-sequence ellipsoid detection boundary
- `cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics` · corollary — Sharp Gaussian asymptotics under a vanishing largest weight

### `minimax-testing-and-detection-rates-examples` — Minimax signal detection and separation rates — Examples and Counterexamples (5 item(s))

- `ex-ip-sparse-detection-lambda-zero-boundary` · example — The lambda-zero sparse detection boundary
- `ex-ip-mildly-illposed-sobolev-detection-rate` · example — Mildly ill-posed Sobolev q=2 detection rate
- `ex-ip-mildly-illposed-analytic-detection-rate` · example — Mildly ill-posed analytic q=2 detection rate
- `ex-ip-severely-illposed-sobolev-detection-rate` · example — Severely ill-posed Sobolev q=2 detection rate
- `ex-ip-severely-illposed-analytic-detection-rate` · example — Severely ill-posed analytic q=2 detection rate

### `adaptive-spectral-regularization-and-solit` — Adaptive spectral regularization by SOLIT (5 item(s))

- `lem-ip-gaussian-series-norm-tail-and-fourth-moment` · lemma — Gaussian series norm tails and fourth moments
- `def-ip-ordered-filter-grid-and-source-index` · definition — Ordered spectral filters, source indices, and variance grids
- `lem-ip-solit-filter-risk-decomposition-and-monotone-bias` · lemma — Risk decomposition and monotone bias for ordered spectral filters
- `alg-ip-solit-parameter-choice` · algorithm — SOLIT parameter choice on a geometric-variance grid
- `thm-ip-solit-oracle-risk-and-rate` · theorem — SOLIT oracle risk bound and spectral rates

### `adaptive-spectral-regularization-and-solit-examples` — Adaptive spectral regularization by SOLIT — Examples and Counterexamples (3 item(s))

- `ex-ip-solit-antiderivative` · example — SOLIT for a Dirichlet second-antiderivative model
- `ex-ip-solit-satellite-gradiometry` · example — SOLIT in the mean-zero 2D satellite-gradiometry model
- `ex-ip-solit-periodic-heat-equation` · example — SOLIT for the periodic heat equation (reported simulation)

### `feature-inference-and-map-testing` — Linear feature identifiability and Gaussian MAP tests (5 item(s))

- `def-ip-feature-estimability-through-adjoint-range` · definition — Exact linear feature estimability through the adjoint range
- `thm-ip-isonormal-gaussian-posterior-law` · theorem — Gaussian posterior law in an isonormal inverse experiment
- `alg-ip-gaussian-map-feature-test` · algorithm — Gaussian MAP feature test
- `thm-ip-map-test-level-and-power` · theorem — Level, power, and weighted regularization of Gaussian MAP feature tests
- `thm-ip-unrestricted-map-test-can-have-level-one` · theorem — A non-eigenfeature can give an unrestricted Gaussian MAP test level one

### `feature-inference-and-map-testing-examples` — Linear feature identifiability and Gaussian MAP tests — Examples and Counterexamples (3 item(s))

- `ex-ip-adjoint-range-feature-is-estimable` · example — An adjoint-range feature has an exact one-probe estimator
- `ex-ip-closure-only-feature-is-not-exactly-estimable` · example — A compact diagonal map has a closure-only feature
- `ex-ip-non-eigenfeature-map-test-has-level-one` · example — A non-eigenfeature gives Gaussian MAP rejection probabilities tending to one

## Your seams

Your pages depend on another group's:

- `minimax-testing-and-detection-rates` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `minimax-testing-and-detection-rates` requires `gaussian-sequence-models-and-risk-decomposition` (group c, batch 8)
- `adaptive-spectral-regularization-and-solit` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `adaptive-spectral-regularization-and-solit` requires `gaussian-sequence-models-and-risk-decomposition` (group c, batch 8)
- `adaptive-spectral-regularization-and-solit` requires `deterministic-source-conditions-and-optimal-recovery` (group a, batch 3)
- `feature-inference-and-map-testing` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `feature-inference-and-map-testing` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)

Another group's pages depend on yours:

- `bayesian-inverse-experimental-design-and-information-gain` (group r) requires your `feature-inference-and-map-testing`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
