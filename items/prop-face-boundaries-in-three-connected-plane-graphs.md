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

2.1 Suppose $G-V(C)$ had two components. Each component has at least three neighbours on $C$, since one or two such neighbours would be a vertex cut. In the closed nonfacial side of $C$, two disjoint connected components cannot have alternating attachment vertices on $C$: paths within the components between the alternating attachments would cross by [L3]. Hence all attachments of one component lie on one $x$-$y$ arc between consecutive attachments of the other. Then $\{x,y\}$ separates that component from the other, again contradicting [L2]. Thus $G-V(C)$ is connected when nonempty. [step 1.1, L2, L3]

3.1 Steps 1.1 and 2.1 prove the forward implication, and step 1.2 proves the reverse, including the empty-deletion boundary. [step 1.1, step 2.1, step 1.2] ∎
