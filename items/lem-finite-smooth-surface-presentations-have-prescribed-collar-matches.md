---
id: lem-finite-smooth-surface-presentations-have-prescribed-collar-matches
kind: lemma
title: Finite smooth surface presentations admit prescribed collar matches
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema
  - lem-polygonal-schema-reduction-moves
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type
  - lem-isotopy-extension-for-a-compact-source-with-boundary
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Gallier and Xu, A Guide to the Classification Theorem for Compact
        Surfaces
      url: https://www.cis.upenn.edu/~jean/surfclassif-root.pdf
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 1
---

## Statement

Assume Countable Choice. Let $S_0,S_1$ be compact connected oriented smooth surfaces with nonempty smooth boundary. Supply finite smooth triangle presentations: face-to-face triangular disks, with circular interior vertex links and interval boundary links, whose parametrizations are smooth nonsingular maps in surface charts through each closed triangle. Suppose the two presentations have the same Euler characteristic and the same positive number $b$ of boundary components.

For any bijection of their boundary components, any orientation-preserving smooth circle maps on the paired components, and any prescribed inward collar germs, there is an orientation-preserving smooth diffeomorphism $B:S_0\to S_1$ realizing those circle maps and their collar identifications. In particular one may prescribe one marked point on each boundary circle. The diffeomorphism can additionally agree with finitely many prescribed orientation-preserving interior diffeomorphism germs at distinct points with distinct target points, while retaining the boundary collars.

All surface presentations are supplied finite data. No triangulation-existence, arbitrary topological smoothing, three-dimensional smoothing or unproved smooth classification result is assumed.

## Facts & Assumptions

**Given:** The finite smooth surface data, equal Euler characteristics, paired boundary components and their oriented maps and collars, and optional finite interior germs.

[F1] A closed finite triangulated oriented surface has a one-polygon presentation. Finite polygon subdivisions, diagonal cuts/merges, inverse-pair cancellation and interlaced-handle extraction give its oriented commutator normal form. These are finite constructions without choice; the supplied smooth realizations are handled explicitly below rather than assuming that a topological homeomorphism is smooth. ([[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]], [[lem-polygonal-schema-reduction-moves]])

[F2] Smooth Jordan disks have actual smooth parametrizations. Every oriented boundary diffeomorphism extends over such a disk with prescribed boundary collar and one prescribed positive interior germ. ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]])

[F3] A boundary connected sum with a standard disk, rounded in actual collar coordinates, preserves smooth diffeomorphism type. Compact-source embedding isotopies, with support in a specified neighborhood, extend to ambient isotopies. Both statements hold under Countable Choice. ([[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]], [[lem-isotopy-extension-for-a-compact-source-with-boundary]])

## Proof

1.1 We first record the smooth finite neighborhood version of the polygon construction. Choose small smooth disks at every supplied vertex and thin edge rectangles along its edges, with corner roundings in the triangle coordinates. This gives a ribbon neighborhood of the finite one-skeleton, with cyclic orders fixed by orientation. A free-triangle collapse can be realized on such rounded neighborhoods by deleting a smooth disk bulge along one boundary interval: in the reference triangle retain thin strips of its other two sides, a rounded disk at their common vertex, and small disks at its other vertices. The removed middle sector has one attaching interval along those strips. It is a rounded convex triangle, hence a standard disk by radial parametrization. Its collar and the retained collars are the same normal coordinates on both sides. Consequently [F3] implements the collapse by a smooth diffeomorphism relative to all unrelated boundary intervals. A finite dual tree rooted at the exterior collapses a boundary surface to a finite graph, as follows directly from the interval/circular links: each triangle has a free edge when its parent has already been removed. Reversing these finitely many disk bulges identifies the actual surface smoothly with a rounded ribbon neighborhood of that graph. This is a statement about neighborhoods, not a diffeomorphism collapsing an edge or face to a lower-dimensional set. [F2, F3, given, construct]

2.1 The combinatorial normal-form operations in [F1] also have smooth ribbon-neighborhood realizations. Merging two vertex disks joined by a tree band replaces their union by one disk: absorb the band and one vertex disk along its boundary interval using [F3]. Match every other incident band interval by its boundary parameter and apply [F2] with those parameters and collars; they retain their cyclic order. A diagonal split is made by a smooth embedded arc in one disk interior, transverse to its boundary at its two distinct endpoints; cutting its product strip and then identifying its two banks recovers the SAME smooth neighborhood. In an inverse merge two such disks join along that strip. Boundary-side subdivision only adds a marked point to its parameter. For an inverse-pair cancellation, its two successive boundary occurrences of the same band and intervening disk strip form a disk bulge, handled by step1.1. The three split/merge operations of the interlaced-handle extraction in [F1] are performed with these same smooth arc strips. At every new vertex use a small disk with its incident strip endpoints in their cyclic order; [F2] matches its boundary arcs and their product collars. Thus the seam maps agree on whole collars and the resulting finite pasting is a smooth map with smooth inverse, including at the vertices. No map that collapses a tree to a point is used as a diffeomorphism. [F1, F2, F3, step 1.1, construct]

