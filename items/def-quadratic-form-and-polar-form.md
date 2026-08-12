---
id: def-quadratic-form-and-polar-form
kind: definition
title: 'A quadratic form $q$ in arbitrary characteristic and its polar form $b_q(u,v)=q(u+v)-q(u)-q(v)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-ring-characteristic]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §7'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
    - title: 'H. Pinkham, Linear Algebra, Chapter 7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$. A **quadratic form** on $V$ is a function $q:V\to F$ such that

$$q(av)=a^2q(v)$$

for all $a\in F$ and $v\in V$, and such that its **polar form**

$$b_q(u,v):=q(u+v)-q(u)-q(v)$$

is bilinear. This definition is valid in every characteristic. In characteristic $2$, the polar form need not determine $q$.
