---
id: def-orbit-and-stabilizer
kind: definition
title: 'The orbit $G\cdot x$ and stabilizer $G_x$ of a point in a group action'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
justified_by: [lem-stabilizer-is-a-subgroup]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Brosnan, Orbits and stabilizers"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Definition

For a left action of $G$ on $X$ and $x\in X$, the **orbit** of $x$ is

$$G\cdot x:=\{g\cdot x:g\in G\},$$

and the **stabilizer** of $x$ is

$$G_x:=\{g\in G:g\cdot x=x\}.$$

The subgroup claim implicit in the word “stabilizer” is proved in
[[lem-stabilizer-is-a-subgroup]].
