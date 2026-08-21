---
id: def-dirac-measure
kind: definition
title: "The Dirac set function at a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra]
justified_by: [prop-dirac-measure-is-a-probability-measure]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal A$ be a sigma-algebra on a nonempty set $X$ ([[def-sigma-algebra]]) and fix $x_0\in X$. The **Dirac set function at $x_0$** is

$$\delta_{x_0}(E):=\begin{cases}1,&x_0\in E,\\0,&x_0\notin E,\end{cases}\qquad E\in\mathcal A.$$

The two branches are exhaustive and disjoint. The fact that this set function is a probability measure is proved in [[prop-dirac-measure-is-a-probability-measure]].
