---
id: thm-row-equivalence-characterisations
kind: theorem
title: "For equal-sized matrices, row equivalence, equality of row spaces and equality of reduced row echelon forms are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reduced-row-echelon-form-is-unique, lem-row-operations-preserve-row-space, lem-nonzero-echelon-rows-form-a-basis-of-the-row-space, lem-elementary-row-operations-are-reversible]
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
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2 and Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

For matrices $A,B\in M_{m\times n}(F)$, the following are equivalent:

1. $A$ and $B$ are row equivalent;
2. $\operatorname{Row}(A)=\operatorname{Row}(B)$;
3. $A$ and $B$ have the same reduced row echelon form.

## Facts & Assumptions

**Given:** Equal-sized matrices $A$ and $B$ over a field.

[L1] Every matrix has a unique reduced row echelon form within its row-equivalence class ([[thm-reduced-row-echelon-form-is-unique]]).

[L2] Row operations preserve row space ([[lem-row-operations-preserve-row-space]]).

[L3] The nonzero rows of an echelon form form a basis of its row space ([[lem-nonzero-echelon-rows-form-a-basis-of-the-row-space]]).

[L4] Every elementary row operation has an elementary inverse ([[lem-elementary-row-operations-are-reversible]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ and $B$ are row equivalent, [L2] gives equal row spaces, and reducing either one gives a reduced form in the same row-equivalence class, so [L1] gives the same RREF. [L1, L2]

2.1 Suppose the row spaces are the same space $W$. If the nonzero rows of an RREF have pivots $p_1<\cdots<p_r$, then [L3] expresses every nonzero $w\in W$ uniquely as a linear combination of those rows. The first row with nonzero coefficient makes the leading position of $w$ equal to its pivot. Hence the pivot columns are exactly the possible leading positions of nonzero vectors in $W$, so both RREFs have the same pivots. Corresponding nonzero rows have $1$ in the same pivot and $0$ in every other pivot column. Their difference lies in $W$ and vanishes at every possible leading position, so it is zero. The nonzero rows, and then the zero rows, agree. [step 1.1, L3, algebra]

3.1 If $A$ and $B$ have a common RREF, reverse the reduction from $B$ to that form using [L4] and concatenate it with the reduction from $A$; this gives a row reduction from $A$ to $B$. [step 2.1, L1, L4] ∎
