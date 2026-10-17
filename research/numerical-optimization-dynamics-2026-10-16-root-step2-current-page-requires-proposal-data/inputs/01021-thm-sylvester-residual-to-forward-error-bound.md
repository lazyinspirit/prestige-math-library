---
id: thm-sylvester-residual-to-forward-error-bound
kind: theorem
title: "Sylvester separation converts a residual into a forward error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-sylvester-operator-and-separation-number
  - lem-sylvester-separation-controls-the-frobenius-error
  - thm-sylvester-unique-solvability-spectral-separation
  - def-frobenius-matrix-norm
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

Let $X$ be the unique solution of $AX+XB=C$, and let $\widehat X\in F^{m\times n}$ be any approximation. Define its equation residual by $R=C-(A\widehat X+\widehat X B)$. If $\operatorname{sep}(A,-B)>0$, then

$$
\|X-\widehat X\|_F\le\frac{\|R\|_F}{\operatorname{sep}(A,-B)}.
$$

## Facts & Assumptions

**Given:** Compatible matrices $A,B,C$, the unique solution $X$, the approximation $\widehat X$, and positive $\operatorname{sep}(A,-B)$.

[F1] [[def-sylvester-operator-and-separation-number]]: $\mathcal S_{A,B}(Y)=AY+YB$ and $\operatorname{sep}(A,-B)=\sigma_{\min}(\mathcal S_{A,B})$.

[F2] [[lem-sylvester-separation-controls-the-frobenius-error]]: $\|Y\|_F\le\|\mathcal S_{A,B}(Y)\|_F/\operatorname{sep}(A,-B)$.

[F3] [[thm-sylvester-unique-solvability-spectral-separation]]: Positive separation implies that every right-hand side has a unique solution.

## Proof


1.1 Put $E=X-\widehat X$. By linearity of $\mathcal S_{A,B}$ and the two equations, $\mathcal S_{A,B}(E)=\mathcal S_{A,B}(X)-\mathcal S_{A,B}(\widehat X)=C-(A\widehat X+\widehat X B)=R$. [given, F1, algebra]

2.1 Apply [F2] to $E$ and substitute step 1.1 to obtain $\|X-\widehat X\|_F=\|E\|_F\le\|R\|_F/\operatorname{sep}(A,-B)$. The unique solution used here is guaranteed by [F3]. [F2, F3, step 1.1, algebra] ∎
