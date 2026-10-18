# Batch 37 — Clifford bundles, Dirac operators, and index interfaces

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: `spin-geometry-dirac-and-index-theory` / `spin-geometry-dirac-and-index-theory-examples`

## Controlling documents and plan comparison

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the complete relevant section of `research/plan-physics-algebras-track.md`, `research/plan-spec.json`, the current batch evidence, `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md`, and the binding owner construction at `research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/spin-index/construction.md`. The owner direction and construction govern stale task/design holds. The design section and plan agree on page identity, title, category, order 2888, companion, prerequisite page list, and Clifford/Dirac/index scope; no plan/design conflict required a change. The plan prerequisite `pin-spin-and-clifford-module-representations` remains an open supplier interface, recorded below rather than treated as accepted.

## Inventory and dependency levels

The A page contains 18 items and the B page contains 5; both are below the 100-item page cap. Dependency levels were computed from the run manifests' in-run `deps` edges before carrier authoring and recomputed after the local nerve lemma and dependency synchronization. All 23 labels match the current item graph; no cycle occurs in this pair. Out-of-run prerequisites do not raise these in-run levels.

| Level | Items |
|---:|---|
| 0 | `def-ahat-and-relative-chern-character-forms`; `lem-good-cover-nerve-computes-singular-cohomology` |
| 1 | `def-graded-hermitian-clifford-module-and-geometric-dirac` |
| 2 | `lem-geometric-dirac-operator-is-well-defined`; `cex-dirac-on-euclidean-space-is-not-fredholm` |
| 3 | `lem-lichnerowicz-formula-for-geometric-dirac-operators` |
| 4 | `lem-dirac-maximal-domain-is-h1` |
| 5 | `lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel` |
| 6 | `lem-dirac-heat-trace-and-mckeen-singer-index` |
| 7 | `lem-dirac-heat-parametrix-has-graph-norm-remainder` |
| 8 | `def-spin-lift-of-oriented-orthonormal-frame-bundle` |
| 9 | `def-even-dimensional-spinor-bundle-chirality-and-spin-connection` |
| 10 | `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`; `lem-spinor-and-clifford-associated-bundles-are-well-defined` |
| 11 | `lem-getzler-radial-gauge-oscillator-leading-term`; `prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero`; `ex-complex-projective-plane-has-nonspin-tangent-bundle`; `ex-flat-even-torus-spin-dirac-has-index-zero` |
| 12 | `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character`; `ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel` |
| 13 | `thm-geometric-clifford-module-dirac-index-formula` |
| 14 | `cor-spin-dirac-index-formula-with-arbitrary-twist` |
| 15 | `ex-twisted-sphere-dirac-index-and-curvature-term` |

## Sources and mathematical coverage

The coverage file records three full-text lecture-note treatments, 20 harvested results, exact URLs and locators, item support, dispositions, retrieval hashes, and fetch stamps. The harvest dispositions are 14 `included`, 2 `inline`, and 4 `out-of-scope`, each with an item or reason.

- Nicolaescu, *Notes on the Atiyah–Singer Index Theorem*: complete Chapter 4 §§4.2–4.3.4 (printed pp. 139–166) and Proposition 2.2.26 with its full proof (pp. 87–88). The final §4.3.4 heading is empty; Proposition 4.3.4 is stated without the complete proof route and the batch supplies its own local chain.
- Wernli, *Lecture Notes on Spin Geometry*: §§2.3–2.4, §3.3, Theorem 4.2.4 and twisted specialization; the end-of-proof heat rescaling convergence is explicitly only a sketch and is not treated as evidence for the missing estimate.
- Melrose, *Analysis, Loops and Spin*: complete §1.15, including the transition-sign cocycle and gluing construction. The notes leave the identification with `w2` and the `H1` torsor as exercises; the carriers supply those arguments.

All three selected PDFs were fetched and stamped; `source-fetch-check` verifies 3/3. Historical failed guessed URLs remain in the owner source-review history. The selected source URLs succeeded, so this batch records no source drop or new `source_resolution` recovery entry. No source excerpt, completion, or acceptance was inferred from the conditional PA-04 supplier.

## Cross-batch dependencies and readiness

The cross-batch dependency file has 29 edges: 11 verified and 18 open. Verified inputs include the batch-34 Clifford algebra definition and the batch-36 full Spin group, covering map, universal-cover, and image/kernel statements; their current bodies and Step 1 records were checked. The A-page edge to `pin-spin-and-clifford-module-representations` remains open. In particular, `thm-complex-spin-modules-and-compact-reducibility` is conditional on the unready `lem-clifford-even-subalgebra-signature-identification` and `thm-real-complex-clifford-algebra-classification`. All dependent spinor, associated-bundle, Getzler, Mehler, index, and spinor-example claims remain drafted with these exact prerequisites and are recorded `escalated`; no supplier body or approval was invented.

Step 1 records were written with `node tools/step1-decisions.mjs record`, `owner: false`, and the examined dependency IDs for all 23 items. An item-scoped `step1Decision` audit confirms 12 hash-current `ready`, 11 `escalated`, and 0 missing or stale records. The escalations depend on the conditional PA-04 module interface. The records do not constitute independent approval. The run-wide Step 1 frontier remains open outside this batch.

## Scoped checks and blockers

- `precheck`: 20 proof-bearing items checked, 0 failures. Definitions without proof sections are not applicable.
- `proof-layout`: 23 items, 74 numbered steps, 0 defects.
- `proof-contract.mjs <batch-37.proof-contracts.json> --strict`: 23/23 items, 0 errors, 0 warnings; contracts contain 151 exact supplier excerpts and 74 mapped derivation steps.
- `rendercheck`: all 23 carriers and both pages (25 files), real KaTeX and YAML parse passed.
- `depcheck --items-file` for the 23 assigned items: passed; prerequisite cycle checks covered 3602 items and 421 pages.
- `content-policy`: 23 scoped items, 0 errors, 0 warnings.
- `manifest-deps`: 23 items, no missing dependency arrays or errors. `coverage-checklist --require-destination`: 1 A page, 20 harvested results, 0 errors or warnings. `source-fetch-check`: 3/3 resolved.
- The computed run dependency graph has no batch-37 level mismatch or cycle. The run-wide `item-dependency-levels.mjs check` currently reports 96 errors elsewhere in the frontier; none names an assigned item.
- `frontier-dependency-ledger.mjs refresh --run non-ml-math-remaining-81-2026-10-18` cannot complete because an unrelated source locator in another batch fails YAML parsing: `Nested mappings are not allowed in compact mappings at line 17, column 14` at the `Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to …` title. The shared ledger was not edited by hand.
- The autopilot status at inspection was `running`, stage `1-scaffold`, 39/81 covered, with no active writer; its unrelated `plan()` blocker is `Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. No runtime state was changed.
