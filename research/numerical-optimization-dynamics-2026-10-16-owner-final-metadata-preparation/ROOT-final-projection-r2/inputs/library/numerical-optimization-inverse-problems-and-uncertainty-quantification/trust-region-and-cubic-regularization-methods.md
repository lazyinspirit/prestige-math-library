---
page: trust-region-and-cubic-regularization-methods
title: "Trust region and cubic regularization methods"
status: draft
items:
  - def-trust-region-quadratic-model-and-ratio
  - def-adaptive-cubic-regularization-model
  - lem-natural-logarithm-bounded-by-argument
  - lem-trust-region-subproblem-optimality-and-hard-case
  - alg-trust-region-cauchy-step
  - lem-positive-definite-model-has-unique-newton-step
  - lem-global-cubic-model-minimizer-decrease
  - lem-trust-region-cauchy-decrease
  - alg-dogleg-trust-region-step
  - alg-truncated-cg-trust-region-step
  - alg-adaptive-cubic-regularization
  - lem-truncated-cg-iterates-are-krylov-vectors
  - alg-trust-region-method
  - lem-trust-region-ratio-accuracy-for-small-radii
  - lem-adaptive-cubic-unsuccessful-iteration-count
  - thm-trust-region-global-liminf-gradient
  - thm-trust-region-epsilon-iteration-complexity
  - thm-adaptive-cubic-regularization-epsilon-complexity
examples: []
---

[[def-trust-region-quadratic-model-and-ratio]] fixes the Euclidean model,
feasible ball, reductions, and ratio. The global subproblem characterization
[[lem-trust-region-subproblem-optimality-and-hard-case]] includes singular
shifted Hessians and the boundary hard case. The Cauchy decrease bound
supports both the SPD dogleg and finite truncated-CG step procedures.

[[alg-trust-region-method]] accepts only feasible steps with a stated fraction
of Cauchy decrease and falls back to the Cauchy step when needed. Its
small-radius branch makes the ratio accurate and ensures boundary expansion.
Under bounded model Hessians, a Lipschitz gradient, and a lower-bounded
objective, the proved conclusion is gradient liminf zero; no gradient-limit
claim is made without stronger uniform assumptions. The separate
[[thm-trust-region-epsilon-iteration-complexity]] bounds accepted steps and
telescopes the multiplicative radius updates to count every rejected trial.
The elementary estimate [[lem-natural-logarithm-bounded-by-argument]] closes
the logarithmic radius term in the stated $O(\varepsilon^{-2})$ total-trial
bound.

The ARC branch defines a separate cubic model and preserves exact global
model minimizers as a solver special case. Its finite-budget algorithm also
accepts inexact candidates only after checking the two cubic solution
conditions, the residual termination condition, and sufficient Cauchy-model
decrease; solver failure, inconsistent candidates, domain exit, and exhausted
regularization are explicit statuses. Under a Lipschitz Hessian and a
lower-bounded objective, exact global steps give the
$O(\varepsilon^{-3/2})$ outer evaluation bound, including unsuccessful
trials. Admissible inexact steps give the same order when the gradient is
uniformly Lipschitz on trial segments, with the stated model-solution and
regularization conditions; the proof counts outer trials, not inner solver
work.
