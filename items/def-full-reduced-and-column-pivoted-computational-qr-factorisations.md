---
id: def-full-reduced-and-column-pivoted-computational-qr-factorisations
kind: definition
title: "Full, reduced, and column-pivoted computational QR factorisations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-qr-factorisation-over-r-or-c, def-permutation-matrix-partial-pivoting-and-pivot-growth, def-householder-reflector, def-real-and-complex-givens-transformations]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Sections 3.3 and 3.4"
      url: "https://fncbook.com/qr/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Definition

Let $A\in M_{m\times n}(\mathbb F)$ with $\mathbb F=\mathbb R$ or $\mathbb C$
and $m\ge n$.

A **full QR factorisation** of $A$ is a factorisation

$$A=QR,$$where $Q\in M_m(\mathbb F)$ is orthogonal or unitary and $R\in M_{m\times n}(\mathbb F)$ is upper trapezoidal. A **reduced QR factorisation** is a factorisation$$A=\widehat Q\widehat R,$$where $\widehat Q\in M_{m\times n}(\mathbb F)$ has orthonormal columns ($\widehat Q^*\widehat Q=I_n$) and $\widehat R\in M_n(\mathbb F)$ is upper triangular. A **column-pivoted QR factorisation** is a factorisation$$A\Pi=\widehat Q R,$$

where $\Pi$ is a permutation matrix acting on columns, $\widehat Q$ has
orthonormal columns, and $R$ is upper trapezoidal or upper triangular according
to whether the full or reduced form is used. Computationally, one obtains these
factorisations by successive Householder reflectors or Givens transformations
that zero entries below the diagonal, with the pivoted version choosing the next
column after a permutation.
