---
page: nonlinear-equations-and-newton-methods
title: "Nonlinear equations and Newton methods"
status: draft
items:
  - alg-fixed-point-iteration
  - alg-newton-correction-for-vector-residuals
  - alg-forward-difference-jacobian
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - lem-forward-difference-jacobian-error-bound
  - alg-finite-budget-newton-for-vector-residuals
  - alg-damped-newton-for-vector-residuals
  - alg-finite-difference-newton-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - thm-damped-newton-vector-residual-accepted-merit-decrease
examples: []
---

For an open $U\subseteq\mathbb R^n$ and a square residual $F:U\to\mathbb R^n$,
Newton's correction solves $DF(x)s=-F(x)$ and updates $x$ by $s$. The finite
procedures distinguish a residual-tolerance status from an exact root and
return separate statuses for a singular Jacobian, an invalid stencil or trial,
an exhausted line search, and an exhausted update budget. Fixed-point iteration
is defined on a metric space as a separate general iteration format.

The forward-difference Jacobian has an explicit local truncation bound when its
coordinate segments lie in the domain and second partial derivatives are
bounded there. Ordinary updated-Jacobian Newton has local quadratic convergence
near a simple root: invertibility at the root yields a uniform local inverse
bound, while a Lipschitz Jacobian bounds the Taylor remainder. This result
applies only to the exact full Newton correction. The damped vector-root
algorithm proves a decrease in its own residual merit only when a trial passes
its explicit test; finite backtrack exhaustion remains a failure status.

When $F=\nabla f$, the canonical objective method is
[[alg-damped-newton]] on its $C^2$ positive-definite-Hessian branch, including
its positive decrement tolerance and pre-update stopping order. Its objective
theorem does not cover arbitrary vector residuals or an indefinite Hessian.
Likewise, [[lem-newton-contraction-near-an-invertible-derivative]] concerns a
map with a fixed inverse matrix; here it is used only for its local inverse
bound, not as a proof of the updated-Jacobian Newton rate. No global-start,
finite-precision, or discretization-accuracy claim is made.
