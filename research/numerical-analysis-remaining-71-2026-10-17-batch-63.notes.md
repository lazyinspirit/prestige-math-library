# Batch 63 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `curved-mesh-geometry-and-conservative-mesh-transfer`  
Role: beta; scope: the assigned A/B pair only.

## Controlling instructions and plan reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold brief, the generated batch assignment, the complete PE17 design section in `research/plan-numerical-spatial-track.md`, the corresponding `research/plan-spec.json` entry, current batch evidence, and `research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md`. The owner direction has no PE17-specific scope override; its global single-frontier and no-acceptance rules apply.

The older PE17 prose names interfaces NA-28, NA-30, NA-35, GEO-PRED, and GEO-DEL. The current `plan-spec.json` and assigned manifest instead require `adaptive-finite-element-methods` and `delaunay-triangulations-and-voronoi-computation`. In this run, the old NA-28/NA-30 names do not identify the current finite-element and variational-crime pages; those canonical prerequisites are already published. I followed the current manifest and recorded the label/interface drift here; no shared plan or engine file was changed.

The authored scope preserves the design's exact isoparametric-map admissibility and metric defects; a concrete planar Delaunay-seeded, uniform newest-vertex-bisection family with explicit hypotheses; exact intersection-volume transfer and separate approximation/geometry errors; exact rational convex-polygon clipping; and the warning that a 3D Delaunay condition alone supplies no shape-quality guarantee. Curved intersections outside the certified rational polygon case remain `unresolved`. The refinement theorem makes no AFEM adaptive-complexity claim.

## Inventory, dependencies, and levels

