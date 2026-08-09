---
id: def-complete-uniform-space
kind: definition
title: "Complete uniform space: every Cauchy filter converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.
