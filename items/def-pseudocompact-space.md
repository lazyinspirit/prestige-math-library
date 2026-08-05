---
id: def-pseudocompact-space
kind: definition
title: "Pseudocompact space: every continuous real-valued function has bounded image"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-continuous-map-top, def-bounded-set, def-subspace-topology-top]
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
    - title: "Pseudocompact space"
      url: "https://en.wikipedia.org/wiki/Pseudocompact_space"
pipeline_run: null
---

## Definition

A topological space $X$ is **pseudocompact** when every continuous map $f:X\to\mathbb{R}$ ([[def-continuous-map-top]]) has bounded image: there are reals $\ell,u$ with $\ell\le f(x)\le u$ for every $x\in X$ ([[def-bounded-set]]).

A subset $A$ of a topological space is **pseudocompact** when $A$, equipped with its subspace topology, is pseudocompact ([[def-subspace-topology-top]]).

## Remarks

No separation axiom is part of this definition. Some texts reserve the word for completely regular spaces; here it names exactly the bounded-image condition just stated.
