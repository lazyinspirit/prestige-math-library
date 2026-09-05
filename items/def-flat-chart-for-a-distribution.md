---
id: def-flat-chart-for-a-distribution
kind: definition
title: "Flat charts for a distribution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-frobenius-local-coordinate-theorem]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $\mathcal D$ be a rank-$k$ smooth distribution on an $n$-manifold $M$. A
chart $\varphi:U \to \mathbb R^k \times \mathbb R^{n-k}$ is a
**flat chart for $\mathcal D$** when

$$\mathcal D_q = d\varphi_q^{-1}\bigl(\mathbb R^k \times \{0\}\bigr) \qquad (q \in U).$$

Equivalently, in the coordinates $\varphi = (x,y)$ the distribution is spanned
by the first $k$ coordinate vector fields.
