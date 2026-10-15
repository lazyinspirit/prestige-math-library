---
id: lem-rpm-body-spin-size-bound
kind: lemma
title: Positive-energy spin–size inequality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-one-of-a-measure
  - def-sr-affine-minkowski-model
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-sr-proper-time-and-observer-decomposition
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, dominant-energy-condition bound on the Møller radius; this item proves the stated integral inequality under its explicit pointwise hypotheses and restores SI units.
verification:
  precheck: pass
---

## Statement

Fix $c>0$ and a future unit observer $n$ in an affine Minkowski spacetime as in [[def-sr-affine-minkowski-model]] and [[thm-sr-proper-time-and-observer-decomposition]]. Identify the positive-definite rest space $n^\perp$ with $\mathbb R^3$ and its Euclidean measure $d^3x$. Let $e:\mathbb R^3\to[0,\infty)$ and $j:\mathbb R^3\to\mathbb R^3$ be Lebesgue-integrable, both zero almost everywhere outside $\overline B_\ell(0)$ for some $\ell>0$. Suppose $|j(x)|\le e(x)/c$ almost everywhere. Define
$$E_0:=\int_{\mathbb R^3}e(x)\,d^3x>0,\qquad M:=E_0/c^2,\qquad \mathbf s_*:=\int_{\mathbb R^3}x\times j(x)\,d^3x.$$
Then $\mathbf s_*$ is absolutely integrable and
$$|\mathbf s_*|\le\ell Mc,\qquad\text{equivalently}\qquad \ell\ge\frac{|\mathbf s_*|}{Mc}.$$
The hypotheses are the full mathematical content of this estimate; it is not a bound for a quantum point particle or for a source whose energy density or momentum density fails them.

## Facts & Assumptions

**Given:** The affine Minkowski spacetime, a future unit observer and its Euclidean rest space, $c>0$, and integrable $e,j$ satisfying the stated positivity, support and pointwise bound.

[A1] The rest densities are Lebesgue-integrable, vanish almost everywhere outside $\overline B_\ell(0)$, satisfy $e\ge0$ and $|j|\le e/c$ almost everywhere, and have $E_0=\int e>0$.

[F1] The affine Minkowski model has signature $(-+++)$; the orthogonal complement of a future unit timelike vector is a positive-definite Euclidean rest space, with the Euclidean inner product and norm of $\mathbb R^3$. [[def-sr-affine-minkowski-model]]; [[thm-sr-proper-time-and-observer-decomposition]]; [[def-euclidean-inner-product]]

[F2] The cross product has components $(x\times y)_1=x_2y_3-x_3y_2$, $(x\times y)_2=x_3y_1-x_1y_3$, $(x\times y)_3=x_1y_2-x_2y_1$. [[def-cross-product-in-r3]]

[F3] $L^1$ means measurable with finite integral of the modulus; for real functions the Lebesgue integral is defined by positive and negative parts. [[def-l-one-of-a-measure]]; [[def-integrable-real-and-complex-functions-and-their-integrals]]

[F4] The nonnegative integral is monotone and positively homogeneous, the Lebesgue integral is linear on $L^1$, and $|\int f|\le\int|f|$ for $f\in L^1$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]; [[thm-linearity-of-the-lebesgue-integral-on-l-one]]; [[thm-integral-triangle-inequality]]

[F5] The Euclidean inner product satisfies $|u\cdot v|\le|u||v|$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

## Proof

**Proof technique:** direct.

1.1 The component formula of [F2] expands to
$$|x\times y|^2=|x|^2|y|^2-(x\cdot y)^2\le|x|^2|y|^2.$$
For almost every $x$ in the support ball, $|x|\le\ell$ and $|j(x)|\le e(x)/c$, so $|x\times j(x)|\le\ell e(x)/c$. From $e,j\in L^1$ in [F3], monotonicity and homogeneity in [F4] give $\int|x\times j|\,d^3x\le\ell E_0/c<\infty$, establishing absolute integrability of $\mathbf s_*$. [given, A1, F1, F2, F3, F4, algebra]

2.1 If $\mathbf s_*=0$ the bound is immediate. Otherwise set $u=\mathbf s_*/|\mathbf s_*|$, so $|u|=1$. Linearity, the integral triangle inequality [F4] and Cauchy–Schwarz [F5] give
$$|\mathbf s_*|=u\cdot\mathbf s_*=\int u\cdot(x\times j(x))\,d^3x\le\int|u\cdot(x\times j(x))|\,d^3x\le\int|x\times j(x)|\,d^3x\le\frac{\ell E_0}{c}=\ell Mc.$$
This proves the first inequality. [given, A1, F3, F4, F5, step 1.1, algebra]

3.1 Since $M=E_0/c^2>0$ and $c>0$, divide the inequality of step 2.1 by $Mc$ to obtain $\ell\ge|\mathbf s_*|/(Mc)$. [given, step 2.1, algebra] ∎

## Remarks

This is a conditional material inequality. Positivity of $e$ and the pointwise energy-current bound $|j|\le e/c$ are load-bearing hypotheses, not consequences of the definition of a quantum or point particle.
