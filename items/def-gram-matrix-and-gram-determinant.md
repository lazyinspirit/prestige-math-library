---
id: def-gram-matrix-and-gram-determinant
kind: definition
title: "The Gram matrix $G(v_0,\\ldots,v_{r-1})=(\\langle v_i,v_j\\rangle)_{i,j<r}$ and Gram determinant, with empty value $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-space, def-matrix-space, def-determinant-of-a-square-matrix]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., p. 332, Theorem 7'
      url: 'https://archive.org/details/LinearAlgebraHoffmanAndKunze'
pipeline_run: null
---

## Definition

For a finite list $(v_0,\ldots,v_{r-1})$ in a real or complex inner product space ([[def-inner-product-space]]), its **Gram matrix** is

$$G(v_0,\ldots,v_{r-1}):=(\langle v_i,v_j\rangle)_{i,j<r}\in M_r(\mathbb F),$$

using the square matrix space [[def-matrix-space]]. Its **Gram determinant** is the determinant ([[def-determinant-of-a-square-matrix]]) $\det G(v_0,\ldots,v_{r-1})$. For the empty list, the Gram matrix is the unique $0\times0$ matrix and its determinant is $1$.
