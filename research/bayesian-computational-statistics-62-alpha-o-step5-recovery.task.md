# Step 5 adjudication — group **o**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 47, 48, 49: 3 A/B pair(s), 6 page(s), 41 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **47**: `research/bayesian-computational-statistics-62-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/bayesian-computational-statistics-62-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **49**: `research/bayesian-computational-statistics-62-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 47 | `particle-mcmc-pmmh-and-particle-gibbs` | A | bayesian-computational-statistics | 2134 | `metropolis-hastings-algorithm-and-invariance`, `feynman-kac-particle-filters` |
| 47 | `particle-mcmc-pmmh-and-particle-gibbs-examples` | B | bayesian-computational-statistics | 2135 | `particle-mcmc-pmmh-and-particle-gibbs` |
| 48 | `data-assimilation-variational-and-ensemble-methods` | A | bayesian-computational-statistics | 2136 | `numerical-optimization-for-statistical-computation`, `kalman-smoothing-and-rts-recursion` |
| 48 | `data-assimilation-variational-and-ensemble-methods-examples` | B | bayesian-computational-statistics | 2137 | `data-assimilation-variational-and-ensemble-methods` |
| 49 | `abc-mcmc-and-sequential-abc` | A | bayesian-computational-statistics | 2138 | `approximate-bayesian-computation-and-simulation-based-inference`, `metropolis-hastings-algorithm-and-invariance`, `feynman-kac-particle-filters` |
| 49 | `abc-mcmc-and-sequential-abc-examples` | B | bayesian-computational-statistics | 2139 | `abc-mcmc-and-sequential-abc` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `particle-mcmc-pmmh-and-particle-gibbs` — Particle MCMC: PMMH and particle Gibbs (10 item(s))

- `alg-pmmh` · algorithm — Particle marginal Metropolis–Hastings
- `thm-pmmh-exact-invariance` · theorem — PMMH preserves the exact parameter posterior
- `alg-monte-carlo-within-metropolis` · algorithm — Monte Carlo within Metropolis
- `def-particle-gibbs-extended-target` · definition — Particle Gibbs extended target
- `alg-conditional-particle-gibbs` · algorithm — Conditional particle filter for particle Gibbs
- `thm-particle-gibbs-selected-path-marginal` · theorem — The particle Gibbs extended target has the exact smoothing marginal
- `thm-particle-gibbs-conditional-sweep-is-gibbs` · theorem — The conditional particle Gibbs sweep is a Gibbs update
- `def-particle-gibbs-backward-simulation-extended-target` · definition — Backward-simulation particle Gibbs extended target
- `alg-particle-gibbs-backward-simulation` · algorithm — Particle Gibbs with backward simulation
- `thm-particle-gibbs-backward-simulation-sweep-is-gibbs` · theorem — The backward-simulation sweep is a Gibbs update

### `particle-mcmc-pmmh-and-particle-gibbs-examples` — Particle MCMC: PMMH and particle Gibbs — Examples (4 item(s))

- `ex-pseudo-marginal-rejection` · example — Pseudo-marginal rejection retains the current likelihood estimate
- `cex-monte-carlo-within-metropolis-not-exact` · counterexample — Refreshing the current estimate can destroy exactness
- `ex-particle-gibbs-invariant-but-sticky` · example — An invariant particle Gibbs chain can be sticky
- `cex-particle-gibbs-missing-path-support` · counterexample — A particle Gibbs proposal that misses posterior path support

### `data-assimilation-variational-and-ensemble-methods` — Data assimilation: 3DVAR, 4DVAR, and ensemble filters (13 item(s))

