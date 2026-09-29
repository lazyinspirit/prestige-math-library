---
id: lem-finite-planar-graph-disk-cuts-and-euler-count
kind: lemma
title: Finite planar graph disk cuts and Euler count
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - lem-finite-plane-graph-ear-and-face-facts
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Diestel, Graph Theory, 6th edition, Chapter 4 preview"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
      locator: "Section 4.2, Proposition 4.2.8, printed p. 100, gives triangular faces for maximal finite plane graphs. The proof here instead constructs a polygonal fan in each Jordan face; Diestel supplies context, not the arbitrary-arc crosscut argument."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Theorem, printed pp. 167–172 (PDF pp. 183–188), Problem 9-5: outline of the finite convex-polygon cover and the subdivision of the resulting polygonal faces. The outline does not supply the disk-cut argument, which is proved here."
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, printed pp. 31–39 (PDF pp. 43–52): finite triangle decompositions of compact surfaces. Context for the use of the lemma; the closed-surface setting there does not cover the boundary and corner cases used here."
---

## Statement

Assume the axiom of choice. Let $D\subseteq\mathbb R^2$ be a closed round disk
with boundary circle $S=\partial D$, and let $\Gamma\subseteq D$ be a finite
embedded graph. Its edges are regular piecewise $C^2$ embeddings of compact
intervals, with nonzero one-sided derivatives at their endpoints; their relative
interiors are pairwise disjoint and avoid the finite vertex set. At each vertex,
the outward one-sided tangent rays of incident edges are pairwise distinct.
Suppose that $S\subseteq\Gamma$ is a union of edges and that every meeting of
edges or of an edge with $S$ is a vertex. Parallel edges between two vertices
are allowed. Then finitely many vertex subdivisions and additional polygonal
arcs produce an augmented finite graph $\Gamma'$ with the following properties:

(i) $\Gamma'$ is connected and contains $\Gamma$ with every original edge
preserved (possibly subdivided);

(ii) every face $f$ of $\Gamma'$, meaning a component of $D\setminus\Gamma'$,
has closure a closed disk whose boundary is a simple cycle of $\Gamma'$;

(iii) the disk decomposition is face-to-face: two closed faces meet in a common
vertex, in a common full edge, or not at all;

(iv) with $V,E,F$ the numbers of vertices, edges and faces of $\Gamma'$,
counting boundary vertices and boundary edges, $V-E+F=1$.

Each added arc has relative interior in a face of the graph at the instant it
is added, and is piecewise smooth. The conclusion applies in a regular surface
chart whenever its image satisfies the stated endpoint and tangent hypotheses.

## Facts & Assumptions

**Given:** The regular embedded finite graph and distinct tangent rays in the Statement. Full AC is assumed because the two in-run Jordan/plane-graph suppliers below assume it ([[def-axiom-of-choice]]).

[F1] A connected open subset of the plane is polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F2] An interior polygonal crosscut of a Jordan disk splits it into two Jordan disks; the finite-plane-graph ear proof gives the crosscut step ([[lem-finite-plane-graph-ear-and-face-facts]], proof 1.3; [[lem-jordan-schoenflies-extension-for-plane-curves]]).

[F3] Every finite 2-connected graph with at least three vertices has an ear decomposition beginning with any specified cycle ([[lem-finite-plane-graph-ear-and-face-facts]], proof 1.2). The arbitrary-Jordan polygonal-crosscut region argument in that item's proof 1.3 is extended below to the regular graph's possibly nonpolygonal ear arcs using the plane homeomorphism of [F2].

## Proof

**Proof technique:** connect the graph, remove cut vertices by polygonal crosscuts, and split each resulting Jordan face by a sequential polygonal fan.

1.1 A regular edge has a well-defined nonzero tangent ray at each endpoint. On a sufficiently short initial interval its radial distance from that endpoint is strictly increasing: the derivative of squared radial distance is $2t|\gamma'(0)|^2+o(t)>0$. Its image lies in an arbitrarily narrow cone about that ray. Finiteness and distinct incident rays therefore give a small vertex disk in which each incident edge is one radial germ and every sector between consecutive germs contains a smaller straight wedge. At an interior point of an edge a regular local parametrization gives the usual two sides. These assertions persist when a new edge starts strictly inside an existing free wedge. [given, algebra]

