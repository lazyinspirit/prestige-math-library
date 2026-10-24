---
id: def-compactification-of-a-tychonoff-space
kind: definition
title: "A Hausdorff compactification as a dense embedding into a compact Hausdorff space"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-homeomorphism-and-open-maps, def-dense-top, def-compact-space, def-hausdorff-space]
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

A **Hausdorff compactification** of a space $X$ is a pair $(K,i)$ in which $K$ is compact ([[def-compact-space]]) and Hausdorff ([[def-hausdorff-space]]), and $i:X\to K$ is an embedding with dense image ([[def-homeomorphism-and-open-maps]], [[def-dense-top]]). We identify $X$ with $i[X]$ only after naming $i$; the density condition is a condition on that named image.
