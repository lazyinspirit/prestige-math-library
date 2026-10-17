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
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
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

[F1] [[alg-multifrontal-cholesky-and-sparse-triangular-solves]]: Each nonzero off-diagonal entry and each diagonal entry is assigned once to its earliest endpoint's front; each front adds child contribution arrays, eliminates its one pivot by a Schur update, and retains every permitted symbolic factor slot.

[F2] [[lem-elimination-tree-reach-contains-each-filled-neighbor]]: For a child $s$ of $r$, $F_s\setminus\{v_s\}\subseteq F_r$.

[F3] [[lem-elimination-tree-reach-contains-each-filled-neighbor]]: Every later filled neighbor of a vertex lies on its parent path, so vertices in distinct descendant branches cannot have a filled edge.

[F4] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: Forward and backward substitution solve nonsingular triangular systems uniquely by the row recurrences stated in that theorem.

[F5] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: Every Hermitian positive-definite matrix has an exact Cholesky factor with positive diagonal, hence is nonsingular.

## Proof


1.1 For each vertex $v_r$, let $T_r$ be its subtree in the elimination forest and let $X_r=F_r\setminus\{v_r\}$. Define the local matrix for $T_r$ on $T_r\cup X_r$ to contain exactly the original entries assigned to fronts in $T_r$; its $X_r\times X_r$ block is zero, since entries wholly within $X_r$ are assigned to later fronts. If $u\in T_r$ and $w\notin T_r\cup X_r$ had an original edge, then either $w$ is earlier than $u$, making $u$ a later filled neighbor and ancestor of $w$, which would put $w$ in $T_r$, or $w$ is later than $u$, making $w$ a later filled neighbor and ancestor of $u$. In the latter case, repeated application of the child-column containment in [F2] from $u$ up to $v_r$ puts $w$ in $F_r$; since $w\ne v_r$ and $w\notin T_r$, it belongs to $X_r$. Both cases contradict the choice of $w$ by [F2,F3]. The induction invariant is that the returned array is the Schur contribution on $X_r$ after eliminating $T_r$ from this local matrix. If $v_r$ is a leaf, every entry assigned to its front has at least one endpoint $v_r$, so its initialized front is exactly this local matrix, with zero external-external block. The scalar update $C-bb^*/d$ therefore returns its Schur contribution. [given, F1, F2, F3, base, induction]

2.1 Let $v_r$ have children $v_{s_1},\ldots,v_{s_q}$. By [F2], each child interface $X_{s_h}$ lies in $F_r$, so every extend-add is defined. By [F3], there is no original matrix coupling between interiors of distinct child subtrees: such an edge would make its later endpoint a filled neighbor outside the earlier endpoint's parent path. Form the local matrix on the union of those child interiors and $F_r$, using only original entries assigned to these child subtrees or to $v_r$ and leaving entries wholly in $X_r$ zero. Its child-interior block is $D=\operatorname{diag}(D_1,\ldots,D_q)$, and its coupling to the current front is $B=[B_1\ \cdots\ B_q]$ partitioned by child subtree. Each $D_h=A[T_{s_h},T_{s_h}]$ is a principal submatrix of the positive-definite $A$, so it is positive definite; [F5] gives a Cholesky factor with positive diagonal and therefore shows $D_h$ is nonsingular. Its Schur complement on the current front is $C-BD^{-1}B^*=C-\sum_hB_hD_h^{-1}B_h^*$. The correction $-BD^{-1}B^*=-\sum_hB_hD_h^{-1}B_h^*$ is exactly the sum of child contributions by the induction invariant; adding them to the entries assigned to $v_r$ assembles this same local Schur complement. The pivot update $C-bb^*/d$ then eliminates $v_r$ and proves the invariant for $T_r$. [step 1.1, F1, F2, F3, F5, IH, induction, algebra]
3.1 The invariant at each root eliminates all vertices. Each pivot column is therefore computed from the same exact Schur complement as scalar elimination in $\pi$, so the multifrontal factors equal the scalar Cholesky factors. [step 2.1, F1, algebra]

3.2 Front $r$ has $d_r=\ell_r+1$ indices. Its dense scalar pivot update and initialization from assigned entries use at most a constant multiple of $d_r^2$ arithmetic operations. Embedding and adding a child contribution touches at most that child's dense trailing block, whose entries are already counted by the child's $d_s^2$ bound. Summing over fronts gives $O(\sum_r d_r^2)$ arithmetic work. By [F1], each factor column retains one diagonal slot and all $\ell_r$ later-neighbor slots, including structural zeros, so symbolic factor storage is exactly $\sum_r d_r$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 The forward column updates in [F1] solve $Lx=Pb$: after column $j$ is processed, row $j$ satisfies its equation, and the pivot contribution has been subtracted from each later row. This is the unique solution in [F4]. The descending conjugate updates solve $L^*y=x$ by the backward recurrence in [F4]. Since $PAP^*=LL^*$, these equations imply $PAP^*y=Pb$; multiplying by $P^*$ gives $A(P^*y)=b$. Thus $P^*y$ is the unique solution of $Az=b$. [step 3.1, F1, F4, algebra]

5.1 Each stored off-diagonal factor entry is visited once in each triangular solve, with one multiply and one subtraction; each diagonal contributes one division. Hence the two solves use $O(n+\sum_r\ell_r)=O(\sum_r d_r)$ operations, separate from the factorization work in step 3.2. [step 3.2, step 4.1, F1, algebra]

6.1 Step 3.1 gives scalar equivalence, step 3.2 gives factorization work and factor storage, and steps 4.1–5.1 give solve correctness and work. [step 3.1, step 3.2, step 4.1, step 5.1, discharge-induction] ∎
