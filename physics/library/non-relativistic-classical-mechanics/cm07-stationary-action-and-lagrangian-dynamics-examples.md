---
page: cm07-stationary-action-and-lagrangian-dynamics-examples
title: "Stationary action and Lagrangian dynamics — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm07-free-particle-straight-lines
  - ex-cm07-oscillator-stationary-saddle-check
  - ex-cm07-polar-coordinate-kinetic-metric-check
  - ex-cm07-total-derivative-gauge-check
  - ex-cm07-nonholonomic-unrestricted-action-fails
  - ex-cm07-pendulum-constraint-elimination-check
requires:
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm02-forces-initial-data-and-newtonian-flow
  - cm03-momentum-work-and-energy-balances
  - cm01-framework-quantities-and-geometry
  - cm-math-variations
  - cm06-regular-constraints-and-moving-frames
---

Worked checks for [[cm07-stationary-action-and-lagrangian-dynamics]].
[[ex-cm07-free-particle-straight-lines]] treats the free one-label model: the
stationary curves are the affine uniform motions, the curve between two fixed
endpoints is unique, and the exact identity
$S(x_{*}+\eta)-S(x_{*})=\frac m2\int|\eta'|^{2}dt$ shows that the stationary
curve is a genuine minimiser in the fixed-endpoint class.
[[ex-cm07-oscillator-stationary-saddle-check]] computes the action of the
sine-mode variations of the oscillator in closed form,
$S(\varepsilon\eta_{n})=\frac{mT\ell_{0}^{2}}{4}\varepsilon^{2}\bigl((n\pi/T)^{2}-\omega^{2}\bigr)$,
so on intervals longer than $\pi/\omega$ arbitrarily small variations make the
action both smaller and larger: stationarity is not minimisation.
[[ex-cm07-polar-coordinate-kinetic-metric-check]] verifies the
coordinate-covariance theorem on cylindrical local coordinates off the
$z$-axis, computing the kinetic metric $m\,\mathrm{diag}(1,r^{2},1)$ and
identifying the Euler-Lagrange equations with the Cartesian equation in the
orthonormal frame. [[ex-cm07-total-derivative-gauge-check]] uses a vector
configuration and a dimensioned affine curve to exhibit the endpoint term
$2\alpha t_{0}^{2}(e_{1}\cdot v_{0})$ while the Euler-Lagrange expression and
the model equation stay fixed.
[[ex-cm07-nonholonomic-unrestricted-action-fails]] uses normalized
dimensionless coordinates and time for the relation $z_{s}=xy_{s}$; its stated
d'Alembert motion has $y_{s}=(1+s^{2})^{-1/2}>0$ and $y_{ss}\ne0$ for $s>0$,
so it cannot satisfy the vakonomic equations for those data. This shows that
the prescriptions are not generally equivalent for velocity constraints.
[[ex-cm07-pendulum-constraint-elimination-check]]
recovers the planar pendulum from the reduction theorem, with kinetic metric
$\mathsf G=ml^{2}$, substituted Lagrangian $\frac12ml^{2}\dot\theta^{2}+mgl\cos\theta$,
the reduced equation $\theta''=-(g/l)\sin\theta$, and the ideal reaction as
the transpose constraint-Jacobian multiple
$D_{x}g_{c}(X(\theta))^{\mathsf T}(\lambda_{1},\lambda_{2})^{\mathsf T}$,
where $\lambda_{2}=0$ and the multiplier components have their declared,
different dimensions.
