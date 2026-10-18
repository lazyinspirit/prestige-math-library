---
id: def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling
kind: definition
title: Logarithmic capacity and the two-dimensional Laplace layer kernel
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.4 and Exercise 11, PDF pp. 9–16: the logarithmic fundamental solution, the unknown constant at infinity, and Robin's constant/logarithmic capacity."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§1 and 5, printed pp. 614 and 625: the exceptional analytic-capacity-one case in two dimensions."
---

## Definition

For $x\ne y$ in $\mathbb R^2$, the logarithmic Laplace fundamental solution is $G_2(x,y)=-(2\pi)^{-1}\log|x-y|$. If $\Gamma$ is a closed piecewise-smooth curve and $\lambda$ is a smooth density, its two-dimensional single-layer trace is
$$V_\Gamma\lambda(x)=-\frac1{2\pi}\int_\Gamma\log|x-y|\lambda(y)\,ds_y.$$

For a compact set $K\subset\mathbb R^2$ with positive finite logarithmic capacity, let $\mathcal P(K)$ be the Borel probability measures supported on $K$, let $I(\mu)=\int_K\int_K\log\frac1{|x-y|}\,d\mu(x)\,d\mu(y)$ with value $+\infty$ on the diagonal, and define
$$I(K)=\inf_{\mu\in\mathcal P(K)} I(\mu),\qquad \operatorname{cap}(K)=e^{-I(K)}.$$
This definition fixes length units: scaling $K$ changes its capacity and adds a constant-mode term to the logarithmic layer operator, as proved separately by the homothety theorem on this page.
