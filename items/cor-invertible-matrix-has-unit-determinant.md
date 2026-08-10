---
id: cor-invertible-matrix-has-unit-determinant
kind: corollary
title: "An invertible square matrix over a commutative ring has unit determinant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-matrix-and-similarity-over-a-commutative-ring, thm-determinant-multiplicative, lem-ring-units-form-a-group, thm-ring-matrix-arithmetic-laws, thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
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

Let $n\ge1$. If $A\in M_n(R)$ is invertible over a commutative ring, then $\det(A)$ is a unit of $R$. More precisely, $\det(A^{-1})$ is its inverse.

## Facts & Assumptions

**Given:** An invertible matrix $A$ with inverse $A^{-1}$.

[L1] Determinants multiply: $\det(XY)=\det(X)\det(Y)$ ([[thm-determinant-multiplicative]]).

[L2] A unit is an element with a two-sided multiplicative inverse, and its inverse is unique ([[lem-ring-units-form-a-group]]).

[L3] Identity matrices are multiplicative identities ([[thm-ring-matrix-arithmetic-laws]]).

[L4] Matrix invertibility gives $AA^{-1}=I_n=A^{-1}A$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L5] The determinant is normalized: $\det(I_n)=1$ ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the two equations in [L4]: $\det(A)\det(A^{-1})=\det(I_n)=1$ and $\det(A^{-1})\det(A)=1$. [L1, L3, L4, L5]

2.1 Thus $\det(A)$ is a unit with inverse $\det(A^{-1})$ by [L2]. In the zero ring, $0=1$ and the same two-sided equation still gives the unit conclusion. [step 1.1, L2] ∎
