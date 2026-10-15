---
page: numerical-optimization-for-statistical-computation
title: "Computational foundations: factorization, KL, and optimization"
status: published
items:
  - def-latent-variable-joint-and-observed-data-factorization
  - thm-kullback-leibler-is-nonnegative
  - alg-gradient-descent
  - alg-damped-newton
  - thm-observed-density-is-latent-marginal-under-tonelli
  - lem-armijo-backtracking-terminates-for-strict-descent-directions
  - thm-gradient-descent-rate-under-strong-convexity-and-smoothness
  - thm-newton-local-quadratic-convergence-under-lipschitz-hessian
examples: []
---

This page develops a supplied jointly measurable latent-variable density and
its observed marginal, with pointwise conditional latent densities only on
positive finite fibres. Separate pointwise likelihood sections do not provide
that joint version; the given joint function requires no choice axiom. Tonelli proves the nonnegative marginal identity;
Fubini exchanges signed log terms only under absolute integrability. It fixes
the direction and AC convention for KL, proves nonnegativity and equality of
laws, and derives the normalized-density variational identity. It defines
gradient descent and damped Newton, proves the fixed-step strongly convex rate
and the local Newton quadratic rate, and makes no global-minimization claim
for nonconvex objectives. The least-squares example uses the published
gradient/Hessian formula.

