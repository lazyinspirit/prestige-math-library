---
page: langevin-splittings-and-invariant-measure-error
title: Langevin splittings and invariant measure error
status: draft
items:
  - def-underdamped-langevin-equation-and-canonical-gibbs-density
  - alg-baoab-underdamped-langevin-splitting
  - lem-exact-ornstein-uhlenbeck-momentum-substep
  - lem-stable-gaussian-autoregression-invariant-law
  - thm-underdamped-langevin-canonical-measure-is-stationary
  - thm-harmonic-baoab-invariant-law-and-stability-limit
  - lem-baoab-one-step-error-moment-bounds
  - thm-baoab-finite-time-strong-order-one
  - lem-baoab-one-step-weak-expansion
  - thm-baoab-finite-time-weak-order-two
examples: []
---

## Summary

The page defines underdamped Langevin dynamics and the exact BAOAB B/2–A/2–O–A/2–B/2 update, proves the OU momentum covariance and Gibbs stationarity under explicit smoothness, normalizability, decay, and finite-second-moment hypotheses, and establishes finite-time strong order one and weak order two under globally controlled derivatives and finite moments. For the scalar harmonic potential it derives the full discrete invariant covariance and the exact threshold $h<2\sqrt{m/k}$, including the momentum bias and the absence of an invariant probability above that threshold. This harmonic calculation does not establish a general nonquadratic BAOAB invariant-bias rate; long-time bias, burn-in, correlation, and Monte Carlo sampling error remain distinct quantities.
