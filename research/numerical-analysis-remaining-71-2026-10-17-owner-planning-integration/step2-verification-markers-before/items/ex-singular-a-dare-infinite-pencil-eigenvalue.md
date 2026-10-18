---
id: ex-singular-a-dare-infinite-pencil-eigenvalue
kind: example
title: "A singular A can give a stable DARE solution and an infinite pencil eigenvalue"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, homogeneous DARE pencil with singular A and infinite eigenvalues"
---

## Example

Take scalar $A=B=0$, $C=R=1$. Then $Q=1$ and the state matrix $A$ is singular.

## Facts & Assumptions

**Given:** The data above and the homogeneous pencil convention of [[def-standard-continuous-and-discrete-riccati-equations]].

[F1] [[def-standard-continuous-and-discrete-riccati-equations]]: the DARE is $X=Q+A^*XA-A^*XB(R+B^*XB)^{-1}B^*XA$, its closed loop is $A_c=A-B(R+B^*XB)^{-1}B^*XA$, and its homogeneous pencil is $\beta N-\alpha M$ with finite coordinate $[\lambda:1]$ and infinity $[1:0]$.

## Proof

1.1 Here $G=0$ and $R+B^*XB=1$. The DARE reduces to $X=1$, so its solution is $X=1$ and $A_c=0$, which is Schur stable. [F1, given, algebra]

2.1 The pencil matrices are $N=\begin{bmatrix}0&0\\-1&1\end{bmatrix}$ and $M=\begin{bmatrix}1&0\\0&0\end{bmatrix}$. Therefore $\det(\beta N-\alpha M)=\det\begin{bmatrix}-\alpha&0\\-\beta&\beta\end{bmatrix}=-\alpha\beta.$ This nonzero homogeneous polynomial has roots $[0:1]$ (the finite eigenvalue $0$) and $[1:0]$ (an infinite eigenvalue). No inverse of $A$ is used. [F1, step 1.1, algebra] ∎
