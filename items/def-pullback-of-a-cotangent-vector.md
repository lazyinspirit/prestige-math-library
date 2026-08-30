---
id: def-pullback-of-a-cotangent-vector
kind: definition
title: "Pullback of a cotangent vector"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-differential-of-a-smooth-map, def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]
justified_by: []
aliases: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Definition

If $F:M\to N$ is smooth, $p\in M$, and $\omega\in T_{F(p)}^*N$, the **pullback** of $\omega$ by $F$ at $p$ is the covector
$$ F_p^*(\omega):=\omega\circ dF_p\in T_p^*M. $$
