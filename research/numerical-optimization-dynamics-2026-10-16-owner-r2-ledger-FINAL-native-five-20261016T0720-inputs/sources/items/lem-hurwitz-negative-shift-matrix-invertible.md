---
id: lem-hurwitz-negative-shift-matrix-invertible
kind: lemma
title: "A negative-real-part shift of a Hurwitz matrix is invertible"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-hurwitz-matrix-and-continuous-lyapunov-equation]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
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

## Proof


1.1 If $A+pI$ were singular, a nonzero $v$ would satisfy $(A+pI)v=0$, so $Av=-pv$ and $-p$ would be an eigenvalue of $A$. [assume-contra, choose, algebra]

2.1 Since $\operatorname{Re}(-p)>0$, this contradicts [F1], which requires every eigenvalue of $A$ to have negative real part. Therefore $A+pI$ is invertible. [F1, step 1.1, discharge-contradiction] ∎
