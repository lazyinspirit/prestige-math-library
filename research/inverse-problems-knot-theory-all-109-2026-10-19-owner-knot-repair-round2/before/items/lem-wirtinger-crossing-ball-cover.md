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

Let $K\subset\mathbb R^3$ be a smooth oriented knot with a regular diagram represented by a valid finite planar code, and let $c$ be its number of crossings. Choose a sufficiently small closed normal tube $N(K)$ and set $E_K=\mathbb R^3\setminus\operatorname{int}N(K)$. If $c>0$, there is a subspace $Y\subset E_K$, fixed pointwise by a strong deformation retraction of $E_K$, with a finite relative-open cover
$$Y=U\cup V_1\cup\cdots\cup V_c.$$
The space $U$ deformation retracts to a wedge of $c$ circles. With a common basepoint in the collar above the diagram and access paths in that collar extended into the arc charts, the positive under-arc meridians are its free basis. Each $V_i$ is contractible, $U\cap V_i$ is an open annulus around the $i$-th crossing attachment, and distinct $V_i$ are disjoint. Thus $V_i$ meets $U$ and any previously attached crossing pieces precisely in $U\cap V_i$.

For $c=0$, the Euclidean complement has homotopy type $S^1\vee S^2$, with the circle represented by the positive meridian. In particular its fundamental group is infinite cyclic; the extra sphere at infinity must not be discarded. In all cases the punctured normal tube retracts radially to its boundary, giving a strong deformation retraction $\mathbb R^3\setminus K\to E_K$. These constructions require only finitely many charts and no choice axiom.

## Statement references

[[def-knot-planar-code]].

[[lem-compact-knot-has-choice-free-tube]].

## Facts & Assumptions

**Given:** The knot, its finite diagram code, and a sufficiently small normal tube.

[F1] A finite regular code has $c$ underpassing points and, for $c>0$, $c$ maximal under-arcs. Its finite drawing separates every pair of disjoint closed arc pieces by a positive distance. [[def-knot-planar-code]]

[F2] The compact-tube construction supplies the normal coordinates and radial retraction. [[lem-compact-knot-has-choice-free-tube]]

[F3] A CW subcomplex whose inclusion is a homotopy equivalence is a strong deformation retract; homotopic attaching maps of a CW pair give homotopy equivalent adjunction spaces. [[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]]

[F4] Collapsing a supplied contractible CW subcomplex gives a homotopy equivalence. [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]

[F6] A simple polygon has its bounded polygonal region and the crossing-parity side structure. [[thm-polygonal-jordan-curve]]

[F5] Wedges of circles have the free group on their circle loops, and the sphere is simply connected. [[thm-fundamental-group-of-finite-wedge-of-circles]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-seifert-van-kampen]]

## Proof

1.1 Cut out disjoint small underpass intervals, one in each crossing box. The remaining projected arcs are embedded and pairwise disjoint: an interior double point would have an underpassing preimage, which has been removed. Put these arcs at height $1$, their ends in the plane $z=0$, and join each pair of ends of a removed underpass below that plane. This normalization preserves the complement pair. Indeed, inside a crossing box the two branches retain a strict height inequality while their heights interpolate; away from these boxes projection is injective and vertical interpolation cannot introduce intersections. A change of height $d(q)$ on a strand extends to a local ambient map $(q,z)\mapsto(q,z+\chi(z)d(q))$, subdividing the interpolation so that $1+\chi'(z)d(q)>0$. Finitely many disjoint strip charts, smooth cutoffs and parameter subdivisions suffice. Planar bends can likewise be straightened in their disjoint strip charts. All these maps are the identity in a common high collar. [given, F1, construct]

