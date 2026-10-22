---
id: def-tgrx-static-hydrostatic-data
kind: definition
title: Static hydrostatic background and equation-of-state data
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-cartesian-product
  - def-gr-smooth-lorentzian-objects
  - def-gr-killing-field
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - def-tgr-framework-units
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-killing-field: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-riemannian-volume-density: mathematical-premise
  lem-the-riemannian-volume-density-is-coordinate-independent: mathematical-premise
  def-tgr-framework-units: formulation-prerequisite
justified_by: []
physical_scope: "Prescribed smooth static SI background and pressure data only; no equilibrium-state existence, microscopic trace, convergence, or empirical assertion."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nabamita Banerjee et al., Constraints on Fluid Dynamics from Equilibrium Partition Functions, arXiv:1203.3544v2, §§1.1–1.2 and 2.3.1 (2012)"
      url: https://arxiv.org/pdf/1203.3544
verification:
  precheck: pass
---

## Definition

Let $\Sigma$ be a nonempty compact smooth three-manifold without boundary, let $h$ be a smooth Riemannian metric on $\Sigma$, and give $M=\mathbb R\times\Sigma$ the product smooth structure. Write $x^0=ct_{\rm phys}$ for the standard length coordinate on $\mathbb R$ and use spatial coordinates measured in metres. For a smooth function $N:\Sigma\to(0,\infty)$, extend $N$ constantly along $\mathbb R$ and define the metric on $M$ by $g=-N^2\,dx^0\otimes dx^0+h$, where $h$ is pulled back from $\Sigma$. The metric components and lapse $N$ are dimensionless in these length coordinates. This is a static spacetime model: the coefficients are independent of $x^0$, $\partial_{x^0}$ is the selected future timelike Killing field, and $N$ is its lapse, so $g(\partial_{x^0},\partial_{x^0})=-N^2$.

The Riemannian volume density of $h$ is denoted by $dV_h$; in length coordinates it has units of cubic metres and finite total volume, and no orientation of $\Sigma$ is required. In a fixed SI gauge, let $\Phi:\Sigma\to\mathbb R$ be a smooth electrostatic scalar potential in volts, let $q\in\mathbb R$ be a fixed charge in coulombs, let $T_0>0$ be a reference temperature in kelvins, and let $\mu_0\in\mathbb R$ be a reference chemical-potential parameter in joules. The sign convention is that the local electrochemical parameter is $\mu_0-q\Phi$. For the static Killing field $\xi=\partial_{x^0}$, its lapse is $N_\xi=N$; fix the Killing-normalized temperature $T_K:=N_\xi T$ to be the constant $T_0$, so the local temperature is $T(x)=T_0/N(x)$. Define the local chemical-potential field by $\mu(x)=(\mu_0-q\Phi(x))/N(x)$ for $x\in\Sigma$; then $q\Phi$ and $\mu$ have units of joules.

Let $D\subset(0,\infty)\times\mathbb R$ be an open domain for the pair $(T,\mu)$, measured in kelvins and joules, and let $p:D\to\mathbb R$ be a supplied $C^2$ pressure function with values in pascals. Require $(T(x),\mu(x))\in D$ at every $x\in\Sigma$. The function $p$ is model input; this definition does not derive an equation of state or assert that the prescribed data have a material realization.

## Definition references

[[def-smooth-manifold]]

[[def-cartesian-product]]

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-killing-field]]

[[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[lem-the-riemannian-volume-density-is-coordinate-independent]]

[[def-tgr-framework-units]]

## Facts & Assumptions

**Given:** The data in the Definition, including a nonempty compact smooth $\Sigma$, a smooth positive-definite metric $h$, a smooth positive lapse $N$, and the stated SI fields and parameters.

[F1] [[def-smooth-manifold]]: a smooth manifold is a topological manifold equipped with a maximal smooth atlas.

[F2] [[def-cartesian-product]]: $\mathbb R\times\Sigma$ is the set of ordered pairs with first entry in $\mathbb R$ and second in $\Sigma$.

[F3] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]: the product of smooth manifolds has the canonical product smooth structure and dimension equal to the sum of the dimensions.

[F4] [[def-riemannian-metric-and-riemannian-manifold]]: $h$ is a smooth symmetric tensor and $h_y(v,v)>0$ for each nonzero $v\in T_y\Sigma$.

[F5] [[def-gr-smooth-lorentzian-objects]]: a smooth symmetric nondegenerate metric with inertia $(3,1,0)$ is Lorentzian of signature $(-,+,+,+)$; a smooth timelike field supplies a time orientation.

[F6] [[def-gr-killing-field]]: a smooth vector field is Killing exactly when its metric Lie derivative vanishes, $\mathcal L_\xi g=0$.

[F7] [[def-riemannian-volume-density]] and [[lem-the-riemannian-volume-density-is-coordinate-independent]]: $dV_h=\sqrt{\det(h_{ij})}\,|dx^1dx^2dx^3|$ is a positive smooth density independent of coordinates.

[F8] [[def-tgr-framework-units]]: physical unit assignments use length coordinates $x^0=ct_{\rm phys}$ and spatial coordinates in metres.

[F9] [[def-tgr-framework-units]]: in a specified charged stationary gauge, charge $q$ is in coulombs and potential $\Phi$ is in volts, so $q\Phi$ has units of joules.

[F10] [[def-tgr-framework-units]]: for a smooth Killing field $\xi$, the lapse is $N_\xi:=\sqrt{-g(\xi,\xi)}>0$.

## Proof

1.1 By [F1] and [F2], $M=\mathbb R\times\Sigma$ is the Cartesian product equipped with the smooth product structure of [F3], hence is a smooth four-manifold. The tensor $g=-N^2 dx^0\otimes dx^0+h$ is smooth and symmetric. At each $(x^0,y)$ the tangent space splits as $\mathbb R\partial_{x^0}\oplus T_y\Sigma$, and for $a\in\mathbb R$ and $v\in T_y\Sigma$ its quadratic form is $-N(y)^2a^2+h_y(v,v)$. Since $N(y)>0$ and $h_y$ is positive definite by [F4], this form has one negative direction and three positive directions, and its direct-sum matrix is nondegenerate; hence it has signature $(-,+,+,+)$ by [F5]. [given, F1, F2, F3, F4, F5, algebra]

1.2 The field $\partial_{x^0}$ is smooth and has squared norm $-N^2<0$, so it is future timelike for the selected time orientation. Its local flow translates $x^0$ and fixes $y\in\Sigma$; since $N$ and $h$ are independent of $x^0$, this flow pulls $g$ back to itself and hence $\mathcal L_{\partial_{x^0}}g=0$ by [F6]. Thus the field is Killing, and its lapse equals the prescribed $N$ by [F10]. [given, F5, F6, F10, algebra]

2.1 By [F7], $dV_h$ is a globally defined positive smooth density, so the integral measure does not depend on an orientation or chart. Each point has a coordinate ball whose closure is compact inside a chart; compactness supplies a finite subcover by such balls. On each closure the smooth density coefficient is bounded and the coordinate ball has finite Euclidean volume, so $dV_h(\Sigma)<\infty$. The profiles $T=T_0/N$ and $\mu=(\mu_0-q\Phi)/N$ are smooth because $N$ is smooth and strictly positive. Their length-coordinate conventions follow from [F8], while $q\Phi$ has energy units by [F9]. This establishes that all prescribed data and the volume density used by the hydrostatic functional are well defined. [given, F7, F8, F9, algebra] ∎
