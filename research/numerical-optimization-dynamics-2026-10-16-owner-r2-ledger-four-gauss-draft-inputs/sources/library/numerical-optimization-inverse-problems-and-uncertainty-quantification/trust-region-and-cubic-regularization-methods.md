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

The ARC branch defines and solves a separate cubic model. Its finite-budget
algorithm reports a failed model solve or exhausted budget instead of
implying unconditional convergence. With exact global model steps, a
Lipschitz Hessian, and a lower-bounded objective,
[[thm-adaptive-cubic-regularization-epsilon-complexity]] proves the
$O(\varepsilon^{-3/2})$ evaluation bound, including unsuccessful trials.
