# Step 9 — scope-denial sweep, run `frontier-16`

Lead Alpha (GPT 5.6 Sol, `xhigh`, 1M context). Stage `9-scope`, 2026-08-21.

## Outcome

All 148 `deferred` and `out-of-scope` rows in the seven batch coverage files were read against the current item pool, page files, transitive `requires` closure, and `research/plan-spec.json`. All 148 declines stand on substance. No mathematical item was added, removed, or rewritten, and therefore no proof contract or judge verdict was changed.

The sweep did find defects in the scope records. Ninety-five rows had no `destination`; the Hawaiian-earring row named an item rather than a page; and the proper-local-diffeomorphism row pointed to a published prerequisite page that cannot receive the combined corollary. Those 97 rows now carry either a real page id from `plan-spec.json` or the explicit `owner-decision` disposition. Two reasons also needed correction: one overstrong canonical statement omitted connectedness of the source, and the Hardy row falsely said no planned page owns the sharp range.

| batch | declines | deferred | out of scope | explicit owner decision |
|---:|---:|---:|---:|---:|
| 1 | 30 | 4 | 26 | 21 |
| 2 | 33 | 6 | 27 | 28 |
| 3 | 20 | 17 | 3 | 3 |
| 4 | 6 | 1 | 5 | 5 |
| 5 | 9 | 6 | 3 | 3 |
| 6 | 34 | 11 | 23 | 25 |
| 7 | 16 | 14 | 2 | 0 |
| **all** | **148** | **59** | **89** | **85** |

## Corrected scope records

1. **Proper local diffeomorphisms.** The canonical heading “a proper local diffeomorphism over a simply connected target is a global diffeomorphism” was false without connectedness of the source: a disjoint union of two copies of the target is a counterexample. The row now says “with connected source.” `covering-spaces-and-lifting` is published at order 293 and outside the order-288.00001 page closure; it supplies the later covering machinery but cannot receive a new combined corollary. The destination is now the unbuilt `applications-of-the-fundamental-group` page at order 301. The decline stands.
2. **Hardy’s sharp Weierstrass range.** The old reason said no planned page owns the theorem. Disk contradicts that: `lacunary-fourier-series-and-sidon-sets` exists in `plan-spec.json` at order 288.14014 and is unbuilt. The row now names it. Its Fourier-analytic machinery is outside the current page closure, so the decline stands.
3. **Hawaiian earring.** `rem-hawaiian-earring-fundamental-group` is an item id, not a page id, and it is homed only on the deferred catalogue rather than in `plan-spec.json`. The coverage row now names `applications-of-the-fundamental-group`; the difficult uncountability and non-freeness statements remain honestly recorded by the `proved_here: false` remark.
4. **Destination liveness.** Every remaining destination was checked against `plan-spec.json`. A result whose natural home is already published, whose topic has no compatible unbuilt page, or whose row is merely a redundant illustration is marked `owner-decision`; no new page or reading-order change was invented.

## Borderline checks against current closure

- **Frugal polygon triangulations and ear theorems:** the in-flight `thm-simple-polygon-admits-a-triangulation` permits subdivision vertices and is weaker than the source’s frugal theorem. The polygonal Jordan theorem and Euler formula live on the published order-357 plane-graphs page, later than the order-288.00007 area page and outside its closure. The declines stand; moving them into that published page is owner work.
- **Carathéodory ODE solutions:** absolute continuity, almost-everywhere differentiation, and Lebesgue integration are not in the Picard page closure. No planned page specifically owns weak first-order ODE solutions. The classical-solution scope therefore stands as an owner placement decision.
- **Arbitrary-index Tonelli:** `def-nonnegative-extended-series` defines natural-number-indexed series, while `thm-unordered-summability-of-real-families` concerns finite-subset nets of real families. Neither is the source’s arbitrary-index nonnegative extended double-sum theorem, so the row is not secretly `already-published`.
- **Groupoid covering classifications:** the only planned fundamental-groupoid item is `ex-fundamental-groupoid` on the later category-theory examples page. No planned page carries covering groupoids or the full orbit-category equivalence. The connected topological classification built in batch 6 does not silently supply those categorical Statements.
- **Complete complex polynomial factorization:** the two source rows are assigned to `the-fundamental-theorem-of-algebra`, which exists in the plan but is unbuilt and outside the analyticity page closure. The new Liouville theorem proves existence of a root; it does not itself state the full multiplicity factorization. The assignment to the dedicated page stands.
- **Complex binomial, logarithmic, and inverse-trigonometric series:** the published real Maclaurin formulas do not supply the complex branch-domain Statements. The planned branches page is later and outside the current closure, so both rows stand with that destination.

