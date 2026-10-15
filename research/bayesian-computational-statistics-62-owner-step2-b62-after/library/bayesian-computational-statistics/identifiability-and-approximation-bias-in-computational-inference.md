---
page: identifiability-and-approximation-bias-in-computational-inference
title: "Identifiability and approximation bias in computational inference"
status: draft
items:
  - thm-total-variation-bounds-for-expectations
  - def-exact-inferential-target-and-approximation-chain
  - thm-metric-approximation-error-decomposition
  - lem-gaussian-density-integrals-for-supplied-length-measures
examples: []
---

## Objective

This page separates the full-data inferential target from changes introduced by algorithms, summaries, asymptotic approximations, and numerical computation. It defines a fixed-data posterior only after a measurable likelihood version and finite positive evidence have been supplied, then places that target in a declared metric space with a finite approximation chain.

Identifiability is a property of the full sampling laws: equal laws must give equal values of the estimand. The examples show that this property does not prevent a summary from discarding information, a positive ABC tolerance from changing the conditional target, a mean-field ELBO optimizer from losing correlation, a Gaussian synthetic likelihood from changing a posterior, or a local Laplace mode from missing another global mode. The total-variation expectation bounds use the event-supremum convention: factor two for functions bounded in absolute value by $M$, and the sharper $M$ bound for nonnegative functions between $0$ and $M$.

For scalar chains, the pathwise signed identity is exact. For probability laws or other objects, the metric theorem gives a triangle bound only when every adjacent comparison uses the same metric on the same space. Neither result supplies independence, variance addition, global optimizer convergence, posterior consistency, or calibration. In particular, a model's identifiability does not imply that an approximation procedure preserves its exact inferential target.


The Gaussian mean-field calculation takes its reference area measure as supplied and obtains the needed length measure from a fixed unit-height strip. A local Darboux comparison proves its density normalizers and moments without adding a choice axiom or constructing those measures.
