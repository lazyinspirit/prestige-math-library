---
id: ex-integer-determinant-two-is-invertible-over-q-not-z
kind: example
title: 'An integer matrix of determinant $2$ is invertible over $\mathbb Q$ but not over $\mathbb Z$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-two-by-two-determinant-formula, cor-invertible-matrix-has-unit-determinant, thm-rat-field, thm-int-comm-ring, lem-units-of-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Example

The integer matrix $A=\operatorname{diag}(2,1)$ has determinant $2$. It is invertible as a matrix over $\mathbb Q$, but it is not invertible as a matrix over $\mathbb Z$.

## Facts & Assumptions

**Given:** $A=\begin{pmatrix}2&0\\0&1\end{pmatrix}$.

[L1] The $2\times2$ determinant is $ad-bc$ ([[ex-two-by-two-determinant-formula]]).

[L2] An invertible matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]).

[L3] The rationals form a field ([[thm-rat-field]]).

[L4] The integers form a commutative ring ([[thm-int-comm-ring]]).

[L5] The only units of $\mathbb Z$ are $1$ and $-1$ ([[lem-units-of-z]]).

## Verification

**Proof technique:** direct.

1.1 Fact [L1] gives $\det A=2$. Over $\mathbb Q$, the matrix $\operatorname{diag}(1/2,1)$ multiplies with $A$ in either order to give $I_2$, so $A$ is invertible there. [L1, L2, L3, L4, L5, algebra]

2.1 Over $\mathbb Z$, the determinant $2$ is not a unit by [L5]. The contrapositive of [L2] therefore rules out an integer inverse. [step 1.1, L2, L5] ∎