## Destination evidence

For every `P#` row below, the named page exists in `research/plan-spec.json`, its subject matches the declined result, and it is outside the declining page’s transitive `requires` closure. “Unbuilt” means no page file exists; no destination was inferred merely from publication.

| code | destination | order | status on disk | title |
|---|---|---:|---|---|
| P1 | `the-fundamental-theorem-of-algebra` | 139 | unbuilt | The Fundamental Theorem of Algebra |
| P2 | `constant-rank-submersions-and-regular-level-sets` | 288.00003 | unbuilt | Constant Rank, Submersions, Immersions and Regular Level Sets |
| P3 | `outer-measure-and-the-caratheodory-extension-theorem` | 288.005 | unbuilt | Outer Measure and the Caratheodory Extension Theorem |
| P4 | `lebesgue-measure-on-euclidean-space` | 288.007 | unbuilt | Lebesgue Measure on Euclidean Space |
| P5 | `the-lebesgue-integral-and-the-convergence-theorems` | 288.015 | unbuilt | The Lebesgue Integral and the Convergence Theorems |
| P6 | `the-lebesgue-and-riemann-integrals-compared` | 288.017 | unbuilt | The Lebesgue and Riemann Integrals Compared |
| P7 | `geometric-hahn-banach-and-convex-separation` | 288.055 | unbuilt | Geometric Hahn Banach and Convex Separation |
| P8 | `geometric-hahn-banach-and-convex-separation-examples` | 288.056 | unbuilt | Geometric Hahn Banach and Convex Separation — Examples |
| P9 | `probability-spaces-random-variables-and-expectation` | 288.097 | unbuilt | Probability Spaces Random Variables and Expectation |
| P10 | `lacunary-fourier-series-and-sidon-sets` | 288.14014 | unbuilt | Lacunary Fourier Series and Sidon Sets |
| P11 | `applications-of-the-fundamental-group` | 301 | unbuilt | Applications of the Fundamental Group |
| P12 | `graphs-of-groups-and-bass-serre-theory` | 302.011 | unbuilt | Graphs of Groups and Bass Serre Theory |
| P13 | `the-identity-theorem-and-the-open-mapping-theorem` | 313 | unbuilt | The Identity Theorem, the Maximum Principle and the Open Mapping Theorem |
| P14 | `isolated-singularities-and-laurent-series` | 317 | unbuilt | Isolated Singularities and Laurent Series |
| P15 | `conformal-mapping-branches-and-the-schwarz-lemma` | 325 | unbuilt | Conformal Mapping, Branches, and the Schwarz Lemma |
| P16 | `normal-families-and-montels-theorem` | 331 | unbuilt | Normal Families and Montel's Theorem |
| P17 | `cw-complexes-and-cellular-homology` | 366.007 | unbuilt | Cw Complexes and Cellular Homology |
| P18 | `euclidean-ordinary-differential-equations-with-smooth-dependence` | 457 | unbuilt | Euclidean Ordinary Differential Equations with Smooth Dependence |

Owner-decision evidence codes:

- `OD-DUP`: the batch manifest already carries the general theorem or the stronger boundary example named by the reason; this heading is a routine second computation or illustration, not a missing dependency.
- `OD-PUBLISHED`: the natural mathematical home is already published and cannot be retrofitted in this run; the exact strengthening is absent, so an owner-approved enrichment would be required.
- `OD-GAP`: no compatible unbuilt page and no exact item was found in `plan-spec.json`, `items/`, or `library/`; this is an explicit owner placement decision.
- `OD-NONRESULT`: the harvested heading is visual or pedagogical rather than a mathematical definition or result.

## Every decline

