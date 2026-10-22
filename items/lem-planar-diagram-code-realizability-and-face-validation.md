---
id: lem-planar-diagram-code-realizability-and-face-validation
kind: lemma
title: "Realizability and face validation for planar-diagram codes"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-connected-plane-multigraph-euler-formula
  - lem-finite-polygonal-disk-and-collar-surgery
  - def-regular-oriented-link-diagram
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§3 Knots and Links, web text lines 271–283 (regular projections, crossing incidence, and over/under cyclic order)"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
    - title: "Jeff Erickson, Simple Polygons, Computational Topology, Chapter 1 (2013)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf"
      locator: "§1.2 Jordan Polygon Theorem proof, lines 132–220; §1.4 triangulation proof, lines 284–365; §1.6 Theorem 1.10, lines 452–569"
dependency_level: 2
---

## Statement

For a code with a nonempty connected crossing graph, let $C$ be its finite
crossing set, $D$ its darts, $\alpha$ its fixed-point-free edge-pairing
involution, $\sigma$ its clockwise crossing rotation, and
$\phi=\alpha\circ\sigma$ its face permutation. A **spherical realization**
means a polygonal embedding on the oriented sphere whose vertex rotations and
edge pairings are exactly $\sigma$ and $\alpha$; its faces are the cycles of
$\phi$. If every crossing has four darts with the prescribed opposite
over/under pairs, arrows, and sign-consistent cyclic order, then such a
realization exists if and only if $V-E+F=2$, where $V=|C|$, $E=|D|/2$, and
$F$ is the number of cycles of $\phi$. Choosing one face as the outer face
and deleting a point in it gives the corresponding plane realization. The
crossingless one-component code is the single circle and is handled
separately.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]] — dart, edge-pairing, crossing-rotation, face-cycle, and outer-face conventions.

[[lem-connected-plane-multigraph-euler-formula]] — Euler counting for the loops and parallel edges allowed here.

[[lem-finite-polygonal-disk-and-collar-surgery]] — polygonal regular neighborhoods, face disks, and PL disk parametrizations used in the edge insertion.

[[def-regular-oriented-link-diagram]] — regular projection and decorated crossing requirements.

