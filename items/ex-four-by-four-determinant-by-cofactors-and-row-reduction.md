---
id: ex-four-by-four-determinant-by-cofactors-and-row-reduction
kind: example
title: "A sparse $4\\times4$ determinant is $30$ by both cofactor expansion and row reduction"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-laplace-cofactor-expansion,
       thm-determinant-under-elementary-row-operations,
       thm-determinant-of-a-triangular-matrix, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over $\mathbb Z$,

$$A=\begin{pmatrix} 1&2&0&0\\ 0&3&0&0\\ 4&8&2&1\\ 0&0&0&5 \end{pmatrix}$$

has determinant $30$, both by cofactor expansion and by row reduction.

## Facts & Assumptions

**Given:** The displayed matrix $A$.

[F1] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]).

[L1] Laplace expansion computes a determinant along every row and column
([[thm-laplace-cofactor-expansion]]).

[L2] Adding a multiple of one row to another leaves the determinant unchanged
([[thm-determinant-under-elementary-row-operations]]).

[L3] A triangular determinant is the product of its diagonal entries
([[thm-determinant-of-a-triangular-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Expand along the last row. Its only nonzero entry is $5$ in position $(3,3)$, with positive cofactor sign, so $$ \det(A)=5\det\begin{pmatrix}1&2&0\\0&3&0\\4&8&2\end{pmatrix}. $$ [F1, L1, algebra]

1.2 Alternatively, replace row $2$ by row $2-4$ times row $0$ (the third row by the third row minus four times the first row). The result is upper triangular with diagonal $1,3,2,5$, and the operation does not change the determinant. [L2, algebra]

2.1 Expand the $3\times3$ determinant along its last column. The only nonzero entry there is $2$, again with positive sign, giving $\det(A)=5\cdot2\det\begin{pmatrix}1&2\\0&3\end{pmatrix} =5\cdot2\cdot3=30$. [step 1.1, L1, algebra]

2.2 By [L3], the determinant in step 1.2 is $1\cdot3\cdot2\cdot5=30$. [step 1.2, L3, algebra]

3.1 Steps 2.1 and 2.2 give the same value by the two requested methods. [step 2.1, step 2.2] ∎
