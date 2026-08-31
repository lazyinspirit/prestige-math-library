---
id: def-exterior-power-bundle-of-the-cotangent-bundle
kind: definition
title: "The exterior power bundle of the cotangent bundle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union,
       def-alternating-k-covectors]
justified_by: [thm-exterior-power-transition-laws-define-a-smooth-vector-bundle]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $M$ be a smooth manifold and $k\ge 0$. The **$k$th exterior-power bundle of
the cotangent bundle** is the fibrewise assignment

$$
\bigwedge^kT^*M:=\coprod_{p\in M}\operatorname{Alt}^k(T_pM).
$$

The next theorem provides its smooth vector-bundle structure.
