---
id: lem-co-bird-free-path-plus-isolate-witness-obstruction
title: "The path-plus-isolate co-Bird obstruction"
kind: lemma
status: draft
origin: pipeline
deps: ["def-bird-graph-and-co-bird-graph", "def-edges-between-sets-and-pure-mixed-pairs", "def-h-free-and-family-free-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.1(2), Figure 9"
      url: https://arxiv.org/html/2606.06258v2
    - title: "Diestel, Graph Theory, Chapter 1, §§1.1 and 1.4 (foundations)"
      url: https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf
---

## Statement

Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

## Facts & Assumptions

[F1] [[def-bird-graph-and-co-bird-graph]] supplies the following definition: The **Bird graph** is the graph on vertices $\{x_1,x_2,x_3,y,z,w\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$ So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.

[F2] [[def-edges-between-sets-and-pure-mixed-pairs]] supplies the following definition: Let $G$ be a finite simple graph and let $A,B\subseteq V(G)$ be disjoint. An **edge between $A$ and $B$** is an edge $ab$ with $a\in A$ and $b\in B$. The pair $(A,B)$ is: - **complete** when every $a\in A$ is adjacent to every $b\in B$; - **anticomplete** when no $a\in A$ is adjacent to any $b\in B$; - **pure** when it is complete or anticomplete; and - **mixed** when it is neither complete nor anticomplete. Adjacency is the symmetric edge relation of $G$ (def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree). If $A=\varnothing$ or $B=\varnothing$, the pair is both complete and anticomplete, hence pure and not mixed.

[F3] [[def-h-free-and-family-free-graph]] supplies the following definition: For finite graphs $H$ and $G$, the graph $G$ is **$H$-free** when $G$ has no induced copy of $H$ (def-induced-embedding-and-induced-copy). Equivalently, $\operatorname{ind}_H(G)=0$ (def-induced-copy-number). For a family $\mathcal F$ of finite graphs, a finite graph $G$ is **$\mathcal F$-free** when it is $H$-free for every $H\in\mathcal F$. Throughout this page, “free” always refers to induced subgraphs. It does not merely prohibit ordinary subgraph copies.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 Reverse the path if necessary to write the prohibited neighbourhood as $N(u)\cap H=\{b,c,d\}$. Completeness of $y$ and the prescribed path give exactly the edges $ya,yb,yc,yd,ub,uc,ud,ab,bc$ on $(y,u,a,b,c,d)$. [given, F2]

1.2 The six remaining pairs are $yu,ua,ac,ad,bd,cd$. Under $(y,u,a,b,c,d)\mapsto(w,y,x_1,z,x_3,x_2)$ they map to $wy,yx_1,x_1x_3,x_1x_2,zx_2,x_3x_2$. [given]

2.1 These are exactly the six Bird edges; the other nine pairs are therefore exactly co-Bird edges. The induced copy is forbidden. [F1, F3] ∎
