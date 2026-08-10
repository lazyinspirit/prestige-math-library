---
id: def-coordinate-column-and-matrix-of-a-linear-map
kind: definition
title: 'Coordinate columns $[v]_{\mathcal B}$ and matrices $[T]_{\mathcal B}^{\mathcal C}$ of linear maps relative to ordered bases'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis,
       def-linear-map, def-matrix-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Definition 3.31'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $\mathcal B=(b_0,\ldots,b_{n-1})$ be an ordered basis of $V$. The unique
coordinates $v=\sum_{j<n}x_jb_j$ form the **coordinate column**
$[v]_{\mathcal B}\in M_{n\times1}(F)$, whose $j$-th entry is $x_j$.

Let $\mathcal C=(c_0,\ldots,c_{m-1})$ be an ordered basis of $W$ and let
$T:V\to W$ be linear. The **matrix of $T$ relative to $\mathcal B$ and
$\mathcal C$** is the matrix
$[T]_{\mathcal B}^{\mathcal C}\in M_{m\times n}(F)$ whose $j$-th column is
$[T(b_j)]_{\mathcal C}$. Equivalently, if
$T(b_j)=\sum_{i<m}t_{ij}c_i$, then
$([T]_{\mathcal B}^{\mathcal C})_{ij}=t_{ij}$.

For an empty ordered basis, these definitions give the unique coordinate column
or matrix of the corresponding zero-sized shape.
