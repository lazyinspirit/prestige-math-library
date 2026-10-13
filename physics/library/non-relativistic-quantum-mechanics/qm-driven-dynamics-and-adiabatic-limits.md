---
page: qm-driven-dynamics-and-adiabatic-limits
title: Qm Driven Dynamics And Adiabatic Limits
status: published
library: physics
items:
  - def-nrqm-driven-dynamics-framework-driven-model
  - def-nrqm-driven-dynamics-framework-interaction-picture
  - lem-nrqm-driven-dynamics-two-level-rotating-frame
  - pthm-nrqm-driven-dynamics-bounded-norm-propagator
  - pthm-nrqm-driven-dynamics-mild-propagator-and-pictures
  - pthm-nrqm-driven-dynamics-first-order-transition-amplitude
  - pthm-nrqm-driven-dynamics-common-domain-propagator
  - pthm-nrqm-driven-dynamics-circular-drive-exact-rabi
  - pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error
  - def-nrqm-driven-dynamics-framework-adiabatic-protocol
  - pthm-nrqm-driven-dynamics-finite-adiabatic-leakage
  - pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage
  - rem-nrqm-driven-dynamics-scope-and-empirical-status
examples: []
requires:
  - qm-controlled-approximations
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-observables-and-born-probabilities
  - qm-autonomous-dynamics
  - qm-math-composites
  - qm-math-controlled-dynamics
  - qm-math-orbital-and-spin
  - qm-harmonic-oscillator
  - qm-central-potentials-and-hydrogen
  - qm-math-coulomb
---

This page builds the framework's driven-dynamics models and their conditional
statements: prescribed time-dependent energy families and their unitary
two-time propagators in three declared regularity classes, the interaction
picture, the Dyson truncation as an explicit finite-time error budget, the
resonant transitions of two declared two-level drive models, and the
slow-family adiabatic protocols with their $1/T$ leakage estimates.

[[def-nrqm-driven-dynamics-framework-driven-model]] adopts the
driven-dynamics reading of clause (iv) of the autonomous-dynamics postulate
P4: a prescribed self-adjoint family $t\mapsto H(t)$ in the bounded
norm-continuous class, the bounded-control class $H(t)=H_{0}+V(t)$ or the
common-domain class, carried by a unitary two-time propagator, with the
evolved-preparation and outcome-law readings, the energy-basis transition
amplitudes and the two declared two-level drive models (circular and linear
polarization). [[def-nrqm-driven-dynamics-framework-interaction-picture]]
fixes the interaction-picture readings and states the picture equivalence of
outcome laws. The mathematical rotating-frame identities are proved first in
[[lem-nrqm-driven-dynamics-two-level-rotating-frame]], a pure linear-algebra
lemma for the frame $R(t)=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_{z}$.

Dynamics comes next. [[pthm-nrqm-driven-dynamics-bounded-norm-propagator]]
proves well-posedness and the Dyson truncation budget in the bounded
norm-continuous class, and converts the propagator error into a bound on
Born outcome probabilities. [[pthm-nrqm-driven-dynamics-mild-propagator-and-pictures]]
proves the mild propagator, the interaction-picture evolution and the
equivalence of the two readings in the bounded-control class, and
[[pthm-nrqm-driven-dynamics-common-domain-propagator]] proves the strong
propagator with domain invariance in the common-domain class and verifies the
driven oscillator $H_{\mathrm{osc}}-f(t)Q$ as its declared instance.
[[pthm-nrqm-driven-dynamics-first-order-transition-amplitude]] gives the
first-order transition amplitude with its explicit Dyson remainder, evaluates
the sinusoidal drive into co-rotating and counter-rotating parts with their
bounds, and controls the outcome probability by the amplitude error.

The resonant transitions are then stated for the declared two-level models.
[[pthm-nrqm-driven-dynamics-circular-drive-exact-rabi]] reduces the circular
drive exactly to the constant matrix $\frac{\hbar}{2}(\Delta\sigma_{z}+\Omega_{1}\sigma_{x})$
and proves the Rabi populations with resonance, pi-pulse and return times,
while [[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] proves
the rotating-wave error contract for the linear drive, bounding the
rotating-frame propagator against the averaged model and the exact
population against the averaged Rabi probability.

Finally, [[def-nrqm-driven-dynamics-framework-adiabatic-protocol]] declares
the slow-family protocol with its followed spectral subspace, uniform gap and
leakage probability; [[pthm-nrqm-driven-dynamics-finite-adiabatic-leakage]]
proves the finite-dimensional intertwining and the estimate
$\|(I-P(s))U_{T}(s)P(0)\|\le C/T$ whence the Born leakage is at most
$(C/T)^{2}$; and [[pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage]]
verifies the uniform gap of the $n$-th level of the one-centre Coulomb model
along a prescribed $C^{2}$ source-strength path and transfers the same
estimate to the physical protocol duration.
[[rem-nrqm-driven-dynamics-scope-and-empirical-status]] records what the
page adopts, proves and excludes, including its empirical status: no
experiment, no measured frequency or rate, and no laboratory identification
appears.
