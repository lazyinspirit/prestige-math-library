# Step 5 adjudication — group **i**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 25, 26, 27: 3 A/B pair(s), 6 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/mathematical-statistics-foundations-37-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/mathematical-statistics-foundations-37-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/mathematical-statistics-foundations-37-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 25 | `nonparametric-density-estimation-and-kernels` | A | mathematical-statistics | 1892 | `statistical-experiments-models-and-identifiability`, `estimators-and-randomized-procedures`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `weak-derivatives-and-sobolev-spaces`, `smooth-approximation-and-sobolev-extension` |
| 25 | `nonparametric-density-estimation-and-kernels-examples` | B | mathematical-statistics | 1893 | `nonparametric-density-estimation-and-kernels` |
| 26 | `nonparametric-regression-and-smoothing` | A | mathematical-statistics | 1894 | `nonparametric-density-estimation-and-kernels`, `losses-risk-and-decision-rules` |
| 26 | `nonparametric-regression-and-smoothing-examples` | B | mathematical-statistics | 1895 | `nonparametric-regression-and-smoothing` |
| 27 | `splines-series-and-approximation-rates` | A | mathematical-statistics | 1896 | `decision-theoretic-upper-bounds-and-oracle-risk`, `nonparametric-regression-and-smoothing`, `losses-risk-and-decision-rules`, `weak-derivatives-and-sobolev-spaces`, `sobolev-traces-and-zero-boundary-values`, `inner-product-spaces-and-orthogonality` |
| 27 | `splines-series-and-approximation-rates-examples` | B | mathematical-statistics | 1897 | `splines-series-and-approximation-rates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonparametric-density-estimation-and-kernels` — Density Estimation (9 item(s))

- `def-density-target-and-kernel-density-estimator` · definition — Density targets and the kernel density estimator
- `lem-kde-evaluation-is-a-measurable-statistic` · lemma — Each fixed-point KDE evaluation is a statistic
- `lem-kde-jointly-measurable-in-sample-and-evaluation-point` · lemma — The KDE is jointly measurable in sample and evaluation point
- `lem-nonnegative-kde-integrates-to-one` · lemma — A nonnegative normalized kernel estimate integrates to one
- `lem-c2-density-with-bounded-hessian-is-bounded` · lemma — An integrable C² density with bounded Hessian is bounded
- `lem-second-order-kernel-convolution-l2-bias-bound` · lemma — Second-order kernel convolution has an L² bias bound
- `thm-kde-pointwise-second-order-bias` · theorem — Pointwise second-order bias of the KDE
- `thm-kde-pointwise-variance` · theorem — Pointwise variance of the KDE
- `thm-kde-global-mise-upper-rate` · theorem — Global MISE upper bound for the KDE

### `nonparametric-density-estimation-and-kernels-examples` — Density Estimation — Examples (3 item(s))

- `ex-gaussian-kernel-pointwise-bias-variance` · example — Gaussian-kernel moments and pointwise constants
- `ex-finite-bandwidth-kde-smoothing` · example — Finite-bandwidth Gaussian smoothing
- `ex-kde-boundary-bias` · example — Gaussian KDE boundary bias for a uniform density

### `nonparametric-regression-and-smoothing` — Regression Estimation (11 item(s))

- `def-regression-target-version` · definition — Regression target and chosen version
- `lem-local-linear-normalized-moment-matrix-converges-in-probability` · lemma — Local-linear moment matrix converges to a positive-definite limit
- `def-nadaraya-watson-estimator` · definition — Nadaraya–Watson estimator
- `def-pointwise-regression-risk` · definition — Pointwise squared-error risk for regression
- `def-local-polynomial-estimator` · definition — Local-polynomial estimator
- `thm-pointwise-risk-bias-variance-decomposition` · theorem — Pointwise risk is variance plus squared bias
- `thm-nadaraya-watson-population-bias` · theorem — Pointwise population bias of the Nadaraya–Watson smoother
- `thm-local-linear-population-bias` · theorem — Pointwise population bias of local-linear regression
- `thm-local-linear-conditional-bias` · theorem — Conditional-on-design bias of the empirical local-linear estimator
- `thm-kernel-regression-conditional-asymptotic-variance` · theorem — Conditional asymptotic variance of Nadaraya–Watson and local-linear estimators
- `thm-nadaraya-watson-finite-sample-bias` · theorem — Finite-sample mean bias of the Nadaraya–Watson estimator

### `nonparametric-regression-and-smoothing-examples` — Regression Estimation — Examples (3 item(s))

- `ex-local-linear-reproduces-affine-regression` · example — Local-linear regression reproduces affine responses
- `cex-local-linear-finite-sample-expectation-undefined` · counterexample — Local-linear estimator can lack a finite-sample expectation
- `cex-nadaraya-watson-design-gradient-and-boundary-bias` · counterexample — Nadaraya–Watson bias from design gradients and boundaries

### `splines-series-and-approximation-rates` — Splines and Series Methods (11 item(s))

- `def-b-spline-space-and-basis` · definition — B-spline spaces and knot conventions
- `def-natural-cubic-spline` · definition — Natural cubic splines
- `def-local-spline-quasi-interpolant` · definition — Bounded local spline quasi-interpolants
- `def-natural-cubic-smoothing-spline` · definition — Natural cubic smoothing spline
- `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots` · theorem — Natural cubic interpolation at distinct knots
- `thm-spline-polynomial-reproduction` · theorem — B-spline basis properties and polynomial reproduction
- `def-series-spline-least-squares` · definition — Series least squares with a spline basis
- `thm-natural-cubic-smoothing-spline-exists-uniquely` · theorem — Existence, uniqueness, and spline reduction for cubic smoothing
- `thm-sobolev-spline-quasi-interpolant-rate` · theorem — Sobolev approximation by local spline quasi-interpolants
- `thm-series-training-risk` · theorem — Expected empirical training risk for spline series least squares
- `cor-series-spline-sobolev-training-risk-rate` · corollary — Sobolev rate for spline-series training risk

### `splines-series-and-approximation-rates-examples` — Splines and Series Methods — Examples (5 item(s))

- `cex-one-observation-does-not-identify-a-smoothing-spline` · counterexample — One observation does not determine a natural cubic smoothing fit
- `ex-b-spline-basis-and-polynomial-reproduction` · example — A quadratic Bernstein B-spline basis
- `ex-natural-cubic-interpolants-on-two-and-three-knots` · example — Natural cubic interpolation with two and three knots
- `ex-uniform-mesh-linear-spline-approximation` · example — Uniform-mesh linear spline approximation
- `ex-spline-training-risk-can-differ-from-independent-test-risk` · example — Training risk and independent test risk are different quantities

## Your seams

Your pages depend on another group's:

- `nonparametric-density-estimation-and-kernels` requires `statistical-experiments-models-and-identifiability` (group a, batch 1)
- `nonparametric-density-estimation-and-kernels` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `nonparametric-regression-and-smoothing` requires `losses-risk-and-decision-rules` (group a, batch 3)
- `splines-series-and-approximation-rates` requires `decision-theoretic-upper-bounds-and-oracle-risk` (group f, batch 18)
- `splines-series-and-approximation-rates` requires `losses-risk-and-decision-rules` (group a, batch 3)

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
