---
id: def-regular-foliation-atlas
kind: definition
title: "Regular foliation atlases"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plaque-of-a-flat-chart]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

A **regular foliation atlas of codimension $n-k$** on an $n$-manifold $M$ is an
atlas of charts $\varphi_\alpha = (x_\alpha,y_\alpha):
U_\alpha \to \mathbb R^k \times \mathbb R^{n-k}$ such that on each overlap the
transition map has the form

$$(x_\beta,y_\beta) = \bigl(g_{\beta\alpha}(x_\alpha,y_\alpha),h_{\beta\alpha}(y_\alpha)\bigr).$$

Thus the second coordinates depend only on the old transverse coordinates, so
plaques are sent to plaques.
