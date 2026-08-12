---
id: thm-operator-invertible-iff-determinant-nonzero
kind: theorem
title: "A finite-dimensional linear operator over a field is invertible if and only if its determinant is nonzero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-operator-determinant-is-basis-independent,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       thm-invertible-matrices-correspond-to-linear-isomorphisms,
       lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to V$ be a linear operator on a finite-dimensional vector space over
a field $F$. Then $T$ is invertible if and only if $\det(T)\neq0$.

## Facts & Assumptions

**Given:** $T,V,F$ as in the statement.

[L1] In any ordered basis, $T$ is invertible exactly when its representing
matrix is invertible
([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L2] A positive-sized square matrix over a commutative ring is invertible
exactly when its determinant is a unit
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[F1] A field is a commutative ring and its units are precisely its nonzero
elements ([[lem-field-is-a-commutative-ring]]).

[L3] The operator determinant is the determinant of a representing matrix and
is basis independent; in dimension zero its value is $1$
([[thm-operator-determinant-is-basis-independent]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\dim V\geq1$ and choose an ordered basis. By [L1], $T$ is invertible exactly when its representing matrix $A$ is invertible. [L1]
1.2 If $\dim V=0$, the unique endomorphism is the identity and is invertible, while [L3] gives $\det(T)=1\neq0$. [L3, algebra]
2.1 By [L2] and [F1], $A$ is invertible exactly when $\det(A)\neq0$; by [L3], this is exactly $\det(T)\neq0$. [step 1.1, L2, F1, L3]
3.1 Steps 2.1 and 1.2 establish the equivalence in every finite dimension. [step 2.1, step 1.2] ∎
