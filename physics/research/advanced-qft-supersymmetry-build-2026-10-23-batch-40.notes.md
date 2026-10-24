# Batch 40 authoring and evidence notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `40`  
Assigned pair: `qftx-finite-symmetry-gauging-physics` / `qftx-finite-symmetry-gauging-physics-examples`  
Status: all five authored items have current Step 1 `ready` records. This is authoring readiness only; no independent proof approval or publication is claimed.

## Scope and plan

The assigned track design at `research/plan-advanced-qft-and-supersymmetry-track.md` § “Finite Symmetry Gauging as a Specified Model” (around L555) and `research/advanced-qft-supersymmetry-build-2026-10-23/plan-spec.json` metadata agree on page IDs, title, order 996, category, library, and page prerequisites. No plan conflict was found. The A page requires `qftx-two-group-symmetry-backgrounds` and `qftx-finite-symmetry-gauging`; the B page requires the A page. The run dependency graph gives batch 40 level 6, with prerequisite batches 14 and 38.

To give a fully specified, directly checkable physical instance without making a general realization claim, the local model takes `G=Z/2`, `A={0}`, the unique action, `beta=0`, zero action, normalized uniform vertex spins, and unit response for every flat background. Relative amplitudes fix background data only; the spin sum is over all vertex configurations, and no boundary spin value is fixed. The local proof carries this convention explicitly. The unit response makes the factorization hypothesis in the mathematical gluing theorem exact. The physical background-coupling theorem from batch 38 is not a direct item dependency: this special model proves phase 1 by its explicit spin-translation bijection and finite reindexing, without assuming that more general conditional result. No nontrivial one-form defect, continuum theory, empirical realization, or anomaly conclusion is asserted.

## Authored inventory, dependencies, and levels

| Item | Placement | Exact claim/use | Direct item dependencies | Level |
|---|---|---|---|---:|
| `def-aqft-finite-two-group-state-sum` | A | Defines the finite C2 vertex-spin regulator, observables, unit per-background weight, background gauge action, and relative background-only convention. | `def-aqft-background-gauging-data`; `def-aqft-two-group-symmetry-realization` | 5 |
| `post-aqft-finite-gauging-model` | A | Adopts the specified finite model and its relative convention. | `def-aqft-finite-two-group-state-sum` | 6 |
| `pthm-aqft-finite-gauging-gluing` | A | Conditional gauge covariance, absolute/relative higher sums, seam gluing, and point value for the adopted model. | `def-aqft-finite-two-group-state-sum`; `post-aqft-finite-gauging-model`; `thm-aqft-finite-two-group-gauging-gluing` | 7 |
| `ex-aqft-finite-two-group-point-normalization` | B | Direct one-vertex count: unit spin partition weight and gauging amplitude `1/2`. | `def-aqft-finite-two-group-state-sum`; `post-aqft-finite-gauging-model`; `pthm-aqft-finite-gauging-gluing` | 8 |
| `ex-aqft-finite-two-group-interval-gluing` | B | Counts each edge, the full two-edge path, and the common point; verifies the seam factor `1/2`. | `def-aqft-finite-two-group-state-sum`; `post-aqft-finite-gauging-model`; `pthm-aqft-finite-gauging-gluing` | 8 |

The levels are one plus the maximum level of actual in-run item suppliers: the two level-4 external suppliers give level 5 for the definition; the local chain then gives levels 6, 7, and 8. The final item-dependency check reported no level error for any batch-40 item.

## Supplier interfaces and readiness

