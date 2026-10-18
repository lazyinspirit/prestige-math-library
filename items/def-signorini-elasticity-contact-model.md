---
id: def-signorini-elasticity-contact-model
kind: definition
title: "Small-strain elasticity with a frictionless contact gap"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-signorini-partial-trace-space, def-linear-elasticity-displacement-formulation-and-data]
justified_by: [lem-signorini-elasticity-form-bounded]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.1–53.2.1, printed pp. 391–394: the symmetric-gradient stress convention and weak formulation on a positive-measure Dirichlet velocity space. The elasticity energy form is cited to Zulehner below."
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete 80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 20–22: displacement spaces and the linear-elasticity energy form."
---

## Definition

Use the polygon, displacement space and oriented contact normal from [[def-signorini-partial-trace-space]]. Let the constant shear modulus satisfy $\mu>0$, let the finite Lam\'e parameter satisfy $\lambda\ge0$, and let $F:V\to\mathbb R$ be a bounded linear functional. For $v\in V$, define the weak symmetric gradient
$$\varepsilon(v):=\frac{\nabla v+(\nabla v)^T}{2}.$$
For $u,v\in V$, define the isotropic small-strain elasticity form
$$a(u,v):=\int_\Omega 2\mu\,\varepsilon(u):\varepsilon(v)+\lambda\,\operatorname{div}u\,\operatorname{div}v\,dx.$$
The strain and form conventions are the algebraic formulas in [[def-linear-elasticity-displacement-formulation-and-data]]. The present domain is the partial-trace space $V$; all coercivity and well-posedness claims for it are proved locally below.
