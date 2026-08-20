---
id: ex-collinear-triangle-has-zero-content
kind: example
title: "Three collinear vertices give a triangle of zero content"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-triangle-content-zero-iff-collinear, thm-triangle-content-and-base-height-formula]
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

For $A=(0,0)$, $B=(2,1)$, and $C=(6,3)$, the triangle is the segment $[A,C]$ and has Jordan content $0$.

## Facts & Assumptions

**Given:** The three displayed vertices.

[L1] A triangle has zero Jordan content if and only if its vertices are collinear ([[cor-triangle-content-zero-iff-collinear]]).

## Verification

**Proof technique:** direct.

1.1 One has $C-A=3(B-A)$, so the three vertices are collinear. [algebra]

2.1 By [L1] the content is zero; directly, the determinant of $(2,1)$ and $(6,3)$ is $6-6=0$, and the perpendicular height is zero as well. [step 1.1, L1, algebra] ∎
