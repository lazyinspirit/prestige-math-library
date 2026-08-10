---
id: lem-polygonal-crossing-parity-is-locally-constant
kind: lemma
title: "The parity of transverse ray crossings with a polygon is locally constant on its complement"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-polygonal-ray-general-position, def-polygonal-arc-and-polygon, def-plane-region-and-frontier, lem-alternating-sequence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

For a polygon $P$ ([[def-polygonal-arc-and-polygon]]) and $x\notin P$, count the intersections modulo two of any general-position ray supplied by [[lem-polygonal-ray-general-position]]. This parity is independent of the chosen general-position ray and is constant throughout some open neighbourhood of $x$ in the complement. Consequently it is constant on every region of $\mathbb R^2\setminus P$ ([[def-plane-region-and-frontier]]). The elementary alternation at successive transverse crossings follows the convention of [[lem-alternating-sequence]].

## Facts & Assumptions

**Given:** A polygon $P$ and a point $x\notin P$.

[L1] Every point off a polygon admits a ray meeting it transversely in finitely many nonvertex points ([[lem-polygonal-ray-general-position]]).

## Proof

**Proof technique:** direct.

1.1 Fix a general-position ray from $x$. The finite intersection points have positive distance from every polygon vertex and from every nonincident edge; transversality also supplies a positive angle at each crossing. Taking the minimum of finitely many positive tolerances gives a ball about $x$ in which parallel translated rays retain exactly these crossings. [L1]

1.2 Rotate one general-position ray continuously to another, avoiding the finitely many exceptional directions except at isolated parameters. Crossing an edge tangentially creates or destroys two intersections, while passing a polygon vertex transfers the intersection from one incident edge to the other or changes the count by two. Thus the count modulo two never changes, so parity is independent of the chosen ray. [L1]

2.1 Steps 1.1 and 1.2 make parity locally constant on the complement. A locally constant map to the discrete set $\{0,1\}$ is constant on each connected component, hence on each complementary region. [step 1.1, step 1.2] ∎

