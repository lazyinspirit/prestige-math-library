---
id: lem-regular-normal-sum-diagrams-have-reduced-connected-pairs
kind: lemma
title: "A regular normal-sum diagram has a reduced connected pair"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Chapter5§1, printed pp.361–364, definition of reduced normal pairs, the separation consequence, and complete proof of Satz7. The finite maximal-switch argument is expanded below with its input interface explicit."
---

## Statement

Let $T$ be a finite simplicial triangulation of a compact PL three-manifold. Suppose a **regular normal-sum diagram** is supplied with the following data:

- Two nonempty embedded normal surfaces $X,Y$ in transverse PL position, with no triple points and finitely many disjoint double circles and proper double arcs.
- Pairwise disjoint switching neighborhoods of those double curves, disjoint from $T^{(1)}$, with compatible chosen regular switches. In each tetrahedron the local switch reconnects two crossing normal disks to normal disks of the same two types. A partial switch therefore leaves a finite immersed normal-disk diagram, with only the unswitched double curves and without branch points. Switches in disjoint neighborhoods commute.
- Performing all the switches gives a connected embedded normal surface $F$.

Then some partial switching gives a diagram whose normalization has exactly two components $G,H$. Here normalization means separating the two branches at every remaining double point; its components are the parametrizing surfaces, regardless of intersections between their images. Both $G$ and $H$ are connected embedded normal surfaces. They have

$$v(G)+v(H)=v(F),\qquad w(G)+w(H)=w(F),\qquad 0<w(G),w(H)<w(F).$$

Their remaining switching system is reduced in the following precise sense: switching any nonempty subset of its curves gives a diagram with connected normalization. In particular no remaining intersection circle or proper intersection arc separates both $G$ and $H$ when each is cut along its corresponding preimage.

All surfaces and vectors remain in the original triangulation $T$. No orientability, irreducibility or choice hypothesis is needed. The existence of a regular normal-sum diagram from an arbitrary coordinate decomposition is an input to this lemma, not a conclusion.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disk types, coordinate addition and edge intersections.

## Facts & Assumptions

**Given:** The supplied diagram, switching neighborhoods and connected full resolution $F$.

[F1] Every local regular switch preserves its two normal disk types and its edge intersections, and switches in disjoint neighborhoods commute. These are the explicit diagram hypotheses; they are not inferred from an unproved coordinate-to-diagram construction. ([[def-normal-surface-coordinate-box]])

[F2] A switch along one double curve changes only the parametrizing components containing its two branches. Thus it affects at most two components. The other components are unchanged. Cutting and gluing the nonempty affected surfaces never deletes them entirely: the switch only replaces their local strips in its neighborhood.

## Proof

1.1 Write $\Gamma$ for the finite set of double curves. For each subset $A\subseteq\Gamma$, perform just its chosen switches and take the normalization of the resulting diagram. The empty subset gives at least two components because it is parametrized by the nonempty disjoint union $X\sqcup Y$. The full subset gives the connected surface $F$. Choose a subset $A$ of maximal cardinality among those giving disconnected normalization. The finite list of subsets makes this a finite choice. Then $A\ne\Gamma$, and every strict superset of $A$ gives connected normalization. [given, F1, construct]

2.1 The normalization after switching $A$ has exactly two components. Otherwise choose any remaining double curve. By [F2], its switch affects at most two components; at least one component remains unaffected and at least one affected component remains nonempty. The normalization after that additional switch would still be disconnected, contrary to maximality in step 1.1. It already had at least two components by the choice of $A$, so it has exactly two. Denote them by $G,H$. [F2, step 1.1, contradiction]

3.1 No remaining double curve has both branches in the same one of $G,H$. If it did, its switch would leave the other component unchanged and nonempty, and the affected component would also remain nonempty by [F2]. This would again contradict step 1.1. Thus every remaining crossing is between $G$ and $H$. There are no self-intersections of either component, because any such self-intersection would lie on a remaining double curve. There are no other singularities by the diagram hypothesis. Consequently each component is an embedded normal surface: its tetrahedral disk pieces are normal by [F1], their sides match as in the partial diagram, and their interiors have no self-intersections. They are connected by their definition as normalization components. [given, F1, F2, step 1.1, step 2.1, construct]

4.1 Let $B$ be any nonempty subset of the remaining curves. Switching it gives the normalization for $A\cup B$, which is connected by step 1.1. For the separation consequence, suppose a remaining circle or arc separates both $G$ and $H$. Cutting along its preimages gives exactly two pieces of each connected surface. The crosswise switch pairs the two cut copies from $G$ with the two cut copies from $H$, producing exactly two nonempty parametrizing components. This applies to annular cutting collars of separating circles and to rectangular cutting collars of separating proper arcs. Other unswitched double curves are merely intersections of the images and do not join normalization components. Thus that one switch would have disconnected normalization, contrary to the first assertion of this step. [F2, step 1.1, step 3.1, contradiction]

5.1 The partial diagram and its full resolution have the same total number of normal disks of every type by [F1]. The two normalization components therefore satisfy $v(G)+v(H)=v(F)$. All switches miss the triangulation edges, giving $w(G)+w(H)=w(F)$ as well. Each nonempty normal surface contains a normal triangle or quadrilateral and hence meets an edge, so both summand weights are strictly positive. Their sum is $w(F)$, making both strictly smaller than $w(F)$. All operations took place in the supplied neighborhoods in the original $T$, proving every assertion. [F1, step 2.1, step 3.1, step 4.1, algebra] ∎
