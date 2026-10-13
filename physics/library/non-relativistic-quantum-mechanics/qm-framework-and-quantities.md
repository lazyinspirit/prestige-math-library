---
page: qm-framework-and-quantities
title: "Qm Framework And Quantities"
status: draft
library: physics
items:
  - def-nrqm-framework-newtonian-spacetime
  - def-nrqm-framework-galilei-transformations
  - lem-nrqm-framework-galilei-transformations-form-a-group
  - def-nrqm-framework-quantities-and-units
  - def-nrqm-framework-inertial-frames
  - def-nrqm-framework-classical-apparatus-trajectories
  - lem-nrqm-framework-ccr-on-the-schwartz-core
  - post-nrqm-framework-state-and-composition
  - post-nrqm-framework-observable-and-probability
  - post-nrqm-framework-ideal-conditional-measurement
  - post-nrqm-framework-autonomous-dynamics
  - post-nrqm-framework-identical-particles-and-spin
  - post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
  - post-nrqm-framework-preparation-and-apparatus
  - rem-nrqm-framework-assumption-classes-and-scope
  - rem-nrqm-framework-primitive-and-derived-status
examples: []
requires:
  - qm-math-magnetic-and-detection
  - cm-math-geometry
  - qm-math-composites
  - qm-math-orbital-and-spin
---

This page fixes the framework and the quantity conventions of the
non-relativistic quantum mechanics category before any derived result is
stated. The arena is the Newtonian one: the affine time space with absolute
time, Euclidean simultaneous slices and their smooth structure
([[def-nrqm-framework-newtonian-spacetime]]), whose elementary coordinate
transformations are the Galilean maps with their parameter quadruples
([[def-nrqm-framework-galilei-transformations]]) forming a group of bijections
of the coordinate space ([[lem-nrqm-framework-galilei-transformations-form-a-group]]).
The inertial frames of the model are the adapted charts determined by an event
origin, a fixed time vector $u$ with $\tau(u)=1$, and a positively oriented
orthonormal spatial triad, changed only by the Galilean class
([[def-nrqm-framework-inertial-frames]]), and the
macroscopic apparatus and preparation devices are described by classical
trajectories with the frame time as parameter
([[def-nrqm-framework-classical-apparatus-trajectories]]); a quantum particle
is not assigned a definite worldline between preparations and detections. The
dimension group, the SI reference units, the exact defining constants of the
current SI and the dimensions and mathematical types of the framework's
quantities are recorded in [[def-nrqm-framework-quantities-and-units]], and
the canonical commutator of the position and momentum acts is proved on the
Schwartz core in [[lem-nrqm-framework-ccr-on-the-schwartz-core]].

The adopted assumptions of the category are then stated in full:
[[post-nrqm-framework-state-and-composition]] (states, rays, density operators,
mixtures and composite systems), [[post-nrqm-framework-observable-and-probability]]
(self-adjoint observables, spectral probabilities and finite unsharp
outcomes), [[post-nrqm-framework-ideal-conditional-measurement]] (the declared
projective measurement, its probabilities and updates), and
[[post-nrqm-framework-autonomous-dynamics]] (the self-adjoint energy operator
and its unitary group). The identical-species sectors and spin representation
are assigned in [[post-nrqm-framework-identical-particles-and-spin]]. P5 then
adopts the Newtonian frames, apparatus trajectories, one-particle space and
bounded-potential Hamiltonian that use that representation in
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]], and the
conditions for comparing model predictions with data are fixed in
[[post-nrqm-framework-preparation-and-apparatus]]. A closing status audit
distinguishes the seven core postulates from the extension postulates adopted
only on their own pages and lists what the framework excludes
([[rem-nrqm-framework-assumption-classes-and-scope]]), and the status of the
framework's quantities as primitive, adopted or derived is recorded in
[[rem-nrqm-framework-primitive-and-derived-status]]. The worked checks and the
counterexamples of the pair are collected on
[[qm-framework-and-quantities-examples]].
