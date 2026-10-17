---
id: lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
kind: lemma
title: "A damped least-squares step solves a scaled trust-region model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-trust-region-quadratic-model-and-ratio
  - lem-positive-definite-model-has-unique-newton-step
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed pp. 258–261 / PDF pp. 277–280: Lemma 10.2, the augmented least-squares formulation, and the scaled trust-region subproblem."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section Levenberg-Marquardt: the regularized least-squares equation and scaling matrix."
---

## Statement

Let $J\in\mathbb R^{m\times n}$, $r\in\mathbb R^m$, $m,n\ge1$, let
$D\in\mathbb R^{n\times n}$ be nonsingular, let $\lambda>0$, and put
$g:=J^Tr$. Assume $g\ne0$. There is a unique $p_\lambda$ satisfying
$$\bigl(J^TJ+\lambda D^TD\bigr)p_\lambda=-g.$$
Set $z_\lambda:=Dp_\lambda$, $\widetilde J:=JD^{-1}$, and
$\Delta_\lambda:=\|z_\lambda\|_2>0$. Then $z_\lambda$ uniquely minimizes
$$q_\lambda(z):=\tfrac12\|r+\widetilde Jz\|_2^2+\tfrac\lambda2\|z\|_2^2$$
over $\mathbb R^n$, and globally minimizes the unregularized model
$$m(z):=\tfrac12\|r+\widetilde Jz\|_2^2$$
over the trust-region ball $\|z\|_2\le\Delta_\lambda$ of
[[def-trust-region-quadratic-model-and-ratio]]. Its predicted reduction is
positive and, in the original step coordinates,
$$m(0)-m(Dp_\lambda)=\tfrac12\|Jp_\lambda\|_2^2+\lambda\|Dp_\lambda\|_2^2>0.$$

## Facts & Assumptions

**Given:** The matrices and vector in the Statement, with $D$ nonsingular, $\lambda>0$, and $g=J^Tr\ne0$.

[F1] [[def-trust-region-quadratic-model-and-ratio]]: a quadratic model is minimized over a Euclidean ball; its predicted reduction is $m(0)-m(z)$, and an actual-to-predicted ratio is defined only when that reduction is positive.

[F2] [[lem-positive-definite-model-has-unique-newton-step]]: for a real symmetric positive-definite model matrix $B$, the system $Bp=-g$ has a unique solution.

[F3] [[def-euclidean-inner-product]]: the Euclidean inner product is symmetric and bilinear, and $\|v\|_2^2=v^Tv$.

[F4] [[def-matrix-product-and-identity-matrix]]: a compatible product $AB$ is defined entrywise by finite sums, and $I_n$ is the identity matrix.

## Proof

1.1 For every nonzero $v$, $v^T(J^TJ+\lambda D^TD)v=\|Jv\|_2^2+\lambda\|Dv\|_2^2>0$ because $D$ is nonsingular. The matrix is symmetric positive definite, so [F2] gives a unique $p_\lambda$. With $z=Dp$, the system is equivalent, after left multiplication by $D^{-T}$, to $(\widetilde J^T\widetilde J+\lambda I)z=-\widetilde J^Tr$. Expanding $q_\lambda$ and completing the square around its unique critical point shows $q_\lambda(z)-q_\lambda(z_\lambda)=\tfrac12(z-z_\lambda)^T(\widetilde J^T\widetilde J+\lambda I)(z-z_\lambda)\ge0$, with equality only at $z=z_\lambda$. [given, F2, F3, F4, algebra]

2.1 If $\|z\|_2\le\|z_\lambda\|_2$, minimality from step 1.1 gives $m(z_\lambda)+\tfrac\lambda2\|z_\lambda\|_2^2\le m(z)+\tfrac\lambda2\|z\|_2^2\le m(z)+\tfrac\lambda2\|z_\lambda\|_2^2$. Subtracting the common penalty proves $m(z_\lambda)\le m(z)$ for every feasible $z$, so $z_\lambda$ globally minimizes $m$ on the stated ball. Expanding $m$ shows its linear coefficient is $\widetilde J^Tr$ and its symmetric quadratic coefficient is $\widetilde J^T\widetilde J$, so it is the trust-region model of [F1]. [step 1.1, F1, F3, F4, algebra]

3.1 The damped system gives $-g^Tp_\lambda=\|Jp_\lambda\|_2^2+\lambda\|Dp_\lambda\|_2^2$. Expanding $m(0)-m(Dp_\lambda)=-g^Tp_\lambda-\tfrac12\|Jp_\lambda\|_2^2$ yields the displayed formula. Since $g\ne0$, invertibility of the damped matrix gives $p_\lambda\ne0$, and nonsingularity of $D$ makes the displayed reduction strictly positive. Thus the ratio denominator is valid. [step 1.1, F3, F4, algebra] ∎
