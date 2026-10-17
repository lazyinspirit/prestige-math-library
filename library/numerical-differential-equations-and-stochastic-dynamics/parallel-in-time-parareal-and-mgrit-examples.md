---
page: parallel-in-time-parareal-and-mgrit-examples
title: Parallel in time parareal and mgrit — Examples
status: published
items: []
examples:
  - ex-parareal-dissipative-scalar-heat-mode
  - ex-parareal-oscillatory-coarse-phase-error
  - ex-parareal-nonlinear-tube-escape
  - ex-mgrit-scalar-diffusion-two-grid-contraction
---

## Summary

These exact finite examples compare Parareal against its sequential fine trajectory, show how a coarse oscillatory phase can increase the error for one sweep, and exhibit a nonlinear corrected iterate that exits the set where the Lipschitz assumptions were checked. The scalar heat-mode calculation forms and bounds one specified two-grid MGRIT error matrix. None of the examples supplies a general convergence rate or an exact-ODE error estimate.

