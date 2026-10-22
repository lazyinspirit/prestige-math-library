# Batch 58 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2` · role: beta · batch: 58.

## Plan and design

The plan and detailed design agree on the A/B IDs, title, order (813/814), category, mathematics library, and page prerequisites `qft-ir03` and `qft-mf02`. The preauthoring `plan-spec.json` has no item inventory yet; the complete prose scaffold lists three A items and one B item. No ownership or interface conflict was found. The A inventory is expanded with five mathematical prerequisites so that definitions and intermediate results are present before their consumers; the two pages remain far below the 100-item cap. No owner-direction override file was present.

The dependency audit exposed and removed a circular interface: the global wavefront definition is now built from a prior local chartwise Fourier definition, and the chart-invariance proof depends on those definitions without being a well-definedness dependency of either one. The final in-batch graph is acyclic.

## Authored inventory and in-batch levels

| Item | Level | In-batch suppliers |
|---|---:|---|
| `def-qftx-distributions-on-smooth-manifolds` | 0 | — |
| `def-qftx-local-wavefront-set` | 1 | `def-qftx-distributions-on-smooth-manifolds` |
| `def-qftx-wavefront-hadamard` | 2 | `def-qftx-local-wavefront-set` |
| `lem-qftx-wavefront-chart-invariance` | 3 | `def-qftx-local-wavefront-set`, `def-qftx-wavefront-hadamard` |
| `def-qftx-polynomial-microcausal-functionals` | 3 | `def-qftx-wavefront-hadamard` |
| `thm-qftx-wavefront-product` | 4 | `def-qftx-wavefront-hadamard`, `lem-qftx-wavefront-chart-invariance` |
| `lem-qftx-microcausal-star-product` | 5 | `def-qftx-wavefront-hadamard`, `def-qftx-polynomial-microcausal-functionals`, `thm-qftx-wavefront-product` |
| `cex-qftx-square-delta` | 5 | `def-qftx-wavefront-hadamard`, `thm-qftx-wavefront-product` |
| `prop-qftx-hadamard-wick-change` | 6 | `def-qftx-wavefront-hadamard`, `lem-qftx-wavefront-chart-invariance`, `def-qftx-polynomial-microcausal-functionals`, `thm-qftx-wavefront-product`, `lem-qftx-microcausal-star-product` |

The complete direct `deps`, roles, and levels are in the batch manifest. All item domains are mathematical, all mathematical dependencies are mathematical, and `physical_scope` is null. The A page contains eight items and the B page contains one.

## Scope and conventions

The local Fourier definition uses the (2\pi) convention and is explicitly chart-level. The global wavefront set is defined as the union of chartwise cotangent images; the local Fourier estimate proves agreement on overlaps and the associated closedness, conicity, sum, pullback, and empty-wavefront properties. The pullback theorem states its conormal exclusion, the product is only defined when opposite wavefront covectors are absent, and the projection result assumes compact support and a smooth positive fiber density. The remark and delta example preserve the warning that these rules do not define arbitrary singular diagonal restrictions or an unrenormalized square.

The Lorentzian convention is ((- +\cdots +)), with future covectors, metric density in integrated functional-kernel variables, and (W-W^{\mathsf T}=iE) stated explicitly. The Hadamard definition asserts no state existence. `qft-mf02` fixes a flat scalar mass-shell convention (including inverse-length μ); no curved-state existence or flat-space mass-shell result is inferred from it. The two `qft-ir03` suppliers are used only on their stated regular polynomial class over \(\mathbb R^d\); the extension to compact distribution-kernel microcausal functionals is proved in this batch.

## Full-text sources and harvested results

The coverage file contains the per-source review, supported item, locator, recovery history, and disposition for every harvested result. All 18 harvested results are scaffolded as `included`; there are no source drops or deferred results.

| Page | Full-text source and locator | Supported items / disposition |
|---|---|---|
| A | [Fredenhagen–Rejzner, *Perturbative algebraic quantum field theory*](https://arxiv.org/html/1208.1428), Appendix A.5–A.7 and §5.1–5.2, equations (52)–(64) | `def-qftx-distributions-on-smooth-manifolds`, `def-qftx-local-wavefront-set`, `def-qftx-wavefront-hadamard`, `lem-qftx-wavefront-chart-invariance`, `def-qftx-polynomial-microcausal-functionals`, `thm-qftx-wavefront-product`, `lem-qftx-microcausal-star-product`, `prop-qftx-hadamard-wick-change` — all `included` |
| A | [Brunetti–Fredenhagen, *Microlocal analysis and interacting quantum field theories*](https://arxiv.org/pdf/math-ph/9903028), §2.1, printed pp. 7–9, and §2.2, pp. 10–13 | Same eight A items — all `included` |
| B | [Fredenhagen–Rejzner](https://arxiv.org/html/1208.1428), Appendix A.6–A.7, Fourier definition, delta wavefront example, and diagonal criterion | `cex-qftx-square-delta` — `included` |
| B | [Brunetti–Fredenhagen](https://arxiv.org/pdf/math-ph/9903028), §2.1, printed pp. 7–9, local Fourier definition and criterion M1 | `cex-qftx-square-delta` — `included` |

The relevant full-text portions were inspected; the coverage records specify the exact supported claim and each source limitation. Searches and successful retrieval attempts are recorded there. `source-fetch-check` verifies all four coverage source records; the existing `--stamp` evidence is retained. No retrieval failure required a `source_resolution` disposition.

## Cross-batch dependencies

`batch-58.cross-batch-dependencies.json` is the required JSON array `[]`: there is no incoming item/page edge from another batch in this run. The aggregate graph shows that `qftx-causal-renormalization` in batch 60 and `qftx-local-algebras` in batch 68 require the A page; these are downstream observations, not batch-58-owned review rows.

The run dependency-level recomputation still gives batch 58 level 0 with `requires: []`, batch 60 level 1 with prerequisites 58 and 59, and batch 68 level 1 with prerequisite 58. All 129 stored batch-level rows match the recomputation. The shared snapshot input hash is stale after manifest authoring (`d1f9fa267cd3754c28b1714a316b654495c934e7f1a4fcccabec1c7bf94a702f` stored; `b3a67fe10ac354c0c7de8dfb703746d921d578bb429cb1ece5b6e9d7990464e3` current). The engine-owned snapshot was left for the owner to refresh after authoring is drained.

## Scoped checks and readiness

- Batch-local item dependency levels: 9 items, no errors; levels 0–6 as listed above.
- Focused `depcheck`: 9 selected items; dependency and page-cycle checks passed across 1,237 items and 315 pages.
- `content-policy`: 9 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict`: 5/5 proof-bearing items, 0 errors, 0 warnings.
- `proof-layout`: 9 items, 22 steps, 0 defects.
- Normative precheck: all five proof-bearing items pass; definitions are not applicable.
- `rendercheck`: all 9 items and 2 pages pass, including real KaTeX and frontmatter parsing.
- Coverage checklist: 2 pages, 18 harvested results, 0 errors, 0 warnings.
- Source fetch check: 4/4 source records fetch-verified; 0 documented drops.

Current `loadStep1Record`/`step1Decision` checks confirm all nine item readiness records are `ready` and hash-current. No item is escalated. These records certify authored prerequisites and placement only; they are not independent proof approval.
