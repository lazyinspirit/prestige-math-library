---
id: ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc
kind: example
title: "The power series of $z_0z_1$ on a bidisc centred away from the origin"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multivariable-power-series, thm-power-series-expansion-in-several-complex-variables, cor-uniqueness-of-multivariable-power-series-coefficients, cor-holomorphic-functions-in-several-variables-are-smooth, def-balls-and-polydiscs-in-complex-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Let $f(z)=z_0z_1$ on $\mathbb C^2$, and expand about the centre $a=(1,1)$. Then

$$f(z)=1+(z_0-1)+(z_1-1)+(z_0-1)(z_1-1).$$

So the multi-indexed power series at $a$ has coefficients
$c_{(0,0)}=c_{(1,0)}=c_{(0,1)}=c_{(1,1)}=1$ and $c_\alpha=0$ for every other
$\alpha\in\mathbb N^2$. Being finite, the series converges absolutely on every
bidisc centred at $(1,1)$.

## Facts & Assumptions

**Given:** The function $f(z)=z_0z_1$ on $\mathbb C^2$, the centre $a=(1,1)$, and the bidisc notation of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

## Verification

**Proof technique:** direct.

1.1 Writing $z_k=1+(z_k-1)$ for $k=0,1$ and expanding gives $z_0z_1=(1+(z_0-1))(1+(z_1-1))=1+(z_0-1)+(z_1-1)+(z_0-1)(z_1-1)$. [given, algebra]

2.1 The right-hand side is a finite multi-indexed power series about $(1,1)$, with exactly the four nonzero coefficients stated above, so it converges absolutely on every bidisc centred at $(1,1)$. [step 1.1]

3.1 The displayed finite series already equals $f$ everywhere, so it is in particular the power-series expansion of $f$ about $(1,1)$. Also $\partial^{(1,0)}f(1,1)=1$, $\partial^{(0,1)}f(1,1)=1$, and $\partial^{(1,1)}f(1,1)=1$ by direct differentiation, while every derivative of order at least $2$ in one coordinate is $0$; these values match the displayed coefficients. [step 2.1, algebra] ∎
