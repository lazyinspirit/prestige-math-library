---
page: variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples
title: Variance reduced finite sum and adaptive gradient optimization — Examples
status: published
items: []
examples:
  - ex-regularized-logistic-finite-sum
  - ex-svrg-saga-gradient-work-storage-comparison
  - ex-adam-adaptive-step-divergence
---

The balanced 14-example logistic fit has a unique minimizer at zero and meets the smooth, strongly convex hypotheses for the exact SVRG epoch bound. The work ledger compares equal 2000-step SVRG and SAGA blocks, including SAGA's table initialization. The final example instantiates the periodic bounded-gradient Adam divergence calculation and its explicit positive cycle drift.
