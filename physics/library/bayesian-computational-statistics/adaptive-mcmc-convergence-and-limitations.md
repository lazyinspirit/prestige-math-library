---
page: adaptive-mcmc-convergence-and-limitations
title: Adaptive MCMC convergence limits
status: published
items:
  - def-diminishing-adaptation
  - def-adaptive-mcmc-containment
  - lem-adaptive-mcmc-block-perturbation-bound
  - lem-adaptive-mcmc-uniform-drift-minorization-bound
  - thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment
  - cor-adaptive-mcmc-containment-from-uniform-drift-minorization
examples: []
---

## Summary

For a jointly measurable family of fixed Markov kernels with a common invariant
target, diminishing adaptation controls the change between adjacent kernels in
uniform total variation. The page defines this condition and containment,
proves a finite-block comparison with a frozen kernel, and derives marginal
convergence under either simultaneous uniform ergodicity or containment. A
separate local coupling proof shows how a common geometric drift and a
strongly aperiodic small-set minorization produce the uniform convergence
rate needed for containment, then verifies the adaptive moment bound.

The conclusion concerns one-time marginal laws. It gives no general adaptive
strong law or central limit theorem. The companion page supplies an exactly
solvable uniformly ergodic family, a diminishing-adaptation schedule that
loses containment and convergence, and a strong-law counterexample.
