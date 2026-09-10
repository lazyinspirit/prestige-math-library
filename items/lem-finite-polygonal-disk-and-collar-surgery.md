---
id: "lem-finite-polygonal-disk-and-collar-surgery"
kind: "lemma"
title: "Finite polygonal disk parametrizations and boundary surgery"
status: "draft"
origin: "pipeline"
deps: ["def-ordered-field", "def-continuous-map-top", "def-subspace-topology-top", "thm-compactness-under-continuous-maps", "cor-cauchy-reals-lub-complete"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Erickson, Simple Polygons — §1.2 complete separation proof; §1.4 Lemma 1.4/Theorem 1.5; §1.6 Theorem 1.10, PDF pp.4–9,13–14"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

All arcs and graphs in this lemma are finite and polygonal: their edges have disjoint interiors except at specified shared endpoints. A simple polygon separates the plane into one bounded and one unbounded component; the closure of the bounded component is a disk. A prescribed piecewise-linear homeomorphism between the boundaries of two such disks extends to a piecewise-linear homeomorphism of the disks, with piecewise-linear inverse after finite subdivisions.

A finite embedded arc has a disk neighbourhood made from vertex disks and edge strips. A finite connected plane graph has a compact disk-and-band neighbourhood; filling its bounded complementary boundary circles produces a closed disk. Subdividing an edge does not change these conclusions. Loops use two distinct attachment germs. No ambient-plane extension is asserted.

## Facts & Assumptions

**Given:** Finite polygonal arcs, simple polygons and connected plane graphs in the real plane; prescribed PL boundary homeomorphisms where indicated.

[F1] Plane coordinates support ordered-field arithmetic. ([[def-ordered-field]]).

[F2] Continuity is tested by neighbourhood preimages. ([[def-continuous-map-top]]).

[F3] Subspaces carry traces of open sets; restrictions of continuous maps are continuous. ([[def-subspace-topology-top]]).

[F4] The real least-upper-bound property gives connectedness of real parameter intervals. ([[cor-cauchy-reals-lub-complete]]).

## Proof

**Proof technique:** direct.

1.1 Rotate coordinates so distinct polygon vertices have distinct horizontal coordinates; only finitely many directions are excluded. Vertical lines through the vertices cut the complement into finitely many open-sided trapezoids, with vertical walls included except for polygon vertices. Each trapezoid is convex and therefore path connected by straight segments. Label a trapezoid left if it touches the left side of a directed polygon edge or the left sector at an extremal vertex, and right analogously. Every trapezoid receives a label: one touching an edge is labelled from that edge, and an extreme unbounded slab touches the sector of its extreme vertex. [F1, given]

2.1 Trace the directed polygon. Along each edge list the adjacent trapezoids on its left in the order encountered; at a horizontal-coordinate extremum insert the trapezoid in the left turning sector if necessary. Consecutive listed trapezoids share a vertical wall away from the polygon, including the first and last entries at the initial vertex. Every left-labelled trapezoid appears because it has either the defining edge contact or the defining vertex sector. Thus their union is path connected. The same traversal on the right gives a second path-connected union, and the two unions cover the complement. There are at most two path components. [step 1.1]

3.1 For a point not on a vertical vertex line, count the edges intersecting its upward vertical ray modulo two. The parity is constant in a trapezoid and agrees across any shared wall: at a vertex the edges above a crossing wall change by zero or two if both neighbours are on the same side, and by zero if the neighbours are on opposite sides. Thus parity extends as a locally constant function throughout the complement. Above all edges it is even, and crossing one edge into an adjacent slab cell changes it to odd. Both values occur, and no continuous path can change them: the inverse images of the two values would separate its parameter interval, which is impossible as follows. If a locally constant two-valued function on $[a,b]$ had different endpoint values, let $S$ be the set of $t$ for which its value agrees with its value at $a$ throughout $[a,t]$. Local constancy at $a$ makes $S$ nonempty. Its supremum $c$ exists. Every $t<c$ lies below an element of $S$, so the value is constant on $[a,c)$. Local constancy at $c$ then gives that same value at $c$ and just beyond it if $c<b$, contradicting the supremum; if $c=b$ it contradicts the different endpoint value. Restricting a path to two points with different parities gives this contradiction Together with step 2.1 there are exactly two components. The complement outside a large rectangle is connected and even, so only the even component is unbounded. Each edge and each vertex borders both components by its local two-sector chart. [step 1.1, step 2.1, F1, F2, F4]

4.1 The bounded component can be triangulated using diagonals. Remove collinear corners temporarily. At a unique rightmost vertex $q$, the sector toward its neighbours $p,r$ is the inside sector, since the opposite sector connects to the unbounded right half-plane. If the triangle $pqr$ contains no other polygon vertex on or inside it, its opposite segment $pr$ cannot be crossed by a polygon edge: a segment entering that triangle must exit across $pr$ or one of $pq,qr$, and the latter two are uncrossable, so a crossing forces a vertex inside. Thus $pr$ is an inside diagonal. Otherwise choose among the other vertices in the closed triangle one, $s$, farthest from line $pr$ toward $q$. The small triangle cut off toward $q$ by the parallel through $s$ has no vertices in its interior. No edge can cross $qs$ without a vertex in that small triangle, since its other two sides lie on $pq,qr$ and an edge cannot enter and exit solely through its straight base. Hence the open segment $qs$ misses the polygon, begins in the inside sector and remains inside by step 3.1. It is a diagonal. Ties or vertices on $pr$ are allowed; choose a tied vertex so the open segment has no further vertex, which the same maximal-distance test ensures. [step 3.1, F1]

5.1 A diagonal splits the boundary into two smaller simple polygons. Its two shores lie on opposite sides of the two new boundaries. Crossing parity shows their bounded interiors are disjoint and their union, with the diagonal, is the original bounded interior: crossing counts add modulo two, since the two copies of the diagonal cancel. Induct on the number of corners, with a triangle as base, to obtain a triangulation by finitely many noncrossing diagonals. Restore collinear corners by subdividing adjacent triangles. [step 3.1, step 4.1, F1]

6.1 Transfer this recursive diagonal splitting to a strictly convex polygon with the same cyclically ordered corners. At each split the two corresponding corner intervals define convex subpolygons on opposite sides of the same diagonal, so the recursive incidence pattern is identical. Affine maps on corresponding nondegenerate triangles agree on shared edges and are mutually inverse on corresponding cells. They therefore give a bijection with a piecewise-affine inverse. Both maps are continuous: near any point only finitely many closed triangles meet, and continuity on those triangles gives one neighbourhood working for all incident pieces; nonincident compact triangles have positive distance from the point. Thus the closed polygonal region is PL homeomorphic to a convex polygon, hence a disk. [step 5.1, F1, F2, F3]

7.1 Let $f:\partial P_1\to\partial P_2$ be the prescribed PL homeomorphism, and let $h_i:P_i\to C_i$ be the maps to convex polygons from step 6.1. Insert all corners and all breakpoints of $g=h_2fh_1^{-1}$ on the boundary, as well as inverse images of target corners. Choose a center in each convex polygon. Coning consecutive boundary subdivision vertices to the center triangulates each polygon, even when consecutive boundary segments are collinear: the center is strictly inside, so each fan triangle has positive area. Match the centers and boundary vertices and extend affinely on every triangle. Cyclic order, possibly reversed, makes this a bijection with a continuous piecewise-affine inverse. Composing with $h_1,h_2^{-1}$ gives the required extension of f. Composition remains PL after intersecting each image triangle with the next finite triangulation, pulling back those convex polygon cells and triangulating them. [step 6.1, F1, F2]

8.1 Around each vertex of a finite polygonal embedded arc choose a small polygonal disk; choose them disjoint and small enough to meet only incident segments. Join these disks by narrow disjoint strips along the remaining edge pieces. The choices exist because finitely many disjoint closed nonincident pieces have positive mutual distances. A bend is treated as an additional geometric vertex. Along an arc, each new strip and next disk attaches to the preceding union along one boundary interval. The new outer frontier is a simple polygon obtained by replacing that interval by the other three sides of the strip and the exposed boundary of the new disk. Its inside is precisely the union by separation. step 6.1 therefore proves inductively that the union is a disk. step 7.1 permits any specified PL parameter along its shores. A zero-edge arc is handled by one vertex disk. [step 3.1, step 6.1, step 7.1, F1]

9.1 For a graph use the same disks and strips, attaching different germs along disjoint boundary intervals in their cyclic order. A loop has two such intervals at its vertex. Each seam has two half-disk charts; each corner has one finite sector chart. Thus the union is a compact planar surface with boundary, whose boundary is a finite disjoint union of simple polygonal circles. Its interior is path connected: the interiors of disks and bands join across each attaching interval, and the graph is connected. [step 8.1, F2, F3]

10.1 For any boundary circle the path-connected surface interior lies wholly on one of its two sides, since an interior path cannot cross the boundary. Rotate coordinates if necessary so all boundary corners have distinct horizontal coordinates. The globally rightmost corner lies on a circle $C$. The local interior sector of the surface there is on the left, since no surface point lies farther right; this is the bounded-side sector of $C$, as in step 4.1. Consequently the whole surface interior lies inside $C$. Every other boundary circle $C'$ lies strictly inside $C$. The surface interior cannot lie inside $C'$, since its closure approaches $C$, whereas the closed inside of $C'$ is disjoint from $C$. Therefore the surface lies outside $C'$ and its bounded inside is a hole. These holes have disjoint interiors: if two were nested, the inner boundary could not be approached from the surface interior, which is outside the outer hole. Filling them gives exactly the closed inside of $C$. Indeed, a point omitted from this inside would be in a complementary open component; a shortest segment from it toward the nonempty surface has a first contact, which belongs to a boundary circle. Its complementary side is either the outside of $C$ or the inside of another circle, by the local boundary chart and connectedness of that component. Both alternatives contradict its being an unfilled point inside $C$. step 6.1 makes the filled region a disk. Boundary occurrences of the neighbourhood remain distinct even when graph vertices or edges repeat. [step 3.1, step 4.1, step 6.1, step 9.1] ∎
