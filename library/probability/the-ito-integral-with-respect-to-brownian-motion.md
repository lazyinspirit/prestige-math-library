---
page: the-ito-integral-with-respect-to-brownian-motion
title: The Ito Integral with Respect to Brownian Motion
status: draft
items:
  - def-continuous-time-adapted-process-and-martingale
  - def-progressively-measurable-and-predictable-process
  - lem-adapted-continuous-processes-are-progressively-measurable
  - def-elementary-predictable-brownian-integrand
  - def-ito-integral-of-an-elementary-predictable-process
  - lem-elementary-ito-integral-is-independent-of-the-step-representation
  - thm-ito-isometry-for-elementary-integrands
  - lem-cross-ito-isometry
  - thm-density-of-elementary-predictable-processes-in-predictable-l2
  - def-ito-integral-for-square-integrable-predictable-processes
  - lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-doob-maximal-bound-for-the-ito-integral
  - def-locally-square-integrable-predictable-brownian-integrand
  - thm-localized-ito-integral
  - thm-stopping-an-ito-integral
  - thm-quadratic-variation-of-an-ito-integral
  - cor-deterministic-ito-integrals-are-gaussian
examples: []
---

This page constructs the Ito integral with respect to Brownian motion along the
standard route: continuous-time vocabulary
[[def-continuous-time-adapted-process-and-martingale]]
[[def-progressively-measurable-and-predictable-process]], predictability of
continuous adapted processes
[[lem-adapted-continuous-processes-are-progressively-measurable]], the
elementary integral on step integrands
[[def-elementary-predictable-brownian-integrand]]
[[def-ito-integral-of-an-elementary-predictable-process]], and its
representation independence
[[lem-elementary-ito-integral-is-independent-of-the-step-representation]].
The elementary isometry
[[thm-ito-isometry-for-elementary-integrands]] and its polarized form
[[lem-cross-ito-isometry]] control the $L^2$ extension, whose density input is
[[thm-density-of-elementary-predictable-processes-in-predictable-l2]]; the
extension itself is defined in
[[def-ito-integral-for-square-integrable-predictable-processes]] and shown to be
independent of the approximating sequence in
[[lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative]].
The isometric linearity of the extension
[[thm-ito-isometry-and-linearity-in-predictable-l2]], the continuous martingale
version [[thm-ito-integral-process-has-a-continuous-martingale-version]] and
the Doob maximal bound [[thm-doob-maximal-bound-for-the-ito-integral]] carry
the construction to integrands that are only locally square-integrable
[[def-locally-square-integrable-predictable-brownian-integrand]], and
localization [[thm-localized-ito-integral]], the stopping identity
[[thm-stopping-an-ito-integral]] and the quadratic variation
[[thm-quadratic-variation-of-an-ito-integral]] complete the Brownian-calculus
interface. Deterministic integrands give Gaussian integrals with the $L^2$
inner product as covariance
[[cor-deterministic-ito-integrals-are-gaussian]].

Only Brownian integrators are treated: general semimartingales, jump
compensators, change of measure and stochastic differential equations are
outside this page, and the companion examples page records the boundary cases
of the construction.
