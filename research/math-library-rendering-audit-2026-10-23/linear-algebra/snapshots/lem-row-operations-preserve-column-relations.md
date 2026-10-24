---
id: lem-row-operations-preserve-column-relations
kind: lemma
title: "Elementary row operations preserve every linear relation among the columns and hence preserve column rank"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-row-operations-preserve-solution-sets, def-row-space-column-space-nullspace-and-matrix-ranks, def-linear-independence]
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
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §3.5"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

If $B$ is row equivalent to $A$, then for every coefficient column $c$,
$$Ac=0\quad\Longleftrightarrow\quad Bc=0.$$
Thus row operations preserve all linear relations among corresponding columns, preserve which column subfamilies are linearly independent, and preserve column rank.

## Facts & Assumptions

**Given:** Row-equivalent matrices $A,B\in M_{m\times n}(F)$ and $c\in F^n$.

[L1] Row operations on an augmented matrix preserve its solution set ([[thm-row-operations-preserve-solution-sets]]).

[L2] Column space is the span of the columns and column rank is its dimension ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

[L3] A family is linearly independent exactly when its only zero linear combination has all coefficients zero ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 The equation $Ac=0$ says exactly that the columns of $A$, with coefficients $c_j$, have zero linear combination. [L2, L3]

2.1 Apply the same row operations to $[A\mid0]$. Its last column stays zero, so [L1] gives $Ac=0$ if and only if $Bc=0$. [step 1.1, L1]

3.1 Restricting $c$ to any chosen column subfamily shows that it is independent for $A$ exactly when it is independent for $B$. Hence the largest independent column families and their dimension agree, although the literal column spaces may differ. [step 2.1, L2, L3] ∎

