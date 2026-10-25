---
id: lem-zero-edge-normal-exchange-rectangles-and-annuli-have-cellwise-product-structures
kind: lemma
title: Zero-edge normal exchange rectangles and annuli have cellwise product structures
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-normal-exchange-disk-patches-have-positive-edge-weight
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 2
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $F$ be a normal surface in a finite simplicial triangulation $T$. Cut $F$ along a finite disjoint trace family satisfying the distinct-normal-side hypothesis of the positive patch-weight lemma, and let $R$ be a connected compact cut patch missing $T^{(1)}$.

If $R$ is a disk with two trace-arc boundary sides and two original-boundary arc sides, then its normal-cell regions form a finite chain of quadrilaterals. The opposite trace arcs are parallel by a PL product parametrization of $R$: every intermediate arc meets each region of this chain in one arc joining its two old sides, and its endpoints stay within the two original boundary sides. These old sides lie in distinct tetrahedral faces.

If $R$ is an annulus whose two boundary components are trace circles and which misses $\partial F$, its normal-cell regions form a finite cycle of quadrilaterals. There is a PL product parametrization by $S^1\times[0,1]$ taking its two trace circles to the two end levels and keeping each intervening arc within its original normal-cell region. A Mobius patch instead has the twisted interval-bundle model and does not have two trace boundary components.

The parallelisms take place on the cut patch, cell by cell in the original triangulation. No ambient three-dimensional product region or cancellation of a separate exchange surface is asserted.

## Statement references

[[lem-normal-exchange-disk-patches-have-positive-edge-weight]]

[[lem-normal-exchange-disk-patches-have-positive-edge-weight]] — the exact zero-edge Euler cell count and distinct-side trace hypothesis.

## Facts & Assumptions

**Given:** The normal surface, trace family and zero-edge patch in either case of the Statement. An old side interval is a portion of an original normal-cell side; a trace side is a portion of a cut trace.

[F1] A zero-edge cut patch has normal-cell regions that are polygonal disks. A region with $k_j$ trace sides has $k_j$ old side intervals, alternating with those trace sides, and $k_j\ge2$. If the patch has $b$ original-boundary arcs, each is one old side interval, and $$\chi(R)=\frac b2+\sum_j\left(1-\frac{k_j}{2}\right).$$ ([[lem-normal-exchange-disk-patches-have-positive-edge-weight]])

[F2] Each interior old interval is glued to precisely one other region side, while an original-boundary interval remains unglued. The trace sides are unglued boundary sides. Finite polygonal disk boundary identifications extend to PL disk parametrizations by triangulation and coning. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

## Proof

1.1 In the disk case $\chi(R)=1$ and $b=2$; in the annulus or Mobius case $\chi(R)=0$ and $b=0$. In both cases the Euler formula [F1] says that a sum of nonpositive terms is zero. Thus every $k_j=2$. Each normal-cell region is a quadrilateral with two opposite trace sides and two opposite old sides. The old sides of one quadrilateral lie on distinct sides of its original normal disk: either trace side joins these two old sides, and the distinct-side trace hypothesis excludes their lying on the same normal-disk side. A normal disk has at most one side in any tetrahedral face, so these two faces are distinct. [given, F1, construct, algebra]

2.1 Make a finite graph with one vertex for each quadrilateral and an edge for each glued pair of old intervals, retaining loops and repeated edges if present. It is connected. Indeed, the quadrilaterals reconstruct the connected surface patch by precisely these old-side gluings. They cannot connect only at a vertex: every vertex is a trace endpoint on an old interval, and its half-disk surface chart joins its incident regions across that interval. Each graph vertex has degree two minus its number of unglued old sides, counting a loop twice. In the disk case there are exactly two unglued old sides by [F1], so the connected graph is a path, possibly one vertex with both ends unglued. To check this without a graph classification, start at one unglued side and follow the unique continuation through each quadrilateral and glued old side. Encountering an earlier vertex before the other unglued side would produce a cycle with no possible exit, contradicting connectedness and the remaining unglued side. Thus all vertices are met once and the traversal ends at the other unglued side. In the closed-boundary-strip case all degrees are two, and the same traversal closes into one cycle containing all vertices. [F1, F2, step 1.1, construct]

3.1 Parametrize every quadrilateral by a rectangle, with its old sides at the two ends in the chain direction and its trace sides at transverse levels zero and one. These parametrizations may be made compatible along successive old-side gluings: choose a PL parameter on the first old side, transport it across each gluing, and choose any increasing PL parameter on the next old side. The resulting four boundary interval maps extend to a PL rectangle map by [F2]. A concrete extension triangulates the boundary breakpoints, adds an interior vertex, and cones the boundary intervals; it is a homeomorphism because its triangular interiors partition the polygonal disk. Each intermediate transverse level then maps to an embedded arc joining the two old sides within that quadrilateral. Gluing the chain gives a PL product rectangle for the entire disk patch. Its two transverse end levels are exactly the two trace arcs, and its other sides are the two original-boundary intervals. The maps therefore give the claimed cellwise trace parallelism without changing an original cell. [F2, step 1.1, step 2.1, construct]

4.1 In the cycle case cut along one old interval and perform the rectangle construction of step 3.1. Closing that cut identifies its two transverse parameter intervals by a PL interval homeomorphism. If the identification reverses their endpoint order, the two trace sides are joined into one boundary circle, giving the twisted rectangle model of a Mobius band. If it preserves endpoint order, reparametrize one of the end intervals by the inverse identification. The prescribed maps on the two old sides of the adjacent quadrilateral still extend by [F2], so this makes the closing identification the identity without changing the cell containing any point of an intermediate arc. The quotient is then a PL product $S^1\times[0,1]$. For the annulus in the Statement, its two distinct trace boundary circles rule out endpoint reversal. This proves both the product and the stated distinction from a Mobius patch, using only the finite original quadrilateral strip. [given, F2, step 2.1, step 3.1, construct] ∎
