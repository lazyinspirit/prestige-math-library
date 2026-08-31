---
id: def-interior-product-on-alternating-covectors
kind: definition
title: "Interior product on alternating covectors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alternating-k-covectors]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $V$ be a finite-dimensional real vector space, let $v\in V$, and let
$\omega\in\operatorname{Alt}^k(V)$ with $k\ge 1$. The
**interior product** $\iota_v\omega\in\operatorname{Alt}^{k-1}(V)$ is defined by

$$
(\iota_v\omega)(v_2,\ldots,v_k):=\omega(v,v_2,\ldots,v_k).
$$

For $k=0$, adopt the formal convention $\operatorname{Alt}^{-1}(V):=\{0\}$ and
set $\iota_v\omega:=0$.
