---
id: def-filter-convergence-and-cluster-point
kind: definition
title: "Convergence and cluster points of a filter on a topological space"
status: published
origin: session
deps: [def-filter, def-neighbourhood-top]
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

Let $\mathcal F$ be a filter on a topological space $X$ and let $p\in X$.

- $\mathcal F$ **converges to $p$**, written $\mathcal F\to p$, if every neighbourhood of $p$ belongs to $\mathcal F$.
- $p$ is a **cluster point** of $\mathcal F$ if $N\cap A\ne\varnothing$ for every neighbourhood $N$ of $p$ and every $A\in\mathcal F$.

The second condition says precisely that the neighbourhood filter at $p$ and $\mathcal F$ have no disjoint members.
