---
id: lem-rectangular-normal-cut-components-are-interval-bundles
kind: lemma
title: "Rectangular normal-cut components are interval bundles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. All ball, disk and rectangle parameters are supplied. Product extensions, base cells, interval charts and averaging weights are finite; the midpoint is uniquely defined by an atomless full-support measure."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7, printed p.12, rectangular components. The finite product-ball assembly, base-vertex charts and one-sided core section are proved below."
---

## Statement

Let $M$ be a compact smooth three-manifold with a supplied finite whole-star smooth manifold triangulation. Let $\mathcal S$ be a finite disjoint closed smooth torus family in its interior, in normal disk position: each tetrahedron meets it in proper disks with the triangle or quadrilateral boundary patterns. Suppose all balls obtained by cutting individual tetrahedra along those disks have supplied ball parameters, with their disk faces and face-cell corners retained. Supply parameters of the rectangle face cells, taking their opposite edges on $\mathcal S$ as horizontal and their other two edges on triangulation edges as vertical.

Let $C$ be a connected component of $M$ cut open along $\mathcal S$ which meets every triangular face only in rectangle cells. Then $C$ is disjoint from $\partial M$ and is a topological interval bundle over a compact connected surface without boundary. Its bundle admits a locally flat embedded core surface $Q$, obtained as a section, and the base has a finite cellulation. If $C$ is not homeomorphic to $T^2\times I$, the core is one-sided and $C\setminus Q$ is connected. No choice axiom is assumed.

The conclusion is a topological interval-bundle parameterization from the specified finite data. It asserts neither smoothness nor compatibility with an unrelated marking.

## Facts & Assumptions

**Given:** The compatible manifold triangulation, normal torus family, supplied cut-ball and face-rectangle parameters, and the rectangular-only cut component.

[F1] Whole-star manifold triangulations have the local full-space or half-space fan structure of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F2] Finite convex face decompositions admit compatible triangulations by coning, as in [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]. A boundary circle homeomorphism of a parametrized disk extends over the disk by the radial formula $r u\mapsto r b(u)$; this is used only as a topological homeomorphism.

## Proof

1.1 Consider a cut ball $B$ belonging to $C$. Its boundary is divided into horizontal disk copies of $\mathcal S$ and vertical cells from tetrahedron faces. All the latter are rectangles by the hypothesis on $C$. At a segment of a triangulation edge exactly two such rectangle sides meet in this ball, since a tetrahedron has two faces there. No vertex of the tetrahedron belongs to $B$: every face region incident to such a vertex is a nonrectangular corner region. Thus the union $V$ of the vertical rectangles is an interval bundle over a finite one-manifold, obtained by gluing the base intervals of rectangles at their endpoints. The glued vertical edges are its interval fibers. Every base vertex has degree two, so each connected base component is a circle. Its total space is an annulus or a Möbius band according as the interval return map preserves or reverses endpoints. This follows directly by cutting that circle once; an increasing return homeomorphism is interpolated to the identity by $(1-s)g(t)+st$, while a decreasing one is interpolated to the reflection. The Möbius case cannot be a subsurface of the oriented boundary sphere of $B$. Hence every component of $V$ is an annulus, with its interval fibers. [F1, given, construct]

2.1 Each boundary circle of $V$ is the whole boundary circle of one horizontal disk. A horizontal disk has only one boundary, so it meets exactly one annulus end. The boundary sphere of $B$ is connected; the incidence graph of these disks and annuli consequently consists of two disks and a single connecting annulus. Choose product coordinates on that annulus retaining its given interval fibers: trivialize around its base circle by the increasing-return interpolation in step 1.1. Parametrize each horizontal disk with the induced boundary coordinate, extending its circle reparametrization radially by [F2]. These maps give a boundary homeomorphism from the boundary of $D^2\times I$ to $\partial B$, taking horizontal disks and every vertical fiber to the specified ones. A radial extension over a standard convex ball, followed by the supplied parameter of $B$, extends that boundary map to a homeomorphism $D^2\times I\to B$. Thus every rectangular-only cut ball has a product parameter. No uniqueness of ball parameters or smooth Alexander interpolation is claimed or needed. [F2, step 1.1, construct]

