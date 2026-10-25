---
id: ex-the-rotation-vector-field-and-circle-flow
kind: example
title: "The planar rotation field has the circle rotation flow"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-fundamental-theorem-on-flows, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
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
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

On $\mathbb R^2$, let

$$ X=-y\frac{\partial}{\partial x}+x\frac{\partial}{\partial y}. $$

Then the flow is rotation:

$$ \Phi_t(x,y)=(x\cos t-y\sin t,\ x\sin t+y\cos t). $$

## Facts & Assumptions

**Given:** The rotation vector field $X=-y\,\partial/\partial x+x\,\partial/\partial y$.

[L1] A vector field is complete if and only if its maximal flow is global ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating the displayed formula gives $$ \frac{d}{dt}\Phi_t(x,y)=(-x\sin t-y\cos t,\ x\cos t-y\sin t)=X(\Phi_t(x,y)). $$ Also $\Phi_0(x,y)=(x,y)$, so $\Phi_t(x,y)$ is the integral curve through $(x,y)$. [given]

2.1 The formula is defined for all $t\in\mathbb R$, so the flow is global. Therefore [L1] implies that the rotation field is complete. [L1, step 1.1] ∎
