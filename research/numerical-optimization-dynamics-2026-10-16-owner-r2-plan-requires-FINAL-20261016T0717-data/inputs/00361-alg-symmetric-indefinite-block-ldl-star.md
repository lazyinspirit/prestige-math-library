---
id: alg-symmetric-indefinite-block-ldl-star
kind: algorithm
title: Sparse symmetric-indefinite block LDL* with threshold tests and failure status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hermitian-structural-graph-adapter
  - def-symmetric-structural-elimination-graph-and-ordering
  - def-permutation-matrix-partial-pivoting-and-pivot-growth
  - alg-certified-hermitian-one-and-two-by-two-ldl-kernel
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

The exact-arithmetic branch is specified first; the finite-precision branch below implements the same declared pivots by certified real-component kernels. Input a Hermitian $A\in\mathbb C^{n\times n}$, an ordering $\pi=(v_0,\ldots,v_{n-1})$ and its simultaneous permutation matrix $P$ in the convention of [[def-permutation-matrix-partial-pivoting-and-pivot-growth]], an ordered partition of the permuted positions into consecutive blocks of size $1$ or $2$, and a threshold $\theta\in(0,1]$. Apply $P$ once and maintain the Hermitian active Schur complement of $B=PAP^*$. Form the structural graph from [[def-hermitian-structural-graph-adapter]], then relabel its vertex $v_i$ by ordered position $i$; use the graph and fill convention of [[def-symmetric-structural-elimination-graph-and-ordering]] on this position-labeled graph. At stage $r$, the next declared block is the leading active block. For a $1\times1$ block at index $t$, require $d=a_{tt}\ne0$ and
$$\max_{i\ne t,\ i\text{ active}}|a_{it}|\le\theta^{-1}|d|.$$
For a declared $2\times2$ pair $(s,t)$, form the Hermitian principal block
$$D=\begin{pmatrix}a_{ss}&a_{st}\\\overline{a_{st}}&a_{tt}\end{pmatrix}.$$
Require $\det D\ne0$, and let $c_1=\max_{i\notin\{s,t\}}|a_{is}|$ and $c_2=\max_{i\notin\{s,t\}}|a_{it}|$, with an empty maximum equal to zero. Accept the pair only if
$$|D^{-1}|\begin{pmatrix}c_1\\c_2\end{pmatrix}
\le\theta^{-1}\begin{pmatrix}1\\1\end{pmatrix}$$
componentwise. If the declared block fails its test, return **pivot-failure**$(r)$.

Write the active matrix as
$$\begin{pmatrix}D&B^*\\B&C\end{pmatrix}.$$
Compute the block multiplier $M=BD^{-1}$ and the trailing update $C-BD^{-1}B^*$, retaining all positions allowed by the symbolic graph even when their current numerical value is zero. Symbolically, for the pivot-block index set $J$, let $N(J)$ be the union of its active graph neighbors; remove $J$ and connect every pair of distinct vertices in $N(J)$. Store $D$ as the next diagonal block and continue on the trailing matrix. On completion return $(P,L,D_{\rm blk})$, where $L$ is unit lower block-triangular and $D_{\rm blk}$ is block diagonal. The method may return **pivot-failure**$(r)$ on a nonsingular input when the declared pivot sequence contains a block that fails its test; it asserts no universal growth bound.

In the finite-precision branch, at each declared block use [[alg-certified-hermitian-one-and-two-by-two-ldl-kernel]] with the same threshold, permutation and symbolic block-neighbor clique. Store its returned $D_r,\widehat M_r$ in $D_{\rm blk},\widehat L$, and continue on its Hermitian $\widehat S_{r+1}$. Return `range-failure`, `pivot-failure` or `pivot-inconclusive` with stage index and partial factors as specified by the kernel. A successful run returns $(P,\widehat L,D_{\rm blk})$ together with its pivot certificates. Exact test semantics are retained: only certified admissible blocks are accepted; an unresolved determinant or threshold is inconclusive. No general complex division, automatic pivot existence or universal factor-growth guarantee is assumed.
