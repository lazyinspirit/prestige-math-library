---
page: periodic-orbit-shooting-collocation-and-floquet-error-examples
title: Periodic orbit shooting collocation and Floquet error — Examples
status: draft
items: []
examples:
  - ex-coarse-euler-variational-step-gives-spurious-instability
  - ex-phase-singularity-in-stable-planar-oscillator
  - ex-near-unit-floquet-multiplier-is-inconclusive
  - ex-van-der-pol-stability-conditional-on-validated-enclosure
---

## Objective

The examples compute a stable planar cycle whose bad phase slice makes the
shooting Jacobian singular, while a transverse phase makes it invertible. A
coarse Euler step overestimates a stable transverse mode and produces a
spurious multiplier of modulus greater than one. A near-unit interval
enclosure demonstrates why a cluster count alone cannot decide stability.
The van der Pol example states the exact conditional implication from a future
validated orbit and complete strict Floquet cluster certificate; it supplies
no fabricated numerical orbit or interval values.