### Batch 1

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `the-inverse-function-theorem-completed` | A proper local diffeomorphism with connected source over a simply connected target is a global diffeomorphism | `deferred` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 2 | `the-inverse-function-theorem-completed` | Exercise 8.5.2, the triangular shear (x,y) to (x,y+h(x)) | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 3 | `the-inverse-function-theorem-completed` | Exercise 8.5.3, the exponential-polar map is onto with infinitely many preimages | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 4 | `the-inverse-function-theorem-completed` | Exercise 8.5.5, two local implicit roots of a quadratic | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 5 | `the-inverse-function-theorem-completed` | Exercise 8.5.6, a regular parametrized curve is locally a graph | `deferred` | **stands** | `constant-rank-submersions-and-regular-level-sets` — P2 |
| 6 | `the-inverse-function-theorem-completed` | Exercise 8.5.9, an explicit diffeomorphism from a half-plane to a ball | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 7 | `the-inverse-function-theorem-completed` | Exercise 8.5.10, regular level sets in the plane are smooth curves | `deferred` | **stands** | `constant-rank-submersions-and-regular-level-sets` — P2 |
| 8 | `the-inverse-function-theorem-completed` | Exercise 8.5.11, noncritical plane level sets can be straightened locally by a C1 diffeomorphism | `deferred` | **stands** | `constant-rank-submersions-and-regular-level-sets` — P2 |
| 9 | `the-inverse-function-theorem-completed` | Visualizing Transformations | `out-of-scope` | **stands** | `owner-decision` — OD-NONRESULT |
| 10 | `the-inverse-function-theorem-completed` | Example 1, a linear map carries the Cartesian grid to two families of parallel lines | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 11 | `the-inverse-function-theorem-completed` | Spherical coordinates in R3 | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 12 | `the-inverse-function-theorem-completed` | Cylindrical coordinates in R3 | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 13 | `convex-and-semicontinuous-functions-on-rn` | §3.1.2, Extended-value extensions | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 14 | `convex-and-semicontinuous-functions-on-rn` | Example 3.1, indicator function of a convex set | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 15 | `convex-and-semicontinuous-functions-on-rn` | Example 3.3, a convex cone defined by a geometric-mean versus arithmetic-mean bound | `out-of-scope` | **stands** | `geometric-hahn-banach-and-convex-separation-examples` — P8 |
| 16 | `convex-and-semicontinuous-functions-on-rn` | Example 3.4, matrix fractional function and its linear-matrix-inequality epigraph | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 17 | `convex-and-semicontinuous-functions-on-rn` | §3.1.8, Integral and expectation extensions of Jensen's inequality | `out-of-scope` | **stands** | `probability-spaces-random-variables-and-expectation` — P9 |
| 18 | `convex-and-semicontinuous-functions-on-rn` | §3.2.1, Infinite sums and integrals of convex functions | `out-of-scope` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 19 | `convex-and-semicontinuous-functions-on-rn` | Example 3.9, optimal weighted least-squares cost is concave in the weights | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 20 | `convex-and-semicontinuous-functions-on-rn` | Lecture 3, Convex and affine hulls | `out-of-scope` | **stands** | `geometric-hahn-banach-and-convex-separation` — P7 |
| 21 | `convex-and-semicontinuous-functions-on-rn` | Lecture 3, Carathéodory's theorem | `out-of-scope` | **stands** | `geometric-hahn-banach-and-convex-separation` — P7 |
| 22 | `convex-and-semicontinuous-functions-on-rn` | Lecture 4, Algebra of relative interiors and closures | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 23 | `convex-and-semicontinuous-functions-on-rn` | Lecture 5, Recession cones and lineality space | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 24 | `convex-and-semicontinuous-functions-on-rn` | Lecture 5, Directions of recession of convex functions | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 25 | `convex-and-semicontinuous-functions-on-rn` | Lecture 6, Preservation of closure under linear transformation | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 26 | `convex-and-semicontinuous-functions-on-rn` | Lecture 7, Convex conjugate functions | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 27 | `convex-and-semicontinuous-functions-on-rn` | Lecture 7, Conjugacy theorem | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 28 | `convex-and-semicontinuous-functions-on-rn` | Lecture 12, Fenchel inequality | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 29 | `convex-and-semicontinuous-functions-on-rn` | Lecture 12, Sensitivity in constrained optimization | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 30 | `convex-and-semicontinuous-functions-on-rn` | Lecture 12, Subdifferential calculus | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |

