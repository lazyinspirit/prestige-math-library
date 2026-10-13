---
page: cm08-symmetry-noether-and-conditional-conservation
title: "Symmetry, Noether and conditional conservation"
status: published
library: physics
items:
  - def-cm08-symmetry-of-the-mechanical-lagrangian
  - pthm-cm08-point-noether
  - pthm-cm08-general-noether
  - pthm-cm08-time-energy
  - pthm-cm08-translation
  - pthm-cm08-rotation
  - pthm-cm08-boost-boundary
  - pthm-cm08-moving-chart-energy-function
  - rem-cm08-external-symmetry-breaking
examples: []
requires:
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm-math-variations
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
---

This page develops the conservation laws of the force model of
[[cm02-forces-initial-data-and-newtonian-flow]] and of the Lagrangian
formulation of [[cm07-stationary-action-and-lagrangian-dynamics]] as
conditional consequences of symmetries of the model's declared
presentation. It adds no new physical assumption:
[[def-cm08-symmetry-of-the-mechanical-lagrangian]] defines a symmetry datum
$(\tau,\xi,B)$ of the mechanical Lagrangian $L=K-U$ by the model's Noether
identity, identifies strict data with time-independent $\xi$ with the
$C^2$ instances of infinitesimal point symmetry of a nonempty chart in the
mathematics track, defines the charge
$C=(\mathsf M v)\cdot\xi-(K+U)\tau-B$, and fixes the dimension
$\mu\ell^{2}\tau^{-1}\sigma^{-1}$ of the charge together with the convention
that $\xi$ generates the configuration change $x\mapsto x+s\xi$.
[[pthm-cm08-point-noether]] proves the point theorem of the model: the charge
of a strict symmetry with time-independent generator is constant along
every motion of the global potential branch, and for an arbitrary presentation its derivative equals the residual
force paired with the generator, so conservation holds exactly when that
pairing vanishes. [[pthm-cm08-general-noether]] is the general theorem of
the page: a datum with time reparametrisation has the charge
$(\mathsf M v)\cdot\xi-E\tau-B$ conserved in the global potential branch,
with the $\tau=0$ and $\xi=0,\tau=1$ cases recovering the strict point
charge and minus the mechanical energy, with the residual-force rate
$\langle d,\xi-v\tau\rangle$, and with the potential gauge: replacing
$U$ by $U+c(t)$ and $B$ by $B-c\tau$ preserves the identity and leaves the
charge unchanged.

The concrete charges are then proved against explicit hypotheses on the
declared potential. [[pthm-cm08-time-energy]] shows that the time-translation
datum, with its parameter measured in seconds, satisfies the model identity
exactly for autonomous representatives,
proves conservation of $K+U$ in the autonomous global potential branch, and,
in that branch, exhibits the failure of conservation along an actual maximal
motion whenever $\partial_{t}U$ is nonzero at a state.
[[pthm-cm08-translation]] uses a dimensionless direction vector and a
length-valued parameter to convert the differential condition
$\sum_{i}a\cdot\nabla_{x_{i}}U=0$, equivalently invariance of $U$ along
simultaneous translation segments contained in $Q$, into conservation of the total-momentum
component $a\cdot P$ in the global potential branch, with the failure rate of
the sharpness clause. Comparing endpoints across excluded segments additionally
requires agreement of the component constants specified in that theorem.
[[pthm-cm08-rotation]] does the same for the rotation
family with dimensionless axis vector $a$ and radian-valued parameter in that
branch, whose charge is the component $a\cdot J$
of the total angular momentum about the inertial origin, together with its
full vector form for rotationally invariant potentials; and
[[pthm-cm08-boost-boundary]] treats the Galilean boost datum with dimensionless
direction $a$ and velocity-valued family parameter, whose charge has mass-length
units and is conserved under the differential translation condition in the global potential
branch. It records that an admissible boosted curve is a motion exactly when the
potential gradients at its paired endpoints agree; this follows when the
joining segments lie in $Q$ or the full endpoint-invariance criterion holds, gives the general rate $K_{a}'=t\,a\cdot F_{\mathrm{tot}}$, and
marks the boundary: Galilean frame availability is kinematic, while the boost
charge is a property of the model's Lagrangian.
[[pthm-cm08-moving-chart-energy-function]] supplies the
bookkeeping of a time-dependent coordinate description: the chart energy
function differs from the inertial mechanical energy by
$\langle X_{t},\mathsf M x'\rangle$, is conserved along chart solutions when
the substituted Lagrangian has no explicit time dependence, and the chart
description of every motion of the global potential branch solves that chart
equation. The page closes with
[[rem-cm08-external-symmetry-breaking]]: in the global potential branch, uniform fields,
confining or time-dependent potentials can break the corresponding symmetries,
residual forces destroy charges at the computed rates, "the Hamiltonian is
conserved" is not a statement about the inertial mechanical energy in a
moving chart, no converse from conservation to symmetry is asserted, and
every conservation statement is a conditional deduction of the model rather
than an empirical finding.

Worked checks live on
[[cm08-symmetry-noether-and-conditional-conservation-examples]]: the
uniform-force model with its partial translation charges and its exact
failure rates, a pair-potential model whose translation and rotation charges
are verified symbolically and on an explicit rigid-rotation motion, an
oscillator observed in a uniformly rotating chart whose conserved chart
Hamiltonian differs from the inertial mechanical energy, and a driven model
with a time-dependent potential whose energy changes at the rate of the
explicit time dependence.
