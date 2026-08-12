---
id: def-algebraic-dual-and-linear-functional
kind: definition
title: 'Linear functionals and the algebraic dual $V^*=\mathcal L(V,F)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-vector-space-of-linear-maps]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

Let $V$ be a vector space over $F$. A **linear functional** on $V$ is a linear map $f:V\to F$, where $F$ is regarded as a vector space over itself. The **algebraic dual space** of $V$ is

$$V^*:=\mathcal L(V,F),$$

with pointwise addition and scalar multiplication. This is the full algebraic dual: no topology, norm, or continuity condition is imposed.
