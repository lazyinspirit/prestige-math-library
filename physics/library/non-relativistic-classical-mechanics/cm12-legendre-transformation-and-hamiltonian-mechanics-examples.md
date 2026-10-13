---
page: cm12-legendre-transformation-and-hamiltonian-mechanics-examples
title: "Legendre transformation and Hamiltonian mechanics — Examples"
status: published
library: physics
items: []
examples:
  - ex-cm12-mechanical-legendre-positive-metric
  - ex-cm12-pendulum-legendre
  - ex-cm12-shifted-momentum
  - ex-cm12-regular-not-surjective
  - ex-cm12-moving-coordinates
requires:
  - cm12-legendre-transformation-and-hamiltonian-mechanics
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm06-regular-constraints-and-moving-frames
  - cm-math-variations
---

Worked checks for
[[cm12-legendre-transformation-and-hamiltonian-mechanics]].
[[ex-cm12-mechanical-legendre-positive-metric]] computes the fibre map,
inverse branch and Hamiltonian on a one-label particle in a uniform field —
with the exact falling solution through a prescribed datum — and on a
two-label free model with unequal masses, where the mass operator is not a
scalar. [[ex-cm12-pendulum-legendre]] carries the planar pendulum through the
two-chart angular atlas of the entire circle and phase cylinder, with constraint elimination in each chart: the kinetic metric is $ml^{2}$, the substituted
Hamiltonian is $p^{2}/(2ml^{2})-mgl\cos\theta$, Hamilton's equations give
$\theta''=-(g/l)\sin\theta$, and the elimination theorem identifies the system
with the ideal constrained motion. [[ex-cm12-shifted-momentum]] evaluates the
total-derivative modification $F(t,x)=\alpha tx_{1}$: the momentum is shifted
by $F_{x}$, the Hamiltonian by $-F_{t}$, the two Hamilton systems have the
same $x$-curves, and on explicit free data the shifted Hamiltonian differs
from the mechanical energy. [[ex-cm12-regular-not-surjective]] is a purely
mathematical witness that regularity need not be hyperregular: the chart
Lagrangian $e^{v}$ has positive velocity Hessian everywhere but its fibre map
misses nonpositive momenta, and on the branch $p>0$ the Hamiltonian is
$p\ln p-p$ and Hamilton's equations are equivalent to the Euler-Lagrange
equation. [[ex-cm12-moving-coordinates]] treats a spring attached to a
uniformly moving support in co-moving coordinates: the substituted
Hamiltonian is $p'^{2}/(2m)-v_{0}p'+\tfrac12ky^{2}$ (plus free coordinates),
it is conserved, the mechanical energy changes at the rate
$-kv_{0}y$ of the explicit time dependence of the potential, and the two
differ by $v_{0}p'$.
