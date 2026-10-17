---
id: thm-gauss-jordan-elimination-produces-reduced-row-echelon-form
kind: theorem
title: "Gauss–Jordan elimination reduces every finite matrix over a field to reduced row echelon form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gaussian-elimination-produces-row-echelon-form, def-row-echelon-reduced-row-echelon-and-pivots]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §1.2"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.1"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Every finite matrix over a field is row equivalent to a matrix in reduced row echelon form. The reduction can be obtained by Gauss–Jordan elimination.

## Facts & Assumptions

**Given:** A finite matrix over a field.

[L1] Gaussian elimination row reduces every finite matrix to row echelon form ([[thm-gaussian-elimination-produces-row-echelon-form]]).

[L2] Reduced row echelon form requires every pivot to be $1$ and the only nonzero entry in its column ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

## Proof

**Proof technique:** constructive.

1.1 Use [L1] to reach row echelon form, and scale every nonzero row by the inverse of its pivot so that each pivot is $1$. [L1, L2, construct]

2.1 Process the pivots from bottom to top. For a pivot in column $j$, add suitable multiples of its row to all rows above it to clear column $j$; later pivot columns remain unchanged because the current row is zero in those columns. [step 1.1, L2]

3.1 Echelon order and the zero rows are preserved, every pivot is $1$, and every pivot column is zero off its pivot. Thus the output is reduced row echelon form, including when there is no pivot. [step 2.1, L2, discharge-construct] ∎

