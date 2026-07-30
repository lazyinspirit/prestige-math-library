---
id: def-separated-uniform-space
kind: definition
title: "Separated uniformity: the intersection of all entourages is the diagonal"
status: published
origin: session
deps: [def-uniform-space-by-entourages, def-the-diagonal-of-a-space]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Definition

A uniformity $\mathcal U$ on $X$ is **separated** when $\bigcap_{E\in\mathcal U}E=\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\ne y$, some entourage $E$ satisfies $(x,y)\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.
