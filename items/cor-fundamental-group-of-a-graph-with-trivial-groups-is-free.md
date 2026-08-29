---
id: cor-fundamental-group-of-a-graph-with-trivial-groups-is-free
kind: corollary
title: "The fundamental group of a graph with trivial groups is free"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-a-group-acting-freely-without-inversions-on-a-tree-is-free, thm-fundamental-group-acts-on-its-bass-serre-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Statement

If every vertex group and edge group of a graph of groups is trivial, then its
fundamental group is free. If the underlying graph is finite, the rank equals
the number of geometric edges outside a maximal subtree.

## Facts & Assumptions

**Given:** A graph of groups $\mathcal G$ with all vertex and edge groups trivial.

[L1] The graph-of-groups fundamental group acts on its Bass-Serre tree, and the quotient graph is the original underlying graph. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

[L2] A group acting freely without inversions on a tree is free. ([[cor-a-group-acting-freely-without-inversions-on-a-tree-is-free]])

## Proof

**Proof technique:** direct.

1.1 By [L1], the graph-of-groups fundamental group acts on its Bass-Serre tree. Because every stabilizer is trivial, this action is free and without inversions. [L1, given]

2.1 Applying [L2] to the action from step 1.1 shows that the fundamental group is free. If the quotient graph is finite, a maximal subtree uses all vertices and all but the non-tree geometric edges, so the free basis from the previous corollary has one generator for each such edge. [L2, step 1.1] ∎