- `def-aqft-background-gauging-data` is current Step 1 ready (hash `c92b2660…`). Its definition and full proof specify raw vertex/edge 1-gauge labels, vertex 2-gauge labels, relative exact restrictions, and the `|pi2|/|pi1|` higher sum. The `A={0}` specialization has only identity 2-gauge labels and satisfies this interface.
- `def-aqft-two-group-symmetry-realization` is current Step 1 ready (hash `350a41d9…`). Its inspected scope is a finite-regulator model-data interface on closed oriented triangulated manifolds, not a continuum or empirical theorem. It supplies the field sets, configuration spaces, action/measure/observables and coherent background-arrow maps used by the explicit specialization. The relative boundary convention is separately introduced locally.
- `thm-aqft-finite-two-group-gauging-gluing` is current Step 1 ready (hash `7cd44323…`). Its finite-group, normalized cocycle, invariant scalar weight, exact relative restriction, ordered-subcomplex decomposition and factorization hypotheses match `A={0}`, `beta=0`, `W=1`, and the stated path decomposition. Its formula reduces to `c(J)=2^{-V_J}`, relative factor `c(K)/c(L)`, and the ordinary reciprocal automorphism order at the point.
- `qftx-finite-symmetry-gauging` supplies the required page-level background and contains the current-ready `def-aqft-background-gauging-data` and gluing theorem. `qftx-two-group-symmetry-backgrounds` supplies the other required page and contains current-ready `def-aqft-two-group-symmetry-realization` and `pthm-aqft-two-group-background-coupling` carriers.
- Owner consumer reconciliation removed the physical coupling theorem’s stale no-readiness status sentence while preserving its full Statement. Read-only native checks immediately before this repair found all24 selected items from batches13/14/38/40 current-ready. The proof-status and mirror/contract repairs now require root currency rebinding; no native receipt was changed. See the owner-resolution batch38-40 consumer report.
- The transitive supplier `def-qftx-finite-groupoid-integration` has no run-local Step 1 record, but it is a published mathematics item with `verification.precheck: pass` and an independent verification receipt dated 2026-10-22. Its complete finite-groupoid definition and finite pushforward proof were read. It is not a missing mathematical argument or a reason to escalate.

The exact cross-batch edges are recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40.cross-batch-dependencies.json`: two required page edges and three direct item edges, all `verified` after matching the live supplier statements and current readiness. This records only the scoped interface checks, not independent proof approval.

## Sources and retrieval

The complete relevant passages were inspected. Per-item inclusions, contextual uses, limitations, searches and retrieval attempts are in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40-source-coverage.json` and `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40.source-resolution.json`.

