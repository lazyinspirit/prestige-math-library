---
id: thm-qc-two-level-unitary-elimination-correct
kind: theorem
title: Correctness and Termination of Two-Level Elimination
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - alg-qc-two-level-unitary-elimination
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-16}}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

For $U\in U(N)$, the elimination procedure of [[alg-qc-two-level-unitary-elimination]] terminates after at most $N(N-1)/2$ Givens steps and returns an exact factorization of $U$ into the recorded two-level adjoints followed by a diagonal unitary. The number of diagonal entries is $N$; entries equal to $1$ need no phase gate.

## Facts & Assumptions

**Given:** $U^*U=UU^*=I_N$ and the exact-arithmetic operations, zero tests, loop bounds, and update matrices specified in [[alg-qc-two-level-unitary-elimination]].

[F1] [[alg-qc-two-level-unitary-elimination]] defines the descending row updates and records each embedded $G$ in chronological order; it returns the formal product of their adjoints and the terminal matrix.

## Proof




1.1 If $b\ne0$, then $h>0$ and direct multiplication gives $G^*G=I_2$ and $G(a,b)^T=(h,0)^T$. Thus the row operation is defined and left multiplication by its coordinate embedding preserves unitarity of $M$. If $b=0$, skipping the operation leaves the desired entry zero. [given, F1, algebra]

2.1 Inductively, before processing column $j$, columns $0,\ldots,j-1$ have zero entries below their diagonal positions. Each row pair used for column $j$ has indices at least $j$, so both entries in every earlier column are zero and the row operation preserves those zeros. Descending $r$ therefore makes column $j$ zero below its diagonal without undoing a zero already made in that column. [step 1.1, induction]

3.1 After the finite loops, $D=G_s\cdots G_1U$ is upper triangular and unitary. Its first column has only its first entry nonzero, which has modulus one. Orthogonality with every later column forces the first entry of each later column to be zero. Removing the first row and column leaves an upper-triangular unitary block; induction proves that $D$ is diagonal with unit-modulus diagonal entries. [step 2.1, given, induction]

4.1 Rearranging $D=G_s\cdots G_1U$ gives $U=G_1^*\cdots G_s^*D$ exactly. The finite loops have $\sum_{j=0}^{N-2}(N-j-1)=N(N-1)/2$ iterations (zero for $N=1$), with at most one row elimination per iteration, so they terminate with at most that many eliminations and at most $N$ diagonal phases; the zero tests skip any already-zero entry. Under the convention that a matrix product acts on column states from right to left, the same identity orders the actions as $D$ first and then $G_s^*,\ldots,G_1^*$. [step 3.1, algebra] ∎
