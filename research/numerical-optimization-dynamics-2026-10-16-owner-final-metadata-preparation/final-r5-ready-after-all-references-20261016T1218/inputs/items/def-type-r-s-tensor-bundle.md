---
id: def-type-r-s-tensor-bundle
kind: definition
title: "The type $(r,s)$ tensor bundle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-tangent-bundle-as-a-disjoint-union,
       def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union,
       def-type-r-s-tensor-on-a-finite-dimensional-vector-space]
justified_by: [thm-tensor-transition-laws-define-a-smooth-vector-bundle]
aliases: []
landmark: false
verification:
  audited: 2026-09-01
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

Let $M$ be a smooth manifold, and let $r,s\ge 0$. The **type $(r,s)$ tensor
bundle** of $M$ is the fibrewise assignment

$$ T^r_sM:=\coprod_{p\in M}\operatorname{Mult}\bigl((T_p^*M)^r\times(T_pM)^s,\mathbb R\bigr), $$

that is, the fibre over $p$ consists of the type $(r,s)$ tensors on $T_pM$ in
the multilinear-map sense. The next theorem equips this disjoint union with its
smooth vector-bundle structure.
