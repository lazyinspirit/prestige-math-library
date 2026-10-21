---
id: lem-good-linear-size-exterior-triangulation-from-diagram
kind: lemma
title: Linear-size good exterior triangulation from a planar knot code
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-planar-diagram-code-realizability-and-face-validation
  - alg-planar-code-validation-and-diagram-reconstruction
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §7, complete construction and linear-size triangulation estimates,
        printed pp.17–20/web lines 757–879.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §14.4, complete knot and exterior-triangulation overview, printed pp.5–6.
---

## Statement

For every valid connected one-component oriented planar knot code with $n$ crossings together with a specified polygonal realization $P$ whose regular projection has that code, there is an explicit finite combinatorial construction of a triangulated $S^3$ containing that same $P$ as a subcomplex. An abstract valid code can first be realized by the stated reconstruction procedure and then used as $P$. A **good exterior triangulation** is the triangulation inherited on the complement of the interior of a regular neighborhood made from one fixed ball around each vertex of $P$ and one fixed tube block along each edge, with its boundary torus triangulated and a meridian path marked. The construction gives a good exterior triangulation with at most $C(n+1)$ tetrahedra for one universal constant $C$, and the marked meridian is a path of at most $C(n+1)$ boundary edges. At $n=0$ the construction uses a fixed solid-torus exterior triangulation.

A local crossing is lifted by separating the over- and under-strands in the interval direction; the schematic below records only the projected crossing, with the continuous strand passing over the gapped strand.

~~~tikz
\begin{tikzpicture}[scale=1.15]
\draw[very thick] (-1,-1)--(1,1);
\draw[thick] (-1,1)--(-0.18,0.18);
\draw[thick] (0.18,-0.18)--(1,-1);
\node at (0.62,0.78) {over};
\node at (-0.70,0.76) {under};
\end{tikzpicture}
~~~

The picture records only the planar local incidence. The proof constructs disjoint arcs in a three-dimensional crossing block and does not infer embeddedness from the drawing.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]] — dart, crossing, orientation, and face-cycle conventions.

[[lem-planar-diagram-code-realizability-and-face-validation]] — a valid spherical rotation system has a polygonal realization with disk faces.

[[alg-planar-code-validation-and-diagram-reconstruction]] — the finite crossing-disk, edge-band and face-cap gluing record.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — the reconstruction record represents the declared oriented diagram.

[Hass–Lagarias–Pippenger, §7](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — linear-size triangulation of a knot exterior from a diagram.

## Facts & Assumptions

**Given:** A valid connected one-component oriented planar knot code with $n$ crossings and a specified polygonal realization $P$ of that code.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: the code gives a finite connected four-valent graph, directed strand pairings, over/under data and a face permutation.

[F2] [[lem-planar-diagram-code-realizability-and-face-validation]]: when $V-E+F=2$, the rotation system has a spherical polygonal realization with disk faces.

[F3] [[alg-planar-code-validation-and-diagram-reconstruction]]: a passing code yields one crossing disk per crossing, one edge band per edge, and one cap per face, with recorded ports and face cycles.

[F4] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: the output gluing record represents the oriented link diagram described by the input code.

## Proof

1.1 If $n>0$, there are $4n$ darts and $2n$ paired edges. The connected crossing graph has $V=n$, $E=2n$, and hence $F=2-V+E=n+2$ faces by [F2]. The sum of face-boundary port occurrences, counted with multiplicity, is $2E=4n$. Choose disjoint small disks around the graph vertices and disjoint narrow rectangular bands along its edges, attached in the prescribed cyclic order. Their union $N(G)$ is a connected planar subsurface of the sphere; each boundary component is one face cycle, and the closure of each complementary component is a disk. The total number of vertex-disk ports, band sides and boundary occurrences is bounded by a universal constant times $n$. [given, F1, F2, construct]

2.1 Triangulate each vertex disk and edge band by fixed templates. Subdivide every side occurrence on each complementary face boundary circle by a fixed number of new vertices and cone the resulting simple polygon to one interior vertex. Each face of boundary length $d$ contributes at most $c_0d$ triangles for a fixed $c_0$, and $\sum d=O(n)$ by step 1.1. Since the face boundary circles of $N(G)$ are embedded circles with port occurrences kept distinct, these are regular disk triangulations; matching subdivisions along shared ports and one fixed barycentric subdivision give a genuine finite simplicial triangulation of the projection sphere with $O(n)$ triangles. [step 1.1, F3, construct]

3.1 Take the product of this triangulated sphere with an interval. Each triangular prism is split into three tetrahedra by the fixed staircase subdivision; cap the two ends by coning their triangulated boundary spheres to obtain a triangulated $S^3$ with $O(n)$ tetrahedra. In each crossing disk, place the over- and under-strand arcs at distinct interval heights and connect each pair of opposite ports; along each edge band connect its end ports by a linear arc whose height interpolates between the endpoint heights. In a crossing block the two arcs are disjoint because their heights differ; interiors of distinct edge blocks are disjoint, and every edge arc joins only its designated crossing ports. A fixed subdivision of each crossing and edge block makes these finitely many local arc templates subcomplexes. For the supplied $P$, choose the disks and bands along its actual projection. Carry the templates to its actual strand heights by increasing piecewise-linear maps of the interval fibres, fixed at the top and bottom; at a crossing the prescribed two heights have the same order, so both can be matched. Choose the maps identically on shared port collars and extend over the remaining face regions, triangulating the finitely many height graphs and interpolating between successive levels. Extend over the two end balls by coning the boundary maps. These maps give a PL homeomorphism of the template sphere carrying its template knot to the supplied $P$. Transport the triangulation through it. Its abstract simplex count remains $O(n)$, even if the PL parametrizations require further subdivisions in ambient coordinates; thus the same $P$ is a subcomplex. [F1, F3, F4, step 2.1, construct]

4.1 Around each vertex and edge of the 1-subcomplex $P$, take the fixed ball and tube blocks from the definition of a good exterior triangulation. Choose a normal 2-frame at one point, extend it across the finitely many edge and vertex blocks, and adjust the final frame along the last edge by a path of rotations in $SO(2)$ to agree with the initial frame. Thus their union is the product $S^1\times D^2$, a solid torus with triangulated boundary. The number of blocks and tetrahedra per block is constant, so removing its interior leaves a compact triangulated exterior with $O(n)$ tetrahedra. At an interior point of a chosen knot edge, the fixed local tube template has a meridian circle using a fixed number of boundary edges; mark that path. [step 3.1, F4, construct]

5.1 If $n=0$, use the standard genus-one product decomposition of $S^3$ into two solid tori and the fixed product triangulation of the exterior solid torus as a triangle times a three-edge circle. Splitting its three triangular prisms into three tetrahedra each and marking the three-edge circle $\{a_0\}\times S^1$ on its boundary gives a fixed-size model: this is the original knot's meridian, meeting an exterior disk boundary once. For a supplied crossingless $P$, parametrize its polygonal projection disk and the complementary sphere disk and match its height graph by the same fibre construction as in step 3.1; transport the fixed model through the resulting PL homeomorphism. Increasing $C$ to dominate this model and all fixed local template constants in steps 2.1, 3.1 and 4.1 yields both stated $C(n+1)$ bounds. All code-dependent choices use the finite label and port order, so the construction is explicit. [given, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

