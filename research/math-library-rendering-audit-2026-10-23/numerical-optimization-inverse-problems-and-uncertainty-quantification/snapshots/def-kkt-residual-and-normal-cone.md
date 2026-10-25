---
id: def-kkt-residual-and-normal-cone
kind: definition
title: Scaled KKT residual and convex normal cone
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - def-euclidean-inner-product
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Sections 2.4–2.5 and 5.1, printed pp. 50–60 and 215–224; normal vectors, Lagrangian, and dual function conventions.
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.2, printed pp. 327–331; KKT residual components and complementarity convention.
---

## Definition

Use the program and dimensions of
[[def-inequality-constrained-program-and-kkt-geometry]]. For any $x\in U$,
$\nu\in\mathbb R^p$, and $\lambda\in\mathbb R^m$, define coordinatewise
$[v]_i^+=\max\{v_i,0\}$ and the scaled residual
$$
r_{\mathrm{KKT}}(x,\nu,\lambda)=\|\nabla f(x)+Dh(x)^T\nu+Dg(x)^T\lambda\|_2+\|h(x)\|_2+\|[g(x)]^+\|_2+\|[-\lambda]^+\|_2+\|\lambda\circ g(x)\|_2.
$$
The symbol $\circ$ denotes coordinatewise multiplication. The norm is the
Euclidean norm from [[def-euclidean-inner-product]], and the norm of the
zero-dimensional vector is $0$.

For a convex set $C\subseteq\mathbb R^n$ and $x\in C$, its (outward) normal
cone is
$$
N_C(x)=\{v\in\mathbb R^n:\langle v,y-x\rangle\le0\text{ for every }y\in C\}.
$$
This definition applies in particular when $C$ is closed and convex.
