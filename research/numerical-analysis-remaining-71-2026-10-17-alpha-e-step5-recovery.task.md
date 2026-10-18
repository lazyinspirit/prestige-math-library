# Step 5 adjudication — group **e**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 13, 14, 15: 3 A/B pair(s), 6 page(s), 75 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **13**: `research/numerical-analysis-remaining-71-2026-10-17-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/numerical-analysis-remaining-71-2026-10-17-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/numerical-analysis-remaining-71-2026-10-17-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 13 | `oscillatory-filon-and-levin-quadrature` | A | numerical-linear-algebra-and-approximation | 2580 | `composite-quadrature-rules`, `finite-precision-direct-factorizations`, `outward-rounded-interval-and-ball-arithmetic`, `smooth-partitions-of-unity-and-exhaustions` |
| 13 | `oscillatory-filon-and-levin-quadrature-examples` | B | numerical-linear-algebra-and-approximation | 2581 | `oscillatory-filon-and-levin-quadrature` |
| 14 | `barycentric-rational-and-aaa-approximation` | A | numerical-linear-algebra-and-approximation | 2582 | `computed-singular-values-and-rank-revealing-factorizations`, `minimax-approximation-and-remez-algorithms`, `outward-rounded-interval-and-ball-arithmetic` |
| 14 | `barycentric-rational-and-aaa-approximation-examples` | B | numerical-linear-algebra-and-approximation | 2583 | `barycentric-rational-and-aaa-approximation` |
| 15 | `delaunay-triangulations-and-voronoi-computation` | A | numerical-linear-algebra-and-approximation | 2584 | `certified-geometric-predicates`, `polynomial-interpolation-and-remainder` |
| 15 | `delaunay-triangulations-and-voronoi-computation-examples` | B | numerical-linear-algebra-and-approximation | 2585 | `delaunay-triangulations-and-voronoi-computation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `oscillatory-filon-and-levin-quadrature` — Oscillatory integrals and filon levin methods (16 item(s))

- `def-na-finite-interval-oscillatory-integral` · definition — Finite-interval oscillatory integral and phase convention
- `lem-na-lagrange-interpolation-on-distinct-nodes` · lemma — Lagrange interpolation at distinct real nodes
- `lem-na-one-dimensional-morse-coordinate` · lemma — Local quadratic coordinate at a simple stationary point
- `alg-na-fourier-polynomial-moments` · algorithm — Exact recurrence for polynomial Fourier moments
- `lem-na-complex-phase-derivative` · lemma — Derivative of a complex oscillatory phase
- `alg-na-levin-collocation-quadrature` · algorithm — Levin collocation for a nonstationary oscillatory integral
- `lem-na-fresnel-integral` · lemma — Fresnel whole-line moment from the damped complex Gaussian
- `lem-na-quadratic-phase-amplitude-bound` · lemma — One-dimensional quadratic oscillatory amplitude bound
- `thm-na-fourier-oscillatory-moment-recurrence` · theorem — Exact polynomial moments for the linear Fourier phase
- `thm-na-nonstationary-oscillatory-integration-by-parts` · theorem — Repeated integration by parts for a nonstationary oscillatory integral
- `alg-na-nonstationary-moment-expansion` · algorithm — Bounded integration-by-parts expansion for an oscillatory moment
- `lem-na-quadratic-phase-stationary-expansion` · lemma — Local stationary expansion for a quadratic phase
- `thm-na-levin-conditioned-residual-bound` · theorem — Levin endpoint identity and conditioned residual bound
- `alg-na-filon-nodal-moment-quadrature` · algorithm — Filon quadrature from nodal interpolation and phase moments
- `thm-na-single-interior-stationary-phase-expansion` · theorem — Stationary-phase expansion at one simple interior critical point
- `thm-na-filon-interpolation-error-bound` · theorem — Nonstationary error bound for endpoint Filon interpolation

### `oscillatory-filon-and-levin-quadrature-examples` — Oscillatory integrals and filon levin methods — Examples (3 item(s))

- `ex-na-ill-conditioned-levin-collocation` · example — A small Levin collocation residual can hide a large endpoint error
- `ex-na-interior-stationary-phase-boundary-term` · example — An interior stationary point adds a Fresnel-scale term
- `ex-na-large-frequency-fourier-filon-versus-midpoint-sample` · example — A Fourier integral missed by one sample but captured by Filon moments

### `barycentric-rational-and-aaa-approximation` — Barycentric rational and aaa approximation (26 item(s))

- `alg-pade-coefficient-matching` · algorithm — Exact Padé coefficient matching with defect statuses
- `def-distinct-node-divided-difference` · definition — Divided differences on distinct nodes
- `lem-barycentric-denominator-polynomial-nonzero` · lemma — A barycentric denominator polynomial with nonzero weights is nonzero
- `def-barycentric-rational-quotient` · definition — Barycentric rational quotient with support values and reduced poles
- `lem-divided-difference-lagrange-formula-and-symmetry` · lemma — Divided differences are symmetric leading coefficients
- `thm-pade-solvable-system-gives-local-order` · theorem — A solvable Padé moment system gives the stated Taylor order
- `def-floater-hormann-interpolant` · definition — Floater–Hormann barycentric interpolant
- `lem-adjacent-window-divided-difference-recurrence` · lemma — Adjacent-window divided-difference recurrence
- `lem-divided-difference-repeated-rolle-bound` · lemma — Rolle bound for a divided difference
- `lem-hermite-genocchi-simplex-integral` · lemma — Hermite–Genocchi simplex formula for divided differences
- `prop-barycentric-rational-quotient-well-defined` · proposition — Barycentric rational quotients are defined and interpolate at support nodes
- `alg-aaa-finite-sample-rational-approximation` · algorithm — Finite-sample AAA rational approximation with exact SVD
- `def-floater-hormann-local-mesh-ratio` · definition — Local mesh ratio for degree-zero Floater–Hormann interpolation
- `def-floater-hormann-window-polynomial` · definition — Local polynomial in a Floater–Hormann window
- `lem-hermite-genocchi-bv-window-variation` · lemma — Bounded variation controls adjacent Hermite–Genocchi windows
- `lem-floater-hormann-local-mesh-ratio-bounded-by-global` · lemma — A global mesh ratio bounds the local degree-zero ratio
- `lem-floater-hormann-window-polynomial-interpolates` · lemma — Floater–Hormann window polynomials interpolate their local data
- `thm-aaa-loewner-minimum-and-support-interpolation` · theorem — AAA weights minimize the Loewner residual and interpolate support data
- `lem-floater-hormann-weight-and-blend-identity` · lemma — Floater–Hormann weights equal the local-polynomial blend weights
- `lem-floater-hormann-window-newton-remainder` · lemma — Newton remainder for a Floater–Hormann window polynomial
- `lem-floater-hormann-gap-partial-sums-positive` · lemma — Floater–Hormann blend partial sums are positive in each node gap
- `lem-floater-hormann-denominator-lower-bound` · lemma — Floater–Hormann barycentric denominator lower bound
- `thm-floater-hormann-no-real-poles` · theorem — Floater–Hormann interpolants have no real poles
- `cex-floater-hormann-cd1-seminorm-rate-fails` · counterexample — Uniform meshes refute the C^(d+1)-seminorm-only Floater–Hormann rate
- `thm-floater-hormann-error-rate-bv` · theorem — Floater–Hormann error bounds for a bounded-variation highest derivative
- `thm-floater-hormann-error-rate-c2` · theorem — Floater–Hormann C^(d+2) parity error bounds

### `barycentric-rational-and-aaa-approximation-examples` — Barycentric rational and aaa approximation — Examples (3 item(s))

- `ex-pade-singular-system-and-froissart-cancellation` · example — Padé matching can be singular or create a Froissart doublet
- `ex-aaa-small-sample-error-does-not-control-off-grid` · example — Zero AAA sample residual can coexist with arbitrary off-grid error
- `ex-aaa-transfer-function-pole` · example — AAA recovers a scalar transfer-function pole from four samples

### `delaunay-triangulations-and-voronoi-computation` — Delaunay triangulations and voronoi computation (24 item(s))

- `def-indexed-geometric-site-set` · definition — Finite indexed geometric site sets and duplicate handling
- `lem-complete-ordered-field-is-archimedean` · lemma — A complete ordered field has cofinal canonical integers
- `lem-linear-cardinal-interpolant-on-an-edge` · lemma — The affine edge interpolant is the unique degree-one cardinal polynomial
- `def-lexicographic-lift-tie-break` · definition — Stable-id lexicographic lift perturbation for cocircular and power ties
- `lem-lifted-power-sphere-determinant-identity` · lemma — The lifted determinant records a power-sphere side
- `lem-voronoi-vertex-empty-circle` · lemma — A Voronoi vertex has a common empty circle of nearest sites
- `def-planar-delaunay-voronoi-structures` · definition — Planar triangulations, Delaunay structures, and Voronoi cells
- `def-three-dimensional-delaunay-and-weighted-regular-lower-hull` · definition — Three-dimensional Delaunay and weighted regular triangulations by lifting
- `thm-lexicographic-lift-tie-break-consistent` · theorem — The finite lexicographic lift tie-break is coherent
- `def-barycentric-point-location-interpolation-and-voronoi-query` · definition — Barycentric point location, affine interpolation, and nearest-site queries
- `lem-euler-count-for-planar-triangulation` · lemma — Euler counting for a finite planar triangulation
- `lem-large-delaunay-supertriangle-exists` · lemma — A dyadic supertriangle contains the sites and excludes every input circumcircle
- `lem-lifted-flip-potential-decreases` · lemma — An illegal planar Delaunay flip strictly decreases lifted interpolation volume
- `lem-lower-lifted-facets-cover-the-convex-hull` · lemma — Generic lower lifted facets project to a triangulation of the convex hull
- `lem-simplicial-four-polytope-facet-count` · lemma — A convex 4-polytope has at most m(m−3)/2 facets
- `thm-barycentric-interpolation-and-nearest-neighbor-query-correct` · theorem — Barycentric interpolation and nearest-site queries are correct
- `thm-planar-triangle-and-edge-count` · theorem — A planar triangulation has linearly many triangles and edges
- `alg-incremental-planar-delaunay-edge-flips` · algorithm — Incremental planar Delaunay insertion with exact edge flips
- `alg-incremental-three-dimensional-regular-cavity-repair` · algorithm — Finite exact 3D Delaunay and regular lower-hull cavity repair
- `alg-randomized-history-dag-point-location` · algorithm — Randomized planar point location by a history DAG
- `thm-incremental-planar-delaunay-correctness-and-termination` · theorem — Exact planar insertion terminates with a weak empty-circle triangulation
- `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination` · theorem — Exact 3D lower-hull insertion covers the hull and terminates
- `thm-randomized-history-dag-expected-location-cost` · theorem — Uniform random insertion gives expected O(n log n) location work
- `thm-three-dimensional-delaunay-output-size-quadratic` · theorem — Three-dimensional Delaunay and regular output size is quadratic

### `delaunay-triangulations-and-voronoi-computation-examples` — Delaunay triangulations and voronoi computation — Examples (3 item(s))

- `ex-cocircular-four-site-lexicographic-tie` · example — A cocircular four-site tie selects the stable-id diagonal
- `ex-collinear-sites-lower-dimensional-output` · example — Collinear and duplicate sites return a canonical chain
- `ex-scattered-linear-interpolation-over-delaunay-cell` · example — A scattered affine interpolant on one Delaunay cell

## Your seams

Your pages depend on another group's:

- `barycentric-rational-and-aaa-approximation` requires `minimax-approximation-and-remez-algorithms` (group b, batch 4)
- `delaunay-triangulations-and-voronoi-computation` requires `certified-geometric-predicates` (group c, batch 7)

Another group's pages depend on yours:

- `curved-mesh-geometry-and-conservative-mesh-transfer` (group u) requires your `delaunay-triangulations-and-voronoi-computation`

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
