---
id: ex-doubling-integers-has-nonunit-determinant
kind: example
title: "Multiplication by $2$ on $\\mathbb Z$ is injective but not surjective: its determinant is the non-unit $2$, its adjugate is integral, and its inverse exists after extending scalars to $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coordinate-endomorphism-over-a-commutative-ring,
       cor-square-matrix-invertible-iff-determinant-is-a-unit,
       cor-inverse-matrix-by-adjugate, thm-int-comm-ring,
       lem-int-cancellation, lem-units-of-z, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Example

The coordinate endomorphism $T_{[2]}:\mathbb Z\to\mathbb Z$ is injective but
not surjective. Its determinant is the non-unit $2$, its adjugate is $[1]$,
and after extending scalars to $\mathbb Q$ its inverse is $[1/2]$.

## Facts & Assumptions

**Given:** The $1\times1$ matrix $A=[2]$.

[F1] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]) and its only
units are $1$ and $-1$ ([[lem-units-of-z]]).

[L1] Integer multiplication has cancellation
([[lem-int-cancellation]]).

[F2] $T_A(x)=Ax$, $\det(T_A)=\det(A)$, and
$\operatorname{adj}(T_A)=T_{\operatorname{adj}(A)}$
([[def-coordinate-endomorphism-over-a-commutative-ring]]).

[L2] A positive-sized square matrix over a commutative ring is invertible
exactly when its determinant is a unit
([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

[L3] If the determinant is a unit, then
$A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$
([[cor-inverse-matrix-by-adjugate]]).

[F3] $\mathbb Q$ is a field ([[thm-rat-field]]).

## Verification

**Proof technique:** direct.

1.1 From the $1\times1$ definitions, $T_A(n)=2n$, $\det(A)=2$, and $\operatorname{adj}(A)=[1]$, because the unique empty minor has determinant $1$. [F1, F2, algebra]

1.2 If $2m=2n$, integer cancellation gives $m=n$, so $T_A$ is injective. It is not surjective because $2n=1$ has no integer solution. [L1, algebra]

2.1 The element $2$ is not a unit of $\mathbb Z$ by [F1], so [L2] agrees that $A$ is not invertible over $\mathbb Z$. [step 1.1, F1, L2]

2.2 Over the field $\mathbb Q$, $2$ is a unit. Formula [L3] and step 1.1 give $A^{-1}=2^{-1}[1]=[1/2]$. [F3, L3, step 1.1]

3.1 Steps 1.1 through 2.2 establish every claim. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
