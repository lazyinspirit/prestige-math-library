---
page: runge-kutta-methods-and-order-examples
title: Runge–Kutta Methods and Order — Examples
status: published
items: []
examples:
  - ex-midpoint-order-loss-at-continuous-time-kink
  - ex-euler-midpoint-rk4-fixed-time-error-slopes
  - ex-rkc-self-adjoint-heat-stability-work
  - ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth
  - ex-rkc-stage-roundoff-quadratic-amplification
---

## Summary

These worked checks expose the hypotheses and limits of the Runge–Kutta results. A continuous time kink gives an exact midpoint defect that is not uniformly second order; a smooth scalar IVP has fixed-time Euler, midpoint and RK4 errors with nonzero leading constants. A diagonal heat spectrum illustrates the RKC1 stability-work advantage over Euler substepping, while an explicit nonnormal matrix shows why scalar eigenvalue stability alone does not bound matrix growth. Equal additive perturbations in the RKC1 stage recurrence attain the quadratic stage-count bound exactly; this deterministic model does not estimate actual floating-point errors.
