---
id: lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches
kind: lemma
title: Triangular normal arcs admit braid position stable under partial regular
  switches
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - thm-polygonal-jordan-curve
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105
        (1961),245–375
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Chapter4, Hilfssatz8 and Hauptsatz4, braid pieces and regular switches.
        The central-triangle and three-strip construction below is given
        directly inside an original triangular face.
dependency_level: 1
---

## Statement

Let $f$ be an affine triangle and let $\mathcal X,\mathcal Y$ be two finite families of normal arcs in $f$, each family embedded and pairwise disjoint, with disjoint endpoint sets on $\partial f$. There are PL representatives of the same individual arc types, fixing those endpoints, with these properties:

1. Every intersection is a transverse double point between the two families. Each original pair of arcs intersects at most once.
2. At every double point there is a chosen regular reconnection. For every subset of the double points, perform just those reconnections and otherwise retain the original transverse crossings. The resulting parametrizing components are embedded normal arcs, never circles, and their total counts of the three normal arc types are unchanged. Every remaining double point lies on two distinct parametrizing arcs.
3. The chosen reconnection at a crossing is the unique one of the two uncrossings that preserves the unordered pair of the two normal arc types there. Its alternative creates an edge-return arc in that local two-arc endpoint pairing. The same characterization holds at each remaining crossing after any partial reconnection.

Here parametrizing components follow the strands through unswitched crossings without joining them. The construction uses a small central triangle and three quadrilateral strips inside this original face. It changes no triangulation and uses only finite choices.

## Statement references

[[def-normal-surface-coordinate-box]] — the three normal arc types in a face.

## Facts & Assumptions

**Given:** The triangle, two arc families and disjoint endpoint sets.

[F1] Proper embedded polygonal arcs joining distinct sides of a triangle cut off the common vertex of those sides. For a disjoint family of arcs of one such type, the orders of their endpoints away from that vertex agree on its two adjacent sides. Two different types have separate endpoint blocks along their shared side. These facts follow by cutting the triangle along one arc and applying polygonal separation. ([[thm-polygonal-jordan-curve]])

[F2] A convex quadrilateral has a PL parametrization by a rectangle affine on each boundary side: triangulate both by one diagonal and map the two triangles linearly. In a rectangle, line segments joining its two opposite vertical sides are graphs over the horizontal coordinate. Two such segments cross at most once, and cross exactly when their endpoint orders disagree.

## Proof

1.1 Label the vertices $A,B,C$ and choose a smaller homothetic central triangle with corresponding vertices $a,b,c$. The spokes $Aa,Bb,Cc$ divide the region outside it into three convex quadrilaterals, one along each original edge. Regard each quadrilateral as a rectangular strip from its outer original edge to the corresponding central edge, using [F2]. All original arc endpoints lie in the relative interiors of the outer strip edges. [given, F2, construct]

2.1 In the central triangle put disjoint normal chords with the combined numbers of all three types. They may be chosen in small disjoint corner neighborhoods of $a,b,c$. For each type, designate one of its two original endpoint edges, using a fixed ordering of the three edges. Order that type's combined $\mathcal X$ and $\mathcal Y$ chords by the order of their corresponding original endpoints away from the common vertex on the designated edge. Assign their colors and individual labels in that order. By [F1], this order respects the order within each original family on both endpoint edges. The central chords therefore impose compatible same-color orders on their two central strip gates. On a central gate the two incident types occupy their separate canonical corner blocks. [given, F1, step 1.1, construct]

3.1 In every strip join each original endpoint to the gate endpoint of its labeled central chord by the straight wire in the rectangular parametrization. For either color separately, its wire order at the outer edge equals its wire order at the gate: order within a type agrees by step 2.1, and the two types have the same separate corner blocks by [F1]. Thus wires of the same color do not cross by [F2]. A wire from the other color crosses it at most once. Distinct crossings cannot coincide, since that would make two same-color wires meet. All intersections are consequently transverse double points. Join the wires to their central chords. Each resulting arc has exactly one central chord and one wire in each of two distinct strips, so is embedded and has its original type. [F1, F2, step 1.1, step 2.1, construct]

4.1 Two original arcs of different types share only one strip, so intersect at most once. Two original arcs of the same type share two strips, but on that type's designated strip their combined endpoint and gate orders coincide, by step 2.1. They cannot intersect there, so can intersect only once in their other strip. This proves the first assertion, including the original pairwise bound. [F2, step 2.1, step 3.1, construct]

4.2 At a wire crossing, choose the uncrossing that reconnects each incoming wire from the outer side to the other outgoing wire toward the gate. In a small rectangle this is the reconnection by two horizontal-monotone strands. The other uncrossing joins the two outer-side branches to one another and the two gate-side branches to one another. After any subset of the chosen reconnections, every parametrizing strand within a strip is still strictly monotone in its horizontal coordinate: following it from an outer endpoint always goes toward a gate, and conversely. It cannot form a circle or self-intersect, and no component can have both ends on the same side of that strip. All strips still have the same gate endpoints, and the central chords have not changed. Hence each full parametrizing component has exactly one central chord and wires in its two distinct strips. It is an embedded normal arc. No remaining crossing can be a self-crossing of such a component: it lies inside one strip, where that component has exactly one monotone wire. The central chords count its type, so all type counts are unchanged. [F2, step 1.1, step 3.1, construct]

5.1 To check the local characterization, the two crossing arcs share the strip's original edge $e$. The chosen uncrossing pairs each outer branch, whose endpoint is on $e$, with one gate branch. The other endpoint of that gate branch lies on a different original edge, determined by its unchanged central chord. This recovers the original unordered pair of types. The alternative joins the two outer branches and therefore has both endpoints on $e$, an edge-return arc. Thus exactly one uncrossing preserves the two normal types. Since the preceding argument worked for any subset of crossings, all assertions follow without altering the original face or its edge endpoints. [given, step 2.1, step 3.1, step 4.2, construct] ∎