### Batch 2

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `areas-of-elementary-plane-figures` | Example 7.2.7, splitting a region bounded by y=1+\|x\| before iterating | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 2 | `areas-of-elementary-plane-figures` | Example 7.2.8, area between two parabolas | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 3 | `areas-of-elementary-plane-figures` | Example 7.3.1, an explicit elementary-matrix factorization | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 4 | `areas-of-elementary-plane-figures` | Exercise 4.5, point-in-polygon classification | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 5 | `areas-of-elementary-plane-figures` | Definition 4.6, simple polygons with holes | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 6 | `areas-of-elementary-plane-figures` | Theorem 4.9, every simple polygon has a triangulation | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 7 | `areas-of-elementary-plane-figures` | Exercise 4.10, why the closest interior vertex need not replace the farthest one in the triangulation proof | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 8 | `areas-of-elementary-plane-figures` | Theorem 4.11, every nontriangular simple polygon has two nonoverlapping ears | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 9 | `areas-of-elementary-plane-figures` | Theorem 4.12, every triangulation of a simple polygon with more than four vertices contains at least two ears | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 10 | `areas-of-elementary-plane-figures` | Exercise 4.13, proof of the two-ears theorem for a triangulation | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 11 | `areas-of-elementary-plane-figures` | Lemma 4.15, every triangulation of an n-vertex simple polygon has n-2 triangles and 2n-3 edges | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 12 | `areas-of-elementary-plane-figures` | Tetrahedralizations in R3, the three-dimensional contrast with polygon triangulations | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 13 | `areas-of-elementary-plane-figures` | The Schönhardt polyhedron does not admit a tetrahedralization without new vertices | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 14 | `areas-of-elementary-plane-figures` | Deciding whether a nonconvex polyhedron has a tetrahedralization is NP-complete | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 15 | `areas-of-elementary-plane-figures` | Allowing Steiner vertices guarantees a tetrahedralization of a polyhedron | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 16 | `areas-of-elementary-plane-figures` | Two tetrahedralizations of the same triangular bipyramid can have different numbers of tetrahedra | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 17 | `areas-of-elementary-plane-figures` | Minimum-size tetrahedralization of a convex polyhedron is NP-complete | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 18 | `areas-of-elementary-plane-figures` | Exercise 4.16, tetrahedralizations of the three-dimensional cube | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 19 | `areas-of-elementary-plane-figures` | Exercise 4.17, an O(n^2) triangulation algorithm | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 20 | `areas-of-elementary-plane-figures` | Lemma 1.4 (Dehn–Lennes), every simple polygon with at least four vertices has a diagonal | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 21 | `areas-of-elementary-plane-figures` | Theorem 1.5 (Dehn–Lennes), every simple polygon has a frugal triangulation | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 22 | `areas-of-elementary-plane-figures` | Corollary 1.6, every simple polygon with at least four vertices has an ear | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 23 | `areas-of-elementary-plane-figures` | Lemma 1.7, every frugal triangulation of a simple n-gon has n-2 facets and n-3 diagonals | `deferred` | **stands** | `owner-decision` — OD-PUBLISHED |
| 24 | `areas-of-elementary-plane-figures` | Lemma 1.8, crossing criterion for two diagonals in cyclic vertex order | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 25 | `areas-of-elementary-plane-figures` | Lemma 1.9, maximal noncrossing diagonals form a frugal triangulation | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |
| 26 | `improper-and-parameter-dependent-multiple-integrals` | Definition of nonnegative R# integrability by bounded truncations | `out-of-scope` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 27 | `improper-and-parameter-dependent-multiple-integrals` | Proposition 3.1.20, additivity for nonnegative R# functions | `out-of-scope` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 28 | `improper-and-parameter-dependent-multiple-integrals` | Lemma 3.1.21, independence of a nonnegative difference representation | `out-of-scope` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 29 | `improper-and-parameter-dependent-multiple-integrals` | Proposition 3.1.22, additivity for signed R# functions | `out-of-scope` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 30 | `improper-and-parameter-dependent-multiple-integrals` | Proposition 3.1.23, multiplying a nonnegative R# function by a bounded integrable function | `out-of-scope` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 31 | `improper-and-parameter-dependent-multiple-integrals` | Proposition 3.1.24, change of variables for compactly supported unbounded-integrable functions | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 32 | `improper-and-parameter-dependent-multiple-integrals` | Example 1, differentiating an integral of cos(xy) | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 33 | `improper-and-parameter-dependent-multiple-integrals` | Example 10, exponential parameter integral leading to a logarithmic difference formula | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |

