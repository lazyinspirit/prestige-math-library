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
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

The exact-arithmetic branch is specified first; the finite-precision branch below implements the same declared pivots by certified real-component kernels. Input a Hermitian $A\in\mathbb C^{n\times n}$, an ordering $\pi=(v_0,\ldots,v_{n-1})$ and its simultaneous permutation matrix $P$ in the convention of [[def-permutation-matrix-partial-pivoting-and-pivot-growth]], an ordered partition of all permuted positions into consecutive blocks of size $1$ or $2$, and a threshold $\theta\in(0,1]$. The partition is exhaustive and disjoint; for $n=0$ it is empty and $P$ is the unique empty permutation matrix (the extension of the referenced row convention to dimension zero). Apply $P$ once and initialize the exact active matrix $S=PAP^*$, $L=I_n$, and the block-diagonal output array $D_{\rm blk}=0$. Scalar complex absolute values mean exact complex moduli; $|(D_r^{-1})|$ below means entrywise absolute value, and vector inequalities are componentwise. Form the structural graph from [[def-hermitian-structural-graph-adapter]], then relabel its vertex $v_i$ by ordered position $i$; use the graph and fill convention of [[def-symmetric-structural-elimination-graph-and-ordering]] on this position-labeled graph. At stage $r$, let $J_r$ be the next declared block, which is the leading active block, and let $R_r$ be the remaining positions after $J_r$. Write the current active matrix as
$$S=\begin{pmatrix}D_r&B_r^*\\B_r&C_r\end{pmatrix},$$
with the blocks indexed by $J_r,R_r$. For a $1\times1$ block $J_r=\{t\}$, write $D_r=[d_r]$ and require $d_r=S_{tt}\ne0$ and
$$\max_{i\in R_r}|S_{it}|\le\theta^{-1}|d_r|.$$
For a $2\times2$ block $J_r=\{s,t\}$, $D_r=S_{J_r,J_r}$ is the Hermitian principal block
$$D_r=\begin{pmatrix}S_{ss}&S_{st}\\\overline{S_{st}}&S_{tt}\end{pmatrix}.$$
Require $\det D_r\ne0$, and let $c_1=\max_{i\in R_r}|(B_r)_{i1}|$ and $c_2=\max_{i\in R_r}|(B_r)_{i2}|$, with an empty maximum equal to zero. Accept the pair only if
$$\bigl(|(D_r^{-1})_{ij}|\bigr)_{i,j=1}^2\begin{pmatrix}c_1\\c_2\end{pmatrix} \le\theta^{-1}\begin{pmatrix}1\\1\end{pmatrix}$$
componentwise, where scalar absolute values are complex moduli. If a declared block fails its test, return **pivot-failure**$(r)$.

For each accepted block in the exact branch, compute $M_r=B_rD_r^{-1}$, store $D_r$ in the $J_r\times J_r$ block of $D_{\rm blk}$ and $M_r$ in the $R_r\times J_r$ block of $L$, and update the active trailing matrix to $C_r-B_rD_r^{-1}B_r^*$. In the symbolic graph, let $N(J_r)$ be the union of the active graph neighbors of the vertices in $J_r$; remove $J_r$ and connect every pair of distinct vertices in $N(J_r)$. Retain all positions allowed by this symbolic update, including positions whose current numerical value is zero. If a block fails its test, return **pivot-failure**$(r)$ with no factor arrays. On completion return $(P,L,D_{\rm blk})$, where $L$ is unit lower block-triangular and $D_{\rm blk}$ is block diagonal; in exact arithmetic $PAP^*=LD_{\rm blk}L^*$, including the empty zero-dimensional case. The exact branch makes no universal growth bound.

For the finite-precision branch, additionally supply the kernel's floating-point format with unit roundoff $0<u<1$ and a nonnegative integer certificate budget $b_r$ for each declared block. The input entries must be stored values in that format. In this branch, independently initialize the stored active matrix $S=PAP^*$, $\widehat L=I_n$, and $D_{\rm blk}=0$. At each declared block call [[alg-certified-hermitian-one-and-two-by-two-ldl-kernel]] on $(D_r,B_r,C_r)$ with threshold $\theta$, unit roundoff $u$, a fresh controller budget $b_r$, and the same symbolic block-neighbor clique. Budgets are local to their calls; unused units do not carry to another stage. On kernel success, store its returned pivot $D_r$ in the $J_r\times J_r$ block of $D_{\rm blk}$, store $\widehat M_r$ in the $R_r\times J_r$ block of $\widehat L$, and continue on its Hermitian $\widehat S_{r+1}$. On any kernel failure, return its `range-failure`, `pivot-failure` or `pivot-inconclusive` status together with the outer stage index $r$; discard scratch data for that block and return no factor arrays. On completion return $(P,\widehat L,D_{\rm blk})$ together with its pivot certificates. Only certified admissible blocks are accepted; unresolved determinant or threshold tests are inconclusive. No general complex division, automatic pivot existence or universal factor-growth guarantee is assumed.
