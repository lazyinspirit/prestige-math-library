---
id: def-cauchy-filter-in-a-uniform-space
kind: definition
title: "Cauchy filter in a uniform space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-filter]
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

A filter $\mathcal F$ on a uniform space $(X,\mathcal U)$ is **Cauchy** if for every entourage $E\in\mathcal U$ some $A\in\mathcal F$ satisfies $A\times A\subseteq E$. Such an $A$ is an $E$-small member of $\mathcal F$.
