---
id: def-regular-differentiation-index
title: "Differentiation index for a regular local semi-explicit DAE"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375: the semi-explicit index-one convention from invertibility of g_z and reduction to state-space form."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10, §§10.0, 10.1, and 10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 163–166 and 169–171: DAE constraints, differentiated initial consistency, and the pendulum's differentiation index."
---

## Definition

Fix a semi-explicit presentation $x'=f(t,x,z)$, $0=g(t,x,z)$ as in [[def-semi-explicit-index-one-dae-and-consistent-initial-data]] and a sufficiently differentiable consistent local solution. Differentiate the algebraic constraint along the differential equation, substituting $x'=f(t,x,z)$ and any previously obtained derivative relations at each stage. The **differentiation index in this convention** is the least positive integer $k$ for which the original constraint and its first $k$ differentiated equations locally determine $z$ and $z'$, with the equation for the highest derivative of $z$ having an invertible square Jacobian on a neighborhood of the solution. If no such finite $k$ exists, this local index is undefined. This convention counts through the first derivative of the algebraic variables and is local to the fixed presentation; it is not a universal index theory for arbitrary implicit systems.

If $g_z$ is invertible, one differentiation gives

$$
g_t+g_x f+g_z z'=0,
$$

which determines $z'$, so the index is one. If $g_z$ is singular, the index must be checked from the actual differentiated equations; no index-one conclusion follows from this definition alone.