[Hass–Lagarias–Pippenger, §3](https://arxiv.org/pdf/math/9807016) — finite link-diagram graph data and crossing conditions.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation-system face cycles and outer-face convention.

## Facts & Assumptions

**Given:** A finite connected oriented crossing code with nonempty crossing set, edge-pairing involution, clockwise crossing rotations, over/under pairs, strand arrows, crossing signs, and face permutation as defined above.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: darts are paired by a fixed-point-free involution; crossing rotations are clockwise four-cycles; faces are the cycles of $\alpha\circ\sigma$; over/under strands are opposite pairs, each directed through the crossing.

[F2] [[lem-connected-plane-multigraph-euler-formula]]: every finite connected polygonal plane multigraph, including loops and parallel edges, satisfies $V-E+F=2$.

[F3] [[def-regular-oriented-link-diagram]]: a regular oriented link diagram is a projection image with the over/under datum at each double point and orientations of the strands; its double points are finite and transverse, with no triple points.

[F4] [[lem-finite-polygonal-disk-and-collar-surgery]]: a finite connected plane graph has a compact disk-and-band neighbourhood; filling its bounded complementary boundary circles produces a closed disk. Its polygonal-disk argument gives a piecewise-linear parametrization by a convex polygon.

## Proof

1.1 **Necessity.** In a spherical realization, choose a point $p$ in one face and a piecewise-linear chart of the standard PL sphere minus $p$ onto $\mathbb R^2$. Because the finite polygonal graph is compact and avoids $p$, it meets only finitely many chart triangles; after subdivision the chart sends its edges to polygonal arcs and preserves incidences and complementary components. This gives a connected polygonal plane multigraph with the same crossing vertices, edge pairs, and faces. Tracing a face with its boundary on the same side applies the clockwise successor $\sigma$ and then the edge reversal $\alpha$; hence its face cycles are exactly those of $\phi$, so its face count is $F$. Applying [F2] gives $V-E+F=2$. [given, F1, F2, construct]

1.2 **A spanning-tree realization.** Assume $V-E+F=2$. Scan the finite edge list, retaining an edge exactly when it joins two distinct current components. Connectedness makes the retained edges a spanning tree $T$: each retained edge reduces the component count by one and cannot create a cycle, and the scan ends with one component. Root $T$ at the least crossing label. Embed that root in a small polygonal disk on the sphere. Visit the other vertices by increasing tree distance from the root, breaking ties by crossing label. For each new vertex, add its tree edge to its already embedded parent, placing the new dart in the prescribed clockwise gap among the parent darts already placed and choosing the new vertex disk in that face. The new vertex has no previously placed tree darts, so its remaining cyclic order can be completed without constraint. Each addition is a leaf edge and creates no crossing. The resulting connected polygonal tree has one face by [F2], because it has $V$ vertices and $V-1$ edges. [given, F2, construct]

2.1 **Face-cycle change.** There are $r=E-(V-1)$ edges outside $T$. Add them in a fixed finite order by attaching an untwisted rectangular band at the two prescribed dart intervals of the vertex disks. The boundary components of the disk-and-band neighborhood are exactly the cycles of the current face permutation. If a band attaches to one boundary component, it cuts that component into two; if it attaches to two different components, it joins them. This follows by following the two long sides of the rectangle after the two end intervals are glued. Therefore each edge addition changes the face-cycle count by $+1$ or $-1$. The initial count is one and the final count is $F=E-V+2=r+1$, so the sum of the $r$ changes is $r$. Each change is at most $+1$, hence every change is $+1$ and the two attachment intervals lie on one current face. [F1, given, step 1.2, algebra]

3.1 **Place the remaining edges.** Maintain the invariant that each complementary cap of the regular neighbourhood is a polygonal disk with a piecewise-linear parametrization by a convex polygon, preserving its boundary port order; [F4] supplies these disk parametrizations. For the next edge, step 2.1 places both attachment intervals on one current cap. In its convex polygon model choose distinct points $p,q$ in the two intervals and an interior point $r$ not on the line through $p,q$. Convexity puts the two segments $[p,r]$ and $[r,q]$ inside the polygon except at their boundary endpoints; because $r$ is off the line $pq$, their union is a simple polygonal crosscut. It cuts the convex polygon into the two regions bounded by this crosscut and the two respective boundary arcs. Each boundary is a simple polygon, so [F4] makes each closure a polygonal disk. Pull the crosscut and the two subdisks back through the stored parametrization; the two sides of the inserted edge band follow the two boundary copies of the crosscut, so the resulting face cycles are exactly the two cycles from step 2.1. Restricting the old parametrization to the two polygonal regions supplies the next face-cap parametrizations. Thus the invariant and prescribed rotations persist at each finite insertion, producing the required spherical embedding. [F1, F4, step 2.1, construct]

4.1 **Decorate, smooth, and lift.** Replace each crossing disk by the standard smooth transverse crossing with the prescribed opposite over/under pairs, orientations, and sign. Choose the edge-band centerlines polygonal, and choose the ports and their collars so each centerline joins its crossing strand tangentially. Away from the crossing disks the edge centerlines have only finitely many bends. Choose pairwise disjoint small neighborhoods of these bends, disjoint from the crossing disks and meeting no other edge portion; finiteness and embeddedness of the edge interiors permit these choices. Round each bend inside its neighborhood by a smooth regular arc matching the adjacent segments near the boundary. This changes no crossing or cyclic order. The resulting projection is a smooth immersion whose only multiple points are the declared transverse double points, with no triple points. By [F3] it is a regular oriented link diagram once lifted. At each crossing choose a smooth height on each strand that is constant near the crossing point, equal to $+1$ on the over-strand and $-1$ on the under-strand. On every edge interval choose a smooth height function constant near its endpoints and interpolating between the endpoint values prescribed by its incident crossing strands. Such functions exist on each of the finitely many intervals, including loop edges. The heights therefore fit to smooth functions on the closed oriented components. The projection is injective away from the declared crossing pairs, and the two preimages at each crossing have different heights; hence the lifted components form a smooth embedded link in $S^3$. [F1, F3, step 3.1, construct]

5.1 **Plane model and empty boundary case.** Choose a point in the distinguished face and remove it before stereographic projection; that face is then the unbounded face and all other cyclic data remain fixed. If the crossing set is empty, the admitted one-component code is realized by a round circle oriented according to its `cw` or `ccw` marker, with `outside` as its plane face selector and no dart permutation or Euler test. [given, F1, step 4.1, construct] ∎
