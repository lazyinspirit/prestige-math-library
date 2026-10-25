---
id: cor-determinant-is-alternating-multilinear-in-the-rows
kind: corollary
title: "The determinant is alternating and multilinear in the rows as well as in the columns"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-determinant-of-transpose, thm-leibniz-determinant-is-alternating-multilinear-and-normalized, def-ring-matrix-product-identity-and-transpose]
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
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.23"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement

For $n\ge1$, determinant on $M_n(R)$ over a commutative ring is multilinear and alternating in the rows. Interchanging two rows negates the determinant.

## Facts & Assumptions

**Given:** A square matrix whose selected row is varied, or whose two selected rows are interchanged.

[L1] Transpose leaves determinant unchanged ([[thm-determinant-of-transpose]]).

[L2] Determinant is alternating and multilinear in columns ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[L3] Transpose is defined by $(A^{\mathsf T})_{ji}=a_{ij}$, so it interchanges rows and columns ([[def-ring-matrix-product-identity-and-transpose]]).

## Proof

**Proof technique:** direct.

1.1 Transposition sends a selected row, a row sum, a row scaling or a row swap to the corresponding operation on a selected column, without changing determinant. [L1, L3]

2.1 Apply the column multilinearity and alternation of [L2] to the transpose, then apply [L1] again. The resulting identities are exactly row multilinearity and row alternation for the original matrix. [step 1.1, L1, L2] ∎
