# Step 5 adjudication — group **s**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 59, 60, 61: 3 A/B pair(s), 6 page(s), 47 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **59**: `research/bayesian-computational-statistics-62-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/bayesian-computational-statistics-62-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **61**: `research/bayesian-computational-statistics-62-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 59 | `quasi-monte-carlo-discrepancy-and-rules` | A | bayesian-computational-statistics | 2158 | `statistical-and-computational-error-accounting` |
| 59 | `quasi-monte-carlo-discrepancy-and-rules-examples` | B | bayesian-computational-statistics | 2159 | `quasi-monte-carlo-discrepancy-and-rules` |
| 60 | `randomized-quasi-monte-carlo-and-replicates` | A | bayesian-computational-statistics | 2160 | `quasi-monte-carlo-discrepancy-and-rules` |
| 60 | `randomized-quasi-monte-carlo-and-replicates-examples` | B | bayesian-computational-statistics | 2161 | `randomized-quasi-monte-carlo-and-replicates` |
| 61 | `synthetic-likelihood-and-indirect-inference` | A | bayesian-computational-statistics | 2162 | `numerical-optimization-for-statistical-computation`, `iid-monte-carlo-integration-and-error`, `mixed-effects-and-longitudinal-models` |
| 61 | `synthetic-likelihood-and-indirect-inference-examples` | B | bayesian-computational-statistics | 2163 | `synthetic-likelihood-and-indirect-inference` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quasi-monte-carlo-discrepancy-and-rules` — Deterministic quasi-Monte Carlo and discrepancy (10 item(s))

- `def-star-discrepancy-and-digital-net` · definition — Star discrepancy, digital nets, and digital sequences
- `def-hardykrause-variation` · definition — Hardy–Krause variation anchored at the upper corner
- `lem-bounded-coordinatewise-monotone-is-riemann-integrable` · lemma — A bounded coordinatewise nondecreasing function on a cube is Riemann integrable
- `def-hardykrause-variation-lower-anchor` · definition — Hardy–Krause variation on subrectangles anchored at the lower corner
- `alg-digital-net-and-lattice-rule` · algorithm — Digital point-set and rank-one lattice cube quadrature
- `lem-hk-smooth-mixed-derivative-formula` · lemma — Mixed-derivative formula for smooth Hardy–Krause variation
- `lem-anchored-box-summation-by-parts-hk-variation` · lemma — Anchored-box summation by parts for finite Hardy–Krause variation
- `thm-uniform-distribution-integrates-riemann-functions` · theorem — Uniform distribution integrates Riemann-integrable functions
- `lem-finite-hardykrause-variation-implies-riemann-integrability` · lemma — Finite Hardy–Krause variation implies bounded Riemann integrability
- `thm-koksma-hlawka-integration-bound` · theorem — Koksma–Hlawka integration bound with upper-anchor variation

### `quasi-monte-carlo-discrepancy-and-rules-examples` — Deterministic quasi-Monte Carlo and discrepancy — Examples (4 item(s))

- `ex-diagonal-lattice-poor-joint-projection` · example — Uniform coordinate projections can hide a poor joint projection
- `ex-digital-net-power-of-base-size-restriction` · example — Digital net sizes are powers of their base
- `ex-smooth-finite-hk-integrand-koksma-hlawka` · example — A smooth finite-variation integrand and its deterministic error bound
- `ex-inverse-cdf-integrable-singularity-infinite-variation` · example — An inverse-CDF singularity can be integrable but have infinite variation

### `randomized-quasi-monte-carlo-and-replicates` — Randomized quasi-Monte Carlo and replicate error (20 item(s))

- `def-b-adic-anova-components` · definition — Base-$b$ Haar contrasts and multiresolution ANOVA components
- `lem-countable-iid-baseb-digits-from-one-uniform` · lemma — A single uniform variable supplies countably many independent base-$b$ digits
- `def-lambda-t-net` · definition — $(\lambda,t,m,d)$-nets in base $b$
- `def-rqmc-point-set-and-estimator` · definition — Randomized quasi-Monte Carlo point sets and estimators
- `lem-b-adic-step-functions-dense-in-l2-cube` · lemma — Base-$b$ box step functions are dense in $L^2$ of the cube
- `lem-rqmc-smooth-anova-component-bound` · lemma — Smoothness bounds the high-frequency ANOVA components
- `def-nested-uniform-scramble` · definition — Nested uniform scrambling of a finite point set
- `lem-b-adic-anova-parseval` · lemma — Orthogonal base-$b$ multiresolution and variance decomposition
- `thm-rqmc-single-rule-unbiasedness` · theorem — Marginal uniformity makes an RQMC rule unbiased
- `def-digital-shift-randomization` · definition — Digital shift randomization in base $b$
- `cor-rqmc-replicate-variance-estimator` · corollary — Independent RQMC replicates estimate randomization variance
- `lem-nested-scramble-marginals-and-net-preservation` · lemma — Nested uniform scrambles preserve net counts and uniform marginals
- `lem-digital-shift-marginals-and-net-preservation` · lemma — Digital shifts preserve net counts and uniform marginals
- `cor-rqmc-studentized-replicate-clt` · corollary — Studentized RQMC replicate means are asymptotically normal as $R\to\infty$
- `lem-rqmc-scrambled-net-variance-identity` · lemma — ANOVA variance identity for nestedly scrambled point sets
- `lem-rqmc-scrambled-net-gain-formula` · lemma — Pair-count formula for scrambled-net gain coefficients
- `lem-rqmc-general-net-gain-bound` · lemma — Fixed-quality net gain coefficients are uniformly bounded
- `lem-rqmc-zero-net-sharp-gain-bound` · lemma — Sharp gain bound for scrambled $(0,m,d)$-nets
- `thm-rqmc-nested-scramble-smooth-net-variance-rate` · theorem — Smooth-integrand variance rate for nestedly scrambled $(\lambda,t,m,d)$-nets
- `thm-rqmc-nested-scramble-zero-net-variance-bound` · theorem — Variance bound for a nested scramble of a $(0,m,d)$-net

### `randomized-quasi-monte-carlo-and-replicates-examples` — Randomized quasi-Monte Carlo and replicate error — Examples (4 item(s))

- `ex-one-rqmc-scramble-vs-independent-replicates` · example — One scrambled rule versus independent full-set replicates
- `ex-skewed-finite-replicate-student-coverage` · example — A skewed finite-replicate law defeats a nominal Student interval
- `ex-digital-shift-vs-nested-scramble` · example — A digital shift and a nested scramble give different error laws
- `ex-rqmc-smooth-vs-singular-integrands` · example — A smooth integrand satisfies the bound while an integrable singularity does not

### `synthetic-likelihood-and-indirect-inference` — Synthetic likelihood and indirect inference (6 item(s))

- `def-synthetic-likelihood` · definition — Ideal and finite-simulation synthetic likelihood
- `def-binding-function-and-indirect-inference-target` · definition — Binding function and indirect-inference target
- `lem-two-simulation-summary-covariance-is-singular-in-two-dimensions` · lemma — A two-simulation covariance in two dimensions is singular
- `thm-indirect-inference-target-exists-with-lexicographic-tie-break` · theorem — The compact binding target exists and has a unique lexicographic tie-break
- `alg-synthetic-likelihood-monte-carlo-estimation` · algorithm — Finite-simulation plug-in synthetic-likelihood evaluation
- `rem-finite-simulation-synthetic-likelihood-is-a-random-approximation` · remark — Finite-simulation synthetic likelihood is a random approximation

### `synthetic-likelihood-and-indirect-inference-examples` — Synthetic likelihood and indirect inference — Examples (3 item(s))

- `ex-gaussian-synthetic-likelihood-for-bernoulli-summary-law` · example — A Gaussian synthetic likelihood for a Bernoulli summary is not exact
- `ex-nonunique-binding-function-target` · example — A non-injective binding map cannot recover a sign
- `ex-two-simulation-covariance-is-random-and-singular` · example — Two simulated square summaries give a random singular covariance

## Your seams

Your pages depend on another group's:

- `quasi-monte-carlo-discrepancy-and-rules` requires `statistical-and-computational-error-accounting` (group r, batch 57)
- `synthetic-likelihood-and-indirect-inference` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)
- `synthetic-likelihood-and-indirect-inference` requires `iid-monte-carlo-integration-and-error` (group h, batch 28)

Another group's pages depend on yours:

- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `synthetic-likelihood-and-indirect-inference`

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
