---
id: def-coupled-simulation-finite-difference-estimator
kind: definition
title: "Coupled finite-difference simulation-gradient estimator"
status: draft
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

For a scalar objective $J:\Theta\to\mathbb R$, a direction $v\in\mathbb R^d$, a step $h>0$, and a common simulation input $Z$, the coupled central-difference estimator is
$D_{h,v}^{\mathrm{coup}}:=\frac{H(\theta+hv,Z)-H(\theta-hv,Z)}{2h},$
provided both perturbed parameters lie in $\Theta$. The two outputs use the same $Z$; this choice fixes their joint law and hence their covariance. The estimator's variance is not asserted to be smaller for every coupling.
