---
id: thm-finite-curvilinear-triangulation-of-a-compact-riemannian-surface
kind: theorem
title: Finite curvilinear triangulation of a compact Riemannian surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - lem-a-compact-surface-metric-extends-across-its-boundary
  - lem-finite-planar-graph-disk-cuts-and-euler-count
  - thm-existence-of-geodesically-convex-neighborhoods
  - thm-morse-sard-for-euclidean-maps
  - thm-euler-poincare-formula-for-finite-cw-complexes
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Problem 9-5, printed pp. 171–172 (PDF pp. 187–188), outlines a finite convex-polygon cover. The boundary-compatible finite graph refinement here supplies details beyond that outline."
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 50–52), constructs finite geodesic triangulations for closed surfaces. It does not establish the prescribed-boundary version; this item only claims curvilinear edges."
    - title: "Emil Saucan, A Note on a Theorem of Munkres"
      url: "https://arxiv.org/pdf/math/0403055"
      locator: "Theorem 1.1 on PDF p. 1 gives a relative-boundary fat-triangulation context, and Definition 1.2 and Remark 1.3 on PDF p. 2 discuss angle bounds. Neither is used as a geodesic-edge theorem here."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the axiom of choice. Let $(M,g)$ be a compact smooth Riemannian
surface, possibly disconnected, nonorientable, or with smooth boundary. Then
$M$ has a finite face-to-face curvilinear triangulation in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]] such that every closed
face lies in a coordinate disk carrying a smooth orthonormal frame after a
local orientation is chosen. Every prescribed boundary component is a union of
boundary edges. If a finite open cover of $M$ by strongly convex ambient
coordinate disks is supplied, the faces can be chosen subordinate to that
cover.

The same construction applies when $M$ is a compact regular surface region
with finitely many ordinary corners in a supplied boundaryless Riemannian
surface. It yields finite triangular closed-disk faces with ordinary corners, regular
$C^2$ edges, full-edge or vertex intersections, the prescribed boundary as a
subgraph, and circle links at interior vertices and interval links at boundary vertices,
with the supplied corners retained as vertices. This is triangular face,
edge, and link data on a cornered region; the smooth-boundary definition cited
above is asserted only when $M$ is a smooth manifold with boundary. In either
case the finite closed cells form a regular CW structure on the underlying
compact space, and its count $V-E+F$ equals its singular-homology Euler
characteristic.

## Facts & Assumptions

**Given:** The compact Riemannian surface or regular cornered region of the Statement. Full AC is assumed because the planar Jordan-curve suppliers of [F2] use it ([[def-axiom-of-choice]]).

[F1] A smooth-boundary surface metric extends across its boundary to a neighbourhood in its smooth double; a cornered region already has its supplied ambient metric ([[lem-a-compact-surface-metric-extends-across-its-boundary]]).

[F2] A finite planar graph with regular embedded edges and pairwise distinct incident tangent rays in a closed coordinate disk admits a finite face-to-face disk refinement, with its original edges preserved up to subdivision. The proof further constructs triangular faces by a sequential polygonal fan in each Jordan face: steps 2.2 and 5.1–7.1 apply to any finite cyclic list of marked boundary vertices with positive sectors ([[lem-finite-planar-graph-disk-cuts-and-euler-count]], proof 2.2 and 5.1–7.1).

[F3] For a $C^2$ function on a compact regular arc, almost every value is regular; finitely many critical-value sets and finitely many exceptional vertex distances can be avoided together ([[thm-morse-sard-for-euclidean-maps]]).

[F4] A curvilinear triangulation has regular $C^2$ edges, triangular closed-disk faces, full-cell intersections, and the specified vertex links ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F5] For a finite CW complex, the alternating count of cells equals the alternating rank of integral singular homology ([[thm-euler-poincare-formula-for-finite-cw-complexes]]).

[F6] Under AC, every point of a boundaryless Riemannian surface has a strongly geodesically convex neighbourhood inside any prescribed open neighbourhood. The proof constructs it as a coordinate ball in an orthonormal normal chart restricted to that open set ([[thm-existence-of-geodesically-convex-neighborhoods]]).

## Proof

