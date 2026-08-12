---
id: def-bilinear-symmetric-skew-and-alternating-forms
kind: definition
title: 'Bilinear forms, and symmetric, skew-symmetric, and alternating bilinear forms'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, def-vector-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
    - title: 'H. Pinkham, Linear Algebra, Chapter 7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

Let $V$ be a vector space over $F$. A **bilinear form** on $V$ is a function $B:V\times V\to F$ that is linear in each variable separately.

The form is

- **symmetric** when $B(u,v)=B(v,u)$ for all $u,v\in V$;
- **skew-symmetric** when $B(u,v)=-B(v,u)$ for all $u,v\in V$;
- **alternating** when $B(v,v)=0$ for every $v\in V$.

These conditions are kept distinct because their relations depend on the characteristic of $F$.
