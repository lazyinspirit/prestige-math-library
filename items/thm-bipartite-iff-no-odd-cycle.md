---
id: thm-bipartite-iff-no-odd-cycle
kind: theorem
title: "A finite graph is bipartite if and only if it has no odd cycle"
status: published
origin: session
deps: [def-bipartite-graph, lem-an-odd-closed-walk-contains-an-odd-cycle, lem-graph-reachability-is-an-equivalence-relation, cor-connected-components-partition-the-vertex-set, def-connected-graph-and-connected-component, def-graph-distance-and-girth]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement

A finite simple graph is bipartite if and only if it contains no cycle of odd
length.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$.

[F1] A bipartition is an ordered pair $(A,B)$ of disjoint subsets with $V=A\cup B$ and every edge running between its two parts ([[def-bipartite-graph]]).

[L1] Every odd closed walk contains an odd cycle ([[lem-an-odd-closed-walk-contains-an-odd-cycle]]).

[F2] Path-reachability is an equivalence relation, and its equivalence classes are the connected components; hence two vertices lie in the same component exactly when a path joins them. Every such path has a length and therefore a parity ([[lem-graph-reachability-is-an-equivalence-relation]], [[def-connected-graph-and-connected-component]], [[def-graph-distance-and-girth]]).

[L2] The connected components are nonempty, cover the vertex set, and are pairwise equal or disjoint ([[cor-connected-components-partition-the-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ has a bipartition $(A,B)$. Along any walk the successive vertices alternate between $A$ and $B$, so a closed walk returns to its initial part only after an even number of edges. In particular, every cycle has even length. [F1]

1.2 Conversely, suppose $G$ has no odd cycle. Then by [L1] it has no odd closed walk. [given, L1]

2.1 Let $C$ be an arbitrary connected component. It is nonempty by [L2], so fix a root $r\in C$. Put $A_C$ equal to the vertices joined to $r$ by an even-length path and $B_C$ equal to those joined to $r$ by an odd-length path. Every vertex of $C$ lies in at least one of these sets by [F2]. This construction is vacuous when the graph has no components. [step 1.2, F2, L2, choose]

3.1 The sets $A_C$ and $B_C$ are disjoint: an even $r$ to $v$ path followed by the reverse of an odd $r$ to $v$ path would be an odd closed walk, contrary to step 1.2. [step 1.2, step 2.1]

4.1 Every edge $\{u,v\}$ inside $C$ runs between $A_C$ and $B_C$. Otherwise choose paths from $r$ to $u$ and from $r$ to $v$ having the common parity of their class. Traversing the first path, the edge $\{u,v\}$, and the reverse of the second path gives an odd closed walk, contrary to step 1.2. [step 1.2, step 2.1, step 3.1]

5.1 By [L2], the connected components partition the finite vertex set and therefore form a finite family. Repeating this construction for each component and taking $A$ and $B$ to be the unions of their respective parts gives disjoint sets with $V=A\cup B$. The endpoints of an edge are joined by that one-edge path and hence lie in one component by [F2], so every edge runs between the two global parts. Thus $(A,B)$ is a bipartition. [step 2.1, step 3.1, step 4.1, F1, F2, L2]

6.1 Step 1.1 proves that bipartite graphs have no odd cycle, and steps 1.2 to 5.1 prove the converse. [step 1.1, step 5.1] ∎
