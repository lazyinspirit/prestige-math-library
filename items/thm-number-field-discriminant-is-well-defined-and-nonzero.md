---
id: thm-number-field-discriminant-is-well-defined-and-nonzero
kind: theorem
title: "Number-field discriminant is well-defined and nonzero"
status: draft
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-ring-of-integers-free-of-rank-degree, lem-discriminant-change-of-basis, thm-discriminant-as-an-embedding-determinant, cor-trace-and-norm-of-an-algebraic-integer]
proof_strategy: direct
sources:
  references:
    - title: "Milne, Proposition 2.27"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Integral bases give the same nonzero signed integer $d_K$.

## Facts & Assumptions

**Given:** Two integral bases of $\mathcal O_K$.

[F1] Change of basis squares its determinant ([[lem-discriminant-change-of-basis]]).

[F2] The embedding determinant formula holds ([[thm-discriminant-as-an-embedding-determinant]]).

## Proof

**Proof technique:** direct.

1.1 The integral change matrix is unimodular, so [F1] gives basis independence; integral traces make the value integral. [F1, given]

2.1 Distinct embeddings make the matrix in [F2] invertible, so its square is nonzero. [F2, step 1.1] ∎
