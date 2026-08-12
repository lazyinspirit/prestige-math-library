---
id: ex-cramers-rule-two-by-two-system
kind: example
title: "Cramer's rule solves 2x+y=5 and x-y=1 as (x,y)=(2,1)"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-cramers-rule-over-a-field,
       def-determinant-of-a-square-matrix, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Cramer's rule solves
$2x+y=5$, $x-y=1$ over $\mathbb Q$ as $(x,y)=(2,1)$.

## Facts & Assumptions

**Given:** $A=\begin{pmatrix}2&1\\1&-1\end{pmatrix}$ and
$b=\begin{pmatrix}5\\1\end{pmatrix}$.

[F1] $\mathbb Q$ is a field ([[thm-rat-field]]).

[F2] A $2\times2$ determinant is its two-term Leibniz sum
([[def-determinant-of-a-square-matrix]]).

[L1] Over a field, a nonzero determinant gives the unique solution
$x_j=\det(A_j(b))/\det(A)$
([[cor-cramers-rule-over-a-field]]).

## Verification

**Proof technique:** direct.

1.1 Direct calculation gives $\det(A)=2(-1)-1=-3\neq0$. [F1, F2, algebra]
1.2 Replacing the first and second columns gives $$ \det\begin{pmatrix}5&1\\1&-1\end{pmatrix}=-6,\qquad \det\begin{pmatrix}2&5\\1&1\end{pmatrix}=-3. $$ [F2, algebra]
2.1 By [L1], $x=(-6)/(-3)=2$ and $y=(-3)/(-3)=1$. [step 1.1, step 1.2, L1]
3.1 Substitution gives $2(2)+1=5$ and $2-1=1$, verifying both equations and the claimed solution. [step 2.1, algebra] ∎