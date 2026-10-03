---
id: lem-a-positive-height-diagram-has-a-defect-region
kind: lemma
title: "A positive-height diagram has a defect region"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-reducing-arc-and-yamada-vogel-reducing-move,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
       lem-two-disjoint-circles-in-s-two-cobound-an-annulus, def-axiom-of-choice,
       cor-components-of-open-subsets-of-rn-are-polygonally-connected,
       def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Lemma 2.2, printed pp. 16-17"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Assume AC. If $h(D)>0$, the Seifert picture $S$, including its signed arcs,
has a complementary region exposing two incoherent circles. That region
supports a reducing arc disjoint from all signed arcs.

## Facts & Assumptions

**Given:** AC and a diagram $D$ of positive height with its finite Seifert picture.

[F1] Distinct Seifert circles separate $S^2$ into planar regions; two circles have their common annulus and two complementary disks ([[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]).

[F2] A signed arc joins two distinct coherent circles, and the finite arcs have disjoint interiors ([[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]]).

[F3] A defect region is a component of $S^2\setminus S$ exposing an incoherent pair. An embedded arc in it with one endpoint on each exposed circle is a reducing arc ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F4] Coherence means opposite agreement signs relative to the annulus boundary orientations; height counts incoherent pairs ([[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 **Ignore the signed arcs temporarily.** The complementary dual graph of the circles alone has one vertex per region and one edge per circle. Adding a disjoint Jordan circle splits a region in two, so this graph is a finite tree by [F1]. At a vertex with three or more boundary circles, give each its sign relative to the oriented region boundary. For any pair these are also their signs relative to their common annulus boundary. Two equal signs give an incoherent pair by [F4]. Thus three exposed circles always contain such a pair. If every vertex has degree at most two, the tree is a path, the circles form one chain, and coherence of every consecutive pair makes all pairs coherent by transporting their angular orientations along the chain. Positive height therefore implies either a vertex with at least three boundary circles, or a two-boundary annular region whose two circles are incoherent. [F1, F4, given, construct]

2.1 **Restore the signed arcs.** In the two-boundary incoherent case no signed arc can lie in that annulus: by [F2] it would have to join its incoherent boundary circles. Thus it is already a defect region. In a region with $k\ge3$ boundary circles, collapse its capped boundary circles to $k$ vertices on a sphere. The signed arcs give a finite plane multigraph with no loops. Each edge joins circles with opposite boundary signs by [F2], so the graph is bipartite. Some complementary face exposes at least three vertices: otherwise every nontrivial face walk could use only a pair of vertices. Remove successively empty digons between parallel edges. Such removals preserve the assertion that faces expose at most two vertices, since the merged digon uses that same pair. After these removals, a face using only two vertices must be the walk along a single bridge and back, or the boundary of a region between parallel edges containing another component; the latter exposes a vertex of that component as well. A connected component with two adjacent edges to different vertices has a face walk exposing those three vertices. Hence every remaining connected component has at most two vertices; if more than one component remains, their common exterior face exposes all their vertices, including isolated vertices. Since the graph has $k\ge3$ vertices, this contradicts the assumed face property. Choose a face exposing at least three circles and restore the collapsed disks. Two of its circle boundary portions have the same sign, hence are incoherent by [F4], so that face is a defect region of the full picture. [F2, F3, F4, step 1.1, algebra]

3.1 **A reducing arc.** Choose points in the relative interiors of the two exposed circle boundary portions, avoiding the finitely many signed-arc endpoints. Short inward access arcs enter the open face. Its connected open planar interior is polygonally connected; join those access arcs inside it, perturb finitely many segments to make intersections finite, and erase loops in the resulting finite path. This gives an embedded arc meeting the entire Seifert picture only at its endpoints. It is the required reducing arc by [F3]. AC is inherited from [F1] and the coherence definition. [F1, F3, step 1.1, step 2.1, construct] ∎
