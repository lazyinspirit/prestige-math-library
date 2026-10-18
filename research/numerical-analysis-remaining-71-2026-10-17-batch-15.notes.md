# Batch 15 — Delaunay triangulations and Voronoi computation

Run `numerical-analysis-remaining-71-2026-10-17`; role `beta`; batch 15. The A/B pair is assigned to `numerical-linear-algebra-and-approximation`. I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner direction, the assigned task, the controlling plan and plan spec, the complete design section, the current batch evidence, and the live-run record. The owner direction controls conflicts in stale task/design text.

## Plan and design reconciliation

The assigned page retains both required page edges: `certified-geometric-predicates` and the published `polynomial-interpolation-and-remainder`. The track design says not to use an external interpolation item as a proof premise; the current plan and dispatch still require the published interpolation page at page level. I preserved that page edge as context and proved the degree-one cardinal interpolant locally in `lem-linear-cardinal-interpolant-on-an-edge`. No proof imports the published interpolation theorem or a published Euler-count theorem. The no-mesh-quality and lower-dimensional output boundaries in the design are retained.

## Inventory and dependency levels

The A page has 24 items; the B page has 3 examples. The levels below are computed from in-batch item dependencies only; Batch 7 suppliers do not raise the assigned levels.

| Level | Items |
|---|---|
| 0 | `def-indexed-geometric-site-set`, `lem-complete-ordered-field-is-archimedean`, `lem-linear-cardinal-interpolant-on-an-edge` |
| 1 | `def-lexicographic-lift-tie-break`, `lem-lifted-power-sphere-determinant-identity`, `lem-voronoi-vertex-empty-circle` |
| 2 | `def-planar-delaunay-voronoi-structures`, `def-three-dimensional-delaunay-and-weighted-regular-lower-hull`, `thm-lexicographic-lift-tie-break-consistent` |
| 3 | `def-barycentric-point-location-interpolation-and-voronoi-query`, `lem-euler-count-for-planar-triangulation`, `lem-large-delaunay-supertriangle-exists`, `lem-lifted-flip-potential-decreases`, `lem-lower-lifted-facets-cover-the-convex-hull` |
| 4 | `lem-simplicial-four-polytope-facet-count`, `thm-barycentric-interpolation-and-nearest-neighbor-query-correct`, `thm-planar-triangle-and-edge-count` |
| 5 | `alg-incremental-planar-delaunay-edge-flips`, `alg-incremental-three-dimensional-regular-cavity-repair` |
| 6 | `alg-randomized-history-dag-point-location`, `thm-incremental-planar-delaunay-correctness-and-termination`, `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination` |
| 7 | `thm-randomized-history-dag-expected-location-cost`, `thm-three-dimensional-delaunay-output-size-quadratic`, and the three B examples |

The complete per-item `deps` and level labels are in [batch-15.pages.json](numerical-analysis-remaining-71-2026-10-17-batch-15.pages.json). The scoped checker over batches 7 and 15 found 45 items, maximum level 7, and zero errors. The A page remains below the 100-item cap.

## Cross-batch prerequisites and readiness

The page edge to `certified-geometric-predicates` (Batch 7) remains `open`. The unresolved supplier IDs are `def-certified-geometric-predicate-determinants`, `alg-exact-dyadic-determinant-sign`, `alg-certified-dyadic-geometric-predicate`, and `thm-certified-dyadic-geometric-predicate-sound-and-terminates`. Their current bodies and proof arguments were inspected. The run-status snapshot at 2026-10-17T12:13Z showed the Batch 7 dispatch `endedAt:null`; this record makes no later completion claim and infers no acceptance or readiness. The exact required interfaces, item consumers, and affected claims are recorded in [batch-15.cross-batch-dependencies.json](numerical-analysis-remaining-71-2026-10-17-batch-15.cross-batch-dependencies.json).

The unresolved hypotheses are the determinant row/column conventions in dimensions two and three; exact-zero preservation and explicit `degenerate-base` handling; sound terminating exact dyadic fallback (including any certified floating filter); and a fixed-universe formal tie rule kept separate from raw predicates. Affected claims include exact planar location and flips, lexicographic determinant coherence, planar termination and empty-circle output, and 3D weighted lower-hull enumeration, coverage, hidden-site classification, and output size.

The four item-level closures with no unresolved Batch 7 supplier were recorded `ready`: `def-indexed-geometric-site-set`, `lem-complete-ordered-field-is-archimedean`, `lem-linear-cardinal-interpolant-on-an-edge`, and `lem-voronoi-vertex-empty-circle`. The other 23 assigned items were recorded `escalated`; their records name the examined transitive dependency closure and the exact unresolved supplier IDs. No `--owner` decision was used. The published interpolation page edge is recorded as `verified` context only; its theorem is not an item-level proof premise.

## Sources and coverage

