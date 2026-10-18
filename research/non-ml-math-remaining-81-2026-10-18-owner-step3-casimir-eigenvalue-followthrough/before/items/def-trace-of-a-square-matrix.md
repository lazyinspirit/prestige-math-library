---
id: def-trace-of-a-square-matrix
kind: definition
title: 'The trace $\operatorname{tr}(A)$ as the sum of the diagonal entries'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Definition 8.47'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

For a square matrix $A=(a_{ij})\in M_n(F)$, its **trace** is the sum of its
diagonal entries,

$$\operatorname{tr}(A):=\sum_{i\in n}a_{ii}.$$

For $n=0$, this is the empty sum, so the unique empty matrix has trace $0$.
