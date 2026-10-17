---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
id: ex-zero-tangent-angle-makes-bordered-corrector-singular
kind: example
title: "A zero tangent angle makes the bordered corrector singular"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $F(x,y)=x$, the solution set is the vertical line $x=0$. A hyperplane
normal perpendicular to its tangent does not define a regular local
corrector.

## Facts & Assumptions

**Given:** $F:\mathbb R^2\to\mathbb R$, $F(x,y)=x$, at $(0,0)$.

[F1] [[lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound]]:
for a rank-one derivative with unit kernel tangent $t$, the bordered matrix
$[DF;\tau^T]$ is invertible exactly when $\tau^Tt\ne0$.

## Verification

**Proof technique:** direct.

1.1 The derivative is $DF(0,0)=[1\ 0]$, which has rank $1$ and kernel $\operatorname{span}\{t\}$ for the unit tangent $t=(0,1)$. [given, algebra]

2.1 Take the unit hyperplane normal $\tau=(1,0)$. Then $\tau^Tt=0$ and $$\begin{bmatrix}DF(0,0)\\\tau^T\end{bmatrix} =\begin{bmatrix}1&0\\1&0\end{bmatrix},$$ whose rows are dependent and whose kernel contains $t\ne0$. [given, step 1.1, algebra]

3.1 By [F1], the bordered matrix is singular exactly at this failed angle; the inverse bound also cannot hold. This is the tangent-angle failure required by the continuation algorithm. [F1, step 2.1] ∎ 