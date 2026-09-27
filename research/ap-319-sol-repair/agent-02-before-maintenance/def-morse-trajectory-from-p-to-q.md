---
id: def-morse-trajectory-from-p-to-q
kind: definition
title: "A Morse trajectory from one critical point to another"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-negative-gradient-trajectory-of-a-morse-function, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits]
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

Fix a Riemannian metric $g$ on $M$. For critical points $p,q$ of a Morse
function $f:M\to\mathbb R$, a **Morse trajectory from $p$ to $q$** is a
nonconstant full trajectory of $-\operatorname{grad}_g f$ with

$$ \lim_{t\to-\infty}\gamma(t)=p\qquad\text{and}\qquad\lim_{t\to\infty}\gamma(t)=q. $$

On a compact manifold the preceding endpoint lemma supplies these limits. On a
noncompact manifold, their existence is part of this definition's hypothesis.
