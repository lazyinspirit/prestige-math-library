---
page: cm01-framework-quantities-and-geometry
title: "Framework, quantities and geometry"
status: published
library: physics
items:
  - post-cm01-spacetime
  - post-cm01-frames
  - post-cm01-worldlines
  - def-cm01-units
  - def-cm01-configuration
  - def-cm01-velocity-acceleration
  - pthm-cm01-galilean-kinematics
  - rem-cm01-model-limit
examples: []
requires:
  - cm-math-geometry
---

This page fixes the framework of the non-relativistic classical mechanics
category before any force law or equation of motion is stated. The spacetime
postulate adopts a four-dimensional affine event space with a surjective
absolute-time covector, a three-dimensional Euclidean spatial displacement
space $K$ with its metric and orientation, absolute simultaneity and the
affine smooth structure ([[post-cm01-spacetime]]); the mathematical content of
the adapted charts, their coordinates and the affine structure of the
simultaneous slices is supplied by the companion mathematics page
([[cm-math-geometry]]) through [[def-cm-affine-time-space]] and
[[lem-cm-adapted-coordinates-exist-and-are-unique]].

The frame postulate defines the inertial frames as the adapted affine charts
with a fixed time direction and a fixed oriented orthonormal basis of $K$ —
coordinate charts, deliberately distinct from observer congruences and from
time-varying basis fields — derives the stationary congruence of each frame,
and adopts the Galilean transformations $t'=t+b$, $x'=Rx+vt+a$ with
$R\in SO(3)$ as the allowed changes between frames ([[post-cm01-frames]],
[[def-cm-special-orthogonal-group]]). The worldline postulate then makes the
motion of a particle label a twice continuously differentiable curve
parametrized by frame time, with a fixed positive inertial mass per label and
the point-particle idealization made explicit ([[post-cm01-worldlines]]); the
dimension and SI-unit conventions of the framework are recorded in
[[def-cm01-units]], and the kinematic quantities of a worldline — coordinate
and spatial velocity and acceleration, their dimensions and their frame
dependence — in [[def-cm01-velocity-acceleration]].

The configuration stage is defined in [[def-cm01-configuration]]: admissible
position tuples of $N$ labeled particles as open sets with collision exclusions,
the regular holonomic branch $Q=G^{-1}(0)$ with its degree-of-freedom count
$3N-k$ proved from the established regular-level theorem, the instantaneous
configuration spaces of time-dependent constraints, and the mass operator of
the model. The page's physics theorem combines the adopted assumptions with the
cited mathematical transformation law: the velocity and acceleration laws
$w'=Rw+v$ and $a'=Ra$, the frame-independence of vanishing coordinate
acceleration, and the group structure of the Galilean transformations are
proved in [[pthm-cm01-galilean-kinematics]]. A closing status audit records
which objects are primitive, which assumptions are adopted, what is
constructed or proved, and the model limits — no force law, no conservation
law, no electromagnetic coupling, no relativistic or quantum content, and no
measurement ([[rem-cm01-model-limit]]). The worked examples and the
counterexample of the pair are collected on
[[cm01-framework-quantities-and-geometry-examples]].
