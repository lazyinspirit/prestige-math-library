---
id: thm-knot-wirtinger-presentation-correctness
kind: theorem
title: "Correctness of the Wirtinger presentation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps: [def-knot-planar-code,
       lem-wirtinger-crossing-ball-cover,
       lem-wirtinger-local-meridian-conjugacy,
       lem-knot-group-infinity-collar,
       alg-knot-wirtinger-presentation-from-code,
       thm-seifert-van-kampen,
       thm-group-pushout-as-an-amalgamated-quotient,
       def-group-presentation,
       def-free-group,
       thm-quotient-group-universal-property,
       def-based-loops-and-fundamental-group,
       thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-of-finite-wedge-of-circles,
       thm-fundamental-group-of-the-circle]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §§2–3"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
verification: {precheck: pass}
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot, let $D$ be a valid finite planar code for a regular diagram of $K$, choose a basepoint $b$ in the complement, and designate a starting under-arc. The finite procedure $\mathsf{Wirtinger}(D,a_0)$ terminates and returns a presentation with one positive-meridian generator for each under-arc and one crossing conjugacy relator for each crossing. For the based meridians determined by the diagram's common upper-collar paths from $b$, the homomorphism from the presented group to $\pi_1(S^3\setminus K,b)$ that sends each generator to its corresponding based positive meridian is an isomorphism. Changing the designated starting under-arc only relabels the same finite cyclic arc set and gives an isomorphic presentation. If all basing paths are changed by prepending the same based loop, every generator image is conjugated by the same element, so the isomorphism type is unchanged.

## Statement references

[[def-knot-planar-code|Finite code, crossings, and under-arcs]]

[[alg-knot-wirtinger-presentation-from-code|Finite Wirtinger constructor]]

## Facts & Assumptions

**Given:** A smooth oriented knot, its valid finite diagram code, a basepoint in the complement, and a designated base under-arc.

[F1] For $c>0$, the exterior retracts to a cover by the meridian region and contractible crossing regions with annular overlaps; the meridian region retracts to the free meridian wedge. For $c=0$, the Euclidean complement retracts to a circle represented by the unique positive meridian. [[lem-wirtinger-crossing-ball-cover]]

[F2] The annular core at each crossing imposes exactly the local conjugacy relation read by the constructor; reversed meridian orientation gives the inverse, and common basing-path change conjugates all generators simultaneously. [[lem-wirtinger-local-meridian-conjugacy]]

[F3] The open-cover fundamental group is the pushout of the inclusion maps. [[thm-seifert-van-kampen]]

[F4] The pushout with a trivial crossing-piece group kills the normal closure of the annular-core image. [[thm-group-pushout-as-an-amalgamated-quotient]]

[F5] The fundamental group of the meridian-region wedge is free on its standard loops. [[thm-fundamental-group-of-finite-wedge-of-circles]]

[F6] A free group is the free object on its declared generator set. [[def-free-group]]

[F7] The returned presentation is the free group on its generators modulo the normal closure of its relators. [[def-group-presentation]]

[F8] A quotient by the relator normal closure has the presentation's universal property. [[thm-quotient-group-universal-property]]

[F9] The inclusion from the Euclidean knot complement into the three-sphere complement induces an isomorphism. [[lem-knot-group-infinity-collar]]

[F10] The constructor makes one finite scan of under-arcs and crossings and returns the specified meridian assignment. [[alg-knot-wirtinger-presentation-from-code]]

[F11] The fundamental group of a circle is infinite cyclic on its once-around loop. [[thm-fundamental-group-of-the-circle]]

## Proof

1.1 By [F10], the constructor terminates and has exactly one generator per under-arc and one relator per crossing. If $c=0$, [F1] retracts the complement to a circle represented by the unique positive meridian; [F11] identifies its group as infinite cyclic, while [F6]–[F8] identify the returned one-generator empty-relator presentation with the same free cyclic group. If $c>0$, [F1] and [F5] give the free meridian basis for the meridian region. [given, F1, F5, F6, F7, F8, F10, F11, algebra]

2.1 Assume $c>0$ and add the crossing pieces in any fixed order. The ordered-intersection condition in [F1] makes the intersection at each attachment precisely its annular core. By [F3] and [F4], van Kampen kills the normal closure of that core's image; [F2] identifies this image with the relator emitted at that crossing. Repeating over the finite crossing set yields the quotient of the free meridian group by exactly the constructor's relator normal closure. [F1, F2, F3, F4, step 1.1, algebra]

3.1 By [F6] and [F7], the quotient in step 2.1 is the returned presentation group; [F8] identifies the quotient map with the homomorphism sending each symbol to its positive meridian. It is an isomorphism onto the group of the covered exterior by the pushout construction. [F3, F4, F6, F7, F8, step 2.1, algebra]

4.1 The compact-tube deformation retraction identifies the exterior group with the group of $\mathbb R^3\setminus K$, and [F9] identifies that group with $\pi_1(S^3\setminus K)$. Thus the stated meridian map is an isomorphism. [F1, F9, step 3.1, algebra]

4.2 By [F2], replacing the common basing path conjugates every generator image by the same element. Simultaneous conjugation is an inner automorphism of the target group, so the resulting presentation group remains isomorphic to $\pi_1(S^3\setminus K)$. [F2, step 3.1, algebra]

5.1 Changing the designated start arc reindexes the same finite list of under-arcs. The induced bijection of generator symbols carries each crossing's over/under labels, and therefore each constructor relator, to the corresponding relator in the new indexing. It extends to an isomorphism of the free groups and carries one relator normal closure onto the other; [F7] and [F8] give an isomorphism of the presented quotients. [F7, F8, F10, algebra] ∎
