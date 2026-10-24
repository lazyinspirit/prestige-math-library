---
id: lem-hurwitz-negative-shift-matrix-invertible
kind: lemma
title: "A negative-real-part shift of a Hurwitz matrix is invertible"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - cor-matrix-rank-nullity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

If $A$ is Hurwitz and $p\in\mathbb C$ has $\operatorname{Re}p<0$, then $A+pI$ is invertible over $\mathbb C$.

## Facts & Assumptions

**Given:** A Hurwitz matrix $A$ and a scalar $p$ with negative real part.

[F1] [[def-hurwitz-matrix-and-continuous-lyapunov-equation]]: Every eigenvalue of a Hurwitz matrix has negative real part.

[F2] [[cor-matrix-rank-nullity]]: For a square matrix, its rank plus the dimension of its kernel is the dimension of its domain.

## Proof


1.1 If $A+pI$ were singular, its kernel would be nonzero: by [F2], a zero kernel would give full rank, hence a surjective and therefore invertible endomorphism of the finite-dimensional space. Choose nonzero $v$ in this kernel. Then $(A+pI)v=0$, so $Av=-pv$ and $-p$ would be an eigenvalue of $A$. [F2, assume-contra, choose, algebra]

2.1 Since $\operatorname{Re}(-p)>0$, this contradicts [F1], which requires every eigenvalue of $A$ to have negative real part. Therefore $A+pI$ is invertible. [F1, step 1.1, discharge-contradiction] ∎
