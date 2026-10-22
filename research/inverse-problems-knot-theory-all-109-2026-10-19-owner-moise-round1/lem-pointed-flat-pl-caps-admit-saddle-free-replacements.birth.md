---
id: lem-pointed-flat-pl-caps-admit-saddle-free-replacements
kind: lemma
title: "Pointed flat piecewise linear caps admit saddle-free replacements"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-three-disk-pl-severing-reassembles-parametrized-balls]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $Z$ be a supplied finite parametrized embedded PL three-ball with a nonnegative affine height $h$, and let $Z_0$ be a convex three-dimensional polytope with an affine height $h_0$. Assume $D=h^{-1}(0)\cap Z$ and $D_0=h_0^{-1}(0)\cap Z_0$ are boundary disks. Suppose a supplied PL boundary homeomorphism $j:\partial Z\to\partial Z_0$ preserves height and maps $D$ onto $D_0$. Let $Q_0$ be a vertex of the polygonal face $D_0$. Assume the faces of $Z_0$ other than $D_0$ are partitioned into one triangular side face $G_0$ meeting $D_0$ exactly at $Q_0$, a top face $T_0$ at positive constant height, and the remaining side faces. Put $Q=j^{-1}(Q_0)$.

For some arbitrarily short positive height range there is a parametrized PL disk $A\subset\partial Z$ containing $D$, meeting $j^{-1}(G_0)$ exactly at $Q$, and a parametrized PL disk $A'\subset Z$ with $A\cap A'=\partial A=\partial A'$, such that $A\cup A'$ bounds a supplied parametrized PL three-ball. On the boundary obtained by replacing $A$ by $A'$, every new interior point away from $Q$ has a regular local height-product chart; no positive-height saddle is introduced. The new cap meets height zero exactly at $Q$. Consequently, whenever the replaced disk lies in an embedded PL sphere and the sphere after replacement bounds a supplied PL ball, the original sphere also bounds one. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The two balls, heights, boundary height-preserving map, bottom disks, side triangle and top face as stated.

[F1] Compatible finite triangulations of convex cells and finite PL maps or marked subpolyhedra ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F2] Three-disk PL severing transfers supplied ball parameters ([[lem-three-disk-pl-severing-reassembles-parametrized-balls]]).

## Proof

**Given:** The stated data.

1.1 Extend $j$ to a PL homeomorphism $f:Z\to Z_0$. Use the supplied parameter of $Z$ to transfer $j$ to the boundary of a convex ball, triangulate it there and on $\partial Z_0$, and cone the boundary map from interior points. Convexity makes the matching cone-simplex maps bijective with PL inverses. Choose a common finite triangulation on which $f,h,h_0\circ f$ are linear. The last two functions have exactly the same zero vertices, namely those on $D$, and are strictly positive at all other vertices. Cut at a number $\delta>0$ below all their positive vertex values and below the top height. On corresponding simplices the two cuts have identical face posets: they retain the zero vertices and cut precisely the zero-positive edges. Inductively match the truncated cells, fixing $j$ on their old boundary faces, matching the top sections by compatible face maps, and coning the remaining boundaries between interior points at height $\delta/2$. Such points exist on every mixed face by convexity. The map preserves height on every cone simplex. This gives a PL homeomorphism $f_\delta:Z\cap\{h\le\delta\}\to Z_0\cap\{h_0\le\delta\}$ preserving height and equal to $j$ on the old boundary. This is the explicit zero-vertex collar-leveling argument; it does not assert that the original extension $f$ preserved height. [given, F1, construct]

2.1 Choose an affine function $L$ with $L(Q_0)=0$, $L>0$ on $D_0\setminus\{Q_0\}$, and $L\ge0$ on $D_0$: the sum of two supporting inequalities of the polygon at its vertex does this. For sufficiently small $e>0$, $h_0>eL$ on $G_0\setminus\{Q_0\}$ and on the section $h_0=\delta$. The first assertion follows by checking the two nonzero vertices of the triangle and using affinity; the second follows from compactness and $\delta>0$. Then $$W_0=Z_0\cap\{h_0\le\delta,\ h_0\le eL\}$$ is a convex three-ball. Its new face $A'_0=Z_0\cap\{h_0=eL\}$ is a convex polygonal disk lying below $\delta$, and its remaining boundary $A_0$ lies in the old boundary of $Z_0$. It contains $D_0$, meets $G_0$ exactly at $Q_0$, and misses the top section. Both boundary disks have finite PL parameters: $A'_0$ is convex, and the complement of the relative interior of a face in a convex polyhedral sphere is a PL disk, as follows by the finite truncated-vertex planar chart and polygonal disk-extension construction. In particular $\partial W_0=A_0\cup A'_0$ and their intersection is their common boundary. [F1, step 1.1, construct]

3.1 The retained body $Z_0\cap\{h_0\ge eL\}$ is convex and has its unique height-zero point at $Q_0$. Every new point of its boundary away from $Q_0$ and from the unchanged attachment boundary is regular for height: at a new vertex strictly between the extrema, its convex link circle has a positive arc and a negative arc, each connected, because its lower and upper cone sections are convex; face and edge charts give the same conclusion. Choose $L$ and then $e$ outside the finitely many exceptional values making the new planar face horizontal or introducing a non-extremal horizontal face. This retains the strict inequalities in step 2.1. Coning the link arcs gives the local height-product charts, equivalently by the explicit two-half-space polygonal fan straightening. Pull $W_0,A_0,A'_0$ back by $f_\delta$. Height preservation gives the claimed new regular charts and the single zero point $Q$. The disk replacement is confined below any initially prescribed positive bound by taking $\delta$ smaller. [F1, step 1.1, step 2.1, construct]

4.1 Let $E$ be the rest of the sphere after deleting $\operatorname{Int}A$. Its intersection with the pulled-back ball is $\partial A$, since the old boundary portion of that ball is exactly $A$. Thus $E,A,A'$ satisfy [F2]. The supplied ball bounded by $A\cup A'$ and any supplied ball bounded by $E\cup A'$ give a supplied ball bounded by $E\cup A$. All triangulations, cuts, cones and exceptional-value exclusions used finite collections; no choice assumption is introduced. [F2, step 2.1, step 3.1, construct] ∎
