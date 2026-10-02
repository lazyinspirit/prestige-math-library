---
id: lem-euler-double-tree-shortcutting-does-not-increase-cost
kind: lemma
title: "Euler-tour shortcutting of a doubled tree does not increase metric cost"
status: draft
origin: pipeline
deps:
  - def-metric-tsp
  - def-weighted-graph-and-minimum-spanning-tree
  - def-spanning-tree
  - def-euler-trail-and-circuit
  - def-multigraph-and-digraph-degrees-and-connectivity
  - thm-eulers-euler-circuit-characterisation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §2.4 Theorem 2.12 and its proof, printed pp. 45–46"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

In a metric-TSP instance, double every edge of any spanning tree $T$. An Euler
circuit of the resulting connected even-degree multigraph, followed by
first-visit shortcutting, yields a Hamiltonian tour of cost at most $2w(T)$.

## Facts & Assumptions

**Given:** A metric-TSP instance with vertex set $V$, $|V|=n\ge3$, complete graph and nonnegative symmetric rational lengths $d$ satisfying the triangle inequality, and a spanning tree $T$ of the complete graph with total weight $w(T)$.

[F1] Every two distinct vertices are joined by an edge of the complete graph; the lengths are symmetric and nonnegative, $d(u,u)=0$, the triangle inequality $d(u,w)\le d(u,v)+d(v,w)$ holds for all vertices, and a tour is a cyclic ordering of all vertices with cost the sum of consecutive lengths including the closing edge. ([[def-metric-tsp]])

[F2] A spanning tree $T$ of a graph $G$ is a spanning subgraph that is connected and acyclic, equivalently $V(T)=V(G)$, $E(T)\subseteq E(G)$ with $T$ connected and acyclic; its weight is $w(T)=\sum_{e\in E(T)}d(e)$. ([[def-spanning-tree]], [[def-weighted-graph-and-minimum-spanning-tree]])

[F3] An Euler circuit is a closed trail using every edge exactly once. ([[def-euler-trail-and-circuit]])

[F4] A connected finite undirected multigraph has an Euler circuit if and only if every vertex has even degree, where a nonloop edge contributes one to the degree of each endpoint; this includes the edgeless one-vertex multigraph. ([[thm-eulers-euler-circuit-characterisation]], [[def-multigraph-and-digraph-degrees-and-connectivity]])

## Proof

**Proof technique:** direct.

1.1 Form the multigraph $M$ on $V$ whose edge list contains, for each tree edge $e=\{u,v\}\in E(T)$, exactly two parallel edges between $u$ and $v$ with length $d(u,v)$; these are nonloop edges because $u\ne v$. Since $T$ is connected and spanning, so is $M$; each vertex degree is $\deg_M(v)=2\deg_T(v)$, because every nonloop edge contributes one to the degree of each endpoint, hence every degree of $M$ is even; and the total length of the edge list of $M$ is $\sum_{e\in E(T)}2d(e)=2w(T)$. [F2, F4, given, construct]

2.1 By [F4] the multigraph $M$ has an Euler circuit $C$, which by [F3] is a closed trail using every edge of $M$ exactly once, so its total length is the total length $2w(T)$ of the edge list of $M$. Since $n\ge3$ and the spanning tree $T$ is connected, every vertex of $T$ has degree at least one, so every vertex of $V$ occurs on $C$. [F3, F4, step 1.1, algebra]

3.1 Start at the first vertex $v_0$ of $C$ and list the vertices in order of their first visit, obtaining the distinct vertices $v_0=v_{i_1},v_{i_2},\dots,v_{i_n}$ with $\{v_{i_1},\dots,v_{i_n}\}=V$. The closed walk $C$ splits at these first visits into $n$ consecutive segments: for $k=1,\dots,n-1$ the segment from $v_{i_k}$ to $v_{i_{k+1}}$, and the final segment from $v_{i_n}$ back to $v_{i_1}=v_0$. These segments partition the edges of $C$, so their lengths sum to $2w(T)$. [F3, step 2.1, construct]

4.1 Replace each segment by the direct edge joining its two endpoints, which exists because the graph is complete; this gives the cyclic ordering $v_{i_1},v_{i_2},\dots,v_{i_n}$ visiting every vertex exactly once, a feasible Hamiltonian tour. Iterating the triangle inequality along a segment bounds each shortcut edge by the length of that segment, since the metric is symmetric and all lengths are nonnegative; summing over the $n$ segments gives tour cost at most the total length of $C$, namely $2w(T)$. [F1, step 3.1, algebra]

5.1 The construction is explicit: the doubled multigraph is read off the finitely many tree edges, its Euler circuit is obtained by the constructive direction of [F4], and the first-visit scan of the closed walk takes time linear in its length, hence polynomial time in the encoded size of the instance. Therefore first-visit shortcutting of a doubled spanning tree yields a Hamiltonian tour of cost at most $2w(T)$. [step 2.1, step 4.1, algebra] ∎
