---
page: cm07-stationary-action-and-lagrangian-dynamics
title: "Stationary action and Lagrangian dynamics"
status: published
library: physics
items:
  - def-cm07-action-and-mechanical-lagrangian
  - pthm-cm07-first-variation-and-euler-lagrange-expression
  - pthm-cm07-euler-lagrange-equations
  - pthm-cm07-newton-equivalence
  - pthm-cm07-coordinate-covariance-of-the-equations
  - pthm-cm07-boundary-terms-and-gauge
  - def-cm07-generalized-coordinates-and-forces
  - lem-cm07-immersion-euler-lagrange-transport
  - pthm-cm07-lagrangian-reduction-of-ideal-constraints
  - rem-cm07-scope-and-singular-warnings
examples: []
requires:
  - cm-math-verification
  - cm06-regular-constraints-and-moving-frames
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm03-momentum-work-and-energy-balances
  - cm-math-variations
---

For a nonempty configuration domain, this page is the variational companion of the force model of
[[cm02-forces-initial-data-and-newtonian-flow]] and of the constraint branch
of [[cm06-regular-constraints-and-moving-frames]]. It adds no new physical
assumption: given the force branch and a declared potential presentation
$(U,d)$ of the force map, [[def-cm07-action-and-mechanical-lagrangian]]
defines the kinetic energy $\frac12v\cdot\mathsf Mv$ of the labels, the
mechanical Lagrangian $L=K-U$ of the presentation, the chart instance of the
mathematical action on $[a,b]\subseteq I_{0}$, the fixed-endpoint first
variation and stationarity, with the dimensions of all objects recorded
($[L]=\mu\ell^{2}\tau^{-2}$, $[S]=\mu\ell^{2}\tau^{-1}$).
[[pthm-cm07-first-variation-and-euler-lagrange-expression]] computes the first
variation in model terms,
$\delta S(x)[\eta]=\int\bigl(-\nabla_{x}U\cdot\eta+\mathsf Mx'\cdot\eta'\bigr)dt$,
and identifies the Euler-Lagrange expression with the acceleration residual,
$E_{L}(x)=-(\mathsf Mx''+\nabla_{x}U)$.
[[pthm-cm07-euler-lagrange-equations]] turns this into the equivalence of
stationarity, the vanishing of the Euler-Lagrange expression and the model's
equation of motion of the potential part, and
[[pthm-cm07-newton-equivalence]] proves the stationary-action principle of the
global potential branch: the stationary curves on a closed interval are
exactly the restrictions of the model's motions, with the converse passage
through the maximal motion supplied by the initial-value and continuation
theorems of the force page.

The coordinate and gauge structure is developed by
[[pthm-cm07-coordinate-covariance-of-the-equations]], which reads a
time-dependent coordinate map $X$ with invertible $X_{q}$ into the transport
identity $E_{\widetilde L}(q)=X_{q}^{\mathsf T}E_{L}(x)$; this is a local
coordinate change, and it is a global chart only when it is also one-to-one.
Thus the full force equation in each such coordinate description retains
the residual generalized force; it is the unforced Euler-Lagrange equation
of the substituted Lagrangian when $d\equiv0$. The result

[[pthm-cm07-boundary-terms-and-gauge]], which records that adding the total time
derivative of a $C^{3}$ function on the full time-configuration domain with
action dimension changes the action by endpoint values only, that changing the
potential representative $U\mapsto U+c(t)$ is an instance of this, and that
nonzero dimensionless rescaling of the Lagrangian leaves the stationary curves
unchanged.
[[def-cm07-generalized-coordinates-and-forces]] collects the
generalized-coordinate dictionary — the immersion $X$, the substituted
Lagrangian with kinetic metric $G=DX^{\mathsf T}\mathsf M\,DX$, generalized
forces $Q=DX^{\mathsf T}f$ and the declared Lagrange equations with residual
generalized force. Full-dimensional nonsingular maps give local coordinates;
constraint parametrizations cover the full constrained locus and may have
multiple coordinate representatives. The purely mathematical
[[lem-cm07-immersion-euler-lagrange-transport]] proves the transport identity
for non-square immersions.
[[pthm-cm07-lagrangian-reduction-of-ideal-constraints]] then proves the
constraint-elimination theorem for the scleronomic ideal branch: on a
surjective immersed parametrization $X(\Omega)=\mathcal C\cap Q$, a coordinate
curve solves the Lagrange equations of the substituted Lagrangian exactly when the induced configuration
curve is a constrained motion of the model with its unique ideal reaction, so
the reaction never appears in the reduced equations. The page closes with
[[rem-cm07-scope-and-singular-warnings]]: stationarity is not minimisation,
the mechanical branch is regular while singular velocity Hessians are
excluded, an unrestricted action principle is not generally equivalent to
d'Alembert dynamics for velocity constraints, and the whole reformulation is a
conditional theorem of the model, not empirical evidence.

Worked checks live on [[cm07-stationary-action-and-lagrangian-dynamics-examples]]:
the free particle with its exact minimisation identity, the oscillator on a
long interval with both signs of the action change, cylindrical local
coordinates off the $z$-axis with kinetic metric $m\,\mathrm{diag}(1,r^{2},1)$,
a dimensioned total-derivative gauge computation, one normalized nonholonomic
model in which unrestricted-action and d'Alembert motions differ, and the
planar pendulum recovered through its periodic surjective immersion.
