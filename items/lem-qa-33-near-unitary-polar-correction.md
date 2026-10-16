---
id: lem-qa-33-near-unitary-polar-correction
kind: lemma
title: Polar correction of a near-unitary matrix
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-operator-norm-is-the-largest-singular-value
justified_by: []
proof_strategy: direct
axiom_use: None; finite-dimensional spectral decomposition is choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.3, PDF pp. 118–120
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 181–184
---

## Statement

Let $U$ be unitary on a nonzero finite-dimensional complex inner-product space and let $M$ be an endomorphism with $\|M-U\|\le\varepsilon\le1/8$. Then $M$ is invertible and its polar unitary $Q=M(M^*M)^{-1/2}$ satisfies $\|Q-U\|\le2\varepsilon$. The inverse square root is defined by the positive spectral square root. When $M$ has effectively computable entries in fixed dimension, the inverse square root also has an effective matrix approximation: expand $(I+X)^{-1/2}$ at $X=M^*M-I$, whose norm is less than $1/2$, and truncate the absolutely convergent binomial series.

## Facts & Assumptions

**Given:** A finite-dimensional space, a unitary $U$, and $\|M-U\|\le\varepsilon\le1/8$.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal endomorphism has an orthonormal eigenbasis.

[F2] [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the largest singular value.

## Proof

1.1 For every vector $v$, $\|Mv\|\ge\|Uv\|-\|(M-U)v\|\ge(1-\varepsilon)\|v\|$. Thus $M$ is injective and hence bijective in finite equal dimension. The eigenvalues of $M^*M$ are $\sigma_j^2$, where each singular value obeys $1-\varepsilon\le\sigma_j\le1+\varepsilon$ by the triangle inequality and [F2]. [given, F2, algebra]

2.1 By [F1], define $(M^*M)^{-1/2}$ by applying the positive scalar inverse-square-root to its positive eigenvalues. Then $Q^*Q=I$, so $Q$ is unitary; moreover the singular-value decomposition, obtained by diagonalizing $M^*M$, gives $\|Q-M\|=\max_j|1-\sigma_j|\le\varepsilon$. Consequently $\|Q-U\|\le\|Q-M\|+\|M-U\|\le2\varepsilon$. Finally, $X=M^*M-I$ has norm at most $2\varepsilon+\varepsilon^2\le17/64<1/2$; the binomial series for $(I+X)^{-1/2}$ converges absolutely in operator norm, and its geometric tail bound gives effective truncations from effective entries of $M$. [F1, step 1.1, algebra] ∎
