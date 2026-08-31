---
id: def-pullback-of-a-covariant-tensor-by-a-linear-map
kind: definition
title: "The pullback of a covariant tensor by a linear map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space,
       def-linear-map]
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
---

## Definition

Let $V$ and $W$ be finite-dimensional real vector spaces, let $k\ge0$ be an
integer, let $A:V\to W$ be linear, and let $T:W^k\to\mathbb R$ be a covariant tensor of
degree $k$. Its **pullback** $A^*T$ is the covariant tensor on $V$ defined by

$$
(A^*T)(v_1,\ldots,v_k):=T(Av_1,\ldots,Av_k).
$$
