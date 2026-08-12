---
id: ex-columnwise-additivity-versus-whole-matrix-nonadditivity
kind: example
title: "Determinant is additive in one selected column but not under simultaneous whole-matrix addition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-leibniz-determinant-is-alternating-multilinear-and-normalized,
       def-matrices-over-a-commutative-ring,
       def-determinant-of-a-square-matrix, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over $\mathbb Z$, determinant is additive when one column varies and the other
is fixed, but it is not additive as a function of the whole matrix.

## Facts & Assumptions

**Given:** $u=(1,0)^{\mathsf T}$,
$v=(0,1)^{\mathsf T}$, $w=(0,1)^{\mathsf T}$, and
$A=B=I_2$.

[F1] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]) and the
displayed columns and matrices belong to the corresponding matrix sets
([[def-matrices-over-a-commutative-ring]]).

[L1] Determinant is multilinear in its columns
([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[F2] The $2\times2$ determinant is the two-term Leibniz sum
([[def-determinant-of-a-square-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Direct calculation gives $$ \det[u+v,w]=1,\qquad \det[u,w]+\det[v,w]=1+0=1. $$ [F1, F2, algebra]

1.2 For simultaneous whole-matrix addition, $A+B=2I_2$, so $\det(A+B)=4$, whereas $\det(A)+\det(B)=1+1=2$. [F1, F2, algebra]

2.1 This is the instance $\det[u+v,w]=\det[u,w]+\det[v,w]$ of columnwise multilinearity [L1], with the second column fixed. [step 1.1, L1]

3.1 Steps 2.1 and 1.2 isolate the distinction: additivity holds in a single selected column, but fails for the whole matrix argument. [step 2.1, step 1.2] ∎
