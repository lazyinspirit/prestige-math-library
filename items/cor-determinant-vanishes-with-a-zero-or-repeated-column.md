---
id: cor-determinant-vanishes-with-a-zero-or-repeated-column
kind: corollary
title: "A square matrix with a zero column or two equal columns has determinant zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-leibniz-determinant-is-alternating-multilinear-and-normalized]
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
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.19"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. If a matrix in $M_n(R)$ over a commutative ring has a zero column or has two equal columns, then its determinant is zero.

## Facts & Assumptions

**Given:** A square matrix $A$ over a commutative ring.

[L1] Determinant is column-multilinear and alternating ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

## Proof

**Proof technique:** direct.

1.1 If one column is zero, multilinearity gives $\det(A)=\det(A)+\det(A)$ by writing that column as $0+0$; cancellation in the additive group gives $\det(A)=0$. [L1, algebra]

2.1 If two columns are equal, alternation in [L1] gives $\det(A)=0$ directly, regardless of whether the columns are adjacent. [step 1.1, L1] ∎
