---
id: def-segre-map
kind: definition
title: The Segre point map from two projective spaces
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-space-points]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, The Segre map, §6i
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
---

## Definition

Before a categorical product has been constructed, use
$\times_{\mathrm{set}}$ for the Cartesian product of point sets. For the
lexicographic ordering of pairs $(i,j)$, define the **Segre point map**
$$\sigma_{m,n}:\mathbf P_k^m\times_{\mathrm{set}}\mathbf P_k^n\longrightarrow\mathbf P_k^{(m+1)(n+1)-1},\qquad([x_0:\cdots:x_m],[y_0:\cdots:y_n])\longmapsto[x_i y_j]_{i,j}.$$
The coordinate functions are bihomogeneous of bidegree $(1,1)$; this convention fixes both their order and the target coordinates.
