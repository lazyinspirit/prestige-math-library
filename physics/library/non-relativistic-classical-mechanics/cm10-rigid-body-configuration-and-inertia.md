---
page: cm10-rigid-body-configuration-and-inertia
title: "Rigid-body configuration and inertia"
status: draft
library: physics
items:
  - post-cm10-rigid-material
  - def-cm10-rigid-body-configuration
  - def-cm10-angular-velocity
  - def-cm10-inertia-tensor
  - pthm-cm10-kinetic-splitting
  - pthm-cm10-principal-axes
  - pthm-cm10-frame-covariance
  - rem-cm10-orientation-charts
examples: []
requires:
  - cm-math-rotation-double-cover
  - cm-math-verification
  - cm03-momentum-work-and-energy-balances
  - cm01-framework-quantities-and-geometry
  - cm-math-geometry
  - cm-math-rigid
  - cm-math-balances
  - the-topology-of-euclidean-space
  - measures-and-their-basic-properties
  - rank-theorems-and-embedded-submanifolds
---

This page opens the rigid-material branch of the framework. The postulate
[[post-cm10-rigid-material]] adopts the model data — a bounded finite Borel
measure $\nu$ on $\mathbb R^3$ (the reference mass distribution) with positive
total mass $m$ and centred reference coordinates — and the kinematic class:
a motion in an inertial frame is a rigid placement
$x(t,\rho)=c(t)+R(t)\rho$ with translation $c$ and rotation $R$ of class
$C^{2}$ into $SO(3)$. The idealization is kinematic rigidity; forces, torques
and every equation of motion for $(c,R)$ are deliberately excluded, as are
deformation, internal degrees of freedom, variable mass and impacts. The
postulate also fixes the reading of $c$ as the centre of mass, of $R$ as the
orientation, and of the frame-change description of the same motion.

The configuration data are defined in
[[def-cm10-rigid-body-configuration]]: the configuration is the pair $(c,R)$
in $\mathbb R^3\times SO(3)$, a six-dimensional smooth configuration space
whose orientation factor is the compact three-dimensional matrix group
$SO(3)$; for a nondegenerate labeling the placement determines $(c,R)$
uniquely, so the parametrization does not overcount, while a labeling
with nonzero support on a line determines $R$ only up to rotations fixing
that line pointwise; for singleton support $\{0\}$ every rotation fixes the
labels and no orientation axis is distinguished. The
description of the same motion in a second inertial frame is fixed there and
its transformation laws are proved in [[pthm-cm10-frame-covariance]].
[[def-cm10-angular-velocity]] defines the body angular velocity $\omega$ by
$R^{\mathsf T}R'=[\omega]_\times$, the spatial angular velocity
$\omega_{\mathrm s}=R\omega$, the spatial form of the material velocity field
and the instantaneous rotation axis, with the dimension $\tau^{-1}$.

[[def-cm10-inertia-tensor]] defines the inertia data of the model: the body
inertia matrix $I=I(\nu)$, its spatial version $I(t)=R(t)IR(t)^{\mathsf T}$,
the inertia tensor about an arbitrary spatial point, and the moment of
inertia about an axis, with dimension $\mu\ell^{2}$. The inertial identities
of the motion are conditional deductions: [[pthm-cm10-kinetic-splitting]]
proves, under the countable-choice hypothesis used only for finiteness of the
integrals, that the total momentum is $mc'$, that the kinetic energy splits
as $\frac12m\lVert c'\rVert_2^{2}+\frac12\omega^{\mathsf T}I\omega$, and that
the angular momentum about the centre of mass is $RI\omega$.
[[pthm-cm10-principal-axes]] proves the existence of an orthonormal principal
basis with real principal moments, the identification of the quadratic form
with the moment of inertia about an axis (body-fixed and spatial versions),
the exact vanishing criterion for a principal moment, the positivity and
invertibility criterion for nondegenerate mass distributions, and the
extremal character of the largest and smallest principal moments; the
degenerate case in which the mass is supported on a line through the origin
is carried explicitly. [[pthm-cm10-frame-covariance]] then proves that a
change of inertial frame leaves the body angular velocity and the body
inertia matrix invariant, rotates the spatial angular velocity and conjugates
the spatial inertia tensor, and transforms the momentum, the centre-of-mass
angular momentum and the kinetic splitting accordingly.

[[rem-cm10-orientation-charts]] closes the page with the chart bookkeeping of
the orientation: the physical orientation is the global element
$R\in SO(3)$, Euler angles are local coordinates with poles, and quaternion
lifts are global two-valued descriptions whose sign is an initial choice
(under the countable-choice hypothesis of the rotation double-cover
suppliers). Worked computations on explicit mass distributions — a symmetric
three-point configuration, a degenerate line-supported configuration, the
Euler-angle pole and a parallel-axis shift — are collected on
[[cm10-rigid-body-configuration-and-inertia-examples]].