- `lem-near-iid-exchangeable-arrays-have-convergent-means` · lemma — A weak law for exchangeable arrays close to an iid row
- `lem-probability-convergence-plus-higher-moments-gives-lp-convergence` · lemma — Convergence in probability plus a higher-moment bound implies Lp convergence
- `lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances` · lemma — Sample covariance converges for exchangeable arrays close in L4 to iid rows
- `def-data-assimilation-problem` · definition — Finite-dimensional data assimilation, forecasts, analyses, filtering, and smoothing
- `alg-ensemble-kalman-filter` · algorithm — Perturbed-observation ensemble Kalman filter
- `alg-four-dimensional-variational-assimilation` · algorithm — Strong- and weak-constraint 4DVAR with a finite gradient run
- `alg-three-dimensional-variational-assimilation` · algorithm — Finite-dimensional 3DVAR analysis
- `lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter` · lemma — Independent perturbed-observation reference members follow the Kalman filter
- `lem-ensemble-kalman-update-preserves-joint-exchangeability` · lemma — The perturbed-observation EnKF update preserves exchangeability
- `lem-perturbed-observation-ensemble-kalman-moment-bounds` · lemma — Uniform finite-horizon moment bounds for perturbed-observation EnKF ensembles
- `thm-three-dimensional-variational-analysis-is-gaussian-map-update` · theorem — The 3DVAR quadratic has the Gaussian MAP and Kalman analysis update
- `thm-three-dimensional-variational-assimilation-tracking-under-contraction` · theorem — 3DVAR tracking error under a global contraction and bounded observation error
- `thm-perturbed-observation-ensemble-kalman-large-ensemble-limit` · theorem — The perturbed-observation EnKF converges to the Kalman filter at fixed horizon

### `data-assimilation-variational-and-ensemble-methods-examples` — Data assimilation: 3DVAR, 4DVAR, and ensemble filters — Examples (4 item(s))

- `ex-finite-ensemble-covariance-fluctuation` · example — A two-member Gaussian ensemble has a fluctuating covariance
- `ex-four-dimensional-variational-objective-has-two-local-minima` · example — A strong-constraint 4DVAR objective can have two local minima
- `ex-nonlinear-observation-ensemble-kalman-does-not-recover-posterior` · example — A nonlinear observation makes a symmetric two-member EnKF miss posterior spread
- `ex-linear-gaussian-three-dimensional-variational-analysis` · example — Scalar Gaussian 3DVAR returns the exact analysis mean

### `abc-mcmc-and-sequential-abc` — ABC-MCMC and ABC-sequential Monte Carlo (6 item(s))

- `def-abc-augmented-tolerance-target` · definition — Augmented ABC tolerance target
- `lem-abc-augmented-target-has-tolerance-posterior-marginal` · lemma — The augmented ABC target has the tolerance posterior as its parameter marginal
- `alg-abc-metropolis-hastings` · algorithm — ABC Metropolis–Hastings on simulator-augmented states
- `alg-abc-sequential-smc` · algorithm — Sequential ABC importance-resampling with tolerance populations
- `thm-abc-metropolis-hastings-invariance` · theorem — ABC Metropolis–Hastings preserves its augmented tolerance target
- `thm-abc-sequential-smc-rn-weight-update` · theorem — Sequential ABC Radon–Nikodym weights target each tolerance law

### `abc-mcmc-and-sequential-abc-examples` — ABC-MCMC and ABC-sequential Monte Carlo — Examples (4 item(s))

- `ex-abc-vanishing-acceptance` · example — ABC acceptance probability vanishes with the tolerance
- `ex-abc-positive-tolerance-stationary-law` · example — A positive-tolerance ABC-MH stationary law can differ from the exact-data posterior
- `ex-abc-sequential-tolerance-schedule-and-rn-weights` · example — A finite ABC-SMC tolerance schedule and its mixture weights
- `ex-abc-smc-finite-particle-collapse` · example — Finite ABC-SMC particles can miss target support despite a valid mixture weight

## Your seams

Your pages depend on another group's:

- `particle-mcmc-pmmh-and-particle-gibbs` requires `metropolis-hastings-algorithm-and-invariance` (group j, batch 33)
- `particle-mcmc-pmmh-and-particle-gibbs` requires `feynman-kac-particle-filters` (group n, batch 44)
- `data-assimilation-variational-and-ensemble-methods` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)
- `data-assimilation-variational-and-ensemble-methods` requires `kalman-smoothing-and-rts-recursion` (group m, batch 43)
- `abc-mcmc-and-sequential-abc` requires `approximate-bayesian-computation-and-simulation-based-inference` (group h, batch 27)
- `abc-mcmc-and-sequential-abc` requires `metropolis-hastings-algorithm-and-invariance` (group j, batch 33)
- `abc-mcmc-and-sequential-abc` requires `feynman-kac-particle-filters` (group n, batch 44)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `bayesian-computational-statistics-62`

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
