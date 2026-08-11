---
id: ex-row-operations-on-a-singular-matrix-over-z-mod-six
kind: example
title: 'Row operations track determinant correctly for a singular triangular matrix over $\mathbb Z/6$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-determinant-under-elementary-row-operations, def-row-transformations-over-a-commutative-ring, thm-determinant-of-a-triangular-matrix, cor-invertible-matrix-has-unit-determinant, thm-integers-modulo-n-basic-algebra, def-integers-modulo-n]
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
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Example

Over $R=\mathbb Z/6$, let $A=\operatorname{diag}(2,1)$. Then $A$ is not invertible although $\det A=2\ne0$. A swap changes the determinant to $4=-2$, scaling the first row by the nonzero nonunit $3$ changes it to $0=3\cdot2$, and adding four times the second row to the first leaves it equal to $2$.

## Facts & Assumptions

**Given:** The displayed matrix over $\mathbb Z/6$.

[L1] Row swaps, arbitrary scalings and row additions have the three determinant laws without a nonsingularity assumption ([[thm-determinant-under-elementary-row-operations]]).

[L2] A triangular determinant is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[L3] Arithmetic in $\mathbb Z/6$ is commutative ring arithmetic modulo $6$ ([[thm-integers-modulo-n-basic-algebra]]).

[L4] $\mathbb Z/6$ consists of congruence classes modulo $6$ ([[def-integers-modulo-n]]).

[L5] An invertible matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $\det A=2$. The element $2$ is not a unit modulo $6$, since every product $2r$ is even and cannot be congruent to $1$; therefore [L5] implies that $A$ is not invertible. [L1, L2, L3, L4, L5, algebra]

2.1 Swapping rows gives $\begin{pmatrix}0&1\\2&0\end{pmatrix}$ with determinant $-2=4$. Scaling row $0$ by $3$ gives $\operatorname{diag}(0,1)$ with determinant $0=3\cdot2$. Replacing row $0$ by row $0+4R_1$ gives $\begin{pmatrix}2&4\\0&1\end{pmatrix}$ with determinant $2$. [step 1.1, algebra]

3.1 These values agree respectively with negation, multiplication by $3$, and invariance under row addition in [L1]. No cancellation, unit scaling or invertibility was used. [step 2.1, L1] ∎
