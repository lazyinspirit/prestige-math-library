---
id: alg-multifrontal-cholesky-and-sparse-triangular-solves
kind: algorithm
title: Scalar multifrontal Cholesky and solves on the elimination forest
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-hermitian-structural-graph-adapter
  - def-symmetric-structural-elimination-graph-and-ordering
  - def-elimination-tree-and-column-reach
  - lem-elimination-tree-reach-contains-each-filled-neighbor
  - alg-sparse-cholesky-with-invalid-pivot-status
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 5, §5.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Definition

Input a Hermitian positive-definite matrix $A\in\mathbb C^{n\times n}$ with $n\ge1$, its Hermitian structural graph from [[def-hermitian-structural-graph-adapter]], and an ordering $\pi=(v_0,\ldots,v_{n-1})$. Let $P$ be the permutation matrix whose row $r$ is row $v_r$ of $I_n$, and put $B=PAP^*$. Use the filled graph and parent forest of [[def-symmetric-structural-elimination-graph-and-ordering]] and the column patterns of [[def-elimination-tree-and-column-reach]]. For each original vertex $v_r$, let its front index set be
$$F_r=\{v_r\}\cup N_r^+,$$
where $N_r^+$ is its later-neighbor set in the filled graph. Assign each nonzero off-diagonal matrix entry $A_{pq}$ and each diagonal entry $A_{pp}$ once to the front of the endpoint eliminated first (the diagonal goes to its own front); zero off-diagonal entries need no assignment. Treat front arrays as indexed by original-vertex labels, but store the factor in ordered coordinates of $B$: for $v_q\in F_r\setminus\{v_r\}$, its factor entry is $L_{qr}$, where $q>r$ is the ordering position. Initialize $L$ to zero on ordered diagonal and lower-triangular positions, allocating every position permitted by the filled column pattern, including structural zeros. Use the operation model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] for all finite arithmetic, including contribution assembly and solves. A range failure during assembly, factorization or solving returns **range-failure** with the current position.

Traverse fronts in increasing pivot position $r$ (every child has smaller position than its parent). At front $r$, initialize a zero dense Hermitian array $\Phi_r$ indexed by $F_r$ and add the entries assigned to $v_r$. Process the children in increasing pivot position $s$; for each child, add its stored contribution array to the entries whose indices lie in $F_s\setminus\{v_s\}$, using the common original-vertex labels. The inclusion needed for this addition is supplied by [[lem-elimination-tree-reach-contains-each-filled-neighbor]]. For the pivot $v_r$, let $d=(\Phi_r)_{v_rv_r}$. If it is not finite and positive, return **invalid-pivot**$(r,d)$; otherwise compute $l_{rr}=\sqrt d$ and, for each later position $q$ with $v_q\in F_r$, compute $l_{qr}=(\Phi_r)_{v_qv_r}/l_{rr}$ in increasing $q$. Apply [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] to each operation and return **range-failure**$(r)$ at the first range error. Store the computed diagonal and all entries $L_{qr}$ in the preallocated slots. For lower-triangular trailing positions with later positions $q\ge p>r$ and $v_q,v_p\in F_r$, in increasing $(q,p)$ order, update $(\Phi_r)_{v_qv_p}\leftarrow\operatorname{fl}((\Phi_r)_{v_qv_p}-l_{qr}\overline{l_{pr}})$; set the Hermitian counterpart by conjugation and keep the diagonal real. Send the trailing contribution array to the parent; at a root discard only the empty final remainder. A failed pivot or range operation stops the factorization with its indexed status. These scalar steps have the same exact pivot and Schur update as [[alg-sparse-cholesky-with-invalid-pivot-status]].

For a successful factor $L$, a solve with right-hand side $b$ uses these instructions:

1. Set $x=Pb$.
2. For $j=0,\ldots,n-1$, divide $x_j$ by $l_{jj}$, then for every stored $l_{ij}$ with $i>j$ in increasing $i$ set $x_i\leftarrow x_i-l_{ij}x_j$.
3. For $j=n-1,\ldots,0$, set $x_j\leftarrow (x_j-\sum_{i>j}\overline{l_{ij}}x_i)/\overline{l_{jj}}$, accumulating the sum from left to right in increasing $i$, using the backward-substitution convention of [[def-forward-and-back-substitution-for-triangular-systems]].
4. Return $P^*x$.

The factorization returns either $(P,L)$ or a pivot/range status. The solve returns the unique solution of $Az=b$ only after successful factorization; no finite-precision error guarantee is part of this procedure definition.
