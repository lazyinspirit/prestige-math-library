---
id: cor-inverse-matrix-by-adjugate
kind: corollary
title: "If det(A) is a unit, then A^{-1}=det(A)^{-1} adj(A)"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-adjugate-identity-over-a-commutative-ring,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       lem-inverse-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra, Proposition 7.2"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

If $R$ is a commutative ring, $n\geq1$, $A\in M_n(R)$, and $\det(A)$ is a
unit, then

$$A^{-1}=\det(A)^{-1}\operatorname{adj}(A).$$

## Facts & Assumptions

**Given:** $R,n,A$ as in the statement.

[L1] The adjugate identity is
$A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I_n$
([[thm-adjugate-identity-over-a-commutative-ring]]).

[L2] A positive-sized square matrix whose determinant is a unit is invertible
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[L3] A two-sided inverse in a monoid is unique ([[lem-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 Put $u=\det(A)$. Scaling [L1] by $u^{-1}$ gives $A(u^{-1}\operatorname{adj}(A)) =(u^{-1}\operatorname{adj}(A))A=I_n$. [L1, algebra]
2.1 By [L2], $A^{-1}$ exists. Both it and $u^{-1}\operatorname{adj}(A)$ are two-sided inverses of $A$, so [L3] makes them equal. [step 1.1, L2, L3] ∎
