---
id: def-countable-chain-condition
kind: definition
title: "The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-countable]
aliases: [def-ccc]
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
    - title: "Countable chain condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_chain_condition"
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ satisfies the **countable chain condition** (ccc) if every family $\mathcal U$ of nonempty open subsets of $X$ with $U\cap V=\varnothing$ whenever $U,V\in\mathcal U$ are distinct is at most countable ([[def-countable]]).
