---
id: def-algebraically-closed-field
kind: definition
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.
