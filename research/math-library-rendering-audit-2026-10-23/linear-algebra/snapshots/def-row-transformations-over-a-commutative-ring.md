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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

A swap is reversible, as is row addition with reverse coefficient $-c$. Scaling by a unit is reversible, with inverse scaling by its reciprocal. For matrices with at least one column and a selected row, the scaling map on the full matrix space is reversible only when $c$ is a unit. For matrices with no columns, every scaling map is the identity, even when $c$ is a nonunit.

The designated ring-level elementary row equivalences are swaps, row additions, and scalings by units. When $R$ is a field, these are exactly the elementary row operations of [[def-elementary-row-operations-and-row-equivalence]], since every nonzero scalar is a unit. Scaling by a nonunit, including possibly $0$, remains a row transformation but is not designated an elementary row equivalence, including in the zero-column case.
