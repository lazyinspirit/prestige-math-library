# Step 5 adjudication — group **e**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 17, 18, 19: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **17**: `research/bayesian-computational-statistics-62-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/bayesian-computational-statistics-62-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **19**: `research/bayesian-computational-statistics-62-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 17 | `dirichlet-process-priors-and-finite-partition-updates` | A | bayesian-computational-statistics | 2074 | `conjugate-families-and-posterior-prediction`, `structural-causal-models-dags-and-adjustment` |
| 17 | `dirichlet-process-priors-and-finite-partition-updates-examples` | B | bayesian-computational-statistics | 2075 | `dirichlet-process-priors-and-finite-partition-updates` |
| 18 | `dirichlet-normal-mixture-contraction` | A | bayesian-computational-statistics | 2076 | `iid-posterior-contraction`, `dirichlet-process-priors-and-finite-partition-updates`, `plancherel-measure-and-asymptotic-young-diagrams`, `hierarchical-bayesian-models-and-partial-pooling` |
| 18 | `dirichlet-normal-mixture-contraction-examples` | B | bayesian-computational-statistics | 2077 | `dirichlet-normal-mixture-contraction` |
| 19 | `weak-nonparametric-bernstein-von-mises` | A | bayesian-computational-statistics | 2078 | `orthonormal-bases-parseval-and-fourier-series`, `weak-convergence-tightness-and-representation` |
| 19 | `weak-nonparametric-bernstein-von-mises-examples` | B | bayesian-computational-statistics | 2079 | `weak-nonparametric-bernstein-von-mises` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `dirichlet-process-priors-and-finite-partition-updates` — Dirichlet-process priors and finite-partition updates (8 item(s))

- `lem-countable-discrete-space-is-standard-borel` · lemma — A countable discrete measurable space is standard Borel
- `def-poisson-random-measure` · definition — Poisson random measure on a standard Borel space
- `def-dirichlet-process` · definition — Dirichlet process
- `thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure` · theorem — Existence of a Dirichlet process by normalized gamma Poisson random measure
- `lem-dirichlet-aggregation-under-coarsening` · lemma — Dirichlet parameters add under coarsening
- `thm-dirichlet-process-posterior-update` · theorem — Dirichlet-process posterior update
- `thm-dirichlet-process-polya-urn-predictive-law` · theorem — Dirichlet-process Pólya-urn predictive law
- `rem-dirichlet-process-support-does-not-imply-density-contraction` · remark — Finite-partition conjugacy gives no density-contraction theorem

### `dirichlet-process-priors-and-finite-partition-updates-examples` — Dirichlet-process priors and finite-partition updates — Examples (2 item(s))

- `ex-dirichlet-process-finite-partition-posterior-and-polya-urn` · example — Finite-partition posterior and Pólya-urn draws
- `ex-dirichlet-process-alpha-null-observation-fiber` · example — A base-null observation is a prior-predictive null fiber

### `dirichlet-normal-mixture-contraction` — Dirichlet normal-mixture posterior contraction (13 item(s))

- `lem-dirichlet-normal-mixture-density-well-defined` · lemma — The Dirichlet normal-mixture density is jointly measurable and normalized
- `lem-hellinger-ratio-controls-kl-moments` · lemma — A bounded likelihood ratio controls KL and log-square moments by Hellinger distance
- `lem-gaussian-convolution-kl-and-log-square-second-order-bound` · lemma — Gaussian convolution has second-order KL and log-square error
- `lem-dirichlet-normal-mixture-finite-support-approximation` · lemma — Compactly supported Gaussian mixtures admit logarithmic-size finite approximations
- `lem-iid-posterior-contraction-under-countable-sieves` · lemma — Countably partitioned sieves yield posterior contraction by weighted entropy
- `lem-dirichlet-normal-mixture-sieve-entropy` · lemma — Hellinger entropy for compact-location normal mixtures in a scale band
- `lem-dirichlet-normal-mixture-countable-band-entropy-sum` · lemma — The dyadic scale bands satisfy the weighted entropy condition
- `lem-dirichlet-process-simplex-small-ball` · lemma — A Dirichlet process assigns exponential mass to a finite-partition simplex neighborhood
- `lem-dirichlet-normal-mixture-local-prior-mass` · lemma — The mixture prior places local KL and log-square mass near a compact smooth truth
- `lem-dirichlet-normal-mixture-interval-mass-local-prior-mass` · lemma — Interval masses give a log-free local KL neighborhood for the mixture prior
- `lem-dirichlet-normal-mixture-posterior-sieve-tail` · lemma — The posterior excludes large scales and mixing mass far from compact data
- `thm-dirichlet-normal-mixture-posterior-contraction` · theorem — Dirichlet normal-mixture posterior contraction
- `cor-dirichlet-normal-mixture-interval-mass-refinement` · corollary — An interval-mass condition removes the Gaussian-bias logarithm

