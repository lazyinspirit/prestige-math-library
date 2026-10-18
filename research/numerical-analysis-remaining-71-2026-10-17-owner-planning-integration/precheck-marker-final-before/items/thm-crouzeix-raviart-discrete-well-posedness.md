---
id: thm-crouzeix-raviart-discrete-well-posedness
kind: theorem
title: Well-posedness of the homogeneous Poisson and CR problems
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-countable-choice
  - def-crouzeix-raviart-poisson-method
  - lem-w-one-two-is-a-hilbert-space
  - lem-crouzeix-raviart-continuous-poincare
  - lem-crouzeix-raviart-broken-gradient-is-a-norm
  - lem-crouzeix-raviart-global-face-basis
  - thm-lax-milgram
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.3, equations (36.9)–(36.11), PDF pp. 4–5: exact and discrete Poisson variational problems."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 247–315: exact and discrete variational formulations and stability."
---

## Statement

Assume Countable Choice, let $\Omega$ and $\mathcal T_h$ be as in
[[def-crouzeix-raviart-poisson-method]], and let $f\in L^2(\Omega)$. The
exact weak problem has a unique solution $u\in H^1_0(\Omega)$, and the
discrete problem has a unique solution $u_h\in V_h^{CR,0}$. The exact
existence argument uses Countable Choice through Hilbert-space structure and
Lax–Milgram. The finite-dimensional discrete existence and uniqueness
argument uses no choice principle.

## Facts & Assumptions

**Given:** Countable Choice, the bounded domain and mesh of [[def-crouzeix-raviart-poisson-method]], $f\in L^2(\Omega)$, and a slab $a<x\cdot e<b$ containing $\Omega$ for some unit vector $e$.

[F1] $H^1_0(\Omega)$ is a Hilbert space under its $H^1$ inner product; the $L^2$ load is bounded when controlled by the $L^2$ norm. ([[lem-w-one-two-is-a-hilbert-space]], [[thm-holder-inequality-for-integrals]])

[F2] The continuous Poincare inequality controls $\|v\|_2$ by $\|\nabla v\|_2$ on $H^1_0(\Omega)$. ([[lem-crouzeix-raviart-continuous-poincare]])

[F3] Lax–Milgram gives a unique exact solution for a bounded coercive form and bounded load on a Hilbert space under Countable Choice. ([[thm-lax-milgram]])

[F4] $V_h^{CR,0}$ has a finite basis indexed by interior facets. ([[lem-crouzeix-raviart-global-face-basis]])

[F5] $\|\nabla_h\cdot\|_2$ is a norm on $V_h^{CR,0}$. ([[lem-crouzeix-raviart-broken-gradient-is-a-norm]])

## Proof
1.1 Let $V=H^1_0(\Omega)$ with its $H^1$ Hilbert norm. For $v,w\in V$, $|a(v,w)|\le\|\nabla v\|_2\|\nabla w\|_2\le\|v\|_{H^1}\|w\|_{H^1}.$ By [F2], $\|v\|_{H^1}^2=\|v\|_2^2+\|\nabla v\|_2^2\le(1+C_P^2)\|\nabla v\|_2^2$, so $a(v,v)\ge(1+C_P^2)^{-1}\|v\|_{H^1}^2$. Also $|F(v)|\le\|f\|_2\|v\|_2\le C_P\|f\|_2\|v\|_{H^1}$. Thus [F3] gives a unique exact weak solution. [F1, F2, F3, given, algebra]

2.1 By [F4], write the finite-dimensional space in its explicit face basis. The matrix of $a_h$ in this basis is positive definite: for any coefficient vector $c$, its quadratic form is $\|\nabla_h\sum_Fc_F\phi_F\|_2^2$, which vanishes only for the zero coefficient vector by [F5] and basis independence. Hence the matrix is invertible by finite-dimensional linear algebra. The load vector has finite entries because every basis function is piecewise affine and in $L^2$, so Cauchy–Schwarz gives $|F_h(\phi_F)|\le\|f\|_2\|\phi_F\|_2$. Solving the finite linear system gives exactly one $u_h$. If there are no interior facets, the space is zero and its unique element $u_h=0$ solves the vacuous equations. This finite matrix argument makes no choice. [F4, F5, given, algebra] ∎