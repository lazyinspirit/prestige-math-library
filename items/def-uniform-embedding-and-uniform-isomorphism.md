---
id: def-uniform-embedding-and-uniform-isomorphism
kind: definition
title: "Uniform embedding and uniform isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniformly-continuous-map, def-injection-surjection-bijection]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A map $f:X\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].
