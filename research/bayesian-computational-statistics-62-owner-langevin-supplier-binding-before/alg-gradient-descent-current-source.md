---
id: alg-gradient-descent
kind: algorithm
title: "Gradient descent"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-jacobian-matrix-and-gradient
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by:
  - lem-armijo-backtracking-terminates-for-strict-descent-directions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §§9.2–9.3, especially Algorithm 9.3, PDF pp. 477–483"
---

## Definition

Let $U\subseteq\mathbb R^d$ be open and let $f:U\to\mathbb R$ be continuously
Fréchet differentiable. The gradient $\nabla f(x)$ is the vector of partial
derivatives in the Euclidean coordinates, with the convention of
[[def-jacobian-matrix-and-gradient]]; differentiability is the Fréchet
condition of [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]].

Given an initial point $x_0\in U$, a stopping rule, and either a positive
fixed-step sequence $(t_k)$ or backtracking parameters
$\alpha\in(0,1)$ and $\beta\in(0,1)$, repeat the following step at $x_k$:

1. Compute $g_k:=\nabla f(x_k)$. If $g_k=0$, stop and return $x_k$.
2. Set the descent direction $p_k:=-g_k$.
3. In fixed-step mode, use the supplied $t_k>0$. In backtracking mode,
   start with $t=1$ and replace $t$ by $\beta t$ until
   $x_k+tp_k\in U$ and
   $f(x_k+tp_k)\le f(x_k)+\alpha t\,\langle g_k,p_k\rangle$.
4. Set $x_{k+1}:=x_k+t p_k$. If a fixed-step candidate leaves $U$, stop
   with domain failure.

The procedure asserts no convergence or global-minimization property for an
arbitrary objective. Its backtracking branch is well-defined at every
nonstationary iterate by
[[lem-armijo-backtracking-terminates-for-strict-descent-directions]].
