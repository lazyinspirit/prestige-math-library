---
page: cm12-legendre-transformation-and-hamiltonian-mechanics
title: "Legendre transformation and Hamiltonian mechanics"
status: published
library: physics
items:
  - def-cm12-cotangent-momentum
  - def-cm12-regularity
  - def-cm12-hyperregularity
  - def-cm12-hamiltonian
  - pthm-cm12-local-legendre
  - pthm-cm12-mechanical-hyperregularity
  - pthm-cm12-hamilton-equivalence
  - pthm-cm12-energy-time
  - rem-cm12-singular-models
examples: []
requires:
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm-math-variations
  - cm01-framework-quantities-and-geometry
  - cm06-regular-constraints-and-moving-frames
---

This page is the Hamiltonian companion of the variational formulation of
[[cm07-stationary-action-and-lagrangian-dynamics]]. It adds no physical
assumption to the force branch: given the mechanical Lagrangian
$L=K-U$ of a declared potential presentation, [[def-cm12-cotangent-momentum]]
defines the momentum datum of the labels as the fibre derivative of the
presentation — the Cartesian momentum $p=\mathsf Mv$ and, for a declared
generalized-coordinate map $X$, the generalized momenta
$p=G(q)v$ with the kinetic metric $G=DX^{\mathsf T}\mathsf M\,DX$ — together
with their dimensions and their pairings with velocities.
[[def-cm12-regularity]] and [[def-cm12-hyperregularity]] fix the regularity
vocabulary of the model's charts: velocity-regular states where the velocity
Hessian is nonsingular, and hyperregular presentations whose fibre
velocity-to-momentum maps are bijections onto the full momentum fibres with
globally defined inverse branches. [[def-cm12-hamiltonian]] then defines the
Hamiltonian of a hyperregular presentation as the Legendre transform
$p\cdot v-L$ on its declared branch.

The mathematical content of the transformation is supplied by the local
mathematics page [[cm-math-variations]] and completed in model terms here.
[[pthm-cm12-local-legendre]] computes the velocity Hessians of the Cartesian
and substituted Lagrangians, $L_{vv}=\mathsf M$ and
$\widetilde L_{vv}=G(q)$, proves that the positive definiteness of the mass
operator and of the kinetic metric makes the presentations regular at every
state, and applies the local inverse-function criterion to produce a local
$C^{1}$ inverse branch at every state. [[pthm-cm12-mechanical-hyperregularity]]
upgrades this to the global fibre statement: the branch is
$v=\mathsf M^{-1}p$ in Cartesian data and $v=G(q)^{-1}p$ in the coordinates
$X$, and the branch Hamiltonians are the explicit kinetic-plus-potential
functions $\tfrac12p\cdot\mathsf M^{-1}p+U$ and
$\tfrac12p\cdot G(q)^{-1}p+\widetilde U$. [[pthm-cm12-hamilton-equivalence]]
proves the equivalence with the model's equation of motion: on the global
potential branch the motions, the solutions of Hamilton's equations and the
stationary curves of the action coincide; with residual forces the model's
equation is equivalent to Hamilton's equations with the residual force as a
momentum source; and in a declared generalized-coordinate chart the declared
Lagrange equations are equivalent to the Hamilton system, which for a
scleronomic regular holonomic-constraint parametrization is the ideal
constrained motion. [[pthm-cm12-energy-time]] identifies the Cartesian branch
Hamiltonian with the model's mechanical energy $K+U$, transports the
established energy balance to it — the explicit time dependence of the
potential and the power of the residual forces are the only sources — and
identifies the substituted-chart Hamiltonian with the same mechanical energy
for time-independent charts. The page closes with
[[rem-cm12-singular-models]]: singular velocity Hessians and non-surjective
fibre maps are excluded from these theorems, the mechanical branch of the
framework is never singular, regular presentations need not be hyperregular,
constraints are covered only by elimination, and the whole reformulation is a
conditional theorem of the model rather than empirical evidence.

Worked checks live on
[[cm12-legendre-transformation-and-hamiltonian-mechanics-examples]]: the
positive kinetic metric on explicit one- and two-label data, the planar
pendulum in Hamiltonian form, the shifted momentum and Hamiltonian produced by
a total-derivative modification, the regular non-hyperregular Lagrangian
$\mathcal L(v)=e^{v}$ with its branch $H=p\ln p-p$ on $p>0$, and a
moving-coordinate spring model whose conserved Hamiltonian differs from the
model's mechanical energy.
