---
page: hierarchical-low-rank-matrices-and-error-propagation
title: Hierarchical low rank matrices and error propagation
status: published
items:
  - def-hlr-cluster-trees-and-geometric-admissibility
  - lem-hlr-balanced-cluster-tree-size-and-depth
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - alg-hlr-core-svd-recompression-with-tolerance
  - def-hlr-and-h2-block-matrix-representations
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - def-h2-nested-cluster-bases-and-interaction-lists
  - alg-hlr-block-matvec
  - alg-hlr-bottom-up-recompression
  - thm-hlr-separated-cauchy-block-rank-bound
  - alg-hlr-compress-exact-lu-factors
  - lem-hlr-bottom-up-recompression-error-bound
  - alg-hlr-block-addition
  - alg-hlr-block-product
  - thm-hlr-block-matvec-correct
  - alg-h2-matrix-vector-multiplication
  - thm-hlr-blockwise-error-propagation
  - thm-hlr-storage-and-matvec-complexity
  - thm-h2-matrix-vector-multiplication-correct
  - thm-hlr-approximate-factorization-residual-and-inverse-error
examples: []
---

For a finite matrix, the page first fixes ordered cluster trees, geometric admissibility, and a recursive block partition. Near blocks stay dense. Each admissible far block in an H representation is assumed to have rank at most the declared cap; admissibility alone does not prove that rank bound. The Cauchy example [[thm-hlr-separated-cauchy-block-rank-bound]] proves one explicit separated-kernel rank estimate.

Core-SVD recompression uses the compact factors without forming a dense block. Bottom-up recompression processes a factor-sum tree for each admissible block, retaining the sum of local discarded-tail bounds. The block matvec is exact for the represented matrix. Addition and product use fixed compatible partitions and local Frobenius tolerances; their global Frobenius error bounds follow from the disjoint block supports and the product perturbation identity in [[thm-hlr-blockwise-error-propagation]].

The complexity claims require the stated balanced tree and bounded-partition counts. Under those hypotheses, H storage and matvec cost are $O(kn\log(2n/k))$; nested H² bases with $O(n/k)$ total transfers and interactions give $O(kn)$ storage and matvec cost. The addition and product procedures do not receive the same rank-linear complexity claim.

For factorization, [[alg-hlr-compress-exact-lu-factors]] compresses supplied exact block LU factors and retains each local discarded-tail bound. [[thm-hlr-approximate-factorization-residual-and-inverse-error]] turns these into a residual and inverse-error certificate when $\|A^{-1}\|_2\eta<1$. This is an exact-arithmetic result; it does not claim to construct an H-LU factorization or certify floating-point residual computations.

The schematic below has two leaf clusters $I_0,I_1$. It assumes the diagonal pairs fail admissibility and the two cross pairs pass it. Gray cells are dense near blocks; blue cells are represented by factors of rank at most $k$. The picture illustrates the definitions only; every proof uses the block entries and factor formulas.

```tikz
\begin{tikzpicture}[
  block/.style={draw,minimum width=3.7cm,minimum height=1.05cm,align=center},
  every node/.style={font=\small}
]
\node[block,fill=gray!15] at (0,1.1) {row I0 × column I0\\dense D00 (near)};
\node[block,fill=blue!10] at (4,1.1) {row I0 × column I1\\U01 V01* (rank at most k)};
\node[block,fill=blue!10] at (0,-0.1) {row I1 × column I0\\U10 V10* (rank at most k)};
\node[block,fill=gray!15] at (4,-0.1) {row I1 × column I1\\dense D11 (near)};
\node at (-2.35,1.1) {row I0};
\node at (-2.35,-0.1) {row I1};
\node at (0,2.0) {column I0};
\node at (4,2.0) {column I1};
\end{tikzpicture}
```
