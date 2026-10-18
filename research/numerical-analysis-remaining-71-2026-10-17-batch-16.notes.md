# Batch 16 authoring notes — LIN-HIER

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role/pair: beta, `hierarchical-low-rank-matrices-and-error-propagation` / `hierarchical-low-rank-matrices-and-error-propagation-examples`  
Output manifest: `research/numerical-analysis-remaining-71-2026-10-17-batch-16.pages.json`  
Batch dependency level: 1; dispatch scheduling input: `5dcc171fddab3eb1d2ba3e43c1e62dc8d4714f8adff54a3b6601097f1d4550ba`.

## Controlling documents and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task and design, `briefs/beta-scaffold.md`, the complete owner direction, the current plan/spec row, the complete LIN-HIER design section, the batch dependency-level input, and the current batch evidence before authoring. The owner direction controls stale task/design conflicts. It requires deterministic rank/error claims, low rank as an assumption or local kernel theorem, blockwise error accounting, explicit H² interaction counts, and exact supplied LU factors rather than an unsupported H-LU construction.

There is one page-requirement conflict. LIN-HIER in `research/plan-numerical-linear-track.md` additionally names `the-spectral-theorem-and-singular-value-decomposition` as existing page context under `requires`. The current `plan-spec.json` row, generated batch assignment, and owner direction require only `randomized-low-rank-approximation` and `sparse-direct-elimination-and-ordering`. I followed the controlling plan-spec/assignment page placement and recorded only those two `requires`. The actual SVD premise is explicit at item level through `thm-singular-value-decomposition`; this does not create a page-level `requires` edge. Owner should reconcile the stale design reference when maintaining the shared plan.

## Inventory and dependency levels

The scaffold contains 19 A-page items and 3 B-page examples (22 total, below the 100-item page cap). The inventory and direct dependencies are in the manifest. Levels were recomputed from in-run item edges; external published prerequisites do not add a batch-local level:

- Level 0: `def-hlr-cluster-trees-and-geometric-admissibility`.
- Level 1: `alg-hlr-core-svd-recompression-with-tolerance`, `lem-hlr-balanced-cluster-tree-size-and-depth`, `lem-hlr-block-cluster-leaves-partition-index-pairs`.
- Level 2: `def-hlr-and-h2-block-matrix-representations`, `thm-hlr-core-svd-recompression-is-best-rank-tolerance`.
- Level 3: `alg-hlr-block-matvec`, `alg-hlr-bottom-up-recompression`, `alg-hlr-compress-exact-lu-factors`, `def-h2-nested-cluster-bases-and-interaction-lists`, `thm-hlr-separated-cauchy-block-rank-bound`; B examples `ex-hlr-accumulated-truncation-can-destroy-positive-definiteness`, `ex-hlr-nearfield-block-requires-full-rank`.
- Level 4: `alg-h2-matrix-vector-multiplication`, `alg-hlr-block-addition`, `alg-hlr-block-product`, `thm-hlr-block-matvec-correct`; B example `ex-hlr-separated-cauchy-block`.
- Level 5: `thm-h2-matrix-vector-multiplication-correct`, `thm-hlr-blockwise-error-propagation`, `thm-hlr-storage-and-matvec-complexity`.
- Level 6: `thm-hlr-approximate-factorization-residual-and-inverse-error`.

The shared batch-level dependency input lists Batch 11 as the only prerequisite batch for Batch 16. The completed item graph also has verified direct item edges to Batch 10’s `def-finite-tensor-arrays-and-frobenius-inner-product` and `thm-best-rank-k-frobenius-matrix-approximation`. Batch 10 and 11 are both level 0, so the Batch-16 item level remains 1. These extra Batch-10 item edges and their evidence are recorded in `batch-16.cross-batch-dependencies.json`; the shared scheduling input was not edited and needs owner/generated-input reconciliation.

## Authored mathematical scope and proof route

The A page defines finite balanced cluster trees, metric diameter/distance, the strict positive-distance admissibility criterion, and the recursive block partition. Local lemmas prove the balanced-tree size/depth bounds and that terminal block rectangles form a disjoint cover. H format stores near leaves densely and admissible leaves as rank-capped factors; the definition explicitly states that admissibility does not imply a matrix block has low rank. H² nested row/column bases, transfers, couplings, and interaction lists are defined separately.

Core-SVD recompression is defined on finite real or complex factor lists. The factors are orthogonalized, the small core is decomposed, and the algorithm returns the smallest rank under the cap whose exact discarded singular-value tail meets the requested Frobenius tolerance, or a named failure status. Its theorem lifts the core SVD to the represented matrix and proves the residual, optimality, and failure boundary using the exact batch-10 Frobenius convention and the SVD supplier.

`alg-hlr-bottom-up-recompression` supplies the planned bottom-up operation as a finite binary factor-sum tree. Every node, including a leaf, is recompressed in postorder. Each node records its exact core-SVD discarded tail; induction proves that the sum of node tails bounds the exact subtree error. The node budgets must sum to at most the block tolerance. A failed node means this tree/budget schedule did not certify the tolerance; it is not a claim that no rank-k approximation of the full sum exists. Addition and product call this routine; near blocks remain dense and exact. Product inputs explicitly require a compatible finite intermediate-cluster partition and matching factor dimensions.

