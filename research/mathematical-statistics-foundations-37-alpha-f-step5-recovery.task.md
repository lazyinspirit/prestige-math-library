# Step 5 adjudication — group **f**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 39 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/mathematical-statistics-foundations-37-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/mathematical-statistics-foundations-37-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/mathematical-statistics-foundations-37-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `chaining-uniform-laws-and-empirical-process-limits` | A | mathematical-statistics | 1874 | `symmetrization-rademacher-complexity-and-covering-entropy`, `concentration-inequalities-and-tail-bounds`, `asymptotic-convergence-consistency-and-identification` |
| 16 | `chaining-uniform-laws-and-empirical-process-limits-examples` | B | mathematical-statistics | 1875 | `chaining-uniform-laws-and-empirical-process-limits` |
| 17 | `minimax-lower-bounds-and-information-theoretic-methods` | A | mathematical-statistics | 1876 | `losses-risk-and-decision-rules`, `dominated-experiments-likelihood-and-sufficiency`, `concentration-inequalities-and-tail-bounds`, `stationary-markov-chains-and-ergodic-limits` |
| 17 | `minimax-lower-bounds-and-information-theoretic-methods-examples` | B | mathematical-statistics | 1877 | `minimax-lower-bounds-and-information-theoretic-methods` |
| 18 | `decision-theoretic-upper-bounds-and-oracle-risk` | A | mathematical-statistics | 1878 | `losses-risk-and-decision-rules`, `finite-sample-point-estimation-and-unbiased-optimality`, `concentration-inequalities-and-tail-bounds`, `minimax-lower-bounds-and-information-theoretic-methods`, `hilbert-space-geometry-and-riesz-representation` |
| 18 | `decision-theoretic-upper-bounds-and-oracle-risk-examples` | B | mathematical-statistics | 1879 | `decision-theoretic-upper-bounds-and-oracle-risk` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `chaining-uniform-laws-and-empirical-process-limits` — Chaining and Uniform Limits (8 item(s))

- `def-glivenko-cantelli-class` · definition — Glivenko–Cantelli classes
- `thm-empirical-risk-oracle-bound` · theorem — Empirical-risk oracle bound under uniform deviation
- `lem-empirical-process-bracketing-maximal-inequality` · lemma — Bracketing maximal inequality for the empirical process
- `def-donsker-class-and-asymptotic-equicontinuity` · definition — Donsker classes and asymptotic equicontinuity
- `thm-dudley-entropy-integral` · theorem — Dudley entropy-integral bound for sub-Gaussian processes
- `thm-gc-by-bracketing-entropy` · theorem — Glivenko–Cantelli theorem by bracketing entropy
- `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy` · lemma — Bracketing entropy implies empirical-process asymptotic equicontinuity
- `thm-empirical-process-functional-clt` · theorem — Functional central limit theorem by bracketing entropy

### `chaining-uniform-laws-and-empirical-process-limits-examples` — Chaining and Uniform Limits — Examples (3 item(s))

- `cex-pointwise-strong-laws-do-not-imply-uniform-law` · counterexample — Pointwise strong laws need not give a uniform law
- `ex-threshold-class-is-glivenko-cantelli` · example — The uniform threshold class is Glivenko–Cantelli
- `ex-uniform-empirical-cdf-converges-to-brownian-bridge` · example — The uniform empirical CDF converges to a Brownian bridge

### `minimax-lower-bounds-and-information-theoretic-methods` — Minimax Lower Bounds (9 item(s))

- `lem-sparse-hamming-packing` · lemma — A sparse Hamming packing for every $1\le k\le d/2$
- `def-kullback-leibler-divergence` · definition — Kullback–Leibler divergence
- `def-mutual-information-for-finite-hypothesis-testing` · definition — Mutual information for a finite uniform hypothesis experiment
- `thm-pinsker` · theorem — Pinsker’s inequality with event-supremum total variation
- `thm-product-kl-additivity` · theorem — Additivity of KL divergence for finite product laws
- `lem-gaussian-location-kl-formula` · lemma — KL divergence between equal-variance Gaussian location laws
- `thm-two-point-le-cam-risk-bound` · theorem — Two-point Le Cam lower bound for squared-error risk
- `thm-assouad-hypercube` · theorem — Assouad lower bound for a squared-error hypercube
- `thm-fano-packing` · theorem — Fano’s packing bound with a reference-distribution KL bound

