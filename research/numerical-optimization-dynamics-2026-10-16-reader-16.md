# Step 3a reader report — batch 16

Run: numerical-optimization-dynamics-2026-10-16

Batch: 16

## Opened inventory

Assigned pages:

- library/numerical-linear-algebra-and-approximation/sparse-direct-elimination-and-ordering.md (A)
- library/numerical-linear-algebra-and-approximation/sparse-direct-elimination-and-ordering-examples.md (B)

Assigned A-page items, opened in dependency order:

- alg-threshold-partial-pivot-sparse-lu
- def-hermitian-structural-graph-adapter
- alg-nested-dissection-ordering-on-regular-grids
- lem-filled-edge-path-characterisation
- thm-threshold-sparse-lu-residual-with-growth
- def-elimination-tree-and-column-reach
- lem-nested-dissection-fronts-are-boundary-limited
- lem-hermitian-schur-support-is-contained-in-structural-fill
- alg-symmetric-indefinite-block-ldl-star
- lem-elimination-tree-reach-contains-each-filled-neighbor
- alg-sparse-cholesky-with-invalid-pivot-status
- thm-block-ldl-star-residual-with-actual-growth
- thm-sparse-cholesky-structural-pattern-without-cancellation
- alg-multifrontal-cholesky-and-sparse-triangular-solves
- thm-multifrontal-elimination-equivalence-and-sparse-costs
- thm-nested-dissection-grid-work-and-storage-bounds
- alg-certified-hermitian-one-and-two-by-two-ldl-kernel
- lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual

Assigned B-page examples:

- ex-star-orderings-produce-different-sparse-fill
- ex-nonsingular-indefinite-requires-two-by-two-pivot
- ex-two-dimensional-poisson-nested-dissection-cost

Also opened the page prerequisites direct-matrix-factorisations-lu-cholesky-and-qr, finite-precision-direct-factorizations, and sparse-matrix-models-and-kernel-costs; all direct item suppliers from the batch manifest; and the relevant transitive premise items for the operationwise error model, field and Hermitian algebra, and finite-dimensional operator norms. The two draft suppliers outside batch 16, def-symmetric-structural-elimination-graph-and-ordering and lem-rounded-linear-and-normal-residual-certificates, were read as dependencies and had no defect affecting their assigned consumers.

## Repairs and evidence

- alg-multifrontal-cholesky-and-sparse-triangular-solves, Definition, final paragraph: changed the solve description from claiming that rounded substitutions return the exact unique solution to specifying the computed vector (or range-failure) and making no exact-solution or error-bound claim. The definition explicitly applies the finite-precision operation model to solve arithmetic. Exact solve correctness is established separately by thm-multifrontal-elimination-equivalence-and-sparse-costs under its exact-arithmetic hypothesis. Updated that theorem's F1 contract quote to the current Definition.
- thm-threshold-sparse-lu-residual-with-growth: moved justification tags to the ends of complete proof steps and kept the display equations within those step paragraphs. The required precheck stratification renumbered old steps 1.2 and 2.1 as 2.1 and 2.2; their dependent step citations, endpoint boundary evidence, and derivation contract records were updated. tools/adopt-repair.mjs skipped this item, so its printed canonical numbering was applied manually and checked by a subsequent passing precheck.
- lem-hermitian-schur-support-is-contained-in-structural-fill, Proof 1.1: moved the justification group from before the displayed identity to the end of the complete step.
- thm-block-ldl-star-residual-with-actual-growth, Proof 1.1 and 2.1: moved the justification groups to the ends of the complete steps and retained each displayed identity within its step paragraph.
- thm-sparse-cholesky-structural-pattern-without-cancellation, Proof 4.1: kept the induction identity and explanation in the same step paragraph with its trailing justification group.
- thm-nested-dissection-grid-work-and-storage-bounds, Proof 2.1 and 2.2: moved the justification groups after the displayed work and storage estimates.
- ex-star-orderings-produce-different-sparse-fill, Verification 1.1, and ex-two-dimensional-poisson-nested-dissection-cost, Verification 1.1: moved the justification groups after the full positive-definiteness arguments.

The proof-format repairs preserve the mathematical claims, calculations, and references. No verification.judge record was present on the changed items.

## Validation

- Reflow and precheck were run on every changed item. Reflow reported unchanged files. The algorithm had 0 proof sections to check; all seven proof-bearing items passed precheck after the canonical threshold-LU numbering was adopted.
- Final renderer-based check: node tools/proof-layout.mjs on all eight changed item paths reported 8 items, 37 steps, 0 defects.

## Page verdicts

- sparse-direct-elimination-and-ordering (A): accepted. The summary's structural graph, Schur-support, pivot-status, roundoff, multifrontal, and grid-cost claims are supported by the opened items; its limitation to regular grids is stated correctly.
- sparse-direct-elimination-and-ordering-examples (B): accepted. The summary accurately describes the star-fill comparison, the two-dimensional Poisson example, and the need for a two-by-two pivot in the displayed indefinite example.

## Uneditable defects and blocker

None found. No blocker remains.

## Coverage note

All 21 assigned items and both assigned pages were reviewed, along with the page prerequisites, direct item suppliers, and transitive premises needed to check the reviewed numerical, graph, and norm arguments. Published supplier statements were used as premises after opening their source items; this pass did not recursively re-audit unrelated dependencies of those published suppliers. No web search was needed because the local arguments and sources resolved the mathematical questions encountered. No unresolved mathematical uncertainty remains.
