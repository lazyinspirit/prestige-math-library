---
id: def-negative-gradient-trajectory-of-a-morse-function
kind: definition
title: "Negative-gradient trajectories of a Morse function"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-riemannian-gradient-of-a-smooth-function, def-morse-function-and-excellent-morse-function, def-integral-curve-of-a-vector-field]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Definition

Let $f:M\to\mathbb R$ be a Morse function and let $g$ be a Riemannian
metric. A **negative-gradient trajectory** is a maximal integral curve
$\gamma:I\to M$ of $-\operatorname{grad}_g f$; that is, it satisfies

$$ \dot\gamma(t)=-\operatorname{grad}_g f(\gamma(t))\quad(t\in I). $$

Here $I$ is maximal among intervals on which this solution extends. It is a
**full trajectory** when $I=\mathbb R$. The word “negative” fixes the descending
convention used below.