### Batch 3

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `picard-lindelof-and-first-order-odes` | Lemma 2.3: $C^k$ right-hand sides give $C^{k+1}$ solutions | `deferred` | **stands** | `euclidean-ordinary-differential-equations-with-smooth-dependence` — P18 |
| 2 | `picard-lindelof-and-first-order-odes` | Carathéodory solutions for measurable right-hand sides | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 3 | `picard-lindelof-and-first-order-odes` | Theorem 2.10: $C^k$ dependence on initial conditions and the first variational equation | `deferred` | **stands** | `euclidean-ordinary-differential-equations-with-smooth-dependence` — P18 |
| 4 | `picard-lindelof-and-first-order-odes` | Theorem 2.11: $C^k$ dependence on parameters | `deferred` | **stands** | `euclidean-ordinary-differential-equations-with-smooth-dependence` — P18 |
| 5 | `picard-lindelof-and-first-order-odes` | §2.5 Regular perturbation theory | `deferred` | **stands** | `euclidean-ordinary-differential-equations-with-smooth-dependence` — P18 |
| 6 | `picard-lindelof-and-first-order-odes` | Theorem 2.12: Taylor expansion in a perturbation parameter | `deferred` | **stands** | `euclidean-ordinary-differential-equations-with-smooth-dependence` — P18 |
| 7 | `picard-lindelof-and-first-order-odes` | Runge–Kutta algorithm and numerical step-size control | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 8 | `picard-lindelof-and-first-order-odes` | Remark 6.3.7: weak solutions for discontinuous right-hand sides | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 9 | `the-gauge-integral-and-cousins-lemma` | §1.12 L-integrable functions | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 10 | `the-gauge-integral-and-cousins-lemma` | Definition 1.29 and Proposition 1.30: L-integrability via integrability of $\|f\|$ | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 11 | `the-gauge-integral-and-cousins-lemma` | Corollary 1.31: an integrable majorant of $\|f\|$ makes $f$ L-integrable | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 12 | `the-gauge-integral-and-cousins-lemma` | Corollary 1.32: sums and scalar multiples of L-integrable functions are L-integrable | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 13 | `the-gauge-integral-and-cousins-lemma` | Corollary 1.33: minima and maxima of two L-integrable functions are L-integrable | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 14 | `the-gauge-integral-and-cousins-lemma` | Corollary 1.34: L-integrability is equivalent to integrability of the positive and negative parts | `deferred` | **stands** | `the-lebesgue-and-riemann-integrals-compared` — P6 |
| 15 | `the-gauge-integral-and-cousins-lemma` | §1.13 The monotone convergence theorem | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 16 | `the-gauge-integral-and-cousins-lemma` | Theorem 1.35: monotone convergence for pointwise monotone integrable sequences with convergent integral sequence | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 17 | `the-gauge-integral-and-cousins-lemma` | Corollary 1.36: termwise integration of a pointwise convergent series of nonnegative integrable functions | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 18 | `the-gauge-integral-and-cousins-lemma` | §1.14 The dominated convergence theorem | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 19 | `the-gauge-integral-and-cousins-lemma` | Lemma 1.37: finite minima and maxima are integrable under a common integrable lower bound | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |
| 20 | `the-gauge-integral-and-cousins-lemma` | Theorem 1.38: dominated convergence between two integrable bounding functions | `deferred` | **stands** | `the-lebesgue-integral-and-the-convergence-theorems` — P5 |

