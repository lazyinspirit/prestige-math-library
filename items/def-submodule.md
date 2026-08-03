---
id: def-submodule
kind: definition
title: "Submodule of a module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

Let $M$ be a left $R$-module. A subset $N\subseteq M$ is a **submodule** when
it is a subgroup of the additive group of $M$ and is closed under scalars:

$$r\in R,\ n\in N\quad\Longrightarrow\quad rn\in N.$$

The operations on $N$ are the restrictions of those of $M$. Write $N\le M$ when
the ring and module are understood.
