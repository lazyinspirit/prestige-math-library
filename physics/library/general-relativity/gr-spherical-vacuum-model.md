---
requires:
  - gr-flat-and-newtonian-bridges
  - gr-local-and-global-energy
  - hausdorff-via-the-diagonal
  - riemannian-metrics-length-distance-and-volume
  - gr-framework-and-geometry
  - gr-connections-and-free-fall
  - gr-tensors-and-observers
  - gr-curvature-and-tides
  - gr-einstein-and-matter
page: gr-spherical-vacuum-model
title: "Spherical Vacuum Model"
status: published
library: physics
items:
  - def-gr-schwarzschild-exterior-model
  - lem-gr-schwarzschild-metric-properties
  - lem-gr-schwarzschild-christoffel-symbols
  - lem-gr-schwarzschild-ricci-and-einstein-tensors
  - lem-gr-schwarzschild-curvature-and-kretschmann-scalar
  - lem-gr-schwarzschild-extension-chart
  - lem-gr-schwarzschild-isotropic-coordinate-form
  - lem-gr-schwarzschild-static-congruence-and-clock-rates
  - lem-gr-schwarzschild-timelike-geodesic-reduction
  - lem-gr-schwarzschild-circular-orbits-and-photon-sphere
  - def-gr-kruskal-model-data
  - lem-gr-kruskal-model-properties
  - lem-gr-kruskal-causal-escape-and-trapping
  - lem-gr-warped-spherical-christoffel-and-ricci
  - lem-gr-warped-base-vacuum-reduction
  - thm-gr-local-birkhoff-warped-product
  - pthm-gr-schwarzschild-vacuum-model
  - pthm-gr-schwarzschild-stationary-redshift
  - pthm-gr-schwarzschild-circular-orbit-predictions
  - rem-gr-schwarzschild-horizon-and-singularity
  - rem-gr-schwarzschild-scope-and-limits
examples: []
---

This page builds the spherical vacuum solution of the field law and its
immediate mathematical consequences. Sixteen items are mathematics — the
exterior datum, its connection, curvature and geodesic data, the two smooth
extensions of the chart across the horizon, and the local warped-product
argument that forces the Schwarzschild form — alongside three physics theorems
and two physics-domain remarks. The theorems comprise the model result that
adopts the vacuum prescription and two restricted predictions about ideal
clocks, rays and test bodies. No item reports a
measurement; no empirical premise or uncertainty occurs anywhere on the page,
and the physics theorems state explicitly that they assert nothing about
nature.

**The exterior datum and its geometry.** The datum is fixed in
[[def-gr-schwarzschild-exterior-model]]: the manifold
$\mathbb R\times(s,\infty)\times S^2$ with the metric
$g=-f\,d(x^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$, $f(r)=1-s/r$,
$s=2G_Nm_*/c^2$, the time orientation $\partial_0$ and product charts from an
atlas of the round sphere. [[lem-gr-schwarzschild-metric-properties]] proves that this
is a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$.
[[lem-gr-schwarzschild-christoffel-symbols]] lists the Christoffel symbols of
its metric-selected connection, and
[[lem-gr-schwarzschild-ricci-and-einstein-tensors]] computes the curvature:
the Ricci tensor and Einstein tensor vanish identically, while the curvature
tensor is nowhere zero. The frame components and the invariant
$R_{abcd}R^{abcd}=12s^2/r^6$ are computed in
[[lem-gr-schwarzschild-curvature-and-kretschmann-scalar]], and the isotropic
form of the metric with the areal-radius conversion
$r=\rho(1+s/(4\rho))^2$ is established in
[[lem-gr-schwarzschild-isotropic-coordinate-form]].

**Horizon and extensions.** [[lem-gr-schwarzschild-extension-chart]]
constructs the advanced-chart metric on $\mathbb R\times(0,\infty)\times S^2$,
smooth and nondegenerate across $r=s$, isometric to the datum on $r>s$, with a
time orientation that restricts to the datum's future cone and with the same
curvature invariant. [[def-gr-kruskal-model-data]] fixes the full Kruskal
datum $\mathcal K=\{UV<1\}\times S^2$ with the implicit radial function
$UV=-(r/s-1)e^{r/s}$; [[lem-gr-kruskal-model-properties]] proves its
properties, the four-region isometries with the exterior datum and the
vanishing of its Ricci tensor, and
[[lem-gr-kruskal-causal-escape-and-trapping]] derives the exact causal cone
criterion, the monotonicity of $U$ and $V$, the radial null geodesics, the
one-way character of the horizon in the precise escape sense, and the
decreasing of $r$ inside the trapped region. The distinction between the
chart breakdown at $r=s$ and the curvature obstruction at $r=0$ is stated in
[[rem-gr-schwarzschild-horizon-and-singularity]], without any maximality,
completeness or singularity-theorem claim.

**Local rigidity.** [[lem-gr-warped-spherical-christoffel-and-ricci]] computes
the Christoffel symbols and Ricci tensor of an arbitrary warped product of a
two-dimensional Lorentzian base with the round sphere.
[[lem-gr-warped-base-vacuum-reduction]] proves the two-dimensional pure-trace
identity, the vacuum reduction $\operatorname{Hess}r=\frac12\Delta r\,q$ and
$r(1-z)=s$, and the existence of the extra Killing field
$K_A=\varepsilon_{AB}\partial^Br$. [[thm-gr-local-birkhoff-warped-product]]
then proves the precise local Birkhoff theorem: a smooth vacuum metric on an
open region which already has the warped form with $z\ne0$ is locally
Schwarzschild in coordinates $(T,r)$, with the extra Killing field
$\partial_T$. The statement is local, and $s$ need not be positive.

**The model and its restricted readings.**
[[pthm-gr-schwarzschild-vacuum-model]] adopts the framework's postulates with
$T=0$, $\Lambda=0$ and proves that the exterior datum satisfies the field law,
together with the static clock identity $\Delta\tau=\sqrt{f(r_0)}\,\Delta t$
and the mass-parameter reading through the Kepler-like law and the isotropic
far-field coefficient. On that model,
[[pthm-gr-schwarzschild-stationary-redshift]] gives the ideal stationary
redshift ratio $E(\lambda_R)/E(\lambda_E)=\sqrt{f(r_E)/f(r_R)}$ for a future null geodesic
joining two static observers, and
[[pthm-gr-schwarzschild-circular-orbit-predictions]] reads the circular
timelike geodesics, the existence threshold $r_0>3s/2$, the stability
threshold $r=3s$ and the photon sphere $r=3s/2$ as restricted predictions for
ideal test bodies and ideal rays. The geodesic mathematics underlying both is
[[lem-gr-schwarzschild-timelike-geodesic-reduction]] and
[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]]; the static
observer congruence is [[lem-gr-schwarzschild-static-congruence-and-clock-rates]].
[[rem-gr-schwarzschild-scope-and-limits]] records exactly what the page does
not assert: no observation, no collapse, no singularity theorem, no ADM mass,
no maximality and no global uniqueness.
