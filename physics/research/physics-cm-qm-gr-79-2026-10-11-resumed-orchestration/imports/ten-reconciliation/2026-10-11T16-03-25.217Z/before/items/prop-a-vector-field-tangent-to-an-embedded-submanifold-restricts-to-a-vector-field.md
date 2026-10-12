---
id: prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field
kind: proposition
title: "A vector field tangent to an embedded submanifold restricts to a vector field on it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-embedded-submanifold-and-slice-chart, prop-smoothness-into-an-embedded-submanifold-is-an-initial-property]
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

Let $S\hookrightarrow M$ be an embedded submanifold, and let $X$ be a smooth
vector field on $M$ such that $X_p\in T_pS$ for every $p\in S$. Then the
restriction $X|_S$ is a smooth vector field on $S$.

## Facts & Assumptions

**Given:** An embedded submanifold $S\hookrightarrow M$ and a smooth vector field $X$ on $M$ tangent to $S$.

[L1] Embedded submanifolds admit slice charts ([[def-embedded-submanifold-and-slice-chart]]).

[L2] Smooth vector fields are characterized by smooth coordinate coefficient functions ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] Smoothness of a map into an embedded submanifold is detected after composing with the inclusion ([[prop-smoothness-into-an-embedded-submanifold-is-an-initial-property]]).

## Proof

**Proof technique:** direct.

1.1 In a slice chart $(U,x^1,\dots,x^n)$ for $S$, the submanifold is given by $x^{k+1}=\cdots=x^n=0$. By [L2], write $X=\sum_i X^i\partial/\partial x^i$ with smooth coefficients on $U$. [L1, L2, given]

2.1 Tangency means that at each point of $S\cap U$ the normal components vanish: $X^{k+1}=\cdots=X^n=0$ on $S\cap U$. Hence on $S\cap U$ the field is $$ X|_{S\cap U}=\sum_{i=1}^k (X^i|_{S\cap U}) \frac{\partial}{\partial x^i}, $$ whose coefficients are smooth on the slice. [step 1.1, given]

3.1 The local expressions from step 2.1 define a smooth section of $TS$ in each restricted slice chart, and these local sections agree on overlaps because they are all restrictions of $X$. By [L3], they therefore glue to a smooth vector field on $S$. [L3, step 2.1]

4.1 Therefore a smooth ambient vector field tangent to an embedded submanifold restricts to a smooth vector field on that submanifold. [step 3.1] ∎