**Proof technique:** use generic small metric circles to make a finite regular arrangement, assign each arrangement face one larger coordinate disk, triangulate that face by [F2], and reconcile subdivisions along shared old edges.

1.1 If $M=\varnothing$, take empty face, edge, and vertex sets; the asserted CW count is $0=0$, so the rest concerns nonempty $M$. For each $p\in M$, apply [F6] inside the ambient metric-extension neighbourhood supplied by [F1] and, when a finite strongly convex cover is supplied, inside a member containing $p$. The normal-coordinate construction in the proof of [F6] gives a strongly convex coordinate disk $B(p,3\rho_p)$ centred at $p$. The smaller disks $B(p,\rho_p)$ cover $M$; compactness selects a finite subcover with centres $x_1,\ldots,x_N$ and individual radii $\rho_i>0$. Thus each $B(x_i,3\rho_i)$ is a smooth strongly convex normal coordinate disk and, when a cover is supplied, lies in one of its members. A normal coordinate disk is a Euclidean round disk in the normal coordinates centred at its centre, and its coordinate tangent frame can be orthonormalized smoothly. [F1, F6, given]

2.1 Choose radii $s_i\in(\rho_i,2\rho_i)$ one at a time. At stage $i$ the existing curves are finitely many compact regular $C^2$ boundary arcs of $M$ and already chosen smooth metric circles, cut at their finitely many intersections. The ambient distance $d(x_i,\cdot)$ is smooth on every such arc in the annulus $\rho_i<d(x_i,\cdot)<2\rho_i$, which lies inside the normal coordinate disk $B(x_i,3\rho_i)$ of step 1.1. By [F3], choose $s_i$ to be a regular value on every existing arc and to avoid its finitely many vertices and boundary corners. Intersections of the new circle with each previous arc are then transverse and form a compact discrete set, hence are finite. Avoid the finitely many radii of existing pairwise intersections to exclude triple points. Thus the circles and the prescribed boundary form a finite embedded regular $C^2$ graph $G$ on $M$ after adding intersection vertices, supplied corners, and three auxiliary vertices on every closed curve component with no vertices, whether it is a selected metric circle or a smooth component of the prescribed boundary. At every vertex the incident tangent rays are distinct, including at circle–boundary crossings; at a prescribed corner the two boundary rays are distinct by ordinary-corner regularity. [F3, step 1.1, given, induction]

3.1 The connected open faces of $M\setminus G$ have constant membership in each open disk $B(x_i,s_i)$: crossing its circle is the only way to change that membership. Since the smaller disks $B(x_i,\rho_i)$ cover $M$, each face $Q$ contains a point in some $B(x_i,\rho_i)$ and therefore lies wholly in $B(x_i,s_i)$. Its closure lies in the closed disk $\overline{B(x_i,s_i)}$. This assigns each face one such index $i$ by the least possible index, a finite choice. [step 1.1, step 2.1]

3.2 After $G$ is fixed, choose $t_i\in(2\rho_i,3\rho_i)$ using [F3] so that the larger normal-coordinate circle $\partial B(x_i,t_i)$ meets all regular graph edges transversely and avoids every graph vertex. Restrict the complete graph $G$ to this larger closed coordinate disk $V_i=\overline{B(x_i,t_i)}$, add its circle boundary, and subdivide at the finitely many intersections. Add three vertices to the circle if needed. In its normal coordinates this is exactly an input to [F2]: all clipped edges are regular through endpoints, and crossings produce distinct tangent rays. The graph may have parallel edges, which [F2] permits. [F2, F3, step 2.1, construct]

4.1 If the face $Q$ of step 3.1 is assigned to $i$, then $\overline Q\subset B(x_i,t_i)$ by $s_i<t_i$. It is one whole face of the restricted graph in $V_i$: paths within $V_i$ cannot join it to another global face without crossing $G$, and the added outer circle is disjoint from $\overline Q$. Apply [F2] to the restricted graph and retain only those finitely many new vertices and arcs whose relative interiors lie in $Q$. This partitions $Q$ into finitely many closed Jordan triangles inside the frameable coordinate disk $V_i$. Every global face has one assignment, so cuts retained for distinct faces have disjoint relative interiors. Each restricted graph has finitely many refined faces; a global face assigned to $i$ contains at least one of them, and two distinct global faces cannot contain the same one. Hence the total number of global faces, and of all retained triangles, is finite. [F2, step 3.1, step 3.2]

