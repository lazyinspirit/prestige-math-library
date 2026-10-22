# Batch 32 authoring notes — Asymptotic ends and ADM surface integrals

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `32`  
Scope: `gr-fx04-asymptotic-ends-and-adm` and its examples page.

## Plan and design reconciliation

- The frontier-track design lists A-page order `8007`; the canonical `plan-spec.json` and this batch manifest list A/B orders `761`/`762`. The plan controls; the manifest keeps `761`/`762`. Page IDs, titles, categories, and `requires` agree.
- The A page keeps all four planned page requirements unchanged. The B page keeps its requirement on the A page. The A page contains four items and the B page two, below the 100-item page limit.
- The source inventory's dependency for `def-gr-fx-adm-end` on `thm-gr-density-divergence-and-finite-chain-flux` was removed from the item. That theorem concerns finite smooth 4-chain currents and flux across non-null 3-faces; it does not establish the fixed-chart 2-sphere limit or the stated Cartesian ADM interface. The complete local theorem and proof were inspected. Proposed owner action: reconcile or remove that source-inventory edge; no claim here relies on it.
- The source inventory's `ex-gr-fx04-1` dependency on `prop-gr-fx-compact-change-adm` was omitted because the Schwarzschild calculation uses only the definition and conformal ADM-value proposition.
- Added `lem-gr-fx04-conformal-scalar-curvature` on the A page, with an explicit local proof, to supply the scalar-curvature calculation used by the B-page compact-support example. No off-batch item or page was edited.

## Authored inventory and dependency levels

Levels were computed from in-batch item suppliers only. External prerequisites do not raise the in-batch level.

| Item | Level | Exact item dependencies |
|---|---:|---|
| `def-gr-fx-adm-end` | 0 | `thm-gr-constraint-equations-in-normal-frame` |
| `lem-gr-fx04-conformal-scalar-curvature` | 0 | `thm-gr-constraint-equations-in-normal-frame` |
| `prop-gr-fx-conformal-adm-value` | 1 | `def-gr-fx-adm-end` |
| `prop-gr-fx-compact-change-adm` | 1 | `def-gr-fx-adm-end` |
| `ex-gr-fx04-1` | 2 | `def-gr-fx-adm-end`, `prop-gr-fx-conformal-adm-value` |
| `ex-gr-fx04-2` | 2 | `def-gr-fx-adm-end`, `prop-gr-fx-conformal-adm-value`, `prop-gr-fx-compact-change-adm`, `lem-gr-fx04-conformal-scalar-curvature` |

The scoped dependency graph is acyclic and matches all six `dependency_level` labels. The mathematical suppliers are the current `thm-gr-constraint-equations-in-normal-frame` carrier for the induced (h,K) and curvature conventions, then the local A-page definition/propositions/lemma as listed above. The external theorem is a published carrier outside the run's batch manifests; its full statement and complete proof were inspected. `step1Decision` reports no run-scoped readiness row for it, but the current proof and exact conventions support the uses recorded here. This is not independent approval.

## Scope and proof route

All six items are mathematical. The definition fixes the exterior chart, regularity, uniform derivative falloff, Euclidean sphere and normal, SI constants, and time-normalization convention. The first proposition derives the conformal end integral directly from the defining Cartesian surface formula; the second uses eventual equality outside a compact set. The examples then compute the isotropic Schwarzschild value and give a smooth compactly supported conformal change with the same ADM limit but different scalar curvature at a point.

These are conditional calculations on the displayed geometric data. They do not assert an Einstein constraint, positivity, completeness, chart invariance, a finite-radius energy, or an observation. The Schwarzschild representation is taken as the specified example data, not derived as a spacetime solution.

## Sources and coverage

Three complete source PDFs were retrieved and inspected at the recorded locators:

