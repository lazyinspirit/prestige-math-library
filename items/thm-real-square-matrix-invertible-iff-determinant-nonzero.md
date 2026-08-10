---
id: thm-real-square-matrix-invertible-iff-determinant-nonzero
kind: theorem
title: "A finite square real matrix is invertible if and only if its determinant is nonzero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-field-and-ring-matrix-interfaces-agree, def-row-echelon-reduced-row-echelon-and-pivots, thm-invertible-matrix-theorem, thm-determinant-under-elementary-row-operations, thm-determinant-of-a-triangular-matrix, cor-invertible-matrix-has-unit-determinant, thm-reals-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §4.1, Invertibility Property"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$ and every real matrix $A\in M_n(\mathbb R)$,
$$A\text{ is invertible}\quad\Longleftrightarrow\quad\det(A)\ne0.$$

## Facts & Assumptions

**Given:** A real square matrix $A$ of positive finite size.

[L1] Over a field, the ring-matrix and field-matrix interfaces agree ([[prop-field-and-ring-matrix-interfaces-agree]]).

[L2] An $n\times n$ RREF with fewer than $n$ pivots has a zero row; its pivot columns increase from left to right ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

[L3] A square matrix is invertible exactly when its RREF is the identity, equivalently when it has $n$ pivots ([[thm-invertible-matrix-theorem]]).

[L4] A row swap negates determinant, nonzero real row scaling multiplies it by a nonzero scalar, and row addition leaves it unchanged ([[thm-determinant-under-elementary-row-operations]]).

[L5] The determinant of a triangular matrix is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[L6] An invertible matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]).

[L7] The real numbers form a field ([[thm-reals-field]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ is invertible, [L1] and [L6] make $\det(A)$ a unit of $\mathbb R$, hence nonzero by [L7]. [L1, L6, L7]

1.2 Conversely suppose $A$ is not invertible and row reduce it to its RREF $R$. By [L3], $R$ has fewer than $n$ pivots and hence a zero row. Its pivot in row $i$, when present, lies in a column at least $i$, so every entry below the diagonal is zero; thus $R$ is upper triangular. [L1, L2, L3]

2.1 The zero row forces a zero diagonal entry, so [L5] gives $\det(R)=0$. [step 1.2, L5, algebra]

3.1 Along the finite real row reduction, swaps and row additions preserve whether determinant is zero, and a scaling uses a nonzero scalar whose inverse gives the reverse implication. Hence $\det(A)=0$. [step 2.1, L4, L7, algebra]

4.1 Steps 1.2–3.1 prove the contrapositive $\det(A)\ne0\Rightarrow A$ invertible; combining it with step 1.1 proves the equivalence. [step 1.1, step 3.1] ∎
