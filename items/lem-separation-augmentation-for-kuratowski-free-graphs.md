---
id: lem-separation-augmentation-for-kuratowski-free-graphs
kind: lemma
title: "An edge-maximal graph excluding subdivisions of $K_5$ and $K_{3,3}$ augments each proper separation without creating either obstruction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kuratowski-minors-are-topological-minors, def-vertex-and-edge-connectivity, def-subgraph-induced-subgraph-and-spanning-subgraph, thm-menger-finite-directed-and-undirected-path-forms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.4.4"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $G$ be edge-maximal among graphs containing no subdivision of $K_5$ or $K_{3,3}$. If $(V_1,V_2)$ is a proper separation of minimum order at most two, then its separator has two vertices $x,y$, the edge $xy$ belongs to $G$, and each induced side $G[V_i]$ is itself edge-maximal without either subdivision. Separations and induced subgraphs are [[def-vertex-and-edge-connectivity]] and [[def-subgraph-induced-subgraph-and-spanning-subgraph]]; obstruction terminology agrees with [[lem-kuratowski-minors-are-topological-minors]].

## Facts & Assumptions

**Given:** Such $G$ and a minimum proper separation $(V_1,V_2)$ with separator $S=V_1\cap V_2$.

[L1] The maximum number of internally vertex-disjoint paths between two vertices equals the minimum size of a separating vertex set ([[thm-menger-finite-directed-and-undirected-path-forms]]).

[L2] A graph has a $K_5$ or $K_{3,3}$ minor exactly when it contains a subdivision of one of them ([[lem-kuratowski-minors-are-topological-minors]]).



## Proof

**Proof technique:** direct.

1.1 Minimum order implies every vertex of $S$ has a neighbour in every component on either proper side; otherwise deleting that vertex from $S$ would give a smaller separator. Since both obstructions are three-connected, any subdivision created by adding an edge across this separation has all branch vertices on one side and meets the other side only in a path replacing one obstruction edge. [given, L1, L2]

2.1 If $S$ were empty, adding an edge across the two sides and then replacing its portion through the opposite side would put the same obstruction in $G$. If $S=\{v\}$, join neighbours of $v$ from opposite sides; the replacement argument again puts any created obstruction in $G$. Edge maximality rules out both cases. Thus $S=\{x,y\}$. [step 1.1, L1]

3.1 If $xy$ were absent, add it. Any resulting forbidden subdivision can replace $xy$ by an $x$-$y$ path through the opposite proper side, again yielding the subdivision in $G$. Therefore $xy\in E(G)$. [step 2.1, L2]

4.1 Finally add any missing edge within one induced side. A resulting obstruction either lies in that side, proving its edge maximality, or uses the other side only as an $x$-$y$ path; replace that path by the existing edge $xy$. An obstruction wholly in the other side was already in $G$. Hence each side is edge-maximal and obstruction-free. [step 3.1, L2] ∎
