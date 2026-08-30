---
id: def-permutation-matrix-partial-pivoting-and-pivot-growth
kind: definition
title: "Permutation matrices, partial pivoting, and the pivot-growth factor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-product-and-identity-matrix, def-abs-value]
aliases: []
  audited: 2026-08-30
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Definition

Let $n\ge 1$, let $F=\mathbb R$ or $\mathbb C$, and let $\sigma$ be a permutation of
$\{0,\ldots,n-1\}$. The corresponding **permutation matrix** $P_\sigma$ is the
matrix whose $i$-th row is the $\sigma(i)$-th row of $I_n$. Thus left
multiplication by $P_\sigma$ permutes the rows of a matrix.

In **Gaussian elimination with partial pivoting**, ties are resolved by a fixed
deterministic rule. At stage $k$ one inspects the
entries in column $k$ from rows $k$ through $n-1$, swaps a row with maximal
entry modulus into row $k$, and then eliminates the entries below that pivot.

If $PA=LU$ is the resulting factorisation, its **pivot-growth factor** is

$$\rho(A):=\frac{\max_{i,j}|u_{ij}|}{\max_{i,j}|a_{ij}|},$$

provided $A\ne 0$; when $A=0$ one declares $\rho(A)=1$. The absolute value or
modulus is the one from [[def-abs-value]] on real entries and its standard
complex analogue on complex entries.
