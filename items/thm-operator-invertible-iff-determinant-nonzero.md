---
id: thm-operator-invertible-iff-determinant-nonzero
kind: theorem
title: "A finite-dimensional linear operator over a field is invertible if and only if its determinant is nonzero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinant-of-a-linear-operator,
       thm-operator-determinant-is-basis-independent,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       thm-invertible-matrices-correspond-to-linear-isomorphisms,
       thm-matrix-representation-is-a-vector-space-isomorphism,
       thm-matrix-of-a-composite-is-the-product,
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

[L1] If $T$ is invertible, its representing matrix is invertible
([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

[L4] Every square matrix is the representing matrix of a unique operator, and
composition of operators becomes multiplication of their matrices
([[thm-matrix-representation-is-a-vector-space-isomorphism]],
[[thm-matrix-of-a-composite-is-the-product]]).

[L2] A positive-sized square matrix over a commutative ring is invertible
exactly when its determinant is a unit
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[F1] A field is a commutative ring and its units are precisely its nonzero
elements ([[lem-field-is-a-commutative-ring]]).

[L3] The operator determinant is the determinant of a representing matrix and
is basis independent
([[thm-operator-determinant-is-basis-independent]]).

[F2] In dimension zero, the operator determinant is defined to be $1$
([[def-determinant-of-a-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\dim V\geq1$ and choose an ordered basis, writing $A=[T]$. If $T$ is invertible, then $A$ is invertible by [L1]. Conversely, if $A$ is invertible, [L4] gives an operator $S$ with $[S]=A^{-1}$; the composite formula gives $[S\circ T]=I=[T\circ S]$, and injectivity of matrix representation gives $S\circ T=I_V=T\circ S$. Thus $T$ is invertible exactly when $A$ is invertible. [L1, L4, algebra]
1.2 If $\dim V=0$, the unique endomorphism is the identity and is invertible, while [F2] gives $\det(T)=1\neq0$. [F2, algebra]
2.1 By [L2] and [F1], $A$ is invertible exactly when $\det(A)\neq0$; by [L3], this is exactly $\det(T)\neq0$. [step 1.1, L2, F1, L3]
3.1 Steps 2.1 and 1.2 establish the equivalence in every finite dimension. [step 2.1, step 1.2] ∎
