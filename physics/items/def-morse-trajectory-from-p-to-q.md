---
id: def-morse-trajectory-from-p-to-q
kind: definition
title: "A Morse trajectory from one critical point to another"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-negative-gradient-trajectory-of-a-morse-function, lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits]
justified_by: []
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (def-morse-trajectory-from-p-to-q). No independent judge or whole-closure certification.
    delegated_by: owner
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

On a compact manifold, under $\mathrm{AC}_\omega$ ([[def-countable-choice]]) as assumed in [[lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits|the preceding endpoint lemma]], that lemma supplies these limits. On a
noncompact manifold, their existence is part of this definition's hypothesis.