3.1 Cap every boundary component by a parametrized smooth disk, using its supplied collar and a finite fan triangulation, and round the finite presentation seams in their signed collars. This supplies a closed smooth surface and finite face presentation. The finite [F1] reduction, implemented on rounded neighborhoods as in step2.1, identifies it smoothly with a sphere or a fixed standard genus-$g$ commutator model. One may retain a small disk in a face throughout the procedure, do the ribbon construction on its complement, and finally extend across that retained disk by [F2]; this avoids treating a closed surface as a neighborhood of its one-skeleton alone. In an oriented reduced one-vertex word, an unprocessed opposite pair must interlace another, unless the terminal sphere digon is reached: otherwise its two sides separate the remaining vertex germs. Extract such a pair by the explicit handle move in [F1] and repeat. This is a finite decreasing word procedure. Its final cell counts give $\chi(\widehat S)=2-2g$, whereas capping the $b$ boundary components added $b$ disk faces and gives $\chi(\widehat S)=\chi(S)+b$. Hence the two capped surfaces have the same $g$ and are smoothly identified by their constructions. The capped disk images are actual smooth embedded disks in that common closed model. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 In a connected closed smooth surface any two ordered finite disjoint families of smoothly parametrized embedded disks can be matched by an orientation-preserving diffeomorphism. Here is the required finite construction. Choose finitely many distinct parking points outside the TARGET disk family; its complement is a nonempty open set, since finitely many disjoint closed disks cannot equal a connected closed surface. Choose a center in each source disk avoiding those finitely many points. First shrink each source disk into a small disk about that center using its parametrization and a radial shrinking isotopy of that compact disk, and extend it by [F3] with support near that disk. Take the shrunken images small enough to miss every chosen parking point. No assertion that the complements of the two ORIGINAL disk families intersect is needed. Join successive disk centers to their assigned parking points, and then to their assigned target centers, by paths missing the other parked small disks. Such paths exist: a path in a connected surface can be covered by finitely many disk charts, replaced there by polygonal subpaths, and any segment entering one of the finitely many forbidden small disks can be routed along its circle collar instead. Subdivide into finitely many chart segments, shrink the moving disk if necessary, and extend the translation isotopy of a small coordinate disk along each segment by [F3]. All supports miss the other parked disks. A final expansion, the inverse target shrinking, matches each entire disk. Orientation of the transported parametrization can be adjusted by an interior coordinate rotation and a positive linear path. Thus apply this construction in step3.1 to send the capped disks to their prescribed paired capped disks. Restricting to their complements gives a preliminary oriented diffeomorphism $S_0\to S_1$ with the desired boundary-component correspondence. [F2, F3, step 3.1, construct]

5.1 Correct its circle maps and collar germs separately in the disjoint boundary neighborhoods. The difference between its circle map and the prescribed one has a smooth increasing lift $h(\theta)$ with $h(\theta+2\pi)=h(\theta)+2\pi$. The lift interpolation $(1-t)\theta+t h(\theta)$ has positive angular derivative. Multiply its parameter by a normal cutoff, equal to one at the boundary and zero beyond a collar; its angular derivative remains positive, so this gives the required supported boundary-map correction. To correct the collar germ use the exact collar interpolation construction in [F2]: a relative collar map has coordinates $(\theta,r)\mapsto(H(\theta,r),R(\theta,r))$, with $H(\theta,0)=\theta$, $R(\theta,0)=0$, $R_r(\theta,0)>0$. Interpolation with the identity is an embedding on one uniformly narrow two-sided annulus, since the boundary Jacobian is triangular with positive diagonal; compactness and the local inverse exclude collisions after a common shrink. Extend this compact annular isotopy by [F3] in the double or capped surface. It fixes the boundary pointwise and preserves its two sides. Restricting back realizes exactly the prescribed collars on a common smaller width. [F2, F3, step 4.1, construct, algebra]

6.1 Finally match optional distinct interior points by the same finite parking and path construction in the interior, with supports away from all boundary collars. To realize each specified germ at its now matched point, use the germ-extension construction of [F2] on a small coordinate disk. Explicitly the rescalings $q_t(z)=q(tz)/t$ extend smoothly at $t=0$ to $Dq(0)$ by the integral derivative formula; the latter positive matrix joins the identity by rotation and positive-matrix interpolation. This yields a compact-source disk isotopy on one common small disk. Apply [F3] with support in a small target disk disjoint from all other matched points. Its final map agrees with the required relative germ there and is the identity near every other prescription. Perform the finitely many operations successively. All initial choices, cuts, graph reductions, parking paths and compositions were finite; the stated Countable Choice is used only in the actual smooth extension suppliers [F2]–[F3]. This proves the full prescribed matching without assuming a general smoothing theorem for an arbitrary homeomorphism. [F2, F3, step 4.1, step 5.1, construct, algebra] ∎
