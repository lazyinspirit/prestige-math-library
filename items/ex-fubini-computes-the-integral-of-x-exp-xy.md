---
id: ex-fubini-computes-the-integral-of-x-exp-xy
kind: example
title: 'Fubini computes $\int_0^1\int_{-1}^1 x\exp(xy)\,dx\,dy$ by reversing the order'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-repeated-riemann-integrals-on-rectangles, thm-derivative-of-exponential, thm-ftc-second-part, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Example

The continuous integrand $x\exp(xy)$ satisfies
$$\int_0^1\int_{-1}^1x\exp(xy)\,dx\,dy=e-e^{-1}-2.$$
Reversing the order avoids an awkward antiderivative in $x$.

## Facts & Assumptions

**Given:** The displayed integral over $[-1,1]\times[0,1]$.

[L1] A continuous function on a rectangle may be integrated in either repeated order ([[cor-repeated-riemann-integrals-on-rectangles]]).

[L2] The derivative of the exponential is the exponential ([[thm-derivative-of-exponential]]), and the second fundamental theorem evaluates integrals of derivatives ([[thm-ftc-second-part]]).

[L3] Exponential values are positive and $\exp(-1)=\exp(1)^{-1}$ ([[cor-exponential-reciprocal-and-positivity]]).

## Verification

**Proof technique:** computation.

1.1 By continuity and [L1], reverse the order and integrate in $y$ first. Since $\partial_y\exp(xy)=x\exp(xy)$, [L2] gives $\int_0^1x\exp(xy)\,dy=e^x-1$, including $x=0$. [L1, L2]

2.1 A second application of [L2] gives the endpoint calculation below. [L2, step 1.1]
$$\int_{-1}^1(e^x-1)\,dx=(e-e^{-1})-2.$$

3.1 Using [L3] for the negative endpoint yields the stated value $e-e^{-1}-2$. [L3, step 2.1] ∎
