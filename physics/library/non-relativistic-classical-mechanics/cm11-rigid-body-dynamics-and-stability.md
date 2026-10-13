---
page: cm11-rigid-body-dynamics-and-stability
title: "Rigid-body dynamics and stability"
status: published
library: physics
items:
  - post-cm11-torque-balance
  - pthm-cm11-euler-equations
  - pthm-cm11-torque-free-invariants
  - pthm-cm11-principal-rotations
  - pthm-cm11-linearized-spin
  - pthm-cm11-nonlinear-spin-stability
  - post-cm11-heavy-top
  - pthm-cm11-top-reduction
examples: []
requires:
  - cm06-regular-constraints-and-moving-frames
  - cm10-rigid-body-configuration-and-inertia
  - cm01-framework-quantities-and-geometry
  - cm03-momentum-work-and-energy-balances
  - cm-math-rigid
  - cm-math-balances
  - cm-math-geometry
  - cm-math-rotation-double-cover
---

This page adds dynamics to the rigid-material branch of
[[cm10-rigid-body-configuration-and-inertia]]. The postulate
[[post-cm11-torque-balance]] adopts the external-torque branch: a model may
declare a continuous torque datum $\tau$ of dimension $\mu\ell^{2}\tau^{-2}$
read as the total external torque about the centre of mass, and the admitted
law of the branch is the balance $L_c'=\tau$ of the angular momentum about
the centre of mass. Nothing about the force producing $\tau$, no momentum
balance for the centre of mass and no conservation law is assumed;
friction, contact and drive torques must be declared as part of $\tau$ with
their own models, and the frame transformation of a torque datum is fixed
there.

[[pthm-cm11-euler-equations]] turns the adopted balance into the body-frame
Euler equations $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$, gives
their principal-axis components, proves the rotational power identity
$\frac{d}{dt}\bigl(\tfrac12\omega^{\mathsf T}I\omega\bigr)=\omega\cdot
R^{\mathsf T}\tau$, reduces the torque-free case to $l'=l\times(I^{-1}l)$
under nondegeneracy, and verifies the frame covariance of the whole
formulation. [[pthm-cm11-torque-free-invariants]] then establishes the
conservation of the spatial angular momentum $L_c$, the two invariants
$C=\lVert l\rVert_2^{2}$ and $E=\tfrac12\omega^{\mathsf T}I\omega$ with the
principal-axis component equations, the identification of $E$ with the
rotational kinetic energy, the boundedness of $\omega$, and the global
solvability in time of the torque-free spin field.

[[pthm-cm11-principal-rotations]] classifies the torque-free motions with
constant body angular velocity: for every principal axis and every rate
there is a uniform rotation about a fixed spatial direction, and conversely
a constant body angular velocity must be a principal-axis spin.
[[pthm-cm11-linearized-spin]] computes the linearization of the torque-free
spin at such a spin and proves the oscillatory/exponential dichotomy with
the explicit frequencies $\kappa_{j}$, together with the corresponding
linear-stability verdicts, while making clear that these are statements
about the linearized system only. [[pthm-cm11-nonlinear-spin-stability]]
proves the nonlinear statements: Lyapunov stability of the spins about the
extremal principal axes with an explicit conserved deviation bound, and
instability of the intermediate-axis spin with an explicit escape datum,
escape radius and escape-time bound, realised by an actual torque-free
motion; it also records the orientation caveat that the spin phase is not
controlled. The page closes with the heavy symmetric top: the postulate
[[post-cm11-heavy-top]] adopts an axisymmetric rigid material with a
material point held fixed at the origin (the pivot, on the symmetry axis at
distance $d$ from the centre of mass), an ideal pivot reaction contributing
no torque about the pivot in the framework's sense of a frictionless hinge,
a uniform gravitational field of strength $g$, and the balance of angular
momentum about the pivot; [[pthm-cm11-top-reduction]] computes the pivotal
angular momentum $R\tilde I\omega$ with $\tilde I=\mathrm{diag}(A,A,C)$ and
$A=A_{c}+md^{2}$, derives the body-frame pivot equations, and shows that on
any interval carrying an Euler-angle description with $\theta\in(0,\pi)$ the
motion satisfies the heavy-top system with parameters $(A,C,m,d,g)$, giving
the two conserved momenta, the reduced energy and the one-dimensional
$\theta$ equation. Worked checks on explicit inertia matrices — free
principal-axis spins, a non-uniform torque-free motion with its invariants,
the linearized frequencies of an asymmetric top, an explicit escape from
the intermediate-axis spin and a steady precession of the heavy top — are
collected on [[cm11-rigid-body-dynamics-and-stability-examples]].
