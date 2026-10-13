---
requires:
  - gr-curvature-and-tides
  - the-de-rham-theorem-and-degree
  - cm-math-continuum
  - gr-framework-and-geometry
  - gr-connections-and-free-fall
  - gr-tensors-and-observers
page: gr-einstein-and-matter
title: "Einstein And Matter"
status: draft
library: physics
items:
  - def-gr-metric-volume-form-and-current-flux
  - lem-gr-metric-volume-form-patching-and-face-normal
  - lem-gr-metric-divergence-and-density-formula
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-gr-lorentzian-perturbations-remain-lorentzian
  - lem-gr-compact-variation-coefficient-vanishing
  - def-gr-hilbert-stress-energy-tensor
  - lem-gr-hilbert-tensor-uniqueness
  - thm-gr-compact-metric-and-timelike-curve-variation
  - def-gr-killing-field
  - thm-gr-killing-and-on-shell-matter-identities
  - def-gr-scalar-field-matter-model
  - prop-gr-scalar-field-stress-energy-conservation
  - def-gr-dust-matter-model
  - def-gr-perfect-fluid-matter-model
  - prop-gr-dust-and-perfect-fluid-conservation-equations
  - post-gr-classical-gravitational-action
  - post-gr-einstein-field-law
  - pthm-gr-adopted-action-and-einstein-equations
  - pthm-gr-einstein-consistency-and-energy-conditions
  - rem-gr-einstein-matter-scope-and-conventions
examples: []
---

This page states the classical field law of the framework and the matter models
it couples to. Sixteen items are mathematical definitions and conditional
deductions inside a time-oriented smooth Lorentzian four-manifold. Five are
physics items: two adopted presentations of the field law, two model-conditional
theorems and one scope note. No item reports a measurement, and none asserts
that the model or its postulates describe nature.

**Volume, divergence and flux.** The metric volume form
$\mathrm{vol}_g=\sqrt{|\det g|}\,dx^0\wedge\cdots\wedge dx^3$, the current
flux $\Phi_J$ through oriented $3$-faces and finite-chain charges are defined
in [[def-gr-metric-volume-form-and-current-flux]]; the chart-independence of
the volume form, its value $1$ on positively oriented orthonormal frames, and
the unit normal and density of a non-null hyperplane are proved in
[[lem-gr-metric-volume-form-patching-and-face-normal]]. The density identity
$\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ is
[[lem-gr-metric-divergence-and-density-formula]], and the divergence theorem
on finite smooth singular chains with the flux balance for divergence-free currents
$\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)$ and the non-null face formula
are [[thm-gr-density-divergence-and-finite-chain-flux]].

**Variation and the Hilbert tensor.** Stability of Lorentzian signature under
small compactly supported perturbations ([[lem-gr-lorentzian-perturbations-remain-lorentzian]])
and the coefficient-vanishing lemma
([[lem-gr-compact-variation-coefficient-vanishing]]) are the analytic inputs
for the first variation of the Einstein-Hilbert density and the timelike
length functional ([[thm-gr-compact-metric-and-timelike-curve-variation]]). For
an action domain containing every compactly supported metric perturbation,
the Hilbert stress-energy tensor is defined by
$\delta S_m=-\tfrac{1}{2c}\int T_{ab}\delta g^{ab}\mathrm{vol}_g$
([[def-gr-hilbert-stress-energy-tensor]]) and shown to be unique
([[lem-gr-hilbert-tensor-uniqueness]]). Killing fields, their geodesic
contraction, the conserved current built from a divergence-free symmetric
tensor and the on-shell conservation of the Hilbert tensor are treated in
[[def-gr-killing-field]] and
[[thm-gr-killing-and-on-shell-matter-identities]].

**Matter branches.** The scalar-field model with its action difference,
equation $\Box_g\varphi-V'(\varphi)=0$ and candidate stress-energy tensor is
[[def-gr-scalar-field-matter-model]]; the metric variation of its action is
represented by that tensor and its conservation identity
$\nabla^aT_{ab}=K(\Box_g\varphi-V'(\varphi))\partial_b\varphi$ is proved in
[[prop-gr-scalar-field-stress-energy-conservation]]. The dust model with its
continuity and geodesic system is [[def-gr-dust-matter-model]] and the
perfect-fluid model with its conservation equations is
[[def-gr-perfect-fluid-matter-model]]; the exact equivalence of
$\nabla^aT_{ab}=0$ with those systems is
[[prop-gr-dust-and-perfect-fluid-conservation-equations]].

**The field law.** The action formulation, its Einstein-Hilbert density with
coupling $\kappa=8\pi G_N/c^4$, its supplied scalar-field matter action and its
variational principle are adopted in [[post-gr-classical-gravitational-action]];
prescribed dust and perfect-fluid sectors use the
direct-equation presentation is adopted in
[[post-gr-einstein-field-law]]. The two are identified by
[[pthm-gr-adopted-action-and-einstein-equations]] for the supplied action and its
Hilbert tensor: stationarity of the total
action difference under compactly supported metric variations holds exactly
when $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$. The consistency conditions of that
law — necessary conservation, the trace identity, the parameter-variation
identity, the flat vacuum solution and the rest-frame readings of the energy
conditions — are collected in
[[pthm-gr-einstein-consistency-and-energy-conditions]], and the scope note
[[rem-gr-einstein-matter-scope-and-conventions]] fixes the status of the
adopted and derived claims and the obligations deferred to later pages. The
companion page [[gr-einstein-and-matter-examples]] computes the volume form
and flux, conservation, Killing currents and energy-condition verdicts on
flat-space examples and two counterexamples.
