# Batch 9 authoring notes — LIN-STRUCT

## Scope comparison and planning record

- Read the complete LIN-STRUCT section in `research/plan-numerical-linear-track.md` (L922–L966), the current `research/plan-spec.json` records for both pages, and the LIN-STRUCT audit in `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md`.
- The plan and `plan-spec.json` agree on the three scope clauses, the DFT/circulant and zero-padded Toeplitz product, the restricted Hermitian Toeplitz solve, the displacement update, the conditional residual warning, and the three B-page examples. No plan-versus-spec conflict was found.
- The older LIN-STRUCT audit calls LIN-FFT and LIN-SPARSE “proposed same-frontier suppliers, not a current library item.” That availability note is stale on the current tree: `computed-fast-transforms-and-convolution` and `sparse-direct-elimination-and-ordering` are published pages, as is `linear-prediction-for-dependent-data`. The plan’s `requires` entries remain unchanged. The item inventory records only actual logical item dependencies: the FFT claims use published FFT suppliers; the AR(1) example uses the published real Durbin–Levinson algorithm and theorem; sparse-direct material is retained as a page-level interface and is not used as a proof premise.
- The run’s pre-author snapshot covers this page pair, and the native drift review reported no LIN-STRUCT drift blocker. The assigned page manifest initially had empty inventories. The item inventory and all within-pair levels are now recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-9.pages.json` before carrier authoring.

## Item levels and dependency order

| Level | Items |
|---:|---|
| 0 | `def-toeplitz-circulant-and-displacement-notation`; `thm-realified-dense-residual-certificate` |
| 1 | `prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft`; `thm-zero-padded-fft-toeplitz-matvec-is-exact-and-costs-nlogn`; `lem-complex-hermitian-toeplitz-reflection-recursion`; `def-displacement-rank-generators-and-lower-shift` |
| 2 | `alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve`; `lem-toeplitz-matrix-has-displacement-rank-at-most-two`; `lem-displacement-generator-update-under-scalar-schur-elimination`; `ex-circulant-periodic-poisson-zero-mode` |
| 3 | `thm-gohberg-semencul-inverse-identity-and-cost`; `ex-hermitian-toeplitz-nonpositive-pivot-failure` |
| 4 | `ex-ar-covariance-toeplitz-forecast-solve` |

All dependencies between batch-9 items are acyclic. External published suppliers do not increase an item’s in-run level. Batch 9 has no logical dependency on another in-run batch; its batch level remains 0.

## Mathematical construction and caveats

- The Hermitian extension is proved from block bordering and conjugate reversal. The real covariance forecast remains the published `alg-durbin-levinson-forecast-recursion` and `thm-durbin-levinson-solves-the-prediction-equations`; the new solver is for arbitrary Hermitian positive-definite Toeplitz matrices and arbitrary right-hand sides.
- The Gohberg–Semencul identity is derived locally from the inverse’s lower-shift displacement and its first/last columns. Its exact-arithmetic cost is quadratic, with four triangular Toeplitz products applied from vectors and no dense triangular factors stored.
- The residual theorem specifies a realified dense residual recomputation DAG. A complex solve is not treated as one complex operation or asserted to be backward stable; the theorem gives a conditional residual enclosure for its explicit realified check only.
- The ETH NumCSE notes define a Schur pivot by `sigma_k = 1 - (...)` but print `sigma_k >= 1` in the adjacent prose. That inequality is inconsistent with the formula; the source’s valid conclusion is strict positivity from positive definiteness. The local proof establishes `sigma_k > 0` directly.
- The EPFL report’s Lemma 3.1 gives a generator block-update formula but abbreviates its proof as a reference to earlier work. The assigned scalar-shift specialization is expanded and proved locally. Labahn–Shalom state the Gohberg–Semencul formula but treat it as a known result; the local inverse-displacement proof supplies the full argument.
- A candidate CiteseerX copy of the Labahn–Shalom paper returned HTTP 404. A title/author search found the complete author-hosted Waterloo PDF, which was read instead. No claim depends on the failed URL.
- No axiom of choice or other non-finite selection principle is used. No in-run supplier is missing, and no cycle or page-capacity issue was found (10 A-page items; 3 B-page examples).

## Source harvest and recovery

- The A-page source harvest, locators, item mappings and dispositions are recorded in `research/numerical-analysis-remaining-71-2026-10-17-batch-9.coverage.json`; retrieval evidence is in the paired `.source-coverage.json`. The A page has five independent treatments, including two full lecture-note/book treatments. The B examples have the two real-Levinson treatments where relevant.
- Read and inspected: Hiptmair’s complete 890-page ETH lecture document at §§4.2.1.6–4.2.1.14 and §§4.5.1–4.5.3; all six pages of MIT OCW Lecture 13; the complete 25-page Kressner–Luce report at §§2.1 and 3.1; the complete 16-page author-hosted Labahn–Shalom paper, including Theorem 1.1; and Bindel’s complete Cornell lecture page. Exact locators, local PDF/text read evidence, supported items and dispositions are in source coverage.
- `source-fetch-check --stamp` successfully fetched and stamped all five distinct source URLs. The final coverage contains seven page/source records (the Hiptmair and MIT sources are used on both A and B) and verifies 7/7 stamps.
- A CiteseerX candidate copy of Labahn–Shalom returned HTTP 404. A title/author search located the complete author-hosted Waterloo PDF; retrieval stopped on that successful alternative. The local Gohberg–Semencul proof is complete, and no claim uses the failed candidate URL.
- Hiptmair’s adjacent prose says a normalized Schur factor is at least 1 after defining it as $1-c^*y$. The inequality is inconsistent with the formula and is explicitly marked out of scope in source coverage; the local proof establishes only the needed strict positivity from HPD Schur complements.

## Handoff checks

- The local dependency DAG recomputed with `dependencyLevels()` has 13 items, no cycles, and all 13 carrier/manifest labels agree. Batch 9 has no in-run batch prerequisites, so its declared level is 0. Detailed scoped and whole-run results are in `research/numerical-analysis-remaining-71-2026-10-17-batch-9.dependency-level-check.json`.
- `manifest-deps`: 13 items, 0 errors. The focused `depcheck` passes for all 13 items; it also passes the selected page and prerequisite cycle checks.
- `author-check`: pass. Its precheck reports 10 proof-bearing items, 0 failures; rendercheck passes; content policy passes on all 13 items; strict proof-contract validation passes on all 13.
- Explicit `node tools/proof-layout.mjs` over the 13 changed item files: 47 numbered steps, 0 defects.
- `coverage-checklist --require-destination`: 2 pages, 25 harvested results, 0 errors, 0 warnings. Source-fetch check: 7/7 stamped records verified.
- `node tools/step1-decisions.mjs record` created non-owner `ready` records for all 13 items after checking their declared dependencies, placement, contracts and current carriers. The final whole-run readiness snapshot at 12:13 UTC reports 750 items, 364 ready and remains open; none of batch 9’s 13 items remains in its work list. The remaining work is outside this pair: 352 missing readiness records, 68 empty inventories, 7 changed dependency records, 25 existing escalations, and 2 other unresolved records at that snapshot.
- Whole-run `item-dependency-levels.mjs check` remains red outside this batch: 78 errors, comprising 68 empty scaffold inventories and 10 stale item levels in the Delaunay batches. Exact affected IDs are recorded in the dependency-level evidence file.
- Whole-run `proof-contract-coverage.mjs` cannot close because another batch references missing item `thm-ewald-total-pme-error-certificate`; batch 9 does not depend on it.
- Whole-run `batch-dependency-levels.mjs check` cannot recompute because YAML parsing encounters the invalid escape `\p` in the unassigned batch-12 source locator [lem-ewald-gaussian-poisson-periodization](/home/lazyinspirit/Projects/prestige-math-library/items/lem-ewald-gaussian-poisson-periodization.md:21). The recorded run-level snapshot still lists batch 9 at level 0 with no prerequisites. It was left for owner/cross-batch reconciliation.
