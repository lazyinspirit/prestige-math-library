---
page: cm01-framework-quantities-and-geometry-examples
title: "Framework, quantities and geometry — Examples"
status: published
library: physics
items: []
examples:
  - ex-cm01-galilean-boost-of-a-free-motion
  - ex-cm01-rotating-basis-of-a-free-motion
  - cex-cm01-coordinate-velocity-is-frame-dependent
  - ex-cm01-two-particle-rigid-rod-configuration
  - ex-cm01-dimension-bookkeeping
  - ex-cm01-worldline-parameter-condition
requires:
  - cm01-framework-quantities-and-geometry
  - sine-cosine-and-the-definition-of-pi
  - cm-math-geometry
---

These examples and the counterexample work the objects of
[[cm01-framework-quantities-and-geometry]] on explicit data. A Galilean boost
is constructed from its parameters and verified to give an inertial frame of
the model; on a worldline of constant coordinate velocity the laws
$w'=Rw+v$ and $a'=Ra$ and the frame-independence of zero coordinate
acceleration are checked by direct computation, including a cross-check of the
coordinates of one event in both frames
([[ex-cm01-galilean-boost-of-a-free-motion]]). A uniformly rotating spatial
basis field is then contrasted with that boost: the same worldline has
nonvanishing coordinate acceleration in the rotating basis, the rotating-frame
acceleration identity of the mathematical supplier is verified on the explicit
trigonometric data, and the rotating basis is shown not to be an inertial frame
of the model ([[ex-cm01-rotating-basis-of-a-free-motion]]). The refutation
that coordinate velocity is frame-independent follows from the same boost data
([[cex-cm01-coordinate-velocity-is-frame-dependent]]).

On the configuration and bookkeeping side, the two-particle model is worked in
both branches of the configuration definition: the collision-excluded domain
is verified open by an explicit radius, and the rigid rod
$\|x_{1}-x_{2}\|_{2}^{2}=\ell^{2}$ is verified to be a regular level set, so
that the configuration space is a five-dimensional embedded submanifold with
the two-particle mass operator
([[ex-cm01-two-particle-rigid-rod-configuration]]). The dimension conventions
of the page are checked against its quantities, its frame parameters and its
displayed laws ([[ex-cm01-dimension-bookkeeping]]), and the frame-time
parameter condition of a worldline is exhibited as a genuine restriction of
the model that survives time shifts but not nontrivial affine
reparametrizations ([[ex-cm01-worldline-parameter-condition]]).
