---
id: def-crouzeix-raviart-poisson-smoothing-index
kind: definition
title: A Dirichlet Poisson smoothing index
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-crouzeix-raviart-fractional-sobolev-regularity
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.3.2, PDF pp. 11–13: the elliptic regularity index s in (1/2,1] and its L2 estimate."
---

## Definition

Assume Countable Choice. Let $\Omega$ be a bounded domain and let $1/2<s\le1$. Say that $\Omega$ has
a **Dirichlet Poisson smoothing index $s$** with constant $C_{\rm reg}$ if,
for every $g\in L^2(\Omega)$, there is a unique $\zeta_g\in H^1_0(\Omega)$
satisfying
$$\int_\Omega\nabla\zeta_g\cdot\nabla v\,dx =\int_\Omega g v\,dx\qquad(v\in H^1_0(\Omega)),$$
and $\zeta_g\in H^{1+s}(\Omega)$ with
$$\|\zeta_g\|_{H^{1+s}(\Omega)}\le C_{\rm reg}\|g\|_{L^2(\Omega)}.$$
This is a hypothesis about the continuous adjoint Poisson problem. It is not
asserted for every bounded domain.