2.1 Here is a precise convenient tunnel model for the normalized knot. In each crossing box choose a small convex polygonal footprint $F_i$ and a convex lower cap $C_i=\{(q,z):q\in F_i,\ h_i(q)\le z\le0\},$ where $h_i$ is piecewise linear, negative inside $F_i$ and zero on its boundary. Take the lower arc to be the two straight segments from its two interior top-face endpoints to one interior point of $C_i$. This replacement of the underpass is realized by vertical interpolation of its negative graph, fixing its endpoints. Each $C_i$ is a product neighborhood of that arc: radial coordinates from the interior vertex identify $C_i$ with a ball; on its boundary send two disjoint disks around the endpoints of a diameter to small disks around the two top endpoints, and extend radially. Such a boundary map is constructed by joining the disk centers by simple polygonal arcs, taking rectangular strips around those arcs, and using affine maps on a finite common triangulation; outside the strips it is the identity. Thus it identifies a standard cylinder core with the two-segment arc and its two end disks with the designated exits. Attach product tubes along the disjoint upper arcs to those exits. The resulting neighborhood $N_*$ has one cap and one upper tube per underpass, joined in the same single cycle as $K$; its coordinates are a disk bundle around $K$, not an assumption about an arbitrary regular neighborhood. Corners and the core bends can be rounded inside disjoint smaller charts; retain the polygonal cap boundary, which is only used topologically. [F1, step 1.1, construct]

3.1 The model can be compared with the given sufficiently small normal tube without invoking a uniqueness theorem or choice. Make its disk-bundle chart smooth near the core and normalize its differential there to the given normal chart; the required linear change is fibrewise, with the tangential component removed by a change of core parameter. In finitely many charts the two resulting embeddings differ by $O(|v|^2)$, with derivative difference $O(|v|)$. Replace the model chart near $v=0$ by the given one using a radial cutoff supported where $|v|<2\delta$ and equal to one for $|v|\le\delta$. The derivative of the correction is $O(\delta)$; compactness and a finite minimum of the chart injectivity bounds therefore preserve a bundle embedding for small $\delta$. Injectivity between nonadjacent core charts follows from their positive separation. The modified chart equals the given normal chart for $|v|\le\delta$ and retains $N_*$ as its outer boundary. Choose the normal-tube radius $\rho<\delta$. In these product coordinates, replace every fibre radius $r\in[\rho,1]$ by $(1-s)r+s$ and fix the exterior of $N_*$. This is a strong deformation retraction from $E_K$ to $\mathbb R^3\setminus\operatorname{int}N_*$, fixed on its target. It agrees on the outer boundary and never enters the removed radius-$\rho$ tube. [F2, step 2.1, construct]

4.1 Take a large ball $B_R$ containing $N_*$. Outside it, the homotopy $x\mapsto((1-s)+sR/|x|)x$, with the interior fixed, retracts the exterior to its truncation $X$ in $B_R$. Its outer sphere is retained. Write $A=X\cap\{z\ge0\}$. Below the plane, the exterior is exactly $B=\{(q,z):-\sqrt{R^2-|q|^2}\le z\le h(q)\},$ where $h=h_i$ on $F_i$ and is zero elsewhere; enlarge $R$ so every cap lies above the lower hemisphere. The top plates of the caps belong to $A$ as tube-boundary faces, except for the two exits occupied by upper tubes. Thus $X=A\cup B$ and $A\cap B$ is the equatorial disk with the interiors of the $F_i$ removed. On $B$ use $(q,z)\mapsto(q,(1-s)z+s h(q))$ and on $A$ the identity. These maps agree on the overlap, remain in the indicated vertical intervals, and paste continuously because the two sets are closed in $X$. They fix their target $Y_*=A\cup\bigcup_i D_i,\qquad D_i=\{(q,h_i(q)):q\in F_i\},$ pointwise. This proves the global strong deformation retraction, including the lower region and infinity. [step 2.1, step 3.1, construct]

