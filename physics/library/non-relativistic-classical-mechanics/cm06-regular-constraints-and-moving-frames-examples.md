---
page: cm06-regular-constraints-and-moving-frames-examples
title: "Regular constraints and moving frames — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm06-bead-on-a-rotating-wire
  - ex-cm06-pendulum-tension-and-reaction-power
  - ex-cm06-rotating-chart-inertial-terms
  - ex-cm06-rolling-disk-model-comparison
requires:
  - cm06-regular-constraints-and-moving-frames
  - cm02-forces-initial-data-and-newtonian-flow
  - cm01-framework-quantities-and-geometry
  - cm-math-variations
  - cm03-momentum-work-and-energy-balances
  - cm-math-geometry
---

Worked checks and model comparisons for
[[cm06-regular-constraints-and-moving-frames]].
[[ex-cm06-bead-on-a-rotating-wire]] declares a bead on a frictionless
straight wire that rotates uniformly in a horizontal plane under a uniform
downward field, verifies that the constraint datum is regular and rheonomic,
computes the unique maximal constrained motion with exponential-radius
formula, the multiplier $(2m\Omega r',mg)$ and the reaction, checks the
reaction power $2m\Omega^{2}rr'$ against the mechanical-energy balance, and
exhibits on explicit model data that the energy strictly increases by the
ideal reaction's work.
[[ex-cm06-pendulum-tension-and-reaction-power]] works the planar ideal
pendulum: the regular scleronomic circle datum, the multiplier, the
reaction read as the tension $T=m(g\cos\theta+l\theta'^{2})$, the tangential
projection giving the pendulum equation, the converse check that every
solution of that equation is an ideal constrained motion, the identically
vanishing reaction power, the conserved energy, the formula
$T=3mg\cos\theta+2E/l$ and its evaluation on explicit data.
[[ex-cm06-rotating-chart-inertial-terms]] evaluates all four inertial terms
on explicit data for a zero-force motion and a chart with quadratic rotation
angle and accelerating reference curve, compares their sum with the
inertial-chart acceleration, identifies the chart as non-inertial by the
criterion, and checks an affine chart with constant rotation against the
exact return to an inertial frame.
[[ex-cm06-rolling-disk-model-comparison]] compares two declared reduced
models of a rolling disk — the ideal no-slip model with its holonomic
constraint and ideal reaction and the frictionless sliding model — with the
same kinetic matrix and applied force, computing the accelerations, the
multiplier, the required contact force, the vanishing reaction power and the
static-friction capability condition, with explicit model data.