Blockwise errors combine by the root sum of squares because the terminal block supports are disjoint. The product perturbation proof expands both approximate operands and derives Frobenius submultiplicativity entrywise by Cauchy–Schwarz. The complexity theorem assumes balanced threshold-k trees and states three separate count bounds: total far-block side sizes at each level, the number of near blocks, and the total H² interactions. It does not infer these bounds from geometric admissibility and does not claim rank-linear complexity for addition or multiplication. The factorization certificate compresses exact supplied block LU factors, keeps diagonal and near blocks exact, and proves the residual and inverse bound under `||A^-1||_2 eta < 1`; it makes no floating-point residual or LU-construction claim.

The B page has three explicit checks: the separated Cauchy block’s factorization/residual, the inadmissible identity near block and its best rank-one spectral error, and two individually accepted rank-zero update truncations that turn an SPD assembled matrix indefinite. The last example is restricted to truncating factorized updates before assembly; it does not claim every truncation of a completed positive-definite H matrix loses positivity.

## Cross-batch interfaces and supplier audit

`batch-16.cross-batch-dependencies.json` records 13 edges (2 page, 11 item). The Batch-11 page edge remains open because its complex expected-error branch is unresolved. Exact unresolved supplier IDs are `thm-gaussian-rangefinder-expected-spectral-error`, `thm-gaussian-power-rangefinder-expected-error`, and `lem-normalized-complex-scaled-gaussian-product-expectation`. The missing interface must prove the sharp scaled-complex Gaussian product bound for fixed compatible complex matrices and iid variance-one normalized complex Gaussians, or supply a full alternative proof. No Batch-16 item uses a Gaussian expected bound: block ranks are assumptions except for the local Cauchy-kernel expansion; all truncation and solver certificates are deterministic. Thus no HLR dependent claim is omitted or promoted from an expectation statement.

The published sparse-direct page and its multifrontal Cholesky equivalence/cost and sparse Cholesky interfaces were inspected. The Batch-16 factor routine takes exact L,U as input, so the sparse page is placement context only, not a logical proof premise.

The current bodies of Batch-10 `def-finite-tensor-arrays-and-frobenius-inner-product` and `thm-best-rank-k-frobenius-matrix-approximation` were read completely. The definition uses the full entry list with indices `1<=i_k<=n_k`; the theorem proves best Frobenius truncation from an SVD and orthogonal projection weights. Their Batch-10 Step-1 records are ready. All HLR Frobenius statements use these items and do not cite the defective published Frobenius definition described below. The exact upstream interfaces are recorded per consumer and do not constitute independent approval.

## Sources, retrieval history, and harvested results

The source coverage ledger is `batch-16.coverage.json`; it enumerates locators, harvested result dispositions, item support, and the retrieval history.

1. Börm–Grasedyck–Hackbusch, *Hierarchical Matrices*, full 173-page MiS lecture-note PDF, §§1.3–1.6, 2.1–2.2, 3.2–3.3, 6.1.1–6.2.1, 6.2.3, 7.2.1–7.2.3, and 9.2.1–9.2.3. The browser PDF parser first returned unsupported `application/octet-stream`; direct download plus `mutool` successfully recovered the full text. `source-fetch-check --stamp` verified 1,590,385 bytes and 173 pages.
2. Ralf Hiptmair, *AdvNumCSE Lecture Document*, full 414-page ETH Zürich course document, §§2.2.2.1, 2.3.2–2.3.5, and 2.4.1–2.4.6. I downloaded and extracted the complete document and read the relevant sections. The chapter explicitly attributes H addition/product/LU/H² material to Hackbusch 2015; the source ledger records that limitation. `source-fetch-check --stamp` independently verified the full PDF.
3. Mario Bebendorf, *Hierarchical Matrices*, Springer 2008, was read earlier as a complete PDF and its H-matrix definitions, operation formulas, block Frobenius identity, and stability cautions were inspected. On this turn its stored download URL returned HTTP 404 on five consecutive fetch attempts. Springer metadata confirms the book but only provides subscription-limited previews; Bayreuth’s record has no active full-text URL. The dead URL is recorded as a dropped source in the coverage ledger with per-item alternative arguments/dependencies. The source drop is only about current fetchability: no mathematical claim is dropped, all assigned proof items are complete, and MiS/ETH full-text treatments remain active.

Searches, retries, source IDs and dispositions are recorded in the coverage ledger. No LLM/source excerpt or acceptance is inferred. The local alternative arguments are complete; no fifth-retry recovery was attempted after the five HTTP 404s.

## Published supplier defect found outside this assignment

`items/def-frobenius-matrix-norm.md` is published but its line 31 defines the sum with `i<m` and `j<n`, although the matrix has dimensions `m x n` and the library’s finite-array convention indexes entries from 1 through the dimension. This omits the final row and final column; for a 1x1 matrix it returns zero, and a nonzero matrix supported at `(m,n)` has zero displayed quantity. The line 38–45 claim that this is a norm is therefore false for the displayed formula. This batch does not depend on or edit that item; it uses Batch-10’s correct full-entry definition.

