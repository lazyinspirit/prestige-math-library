---
id: lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
kind: lemma
title: "Compatible whole-star triangulations of smooth three-manifold pairs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-relative-smooth-triangulation-and-projection-preserving-fitting, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited as the declared hypothesis of relative finite smooth triangulation; only finite additional choices are made."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§10.6, relative boundary extension, through the local finite-corners supplier; the simultaneous cut-pair gluing and differential-fan verification are supplied here"
---

## Statement

Assume full AC. Let $M$ be a compact smooth three-manifold with boundary allowed. Let $S_1,\ldots,S_l$ be finitely many pairwise disjoint compact neatly properly embedded smooth surfaces with supplied smooth two-sided product neighborhoods. Let $C$ be a finite disjoint union of smooth circles in $\partial M$ containing every component of $\bigcup_i\partial S_i$. Then $M$ has a finite whole-star smooth triangulation in which $\partial M$, all $S_i$ and $C$ are subpolyhedra, full after subdivision. Every compact boundary subsurface whose boundary consists of components of $C$ is a subpolyhedron as well.

Here neat means that the surfaces meet the ambient boundary transversely, with the usual product charts there. The conclusion supplies the PL structure compatible with these smooth data. It does not identify an arbitrary preexisting topological or PL marking with that structure.

## Facts & Assumptions

**Given:** Full AC and the compact smooth manifold, finite neat two-sided surface family and finite boundary circle system of the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] Whole-star smooth embeddings and finite corner-adapted relative boundary data have the exact differential-fan and orthant meaning of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F2] Compact smooth manifolds with corners have finite whole-star triangulations, and supplied compatible boundary triangulations extend pointwise, with compatible subdivisions allowed ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement).

[F3] Finite compatible convex cell decompositions have compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], Statement).

## Proof

1.1 Give $C$ finite whole-star smooth triangulations by [F2] in dimension one. Cut the boundary surface $\partial M$ along those circles. Its finitely many compact surface pieces have the matching triangulations on their boundary circles, so [F2] in dimension two extends them to whole-star surface triangulations. Glue the paired circle copies by their identical parametrizations. Along a glued circle the two tangent half-planes are opposite and their common tangent line is mapped identically; their differential fans therefore give the entire tangent plane injectively. After common subdivisions this gives a finite whole-star triangulation of $\partial M$ with $C$ a subpolyhedron. Each boundary subsurface of the Statement is a union of the resulting cut components and boundary circles, so is a subpolyhedron. Independently triangulate each $S_i$ by the dimension-two relative assertion of [F2], retaining its already fixed boundary-circle maps. [A1, F1, F2, given, construct]

2.1 Cut $M$ along all $S_i$, using the supplied product neighborhoods. The resulting compact smooth manifold $N$ has corners along their boundary circles. At such a circle the neat charts are $\mathbb R\times[0,\infty)\times\mathbb R$ with the surface the zero set of the last coordinate; either cut side is a quadrant times $\mathbb R$. Its boundary faces are the cut pieces of the old boundary and the copies $S_i^\pm$. Give these copies the identical maps obtained in step 1.1. Their maps agree on every common circle. Their differential fans give exactly the union of the two boundary faces of the quadrant: each face fan fills its half-plane, their common line agrees, and the two inward face directions are independent by neatness. Thus these are admissible corner boundary data in [F1], not merely unrelated simplexwise immersions. Apply [F2] to each component of $N$ with these total-boundary data. [F1, F2, step 1.1, construct]

3.1 The paired $S_i$ triangulations may have been subdivided differently during extension, but their maps are pointwise the same original maps. On each original abstract surface simplex the two finite subdivisions have a common convex-cell refinement, triangulated by [F3]. Extend that finite refinement to incident ambient simplices by taking its face refinements and coning each remaining cell from an interior point. This only subdivides the already smooth simplex maps; their whole-star differential fans are unchanged. Repeat finitely for all paired faces, then subdivide barycentrically to make the fits full. The paired copies now glue simplicially by their identical maps. Their finite union realizes the original smooth $M$, and its restrictions to each simplex are the old smooth maps. [F1, F3, step 2.1, construct]

4.1 Verify the ambient whole-star condition at the glued loci. At an interior point of an $S_i$, the two half-space differential fans from its two cut sides meet exactly in its tangent plane and fill opposite half-spaces of $T_xM$. They are injective individually by [F2] and agree on that common plane, so their union is an injective fan onto $T_xM$. At a boundary point of $S_i$, the two quadrant fans similarly fill the ambient tangent half-space, sharing precisely the cut-face sector; the inherited old-boundary faces join on its boundary plane. The map is therefore whole-star everywhere, including the corners restored by gluing. Away from the cut surfaces it already was so by [F2]. Finiteness, all required subpolyhedra and fullness follow from steps 1.1–3.1. The differential-fan charts are finite PL homeomorphisms onto linear spaces or half-spaces. They also give standard PL simplex links: slice their common convex cone refinement by the source link level and by a small convex target box, match the corresponding face incidences, and cone their finite face triangulations using [F3]. Thus the underlying triangulation has the standard PL sphere or ball links required by finite PL manifold suppliers. Every construction used the given smooth structure and finite data, establishing the stated compatibility and its limit. [F1, F2, F3, step 1.1, step 3.1, construct] ∎