The A page uses five full-text treatments: de Berg et al., *Computational Geometry*, Chapter 9; Mount, full course notes, Lectures 11–13; Sheehy, the complete eight-page weighted-Delaunay lecture; the cited CGAL manual sections; and TBB, *Elementary Real Analysis*, §1.7. The B page uses de Berg et al. and CGAL. Exact locators, supported items, result dispositions, reading evidence, fetch stamps, and hashes are recorded in [batch-15.coverage.json](numerical-analysis-remaining-71-2026-10-17-batch-15.coverage.json). `source-fetch-check --stamp` verified all 7 source records; it added the stamp for the TBB textbook.

One preliminary Kazdan/UPenn candidate PDF returned HTTP 403. Search found the full TBB textbook; I read its complete supremum proof for Theorem 1.11 and used it as an ordinary source for the locally proved ordered-field generalization. The attempt, searches, and per-item alternative arguments/dependencies are preserved in the coverage file's root `source_resolution` record. The failed candidate was not part of the harvested source set; no source was dropped or left unresolved.

The coverage file records 45 A-page results (40 `inline`, 5 `out-of-scope`) and 4 B-page results (`inline`). No result is marked `included`, so `coverage-checklist` reports its one `coverage-low-yield` warning: `0/45 harvested results scaffolded; confirm the declines with Alpha`. All listed results have an item mapping or a specific scope reason; the inline dispositions still need Alpha's coverage confirmation.

The 19 proof-bearing items have current derivation steps, exact fact-source excerpts, input tags, boundary worksheets, and item-specific finite-check dispositions in [batch-15.proof-contracts.json](numerical-analysis-remaining-71-2026-10-17-batch-15.proof-contracts.json). The finite Delaunay examples are computed directly in their proofs; the finite-smoke registry has no Delaunay-specific selector, so no synthetic selector was added. The planar A page includes a TikZ Voronoi–Delaunay diagram with exact coordinates and an explanation; no proof depends on it.

## Scoped checks

- `proof-layout`: 27 items, 78 steps, 0 defects.
- `precheck`: 19 proof-bearing items checked, 0 failures; definitions and algorithms without phase proofs are not applicable.
- `proof-contract --strict`: 19/19 contracts, 0 errors, 0 warnings.
- `rendercheck`: 29 assigned item/page files, no errors.
- `depcheck`: 27 selected items; prerequisite closure checks cover 59 items and 76 pages, pass.
- `manifest-deps`: 27 items, 0 missing dependency arrays, 0 errors.
- `content-policy`: 27 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 49 harvested results, 0 errors, 1 low-yield warning described above.
- `source-fetch-check --stamp`: 7/7 records fetch-verified, 0 drops.
- `item-dependency-levels`, scoped to batches 7 and 15: 45 items, max level 7, 0 errors.

The run-wide `item-dependency-levels check --run numerical-analysis-remaining-71-2026-10-17` still reports 21 unrelated level-label mismatches in other Numerical Analysis items. The mismatches are: `def-na-evolutionary-skew-convective-form` (0 vs 2), `lem-na-evolutionary-skew-convective-form-bound` (0 vs 3), `def-na-evolutionary-incompressible-ns-weak-solution` (0 vs 3), `lem-na-evolutionary-ns-weak-form-is-well-defined` (0 vs 4), `def-na-solenoidal-energy-weak-ns-velocity` (0 vs 4), `def-na-mini-navier-stokes-backward-euler-scheme` (0 vs 4), `lem-na-mini-be-scheme-is-well-defined` (0 vs 5), `lem-na-mini-fortin-l2-approximation` (0 vs 8), `thm-na-mini-be-step-existence-energy` (0 vs 8), `lem-na-mini-weak-solenoidal-compactness` (0 vs 9), `lem-na-continuous-pressure-recovery-from-solenoidal-residual` (0 vs 6), `thm-na-mini-navier-stokes-be-subsequential-limit` (0 vs 10), `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d` (0 vs 4), `thm-na-mini-solenoidal-stokes-projection-error` (0 vs 9), `thm-na-mini-be-smooth-velocity-error` (0 vs 10), `rem-na-pe06-pressure-recovery-escalation` (0 vs 11), `ex-na-periodic-taylor-green-vortex` (0 vs 3), `ex-na-mini-backward-euler-energy-budget` (0 vs 9), `ex-na-zero-mean-pressure-gauge` (0 vs 4), `ex-na-unit-square-mini-mesh-family` (0 vs 8), and `ex-na-conditional-three-dimensional-flow-computation` (0 vs 10). These are outside Batch 15 and were left untouched. The Batch 7/15 scoped check passes.

`step1-decisions record` wrote all 27 assigned records: four `ready` and 23 `escalated`. The run-wide `step1-decisions check` remains open across 1,391 items because other batches still have escalations and missing records; Batch 15's remaining open items are the 23 supplier escalations above.
