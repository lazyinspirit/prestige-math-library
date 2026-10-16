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
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

For $U\in U(N)$, the elimination procedure of [[alg-qc-two-level-unitary-elimination]] terminates after at most $N(N-1)/2$ Givens steps and returns an exact factorization of $U$ into the recorded two-level adjoints followed by a diagonal unitary. The number of diagonal entries is $N$; entries equal to $1$ need no phase gate.

## Facts & Assumptions

**Given:** $U\in U(N)$ and the loop bounds and update rule of [[alg-qc-two-level-unitary-elimination]].

[F1] [[alg-qc-two-level-unitary-elimination]]: the row-elimination loops run over $j=0,\ldots,N-2$ and $r=N-1,\ldots,j+1$, preserve unitarity, and return $U=G_1^*\cdots G_s^*D$.

## Proof

1.1 For fixed $j$, the inner loop has $N-j-1$ iterations. Summing over $j=0,\ldots,N-2$ gives $\sum_{j=0}^{N-2}(N-j-1)=N(N-1)/2$, and each iteration performs at most one Givens operation. The loops are finite, so the procedure terminates. [given, F1, algebra]

1.2 At each non-skipped iteration the embedded $G$ is unitary by the calculation in [F1]; skipped iterations are identity updates. Thus all left products remain unitary. The previous-column zero invariant and the final triangular-unitary argument of [F1] show the terminal matrix is diagonal with unit-modulus entries. [F1, induction]

2.1 The left-product identity for the terminal matrix rearranges to the exact factorization in the Statement. No scalar quotient was taken, so every phase in $U$ is retained. The circuit acts in chronological order $D,G_s^*,\ldots,G_1^*$ because state evolution multiplies later gates on the left. [F1, step 1.1, algebra] ∎
