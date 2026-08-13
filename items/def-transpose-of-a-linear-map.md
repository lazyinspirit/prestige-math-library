---
id: def-transpose-of-a-linear-map
kind: definition
title: 'The transpose or algebraic adjoint $T^*:W^*\to V^*$, $T^*(g)=g\circ T$, of a linear map $T:V\to W$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional, lem-composition-and-identity-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §§6.4–6.6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to W$ be linear. Its **transpose**, or **algebraic adjoint**, is the map

$$T^*:W^*\longrightarrow V^*,\qquad T^*(g):=g\circ T.$$

The composite $g\circ T$ is linear, so it belongs to $V^*$. This definition is algebraic and does not use an inner product.