2.1 Subdivide $S$ so that it is a cycle with at least three vertices. For each pair of parallel edges subdivide all but one at a distinct regular interior point. The resulting graph is simple; each subdivision changes $(V,E)$ by $(1,1)$, introduces two opposite rays at its *new* vertex, and creates no zero sector between distinct incident edge germs. The positive free sectors needed below are the sectors on either side of that subdivided edge. Existing incident rays at old vertices are unchanged. [given, step 1.1]

2.2 Polygonal crosscut fact. If a connected open face $f$ has distinct boundary vertices $u,w$ and selected free sectors there, choose short straight segments from each endpoint strictly inside its sector. Their inner endpoints lie in $f$. Join them by a polygonal path in $f$ using [F1], perturbing finitely many collinear overlaps if needed. The finite planar union of this path and the two initial segments contains a simple path from $u$ to $w$; choosing the first departure at $u$ and last arrival at $w$ retains short straight subsegments in the prescribed sectors. Equivalently, erase loops and shorten the endpoint segments at their finitely many intersections with the middle path. This gives a simple polygonal arc with interior in $f$, and with strictly positive sectors on either side at both endpoints. [F1, step 1.1, construct]

3.1 Connect components. Start with the component containing $S$. If another compact component exists, a shortest segment between this component and the union of the other components gives, after stopping at its first encountered component, an open segment in a common face with endpoints on different components. At an endpoint interior to a regular edge, subdivision makes it a vertex and the shortest segment is normal to that edge; at an old vertex it enters a free sector after an arbitrarily small generic perturbation in that face. Apply step 2.2 in those sectors, so the joined graph retains the local positive-sector property. Each addition reduces the component count, hence finitely many give a connected graph. [given, step 1.1, step 2.2, construct]

3.2 Remove cut vertices. Let $v$ be a cut vertex of the connected simple graph, and let $C_1,\ldots,C_k$ be the components of $\Gamma-v$. Around $v$ some consecutive incident germs belong to different $C_i$; their other endpoints $u,w$ lie on the boundary of the face occupying that sector and are not adjacent (an edge $uw$ would connect the two components without $v$). Step 2.2 joins $u,w$ inside that face without crossing the graph. For the fixed finite vertex set define $\Phi=\sum_x(c(\Gamma-x)-1)_+$, where $c$ counts connected components. Adding this edge strictly decreases the summand for $x=v$ and cannot increase any summand, since deleting any fixed vertex from the augmented graph only adds an edge or changes nothing. Thus $\Phi$ decreases. The construction introduces no vertex and keeps the graph simple, so after finitely many additions $\Phi=0$: the graph has at least three vertices, is connected, and has no cut vertex. [step 2.1, step 2.2, algebra]

4.1 Apply the rooted ear decomposition of [F3] to the 2-connected simple graph of step 3.2, starting with the boundary cycle $S$. We prove by induction that every face inside $S$ has a Jordan graph cycle as its exact frontier and that $V-E+F_{\rm plane}=2$. The initial drawing $S$ has one bounded face and one exterior face by [F2], and $V=E$. Suppose the invariant holds for a partial drawing $H$, and add its next ear $P$, a finite chain of simple graph edges with distinct old endpoints $u,v$, with all internal vertices new and its relative interior disjoint from $H$. As every edge lies in $D$, the connected relative interior of $P$ lies in one bounded face $f$ of $H$. Its frontier is a graph cycle $J$ by induction, and $f$ is the bounded component of $\mathbb R^2\setminus J$: otherwise a polygonal path inside that component from $f$ to an omitted point would first leave $f$ through its frontier $J$, a contradiction. Let $J_1,J_2$ be the two $u$--$v$ arcs of $J$. Each $J_i\cup P$ is a Jordan curve, even though $P$ need not be polygonal. The region-label proof of the crosscut claim in [F2]'s ear supplier applies verbatim except for its local-two-side sentence: at any $x\in P\setminus\{u,v\}$ choose a neighbourhood disjoint from $J$; the Schönflies plane homeomorphism of the Jordan curve $J_1\cup P$ in [F2] gives a smaller neighbourhood in which the common arc $P$ has exactly two connected local sides. Thus the two new Jordan curves label opposite sides of every interior point of $P$, and the same component/frontier argument splits $f\setminus P$ into exactly two bounded faces whose exact frontiers are $J_1\cup P$ and $J_2\cup P$. Every other face stays unchanged. If the ear has $k$ edges, it adds $k-1$ vertices, $k$ edges and one face, preserving $V-E+F_{\rm plane}=2$. Induction covers the complete drawing. In particular each $f\subset\operatorname{Int}D$ is a Jordan disk by [F2], and its cycle vertices have positive occupied sectors by step 1.1. [F2, F3, step 3.2, induction]

