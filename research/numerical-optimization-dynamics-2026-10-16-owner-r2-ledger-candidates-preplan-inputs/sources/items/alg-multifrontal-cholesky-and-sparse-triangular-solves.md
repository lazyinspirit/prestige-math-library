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

Input a Hermitian positive-definite matrix $A$, its Hermitian structural graph from [[def-hermitian-structural-graph-adapter]], and an ordering $\pi=(v_0,\ldots,v_{n-1})$. Let $P$ be the permutation matrix whose row $r$ is row $v_r$ of $I_n$, and put $B=PAP^*$. Use the filled graph and parent forest of [[def-symmetric-structural-elimination-graph-and-ordering]] and the column patterns of [[def-elimination-tree-and-column-reach]]. For each original vertex $v_r$, let its front index set be
$$F_r=\{v_r\}\cup N_r^+,$$
where $N_r^+$ is its later-neighbor set in the filled graph. Assign each original matrix entry $A_{pq}$ to the front of the endpoint eliminated first (to their common endpoint for a diagonal entry).

Process the elimination forest from leaves to roots. At front $r$, initialize a dense Hermitian array indexed by $F_r$ with the entries assigned to $v_r$. For each child $s$, add its stored contribution array to the entries whose indices lie in $F_s\setminus\{v_s\}$, using the common original-vertex labels. The inclusion needed for this addition is supplied by [[lem-elimination-tree-reach-contains-each-filled-neighbor]]. Apply the pivot, range, and invalid-pivot instructions of [[alg-sparse-cholesky-with-invalid-pivot-status]] to the scalar pivot $v_r$: store factor entries $L_{q r}$ for later vertices $v_q$ in the front and replace the trailing front block $C$ by its Schur update $C-bb^*/d$. Send this trailing contribution array to the parent; at a root discard only the empty final remainder. A failed pivot or range operation returns the same indexed status and stops the factorization.

For a successful factor $L$, a solve with right-hand side $b$ uses these instructions:

1. Set $x=Pb$.
2. For $j=0,\ldots,n-1$, divide $x_j$ by $l_{jj}$, then for every stored $l_{ij}$ with $i>j$ set $x_i\leftarrow x_i-l_{ij}x_j$.
3. For $j=n-1,\ldots,0$, set $x_j\leftarrow (x_j-\sum_{i>j}\overline{l_{ij}}x_i)/\overline{l_{jj}}$, using the backward-substitution convention of [[def-forward-and-back-substitution-for-triangular-systems]].
4. Return $P^*x$.

The factorization returns either $(P,L)$ or a pivot/range status. The solve returns the unique solution of $Az=b$ only after successful factorization; no finite-precision error guarantee is part of this procedure definition.
