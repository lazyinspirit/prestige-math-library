---
page: energy-stable-incompressible-navier-stokes-discretization-examples
title: "Evolutionary incompressible flow discretization — Examples"
status: draft
items: []
examples:
  - ex-na-zero-mean-pressure-gauge
  - ex-na-periodic-taylor-green-vortex
  - ex-na-unit-square-mini-mesh-family
  - ex-na-mini-backward-euler-energy-budget
  - cex-na-graded-mini-mass-initialization-pressure-rate
  - ex-na-conditional-three-dimensional-flow-computation
  - cex-na-polyhedral-energy-ns-pressure-endpoint
---

# Worked cases for incompressible flow discretization

These examples fix conventions that can otherwise be conflated: periodic Taylor–Green flow is not a no-slip solution; the discrete work inequality has three separately visible energy terms; the pressure mean removes only a spatially constant mode; and the unit-square mesh example fixes one matching diagonal convention.

## Periodic manufactured solution and gauge

[[ex-na-periodic-taylor-green-vortex]] verifies the exact two-dimensional Taylor–Green fields on the flat torus and draws the paired-edge convention for its fundamental square. [[ex-na-zero-mean-pressure-gauge]] proves that adding a spatial constant does not change the weak pressure pairing and that zero mean fixes the gauge.

## Discrete energy and mesh

[[ex-na-mini-backward-euler-energy-budget]] specializes the work-form estimate to zero forcing, retaining the time-jump and viscous-dissipation terms. [[ex-na-unit-square-mini-mesh-family]] gives a conforming shape-regular sequence with a TikZ drawing of the $n=2$ diagonal convention; its geometry, rather than the diagram, verifies the MINI mesh hypotheses.

## Conditional three-dimensional computation

[[ex-na-conditional-three-dimensional-flow-computation]] gives smooth compactly supported divergence-free data on the unit cube and states what finite-step existence and energy stability provide. It does not claim the computation proves turbulence or selects a unique three-dimensional weak trajectory. Uniqueness is asserted only if the strong-branch conditions in the A-page theorem hold.

## Exact energy-data pressure obstruction

[[cex-na-polyhedral-energy-ns-pressure-endpoint]] constructs a no-slip nonlinear Navier–Stokes trajectory on the square with initial datum in $H_\sigma$ and forcing in $L^2_tL^2_x$, whose unique mean-zero distributional pressure is not in $L^{4/3}_tL^2_x$. The logarithmic heat mass-loss and shrinking boundary stream-corrector lemmas are proved on the A page. The pressure-free two-dimensional energy uniqueness lemma identifies every MINI velocity limit for these data with the constructed trajectory. This refutes the original universal regular-pressure conclusion under its exact assumptions while preserving the velocity and pressure-primitive results. The singular initial profile does not satisfy the smooth-branch hypotheses and does not refute the separate instantaneous smooth pressure estimate.

## Smooth mass-initialization pressure obstruction

[[cex-na-graded-mini-mass-initialization-pressure-rate]] treats the separate smooth-branch claim. It constructs one fixed convex polygon, one fixed finite mesh shape bound, uniformly bounded smooth exact data, and genuine mass-initialized backward Euler roots whose instantaneous pressure norms are unbounded. The meshes may be arbitrarily graded and the chosen steps satisfy the original upper-step condition. The complete local construction includes the coupled mass response, its actual pressure observation, nonlinear realization and passage to backward Euler; it uses neither the false uniform $H^1$ kernel projector nor a primitive-only substitute. The positive velocity and pressure-primitive estimates remain valid.