5.1 The upper region $A$ is a ball with the neighborhoods of $c$ disjoint boundary-parallel arcs removed. The parallelism disks are the vertical curtains beneath their disjoint projected arcs. Their strip neighborhoods are disjoint. Cutting these strips off the upper half-ball leaves a ball with finitely many boundary indentations: flatten each indentation in its rectangular strip coordinate, fixing the other faces. The strip containing an arc is a ball with a straight diameter tube removed. In cylindrical coordinates this last space is $S^1\times\{(r,z):r\ge\epsilon,\ r^2+z^2\le1\},$ whose second factor is a convex disk. Hence $A$ is a boundary connected sum of $c$ solid tori, glued through specified disks to the remaining ball. For an actual bouquet spine, cut each solid torus across a meridian disk and absorb its remaining ball into the central ball. The result is one ball and $c$ product one-handles. Join the centers of the $2c$ attaching disks to an interior point by disjoint star arms in that ball; this is possible explicitly by radial arms after flattening the finitely many boundary disks. Add the one-handle core intervals. The resulting embedded graph is a bouquet of $c$ circles, since every vertex other than the central one has degree two. The inclusion is a homotopy equivalence: contract each transverse disk factor of a handle, and in the central ball extend the contraction of its finitely many attaching disks to their centers and star arms; this is the relative CW homotopy extension of [F3], applied to the contractible finite disk-and-star subcomplex. These contractions give the homotopy inverse, and [F3] supplies a strong deformation retraction onto the actual embedded graph. The loop through each drilled tube crosses precisely its own curtain once. With the access paths in the retained upper collar, these loops are the positive under-arc meridians, so [F5] identifies them as the free basis, rather than merely normal generators. [F3, F5, step 1.1, step 4.1, construct]

6.1 Fix disk coordinates $\phi_i:\overline D^2\to D_i$ and constants $0<r_0<r_1<1$. In $Y_*$ set $V_i=\phi_i(\{|v|<r_1\})$ and let $U$ be the complement of the union of the closed disks $\phi_i(\{|v|\le r_0\})$. These sets are relative-open: the cap interiors have their ordinary disk topology, their closures away from their boundary are disjoint from $A$, and the omitted closed disks are closed in $Y_*$. They cover because $r_0<r_1$. Each $V_i$ is an open disk, different $V_i$ are disjoint, and their overlaps with $U$ are exactly the annuli $r_0<|v|<r_1$. On each outer collar, increasing its radius by $r\mapsto(1-s)r+s$ retracts $U$ to $A$, fixing $A$. Step 5.1 supplies its meridian basis. Transfer these sets and the composed homotopies back through the finite normalizations in steps 1.1, 2.1 and 3.1. They give the stated subspace and cover in the original exterior. [step 4.1, step 5.1, construct]

7.1 For $c=0$ use the polygonal drawing certificate. Its bounded side is supplied by [F6]. A finite triangulation is obtained by diagonals: at a convex vertex use its neighbor triangle if it contains no other vertex; otherwise join it to a vertex in that triangle farthest from the opposite side. The open smaller triangle has no intervening vertex, so this diagonal lies on the bounded side; cutting along it reduces the vertex count. Induction yields the triangulation. Its triangle adjacency graph is a tree, so a leaf triangle is a boundary ear. The polygon can now be straightened without a general Schoenflies theorem: successively remove a boundary triangle with two boundary edges, and use the affine triangle chart to straighten that boundary segment; induction reduces to a triangle. The inverse finite chart moves and a radial plane map identify it with a round circle; interpolate its height vertically to flatten the actual knot. For that circle use $S^3\subset\mathbb C^2$, $K=\{z_1=0\}$, and infinity $p=(1,0)$. The map $(w,e^{it})\longmapsto(\sqrt{1-|w|^2}e^{it},w)$ identifies $S^3\setminus K$ with $D^\circ\times S^1$, and $p$ with $(0,1)$. Identify $D^\circ$ with an open square and radially clamp its outer part to a smaller closed square. The punctured product is now $([-1,1]^2\times S^1)\setminus\{(0,1)\}$. Represent the circle as $[-1,1]/(-1\sim1)$ with the puncture at coordinate zero. For $v\in[-1,1]^3\setminus\{0\}$ the formula $v\longmapsto\left(1-s+\frac{s}{\|v\|_\infty}\right)v$ retracts onto the cube boundary; it fixes both identified end faces, so it descends to the product quotient. The resulting spine is a torus with one meridian disk attached. Collapse that disk by [F4]. The quotient is a sphere with its two poles identified. Equivalently, attach an interval between those poles and collapse that contractible interval, again by [F4]. Moving one attaching endpoint along a fixed meridian path to the other gives $S^2\vee S^1$ by [F3]. The retained circle is the $e^{it}$ factor, namely the positive meridian. Its fundamental group is $\mathbb Z$ by [F5]. Finally the normal radial homotopy [F2] proves the asserted retraction onto $E_K$ in every case. [F2, F3, F4, F5, F6, construct] ∎
