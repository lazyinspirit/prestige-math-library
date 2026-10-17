# Batch 2 authoring notes — sparse matrix models and kernel costs

Date: 2026-10-16. Scope: only `sparse-matrix-models-and-kernel-costs`, its examples page, and batch-2 evidence.

## Controlling design and recorded conflicts

The controlling route is the owner direction, the current `NA-03` section in `research/plan-numerical-linear-track.md` (L159 onward), and its current `plan-spec.json` row. The plan-spec row assigns order 2288, category `numerical-linear-algebra-and-approximation`, the A/B page IDs, and three page requirements: `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, and `krylov-subspaces-arnoldi-and-gmres`. The owner direction records the E1 repair for this pair; the current linear-track design names the Krylov page for the imported matrix-free access definition. These agree with the assigned manifest.

The duplicate `NA-03` text in `research/plan-numerical-analysis-track.md` (L46 onward) is older: it identifies a different track placement and lists only the direct-factorization page. That older requirement does not override the current plan-spec row, current linear-track design, or assigned dispatch. The current assignment is broader in page context, while item proofs use only the exact local and published item dependencies recorded in their frontmatter and manifests. The plan-spec leaves `items: []` as scaffold inventory; the completed manifest now contains seven A items and five B examples.

The current `LIN-SPARSE` design in the linear-track plan (L401 onward) consumes NA-03's symbolic graph and fill interface. Batch 16 currently declares the consumer page but has an empty item inventory. The outgoing interface and its exact hypotheses are therefore recorded in `batch-2.cross-batch-dependencies.json`; no consumer item ID, statement, or acceptance is inferred.

## Inventory and dependency levels

The manifest inventory was set before writing carriers. Direct in-batch dependencies and recomputed levels are:

| Item | Direct in-batch dependencies | Level |
|---|---|---:|
| `def-csr-matrix-with-stored-entry-semantics` | none | 0 |
| `def-symmetric-structural-elimination-graph-and-ordering` | none | 0 |
| `alg-csr-matrix-vector-product-with-validation` | CSR definition | 1 |
| `thm-filled-graph-contains-schur-complement-support` | graph definition | 1 |
| `ex-csr-tridiagonal-matrix` | CSR definition | 1 |
| `thm-csr-matvec-algorithm-terminates-with-status` | CSR algorithm | 2 |
| `thm-csr-matvec-returns-the-represented-matrix-product` | CSR definition, CSR algorithm | 2 |
| `thm-csr-storage-and-exact-matvec-cost` | CSR definition, CSR algorithm | 2 |
| `ex-ordered-elimination-creates-fill` | graph definition, filled-graph theorem | 2 |
| `ex-numerical-cancellation-within-filled-graph` | graph definition, filled-graph theorem | 2 |
| `ex-csr-matvec-operation-count` | CSR definition, algorithm, correctness theorem, cost theorem | 3 |
| `ex-csr-duplicates-and-explicit-zero-entry-count` | CSR definition, algorithm, correctness theorem, cost theorem | 3 |

The scoped dependency calculation passed with no cycles or label mismatches. Published suppliers do not increase item levels. There are no incoming same-run batch prerequisites; the dispatch and recorded schedule row place batch 2 at dependency level 0. The run-level schedule checker could not recompute the whole graph; see the blocker below. Each page remains below the 100-item cap.

## Prerequisite inspection and proof boundaries

- The CSR definition uses the published field, matrix-space, and finite-sum definitions. It fixes zero-based indexing, dimensions including zero, row-pointer endpoints and monotonicity, valid columns, empty rows, duplicate summation, explicit stored zeros, stored count `s`, and the canonical condition under which `s = nnz(A)`.
- The validated algorithm's candidate arrays are finite. It checks dimensions before indices, returns the stated `invalid-dimension` and `invalid-index` statuses, then initializes the output and visits each valid stored index once. Its correctness proof uses the actual matrix-product and finite-sum conventions, the function-space convention for the zero-dimensional vector, and the published zero-multiplication lemma and field identity where the indicator is zero or one.
- The exact-cost proof counts the CSR arrays, arithmetic updates, and initialization loop. Its total data-slot claim explicitly counts the CSR record and returned vector but excludes the supplied vector `x` and fixed-size workspace. The `O(s)` specialization requires a square record of positive order with at least one stored entry per row, so `s >= 1` absorbs the additive constant.
- The structural graph is defined for a symmetric matrix over an arbitrary field and a fixed ordering. The Schur-support theorem uses the actual field definition, `lem-of-zero-mult`, and `lem-of-no-zero-divisors`; it assumes every pivot is nonzero. It proves inclusion and the later-neighbor clique property, not equality of symbolic and numerical patterns. The cancellation example verifies strict inclusion directly.
- All numerical examples are over `Q` and cite `thm-rat-field`. The exact path example has pivots `2, 3/2, 4/3`; the cancellation example has first Schur off-diagonal `0` and remaining pivots `5/2`; the CSR example has ten stored entries; the duplicate/explicit-zero example has `s=3` and `nnz(A)=0`.
- The required matrix-norms page was inspected; no stability or error-bound result is imported. The Krylov page's `def-matrix-free-access-model-for-krylov-methods` was inspected: it supplies matrix-free application and vector operations, but no CSR representation, storage count, stability guarantee, or convergence theorem. The direct-factorization page's triangular-substitution theorem and proof were inspected; they are canonical context and do not supply a sparse CSR cost or a general fill bound. No choice axiom is used; the arguments use finite sums, field algebra, and finite induction.
- The existing published unsymmetric Gaussian-elimination fill example and the matrix-free GMRES example were checked. The new examples add the symmetric ordered graph/Schur-support interface and the explicit CSR storage and operation counts, respectively; neither existing example supplies those statements.

## Sources and dispositions

`batch-2.coverage.json` records source URLs, complete locators, item support, and a disposition for every harvested result. Saad, *Iterative Methods for Sparse Linear Systems*, 2nd ed., Chapter 3, printed pp. 75–104 (PDF pp. 95–124), was read in full. David Bindel's Cornell CS 6210 Lectures 31, 32, and 33 were each read as complete five-page PDFs. The independent *Templates for the Solution of Linear Systems*, 2nd ed. (Barrett et al.), was read through all of §4.3.1 and §4.3.2, printed pp. 57–63 (PDF pp. 67–73); its canonical CRS convention is distinguished from the local duplicate and explicit-zero extension. The independent Waterloo CS475/675 Lecture 4 was read as a complete 15-slide PDF; slides 6–10 describe matrix graphs and the neighbor-fill update. Its first slide points readers to Saad §§3.1–3.2, so it is recorded as corroborating exposition, not an independent proof of the Schur-support theorem. That theorem is proved locally with the exact field and nonzero-pivot hypotheses.

The final source check verified all 6/6 full-text sources, with zero documented drops and no source-fetch failures. No `source_resolution` failure record is applicable. `coverage-checklist` reports 0 errors and one `coverage-low-yield` warning: 4/56 harvested results are standalone `included` items, 9 are explicitly absorbed inline into local definitions or proofs, and 43 are out of scope with item-specific reasons. The warning counts standalone inclusions; it is retained for owner review.

## Required scoped checks and records

- Scoped `dependencyLevels` calculation: 12 items, no errors; levels are A: `0,0,1,1,2,2,2` and B: `1,2,2,3,3`.
- `precheck.mts`: 12 files, 9 proof-bearing items checked, 0 failures; the two definitions and algorithm are not applicable.
- `proof-layout.mjs`: 12 items, 26 steps, 0 defects.
- `rendercheck.mjs`: 14 files (12 items and both pages), 0 errors, 0 warnings.
- `content-policy.mjs`: 12 scoped items, 0 errors, 0 warnings.
- Strict `proof-contract.mjs`: all 9 proof-bearing items checked, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 6/6 sources fetch-verified and resolved, 0 documented drops.
- Twelve item readiness records are `ready`, each with its exact direct dependency list and current item hash. These are authoring records, not independent approval.

The requested whole-run `batch-dependency-levels check` fails before its stale-input comparison because it parses the unrelated item [def-matching-affine-simplicial-meshes.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-matching-affine-simplicial-meshes.md:17), whose unquoted YAML locator contains `pp. 83–88: reference maps`. That item belongs to batch 24 and was not edited. The existing run-level dependency artifact was not rewritten; the owner must correct the unrelated YAML and recompute/verify the shared artifact. The full-run item-level check also encounters other batches whose scaffold manifests still have empty inventories; the scoped batch-2 calculation passes.
