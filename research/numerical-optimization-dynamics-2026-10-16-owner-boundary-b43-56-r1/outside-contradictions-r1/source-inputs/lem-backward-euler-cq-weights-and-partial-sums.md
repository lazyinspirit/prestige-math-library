---
id: lem-backward-euler-cq-weights-and-partial-sums
kind: lemma
title: Backward-Euler fractional weights and positive partial sums
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-backward-euler-convolution-quadrature
  - lem-backward-euler-cq-principal-branch-generating-function
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-functional-equation
  - cor-gautschi-inequality-for-the-real-gamma-function
  - def-real-power-series-and-radius-of-convergence
  - thm-termwise-differentiation-of-a-real-power-series
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-geometric-series
  - thm-direct-comparison-test
  - lem-cauchy-product-of-real-power-series
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - thm-principal-branch-power-agrees-with-positive-real-power
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The coefficient and finite recurrence arguments use no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §3.3.2
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §1
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
---

## Statement

Let $0<\alpha<1$ and let $(\omega_j)$ be the weights from
[[alg-backward-euler-convolution-quadrature]]. Then $\omega_0=1$,
$\omega_j<0$ for every $j\ge1$, and for every complex $z$ with $|z|<1$,
$$\sum_{j=0}^{\infty}\omega_jz^j=(1-z)^\alpha_{\operatorname{Log}}.$$
For $n\ge0$ define
$$p_n:=\sum_{j=0}^n\omega_j.$$
Then
$$p_n=\prod_{k=1}^n\left(1-\frac{\alpha}{k}\right) =\frac{\Gamma(n+1-\alpha)}{\Gamma(1-\alpha)\Gamma(n+1)}>0,$$
where the empty product for $n=0$ is $1$. For every $n\ge1$,
$$p_n\ge\frac{(n+1)^{-\alpha}}{\Gamma(1-\alpha)}.$$

## Facts & Assumptions

**Given:** $0<\alpha<1$ and the coefficient recurrence in
[[alg-backward-euler-convolution-quadrature]].

[F1] [[alg-backward-euler-convolution-quadrature]]:
$\omega_0=1$ and $\omega_j=((j-1-\alpha)/j)\omega_{j-1}$ for $j\ge1$.

[F2] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(x)>0$ for $x>0$ and $\Gamma(1)=1$.

[F3] [[thm-real-gamma-functional-equation]]:
$\Gamma(x+1)=x\Gamma(x)$ for $x>0$.

[F4] [[cor-gautschi-inequality-for-the-real-gamma-function]]: for $x>0$
and $0\le s\le1$,
$x^{1-s}\le\Gamma(x+1)/\Gamma(x+s)\le(x+1)^{1-s}$.

[F5] [[thm-geometric-series]] and
[[thm-direct-comparison-test]]: $\sum_{j\ge0}r^j$ converges for
$|r|<1$, and a series dominated termwise in absolute value by it
converges absolutely.

[F6] [[def-real-power-series-and-radius-of-convergence]] and
[[thm-termwise-differentiation-of-a-real-power-series]]: a power series
may be differentiated term by term inside its radius of convergence.

[F7] [[thm-real-power-continuity-and-derivatives]],
[[thm-real-power-laws]], [[thm-chain-rule]], and
[[thm-algebra-of-derivatives]]: positive-base powers obey exponent laws
and the chain/product rules, with $(x^q)'=qx^{q-1}$ for $x>0$.

[F8] [[lem-cauchy-product-of-real-power-series]]: inside the common
convergence radius, the product of two power-series sums has the Cauchy
product coefficients.

[F9] [[cor-power-series-sums-are-smooth-with-coefficient-formula]]:
the coefficients of a power series equal to another power series near its
centre agree, since they are the normalized derivatives at that centre.

[F10] [[lem-backward-euler-cq-principal-branch-generating-function]]:
for $|z|<1$, the coefficient series is the principal-branch power
$(1-z)^\alpha_{\operatorname{Log}}$.

[F11] [[thm-principal-branch-power-agrees-with-positive-real-power]]:
when $z$ is real and $|z|<1$,
$(1-z)^\alpha_{\operatorname{Log}}=(1-z)^\alpha$ with the real-power
convention.

## Proof

1.1 The recurrence [F1] gives $\omega_1=-\alpha<0$ and, for $j\ge2$, $\omega_j=((j-1-\alpha)/j)\omega_{j-1}<0$, since $0<(j-1-\alpha)/j<1$. It also gives $|\omega_j|\le1$ for every $j$. Hence $W(z):=\sum_{j\ge0}\omega_jz^j$ converges absolutely for $|z|<1$ by [F5], and its radius is at least $1$. [given, F1, F5, algebra]

2.1 By [F10], the complex generating function equals the principal-branch power for $|z|<1$. On the real interval $(-1,1)$, [F11] identifies it with $(1-z)^\alpha$ in the real-power convention. [step 1.1, F10, F11]

3.1 Since $p_n=\sum_{j=0}^n\omega_j$, [F8] and the geometric series [F5] give $P(z):=\sum_{n\ge0}p_nz^n=W(z)/(1-z)=(1-z)^{\alpha-1}$ for real $z\in(-1,1)$. Differentiate this real series by [F6] and the right side by [F7]. Comparing coefficients in $(1-z)P'(z)=(1-\alpha)P(z)$ yields $(n+1)p_{n+1}=(n+1-\alpha)p_n$ for $n\ge0$. [step 2.1, F5, F6, F7, F8, F9, algebra]

4.1 Iterating the recurrence from step 3.1 gives $p_n=\prod_{k=1}^n(k-\alpha)/k$. By [F3], $$\prod_{k=1}^n(k-\alpha)=\frac{\Gamma(n+1-\alpha)}{\Gamma(1-\alpha)}, \qquad \prod_{k=1}^nk=\Gamma(n+1).$$ Thus the displayed Gamma formula follows; all factors are positive, and [F2] confirms the Gamma denominator is positive. This also covers $n=0$ with the empty product. [step 3.1, F2, F3, algebra]

5.1 For $n\ge1$, apply [F4] with $x=n$ and $s=1-\alpha$. It gives $n^\alpha\le\Gamma(n+1)/\Gamma(n+1-\alpha)\le(n+1)^\alpha$. Taking reciprocals and using step 4.1 yields $p_n\ge(n+1)^{-\alpha}/\Gamma(1-\alpha)$. [step 4.1, F2, F4, algebra] ∎
