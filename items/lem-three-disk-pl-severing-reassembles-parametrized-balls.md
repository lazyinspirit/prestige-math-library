---
id: lem-three-disk-pl-severing-reassembles-parametrized-balls
kind: lemma
title: "Three-disk piecewise linear severing reassembles parametrized balls"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-parametrized-pl-balls-absorb-standard-boundary-windows ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
    - title: "J. W. Alexander, On the subdivision of 3-space by a polyhedron"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1085499/"
      locator: "PNAS 10 (1924), p.7, fundamental combinatorial lemma; explicit finite PL proof and boundary-window verification supplied below."
dependency_level: 4
---

## Statement

Let $E_1,E_2,D\subset\mathbb R^3$ be three finite parametrized embedded PL two-disks with common boundary $C$, any two intersecting exactly in $C$. Suppose $E_i\cup D$ is the boundary of a supplied parametrized embedded PL three-ball $B_i$, for $i=1,2$. Then $E_1\cup E_2$ bounds a parametrized embedded PL three-ball $B$. More precisely, exactly one of the following three configurations holds:

- $B_1\cap B_2=D$, and $B=B_1\cup B_2$;
- $B_1\subset B_2$, and $B=\overline{B_2\setminus B_1}$;
- $B_2\subset B_1$, and $B=\overline{B_1\setminus B_2}$.

All parameters and identifications can be made finite PL. No choice hypothesis or general three-dimensional Schoenflies theorem is required.

## Facts & Assumptions

**Given:** The three finite embedded parametrized disks and two parametrized balls with the stated intersections and boundaries.

[F1] Polygonal Jordan disks, their prescribed-boundary PL extensions, and finite disk-and-strip neighborhoods of arcs ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F2] Compatible finite triangulations and subdivisions for convex cells and marked PL subpolyhedra ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]).

[F3] Marked PL balls glue along boundary disks, and a parametrized ball with a standard boundary window can be removed from another parametrized ball leaving a parametrized ball ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

## Proof

**Given:** The stated disks and balls.

1.1 Their local configuration along $C$ is a standard three-page book. Here is the finite link verification, including at vertices of $C$. Take compatible ambient and disk triangulations by [F2], and a small polyhedral link sphere at a point of $C$. Each disk meets it in a polygonal arc, since its intrinsic parameter is a disk parameter. Their three arcs have the same two endpoints, the directions of $C$, and have disjoint interiors because the disks meet only in $C$. The resulting theta graph cuts the link sphere into three parametrized polygonal disks. To verify the disk assertion without a sphere theorem, move a point off the graph to a vertex of a tetrahedral sphere by finite polygonal chart point pushes, truncate a small cone disjoint from the graph, and flatten the remainder to a planar triangle by mapping its opposite face and three strips to concentric triangular regions. Each simple cycle in the theta graph then has a planar Jordan disk by [F1]. First apply this to two arcs; the third arc lies in one of the resulting disks and splits it into two by the same polygonal Jordan argument. The other disk is the annulus to the outer triangle capped by the removed cone; a thin joining strip cuts that annulus into a polygonal disk, giving its PL parameter. Thus the three complementary link regions are parametrized disks. Map the three graph arcs to the three meridians of a standard three-page book, extend over those three disks by [F1], and cone the resulting link homeomorphism. This gives the claimed local PL book chart. At an interior point of $D$ the same two-disk link construction gives the ordinary plane/half-space charts for the two ball sides. [given, F1, F2, construct]

2.1 The complement of the boundary of either supplied ball has exactly its connected bounded ball interior and a connected unbounded exterior. For completeness, its local interior and exterior sides are half-balls by the link construction of step 1.1, applied also to the remaining boundary points using their simple link circles. Interior points are ordinary three-space points: compatible simplex links transported by its ball parameter give sphere links. The ball interior is connected. Along its connected boundary all local exterior sides lie in one complement component, by chaining boundary charts. Any additional exterior component would have a boundary point on that boundary, since a nonempty proper open subset of connected Euclidean space cannot be both open and closed; such a point contradicts the local half-ball chart. The exterior is unbounded since the ball is compact. These observations require no general sphere-separation assertion for unparametrized spheres. [given, step 1.1, construct]

3.1 Compare the two balls along the connected disk interior $\operatorname{Int}D$. Each occupies one local side of its plane chart, and the choices are constant there by connectedness. First exclude the local book ordering in which each open page lies inside the other ball. By connectedness and step 2.1 these inside relations would hold on both whole open disks, giving $\partial B_1\subset B_2$ and $\partial B_2\subset B_1$. But $\partial B_1\subset B_2$ implies $B_1\subset B_2$: the connected unbounded exterior of $B_2$ misses $\partial B_1$, hence lies in the unbounded exterior of $B_1$, and taking complements gives the inclusion. The reversed relation would give equality, contradicting the distinct open boundary pages. If their choices along $D$ are opposite, the book chart therefore has the other ordering: $\operatorname{Int}E_1$ is locally outside $B_2$ and $\operatorname{Int}E_2$ is locally outside $B_1$. Since these open disk interiors are connected and disjoint from the other ball boundary, they are globally outside by step 2.1. The connected interior of $B_1$ is disjoint from $\partial B_2$: it meets neither $D\subset\partial B_1$ nor $E_2$, which is outside $B_1$. It is therefore wholly inside or wholly outside $B_2$; its points near $\operatorname{Int}D$ lie outside, so it is outside. Hence $B_1\cap B_2=D$. If the choices on $D$ are the same, the three-page chart instead puts one of $\operatorname{Int}E_1,\operatorname{Int}E_2$ inside the other ball and the other outside. Suppose the former is inside $B_2$. The same connectedness argument shows that $\operatorname{Int}B_1$, which misses $\partial B_2$, lies inside $B_2$: near $D$ it is on its inside side. Thus $B_1\subset B_2$. Interchanging indices gives the third case. The disk interiors cannot coincide and all three pages are distinct, so these cases are exclusive. [given, step 1.1, step 2.1, construct]

4.1 In the disjoint-interior case, [F3] glues the given ball parameters along $D$ and gives a PL ball parameter on $B_1\cup B_2$. Its boundary is exactly $E_1\cup E_2$, as is also seen in the local book charts. In the nested case $B_1\subset B_2$, the intersection $B_1\cap\partial B_2$ is exactly $D$: off $C$, $E_1$ is inside $B_2$ by step 3.1, and $E_2$ is outside $B_1$. The rest of $B_1$ is in $\operatorname{Int}B_2$. The required standard boundary-window condition holds along $C$. Namely the local book chart has three ordered pages; choose the outer two to bound the outer half-space and the inner page to cut out the inner quadrant. A finite linear angular subdivision takes those sectors to $w\ge0$ for $B_2$ and $w\ge0,v\le0$ for $B_1$, with common disk $w=0,v\le0$. This is precisely the window condition of [F3], so $\overline{B_2\setminus B_1}$ has a finite PL ball parameter. Its boundary consists of $E_1$ and $E_2$, joined along $C$. The reversed nesting is identical with the indices exchanged. Every link map, subdivision and application of the gluing or window construction is finite; no choice assumption is introduced. [F3, step 1.1, step 3.1, construct] ∎
