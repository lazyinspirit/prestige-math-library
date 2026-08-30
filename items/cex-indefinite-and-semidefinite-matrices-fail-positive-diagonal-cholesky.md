---
id: cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky
kind: counterexample
title: "Indefinite and semidefinite matrices can both fail positive-diagonal Cholesky"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.9"
      url: "https://fncbook.com/structure/"
---

## Statement refuted

Indefinite matrices, and even positive-semidefinite singular matrices, admit
Cholesky factorisations with positive diagonal.

## Facts & Assumptions

**Given:** The matrices
$$A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\0&0\end{pmatrix}.$$

[L1] A matrix admits a Cholesky factorisation with positive diagonal exactly
when it is Hermitian positive definite
([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

## Counterexample

**Proof technique:** direct.

1.1 The matrix $A$ is Hermitian, but with $x=(0,1)^{\mathsf T}$ one has $x^*Ax=-1<0$, so $A$ is not positive definite. Therefore [L1] forbids a positive-diagonal Cholesky factorisation of $A$. [given, L1, algebra]

1.2 The matrix $B$ is positive semidefinite but singular. If $B=LL^*$ with positive diagonal, then every diagonal entry of $L$ is nonzero, so $L$ would be invertible and $B$ would be invertible as well, a contradiction. Hence $B$ also has no such Cholesky factorisation. [given, L1, algebra]

2.1 Steps 1.1-1.2 refute the statement in both the indefinite and the merely semidefinite cases. [step 1.1, step 1.2] ∎
