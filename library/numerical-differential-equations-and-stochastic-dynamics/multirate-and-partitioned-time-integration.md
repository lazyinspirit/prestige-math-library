---
page: multirate-and-partitioned-time-integration
title: Multirate and partitioned time integration
status: published
requires:
  - global-ode-and-density-error
  - imex-and-operator-splitting-methods
items:
  - alg-frozen-slow-explicit-fast-euler
  - alg-synchronous-waveform-relaxation-finite-window
  - lem-frozen-slow-euler-variation-bounds
  - lem-frozen-slow-euler-one-step-stability
  - cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition
  - thm-waveform-relaxation-contraction-and-error-bound
  - lem-frozen-slow-euler-local-defect-bound
  - thm-frozen-slow-euler-global-first-order-error
examples: []
---

## Summary

The frozen-slow explicit Euler scheme advances a designated slow block once per macro step and advances the fast block through explicit microsteps while holding the slow value fixed. Its evaluation count is one slow-field call and one fast-field call per microstep. A separated implementation needs the starting slow value in the fast loop and the starting fast value in the slow update; the frozen slow value can be cached, with no fast-to-slow refresh within the macro block. These counts do not imply a wall-clock speedup. Under common boundedness and Lipschitz assumptions, a direct defect and stability analysis gives fixed-time first-order convergence uniformly in the number of fast microsteps, with constants depending on the field bounds and Lipschitz constant. Explicit fast microsteps can still be unstable when the microstep is too large for the fast dynamics.

The page also proves a finite-window contraction and tail certificate for synchronous waveform Picard iteration. A separate conditional result shows how a cubic exact-start defect and one-step stability yield global order two for a symmetric exact-flow composition. Symmetry alone does not supply the cubic defect estimate. Batch 98 proves its finite-dimensional Lie and Strang splitting results under separate tube hypotheses; this conditional result does not instantiate that split map as a coupled multirate composition. Such an application would still require a specified coupling interpolant and matching defect and stability bounds.
