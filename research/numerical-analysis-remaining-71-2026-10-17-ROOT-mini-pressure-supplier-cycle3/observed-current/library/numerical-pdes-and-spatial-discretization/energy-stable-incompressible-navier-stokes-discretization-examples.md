---
page: energy-stable-incompressible-navier-stokes-discretization-examples
title: "Evolutionary incompressible flow discretization — Examples"
status: draft
items: []
examples: [ex-na-zero-mean-pressure-gauge, ex-na-periodic-taylor-green-vortex, ex-na-unit-square-mini-mesh-family, ex-na-mini-backward-euler-energy-budget, ex-na-conditional-three-dimensional-flow-computation]
---

# Worked cases for incompressible flow discretization

These examples fix conventions that can otherwise be conflated: periodic Taylor–Green flow is not a no-slip solution; the discrete work inequality has three separately visible energy terms; the pressure mean removes only a spatially constant mode; and the unit-square mesh example fixes one matching diagonal convention.

## Periodic manufactured solution and gauge

[[ex-na-periodic-taylor-green-vortex]] verifies the exact two-dimensional Taylor–Green fields on the flat torus and draws the paired-edge convention for its fundamental square. [[ex-na-zero-mean-pressure-gauge]] proves that adding a spatial constant does not change the weak pressure pairing and that zero mean fixes the gauge.

## Discrete energy and mesh

[[ex-na-mini-backward-euler-energy-budget]] specializes the work-form estimate to zero forcing, retaining the time-jump and viscous-dissipation terms. [[ex-na-unit-square-mini-mesh-family]] gives a conforming shape-regular sequence with a TikZ drawing of the $n=2$ diagonal convention; its geometry, rather than the diagram, verifies the MINI mesh hypotheses.

## Conditional three-dimensional computation

[[ex-na-conditional-three-dimensional-flow-computation]] gives smooth compactly supported divergence-free data on the unit cube and states what finite-step existence and energy stability provide. It does not claim the computation proves turbulence or selects a unique three-dimensional weak trajectory. Uniqueness is asserted only if the strong-branch conditions in the A-page theorem hold.
