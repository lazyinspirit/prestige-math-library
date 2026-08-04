---
id: thm-kruskals-minimum-spanning-tree-algorithm
kind: theorem
title: "Kruskal's greedy edge procedure produces a minimum spanning tree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-weighted-graph-and-minimum-spanning-tree, thm-connected-iff-has-spanning-tree, lem-fundamental-cycle-of-a-spanning-tree, lem-spanning-tree-exchange, def-finite-cardinality, thm-induction-principle]
justified_by: []
aliases: [Kruskal's algorithm]
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

Let $(G,w)$ be a connected real edge-weighted graph. Start with the edgeless spanning forest, repeatedly add a minimum-weight edge whose addition creates no cycle, and stop when no such edge remains. With ties broken arbitrarily, the output is a minimum spanning tree.

## Facts & Assumptions

**Given:** A connected finite weighted graph $(G,w)$.

[L1] $G$ has a spanning tree, and hence an MST ([[thm-connected-iff-has-spanning-tree]], [[def-weighted-graph-and-minimum-spanning-tree]]).

[L2] Spanning-tree exchanges preserve spanning trees ([[lem-spanning-tree-exchange]]).

[L3] Induction is valid over the finitely many chosen edges ([[def-finite-cardinality]], [[thm-induction-principle]]).

[L4] Adding an edge outside a spanning tree creates a unique fundamental cycle ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[F1] $G$ is connected, and a connected acyclic spanning subgraph is a spanning tree.

[F2] Kruskal chooses a least-weight edge among the currently eligible edges.

## Proof

**Proof technique:** induction on the number of chosen edges.

1.1 Maintain the invariant that the current forest $F$ is contained in some MST. It holds initially by L1. [base, L1]

1.2 Suppose $F\subseteq T$ for an MST $T$, and Kruskal chooses $e$. If $e\in T$, the invariant persists. [ih]

2.1 If $e\notin T$, let $C$ be its fundamental cycle in $T+e$. Some edge $f\in E(C)\setminus\{e\}$ is not in $F$; otherwise the $T$-path $C-e$ would lie in $F$ and adding $e$ to $F$ would create a cycle. Since $F+f$ is a subgraph of the acyclic tree $T$, the edge $f$ is eligible for Kruskal. [step 1.2, L4]

3.1 At the moment $e$ is chosen, $f$ is eligible, so $w(e)\le w(f)$. The exchange $T-f+e$ is a spanning tree of no greater weight, hence an MST containing $F+e$. [step 2.1, L2, F2]

4.1 Thus the invariant holds after every choice. [step 1.2, step 3.1, L3]

5.1 On termination, $F$ must be connected: otherwise a path of $G$ between two components of $F$ would contain a first edge joining distinct components, and that edge would still be eligible. Thus $F$ is a spanning tree. The invariant then forces $F$ itself to be an MST. [step 4.1, F1, L1]

6.1 Therefore every tie-breaking execution returns a minimum spanning tree. [step 5.1, discharge-induction] ∎
