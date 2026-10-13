---
page: cm16-stability-perturbations-and-chaos-examples
title: "Stability, perturbations and chaos — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm16-pendulum-equilibrium-checks
  - ex-cm16-linearization-and-growth-checks
  - ex-cm16-isotropic-oscillator-return-map-check
  - ex-cm16-pulse-horseshoe-data-check
  - cex-cm16-positive-growth-is-not-chaos
  - cex-cm16-stability-does-not-imply-attraction
  - ex-cm16-recurrence-volume-check
  - ex-cm16-two-rotor-kam-units-check
requires:
  - cm16-stability-perturbations-and-chaos
  - cm-math-dynamics
  - cm01-framework-quantities-and-geometry
  - cm02-forces-initial-data-and-newtonian-flow
  - cm-math-chaos
  - cm04-one-dimensional-conservative-and-dissipative-models
  - cm-math-balances
  - cm-math-kam
---

These examples exercise the stability, linearisation, chaos and recurrence
items of [[cm16-stability-perturbations-and-chaos]] on declared model data
and probe the boundaries of the page's statements.

[[ex-cm16-pendulum-equilibrium-checks]] works the ideal pendulum in the angle
chart with $m=1\ \mathrm{kg}$, $\ell=1\ \mathrm m$ and
$g=9.81\ \mathrm{m\,s^{-2}}$: the downward equilibrium is a strict minimum,
hence Lyapunov stable and not attracting, with the purely imaginary
linearisation frequencies $\pm i\,3\sqrt{109}/10\ \mathrm{s^{-1}}$; the upward
equilibrium has the negative Hessian $-mg\ell$ and is unstable, with the real
rates $\pm3\sqrt{109}/10\ \mathrm{s^{-1}}$.
[[ex-cm16-linearization-and-growth-checks]] computes the flows and growth
rates of two dimensionless one-label Cartesian models in $\mathbb R^3$: the
harmonic force $F(\mathbf q)=-\mathbf q$ has an orthogonal rotation flow, so
every finite-time growth rate vanishes and every existing Lyapunov exponent is
$0$; the repulsive force $F(\mathbf q)=\mathbf q$ has exact rates $\pm1$ along
its eigendirections and positive Lyapunov exponent $1$ at equilibrium.
[[ex-cm16-isotropic-oscillator-return-map-check]] shows the
three-dimensional isotropic force model's stroboscopic map at half period to
be minus the identity on its six-dimensional phase space: every state is
periodic, the periodic points are dense, but the map is neither topologically
mixing nor sensitive, so continuous maps with dense periodic points need not
be chaotic in the page's stated sense.
[[ex-cm16-pulse-horseshoe-data-check]] evaluates the constants of the pulsed
horseshoe on its invariant axis at $a=100$: the coding box $R=13$, the
radicands in $[74,126]$, the contraction factor $1/\sqrt{74}$, the limiting quadratic fixed
points $1\pm\sqrt{101}$, the limiting kick composition, and the axial physical
bounds $13\ \mathrm m$ and
$26\pi\ \mathrm{kg\,m\,s^{-1}}$ at $\ell_0=1\ \mathrm m$, $m=1\ \mathrm{kg}$,
$\omega_0=2\pi\ \mathrm{s^{-1}}$.

The counterexamples delimit the statements.
[[cex-cm16-positive-growth-is-not-chaos]] exhibits the repulsive linear model,
whose equilibrium has a positive Lyapunov exponent and whose time-one map has
no nonempty compact invariant set beyond $\{0\}$; that singleton fails
sensitivity, so a positive exponent at an equilibrium does not produce a
chaotic invariant set of that map.
[[cex-cm16-stability-does-not-imply-attraction]] exhibits the harmonic model,
Lyapunov stable at its equilibrium while the datum $(\delta,0)$ keeps its
distance: stability is not attraction.
[[ex-cm16-recurrence-volume-check]] verifies the recurrence theorem on the
trapped one-label, three-dimensional radial quartic model of the flat Cartesian
presentation, whose compact invariant energy sublevels have finite six-volume, and
contrasts it with the free model, whose unbounded energy sublevels violate the
finite-volume hypothesis.
[[ex-cm16-two-rotor-kam-units-check]] restores units for the two-rotor KAM
statement at $\mathcal I=1\ \mathrm{kg\,m^2}$, $E_0=1\ \mathrm J$, checks the
exact scaling identities, the physical angular frequencies $\omega_0\nu_i$,
the exclusion of rational frequency labels and the invariance under equal
rescaling of inertia and energy; it does not evaluate the KAM constant $c$.
All data on this page are declared model data; no measurement or empirical
comparison is asserted anywhere.
