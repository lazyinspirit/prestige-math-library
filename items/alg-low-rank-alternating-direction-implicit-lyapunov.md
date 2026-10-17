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
justified_by: [thm-low-rank-adi-finite-status-and-well-definedness]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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

## Definition

Let $A\in F^{n\times n}$ be Hurwitz, let $B\in F^{n\times r}$, and let $p_1,\ldots,p_k\in\mathbb C$ be a finite shift list. The target equation is $AX+XA^*+BB^*=0$. Inputs also include the shift list and exact linear-solve operations. For real $A,B$, nonreal shifts must occur in consecutive complex-conjugate pairs; the procedure may use complex arithmetic for these paired shifts.

Before starting matrix updates, validate the real-data shift pairing by scanning the shift list once: at a real shift advance the scan index by one; at a nonreal shift require the next list entry to equal its complex conjugate, then advance the scan index by two. A missing or unequal partner returns `unpaired-complex-shift`. For complex data no pairing restriction is imposed. This validation scan consumes pairs; the update loop below still processes every individual shift in order.

Initialize $R_0=B$, let $Z_0$ have zero columns, and set $X_0=0$. For $j=1,\ldots,k$:

1. If $\operatorname{Re}p_j\ge0$, return `invalid-shift`. If $A+p_jI$ is singular, return `singular-shift`.
2. Set $c_j=-2\operatorname{Re}p_j>0$ and solve
   $$
   V_j=(A+p_jI)^{-1}R_{j-1}.
   $$
3. Set
   $$
   Z_j=[Z_{j-1},\sqrt{c_j}V_j],\qquad X_j=Z_jZ_j^*=X_{j-1}+c_jV_jV_j^*,\qquad R_j=R_{j-1}+c_jV_j.
   $$

Return `completed` with the low-rank factor $Z_k$, approximation $X_k$, and residual factor $R_k$. A finite shift list may stop before convergence; this procedure does not select shifts or assert unconditional convergence.
