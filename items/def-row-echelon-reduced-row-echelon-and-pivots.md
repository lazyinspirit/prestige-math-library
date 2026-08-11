---
id: def-row-echelon-reduced-row-echelon-and-pivots
kind: definition
title: "Row echelon form, reduced row echelon form, leading entries, pivots, pivot positions and pivot columns"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§1.2–1.3"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.1"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Definition

In a nonzero row of a matrix over a field, its **leading entry** is its leftmost nonzero entry. A matrix is in **row echelon form** when:

1. every zero row lies below every nonzero row;
2. the leading entry of each nonzero row lies strictly to the right of the leading entry in the row above it;
3. every entry below a leading entry is zero.

A leading entry in row echelon form is a **pivot**. Its location is a **pivot position**, and a column containing a pivot is a **pivot column**.

A row echelon matrix is in **reduced row echelon form** when every pivot equals $1$ and is the only nonzero entry in its column. Zero-row, zero-column and all-zero matrices satisfy these conditions vacuously.

