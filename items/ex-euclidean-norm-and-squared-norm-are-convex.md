---
id: ex-euclidean-norm-and-squared-norm-are-convex
kind: example
title: "The Euclidean norm and its square are convex, with a ball of subgradients at zero for the norm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-hessian-characterises-convexity, cor-positive-definite-hessian-implies-strict-convexity, cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient, def-p-norms-on-rn, thm-cauchy-schwarz-and-the-euclidean-norm, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-algebra-of-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §§3.1–3.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Example

Let $n\ge1$. The Euclidean norm is convex and its subdifferential at zero is the closed unit ball. The squared norm $q(x)=\|x\|_2^2$ is strictly convex and satisfies

$$\partial q(x)=\{2x\}.$$

## Facts & Assumptions

**Given:** The Euclidean norm [[def-p-norms-on-rn]], convexity [[def-convex-and-strictly-convex-functions-on-euclidean-sets]], and uniqueness of the subgradient of a differentiable convex function [[cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient]].

[L1] The Euclidean norm is a norm on $\mathbb R^n$ and therefore satisfies the triangle inequality and homogeneity ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L2] A $C^2$ function on an open convex set is convex if and only if its Hessian is positive semidefinite everywhere ([[thm-hessian-characterises-convexity]]).

[L3] A $C^2$ function on an open convex set whose Hessian is positive definite everywhere is strictly convex ([[cor-positive-definite-hessian-implies-strict-convexity]]).

[L4] The Euclidean inner product satisfies $|\langle v,y\rangle|\le\|v\|_2\|y\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L5] The derivative of $x^d$ is $d x^{d-1}$ for every integer $d\ge1$ ([[lem-derivative-of-a-power]]).

[L6] Sums and scalar multiples of differentiable real functions are differentiable with the expected derivatives ([[thm-algebra-of-derivatives]]).

[L7] Sums and scalar multiples of totally differentiable Euclidean maps are totally differentiable with the expected derivatives ([[thm-algebra-of-total-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Homogeneity and the triangle inequality in [L1] give $$\|(1-t)x+ty\|_2\le(1-t)\|x\|_2+t\|y\|_2,$$ so the norm is convex. [L1, algebra]

1.2 If $\|v\|_2\le1$, [L4] gives $\langle v,y\rangle\le\|y\|_2$, so $v$ is a subgradient of the norm at zero. Conversely, a subgradient $v$ satisfies $\|y\|_2\ge\langle v,y\rangle$ for all $y$; taking $y=v$ gives $\|v\|_2\ge\|v\|_2^2$, hence $\|v\|_2\le1$. [L4, algebra]

2.1 Since $q(x)=\sum_{j<n}x_j^2$, coordinatewise differentiation with [L5]–[L7] gives gradient $2x$ and constant Hessian $2I$, so $q$ is $C^2$ and its Hessian is positive definite. Thus [L2] gives convexity, [L3] gives strict convexity, and differentiable subgradient uniqueness gives $\partial q(x)=\{2x\}$. [L2, L3, L5, L6, L7, given, algebra] ∎
