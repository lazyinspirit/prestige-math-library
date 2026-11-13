---
title: Two-connected subgraphs stay in one incidence-forest piece
status: draft
research_item: lem-two-connected-subgraphs-in-incidence-forest-realisations
dependency_level: 1
---

## Prerequisites

- [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)
- [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)
- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints)


## Statement

If the incidence graph of a finite hypergraph is a forest, every 2-connected subgraph of a graph realised on its hyperedges is contained, as an ordinary subgraph, in one hyperedge piece. Every single edge of the realisation lies in some hyperedge piece.

## Statement references

[def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Facts & Assumptions

[F1] For a finite hypergraph $(V,\mathcal E)$, the incidence graph has a vertex node for each member of $V$, a hyperedge node for each member of $\mathcal E$, and an edge between them exactly when the vertex belongs to the hyperedge. In a realisation $R$, each piece $J_e$ has vertex set $e$, and the edge set of $R$ is the union of the edge sets of the pieces. [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[F2] A forest has no cycle. A path has distinct vertices; a cycle is a closed walk of length at least three with no repeated vertex except its endpoints. Every walk contains a path with the same endpoints. Connectedness means that every pair of vertices is joined by a path. [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F3] A 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any vertex. An ordinary subgraph has both its vertex set and edge set contained in those of the ambient graph. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Proof

**Given:** A finite hypergraph whose incidence graph is a forest, a realisation $R$ with pieces $J_e$, and a 2-connected subgraph $H$ of $R$.

**Goal:** Show that $H$ is a subgraph of one piece and that every edge of $R$ belongs to a piece.

1.1 Every edge of $R$ belongs to a piece by the union defining $R$. Distinct hyperedges have at most one common vertex: two common vertices and the two hyperedge nodes would form a four-edge cycle in the incidence forest. In a forest there is at most one path between any two nodes: otherwise, after following two distinct paths from one endpoint to their first divergence and then to their first subsequent meeting, the two resulting internally disjoint path segments form a cycle. [F1, F2]

2.1 The connected graph $H$ has an edge $xy$; choose a hyperedge $e$ whose piece contains it. Suppose that $H$ has a vertex $z$ outside $e$. A path in $H$ from $x$ to $z$ expands to an incidence walk by replacing each graph edge $ab$ with $a,f,b$, where a piece indexed by $f$ contains $ab$. Thus the node of $z$ is connected to the node of $e$. Let $P$ be their unique incidence path. Its first node after the node of $e$ is a vertex node $v$ with $v\in e$. At least one of $x,y$, say $w$, differs from $v$. The path from $w$ to the node of $e$ is the single incidence edge $w,e$, so uniqueness forces the path from $w$ to $z$ to pass through $v$. Consequently no incidence walk from $w$ to $z$ avoids $v$: such a walk would contain a path avoiding $v$, contrary to uniqueness. [F1, F2, F3, step 1.1]

3.1 Since $H-v$ is connected and contains $w$ and $z$, it has a $w$–$z$ path. Expanding its edges into incidence walks as above gives a walk avoiding the vertex node $v$, a contradiction. Hence every vertex of $H$ lies in $e$. Each edge $ab$ of $H$ belongs to some piece $J_f$; since $a$ and $b$ are distinct members of both $e$ and $f$, step 1.1 gives $f=e$. Thus both the vertex and edge sets of $H$ are contained in those of $J_e$. The final assertion was established in step 1.1. [F1, F2, F3, step 1.1, step 2.1] ∎
