---
id: thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp
kind: theorem
title: "Double-tree shortcutting is a 2-approximation for metric TSP"
status: published
origin: pipeline
deps:
  - def-metric-tsp
  - def-weighted-graph-and-minimum-spanning-tree
  - def-connected-graph-and-connected-component
  - thm-kruskals-minimum-spanning-tree-algorithm
  - lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp
  - lem-euler-double-tree-shortcutting-does-not-increase-cost
  - def-optimization-problem-and-approximation-ratio
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §2.4 Theorem 2.12 with proof, printed pp. 45–46"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Compute a minimum spanning tree $T$ of the complete metric graph, double its
edges, traverse the resulting closed Euler walk and shortcut repeated vertices
in first-visit order. The resulting Hamiltonian tour is found in polynomial
time and has cost at most $2w(T)\le2\operatorname{OPT}_{\mathrm{TSP}}$.

## Facts & Assumptions

**Given:** A metric-TSP instance with $n\ge3$ vertices, complete graph and nonnegative symmetric rational lengths satisfying the triangle inequality, and optimum tour cost $\operatorname{OPT}_{\mathrm{TSP}}$.

[F1] A tour is a cyclic ordering visiting every vertex exactly once and its cost sums the consecutive lengths including the closing edge; the complete graph joins every two distinct vertices; $\operatorname{OPT}_{\mathrm{TSP}}$ is the attained minimum over the finitely many tours. ([[def-metric-tsp]])

[F2] A minimum spanning tree of a connected weighted graph is a spanning tree $T$ with $w(T)\le w(S)$ for every spanning tree $S$, where $w(T)$ sums the lengths of the edges of $T$. ([[def-weighted-graph-and-minimum-spanning-tree]])

[F3] A graph is connected when its vertex set is nonempty and every two of its vertices are joined by a path. ([[def-connected-graph-and-connected-component]])

[F4] Kruskal's algorithm, starting from the edgeless spanning forest and repeatedly adding a minimum-weight edge that creates no cycle until no such edge remains, outputs a minimum spanning tree of a connected weighted graph; arbitrary tie-breaking preserves correctness. ([[thm-kruskals-minimum-spanning-tree-algorithm]])

[F5] For a metric-TSP instance and a minimum spanning tree $T$ of its complete graph, $w(T)\le\operatorname{OPT}_{\mathrm{TSP}}$. ([[lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp]])

[F6] Doubling the edges of a spanning tree $T$, traversing an Euler circuit of the resulting connected even-degree multigraph and shortcutting in first-visit order yields a Hamiltonian tour of cost at most $2w(T)$. ([[lem-euler-double-tree-shortcutting-does-not-increase-cost]])

[F7] A polynomial-time $2$-approximation for a minimization problem returns, on every instance, a feasible solution of value at most twice the attained optimum; the comparison is a value inequality. ([[def-optimization-problem-and-approximation-ratio]])

## Proof

**Proof technique:** direct.

1.1 The complete graph on the vertex set of the instance, with the given lengths, is a finite connected real edge-weighted graph: the vertex set is nonempty because $n\ge3$, and any two distinct vertices are adjacent, hence joined by the one-edge path consisting of that edge. All edge lengths are nonnegative rationals by the metric convention. [F1, F3, given, algebra]

2.1 Run Kruskal's algorithm on this weighted graph, breaking ties by a fixed order of the finitely many edges. By [F4] it outputs a minimum spanning tree $T$. This run is polynomial time on the explicit rational input: there are at most $|E|$ additions, and each round can scan all edges, test eligibility by graph search, and compare the encoded rational lengths using polynomial bit arithmetic. By [F2], $T$ has minimum total weight among spanning trees. [F1, F2, F4, step 1.1, construct]

3.1 Double every edge of $T$, obtaining the connected multigraph in which every vertex degree is twice its degrees in $T$, hence even; take an Euler circuit of this multigraph and shortcut repeated vertices in first-visit order. By [F6] the result is a Hamiltonian tour of the instance whose cost is at most $2w(T)$, and the doubling, traversal and first-visit scan take polynomial time in the size of the explicit graph. [F6, step 2.1, construct]

3.2 The same tree $T$ is a minimum spanning tree of the complete weighted graph, so [F5] gives the lower bound $w(T)\le\operatorname{OPT}_{\mathrm{TSP}}$. [F5, step 2.1, algebra]

4.1 The tour returned in step 3.1 is feasible and has cost at most $2w(T)\le2\operatorname{OPT}_{\mathrm{TSP}}$ by step 3.2. The algorithm is deterministic polynomial time by steps 2.1 and 3.1, with all ties resolved by fixed finite orders. By [F7] it is a polynomial-time $2$-approximation for metric TSP. [F4, F6, F7, step 2.1, step 3.1, step 3.2] ∎
