---
id: "def-musical-isomorphisms"
kind: "definition"
title: "Musical isomorphisms"
deps: ["def-riemannian-metric-and-riemannian-manifold"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
justified_by: ["thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms"]
status: published
origin: "pipeline"
---

## Definition

The **musical maps** for $g$ are $v^\flat=g(v,\cdot)$ and its pointwise inverse $\alpha^\sharp$, characterized by $g(\alpha^\sharp,v)=\alpha(v)$ for all $v$.

For the metric in [[def-riemannian-metric-and-riemannian-manifold]], $v^\flat=0$ forces $g(v,v)=0$ and hence $v=0$. Thus $\flat$ is injective between equal-dimensional fibres and bijective; this gives the pointwise inverse. Smooth inverse bundle maps are proved in [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]. On a zero fibre both are the unique map.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
