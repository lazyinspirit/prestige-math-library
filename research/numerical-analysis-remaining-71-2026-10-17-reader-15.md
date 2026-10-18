# Step 3a Reader Report — Batch 15

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `15`

## Scope and inventory

Reviewed both assigned pages and all 27 assigned items in dependency order. The A-page contains 24 items; its companion B-page contains 3 examples.

Pages opened:

- `library/numerical-linear-algebra-and-approximation/delaunay-triangulations-and-voronoi-computation.md`
- `library/numerical-linear-algebra-and-approximation/delaunay-triangulations-and-voronoi-computation-examples.md`

A-page items opened:

- `def-indexed-geometric-site-set`, `lem-complete-ordered-field-is-archimedean`, `lem-linear-cardinal-interpolant-on-an-edge`
- `def-lexicographic-lift-tie-break`, `lem-lifted-power-sphere-determinant-identity`, `lem-voronoi-vertex-empty-circle`
- `def-planar-delaunay-voronoi-structures`, `def-three-dimensional-delaunay-and-weighted-regular-lower-hull`, `thm-lexicographic-lift-tie-break-consistent`
- `def-barycentric-point-location-interpolation-and-voronoi-query`, `lem-euler-count-for-planar-triangulation`, `lem-large-delaunay-supertriangle-exists`, `lem-lifted-flip-potential-decreases`, `lem-lower-lifted-facets-cover-the-convex-hull`
- `lem-simplicial-four-polytope-facet-count`, `thm-barycentric-interpolation-and-nearest-neighbor-query-correct`, `thm-planar-triangle-and-edge-count`
- `alg-incremental-planar-delaunay-edge-flips`, `alg-incremental-three-dimensional-regular-cavity-repair`, `alg-randomized-history-dag-point-location`
- `thm-incremental-planar-delaunay-correctness-and-termination`, `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination`, `thm-randomized-history-dag-expected-location-cost`, `thm-three-dimensional-delaunay-output-size-quadratic`

B-page items opened:

- `ex-cocircular-four-site-lexicographic-tie`
- `ex-collinear-sites-lower-dimensional-output`
- `ex-scattered-linear-interpolation-over-delaunay-cell`

External predicate suppliers reviewed before their assigned consumers:

- Current-run batch 7: `def-certified-geometric-predicate-determinants`, `lem-dyadic-determinant-integer-clearance-preserves-sign`, `lem-leibniz-determinant-forward-error-bound`, `lem-two-and-three-by-three-nonsingular-dyadic-system-solvable`, `alg-exact-dyadic-determinant-sign`, `alg-floating-filter-for-geometric-determinants`, `lem-nondegenerate-dyadic-simplex-determines-unique-sphere`, `lem-lifted-determinant-sign-matches-sphere-side`, `thm-floating-filter-sign-is-exact`, `alg-certified-dyadic-geometric-predicate`, and `thm-certified-dyadic-geometric-predicate-sound-and-terminates`.
- Published arithmetic and interval suppliers used by that path: `def-complete-ordered-real-field`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-intervals-rectangles-and-complex-balls`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `def-ordered-field`, `lem-of-mult-neg`, `lem-of-sign-rules`, `lem-of-add-order`, `def-field`, `lem-of-zero-mult`, `lem-nonnegative-square-root-exists-and-unique`, `lem-directed-dyadic-rounding-enclosure-and-error`, `def-outward-rounded-interval-and-ball-operations`, and `thm-outward-rounded-operations-are-isotone-and-dag-sound`.

## Repair

Repaired `lem-simplicial-four-polytope-facet-count`, proof steps 1.1–2.1. The earlier argument used compactness of the convex hull and the vertex-figure/Schlegel construction without enough local justification. The repair explains compactness through the finite coefficient simplex, derives the section as the convex hull of its edge-direction intersections, identifies its vertex and facet incidences through the tangent-cone faces, and makes the Schlegel viewpoint and generic-position choice explicit.

Updated the corresponding step 1.1 and 2.1 derivations in `research/numerical-analysis-remaining-71-2026-10-17-batch-15.proof-contracts.json`. The item had no `verification.judge` record to remove.

Checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-simplicial-four-polytope-facet-count.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-simplicial-four-polytope-facet-count.md` — pass, direct; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-simplicial-four-polytope-facet-count.md` — 1 item, 5 steps, 0 defects.

No page prose or other assigned item was edited.

## Uneditable concern

The current-run batch-7 supplier `alg-floating-filter-for-geometric-determinants`, Definition input clause at lines 28–35, is flagged as a suspected ill-formed algorithm. It takes a finite range certificate listing the exact products and sums in the fixed schedule, but the procedure only instructs checks that the listed values are representable/in range; it does not state how to verify that each listed value is the exact result of the schedule operands, or what to return when validation fails. The forward-error supplier requires every actual rounded operation to meet its zero-or-normal-range hypothesis. If certificate validity is intended as a caller precondition, that needs to be explicit; if the certificate is untrusted, its consistency must be checked and a failed check must branch to `inconclusive`. The exact predicate can use a nonzero filter sign without invoking its exact fallback, so this omission could affect correctness. I did not edit the batch-7 producer. This is recorded as a suspected, fatal-severity in-run dependency finding for assigned consumer `alg-incremental-planar-delaunay-edge-flips`, whose dependency closure reaches the filter through `alg-certified-dyadic-geometric-predicate`.

## Page verdicts

- **A page — qualified.** The summary, requirements, and planar Voronoi–Delaunay diagram match the reviewed items. The assigned mathematical content is sound after the repair above. Its planar algorithm depends on the unresolved batch-7 filter specification concern recorded above.
- **B page — pass.** Its summary accurately describes the stable-diagonal, duplicate-collapse, and barycentric-value examples. The three item computations agree with their statements. No B-page prose was edited.

## Sources and limits

For the randomized planar analysis, I checked de Berg et al., *Computational Geometry: Algorithms and Applications*, 3rd ed., Chapter 9, §9.4, Theorem 9.12 and Lemma 9.13 (PDF pages 15–18). The source states expected `O(n log n)` construction with linear expected storage and proves an `O(n log n)` sum of future-point circumdisk conflicts; the local proof was checked against that argument. Source: [Chapter 9 PDF](https://ics-websites.science.uu.nl/geobook/interpolation.pdf).

For 3D regular triangulations, CGAL 6.3, “Regular Triangulation,” lines 69–86, defines the weighted lift as a projection from four dimensions, notes that points can be hidden, and identifies zero weights with ordinary Delaunay triangulations. Its “Complexity and Performance” section, lines 1754–56, states a quadratic worst-case size. Source: [CGAL 3D Triangulations manual](https://cgal.github.io/9465/doc/Triangulation_3/index.html).

Mount, CMSC 754 Lecture 13, lines 3880–3905, describes randomized incremental planar Delaunay construction and its history-DAG point-location structure. Source: [Lecture notes PDF](https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf).

Coverage limitation: I reviewed the real interval arithmetic branch used to enclose the determinant absolute-term sum. I read the general outward-rounded theorem, but did not audit the unrelated complex-ball and square-root branches or all of their transitive suppliers. No blocker prevented review of the assigned batch.
