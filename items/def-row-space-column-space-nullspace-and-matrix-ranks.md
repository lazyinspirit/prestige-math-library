---
id: def-row-space-column-space-nullspace-and-matrix-ranks
kind: definition
title: "Row space, column space, nullspace, row rank, column rank and matrix rank"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrix-space, def-linear-combination-and-span, def-linear-basis, def-linear-independence, def-dimension, thm-induction-principle, def-matrix-equation-augmented-matrix-and-linear-system]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§2.7 and 3.5–3.6"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.4"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Definition

Let $A\in M_{m\times n}(F)$. Its **row space** $\operatorname{Row}(A)\subseteq F^n$ is the span of its rows, its **column space** $\operatorname{Col}(A)\subseteq F^m$ is the span of its columns, and its **nullspace** is
$$N(A):=\{x\in F^n:Ax=0\}.$$

The **row rank** and **column rank** are
$$\operatorname{rrank}(A):=\dim_F\operatorname{Row}(A),\qquad \operatorname{crank}(A):=\dim_F\operatorname{Col}(A).$$
These dimensions are defined because each space is spanned by a finite list.
Starting with the empty list, inspect the spanning vectors in order and retain a
vector exactly when it is not in the span of those already retained. Induction
shows that the retained list is independent and has the same span as the
original finite list, so it is a finite basis. The **rank** of $A$ is its row
rank; [[thm-row-rank-equals-column-rank]] proves that it also equals the column
rank.
