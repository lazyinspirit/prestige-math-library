---
id: def-second-countable-space
kind: definition
title: "Second countability: an at most countable basis for the topology"
status: published
origin: session
deps: [def-topology-basis-subbasis, def-countable]
aliases: []
landmark: true
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
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

## Remarks

The basis is global. This differs from first countability, where the countable family is allowed to depend on the point.
