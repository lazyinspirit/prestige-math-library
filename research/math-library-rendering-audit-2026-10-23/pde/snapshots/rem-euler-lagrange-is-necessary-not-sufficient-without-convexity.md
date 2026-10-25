---
id: rem-euler-lagrange-is-necessary-not-sufficient-without-convexity
kind: remark
title: "Euler-Lagrange is necessary but not sufficient without convexity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-first-variation-vanishes-at-an-interior-minimiser, thm-weak-euler-lagrange-equation-for-integral-functionals, thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional, cor-strict-convexity-gives-uniqueness-of-a-minimiser]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Sections 1-2, printed pp. 5-7 (minimisers, critical points and the convex converse)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 5, Section 5.1, printed p. 57"
verification:
  precheck: n/a
---

## Remark

For a Gateaux differentiable functional on an open set, the first variation vanishes at an interior local minimiser; on an affine admissible class $u+V$ it vanishes in the directions $v\in V$ ([[thm-first-variation-vanishes-at-an-interior-minimiser]]). For integral functionals satisfying its differentiation and fixed-trace hypotheses, [[thm-weak-euler-lagrange-equation-for-integral-functionals]] gives the weak Euler-Lagrange equation for zero-boundary variations. Conversely, for a convex functional Gateaux differentiable on an open neighbourhood of a convex admissible set $K$, the condition $\delta I(u;v-u)\ge0$ for every $v\in K$ suffices for a global minimum ([[thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional]]). Without convexity the three notions must be kept apart: a **stationary point** solves the Euler-Lagrange equation, a **local minimiser** minimises among nearby admissible competitors, and a **global minimiser** minimises on the whole admissible set. In general none of the implications "stationary $\Rightarrow$ local minimiser", "local minimiser $\Rightarrow$ global minimiser" or "global minimiser $\Rightarrow$ unique" holds, and the Euler-Lagrange equation alone therefore cannot be used as an existence criterion. Convexity upgrades the variational inequality to global minimality, whereas coercivity and weak lower semicontinuity enter the separate existence argument; a concave quadratic functional is the standard illustration, and the companion page records explicit counterexamples. For the other failed implications already mentioned, $F(t)=t^2-3t^3+t^4$ has a local minimum at $0$ (the coefficient $1-3t+t^2$ is positive near $0$) but $F(1)=-1<F(0)=0$, while $(t^2-1)^2$ has the two global minimisers $\pm1$.

For inequality constraints, two-sided variations need not be admissible. Local minimality gives only a nonnegative one-sided derivative along an admissible segment, since $[I(u+tv)-I(u)]/t\ge0$ for sufficiently small feasible $t>0$; it need not give stationarity in arbitrary directions.
