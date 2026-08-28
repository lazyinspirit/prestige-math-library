---
id: def-tau-critical-graph
kind: definition
title: "A tau-critical graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kappa-of-a-graph,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-real-power,
       def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, before Theorem 3.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Definition

Let $\tau>0$. A finite graph $G$ is **$\tau$-critical** when the two conditions
below hold.

1. $\kappa(G)<|V(G)|^\tau$.
2. Every proper induced subgraph $H$ of $G$ satisfies
   $\kappa(H)\geq |V(H)|^\tau$.

Here $\kappa$ is that of [[def-kappa-of-a-graph]], induced subgraphs are those
of [[def-subgraph-induced-subgraph-and-spanning-subgraph]], and the real power
$|V(G)|^\tau$ is that of [[def-real-power]]. The first clause forces every
$\tau$-critical graph to be nonempty, because it would read
$0<0^\tau=0$ on the null graph.
