---
id: thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected
kind: theorem
title: "Every nontrivial $P_4$-free graph is disconnected or has disconnected complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-graph-isomorphism-and-complement, thm-every-nontrivial-graph-is-connected-or-anticonnected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Exercise 1.1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
    - title: "Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé, The Erdős-Hajnal Conjecture for Paths and Antipaths"
      url: "https://arxiv.org/html/1303.5205v3"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph with at least two vertices. If $G$ is
$P_4$-free, then $G$ is disconnected or $\overline G$ is disconnected.
Equivalently, no nontrivial $P_4$-free graph is both connected and
anticonnected.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with $|V(G)|\ge 2$ that is $P_4$-free.

[L1] Every finite graph with at least two vertices is connected or anticonnected ([[thm-every-nontrivial-graph-is-connected-or-anticonnected]]).

[L2] A graph is anticonnected exactly when its complement is connected ([[def-anticonnected-graph-and-anticonnected-component]]).

[L3] Being $P_4$-free means containing no induced copy of the four-vertex path $P_4$ ([[def-h-free-and-family-free-graph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F1] In a connected graph every vertex has a neighbour, and if $\overline G$ is connected then no vertex of $G$ is adjacent to all other vertices ([[def-connected-graph-and-connected-component]], [[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], if $G$ is disconnected then the first alternative of the Statement already holds. Assume instead that $G$ is connected. [L1, given]

1.2 Suppose for contradiction that $G$ is also anticonnected. Then [L2] makes $\overline G$ connected. Choose a vertex $v\in V(G)$. Because $G$ is connected and nontrivial, [F1] gives a neighbour $x$ of $v$. Because $\overline G$ is connected, [F1] also gives a vertex $y$ nonadjacent to $v$. Among all pairs $(a,b)$ with $va\in E(G)$ and $vb\notin E(G)$, choose one for which the distance from $a$ to $b$ in $G$ is minimal. Let
$$a=u_0,u_1,\dots,u_m=b$$
be a shortest $a$-$b$ path in $G$. [step 1.1, L2, F1, choose, assume-contra]

2.1 Since $a$ and $b$ are nonadjacent, one has $m\ge 2$. A shortest path is induced, so $u_0u_2\notin E(G)$ and no nonconsecutive pair among $u_0,u_1,\dots,u_m$ is adjacent. If some $u_i$ with $1\le i<m$ were adjacent to $v$, then $(u_i,b)$ would be another neighbour/nonneighbour pair for $v$ whose distance is $m-i<m$, contradicting the choice in step 1.2. Hence $vu_1,vu_2\notin E(G)$. [step 1.2, algebra]

3.1 The four vertices $v,u_0,u_1,u_2$ therefore induce a path: the edges are $vu_0$, $u_0u_1$, and $u_1u_2$, while the nonedges are $vu_1$, $vu_2$, and $u_0u_2$. This is an induced copy of $P_4$, contradicting [L3]. [step 2.1, L3, discharge-contradiction]

4.1 So a nontrivial $P_4$-free graph cannot be both connected and anticonnected. Since step 1.1 reduced to the connected case, [L2] shows that whenever $G$ is connected, $\overline G$ must be disconnected. [step 1.1, step 3.1, L2] ∎
