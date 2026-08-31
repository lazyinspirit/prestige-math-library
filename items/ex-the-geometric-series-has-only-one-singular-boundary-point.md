---
id: ex-the-geometric-series-has-only-one-singular-boundary-point
kind: example
title: "The geometric series has only one singular point on its unit circle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-complex-power-series, thm-geometric-series, thm-absolute-convergence-of-complex-series, thm-complex-numbers-form-a-field, lem-complex-conjugation-and-modulus-laws, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4 Example 2"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

The geometric series

$$\sum_{n\ge0} z^n=\frac{1}{1-z}\qquad(|z|<1)$$

has radius $1$. Its only singular boundary point on the unit circle is $z=1$.
Every other boundary point is regular because the rational function
$1/(1-z)$ is holomorphic there.

## Facts & Assumptions

**Given:** The geometric series $\sum_{n\ge0} z^n$.

[L1] For $|z|<1$, the real geometric series $\sum_{n\ge0}|z|^n$ converges, so $\sum_{n\ge0}z^n$ converges absolutely; the finite identity $(1-z)\sum_{k<n}z^k=1-z^n$ holds in the complex field, and $|z^n|=|z|^n\to0$. ([[thm-geometric-series]], [[thm-absolute-convergence-of-complex-series]], [[thm-complex-numbers-form-a-field]], [[lem-complex-conjugation-and-modulus-laws]], [[lem-geometric-sequence-null]])

[L2] The coefficient sequence $1,1,1,\dots$ gives radius $1$ by Cauchy-Hadamard ([[thm-cauchy-hadamard-for-complex-power-series]]).

## Verification

**Proof technique:** direct.

1.1 For $|z|<1$, fact [L1] gives absolute convergence of $\sum_{n\ge0}z^n$, the finite identity $(1-z)\sum_{k<n}z^k=1-z^n$, and the limit $z^n\to0$. Passing to the limit yields the sum formula $\sum_{n\ge0}z^n=1/(1-z)$ on the unit disc, and [L2] gives radius $1$. [L1, L2]

2.1 If $\zeta$ lies on the unit circle and $\zeta \ne 1$, then $1-\zeta \ne 0$, so the same rational function is holomorphic on a neighbourhood of $\zeta$. Thus $\zeta$ is regular. At $z=1$ the denominator vanishes, so no holomorphic extension through $1$ can equal $1/(1-z)$ on a punctured neighbourhood. Therefore $1$ is the unique singular boundary point. [step 1.1, algebra] ∎
