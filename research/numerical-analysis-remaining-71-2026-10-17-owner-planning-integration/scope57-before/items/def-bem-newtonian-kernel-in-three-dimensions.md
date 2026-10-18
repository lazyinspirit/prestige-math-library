---
id: def-bem-newtonian-kernel-in-three-dimensions
kind: definition
title: The three-dimensional Laplace Newton kernel
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: [lem-bem-newtonian-kernel-is-fundamental-solution]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed p. 615, equations (2.5)–(2.7): the fundamental solution and simple/double layer kernels."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §2.2, PDF pp. 3–4: the three-dimensional Laplace fundamental solution and layer representation."
---

## Definition

For $x\ne y$ in $\mathbb R^3$, the Newton kernel is $G_3(x,y)=(4\pi|x-y|)^{-1}$. Its distributional fundamental-solution property $-\Delta_xG_3(x,y)=\delta_y$ is proved in [[lem-bem-newtonian-kernel-is-fundamental-solution]]. The kernel fixes the sign and $4\pi$ normalization for every three-dimensional layer operator on this page.
