---
id: fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors
kind: false-statement
title: "The ambient value of a Lie bracket is determined by the two pointwise vector values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-involutive-distribution,
       fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

For smooth vector fields $X$ and $Y$, the ambient tangent vector $[X,Y]_p$ is
determined by the pair of pointwise values $(X_p,Y_p)$.

## Facts & Assumptions

**Given:** On $\mathbb R^2$ at $p=(0,0)$, let
$$X := \partial_x,\qquad Y := x\partial_y,\qquad Z := 0.$$

[A1] The fields $Y$ and $Z$ have the same value at $p$.

## Refutation

**Proof technique:** direct.

1.1 At the origin, $Y_p = 0 = Z_p$, while $X_p = \partial_x$. [given]

1.2 Nevertheless, [given]
$$[X,Y] = \partial_y\qquad\text{and}\qquad [X,Z] = 0,$$
so the Lie bracket at $p$ changes when one replaces $Y$ by another field with
the same point value. [given, algebra]

1.3 Thus the ambient vector $[X,Y]_p\in T_pM$ is not determined by the two [given]
pointwise vector values: first derivatives of the fields matter. This does not
rule out quotient-valued constructions that use a fixed smooth distribution;
it refutes only the ambient pointwise-value claim stated above. [given]

2.1 Therefore the stated pointwise-determination claim is false. [given] ∎ [given]
