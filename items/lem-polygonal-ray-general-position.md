---
id: lem-polygonal-ray-general-position
kind: lemma
title: "Every point off a polygon admits a ray meeting it transversely in finitely many nonvertex points"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-arc-and-polygon, def-plane-region-and-frontier, lem-of-q-dense, thm-of-archimedean, thm-sum-rule, def-polygonal-path-and-polygonal-connectedness]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a polygon ([[def-polygonal-arc-and-polygon]]) and $x\in\mathbb R^2\setminus P$, whose complementary regions use [[def-plane-region-and-frontier]]. There is a polygonal ray from $x$ that meets $P$ in finitely many points, none a vertex of $P$, and crosses the containing edge transversely at every intersection. The finite edge list and its unions use [[thm-sum-rule]] and the polygonal-path convention of [[def-polygonal-path-and-polygonal-connectedness]].

## Facts & Assumptions

**Given:** A polygon $P$ with its finite edge and vertex sets, and $x\notin P$.

[L1] In an Archimedean ordered field $F$, for any $x<y$ there is a rational $q$ whose canonical image lies strictly between them ([[lem-of-q-dense]]).

[L2] Every complete ordered field, in particular $\mathbb R$, is Archimedean ([[thm-of-archimedean]]).

[F1] A polygonal path is specified by a finite list of vertices $v_0,\ldots,v_m\in A$ ([[def-polygonal-path-and-polygonal-connectedness]]).

## Proof

**Proof technique:** constructive.

1.1 A ray direction is bad if its line through $x$ contains a polygon vertex or is parallel to an edge line. There are only finitely many such directions. By [L2], [L1] applies in $\mathbb R$ and supplies a rational-slope direction in an open angular interval avoiding them. [L1, L2, F1, construct]

2.1 In the chosen direction the ray misses every vertex and is not parallel to any edge. It therefore meets each closed edge segment in at most one point, and every such intersection is transverse. Since the polygon has finitely many edges, the total intersection set is finite and has the required properties. [step 1.1, F1, discharge-construct] ∎
