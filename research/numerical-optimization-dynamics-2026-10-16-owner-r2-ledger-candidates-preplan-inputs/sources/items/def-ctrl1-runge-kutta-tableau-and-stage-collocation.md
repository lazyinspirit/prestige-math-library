---
id: def-ctrl1-runge-kutta-tableau-and-stage-collocation
kind: definition
title: "Runge–Kutta tableaux and stage collocation equations"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-ctrl1-smooth-transcription-data, def-ctrl1-control-mesh-and-piecewise-constant-parameterization]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §13.3"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 239–244: direct collocation stage variables, collocation equations, and quadrature objectives."
    - title: "W. W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, Numerische Mathematik 87 (2000)"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
      locator: "Printed pp. 251–257, §§3–4: general Runge–Kutta stage equations and their use in optimal-control transcriptions."
---

## Definition

Let $s\ge1$ be a stage count, $A=(a_{ik})\in\mathbb R^{s\times s}$, and $b,c\in\mathbb R^s$ satisfy $c_i=\sum_{k=1}^s a_{ik}$ for each $i$. This is a (possibly implicit) Runge–Kutta tableau. On mesh cell $[t_j,t_{j+1}]$ with width $h_j$, a start state $X_{j,0}$ and piecewise-constant control $u_j$, define stage times $t_{j,i}=t_j+c_i h_j$ and the **collocation stage equations**
$$X_{j,i}=X_{j,0}+h_j\sum_{k=1}^s a_{ik}f(t_{j,k},X_{j,k},u_j),\qquad i=1,\ldots,s.$$
The corresponding endpoint equation is $X_{j+1,0}=X_{j,0}+h_j\sum_{i=1}^s b_i f(t_{j,i},X_{j,i},u_j)$. In a finite-dimensional transcription, the stage states $X_{j,i}$ are decision variables and the stage and endpoint equations are equality constraints; an implicit tableau therefore creates coupled algebraic constraints and does not require a stage solver during NLP construction. The quadrature contribution of the cell is $h_j\sum_{i=1}^s b_i L(t_{j,i},X_{j,i},u_j)$. This definition asserts no stage-solution existence, uniqueness, order, stability, or error bound. If $A$ is strictly lower triangular, its stages are evaluated recursively by the explicit tableau procedure of [[def-explicit-runge-kutta-tableau-and-stage-map]].
