# Batch 54 authoring notes — adaptive finite-element methods

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `54` (`beta`), scheduling-input SHA-256 `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`  
Pair: `adaptive-finite-element-methods` / `adaptive-finite-element-methods-examples`  
Pages: A order 2662 and B order 2663 in `numerical-pdes-and-spatial-discretization`.

## Authority and design reconciliation

The current owner direction authorizes building necessary prerequisites in the single 71-pair frontier and requires authors to continue against declared interfaces without claiming absent supplier proofs or acceptance. No absent cross-pair supplier blocked this pair.

`research/plan-spec.json` controls the page registry contract: page IDs, kinds, category, order, and `requires`. It specifies `variational-crimes-and-strang-lemmas` for A and `adaptive-finite-element-methods` for B. The A prerequisite page exists and is published. The detailed NA-35 mathematical scope and proof route in `research/plan-numerical-analysis-track.md` §NA-35 (around L506) controls content. It limits optimal complexity to P1 Laplace with P0 initial data and the stated approximation class; it also requires reliability, efficiency, estimator reduction, quasi-orthogonality, mesh closure, and the fine-initial-mesh condition for constant convection. The companion spatial-plan section (§NA-35, around L1352) agrees on those claims and examples.

The spatial plan describes NA-28 through NA-30 as same-frontier prerequisite interfaces. That scheduling language is stale for this authoring run: the corresponding mesh/interpolation, Céa/Aubin–Nitsche, and variational-crimes pages are present and published. Their actual item suppliers are included explicitly in each consumer's `deps`; scoped `depcheck` resolved them. The structured page contract requires only the Strang page. The theorem's Strang result is not used as a substitute for the locally proved AFEM estimates. The plan-spec NA-35 amendment also requires compatible 2D newest-vertex-bisection initial labels and dimension, actual closure/shape-regularity/counting properties, and no inference of 3D complexity; these restrictions are reflected in the A-page statements and proofs. The compressed registry description does not enlarge the mathematical claims in the detailed design.

## Inventory, dependencies, and levels

The pair contains 20 A-page items and 4 B-page examples. The manifest `research/numerical-analysis-remaining-71-2026-10-17-batch-54.pages.json` records the exact full direct dependency array for every item, including all out-of-batch supplier IDs. The table below records every in-batch edge and the computed level; external suppliers do not raise an item's in-run level.

