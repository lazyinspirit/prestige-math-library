# Batch 19 authoring notes — fast multipole expansions and error

Run `numerical-analysis-remaining-71-2026-10-17`; role beta; page pair `fast-multipole-expansions-and-error` / `fast-multipole-expansions-and-error-examples`. This is an author readiness record for Step 1, not independent mathematical approval or publication.

## Controlling instructions and plan reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task and dispatch, the complete design section at `research/plan-numerical-linear-track.md` L1858–1905, `research/plan-spec.json`, the owner direction, batch evidence, and `research/numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json` before constructing carriers. The owner direction controls over stale task/design wording. The design and `plan-spec.json` agree: no plan conflict was found.

The design's full scope is represented: a finite 2D logarithmic Laplace FMM with P2M/M2M/M2L/L2L/L2P, exact near work and collision status; separate potential and complex-derivative tails; global bounds; a work result conditional on explicit tree/traversal/list counts; and a distinct 3D spherical-harmonic addition theorem, single-cluster truncation and work result. The examples cover two separated clusters, a near/far split, and depth-sensitive clustered work. The schematic on the A page is explained, while its identities and estimates are proved algebraically.

The scheduled batch level is 2, with batch 16 as its prerequisite; scheduling input SHA-256: `85f340a3bd2a14103f70ecdec186724f717730606d032ab67f121c6e512b1319`. The page requirements are `hierarchical-low-rank-matrices-and-error-propagation` and `computed-fast-transforms-and-convolution`. Their current bodies were checked and recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-19.cross-batch-dependencies.json`. The HLR items reviewed were `def-hlr-cluster-trees-and-geometric-admissibility`, `lem-hlr-balanced-cluster-tree-size-and-depth`, `lem-hlr-block-cluster-leaves-partition-index-pairs`, and `def-h2-nested-cluster-bases-and-interaction-lists`; their binary cardinality tree and block lists do not replace this pair's spatial-quadtree definitions and proof. The FFT page is present, but no transform or convolution result is used as a logical premise. Both are page-level interface checks, not acceptance. No supplier item ID remains unresolved.

## Inventory, dependencies and item levels

Dependency levels were recomputed from the 13-item batch manifest with `dependencyLevels`; all labels agree and there are no cycles or errors. In-run item dependencies and levels are:

| Level | Item | Item dependencies |
|---:|---|---|
| 0 | `def-finite-planar-quadtree-fmm-pair-lists` | none |
| 0 | `def-three-dimensional-spherical-harmonic-space` | none |
| 1 | `alg-planar-laplace-fmm-fixed-order` | `def-finite-planar-quadtree-fmm-pair-lists` |
| 1 | `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs` | `def-finite-planar-quadtree-fmm-pair-lists` |
| 1 | `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` | `def-three-dimensional-spherical-harmonic-space` |
| 2 | `lem-planar-fmm-multipole-local-translation-identities` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order` |
| 2 | `thm-planar-fmm-operation-count-under-linear-list-assumptions` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order`, `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs` |
| 2 | `alg-three-dimensional-laplace-cluster-expansion` | `def-three-dimensional-spherical-harmonic-space`, `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` |
| 3 | `thm-planar-fmm-global-potential-force-error` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order`, `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs`, `lem-planar-fmm-multipole-local-translation-identities` |
| 3 | `thm-three-dimensional-laplace-expansion-error-and-work` | `def-three-dimensional-spherical-harmonic-space`, `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem`, `alg-three-dimensional-laplace-cluster-expansion` |
| 3 | `ex-fmm-clustered-points-require-depth-sensitive-work` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order`, `thm-planar-fmm-operation-count-under-linear-list-assumptions` |
| 4 | `ex-fmm-two-separated-charge-clusters` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order`, `thm-planar-fmm-global-potential-force-error` |
| 4 | `ex-fmm-near-far-potential-and-force-error` | `def-finite-planar-quadtree-fmm-pair-lists`, `alg-planar-laplace-fmm-fixed-order`, `thm-planar-fmm-global-potential-force-error` |

All 10 A items and 3 B examples are placed in the assigned pages, below the 100-item page cap. Supplier items were authored before consumers by level. The B manifest order follows authoring level; the companion page's display order follows the design's example sequence.

## Source reading and disposition

The coverage evidence is in `research/numerical-analysis-remaining-71-2026-10-17-batch-19.coverage.json`. Three independent full-text treatments support 14 harvested results. Complete source bodies were inspected; the selected URLs passed `source-fetch-check --stamp` (3/3 verified, 3 newly stamped), and the final fetch check resolved all 3/3.

