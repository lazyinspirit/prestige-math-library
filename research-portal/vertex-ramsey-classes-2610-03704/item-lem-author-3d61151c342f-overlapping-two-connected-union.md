---
title: Union closure for overlapping 2-connected subgraphs
status: published
research_item: lem-author-3d61151c342f-overlapping-two-connected-union
dependency_level: 1
---

## Prerequisites

- [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)
- [math:lem-unions-and-intersections-of-small-families](https://alphabetamath.cc/item/lem-unions-and-intersections-of-small-families)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints)
- [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)


## Statement

If two 2-connected subgraphs $A$ and $B$ of a finite simple graph have at least two common vertices, their union is 2-connected.

Here the graph union is defined by $A\cup B:=(V(A)\cup V(B),E(A)\cup E(B))$, using binary set union for both coordinates.

## Facts & Assumptions

[F1] A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F2] A finite simple graph has a finite vertex set and edges that are two-element subsets of that set. A subgraph has a subset of the ambient vertex set and a subset of the ambient edges, with both endpoints of every edge in its vertex set. Every subset of a finite set is finite. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph) [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[F3] Binary set union is defined for any two sets; an element belongs to $S\cup T$ exactly when it belongs to $S$ or to $T$. [math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union) [math:lem-unions-and-intersections-of-small-families](https://alphabetamath.cc/item/lem-unions-and-intersections-of-small-families)

[F4] A graph is connected when it is nonempty and every two vertices are joined by a path. A walk is a finite vertex list whose consecutive vertices are adjacent; a path has no repeated vertex, and a one-vertex list is a path of length zero. Every walk contains a path between its endpoints. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints)

[F5] Deleting a vertex removes that vertex and precisely the edges incident with it, leaving the induced subgraph on the remaining vertices. [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

## Proof

**Given:** The graphs and overlap hypothesis in the Statement.

**Goal:** The graph union defined there is 2-connected.

1.1 Write $G$ for the finite simple ambient graph and $U=A\cup B$ for the graph specified in the Statement. Every vertex of $U$ lies in $G$, so its vertex set is finite. Each edge of $U$ is an edge of $A$ or $B$, hence is an edge of $G$ with two distinct endpoints in $V(U)$. Thus $U$ is a finite simple subgraph of $G$ containing both $A$ and $B$. In particular, it has at least three vertices. [given, F1, F2, F3]

2.1 Choose a common vertex $z$ of $A$ and $B$. For arbitrary $u,v\in V(U)$, choose one of $A,B$ containing $u$ and one containing $v$. Both chosen subgraphs also contain $z$ and are connected, so they supply a path from $u$ to $z$ and a path from $z$ to $v$. Concatenate their vertex lists, listing the joint vertex $z$ only once. Consecutive vertices are adjacent in $U$, so the result is a walk, even if other vertices repeat. The walk-to-path result yields a path from $u$ to $v$ in $U$. Therefore $U$ is connected. [given, F1, F3, F4, step 1.1]

2.2 Fix any $x\in V(U)$. For $C=A$ or $C=B$, let $C_x=C-x$ if $x\in V(C)$, and let $C_x=C$ otherwise. The vertices of $A_x\cup B_x$ are exactly the vertices of $U$ other than $x$. An edge belongs to $A_x\cup B_x$ exactly when it belongs to at least one of $A,B$ and is not incident with $x$; these are exactly the edges of $U-x$. Hence $U-x=A_x\cup B_x$. [given, F3, F5, step 1.1]

3.1 Each of $A_x,B_x$ is connected: when $x$ belongs to the original subgraph this follows from 2-connectivity, and otherwise that connected subgraph is unchanged. Of the at least two common vertices of $A$ and $B$, at least one is different from $x$ and remains in both $A_x$ and $B_x$. The path-concatenation and walk-to-path argument of step 2.1, through this surviving common vertex, therefore connects every pair of vertices of $A_x\cup B_x$. By step 2.2 this says that $U-x$ is connected. Since $x$ was arbitrary and $U$ is connected with at least three vertices, $U$ is 2-connected. [given, F1, F4, step 1.1, step 2.1, step 2.2] ∎
