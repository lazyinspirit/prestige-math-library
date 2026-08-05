---
id: ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart
kind: example
title: "The Euclidean closed ball and sphere worked through the compactness equivalence chart"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-euclidean-spheres-and-closed-balls, cor-euclidean-closed-balls-and-spheres-are-compact, cor-euclidean-compactness-equivalence-chart]
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
    - title: "Heine-Borel theorem"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Example

Assume $\mathrm{AC}_\omega$ and $\mathrm{DC}$, let $n\ge1$, $c\in\mathbb R^n$, and $r>0$. The closed ball $\overline B_2(c,r)$ and sphere $S_2(c,r)$ are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]). Therefore each is closed and bounded, pseudocompact, countably compact, sequentially compact, limit point compact, and complete and totally bounded; every continuous real-valued function on either set attains both extrema ([[cor-euclidean-compactness-equivalence-chart]]). The two sets are those of [[def-euclidean-spheres-and-closed-balls]].
