---
id: def-totally-bounded-uniform-space
kind: definition
title: "Totally bounded uniform space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-finite-cardinality]
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

A uniform space $X$ is **totally bounded** if, for every entourage $E$, there is a finite set $F\subseteq X$ such that $X=\bigcup_{x\in F}E[x]$. Finiteness has the library meaning of [[def-finite-cardinality]].