- Eric Gourgoulhon, *3+1 Formalism and Bases of Numerical Relativity*, [arXiv:gr-qc/0703035](https://arxiv.org/pdf/gr-qc/0703035), §§6.3.2, 7.2.1–7.2.2, 7.3.1–7.3.2, and 8.2.5 as scoped in the item references. Retrieved body: 2,323,954 bytes, 220 pages, SHA-256 prefix `0f4f991888ebc1f1`.
- Sebastiano Bernuzzi, *Lecture Notes on 3+1 Numerical Relativity*, [full PDF](https://www.ias.edu/sites/default/files/NR_notes.pdf), §§6.3, 7.1–7.2, including the conformal formula, ADM formula, Schwarzschild example, and qualifications on heuristic, positive-mass, and finite-radius statements. Retrieved body: 2,120,432 bytes, 77 pages, SHA-256 prefix `3de13ed9b6cefafb`.
- José Luis Jaramillo, Juan Antonio Valiente Kroon, and Eric Gourgoulhon, *From Geometry to Numerics*, [arXiv:0712.2332](https://arxiv.org/pdf/0712.2332), §2.1 through equation (2), including the fixed-end falloff discussion. Retrieved body: 992,205 bytes, 72 pages, SHA-256 prefix `2c7d085566882b2e`.

Each of the 26 harvested results in the coverage file has an explicit disposition and item-level support or out-of-scope reason. Coverage scaffolds 5/18 results for A and 3/8 for B; `coverage-checklist` reports two low-yield warnings and zero errors. The unused heuristic Newtonian derivation, positive-mass summary, finite-radius discussion, null-infinity material, and global-existence/stability material are explicitly scoped out; no source result is represented as an experiment or proof of a physical model.

`source-fetch-check --stamp` verified all 6 page/source entries against the inspected full-text bodies (0 newly stamped). Each of the three URLs succeeded on its initial retrieval; there were zero recovery retries and zero dropped sources. No retrieval failure required a `source_resolution` record.

## Cross-batch and readiness status

- The declared page edge from `gr-fx04-asymptotic-ends-and-adm` to batch 29's `gr-fx01-hypersurface-and-null-geometry` is recorded `open` in the cross-batch JSON. The target page lists five items. Four have current ready Step 1 records; `step1Decision` for `lem-gr-fx-null-normal-plane-and-screen` returns `closed: false`, reason `Readiness record missing`. Its carrier and proof exist, but this is a fresh missing record for an item in the current run. Batch 32's proofs do not use its null-normal-plane result. The owner should resolve that batch-29 readiness input; this page-level edge remains separate from the item-level dependencies above.
- Current run-wide `batch-dependency-levels.mjs check` reports a stale shared batch dependency map. The shared map is owner-controlled and was not edited. Batch 32 remains level 1 after batch 29 under the supplied run dependency inventory.
- Run-wide `item-dependency-levels.mjs check` reports empty inventories on numerous unrelated future scaffold pages. The scoped batch-32 graph passes with levels `0, 0, 1, 1, 2, 2` and no errors.

## Final scoped checks

- `proof-layout.mjs`: 6 items, 15 steps, 0 defects.
- `precheck.mts`: 5 proof-bearing items, 0 failures; the definition is non-proof-bearing.
- `rendercheck.mjs`: 6 items and 2 pages parsed; no math, delimiter, or frontmatter errors.
- `content-policy.mjs`: 6 items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 6 items, 0 normalizations, 0 errors.
- `proof-contract.mjs --strict --json`: all 6 contracts checked, 0 errors, 0 warnings.
- Scoped `depcheck`: 6 selected items; selected item/page and prerequisite-cycle checks passed across 1,167 items and 298 pages.
- `coverage-checklist.mjs`: 2 pages, 26 harvested results, 0 errors, 2 low-yield warnings as described above.
- `source-fetch-check.mjs --stamp`: 6/6 verified, 0 newly stamped, 0 drops.
- Scoped `dependencyLevels`: 6 items, no cycles or label mismatches.
- Run-wide level checks remain blocked only by the shared stale batch map and unrelated empty scaffold inventories described above.

Step 1 item records capture authoring readiness and current dependency inputs; they do not certify independent proof approval. The page-level batch-29 dependency remains open in its own cross-batch record.

All six batch-32 item records now say `ready`, use the exact direct item dependency lists above, and have current hashes. This is item-level readiness; it does not close the separate open page edge to batch 29.