### Batch 4

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `trigonometric-and-oscillatory-examples-in-one-variable` | Hardy's improvement from the restrictive Weierstrass condition to ab ≥ 1 | `deferred` | **stands** | `lacunary-fourier-series-and-sidon-sets` — P10 |
| 2 | `trigonometric-and-oscillatory-examples-in-one-variable` | Figure 1, the parameter choice a = 0.5 and b = 3 under Hardy's range | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 3 | `trigonometric-and-oscillatory-examples-in-one-variable` | Remark 15.7.2, (1/n)sin(nx) converges uniformly to zero | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 4 | `trigonometric-and-oscillatory-examples-in-one-variable` | Example 5.18(a), uniform convergence of Σ sin(nx)/n² | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 5 | `trigonometric-and-oscillatory-examples-in-one-variable` | Example 5.18(c), convergence intervals for Σ e^{-nx} sin(nx) | `out-of-scope` | **stands** | `owner-decision` — OD-DUP |
| 6 | `trigonometric-and-oscillatory-examples-in-one-variable` | Definition 4.2, a curve is locally rectifiable when it has a locally bounded-pointwise-variation parametrization | `out-of-scope` | **stands** | `owner-decision` — OD-PUBLISHED |

### Batch 5

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `measures-and-their-basic-properties` | 2.55, Outer measure on all subsets of the real line is not a measure | `deferred` | **stands** | `outer-measure-and-the-caratheodory-extension-theorem` — P3 |
| 2 | `measures-and-their-basic-properties` | 2.55, Outer measure restricted to Borel sets will be a measure | `deferred` | **stands** | `lebesgue-measure-on-euclidean-space` — P4 |
| 3 | `measures-and-their-basic-properties` | Exercise 12(b–c), The measure algebra equivalence relation and metric | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 4 | `measures-and-their-basic-properties` | Exercise 16, Locally measurable sets and saturation of a measure | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 5 | `measures-and-their-basic-properties` | Exercise 0.0.2, Tonelli's theorem for series over arbitrary index sets | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 6 | `measures-and-their-basic-properties` | Example 1.4.21, Lebesgue measure is finitely additive | `deferred` | **stands** | `lebesgue-measure-on-euclidean-space` — P4 |
| 7 | `measures-and-their-basic-properties` | Example 1.4.28, Lebesgue measure on the Lebesgue and Borel sigma-algebras | `deferred` | **stands** | `lebesgue-measure-on-euclidean-space` — P4 |
| 8 | `measures-and-their-basic-properties` | Exercise 1.4.27, Lebesgue measure is the completion of Borel measure | `deferred` | **stands** | `lebesgue-measure-on-euclidean-space` — P4 |
| 9 | `measures-and-their-basic-properties` | Exercise 1.4.28, Approximation by a generating algebra | `deferred` | **stands** | `outer-measure-and-the-caratheodory-extension-theorem` — P3 |