Direct item consumers found by `rg -l '[[def-frobenius-matrix-norm]]' items` are: `alg-householder-bidiagonalization`, `alg-implicit-shifted-bidiagonal-qr-with-deflation`, `cor-finite-basis-energy-model-has-c1-response`, `def-qa-34-l2-sample-query-access`, `def-rank-r-orthogonal-projector-domain`, `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`, `def-sylvester-operator-and-separation-number`, `lem-capped-diis-coefficient-minimizer-exists`, `lem-clean-dense-gaussian-covariance-minimax-lower-bound`, `lem-diagonal-covariance-minimax-lower-bound`, `lem-qa-34-modfkv-sampling-gram-bound`, `lem-scaled-householder-step-meets-local-backward-error-premise`, `lem-square-root-kalman-gram-perturbation-bound`, `lem-square-root-kalman-schur-perturbation-bound`, `lem-sylvester-vectorization-isometry-and-kronecker-identity`, `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil`, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, `thm-bidiagonal-svd-backward-error-under-local-stability`, `thm-block-projector-frechet-derivative-and-bound`, `thm-continuous-lyapunov-integral-and-positivity`, `thm-derivative-of-matrix-inversion`, `thm-determinant-differential-and-jacobis-formula`, `thm-gapped-response-projector-lipschitz-certificate`, `thm-qa-34-best-frobenius-rank-k-approximation`, and `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`. This is an owner-level published-content defect and requires consumer-impact review; no files outside Batch 16 were changed.

## Scoped checks and final Step-1 decisions

Final scoped results after all item, page, source and contract edits:

| Check | Result |
|---|---|
| Batch-local item dependency reconciliation using Batch-10 and Batch-16 manifests | 22 Batch-16 items consistent with the combined graph and their frontmatter dependency lists; maximum level 6. The added Batch-10 item edges do not change Batch-16 level 1. |
| Normative precheck | 13/13 proof-bearing Batch-16 items pass. |
| `proof-layout` | 22 items, 38 numbered proof steps, 0 defects. |
| Strict proof contracts | 13/13 proof-bearing items checked, 0 errors, 0 warnings. Contracts quote exact current supplier sections and map each current step, inputs, boundaries, and applicable finite checks. |
| `content-policy` | 22 items, 0 errors, 0 warnings. |
| `manifest-deps` | 22 items, 0 missing dependency arrays, 0 errors. |
| Focused `depcheck` | 0 errors, 0 warnings; 733 prerequisite items and 168 prerequisite pages traversed. |
| `rendercheck` | 24 files (22 items and 2 pages), 0 errors, 0 warnings. |
| Coverage checklist | 1 A page, 44 harvested source results, 0 errors, 0 warnings. |
| Source fetch check | 2/3 source entries fetch-verified and 3/3 resolved; one dead Bebendorf URL is recorded as a source drop with per-item alternatives. Active stamps are MiS (173 pages; 1,590,385 bytes) and ETH AdvNumCSE (414 pages; 7,546,299 bytes). |
| Step-1 records | 22/22 Batch-16 items recorded `ready`; current hashes and dependencies verify. The record reasons note that readiness is for independent review, not approval. |

The Batch-11 page edge remains open with its three exact complex expected-error supplier IDs in `batch-16.cross-batch-dependencies.json`. No Batch-16 item consumes those expected-error claims. The dead Bebendorf PDF URL had five HTTP 404 results; it was not retried further after the five failures. The original full book had been read earlier, and no mathematical claim is waived by dropping its current URL. The non-mutating engine state and all shared plans were left untouched.

Two command corrections are retained for audit clarity: an initial precheck command passed no explicit file arguments and fell back to the whole corpus (186 unrelated failures); the final invocation explicitly selected all 13 Batch-16 proof-bearing items and passed. The initial rendercheck also caught math delimiters inside the TikZ code; the diagram labels were changed to plain text, and the final 24-file render check passed. Neither initial check changed files outside this pair.

## Owner disposition after native author drain

At 2026-10-17T12:35:41.346305+00:00, root verified genuine native batch16 completion. The reported published Frobenius omission above is **not a defect**: def-matrix-space explicitly uses indices 0,...,m-1 and 0,...,n-1, as do the coordinate-inner-product and standard-basis suppliers. For a 1x1 matrix the norm sum is |a_00|, not zero; (m,n) is outside the valid index set. Root read all four full actual bodies. Exact current-source hashes and focused reasoning are in owner-planning-integration/frobenius-indexing-disposition.json. The original author finding is preserved above as history; it must not cause a shared-definition change or any consumer rewrites. No quantum session was touched.

The controlling LIN-HIER prose now matches the unchanged canonical required-page list and records actual batch10 Frobenius suppliers, retaining all scope and the batch11 complex-proof page hold. The extra spectral page is context rather than a new requires token. No canonical item/page carrier, item dependency or readiness receipt changed; independent native review and gates remain due.
