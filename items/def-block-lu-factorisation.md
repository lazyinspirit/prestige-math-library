---
id: def-block-lu-factorisation
kind: definition
title: "Block LU factorisation and the associated Schur complement"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normalised-lu-factorisation, def-invertible-matrix-and-general-linear-group, def-matrix-product-and-identity-matrix]
aliases: []
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6"
      url: "https://fncbook.com/pivoting/"
---

## Definition

Let

$$A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}$$

be a square matrix over a field, with square leading block $A_{11}$.

A **block LU factorisation across this partition** is a factorisation

$$A=\begin{pmatrix}L_{11}&0\\L_{21}&L_{22}\end{pmatrix}\begin{pmatrix}U_{11}&U_{12}\\0&U_{22}\end{pmatrix},$$

where the diagonal blocks are square, the left factor is block lower
triangular, and the right factor is block upper triangular.

If $A_{11}$ is invertible, the **Schur complement** of $A_{11}$ in $A$ is

$$S:=A_{22}-A_{21}A_{11}^{-1}A_{12}.$$

This is the trailing block left after eliminating the off-diagonal blocks using
the invertible leading block.
