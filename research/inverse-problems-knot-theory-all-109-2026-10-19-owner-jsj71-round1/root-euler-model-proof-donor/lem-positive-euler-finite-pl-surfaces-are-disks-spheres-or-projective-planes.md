---
id: lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
kind: lemma
title: Positive-Euler finite PL surfaces are disks, spheres or projective planes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-finite-triangulated-compact-surface
  - def-simplicial-euler-characteristic
  - lem-connected-normal-surface-chi-one-is-disk
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105
        (1961),245–375
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Chapter5, printed pp.360–374, positive-Euler summands in the
        fundamental-surface argument. The small finite surface classification
        used here is proved below.
dependency_level: 2
---

## Statement

Let $P$ be a connected compact surface supplied with a finite PL triangulation. The following conclusions require no choice axiom.

1. If $\partial P\ne\varnothing$, then $\chi(P)\le1$. Equality holds only for a disk. If instead $\chi(P)=0$, then $P$ is an annulus or a Mobius band; these have respectively two and one boundary circles.
2. If $\partial P=\varnothing$, then $\chi(P)\le2$. If $\chi(P)=2$, then $P$ is a two-sphere; if $\chi(P)=1$, then $P$ is a projective plane.

Consequently, every positive-Euler connected finite PL surface is a disk, sphere or projective plane. These identifications can be made by PL homeomorphisms between finite polygonal models. In a PL three-manifold without an embedded projective plane, a connected embedded positive-Euler surface is therefore a disk or a sphere.

## Statement references

[[def-finite-triangulated-compact-surface]] — the supplied finite triangulation.

[[ex-cylinder-and-mobius-band-as-quotients]] — the annular and twisted rectangular-band models.

[[ex-projective-plane-polygonal-schema]] — the antipodal-boundary disk model of the projective plane.

## Facts & Assumptions

**Given:** The finite triangulation of the connected compact surface $P$.

[F1] [[def-simplicial-euler-characteristic]]: $\chi=V-E+F$. An elementary collapse of a triangle and a free edge removes one face and one edge, preserving this number. Attaching a disk along a subdivided circle adds one, because the circle has equally many vertices and edges.

[F2] The dual spanning-tree collapse in [[lem-connected-normal-surface-chi-one-is-disk]], steps 1.1–1.2, applies to any connected finite triangulated surface with boundary, without using its Euler characteristic: it leaves a connected graph. Its step 2.2 proves the tree-neighborhood case. The graph-neighborhood construction for the general case is detailed below.

[F3] Use the explicit finite polygonal models: the annulus is a rectangular strip with its two short sides identified without a flip; the Mobius band is the same strip with those sides identified with a flip. The real projective plane is the antipodal quotient of a polyhedral two-sphere. These are model conventions for the named surfaces; the cap identification needed here is proved in step 5.1.

## Proof

1.1 Suppose first that $P$ has boundary. Apply the finite dual-tree collapse [F2], choosing a lexicographically first spanning tree, to obtain a connected graph $G$. Take small polygonal vertex disks and narrow rectangular edge bands inside $P$ to form a regular neighborhood $N(G)$. One can choose them after a finite subdivision by taking sufficiently small rational distances in the finitely many triangle charts. Reversing a free triangle-edge collapse enlarges this neighborhood by a boundary finger across that triangle. To see that its homeomorphism type is unchanged, use a triangle chart in which the removed edge is the base: the two retained sides make the tip of the finger, and moving its polygonal boundary from a small parallel arc to the base expands a disk along one boundary interval. Triangulate the region between these two arcs and map corresponding triangles linearly. This gives a PL homeomorphism between the two neighborhoods, fixed off that triangle and its small vertex sectors. Reverse the finitely many collapses in order and finally expand the boundary collar. Thus $P$ is PL homeomorphic to $N(G)$. This construction uses a finite list of local maps, rather than a general regular-neighborhood uniqueness theorem. [given, F2, construct]

