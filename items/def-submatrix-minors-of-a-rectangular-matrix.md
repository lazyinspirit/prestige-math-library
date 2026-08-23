---
id: def-submatrix-minors-of-a-rectangular-matrix
kind: definition
title: 'Submatrices and minors of a rectangular matrix'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Definition

Let $A=(a_{ij})\in M_{m\times n}(R)$ be a matrix over a commutative ring ([[def-matrices-over-a-commutative-ring]]). For increasing lists of distinct row indices $I=(i_0,\ldots,i_{r-1})$ and column indices $J=(j_0,\ldots,j_{s-1})$, the **submatrix** $A[I,J]$ is the $r\times s$ matrix whose $(p,q)$ entry is $a_{i_pj_q}$.

When $r=s\ge1$, the **$(I,J)$-minor** is $\det A[I,J]$ ([[def-determinant-of-a-square-matrix]]), and it is called an **$r$-rowed minor**. The positive-size condition is part of the terminology here: no determinant of an empty matrix is introduced.
