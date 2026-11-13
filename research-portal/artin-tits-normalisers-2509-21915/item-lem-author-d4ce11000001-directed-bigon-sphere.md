---
title: Doubling edges with bigons preserves the spherical space
status: published
research_item: lem-author-d4ce11000001-directed-bigon-sphere
dependency_level: 24
---

## Prerequisites

- [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)
- [lem-author-d4ce11000001-local-dual-polygons](item-lem-author-d4ce11000001-local-dual-polygons)
- [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)
- [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)
- [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)
- [math:def-disjoint-union-topology](https://alphabetamath.cc/item/def-disjoint-union-topology)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)
- [math:thm-continuity-characterisations-top](https://alphabetamath.cc/item/thm-continuity-characterisations-top)
- [math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map)
- [math:def-oriented-smooth-manifold-and-oriented-chart](https://alphabetamath.cc/item/def-oriented-smooth-manifold-and-oriented-chart)
- [math:ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal](https://alphabetamath.cc/item/ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal)
- [math:def-induced-boundary-orientation](https://alphabetamath.cc/item/def-induced-boundary-orientation)
- [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells)


## Statement

Start with the spherical dual cell decomposition. Replace every undirected edge by two distinct directed one-cells in opposite directions, attach one bigon disk along their two-cycle, and retain one polygon disk for each dual face. Choose its cyclic boundary coherently with a fixed orientation of the sphere, using the directed edge on that face's side. The resulting finite cell complex is homeomorphic to $S^2$. There is one bigon for each undirected edge, not a second disk for a reversed cyclic reading of the same bigon.

## Statement references

[lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)

[lem-author-d4ce11000001-local-dual-polygons](item-lem-author-d4ce11000001-local-dual-polygons)

[math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map)

[math:def-oriented-smooth-manifold-and-oriented-chart](https://alphabetamath.cc/item/def-oriented-smooth-manifold-and-oriented-chart)

[math:ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal](https://alphabetamath.cc/item/ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal)

[math:def-induced-boundary-orientation](https://alphabetamath.cc/item/def-induced-boundary-orientation)

## Facts & Assumptions

[F1] [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere) gives a regular spherical dual decomposition with embedded disks and edges, and [lem-author-d4ce11000001-local-dual-polygons](item-lem-author-d4ce11000001-local-dual-polygons) gives its square/hexagonal face cycles. The CW convention and weak topology use [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology). Cell attachment uses [math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map): for an attaching map $f:S^{n-1}\to X$, the space $X\cup_f D^n$ is the quotient of $X\sqcup D^n$ identifying $z\in S^{n-1}$ with $f(z)\in X$.

[F2] A homeomorphism is a continuous bijection with continuous inverse, as in [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps).

[F3] [math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology) characterises open and closed sets by their inverse images under the quotient projection. In [math:def-disjoint-union-topology](https://alphabetamath.cc/item/def-disjoint-union-topology), a subset is open or closed exactly when its trace on each summand is. [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top) identifies relatively closed sets with traces of ambient closed sets. [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space) supplies closure of the closed sets under finite unions and finite intersections. Clauses (b) and (c) of [math:thm-continuity-characterisations-top](https://alphabetamath.cc/item/thm-continuity-characterisations-top) characterise continuity by inverse images of open or closed sets.

[F4] An orientation is a smooth choice of a positive ray in each tangent determinant line, as in [math:def-oriented-smooth-manifold-and-oriented-chart](https://alphabetamath.cc/item/def-oriented-smooth-manifold-and-oriented-chart). At $n=3$, [math:ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal](https://alphabetamath.cc/item/ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal) supplies the orientation of $S^2$ with the radial outward normal first. Its negative is also an orientation. The convention in [math:def-induced-boundary-orientation](https://alphabetamath.cc/item/def-induced-boundary-orientation) selects a boundary tangent $T$ by requiring that an outward transverse vector $\nu$ followed by $T$ be positive in the oriented surface.

[F5] [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells), Proof step 1.1, supplies chamber charts $v\mapsto v/h(v)$ onto convex affine polygons, with $h(v)>0$ on the closed spherical chamber. The inverse chart is $w\mapsto w/\lVert w\rVert$; these maps are smooth on neighbourhoods of the polygons in their respective sphere and affine plane.

## Proof

**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 Choose the flag construction of [F1] in the convex polygon charts of [F5], drawing straight segments from each chamber centre to its edge centres and vertices. Inverse radial projection makes every dual edge a finite concatenation of regular smooth arcs, and each face has the sector specified by the flag triangles at every corner. Use this realisation of the supplied dual decomposition. In the embedded dual sphere, replace the interior of each edge by two nearby arcs on its two sides with the same endpoints. This can be done simultaneously: take disjoint narrow strips away from small vertex disks, and inside each vertex disk run the arcs in their prescribed cyclic order, tapering their separation to zero at the vertex. In a sector between two old edges the two displaced boundary arcs can be chosen disjoint; there are finitely many sectors. The region between the two copies of one edge is an embedded disk with two boundary arcs, the desired bigon. Each original face, after removing its incident narrow strips, is still a closed polygonal disk with the same corner vertices. For example in a polygon-disk chart, move each boundary edge slightly inward, with the displacement vanishing at its endpoints; the remaining boundary is a simple polygonal curve bounding a radial disk. [F1, F5]

2.1 Fix the sphere orientation of [F4], or its negative, and give each dual face its restriction. On each smooth boundary arc use the outward-normal-first direction from [F4]. For two faces incident to the same arc, their interiors lie on opposite sides by the embedded flag construction in [F1]. At a point on the arc their outward transverse vectors can therefore be chosen as $\nu$ and $-\nu$. If $T$ is the first face's positive boundary tangent, then $(-\nu)\wedge(-T)=\nu\wedge T$ is positive in the same tangent determinant line, whereas $(-\nu)\wedge T$ is negative. Thus the second face's positive boundary tangent is $-T$. At a corner, use the one-sided directions on the bounding arcs of the face's sector from step 1.1: in an oriented planar sector the outward-normal-first rule directs one bounding arc into the corner and the next out of it. Consequently these arc directions concatenate into a cyclic traversal of the polygon boundary. This also continues through the intermediate edge centre of each broken dual edge, so the two incident faces traverse that entire edge in opposite directions. This explicitly defines coherent polygon boundary orientations in the present piecewise smooth model; no tangent at a corner is required. Reversing the sphere orientation reverses all these cyclic traversals and preserves their compatibility. [F1, F4, step 1.1]

3.1 These bigons and the remaining polygon disks partition the same sphere. Carry the cyclic traversals constructed in step 2.1 onto the remaining polygon disks, preserving their corner order. The two faces incident to an old edge have opposite boundary directions, so give its two displaced arcs these respective directions. Thus every polygon is attached along the required directed cyclic boundary, while the intervening bigon is attached along the two opposite arrows in succession. Write $Q_e$ for the closed region corresponding to each cell $e$, including vertices and edges. These are closed subsets of the sphere: they are the closures of the regions in the finite strip-and-vertex construction. Parametrise each edge once, and use that same parametrisation on every incident disk boundary. The embedded polygon-disk and bigon-disk charts in step 1.1 give homeomorphisms from the abstract closed model disks to the $Q_e$ that respect these parametrisations. To adjust any disk chart to the prescribed boundary parametrisation, identify both disks with the unit disk and extend the resulting circle homeomorphism $b$ by $ru\mapsto r b(u)$, sending the centre to the centre; the inverse uses $b^{-1}$ and both maps are continuous also at the centre because they preserve radius. The resulting maps agree under every attaching identification. Distinct cell interiors have disjoint images, and all overlaps on boundaries are exactly the prescribed edge and vertex identifications. Hence they induce a bijection $h:K\to S^2$ from the abstract attaching space $K$. [F1, F2, step 1.1, step 2.1]

4.1 Let $Z$ be the finite disjoint union of all the closed model cells, and let $q:Z\to K$ be the total attaching projection. To verify its quotient topology directly, order the disk attachments with all one-cells before all two-cells. Let $X_0$ be the discrete vertex set and write $X_i=X_{i-1}\cup_{f_i} B_i$ for the successive attachments of closed model disks, with $X_N=K$. By [F1], each attachment has a quotient projection $\pi_i:X_{i-1}\sqcup B_i\to X_i$. For any subset of $X_i$, [F3] says that it is open exactly when its preimages in $X_{i-1}$ and $B_i$ are both open. Apply this equivalence recursively to the preimage in $X_{i-1}$. The recursion ends at $X_0$, where openness is equivalent to openness of every trace on a vertex model point because $X_0$ is discrete. Thus $U\subseteq K$ is open exactly when its preimage in every closed model cell is open, which by the disjoint-union topology is exactly that $q^{-1}[U]$ is open in $Z$. This proves that $K$ has the quotient topology of $q$. Let $p:Z\to S^2$ restrict on each model cell to its homeomorphism onto $Q_e$. The subspace and disjoint-union definitions show that $p$ is continuous. It is also closed. Indeed, for a closed $C\subseteq Z$, each trace $C_e$ is closed in its model cell, so its image is closed in $Q_e$. Since $Q_e$ is closed in $S^2$, this image is closed in $S^2$ by the closed-trace description of subspace topology. The image $p[C]$ is the union of these finitely many closed images, hence is closed in $S^2$. This uses finiteness of the cell collection, rather than any unproved compactness assertion. [F1, F2, F3, step 3.1]

5.1 By step 3.1, $p=h\circ q$ and $h$ is bijective. For every open $U\subseteq S^2$, the identity $q^{-1}[h^{-1}[U]]=p^{-1}[U]$ and continuity of $p$ imply that $h^{-1}[U]$ is open by the quotient topology. Thus $h$ is continuous. If $A\subseteq K$ is closed, then $q^{-1}[A]$ is closed in $Z$; since $p$ is closed, $h[A]=p[q^{-1}[A]]$ is closed in $S^2$. These are precisely the inverse images of closed sets under the inverse function $h^{-1}:S^2\to K$, which is therefore continuous by [F3]. By [F2], $h$ is a homeomorphism. This proves the result for genuinely distinct directed one-cells, with exactly one bigon per old edge; if opposite arrows are instead just the two traversals of one geometric edge, the undoubled dual sphere already supplies the model. [F1, F2, F3, step 3.1, step 4.1] ∎
