---
id: thm-prims-minimum-spanning-tree-algorithm
kind: theorem
title: "Prim's growing-tree procedure produces a minimum spanning tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-weighted-graph-and-minimum-spanning-tree, def-spanning-tree, thm-connected-iff-has-spanning-tree, thm-cut-and-cycle-properties-for-minimum-spanning-trees, lem-spanning-tree-exchange, def-finite-cardinality, lem-finite-set-has-max, thm-induction-principle]
justified_by: []
aliases: [Prim's algorithm]
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Kruskal and other algorithms"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S4.html"
pipeline_run: null
---

## Statement

Let $(G,w)$ be a connected real edge-weighted graph and choose a start vertex. Repeatedly add a minimum-weight edge with exactly one endpoint in the vertices reached so far. With ties broken arbitrarily, after all vertices are reached the chosen edges form a minimum spanning tree.

## Facts & Assumptions

**Given:** A connected finite weighted graph $(G,w)$ and a start vertex $r$.

[L1] $G$ has an MST ([[thm-connected-iff-has-spanning-tree]], [[def-weighted-graph-and-minimum-spanning-tree]]).

[L2] A minimum edge crossing a cut belongs to some MST, and exchanging an outside edge for an edge of its fundamental cycle preserves a spanning tree ([[thm-cut-and-cycle-properties-for-minimum-spanning-trees]], [[lem-spanning-tree-exchange]]).

[F1] A finite nonempty set of crossing-edge weights has a least member, by order duality from [[lem-finite-set-has-max]].

[L3] Induction applies to the finite reached set ([[def-finite-cardinality]], [[thm-induction-principle]]).

[F2] A connected acyclic spanning subgraph is a spanning tree, and an MST is a spanning tree of minimum weight ([[def-spanning-tree]], [[def-weighted-graph-and-minimum-spanning-tree]]).

## Proof

**Proof technique:** induction on the number of reached vertices.

1.1 Maintain the invariant that the chosen edges $F$ are contained in some MST. It holds for $F=\varnothing$ by L1. [base, L1]

1.2 Assume the invariant for the current reached set $S$. If $S$ is not all of $V(G)$, connectedness gives an edge crossing $(S,V(G)\setminus S)$, so a minimum-weight crossing edge $e$ exists. [ih, F1]

2.1 Choose an MST $T$ containing $F$. If $e\notin T$, the $T$-path between the endpoints of $e$ contains an edge $f$ crossing $(S,V(G)\setminus S)$. No edge of $F$ crosses this cut, and $w(e)\le w(f)$, so $T-f+e$ is an MST containing $F+e$. Thus in either case some MST contains $F+e$. [step 1.2, L2]

3.1 Hence the invariant persists, and adding $e$ reaches one new vertex without creating a cycle. [step 2.1, L3]

4.1 After all vertices are reached, $F$ is connected and acyclic with all vertices, so it is a spanning tree. Since an MST contains all its edges, it equals $F$. [step 3.1, F2]

5.1 Thus Prim's procedure returns an MST for every permitted tie-breaking. [step 4.1, discharge-induction] ∎
