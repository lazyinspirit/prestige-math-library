---
id: def-smooth-partition-of-unity-subordinate-to-an-open-cover
kind: definition
title: "Smooth partitions of unity subordinate to an open cover"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold, def-cover-refinement-and-local-finiteness]
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

Let $M$ be a smooth manifold and let $(U_i)_{i\in I}$ be an open cover of $M$. A family of smooth functions $(\phi_i)_{i\in I}$ with $\phi_i:M\to [0,1]$ is a **smooth partition of unity subordinate to** $(U_i)_{i\in I}$ when:

1. the family $(\operatorname{supp}(\phi_i))_{i\in I}$ is locally finite;
2. $\operatorname{supp}(\phi_i)\subseteq U_i$ for every $i\in I$; and
3. $\sum_i \phi_i(p)=1$ for every $p\in M$.

## Remarks

Because the support family is locally finite, the pointwise sum in (3) is locally a finite sum.
