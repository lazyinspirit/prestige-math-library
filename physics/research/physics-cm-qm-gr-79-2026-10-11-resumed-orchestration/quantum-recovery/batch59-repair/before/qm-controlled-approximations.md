---
page: qm-controlled-approximations
title: Qm Controlled Approximations
status: draft
library: physics
items:
- lem-nrqm-approximations-scaled-line-model-correspondence
- def-nrqm-approximations-framework-variational-trial-model
- def-nrqm-approximations-framework-perturbed-family-model
- def-nrqm-approximations-framework-wkb-regime-model
- post-nrqm-approximations-static-finite-level-dipole-coupling
- pthm-nrqm-approximations-variational-bounds-and-min-max
- pthm-nrqm-approximations-nondegenerate-perturbation-expansion
- pthm-nrqm-approximations-degenerate-first-order-splitting
- pthm-nrqm-approximations-wkb-allowed-region-error
- pthm-nrqm-approximations-turning-point-connection
- pthm-nrqm-approximations-barrier-transmission-asymptotics
- rem-nrqm-approximations-scope-and-empirical-status
examples: []
requires:
- qm-central-potentials-and-hydrogen
- qm-harmonic-oscillator
- qm-math-fock-and-equilibrium
---

This page declares the framework's controlled-approximation models and proves
their conditional statements: the variational trial reading of an assigned
energy observable, the bounded stationary perturbation of a gapped isolated
label, and the semiclassical WKB regime of a one-dimensional stationary
equation. It states every approximation with its controls: form domains and
spectral lower bounds for the variational bounds, isolated gaps and
quantitative smallness for perturbation theory, and smoothness, simple
separated turning points and an explicit semiclassical parameter for the WKB
regime.

The supporting mathematics comes first.
[[lem-nrqm-approximations-scaled-line-model-correspondence]] is the exact
nondimensionalisation identity that transfers the physical line-model
equation and its phase integral into the dimensionless equation carrying the
semiclassical parameter $h$.
[[def-nrqm-approximations-framework-variational-trial-model]] declares the
variational reading: a self-adjoint energy observable bounded below, its form
domain $Q(H)$ and form $q_{H}$, the model bottom $E_{0}$, a bottom gap and
the discrete ladder below the essential spectrum.
[[def-nrqm-approximations-framework-perturbed-family-model]] declares the
perturbed family $H(\lambda)=H_{0}+\lambda V$ with a bounded self-adjoint
perturbation, the isolated finite-multiplicity label with its gap, the
first-order operator $P_{0}VP_{0}$ and the followed perturbed label of the
contour construction. [[def-nrqm-approximations-framework-wkb-regime-model]]
declares the WKB regime model: a compactly supported $C^{5}$ potential, the
reference scales and dimensionless parameter
$h=\hbar/(\ell\sqrt{2mE_{\star}})$, the turning-point vocabulary and the
declared barrier transmission reading.
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] adopts the
compressed finite-level dipole coupling of the declared Coulomb pair in a
uniform static field, with the uncompressed linear potential explicitly
excluded.

[[pthm-nrqm-approximations-variational-bounds-and-min-max]] proves the trial
lower bound $q_{H}[u]\ge E_{0}$, the gap-overlap control
$\|(I-P)u\|^{2}\le\varepsilon/g$ for trial values within $\varepsilon$ of an
isolated bottom, and the min-max characterisation of the model's discrete
ladder.
[[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] proves the
existence, reality and analyticity of the followed label, the first- and
second-order coefficients with the reduced inverse of the full complementary
spectral subspace and the explicit cubic remainder bound.
[[pthm-nrqm-approximations-degenerate-first-order-splitting]] localises every
perturbed eigenvalue within $4\lambda^{2}v^{2}/g$ of
$E+\lambda\operatorname{spec}(P_{0}VP_{0})$ and states explicitly that no
branch selection or relaxation is deduced.
[[pthm-nrqm-approximations-wkb-allowed-region-error]] gives the Gronwall
error of the WKB wave on an allowed interval away from turning points;
[[pthm-nrqm-approximations-turning-point-connection]] proves the Airy
connection across a single simple turning point with envelope error control;
and [[pthm-nrqm-approximations-barrier-transmission-asymptotics]] proves the
separated smooth-barrier transmission law
$T(h)=e^{-2S/h}(1+O(\varepsilon(h)+e^{-2S/h}))$ with its physical exponent.
[[rem-nrqm-approximations-scope-and-empirical-status]] records what the page
adopts, proves and excludes, including the static-Stark limitation and the
absence of any empirical record on this page.
