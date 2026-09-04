---
id: ex-the-flow-box-coordinates-for-a-nonconstant-planar-field
kind: example
title: "Flow-box coordinates for a nonconstant planar field"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-flow-box-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

For the vector field

$$ X=\frac{\partial}{\partial x}+y\frac{\partial}{\partial y} $$

on $\mathbb R^2$, the coordinates

$$ u=x, \qquad v=ye^{-x} $$

turn $X$ into $\partial/\partial u$.

## Facts & Assumptions

**Given:** The vector field $X=\partial/\partial x+y\,\partial/\partial y$ on $\mathbb R^2$.

[L1] The flow-box theorem straightens a nonvanishing vector field ([[thm-flow-box-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Compute $$ X(u)=1, \qquad X(v)=X(ye^{-x})=y(-e^{-x})+e^{-x}X(y)=-ye^{-x}+e^{-x}y=0. $$ [given]

2.1 Step 1.1 means that in the coordinates $(u,v)$ the field differentiates the first coordinate by $1$ and the second by $0$, so it is exactly $\partial/\partial u$. This is an explicit flow-box chart, as predicted by [L1]. [L1, step 1.1] ∎
