---
page: nonlinear-equations-and-newton-methods
title: "Nonlinear equations and Newton methods"
status: published
items:
  - alg-fixed-point-iteration
  - lem-finite-budget-fixed-point-iteration-work
  - alg-newton-correction-for-vector-residuals
  - alg-forward-difference-jacobian
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - lem-forward-difference-jacobian-error-bound
  - alg-finite-budget-newton-for-vector-residuals
  - lem-finite-budget-newton-work-and-status
  - alg-damped-newton-for-vector-residuals
  - alg-finite-difference-newton-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - thm-damped-newton-vector-residual-accepted-merit-decrease
examples: []
---

For an open $U\subseteq\mathbb R^n$ with $n\ge1$ and a square residual
$F:U\to\mathbb R^n$,
Newton's correction solves $DF(x)s=-F(x)$ and updates $x$ by $s$. The finite
procedures distinguish a residual-tolerance status from an exact root and
return separate statuses for a singular Jacobian, an invalid stencil or trial,
an exhausted line search, and an exhausted update budget. Fixed-point iteration
is defined on a metric space as a separate general iteration format.

With coordinates indexed by $0\le i<n$, the forward-difference Jacobian has
the bound $\|J_hF(x)-J_F(x)\|_{\rm op}\le(M/2)\|h\|_2$ when every component
$F_j$ is $C^2$, every increment $h_i$ is nonzero, every full coordinate
segment $x+t h_i e_i$ for $0\le t\le1$ lies in $U$, and the second partials
$|\partial_{ii}F_j|$ on those segments have the stated finite bounds
$M_{ij}\ge0$; here $M_i=(\sum_{j<n}M_{ij}^2)^{1/2}$ and
$M=\max_{i<n}M_i$. Ordinary updated-Jacobian Newton has local quadratic
convergence for $F\in C^2$ at a simple root $x_*$, meaning $F(x_*)=0$ and
$J(x_*)$ is invertible, provided some closed ball
$\overline B_2(x_*,R)\subseteq U$ satisfies
$\|J(x)-J(y)\|_{\rm op}\le L\|x-y\|_2$ for some $L\ge0$ and all $x,y$ in that
ball. Invertibility at the root gives a smaller ball with a uniform
inverse-Jacobian bound, and the Lipschitz bound controls the Taylor remainder.
This result applies only to
the exact full Newton correction. The separate
[[thm-damped-newton-vector-residual-accepted-merit-decrease]] proves strict
decrease of the residual merit for an accepted step with nonzero residual;
finite backtrack exhaustion remains a failure status.

When $F=\nabla f$, the canonical objective method is
[[alg-damped-newton]] on its $C^2$ positive-definite-Hessian branch, including
its positive decrement tolerance and pre-update stopping order. Its objective
theorem does not cover arbitrary vector residuals or an indefinite Hessian.
Likewise, [[lem-newton-contraction-near-an-invertible-derivative]] concerns a
map with a fixed inverse matrix; here it is used only for its local inverse
bound, not as a proof of the updated-Jacobian Newton rate. No global-start,
finite-precision, or discretization-accuracy claim is made.
