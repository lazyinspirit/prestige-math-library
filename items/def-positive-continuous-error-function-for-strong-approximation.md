---
id: def-positive-continuous-error-function-for-strong-approximation
kind: definition
title: "Positive continuous error functions for strong approximation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., The Whitney Approximation Theorems"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $M$ be a smooth manifold. A **positive continuous error function on $M$** is
a continuous map
$$
\varepsilon:M\to(0,\infty).
$$
In Whitney approximation on a noncompact manifold, the inequality
$$
\|G(p)-F(p)\|<\varepsilon(p)
$$
is the pointwise fine-control condition that replaces one global uniform error
bound.
