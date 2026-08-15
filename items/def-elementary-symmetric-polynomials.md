---
id: def-elementary-symmetric-polynomials
kind: definition
title: "The elementary symmetric polynomials $e_0,e_1,\\ldots,e_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-polynomial, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Sections 7.1-7.2"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Definition

For $0\le k\le n$, the **$k$-th elementary symmetric polynomial** in $x_1,\ldots,x_n$ is

$$e_k(x_1,\ldots,x_n):=\sum_{1\le i_1<\cdots<i_k\le n}x_{i_1}\cdots x_{i_k}.$$

The empty product gives $e_0=1$. We put $e_k=0$ for $k>n$. Each $e_k$ is symmetric because a permutation of the variables merely permutes the $k$-element index sets in the sum.
