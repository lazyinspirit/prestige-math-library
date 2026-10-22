---
id: lem-wirtinger-crossing-ball-cover
kind: lemma
title: "A crossing-ball cover of a knot complement"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-knot-planar-code,
       lem-compact-knot-has-choice-free-tube,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-retraction-and-deformation-retract,
       def-based-loops-and-fundamental-group,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-of-the-circle,
       thm-fundamental-group-of-finite-wedge-of-circles]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4, Wirtinger presentation proof"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §2"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
    - title: "Stefan Friedl, Knot Theory, §5.3, proof of the Wirtinger Presentation Proposition"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
verification: {precheck: fail}
---

## Statement

Let $K\subset\mathbb R^3$ be a smooth oriented knot with a regular diagram represented by a valid finite planar code, and let $c$ be its number of crossings. If $c>0$, let $m=c$ be the number of under-arcs obtained by cutting the oriented circle at its $c$ underpassing points. Choose a sufficiently small closed normal tube $N(K)$ as in the compact-tube construction, and set $E_K=\mathbb R^3\setminus\operatorname{int}N(K)$. There is a subspace $Y\subset E_K$, fixed pointwise by a strong deformation retraction of $E_K$, with a finite relative-open cover
$$Y=U\cup V_1\cup\cdots\cup V_c$$
such that $U$ is path-connected and deformation retracts to a wedge of $m$ circles. There is a basepoint $b\in U$ in the product collar above the projection plane and a family of paths in that collar, extended through the local arc neighborhoods, for which the based loops around the under-arcs give the free meridian basis. Each $V_i$ is path-connected and contractible; $U\cap V_i$ is a path-connected open annulus whose core is the small circle at the $i$-th crossing; and $V_i\cap V_j=\varnothing$ for $i\ne j$. Consequently, in any ordering of the crossings, $V_i$ meets the union of $U$ and all earlier crossing pieces exactly in $U\cap V_i$.

For $c=0$, the diagram is the crossing-free unknot, $m=1$, and $\mathbb R^3\setminus K$ deformation retracts to one circle represented by a positive meridian of the unique under-arc. In all cases the compact-tube construction gives a deformation retraction $\mathbb R^3\setminus K\to E_K$.

## Statement references

[[def-knot-planar-code|Finite planar code, crossing points, and under-arcs]]

[[lem-compact-knot-has-choice-free-tube|Choice-free compact normal tube and radial complement retraction]]

## Facts & Assumptions

**Given:** A smooth oriented knot in $S^3$, a valid finite planar code for its regular diagram, and the compact normal tube from the compact-tube lemma.

[F1] The code has finitely many transverse crossing points, one oriented component, and one under-arc between consecutive underpassing points; in the crossing-free case it is one circle edge. [[def-knot-planar-code]]

[F2] A compact smooth knot has a uniform normal tube whose punctured complement retracts radially to the exterior. [[lem-compact-knot-has-choice-free-tube]]

[F3] A strong deformation retraction induces mutually inverse fundamental-group maps through inclusion and retraction. [[def-retraction-and-deformation-retract]], [[def-induced-homomorphism-on-fundamental-groups]], [[thm-induced-fundamental-group-map-functoriality]]

## Proof

1.1 If $c>0$, the code has one distinct underpassing point per crossing. Removing those $c$ points from the parameter circle leaves exactly $c$ open intervals, so $m=c$. If $c=0$, the definition gives the single circle edge and $m=1$. Since the crossing set is finite, choose pairwise disjoint local product charts around its points and then decrease the normal-tube radius from [F2] so it fits inside these charts. [given, F1, F2, choose, algebra]

1.2 The radial homotopy in [F2] fixes the exterior and deforms the punctured normal tube to its boundary. By [F3], it induces inverse maps on fundamental groups between the open complement and that exterior. This reduces the cover construction to the compact exterior but does not by itself produce the claimed sets. [F2, F3, step 1.1]

## Unresolved proof obligation

Construct $Y$, the relative-open sets $U,V_i$, and compatible product-collar homotopies, then verify directly that they cover $Y$, that their intersections are exactly the stated annuli, and that the homotopies paste to a strong deformation retraction. The meridian basis must also be checked for the stated common upper-collar basing paths. For $c=0$, the exterior-to-circle deformation retraction still needs its explicit construction. I have not established these arguments. Steps 1.1–1.2 prove only the item count and the reduction to the exterior; they do not prove the statement. This item is escalated for those exact geometric gaps.
