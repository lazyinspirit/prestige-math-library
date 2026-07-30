---
id: def-universal-net
kind: definition
title: "Universal net: eventually in every subset or eventually in its complement"
status: published
origin: session
deps: [def-net-eventually-and-frequently]
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
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Definition

A net $x:D\to X$ is **universal** if, for every subset $S\subseteq X$, it is eventually in $S$ or eventually in $X\setminus S$.

The two alternatives cannot both occur: directedness would give an index after both thresholds, whose value would belong to the empty intersection $S\cap(X\setminus S)$.
