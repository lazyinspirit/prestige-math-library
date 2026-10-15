# Step 5 adjudication — group **p**, run `statistical-models-experiments-62`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 35 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/statistical-models-experiments-62-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/statistical-models-experiments-62-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/statistical-models-experiments-62-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 46 | `spatial-field-summary-estimators` | A | statistical-models-and-experiments | 2008 | `random-fields-covariance-and-variograms`, `probability-spaces-random-variables-and-expectation`, `bochner-inversion-and-plancherel-on-lca-groups`, `product-measures-and-the-fubini-tonelli-theorems`, `lebesgue-measure-on-euclidean-space`, `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 46 | `spatial-field-summary-estimators-examples` | B | statistical-models-and-experiments | 2009 | `spatial-field-summary-estimators` |
| 47 | `kriging-as-best-linear-prediction` | A | statistical-models-and-experiments | 2010 | `linear-prediction-for-dependent-data`, `random-fields-covariance-and-variograms`, `losses-risk-and-decision-rules`, `inner-product-spaces-and-orthogonality`, `probability-spaces-random-variables-and-expectation`, `central-limit-theorems` |
| 47 | `kriging-as-best-linear-prediction-examples` | B | statistical-models-and-experiments | 2011 | `kriging-as-best-linear-prediction` |
| 48 | `poisson-and-cox-point-process-models` | A | statistical-models-and-experiments | 2012 | `counting-process-compensators-and-integrals`, `measures-and-their-basic-properties`, `conditional-distributions-and-regular-conditional-probability`, `infinite-product-measures-and-kolmogorov-extension`, `product-measures-and-the-fubini-tonelli-theorems`, `conditional-expectation` |
| 48 | `poisson-and-cox-point-process-models-examples` | B | statistical-models-and-experiments | 2013 | `poisson-and-cox-point-process-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `spatial-field-summary-estimators` — Spatial summary estimators (13 item(s))

- `def-van-hove-window-sequence` · definition — Van Hove sequences of spatial windows
- `def-spatial-window-average` · definition — Spatial window average
- `thm-van-hove-window-average-l2-consistency` · theorem — Unbiasedness and L2 consistency of the spatial window average
- `def-lattice-covariance-and-variogram-estimators` · definition — Lagged lattice covariance and variogram estimators
- `thm-lattice-covariance-estimator-asymptotically-unbiased` · theorem — Asymptotic unbiasedness of lattice covariance and variogram estimators
- `lem-integers-lattice-is-discrete-lca-group` · lemma — The integer lattice is a discrete locally compact abelian group
- `lem-dual-of-zd-is-torus` · lemma — The Pontryagin dual of the integer lattice is the torus
- `lem-transport-lattice-spectral-measure-to-torus` · lemma — Transport of a lattice spectral measure to torus coordinates
- `def-regular-grid-periodogram-and-smoother` · definition — Regular-grid spatial periodogram and smoothed estimator
- `thm-regular-grid-periodogram-fejer-expectation` · theorem — Fejer convolution formula for the lattice periodogram
- `lem-fixed-grid-sampling-spectral-alias-identity` · lemma — Spectral alias identity for fixed regular-grid sampling
- `thm-regular-grid-smoothed-periodogram-bias-vanishes` · theorem — Vanishing bias of a smoothed regular-grid spatial periodogram
- `cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition` · corollary — Unaliased fixed-grid spectral bias under the exact no-alias condition

### `spatial-field-summary-estimators-examples` — Spatial summary estimators — Examples (2 item(s))

- `ex-boundary-dominated-windows-are-not-van-hove` · example — Boundary-dominated windows fail the Van Hove condition
- `cex-lattice-sample-covariance-not-positive-definite` · counterexample — A pair-count lattice sample covariance need not be positive definite

### `kriging-as-best-linear-prediction` — Kriging (3 item(s))

- `def-simple-ordinary-and-universal-kriging` · definition — Simple, ordinary, and universal kriging
- `thm-kriging-systems-and-l2-optimality` · theorem — Kriging systems and mean-square optimality
- `thm-gaussian-simple-kriging-equals-conditional-mean` · theorem — Gaussian simple kriging is a conditional mean

### `kriging-as-best-linear-prediction-examples` — Kriging — Examples (3 item(s))

- `ex-singular-covariance-simple-kriging` · example — Singular observation covariance in simple kriging
- `ex-rank-deficient-universal-kriging-design` · example — A rank-deficient universal-kriging design
- `ex-ordinary-kriging-larger-error-than-simple` · example — Ordinary kriging can have larger error than simple kriging

### `poisson-and-cox-point-process-models` — Poisson and Cox point processes (13 item(s))

- `def-random-measure-and-locally-finite-point-process` · definition — Random measures and locally finite point processes
- `lem-locally-compact-second-countable-spaces-have-compact-exhaustions` · lemma — Second-countable locally compact Hausdorff spaces admit compact exhaustions
- `def-scalar-poisson-count-law` · definition — The scalar Poisson count law
- `lem-mean-measure-and-integrals-of-a-random-point-process` · lemma — Mean measures and measurable nonnegative integrals of random measures
- `lem-point-process-law-is-determined-by-count-fidi` · lemma — A point-process law is determined by its finite-dimensional count laws
- `lem-poisson-count-law-normalization-and-moments` · lemma — Normalization, moments, and generating function of the Poisson count law
- `lem-deletion-of-one-point-is-measurable` · lemma — Deleting one occurrence from a locally finite counting measure is measurable
- `def-poisson-and-cox-point-process` · definition — Poisson and Cox point processes
- `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` · theorem — Finite-intensity Poisson-process existence and mixed-binomial law
- `lem-poisson-integral-moment-identities` · lemma — First and second moments of a Poisson random integral
- `lem-finite-intensity-mecke-identity` · lemma — Mecke identity for a finite-intensity Poisson point process
- `thm-poisson-point-process-existence` · theorem — Existence of a locally finite Poisson point process
- `thm-campbell-laplace-mecke-and-cox-moments` · theorem — Campbell, Laplace, Mecke, and Cox moment formulas

### `poisson-and-cox-point-process-models-examples` — Poisson and Cox point processes — Examples (1 item(s))

- `ex-poisson-and-cox-count-laws-on-a-finite-window` · example — Poisson and Cox counts with the same mean on a finite window

## Your seams

Your pages depend on another group's:

- `spatial-field-summary-estimators` requires `random-fields-covariance-and-variograms` (group o, batch 45)
- `kriging-as-best-linear-prediction` requires `linear-prediction-for-dependent-data` (group o, batch 43)
- `kriging-as-best-linear-prediction` requires `random-fields-covariance-and-variograms` (group o, batch 45)
- `poisson-and-cox-point-process-models` requires `counting-process-compensators-and-integrals` (group j, batch 30)

Another group's pages depend on yours:

- `spatial-point-process-summaries-and-palm-laws` (group q) requires your `poisson-and-cox-point-process-models`
- `finite-window-spatial-point-process-likelihoods` (group q) requires your `poisson-and-cox-point-process-models`
- `temporal-point-process-intensity-and-likelihood` (group q) requires your `poisson-and-cox-point-process-models`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `statistical-models-experiments-62`

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
