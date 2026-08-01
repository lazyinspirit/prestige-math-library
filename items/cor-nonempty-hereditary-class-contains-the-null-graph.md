---
id: cor-nonempty-hereditary-class-contains-the-null-graph
kind: corollary
title: "Every nonempty hereditary graph class contains the null graph"
status: published
origin: session
deps: [def-hereditary-graph-class, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

Every nonempty hereditary class of finite graphs contains the null graph $K_0$.

## Facts & Assumptions

**Given:** A nonempty hereditary graph class $\mathcal C$.

[F1] Choose $G\in\mathcal C$.

[F2] The induced subgraph $G[\varnothing]$ is the null graph $K_0$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F3] A hereditary class contains every induced subgraph of each member ([[def-hereditary-graph-class]]).

## Proof

**Proof technique:** direct.

1.1 Since $G\in\mathcal C$, heredity gives $G[\varnothing]\in\mathcal C$. [F1, F3]

2.1 Since $G[\varnothing]=K_0$, the null graph belongs to $\mathcal C$. [step 1.1, F2] ∎
