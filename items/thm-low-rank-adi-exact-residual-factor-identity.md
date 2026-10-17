---
id: thm-low-rank-adi-exact-residual-factor-identity
kind: theorem
title: "Low-rank ADI has an exact residual factor identity"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-low-rank-alternating-direction-implicit-lyapunov
  - def-hurwitz-matrix-and-continuous-lyapunov-equation
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
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

For every completed iterate $j$ of [[alg-low-rank-alternating-direction-implicit-lyapunov]], with $X_0=0$ and $R_0=B$,

$$
AX_j+X_jA^*+BB^*=R_jR_j^*.
$$

## Facts & Assumptions

**Given:** A completed ADI run with admissible shifts, factors $V_j$, coefficients $c_j=-2\operatorname{Re}p_j$, and iterates from the algorithm.

[F1] [[alg-low-rank-alternating-direction-implicit-lyapunov]]: $V_j=(A+p_jI)^{-1}R_{j-1}$, $X_j=X_{j-1}+c_jV_jV_j^*$, and $R_j=R_{j-1}+c_jV_j$.

[A1] For induction at a fixed $j\ge1$, assume $AX_{j-1}+X_{j-1}A^*+BB^*=R_{j-1}R_{j-1}^*$.

## Proof


1.1 At $j=0$, $AX_0+X_0A^*+BB^*=BB^*=R_0R_0^*$ by the initialization. [F1, base, algebra]

1.2 Fix $j\ge1$, write $p=p_j$, $c=c_j$, $V=V_j$, and $R=R_{j-1}$. The shifted solve gives $AV=R-pV$, and taking adjoints gives $V^*A^*=R^*-\overline pV^*$. [A1, ih, F1, algebra]

2.1 Using $c=-(p+\overline p)$ and [F1], expand the new Lyapunov residual as $AX_j+X_jA^*+BB^*=AX_{j-1}+X_{j-1}A^*+BB^*+c((AV)V^*+V(V^*A^*))$. Substituting step 1.2 and [A1] yields $RR^*+c(RV^*+VR^*)+c^2VV^*$. [A1, F1, step 1.2, algebra]

3.1 The expression in step 2.1 factors as $(R+cV)(R+cV)^*=R_jR_j^*$ by [F1]. Together with base step 1.1, the induction step in 1.2–2.1 proves the identity for every completed iterate. [F1, step 1.1, step 1.2, step 2.1, discharge-induction, algebra] ∎
