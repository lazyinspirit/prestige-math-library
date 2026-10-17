---
id: def-ctrl1-smooth-transcription-data
kind: definition
title: "Finite-horizon ODE optimal-control transcription data"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.4"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 229–248: finite-dimensional parameterization, single/multiple shooting, direct collocation, path and terminal constraints, and NLP solver classes."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 249–253, §2: smoothness hypotheses and Runge–Kutta transcription of an ODE control problem."
---

## Definition

For pointwise numerical transcription on $[0,T]$, the data consist of integers $n,m\ge1$, open sets $\Omega_x\subseteq\mathbb R^n$ and $\Omega_u\subseteq\mathbb R^m$, a nonempty compact convex control set $U_c\subset\Omega_u$, an initial state $x_0\in\Omega_x$, a pointwise-defined vector field $f:[0,T]\times\Omega_x\times\Omega_u\to\mathbb R^n$, a pointwise-defined running cost $L:[0,T]\times\Omega_x\times\Omega_u\to\mathbb R$, and a terminal cost $\phi:\Omega_x\to\mathbb R$. The admissible state solves $\dot x(t)=f(t,x(t),u(t))$ almost everywhere and the continuous objective is $\int_0^T L(t,x(t),u(t))dt+\phi(x(T))$. Optional path and endpoint constraints are pointwise-defined functions evaluated at declared continuous times or transcription nodes. A **compact tube** is a compact subset of $[0,T]\times\Omega_x\times\Omega_u$ containing the state/control triples used by stages and trajectories. On such a tube, $f,L,\phi$ and any constraint functions used in a local NLP theorem are continuous and have continuous state/control derivatives through order three (the $C^3$ convention of [[def-ck-euclidean-maps-and-diffeomorphisms]]), with those derivatives bounded. An $L^\infty$ equivalence class alone has no specified value at a Runge–Kutta stage time, so it is not an admissible stage-evaluation input without an additional pointwise representative and sampling rule. This definition makes no existence, convergence, or continuous-path-feasibility claim.
