---
id: lem-plane-triangulation-is-connected
kind: lemma
title: "Every plane triangulation with at least three vertices is connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-maximal-plane-and-maximally-planar-graph, def-plane-graph-face-and-boundary, def-plane-region-and-frontier, def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, cor-components-of-open-subsets-of-rn-are-polygonally-connected, lem-plane-edge-face-incidence]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.8, Proposition 4.4.1 and Corollary 4.4.7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Every plane triangulation with at least three vertices
([[def-maximal-plane-and-maximally-planar-graph]]) is connected
([[def-connected-graph-and-connected-component]]).

## Facts & Assumptions

**Given:** A plane triangulation $G$ with at least three vertices.

[L1] The connected components of a graph are nonempty, cover its vertex set, are pairwise equal or disjoint, and are its maximal connected subgraphs ([[cor-connected-components-partition-the-vertex-set]]).

[L2] A face of a plane graph is a connected component of the complement of its drawing. Its boundary subgraph consists of the vertices and whole edges in its frontier; for a disconnected plane graph a face may have several boundary walks ([[def-plane-graph-face-and-boundary]], [[def-plane-region-and-frontier]]).

[L3] Every connected component of an open subset of $\mathbb R^2$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L4] If the relative interior of an edge meets the frontier of a face, then the whole edge lies in that frontier ([[lem-plane-edge-face-incidence]]).

[F1] A plane triangulation is a plane graph in which every face, including the unbounded face, has boundary a triangle ([[def-maximal-plane-and-maximally-planar-graph]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $G$ is disconnected. By [L1], choose one connected component $C$ and let $H$ be the plane subgraph formed by all the other components. Both $C$ and $H$ are nonempty. [assume-contra, L1, choose]

2.1 The point set of the drawing of $C$ is connected: graph paths join its vertices, their polygonal images are connected, and every point of an edge is joined along that edge to an endpoint. This drawing is disjoint from $H$, so it lies in one face $h$ of $H$. [step 1.1, L1, L2]

3.1 Choose points $p_0$ in the drawing of $C$ and $x$ in the drawing of $H$. On the segment from $p_0$ to $x$, let $x_0$ be the first point in the closed drawing of $H$. The part before $x_0$ lies in the complement of $H$ and is connected to $p_0$, so it lies in $h$ and $x_0$ lies in the frontier of $h$. If $x_0$ lies in an edge interior, [L4] puts the whole edge in that frontier; hence in every case the frontier contains a vertex $y$ of $H$. The drawing of $C$ is a closed finite union of segments disjoint from $y$, so choose a disc $D$ about $y$ that avoids $C$ and meets $H$ only in $y$ and segments incident with $y$. One of the local sectors of $D\setminus H$ lies in $h$; it lies in a face $f$ of $G$, and it approaches $y$, so $y$ belongs to the boundary subgraph of $f$. [step 2.1, L2, L4, choose]

4.1 Choose a point $q$ in that sector and a point $p$ of the drawing of $C$. The face $h$ is a connected component of the open complement of $H$, so [L3] gives a polygonal path in $h$ from $q$ to $p$. Let $z$ be its first point on the closed drawing of $C$. The part before $z$ avoids every component of $G$ and starts in $f$, so it lies in $f$ and shows that $z$ is in the frontier of $f$. If $z$ is a vertex then the boundary subgraph of $f$ meets $C$ there; if $z$ is in an edge interior, [L4] puts that whole edge, and hence its endpoints in $C$, in the boundary. [step 3.1, L2, L3, L4, choose]

5.1 The boundary subgraph of $f$ therefore contains a vertex of $C$ and a vertex of $H$. It is disconnected: any path in that boundary subgraph would also be a path in $G$ joining two distinct components, contrary to [L1]. [step 1.1, step 3.1, step 4.1, L1, L2]

6.1 By [F1], however, the boundary subgraph of $f$ is a triangle and is connected. This contradiction is independent of whether $h$ or $f$ is bounded, so it includes the unbounded face; it also uses only that the disconnected graph has two nonempty components, so it covers the smallest permitted order of three. Hence $G$ is connected. [step 5.1, F1, discharge-contradiction] ∎
