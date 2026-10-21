---
id: def-flype-crossing-ball-and-alternating-tangle-data
kind: definition
title: "Flypes, crossing balls, and standard-position Conway spheres"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "These are finite local diagram and crossing-ball conventions; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.2 (Definitions 2.9–2.11) and §§3.1–3.2, arXiv:2008.06490v3"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "William W. Menasco and Morwen B. Thistlethwaite, The classification of alternating links, Annals of Mathematics 138 (1993), pp. 113–171"
      url: "https://doi.org/10.2307/2946636"
---

## Definition

A **2-tangle diagram** is a regular diagram in a disk of two properly embedded tangle arcs and possibly finitely many closed tangle components, with four specified endpoints on the disk boundary; the arcs and circles are disjoint in the represented 3-ball, while their projections may have crossings. A **flyping circle** is a simple closed curve in the projection sphere whose intersection with the diagram consists of exactly three points, exactly one of which is a crossing; the circle is transverse to both branches at that crossing and to the diagram at the other two points. A small annular neighborhood of this circle has two complementary tangle disks. A **flype** fixes the tangle in one disk, interchanges which pair of strands crosses in the annular neighborhood, and turns over the tangle in the other disk: its projected tangle is reflected and all its over-under crossing data are reversed. This turnover is a half-turn in three-dimensional space about an axis in the projection sphere. Component orientations are transported by this motion, and the exterior diagram is fixed. The move with the opposite choice of fixed disk is also allowed; a disk containing no crossings is allowed. A flype whose fixed tangle has no crossings is called an **entire flype**. Diagrams are drawn on the oriented projection sphere; a **sphere planar isotopy** is an orientation-preserving smooth isotopy of that sphere carrying the decorated diagram. A plane diagram is obtained by choosing a point of the sphere outside the projection and deleting it. At each crossing of a link diagram, a **crossing ball** is a small 3-ball in which the overpass lies on the upper hemisphere and the underpass lies on the lower hemisphere, with the rest of the link outside that ball. Replacing all crossing disks by upper hemispheres or by lower hemispheres gives the shifted projection spheres $S_+$ and $S_-$. A **saddle disk** in a crossing ball is a properly embedded disk whose boundary meets each of the two hemispheres in two arcs and whose interior passes across the equatorial crossing disk. For a closed embedded surface transverse to the link and to $S_+$ and $S_-$, each component $C$ of its intersection with either shifted sphere has a **bubble word**: read once around $C$, recording $P$ each time it crosses the link and $S$ each time it passes through a crossing ball along a saddle disk. The surface is in **bubble standard position** if every such word is nonempty and no word records the same crossing ball more than once. A **Conway sphere** is an embedded sphere meeting the link transversely in four points; it is in crossing-ball standard position when its intersection with the crossing balls consists of saddle disks and its shifted-sphere intersection curves satisfy the bubble-standard conditions.

The turnover convention is the one in Kindred's Definition 2.9 and Figure 1. In particular, an entire flype permits viewing the whole diagram from the opposite side of the sphere, as in his Definition 2.11. Closed components inside a tangle disk are carried along with its arcs.

## Definition references

[Kindred, *A geometric proof of the flyping theorem*, §2.2 (Definitions 2.9–2.11) and §§3.1–3.2](https://arxiv.org/pdf/2008.06490v3)

[Menasco and Thistlethwaite, *The classification of alternating links* (1993)](https://doi.org/10.2307/2946636)

## Facts & Assumptions

**Given:** A regular link diagram with finite crossing set and its embedding in the projection sphere; a flype is specified by a supplied flyping circle and a choice of the fixed tangle disk.

[F1] A regular link diagram has finitely many crossings with transverse branches, over-under data, and component orientations ([[def-regular-oriented-link-diagram]]).

## Proof
1.1 A sufficiently thin annular neighborhood of the supplied flyping circle contains its distinguished crossing and no other crossing: the crossing set is finite by [F1], and the circle has just the prescribed three intersection points. Transversality lets us narrow this neighborhood so its diagram consists only of the local strands at those points. The specified flyping circle, the chosen fixed disk and the annular crossing determine the local flype replacement: reflect the other disk and reverse each of its crossings, then reconnect its four ends through the modified annular crossing. This also transports any closed tangle components and the component orientations. The move is reversible by the same turnover construction. [given, F1, construct]

2.1 Each crossing ball is chosen inside a disjoint crossing neighborhood; its upper and lower hemispheres encode exactly the overpass and underpass of [F1]. The sphere intersections in the standard-position condition are finite transverse surfaces and saddle disks by definition, so the stated crossing-ball convention is well-defined for a supplied diagram and Conway sphere. [given, F1, step 1.1, construct] ∎
