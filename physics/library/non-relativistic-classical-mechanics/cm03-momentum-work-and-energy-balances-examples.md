---
page: cm03-momentum-work-and-energy-balances-examples
title: "Momentum, work and energy balances — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm03-two-body-hooke-model-check
  - ex-cm03-driven-mechanical-energy-balance
  - cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation
  - cex-cm03-closed-force-field-without-a-global-potential
requires:
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
---

These examples and counterexamples exercise the balances of
[[cm03-momentum-work-and-energy-balances]] on explicit data and probe their
hypotheses. The two-body Hooke model
([[ex-cm03-two-body-hooke-model-check]]) is a declared pair-potential model
with a linear force map and an exact circular relative motion about a
uniformly moving centre of mass; the check computes the total momentum, the
centre of mass, the kinetic splitting with the reduced mass, the angular
momentum about the origin and about a moving reference curve — where the
correction $-o'\times P$ is nonzero when the chosen nonzero velocities $\mathbf W$ and
$V$ are perpendicular, although the total torque vanishes — the
mechanical energy as a constant of the motion, the power identity, and the
kinetic and mechanical boost terms under the change to the centre-of-mass
frame.

The driven one-dimensional model
([[ex-cm03-driven-mechanical-energy-balance]]) declares a time-dependent
potential $U(t,x)=\frac12\lambda tx^{2}$ and a residual force and exhibits a
quadratic motion on which the balance
$E'=\partial_{t}U+d\,\dot x$, the work-energy theorem, the integrated work
form and the shift of the energy and its rate under the renormalization
$U\mapsto U+c(t)$ are computed in explicit numbers; the energy is not
conserved because the model is driven.

The counterexamples probe the hypotheses. Centrality of the pair forces is
not necessary for the vanishing of the internal torque sum: the three-label
model of
[[cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation]]
has constant, antisymmetric, non-central pair forces whose pair torques
cancel identically through a telescoping identity, so its angular momentum
about a fixed origin is constant although the centrality clause of
[[pthm-cm03-angular-momentum-balance]] fails. Closedness of a
time- and velocity-independent force field is not sufficient for a global
potential: on the declared annular domain the scaled vortex field of
[[cex-cm03-closed-force-field-without-a-global-potential]] is smooth, closed
and state-Lipschitz, yet its circulation around the circle of radius
$1\,\mathrm m$ is
$2\pi\beta\neq0$, so no global potential energy exists and the conservation
clause of [[pthm-cm03-energy-balance]] cannot be applied globally; on every
star-shaped subdomain the Poincaré lemma supplies a local potential and the
energy is conserved locally.
