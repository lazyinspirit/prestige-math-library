---
id: lem-compatible-normal-surfaces-admit-finite-circle-free-tetrahedral-position
kind: lemma
title: Compatible normal surfaces admit finite circle-free tetrahedral position
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-essential-pl-disks-admit-normal-replacements
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 2
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Let $X,Y$ be two proper normal PL surfaces in a compact PL three-manifold with a finite simplicial triangulation $T$. Suppose their quadrilateral types are compatible in every tetrahedron. They have embedded normal realizations $X',Y'$ with the same respective normal vectors and respective abstract surface homeomorphism types such that:

- $X'$ and $Y'$ have disjoint edge-intersection sets, and in each triangular face all their arcs are straight segments in that face's affine coordinates;
- these face arcs have only transverse double intersections;
- in each tetrahedron, the two disk families are transverse and their intersection consists only of finitely many proper arcs; each arc joins two distinct tetrahedral faces. A pair of disk pieces meets in at most one arc if either is triangular, and in at most two arcs if both are quadrilateral.

Their global intersection is therefore a finite union of double circles and proper double arcs, disjoint from $T^{(1)}$. The boundary circles of each replacement surface are homotopic in $\partial M$ to the corresponding original boundary circles. In particular, a disk with essential boundary remains a disk with essential boundary.

The construction is finite and uses no ambient irreducibility, orientability or choice hypothesis. Interior disk replacements are permitted; an ambient isotopy of the original surfaces is not asserted. The Statement does not yet assert the simultaneous regular-switch or partial-switching conclusions for the resulting diagram.

## Statement references

[[def-normal-surface-coordinate-box]] — normal pieces and the unchanged seven coordinates.

[[lem-essential-pl-disks-admit-normal-replacements]] — finite nested boundary-cap replacements inside a tetrahedron.

## Facts & Assumptions

**Given:** The two normal surfaces, compatible disk types and finite simplicial triangulation.

[F1] The finite planar disk constructions apply to disjoint polygonal curves on a tetrahedral boundary: remove a small vertex neighborhood disjoint from the curves, use a planar Schlegel diagram and triangulate the resulting disk regions. Boundary-parallel caps for nested disk regions can be placed at strictly ordered sufficiently small collar depths. This is the construction in [[lem-essential-pl-disks-admit-normal-replacements]], step 2.1, justified by [[thm-polygonal-jordan-curve]] and [[thm-simple-polygon-admits-a-triangulation]].

[F2] Distinct straight segments in a convex triangle have at most one transverse intersection. Two disjoint families of proper arcs in a triangle have noninterleaving endpoint pairs within each family; replacing each arc by its straight chord retains that family's disjointness. Indeed, crossing straight chords have alternating boundary endpoints, while a proper arc separates the triangle and forces any arc joining alternating endpoints to cross it. The latter assertion follows by polygonal separation. ([[thm-polygonal-jordan-curve]])

## Proof

1.1 Move the finitely many edge-intersection points of $Y$ slightly along their edges, preserving their order on each edge, to avoid those of $X$. The normal side matchings for $Y$ are retained. For each triangular face, replace every arc of each family by its straight chord between the corresponding endpoints. Each family remains embedded by [F2]. Choose the point displacements generically so no two chords overlap or are tangent where they meet: equality of their supporting lines is one nontrivial determinant equation in finitely many edge parameters, and can be avoided by successively choosing parameters outside finitely many forbidden values, with arbitrarily small displacements and the prescribed orders. Since each family is disjoint, a point lies on at most one chord from each, so there are no triple points. [given, F2, construct]

2.1 The new boundary curves of the disk pieces on every tetrahedral sphere retain their individual normal boundary types and side matchings. Each family separately is a finite disjoint family of those curves. Realize it by the nested disjoint caps [F1], leaving its boundary exactly the chosen straight face chords. Do this for both colors. It gives two embedded proper normal surfaces with the original coordinate vectors. Their abstract disk-side gluing data are unchanged, so their abstract surfaces are homeomorphic to the originals: map each old disk to its new disk with the prescribed boundary correspondence, extending its boundary parametrization over a disk by coning a finite polygonal subdivision. For boundary components, moving endpoints along their edges and replacing a face arc by its chord gives a homotopy within the convex boundary faces, and these homotopies concatenate around each boundary circle. [given, F1, F2, step 1.1, construct]

