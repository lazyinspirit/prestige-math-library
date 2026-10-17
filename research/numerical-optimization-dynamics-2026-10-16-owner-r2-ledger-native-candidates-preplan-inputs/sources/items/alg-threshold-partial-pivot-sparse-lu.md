---
id: alg-threshold-partial-pivot-sparse-lu
kind: algorithm
title: Threshold partial-pivot sparse LU with explicit fill and failure statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-permutation-matrix-partial-pivoting-and-pivot-growth
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 6, §6.1 and Chapter 7, §7.3.1"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §7.3.1"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
---

## Definition

Input a nonsingular real matrix $A\in\mathbb R^{n\times n}$, an initial simultaneous row-and-column permutation matrix $P$ under the row-action convention of [[def-permutation-matrix-partial-pivoting-and-pivot-growth]], and a threshold $\theta\in(0,1]$. Start from $S^{(0)}=PAP^T$. Maintain a row permutation $Q$, a unit lower-triangular factor $L$, and the current active matrix. Every real scalar operation uses [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]; if an exact intermediate is nonzero and subnormal, overflows, or the operation reports range failure, return **range-failure** at its stage. The pivot tests and tie-breaking comparisons are exact guards on the current stored values. For $k=0,\ldots,n-1$, ties for a maximum are resolved by choosing the smallest current row index.

At stage $k$, let $m_k=\max_{i\ge k}|S^{(k)}_{ik}|$. If $m_k=0$, return **singular-pivot**$(k)$. If $|S^{(k)}_{kk}|\ge\theta m_k$, select row $p=k$; otherwise select a row $p$ attaining $m_k$. Swap rows $p$ and $k$ of the active matrix and the already stored entries of those rows of $L$, and record the swap in $Q$. If the selected pivot is zero, return **singular-pivot**$(k)$.

For each $i>k$ with a currently stored or newly generated entry in column $k$, compute $l_{ik}=S^{(k)}_{ik}/S^{(k)}_{kk}$ and update each active entry by
$$S^{(k+1)}_{ij}=S^{(k)}_{ij}-l_{ik}S^{(k)}_{kj},\qquad i,j>k.$$
Allocate any position whose update is nonzero; this is numerical fill. If an arithmetic operation is not representable or reports a range error, return **range-failure**$(k)$. Continue until $k=n$. On success return $(Q,P,L,U)$, where the row and initial symmetric permutations are explicit. The procedure makes no claim of a universal fill or growth bound.
