---
requires:
  - gr-einstein-and-matter
  - compactness
  - darboux-lhopital-and-taylor
  - the-divergence-theorem-and-classical-stokes
  - volumes-of-elementary-solids-and-solids-of-revolution
  - wave-equation-representation-formulas
  - gr-framework-and-geometry
  - gr-tensors-and-observers
  - gr-connections-and-free-fall
  - gr-curvature-and-tides
page: gr-flat-and-newtonian-bridges
title: "Flat And Newtonian Bridges"
status: published
library: physics
items:
  - def-gr-minkowski-model-and-inertial-chart
  - lem-gr-flat-model-connection-curvature-and-geodesics
  - def-gr-flat-linearized-perturbation
  - thm-gr-flat-linearized-curvature-and-gauge
  - thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge
  - def-gr-stationary-weak-field-data
  - lem-gr-weak-field-admissibility-and-inverse-bounds
  - lem-gr-weak-field-christoffel-bounds
  - thm-gr-weak-field-einstein-stress-hierarchy
  - lem-gr-weak-field-geodesic-acceleration
  - thm-gr-weak-field-scaled-trajectory-limit
  - lem-gr-observer-relative-velocity-expansions
  - thm-gr-vanishing-curvature-implies-locally-minkowski
  - def-gr-newtonian-comparison-model-and-identification
  - pthm-gr-minkowski-vacuum-model
  - pthm-gr-uniform-weak-slow-correspondence
  - rem-gr-local-flatness-versus-global-flatness
  - rem-gr-flat-bridge-scope-and-limits
examples: []
---

This page builds two explicit bridges into and out of the framework's field
law: the flat model $(\mathbb R^4,\eta)$ as a model of the theory, and the
controlled weak-field/slow-motion limit in which general relativity reproduces
Newtonian kinematics. Fourteen items are mathematical definitions and conditional
deductions about the flat model, its linearization and a class of weak-field
families — and four are physics: the Newtonian comparison model with its
adopted identification, and the two model-conditional theorems that read the
mathematics through the framework's postulates, and the physics scope remark. No item reports a measurement
or an experiment; no empirical premise or uncertainty occurs anywhere on this
page, and the physics theorems state explicitly that they assert nothing about
nature.

**The flat model.** The Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$
on $\mathbb R^4$ with its identity (inertial) chart, the causal classification
of tangent vectors and the induced time orientation are fixed in
[[def-gr-minkowski-model-and-inertial-chart]]. In that chart the
metric-selected connection has vanishing Christoffel symbols and curvature,
the coordinate fields $\partial_a$ are Killing fields, the geodesics are the
straight lines $x(\gamma(s))=x_0+sv$, and every future timelike geodesic with
$\eta(v,v)=-1$ has proper-time parameter $\tau=s/c$, constant coordinate
velocity $\mathbf w=(c/v^0)(v^1,v^2,v^3)$ with $|\mathbf w|<c$, and speed from
the clock identity $\Delta\tau=\sqrt{1-|\mathbf w|^2/c^2}\,(t_1-t_0)$
([[lem-gr-flat-model-connection-curvature-and-geodesics]]). The pointwise
low-velocity expansions of observer-relative energy and momentum,
$E_n(P)=mc^2(1-s^2/c^2)^{-1/2}$ and $|q_n(P)|=ms(1-s^2/c^2)^{-1/2}$ with
uniform Lagrange-remainder bounds, are
[[lem-gr-observer-relative-velocity-expansions]].

**Flat linearization.** A flat linearized family
$g_{ab}(\lambda)=\eta_{ab}+\lambda h_{ab}+\lambda^2q_{ab}(\lambda,\cdot)$,
its first-order coefficients, the trace reversal $\bar h_{ab}$ and the gauge
transformation $h'_{ab}=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ are defined in
[[def-gr-flat-linearized-perturbation]]. The first-order Christoffel, Ricci,
scalar and Einstein coefficients are computed and bounded in
[[thm-gr-flat-linearized-curvature-and-gauge]], together with the two exact
gauge identities $\bar h'{}_{ab}=\bar h_{ab}-\partial_a\xi_b-\partial_b\xi_a+
\eta_{ab}\partial^c\xi_c$, $\partial^a\bar h'{}_{ab}=\partial^a\bar h_{ab}-
\Box\xi_b$, the gauge invariance of $\operatorname{Ric}^{(1)}$, $S^{(1)}$ and
$G^{(1)}$, the harmonic-gauge reduction $G^{(1)}_{ab}=-\tfrac12\Box\bar h'_{ab}$
and the quadratic remainder bound. Harmonic gauge here is a coordinate
condition on the perturbation, not a statement about solutions; the wave
equation that supplies it, $\Box\xi_b=\partial^a\bar h_{ab}$ with zero initial
data, is solved on all of $\mathbb R^4$ by spherical means and Duhamel's
formula in [[thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge]].

