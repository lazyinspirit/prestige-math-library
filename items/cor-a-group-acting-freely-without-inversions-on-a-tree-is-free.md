---
id: cor-a-group-acting-freely-without-inversions-on-a-tree-is-free
kind: corollary
title: "A group acting freely without inversions on a tree is free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-group, thm-bass-serre-structure-theorem, def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

If a group $G$ acts freely and without inversions on a simplicial tree, then
$G$ is a free group.

## Facts & Assumptions

**Given:** A group $G$ acting freely and without inversions on a simplicial tree $T$.

[L1] Bass-Serre structure identifies $G$ with the fundamental group of the quotient graph of stabilizers. ([[thm-bass-serre-structure-theorem]])

[L2] A free group on a set is characterized by the universal property recorded in [[def-free-group]].

[L3] The relative fundamental group is obtained from the path group by killing the maximal-tree edges. ([[def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree]])

## Proof

**Proof technique:** direct.

1.1 Because the action is free, every vertex and edge stabilizer in the quotient graph of groups is trivial. By [L1], it is therefore enough to compute the fundamental group of a graph of trivial groups. [L1, given]

2.1 With all stabilizers trivial, the path-group relations reduce to $\bar e=e^{-1}$ and there are no vertex-group generators. After killing the maximal-tree edges as in [L3], the remaining generators are exactly the non-tree oriented edges, with no further relations. That is the free-group universal property of [L2]. [L2, L3, step 1.1]

3.1 Hence $G$ is free on the non-tree edge generators of the quotient graph. [step 2.1] ∎
