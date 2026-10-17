---
id: def-saddle-point-for-convex-concave-lagrangian
kind: definition
title: "Saddle points of extended-real Lagrangians"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-extended-reals
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §5.1"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Antonin Chambolle and Thomas Pock, A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging, §2"
      url: "https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf"
---

## Definition

Let $X,Y$ be nonempty subsets of finite-dimensional real Euclidean spaces and
let $\Psi:X\times Y\to[-\infty,+\infty]$ be an extended-real function. A
pair $(x_*,y_*)$ is a
**saddle point** of $\Psi$ if $\Psi(x_*,y_*)$ is finite and
$$\Psi(x_*,y)\le \Psi(x_*,y_*)\le \Psi(x,y_*)\qquad(x\in X,\ y\in Y).$$
The inequalities must be defined at the arguments they display. For an
equality-constrained problem the primal set may be a product set of
finite-valued pairs $(x,z)$.

## Facts & Assumptions

**Given:** Nonempty subsets $X,Y$ of finite-dimensional real Euclidean spaces and an extended-real function $\Psi$ as above.

[A1] The displayed evaluations are defined and the central value is finite.


[F1] [[def-extended-reals]]: extended-real values are ordered in $[-\infty,+\infty]$.

[F2] [[def-euclidean-inner-product]]: each finite-dimensional Euclidean space carries a real inner product and its induced norm.

## Proof


1.1 The definition is a pair of quantified order inequalities with a finite central value. Only the displayed evaluations are needed, so a partial formula such as $f(x)+\langle Kx,y\rangle-g^*(y)$ is safe when each displayed saddle evaluation is defined. [A1, given, F1]

2.1 For any equality-constrained Lagrangian $\mathcal L((x,z),y)$ or primal-dual saddle function $\Phi(x,y)$, restricting $X,Y$ to their finite-valued domains gives exactly the same two inequalities. No minimax interchange or existence theorem follows from this definition. [A1, given, F2, algebra] ∎
