---
id: def-centered-leapfrog-wave-scheme
kind: definition
title: Centered leapfrog wave recurrence with Dirichlet and periodic rows
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-uniform-grid-and-difference-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.3–§6.4, PDF pp. 85–96: centered explicit wave recurrence, initial/boundary rows, and Fourier analysis."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete 5-page PDF, pp. 1–4: centered second-order spatial stencil and explicit time update; no wave-energy proof is imported."
verification:
  precheck: n/a
---

## Definition

Use the uniform-grid indices, physical nodes, and spacings of [[def-uniform-grid-and-difference-operators]]. Fix a wave speed $c>0$, an interval length $L=Nh$ with $N\ge2$, and a time step $k>0$. Write $\nu=ck/h$. The target model is the real scalar wave equation $u_{tt}=c^2u_{xx}$, and grid states are real-valued. Prescribe a real initial displacement row $U^0$ and discrete initial-velocity row $V^0$, and set $U^1=U^0+kV^0$. For smooth Dirichlet data $u_0,u_1:[0,L]\to\mathbb R$ with $u_0(0)=u_0(L)=u_1(0)=u_1(L)=0$, the corresponding sample rows are $U_j^0=u_0(x_j)$ and $V_j^0=u_1(x_j)$; for smooth periodic data, take real $L$-periodic $u_0,u_1$ and sample them at $x_j$. In both cases the discrete initial velocity equals the sampled $u_1$. The centered leapfrog recurrence is
$$ U_j^{n+1}-2U_j^n+U_j^{n-1}=\nu^2(U_{j+1}^n-2U_j^n+U_{j-1}^n),\qquad n\ge1. $$
For the finite Dirichlet interval, require $U_0^0=U_N^0=V_0^0=V_N^0=0$ and impose the recurrence for $j=1,\ldots,N-1$, with $U_0^n=U_N^n=0$ for every $n\ge0$. For the periodic branch, use $j=0,\ldots,N-1$, reduce indices modulo $N$, and impose the recurrence at every node. Fourier analysis of this real periodic update uses its complex-linear extension to the complexified grid space. No convergence order for a particular initialization formula is asserted here.

