---
id: def-probability-measure
kind: definition
title: "Probability measures and probability spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure, def-measure-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Definition 12.1"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Definition

A **probability measure** on a measurable space $(X,\mathcal A)$ is a measure $\mathbb P$ with $\mathbb P(X)=1$ ([[def-measure]]). The triple $(X,\mathcal A,\mathbb P)$ is a **probability space** ([[def-measure-space]]); $X$ is its sample space and the members of $\mathcal A$ are its events.

