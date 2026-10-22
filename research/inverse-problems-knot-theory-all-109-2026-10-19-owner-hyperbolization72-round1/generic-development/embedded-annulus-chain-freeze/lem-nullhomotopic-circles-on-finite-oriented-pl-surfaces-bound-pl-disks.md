---
id: lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
kind: lemma
title: "Nullhomotopic circles on finite oriented PL surfaces bound PL disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-cellular-homology-computes-singular-homology
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - thm-fundamental-group-of-finite-wedge-of-circles
  - thm-reduced-words-form-the-free-group
  - thm-homotopy-lifting-for-covering-maps
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: https://www.cis.upenn.edu/~jean/surfclassif-root.pdf
      locator: "Finite polygon and graph reductions; the finite PL disk argument, including boundary subgroup injection, is proved below."
axiom_use: "No choice premise: all triangulations and collars are given, all reductions are finite, and shortlex words explicitly supply the coset representatives needed for normal form."
---

## Statement

Let $F$ be a compact connected oriented PL surface, possibly with boundary, with a given finite triangulation. Let $c\subset\operatorname{int}F$ be an embedded polygonal circle and suppose a compatible finite subdivision contains $c$ as a subcomplex. If $c$ is nullhomotopic in $F$, it bounds an embedded PL disk region in $F$. That region is unique unless $F$ is a PL sphere, in which case its two complementary regions are PL disks. More generally, every boundary component of a compact connected oriented finite PL surface other than a disk generates an injective infinite cyclic subgroup of its fundamental group. No smooth structure or surface triangulation-existence theorem is assumed.

## Statement references

[[thm-cellular-homology-computes-singular-homology]]

[[thm-fundamental-group-of-finite-wedge-of-circles]]

[[thm-seifert-van-kampen]]

[[thm-normal-form-for-free-products-with-amalgamation]]

## Facts & Assumptions

**Given:** The finite oriented triangulated surface, circle subcomplex and nullhomotopy in the Statement.

[F1] Cellular homology computes singular homology, and Euler characteristic of a finite complex is the alternating sum of its homology ranks. A finite wedge of circles has the free fundamental group on its circle loops; nonempty reduced words are nonidentity, and nullhomotopies lift through covering maps. [[thm-cellular-homology-computes-singular-homology]] [[thm-euler-poincare-formula-for-finite-cw-complexes]] [[thm-fundamental-group-of-finite-wedge-of-circles]] [[thm-reduced-words-form-the-free-group]] [[thm-homotopy-lifting-for-covering-maps]]

[F2] A connected-overlap open cover has the fundamental-group pushout. For injective overlap maps, amalgam normal form identifies the overlap group with a subgroup of that pushout. The normal-form proof needs coset transversals; these will be constructed explicitly here. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]]

## Proof

**Given:** The stated finite PL data.

1.1 A compact connected triangulated surface $A$ with boundary has a finite graph spine. Form the triangle dual graph with one extra exterior vertex, joined along each boundary edge, and choose a finite spanning tree rooted there. Delete triangles successively from the root outwards, pairing each with its edge towards its deleted parent; that edge is free when deleted. Each deletion is the linear collapse of a triangle across a free edge onto its two other edges. The remainder is a finite graph $G$, and the successive collapses give a deformation retraction. Geometrically $A$ is a regular thickening of $G$: reverse one collapse by adjoining its triangular bulge to the two retained strips; this replaces a disk by a disk relative the attaching arcs, by finite polygonal parametrization and coning its boundary subdivision. Inductively a thickening made of vertex disks and edge bands is PL homeomorphic to $A$. If $G$ is a tree, successively remove a leaf disk and its incident band to see that this thickening is a PL disk. [given, construct]

1.2 The circle $c$ has a PL annular neighborhood, obtained from its finitely many edge rectangles and vertex fans in the oriented triangulation. If $F\setminus c$ were connected, a finite path through the dual triangles of this cut surface could join opposite sides of a small segment of $c$. Close it across that segment to obtain a polygonal cycle crossing $c$ once modulo two. Signed crossings with this cycle define a mod-two one-cocycle on a subdivision: on each triangle the entering and exiting crossings cancel. Its evaluation on $c$ is one, detecting a nonzero cellular, and hence singular, homology class by [F1]. This contradicts the given nullhomotopy. Therefore $c$ separates. The annular collar has two connected sides, and every complementary component must meet one of them; otherwise it would be open and closed in connected $F$. Hence there are exactly two components, whose closures $A_0,A_1$ are compact connected finite PL surfaces with distinguished boundary $c$. [F1, given, construct, algebra]

2.1 If $A$ is not a disk, prune graph leaves and their bands. The nonempty resulting core has every vertex of degree at least two; it is nonempty because a tree thickening was a disk. A boundary circuit of its oriented thickening goes along an edge band and takes the next half-edge in cyclic order at the next vertex disk. At a vertex of degree at least two it never immediately reverses the same edge. It is therefore a nonempty cyclically nonbacktracking edge circuit, and pruning has only removed immediate edge-and-inverse excursions from the original boundary circuit. To check nontriviality without changing this edge model, construct the graph whose vertices are reduced edge paths from a fixed vertex of $G$, with edges given by appending one edge and cancelling an immediate inverse. It is a tree, since a nonempty path has its unique shorter prefix as parent, and its local edge stars map bijectively to those of $G$. A nonbacktracking circuit of positive length lifts to a path with distinct endpoints in this tree; so does every positive power of a cyclically nonbacktracking circuit. Equivalently collapse a spanning tree of $G$ and use the reduced-word group in [F1]. Thus each boundary circuit has infinite order and generates an injected infinite cyclic group in $\pi_1(A)$. [F1, step 1.1, construct, algebra]

3.1 If neither $A_i$ were a disk, step 2.1 would make the boundary circle an injected infinite cyclic subgroup in each factor group. Those groups are finite-rank free: collapse a finite spanning tree of their graph spines in step 1.1 and use [F1]. Order their finite alphabets and enumerate reduced words by length and then lexicographically. In each coset of its cyclic boundary subgroup take the least word. This supplies all required transversals by a formula, with identity in the subgroup coset, without arbitrary-index choice. Thicken the two sides slightly into the collar of $c$. They form an open cover with connected overlap retracting onto $c$. By [F2] their group pushout is $\pi_1(F)$, and normal form with these explicit transversals makes the common cyclic boundary group inject into it. Thus $c$ would be nontrivial in $\pi_1(F)$, contradicting the nullhomotopy. At least one $A_i$ is therefore a PL disk, giving the required embedded disk region. [F1, F2, step 1.1, step 2.1, step 1.2, construct, algebra]

4.1 The interior of any disk region with boundary $c$ is open and closed in one component of $F\setminus c$, and hence is that whole component; its closure determines the region uniquely on that side. If both sides are disks, their union is all of $F$, and the two disks glued along their polygonal boundary give a PL sphere: extend the boundary PL circle map by coning a common finite subdivision. Conversely, on a PL sphere a nullhomotopic $c$ has a disk side by step 3.1; its other side has Euler characteristic one, since the sphere has characteristic two, a disk one and the common circle zero. Its graph spine therefore has rank zero, is a tree, and step 1.1 makes that side a PL disk as well. This proves existence, uniqueness, the sphere exception and the boundary-subgroup assertion. Every construction used finitely many triangulation operations or the explicit shortlex formula. [F1, step 1.1, step 2.1, step 1.2, step 3.1, construct, algebra] ∎
