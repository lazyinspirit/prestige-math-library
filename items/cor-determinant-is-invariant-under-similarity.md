---
id: cor-determinant-is-invariant-under-similarity
kind: corollary
title: "Similar matrices over a commutative ring have the same determinant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-matrix-and-similarity-over-a-commutative-ring, thm-determinant-multiplicative, cor-determinant-of-an-inverse, thm-ring-matrix-arithmetic-laws]
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

## Statement

Let $n\ge1$. If $A,B\in M_n(R)$ are similar over a commutative ring, then $\det(B)=\det(A)$.

## Facts & Assumptions

**Given:** An invertible $P$ with $B=P^{-1}AP$.

[L1] Similarity over $R$ means $B=P^{-1}AP$ for an invertible $P$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L2] Determinants multiply over a commutative ring ([[thm-determinant-multiplicative]]).

[L3] $\det(P^{-1})=\det(P)^{-1}$ ([[cor-determinant-of-an-inverse]]).

[L4] Matrix multiplication is associative ([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], [L2] and associativity, $\det(B)=\det(P^{-1})\det(A)\det(P)$. [L1, L2, L3, L4]

2.1 Substitute [L3] and commute the scalar factors in $R$: $\det(P)^{-1}\det(P)=1$, leaving $\det(B)=\det(A)$. [step 1.1, L3, algebra] ∎
