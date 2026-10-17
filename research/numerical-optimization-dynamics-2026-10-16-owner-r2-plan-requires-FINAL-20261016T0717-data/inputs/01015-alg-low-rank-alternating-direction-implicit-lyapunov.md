---
id: alg-low-rank-alternating-direction-implicit-lyapunov
kind: algorithm
title: "Low-rank ADI for a continuous Lyapunov equation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
  - lem-hurwitz-negative-shift-matrix-invertible
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

## Definition

Let $A\in F^{n\times n}$ be Hurwitz, let $B\in F^{n\times r}$, and let $p_1,\ldots,p_k\in\mathbb C$ be a finite shift list. The target equation is $AX+XA^*+BB^*=0$. Inputs also include the shift list and exact linear-solve operations. For real $A,B$, every nonreal shift must be immediately followed by its complex conjugate; the procedure may use complex arithmetic for these paired shifts.

Initialize $R_0=B$, let $Z_0$ have zero columns, and set $X_0=0$. For $j=1,\ldots,k$:

1. If, for real data, a nonreal shift is not immediately followed by its conjugate, return `unpaired-complex-shift`. If $\operatorname{Re}p_j\ge0$, return `invalid-shift`. If $A+p_jI$ is singular, return `singular-shift`.
2. Set $c_j=-2\operatorname{Re}p_j>0$ and solve
   $$
   V_j=(A+p_jI)^{-1}R_{j-1}.
   $$
3. Set
   $$
   Z_j=[Z_{j-1},\sqrt{c_j}V_j],\qquad X_j=Z_jZ_j^*=X_{j-1}+c_jV_jV_j^*,\qquad R_j=R_{j-1}+c_jV_j.
   $$

Return `completed` with the low-rank factor $Z_k$, approximation $X_k$, and residual factor $R_k$. A finite shift list may stop before convergence; this procedure does not select shifts or assert unconditional convergence.

## Facts & Assumptions

**Given:** A Hurwitz matrix $A$, a forcing factor $B$, and a finite shift list.

[F1] [[def-hurwitz-matrix-and-continuous-lyapunov-equation]]: Hurwitz means all eigenvalues have negative real part, and the target equation is $AX+XA^*+BB^*=0$.

[F2] [[lem-hurwitz-negative-shift-matrix-invertible]]: If $A$ is Hurwitz and $\operatorname{Re}p<0$, then $A+pI$ is invertible.

## Proof


1.1 The shift list has finite length. Each shift check in step 1 either returns a declared status or gives $c_j>0$; by [F2], every shifted matrix in an admissible step is invertible, so the displayed exact solve has a unique result. [given, F1, F2]

2.1 Each successful iteration performs finitely many matrix additions, products, one finite linear solve, and one square root of a positive scalar. It either returns a specified failure status or advances the finite index $j$ by one; hence the procedure terminates after at most $k$ iterations, including the empty-shift case $k=0$. [step 1.1, given, algebra]

3.1 On completion, the returned factor has $kr$ columns at most, $X_k=Z_kZ_k^*$, and the recurrence has produced $R_k$; these are the outputs fixed by step 3. [given, step 2.1] ∎
