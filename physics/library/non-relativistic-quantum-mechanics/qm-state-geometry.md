---
page: qm-state-geometry
title: "Qm State Geometry"
status: draft
library: physics
items:
  - def-nrqm-state-geometry-state-vectors-and-rays
  - lem-nrqm-state-geometry-normalization-and-phase-classes
  - lem-nrqm-state-geometry-ray-to-rank-one-projection
  - def-nrqm-state-geometry-pure-mixed-states-and-purity
  - lem-nrqm-state-geometry-density-set-convex-and-complete
  - lem-nrqm-state-geometry-purity-criterion
  - lem-nrqm-state-geometry-extreme-points-of-the-state-space
  - def-nrqm-state-geometry-framework-state-space
  - pthm-nrqm-state-geometry-pure-preparation-phase-invariance
  - pthm-nrqm-state-geometry-mixtures-and-extremal-preparations
  - rem-nrqm-state-geometry-scope-and-empirical-status
examples: []
requires:
  - qm-framework-and-quantities
  - qm-math-composites
---

This page develops the geometry of the framework's state space on the basis of
the state and composition postulate adopted on
[[qm-framework-and-quantities]]. The mathematical layer begins with the
nonzero vectors, unit sphere, rays, ray space, normalization map and phase
action of a Hilbert space ([[def-nrqm-state-geometry-state-vectors-and-rays]]),
whose elementary orbit structure is proved in
[[lem-nrqm-state-geometry-normalization-and-phase-classes]]: unit
representatives of one ray differ exactly by phase factors, and the ray space
is the set of phase orbits of the unit sphere. The rank-one operators of the
state-space calculus are then identified with the one-dimensional Hilbert
projections, and the rays are shown to stand in bijection with them
([[lem-nrqm-state-geometry-ray-to-rank-one-projection]]), which yields the
density-operator picture of states, the pure and mixed states and the purity
functional of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]].

The state space itself is analysed as a subset of the self-adjoint
trace-class operators: it is convex, closed under countable probability
mixtures with grouping of consecutive blocks, and complete in the trace norm
([[lem-nrqm-state-geometry-density-set-convex-and-complete]]); purity is the
trace of the square, with value one exactly for the pure states and strictly
less for the mixed states ([[lem-nrqm-state-geometry-purity-criterion]]); and
the extreme points of the state space are exactly the pure states
([[lem-nrqm-state-geometry-extreme-points-of-the-state-space]]).

The physical items read the state postulate in this vocabulary. The state
space, the state assigned to a state vector and the pure, mixed and mixture
terminology are fixed in [[def-nrqm-state-geometry-framework-state-space]];
the pure-preparation assignment is proved well defined by the ray of its
vector, phase invariant and injective, with the zero vector excluded
([[pthm-nrqm-state-geometry-pure-preparation-phase-invariance]]); and the
statistical mixtures, the spectral decomposition of every preparation into
orthogonal pure preparations, and the equivalence of purity with extremality
of the preparation set are established in
[[pthm-nrqm-state-geometry-mixtures-and-extremal-preparations]]. A closing
scope audit ([[rem-nrqm-state-geometry-scope-and-empirical-status]]) separates
the conditional mathematics from the adopted state postulate, records the
empirical neutrality of the page, and lists the deferred questions — outcome
probabilities, measurement models, superselection and identical-particle
sectors, and the photon reading of two-level spaces. The worked finite checks
of the pair are collected on [[qm-state-geometry-examples]].
