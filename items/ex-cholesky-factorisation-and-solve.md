---
id: ex-cholesky-factorisation-and-solve
kind: example
title: "A Cholesky factorisation solves a small positive-definite system efficiently"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Example 2.9.3"
      url: "https://fncbook.com/structure/"
---

## Example

The symmetric positive-definite matrix
$$A=\begin{pmatrix}4&2\\2&3\end{pmatrix}$$
has Cholesky factor
$$L=\begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix},$$
and for $b=(6,5)^{\mathsf T}$ the solve $Ax=b$ gives $x=(1,1)^{\mathsf T}$.

## Facts & Assumptions

**Given:** The displayed matrix $A$, the candidate factor $L$, and $b=(6,5)^{\mathsf T}$.

[L1] Hermitian positive-definite matrices admit a unique Cholesky factorisation with positive diagonal ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[L2] Cholesky solves $Ax=b$ by two triangular substitutions ([[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]]).

## Verification

**Proof technique:** direct.

1.1 Direct multiplication gives $$ LL^{\mathsf T}= \begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix} \begin{pmatrix}2&1\\0&\sqrt2\end{pmatrix} = \begin{pmatrix}4&2\\2&3\end{pmatrix}=A, $$ so the displayed matrix is a Cholesky factor. [given, L1, algebra]

2.1 Solve $Ly=b$: $2y_1=6$ and $y_1+\sqrt2\,y_2=5$, so $y_1=3$ and $y_2=\sqrt2$. Then solve $L^{\mathsf T}x=y$: $\sqrt2\,x_2=\sqrt2$ and $2x_1+x_2=3$, hence $x_2=1$ and $x_1=1$. [step 1.1, L2, algebra]

3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
