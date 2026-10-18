# Step 5 adjudication — group **b**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 59 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/numerical-analysis-remaining-71-2026-10-17-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/numerical-analysis-remaining-71-2026-10-17-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/numerical-analysis-remaining-71-2026-10-17-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 4 | `minimax-approximation-and-remez-algorithms` | A | numerical-linear-algebra-and-approximation | 2562 | `polynomial-approximation-and-chebyshev-interpolation` |
| 4 | `minimax-approximation-and-remez-algorithms-examples` | B | numerical-linear-algebra-and-approximation | 2563 | `minimax-approximation-and-remez-algorithms` |
| 5 | `shape-preserving-piecewise-polynomial-interpolation` | A | numerical-linear-algebra-and-approximation | 2564 | `spline-evaluation-and-interpolation-algorithms` |
| 5 | `shape-preserving-piecewise-polynomial-interpolation-examples` | B | numerical-linear-algebra-and-approximation | 2565 | `shape-preserving-piecewise-polynomial-interpolation` |
| 6 | `wavelet-transforms-and-nonlinear-approximation` | A | numerical-linear-algebra-and-approximation | 2566 | `computed-fast-transforms-and-convolution`, `polynomial-approximation-and-chebyshev-interpolation` |
| 6 | `wavelet-transforms-and-nonlinear-approximation-examples` | B | numerical-linear-algebra-and-approximation | 2567 | `wavelet-transforms-and-nonlinear-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `minimax-approximation-and-remez-algorithms` — Minimax approximation and remez algorithms (19 item(s))

- `def-na-best-polynomial-uniform-error` · definition — Best uniform polynomial error on a compact interval
- `lem-na-extrema-sign-block-polynomial` · lemma — A polynomial with the sign pattern of the active extrema
- `lem-na-polynomial-alternating-signs-force-root-count` · lemma — Alternating polynomial signs force the Haar zero-count contradiction
- `lem-na-polynomial-coefficient-bound-from-fixed-nodes` · lemma — Polynomial coefficients are bounded by values at fixed distinct nodes
- `lem-na-polynomial-interpolation-alternating-weight-annihilator` · lemma — Alternating interpolation weights annihilate lower-degree polynomials
- `lem-na-reduced-rational-representation-unique` · lemma — Reduced real rational representations are unique up to scale
- `def-na-weighted-rational-minimax-family` · definition — Weighted rational minimax families and defect
- `lem-na-polynomial-remez-system-invertible` · lemma — The Remez alternation linear system has a unique solution
- `thm-na-best-polynomial-approximation-exists` · theorem — Best uniform polynomial approximants exist
- `thm-na-polynomial-equioscillation-certificate` · theorem — Exact polynomial equioscillation certifies best approximation
- `alg-na-minimax-approximation-and-remez-algorithms` · algorithm — Finite-budget polynomial Remez exchange with an exact extrema oracle
- `lem-na-rational-perturbation-space` · lemma — The rational first-variation space has dimension set by defect
- `thm-na-best-weighted-rational-approximation-exists` · theorem — Best weighted rational approximants exist
- `thm-na-polynomial-alternation-necessity` · theorem — A nonzero best polynomial error must alternate at n+2 extrema
- `cor-na-best-polynomial-approximation-unique` · corollary — The best uniform polynomial approximant is unique
- `thm-na-polynomial-remez-budget-termination` · theorem — A budgeted polynomial Remez exchange terminates within its finite cap
- `thm-na-weighted-rational-alternation-characterization` · theorem — Weighted rational minimizers satisfy the defect-sensitive alternation criterion
- `alg-na-weighted-rational-remez-exchange` · algorithm — Finite-budget weighted rational Remez exchange with defect status
- `thm-na-weighted-rational-remez-budget-termination` · theorem — A budgeted weighted rational Remez exchange terminates within its finite cap

### `minimax-approximation-and-remez-algorithms-examples` — Minimax approximation and remez algorithms — Examples (3 item(s))

- `ex-na-remez-zero-degree-equioscillation-certificate` · example — A two-node degree-zero Remez certificate
- `ex-na-degree-one-minimax-of-square` · example — The degree-one minimax approximation to x squared
- `cex-na-defective-rational-approximation-naive-count` · counterexample — A defective rational minimizer can have fewer than m+n+2 extrema

### `shape-preserving-piecewise-polynomial-interpolation` — Shape preserving piecewise polynomial interpolation (11 item(s))

- `def-piecewise-cubic-hermite-interpolant` · definition — Piecewise cubic Hermite interpolant
- `def-piecewise-bernstein-representation` · definition — Piecewise Bernstein representation
- `thm-piecewise-cubic-hermite-interpolant-properties` · theorem — Interpolation, C1 matching, and cubic reproduction for Hermite pieces
- `thm-hermite-monotonicity-for-normalized-slopes-in-square` · theorem — A sufficient monotonicity square for cubic Hermite interpolation
- `alg-pchip-slope-selection` · algorithm — PCHIP slope selection
- `thm-bernstein-convex-hull-and-positivity` · theorem — Bernstein control values bound a piecewise polynomial
- `lem-pchip-slope-selection-well-defined` · lemma — PCHIP slope selection has no zero denominator
- `thm-pchip-normalized-slopes-in-square` · theorem — PCHIP endpoint slopes lie in the Hermite monotonicity square
- `lem-pchip-slopes-second-order-uniform-grid` · lemma — PCHIP slopes are second-order accurate on uniform nonstationary grids
- `thm-pchip-shape-preserving-no-overshoot` · theorem — PCHIP is C1, monotone on each data segment, and has no interval overshoot
- `thm-pchip-third-order-away-from-extrema` · theorem — PCHIP has third-order value accuracy on uniform nonstationary grids

### `shape-preserving-piecewise-polynomial-interpolation-examples` — Shape preserving piecewise polynomial interpolation — Examples (4 item(s))

- `ex-positive-endpoint-samples-negative-between` · example — Positive endpoint samples do not ensure a positive interpolant
- `ex-natural-cubic-spline-undershoots-nonnegative-table` · example — A natural cubic spline undershoots a nonnegative table
- `ex-pchip-flat-monotone-data` · example — PCHIP preserves a flat part of monotone data
- `ex-pchip-limiter-second-order-at-smooth-extremum` · example — PCHIP loses third-order value accuracy next to a smooth extremum

### `wavelet-transforms-and-nonlinear-approximation` — Wavelet transforms and nonlinear approximation (19 item(s))

- `def-na-finite-periodic-haar-transform` · definition — Finite periodic Haar transform
- `def-na-periodic-orthogonal-compact-filter-dwt` · definition — Periodic finite orthogonal compact-filter wavelet transform
- `def-na-daubechies-d4-filter` · definition — Explicit four-tap Daubechies filter and its high-pass partner
- `def-na-smooth-derivative-bound-class` · definition — Smooth functions on the unit interval with bounded derivative data
- `def-na-haar-cell-average-projection` · definition — Haar cell-average projection on the unit interval
- `def-na-hard-soft-coefficient-thresholding` · definition — Hard m-term retention and soft thresholding of finite coefficients
- `def-na-wavelet-coefficient-besov-quasinorm` · definition — Finite wavelet-coefficient Besov quasi-norm on a dyadic multilevel transform
- `def-na-finite-riesz-synthesis-matrix` · definition — Finite Riesz synthesis matrix and biorthogonal coefficient coordinates
- `thm-na-finite-periodic-haar-transform-orthogonality` · theorem — Orthogonality, inverse, and Parseval identity for the finite periodic Haar transform
- `thm-na-periodic-orthogonal-compact-filter-dwt-inverse-parseval` · theorem — Inverse and Parseval identity for a periodic orthogonal compact-filter transform
- `thm-na-daubechies-d4-filter-qmf-and-two-moments` · theorem — The explicit four-tap Daubechies pair satisfies the orthogonal filter and two-moment conditions
- `thm-na-haar-cell-average-w1inf-error-bound` · theorem — Haar cell averages approximate smooth bounded-derivative data at first order
- `thm-na-orthogonal-best-m-term-thresholding` · theorem — Hard m-term retention is optimal for an orthonormal coefficient basis
- `prop-na-riesz-coefficient-tail-error-bound` · proposition — Biorthogonal coefficient truncation error is controlled by Riesz bounds
- `def-na-d4-periodic-multilevel-transform` · definition — Periodic multilevel transform using the four-tap Daubechies filter
- `thm-na-critical-besov-coefficients-best-m-tail` · theorem — Critical Besov coefficient control implies a best m-term squared-error rate
- `lem-na-d4-multilevel-detail-support-and-moments` · lemma — Local support, affine cancellation, and normalization of multilevel D4 detail rows
- `lem-na-sampled-smooth-d4-coefficient-decay` · lemma — Two D4 vanishing moments give a local coefficient bound for smooth periodic samples
- `cor-na-sampled-smooth-d4-besov-best-m-rate` · corollary — Smooth periodic samples have a best m-term D4 Besov-tail rate

### `wavelet-transforms-and-nonlinear-approximation-examples` — Wavelet transforms and nonlinear approximation — Examples (3 item(s))

- `ex-na-boundary-extension-changes-haar-coefficients` · example — Periodic and symmetric padding give different Haar coefficients
- `ex-na-haar-step-vector-compression` · example — Exact two-coefficient Haar compression of a four-entry step vector
- `ex-na-soft-threshold-bias-versus-hard-best-m` · example — Soft thresholding shrinks a retained coefficient while hard best-m retention does not

## Your seams

Your pages depend on another group's:

- `shape-preserving-piecewise-polynomial-interpolation` requires `spline-evaluation-and-interpolation-algorithms` (group a, batch 3)

Another group's pages depend on yours:

- `barycentric-rational-and-aaa-approximation` (group e) requires your `minimax-approximation-and-remez-algorithms`

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
