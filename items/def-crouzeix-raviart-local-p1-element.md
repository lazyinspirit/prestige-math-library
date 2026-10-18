---
id: def-crouzeix-raviart-local-p1-element
kind: definition
title: The local P1 Crouzeix–Raviart element
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-matching-affine-simplicial-meshes
  - def-reference-finite-element-and-unisolvent-dofs
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36, Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§§36.2.1–36.2.2, PDF pp. 2–4: local affine polynomial space and face-average degrees of freedom."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 276–290: the nonconforming P1 triangle and the midpoint/face degrees of freedom."
proof_strategy: direct
---

## Definition

Let $d\ge2$ and let $K$ be a nondegenerate affine $d$-simplex with vertices
$a_0,\ldots,a_d$ and facets $F_i$ opposite $a_i$. Write
$\lambda_0,\ldots,\lambda_d$ for its barycentric coordinate functions, so
$\lambda_i(a_j)=\delta_{ij}$ and $\sum_i\lambda_i=1$. The local
Crouzeix–Raviart polynomial space is $\mathbb P_1(K)$, the real affine
functions on $K$. Its face-average functionals are
$$\sigma_{K,F_i}(p):=\frac1{|F_i|}\int_{F_i}p\,dS,\qquad p\in\mathbb P_1(K).$$
The candidate dual shape polynomial associated with $F_i$ is
$$\phi_{K,F_i}:=1-d\lambda_i.$$
The next item proves that these $d+1$ functionals are unisolvent and that the
displayed polynomials form their dual basis. No pointwise continuity across
different cells is part of this local element.
