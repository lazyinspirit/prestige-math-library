---
id: lem-row-operations-preserve-row-space
kind: lemma
title: "Row-equivalent matrices have the same row space and the same row rank"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-row-space-column-space-nullspace-and-matrix-ranks, lem-elementary-row-operations-are-reversible, def-elementary-row-operations-and-row-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Row-equivalent matrices over a field have the same row space. Consequently they have the same row rank.

## Facts & Assumptions

**Given:** Matrices $A$ and $B$ of one shape, with $B$ obtained from $A$ by one elementary row operation.

[L1] The row space is the span of the rows and the row rank is its dimension ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L2] Every elementary row operation has an elementary inverse ([[lem-elementary-row-operations-are-reversible]]).

[L3] An elementary row operation replaces rows by the three stated swap, scaling or row-addition formulas ([[def-elementary-row-operations-and-row-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Every row of $B$ is a row of $A$, a nonzero scalar multiple of one, or a linear combination of two rows of $A$. Hence $\operatorname{Row}(B)\subseteq\operatorname{Row}(A)$. [L1, L3]

2.1 Applying step 1.1 to the inverse operation from [L2] gives the reverse inclusion. Thus the row spaces, and therefore their dimensions and row ranks, are equal; iteration covers row equivalence. [step 1.1, L1, L2] ∎

