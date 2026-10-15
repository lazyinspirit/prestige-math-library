---
id: thm-full-two-level-factorial-contrast-orthogonality
kind: theorem
title: "Orthogonality of the full two-level factorial contrasts"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-two-level-full-factorial-design
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - prop-standard-coordinate-inner-products
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 8, §§8.2 and 8.6"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §5.3.3.3.1, Two-level full factorial designs"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3331.htm"
---

## Statement

For the design in [[def-two-level-full-factorial-design]], let $c_A=(x_A(x))_{x\in\mathcal X_k}$ be the column indexed by $A\subseteq[k]$. Then
$$\langle c_A,c_B\rangle=\begin{cases}2^k,&A=B,\\0,&A\ne B.\end{cases}$$
Thus the columns are pairwise orthogonal and
$$X^{\mathsf T}X=2^kI_{2^k},\qquad 2^{-k}X^{\mathsf T}X=I_{2^k}.$$
This is a deterministic property of the design matrix.

## Facts & Assumptions

**Given:** An integer $k\ge1$, the full run set $\mathcal X_k$, and the columns $c_A$ from the Statement.

[F1] [[def-two-level-full-factorial-design]]: the runs are all sign vectors in $\{-1,+1\}^{[k]}$, and the column indexed by $A$ has entries $x_A=\prod_{j\in A}x_j$, with $x_\varnothing=1$.

[F2] [[prop-standard-coordinate-inner-products]]: the standard real coordinate pairing is $\langle u,v\rangle=\sum_i u_iv_i$.

[F3] [[def-orthogonal-vectors-sets-and-orthonormal-bases]]: two vectors are orthogonal exactly when their inner product is zero.

## Proof

**Proof technique:** direct sign cancellation over the symmetric difference.

1.1 For $A,B\subseteq[k]$, every factor in $A\cap B$ occurs twice in $x_Ax_B$ and has square $1$, while factors outside $A\triangle B$ do not occur. Hence $x_Ax_B=\prod_{j\in A\triangle B}x_j$. By [F2], $\langle c_A,c_B\rangle=\sum_{x\in\mathcal X_k}\prod_{j\in A\triangle B}x_j$. [given, F1, F2, algebra]

2.1 If $A=B$, then $A\triangle B=\varnothing$ and every summand in step 1.1 equals $1$, so the sum is $2^k$. If $A\ne B$, choose $j\in A\triangle B$ and pair each run $x$ with the run obtained by reversing only $x_j$. This is a fixed-point-free involution of $\mathcal X_k$ and reverses the sign of the summand, so the terms cancel in pairs and the sum is $0$. [step 1.1, F1, choose, algebra]

3.1 The matrix entry $(A,B)$ of $X^{\mathsf T}X$ is $\langle c_A,c_B\rangle$. Step 2.1 therefore gives $X^{\mathsf T}X=2^kI_{2^k}$ and the scaled identity; [F3] gives pairwise orthogonality of distinct columns. [F1, F3, step 1.1, step 2.1, algebra] ∎

