---
page: power-and-sample-size-planning
title: "Power and sample size"
status: draft
items:
  - lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
  - lem-iid-normal-sample-mean-law
  - lem-least-feasible-sample-size-exists
  - lem-ceiling-and-least-positive-integer-threshold
  - def-power-and-sample-size-planning-specification
  - prop-known-variance-normal-two-sided-z-test-power
  - alg-finite-candidate-power-sample-size-search
  - alg-positive-integer-power-sample-size-search
  - thm-known-variance-normal-z-test-power-and-minimum-sample-size
  - thm-finite-candidate-power-sample-size-search-correctness
  - thm-positive-integer-power-sample-size-search-correctness
examples: []
---

## Scope

A planning record fixes the statistical model, null and target alternative, size and power requirements, allocation, sidedness, integer candidate sizes, and any precision target. Its least-size rule is defined over the full feasible set. Given its required exact evaluator, which terminates at every positive size, the unbounded positive-integer search visits sizes in ascending order and terminates at the least feasible size whenever one exists. A valid finite completeness bound or global infeasibility certificate makes a full-domain none output sound; no universal terminating black-box infeasibility test is claimed. The separate finite-candidate algorithm retains its supplied-list guarantee.

For independent $N(\mu,\sigma^2)$ observations with known $\sigma>0$, the page proves the exact size, power, and least positive integer sample size for the upper-tail one-sided z-test. A second result gives the exact two-sided power by adding both rejection tails. Effect and variance sensitivity are shown on the examples page.

The normal claims are conditional on that stated model; they do not justify its adequacy for an application. Unknown-variance t designs and other sampling laws need their own power derivations. The required finite-population and random-assignment pages supply design-based contexts, not Gaussian error laws; the weak-convergence prerequisite is not used to replace the exact finite-sample normal calculation.
