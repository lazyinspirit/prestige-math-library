---
id: thm-pivot-columns-form-a-basis-of-the-column-space
kind: theorem
title: "The columns of the original matrix indexed by pivot columns form a basis of its column space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-row-operations-preserve-column-relations, def-row-echelon-reduced-row-echelon-and-pivots, def-row-space-column-space-nullspace-and-matrix-ranks, def-linear-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.5"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $R$ be the reduced row echelon form of $A$. The columns of $A$ whose indices are pivot columns of $R$ form a basis of $\operatorname{Col}(A)$.

## Facts & Assumptions

**Given:** A matrix $A$ and its RREF $R$.

[L1] Row operations preserve every linear relation among corresponding columns ([[lem-row-operations-preserve-column-relations]]).

[L2] A pivot column of an RREF is a unit column, and every nonpivot column has entries only in the pivot rows ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L3] The column space is the span of all columns ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L4] A basis is a linearly independent spanning family ([[def-linear-basis]]).

## Proof

**Proof technique:** direct.

1.1 In $R$, the pivot columns are distinct unit columns, so they are independent. Every nonpivot column equals the linear combination of those unit columns whose coefficients are its entries in the pivot rows, so the pivot columns span every column of $R$. [L2, L3, L4]

2.1 Each relation used in step 1.1 holds among the corresponding columns of $A$ by [L1], and every relation among the pivot columns transfers in both directions. [step 1.1, L1]

3.1 Therefore the original pivot-indexed columns are independent and span every column of $A$, hence form a basis of $\operatorname{Col}(A)$. [step 2.1, L3, L4] ∎

