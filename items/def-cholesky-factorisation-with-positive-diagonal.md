---
id: def-cholesky-factorisation-with-positive-diagonal
kind: definition
title: "Hermitian positive-definite matrices and Cholesky factorisation A = LL* with positive diagonal"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sesquilinear-and-hermitian-forms-over-a-field-with-involution, def-triangular-and-diagonal-matrices-over-a-commutative-ring]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.9"
      url: "https://fncbook.com/structure/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Definition

Let $n\ge 1$ and $A\in M_n(\mathbb C)$; over $\mathbb R$ the same definition uses transpose
instead of conjugate transpose.

The matrix $A$ is **Hermitian positive definite** if $A=A^*$ and

$$x^*Ax>0$$for every nonzero vector $x\in \mathbb C^n$. A **Cholesky factorisation with positive diagonal** of $A$ is a factorisation$$A=LL^*,$$

where $L$ is lower triangular and every diagonal entry of $L$ is a positive real
number.

The Hermitian terminology matches
[[def-sesquilinear-and-hermitian-forms-over-a-field-with-involution]], and the
triangular terminology matches
[[def-triangular-and-diagonal-matrices-over-a-commutative-ring]].
