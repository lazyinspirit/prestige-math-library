---
page: cm06-regular-constraints-and-moving-frames
title: "Regular constraints and moving frames"
status: draft
library: physics
items:
  - def-cm06-holonomic-constraint-model
  - post-cm06-ideal-reaction-law
  - pthm-cm06-multiplier-balance
  - pthm-cm06-rheonomic-power
  - def-cm06-moving-frame
  - pthm-cm06-inertial-forces
  - def-cm06-nonholonomic-model
  - rem-cm06-dalembert-vakonomic-distinction
examples: []
requires:
  - cm-math-variations
  - cm03-momentum-work-and-energy-balances
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-balances
  - cm-math-geometry
  - cm-math-rigid
---

This page adds the constrained and moving-chart branches to the force model
of [[cm02-forces-initial-data-and-newtonian-flow]]. The holonomic branch
begins with [[def-cm06-holonomic-constraint-model]]: a regular
holonomic-constraint datum $(O,k,G)$ with a nonempty constraint locus
$\Sigma$ on which $D_{x}G$ has rank $k$, the constrained curve families and
permitted velocities, the virtual displacements $\ker D_{x}G$, the reaction
field and the equation of the constrained branch
$\mathsf Mx''=F(t,x,w)+R$, the consistent data, and the
scleronomic/rheonomic classification of the locus. For a specified constrained curve the reaction is the unique residual
$R=\mathsf Mx^{\prime\prime}-F(t,x,x^{\prime})$. The additional idealization that
selects the dynamically admissible constrained curves is the adopted postulate
[[post-cm06-ideal-reaction-law]]: the reaction annihilates every virtual
displacement at fixed time, equivalently it is the transpose multiple
$D_{x}G^{\mathsf T}\lambda$ of the constraint Jacobian, with the same
restriction intended for frictionless joints, smooth tracks and taut links
and excluded for sliding friction, unilateral and contact-change mechanisms,
rank loss and active drives.

[[pthm-cm06-multiplier-balance]] proves the conditional dynamics of the
ideal branch under a $C^{3}$ constraint map of full rank throughout $O$ and a
$C^{1}$ force map, with acceleration and multiplier defined on
$O^{\prime}\times\mathbb R^{3N}$, $O^{\prime}=O\cap(I_{0}\times Q)$: the multiplier is unique and continuous, the explicit
acceleration $a=\mathsf M^{-1}(F+D_{x}G^{\mathsf T}\Lambda)$ and multiplier
$\Lambda$ are $C^{1}$ functions of the data, the constrained motions with
permitted velocity are exactly the solutions of the resulting first-order
system with consistent data — with a unique maximal solution through each
such datum — the constraint and its differentiated form are preserved, and
the reaction power satisfies $R\cdot x'=-\lambda\cdot G_{t}$.
[[pthm-cm06-rheonomic-power]] reads this identity, under the same regularity
and rank hypotheses, into the energy balance:
for a potential presentation $F_{i}=-\nabla_{x_{i}}U+d_{i}$ one has
$E'=\partial_{t}U+\sum_{i}\langle\mathfrak d_{i},w_{i}\rangle-\lambda\cdot G_{t}$,
the reaction work vanishes identically for a scleronomic constraint, a
rheonomic constraint can change the mechanical energy through the term
$-\lambda\cdot G_{t}$, and conservation requires the scleronomic constraint,
a static potential and no residual forces; the integrated work form is
recorded.

The moving-chart branch is kinematic. [[def-cm06-moving-frame]] fixes a
moving spatial chart of one inertial frame by a $C^{2}$ reference curve
$c(t)$ and rotation $R(t)$, with coordinates $x=R(t)y+c(t)$, the angular
velocity $\omega$ in the body convention $\Omega=R^{\mathsf T}R'$, the
conversion to the opposite convention, the four inertial terms and the
status of the object as a coordinate description rather than an inertial
frame. [[pthm-cm06-inertial-forces]] proves the moving-chart equation
$m_{i}\ddot y_{i}=R^{\mathsf T}F_{i}+m_{i}\tau$ along every motion of the
force model, names the Coriolis, Euler, centrifugal and translational
inertial forces as mass multiples of the four terms, and characterizes the
charts with vanishing inertial terms exactly as the charts with constant
rotation and affine reference curve, which are the adapted charts of
inertial frames; there the framework's force-covariance law is recovered.

The velocity-constraint branch is the subject of
[[def-cm06-nonholonomic-model]]: a constant-rank affine law
$A(t,x)x'+b(t,x)=0$, its admissible velocities and Chetaev virtual
displacements, the adopted d'Alembert ideal-reaction law with its multiplier
representation, and the classification of holonomic-equivalent laws — those
that integrate to a family of position constraints — against nonholonomic
ones; the planar no-slip rolling law is holonomic-equivalent, and Tong's
particular coin rolling without slipping down a slope is reported
nonholonomic. Rank changes,
contact changes, impacts and friction are excluded and left to separate
models. [[rem-cm06-dalembert-vakonomic-distinction]] closes the page by
distinguishing the d'Alembert prescription from the vakonomic
stationary-augmented-action prescription, citing the proved discrepancy for
the constraint $z'=xy'$ at a specified initial datum: its d'Alembert solution
set is not a subset of the vakonomic solution set. It also cites the
non-integrability of that distribution and records the open questions of
model selection, contact changes and empirical adequacy.

Worked checks live on [[cm06-regular-constraints-and-moving-frames-examples]]:
the bead on a uniformly rotating wire with a nonzero reaction power, the
planar pendulum with its tension and vanishing reaction power, the four
inertial terms checked on explicit data with the exact return to an inertial
chart, and the comparison of ideal no-slip rolling with frictionless sliding
under the contact capability condition.