**The controlled Newtonian bridge.** Stationary weak-field data have
spacetime region $\Omega$, spatial base $U=\pi(\Omega)$, spatial potential
$\varphi:U\to\mathbb R$ and component family
$g_{ab}(\varepsilon,p)=\eta_{ab}+\varepsilon(-2\varphi(\pi p))\delta_{ab}+r_{ab}(\varepsilon,\pi p)$, with derivative bounds on a compact
spatial set $K\subseteq U$ and Einstein-family condition
$G_{ab}(g(\varepsilon))=\kappa T_{ab}(\varepsilon)$
([[def-gr-stationary-weak-field-data]]). Their inverse-metric bounds,
stationarity and Killing property of $\partial_0$ are proved in
[[lem-gr-weak-field-admissibility-and-inverse-bounds]], and their uniform
Christoffel bounds, including
$\Gamma^i{}_{00}-\partial_i\Phi/c^2=O(\varepsilon^2/L)$, are in
[[lem-gr-weak-field-christoffel-bounds]]. Every Einstein family has the
component hierarchy $G_{00}=2\Delta\Phi/c^2+O(\varepsilon^2)$,
$G_{ij}=O(\varepsilon^2)$ and $G_{0i}=O(\varepsilon^{3/2})$. With the
additional independent nonnegative dust, weak-source and slow-tilt
hypotheses, the hierarchy compares $\Delta\Phi$ with
$4\pi G_N\mu_\varepsilon$ up to the stated error, where
$\mu_\varepsilon$ is the dust rest-mass density; the coordinate density
$\rho_\varepsilon=T_{00}/c^2$ remains a distinct quantity
([[thm-gr-weak-field-einstein-stress-hierarchy]]). The coordinate-time
reparametrization of geodesics gives the uniform Newtonian acceleration
error $|\ddot x^i+\partial_i\Phi|\le C_3c^2\varepsilon^2/L$
([[lem-gr-weak-field-geodesic-acceleration]]), and scaled trajectories
compare with $X'=W$, $W'=-\nabla\psi$ over $[0,S_*]$, with an $O(\varepsilon)$
Gronwall bound and an $\varepsilon^{-1/2}$ coordinate-time horizon
([[thm-gr-weak-field-scaled-trajectory-limit]]). These are conditional
estimates on a hypothesized family; they assert neither its existence nor
that any observed system has this form.

**Local flatness and its limits.** Vanishing curvature on a normal
neighborhood makes the differential of the exponential map a linear isometry, so the exponential
chart has constant components $\eta_{ab}$, and conversely a chart with
constant components forces vanishing curvature
([[thm-gr-vanishing-curvature-implies-locally-minkowski]]).
[[rem-gr-local-flatness-versus-global-flatness]] separates that local
statement from first-order flatness at a point and from global Minkowski
geometry, which curvature alone does not force.

**The physics of the bridge.** The framework postulates of the classical
domain, field law and free-fall and clocks apply to the flat model in
[[pthm-gr-minkowski-vacuum-model]]: with $\Lambda=0$ and $T=0$ the flat model
satisfies the adopted field law, ideal test bodies follow its straight timelike
geodesics, ideal clocks read proper time, and there is no tidal response; all
are conditional model deductions. The Newtonian comparison definition adopts
an exact identification of the spatial region, time, potential and coupling,
while its source density $\rho_N$ satisfies its own exact Poisson equation
([[def-gr-newtonian-comparison-model-and-identification]]). Under the
independent dust hypotheses, the bridge theorem proves a quantitative match
between $\rho_N$, the relativistic coordinate density $\rho_\varepsilon$ and
the dust rest-mass density $\mu_\varepsilon$; these densities are not
identified by definition. It also proves the conditional free-fall
acceleration and trajectory estimates
([[pthm-gr-uniform-weak-slow-correspondence]]). The status of these claims —
adopted model assumptions, derived conditional statements, and no empirical
claim — is fixed in [[rem-gr-flat-bridge-scope-and-limits]].

The companion page
[[gr-flat-and-newtonian-bridges-examples]] computes the linearized curvature
of an explicit perturbation, works the free-fall and clock identities and the
low-velocity bounds at explicit data, verifies an exact quadratic Poisson
source and its error-qualified match with the coordinate density, verifies
the scaled comparison system for a quadratic potential, and exhibits two
counterexamples: a flat Lorentzian four-manifold that is not globally
Minkowski, and a first-order vacuum family that is not an exact vacuum.
