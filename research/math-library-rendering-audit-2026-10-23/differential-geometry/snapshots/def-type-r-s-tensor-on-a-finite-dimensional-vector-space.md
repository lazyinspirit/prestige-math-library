---
id: def-type-r-s-tensor-on-a-finite-dimensional-vector-space
kind: definition
title: "A type $(r,s)$ tensor on a finite-dimensional vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space,
       def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $V$ be a finite-dimensional real vector space, and let $r,s\ge 0$. A
**type $(r,s)$ tensor on $V$** is a multilinear map

$$T:(V^*)^r\times V^s\to\mathbb R.$$

With this convention, vectors are type $(1,0)$ tensors and covectors are type
$(0,1)$ tensors.
