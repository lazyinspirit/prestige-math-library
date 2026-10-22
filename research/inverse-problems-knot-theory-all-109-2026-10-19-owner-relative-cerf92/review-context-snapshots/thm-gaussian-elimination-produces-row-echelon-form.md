---
id: thm-gaussian-elimination-produces-row-echelon-form
kind: theorem
title: "Gaussian elimination reduces every finite matrix over a field to row echelon form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-row-operations-and-row-equivalence, def-row-echelon-reduced-row-echelon-and-pivots, thm-induction-principle]
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

Every finite matrix over a field is row equivalent to a matrix in row echelon form. The reduction can be obtained by the Gaussian elimination algorithm.

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(F)$ over a field.

[L1] Row swaps, nonzero row scalings and row additions are elementary row operations ([[def-elementary-row-operations-and-row-equivalence]]).

[L2] Row echelon form requires successive leading entries to move right, with zeros below every leading entry and zero rows at the bottom ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L3] Induction applies to finite natural dimensions ([[thm-induction-principle]]).

## Proof

**Proof technique:** constructive.

1.1 If $A$ is not zero, locate the leftmost column containing a nonzero entry, swap one such entry into the first available row, scale it to $1$, and use row additions to clear every entry below it. These are elementary operations and create the first pivot with all earlier columns zero. [L1, L2, construct]

2.1 Apply the same construction inductively to the strictly smaller submatrix below and to the right of that pivot. Operations confined to its rows do not change the earlier zero columns or pivot row, so the successive pivots move strictly right. [step 1.1, L3]

3.1 The procedure terminates when no row, no column or no nonzero entry remains; the unused rows are zero and lie at the bottom. The resulting matrix satisfies all echelon conditions, including the all-zero and zero-sized cases. [step 2.1, L2, discharge-construct] ∎

