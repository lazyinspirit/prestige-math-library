---
id: lem-rpm-charge-multipole-remainder
kind: lemma
title: Finite-size charge multipole remainder
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-one-of-a-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-chain-rule-for-total-derivatives
  - thm-continuous-implies-integrable
  - thm-extreme-value-metric
  - thm-ftc-second-part
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Carnegie Mellon 21-269, Riemann integration notes
      url: https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html
      locator: Fundamental-theorem-of-calculus method used for the integral Taylor remainder; the item derives the bound directly.
verification:
  precheck: pass
---

## Statement

Let $\ell>0$, $z\in\mathbb R^3$, and let $\rho\in L^1(\mathbb R^3)$ be real and zero almost everywhere outside $\overline B_\ell(z)$. Write $\|\rho\|_1:=\int_{\mathbb R^3}|\rho(y)|\,d^3y$. Let $\mathcal U\subseteq\mathbb R^3$ be open with $\overline B_\ell(z)\subset\mathcal U$, and let $b:\mathcal U\to\mathbb R^m$ be $C^2$ for a finite integer $m\ge1$. For each component $b_k$, let
$$M_k:=\sup_{x\in\overline B_\ell(z)}\|D^2b_k(x)\|_{\mathrm{op}}<\infty,$$
where the operator norm is taken on the bilinear map using the Euclidean norm in [[def-euclidean-inner-product]]. Define $Q:=\int\rho\,d^3y$, $d:=\int(y-z)\rho(y)\,d^3y$, and $\mathcal B:=\int\rho(y)b(y)\,d^3y$, with vector integrals taken componentwise. Then
$$\mathcal B_k=Q\,b_k(z)+Db_k(z)d+R_k,\qquad |R_k|\le\frac12M_k\ell^2\|\rho\|_1\quad(k=1,\ldots,m).$$
Thus every fixed component in a smooth finite-component trivialization has the stated charge multipole remainder. A tensor-valued component may be treated only after a fixed smooth trivialization over the ball; derivatives of that trivialization enter $M_k$, and no covariant tensor remainder without this data is asserted.

## Facts & Assumptions

**Given:** A compactly supported real $\rho\in L^1(\mathbb R^3)$, $\ell>0$, $z\in\mathbb R^3$, and a $C^2$ finite-component map $b$ on a neighborhood of the closed ball, with the component Hessian bounds in the Statement.

[A1] The charge density is real and integrable with support in the stated ball; the map $b$ is $C^2$ on its neighborhood and each component Hessian has the stated finite bound.

[F1] $L^1$ is the class of functions whose absolute value has finite Lebesgue integral, and the Lebesgue integral is linear on $L^1$. [[def-l-one-of-a-measure]]; [[def-integrable-real-and-complex-functions-and-their-integrals]]; [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F2] The nonnegative integral is monotone and positively homogeneous; for an integrable real function, $|\int f|\le\int|f|$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]; [[thm-integral-triangle-inequality]]

[F3] A continuous function on a nonempty compact metric space is bounded, and a continuous function on a compact interval is Riemann integrable. [[thm-extreme-value-metric]]; [[thm-continuous-implies-integrable]]

[F4] The chain rule along $t\mapsto z+t(y-z)$ and the one-dimensional fundamental theorem of calculus hold for the stated $C^2$ maps. [[thm-chain-rule-for-total-derivatives]]; [[thm-ftc-second-part]]

[F5] The Euclidean inner product and norm are the usual positive-definite ones. [[def-euclidean-inner-product]]

## Proof

**Proof technique:** direct.

1.1 Since $|y-z|\le\ell$ on the support, monotonicity and homogeneity in [F2] show that each moment is absolutely integrable: $|Q|\le\|\rho\|_1$ and $|d_i|\le\ell\|\rho\|_1$. By compactness of the ball and continuity of each $b_k$, [F3] bounds $b_k$ there, so $\rho b_k$ is integrable as well. [given, A1, F1, F2, F3]

1.2 Fix a support point $y$ and component $k$, and set $\phi(t)=b_k(z+t(y-z))$ on $[0,1]$. The segment stays in the closed ball, and the chain rule [F4] gives $\phi'(0)=Db_k(z)(y-z)$ and $\phi''(t)=D^2b_k(z+t(y-z))[y-z,y-z]$, hence $|\phi''(t)|\le M_k|y-z|^2$. The function $H(t)=(1-t)\phi'(t)+\phi(t)$ has derivative $H'(t)=(1-t)\phi''(t)$; $\phi''$ is continuous, so it is integrable by [F3], and [F4] yields $$b_k(y)=b_k(z)+Db_k(z)(y-z)+r_k(y),\qquad |r_k(y)|\le\frac12M_k|y-z|^2.$$ The bound follows from $\int_0^1(1-t)\,dt=\tfrac12$ and the integral triangle inequality [F2]. [given, A1, F2, F3, F4, F5, algebra]

2.1 Multiply the component expansion of step 1.2 by $\rho(y)$ and integrate. Linearity [F1] gives $\mathcal B_k=Qb_k(z)+Db_k(z)d+R_k$, with $R_k=\int\rho(y)r_k(y)\,d^3y$. By the integral triangle inequality [F2] and $|y-z|\le\ell$, $|R_k|\le\tfrac12M_k\ell^2\|\rho\|_1$. [given, A1, F1, F2, step 1.2, algebra] ∎

## Remarks

This is a local component estimate. It does not differentiate the remainder or identify it with a force; a tensor estimate requires the stated fixed trivialization and its derivatives.
