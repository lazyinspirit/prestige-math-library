---
id: def-positive-orientation-for-elementary-region-boundaries
kind: definition
title: "Positive orientation of elementary-region boundaries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-i-type-ii-and-elementary-green-regions, def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-line-integrals-under-reversal-and-concatenation, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Definition

For a Type I region of [[def-type-i-type-ii-and-elementary-green-regions]], the **positive boundary** traverses the lower graph from left to right, the right endpoint arc upward, the upper graph from right to left, and the left endpoint arc downward, omitting zero-length arcs. For a Type II description it traverses the right graph upward, the top endpoint arc from right to left, the left graph downward, and the bottom endpoint arc from left to right. In both cases the region remains locally on the left.

For a finite elementary Green region, delete every shared internal arc together with its oppositely oriented copy and retain the orientations of all surviving arcs. Reversal and concatenation are those of [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]].

The surviving arcs form a finite list $\sigma_1,\ldots,\sigma_m$ of oriented piecewise-$C^1$ arcs, called the **positive boundary chain** $\partial D$. A finite elementary Green region need not be connected and need not be simply connected, so this list need not assemble into a single closed path. Accordingly, for a continuous field $G$ on a neighbourhood of $D$ the boundary integral is defined as the finite sum

$$\int_{\partial D}G\cdot d\mathbf r:=\sum_{k=1}^m\int_{\sigma_k}G\cdot d\mathbf r,$$

and likewise $\int_{\partial D}P\,dx+Q\,dy$ for the field $(P,Q)$. When the surviving arcs do assemble into one closed path — in particular for a single elementary region, whose positive boundary is the concatenation of its four arcs — this sum is that path's integral, because vector line integrals add under concatenation ([[thm-line-integrals-under-reversal-and-concatenation]]). The value is independent of the order of the list, since a finite sum of reals does not depend on its order.
