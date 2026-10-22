---
id: lem-finite-pl-incompressible-boundary-incompressible-surfaces-admit-normal-isotopies
kind: lemma
title: "Finite PL incompressible surfaces admit simultaneous normal isotopies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - thm-finite-pl-schoenflies-in-dimension-three
  - thm-higher-dimensional-spheres-are-simply-connected
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruno Martelli, An Introduction to Geometric Topology, Version 4, September 2025"
      url: https://people.dm.unipi.it/martelli/Geometric_topology.pdf
      locator: "Proposition9.2.26 and Proposition9.4.7, printed pp.282–283 and298; the returning-edge bigon and isotopy/termination details are supplied below."
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: https://pi.math.cornell.edu/~hatcher/3M/3M.pdf
      locator: "Proposition1.7 proof, printed p.12, simultaneous incompressible-surface simplifications."
axiom_use: "No choice premise: triangulations are supplied; all positions, surgery choices and subdivisions are finite, with termination given by an integer edge weight."
---

## Statement

Let $M$ be a compact connected oriented PL three-manifold with a fixed finite simplicial manifold triangulation $T$. Assume every interior PL sphere bounds an interior PL ball, and every proper PL disk cobounds a PL ball with a disk in $\partial M$. Let $S$ be a finite union of disjoint compact two-sided properly embedded locally flat PL surfaces, with product collars, no sphere or disk components, and no compressing or boundary-compressing disk. Then there is an ambient PL isotopy of $M$, preserving $\partial M$ setwise, taking the entire surface family to a normal surface for the original triangulation $T$. Boundary curves may move within $\partial M$; no fixed-boundary or prescribed-pared-pattern assertion is made. No smooth or arbitrary topological triangulation-existence result is assumed.

## Statement references

[[def-normal-surface-coordinate-box]]

[[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[[thm-finite-pl-schoenflies-in-dimension-three]]

## Facts & Assumptions

**Given:** The finite PL manifold, fixed triangulation and surface family in the Statement.

[F1] The finite PL incompressibility criterion makes every component of $S$ injective into $M$. Nullhomotopic simple polygonal circles on its components bound PL disk regions. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]] [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F2] The standard two-sphere is simply connected. A finite PL sphere in a supplied standard PL ball or three-sphere has the stated parametrized ball sides. Prescribed maps on boundary disk windows extend over parametrized balls. [[thm-higher-dimensional-spheres-are-simply-connected]] [[thm-finite-pl-schoenflies-in-dimension-three]] [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]

[F3] Compact locally collared PL faces have PL collars, and finite PL embedded subpolyhedra admit compatible finite subdivisions. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

[F4] The four triangle and three quadrilateral normal disk types and the face matching convention are fixed. [[def-normal-surface-coordinate-box]]

## Proof

**Given:** The stated finite PL data.

1.1 A proper PL disk $E$ in a parametrized three-ball splits it into two parametrized balls. Its boundary is nullhomotopic on the simply connected boundary sphere, so it splits that sphere into two PL disks by [F1]'s surface disk lemma and [F2]. Adjoin either boundary disk to $E$ and use [F2] in a standard double of the ball. The sphere side not containing the exterior of the original ball is a ball inside it. Doing this for both boundary disks gives the two sides of $E$; near $E$ they occupy its opposite sides, their interiors are disjoint, and their union is the original ball by the local half-ball charts and connectedness. The given disk and the boundary disks supply their sphere parameters. Repeating this for finitely many disjoint proper disks gives ball pieces whose dual graph is a tree: each disk cut separates one current ball into two. [F1, F2, F3, construct]

1.2 Put $S$ in finite PL general position with the fixed triangulation: subdivide its finite linear charts, move its finitely many vertices slightly in the local linear charts, and avoid the finitely many affine determinant zero sets for incidences with the simplices of $T$. First do boundary vertices in the boundary charts and extend those small moves over the adjacent collars. Each move extends over its ambient vertex star by coning to the fixed star boundary, hence is an ambient PL isotopy, and sufficiently small moves retain all prior strict determinant inequalities and disjointness. Thus $S$ misses vertices, crosses edges in finitely many transverse points, and meets tetrahedron boundaries in finitely many polygonal circles. Put $w=|S\cap T^{(1)}|$. [F3, given, construct]

1.3 An interior surgery disk with boundary on $S$ has boundary nullhomotopic in $M$, hence bounds a disk $E'\subset S$ by [F1]. Surgery splits off the sphere consisting of these two disks. It bounds a ball by hypothesis. That ball contains no other component of $S$, nor the rest of the same component: a closed component inside it would have nontrivial fundamental group by [F1] and the exclusion of spheres, contradicting its injection into $M$; a proper component or remaining surface with boundary cannot lie inside an interior ball. Consequently, after deleting the split-off sphere, the surgery is a disk replacement across an empty ball, hence an ambient isotopy. For a boundary surgery disk with inessential arc on $S$, that arc cuts off a disk $E'$; the union is a proper disk, so the disk-ball hypothesis gives the analogous empty boundary ball. A component inside that ball would likewise contradict injectivity, since every component other than a sphere or disk has nontrivial fundamental group. Thus deleting the split-off boundary-parallel disk realizes this surgery by an isotopy preserving $\partial M$. To make the isotopies explicit in either case, add a narrow collar to the empty ball, prescribe the disk replacement on its two parametrized sides, and extend the matching disk maps over the side balls using [F2]. This gives a homeomorphism fixed on the free outer boundary of a ball or boundary half-ball. The Alexander interpolation $h_s(x)=s h(x/s)$ on the scaled convex ball and the identity outside it gives an isotopy to the identity; in a half-ball scale about a point on its flat boundary. It preserves that boundary and is PL on finite conical subdivisions. [F1, F2, F3, given, construct]

