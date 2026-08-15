---
id: def-adjoint-of-a-linear-map-between-inner-product-spaces
kind: definition
title: "The adjoint $T^*:W\\to V$ is characterised by $\\langle Tv,w\\rangle_W=\\langle v,T^*w\\rangle_V$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-space, def-linear-map]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., definition 7.1'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Definition

Let $V,W$ be inner product spaces ([[def-inner-product-space]]) over the same field and let $T:V\to W$ be linear ([[def-linear-map]]). An **adjoint** of $T$ is a linear map $T^*:W\to V$ such that

$$\langle Tv,w\rangle_W=\langle v,T^*w\rangle_V$$

for every $v\in V$ and $w\in W$. Existence is not part of the definition; in finite dimensions it will follow from Riesz representation.
