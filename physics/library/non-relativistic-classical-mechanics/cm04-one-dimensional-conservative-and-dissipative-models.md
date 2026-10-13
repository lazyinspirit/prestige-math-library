---
page: cm04-one-dimensional-conservative-and-dissipative-models
title: "One-dimensional conservative and dissipative models"
status: draft
library: physics
items:
  - def-cm04-one-dimensional-models-and-equilibria
  - def-cm04-phase-plane-and-energy-level-sets
  - post-cm04-harmonic-model
  - pthm-cm04-conservative-motion-and-energy
  - pthm-cm04-equilibrium-stability-at-a-strict-minimum
  - pthm-cm04-harmonic-motion
  - post-cm04-linear-damping-model
  - pthm-cm04-damped-motion
  - pthm-cm04-damped-decay-and-stability
  - post-cm04-sinusoidal-drive-model
  - pthm-cm04-resonance-and-boundedness
  - rem-cm04-linear-model-scope
examples: []
requires:
  - cm-math-verification
  - cm03-momentum-work-and-energy-balances
  - sine-cosine-and-the-definition-of-pi
  - complex-power-series-and-analytic-functions
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-geometry
  - cm-math-approximation
  - cm-math-dynamics
---

This page develops the one-dimensional conservative and dissipative models of
the framework as declared restricted model classes and proves their motion
theory. The class is fixed by
[[def-cm04-one-dimensional-models-and-equilibria]]: a single scalar
coordinate with an open configuration interval, a fixed positive mass and a
scalar force law with the standing continuity and state-Lipschitz
regularity, together with the vocabulary of motions, the phase system, the
potential presentation with residual forces, the mechanical energy, the
equilibria of an autonomous force law and the oscillator-type data
$(m,c,k,f)$, with their dimensions.
[[def-cm04-phase-plane-and-energy-level-sets]] supplies the geometric
reading: the phase plane and phase curves, the energy function with its
level and sublevel sets, turning positions and points, and the equilibrium
and stability vocabulary carried over from the mathematical definitions.

The conservative theory is
[[pthm-cm04-conservative-motion-and-energy]]: for a time- and
velocity-independent force law $F=-U'$ with a $C^{2}$ potential, every datum
has exactly one maximal motion, the mechanical energy
$\tfrac12mx'^{2}+U(x)$ is constant along every motion, the position stays in
the sublevel set $\{U\le E_{0}\}$, the velocity is determined by the
position up to sign wherever $U<E_{0}$, and the constant motions are exactly
the rest motions at equilibria. At a strict local minimum of $U$,
[[pthm-cm04-equilibrium-stability-at-a-strict-minimum]] gives Lyapunov
stability of the rest point and identifies the linearised model as the
oscillator-type model with $k=U''(x_{*})$, with no instability claim in any
other case.

The three linear models are adopted postulates with their declared regimes
and empirical qualifications:
[[post-cm04-harmonic-model]] (force $-kx$, potential $kx^{2}/2$, the
quadratic approximation at a stable minimum), [[post-cm04-linear-damping-model]]
(the harmonic restoring force with the phenomenological drag $-cv$,
fluctuations neglected in its stated regime) and
[[post-cm04-sinusoidal-drive-model]] (the damped oscillator with the
prescribed external force $f_{0}\cos(\Omega t)$). Their motion theory is
exact and conditional: [[pthm-cm04-harmonic-motion]] classifies the motions
as the sinusoids $A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ with
amplitude and phase, least period $2\pi/\omega$, conserved energy
$\tfrac12kR^{2}$ and the elliptical phase curves of the energy level sets;
[[pthm-cm04-damped-motion]] classifies the damped motions by the sign of
$c^{2}-4mk$ and proves the dissipation identity $E'=-c\,x'^{2}$ with the
characterisation of the rest motion; [[pthm-cm04-damped-decay-and-stability]]
bounds every strictly damped motion by its initial phase norm, proves the
convergence to rest together with the velocity and the global asymptotic
stability of the origin; and [[pthm-cm04-resonance-and-boundedness]] gives
the steady sinusoidal response with its amplitude
$|f_{0}|/\sqrt{(k-m\Omega^{2})^{2}+c^{2}\Omega^{2}}$ and, when $f_{0}\ne0$
and $c^{2}<2mk$, its unique maximum at a positive drive frequency,
the reduction of every motion to the steady response plus a homogeneous
motion, boundedness for $c>0$ with exponential approach to the steady
response, boundedness at $c=0$ away from $\Omega=\sqrt{k/m}$, and the
unbounded resonant motions at $c=0$, $\Omega=\sqrt{k/m}$ with nonzero drive.
The closing audit [[rem-cm04-linear-model-scope]] separates the declared
assumptions, the conditional deductions, the approximation status of the
quadratic models and the empirical handling of measured parameters, and
records the open extensions. Worked checks of the models on explicit data
are collected on [[cm04-one-dimensional-conservative-and-dissipative-models-examples]].

