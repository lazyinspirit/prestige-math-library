---
page: multirate-and-partitioned-time-integration-examples
title: Multirate and partitioned time integration — Examples
status: published
requires:
  - multirate-and-partitioned-time-integration
items: []
examples:
  - ex-linear-electromechanical-multirate-block-cost
  - ex-coupled-fast-mode-destabilizes-frozen-slow-euler
  - ex-frozen-slow-interpolation-limits-order
---

These examples compute a dissipative linear electromechanical model with slow mechanical and fast electrical blocks, a stable coupled linear system whose explicit fast Euler microstep expands perturbations, and a scalar slow-fast model where freezing the slow waveform creates a terminal first-order error. The final example calculates a midpoint-sampled alternative that is exact only for that model; it does not verify the separate symmetric-composition interface.
