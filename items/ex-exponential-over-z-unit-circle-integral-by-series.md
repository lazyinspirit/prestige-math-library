---
id: ex-exponential-over-z-unit-circle-integral-by-series
kind: example
title: "The unit-circle integral of exp(z)/z is 2 pi i by uniform termwise integration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-exponential, lem-complex-exponential-series-converges-everywhere, prop-linearity-of-complex-line-integrals, thm-uniform-limit-interchanges-complex-line-integrals, thm-circle-integrals-of-integer-monomials]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Example

On the positively oriented unit circle $\gamma$,
$$\int_\gamma\frac{\exp z}{z}\,dz=2\pi i.$$

## Facts & Assumptions

**Given:** The positively oriented unit circle.

[L1] The complex exponential is the series $\exp z=\sum_{n\ge0}z^n/n!$ ([[def-complex-exponential]]), and this series converges absolutely for every complex $z$ ([[lem-complex-exponential-series-converges-everywhere]]).

[L2] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L3] Uniform convergence on a fixed contour permits passage of the limit through the line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L4] On a positive circle, the integral of $(z-a)^m$ is $0$ for integer $m\ne-1$ and $2\pi i$ for $m=-1$ ([[thm-circle-integrals-of-integer-monomials]]).

## Verification

**Proof technique:** direct.

1.1 On $|z|=1$, the exponential tail is bounded by the convergent numerical series $\sum1/n!$, so the partial sums converge uniformly; division by $z$ preserves the bound because $|z|=1$. [L1]

1.2 By [L2] and [L4], integrating the finite sum $\sum_{n=0}^Nz^{n-1}/n!$ gives $2\pi i$ from the $n=0$ term and $0$ from every $n\ge1$ term. [L2, L4]

2.1 Apply [L3] to the uniform convergence in step 1.1 and pass to the limit in step 1.2. The circle excludes $z=0$, so division is defined. [step 1.1, step 1.2, L3] ∎
