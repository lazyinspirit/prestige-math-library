---
id: def-canonical-map-to-the-double-dual
kind: definition
title: 'The canonical evaluation map $J_V:V\to V^{**}$ given by $J_V(v)(f)=f(v)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional]
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
    - title: 'H. Pinkham, Linear Algebra, §6.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Definition

For a vector space $V$, write $V^{**}:=(V^*)^*$. The **canonical evaluation map into the double dual** is

$$J_V:V\longrightarrow V^{**},\qquad J_V(v)(f):=f(v).$$

For fixed $v$, evaluation at $v$ is linear in $f$, so $J_V(v)\in V^{**}$. The construction uses no basis and is therefore canonical.
