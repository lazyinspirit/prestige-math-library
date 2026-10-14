---
page: splines-series-and-approximation-rates
title: Splines and Series Methods
status: draft
items:
  - def-b-spline-space-and-basis
  - def-natural-cubic-spline
  - thm-spline-polynomial-reproduction
  - thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots
  - def-natural-cubic-smoothing-spline
  - def-local-spline-quasi-interpolant
  - thm-natural-cubic-smoothing-spline-exists-uniquely
  - thm-sobolev-spline-quasi-interpolant-rate
  - def-series-spline-least-squares
  - thm-series-training-risk
  - cor-series-spline-sobolev-training-risk-rate
examples: []
---

This page develops B-spline spaces and polynomial reproduction, proves the distinct-knot natural cubic interpolation system, and reduces cubic smoothing to a finite-dimensional spline fit. It also gives local Sobolev approximation bounds and an empirical training-risk guarantee for series least squares. The spline rate uses an explicit uniform full-multiplicity knot convention; the risk claim is evaluated on the training design and does not assert independent test-risk control.
