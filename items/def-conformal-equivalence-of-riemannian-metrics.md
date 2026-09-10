---
id: "def-conformal-equivalence-of-riemannian-metrics"
kind: "definition"
title: "Conformal equivalence of riemannian metrics"
deps: ["def-riemannian-metric-and-riemannian-manifold"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
---

## Definition

Two Riemannian metrics are **conformally equivalent** if $\widetilde g=e^{2u}g$ for a smooth real function $u$ on $M$.

The positive smooth factor preserves the metric condition of [[def-riemannian-metric-and-riemannian-manifold]]. Equivalently $\widetilde g=fg$ for smooth $f>0$, since $u=\tfrac12\log f$. Reflexivity uses $u=0$, reversal uses $-u$, and composing rescalings adds their functions.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