| Source and full-text locator | Harvested result → disposition → supported item |
|---|---|
| [Greengard–Rokhlin (1987)](https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf), complete 24-page reprint; §2, §§2.1–2.2 and §3, printed pp.327–339 (PDF pp.3–15) | Complex-log potential/force derivative, Lemma 2.1, p.327 → inline → `alg-planar-laplace-fmm-fixed-order` |
| Same | Multipole expansion and truncation, Lemma 2.2/Theorem 2.1, pp.328–330 → included → `thm-planar-fmm-global-potential-force-error` |
| Same | Center shifts, M2L and local shifts, Lemmas 2.3–2.5, pp.330–334 → included → `lem-planar-fmm-multipole-local-translation-identities` |
| Same | Quadtree passes, interaction lists, near field, §3 pp.334–338 → included → `alg-planar-laplace-fmm-fixed-order` |
| Same | Tree/list/direct-neighbor counts, §3 pp.338–339 → included → `thm-planar-fmm-operation-count-under-linear-list-assumptions` |
| [O’Neil (2017)](https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf), complete 57-page notes; Chapter 2 §2.1 and Chapter 4 §§4.1.2–4.2 (PDF pp.7–9, 24–33) | 2D logarithmic Green function, Chapter 2 §2.1 pp.7–9 → inline → `def-finite-planar-quadtree-fmm-pair-lists` |
| Same | Spherical-harmonic point-source addition formula, equation 4.18, Chapter 4 §4.1.2 pp.26–28 → included → `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` |
| Same | Solid-harmonic differential identity and M2M theorem, Chapter 4 §4.1.2 pp.27–30 → included → `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` |
| Same | High-order 3D tree code and coefficient count, Chapter 4 §4.1.2 pp.24–31 → included → `alg-three-dimensional-laplace-cluster-expansion` |
| Same | 3D passes and translation-cost alternatives, Chapter 4 §4.2 pp.31–33 → included → `thm-three-dimensional-laplace-expansion-error-and-work` |
| [Demmel, CS267 Lecture 25](https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html), complete notes, relevant HTML lines 34–706 | Complex log and outer multipole expansion, “Potentials and Forces” / “Multipole expansion” → included → `lem-planar-fmm-multipole-local-translation-identities` |
| Same | Outer shift, inner shift, outer-to-inner conversion, “Inner expansions…” → included → `lem-planar-fmm-multipole-local-translation-identities` |
| Same | Quadtree passes and exact near work, “The Fast Multipole Method,” steps 1–4 → included → `alg-planar-laplace-fmm-fixed-order` |
| Same | Bounded lists and linear node count, “Complexity…” → included → `thm-planar-fmm-operation-count-under-linear-list-assumptions` |

No retrieval failed, so no `source_resolution` record was needed. No source result was dropped. The coverage file records each result's full locator, reading evidence, cached text hash, retrieval history and disposition.

## Example finite calculations

Both separated-cluster examples use the same threshold-2 root tree. The recursive path for the target's nonzero far sources is `(P,Q) -> (C,Q) -> (C,D)`. Exact squared distances establish nonseparation at the two parent stages and strict separation at `(C,D)`. For the order-one examples, the finite checks confirm `M0=2`, `M1=0`, far derivative `1`, exact far derivative `64/63`, derivative error `1/63`, and `rho=sqrt(2)/2`; the potential error is `log(64/63)<1/63`, justified in the proof by integrating `1/(1+t)<1`. In the near/far example, the charge-3 target difference is `1/10`, giving exact near values `3 log(1/10)` and `30`. Zero-charge helper labels affect occupancy only and contribute zero. Exact rational geometry and derivative calculations passed the recorded finite smoke checks in the proof-contract file.

An initial ad-hoc assertion compared binary floating-point `64/63 - 1` with `1/63` using strict equality and failed from representation roundoff. It was replaced by exact rational arithmetic; the final finite smoke passed. This was a check-harness issue, not a mathematical discrepancy.

## Scoped checks and remaining run-level issue

| Check | Result |
|---|---|
| Batch-19 `dependencyLevels` | 13 items, computed labels match manifest, 0 errors/cycles. |
| `precheck.mts` | 13 files; 9 proof-bearing items checked, 0 failures; 4 definitions/algorithms not applicable. |
| `proof-layout.mjs` | 13 items, 40 numbered steps, 0 defects. |
| `proof-contract.mjs --strict` | 13/13 items; 0 errors, 0 warnings. |
| `citation-fidelity.mjs --fail-on-missing-quote` | 23 citations; 0 missing quotes and 0 widening candidates. |
| `coverage-checklist.mjs` | 1 page, 14 harvested results; 0 errors/warnings. |
| `content-policy.mjs` | 13 scoped items; 0 errors/warnings. |
| Focused `depcheck` | 13 requested items, 13-item dependency closure, 2 pages; 0 errors/warnings. |
| `source-fetch-check.mjs` | 3/3 sources fetch-verified and resolved. |
| `rendercheck.mjs` | 15 files (13 items and 2 pages); 0 errors/warnings. |
| `step1-decisions.mjs record` | All 13 items recorded `ready` with their exact item dependency IDs and `owner: false`. |

The run-wide `proof-contract-coverage.mjs` aggregation was also attempted. It stops on the unrelated empty inventory `invariant-domain-and-entropy-stable-conservative-schemes` before evaluating batch 19. The strict batch-19 contract check above passes. This out-of-assignment run-level condition remains for owner reconciliation; no other batch or shared plan was edited.

The readiness records mean the assigned authoring and evidence are complete. They do not certify independent approval, acceptance, or publication.
