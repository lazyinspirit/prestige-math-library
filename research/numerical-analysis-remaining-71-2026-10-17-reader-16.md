# Step 3a reader report — batch 16

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `16`  
Role: reader

## Scope and opened inventory

The live autopilot status reported the run as active at stage `3a-read`, with no worker in flight. I reviewed the current batch-16 manifest and followed its listed inventory. The manifest contains 20 A-page items and 3 B-page examples (23 total); the batch authoring notes say 19 A-page items and 3 examples. I used the manifest as the assigned scope.

Assigned pages opened:

- A: `library/numerical-linear-algebra-and-approximation/hierarchical-low-rank-matrices-and-error-propagation.md`
- B: `library/numerical-linear-algebra-and-approximation/hierarchical-low-rank-matrices-and-error-propagation-examples.md`

All manifest-listed A-page items opened and reviewed:

- `def-hlr-cluster-trees-and-geometric-admissibility`
- `lem-hlr-balanced-cluster-tree-size-and-depth`
- `lem-hlr-block-cluster-leaves-partition-index-pairs`
- `alg-hlr-core-svd-recompression-with-tolerance`
- `def-hlr-and-h2-block-matrix-representations`
- `thm-hlr-core-svd-recompression-is-best-rank-tolerance`
- `def-h2-nested-cluster-bases-and-interaction-lists`
- `alg-hlr-block-matvec`
- `alg-hlr-bottom-up-recompression`
- `thm-hlr-separated-cauchy-block-rank-bound`
- `alg-hlr-compress-exact-lu-factors`
- `lem-hlr-bottom-up-recompression-error-bound`
- `alg-hlr-block-addition`
- `alg-hlr-block-product`
- `thm-hlr-block-matvec-correct`
- `alg-h2-matrix-vector-multiplication`
- `thm-hlr-blockwise-error-propagation`
- `thm-hlr-storage-and-matvec-complexity`
- `thm-h2-matrix-vector-multiplication-correct`
- `thm-hlr-approximate-factorization-residual-and-inverse-error`

All manifest-listed B-page examples opened and reviewed:

- `ex-hlr-nearfield-block-requires-full-rank`
- `ex-hlr-accumulated-truncation-can-destroy-positive-definiteness`
- `ex-hlr-separated-cauchy-block`

Direct item suppliers opened to verify the assigned claims:

- Current-run draft items from batch 10: `def-finite-tensor-arrays-and-frobenius-inner-product` and `thm-best-rank-k-frobenius-matrix-approximation`.
- Published items: `thm-singular-value-decomposition`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, `thm-rank-nullity`, `thm-dimension-of-a-linear-subspace`, `thm-invertible-matrices-correspond-to-linear-isomorphisms`, and `thm-eckart-young-best-rank-k-approximation`.

The three manifest-required page summaries were also opened for context: `randomized-low-rank-approximation`, `sparse-direct-elimination-and-ordering`, and `tensor-train-compression-and-truncation-error`. The batch-16 proof-contract file was reviewed across its 14 item records, including the current citation, derivation, and boundary clauses. The cross-batch dependency record and batch notes were treated as evidence only.

## Review and repairs

The cluster-tree size and partition arguments are sound, including the singleton and root-leaf cases. The core-SVD lifting, bottom-up sum-of-tail error estimate, separated Cauchy expansion, blockwise Frobenius and product bounds, H and H² matvec identities, stated complexity bounds, and conditional LU inverse estimate all follow from the displayed hypotheses and their opened item suppliers. The three example computations check out.

Three confirmed presentation/citation defects were repaired:

1. In `def-hlr-and-h2-block-matrix-representations`, changed the title to **H-matrix block representation**. Its Definition specifies the H-matrix format; the nested H² representation is defined separately in `def-h2-nested-cluster-bases-and-interaction-lists`.
2. In `thm-h2-matrix-vector-multiplication-correct`, corrected Fact F2 to cite `def-h2-nested-cluster-bases-and-interaction-lists`, which supplies the coupling formula and dense near blocks. The previous Fact F2 cited the H-matrix definition, whose body does not define H² blocks. Updated the corresponding F2 source and exact quote in the batch proof contract. No stale `verification.judge` record was present on this item.
3. On the A page, separated exact H-matrix matvec from tolerance-controlled addition and product. The previous summary attributed local Frobenius tolerances to the matvec, while `alg-hlr-block-matvec` is exact for the represented matrix.

No mathematical claim was changed. No proof-contract or judge record applied to the title-only definition change.

Validation of changed items:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-hlr-and-h2-block-matrix-representations.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-hlr-and-h2-block-matrix-representations.md` — 0 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-h2-matrix-vector-multiplication-correct.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-h2-matrix-vector-multiplication-correct.md` — 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-hlr-and-h2-block-matrix-representations.md items/thm-h2-matrix-vector-multiplication-correct.md` — 2 items, 3 steps, 0 defects.

## Page verdicts

- A page: no remaining prose defect found; the matvec/tolerance summary sentence was corrected.
- B page: no defect found; the nearfield, accumulated-truncation, and separated-Cauchy examples agree with their calculations and cited local results.

The required randomized-low-rank page was read only as page-level context. No assigned item dependency closure uses its expected-error claims, and no batch-16 deterministic rank or error claim is inferred from a randomized expectation. I did not audit the unrelated item inventories of the three prerequisite pages.

## Uneditable defects and blocker

No confirmed or suspected uneditable defect was found in the assigned items, assigned pages, or direct item suppliers needed for their proofs. Blocker: none.

## Coverage limitation

The cited HLR literature PDFs were not independently fetched during this reader pass. Every inference in the assigned proofs was checked against the opened local definitions, proved suppliers, or elementary derivations; no unresolved mathematical uncertainty remained. The prerequisite pages were checked at their page-summary level only where no batch-16 item proof uses their item-level claims.
