---
id: def-stone-cech-compactification
kind: definition
title: "The Stone–Čech compactification by its compact-Hausdorff extension property"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compactification-of-a-tychonoff-space, def-continuous-map-top]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Stacks Project, Stone–Čech compactification"
      url: "https://stacks.math.columbia.edu/tag/0908"
pipeline_run: null
---

## Definition

A **Stone–Čech compactification** of $X$ is a Hausdorff compactification $(B,i)$ ([[def-compactification-of-a-tychonoff-space]]) such that for every compact Hausdorff space $K$ and continuous map $f:X\to K$ ([[def-continuous-map-top]]), there is a unique continuous $\bar f:B\to K$ with $\bar f\circ i=f$. The universal property, rather than a particular construction, is the definition.
