---
id: def-grassmannian-subspaces
kind: definition
title: The Grassmannian of r-dimensional subspaces of a finite-dimensional vector space
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-space, def-linear-subspace, def-dimension]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §6m Grassmann varieties
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: MIT 18.725 Algebraic Geometry, Lecture 4, Example 4
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  precheck: n/a
---

## Definition

Let $V$ be an $n$-dimensional vector space over $k$. For $0\le r\le n$, $\operatorname{Gr}(r,V)$ denotes the parameter set of $r$-dimensional linear subspaces of $V$. Thus $\operatorname{Gr}(0,V)=\{0\}$ and $\operatorname{Gr}(n,V)=\{V\}$. For $r<0$ or $r>n$ we set $\operatorname{Gr}(r,V)=\varnothing$.
