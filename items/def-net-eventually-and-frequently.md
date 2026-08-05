---
id: def-net-eventually-and-frequently
kind: definition
title: "A net is eventually or frequently in a subset of its codomain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-directed-set-and-net]
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Definition

Let $x:D\to X$ be a net ([[def-directed-set-and-net]]) and let $S\subseteq X$.

- $x$ is **eventually in $S$** if some $d_0\in D$ satisfies $x_d\in S$ for every $d\ge d_0$.
- $x$ is **frequently in $S$** if, for every $d_0\in D$, there is $d\ge d_0$ with $x_d\in S$.

The net is frequently in $S$ exactly when it is not eventually in $X\setminus S$: negating the first displayed existential-universal condition gives the second one.
