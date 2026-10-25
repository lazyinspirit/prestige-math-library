---
id: thm-nonlinear-least-squares-gradient-and-hessian
kind: theorem
title: "The nonlinear least-squares gradient and Hessian formulas"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-euclidean-inner-product
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - thm-chain-rule-for-total-derivatives
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10 introduction, before §10.1, printed p. 246 / PDF p. 265: equations (10.4)–(10.5), the gradient and Hessian formulas."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Sections Nonlinear least squares and Newton and Gauss-Newton: objective, gradient and Hessian formulas."
---

## Statement

Let $n,m\ge1$, let $U\subseteq\mathbb R^n$ be open, and let
$r=(r_1,\ldots,r_m)^T:U\to\mathbb R^m$ be of class $C^2$ (each component
has continuous partial derivatives through order two, as in
[[def-ck-and-multi-index-notation-in-several-variables]]). Define
$$\phi(x):=\tfrac12\sum_{i=1}^m r_i(x)^2=\tfrac12\|r(x)\|_2^2,$$
and let $J(x)\in\mathbb R^{m\times n}$ be the Jacobian with $i$th row
$\nabla r_i(x)^T$. Then $\phi$ is of class $C^2$ and
$$\nabla\phi(x)=J(x)^T r(x),\qquad \nabla^2\phi(x)=J(x)^TJ(x)+\sum_{i=1}^m r_i(x)\nabla^2r_i(x).$$

The second term in the Hessian is the residual-curvature term. It vanishes
when $r(x)=0$, but need not vanish at a nonzero-residual stationary point.

## Facts & Assumptions

**Given:** The open set $U$, the $C^2$ residual components $r_i$, and the definitions of $\phi$, $J$, and the Hessian in the Statement.

[F1] [[def-ck-and-multi-index-notation-in-several-variables]]: class $C^2$ means each ordered iterated coordinate partial through order two exists and is continuous.

[F2] [[def-jacobian-matrix-and-gradient]]: $J_{ij}=\partial_j r_i$, and the gradient of a scalar field is the vector of its first partial derivatives.

[F3] [[def-hessian-and-euclidean-critical-point]]: the Hessian entries are $\partial_k\partial_j\phi$ in the standard coordinates.

[F4] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: if the partial derivatives of a map exist on a neighborhood and are continuous at a point, the map is totally differentiable there with its Jacobian as derivative.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a differentiable composition is the composition of the derivatives.

[F6] [[thm-algebra-of-derivatives]]: along a coordinate line, the derivative of a product $uv$ is $u'v+uv'$.

[F7] [[thm-algebra-of-continuous-functions]]: for real-valued functions on a subset of $\mathbb R$, finite sums and products of functions continuous at a point remain continuous there.

[F8] [[def-euclidean-inner-product]]: the Euclidean inner product is the standard dot product and $\|v\|_2^2=\langle v,v\rangle$.

## Proof

1.1 Fix $x\in U$. By [F1] each component partial of $r_i$ exists on a neighborhood and is continuous at $x$, so [F4] makes $r_i$ totally differentiable there with derivative row $\nabla r_i(x)^T$. For $h\to0$ with $x+h\in U$, let $\delta_i(h):=r_i(x+h)-r_i(x)=\nabla r_i(x)^T h+o(\|h\|_2)$; in particular $\delta_i(h)=O(\|h\|_2)$. Expanding each square yields $\phi(x+h)-\phi(x)=\sum_i r_i(x)\delta_i(h)+\tfrac12\sum_i\delta_i(h)^2=(J(x)^Tr(x))^T h+o(\|h\|_2)$, because the sum is finite and each squared increment is $O(\|h\|_2^2)$. Thus $D\phi(x)[h]=(J(x)^Tr(x))^T h$, so the gradient is $J(x)^Tr(x)$. [given, F1, F2, F4, F8, algebra]

2.1 For coordinates $j,k$, step 1.1 gives $\partial_j\phi=\sum_i r_i\partial_jr_i$. Restrict each factor to the coordinate line $x+te_k$ and apply the product rule [F6]; the chain rule [F5] identifies the derivatives of the restrictions with the corresponding partial derivatives. Therefore $\partial_k\partial_j\phi(x)=\sum_i(\partial_k r_i(x))(\partial_jr_i(x))+\sum_i r_i(x)\partial_k\partial_jr_i(x)$. The first matrix has entries $(J^TJ)_{kj}$ and the second is $\sum_i r_i\nabla^2r_i$, proving the Hessian identity. [step 1.1, F1, F2, F3, F5, F6, algebra]

3.1 By [F1], each $r_i$ and its first and second partials are continuous on $U$. To justify continuity of their algebraic combinations on this multivariable domain directly, let $u,v:U\to\mathbb R$ be continuous at $x$. Near $x$, $|u(y)|\le|u(x)|+1$, and $|u(y)v(y)-u(x)v(x)|\le(|u(x)|+1)|v(y)-v(x)|+|v(x)||u(y)-u(x)|$. The right side tends to zero as $y\to x$; likewise the difference of a finite sum is bounded by the sum of the absolute differences. These estimates prove the needed sum and product continuity on $U$, extending the real-domain conclusion of [F7] without applying that theorem outside its domain. They show that $\phi$ and the first and second partials displayed in steps 1.1 and 2.1 are continuous. Thus $\phi$ is $C^2$ by [F1]. [F1, F7, step 1.1, step 2.1, algebra] ∎
