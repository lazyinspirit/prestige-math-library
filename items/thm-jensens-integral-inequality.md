---
id: thm-jensens-integral-inequality
kind: theorem
title: "Jensen's integral inequality for a probability measure"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-probability-measure, thm-supporting-lines-for-convex-functions, def-nonnegative-lebesgue-integral, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem (7.44)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Let $(X,\mathcal A,\mathbb P)$ be a probability space, let $f\in L^1(\mathbb P)$
be real-valued, let $I\subseteq\mathbb R$ be an interval containing $f(x)$ for
almost every $x$, and let $\varphi:I\to\mathbb R$ be convex with
$\varphi\circ f\in L^1(\mathbb P)$. Then
$$\varphi\!\left(\int f\,d\mathbb P\right)\le\int\varphi(f)\,d\mathbb P.$$

## Facts & Assumptions

**Given:** A probability space $(X,\mathcal A,\mathbb P)$, a real-valued integrable $f$, an interval $I$ containing its almost-everywhere range, and a convex $\varphi:I\to\mathbb R$ with $\varphi\circ f\in L^1(\mathbb P)$.

[L1] A probability measure is a measure with total mass $1$ ([[def-probability-measure]]).

[L2] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L3] Every slope between the one-sided derivatives of a convex function yields a supporting line at an interior point ([[thm-supporting-lines-for-convex-functions]]).

[L4] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Put $m:=\int f\,d\mathbb P$. If $m$ lies in the interior of $I$, apply [L3]
to obtain a supporting line
$$\ell(x)=\varphi(m)+a(x-m)$$
with $\ell(x)\le\varphi(x)$ on $I$. Integrating and using [L1] and [L2] gives
$$\int\varphi(f)\,d\mathbb P\ge\int\ell(f)\,d\mathbb P =\varphi(m)+a\left(\int f\,d\mathbb P-m\int1\,d\mathbb P\right)=\varphi(m).$$
[L1, L2, L3, given, algebra]

1.2 Suppose instead that $m$ is an endpoint of $I$, say the left endpoint. Then [L1, L2, L4, given]
$f-m\ge0$ almost everywhere and
$$\int(f-m)\,d\mathbb P=\int f\,d\mathbb P-m\int1\,d\mathbb P=0$$
by [L1] and [L2]. Therefore $f=m$ almost everywhere by [L4], so
$$\int\varphi(f)\,d\mathbb P=\varphi(m)=\varphi\!\left(\int f\,d\mathbb P\right).$$
The right-endpoint case is identical.

2.1 Steps 1.1 and 1.2 cover the interior and endpoint cases, so Jensen's [step 1.1, step 1.2] ∎
inequality holds on the whole interval $I$.