5.1 The finitely many local constructions may mark an old edge of $G$ at different points on its two sides. Insert the union of all such marks on each old edge, a finite common subdivision. A triangle adjacent to a newly marked subedge is a Jordan disk with a positive sector at each boundary mark (angle $\pi$ at an interior point of a regular edge). Apply the sequential polygonal fan construction of [F2] inside that triangle using the cyclic list of all its boundary marks. This subdivides it into finitely many triangular disks, each with exactly one boundary subedge. Consequently the two refinements on either side of an old edge share exactly its full subdivided subedges, and all final triangles meet in a full edge, one vertex, or the empty set. Their local links are circles in $\operatorname{Int}M$ and intervals at $\partial M$: the original arrangement and the cuts occupy all sectors without overlap or gap. Supplied corners remain boundary vertices. [F2, F4, step 2.1, step 4.1, construct]

6.1 The only edges not already regular $C^2$ are the finitely many added polygonal arcs. Choose pairwise disjoint tiny disks about their nonvertex bends, avoiding all other edges and vertices. In such a disk the two directed segments of a simple polygonal arc are not opposite in the retracing sense; after rotating axes their union is a Lipschitz graph over its angle-bisector direction. Replace the graph near the bend by a smooth graph that agrees with its straight tails near the disk boundary and is uniformly close enough to stay in the chosen edge tube. One explicit replacement convolves the graph on a smaller interval with a smooth symmetric mollifier and uses a smooth cutoff in the straight-tail overlap. Its first coordinate remains strictly monotone, so it remains embedded and regular. The small disks and tube margins make all replacements disjoint; the resulting ambient isotopy preserves all incidence, sectors, and face-to-face intersections. Each new edge is now a regular $C^2$ embedding. The untouched prescribed boundary arcs remain boundary edges. [F4, step 5.1, construct]

7.1 Each final face closure is a Jordan disk bounded by three regular $C^2$ edges. Its Schoenflies homeomorphism supplies a map from the closed reference triangle taking its sides to those edges and its vertices to the three marked vertices. In a smooth-boundary surface, the face sectors, boundary half-disks, and links verified in steps 5.1–6.1 give all clauses of [F4]; thus the data are a curvilinear triangulation and each face lies in its assigned strongly convex coordinate disk, in a member of any supplied cover, with an orthonormal frame. For a cornered region the same finite face and link construction holds in the supplied ambient charts, using the original sector at each prescribed corner. The smooth-boundary definition is not invoked for that region. [F2, F4, step 4.1, step 5.1, step 6.1]

8.1 In either case attach the finitely many vertex points, then the embedded closed edge intervals, then the closed triangular disks along their full boundary edges. By step 5.1 the resulting quotient maps continuously and bijectively onto $M$; compactness of the finite disjoint union and Hausdorffness of $M$ make it a homeomorphism. Each characteristic map is an embedding, hence these cells form a finite regular CW structure, even in the cornered case. Apply [F5] to obtain $V-E+F=\sum_j(-1)^j\operatorname{rank}H_j(M;\mathbb Z)$. Full AC is used through the Jordan and finite-plane-graph suppliers of [F2], and covers the countable-choice assumptions of [F1] and [F6]. Selecting local disks at every point in step 1.1 may also use AC; after a finite subcover is fixed, the remaining selections are finite. [F2, F5, step 5.1, step 7.1] ∎

## Source locator

Lee, Chapter 9, Problem 9-5, printed pp. 171–172, sketches the convex-cover route to a surface triangulation. Jost, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39, treats the closed geodesic case. Saucan, Theorem 1.1 and Definition 1.2, PDF pp. 1–2, provides context for compatible boundary refinements and positive angle control. The generic-circle, assigned-face, common-boundary-refinement, and $C^2$ smoothing steps are proved here; none of these sources is claimed to prove a prescribed-boundary geodesic triangulation.