### Batch 6

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `the-seifert-van-kampen-theorem` | Example 1.22: the cube graph and a maximal tree | `deferred` | **stands** | `graphs-of-groups-and-bass-serre-theory` — P12 |
| 2 | `the-seifert-van-kampen-theorem` | Three-set suspension counterexample when the triple intersection is disconnected | `out-of-scope` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 3 | `the-seifert-van-kampen-theorem` | Example 1.23: Linking of Circles | `deferred` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 4 | `the-seifert-van-kampen-theorem` | Example 1.24: Torus Knots | `deferred` | **stands** | `owner-decision` — OD-GAP |
| 5 | `the-seifert-van-kampen-theorem` | Example 1.25: The Shrinking Wedge of Circles | `deferred` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 6 | `the-seifert-van-kampen-theorem` | Applications to Cell Complexes | `deferred` | **stands** | `cw-complexes-and-cellular-homology` — P17 |
| 7 | `the-seifert-van-kampen-theorem` | Proposition 1.26: effect of attaching cells on the fundamental group | `deferred` | **stands** | `cw-complexes-and-cellular-homology` — P17 |
| 8 | `the-seifert-van-kampen-theorem` | Fundamental-group presentations of closed orientable and nonorientable surfaces | `deferred` | **stands** | `owner-decision` — OD-GAP |
| 9 | `the-seifert-van-kampen-theorem` | Corollary 1.27: closed orientable surfaces of different genera are not homotopy equivalent | `deferred` | **stands** | `owner-decision` — OD-GAP |
| 10 | `the-seifert-van-kampen-theorem` | Corollary 1.28: every group is the fundamental group of a 2-dimensional cell complex | `deferred` | **stands** | `cw-complexes-and-cellular-homology` — P17 |
| 11 | `the-seifert-van-kampen-theorem` | Theorem: the fundamental groupoid is the colimit over a suitable open cover | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 12 | `the-seifert-van-kampen-theorem` | Problem 1: compute the fundamental group of the genus-two orientable surface | `deferred` | **stands** | `owner-decision` — OD-GAP |
| 13 | `the-seifert-van-kampen-theorem` | Problem 2: compute the fundamental group of the Klein bottle | `deferred` | **stands** | `owner-decision` — OD-GAP |
| 14 | `the-seifert-van-kampen-theorem` | Problem 3: a diagonal sphere map is a homotopy equivalence onto the non-antipodal-pair subspace | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 15 | `classification-of-covering-spaces` | Classification of arbitrary coverings by permutation actions on fibres | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 16 | `classification-of-covering-spaces` | Section 5: The classification of coverings of groupoids | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 17 | `classification-of-covering-spaces` | Theorem: lifting criterion and uniqueness for a functor into a covering groupoid | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 18 | `classification-of-covering-spaces` | Definition: a map of coverings of a groupoid | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 19 | `classification-of-covering-spaces` | Lemma: a map of coverings of groupoids is itself a covering | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 20 | `classification-of-covering-spaces` | Corollary: a universal covering groupoid is unique and covers every other connected cover | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 21 | `classification-of-covering-spaces` | Theorem: maps of coverings correspond to equivariant maps of fibres | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 22 | `classification-of-covering-spaces` | Definition: automorphism group of a covering groupoid | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 23 | `classification-of-covering-spaces` | Section 6: The construction of coverings of groupoids | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 24 | `classification-of-covering-spaces` | Theorem: the orbit category of the fundamental group is equivalent to connected coverings of the groupoid | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 25 | `classification-of-covering-spaces` | Remark: equivalent descriptions by groupoid functors and fundamental-group sets | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 26 | `classification-of-covering-spaces` | Corollary: the fundamental groupoid functor gives a bijection on covering morphisms | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 27 | `classification-of-covering-spaces` | Theorem: covering morphisms correspond to fundamental-group-equivariant fibre maps | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 28 | `classification-of-covering-spaces` | Lemma: passage to subgroup orbit spaces is functorial | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 29 | `classification-of-covering-spaces` | Theorem: subgroup orbit spaces of the universal cover define an orbit-category equivalence with connected coverings | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 30 | `classification-of-covering-spaces` | Corollary: the fundamental-groupoid functor is an equivalence between coverings of a space and coverings of its groupoid | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 31 | `classification-of-covering-spaces` | Problem 1: lift the group multiplication to a covering of a connected locally path-connected topological group | `out-of-scope` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 32 | `classification-of-covering-spaces` | Problem 2: the covering kernel is discrete, normal, central, and identifies with the automorphism group | `out-of-scope` | **stands** | `applications-of-the-fundamental-group` — P11 |
| 33 | `classification-of-covering-spaces` | Problem 5: equivariant maps from G/H to a G-space form the H-fixed-point space | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |
| 34 | `classification-of-covering-spaces` | Problem 6: fixed-point spaces define a contravariant functor on the orbit category | `out-of-scope` | **stands** | `owner-decision` — OD-GAP |

### Batch 7

