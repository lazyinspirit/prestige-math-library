---
id: ex-fundamental-cycle-and-cut
kind: example
title: "A fundamental cycle and a fundamental cut in a fixed spanning tree"
status: published
origin: session
deps: [lem-fundamental-cycle-of-a-spanning-tree, lem-fundamental-cut-of-a-spanning-tree, def-spanning-tree]
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

## Statement

Let $G$ have vertices $\{1,2,3,4\}$ and edges $\{12,23,34,14,13\}$. For the spanning tree $T$ with edges $\{12,23,34\}$, the edge $14$ has fundamental cycle $1,2,3,4,1$. The edge $23$ has fundamental cut $\{23,13,14\}$.

## Facts & Assumptions

**Given:** The graph $G$ and spanning subgraph $T$ above.

[L1] An outside edge and its unique tree path form the fundamental cycle ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[L2] Deleting a tree edge partitions the tree into two sides, whose crossing edges form the fundamental cut ([[lem-fundamental-cut-of-a-spanning-tree]]).

[F1] A connected acyclic spanning subgraph is a spanning tree ([[def-spanning-tree]]).

## Verification

**Proof technique:** direct computation.

1.1 The graph $T$ is the path $1,2,3,4$, so it is a spanning tree. Its unique $1$-$4$ path together with $14$ is the stated $4$-cycle. [L1, F1]

1.2 Deleting $23$ leaves vertex sides $\{1,2\}$ and $\{3,4\}$. Exactly $23,13,14$ cross between them in $G$. [L2]

2.1 Hence the displayed cycle and cut are the required fundamental objects. [step 1.1, step 1.2] ∎
