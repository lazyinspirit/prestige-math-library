# Step 5 adjudication — group **a**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/numerical-analysis-remaining-71-2026-10-17-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/numerical-analysis-remaining-71-2026-10-17-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/numerical-analysis-remaining-71-2026-10-17-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `optimal-star-discrepancy-order-in-dimension-at-least-three` | A | numerical-linear-algebra-and-approximation | 2556 | `quasi-monte-carlo-discrepancy-and-rules` |
| 1 | `optimal-star-discrepancy-order-in-dimension-at-least-three-examples` | B | numerical-linear-algebra-and-approximation | 2557 | `optimal-star-discrepancy-order-in-dimension-at-least-three` |
| 2 | `radial-basis-and-kernel-interpolation` | A | numerical-linear-algebra-and-approximation | 2558 | `finite-precision-direct-factorizations`, `polynomial-interpolation-and-remainder`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `sparse-high-dimensional-estimation-and-covariance` |
| 2 | `radial-basis-and-kernel-interpolation-examples` | B | numerical-linear-algebra-and-approximation | 2559 | `radial-basis-and-kernel-interpolation` |
| 3 | `spline-evaluation-and-interpolation-algorithms` | A | numerical-linear-algebra-and-approximation | 2560 | `finite-precision-direct-factorizations`, `polynomial-interpolation-and-remainder`, `splines-series-and-approximation-rates`, `outward-rounded-interval-and-ball-arithmetic` |
| 3 | `spline-evaluation-and-interpolation-algorithms-examples` | B | numerical-linear-algebra-and-approximation | 2561 | `spline-evaluation-and-interpolation-algorithms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `optimal-star-discrepancy-order-in-dimension-at-least-three` — Optimal star-discrepancy order in dimension at least three (1 item(s))

- `op-optimal-star-discrepancy-order-dimension-at-least-three` · open-problem — Optimal star-discrepancy order at fixed dimension at least three

### `optimal-star-discrepancy-order-in-dimension-at-least-three-examples` — Optimal star-discrepancy order in dimension at least three — Examples (1 item(s))

- `ex-one-point-star-discrepancy-center` · example — Exact star discrepancy of the center point

### `radial-basis-and-kernel-interpolation` — Radial basis and kernel interpolation (17 item(s))

- `def-rbf-kernels-sites-and-augmented-interpolation` · definition — Radial kernels, polynomial augmentation, and site geometry
- `lem-rbf-augmented-system-is-invertible` · lemma — Strict positive and conditionally positive augmented interpolation systems are invertible
- `def-normalized-matern-spectral-kernel` · definition — The normalized Matérn kernel in the 2π Fourier convention
- `def-bessel-potential-space-and-restriction-quotient` · definition — Fourier Bessel-potential and restriction-quotient Sobolev spaces
- `lem-cone-sites-admit-stable-polynomial-norming-stencils` · lemma — Uniform cone domains admit stable polynomial norming stencils
- `lem-matern-spectral-integral-and-normalization` · lemma — The Matérn spectral integral, normalization, and radial formula
- `alg-augmented-rbf-finite-difference-weights` · algorithm — Exact augmented RBF-FD weights for a local differential functional
- `lem-matern-weighted-fourier-space-is-hilbert-and-injective` · lemma — The weighted Fourier model is an injective Hilbert representation
- `lem-separated-sites-matern-gram-bound` · lemma — Separated Matérn sites have an explicit positive Gram lower bound
- `thm-rbf-fd-polynomial-reproduction-and-local-truncation` · theorem — Augmented RBF-FD weights reproduce polynomials and obey a local Taylor bound
- `lem-schwartz-dense-in-fourier-bessel-potential-space` · lemma — Schwartz functions are dense in the Fourier Bessel-potential norm
- `lem-sobolev-zeros-bound-on-a-cone-domain` · lemma — A Sobolev function vanishing on scattered sites has an h^ν bound
- `cor-matern-mesh-ratio-conditioning-bound` · corollary — Bounded mesh ratio gives an h^{-2s} exact condition-number bound
- `lem-matern-native-space-fourier-identity-and-positive-definiteness` · lemma — The Matérn native space has its weighted Fourier norm and strict Gram positivity
- `lem-restricted-matern-native-space-is-sobolev` · lemma — The restricted Matérn native space is the Sobolev quotient space
- `thm-native-interpolation-projection-and-power-function` · theorem — Native Matérn interpolation is an orthogonal projection with power function
- `thm-matern-interpolation-fill-distance-error` · theorem — Matérn interpolation and its power function converge at rate h^ν

### `radial-basis-and-kernel-interpolation-examples` — Radial basis and kernel interpolation — Examples (3 item(s))

- `ex-duplicate-rbf-sites-singular-gram-matrix` · example — Duplicate sites make the kernel Gram matrix singular
- `ex-small-fill-distance-can-have-poor-rbf-conditioning` · example — A small fill distance can coexist with poor separation and conditioning
- `ex-smooth-scattered-surface-matern-rate` · example — A smooth scattered surface inherits the Matérn fill-distance rate

### `spline-evaluation-and-interpolation-algorithms` — Spline evaluation and interpolation algorithms (15 item(s))

- `alg-de-boor-coefficient-evaluation` · algorithm — de Boor coefficient evaluation on a specified knot span
- `alg-single-new-b-spline-knot-insertion` · algorithm — Single new-knot insertion for a B-spline curve
- `def-clamped-cubic-spline-interpolant` · definition — Clamped cubic spline interpolant
- `lem-natural-cubic-spline-second-derivative-perturbation` · lemma — Nodal second-derivative perturbations bound the natural spline error
- `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate` · algorithm — Natural-cubic tridiagonal Cholesky solve with a residual certificate
- `lem-b-spline-basis-refinement-under-single-knot-insertion` · lemma — A single new knot refines the B-spline basis
- `thm-de-boor-coefficient-evaluation-equivalence` · theorem — de Boor evaluation equals the B-spline coefficient expansion
- `thm-de-boor-coefficient-evaluation-work` · theorem — de Boor evaluation uses quadratic work in the degree
- `thm-clamped-cubic-spline-interpolant-exists-uniquely` · theorem — Clamped cubic spline interpolation exists uniquely
- `thm-natural-cubic-spline-tridiagonal-residual-transfer` · theorem — A natural-spline tridiagonal residual bounds the spline value error
- `thm-natural-tridiagonal-cholesky-solve-residual-certificate` · theorem — A successful natural-cubic tridiagonal Cholesky solve has a certified residual
- `thm-de-boor-forward-error-under-operationwise-model` · theorem — A successful rounded de Boor evaluation has a degree-dependent forward bound
- `thm-single-new-knot-insertion-preserves-b-spline-curve` · theorem — Single new-knot insertion preserves the B-spline curve
- `thm-clamped-cubic-spline-fourth-order-error` · theorem — Boundary-compatible clamped cubic interpolation is fourth order in the maximum norm
- `thm-computed-natural-cubic-spline-forward-error-certificate` · theorem — A computed natural-cubic reconstruction has a forward-error certificate

### `spline-evaluation-and-interpolation-algorithms-examples` — Spline evaluation and interpolation algorithms — Examples (3 item(s))

- `ex-repeated-knot-de-boor-evaluation` · example — de Boor evaluation with a double knot
- `ex-natural-cubic-x-squared-endpoint-caveat` · example — The natural interpolant of x squared has a second-order endpoint error
- `ex-single-new-knot-insertion-preserves-linear-curve` · example — Inserting a knot leaves a linear B-spline curve fixed

## Your seams

Another group's pages depend on yours:

- `shape-preserving-piecewise-polynomial-interpolation` (group b) requires your `spline-evaluation-and-interpolation-algorithms`
- `isogeometric-galerkin-methods` (group w) requires your `spline-evaluation-and-interpolation-algorithms`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

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
