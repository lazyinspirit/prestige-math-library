---
page: elasticity-near-incompressibility-and-locking-free-discretization-examples
title: "Linear elasticity, nearly incompressible limits and locking — Examples"
status: published
items: []
examples:
  - ex-linear-elasticity-rigid-body-stiffness-nullspace
  - ex-linear-elasticity-cantilever-manufactured-shear
  - ex-linear-elasticity-p1-volumetric-locking-fixed-mesh
---

The examples compute a manufactured shear state on a clamped rectangle, identify the rigid translations and rotations in a free-body stiffness kernel, and exhibit a fixed four-triangle P1 displacement space whose only pointwise divergence-free field is zero. A smooth solenoidal load then forces the P1 solution to vanish as $\lambda\to\infty$ on that fixed mesh. The mini-element comparison uses the parameter-uniform best-approximation theorem; no mesh-uniform P1 rate is claimed.