5.1 Fix one such face with boundary cycle $v_1v_2\cdots v_n$, $n\ge3$. Apply step 2.2 inside it from $v_1$ to $v_2$, using strict interior rays, and select an interior point $p$ on one straight segment of that crosscut. Subdivide the crosscut at $p$. By [F2], it cuts off the Jordan triangle with vertices $(p,v_1,v_2)$ and old boundary edge $v_1v_2$; its other Jordan face contains $v_3,\ldots,v_n$. Choose $p$ in the straight part so the remaining face has a positive sector at $p$. [F2, step 2.2, step 4.1, construct]

6.1 In the remaining face add, successively for $j=3,\ldots,n$, a polygonal crosscut from $p$ to $v_j$ with endpoint rays strictly inside its positive sectors. The crosscut splitting fact [F2] gives at stage $j$ one Jordan triangle $(p,v_{j-1},v_j)$ and one remaining Jordan disk containing the not-yet-used vertices. The final remainder is $(p,v_n,v_1)$. All faces are triangular Jordan disks and each has exactly one edge inherited from the boundary of the old face. Repeating this finite construction in each old face yields only finitely many new edges and vertices. [F2, step 2.2, step 5.1, induction]

7.1 The new triangles within one old face form a fan: distinct closed triangles meet in one whole spoke, the hub $p$, a common boundary vertex, or not at all. Across different old faces, a new triangle contains only one old boundary edge, so two such triangles can share at most that whole edge or a vertex. Regular graph edges have disjoint relative interiors, and added arcs are interior to their selected faces; thus no other intersection is possible. This proves the stated face-to-face property. [step 4.1, step 6.1]

8.1 The connected graph before the fan has $V-E+F_{\rm plane}=2$ by the induction of step 4.1. Its exterior face is the unique component outside $S$. A boundary or interior edge subdivision adds one vertex and one edge; a crosscut between existing boundary vertices adds one edge and one bounded face. The hub subdivision and every fan split therefore preserve $V-E+F$ for faces inside $D$. Consequently the final counts satisfy $V-E+F=1$. All original edges persist up to subdivision and every added edge is polygonal, establishing (i)–(iv). The exact AC use is through the arbitrary-Jordan-curve suppliers in [F2]; finite choices and the rooted ear selection of [F3] need no AC. [F2, F3, step 2.1, step 3.2, step 4.1, step 6.1, step 7.1, algebra] ∎

## Source locator

Diestel, *Graph Theory*, 6th edition, Chapter 4, Section 4.2, Proposition 4.2.8, printed p. 100, discusses maximal plane graphs with triangular faces. The proof here uses a sequential fan instead. The rooted ear decomposition and polygonal-crosscut region argument are in `lem-finite-plane-graph-ear-and-face-facts`, proofs 1.2–1.3; step 4.1 supplies the needed extension to the regular graph's nonpolygonal ear arcs using Jordan–Schönflies. Lee, Chapter 9, Problem 9-5, printed pp. 171–172, and Jost, §2.3.A, printed pp. 31–39, give downstream context; neither establishes this boundary disk-cut statement.
