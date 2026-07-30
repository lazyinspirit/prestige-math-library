---
id: ex-closed-subspaces-of-normal-spaces
kind: example
title: "Closed subspaces inherit normality: compact intervals, ordinal endpoints, and finite closed pieces"
status: published
origin: session
deps: [lem-normality-is-closed-hereditary, thm-a-compact-hausdorff-space-is-regular-and-normal]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. R. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

In a compact Hausdorff space, normality follows from [[thm-a-compact-hausdorff-space-is-regular-and-normal]]. Any closed interval inside a compact ordered interval, any closed endpoint set, and every finite closed subset therefore inherit normality through [[lem-normality-is-closed-hereditary]].

The qualification “closed” is essential. The deleted Tychonoff plank on the A page is an open subspace of a compact Hausdorff normal space but is not normal, so the example cannot be strengthened by replacing “closed” with “arbitrary”.