### `minimax-lower-bounds-and-information-theoretic-methods-examples` — Minimax Lower Bounds — Examples (3 item(s))

- `ex-gaussian-two-point-le-cam-lower-bound` · example — A Gaussian two-point lower bound
- `ex-sparse-gaussian-sequence-fano-lower-bound` · example — A sparse Gaussian sequence lower bound by Fano’s method
- `ex-gaussian-hypercube-assouad-lower-bound` · example — A dense Gaussian mean lower bound by Assouad’s method

### `decision-theoretic-upper-bounds-and-oracle-risk` — Decision-Theoretic Upper Bounds (13 item(s))

- `def-fixed-design-projection-estimator` · definition — Fixed-design least squares as orthogonal projection
- `lem-binomial-support-count-bound` · lemma — A binomial support-count bound
- `lem-finite-dimensional-projection-is-linear-and-contractive` · lemma — Finite-dimensional orthogonal projections are linear and contractive
- `lem-finite-support-projection-selection-is-borel` · lemma — Finite tie-broken projection searches are Borel measurable
- `lem-isotropic-gaussian-noise-is-subgaussian` · lemma — Isotropic Gaussian noise has the matching sub-Gaussian proxy
- `alg-bic-penalized-least-squares` · algorithm — Penalized support-search least squares
- `alg-constrained-l0-least-squares` · algorithm — Constrained support-search least squares
- `thm-gaussian-projection-risk` · theorem — Exact squared-error risk of an isotropic projection fit
- `thm-subgaussian-projection-risk` · theorem — Sub-Gaussian projection risk bounds
- `thm-bic-fitted-risk-bound` · theorem — BIC fitted-value risk bound
- `thm-sparse-subset-risk-upper-bound` · theorem — Sparse constrained least-squares risk bound
- `thm-gaussian-sparse-sequence-minimax-lower-bound` · theorem — Gaussian sparse-sequence minimax lower bound
- `cor-matching-minimax-rate` · corollary — Matching minimax rate in a Gaussian orthogonal sequence model

### `decision-theoretic-upper-bounds-and-oracle-risk-examples` — Decision-Theoretic Upper Bounds — Examples (3 item(s))

- `cex-collinear-design-coefficient-risk-unidentifiable` · counterexample — Collinear columns identify a fitted mean, not its coefficients
- `ex-orthogonal-sequence-sparse-regression` · example — Constrained least squares in a two-coordinate orthogonal sequence model
- `ex-training-risk-versus-test-risk` · example — Zero training residual and positive test error

## Your seams

Your pages depend on another group's:

- `chaining-uniform-laws-and-empirical-process-limits` requires `symmetrization-rademacher-complexity-and-covering-entropy` (group e, batch 15)
- `chaining-uniform-laws-and-empirical-process-limits` requires `concentration-inequalities-and-tail-bounds` (group e, batch 14)
- `chaining-uniform-laws-and-empirical-process-limits` requires `asymptotic-convergence-consistency-and-identification` (group e, batch 13)
- `minimax-lower-bounds-and-information-theoretic-methods` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `minimax-lower-bounds-and-information-theoretic-methods` requires `dominated-experiments-likelihood-and-sufficiency` (group b, batch 4)
- `minimax-lower-bounds-and-information-theoretic-methods` requires `concentration-inequalities-and-tail-bounds` (group e, batch 14)
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `finite-sample-point-estimation-and-unbiased-optimality` (group b, batch 6)
- `decision-theoretic-upper-bounds-and-oracle-risk` requires `concentration-inequalities-and-tail-bounds` (group e, batch 14)

Another group's pages depend on yours:

- `sparse-high-dimensional-estimation-and-covariance` (group g) requires your `minimax-lower-bounds-and-information-theoretic-methods`
- `m-and-z-estimation-and-uniform-laws` (group g) requires your `chaining-uniform-laws-and-empirical-process-limits`
- `local-asymptotic-normality-contiguity-and-efficiency` (group h) requires your `minimax-lower-bounds-and-information-theoretic-methods`
- `splines-series-and-approximation-rates` (group i) requires your `decision-theoretic-upper-bounds-and-oracle-risk`
- `contamination-models-and-robust-risk` (group k) requires your `minimax-lower-bounds-and-information-theoretic-methods`
- `robust-covariance-and-high-dimensional-stability` (group l) requires your `minimax-lower-bounds-and-information-theoretic-methods`

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
