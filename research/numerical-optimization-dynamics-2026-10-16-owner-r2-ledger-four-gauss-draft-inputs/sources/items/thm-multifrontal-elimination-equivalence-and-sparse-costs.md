---
id: thm-multifrontal-elimination-equivalence-and-sparse-costs
kind: theorem
title: Scalar multifrontal elimination is equivalent to sparse Cholesky with column-count costs
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-multifrontal-cholesky-and-sparse-triangular-solves
  - lem-elimination-tree-reach-contains-each-filled-neighbor
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 5, §5.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §§3 and 11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Assume exact arithmetic, a Hermitian positive-definite $A$, and a successful ordered factorization using [[alg-multifrontal-cholesky-and-sparse-triangular-solves]]. The fronts and contribution arrays give the same Cholesky factor as scalar elimination in ordering $\pi$. With $d_r=\ell_r+1=|F_r|$, the arithmetic work for assembly and scalar front updates is
$$O\!\left(\sum_{r=1}^n d_r^2\right),$$
the symbolic factor allocation has exactly $\sum_{r=1}^n d_r$ positions, and each forward/back substitution solve uses $O(\sum_r d_r)$ scalar operations. These are arithmetic and factor-storage counts; they are not wall-clock or total workspace bounds.

## Facts & Assumptions



**Given:** A Hermitian positive-definite matrix, an ordering, its filled graph and elimination forest, and exact-arithmetic multifrontal execution.

[F1] [[alg-multifrontal-cholesky-and-sparse-triangular-solves]]: Each front adds original entries and child contribution arrays, eliminates its one pivot by a Schur update, and stores one factor column.

[F2] [[lem-elimination-tree-reach-contains-each-filled-neighbor]]: For a child $s$ of $r$, $F_s\setminus\{v_s\}\subseteq F_r$.

[F3] [[lem-elimination-tree-reach-contains-each-filled-neighbor]]: Every later filled neighbor of a vertex lies on its parent path, so vertices in distinct descendant branches cannot have a filled edge.

[F4] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: Forward and backward substitution solve nonsingular triangular systems uniquely by the row recurrences stated in that theorem.

## Proof


1.1 We prove by induction from leaves to roots that the contribution returned from the subtree at $v_r$ is the Schur complement on $F_r\setminus\{v_r\}$ obtained by eliminating exactly that subtree's vertices from the corresponding principal block. At a leaf, the front consists of its assigned original entries; the scalar Schur update $C-bb^*/d$ is precisely the result of eliminating its one pivot. [given, F1, base, induction]

2.1 Let $v_r$ have children. By [F2], each child update is indexed inside $F_r$, so every extend-add is defined. By [F3], distinct child subtrees have no matrix coupling between their eliminated interiors: an edge between two such interiors would make the later endpoint a filled neighbor outside the earlier endpoint's parent path. Thus the combined child pivot block is block diagonal, $D=\operatorname{diag}(D_1,\ldots,D_q)$, and is coupled to the shared front by a block column $B=[B_1\ \cdots\ B_q]$ partitioned by child subtree. Each $D_h$ is nonsingular by the subtree induction hypothesis: its exact scalar factor has a unit lower-triangular factor and positive, hence nonzero, pivots. The resulting Schur update is $C-BD^{-1}B^*=C-\sum_hB_hD_h^{-1}B_h^*$, exactly the sum of the child contributions. Direct block multiplication verifies [step 1.1, F1, F2, F3, IH, induction, algebra]
$$
\begin{pmatrix}D&B^*\\B&C\end{pmatrix}
=
\begin{pmatrix}I&0\\BD^{-1}&I\end{pmatrix}
\begin{pmatrix}D&0\\0&C-BD^{-1}B^*\end{pmatrix}
\begin{pmatrix}I&D^{-1}B^*\\0&I\end{pmatrix}.
$$
For this front's scalar pivot $D=[d]$, the trailing block is $C-bb^*/d$. Thus the subtree Schur invariant holds at $v_r$. [step 1.1, F1, F2, F3, IH, induction, algebra]

3.1 The invariant at each root eliminates all vertices. Each pivot column is therefore computed from the same exact Schur complement as scalar elimination in $\pi$, so the multifrontal factors equal the scalar Cholesky factors. [step 2.1, F1, algebra]

3.2 Front $r$ has $d_r=\ell_r+1$ indices. Its dense scalar pivot update uses at most a constant multiple of $d_r^2$ multiplications and additions. Embedding and adding a child contribution touches at most that child's dense trailing block, whose entries are already counted by the child's $d_s^2$ bound. Summing over fronts gives $O(\sum_r d_r^2)$ arithmetic work. Each factor column stores one diagonal and $\ell_r$ lower entries, so the symbolic factor storage is exactly $\sum_r d_r$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 The forward column updates in [F1] solve $Lx=Pb$: after column $j$ is processed, row $j$ satisfies its equation, and the pivot contribution has been subtracted from each later row. This is the unique solution in [F4]. The descending conjugate updates solve $L^*y=x$ by the backward recurrence in [F4]. Since $PAP^*=LL^*$, these equations imply $PAP^*y=Pb$; multiplying by $P^*$ gives $A(P^*y)=b$. Thus $P^*y$ is the unique solution of $Az=b$. [step 3.1, F1, F4, algebra]

5.1 Each stored off-diagonal factor entry is visited once in each triangular solve, with one multiply and one subtraction; each diagonal contributes one division. Hence the two solves use $O(n+\sum_r\ell_r)=O(\sum_r d_r)$ operations, separate from the factorization work in step 3.2. [step 3.2, step 4.1, F1, algebra]

6.1 Step 3.1 gives scalar equivalence, step 3.2 gives factorization work and factor storage, and steps 4.1–5.1 give solve correctness and work. [step 3.1, step 3.2, step 4.1, step 5.1, discharge-induction] ∎
