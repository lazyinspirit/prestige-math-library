# Step 3a reader report — batch 2

Run: `numerical-optimization-dynamics-2026-10-16`  
Review date: 2026-10-17  
Role: `reader-2`

## Opened inventory

Assigned pages:

- `sparse-matrix-models-and-kernel-costs`
- `sparse-matrix-models-and-kernel-costs-examples`

Assigned items, reviewed in dependency order:

- `def-csr-matrix-with-stored-entry-semantics`
- `def-symmetric-structural-elimination-graph-and-ordering`
- `alg-csr-matrix-vector-product-with-validation`
- `thm-filled-graph-contains-schur-complement-support`
- `ex-csr-tridiagonal-matrix`
- `thm-csr-matvec-algorithm-terminates-with-status`
- `thm-csr-matvec-returns-the-represented-matrix-product`
- `thm-csr-storage-and-exact-matvec-cost`
- `ex-ordered-elimination-creates-fill`
- `ex-numerical-cancellation-within-filled-graph`
- `ex-csr-matvec-operation-count`
- `ex-csr-duplicates-and-explicit-zero-entry-count`

Page context opened from the A-page requirements: `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, and `krylov-subspaces-arnoldi-and-gmres`. I also opened the two items named in the A-page summary: `def-matrix-free-access-model-for-krylov-methods` and `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`.

Published mathematical suppliers opened for the assigned arguments included `def-field`, `def-matrix-space`, `def-finite-sum-in-a-commutative-monoid`, `def-function-space`, `def-matrix-product-and-identity-matrix`, `lem-of-zero-mult`, `lem-of-no-zero-divisors`, and `thm-rat-field`. To check the finite-sum reindexing and rational-field uses, I also opened `def-monoid-finite-product`, `thm-generalised-associativity`, `def-semigroup-and-monoid`, `def-finite-cardinality`, `def-injection-surjection-bijection`, `def-sum-over-a-finite-index-set`, `def-rat-operations`, `lem-rat-ops-well-defined`, `thm-int-comm-ring`, `lem-int-cancellation`, and `def-rationals`.

After changing the CSR algorithm definition, I checked its two other current-run consumers outside this assignment: `prop-sparse-unrestarted-gmres-work-and-storage` and `ex-two-pixel-pdhg-total-variation-step`. Both use the unchanged row-interval accumulation instructions and/or the separate cost theorem; neither relies on the removed termination sentence.

## Repairs and evidence

- `def-symmetric-structural-elimination-graph-and-ordering`, Definition: replaced the invalid cycle argument for the parent forest. A cycle with `q` vertices has `q` child-to-parent edges; since every vertex has at most one outgoing parent edge, each cycle vertex would have one outgoing edge on the cycle, producing a directed cycle. This contradicts the strict increase in ordering position along every parent edge.
- `alg-csr-matrix-vector-product-with-validation`, Definition: removed the sentence asserting that its validation and accumulation loops are bounded. That is a termination property and is proved in the separate theorem. The operational instructions and exact-arithmetic convention are unchanged.
- `thm-csr-matvec-algorithm-terminates-with-status`, Statement and Facts & Assumptions: specified that the row-pointer and column-index candidates are finite integer arrays, matching the algorithm's input type. No proof argument changed.
- `thm-filled-graph-contains-schur-complement-support`, title and Statement: specified off-diagonal support. A graph edge records an off-diagonal pair; the theorem does not encode diagonal entries. The matrix hypotheses, pivot condition, support inclusion, and clique conclusion are unchanged.
- `thm-csr-matvec-returns-the-represented-matrix-product`, Statement and Fact [L3]: identified `x` with its `n×1` column matrix for the cited matrix-product coordinate formula. This makes the cited dependency exact while preserving the same vector product.
- `ex-numerical-cancellation-within-filled-graph`, title: changed the title to say that cancellation zeros a numerical entry while the filled graph retains its edge, matching the displayed computation.
- `ex-ordered-elimination-creates-fill`, Verification step 2.1: changed “first pivot is `v₀=1`” to “first eliminated vertex is `v₀=1`”; `v₀` is the vertex label and the scalar pivot is `p₀=2`.
- A-page `sparse-matrix-models-and-kernel-costs`, summary: clarified that the support inclusion concerns each Schur complement's off-diagonal support.

Updated the batch-2 proof-contract quotations affected by the graph, algorithm, and theorem wording changes (16 source quotations), the termination theorem's L1 supplier interface, the matrix-product theorem's L3 supplier interface, and the `ex-ordered-elimination-creates-fill` step 2.1 derivation text. None of the changed items had a `verification.judge` record to remove.

## Defect not edited

`thm-rat-field`, Proof step 1.5 (published dependency): the step concludes `(0,b^2) ~ (0,1)` citing only [L2]. A rational representative needs a nonzero denominator; `b^2 != 0` follows from `b != 0` and the no-zero-divisor fact [L3], not from [L2]'s ring axioms. [L3] is already available in Facts & Assumptions, so adding that citation and the one-line implication closes this nonfatal citation defect. I did not edit the published item. The assigned consumer used for routing is `ex-csr-tridiagonal-matrix`.

## Page verdicts

- `sparse-matrix-models-and-kernel-costs`: pass after the off-diagonal support clarification. Its summary accurately limits the CSR claims to exact arithmetic and operation/storage counts and does not claim a stability, convergence, or general fill bound.
- `sparse-matrix-models-and-kernel-costs-examples`: pass. The summary matches the five examples and distinguishes the retained symbolic edge from the cancelled numerical entry.

## Checks and blocker

- Reflow: all seven changed item paths reported unchanged.
- Precheck: the five proof-bearing changed items passed; the two definition-like items returned zero checked proofs and zero failures.
- Proof layout: `7 items, 14 steps, 0 defects`.
- No blocker to completing this reader review. The published dependency citation defect remains routed for its owner.

## Coverage note

I opened both assigned pages, all twelve assigned items, the listed page context, and the local dependency statements needed for the reviewed calculations and proof steps. I did not independently fetch the bibliography PDFs; the assessed claims are supported by local definitions, computations, and proofs, and I did not use bibliography entries as substitutes for those arguments. No current-run dependency finding was needed; the only unedited finding is the published `thm-rat-field` citation noted above.
