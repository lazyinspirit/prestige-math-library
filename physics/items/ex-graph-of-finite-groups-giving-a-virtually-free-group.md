---
id: ex-graph-of-finite-groups-giving-a-virtually-free-group
kind: example
title: "A graph of finite groups giving a virtually free group"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Example

The one-segment graph of groups with vertex groups $C_2$ and $C_3$ and trivial
edge group has fundamental group $C_2\ast C_3$, and this group is virtually
free.

## Facts & Assumptions

**Given:** The graph of groups with vertex groups $C_2$ and $C_3$ and trivial edge group.

[L1] The graph-of-groups fundamental group acts on its Bass-Serre tree, with vertex and edge stabilizers conjugate to the chosen groups. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

[L2] A group acting freely without inversions on a tree is free. ([[cor-a-group-acting-freely-without-inversions-on-a-tree-is-free]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the fundamental group $\Gamma=C_2\ast C_3$ acts on its Bass-Serre tree with vertex stabilizers conjugate to $C_2$ and $C_3$ and trivial edge stabilizers. The canonical surjection $\Gamma\to C_2\times C_3$ has finite image of order $6$, so its kernel $\Gamma_0$ has index $6$. Because this quotient map is injective on each factor, $\Gamma_0$ meets every conjugate of $C_2$ and $C_3$ trivially. [L1, given]

2.1 The subgroup $\Gamma_0$ therefore acts freely on the same tree, so [L2] makes $\Gamma_0$ a free group. Since $\Gamma_0$ has finite index in $\Gamma$, the group $C_2\ast C_3$ is virtually free. [L2, step 1.1] ∎
