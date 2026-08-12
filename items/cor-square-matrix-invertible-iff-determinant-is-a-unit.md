---
id: cor-square-matrix-invertible-iff-determinant-is-a-unit
kind: corollary
title: "A positive-sized square matrix over a commutative ring is invertible if and only if its determinant is a unit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-adjugate-identity-over-a-commutative-ring,
       cor-invertible-matrix-has-unit-determinant,
       def-invertible-matrix-and-similarity-over-a-commutative-ring,
       lem-ring-units-form-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra, Proposition 7.2"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $n\geq1$, and $A\in M_n(R)$. Then $A$ is
invertible if and only if $\det(A)$ is a unit of $R$.

## Facts & Assumptions

**Given:** $R,n,A$ as in the statement.

[L1] If a positive-sized square matrix is invertible, its determinant is a
unit ([[cor-invertible-matrix-has-unit-determinant]]).

[L2] $A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I_n$
([[thm-adjugate-identity-over-a-commutative-ring]]).

[F1] A square matrix is invertible when it has a two-sided multiplicative
inverse ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L3] A unit has a unique multiplicative inverse
([[lem-ring-units-form-a-group]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ is invertible, [L1] says directly that $\det(A)$ is a unit. [L1]

1.2 Conversely, suppose $u:=\det(A)$ is a unit, and let $u^{-1}$ be its inverse. [L3]

2.1 Multiplying both identities in [L2] by the scalar $u^{-1}$ gives $A(u^{-1}\operatorname{adj}(A)) =(u^{-1}\operatorname{adj}(A))A=I_n$. [step 1.2, L2, algebra]

3.1 Thus $u^{-1}\operatorname{adj}(A)$ is a two-sided inverse, so $A$ is invertible. Together with step 1.1, this proves both directions. [step 2.1, F1, step 1.1] ∎