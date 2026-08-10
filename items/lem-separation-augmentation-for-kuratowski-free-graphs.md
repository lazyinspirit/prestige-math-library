---
id: lem-separation-augmentation-for-kuratowski-free-graphs
kind: lemma
title: "In an edge-maximal graph with no $K_5$ or $K_{3,3}$ subdivision, a minimum proper separation of order at most two has an adjacent two-vertex separator and edge-maximal sides"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-kuratowski-minors-are-topological-minors, def-vertex-and-edge-connectivity, def-subgraph-induced-subgraph-and-spanning-subgraph]
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

Let $G$ be edge-maximal among graphs containing no subdivision of $K_5$ or $K_{3,3}$. A **proper separation** is a pair $(V_1,V_2)$ with $V_1\cup V_2=V(G)$, neither $V_i$ contained in the other, and no edge between $V_1\setminus V_2$ and $V_2\setminus V_1$; its separator is $V_1\cap V_2$ and its order is the size of that set. If $(V_1,V_2)$ has minimum order among proper separations and that order is at most two, then its separator has two vertices $x,y$, the edge $xy$ belongs to $G$, and each induced side $G[V_i]$ is itself edge-maximal without either subdivision. Vertex cuts and induced subgraphs are [[def-vertex-and-edge-connectivity]] and [[def-subgraph-induced-subgraph-and-spanning-subgraph]]; obstruction terminology agrees with [[lem-kuratowski-minors-are-topological-minors]].

## Facts & Assumptions

**Given:** Such $G$ and a minimum proper separation $(V_1,V_2)$ with separator $S=V_1\cap V_2$.

[L1] A graph has a $K_5$ or $K_{3,3}$ minor exactly when it contains a subdivision of $K_5$ or $K_{3,3}$ ([[lem-kuratowski-minors-are-topological-minors]]).



## Proof

**Proof technique:** direct.

1.1 Minimum order implies every vertex of $S$ has a neighbour in every component on either proper side; otherwise deleting that vertex from $S$ would give a smaller separator. Direct inspection shows that deleting any total of at most two vertices or edges from $K_5$ or $K_{3,3}$ leaves all surviving vertices connected. Consequently a subdivision of either obstruction cannot have branch vertices on both proper sides of a separation of order at most two: after suppressing subdivided paths, separator vertices internal to those paths delete obstruction edges, while separator branch vertices delete obstruction vertices. Its intersection with the side having no branch vertex is therefore at most one path replacing an obstruction edge. [given, L1]

2.1 If $S$ were empty, add an edge $e$ across the two sides. A created subdivision would have to use $e$, but deleting one edge from a subdivision of either obstruction leaves its branch vertices connected, whereas they would lie in two components of $G$. If $S=\{v\}$, choose neighbours $a,b$ of $v$ on opposite sides and add $e=ab$. Delete $e$ and $v$ from a created subdivision and suppress its remaining subdivided paths. By the deletion observation in step 1.1, all surviving branch vertices, and hence all branch vertices before restoring a possible branch vertex $v$, lie on one side. The branch-free excursion through the other side runs from one endpoint of $e$ to $v$; replace it together with $e$ by the existing edge $av$ or $bv$ on the branch-vertex side. This gives the same forbidden subdivision in $G$. Edge maximality rules out both cases, so $S=\{x,y\}$. [step 1.1]

3.1 If $xy$ were absent, add it. Any resulting forbidden subdivision can replace $xy$ by an $x$-$y$ path through the proper side without its branch vertices, as described in step 1.1, again yielding the subdivision in $G$. Therefore $xy\in E(G)$. [step 1.1, step 2.1, L1]

4.1 Finally add any missing edge within one induced side. A resulting obstruction either lies in that side, proving its edge maximality, or uses the other side only as an $x$-$y$ path; replace that path by the existing edge $xy$. An obstruction wholly in the other side was already in $G$. Hence each side is edge-maximal and obstruction-free. [step 1.1, step 3.1, L1] ∎
