---
id: def-plaque-of-a-flat-chart
kind: definition
title: "Plaques of a flat chart"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-flat-chart-for-a-distribution]
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

Let $\varphi = (x,y):U \to \mathbb R^k \times \mathbb R^{n-k}$ be a flat chart
for a distribution $\mathcal D$. For $c$ in the second-coordinate image, the
connected components of

$$ \varphi^{-1}\bigl(\varphi(U) \cap (\mathbb R^k \times \{c\})\bigr) $$

are called the **plaques** of the flat chart.
