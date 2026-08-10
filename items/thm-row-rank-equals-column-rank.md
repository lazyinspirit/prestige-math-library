---
id: thm-row-rank-equals-column-rank
kind: theorem
title: "Row rank equals column rank, and both equal the number of pivots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nonzero-echelon-rows-form-a-basis-of-the-row-space, thm-pivot-columns-form-a-basis-of-the-column-space, def-row-space-column-space-nullspace-and-matrix-ranks]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.5"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

For every finite matrix over a field,
$$\operatorname{rrank}(A)=\operatorname{crank}(A).$$
Both dimensions equal the number of pivots in any echelon form of $A$.

## Facts & Assumptions

**Given:** A matrix $A$ and an echelon form $R$ of $A$.

[L1] The nonzero rows of $R$ form a basis of the row space of $A$ ([[lem-nonzero-echelon-rows-form-a-basis-of-the-row-space]]).

[L2] The original columns indexed by pivot columns form a basis of the column space ([[thm-pivot-columns-form-a-basis-of-the-column-space]]).

[L3] Row rank and column rank are the respective dimensions ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

## Proof

**Proof technique:** direct.

1.1 There is one nonzero echelon row for each pivot, so [L1] and [L3] make the row rank equal to the pivot count of $R$. This applies to every echelon form of $A$. [L1, L3]

2.1 Let $Q$ be the RREF of $A$. Step 1.1 makes the number of pivots of $Q$ equal to the row rank, while [L2] and [L3] make that same number equal to the column rank. Hence the two ranks are equal, and step 1.1 shows that both equal the pivot count of the originally chosen echelon form $R$. This includes pivot count zero. [step 1.1, L2, L3] ∎
