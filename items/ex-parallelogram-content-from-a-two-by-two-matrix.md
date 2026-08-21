---
id: ex-parallelogram-content-from-a-two-by-two-matrix
kind: example
title: "The content of a parallelogram from a two-by-two matrix"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-parallelogram-content-and-base-height-formula]
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
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The parallelogram spanned by $v=(3,1)$ and $w=(1,3)$ has Jordan content $8$.

## Facts & Assumptions

**Given:** The displayed spanning vectors and base point $0$.

[L1] A parallelogram has content $|\det[v\ w]|$, equal to base times height when $v\ne0$ ([[thm-parallelogram-content-and-base-height-formula]]).

## Verification

**Proof technique:** direct.

1.1 The determinant is $3\cdot3-1\cdot1=8$, so [L1] gives content $8$. [L1, algebra]

2.1 The base length is $\sqrt{10}$. Since $\langle v,w\rangle=6$, the residual after projecting $w$ onto $\mathbb Rv$ is $(-4/5,12/5)$ and has norm $8/\sqrt{10}$; the base--height product is therefore $\sqrt{10}\cdot8/\sqrt{10}=8$. [L1, algebra] ∎
