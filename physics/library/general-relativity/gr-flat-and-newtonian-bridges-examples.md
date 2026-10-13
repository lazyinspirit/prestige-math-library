---
requires:
  - gr-flat-and-newtonian-bridges
  - lie-subgroups-actions-and-homogeneous-spaces
  - group-actions-and-cayleys-theorem
  - gr-curvature-and-tides
  - gr-framework-and-geometry
  - gr-einstein-and-matter
  - gr-connections-and-free-fall
  - gr-tensors-and-observers
page: gr-flat-and-newtonian-bridges-examples
title: "Flat And Newtonian Bridges — Examples"
status: published
library: physics
items: []
examples:
  - ex-gr-linearized-curvature-of-the-diagonal-perturbation
  - ex-gr-minkowski-free-fall-and-clock-identities
  - ex-gr-observer-velocity-expansion-numeric-check
  - ex-gr-weak-field-poisson-quadratic-potential
  - ex-gr-scaled-newtonian-harmonic-trajectory
  - cex-gr-first-order-vacuum-is-not-exact-vacuum
  - cex-gr-flat-quotient-is-not-globally-minkowski
---

This page collects the worked computations of
[[gr-flat-and-newtonian-bridges]]. On the flat model, the perturbation
$h_{00}=-2\varphi$, $h_{ij}=-2\varphi\delta_{ij}$ with the mathematical
quadratic potential $\varphi=|\mathbf x|^2/2$ gives
$\Gamma^{(1)i}{}_{00}=x^i$, $\operatorname{Ric}^{(1)}_{00}=3$,
$\operatorname{Ric}^{(1)}_{ij}=3\delta_{ij}$, $S^{(1)}=6$,
$G^{(1)}_{00}=6=2\Delta\varphi$ and $G^{(1)}_{0i}=G^{(1)}_{ij}=0$
([[ex-gr-linearized-curvature-of-the-diagonal-perturbation]]). The free-fall
and clock identities are checked at a timelike vector of coordinate speed
$c/2$, and the low-velocity expansion bounds are verified at relative speed
$s=c/2$ by exact rational comparisons
([[ex-gr-minkowski-free-fall-and-clock-identities]],
[[ex-gr-observer-velocity-expansion-numeric-check]]).

For the Newtonian bridge, the spatially factored weak-field example with
$\varphi(\mathbf x)=|\mathbf x|^2/(2L^2)$ has exact potential
$\Delta\Phi=3\varepsilon c^2/L^2$ and hence exact Newtonian source
$\bar\rho=3\varepsilon c^2/(4\pi G_NL^2)$. The Einstein-family coordinate
density $\rho_\varepsilon=T_{00}/c^2$ is within the stated general component
error of this source; the example supplies no independent dust density or
dust model ([[ex-gr-weak-field-poisson-quadratic-potential]]). For the same
scaled quadratic profile, the Newtonian comparison solution is a harmonic
oscillator of frequency one. If (H1) holds and
$|X_0|+|W_0|<2$, a compact convex $K'\subset B_2(0)$ contains both the
Newtonian path and the scaled geodesic range; then (H2)-(H3) hold with
$K_2=1$ ([[ex-gr-scaled-newtonian-harmonic-trajectory]]).

Two counterexamples delimit the bridges. A first-order vacuum family
$\bar h_{ab}=-4x^1\delta_{a0}\delta_{b0}$ has $G^{(1)}=0$ while its exact
metric has nonzero $\operatorname{Ric}_{00}$ of order $\lambda^2$, so
linearized vacuum does not imply exact vacuum
([[cex-gr-first-order-vacuum-is-not-exact-vacuum]]). Quotienting the flat
model by a timelike translation gives a flat, connected, time-oriented
Lorentzian four-manifold with a closed future timelike curve and no global
chart with constant Minkowski components; vanishing curvature does not imply
global Minkowski geometry
([[cex-gr-flat-quotient-is-not-globally-minkowski]]).