| Level | Item | In-batch suppliers |
|---:|---|---|
| 0 | `cor-afem-constant-convection-weak-wellposedness` | — |
| 0 | `def-afem-local-moment-interpolant` | — |
| 0 | `def-afem-nvb-labelled-triangulation-family` | — |
| 0 | `def-afem-p1-residual-estimator-and-data-oscillation` | — |
| 0 | `lem-afem-vertex-patch-poincare` | — |
| 1 | `alg-dorfler-marking-and-conforming-nvb-refinement` | `def-afem-p1-residual-estimator-and-data-oscillation`; `def-afem-nvb-labelled-triangulation-family` |
| 1 | `def-afem-p1-approximation-class` | `def-afem-nvb-labelled-triangulation-family`; `def-afem-p1-residual-estimator-and-data-oscillation` |
| 1 | `lem-afem-convection-quasi-orthogonality-under-fine-mesh` | `def-afem-p1-residual-estimator-and-data-oscillation`; `def-afem-nvb-labelled-triangulation-family` |
| 1 | `lem-afem-nvb-shape-regularity-and-three-generation-properties` | `def-afem-nvb-labelled-triangulation-family` |
| 1 | `lem-afem-p1-residual-representation` | `def-afem-p1-residual-estimator-and-data-oscillation` |
| 1 | `thm-afem-local-moment-interpolation-estimates` | `def-afem-local-moment-interpolant`; `lem-afem-vertex-patch-poincare` |
| 1 | `ex-afem-coefficient-jump-adds-flux-oscillation` | `def-afem-p1-residual-estimator-and-data-oscillation` |
| 2 | `lem-afem-common-refinement-overlay-and-cardinality` | `def-afem-nvb-labelled-triangulation-family`; `lem-afem-nvb-shape-regularity-and-three-generation-properties` |
| 2 | `lem-afem-data-oscillation-reduction-under-marked-refinement` | `def-afem-p1-residual-estimator-and-data-oscillation`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-shape-regularity-and-three-generation-properties` |
| 2 | `lem-afem-localized-galerkin-refinement-estimate` | `def-afem-nvb-labelled-triangulation-family`; `def-afem-p1-residual-estimator-and-data-oscillation`; `lem-afem-p1-residual-representation`; `thm-afem-local-moment-interpolation-estimates` |
| 2 | `lem-afem-nvb-conforming-closure-and-cumulative-counting` | `def-afem-nvb-labelled-triangulation-family`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-shape-regularity-and-three-generation-properties` |
| 2 | `thm-afem-p1-residual-reliability-and-local-efficiency` | `def-afem-p1-residual-estimator-and-data-oscillation`; `def-afem-nvb-labelled-triangulation-family`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-shape-regularity-and-three-generation-properties`; `lem-afem-p1-residual-representation`; `thm-afem-local-moment-interpolation-estimates` |
| 2 | `ex-afem-coarse-convection-mesh-misses-smallness-condition` | `def-afem-nvb-labelled-triangulation-family`; `lem-afem-convection-quasi-orthogonality-under-fine-mesh` |
| 2 | `ex-afem-dorfler-marking-three-cells` | `alg-dorfler-marking-and-conforming-nvb-refinement` |
| 3 | `lem-afem-dorfler-marking-cardinality` | `def-afem-p1-approximation-class`; `def-afem-nvb-labelled-triangulation-family`; `def-afem-p1-residual-estimator-and-data-oscillation`; `thm-afem-p1-residual-reliability-and-local-efficiency`; `lem-afem-common-refinement-overlay-and-cardinality`; `lem-afem-localized-galerkin-refinement-estimate`; `lem-afem-convection-quasi-orthogonality-under-fine-mesh` |
| 3 | `lem-afem-residual-estimator-reduction` | `def-afem-p1-residual-estimator-and-data-oscillation`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-shape-regularity-and-three-generation-properties`; `lem-afem-nvb-conforming-closure-and-cumulative-counting` |
| 3 | `ex-afem-data-oscillation-reduction-under-refinement` | `def-afem-p1-residual-estimator-and-data-oscillation`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-shape-regularity-and-three-generation-properties`; `lem-afem-data-oscillation-reduction-under-marked-refinement` |
| 4 | `thm-afem-error-and-oscillation-contraction` | `def-afem-p1-residual-estimator-and-data-oscillation`; `def-afem-nvb-labelled-triangulation-family`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `cor-afem-constant-convection-weak-wellposedness`; `lem-afem-nvb-shape-regularity-and-three-generation-properties`; `lem-afem-convection-quasi-orthogonality-under-fine-mesh`; `thm-afem-p1-residual-reliability-and-local-efficiency`; `lem-afem-data-oscillation-reduction-under-marked-refinement`; `lem-afem-residual-estimator-reduction` |
| 5 | `thm-afem-p1-poisson-optimal-complexity` | `def-afem-p1-approximation-class`; `def-afem-p1-residual-estimator-and-data-oscillation`; `def-afem-nvb-labelled-triangulation-family`; `alg-dorfler-marking-and-conforming-nvb-refinement`; `lem-afem-nvb-conforming-closure-and-cumulative-counting`; `lem-afem-dorfler-marking-cardinality`; `thm-afem-error-and-oscillation-contraction` |

The graph is acyclic, has no cross-batch item edges, and reaches maximum level 5. The four B items are `ex-afem-coefficient-jump-adds-flux-oscillation`, `ex-afem-coarse-convection-mesh-misses-smallness-condition`, `ex-afem-dorfler-marking-three-cells`, and `ex-afem-data-oscillation-reduction-under-refinement`; the first appears at level 1 and the others at levels 2, 2, and 3 respectively. The B page's page-level prerequisite is the A page.

## Mathematical scope and prerequisite audit

The local model is real-valued P1 finite elements on matching, shape-regular affine triangles in a bounded polygon, with compatible 2D newest-vertex-bisection labels and exact Galerkin solves. It covers the symmetric Laplace problem and a constant-vector divergence-free convection branch. It defines the residual, outward normal conormal-flux jump, P0 data oscillation, deterministic finite Dörfler selection, refinement budget/status, and the finite-prefix tie rule. The estimator and oscillation thresholds are fractions of squared contributions; the square-root convention is stated where compared with norm-parameter formulations.

The proof chain includes local moment interpolation and vertex/cell patch Poincaré bounds, the residual representation, P1 reliability and local efficiency with oscillation, data and estimator reduction, symmetric or sufficiently fine-mesh convection quasi-orthogonality, conforming closure and cumulative counting, contraction, and finally the P1 Laplace/P0-data complexity theorem. The local interpolation proof checks the vertex-patch Poincaré input on the union of vertex stars, not just on individual stars. The Dörfler cardinality proof uses that the number of refined cells is bounded by the added-cell count; it does not assert equality.

Variable diffusion is only a defined interface and a two-triangle coefficient-jump example. The example calculates a nonzero projected flux-oscillation term; no variable-coefficient reliability or complexity theorem is claimed. No 3D NVB geometry or complexity is claimed. The coarse-convection example shows that a stated sufficient smallness condition fails on a selected mesh and explicitly does not infer nonconvergence. The finite examples and NVB TikZ generation diagram state their vertex, edge, refinement, and marking conventions; the proofs do not rely on the drawing.

Direct and transitive suppliers were checked for their actual current statements, hypotheses, conventions, and proofs. This includes the mesh and broken/conforming space interfaces; Poincaré, reference-simplex trace/Gauss–Green, scaling and polynomial inverse bounds; weak Dirichlet/Lax–Milgram existence; and exact Galerkin/Céa orthogonality/solvability. All supplier IDs are in the manifest dependency arrays. In-run suppliers are authored earlier by level. No planned interface is treated as a verified proof or exact excerpt.

Choice assumptions remain explicit and branched. The constant-convection weak well-posedness corollary carries both Axiom of Choice and Countable Choice from the cited Poincaré and Lax–Milgram suppliers. The contraction theorem preserves the separate symmetric Poisson and convection solution branches and the Countable Choice hypothesis used for exact finite-dimensional Galerkin solvability. The P1 optimal-complexity theorem carries the weak Poisson supplier's Axiom of Choice and Countable Choice assumptions. Interpolation and patch results state Countable Choice where inherited from the Sobolev/reference-simplex suppliers. Finite ordering, tie-breaking, marking, and the worked examples use deterministic finite selections; those arguments introduce no hidden choice principle.

## Source reading, harvesting, and disposition

Every coverage entry has full-text retrieval evidence, inspected locators, item support, recovery-attempt history, and a fetch stamp. The A page has six source entries: Nochetto's complete Lecture 1 (11 pages, §1.5, https://www.math.umd.edu/~rhn/lectures/lecture1.pdf), Lecture 2 (16 pages, §§2.1–2.5, https://www.math.umd.edu/~rhn/lectures/lecture2.pdf), Lecture 3 (12 pages, §§3.1–3.3, https://www.math.umd.edu/~rhn/lectures/lecture3.pdf), and Lecture 4 (8 pages, §§4.1–4.3, https://www.math.umd.edu/~rhn/lectures/lecture4.pdf); Cascón–Kreuzer–Nochetto–Siebert (2008), the listed residual/optimality sections and Theorem 4.1 (https://math.umd.edu/~rhn/papers/pdf/optimality.pdf); and Bonito–Canuto–Nochetto–Veeser (2024), §§3.5–3.6 and 8.1.1–8.1.3 with Lemmas 8.1 and 8.4–8.7 (https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf). The four B-page source entries reuse the applicable independent lecture, paper, and survey results for the exact examples. The lecture PDFs were read completely; the relevant proof sections of the paper and survey were inspected in full at the listed locators.

The coverage ledger records 31 harvested results and a disposition for each. Results for the locally proved interpolation, residual, marking, refinement, closure, quasi-orthogonality, contraction, and restricted-complexity claims are included with item destinations; the nonsymmetric continuity caveat and coefficient-jump context are handled inline with local arguments. Lecture 4 §4.4's broader nonzero-oscillation optimality route and general coefficient-dependent complexity beyond the assigned P1/P0 theorem are out of scope, with reasons recorded. No source was dropped, no retrieval failed, and no source-resolution escalation or invented source excerpt was used. `source-fetch-check --coverage ...` verified all 10 coverage source instances (0 documented drops).

## Batch evidence and checks

- `research/numerical-analysis-remaining-71-2026-10-17-batch-54.pages.json`: 24-item inventory, exact direct dependencies, page metadata, and levels.
- `research/numerical-analysis-remaining-71-2026-10-17-batch-54.coverage.json`: 2 page records, six A-page and four B-page source instances, and 31 harvested result dispositions.
- `research/numerical-analysis-remaining-71-2026-10-17-batch-54.cross-batch-dependencies.json`: empty; there are no cross-batch item dependencies.
- `research/numerical-analysis-remaining-71-2026-10-17-batch-54.proof-contracts.json`: contracts for all 24 scoped items, including actual numbered steps, citations/derivations, boundary dispositions, and applicable exact finite checks.
- A/B page carriers: `library/numerical-pdes-and-spatial-discretization/adaptive-finite-element-methods.md` and `library/numerical-pdes-and-spatial-discretization/adaptive-finite-element-methods-examples.md`.
- Step 1 author readiness: all 24 owned records are `ready` and hash-current. These records are not proof acceptance or independent approval.

Final scoped checks passed: dependency levels (24 items, maximum level 5, no errors); selected `depcheck`; `precheck` (19 proof-bearing items, 0 failures); `rendercheck` (26 files); `proof-layout` (24 items, 54 steps, 0 defects); strict proof-contract validation (24/24, 0 errors or warnings); `content-policy` (24 items, 0 errors or warnings); coverage checklist (2 pages, 31 harvested results, 0 errors or warnings); and source fetch verification (10/10).

The run-wide dependency-level check still fails outside this batch: 68 other empty scaffold inventories and 10 stale labels in the Delaunay pair. The stale labels are `alg-incremental-planar-delaunay-edge-flips` (4 vs 5), `alg-incremental-three-dimensional-regular-cavity-repair` (4 vs 5), `alg-randomized-history-dag-point-location` (5 vs 6), `thm-incremental-planar-delaunay-correctness-and-termination` (5 vs 6), `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination` (5 vs 6), `thm-randomized-history-dag-expected-location-cost` (6 vs 7), `thm-three-dimensional-delaunay-output-size-quadratic` (6 vs 7), `ex-cocircular-four-site-lexicographic-tie` (6 vs 7), `ex-collinear-sites-lower-dimensional-output` (6 vs 7), and `ex-scattered-linear-interpolation-over-delaunay-cell` (6 vs 7). No files outside batch 54 were changed to address these run-wide blockers.
