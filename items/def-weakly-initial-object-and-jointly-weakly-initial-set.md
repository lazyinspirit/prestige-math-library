---
id: def-weakly-initial-object-and-jointly-weakly-initial-set
kind: definition
title: "Weakly initial object and jointly weakly initial set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-initial-terminal-and-zero-object, def-small-locally-small-and-large-category]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, Appendix A"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Definition

An object $W$ of a category $\mathcal C$ is **weakly initial** if, for every object $C$, there exists at least one morphism $W\to C$. Unlike an initial object ([[def-initial-terminal-and-zero-object]]), a weakly initial object need not have a unique morphism to each target.

A supplied set $\mathcal S$ of objects is **jointly weakly initial** if, for every object $C$, there exist $S\in\mathcal S$ and a morphism $S\to C$. The word supplied means that the set $\mathcal S$ is part of the data; it does not mean that a witness is simultaneously chosen for every target.
