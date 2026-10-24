---
id: def-exterior-algebra-of-covectors
kind: definition
title: "The exterior algebra of covectors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alternating-k-covectors,
       def-wedge-product-of-alternating-covectors]
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

Let $V$ be finite-dimensional. Its **exterior algebra of covectors** is the
graded vector space

$$ \bigwedge V^*:=\bigoplus_{k=0}^{\dim V}\operatorname{Alt}^k(V) $$

equipped with the wedge product of
[[def-wedge-product-of-alternating-covectors]].
