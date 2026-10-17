---
page: subgradient-bundle-and-derivative-free-optimization
title: Subgradient bundle and derivative free optimization
status: draft
items:
  - alg-nelder-mead-finite-budget
  - alg-projected-subgradient-method
  - alg-proximal-bundle-serious-null-method
  - def-positive-spanning-poll-set-and-angle
  - lem-compact-set-in-open-neighborhood-has-uniform-radius
  - lem-direct-search-local-descent-inequality
  - alg-deterministic-direct-search
  - lem-nelder-mead-finite-budget-returns-status
  - lem-positive-spanning-poll-set-has-uniform-angle
  - lem-projected-subgradient-finite-budget-returns-status
  - lem-projected-subgradient-one-step-estimate
  - lem-proximal-bundle-subproblem-has-unique-minimizer
  - lem-proximal-objective-has-quadratic-growth-from-minimizer
  - lem-direct-search-finite-budget-returns-status
  - lem-proximal-bundle-finite-budget-returns-status
  - thm-direct-search-unsuccessful-poll-accumulations-are-stationary
  - thm-projected-subgradient-best-and-average-bound
  - cor-projected-subgradient-fixed-step-square-root-rate
  - lem-aggregate-model-error-controls-proximal-candidate
  - thm-proximal-bundle-accumulation-under-accurate-aggregate-model
examples: []
---

## Objective

This page develops projected subgradient, proximal bundle, direct-search, and Nelder–Mead procedures while keeping finite-budget statuses separate from convergence guarantees. For a convex objective on a nonempty closed convex set, valid oracle calls, bounded returned subgradients, an attained minimum, and a bound on the initial distance to a minimizer give a best-iterate and weighted-average gap bound; the fixed-step $O(N^{-1/2})$ rate applies when the distance and subgradient bounds are positive. The full-memory proximal bundle procedure uses serious and null steps. Its accumulation theorem applies to a proper closed convex extended-real objective with nonempty closed convex domain and continuous finite restriction, along an infinite exact continuation whose finite underestimating models touch their centers. It also assumes a fixed positive stabilizer and serious fraction in $(0,1)$, compact initial sublevel set, positive predicted decreases, the stated serious/null acceptance test, and aggregate-model errors tending to zero. Direct search assumes a fixed positive-spanning poll list and forcing ratio $\rho(\Delta)/\Delta\to0$; it proves stationarity only for accumulation points of unsuccessful polls with vanishing mesh and compact centers in an open region where the gradient is Lipschitz. Nelder–Mead specifies its comparisons, ties, both stopping tolerances, and failure statuses, with no general convergence claim.
