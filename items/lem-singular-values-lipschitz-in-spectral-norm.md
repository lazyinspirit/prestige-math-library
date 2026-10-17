---
id: lem-singular-values-lipschitz-in-spectral-norm
kind: lemma
title: "Singular values are Lipschitz in the spectral norm"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eckart-young-best-rank-k-approximation, def-operator-norm-on-a-finite-dimensional-inner-product-space]
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
sources:
  references:
    - title: "Lecture Notes on Matrix Computations, Theorem 6.1.12"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, Theorem 3"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
---

## Statement

Let $A,E\in\mathbb F^{m\times n}$, where $\mathbb F=\mathbb R$ or $\mathbb C$, and put $p=\min(m,n)$. Then for every $1\le i\le p$,
$$|\sigma_i(A+E)-\sigma_i(A)|\le\|E\|_2.$$

## Facts & Assumptions

**Given:** Matrices $A,E\in\mathbb F^{m\times n}$ and $1\le i\le p$.

[F1] [[thm-eckart-young-best-rank-k-approximation]]: $\sigma_i(A)$ is the minimum of $\|A-Z\|_2$ over matrices $Z$ of rank at most $i-1$; the same holds for $A+E$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the spectral norm is a norm and satisfies the triangle inequality.

## Proof

1.1 Choose a rank-at-most-$(i-1)$ SVD truncation $A_{i-1}$ of $A$. By [F1] and [F2], $\sigma_i(A+E)\le\|A+E-A_{i-1}\|_2\le\|A-A_{i-1}\|_2+\|E\|_2=\sigma_i(A)+\|E\|_2$. [F1, F2, choose]

2.1 Apply step 1.1 with $A+E$ in place of $A$ and $-E$ in place of $E$. This gives $\sigma_i(A)\le\sigma_i(A+E)+\|E\|_2$. The two one-sided inequalities give the stated absolute-value bound. [step 1.1, algebra] ∎
