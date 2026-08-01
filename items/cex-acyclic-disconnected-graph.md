---
id: cex-acyclic-disconnected-graph
kind: counterexample
title: "An acyclic graph need not be a tree"
status: published
origin: session
deps: [def-tree-forest-and-leaf, def-standard-complete-bipartite-path-and-cycle-graphs]
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

Every acyclic graph is a tree.

## Facts & Assumptions

**Given:** The edgeless graph $G=\overline K_2$.

[F1] An edgeless graph contains no cycle ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A tree must be connected as well as acyclic ([[def-tree-forest-and-leaf]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph $\overline K_2$ is acyclic because it has no edges. [F1]

1.2 Its two vertices lie in different components, so it is disconnected and therefore is not a tree. [F2]

2.1 Thus acyclicity alone does not imply the tree property. [step 1.1, step 1.2] ∎
