---
id: def-cutvertex-and-nontrivial-block-system
kind: definition
title: Cutvertices, 2-connected pieces and nontrivial blocks
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-connected-graph-and-connected-component
  - math:cor-connected-components-partition-the-vertex-set
  - math:def-graph-walk-trail-path-and-cycle
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-graph-deletion-contraction-minor-and-subdivision
  - math:def-bridge-in-a-graph
  - math:def-finite-cardinality
  - math:cor-cardinality-of-the-power-set
  - math:thm-subset-of-a-finite-set
  - math:thm-product-rule
  - math:thm-induction-principle
  - math:thm-nat-linear-order
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:cor-connected-components-partition-the-vertex-set: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-graph-deletion-contraction-minor-and-subdivision: mathematical-premise
  math:def-bridge-in-a-graph: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:cor-cardinality-of-the-power-set: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:thm-product-rule: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:thm-nat-linear-order: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Definition

All graphs here are finite and simple. A cutvertex of a graph is a vertex whose deletion increases the number of connected components. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. A maximal 2-connected subgraph is a 2-connected subgraph not properly contained, as a subgraph, in another 2-connected subgraph of the same graph.

The nontrivial blocks of a graph are its maximal 2-connected subgraphs and the two-vertex, one-edge subgraphs consisting of its bridges and their endpoints. The order of a graph is its number of vertices. For a nonempty graph $J$ with an edge, $b(J)$ is the largest order of a nontrivial block of $J$; if $J$ has no edges, set $b(J)=1$. Isolated vertices are not nontrivial blocks.

## Definition references

[[math:def-finite-simple-graph]]

[[math:def-connected-graph-and-connected-component]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-graph-deletion-contraction-minor-and-subdivision]]

[[math:def-bridge-in-a-graph]]

[[math:def-finite-cardinality]]

## Facts & Assumptions

[F1] A finite simple graph has a finite vertex set $V$ and an edge set $E$ consisting of two-element subsets of $V$; a subgraph is specified by a vertex subset and an edge subset with both endpoints of each retained edge retained. [[math:def-finite-simple-graph]] [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[F2] Components partition the vertices, and two vertices are in the same component precisely when a path joins them. A path has distinct vertices, with consecutive vertices joined by edges. [[math:def-connected-graph-and-connected-component]] [[math:cor-connected-components-partition-the-vertex-set]] [[math:def-graph-walk-trail-path-and-cycle]]

[F3] Deleting a vertex removes it and its incident edges; deleting an edge removes only that edge. A bridge is an edge whose deletion increases the component count. [[math:def-graph-deletion-contraction-minor-and-subdivision]] [[math:def-bridge-in-a-graph]]

[F4] The order of a finite graph is the finite cardinality of its vertex set. A finite set of cardinality $n$ admits a listing without repetition indexed by $0,\ldots,n-1$, and a bijection transports finiteness and cardinality. [[math:def-finite-cardinality]]

[F5] Write $\mathcal P(A)$ for the set of subsets of $A$ and $A\times B$ for the set of ordered pairs with coordinates in $A$ and $B$. The power set of a finite set is finite. A subset of a finite set is finite and has no larger cardinality, with equality precisely when it is the whole set. The Cartesian product of two finite sets is finite. [[math:cor-cardinality-of-the-power-set]] [[math:thm-subset-of-a-finite-set]] [[math:thm-product-rule]]

[F6] A property holding at $0$ and inherited by successors holds at every natural number. The natural-number order is reflexive, antisymmetric, transitive and total. [[math:thm-induction-principle]] [[math:thm-nat-linear-order]]

## Justification

**Given:** A nonempty finite simple graph $J=(V,E)$.

**Goal:** The stated constructions are unambiguous and $b(J)$ is defined in both cases.

1.1 The component partition, deletions, connectivity and subgraph containment determine the cutvertex, 2-connected and maximality predicates. A bridge has two distinct endpoints, so its endpoint subgraph is uniquely specified. Component vertex sets form a subfamily of $\mathcal P(V)$, which is finite, so their number is a finite cardinality. [F1, F2, F3, F4, F5]

1.2 Since $E\subseteq\mathcal P(V)$, the edge set is finite. Hence $\mathcal P(V)$ and $\mathcal P(E)$ are finite, and so is their Cartesian product. The family of subgraphs of $J$, identified with their vertex-set and edge-set pairs, is a subset of this product and is therefore finite. Every subfamily, including the nontrivial blocks and the 2-connected subgraphs containing any fixed subgraph, is finite. Their vertex and edge sets are finite subsets of $V$ and $E$, so their orders and edge counts are defined natural numbers. [F1, F4, F5]

1.3 A nonempty finite family with a natural-number score has a member of largest score. To prove this, use a finite listing from F4 and induction from F6 on its length: the assertion that the list is empty or has a largest-scoring entry holds for length zero. On adjoining one entry to an empty list, that entry is largest. On adjoining an entry of score $x$ to a list whose largest score is $m$, retain the old entry if $x\le m$ and otherwise retain the new entry; totality and transitivity ensure that the retained score dominates all entries. Thus induction proves the assertion for every finite list, and a nonempty family's listing yields the desired member. [F4, F6]

2.1 Suppose $J$ has an edge $e=uv$. If $e$ is a bridge, its endpoint subgraph is a nontrivial block. Otherwise $u$ and $v$ lie in the same component of $J-e$: if they did not, every path in $J$ between vertices in different components of $J-e$ would have to use $e$, and adding that edge could merge its two endpoint components but no others, increasing the component count upon deletion. Choose a path from $u$ to $v$ in $J-e$. Its length is at least two, since $J$ is simple and $e$ has been removed, so together with $e$ it forms a simple cycle of at least three vertices. That cycle is connected and, after any one vertex is removed, its remaining vertices are joined along the remaining path; it is therefore a 2-connected subgraph. [F1, F2, F3, step 1.1]

3.1 In the nonbridge case, the family of 2-connected subgraphs containing the cycle from step 2.1 is nonempty and finite. By step 1.3 choose among them a subgraph with largest vertex count, and among the subgraphs attaining that vertex count choose $K$ with largest edge count. These subfamilies are finite by F5. If $K$ were a proper subgraph of a 2-connected subgraph $L$ of $J$, then $L$ would still contain the cycle. Vertex containment and F5 force either a larger vertex count for $L$, contradicting the first choice, or equal vertex sets; in the latter case proper containment forces a proper edge-set inclusion and a larger edge count by F5, contradicting the second choice. Thus $K$ is maximal under subgraph containment and is a nontrivial block. [F1, F4, F5, step 1.2, step 1.3, step 2.1]

4.1 Consequently the nontrivial block family is nonempty whenever $J$ has an edge. It is finite by step 1.2, so step 1.3 applied to vertex order gives a largest block order. Any two largest orders coincide by antisymmetry from F6, defining $b(J)$ uniquely. When $J$ has no edges, the separately specified value $1$ is unambiguous. [F4, F6, step 1.2, step 1.3, step 2.1, step 3.1] ∎
