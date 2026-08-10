---
id: thm-reduced-row-echelon-form-is-unique
kind: theorem
title: "Every finite matrix over a field is row equivalent to exactly one reduced row echelon matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gauss-jordan-elimination-produces-reduced-row-echelon-form, thm-row-operations-preserve-solution-sets, def-row-echelon-reduced-row-echelon-and-pivots, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Every finite matrix over a field is row equivalent to exactly one matrix in reduced row echelon form. This unique matrix is called its **reduced row echelon form**, or **RREF**.

## Facts & Assumptions

**Given:** A finite matrix $A$ over a field, and two reduced row echelon matrices $R$ and $S$ row equivalent to $A$.

[L1] Gauss–Jordan elimination gives at least one reduced row echelon form row equivalent to $A$ ([[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]).

[L2] Row operations preserve exactly the solutions of every augmented linear system ([[thm-row-operations-preserve-solution-sets]]).

[L3] In reduced row echelon form, each pivot is the leading entry of its row and every pivot column is a unit column ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L4] Induction applies to the finite ordered list of columns ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Existence is [L1]. For uniqueness, [L2] applied to $Ax=0$ shows that $R$ and $S$ have the same homogeneous solution set. [L1, L2, base]

2.1 The common homogeneous solution set determines the pivot columns. Indeed, column $j$ is a pivot column exactly when every solution $x$ satisfying $x_k=0$ for all $k>j$ also satisfies $x_j=0$. For a pivot column this follows from its pivot equation; for a nonpivot column, set that free variable to $1$ and every other free variable to $0$. Induction over the finite ordered columns therefore gives the same pivot positions for $R$ and $S$. [step 1.1, L3, L4, ih]

3.1 For each nonpivot column $j$, there is a unique homogeneous solution whose nonpivot coordinates are $1$ at $j$ and $0$ elsewhere. Its coordinate at pivot $p_i$ is the negative of the entry in row $i$, column $j$; pivot columns are unit columns by [L3]. Thus the common solution set determines every entry. With no columns, no rows, or no pivots the same description is empty or all zero, so in every case $R=S$. [step 2.1, L3, discharge-induction] ∎
