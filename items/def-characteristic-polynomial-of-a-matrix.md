---
id: def-characteristic-polynomial-of-a-matrix
kind: definition
title: 'For $A\in M_n(F)$, the characteristic polynomial is $\chi_A(x)=\det(xI_n-A)$ when $n\geq1$, with $\chi_A(x)=1$ for the unique $0\times0$ matrix'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-determinant-of-a-square-matrix, def-polynomial-ring-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, prop-field-and-ring-matrix-interfaces-agree]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §§12.1–12.4'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
pipeline_run: null
---

## Definition

Let $F$ be a field and let $A\in M_n(F)$. If $n\geq1$, regard $xI_n-A$ as a matrix over the commutative polynomial ring $F[x]$. The **characteristic polynomial of $A$** is

$$\chi_A(x):=\det(xI_n-A)\in F[x].$$

For $n=0$, define the characteristic polynomial of the unique $0\times0$ matrix to be the constant polynomial $1$. This agrees with the empty-product convention and makes the characteristic polynomial monic of degree $0$ in the zero-sized case.