3.1 Choose each physical face rectangle's fiber arcs once, using its supplied parameter, and use those same arcs on the two incident balls in step 2.1. Their product parameters then identify the shared rectangle by a fiber-preserving map. Near the interior of its base edge, write that map as $(s,t)\mapsto(f(s),g(s,t))$. The base map $f$ is a homeomorphism and every $g(s,-)$ is an interval homeomorphism; extending these same maps constantly in the collar-normal coordinate gives an interval-bundle chart over the glued base strip. At a base vertex, the balls are those incident to one segment of the original one-skeleton. Their normal sectors have a cyclic link by [F1]; their interval identifications around that cycle compose to the identity, since they identify the same actual points of that segment. The charts therefore give a disk times an interval there as well, with no monodromy defect at the center. The base is the finite complex formed by gluing the disk bases of the balls along the indicated edge intervals. Its face interiors, edge interiors and vertex stars are respectively disks, strips and disks. It is consequently a compact connected surface without boundary, and these constructions give an interval bundle with total space $C$. [F1, step 1.1, step 2.1, construct]

4.1 This component cannot meet the original boundary. A boundary triangle has no intersections with the closed interior torus family; its whole face is a nonrectangular region. A component reaching a boundary edge or vertex likewise reaches such a region by its half-space local charts. Thus every boundary component of $C$ is one of its cutting torus faces. The base also has an explicit finite surface cellulation: use the disk bases and paired edge intervals just constructed, reparametrize their finitely many boundary edges once, and extend each boundary reparametrization radially over its disk. The edge gluings can then be made linear. Finite compatible coning triangulates this finite surface cellulation, including if further subdivisions are needed to separate repeated incidences. In particular the base has a compact metric and a finite interval-bundle trivializing cover. [F1, F2, step 3.1, construct]

5.1 To produce an actual core without assuming all interval transitions are already affine, take such a finite trivializing cover $U_i$ of the base. It has continuous nonnegative weights summing to one: in its finite-complex metric use $d(q,Q\setminus U_i)$, taking the constant one when $U_i=Q$, and normalize their finite positive sum. Here $Q$ temporarily denotes the abstract base. In the fiber over $q$, give the $i$th interval chart normalized Lebesgue measure and combine these measures with those weights. Terms outside $U_i$ are zero. This defines an intrinsic atomless probability measure of full support on each fiber. In any chosen local orientation of the fiber, its cumulative distribution is jointly continuous in the base and interval coordinate, strictly increasing from zero to one. Joint continuity follows from the finite sum of the continuous coordinate changes on the charts; at a chart's boundary its bounded contribution tends to zero with its weight. Hence its unique midpoint varies continuously: two strictly bracketing distribution values continue to bracket under a small change of the base point. The midpoint is a section. Its signed cumulative coordinate identifies every fiber with $[-1,1]$, and on overlaps the new coordinates differ only by $u\mapsto u$ or $u\mapsto-u$, depending on which endpoint was chosen as initial. This reduces the bundle to an ordinary linear interval bundle. [step 3.1, step 4.1, construct]

6.1 The image of that section is now a compact connected locally flat embedded core, again denoted $Q$: in each bundle chart it is the plane $u=0$ in a disk times an interval. The two local sides form the endpoint-orientation double cover of the base. If that cover is disconnected, either of its two components supplies a global endpoint choice, and the cumulative coordinate trivializes $C$ as $Q\times I$. Its two boundary components are tori by step 4.1, so $Q$ is a torus and $C$ is $T^2\times I$. If $C$ is not that product, the endpoint cover is connected, the core has no global choice of side, and it is one-sided. Removing the core gives a bundle of half-open intervals over that connected double cover; local products and connected fibers make its total space connected. Equivalently, radial contraction of each half-fiber onto its endpoint is a deformation retraction onto that cover. All choices of rectangles, parameters, charts and weights were finite, and the midpoint was unique. This proves the asserted interface and its topological category. [step 3.1, step 4.1, step 5.1, construct] ∎
