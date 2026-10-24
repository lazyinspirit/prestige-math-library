---
id: ex-the-radial-vector-field-and-dilation-flow
kind: example
title: "The radial vector field has the dilation flow"
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

On $\mathbb R^n$, let

$$ X=\sum_{i=1}^n x^i\frac{\partial}{\partial x^i}. $$

Then the integral curve through $x_0$ is $\gamma_{x_0}(t)=e^t x_0$, so the flow
is the dilation $\Phi_t(x)=e^t x$.

## Facts & Assumptions

**Given:** The radial vector field $X=\sum_i x^i\partial/\partial x^i$.

[L1] A vector field is complete if and only if its maximal flow is global ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma_{x_0}(t)=e^t x_0$ satisfies $\gamma_{x_0}(0)=x_0$ and $\gamma_{x_0}'(t)=e^t x_0=X(\gamma_{x_0}(t))$, so it is the integral curve through $x_0$. [given]

2.1 Since $e^t x_0$ is defined for all $t\in\mathbb R$, the flow is global. By [L1], the radial vector field is complete, and its flow maps are the dilations $\Phi_t(x)=e^t x$. [L1, step 1.1] ∎
