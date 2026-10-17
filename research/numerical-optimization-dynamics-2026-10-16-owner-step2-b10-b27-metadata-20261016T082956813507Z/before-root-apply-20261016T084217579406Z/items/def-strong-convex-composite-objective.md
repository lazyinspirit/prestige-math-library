---
id: def-strong-convex-composite-objective
kind: definition
title: "Strong convexity for an extended-real objective"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
  - def-extended-reals
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 5"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, §3"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Definition

Let $F:\mathbb R^n\to(-\infty,+\infty]$ be a proper convex extended-real function ([[def-extended-reals]]). For $\mu>0$, say that $F$ is **$\mu$-strongly convex** if for every $x,y\in\operatorname{dom}F$ and $0<\theta<1$,
$$F((1-\theta)x+\theta y)\le(1-\theta)F(x)+\theta F(y)-\frac\mu2\theta(1-\theta)\|x-y\|_2^2.$$
This definition permits $F$ to be extended-real-valued outside its effective domain. The endpoint cases are identities and are not included in the strict range for $\theta$.
