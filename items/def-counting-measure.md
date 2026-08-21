---
id: def-counting-measure
kind: definition
title: "Counting measure on an arbitrary set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable, def-extended-reals]
justified_by: [prop-counting-measure-is-a-measure]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. The **counting set function** on $\mathcal P(X)$ is

$$\#_X(E):=\begin{cases}|E|,&E\text{ is finite},\\+\infty,&E\text{ is infinite},\end{cases}$$

where finite means equinumerous with a natural number ([[def-countable]]) and $+\infty$ belongs to the extended real line ([[def-extended-reals]]). The two branches are exhaustive and disjoint. The fact that this set function is a measure, and hence deserves the name **counting measure**, is proved in [[prop-counting-measure-is-a-measure]].

