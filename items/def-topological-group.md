---
id: def-topological-group
kind: definition
title: "Topological group: multiplication and inversion are continuous"
status: published
origin: session
deps: [def-group, def-continuous-map-top, def-product-topology]
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

A **topological group** is a group $G$ ([[def-group]]) with a topology such that multiplication $m:G\times G\to G$, $m(x,y)=xy$, and inversion $\iota:G\to G$, $\iota(x)=x^{-1}$, are continuous ([[def-continuous-map-top]]) for the product topology ([[def-product-topology]]).
