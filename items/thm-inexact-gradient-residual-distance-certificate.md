---
id: thm-inexact-gradient-residual-distance-certificate
kind: theorem
title: "An inexact gradient residual certifies distance under strong convexity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-hessian-lower-bound-strong-convexity-gradient-gap
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Philip E. Gill and Margaret H. Wright, Math 171B Numerical Optimization Class Notes"
      url: "https://mathweb.ucsd.edu/~njw/Teaching/Math171B/notes171B.pdf"
---

## Statement

Let $U\subseteq\mathbb R^d$ be open and convex, let $f\in C^2(U,\mathbb R)$ have an attained interior global minimizer $x^*$, and suppose $H_f(x)\succeq\mu I$ on $U$ for some $\mu>0$. For a candidate $\widetilde x\in U$, let $\widehat g\in\mathbb R^d$ be a computed gradient vector. If independently verified bounds

$$\|\widehat g\|_2\le\eta,\qquad \|\widehat g-\nabla f(\widetilde x)\|_2\le\delta$$

hold for $\eta,\delta\ge0$, then

$$\|\widetilde x-x^*\|_2\le\frac{\eta+\delta}{\mu}.$$

The residual $\eta$ and discrepancy $\delta$ are mathematical hypotheses. A software stopping flag alone establishes neither bound.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] [[lem-hessian-lower-bound-strong-convexity-gradient-gap]]: a Hessian lower bound yields $\langle\nabla f(x)-\nabla f(y),x-y\rangle\ge\mu\|x-y\|_2^2$ for all $x,y\in U$ and an interior minimizer has zero gradient.

[F2] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: the Hessian and gradient use the second-partial and standard-coordinate conventions.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ and $\|u+v\|_2\le\|u\|_2+\|v\|_2$.

## Proof

1.1 Apply [F1] with $x=\widetilde x$ and $y=x^*$. Since $\nabla f(x^*)=0$, it gives $\mu\|\widetilde x-x^*\|_2^2\le\langle\nabla f(\widetilde x),\widetilde x-x^*\rangle\le\|\nabla f(\widetilde x)\|_2\|\widetilde x-x^*\|_2$ by [F3]. If $\widetilde x=x^*$ the result is immediate; otherwise divide by the positive distance to obtain $\mu\|\widetilde x-x^*\|_2\le\|\nabla f(\widetilde x)\|_2$. [F1, F2, F3, given]

2.1 The triangle inequality in [F3] and the two verified bounds give $\|\nabla f(\widetilde x)\|_2\le\|\widehat g\|_2+\|\nabla f(\widetilde x)-\widehat g\|_2\le\eta+\delta$. Combine with step 1.1 and divide by $\mu>0$. [F3, step 1.1, given, algebra] ∎

## Remarks

The certificate combines two distinct checks: a residual of the computed vector and an error bound comparing that vector with the true gradient. If $\delta=0$, it reduces to the exact-gradient certificate; if the objective is computed by quadrature or another inner method, its gradient error must still be bounded separately.