2.1 If such a disk family in a tetrahedron has some disk boundary meeting an edge twice, traverse that edge through the cut balls. Its successive disk crossings give an edge walk in the dual tree from step 1.1. A walk without consecutive inverse edges cannot repeat a tree edge, since the unique reduced path between two vertices has no repeated edge. A repeated disk therefore forces a consecutive inverse pair somewhere in this walk. Thus two consecutive surface intersection points on this edge belong to the same disk $E$, on the same face of one cut ball. Let $\beta$ be the edge segment between them, and join its endpoints by an embedded proper arc $\alpha$ in that disk face. On the cut ball's boundary sphere $\alpha\cup\beta$ is a simple PL circle. A boundary disk that it bounds can be pushed into the ball relative to its boundary by a small collar. Its interior then misses every disk face. We obtain a PL bigon with boundary $\alpha\cup\beta$ and interior disjoint from the surface and the tetrahedron boundary. This constructs the returning-edge bigon rather than assuming the picture in a normal-surface diagram. [F1, F2, F3, step 1.1, construct]

2.2 For one tetrahedron, choose a circle of its intersection with $S$ innermost on the boundary sphere. The boundary disk on that sphere can be pushed slightly inside the tetrahedron, with its boundary moved a short distance onto $S$, to give an interior surgery disk; its interior misses $S$. Process the boundary circles from innermost to outermost. If a circle already bounds a disk component inside the tetrahedron, use the ball parameters of step 1.1 to put that disk in a thin boundary cap collar, relative to its boundary. Its cap side contains no unprocessed boundary circle; any already processed disks there are carried along by the same isotopy. For an enclosing circle choose its cap farther inside than these finitely many nested boundary caps, so its interior misses them. Thus the cap construction continues without crossing an ignored disk. Each nontrivial capping surgery removes one boundary circle from the uncapped portion and produces one more parallel boundary disk. After at most the original number of boundary circles, the intersection consists of disks and closed components. Step 1.3 realizes each operation, with its trivial sphere discarded, by isotopy of the original surface family. No nonspherical closed component can remain in the tetrahedron, since it would be an entire component of the now isotopic, injective surface family inside a ball; spheres are excluded as well. The surgery disks avoid all triangulation edges, so this procedure never increases $w$. Process the finitely many tetrahedra in order. In an already treated tetrahedron, discarding the split-off sphere can only delete entire old disk components: the replacement boundary is in the current tetrahedron and disjoint from the old one. Hence it cannot destroy the already achieved disk condition. [F1, F2, step 1.2, step 1.3, construct]

3.1 When all tetrahedron intersections are disks, there is no circular intersection contained in an open triangular face. Such a circle would bound the incident surface disk on each side, giving a whole sphere component, or one disk on a boundary face, giving a whole proper disk component. Both contradict the preserved component types. If any tetrahedron disk boundary crosses an edge twice, use the bigon of step 2.1. For an interior edge, pushing the disk strip across this bigon and slightly past the edge removes the two consecutive crossings; a small neighborhood of the bigon meets no other surface strip, so this is a supported ambient PL isotopy. For a boundary edge, the bigon is a boundary-compression disk unless its surface arc cuts off a disk; the former is excluded by hypothesis, and the latter is exactly the boundary disk replacement of step 1.3. It also removes the two edge crossings, and discarding its split-off disk can only remove further intersections. Thus either operation strictly lowers $w$. Repeat the tetrahedron-disk procedure of step 2.2 and then a returning-edge operation whenever one exists. Each full repeat strictly decreases the nonnegative integer $w$, and each tetrahedron procedure is finite. Therefore the process stops after finitely many repeats. [F1, F2, F3, step 2.1, step 1.3, step 2.2, construct, algebra]

4.1 At termination each tetrahedron intersection is a disk whose boundary meets every edge at most once. Each face intersection arc has endpoints on distinct edges, since a return to the same edge would give two intersections of that edge on the same disk boundary. A boundary circle separates the tetrahedron's four vertices into two nonempty sets: with no edge crossed more than once, an edge crosses the circle exactly when its endpoints are on opposite sides. If one side has one vertex, precisely three edges are crossed; if it has two vertices, precisely four are crossed. The resulting disk types are exactly the four triangles and three quadrilaterals of [F4]. Distinct quadrilateral types cannot coexist disjointly, since their distinct two-versus-two vertex partitions cannot be nested on the boundary sphere. The proper-disk ball parameters in step 1.1 straighten parallel copies to standard parallel disk stacks if desired, keeping the matching face arcs. Thus this is a normal surface for $T$, with its face matches inherited from the single global surface. Every operation above was an ambient isotopy, and their finite composition proves the assertion with precisely the stated boundary freedom. [F1, F2, F4, step 1.1, step 1.2, step 2.2, step 3.1, construct, algebra] ∎
