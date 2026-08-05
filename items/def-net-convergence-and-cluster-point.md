---
id: def-net-convergence-and-cluster-point
kind: definition
title: "Convergence and cluster points of a net in a topological space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-directed-set-and-net, def-net-eventually-and-frequently, def-neighbourhood-top]
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
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "net (nLab)"
      url: "https://ncatlab.org/nlab/show/net"
pipeline_run: null
---

## Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.
