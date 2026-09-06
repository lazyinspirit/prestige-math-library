---
id: def-segre-map
kind: definition
title: The Segre point map from two projective spaces
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-varieties-universal-property, def-projective-space-points, def-morphism-to-projective-space-homogeneous-coordinates]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, The Segre map, §6i
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Before a categorical product has been constructed, use
$\times_{\mathrm{set}}$ for the Cartesian product of point sets. For the
lexicographic ordering of pairs $(i,j)$, define the **Segre point map**
$$\sigma_{m,n}:\mathbf P_k^m\times_{\mathrm{set}}\mathbf P_k^n\longrightarrow\mathbf P_k^{(m+1)(n+1)-1},\qquad([x_0:\cdots:x_m],[y_0:\cdots:y_n])\longmapsto[x_i y_j]_{i,j}.$$
The coordinate functions are bihomogeneous of bidegree $(1,1)$; this convention fixes both their order and the target coordinates.
