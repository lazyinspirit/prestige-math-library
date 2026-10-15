# Step 5 adjudication — group **f**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 20, 21, 22: 3 A/B pair(s), 6 page(s), 46 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **20**: `research/bayesian-computational-statistics-62-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/bayesian-computational-statistics-62-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/bayesian-computational-statistics-62-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 20 | `functional-bayesian-limits-and-credible-set-calibration` | A | bayesian-computational-statistics | 2080 | `weak-nonparametric-bernstein-von-mises`, `iid-posterior-contraction`, `posterior-prediction-and-bayesian-decision` |
| 20 | `functional-bayesian-limits-and-credible-set-calibration-examples` | B | bayesian-computational-statistics | 2081 | `functional-bayesian-limits-and-credible-set-calibration` |
| 21 | `adaptive-empirical-bayes-credible-set-calibration` | A | bayesian-computational-statistics | 2082 | `conjugate-families-and-posterior-prediction`, `marginal-likelihoods-bayes-factors-and-empirical-bayes` |
| 21 | `adaptive-empirical-bayes-credible-set-calibration-examples` | B | bayesian-computational-statistics | 2083 | `adaptive-empirical-bayes-credible-set-calibration` |
| 22 | `generalized-bayes-loss-updates-and-temperature` | A | bayesian-computational-statistics | 2084 | `posterior-propriety-and-dominated-bayes-formula`, `minimax-lower-bounds-and-information-theoretic-methods` |
| 22 | `generalized-bayes-loss-updates-and-temperature-examples` | B | bayesian-computational-statistics | 2085 | `generalized-bayes-loss-updates-and-temperature`, `confidence-sets-pivots-and-test-inversion`, `dirichlet-process-priors-and-finite-partition-updates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `functional-bayesian-limits-and-credible-set-calibration` — Functional BvM limits and credible-set calibration (22 item(s))

- `def-multiscale-coefficient-space-m0w` · definition — Little-o multiscale coefficient space M0(w)
- `def-sobolev-linear-functional-for-white-noise` · definition — Smooth linear functionals on the white-noise topology
- `def-type-s-and-h-multiscale-density-priors` · definition — Type-S log-density and type-H histogram prior families
- `lem-m0w-separable-and-projection-tails` · lemma — The multiscale coefficient space is separable and has vanishing projection tails
- `lem-multiscale-primitive-map-to-continuous-cdfs` · lemma — The multiscale primitive map is continuous into C[0,1]
- `lem-random-posterior-quantiles-stabilize-under-bvm` · lemma — Posterior quantiles stabilize under scalar weak convergence
- `lem-smooth-functional-extends-to-negative-sobolev-space` · lemma — Smooth functionals extend continuously to the white-noise topology
- `lem-type-s-h-prior-draws-are-l2-densities` · lemma — Finite type-S and type-H prior draws are L2 probability densities
- `lem-m0w-finite-projection-and-tail-bvm-criterion` · lemma — Finite-projection convergence and posterior tail control imply weak BvM
- `thm-linear-functional-bvm-and-credible-coverage` · theorem — Linear-functional BvM limit and credible-interval calibration
- `thm-nonlinear-functional-bvm-and-credible-coverage` · theorem — Nonlinear-functional BvM limit under fast L2 contraction
- `thm-projected-empirical-process-clt-in-m0w` · theorem — Projected empirical bridge CLT in the little-o multiscale space
- `lem-density-gaussian-bridge-is-borel-on-m0w` · lemma — A bounded-density Gaussian bridge has a Borel multiscale law
- `lem-density-bridge-norm-cdfs-are-continuous-and-strict` · lemma — Continuous and strictly increasing norm distributions for density bridges
- `lem-finite-dirichlet-gamma-representation-and-bernstein-bound` · lemma — Finite Dirichlet gamma representation and weighted Bernstein bound
- `thm-type-h-histogram-posterior-weak-bvm-in-m0w` · theorem — Type-H histogram posterior weak Bernstein–von Mises theorem
- `lem-compact-wavelet-projection-kernel-and-commutator` · lemma — Compact wavelet projections approximate smooth functions and commute asymptotically with multiplication
- `lem-type-s-posterior-preliminary-contraction` · lemma — Type-S posterior contracts in quotient log-density coordinates without a tail restriction on a log-Lipschitz prior
- `thm-type-s-density-weak-bvm-on-m0w` · theorem — Type-S density posteriors satisfy the weak multiscale Bernstein–von Mises theorem
- `thm-cdf-and-multiscale-credible-band-calibration-from-bvm` · theorem — CDF and multiscale credible-band calibration from weak BvM limits
- `thm-multiscale-credible-band-holder-diameter` · theorem — Diameter of undersmoothed multiscale credible bands
- `cor-type-s-h-density-credible-band-calibration` · corollary — Type-S and Type-H density credible bands have asymptotically exact coverage

### `functional-bayesian-limits-and-credible-set-calibration-examples` — Functional BvM limits and credible-set calibration — Examples (4 item(s))

- `cex-credible-posterior-set-with-zero-frequency-coverage` · counterexample — A boundary truth can give an equal-tailed credible interval zero coverage
- `ex-type-s-and-h-density-prior-contracts` · example — Uniform truth under type-S and type-H density priors
- `ex-nonlinear-functional-remainder-at-parametric-scale` · example — A quadratic remainder at the parametric L2 scale
- `ex-smooth-linear-functional-in-white-noise` · example — The integral functional under a product-prior white-noise BvM

### `adaptive-empirical-bayes-credible-set-calibration` — Adaptive empirical-Bayes credible-set calibration and failure (9 item(s))

- `def-gaussian-sequence-hyperrectangle-class` · definition — Hyperrectangle classes in a Gaussian sequence model
- `def-polished-tail-class-for-gaussian-sequence` · definition — Polished-tail class for a Gaussian sequence
- `def-adaptive-empirical-bayes-gaussian-sequence-procedure` · definition — Empirical-Bayes credible-ball procedure in the inverse Gaussian sequence model
- `lem-gaussian-sequence-empirical-bayes-posterior-formula` · lemma — Posterior and marginal-likelihood formulas for the Gaussian sequence prior
- `lem-uniform-empirical-bayes-marginal-score-bound` · lemma — Uniform marginal-score bounds by derivative integration
- `lem-empirical-bayes-maximizer-bracket-on-polished-tails` · lemma — Marginal-likelihood maximizer bracket on polished tails
- `lem-empirical-bayes-radius-bias-and-noise-comparison` · lemma — Posterior radius, bias and noise comparisons for empirical Bayes
- `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails` · theorem — Conservative coverage of adaptive empirical-Bayes credible balls on polished tails
- `cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage` · counterexample — Sparse-gap truth causes empirical-Bayes credible-set undercoverage

### `adaptive-empirical-bayes-credible-set-calibration-examples` — Adaptive empirical-Bayes credible-set calibration and failure — Examples (2 item(s))

- `ex-polynomial-tail-truth-has-conservative-empirical-bayes-coverage` · example — A power-law truth lies in the polished-tail class
- `ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered` · example — A sparse-gap truth lies in a hyperrectangle but is undercovered

### `generalized-bayes-loss-updates-and-temperature` — Generalized Bayes loss updates and temperature calibration (5 item(s))

- `def-generalized-bayes-loss-update-and-temperature` · definition — Generalized Bayes loss update and temperature
- `lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure` · lemma — A finite-normalizer loss update is a probability measure
- `thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer` · theorem — The generalized Bayes loss update uniquely minimizes loss plus KL
- `thm-sequential-generalized-bayes-updates-are-coherent` · theorem — Fixed-temperature generalized Bayes updates are sequentially coherent
- `rem-generalized-bayes-temperature-calibration` · remark — Calibrating generalized Bayes temperature

### `generalized-bayes-loss-updates-and-temperature-examples` — Generalized Bayes loss updates and temperature calibration — Examples (4 item(s))

- `ex-loss-update-can-have-infinite-normalizer` · example — A measurable loss can have an infinite normalizer
- `cex-temperature-generalized-bayes-credible-set-zero-coverage` · counterexample — A generalized Bayes credible set can have zero coverage
- `ex-rescaling-loss-changes-effective-temperature` · example — Rescaling loss changes the effective temperature
- `ex-unit-temperature-likelihood-update` · example — The unit-temperature likelihood update is ordinary Bayes in a finite model

## Your seams

Your pages depend on another group's:

- `functional-bayesian-limits-and-credible-set-calibration` requires `weak-nonparametric-bernstein-von-mises` (group e, batch 19)
- `functional-bayesian-limits-and-credible-set-calibration` requires `iid-posterior-contraction` (group c, batch 11)
- `functional-bayesian-limits-and-credible-set-calibration` requires `posterior-prediction-and-bayesian-decision` (group a, batch 7)
- `adaptive-empirical-bayes-credible-set-calibration` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)
- `adaptive-empirical-bayes-credible-set-calibration` requires `marginal-likelihoods-bayes-factors-and-empirical-bayes` (group b, batch 9)
- `generalized-bayes-loss-updates-and-temperature` requires `posterior-propriety-and-dominated-bayes-formula` (group a, batch 5)
- `generalized-bayes-loss-updates-and-temperature-examples` requires `dirichlet-process-priors-and-finite-partition-updates` (group e, batch 17)

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
