---
id: thm-finite-pl-schoenflies-in-dimension-three
kind: theorem
title: "Finite piecewise linear Schoenflies in dimension three"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [ lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls, lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction, lem-parametrized-pl-balls-absorb-standard-boundary-windows, lem-finite-convex-cell-complexes-admit-compatible-triangulations ]
justified_by: []
proof_strategy: strong-induction
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
      locator: "PNAS 10 (1924), pp.6–8, full genus-zero height induction. Listed local suppliers give finite PL base, both cap constructions, strict complexity descent and ball reassembly."
dependency_level: 7
---

## Statement

A supplied finite PL embedding of the standard PL two-sphere in $\mathbb R^3$ bounds a compact parametrized PL three-ball; its two complementary components are the bounded ball interior and a connected unbounded exterior. A supplied finite PL embedding of the standard PL two-sphere in the standard PL three-sphere bounds two parametrized PL three-balls, and a PL homeomorphism of that three-sphere carries it to the common boundary in a standard double of a convex three-ball. All parameters and homeomorphisms are finite PL on the compact spaces in question. No choice hypothesis is introduced.

This is a PL assertion in already supplied standard PL ambient spaces. It does not assert triangulability of arbitrary topological three-manifolds or tame arbitrary wild sphere embeddings.

## Facts & Assumptions

**Given:** The supplied finite PL embedding of a standard PL two-sphere in the stated standard PL ambient space.

[F1] A generic-height polyhedral two-sphere with one minimum, one maximum and regular links elsewhere has an explicit finite PL ball parameter ([[lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls]]).

[F2] Positive Alexander height complexity admits two strictly simpler finite PL sphere reductions whose supplied balls reconstruct the original supplied ball ([[lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction]]).

[F3] Prescribed boundary-disk maps of parametrized PL balls extend over the balls, with finite PL inverse ([[lem-parametrized-pl-balls-absorb-standard-boundary-windows]]).

[F4] Finite convex cell complexes admit compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

## Proof

**Given:** First a finite polyhedral image $S$ in $\mathbb R^3$, with its supplied standard sphere parameter. Choose an affine height distinct on its finitely many vertices, excluding the finite union of direction planes perpendicular to vertex differences. Let $n=n(S,h)$ be the nonnegative integer complexity of [F2].

1.1 Compute the finite height index sum. Assign each simplex of the surface triangulation to its highest vertex. The contribution at a vertex $v$ to the alternating vertex-edge-triangle count is $1-\chi(L_v^-)$, where $L_v^-$ is its lower link: an assigned incident edge contributes minus one for each lower link vertex and an assigned incident triangle contributes plus one for each lower link edge. If all directions are above $v$, the lower link is empty and the contribution is one. If all are below, it is the whole link circle, whose Euler characteristic is zero, again giving one. Otherwise it is a disjoint union of $r_v$ intervals, giving contribution $1-r_v$. These interval components are counted by the positive and negative link arcs of [F2]. Summing over vertices gives $$m+M-\sum_{v\text{ saddle}}(r_v-1)=2,$$ where $m,M$ are the numbers of minimum and maximum vertices. The right side is the Euler count of the standard sphere. It can be checked in the boundary of a tetrahedron and is unchanged by finite common subdivisions: subdividing an edge or coning a subdivided triangle boundary preserves the alternating count, by the interval and disk face counts. The supplied finite PL sphere parameter gives such common subdivisions with the tetrahedral boundary. [given, F4, algebra]

2.1 If $n=0$, there are no saddles, since a saddle section contains at least its two loops and contributes positively to $n$. Step 1.1 gives $m+M=2$. Both are at least one because the finite nonconstant height has a minimum and maximum, so $m=M=1$. Every other vertex has $r_v=1$, precisely the regular height-link condition. Apply [F1] to obtain a finite PL ball parameter. For general $n$ use strong induction: when $n>0$, [F2] gives two embedded parametrized PL spheres with nonnegative complexities $n_1,n_2$ satisfying $n_1+n_2\le n-1$. Hence each is smaller than $n$, so the induction hypothesis supplies their PL balls. The explicit transfer and reassembly operations of [F2] supply the ball bounded by $S$. This is a finite induction terminating at the zero case, not a citation to a general Schoenflies theorem. [given, F1, F2, step 1.1, induction]

3.1 The complement of this parametrized ball has a connected unbounded exterior. A finite compatible link subdivision gives local plane/half-space charts at its boundary: the boundary link circle splits the standard two-sphere link into two parametrized disks by the polygonal planar chart construction. Its interior has ball charts transported by its supplied ball parameter. Along the connected boundary, exterior half-ball charts chain into one complement component. Every other complement component would have a boundary point on that boundary, contradicting these charts; an open component with no boundary in connected Euclidean space would be all of Euclidean space. The exterior contains the complement of a large box and is therefore unbounded. The bounded component is the connected ball interior. This proves all complementary-component assertions in $\mathbb R^3$. [given, step 2.1, construct]

3.2 We describe the standard ambient charts needed to pass to $S^3$ without a manifold triangulation theorem. Realize standard PL $S^3$ as the boundary of a four-simplex. A point off the embedded sphere can be carried to a fixed vertex by finitely many PL point pushes in linear ball charts along a polygonal path: triangulate a small convex ball by coning its boundary from the current point and move that cone point to a sufficiently close next point, fixing the boundary. The punctured four-simplex boundary has an explicit locally finite PL chart to $\mathbb R^3$: map the opposite three-face to a convex tetrahedron, and successive truncated conical shells toward the deleted vertex to successive shells between tetrahedra of radii $2^j$. Their matching convex cell decompositions have compatible face-cone maps by [F4]. On every compact subset only finitely many shells occur. The shell cells and cone points can be determined from their vertices and barycenters, so this description requires no countable choice. Thus the given compact sphere becomes a finite polyhedral sphere in $\mathbb R^3$. Step 2.1 supplies one complementary PL ball in $S^3$. [given, F4, step 2.1, construct]

4.1 Choose a point in that ball's interior and apply the same explicit punctured standard-sphere chart at this new point. The previously unbounded complementary side is now bounded: the omitted point lies on the other side, and a neighborhood of that point is disjoint from this side's compact closure. Step 2.1 in this chart supplies its PL ball parameter. The complementary-side identifications follow from step 3.1 applied in the charts, so these are exactly the two closed complementary balls of the original sphere. Their supplied boundary maps differ by a PL sphere homeomorphism. Extend that homeomorphism over one convex model by coning a compatible boundary triangulation from its interior point; this is the same finite extension used in [F3]. Adjusting that ball parameter makes the two boundary parameters agree. Paste them to obtain a PL homeomorphism from $S^3$ to the double of a convex three-ball, taking the embedded sphere to the common boundary. Both domains are compact finite polyhedra, so the pasted parameters and inverses have finite compatible subdivisions. All selections, chart restrictions, index computations, cap reductions and gluings used finite data. No choice principle is needed, and no arbitrary topological ambient manifold has been given a PL structure in this argument. [F3, F4, step 3.1, step 3.2, construct] ∎