| # | page | source heading | recorded disposition | verdict | destination / disk evidence |
|---:|---|---|---|---|---|
| 1 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.1, boundary-uniform convergence implies interior-uniform convergence by the maximum principle | `deferred` | **stands** | `the-identity-theorem-and-the-open-mapping-theorem` — P13 |
| 2 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.1, Theorem 2: Hurwitz's theorem for compact-uniform limits of nonvanishing analytic functions | `deferred` | **stands** | `normal-families-and-montels-theorem` — P16 |
| 3 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.2, the binomial and logarithmic Taylor developments and their exact radius one | `out-of-scope` | **stands** | `conformal-mapping-branches-and-the-schwarz-lemma` — P15 |
| 4 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.2, the inverse tangent and inverse sine Taylor developments | `out-of-scope` | **stands** | `conformal-mapping-branches-and-the-schwarz-lemma` — P15 |
| 5 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.2, recursive Taylor expansion of a local analytic inverse | `deferred` | **stands** | `the-identity-theorem-and-the-open-mapping-theorem` — P13 |
| 6 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.3, convergence of a Laurent series on an annulus | `deferred` | **stands** | `isolated-singularities-and-laurent-series` — P14 |
| 7 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.3, Laurent expansion theorem for a function analytic on an annulus | `deferred` | **stands** | `isolated-singularities-and-laurent-series` — P14 |
| 8 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.3, contour formula and radius independence for Laurent coefficients | `deferred` | **stands** | `isolated-singularities-and-laurent-series` — P14 |
| 9 | `analyticity-liouville-and-morera` | Chapter 5, Section 1.3, the coefficient of degree minus one as the residue at an isolated singularity | `deferred` | **stands** | `isolated-singularities-and-laurent-series` — P14 |
| 10 | `analyticity-liouville-and-morera` | Section 4, Corollary 4.7: a degree-n complex polynomial factors into n linear factors with multiplicity | `deferred` | **stands** | `the-fundamental-theorem-of-algebra` — P1 |
| 11 | `analyticity-liouville-and-morera` | Section 4, Theorem 4.8: zeros accumulating in a region force a holomorphic function to vanish identically | `deferred` | **stands** | `the-identity-theorem-and-the-open-mapping-theorem` — P13 |
| 12 | `analyticity-liouville-and-morera` | Section 4, Corollary 4.9: the identity theorem for two holomorphic functions | `deferred` | **stands** | `the-identity-theorem-and-the-open-mapping-theorem` — P13 |
| 13 | `analyticity-liouville-and-morera` | Section 2.4, Corollary 2.4.3: interior Lipschitz estimate from a larger-circle bound | `deferred` | **stands** | `normal-families-and-montels-theorem` — P16 |
| 14 | `analyticity-liouville-and-morera` | Exercise 2.23: a continuous function holomorphic off a diameter is holomorphic on the whole disc | `deferred` | **stands** | `isolated-singularities-and-laurent-series` — P14 |
| 15 | `analyticity-liouville-and-morera` | Theorem 2.28: the identity theorem from an accumulating agreement set | `deferred` | **stands** | `the-identity-theorem-and-the-open-mapping-theorem` — P13 |
| 16 | `analyticity-liouville-and-morera` | Section 3.1.4, complete linear factorization with roots counted by multiplicity | `deferred` | **stands** | `the-fundamental-theorem-of-algebra` — P1 |

## Open defect-ledger sweep

Parsing `research/defect-ledger.jsonl` now finds 273 rows for `frontier-16` and no row whose disposition is `open`. There was therefore no closing condition to test or in-place ledger closure to make. `research/DEFECT-LEDGER.md` was regenerated by the same append operation that wrote the three step-9 rows.

## Changes and build consequence

- Changed: all seven batch coverage files, only to add or correct decline destinations and the two corrected reasons/statements above.
- Added mathematical items: none.
- Changed page compositions, proofs, Facts blocks, dependencies, contracts, provenance, or judge blocks: none.
- Overturned declines: none. Consequently no Alpha-authored proof, plan splice, contract regeneration, impact audit, or rejudge is owed by this stage.
- Remaining gap: the rows marked `owner-decision` have no writable unbuilt home that this stage can honestly name. They remain explicit in the appendix rather than disappearing as prose-only drops.

## Validation

- `coverage-checklist.mjs --require-destination` over all seven files: 11 A pages and 579 harvested rows, 0 errors. The four low-yield warnings are exactly the IFT, elementary-area, van Kampen, and covering-classification decline sets adjudicated above.
- `defect-ledger.mjs validate --run frontier-16`: 273 rows checked, 0 errors.
- `defect-ledger.mjs check --run frontier-16 --adjudications … --closure …`: 273 rows checked, 0 errors.
- Appendix reconciliation: 148 report rows matched the 148 current coverage rows in order, page id, heading, disposition, and destination.
- Current `frontier-16-judge-closure.json`: 324/324 current pairs complete, no rejudge target, no unadjudicated rejection, no open fatal, `closed: true`.
- `git diff --check`: clean.
