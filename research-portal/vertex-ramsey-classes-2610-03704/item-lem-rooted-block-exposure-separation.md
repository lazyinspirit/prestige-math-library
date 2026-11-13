---
title: Rooted block exposure and attachment separation
status: published
research_item: lem-rooted-block-exposure-separation
dependency_level: 5
---

## Prerequisites

- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)
- [math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)


## Statement

Let $G$ be a finite connected simple graph with an edge. Its blocks are its maximal 2-connected subgraphs and its bridge edges with their endpoints; a cutvertex is a vertex whose deletion increases the number of connected components. Form the bipartite incidence tree whose nodes are the blocks and cutvertices, with a block adjacent to each cutvertex it contains. Choose a block as root, and process the block nodes in nondecreasing distance from it, breaking ties arbitrarily. The exposed vertices before a block is processed are the union of the vertex sets of the earlier blocks.

Each nonroot block $B$ has a unique adjacent cutvertex on the path from $B$ to the root, called its attachment vertex $a$. Every vertex of $B$ other than $a$ is unexposed before $B$ is processed and has no neighbour among the previously exposed vertices except possibly $a$.

## Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)

[math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Facts & Assumptions

[F1] For the stated graph, distinct blocks meet in at most one vertex, every common vertex is a cutvertex, every edge belongs to a block, and the block-cutvertex incidence graph is a tree. [thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)

[F2] In a tree there is a unique path between any two nodes. Rooting it at a node gives each other node a unique predecessor on its path to the root; distance is the number of edges on that path. [math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

[F3] Blocks and cutvertices have the meanings stated above, and a block is a subgraph: its edges have endpoints in its vertex set. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Proof

**Given:** The graph, rooted incidence tree, and processing order in the statement; a nonroot block $B$ with attachment vertex $a$.

**Goal:** Show that each $x$ in $V(B)$ other than $a$ is new and has no earlier exposed neighbour other than possibly $a$.

1.1 The predecessor of $B$ is a cutvertex node because the incidence tree is bipartite; it is unique by the unique-path property. If a cutvertex $x$ in $B$ differs from $a$, its node is a child of $B$: its path to the root starts through $B$. Every other block containing $x$ is then a child of $x$, so its distance from the root is two more than that of $B$. Indeed, any other direction would give a second path to the root. Thus a block other than $B$ containing $x$ is processed strictly later. If $x$ is not a cutvertex, no other block contains it. Consequently no $x$ in $V(B)$ other than $a$ is exposed earlier, including by a block on another branch. [F1, F2, F3, given]

2.1 Let $x$ be such a vertex and suppose $xy$ is an edge with $y$ in an earlier block $D$. Choose a block $C$ containing $xy$. If $C=B$, then $y$ belongs to both $B$ and $D$; since $D$ is earlier, step 1.1 forces $y=a$. If $C$ differs from $B$, then $x$ is a cutvertex and $C$ is a child block of $x$, hence lies farther from the root than $B$. As $x$ and $y$ are distinct, the cutvertex node $y$, if it occurs in the incidence tree, cannot be the predecessor $x$ of $C$. If $D=C$, then $D$ is later than $B$, a contradiction. Otherwise $y$ is a cutvertex shared by $C$ and $D$; it is a child of $C$, and $D$ is a child of $y$. Thus $D$ is still farther from the root than $C$, contradicting its being earlier than $B$. The only possible earlier exposed neighbour is therefore $a$, as required. [F1, F2, F3, step 1.1] ∎
