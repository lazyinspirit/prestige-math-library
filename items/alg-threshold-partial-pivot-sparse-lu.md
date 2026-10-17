---
id: alg-threshold-partial-pivot-sparse-lu
kind: algorithm
title: Threshold partial-pivot sparse LU with explicit fill and failure statuses
status: published
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

Input a nonsingular real matrix $A\in\mathbb R^{n\times n}$ with $n\ge1$, an initial simultaneous row-and-column permutation matrix $P$ under the row-action convention of [[def-permutation-matrix-partial-pivoting-and-pivot-growth]], and a threshold $\theta\in(0,1]$. Choose the exact-arithmetic branch or the finite-precision branch. In the latter, additionally supply a format from [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]; the entries of $A$ must already be stored values in that format, with no input conversion. The exact-arithmetic branch permits arbitrary real entries and evaluates every scalar operation exactly, without finite-format range restrictions. Initialize the active matrix $S^{(0)}=PAP^T$ by permuted copies, the accumulated row permutation $Q=I_n$, the unit lower-triangular factor $L=I_n$, and the upper-triangular factor $U=0$. Treat an unstored active entry as zero. In finite precision every real scalar operation uses the supplied model; if an exact intermediate is nonzero and subnormal, overflows, or the operation reports range failure, return **range-failure** with its stage. Pivot tests and tie-breaking comparisons are exact guards on current values. For $k=0,\ldots,n-1$, ties for a maximum are resolved by choosing the smallest current row index.

At stage $k$, let $m_k=\max_{i\ge k}|S^{(k)}_{ik}|$. If $m_k=0$, return **singular-pivot**$(k)$. If $|S^{(k)}_{kk}|\ge\theta m_k$, select row $p=k$; otherwise select the smallest row attaining $m_k$. If $p\ne k$, swap rows $p$ and $k$ of the active matrix and the already stored entries in columns $0,\ldots,k-1$ of those rows of $L$. Also replace $Q$ by $E_{kp}Q$, where $E_{kp}$ is the permutation matrix swapping rows $k$ and $p$. Do not change the previously stored rows of $U$. If the selected pivot is zero, return **singular-pivot**$(k)$.

Save the active pivot row by setting $U_{kj}=S^{(k)}_{kj}$ for every $j\ge k$; entries $U_{kj}$ with $j<k$ remain zero. Set $L_{ik}=S^{(k)}_{ik}/S^{(k)}_{kk}$ for every $i>k$, interpreting a missing $S^{(k)}_{ik}$ as zero. For every $i,j>k$, update
$$S^{(k+1)}_{ij}=S^{(k)}_{ij}-L_{ik}U_{kj}.$$
In a sparse representation it suffices to visit positions where $S^{(k)}_{ij}\ne0$ or $L_{ik}U_{kj}\ne0$; missing entries in this formula are zero. Allocate any position whose rounded update is nonzero; this is numerical fill. If an arithmetic operation is not representable or reports a range error, return **range-failure** with its stage. Any failure return is a status only and asserts no factorization. On success return $(Q,P,L,U)$. In exact arithmetic the updates give $QPAP^T=LU$; the procedure makes no claim of a universal fill or growth bound.
