---
id: ex-parallelepiped-content-from-a-matrix
kind: example
title: "The content of a concrete three-dimensional parallelepiped computed from its spanning matrix"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-parallelepiped-content-is-the-absolute-determinant, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Example

Let
$$v_1=(2,0,0),\qquad v_2=(1,3,0),\qquad v_3=(0,1,-2).$$
The parallelepiped spanned by these vectors has Jordan content $12$.

## Facts & Assumptions

**Given:** The three spanning vectors in the statement.

[L1] The content of a square-matrix parallelepiped is the absolute value of its determinant ([[cor-parallelepiped-content-is-the-absolute-determinant]]).

[L2] For a commutative ring $R$, $n\ge1$, and $A=(a_{ij})\in M_n(R)$, the determinant is the finite signed-permutation sum $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$ ([[def-determinant-of-a-square-matrix]]).

## Verification

**Proof technique:** computation.

1.1 Put the vectors into the columns of the following upper-triangular matrix. [given]
$$A=\begin{pmatrix}2&1&0\\0&3&1\\0&0&-2\end{pmatrix}.$$

2.1 The signed-permutation formula [L2] leaves only the diagonal term, so $\det A=2\cdot3\cdot(-2)=-12$. [L2, step 1.1]

3.1 By [L1], the content is $|-12|=12$. Directly, the first two vectors span a base of area $6$ in the horizontal plane and the third has perpendicular height $2$, again giving $12$. [L1, step 2.1] ∎
