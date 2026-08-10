---
id: prop-face-boundaries-in-three-connected-plane-graphs
kind: proposition
title: "In a three-connected plane graph, face boundaries are exactly the induced cycles whose deletion leaves the graph connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-face-boundaries-in-two-connected-plane-graphs, cor-whitney-k-connected-path-characterisation, thm-polygonal-jordan-curve, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a three-connected plane graph. A subgraph $C$ is the boundary of a face if and only if $C$ is an induced cycle ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]) and $G-V(C)$ is connected or empty ([[def-graph-deletion-contraction-minor-and-subdivision]]).

## Facts & Assumptions

**Given:** A three-connected plane graph $G$ and a cycle $C$.

[L1] Every face of a two-connected plane graph is bounded by a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]).

[L2] In a three-connected graph, every two distinct vertices are joined by at least three internally vertex-disjoint paths ([[cor-whitney-k-connected-path-characterisation]]).

[L3] A polygon has exactly two complementary regions and is the frontier of each ([[thm-polygonal-jordan-curve]]).

## Proof

**Proof technique:** direct.

1.1 A facial boundary $C$ is a cycle by [L1]. It has no chord $xy$: the chord lies on the nonfacial side, and the chord together with each of the two $x$-$y$ arcs of $C$ is a polygon by [L3]. These two polygons bound disjoint subregions of the nonfacial side. Since the facial side contains no graph edge, a path from an internal vertex of one $x$-$y$ arc to an internal vertex of the other, avoiding $x,y$, would have to cross the chord. Thus $\{x,y\}$ would be a vertex cut, contrary to three-connectivity and [L2]. Hence $C$ is induced. [L1, L2, L3]

1.2 Conversely, let $C$ be induced and suppose $G-V(C)$ is connected or empty. If $C$ is not facial, both complementary regions from [L3] contain graph material. Inducedness rules out a chord as that material, so each side contains a vertex outside $C$. When $G-V(C)$ is connected, a path in it joins vertices on the two sides and must cross $C$, contradicting the plane embedding. If $G-V(C)$ is empty, the drawing consists only of $C$, and both sides are faces. Thus $C$ is facial. [L3]

2.1 Suppose $G-V(C)$ were disconnected, and let $D_1$ be one of its components. Every component has at least three neighbours on $C$, since one or two such neighbours would be a vertex cut contradicting [L2]. Because $C$ bounds a face, every component lies in the closed complementary side of $C$, which [L3] presents as a region bounded by $C$. Let $a_1,\ldots,a_k$ with $k\ge3$ be the attachments of $D_1$ in cyclic order on $C$, and let $S$ be a spanning tree of $D_1$ together with one edge to each $a_i$. Then $S$ is connected, lies in that side, and meets $C$ exactly in $\{a_1,\ldots,a_k\}$, so by [L3] the set $S\cup C$ divides the side into exactly $k$ regions, the $i$th bounded by the arc of $C$ from $a_i$ to $a_{i+1}$ carrying no further attachment of $D_1$ together with two paths of $S$. Every other component is connected and meets neither $S$ nor $C$, so each lies inside a single one of those open regions; choose one, say the $i$th, that contains a component, and put $x:=a_i$ and $y:=a_{i+1}$. This is where the alternation of attachments is not enough: two components may share all three of their attachments, in which case no four attachments alternate, and the region argument rather than the crossing argument is what confines them. Let $U$ consist of the open arc of $C$ strictly between $x$ and $y$ together with every component lying in the $i$th region. Distinct components of $G-V(C)$ are non-adjacent, and each component in that region has all of its neighbours on the closed arc from $x$ to $y$, while $D_1$ has no attachment strictly inside that arc. Hence the only neighbours of $U$ outside $U$ are $x$ and $y$, so $\{x,y\}$ is a vertex cut separating $U$ from $D_1$, contradicting [L2]. Thus $G-V(C)$ is connected when nonempty. [step 1.1, L2, L3]

3.1 Steps 1.1 and 2.1 prove the forward implication, and step 1.2 proves the reverse, including the empty-deletion boundary. [step 1.1, step 2.1, step 1.2] ∎