- Gregory W. Moore and Vivek Saxena, *TASI Lectures on Topological Field Theories and Differential Cohomology*, [arXiv:2510.07408](https://arxiv.org/pdf/2510.07408), §23.3, PDF pp. 96–99 (printed pp. 95–98), especially (23.27), (23.34)–(23.38). The full finite-state-space, homotopy-cardinality and sewing-context discussion was reread. It explicitly leaves higher-group field formulas to the reader; those exact finite cochain formulas and the proof used here are local. The initial web PDF opener rejected the 42.8 MB response; direct full-PDF retrieval succeeded and the fetch stamp matches the inspected document.
- Daniel S. Freed and Frank Quinn, *Chern-Simons Theory with Finite Gauge Group*, [PDF](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf), §2, PDF pp. 8–11, including (2.1)–(2.12), Lemma 2.4 and Theorem 2.13. The complete finite automorphism-weighted measure and gluing argument was reread as an independent treatment. It concerns ordinary finite-group bundles; the C2 spin fields and exact higher-gauge formula here are specified locally.
- John C. Baez and Aaron D. Lauda, *Higher-Dimensional Algebra V: 2-Groups*, [arXiv:math/0307200](https://arxiv.org/pdf/math/0307200), §8.3, PDF pp. 54–59. The skeletal 2-group data, associator cocycle and pentagon discussion were inspected for convention context; this source does not define the physical model.
- Francesco Benini, Clay Córdova, and Po-Shen Hsin, *On 2-Group Global Symmetries and Their Anomalies*, [arXiv:1803.09336](https://arxiv.org/pdf/1803.09336), §2.3, PDF pp. 18–20, equations (2.14)–(2.20), and §1.3. The simplicial backgrounds, gauge transformations and Postnikov/anomaly distinction were inspected; no action phase or anomaly for a general theory is imported.
- A search located Dijkgraaf–Witten’s finite-group paper, but it was not used as a proof supplier. No source was marked dropped.

`source-fetch-check --stamp` reports 6/6 unique sources fetch-verified and resolved, with zero new stamps and zero documented drops. The local mathematical proof, rather than a cited strategy, establishes the finite C2 formulas.

## Contracts and scoped checks

The strict proof contract has entries for all five items, including exact supplier excerpts, actual numbered steps, inputs, boundary dispositions and finite counts. The interval TikZ picture is explicitly explanatory; its proof uses only the stated simplicial counts.

Final scoped results:

- `rendercheck.mjs` on five items and both pages: 7 checked, 0 errors, 0 warnings.
- `depcheck.mjs` using the five item IDs: 15 dependency-context items and 349 prerequisite pages checked; 0 errors and 0 warnings.
- `content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings.
- `proof-layout.mjs` on the explicitly changed items: 5 items, 13 proof steps, 0 defects.
- `precheck.mts` on all five items: 5 checked, 0 failing.
- Strict `proof-contract.mjs`: all five checked, `ok: true`, 0 errors, 0 warnings.
- `item-dependency-levels.mjs check`: the command exits 1 on unrelated run-wide scaffold and stale-level entries; no batch-40 item is listed. Empty inventories are reported for `qftx-susy-breaking-and-phenomenology`, its examples page, `qftx-susy-scft-and-frontier`, its examples page, `qftx-thooft-anomalies`, its examples page, `qftx-global-anomalies-inflow`, its examples page, `qftx-anomaly-matching-and-frontier`, its examples page, `aqft-eft-anomalies`, its examples page, `aqft-susy-effective-theories`, its examples page, `aqft-eft-experimental-inference`, its examples page, `qftx-qexact-field-theory-localization`, its examples page, `qftx-s3-partition-functions`, its examples page, `qftx-s4-partition-functions`, its examples page, `qftx-instanton-localization-physics`, its examples page, `qftx-bps-indices`, its examples page, `qftx-physical-hall-bps-wall-crossing`, its examples page, and `qftx-spectral-networks`, its examples page. It also reports `post-qftx-rigid-supersymmetric-background` at level 3 versus computed 8 and `ex-qftx-susy-round-s4-localization-data` at level 4 versus computed 9. These are outside the assigned pair and were not edited.
- `batch-dependency-levels.mjs check` reports the shared run-level file stale after the authored batch manifest was brought into final statement consistency. It was not rewritten because the shared scheduling graph belongs to the owner; the owner should refresh it after integrating batch 40.
- Cross-batch JSON shape and edge inventory were checked locally: 5 exact external edges, all `verified` with nonempty evidence.

## Step 1 records

The required `step1-decisions.mjs record` commands were run in supplier order without `--owner`. All five records are `ready`, `owner:false`; current item hashes are:

| Item | Hash |
|---|---|
| `def-aqft-finite-two-group-state-sum` | `5d233ede93c173e5d58019dc1e57a8d5d19002ce3fbb5cd56e8f5b3fc63175f1` |
| `post-aqft-finite-gauging-model` | `bc49e48228c517a13fe268efe5617a864c426c021487998fa8af8206f440f94a` |
| `pthm-aqft-finite-gauging-gluing` | `b0f81153549013e1ed02e29871d687d1a81877756b2f819cfac60c111abb807a` |
| `ex-aqft-finite-two-group-point-normalization` | `a5d32ed7cab08b4df27c7c68812bbc8b859efa17a857e318a5ed865d50c759b5` |
| `ex-aqft-finite-two-group-interval-gluing` | `6a515fc8f8e6658dc8f657da3576f9b1a5b9bd707e51d91d49a160bd3c37f4fc` |

These records close only Step 1 authoring readiness. Independent review and later acceptance gates remain separate.

Owner citation clarification: Moore–Saxena printed pp.96–99 are PDF pp.97–100. The three current source metadata locators were corrected to that actual pagination; the finite-model claims and proofs were not changed. The owner had inspected these full relevant pages while establishing the higher mathematical supplier.
