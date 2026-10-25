---
id: def-coupled-simulation-finite-difference-estimator
kind: definition
title: "Coupled finite-difference simulation-gradient estimator"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §§3.1 and 3.3.4"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Definition

Use [[def-simulation-gradient-objective-and-payoff-oracle]]: let $H:\Theta\times\Omega\to\mathbb R$ be the simulation payoff on its probability space and write its objective as
$J(\eta):=\mathbb E[H(\eta,\cdot)].$
For $\theta\in\Theta$, a direction $v\in\mathbb R^d$, and $h>0$ with $\theta\pm hv\in\Theta$, the coupled central-difference estimator is the random variable
$D_{h,v}^{\mathrm{coup}}(\omega):=\frac{H(\theta+hv,\omega)-H(\theta-hv,\omega)}{2h}.$
The same random input $\omega$ is used in both terms; this fixes their joint law and, when both payoffs are square-integrable, their covariance. The estimator's variance is not asserted to be smaller for every coupling.
