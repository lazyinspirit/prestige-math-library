---
id: ex-triangle-area-by-determinant-and-base-height
kind: example
title: "One triangle computed by both the determinant and base--height formulas"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-triangle-content-and-base-height-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $A=(1,1)$, $B=(5,1)$, and $C=(3,4)$, the triangle has Jordan content $6$ by both the determinant and base--height formulas.

## Facts & Assumptions

**Given:** The three displayed vertices.

[L1] Every triangle has content $\tfrac12|\det[B-A\ C-A]|$, and for $A\ne B$ this equals half its base times perpendicular height ([[thm-triangle-content-and-base-height-formula]]).

## Verification

**Proof technique:** direct.

1.1 Here $B-A=(4,0)$ and $C-A=(2,3)$, so $\det[B-A\ C-A]=12$ and [L1] gives content $12/2=6$. [L1, algebra]

2.1 The chosen horizontal base has length $4$, and $C$ is at perpendicular distance $3$ from its line, so the base--height form in [L1] gives $\tfrac12\cdot4\cdot3=6$ again. [L1, algebra] ∎
