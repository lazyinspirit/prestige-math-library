---
id: def-bem-surface-mesh-and-piecewise-constant-density-space
kind: definition
title: Shape-regular surface meshes and conforming P0 densities
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]
justified_by: []
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
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: non-overlapping surface partitions and the conforming piecewise-constant P0 density space."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 615–616: finite-dimensional Galerkin subspaces of H^{-1/2}(Γ) and their density requirements."
---

## Definition

Let $\Gamma$ be a polyhedral boundary as in [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. A **conforming surface triangulation** $\mathcal T_h$ is a finite collection of nondegenerate closed planar triangles covering $\Gamma$, with disjoint relative interiors, such that two distinct triangles meet only in a common full edge, a common vertex, or not at all. For $T\in\mathcal T_h$, write $h_T=\operatorname{diam}(T)$ and let $\rho_T$ be the radius of the largest disk contained in $T$; the family is **shape regular** if $\sup_{h,T}h_T/\rho_T<\infty$, and **quasi-uniform** if $\inf_{h,T}h_T/h>0$ for $h=\max_{T\in\mathcal T_h}h_T$.

The conforming **P0 density space** is $X_h=\{\lambda_h\in L^2(\Gamma):\lambda_h|_T\text{ is constant for every }T\in\mathcal T_h\}$. The continuous inclusion $H^{1/2}(\Gamma)\hookrightarrow L^2(\Gamma)$ follows because each chart Bessel norm controls its L2 norm and the fixed partition is finite. Hence every $\lambda_h$ defines a bounded functional $v\mapsto\int_\Gamma\lambda_hv$ on $H^{1/2}(\Gamma)$; thus $X_h\subset H^{-1/2}(\Gamma)$. This inclusion makes the single-layer Galerkin method conforming in its energy space.
