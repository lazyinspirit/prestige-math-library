---
id: cex-regular-graphs-are-not-hereditary
kind: counterexample
title: "The class of regular graphs is not hereditary"
status: published
origin: session
deps: [def-hereditary-graph-class, def-graph-adjacency-incidence-neighbourhood-and-degree, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Statement refuted

The class of finite regular graphs is hereditary.

## Facts & Assumptions

**Given:** The cycle $C_4=v_0v_1v_2v_3v_0$.

[F1] Every vertex of $C_4$ has degree two, so $C_4$ is regular ([[def-graph-adjacency-incidence-neighbourhood-and-degree]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The induced subgraph on $\{v_0,v_1,v_2\}$ is $P_3$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] A hereditary class is closed under induced subgraphs ([[def-hereditary-graph-class]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph $C_4$ is regular. [F1]

1.2 Its displayed induced $P_3$ has degrees $1,2,1$, so it is not regular. [F2]

2.1 Thus regular graphs are not closed under induced subgraphs and do not form a hereditary class. [step 1.1, step 1.2, F3] ∎
