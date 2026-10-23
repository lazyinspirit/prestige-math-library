---
id: def-fd-random-fluid-observable
title: Random fluid observable and numerical approximation
kind: definition
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2, §§2.1–2.2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Olivier Le Maître and Omar Knio, Introduction to Uncertainty Quantification, DTU PhD course lecture notes, pp. 3–4 and 14–16"
      url: "https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf"
    - title: "NASA Glenn Research Center, Uncertainty and Error in CFD Simulations"
      url: "https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html"
---

## Definition

Let $d_s\in\{2,3\}$, let $D\subseteq\mathbb R^{d_s}$ be a nonempty Lebesgue-measurable spatial region, and let $I\subseteq\mathbb R$ be a nonempty interval. Give $D\times I$ the product of the restricted Lebesgue sigma-algebra on $D$ and the Borel sigma-algebra on $I$. Let $(\mathscr V,\mathcal V)$ be a measurable space whose elements are product-measurable vector fields $u:D\times I\to\mathbb R^{d_s}$. A random fluid field is a measurable map $U:(\Omega,\mathcal F,\mathbb P)\to(\mathscr V,\mathcal V)$ from a probability space. A real fluid observable of $U$ is a map $\Phi:\mathscr V\to\mathbb R$ for which $Y:=\Phi\circ U$ is measurable; it is integrable or square-integrable when $\mathbb E[|Y|]<\infty$ or $\mathbb E[Y^2]<\infty$, respectively. For a nonempty set $H$ of numerical settings, measurable composites $Y_h:=\Phi_h\circ U$ define numerical approximations, where each $\Phi_h:\mathscr V\to\mathbb R$ and $Y_h$ is measurable. When $Y,Y_h$ are integrable, define the target $\theta:=\mathbb E[Y]$, approximate target $\theta_h:=\mathbb E[Y_h]$, and signed numerical bias $b_h:=\theta_h-\theta$; finite second moments are required for variances. This definition assumes no fluid equation, independence, convergence as $h$ changes, or error bound. If the fields are interpreted as velocities, their components have one fixed velocity unit, and $\Phi$ and each $\Phi_h$ must return the same declared scalar unit before their bias is formed.

## Definition references

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2](https://artowen.su.domains/mc/Ch-intro.pdf)

[Olivier Le Maître and Omar Knio, *Introduction to Uncertainty Quantification*, DTU lecture notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf)

[NASA Glenn Research Center, *Uncertainty and Error in CFD Simulations*](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html)
