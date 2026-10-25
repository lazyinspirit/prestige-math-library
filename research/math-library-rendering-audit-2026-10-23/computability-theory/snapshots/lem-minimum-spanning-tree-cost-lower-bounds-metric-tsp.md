---
id: lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp
kind: lemma
title: "A minimum spanning tree lower-bounds metric-TSP optimum"
status: published
origin: pipeline
deps:
  - def-metric-tsp
  - def-weighted-graph-and-minimum-spanning-tree
  - def-spanning-tree
  - thm-connected-iff-has-spanning-tree
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §2.4 Lemma 2.10 and its proof, printed pp. 44–45"
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

For a metric-TSP instance, let $T$ be a minimum spanning tree of its complete
weighted graph. Then $w(T)\le\operatorname{OPT}_{\mathrm{TSP}}$.

## Facts & Assumptions

**Given:** A metric-TSP instance with vertex set $V$, $|V|=n\ge3$, complete graph $K$ on $V$, nonnegative symmetric rational lengths $d$, and the optimal tour cost $\operatorname{OPT}_{\mathrm{TSP}}$; and a minimum spanning tree $T$ of $K$ of weight $w(T)$.

[F1] A feasible tour is a cyclic ordering $v_{\pi(1)},\dots,v_{\pi(n)}$ visiting every vertex exactly once, its cost sums the consecutive lengths including the closing edge, and $\operatorname{OPT}_{\mathrm{TSP}}$ is the minimum of these costs, attained over the finitely many cyclic orderings; all lengths are nonnegative and every two distinct vertices are joined by an edge. ([[def-metric-tsp]])

[F2] A minimum spanning tree of a connected weighted graph $G$ is a spanning tree $T$ with $w(T)\le w(S)$ for every spanning tree $S$ of $G$, where $w(T)=\sum_{e\in E(T)}d(e)$. ([[def-weighted-graph-and-minimum-spanning-tree]])

[F3] A finite graph is connected if and only if it has a spanning tree, and a spanning tree of $G$ is a spanning subgraph with $V(S)=V(G)$, $E(S)\subseteq E(G)$ that is connected and acyclic. ([[thm-connected-iff-has-spanning-tree]], [[def-spanning-tree]])

## Proof

**Proof technique:** direct.

1.1 Take an optimal tour and write its cyclic ordering as $v_1,v_2,\dots,v_n$ with the closing edge $\{v_n,v_1\}$, so $\sum_{i=1}^{n-1}d(v_i,v_{i+1})+d(v_n,v_1)=\operatorname{OPT}_{\mathrm{TSP}}$. Delete the closing edge and let $Q$ be the subgraph of $K$ with vertex set $V$ and edge set $\{v_1v_2,v_2v_3,\dots,v_{n-1}v_n\}$. The subgraph $Q$ spans $V$ and is connected: for $i<j$ the walk $v_i,v_{i-1},\dots,v_1,v_2,\dots,v_j$ lies in $Q$ and joins $v_i$ to $v_j$. Its total length is $w(Q)=\sum_{i=1}^{n-1}d(v_i,v_{i+1})=\operatorname{OPT}_{\mathrm{TSP}}-d(v_n,v_1)\le\operatorname{OPT}_{\mathrm{TSP}}$, because lengths are nonnegative. [F1, given, construct]

2.1 Since $Q$ is a finite connected graph, [F3] provides a spanning tree $S$ of $Q$ with $V(S)=V$ and $E(S)\subseteq E(Q)$. All lengths are nonnegative, so deleting edges cannot increase total length and $w(S)=\sum_{e\in E(S)}d(e)\le\sum_{e\in E(Q)}d(e)=w(Q)\le\operatorname{OPT}_{\mathrm{TSP}}$. In particular $S$ is also a spanning tree of the complete graph $K$, since $E(S)\subseteq E(Q)\subseteq E(K)$ and $V(S)=V$. [F1, F3, step 1.1, algebra]

3.1 The tree $T$ is a minimum spanning tree of the complete graph $K$, and $S$ is a spanning tree of $K$, so by [F2] $w(T)\le w(S)\le\operatorname{OPT}_{\mathrm{TSP}}$. [F2, step 2.1, algebra]

4.1 Therefore every metric-TSP instance satisfies $w(T)\le\operatorname{OPT}_{\mathrm{TSP}}$ for a minimum spanning tree $T$ of its complete weighted graph. The argument uses one optimal tour only as a comparison object; it computes no optimal tour and gives a lower bound on $\operatorname{OPT}_{\mathrm{TSP}}$, not an upper bound. [step 1.1, step 3.1, algebra] ∎
