---
id: cex-row-equivalent-matrices-can-have-different-column-spaces
kind: counterexample
title: "Row-equivalent matrices can have different column spaces even though their column ranks agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-row-operations-preserve-column-relations, def-row-space-column-space-nullspace-and-matrix-ranks]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, Remark 3.15"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement refuted

The false claim is: row-equivalent matrices have the same column space.

## Facts & Assumptions

**Given:** Over any field, let $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $B=\begin{pmatrix}0&0\\1&0\end{pmatrix}$.

[L1] Row operations preserve all column relations and column rank, but do not assert equality of the literal column spaces ([[lem-row-operations-preserve-column-relations]]).

[L2] The column space is the span of the columns and column rank is its dimension ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

## Counterexample

**Proof technique:** direct.

1.1 Swapping the two rows of $A$ gives $B$, so the matrices are row equivalent. [L1, algebra]

2.1 Yet $\operatorname{Col}(A)=\operatorname{span}\{(1,0)^{\mathsf T}\}$ and $\operatorname{Col}(B)=\operatorname{span}\{(0,1)^{\mathsf T}\}$, which are distinct one-dimensional subspaces. Their column ranks are both $1$, exactly as [L1] predicts. [step 1.1, L2, algebra] ∎

