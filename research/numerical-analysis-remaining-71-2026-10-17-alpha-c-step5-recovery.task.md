# Step 5 adjudication — group **c**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 46 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/numerical-analysis-remaining-71-2026-10-17-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/numerical-analysis-remaining-71-2026-10-17-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/numerical-analysis-remaining-71-2026-10-17-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `certified-geometric-predicates` | A | numerical-linear-algebra-and-approximation | 2568 | `outward-rounded-interval-and-ball-arithmetic` |
| 7 | `certified-geometric-predicates-examples` | B | numerical-linear-algebra-and-approximation | 2569 | `certified-geometric-predicates` |
| 8 | `nonuniform-fast-fourier-transforms` | A | numerical-linear-algebra-and-approximation | 2570 | `computed-fast-transforms-and-convolution`, `outward-rounded-interval-and-ball-arithmetic`, `finite-precision-direct-factorizations` |
| 8 | `nonuniform-fast-fourier-transforms-examples` | B | numerical-linear-algebra-and-approximation | 2571 | `nonuniform-fast-fourier-transforms` |
| 9 | `toeplitz-circulant-and-displacement-structured-solvers` | A | numerical-linear-algebra-and-approximation | 2572 | `computed-fast-transforms-and-convolution`, `sparse-direct-elimination-and-ordering`, `linear-prediction-for-dependent-data` |
| 9 | `toeplitz-circulant-and-displacement-structured-solvers-examples` | B | numerical-linear-algebra-and-approximation | 2573 | `toeplitz-circulant-and-displacement-structured-solvers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `certified-geometric-predicates` — Certified geometric predicates (15 item(s))

- `def-certified-geometric-predicate-determinants` · definition — Dyadic orientation and lifted sphere determinants
- `alg-interval-geometric-predicate-filter` · algorithm — Certified geometric predicate for interval-valued coordinates
- `alg-symbolic-geometric-determinant-tie-break` · algorithm — Shared formal perturbation for declared determinant tie-breaking
- `lem-dyadic-determinant-integer-clearance-preserves-sign` · lemma — Clearing dyadic row denominators preserves determinant sign
- `lem-leibniz-determinant-forward-error-bound` · lemma — A left-to-right Leibniz determinant has an explicit forward error bound
- `lem-two-and-three-by-three-nonsingular-dyadic-system-solvable` · lemma — A nonzero 2-by-2 or 3-by-3 dyadic determinant gives a unique real solution
- `alg-exact-dyadic-determinant-sign` · algorithm — Exact dyadic determinant sign by integer clearance
- `alg-floating-filter-for-geometric-determinants` · algorithm — Outward-bounded floating determinant filter
- `lem-nondegenerate-dyadic-simplex-determines-unique-sphere` · lemma — A nondegenerate dyadic simplex determines a unique sphere
- `thm-interval-geometric-predicate-filter-sound` · theorem — The interval geometric filter certifies only uniform signs
- `lem-lifted-determinant-sign-matches-sphere-side` · lemma — The lifted determinant records the side of a sphere
- `thm-floating-filter-sign-is-exact` · theorem — A certified floating determinant filter returns only the exact sign
- `alg-certified-dyadic-geometric-predicate` · algorithm — Certified predicate for exact dyadic geometric inputs
- `thm-symbolic-geometric-determinant-tie-break-consistent` · theorem — The formal determinant tie-break is nondegenerate and consistent
- `thm-certified-dyadic-geometric-predicate-sound-and-terminates` · theorem — The filtered exact dyadic predicate is sound and terminates

### `certified-geometric-predicates-examples` — Certified geometric predicates — Examples (3 item(s))

- `ex-uncertain-coordinate-interval-with-ambiguous-sign` · example — An uncertain coordinate interval does not decide orientation
- `ex-nearly-cocircular-sites-certified-incircle` · example — A nearly cocircular quadruple has a certified lifted sign
- `ex-nearly-collinear-triangle-certified-orientation` · example — A nearly collinear dyadic triangle falls through to the exact sign

### `nonuniform-fast-fourier-transforms` — Nonuniform fast fourier transforms (12 item(s))

- `def-nufft-finite-array-norms` · definition — Finite complex-array norms used by the NUFFT certificates
- `def-nufft-periodized-gaussian-gridding-kernel` · definition — Periodized Gaussian gridding kernel
- `lem-nufft-finite-euclidean-norm-triangle` · lemma — Triangle inequality for the finite NUFFT Euclidean norm
- `def-nufft-transform-types-and-mode-conventions` · definition — Type-1, type-2, and type-3 nonuniform Fourier transforms
- `lem-nufft-gaussian-periodization-converges` · lemma — Local uniform convergence of the periodized Gaussian
- `lem-nufft-gaussian-image-tail-bound` · lemma — Explicit tail for the periodized Gaussian image sum
- `lem-nufft-gaussian-periodization-fourier-series` · lemma — Fourier series of the periodized Gaussian
- `lem-nufft-gaussian-spread-truncation-tail` · lemma — Explicit periodized Gaussian spread-tail bound
- `lem-nufft-gaussian-grid-alias-identity-and-bound` · lemma — Exact Gaussian grid alias identity and explicit alias bound
- `alg-nufft-certified-gaussian-gridding-type1-type2` · algorithm — Certified Gaussian gridding for type 1 and type 2
- `lem-nufft-certified-gaussian-gridding-returns-a-status` · lemma — Certified Gaussian gridding terminates with a defined status
- `thm-nufft-gaussian-gridding-error-and-type2-adjoint` · theorem — Certified type-1 Gaussian gridding error and type-2 adjoint bound

### `nonuniform-fast-fourier-transforms-examples` — Nonuniform fast fourier transforms — Examples (3 item(s))

- `ex-nufft-mri-fourier-samples` · example — Exact MRI Fourier samples from a two-point object
- `ex-nufft-small-deconvolution-mode-is-inconclusive` · example — A positive mode multiplier too small to certify
- `ex-nufft-clustered-sources-l1-error` · example — Clustered sources and absolute l1 error

### `toeplitz-circulant-and-displacement-structured-solvers` — Toeplitz circulant and displacement structured solvers (10 item(s))

- `def-toeplitz-circulant-and-displacement-notation` · definition — Toeplitz, circulant, and finite-index conventions for structured solvers
- `thm-realified-dense-residual-certificate` · theorem — A specified realified dense residual check bounds the exact residual
- `prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft` · proposition — The canonical finite DFT diagonalizes every circulant
- `thm-zero-padded-fft-toeplitz-matvec-is-exact-and-costs-nlogn` · theorem — A zero-padded circulant embedding computes a Toeplitz product in O(N log N)
- `lem-complex-hermitian-toeplitz-reflection-recursion` · lemma — Complex Hermitian Toeplitz bordering yields reflection coefficients and positive pivots
- `def-displacement-rank-generators-and-lower-shift` · definition — Lower-shift displacement rank and generator pairs
- `alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve` · algorithm — General-RHS Hermitian Toeplitz solve by reflection recursion and Gohberg–Semencul
- `lem-toeplitz-matrix-has-displacement-rank-at-most-two` · lemma — A Toeplitz matrix has lower-shift displacement rank at most two
- `lem-displacement-generator-update-under-scalar-schur-elimination` · lemma — One exact scalar elimination step updates a displacement generator
- `thm-gohberg-semencul-inverse-identity-and-cost` · theorem — The Hermitian positive-definite Gohberg–Semencul formula is exact and quadratic

### `toeplitz-circulant-and-displacement-structured-solvers-examples` — Toeplitz circulant and displacement structured solvers — Examples (3 item(s))

- `ex-circulant-periodic-poisson-zero-mode` · example — The periodic Poisson circulant has one compatible zero mode
- `ex-hermitian-toeplitz-nonpositive-pivot-failure` · example — An invertible indefinite Toeplitz matrix triggers the pivot-failure branch
- `ex-ar-covariance-toeplitz-forecast-solve` · example — An AR(1) covariance forecast and general-RHS Toeplitz solve

## Your seams

Another group's pages depend on yours:

- `delaunay-triangulations-and-voronoi-computation` (group e) requires your `certified-geometric-predicates`

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
