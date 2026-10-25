---
id: "ex-a-normalized-compactly-supported-top-form-on-euclidean-space"
kind: "example"
title: "A normalized compactly supported top form on Euclidean space"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology","lem-smooth-bump-between-concentric-euclidean-balls","thm-continuous-on-a-rectangle-is-riemann-integrable","thm-multidimensional-integral-properties","thm-riemann-fubini-on-product-rectangles","thm-heine-borel-rn"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, proof of Theorem 5.3.10, pp.187–190
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For every $n\ge1$, a product of one normalized smooth one-variable bump in each coordinate gives a compactly supported top form on standard oriented $\mathbb R^n$ whose integral is one.

## Facts & Assumptions

**Given:** A natural number $n\ge1$.

[F1] [[lem-smooth-bump-between-concentric-euclidean-balls]] supplies a smooth $\rho:\mathbb R\to[0,1]$ equal to one on $[-1/2,1/2]$ and supported in $(-1,1)$.

[F2] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] gives integrability of the bump and its finite products; [[thm-multidimensional-integral-properties]] gives linearity and monotonicity.

[F3] [[thm-riemann-fubini-on-product-rectangles]] identifies the multiple integral of a product coefficient with its iterated integrals, and [[thm-heine-borel-rn]] makes its closed bounded support compact.

[F4] [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]] identifies an integral-one form with the inverse image of $1$ in top compact-support cohomology.

## Verification

1.1 Take $\rho$ from [F1] and set $a=\int_{-1}^1\rho(t)\,dt$. The partition at $-1/2$ and $1/2$, together with $\rho\ge0$ everywhere and $\rho=1$ on the central interval, has lower Darboux sum at least $1$; hence [F2] gives $a\ge1>0$. Put $b=\rho/a$. Then $b$ is smooth, supported in $(-1,1)$, and $\int_\mathbb Rb=1$. [F1, F2, given]

2.1 Using the library's zero-based coordinates on $n=\{0,\ldots,n-1\}$, define $$\omega(x_0,\ldots,x_{n-1})=\left(\prod_{j=0}^{n-1} b(x_j)\right)dx^0\wedge\cdots\wedge dx^{n-1}.$$ Its coefficient is smooth and its support lies in the closed cube $[-1,1]^n$, which is compact by [F3]. Repeated application of [F3] on that cube gives $$\int_{\mathbb R^n}\omega=\prod_{j=0}^{n-1}\left(\int_{-1}^1b(t)\,dt\right)=1^n=1.$$ Thus [F4] sends $[\omega]$ to $1$. [F3, F4, step 1.1]

3.1 For $n=1$ the product and Fubini iteration have one factor and recover $b(t)dt$. With the standard convention in dimension zero, the empty product is the value-one function on the positive point and also has integral one, although the displayed construction was stipulated for $n\ge1$. Replacing any factor by zero makes the integral zero, as linearity predicts. There are no endpoints of the ambient manifold; the bounding-cube faces only delimit a zero extension. One explicitly constructed bump is reused finitely many times, so no choice principle enters. [F2, F3, F4, step 1.1, step 2.1] ∎
