---
page: cm02-forces-initial-data-and-newtonian-flow
title: "Forces, initial data and Newtonian flow"
status: draft
library: physics
items:
  - post-cm02-force-superposition
  - post-cm02-interactions
  - def-cm02-newtonian-flow
  - pthm-cm02-ivp
  - pthm-cm02-continuation
  - ex-cm02-uniform-field
  - post-cm02-drag
  - rem-cm02-open-system-warning
examples: []
requires:
  - cm-math-approximation
  - cm01-framework-quantities-and-geometry
  - cm-math-balances
---

This page states the force branch of the non-relativistic classical mechanics
model and proves its local existence, uniqueness and continuation theory. The
force postulate ([[post-cm02-force-superposition]]) adopts the force map
$F:I_{0}\times Q\times(\mathbb R^{3})^{N}\to(\mathbb R^{3})^{N}$ as continuous
and locally Lipschitz in the state variable, locally uniformly in time, and
adopts the equation of motion $m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$ in every
inertial frame, the additive composition of declared force contributions, and
the transformation rule a force law must satisfy under a change of inertial
frame. The restricted interaction models — external-plus-pair decompositions
with the optional antisymmetry and centrality assumptions, forces from a
scalar potential, and the gravitational pair-potential branch with
gravitational couplings distinct from inertial masses — are the separate
postulate [[post-cm02-interactions]]; the linear drag model with its
phenomenological status, declared coefficient and regime qualifications is
[[post-cm02-drag]].

The definition [[def-cm02-newtonian-flow]] fixes the vocabulary: the state
domain, the inverse-mass operator, the associated first-order system
$z'=\mathcal F(t,z)$ with $\mathcal F(t,x,v)=(v,\mathsf M^{-1}F(t,x,v))$,
motions and their equivalence with the second-order equation, initial data,
the maximal motion and its maximal interval, and the Newtonian flow
$\Phi(t;t_{0},z_{0})$. The two physics theorems are then complete conditional
deductions from the adopted force model and the cited mathematical ODE
results. Local existence and uniqueness, in qualitative and quantitative
Picard–Lindelöf cylinder form, with the existence of the unique maximal motion
through every datum, are [[pthm-cm02-ivp]]. The maximal-extension and
breakdown criterion is [[pthm-cm02-continuation]]: at a finite right endpoint
the full time-state graph leaves every compact subset of the open time-state
domain. If the endpoint is the finite right boundary of the prescribed open
time window, the state may remain bounded and away from the excluded
configurations. When the time window is all of $\mathbb R$, the theorem gives
the state-escape reading: the state leaves every compact subset of its open
state domain, through unbounded state or approach to the excluded
configurations. In the autonomous case read on $\mathbb R$, a state trapped in
a compact subset on a terminal neighborhood extends past that endpoint. If
one compact subset contains the state throughout the entire maximal forward
trajectory, the same criterion rules out every finite right endpoint.

The page's worked computation is the uniform-force model
([[ex-cm02-uniform-field]]): the constant force map $F_{i}=m_{i}\mathbf g$
with a declared field parameter satisfies the standing hypotheses, its
explicit quadratic motion is the unique maximal motion on the whole time
window, the dimension bookkeeping is checked, and the model is shown to be
covariant under changes of inertial frame with the parameter transforming as a
spatial vector. A closing status audit
([[rem-cm02-open-system-warning]]) records what is adopted, defined and
proved, marks the open-system boundary between the declared labels and their
environment, notes the frame selection exercised by external fields and
apparatus, and states the empirical qualifications of the page's parameters:
the drag model's fluctuation neglect and regime restrictions, the
approximation content of a constant field, and the fact that no conservation
law, constraint reaction or empirical comparison is claimed here. The worked
model checks, the projectile and drag computations and the two counterexamples
of the pair are collected on
[[cm02-forces-initial-data-and-newtonian-flow-examples]].
