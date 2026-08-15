---
id: ex-ml-estimate-on-a-semicircle
kind: example
title: "ML bounds for rational integrands on a semicircular arc and a line segment"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-ml-estimate-for-complex-line-integrals, cor-piecewise-c1-paths-have-additive-speed-integral-length, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Example

On the upper semicircle $|z|=2$, $\left|\int dz/(z-3)\right|\le2\pi$. On the segment from $2$ to $2+i$,
$$\left|\int\frac{dz}{z^2+1}\right|\le\frac1{2\sqrt5}.$$

## Facts & Assumptions

**Given:** The two oriented contours and rational integrands in the Example.

[L1] If $|f|\le M$ on a rectifiable contour, then $|\int f\,dz|\le ML(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L2] A piecewise-$C^1$ path has length equal to the sum of its speed integrals ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L3] Complex modulus is multiplicative and obeys the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

**Proof technique:** direct.

1.1 On $|z|=2$, the reverse triangle inequality from [L3] gives $|z-3|\ge1$, so $|1/(z-3)|\le1$; [L2] gives semicircle length $2\pi$, and [L1] gives the first bound. [L1, L2, L3]

1.2 On $z=2+it$, $0\le t\le1$, one has $|z-i|\ge2$ and $|z+i|\ge\sqrt5$, so [L3] gives $|1/(z^2+1)|\le1/(2\sqrt5)$. [L3, algebra]

2.1 The segment length is $1$ by [L2], so [L1] gives the second bound. Both contours stay a positive distance from their poles. [step 1.2, L1, L2] ∎
