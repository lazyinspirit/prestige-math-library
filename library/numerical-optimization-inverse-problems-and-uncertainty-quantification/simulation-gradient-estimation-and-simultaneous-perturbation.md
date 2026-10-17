---
page: simulation-gradient-estimation-and-simultaneous-perturbation
title: "Simulation gradient estimation and simultaneous perturbation"
status: published
items:
  - def-simulation-gradient-objective-and-payoff-oracle
  - cex-uniform-payoff-convergence-does-not-imply-gradient-convergence
  - def-pathwise-simulation-gradient-estimator
  - thm-likelihood-ratio-gradient-identity-on-fixed-support
  - def-coupled-simulation-finite-difference-estimator
  - alg-two-evaluation-spsa-gradient-estimator
  - thm-pathwise-simulation-gradient-is-unbiased-under-envelope
  - prop-coupled-simulation-difference-variance-identity
  - thm-spsa-gradient-bias-is-second-order
  - thm-spsa-gradient-has-inverse-step-variance-bound
  - thm-discrete-sde-adjoint-gradient-interchange
  - thm-spsa-stochastic-approximation-has-stationary-limit-points
examples: []
---

## Overview

Simulation objectives are expectations of random payoffs. A pathwise estimator differentiates a fixed-noise representation; it is unbiased when a common integrable derivative envelope permits interchange of derivative and expectation. A score estimator differentiates the sampling density; the score theorem uses parameter-independent support and an integrable density-derivative envelope. Coupled finite differences reuse simulation inputs; for square-integrable outputs, their variance depends on covariance. SPSA estimates every coordinate from two shared function evaluations; symmetric perturbations and bounded third derivatives give $O(c^2)$ bias, while weighted second moments give an $O(c^{-2})$ conditional variance bound.

The stochastic-approximation result uses an explicit filtration, adapted iterates, bounded gradients along the path, deterministic summable bias and noise errors, and the Axiom of Choice for the supplied Doob interface. It proves a finite weighted gradient sum and a zero gradient liminf; it does not assert convergence to a minimizer or convergence of every gradient. For a finite SDE discretization, the discrete adjoint derivative is a separate pathwise derivative-interchange question. Weak convergence of payoff values alone does not imply convergence of their derivatives.
