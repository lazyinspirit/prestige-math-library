---
id: prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components
kind: proposition
title: "Smoothness of a vector field is equivalent to smooth coordinate components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, thm-change-of-coordinate-formula-for-tangent-bases]
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
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $(U,x)$ be a smooth chart on an $n$-manifold $M$, and let $X$ be a vector
field on $U$. Then $X$ is smooth if and only if there exist smooth functions
$X^1,\dots,X^n:U\to\mathbb R$ such that

$$ X=\sum_{i=1}^n X^i \frac{\partial}{\partial x^i} $$

on $U$.

## Facts & Assumptions

**Given:** A chart $(U,x)$ and a vector field $X$ on $U$.

[L1] Smoothness of a section of a smooth vector bundle is equivalent to smoothness of its local frame coefficients ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[L2] On an overlap of charts, tangent bases transform by the Jacobian matrix of the coordinate change ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

## Proof

**Proof technique:** direct.

1.1 In the induced tangent-bundle chart over $U$, the coordinate fields $\partial/\partial x^1,\dots,\partial/\partial x^n$ form a local frame of $TM|_U$, so [L1] says that $X$ is smooth exactly when it can be written with smooth coefficient functions $X^1,\dots,X^n$ in that frame. [L1, given]

2.1 If one changes charts, [L2] expresses the new coefficients as linear combinations of the old ones with smooth Jacobian entries. Hence the criterion from step 1.1 is independent of the chosen chart. [L2, step 1.1]

3.1 Therefore a vector field is smooth exactly when its coordinate components in a chart are smooth. [step 1.1, step 2.1] ∎
