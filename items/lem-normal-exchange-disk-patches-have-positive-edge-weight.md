---
id: lem-normal-exchange-disk-patches-have-positive-edge-weight
kind: lemma
title: Normal exchange disk patches have positive edge weight
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - def-euler-characteristic-of-a-finite-cw-complex
  - thm-euler-formula-for-connected-plane-graphs
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Chan-Ho Suh, The Unknotting Problem and Normal Surface Q-Theory
      url: https://arxiv.org/pdf/1009.1500
      locator: §2.5, exchange surfaces and disk patches; §3.3, the least-weight
        disk-patch construction.
dependency_level: 1
---

## Statement

Let $T$ be a finite simplicial triangulation of a compact PL three-manifold $M$, and let $F$ be a normal surface. Its normal disks form polygonal cells with three or four sides. Let $\Lambda$ be a finite disjoint family of PL simple closed curves and properly embedded PL arcs on $F$. Suppose $\Lambda$ misses the normal-cell vertices, is transverse to the cell edges, and meets each normal disk in disjoint properly embedded arcs whose endpoints are on distinct sides of that disk.

Cut $F$ along $\Lambda$, retaining separate boundary copies of each cut. Let $P$ be the compact completion of one resulting component, and suppose $P\cap\partial F$ has $b$ components, all proper arcs. Define its edge weight by $w(P)=|P\cap T^{(1)}|$. If $w(P)=0$, its polygonal pieces have $k_j\ge2$ trace sides and satisfy

$$\chi(P)=\frac b2+\sum_j\left(1-\frac{k_j}{2}\right)\le\frac b2.$$

Consequently, if $P$ is a disk and $b\le1$, then $w(P)>0$. This applies in particular to disk patches of a proper normal sum: an interior disk patch has one closed trace frontier and $b=0$, and a boundary disk patch has one trace-arc frontier and $b=1$.

The trace hypothesis is satisfied by the usual exchange rectangles: in each tetrahedron a rectangle has two opposite sides on distinct normal disks and the other two sides in distinct tetrahedral faces. No orientability, irreducibility or projective-plane hypothesis is imposed.

## Statement references

[[def-normal-surface-coordinate-box]] — normal disks and their polygonal cell structure.

[[def-euler-characteristic-of-a-finite-cw-complex]] — finite cell count defining $\chi$.

## Facts & Assumptions

**Given:** The triangulation, normal surface, trace family and cut component of the Statement.

[F1] A finite properly embedded polygonal arc in a polygonal disk cuts it into two disks. For a disjoint finite arc family, repeated cutting leaves disk regions. One verifies the one-arc assertion by joining the arc to each complementary boundary interval and applying polygonal separation and triangulation. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F2] The normal disks and their sides give a finite cell structure on $F$; its vertices are exactly the normal surface's intersections with the triangulation edges. Each interior side is glued to one other side, and each side on $\partial M$ remains a boundary side. ([[def-normal-surface-coordinate-box]])

[F3] The Euler characteristic of a finite cell structure is its number of vertices minus edges plus faces. For a PL disk this value is $1$: carry its one-skeleton to a plane disk by a PL disk parametrization. The connected plane graph has precisely its cell interiors as bounded faces and one exterior face, so the plane-graph formula gives $v-e+f=1$. Subdividing bent edges or subdividing to remove loops and multiple edges adds one vertex and one edge at a time and preserves this count. ([[def-euler-characteristic-of-a-finite-cw-complex]], [[thm-euler-formula-for-connected-plane-graphs]])

## Proof

1.1 Assume $w(P)=0$. Cut each normal disk along its trace arcs. The arcs are finite, disjoint and proper, so [F1] makes each remaining region a polygonal disk. Keep precisely the regions belonging to $P$, with distinct copies on opposite sides of any cut. Their finitely many sides and endpoints give a finite cell structure on the abstract cut completion $P$. The original normal-cell vertices do not occur in these regions, by the assumed zero weight and [F2]. [given, F1, F2, construct]

2.1 A retained region cannot have two consecutive old side intervals: their meeting point would be an original normal-cell vertex. Nor can two trace sides meet: trace arcs are disjoint and transverse to the old edges, with distinct endpoints there. Thus the boundary of each retained region alternates trace sides and old side intervals. It contains a trace side, since a region with no trace side would be the entire original normal disk and would contain its vertices. If it had only one trace side, the complementary old interval would connect the two endpoints along one old side, so that trace arc would have both endpoints on that side, contrary to the hypothesis. Therefore its number $k_j$ of trace sides is at least two, and it has exactly $k_j$ old side intervals. [F2, step 1.1, construct]

3.1 Put $N=\sum_j k_j$, let $f$ be the number of retained regions, and let $e_i$ and $e_m$ count respectively the glued interior old intervals and the old intervals lying in $\partial F$. Every trace side is a boundary edge of the cut completion, so their number is $N$. An interior old interval has two incident retained region sides; a boundary old interval has one. Consequently $$N=2e_i+e_m.$$ This count concerns abstract sides of $P$, so it remains valid when the same component occurs on both sides of a trace or on both sides of an old cell edge. [step 1.1, step 2.1, algebra]

4.1 Each component of $P\cap\partial F$ contains no original normal-cell vertex, again because $w(P)=0$. Such a component is, by hypothesis, a proper arc, with its two endpoints on the trace family. It therefore lies within one original boundary side. No trace endpoint lies in its interior, since cutting at any such endpoint terminates the corresponding boundary interval in the cut completion. Hence each of the $b$ components is exactly one boundary old edge, and $e_m=b$. [given, F2, step 1.1, step 3.1, construct]

5.1 Every vertex of the new cell structure is an intersection of a trace with an old side. It is consequently on the boundary of the cut completion. There are no other vertices, since the original vertices were excluded in step 1.1. The boundary is a finite disjoint union of polygonal circles, so its vertex count equals its edge count. Its edges are the $N$ trace sides and $b$ boundary old intervals, giving $v=N+b$. The full edge count is $e_i+N+b$. [step 1.1, step 3.1, step 4.1, construct]

6.1 Apply [F3] and substitute the preceding counts: $$\chi(P)=(N+b)-(e_i+N+b)+f=f-e_i=f-\frac{N-b}{2}=\frac b2+\sum_j\left(1-\frac{k_j}{2}\right).$$ Every summand is nonpositive by step 2.1, proving the asserted inequality. If $P$ is a disk and $b\le1$, then $\chi(P)=1$ whereas the inequality gives $\chi(P)\le1/2$, a contradiction. Thus every such disk patch has positive edge weight. [F3, step 2.1, step 3.1, step 4.1, step 5.1, algebra]

7.1 For the exchange-rectangle application, each side of a rectangle lying on a normal disk joins its two face sides. Those face sides lie in distinct tetrahedral faces, so the endpoints lie on distinct sides of that normal disk. Disjoint exchange surfaces give disjoint traces, which can be chosen transverse to the old sides and away from their vertices by finite PL displacement. Thus their cut patches satisfy precisely the trace hypothesis already used. The stated interior and boundary disk patches have respectively zero and one proper original-boundary arcs, so step 6.1 applies without any additional ambient-manifold hypothesis. [given, F2, step 6.1, construct] ∎
