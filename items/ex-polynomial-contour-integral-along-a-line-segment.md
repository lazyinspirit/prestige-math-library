---
id: ex-polynomial-contour-integral-along-a-line-segment
kind: example
title: "Integrating a complex polynomial along a segment and a parabola by a primitive and by parametrization"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-for-complex-line-integrals, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-riemann-stieltjes-and-parametric-contour-integrals-agree]
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

First, $\int_0^1(t-i)^3\,dt=-5/4$. Next let $\sigma(t)=t$ and $\rho(t)=t+it(1-t)$ for $0\le t\le1$. Both go from $0$ to $1$, and
$$\int_\sigma z\,dz=\int_\rho z\,dz=\frac12.$$

## Facts & Assumptions

**Given:** The paths and polynomial integrands in the Example.

[L1] Complex polynomials are entire with the usual derivative formula ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] A primitive evaluates every rectifiable contour integral by its endpoint increment ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L3] Piecewise-$C^1$ contour integrals agree with their parametric formulas ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

## Verification

**Proof technique:** direct.

1.1 The primitive of $(z-i)^3$ is $(z-i)^4/4$ by [L1], so [L2] gives $((1-i)^4-(-i)^4)/4=(-4-1)/4=-5/4$. [L1, L2, algebra]

1.2 The polynomial $z$ has primitive $z^2/2$ by [L1], and both $\sigma$ and $\rho$ have endpoints $0,1$, so [L2] gives $1/2$ on each. [L1, L2]

2.1 Direct substitution into [L3] gives $\int_0^1\sigma(t)\sigma'(t)dt$ and $\int_0^1\rho(t)\rho'(t)dt$; each is the endpoint difference of $\gamma(t)^2/2$, confirming the same values with both orientations explicit. [step 1.2, L3, algebra] ∎