2.1 A spanning tree of the connected graph $G$ has $V(G)-1$ edges. Write $h=E(G)-V(G)+1\ge0$ for the number of remaining edges. The collapses and [F1] give $\chi(P)=V(G)-E(G)=1-h\le1$. If equality holds, $h=0$, so $G$ is a tree and its neighborhood is a disk by [F2]. [F1, F2, step 1.1, algebra]

3.1 If $\chi(P)=0$, the graph $G$ has exactly one edge outside a spanning tree. Delete its leaf edges successively. A leaf vertex disk and its band merely form a finger on the neighboring disk; removing that finger changes no neighborhood homeomorphism type by the same finite polygonal expansion as in step 1.1. The graph remaining is one cycle: alternatively, the unique extra edge and the unique tree path joining its endpoints form that cycle, and every other tree edge belongs to a tree attached to it. Thus $N(G)$ is the union of the vertex disks and bands around a single cycle. [step 1.1, step 2.1, construct]

3.2 Now suppose $P$ is closed. Remove the interior of a small polygonal disk $B$ inside one triangle and triangulate the remaining surface $P_0$. It is connected: any path crossing the disk can have each crossing segment replaced by a path along its boundary, and a finite polygonal path has only finitely many such segments after a small general-position displacement. It has exactly one boundary circle. By [F1], $\chi(P_0)=\chi(P)-1$, and step 2.1 gives $\chi(P)\le2$. If $\chi(P)=2$, then $P_0$ is a disk by step 2.1. Capping a disk by a disk gives a sphere. Any PL boundary identification can be reduced to the identity by extending the boundary map over a disk: cone a finite subdivision of its circle to the center, and map the resulting triangles linearly. Thus this identification is PL. [F1, step 2.1, construct]

4.1 Cut this cycle across one band. Its neighborhood becomes one rectangular strip: glue the remaining vertex disks and bands consecutively, each along one boundary interval, and use the polygonal disk expansions of step 1.1 to straighten the strip. At its two ends the transverse intervals are identified by a PL interval homeomorphism. If this map is increasing, change the transverse coordinate at one end and interpolate that change along the strip to make the gluing the identity. Explicitly, prescribe the required increasing map on one short side of the rectangle and the identity on its other three sides. This is a PL homeomorphism of its boundary. Subdivide at its finitely many breakpoints, cone both boundary subdivisions to interior points and map corresponding triangles linearly. This extends the boundary map to a PL homeomorphism of the rectangle. If the gluing is decreasing, first compose with $y\mapsto1-y$ and apply the same construction. The two resulting quotients are exactly the two models in [F3]. In the first, the two long sides of the strip give two boundary circles; in the second they join to one. Hence $P$ is respectively an annulus or a Mobius band. [F3, step 1.1, step 3.1, construct]

5.1 If $\chi(P)=1$, then $P_0$ has Euler characteristic zero and exactly one boundary circle. Steps 3.1–4.1 make it a Mobius band, since the annulus has two boundary circles. Capping a Mobius band gives the antipodal-boundary disk of [F3]: in that disk model, a small collar of the identified outer circle is the twisted interval band, while the remaining inner disk is the cap. Conversely those two pieces recover the model. To identify this disk quotient with the real projective plane without importing an example, triangulate the boundary of an octahedron antipodally, using its equator as a subcomplex. Every antipodal orbit has one representative in the open upper hemisphere or two opposite representatives on its equator. The quotient is therefore the closed upper polyhedral disk with opposite boundary points identified. The induced map of these two quotient spaces is bijective and continuous, and is a homeomorphism because the source is compact and the antipodal quotient of the sphere is Hausdorff. On their finite quotient triangulations it is the same simplexwise identification, hence is PL. Changing the cap's boundary identification does not change the resulting PL surface, by the coning extension from step 3.2. Therefore $P$ is a projective plane. Every construction above used only finite trees, finite collapses and finite polygonal maps. The final embedded-surface consequence follows by composing these homeomorphisms with the given embedding. [F3, step 4.1, step 3.2, construct] ∎