### `dirichlet-normal-mixture-contraction-examples` — Dirichlet normal-mixture posterior contraction — Examples (2 item(s))

- `ex-dirichlet-normal-mixture-compact-scale-hyperprior-and-rate` · example — A compact scale hyperprior removes the tail term and permits an explicit bandwidth balance
- `ex-dirichlet-normal-mixture-polynomial-scale-tail-outside-theorem` · example — A polynomial scale tail is outside the stated theorem

### `weak-nonparametric-bernstein-von-mises` — Weak nonparametric Bernstein–von Mises limits (13 item(s))

- `def-negative-sobolev-space-for-white-noise` · definition — Logarithmic negative Sobolev spaces for white noise
- `lem-wavelet-product-prior-is-l2-valued` · lemma — The wavelet product prior is L2-valued
- `lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces` · lemma — The bounded-Lipschitz metric characterizes weak convergence on Polish spaces
- `lem-product-prior-coordinate-posterior-law` · lemma — The product-prior posterior factors by coordinates
- `lem-product-prior-posterior-second-moment-in-negative-sobolev-space` · lemma — A negative-Sobolev posterior second-moment bound
- `lem-finite-coordinate-posterior-total-variation-limit` · lemma — Finite-coordinate posterior total-variation limit
- `lem-density-normal-laws-and-square-summable-gaussian-series` · lemma — Density normal laws and square-summable Gaussian series under countable choice
- `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space` · lemma — White noise is a Borel Gaussian law on the negative Sobolev space
- `cor-canonical-white-noise-law-is-tight-under-choice` · corollary — The canonical white-noise law is tight under the Axiom of Choice
- `thm-weak-nonparametric-bernstein-von-mises-for-product-priors` · theorem — Weak nonparametric Bernstein–von Mises theorem for product priors
- `cor-weak-posterior-convergence-in-negative-sobolev-space` · corollary — The scaled posterior converges weakly on the negative Sobolev space
- `cor-continuous-functionals-of-the-scaled-posterior-converge` · corollary — Continuous images of the scaled posterior converge weakly
- `lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent` · lemma — Prior-predictive and fixed-truth data laws are equivalent

### `weak-nonparametric-bernstein-von-mises-examples` — Weak nonparametric Bernstein–von Mises limits — Examples (2 item(s))

- `ex-white-noise-is-not-l2-valued` · example — White noise has a negative-Sobolev law but no L2-valued law
- `ex-gaussian-product-prior-satisfies-weak-bvm` · example — A Gaussian wavelet product prior covered by the weak BvM theorem

## Your seams

Your pages depend on another group's:

- `dirichlet-process-priors-and-finite-partition-updates` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)
- `dirichlet-normal-mixture-contraction` requires `iid-posterior-contraction` (group c, batch 11)
- `dirichlet-normal-mixture-contraction` requires `hierarchical-bayesian-models-and-partial-pooling` (group b, batch 8)

Another group's pages depend on yours:

- `functional-bayesian-limits-and-credible-set-calibration` (group f) requires your `weak-nonparametric-bernstein-von-mises`
- `generalized-bayes-loss-updates-and-temperature-examples` (group f) requires your `dirichlet-process-priors-and-finite-partition-updates`

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
