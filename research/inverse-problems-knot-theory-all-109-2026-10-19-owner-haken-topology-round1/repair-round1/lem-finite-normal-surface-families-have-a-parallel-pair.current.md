---
id: lem-finite-normal-surface-families-have-a-parallel-pair
kind: lemma
title: "Large finite normal surface families contain a parallel pair"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-normal-surface-coordinate-box
  - thm-poincare-lefschetz-duality
  - thm-cellular-chains-compute-homology-with-local-coefficients
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Lemma 9.2.27 and Proposition 9.1.7, printed pp.284 and 274."
axiom_use: "Full AC is inherited only through the published duality/homology suppliers; the prism count and finite dual-loop argument add no choice requirement."
---

## Statement

Assume full AC. Let $M$ be a compact connected oriented PL three-manifold with a finite simplicial triangulation having $t$ tetrahedra. Let $S$ be a compact properly embedded orientable normal surface for this triangulation, and let $b_2=\dim_{\mathbb F_2}H_2(M,\partial M;\mathbb F_2)$. If $S$ has more than $10t+b_2$ connected components, two distinct components cobound an embedded product $F\times[0,1]$ whose interior misses $S$ and whose vertical boundary lies in $\partial M$. Consequently a normal surface whose components are pairwise nonparallel has at most $10t+b_2$ components. The bound is for normal surfaces as supplied; it does not assert that an arbitrary incompressible surface has been normalized or that successive intersecting hierarchy cuts satisfy this same bound.

## Statement references

[[def-normal-surface-coordinate-box]]

[[thm-poincare-lefschetz-duality]]

## Facts & Assumptions

**Given:** The finite oriented triangulation and orientable normal surface in the Statement.

[F1] Each tetrahedron contains parallel stacks of the four triangle types and at most one quadrilateral type; their arcs match on its faces. [[def-normal-surface-coordinate-box]]

[F2] Over $\mathbb F_2$, cap duality pairs $H_2(M,\partial M;\mathbb F_2)$ nondegenerately with $H_1(M;\mathbb F_2)$ by intersection. These spaces are finite-dimensional for a finite triangulation. [[thm-poincare-lefschetz-duality]] [[thm-cellular-chains-compute-homology-with-local-coefficients]]

[A1] Full AC is inherited from [F2]. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the Statement.

1.1 Between consecutive parallel normal disks of the same type in a tetrahedron lies a product prism. Deleting all these intervening prisms leaves at most four vertex regions, each adjacent to at most one normal disk, and the remaining central regions. If quadrilaterals are present there are at most two central regions, each adjacent to at most three normal disks; if none is present there is one central region adjacent to at most four. Missing triangle types merely merge or remove these regions and cannot increase the bound. Thus at most ten normal-disk sides in each tetrahedron are adjacent to a nonprism region. Mark every component of $S$ having at least one such side. There are at most $10t$ marked components. Every unmarked component is adjacent only to prisms on both sides. [F1, given, construct]

2.1 Start on either side of an unmarked component and continue its adjacent prisms across their vertical rectangular faces. Their interval directions match: each common rectangle runs between the same two consecutive matching normal arcs. No such continuation can reach a nonprism, since its side adjacent to this surface would then mark that component. Continuing all around the component therefore produces a whole cut region made of prisms, with vertical boundary only in $\partial M$. It has an interval-bundle structure: choose matching interval coordinates first on shared interval edges and rectangles, then extend these product coordinates over the prisms. A horizontal boundary reached by this continuation is a whole component, not a proper subset: continuation across each normal arc cannot terminate at an interior arc. Thus every unmarked component has an incident interval-bundle cut region on each of its sides. Arbitrary prism collections incident to marked components need not be whole cut regions and are not used. [F1, step 1.1, construct]

3.1 Write $Q$ for the finite polygonal base obtained by identifying the prism bases in step 2.1. The orientation of the total three-manifold says that a transition reverses the fiber direction exactly when it reverses the base orientation. Hence the fiber endpoints form the orientation double cover of $Q$. We construct finite PL product coordinates over that cover, where the endpoints are consistently labeled zero and one. Subdivide its base polygons into triangles. Prescribe increasing PL maps from every vertex fiber to $[0,1]$. On an edge rectangle these maps and the endpoint labels prescribe a projection-preserving PL homeomorphism of its boundary to the boundary of the standard edge rectangle. Triangulate this boundary compatibly, choose interior points in the two rectangles with the same base coordinate, and cone the corresponding boundary subdivisions to them. This gives a PL homeomorphism over the identity on the base edge: on each cone simplex its projection is affine and equals the original projection at every vertex. Do the same for every triangle prism, using the now matched side maps and the endpoint labels on its two horizontal triangular faces; cone the boundary triangulations from interior points with the same barycentric base coordinate. Convexity of the source and target prism makes both cone fans bijective, and the same vertex projection check proves that the extension preserves each fiber. The maps agree on every shared face, so give a finite PL trivialization. To arrange descent in the nonorientable case, do these finite choices on one member of each pair of lifted vertices, edges and triangles, and prescribe them on its mate by the deck map and $t\mapsto1-t$. Each base cell has two distinct lifts, so this prescription is consistent and the induction over the base skeleton still applies. The section $t=1/2$ is then invariant and descends to an embedded PL middle surface in the original interval bundle; we identify it with $Q$. If $Q$ is orientable, restrict the constructed coordinates to one component of its endpoint cover to get an actual PL product $Q\times[0,1]$. If $Q$ is nonorientable, that endpoint cover is connected, so the horizontal boundary is connected and $Q$ is a one-sided nonorientable core. Distinct interval-bundle cut regions have disjoint such cores. This supplies PL products and PL cores, rather than only continuous fiber coordinates. [given, step 2.1, construct, algebra]

4.1 There are at most $b_2$ of these nonorientable cores. To prove this directly, choose an orientation-reversing loop in each connected core $Q_j$. In its orientation interval bundle this loop lifts from a point on one horizontal side to the opposite side. Close this lifted path by the interval fiber through that point. The resulting loop $\gamma_j$ in a small neighborhood of $Q_j$ crosses $Q_j$ once modulo two and misses every other core. Hence the intersection matrix of the classes $[Q_i]\in H_2(M,\partial M;\mathbb F_2)$ against $[\gamma_j]$ is the identity. These classes are linearly independent by [F2], so their number is at most $b_2$. [F2, step 3.1, construct, algebra]

5.1 If no product interval-bundle region were incident to an unmarked component, each such component would be the single horizontal boundary of a nonorientable-core region from step 3.1. One such region has only one connected horizontal boundary, so distinct unmarked components require distinct cores. Step 4.1 would then bound the unmarked components by $b_2$. But step 1.1 and the hypothesis give more than $b_2$ unmarked components. There must therefore be a product interval-bundle region. Its two horizontal boundary faces cannot be two copies of the same component of $S$: that component and this region would already occupy both sides everywhere, hence form an open and closed component of the connected $M$, leaving no other component of $S$. This would give only one component, whereas the hypothesis gives more than $10t+b_2\ge1$ in a nonempty triangulated three-manifold. Its two horizontal boundaries are thus distinct components, and its interior is disjoint from $S$ by construction as a cut region. This is precisely the asserted parallel product. Taking the contrapositive gives the component bound. [step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
