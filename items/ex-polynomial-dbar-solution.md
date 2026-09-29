---
id: ex-polynomial-dbar-solution
kind: example
title: A polynomial closed form and its potential
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - def-wirtinger-operators-in-several-complex-variables
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Definition 4.4.1, printed p. 137, PDF lines 11136–11164, defines the coefficient operators used here. The specific polynomial form and potential are constructed and computed in this item."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

On $\mathbb C^2$, let
$$g=2\bar z_1\,d\bar z_1+z_1\,d\bar z_2,\qquad u=\bar z_1^2+z_1\bar z_2.$$
Then $\bar\partial g=0$ and $\bar\partial u=g$.

## Facts & Assumptions

**Given:** The displayed polynomial $(0,1)$-form $g$ and function $u$ on all of $\mathbb C^2$.

[F1] The coordinate Wirtinger derivatives are $\partial_{z_k}=\tfrac12(\partial_{x_k}-i\partial_{y_k})$ and $\partial_{\bar z_k}=\tfrac12(\partial_{x_k}+i\partial_{y_k})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F2] The $\bar\partial$ coefficient formula differentiates each coefficient in $\bar z_j$ and wedges $d\bar z_j$ before the existing type factors ([[def-bigraded-complex-differential-forms]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\partial_{\bar z_1}u=2\bar z_1$ and $\partial_{\bar z_2}u=z_1$: the cross derivatives $\partial_{\bar z_1}(z_1\bar z_2)$ and $\partial_{\bar z_2}(\bar z_1^2)$ are zero. The scalar case of [F2] therefore gives $\bar\partial u=2\bar z_1d\bar z_1+z_1d\bar z_2=g$. [F1, F2, given, algebra]

2.1 For $g=g_1d\bar z_1+g_2d\bar z_2$, where $g_1=2\bar z_1$ and $g_2=z_1$, [F1] gives $\partial_{\bar z_1}g_1=2$ and $\partial_{\bar z_2}g_1=\partial_{\bar z_1}g_2=\partial_{\bar z_2}g_2=0$. Hence [F2] gives $\bar\partial g=2\,d\bar z_1\wedge d\bar z_1=0$ by alternation; in particular, both mixed cross derivatives vanish. [F1, F2, given, algebra] ∎
