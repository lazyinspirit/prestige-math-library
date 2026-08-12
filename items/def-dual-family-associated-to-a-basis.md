---
id: def-dual-family-associated-to-a-basis
kind: definition
title: 'The dual family $(b^*)_{b\in B}$ associated to a Hamel basis $B$, defined by $b^*(c)=\delta_{bc}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional, def-linear-basis]
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

Let $B$ be a Hamel basis of a vector space $V$. For each $b\in B$, the **coordinate functional** $b^*:V\to F$ is defined by

$$b^*(c)=\delta_{bc}\qquad(c\in B),$$

and extended linearly: if the unique finite basis expansion of $v$ is $v=\sum_{c\in S}a_cc$, then $b^*(v)=a_b$, with $a_b:=0$ when $b\notin S$. Uniqueness of finite basis expansions makes this single-valued, and coordinatewise addition and scalar multiplication make $b^*$ linear. The family $(b^*)_{b\in B}$ is the **dual family associated to $B$**.

When $B$ is finite this family is the usual dual basis. When $B$ is infinite it remains a family in $V^*$, but it need not span the whole algebraic dual.
