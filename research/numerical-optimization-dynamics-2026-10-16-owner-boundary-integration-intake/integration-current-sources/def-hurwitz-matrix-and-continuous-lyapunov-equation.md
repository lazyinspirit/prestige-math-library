---
id: def-hurwitz-matrix-and-continuous-lyapunov-equation
kind: definition
title: "Hurwitz matrices and the continuous Lyapunov equation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-non-negative-and-positive-operator]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Definition

Let $F\in\{\mathbb R,\mathbb C\}$, $n\ge1$, and $A\in F^{n\times n}$. The matrix $A$ is **Hurwitz** if, when its eigenvalues are considered over $\mathbb C$, every eigenvalue has strictly negative real part. For $Q,X\in F^{n\times n}$ with $Q=Q^*$, the **continuous Lyapunov equation** with coefficient $A$ and forcing $Q$ is

$$
AX+XA^*+Q=0.
$$

Here $^*$ is transpose for real matrices and conjugate transpose for complex matrices. The notations $Q\succeq0$ and $Q\succ0$ mean that $Q$ is non-negative or positive as a self-adjoint operator in the sense of [[def-non-negative-and-positive-operator]]: respectively $v^*Qv\ge0$ for all $v$, or $v^*Qv>0$ for every nonzero $v$.
