---
id: lem-nonzero-echelon-rows-form-a-basis-of-the-row-space
kind: lemma
title: "The nonzero rows of a row echelon form form a basis of the original row space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-row-operations-preserve-row-space, def-row-echelon-reduced-row-echelon-and-pivots, def-linear-basis, def-linear-independence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

If $R$ is a row echelon form of $A$, then the nonzero rows of $R$ form a basis of $\operatorname{Row}(A)$. Hence the row rank of $A$ is the number of pivots of $R$.

## Facts & Assumptions

**Given:** A row echelon matrix $R$ row equivalent to $A$.

[L1] Row-equivalent matrices have equal row spaces ([[lem-row-operations-preserve-row-space]]).

[L2] In echelon form the leading entries of successive nonzero rows lie in strictly increasing columns ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L3] A basis is a spanning linearly independent family ([[def-linear-basis]]).

[L4] Linear independence means that only the zero scalar family gives a zero linear combination ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 The nonzero rows span $\operatorname{Row}(R)$ because deleting zero rows does not change a span, and this equals $\operatorname{Row}(A)$ by [L1]. [L1, L3]

2.1 In a linear combination of the nonzero rows equal to zero, inspect the pivot column of the first row: every later row is zero there, so its coefficient is zero. Repeating down the strictly increasing pivot columns forces every coefficient to be zero. Thus the rows are independent and form a basis; their number is the pivot count. [step 1.1, L2, L3, L4] ∎

