---
page: cm05-two-body-central-forces-and-gravitation
title: "Two-body, central forces and gravitation"
status: published
library: physics
items:
  - lem-cm05-radial-potential-gradient
  - pthm-cm05-relative-reduction
  - post-cm05-central-model
  - pthm-cm05-plane-area
  - pthm-cm05-effective-potential
  - pthm-cm05-circular-orbit
  - post-cm05-gravity
  - pthm-cm05-conic
  - pthm-cm05-kepler-period
  - rem-cm05-collision-scope
examples: []
requires:
  - cm-math-central
  - cm03-momentum-work-and-energy-balances
  - hilbert-space-geometry-and-riesz-representation
  - construction-of-the-natural-numbers
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-balances
---

This page develops the two-body problem with mutual central forces and its
gravitational specialization in the framework of
[[cm02-forces-initial-data-and-newtonian-flow]] and
[[cm03-momentum-work-and-energy-balances]], consuming the mathematical
central-force development of [[cm-math-central]]. The local lemma
[[lem-cm05-radial-potential-gradient]] supplies the gradient of a radial
potential, $U(x)=u(\lvert x\rvert)$ with
$\nabla U(x)=u'(\lvert x\rvert)x/\lvert x\rvert$ on an annulus, together with
the $C^k$ regularity of the composite that the potential presentation
requires. On that basis
[[pthm-cm05-relative-reduction]] proves, for a two-label model presented
through a static central pair potential $u(\lvert x_1-x_2\rvert)$ with no
external forces, that the evaluated pair forces are central and
antisymmetric, that the total momentum and the centre-of-mass velocity are
constant with an affine centre of mass, that the relative coordinate
$r=x_1-x_2$ is a central-force trajectory for the reduced mass
$\mu=m_1m_2/(m_1+m_2)$, and that the motion is reconstructed bijectively from
the centre-of-mass motion and the relative trajectory. The adopted model
class, the reduced problem, the fixed-centre idealization and the reading
conventions are fixed by the postulate [[post-cm05-central-model]], and the
companion counterexample on the examples page shows that centrality of the
pair forces alone does not give the reduction without the no-external-force
hypothesis.

The first consequences of the reduction are collected in
[[pthm-cm05-plane-area]]: the planar character of the relative motion, the
constant areal-velocity vector $j/(2\mu)$, the linear swept-area function
with rate $J/(2\mu)$ — Kepler's second law for the reduced orbit — and the
constant areal rates of both labels about the centre of mass for $j\ne0$, in the ratio
$(m_2/m_1)^2$. [[pthm-cm05-effective-potential]] establishes the equivalent
one-dimensional problem for nonzero angular momentum $J>0$: the radial
coordinate takes values in $J_0$ and obeys
$\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$ with the effective potential
$U^{\mathrm{eff}}_J=u+J^2/(2\mu\rho^2)$, its energy is a constant first
integral, and conversely every $C^2$ radial solution valued in $J_0$ together
with the angular quadrature reconstructs a planar central-force trajectory,
so the reduction to one dimension is lossless up to the angular phase.
[[pthm-cm05-circular-orbit]] gives the critical-point criterion for a
circular relative orbit in the equivalent form
$\mu r_0\omega^2=u'(r_0)$, the uniform rotation of both labels about the
centre of mass, and the frequency of the linearised radial equation at a
critical point where $(U^{\mathrm{eff}}_J)''(r_0)>0$, with no nonlinear
stability claim.

The gravitational model is adopted in [[post-cm05-gravity]]: the
inverse-square pair potential with the Newtonian constant and positive
gravitational coupling parameters, the empirical identification of the
couplings with the inertial masses (the weak equivalence principle, adopted
only where a statement says so), the measured value of the Newtonian
constant with its uncertainty and source-reported input measurements, and
the defined weak-field and slow-relative-motion regime. On that model
[[pthm-cm05-conic]] proves the Keplerian orbit
classification: the polar conic with focus at the force centre, the
eccentricity-energy relation and the elliptic, parabolic and hyperbolic
branches, the centrifugal barrier that keeps every non-radial motion away
from the collision, the completeness, closure and ellipse geometry of the
negative-energy branch, and the scaled barycentric ellipses of both labels.
[[pthm-cm05-kepler-period]] computes the period
$T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, hence
$T^2=4\pi^2a^3/(G_{\mathrm N}M)$ under the mass identification, together
with the barycentric periodicity of both labels and the area swept per
period. The closing audit [[rem-cm05-collision-scope]] records the collision
and radial exclusions, the point-particle and finite-size limits, the
empirical status of $G_{\mathrm N}$ and of the mass identification, and the
claims deliberately not made.

Worked numerical checks of the elliptic branch, the parabolic and hyperbolic
branches, the barycentric reconstruction with unequal masses, the circular
orbit and its linearised frequency, and the counterexample showing the
necessity of the no-external-force hypothesis are collected on
[[cm05-two-body-central-forces-and-gravitation-examples]].
