---
id: thm-second-countable-implies-first-countable
kind: theorem
title: "Every second countable space is first countable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-second-countable-space, def-first-countable-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Second-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Second-countable_space"
pipeline_run: null
---

## Statement

Every second countable topological space is first countable.

## Facts & Assumptions

**Given:** A countable basis $\mathcal B$ for $X$ ([[def-second-countable-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in X$, the subfamily $\{B\in\mathcal B:x\in B\}$ is countable and refines every neighbourhood of $x$ because $\mathcal B$ is a basis. [given]

2.1 Thus it is a countable neighbourhood base at every $x$, which is first countability. [step 1.1] ∎
