---
id: def-row-transformations-over-a-commutative-ring
kind: definition
title: "Row swaps, arbitrary row scalings and row additions over a commutative ring, with reversible elementary cases distinguished"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-commutative-ring, def-elementary-row-operations-and-row-equivalence, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Definition

For a matrix over a commutative ring $R$, a **row transformation** is one of: interchanging two rows; multiplying one row by any scalar $c\in R$; or adding $c$ times one row to a distinct row.

A swap is reversible, as is row addition with reverse coefficient $-c$. A row scaling is reversible exactly when its scalar is a unit. These reversible transformations are the ring-level elementary row equivalences. When $R$ is a field, they are exactly the elementary row operations of [[def-elementary-row-operations-and-row-equivalence]], since every nonzero scalar is a unit. A scaling by a nonunit, including possibly $0$, is still a row transformation but is not called a row equivalence.

