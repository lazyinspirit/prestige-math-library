---
id: cex-minimum-spanning-tree-not-unique
kind: counterexample
title: "A weighted graph with two distinct minimum spanning trees"
status: published
origin: session
deps: [def-weighted-graph-and-minimum-spanning-tree, def-spanning-tree, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "P. T. Wood, Graph Theory lecture notes, Minimum spanning trees"
      url: "https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html"
pipeline_run: null
---

## Statement refuted

Every connected weighted graph has a unique minimum spanning tree.

## Facts & Assumptions

**Given:** The cycle $C_3$ with every edge assigned weight $1$.

[F1] Deleting any edge of $C_3$ leaves a two-edge spanning tree ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[def-spanning-tree]]).

[F2] Total tree weight is the sum of edge weights ([[def-weighted-graph-and-minimum-spanning-tree]]).

## Counterexample

**Proof technique:** direct.

1.1 Each of the three two-edge spanning trees has total weight $2$. [F1, F2]

1.2 Every spanning tree of the three-vertex graph has two edges, so no spanning tree has smaller weight. [F1]

2.1 Thus all three are MSTs, and uniqueness fails. [step 1.1, step 1.2] ∎
