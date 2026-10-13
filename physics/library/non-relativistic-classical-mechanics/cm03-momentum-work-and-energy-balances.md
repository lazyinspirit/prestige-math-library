---
page: cm03-momentum-work-and-energy-balances
title: "Momentum, work and energy balances"
status: published
library: physics
items:
  - def-cm03-centre-of-mass-and-momenta
  - pthm-cm03-centre-of-mass-and-kinetic-splitting
  - pthm-cm03-momentum-balance
  - pthm-cm03-angular-momentum-balance
  - pthm-cm03-work-energy
  - def-cm03-potential-and-mechanical-energy
  - pthm-cm03-energy-balance
  - pthm-cm03-frame-transformations
  - rem-cm03-conservation-scope
examples: []
requires:
  - cm02-forces-initial-data-and-newtonian-flow
  - line-integrals-and-the-gradient-theorem
  - cm-math-rigid
  - cm01-framework-quantities-and-geometry
  - cm-math-balances
  - cm-math-geometry
---

This page defines the mechanical quantities of the force model of
[[cm02-forces-initial-data-and-newtonian-flow]] and proves their balance
statements in one inertial frame. The definition
[[def-cm03-centre-of-mass-and-momenta]] fixes, for any $C^{2}$ curve family
of the model, the total mass $M$, the total momentum $P$, the centre of mass
$X$ and the relative positions $\rho_{i}$, the angular momentum $J_{o}$ about
a fixed or moving reference curve together with the total, external and
internal torques, the kinetic energy $K$, the power $\mathcal P$ of the total
force and its work $W$ over a time interval, with their dimensions and their
frame dependence. The algebraic content of these symbols is
[[pthm-cm03-centre-of-mass-and-kinetic-splitting]]: $P=MV$, the mass-weighted
relative positions sum to zero, and the kinetic sum splits into
centre-of-mass and relative parts, with the two-body reduced-mass form.

The balance theorems are conditional on the interaction structure the model
declares. For a model with the external-plus-pair presentation and
antisymmetric pair forces, [[pthm-cm03-momentum-balance]] gives
$\dot P=\sum_{i}F_{i}^{\mathrm{ext}}$ and the centre-of-mass equation
$MX''=\sum_{i}F_{i}^{\mathrm{ext}}$, so that the total momentum is constant
on an interval exactly when the total external force vanishes there. Under the
same presentation, [[pthm-cm03-angular-momentum-balance]] proves the
internal-torque identity $T_{o}=T_{o}^{\mathrm{ext}}+I$, the moving-origin
balance $J_{o}'=T_{o}^{\mathrm{ext}}+I-o'\times P$, the vanishing of the
internal torque sum $I$ when the evaluated pair forces are central, and the
conservation of $J_{o}$ about a fixed point with vanishing total torque;
centrality is sufficient but not necessary, as the companion page's
counterexample exhibits. Independently of any pair structure,
[[pthm-cm03-work-energy]] proves $K'=\mathcal P$ and the work-energy theorem
$K(t_{1})-K(t_{0})=W([t_{0},t_{1}])$.

The potential branch is defined in
[[def-cm03-potential-and-mechanical-energy]]: a $C^{2}$ potential $U$ with
$F_{i}=-\nabla_{x_{i}}U$ (optionally with declared residual forces), the
potential and mechanical energy along a curve family, the non-uniqueness of
the potential under addition of a function of time alone, the closed/exact
distinction for time- and velocity-independent configuration-space force fields — with the
Poincaré lemma on star-shaped subdomains, no global potential from closedness
alone, and equipotential level sets — and local potentials.
[[pthm-cm03-energy-balance]] then gives
$E'=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i},w_{i}\rangle$, the
conservation of $E$ when the representative is time-independent and the
evaluated residual forces vanish along the motion (in particular, when the
residual-force maps vanish throughout their state domains), and the integrated
work form. The frame behaviour of all these
quantities — affine centre-of-mass law, the boost law $\tilde P=RP+Mv$, the kinetic and
mechanical boost terms, the angular-momentum boost, and the transformation of
torque, power and work through the transferred force map — is
[[pthm-cm03-frame-transformations]].

The closing audit [[rem-cm03-conservation-scope]] records which hypotheses
each conservation statement needs, the open-system boundary inherited from
[[rem-cm02-open-system-warning]], the frame-relativity of the conserved
values, the normalization of the potential, and the empirical status of model
parameters. Worked checks of the laws on explicit data, the non-central
cancellation counterexample, the closed-field-without-global-potential
counterexample and a driven-energy computation are collected on
[[cm03-momentum-work-and-energy-balances-examples]].
