---
page: gauss-newton-and-levenberg-marquardt-methods
title: "Gauss-Newton and Levenberg-Marquardt methods"
status: draft
items:
  - thm-nonlinear-least-squares-gradient-and-hessian
  - lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - alg-safeguarded-levenberg-marquardt
  - thm-gauss-newton-local-linear-contraction
  - thm-gauss-newton-zero-residual-quadratic-convergence
  - lem-levenberg-marquardt-large-damping-forces-sufficient-decrease
  - thm-safeguarded-levenberg-marquardt-global-stationarity
examples: []
---

For a $C^2$ residual map $r:U\subseteq\mathbb R^n\to\mathbb R^m$, the
objective $\phi=\|r\|_2^2/2$ has gradient $J^Tr$ and Hessian
$J^TJ+\sum_i r_i\nabla^2r_i$. The exact full-rank Gauss-Newton step minimizes
the linearized residual norm; the QR and SVD branches carry explicit rank
statuses, and computed QR stability is conditional on the factorization
supplier's successful-execution and nonsingularity hypotheses.

The Gauss-Newton local results retain the residual-curvature term: under the
quantitative hypotheses of [[thm-gauss-newton-local-linear-contraction]], the
bound $q=(\kappa+MLR)/\sigma^2<1$ gives linear contraction, while a
zero-residual root gives a quadratic error bound under a Lipschitz Jacobian. Levenberg-Marquardt solves the scaled regularized model
through an augmented least-squares system, then uses an actual-to-predicted
reduction ratio with finite failure statuses. Under compact-sublevel,
bounded-Jacobian, Lipschitz, exact-solve, and sufficient-decrease hypotheses,
the proved global conclusion is first-order stationarity; residual convergence
is not asserted.
