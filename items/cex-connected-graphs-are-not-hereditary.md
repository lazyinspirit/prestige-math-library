---
id: cex-connected-graphs-are-not-hereditary
kind: counterexample
title: "The class of connected graphs is not hereditary"
status: published
origin: session
deps: [def-hereditary-graph-class, def-connected-graph-and-connected-component, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
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

The class of connected finite graphs is hereditary.

## Facts & Assumptions

**Given:** The path $P_3=v_0v_1v_2$.

[F1] $P_3$ is connected ([[def-connected-graph-and-connected-component]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The induced subgraph on $\{v_0,v_2\}$ has no edge ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] A hereditary class must contain every induced subgraph of each member ([[def-hereditary-graph-class]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph $P_3$ belongs to the class of connected graphs. [F1]

1.2 Its induced subgraph on the endpoints is $\overline K_2$, which is disconnected. [F2]

2.1 Hence this class is not closed under induced subgraphs and is not hereditary. [step 1.1, step 1.2, F3] ∎
