---
id: thm-plane-dual-exists-and-double-dual-recovers-primal
kind: theorem
title: "Every connected plane graph has a plane dual, and the reciprocal embedding identifies its double dual with the original graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-dual-multigraph, lem-plane-graph-faces-are-finite-with-one-unbounded-face, lem-plane-edge-face-incidence, thm-polygonal-jordan-curve, def-graph-isomorphism-and-complement, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.6"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "J. Erickson, Planar Graphs, Section 9"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf"
pipeline_run: null
---

## Statement

Every connected plane graph $G$ admits a polygonal plane embedding of its dual multigraph [[def-plane-dual-multigraph]] in which each dual edge crosses its corresponding primal edge exactly once and crosses no other primal or dual edge. In this reciprocal embedding, $(G^*)^*$ is isomorphic to $G$ in the sense of [[def-graph-isomorphism-and-complement]]. Face finiteness is [[lem-plane-graph-faces-are-finite-with-one-unbounded-face]], local incidence is [[lem-plane-edge-face-incidence]], and polygonal separation is [[thm-polygonal-jordan-curve]].

## Facts & Assumptions

**Given:** A connected plane graph $G$.

[F1] An edge assigned one endpoint is a loop, and distinct edges assigned the same endpoint set are parallel edges ([[def-multigraph-loop-and-digraph]]).

[L1] Each primal edge has two local face sides, possibly belonging to the same face when it is a bridge ([[lem-plane-edge-face-incidence]]).

## Proof

**Proof technique:** constructive.

1.1 Choose one point $p_f$ in each of the finitely many faces. Around every primal vertex take a small disk, and around each edge interior take a thin polygonal corridor; choose these finitely many neighbourhoods mutually disjoint except at their prescribed incidences. In each face, connect its point polygonally inside that face to the appropriate side of every incident edge corridor. [L1, construct]

2.1 For each primal edge $e$, join the two incident face paths across its corridor by one transverse segment through $e$. These arcs meet no other primal edge, and the corridors and within-face paths can be chosen successively disjoint. If both sides of $e$ are the same face, the arc closes to a loop; repeated face pairs yield parallel edges as allowed by [F1]. Thus the resulting drawing is a plane embedding of $G^*$. [step 1.1, F1, L1]

3.1 In the reciprocal drawing, a small punctured neighbourhood of each primal vertex is one face of $G^*$, and every dual face arises this way: walking around a dual face crosses precisely the primal edges incident with that vertex. The dual of $e^*$ crosses it in the original corridor and corresponds canonically to $e$. [step 1.1, step 2.1]

4.1 Map each primal vertex to its surrounding dual face and each primal edge $e$ to $(e^*)^*$. Step 3.1 makes these maps bijective and incidence preserving, so they define an isomorphism $G\cong(G^*)^*$. [step 3.1, discharge-construct] ∎
