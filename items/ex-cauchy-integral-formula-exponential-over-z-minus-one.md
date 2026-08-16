---
id: ex-cauchy-integral-formula-exponential-over-z-minus-one
kind: example
title: 'The circle integral of $e^z/(z-1)$ over $|z|=2$ is $2\pi i e$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-circle, thm-complex-exponential-is-entire-with-derivative-itself]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Howell and John Mathews, Complex Analysis, Example 6.5.3"
      url: "https://complexanalysis.org/web/sec_cauchy-integral-formulas.html"
pipeline_run: null
---

## Example

If $\gamma(t)=2\exp(it)$ for $0\le t\le2\pi$, then

$$\int_\gamma\frac{e^z}{z-1}\,dz=2\pi i e.$$

## Facts & Assumptions

**Given:** The positively oriented radius-$2$ circle $\gamma$ and the integrand $e^z/(z-1)$.

[L1] The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] If $f$ is holomorphic on $D(a,R)$, $0<r<R$, $|z-a|<r$, and $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$, then $\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta=2\pi i f(z)$ ([[thm-cauchy-integral-formula-circle]]).

## Verification

**Proof technique:** direct.

1.1 The point $1$ lies strictly inside $|z|=2$, while $|z-1|\ge1$ on the circle, so the denominator has no zero on the contour; by [L1], the numerator is holomorphic on every disc. [given, L1, algebra]

2.1 Apply [L2] with centre $0$, radius $2$, interior point $1$, and $f(z)=e^z$ to obtain the displayed value $2\pi i e^1=2\pi i e$. [step 1.1, L2] ∎
