---
id: alg-qc-two-level-unitary-elimination
kind: algorithm
title: Exact Two-Level Elimination of a Unitary
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-two-level-unitary
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

Input: an exact-arithmetic representation of $U\in U(N)$, $N\ge1$, supporting addition, multiplication, conjugation, nonnegative square roots, and exact zero tests. Output: a finite ordered factorization into two-level unitaries and a diagonal unitary. This is an exact algebraic procedure; no claim of a bit-time algorithm for arbitrary real input is made.

Initialize $M:=U$ and an empty chronological list. For each column $j=0,\ldots,N-2$, and for $r=N-1,N-2,\ldots,j+1$, set $a=M_{r-1,j}$ and $b=M_{r,j}$. If $b=0$, do nothing. Otherwise set $h=\sqrt{|a|^2+|b|^2}>0$ and left-multiply rows $(r-1,r)$ by
$$G=\frac1h\begin{pmatrix}\overline a&\overline b\\-b&a\end{pmatrix},$$
recording this two-level unitary in the order applied. Let the resulting matrix be $D$. Return the factorization $U=G_1^*\cdots G_s^*D$. In chronological circuit order, apply $D$ first and then $G_s^*,\ldots,G_1^*$.

## Facts & Assumptions

**Given:** $U^*U=UU^*=I_N$ and the exact-arithmetic operations and zero test stated in the input specification.

[F1] [[def-qc-two-level-unitary]]: a two-level unitary acts by its stated $2\times2$ unitary block on two selected basis coordinates and is identity on their orthogonal complement.

## Proof


1.1 If $b\ne0$, then $h>0$ and direct multiplication gives $G^*G=I_2$ and $G(a,b)^T=(h,0)^T$. Thus the row operation is defined and left multiplication by its coordinate embedding preserves unitarity of $M$. If $b=0$, skipping the operation leaves the desired entry zero. [given, F1, algebra]

2.1 Inductively, before processing column $j$, columns $0,\ldots,j-1$ have zero entries below their diagonal positions. Each row pair used for column $j$ has indices at least $j$, so both entries in every earlier column are zero and the row operation preserves those zeros. Descending $r$ therefore makes column $j$ zero below its diagonal without undoing a zero already made in that column. [step 1.1, induction]

3.1 After the finite loops, $D=G_s\cdots G_1U$ is upper triangular and unitary. Its first column has only its first entry nonzero, which has modulus one. Orthogonality with every later column forces the first entry of each later column to be zero. Removing the first row and column leaves an upper-triangular unitary block; induction proves that $D$ is diagonal with unit-modulus diagonal entries. [step 2.1, given, induction]

4.1 Rearranging $D=G_s\cdots G_1U$ gives $U=G_1^*\cdots G_s^*D$ exactly. There are at most $N(N-1)/2$ row eliminations and at most $N$ diagonal phases; the zero tests skip any already-zero entry. Under the convention that a matrix product acts on column states from right to left, the same identity orders the actions as $D$ first and then $G_s^*,\ldots,G_1^*$. [step 3.1, algebra] ∎
