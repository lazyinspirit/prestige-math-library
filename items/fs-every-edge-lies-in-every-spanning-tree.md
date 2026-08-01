---
id: fs-every-edge-lies-in-every-spanning-tree
kind: false-statement
title: "Every edge of a connected graph lies in every spanning tree"
status: published
origin: session
deps: [def-spanning-tree, ex-two-spanning-trees-of-one-graph, lem-fundamental-cycle-of-a-spanning-tree]
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

## False Statement

Every edge of a connected graph belongs to every spanning tree of that graph.

## Facts & Assumptions

**Given:** The claimed universal assertion about connected graphs and their spanning trees.

[L1] The triangle $C_3$ has distinct spanning trees obtained by deleting different edges ([[ex-two-spanning-trees-of-one-graph]]).

[L2] An edge outside a spanning tree closes a fundamental cycle ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[F1] A spanning tree need only use a subset of the graph's edges ([[def-spanning-tree]]).

## Refutation

**Proof technique:** direct.

1.1 In $C_3$, fix an edge $e$ and delete it. The remaining two edges form a spanning tree. [L1, F1]

2.1 This spanning tree omits $e$; adding $e$ back closes the triangle as its fundamental cycle. [step 1.1, L2]

3.1 Hence an edge of a connected graph need not lie in every spanning tree. [step 1.1, step 2.1] ∎
