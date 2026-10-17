---
id: def-vector-space-of-linear-maps
kind: definition
title: 'The space $\mathcal L(V,W)$ of linear maps with pointwise addition and scalar multiplication'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-vector-space]
justified_by: [prop-linear-maps-form-a-vector-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, §II.3.1'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Definition

Let $V$ and $W$ be vector spaces over the same field $F$. Write

$$\mathcal L(V,W):=\{T:V\to W:T\text{ is linear}\}.$$

For $S,T\in\mathcal L(V,W)$ and $\lambda\in F$, define pointwise operations by

$$(S+T)(v):=S(v)+T(v),\qquad (\lambda T)(v):=\lambda T(v).$$

The zero function $v\mapsto0_W$ is denoted by $0$. Closure and the vector-space
axioms for these operations are proved in [[prop-linear-maps-form-a-vector-space]].
