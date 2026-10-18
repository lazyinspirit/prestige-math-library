---
id: def-semilinear-reaction-diffusion-system
kind: definition
title: Semilinear vector reaction-diffusion systems
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-reaction-vector-field-and-quasipositivity
  - def-reaction-invariant-rectangle
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§0, printed p. 1: the vector concentration equation for several species with diffusion and local reaction terms; §9, printed pp. 60–64: splitting the evolution into reaction and diffusion subproblems."
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.6–10.7, PDF pp. 149–151: the vector reaction-diffusion equation and linearization at a homogeneous equilibrium."
verification:
  precheck: n/a
---

## Definition

Let $m\ge1$, let $D=\operatorname{diag}(d_1,\ldots,d_m)$ with $d_i\ge0$, and let $F:U\to\mathbb R^m$ be as in [[def-reaction-vector-field-and-quasipositivity]]. A **semilinear vector reaction-diffusion system** is
$$
u_t=D\Delta u+F(u),\qquad u(x,0)=u_0(x),
$$
on either a flat periodic torus $\mathbb T_L^d$ or a bounded connected polyhedral domain $\Omega\subset\mathbb R^d$ with homogeneous no-flux conditions $d_i\partial_nu_i=0$ on each boundary face. Equivalently, $\partial_nu_i=0$ is required for components with $d_i>0$; components with $d_i=0$ require no boundary condition. The diffusion matrix is diagonal and independent of $u$; this definition does not include cross-diffusion.

A classical solution is **bounded in the rectangle $R$** on $[0,T]$ if $u(x,t)\in R$ at every point and time in its stated solution class, with $R$ as in [[def-reaction-invariant-rectangle]]. This item fixes the continuous PDE convention; the finite-volume and periodic discrete operators are defined separately.
