---
id: def-transpose-of-a-matrix
kind: definition
title: 'The transpose $A^{\mathsf T}$ of a matrix'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Exercises 14–15'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

For $A=(a_{ij})\in M_{m\times n}(F)$, the **transpose** of $A$ is the matrix
$A^{\mathsf T}\in M_{n\times m}(F)$ defined by

$$(A^{\mathsf T})_{ji}:=a_{ij}.$$

Thus transposition interchanges rows and columns. The transpose of a zero-sized
matrix is the unique matrix of the transposed zero-sized shape.
