---
id: def-operator-norm-on-a-finite-dimensional-inner-product-space
kind: definition
title: "The operator norm is zero on the zero domain and otherwise is max_{||v||=1} ||Tv||"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-norm]
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $T:V\to W$ be a linear map between finite-dimensional real or complex inner
product spaces. If $V=0$, define $\lVert T\rVert:=0$. If $V\ne0$, define the
**operator norm** of $T$ by

$$\lVert T\rVert:=\max\{\lVert Tv\rVert:\lVert v\rVert=1\}.$$

The next theorem proves that this maximum exists and equals the largest
singular value.
