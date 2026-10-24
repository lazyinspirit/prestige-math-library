---
id: def-signorini-nodal-p1-contact-scheme
kind: definition
title: "Conforming nodal P1 Signorini contact discretization"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-signorini-elasticity-contact-model, def-signorini-contact-variational-inequality, def-signorini-partial-trace-space, def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-broken-and-conforming-polynomial-spaces]
justified_by: [lem-signorini-nodal-contact-set-conforming]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§3, printed pp. 966–969: continuous P1 spaces, vertex obstacle constraints, and feasible interpolants."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11: Local interpolation on affine meshes"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf"
      locator: "§§11.2 and 11.4, printed pp. 120–125: affine scaling, nodal interpolation, and local P1 estimates."
---

## Definition

Let $(\mathcal T_h)$ be a family of matching, boundary-conforming, shape-regular affine triangular meshes of the polygon from [[def-signorini-partial-trace-space]], with $h:=\max_{K\in\mathcal T_h}\operatorname{diam}(K)$. Assume both $\Gamma_D$ and $\Gamma_C$ are unions of boundary edges of each mesh, and let $\mathcal N_h^C$ be the vertices on $\Gamma_C$. The conforming continuous P1 displacement space is
$$V_h:=\{v_h\in V\cap C(\overline\Omega;\mathbb R^2):v_h|_K\in\mathbb P_1(K;\mathbb R^2)\text{ for every }K\in\mathcal T_h\}.$$
For continuous $\psi$ on $\Gamma_C$, let $I_h\psi$ be its continuous piecewise-affine nodal interpolant on the contact edges. Under the additional obstacle hypotheses $\psi\le0$ and convexity of $\psi$ in arclength on $\Gamma_C$, define
$$K_h:=\{v_h\in V_h:v_h(a)\cdot n\ge I_h\psi(a)\text{ for every }a\in\mathcal N_h^C\}.$$
The nodal inequalities are exactly the plan's vertex constraints. The well-definedness and conformity claims are proved in [[lem-signorini-nodal-contact-set-conforming]].
