---
id: def-linear-map
kind: definition
title: "Linear map between vector spaces over the same field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ and $W$ be vector spaces over the same field $F$. A function
$T:V\to W$ is **linear** when

$$T(au+bv)=aT(u)+bT(v)$$

for all $a,b\in F$ and $u,v\in V$. Such a function is a **linear map**, or
**linear transformation**.