3.1 Keep the first family of boundary-parallel caps fixed. Put the interiors of the second family into finite PL transverse position relative to it, while keeping all boundaries fixed. Subdivide finitely and displace second-family interior vertices by successively sufficiently small generic amounts. The excluded affine coincidences form finitely many proper planes, lines and determinant-zero conditions; avoiding them makes the sheet intersections one-dimensional with no tangencies. Smallness preserves each family's embedding and avoids all tetrahedral edges. Near boundary crossings, use fixed half-plane product charts extending the already transverse chord intersections. Consequently the intersection in each tetrahedron is a finite disjoint union of proper arcs and circles, with every endpoint a crossing of one straight chord from each family in a face. [given, step 1.1, step 2.1, construct]

4.1 No proper intersection arc has both endpoints in the same face. Its two branches lie in a fixed disk of each family, since pieces of the same family are disjoint. Each of those normal disks meets a given face in at most one arc. Two endpoints in that face would therefore be two intersections of the same two straight chords, contradicting [F2]. Thus all proper intersection arcs join distinct faces. Moreover, a fixed pair of normal pieces has at most one crossing in each of their common faces by [F2]. A triangle meets only three faces, so at most two endpoints, hence at most one arc, can occur for a pair containing a triangle. Two quadrilaterals have at most four endpoints, hence at most two arcs. These counts remain valid after circle removal, which changes no face arc or proper intersection arc. [F2, step 3.1, contradiction]

5.1 Suppose an intersection circle remains in some tetrahedron. Choose a circle $c$ innermost on one disk $P$ of the first family, and let $E\subset P$ be the disk it bounds. Its interior misses the entire second family. There is no circle there by innermost choice. Nor can a proper intersection arc lie inside $E$: its endpoints would be on $\partial P$, outside $E$, while it cannot cross the disjoint intersection circle $c$. Thus $E$ is an actual disk with interior disjoint from the second family. It lies in the interior of the tetrahedron. [step 3.1, step 4.1, construct]

6.1 The circle $c$ lies on a disk $Q$ of the second family and bounds an interior subdisk $Q_0\subset Q$. Remove $Q_0$ and replace it by a nearby parallel copy of $E$, joining it to $Q\setminus\operatorname{int}Q_0$ in a small transverse collar of $c$. Choose the copy on the side of $P$ occupied by that outside collar of $Q$. The needed product coordinates are explicit for this $E$: the first-family disk $P$ is still the fixed boundary-parallel cap from step 2.1. Its graph in the boundary collar has the product coordinates supplied in [F1]; restrict them to the compact interior subdisk $E$ and take sufficiently small levels on its two sides. Thus no regular-neighborhood theorem for an arbitrary PL disk is needed. Compactness away from the attaching collar permits its interior to miss the entire second family. It also misses every first-family disk, since $E$ lies in one of their mutually disjoint disks and the push is to one side of that disk. Therefore the replacement is embedded, preserves the second family's embedding and leaves its tetrahedral boundary unchanged. It removes $c$ and every intersection circle inside $Q_0$, creates no new intersections, and changes no proper intersection arc. For the last assertion, a proper arc cannot enter $Q_0$ without crossing its boundary circle $c$, which is already a distinct intersection component. The disk $Q$ remains a disk with exactly its previous boundary type. [F1, step 2.1, step 3.1, step 5.1, construct]

7.1 Reapply step 5.1 to a remaining circle, if any, and step 6.1 to remove it. The finite number of intersection circles strictly decreases, while no new one is created. This ends with no tetrahedral intersection circles. Edge points and straight face chords have not changed, so step 4.1 still excludes same-face arc endpoints. Every replacement changed only an interior subdisk of one piece, preserving the abstract surface and its boundary. Gluing across the faces now gives the asserted finite global double-curve system, since the local intersection arcs match at the fixed transverse face crossings and have endpoints only on boundary faces. The boundary homotopies from step 2.1 preserve null-homotopy or its failure. All operations were finite in the original triangulation. [given, step 2.1, step 4.1, step 5.1, step 6.1, construct] ∎
