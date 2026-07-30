---
id: def-uniformly-continuous-map
kind: definition
title: "Uniformly continuous map between uniform spaces"
status: published
origin: session
deps: [def-uniform-space-by-entourages]
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

For uniform spaces $(X,\mathcal U_X)$ and $(Y,\mathcal U_Y)$, a map $f:X\to Y$ is **uniformly continuous** if for every $V\in\mathcal U_Y$ there is $U\in\mathcal U_X$ such that $(x,x')\in U$ implies $(f(x),f(x'))\in V$. The controlling entourage $U$ is independent of the point $x$.
