---
id: cor-determinant-of-an-inverse
kind: corollary
title: 'If $A$ is invertible over a commutative ring, then $\det(A^{-1})=\det(A)^{-1}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-matrix-and-similarity-over-a-commutative-ring, cor-invertible-matrix-has-unit-determinant, thm-determinant-multiplicative, lem-ring-units-form-a-group, thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.24"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. If $A\in M_n(R)$ is invertible over a commutative ring, then
$$\det(A^{-1})=\det(A)^{-1}.$$

## Facts & Assumptions

**Given:** An invertible matrix $A$ over a commutative ring.

[L1] $\det(A)$ is a unit ([[cor-invertible-matrix-has-unit-determinant]]).

[L2] $\det(AA^{-1})=\det(A)\det(A^{-1})$ ([[thm-determinant-multiplicative]]).

[L3] The inverse of a unit is unique ([[lem-ring-units-form-a-group]]).

[L4] Matrix invertibility gives $AA^{-1}=I_n$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L5] The determinant is normalized: $\det(I_n)=1$ ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], [L4] and [L5], $\det(A)\det(A^{-1})=\det(I_n)=1$, so $\det(A^{-1})$ is an inverse of the unit $\det(A)$. [L1, L2, L3, L4, L5]

2.1 Uniqueness of the inverse in [L3] gives $\det(A^{-1})=\det(A)^{-1}$. [step 1.1, L3] ∎