The pair contains 18 A items and 5 B items. Levels count in-run supplier items, including earlier batches; published suppliers do not raise a level. The table lists direct batch-63 item dependencies. Direct batch-7, batch-15, and batch-54 rows, with exact hypotheses and claims, are recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-63.cross-batch-dependencies.json`.

| Level | Item | Direct batch-63 item suppliers |
|---:|---|---|
| 0 | `def-intersection-volume-conservative-remapping` | — |
| 0 | `def-isoparametric-curved-cell-map` | — |
| 0 | `lem-h2-zero-boundary-p1-interpolant-conforming` | — |
| 1 | `def-curved-domain-geometry-approximation` | `def-isoparametric-curved-cell-map` |
| 1 | `lem-curved-p1-interpolation-scaling` | `def-isoparametric-curved-cell-map` |
| 1 | `lem-isoparametric-pullback-and-surface-metric` | `def-isoparametric-curved-cell-map` |
| 1 | `thm-overlap-remap-l2-projection-conservation-positivity` | `def-intersection-volume-conservative-remapping` |
| 2 | `lem-curved-boundary-lift-residual` | `def-curved-domain-geometry-approximation` |
| 2 | `lem-isoparametric-cofactor-normal-perturbation` | `def-isoparametric-curved-cell-map`, `def-curved-domain-geometry-approximation` |
| 2 | `lem-isoparametric-laplace-tensor-defect` | `def-curved-domain-geometry-approximation`, `lem-isoparametric-pullback-and-surface-metric` |
| 2 | `lem-parabolic-domain-map-approximation` | `def-curved-domain-geometry-approximation` |
| 2 | `thm-overlap-remap-error-from-approximation-and-geometry` | `def-intersection-volume-conservative-remapping`, `thm-overlap-remap-l2-projection-conservation-positivity`, `def-curved-domain-geometry-approximation` |
| 3 | `lem-curved-nvb-closure-preserves-matching-traces` | `def-isoparametric-curved-cell-map` |
| 3 | `thm-curved-isoparametric-strang-error-bound` | `def-curved-domain-geometry-approximation`, `lem-curved-p1-interpolation-scaling`, `lem-h2-zero-boundary-p1-interpolant-conforming`, `lem-parabolic-domain-map-approximation`, `lem-isoparametric-pullback-and-surface-metric`, `lem-isoparametric-laplace-tensor-defect`, `lem-curved-boundary-lift-residual` |
| 5 | `alg-certified-convex-polygon-overlap` | `def-intersection-volume-conservative-remapping` |
| 6 | `thm-certified-polygon-overlap-correctness` | `alg-certified-convex-polygon-overlap`, `def-intersection-volume-conservative-remapping` |
| 7 | `alg-delaunay-seeded-curved-uniform-nvb-refinement` | `def-isoparametric-curved-cell-map`, `def-curved-domain-geometry-approximation`, `lem-curved-nvb-closure-preserves-matching-traces` |
| 8 | `thm-curved-uniform-nvb-quality-and-termination` | `alg-delaunay-seeded-curved-uniform-nvb-refinement`, `lem-curved-nvb-closure-preserves-matching-traces`, `def-isoparametric-curved-cell-map`, `def-curved-domain-geometry-approximation` |
| 1 | `ex-inverted-isoparametric-map-detection` | `def-isoparametric-curved-cell-map` |
| 2 | `ex-conservative-transfer-between-moving-curved-meshes` | `def-curved-domain-geometry-approximation`, `def-intersection-volume-conservative-remapping`, `thm-overlap-remap-l2-projection-conservation-positivity` |
| 2 | `ex-isoparametric-unit-disk-mesh` | `def-isoparametric-curved-cell-map`, `lem-isoparametric-pullback-and-surface-metric` |
| 3 | `cex-delaunay-tetrahedral-sliver` | — |
| 3 | `ex-parabolic-curved-domain-linear-geometry-approximation` | `def-curved-domain-geometry-approximation`, `lem-parabolic-domain-map-approximation`, `lem-isoparametric-laplace-tensor-defect` |

The assigned batch-level scheduling input says level 2 with page prerequisites batches 15 and 54. Item-level dependency inspection also found the batch-7 certified predicate, which sets the polygon algorithm at level 5. The shared batch-dependency artifact is now stale and remains for owner/engine recomputation; it was not edited. The current manifest and item-level checker give maximum level 8.

## Mathematical authoring and boundaries

The local zero-boundary P1 result `lem-h2-zero-boundary-p1-interpolant-conforming` supplies a missing conformity step in the Strang proof. It constructs compatible cell representatives for the stated square mesh, proves zero boundary edge values from the global (H^1_0) zero extension and two-sided trace agreement, and then invokes the zero-boundary piecewise-polynomial result. AC and Countable Choice are declared separately where used. The Strang carrier now states its actual discrete space, boundedness/coercivity hypotheses, bulk form defect, and boundary-lifting load residual explicitly; it uses this lemma before testing with the nodal interpolant.

The A page includes a TikZ commutative square for a reference facet chart, its restriction under the admissible cell map, and inclusion of the physical facet in the curved cell. The notation and both path compositions are stated beside the drawing; no proof relies on it.

The boundary-lift area estimate gives an explicit measurable-box cover and volume bound. The parabolic (O(h)) rate is proved in the Strang item, rather than silently added as a premise to the lift lemma. The map and remap proofs preserve positive-Jacobian certificates, exact measure weights, source/target conservation, positivity, and separate geometry errors. The polygon algorithm propagates exact degeneracies and returns unresolved outside its exact rational polygon input. The mesh-quality claim is limited to the proved square family and fixed uniform NVB cycles. The tetrahedral example proves only poor Delaunay shape can occur; it is not a refinement-quality theorem.

## Upstream interfaces and current readiness

I inspected the exact AFEM labelled-family, marking/closure, conformity, and three-generation shape carriers; the current planar Delaunay definitions, incremental algorithm and termination proof; the exact dyadic predicate definition, algorithm and soundness/termination proof; and the 3D lower-hull definition plus its stated determinant/tie interfaces. The cross-batch evidence records the exact required hypotheses and the consumers for each interface.

Current Step-1 records for all supplier IDs in the cross-batch evidence are hash-current and closed, including the owner-resolved batch-15 records. The latest recomputed live run status lists batches 41, 60, 63, and 69 as outstanding; batches 7, 15, and 54 are no longer listed. The ledger now covers all 19 direct cross-batch item edges and both declared page prerequisites: 21 rows are `verified`. The five formerly escalated items have included coverage. This is Step-1 authoring readiness only: independent mathematical reviews and native gates remain due. No other pair's files or records were edited.

## Sources and retrieval history

The source locators, supported items, dispositions, retrieval attempts, and stamps are in `research/numerical-analysis-remaining-71-2026-10-17-batch-63.source-coverage.json` and `.source-evidence.json`. Eight unique full-text sources support the pair; the 13 source/page occurrences all have fetch stamps. The complete relevant source portions were inspected before stamping.

| Source | Read locator | Retrieved length |
|---|---|---:|
| [Guermond, MATH 661 (2023), Chapter 8](https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf) | §§8.1–8.4, geometric maps, positive Jacobians, matching curved cells, boundary meshes | 12 pp. |
| [Guermond, MATH 661 (2025), Chapter 11](https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf) | §§11.2, 11.4, affine scaling, Bramble–Hilbert, local interpolation | 14 pp. |
| [Guermond, MATH 661 (2025), Chapter 27](https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf) | §§27.1–27.2, variational crimes and first-Strang route | 14 pp. |
| [Schöberl, Numerical Methods for Partial Differential Equations](https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf) | §4.2, printed pp. 56–57, interpolation and Bramble–Hilbert | 194 pp. |
| [Dziuk–Elliott, Finite element methods for surface PDEs](https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf) | §§2.1–2.2 and 4.1–4.5 | 110 pp. |
| [Shewchuk, Delaunay Refinement Mesh Generation](https://people.eecs.berkeley.edu/~jrs/meshpapers/delnotes99.pdf) | §2.1.1, §§3.4.1–3.4.3, §3.5.2, §4.4 | 119 pp. |
| [Powell–Abel, An exact general remeshing scheme applied to physically conservative voxelization](https://arxiv.org/pdf/1412.4941) | §§3.2–3.3 and 4.4 | 29 pp. |
| [Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection](https://www.global-sci.com/api/galley-access/10806/download?returnTo=%2Fcicp%2Farticle%2Fview%2F5434%23full-text) | §§2–3, equations (3.5), (3.14)–(3.16), §5 | 15 pp. |

Zhang is one-dimensional and is contextual only for projection/mass-conservation background; no 2D clipping claim depends on it. Its prior metadata and direct-download failures, publisher recovery attempts, full-text retrieval and final fetch stamp are retained in `source_resolution_history`; no timestamps or searches were reconstructed. The optional Blanchard–Loubère candidate mentioned in an earlier draft is not active or cited. The inherited handoff retains incomplete URL/time mapping for its failures; no item depends on that candidate, and the earlier notes assertion that it had been read was corrected. Powell–Abel is the active exact-clipping cross-check. Shewchuk's guarantees are not imported without his angle/feature hypotheses.

## Scoped checks and run-wide blockers

Final scoped checks were run after the last carrier, manifest, coverage, contract, and source-evidence edits:

- `precheck`: 18 proof-bearing items checked, 0 failures.
- `proof-layout`: 23 items, 62 steps, 0 defects.
- `rendercheck`: 25 files (23 items and 2 pages), pass.
- `depcheck`: 23 items; selected prerequisite closure 1,390 items and 238 pages, pass.
- `fwdcheck`: 23 items; selected forward/dependency closure 1,335 items and 246 pages, pass.
- `citecheck`: 23 items, 0 warnings; `extcheck`: 23 items, 0 errors or warnings.
- `content-policy`: 23 items, 0 errors or warnings; `manifest-deps`: 23 items, 0 normalized and 0 errors.
- `proof-contract.mjs --strict`: 23/23 entries, 0 errors or warnings.
- Source `coverage-checklist`: 2 pages, 33 harvested results, 0 errors or warnings. The checker pairs source coverage with a sibling `.pages.json`, so I ran it on a temporary `/tmp/batch63-source-harvest.{coverage,pages}.json` mirror of the current batch evidence; repository files remain the named batch-63 evidence files.
- `source-fetch-check --stamp`: 13/13 source entries fetch-verified, 13/13 resolved, 0 newly stamped.
- Evidence consistency: 23/23 manifest items match coverage and strict-contract inventories; all 19 direct cross-batch item edges and 2 declared page prerequisites have ledger rows, and all 10 unique direct external supplier records are hash-current and closed.
- Run-wide `audit-manifest` over all 71 batch manifests: 1,421 items, 6,731 relationships, 0 defects. An initial single-manifest invocation was not used for reconciliation because it omits other in-run batch manifests; the full-run invocation passes.
- `item-dependency-levels check --run`: 1,421 items across 142 pages, pass; maximum level 12.
- The 23 Step-1 records were individually rechecked through `step1Decision`: 23/23 closed and hash-current. All were recorded `ready` without `--owner`, in ascending item level. Their reasons include the inspected supplier evidence, placement, strict contract, scoped checks, and the fact that independent approval remains due.

Two run-wide checks remain outside this pair's repair authority. `batch-dependency-levels check --run` reports that the shared batch dependency schedule is stale after the batch-7 predicate item edge; owner/engine recomputation is required, and I did not edit that artifact. `proof-contract-coverage` cannot load the full frontier because batch 48 contains item ID `lem-continuous-kernel-integral-operator-is-compact-on-C`, whose uppercase `C` violates the current frontier item-ID pattern. I did not edit batch 48. The local 23/23 strict contract check passes independently.

An `audit-manifest` run limited to batch 63 alone also labels cross-batch targets unresolved because that invocation lacks the other 70 manifests; the correctly scoped full-run audit above passes. The latest recomputed live status remains at `1-scaffold`, 67/71 batches covered, with 41, 60, 63, and 69 still listed as missing and native refresh pending for 41, 60, and 69. This pair's files and local readiness records are complete, but the engine has not credited batch 63 yet. The existing owner blocker remains; I did not edit engine state or advance the run. Later reviews and gates remain due.
