---
page: adaptive-ode-solvers-and-error-estimation-examples
title: Adaptive ODE solvers and error estimation — Examples
status: draft
items: []
examples:
  - ex-below-roundoff-tolerance-breaks-embedded-estimate
  - ex-fast-decay-problem-rejects-at-minimum-step
  - ex-heun-euler-estimator-leading-term-vanishes
---

## Summary

These examples isolate three limits of an embedded controller: the leading estimator term can vanish, a fast-decay step can be rejected down to the minimum-step safeguard, and a rounded implementation can accept while its exact endpoint error exceeds the requested tolerance. They illustrate the stated method and do not supply global adaptive accuracy or a general stiffness diagnosis.
