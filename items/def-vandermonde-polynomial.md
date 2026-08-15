---
id: def-vandermonde-polynomial
kind: definition
title: "The Vandermonde polynomial $\\Delta_n=\\prod_{i<j}(x_i-x_j)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 through Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

The **Vandermonde polynomial** in $n$ variables is

$$\Delta_n(x_1,\ldots,x_n):=\prod_{1\le i<j\le n}(x_i-x_j).$$

For $n=0$ or $n=1$ the index set is empty and $\Delta_n=1$.
