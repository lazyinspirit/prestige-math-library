---
id: def-measure-space
kind: definition
title: "Measure spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure]
justified_by: []
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
    - title: "S. Axler, Measure, Integration & Real Analysis, Definition 2.56"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Definition

A **measure space** is a triple $(X,\mathcal A,\mu)$ in which $X$ is a set, $\mathcal A$ is a sigma-algebra on $X$, and $\mu$ is a measure on $(X,\mathcal A)$ ([[def-measure]]). The members of $\mathcal A$ are the **measurable sets** of the space.

