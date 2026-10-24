---
id: lem-exchange-surfaces-inside-normal-disk-copy-products-are-vertical
kind: lemma
title: Exchange surfaces inside normal disk-copy products are vertical
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products
  - thm-simple-polygon-admits-a-triangulation
  - thm-polygonal-jordan-curve
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 9
sources:
  references:
    - title: Jeffrey L. Tollefson, Normal surface Q-theory, Pacific Journal of Mathematics 183 (1998), 359–374
      url: https://msp.org/pjm/1998/183-2/pjm-v183-n2-p07-p.pdf
      locator: §4, printed pp.366–369, exchange-patch comparison baseline only. Its irreducible/boundary-irreducible hypotheses are not transferred to this local disk-product/exchange formulation; the accepted local proof remains the argument.
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

Let $P$ be a supplied cellwise normal product between disjoint equal-vector connected normal disks $D_0,D_1$ in a finite simplicial three-manifold triangulation. Thus each tetrahedral part of $P$ is a parametrized disk prism between corresponding normal disk pieces, each face part is the corresponding normal-arc strip, and the product fibers stay in their original ambient simplex.

Suppose an embedded exchange annulus or proper exchange disk $A$ lies in $P$, misses the original one-skeleton, and spans $D_0,D_1$. More explicitly, its two frontier components are respectively a circle or proper arc on each end disk; it meets each tetrahedral prism in disjoint proper rectangles, each with one frontier arc on each horizontal end, joining the same two distinct original faces at both ends; its remaining sides are the face arcs of $A$. In the disk case its remaining boundary is in the vertical boundary of $P$ in $\partial M$.

The product parametrization can be chosen to make $A$ vertical, while its fibers still remain in their original ambient simplex. In the annulus case the two disk caps bounded by its frontier cobound a normal product with vertical boundary $A$. In the disk case both pairs of corresponding disk caps cut off by its frontier arcs cobound such products, with the other vertical boundary strips in $\partial M$. In particular these caps are normally parallel along $A$.

## Statement references

[[lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products]] — actual disk-copy products and the relative proper-disk cutting construction in a parametrized ball.

## Facts & Assumptions

**Given:** The supplied normal product and the embedded exchange surface with all the stated rectangle and boundary-incidence data. The explicit local conditions are hypotheses; no assertion about an arbitrary embedded annulus or disk in a three-dimensional product is used.

[F1] A disjoint finite arrangement of proper PL disks in a parametrized PL ball cuts it into parametrized balls. Corresponding boundary-circle and disk maps extend over the cut balls and paste to a PL homeomorphism. The proof cuts along one disk, caps it on the two boundary sides, and uses finite PL Schoenflies, then iterates. ([[lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products]])

[F2] Disjoint proper polygonal arcs cut a polygonal disk into parametrized polygonal disks. An endpoint-order-preserving correspondence of the boundary and the arcs extends over these regions: choose the interval maps on the arcs, then cone compatible boundary triangulations of each region. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F3] The end disks, tetrahedral prisms, face strips and original edge intervals are the actual supplied product cells, not an unmarked topological identification. A component of $A$ in a face strip is a proper arc between its two horizontal boundary arcs. Its endpoints miss the edge intervals, because $A$ misses the one-skeleton. The corresponding rectangles and face arcs are finite, disjoint and embedded by hypothesis.

## Proof

1.1 First straighten the face strips relative to their end and side data. In a face strip the disjoint arcs of $A$ join its opposite horizontal sides. They match their endpoints in order: two matched pairs in reversed order would alternate on the boundary of the strip and would have to intersect, by [F2]. Keep the lower horizontal arc as the base interval. Choose an increasing PL parametrization of the upper horizontal arc matching these finitely many marked endpoints. Keep the two vertical sides parametrized by their prescribed original edge intervals; their endpoints already agree. Compare this marked arc arrangement with the vertical intervals over the marked lower endpoints in a standard rectangle. Choose its interval maps on the marked arcs and extend over each complementary disk by [F2]. This supplies a product parametrization of the entire face strip making all its $A$ arcs vertical, preserving each of its four boundary sides and agreeing with the selected end and edge parametrizations. When strips share an original edge interval, use that one fixed interval parametrization on both, so the maps agree there. [given, F2, F3, construct]

2.1 Fix one tetrahedral prism $B$ and let its lower disk be its base. The frontier arcs of its $A$ rectangles are disjoint proper arcs in that disk. The face-strip maps just constructed match their endpoints to the corresponding endpoints in the upper disk. Each rectangle connects precisely its two lower endpoints to its two upper endpoints; the distinct-face hypothesis identifies the endpoints individually by their original faces. Thus the same boundary-order matching carries each lower arc's endpoint pair to its upper counterpart. These arrangements have the same complementary regions: disjoint proper arcs in a disk have pairings determined by their boundary endpoints, and cutting successively along them produces the same finite disk-region incidence tree. Map the lower disk to itself, map the upper disk to that base by extending its prescribed boundary and arc maps across these regions using [F2], and use the maps of step 1.1 on all side strips. We have a prescribed homeomorphism of the entire prism boundary to the boundary of the standard product of its lower disk with the interval. It maps each actual rectangle boundary to the boundary of the vertical rectangle over its lower frontier arc. [F2, F3, step 1.1, construct]

3.1 Extend the last boundary map over the prism with its rectangle arrangement, rather than presuming the arrangement is vertical already. The actual rectangles are disjoint proper PL disks in the parametrized ball $B$, so [F1] cuts $B$ into parametrized balls. The comparison vertical rectangles cut the standard product into the balls given by its lower disk regions times the interval. Their boundary incidence trees agree by the endpoint and arc correspondence in step 2.1. Choose maps on each actual rectangle to its vertical counterpart extending the already prescribed boundary map, using [F2]. The outer prism map and these rectangle maps now prescribe the complete boundary map on each cut ball. Extend over each ball by [F1] and paste. This gives a PL product parametrization of $B$ agreeing with every prescribed face-strip and horizontal disk map and making its part of $A$ vertical. Its fibers stay inside this tetrahedron, and on its side strips stay in their original faces. [F1, F2, step 1.1, step 2.1, construct]

4.1 Perform this construction in every tetrahedral prism. On a common face strip their maps agree with the single map already constructed there, including the horizontal boundary intervals. Their lower disks glue to $D_0$, so the resulting maps paste to a parametrization of all of $P$ by $D_0\times[0,1]$. Each actual exchange rectangle is vertical and their gluings agree through the faces. Consequently $A$ is exactly $\beta\times[0,1]$, where $\beta$ is its frontier circle or proper arc on $D_0$. No original simplex is crossed by a fiber: this holds in the prism interiors and was already imposed on their face and edge strata. [F3, step 1.1, step 2.1, step 3.1, construct]

5.1 If $\beta$ is a circle, it bounds a disk cap $C$ in the disk $D_0$ by [F2]. The supplied subproduct $C\times[0,1]$ is a product between that cap and the cap on $D_1$, with vertical boundary $A$. If $\beta$ is a proper arc, cutting $D_0$ along it gives two disk caps $C,C'$ by [F2]. Their products give both corresponding cap pairs. The part of each vertical boundary other than $\beta\times[0,1]=A$ is over a subarc of $\partial D_0$, hence lies in the prescribed vertical boundary of $P$ in $\partial M$. Following the fibers supplies compatible normal deformations of all cap pieces with these precise frontier tracks. This is the asserted normal parallelism along $A$, proved from the actual marked prism data. [F2, F3, step 4.1, construct] ∎
