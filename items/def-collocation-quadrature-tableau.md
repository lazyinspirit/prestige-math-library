---
id: def-collocation-quadrature-tableau
kind: definition
title: Collocation tableau from distinct quadrature nodes
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-implicit-runge-kutta-stage-equations
  - def-oriented-integral
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
justified_by:
  - lem-collocation-quadrature-matrix-well-defined
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019)
      url: https://arxiv.org/pdf/1706.06245
---

## Definition

Let $M,d\ge1$, let $0\le c_1<\cdots<c_M\le1$ be distinct collocation nodes, and let $\ell_1,\ldots,\ell_M$ be their cardinal polynomials from [[def-cardinal-polynomial-interpolation]]. Define
$$Q_{ij}:=\int_0^{c_i}\ell_j(s)\,ds,\qquad b_j:=\int_0^1\ell_j(s)\,ds.$$
The matrix $Q\in\mathbb R^{M\times M}$ and vector $b\in\mathbb R^M$ are the collocation tableau coefficients. For an IVP $y'=f(t,y)$ with $f:D\to\mathbb R^d$ on the open time-state domain $D$ of [[def-first-order-ode-initial-value-problem-and-solution]], fix $(t,u)\in D$ and a step $h>0$. A stage vector $U\in(\mathbb R^d)^M$ is admissible only when $(t+c_jh,U_j)\in D$ for every $j$. On this admissible set write
$$F_j(U):=f(t+c_jh,U_j),\qquad QF(U):=\left(\sum_{j=1}^M Q_{ij}F_j(U)\right)_{i=1}^M.$$
All displayed integrals use the oriented Riemann convention of [[def-oriented-integral]]. In particular $Q_{ij}=0$ when $c_i=0$, and the integral in $u_h$ vanishes at $\tau=0$. The collocation stages and endpoint are the implicit Runge–Kutta equations of [[def-implicit-runge-kutta-stage-equations]] with $A=Q$, nodes $c$, and weights $b$:
$$U=\mathbf1u+hQF(U),\qquad \Psi_h(t,u)=u+h\sum_{j=1}^M b_jF_j(U).$$
The associated collocation polynomial on normalized time $\tau\in[0,1]$ is
$$u_h(\tau):=u+h\int_0^\tau\sum_{j=1}^M\ell_j(s)F_j(U)\,ds.$$
Thus $u_h(c_i)=U_i$, $u_h'(c_i)=hF_i(U)$, and $u_h(1)=\Psi_h(t,u)$ whenever $U$ is an admissible solution. This definition alone asserts no branch existence or uniqueness.

For interpolation estimates define the **Lebesgue constant** of this fixed node set by
$$\Lambda_M:=\max_{0\le s\le1}\sum_{j=1}^M|\ell_j(s)|.$$
For a real matrix $A$, write $\|A\|_\infty:=\max_i\sum_j|a_{ij}|$. These constants depend on the nodes and on $M$; no uniform-in-$M$ bound is part of the definition.
