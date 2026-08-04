---
id: thm-tree-characterisations
kind: theorem
title: "Equivalent characterisations of a nonempty tree by unique paths, edge count, minimal connectivity and maximal acyclicity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-tree-forest-and-leaf, thm-forest-edge-component-count, cor-tree-edge-count, lem-edge-deletion-in-a-tree, lem-edge-addition-to-a-tree, def-subgraph-induced-subgraph-and-spanning-subgraph, def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
pipeline_run: null
---

## Statement

For a finite nonempty graph $G$, the following are equivalent:

1. $G$ is a tree.
2. Every two vertices are joined by a unique path.
3. $G$ is connected and $|E(G)|=|V(G)|-1$.
4. $G$ is acyclic and $|E(G)|=|V(G)|-1$.
5. $G$ is minimally connected: it is connected, but deleting any edge disconnects it.
6. $G$ is maximally acyclic: it is acyclic, but adding any missing edge creates a cycle.

## Facts & Assumptions

**Given:** A finite nonempty graph $G$.

[L1] Forests satisfy $|V|=|E|+c$, and trees satisfy $|E|=|V|-1$ ([[thm-forest-edge-component-count]], [[cor-tree-edge-count]]).

[L2] Deleting a tree edge disconnects the tree, and adding a missing edge to a tree creates one cycle ([[lem-edge-deletion-in-a-tree]], [[lem-edge-addition-to-a-tree]]).

[F1] A tree is connected and acyclic ([[def-tree-forest-and-leaf]]).

[F2] Connectedness and paths use the standard graph meanings ([[def-connected-graph-and-connected-component]], [[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct cycle of implications.

1.1 If $G$ is a tree, connectedness supplies a path between each two vertices, and two distinct paths would contain a cycle. Thus condition 1 implies condition 2. [F1, F2]

1.2 Under condition 2, $G$ is connected. Deleting any edge $uv$ leaves no $u$-$v$ path, because such a path together with $uv$ would give a second path in $G$. Thus condition 2 implies condition 5. [F2]

1.3 Suppose condition 5 holds. If $G$ contained a cycle, deleting one edge of that cycle would leave its endpoints joined around the rest of the cycle and would not disconnect $G$. Hence $G$ is acyclic and therefore is a tree. Thus condition 5 implies condition 1. [F2, F1]

1.4 Condition 1 implies condition 3 by the tree edge count. [L1]

1.5 Under condition 3, suppose $G$ had a cycle. Repeatedly delete an edge from a cycle; each deletion preserves connectedness, and finiteness makes the process stop at a connected acyclic spanning graph $T$. At least one edge was deleted, so $|E(T)|<|V(G)|-1$, while the forest identity with one component gives $|E(T)|=|V(G)|-1$, a contradiction. Hence condition 3 implies condition 1. [L1, F2]

1.6 Under condition 4, the forest identity gives $|V|=(|V|-1)+c$, so $c=1$ and $G$ is a tree. Conversely condition 1 implies condition 4 by definition and the tree edge count. [L1, F1]

1.7 Condition 1 implies condition 6 by edge addition. [L2]

1.8 Under condition 6, if $G$ were disconnected, vertices in different components would be nonadjacent and adding an edge between them could create no cycle. Hence $G$ is connected, and its assumed acyclicity makes it a tree. [F1, F2]

2.1 All six conditions are therefore equivalent. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8] ∎
