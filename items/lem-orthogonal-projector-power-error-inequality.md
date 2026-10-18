---
id: lem-orthogonal-projector-power-error-inequality
kind: lemma
title: Orthogonal-projector power error inequality
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [thm-singular-value-decomposition, thm-non-negative-operator-characterisations, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value, thm-jensen-inequality-for-expectation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Proposition 8.6 and Theorem 9.2"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Lemma 11.8"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $A\in F^{m\times n}$, let $P$ be an orthogonal projector on $F^m$, and
let $q\ge0$ be an integer. Then
$$\|(I-P)A\|_2\le\|(I-P)(AA^*)^qA\|_2^{1/(2q+1)}.$$

## Facts & Assumptions

**Given:** A finite real or complex matrix $A$, an orthogonal projector $P$, and an integer $q\ge0$.

[F1] $A$ has an SVD, and its squared singular values diagonalize $AA^*$ ([[thm-singular-value-decomposition]]).

[F2] Positive semidefinite finite-dimensional operators have an orthonormal eigenbasis ([[thm-non-negative-operator-characterisations]]).

[F3] The spectral norm of a positive semidefinite operator is its largest eigenvalue ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-operator-norm-is-the-largest-singular-value]]).

[F4] Jensen's inequality holds for finite probability distributions ([[thm-jensen-inequality-for-expectation]]).

## Proof

1.1 Choose an SVD $A=U\Sigma V^*$ and put $D=\Sigma\Sigma^*$ and $R=U^*(I-P)U$. Then $D$ is diagonal positive semidefinite and $R$ is an orthogonal projector. By [F1]–[F3], $\|(I-P)A\|_2^2=\|RDR\|_2$ and $\|(I-P)(AA^*)^qA\|_2^2=\|RD^{2q+1}R\|_2$. [F1, F2, F3, algebra]

2.1 If $\lambda=\|RDR\|_2=0$, [step 1.1] gives $\|(I-P)A\|_2=0$, so the asserted inequality follows. If $\lambda>0$, choose a unit eigenvector $x$ for the top eigenvalue of $RDR$; then $Rx=x$ and $\lambda=x^*Dx=\sum_i d_i|x_i|^2$, with $d_i\ge0$. The weights $|x_i|^2$ sum to $1$, so [F4] for $t\mapsto t^{2q+1}$ gives $\lambda^{2q+1}\le\sum_i d_i^{2q+1}|x_i|^2=x^*D^{2q+1}x\le\|RD^{2q+1}R\|_2$. [step 1.1, F2, F3, F4, choose, algebra]

3.1 Substitute $\lambda=\|(I-P)A\|_2^2$ from step 1.1 into step 2.1 and take the nonnegative $(2q+1)$st root. This yields the asserted inequality, also for $q=0$. [step 1.1, step 2.1, algebra] ∎
