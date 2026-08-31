---
id: def-permutation-action-on-covariant-tensors
kind: definition
title: "The permutation action on covariant tensors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $V$ be a finite-dimensional real vector space, let $k\ge 0$, and let
$\sigma\in S_k$. If $T:V^k\to\mathbb R$ is covariant of degree $k$, define
$\sigma\cdot T$ by

$$
(\sigma\cdot T)(v_1,\ldots,v_k):=T(v_{\sigma(1)},\ldots,v_{\sigma(k)}).
$$
