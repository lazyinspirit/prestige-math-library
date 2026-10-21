# Step 5 adjudication — group **g**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `map-estimators-and-cameron-martin-geometry` | A | inverse-problems | 3034 | `function-space-priors-and-random-regularity`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `gaussian-process-support-and-concentration`, `local-asymptotic-normality-contiguity-and-efficiency` |
| 19 | `map-estimators-and-cameron-martin-geometry-examples` | B | inverse-problems | 3035 | `map-estimators-and-cameron-martin-geometry`, `local-asymptotic-normality-contiguity-and-efficiency` |
| 20 | `posterior-contraction-in-gaussian-sequence-inversion` | A | inverse-problems | 3036 | `statistical-inverse-experiments-and-white-noise`, `gaussian-sequence-models-and-risk-decomposition`, `minimax-estimation-over-inverse-source-classes`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `linear-gaussian-inverse-posteriors-and-tikhonov`, `gaussian-process-posterior-contraction`, `gaussian-process-priors-and-posterior-laws` |
| 20 | `posterior-contraction-in-gaussian-sequence-inversion-examples` | B | inverse-problems | 3037 | `posterior-contraction-in-gaussian-sequence-inversion`, `hilbert-valued-clt-for-weakly-dependent-functional-time-series`, `linear-prediction-for-dependent-data` |
| 21 | `credible-sets-and-frequency-coverage-in-inverse-problems` | A | inverse-problems | 3038 | `statistical-inverse-experiments-and-white-noise`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `posterior-contraction-in-gaussian-sequence-inversion`, `adaptive-empirical-bayes-credible-set-calibration`, `functional-bayesian-limits-and-credible-set-calibration` |
| 21 | `credible-sets-and-frequency-coverage-in-inverse-problems-examples` | B | inverse-problems | 3039 | `credible-sets-and-frequency-coverage-in-inverse-problems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `map-estimators-and-cameron-martin-geometry` — Small-ball MAP and Cameron–Martin geometry (4 item(s))

- `lem-ip-banach-gaussian-cm-shift-ball-bound` · lemma — A Cameron–Martin shift cannot increase centered Gaussian ball mass
- `lem-ip-gaussian-shift-small-ball-ratio` · lemma — Small-ball ratios for Cameron–Martin translates of a Banach Gaussian
- `def-ip-small-ball-map-estimator` · definition — Small-ball MAP conventions and Cameron–Martin relative modes
- `thm-ip-gaussian-small-ball-map-functional` · theorem — Gaussian posterior small-ball ratios and the Onsager–Machlup functional

### `map-estimators-and-cameron-martin-geometry-examples` — Small-ball MAP and Cameron–Martin geometry — Examples and Counterexamples (3 item(s))

- `ex-ip-finite-dimensional-small-ball-map-equals-density-mode` · example — Finite-dimensional small-ball MAP equals the density mode
- `cex-ip-infinite-dimensional-pointwise-density-fallacy` · counterexample — An infinite-dimensional Gaussian has no locally finite translation-invariant density reference
- `ex-ip-map-differs-from-posterior-mean` · example — The posterior mean need not be a small-ball MAP

### `posterior-contraction-in-gaussian-sequence-inversion` — Posterior contraction in Gaussian sequence inversion (2 item(s))

- `def-ip-posterior-contraction-rate` · definition — Posterior contraction rate in a Gaussian sequence inverse experiment
- `thm-ip-conjugate-gaussian-sequence-contraction` · theorem — Exact posterior second moment and contraction bound for a Gaussian sequence inverse problem

### `posterior-contraction-in-gaussian-sequence-inversion-examples` — Posterior contraction in Gaussian sequence inversion — Examples and Counterexamples (3 item(s))

- `ex-ip-polynomial-singular-value-posterior-contraction` · example — Polynomial singular-value decay and a power Gaussian prior
- `ex-ip-exponential-singular-value-posterior-contraction` · example — Exponential singular-value decay and an exponentially weighted truth class
- `cex-ip-point-mass-prior-excludes-truth-no-contraction` · counterexample — A point-mass Gaussian prior excluding the truth prevents contraction

### `credible-sets-and-frequency-coverage-in-inverse-problems` — Credible sets and frequentist coverage (2 item(s))

- `def-ip-credible-set-and-frequency-coverage` · definition — Posterior credibility and frequentist coverage
- `op-ip-honest-coverage-over-ill-posed-truth-classes` · open-problem — Exact adaptive credible coverage in mildly ill-posed Gaussian sequence models

### `credible-sets-and-frequency-coverage-in-inverse-problems-examples` — Credible sets and frequentist coverage — Examples and Counterexamples (2 item(s))

- `ex-ip-inverse-coordinate-credible-interval-undercoverage` · example — A proper Gaussian prior yields a credible interval with undercoverage
- `cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth` · counterexample — Sparse-gap truths defeat uniform coverage over a hyperrectangle

## Your seams

Your pages depend on another group's:

- `map-estimators-and-cameron-martin-geometry` requires `function-space-priors-and-random-regularity` (group e, batch 15)
- `map-estimators-and-cameron-martin-geometry` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `posterior-contraction-in-gaussian-sequence-inversion` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `posterior-contraction-in-gaussian-sequence-inversion` requires `gaussian-sequence-models-and-risk-decomposition` (group c, batch 8)
- `posterior-contraction-in-gaussian-sequence-inversion` requires `minimax-estimation-over-inverse-source-classes` (group c, batch 9)
- `posterior-contraction-in-gaussian-sequence-inversion` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `posterior-contraction-in-gaussian-sequence-inversion` requires `linear-gaussian-inverse-posteriors-and-tikhonov` (group f, batch 18)
- `credible-sets-and-frequency-coverage-in-inverse-problems` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `credible-sets-and-frequency-coverage-in-inverse-problems` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)

Another group's pages depend on yours:

- `learned-reconstruction-targets-and-risk` (group p) requires your `posterior-contraction-in-gaussian-sequence-inversion`

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

# Historical Step-5 closure recovery, `inverse-problems-knot-theory-all-109-2026-10-19`

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
