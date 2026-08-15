---
id: ex-geometric-series-reexpanded-about-an-arbitrary-complex-point
kind: example
title: "The geometric series re-expanded about an arbitrary point of the unit disc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-power-series-reexpansion-at-an-interior-point, thm-cauchy-hadamard-for-complex-power-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Power-series supplementary notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Example

For $|b|<1$,
$$\frac1{1-z}=\sum_{k=0}^{\infty}\frac{(z-b)^k}{(1-b)^{k+1}}\qquad(|z-b|<|1-b|).$$
Thus the geometric sum re-expanded about $b$ has radius $|1-b|$.

## Facts & Assumptions

**Given:** A complex number $b$ with $|b|<1$.

[L1] A complex power-series sum re-expands about every interior point ([[thm-complex-power-series-reexpansion-at-an-interior-point]]).

[L2] If $L=\limsup_{k\to\infty}|c_{k+1}|^{1/(k+1)}$, Cauchy–Hadamard gives radius $+\infty$ for $L=0$, radius $1/L$ for $0<L<+\infty$, and radius $0$ for $L=+\infty$, with no boundary assertion ([[thm-cauchy-hadamard-for-complex-power-series]]).

## Verification

**Proof technique:** direct.

1.1 Rewrite $1-z=(1-b)(1-(z-b)/(1-b))$; since $b\ne1$, the finite geometric identity gives the displayed infinite series when $|(z-b)/(1-b)|<1$. [algebra]

2.1 The coefficient modulus is $|1-b|^{-k-1}$, whose root limsup is $|1-b|^{-1}$, so [L2] gives radius $|1-b|$. [step 1.1, L2]

3.1 The coefficients agree with the interior re-expansion guaranteed by [L1], and no assertion is made on its boundary circle. [step 1.1, step 2.1, L1] ∎
