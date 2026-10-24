---
id: lem-equal-normal-vectors-have-ambient-cell-homeomorphisms-and-disk-copy-products
kind: lemma
title: Equal normal vectors have ambient cell homeomorphisms and disk-copy products
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - thm-finite-pl-schoenflies-in-dimension-three
  - lem-parametrized-pl-balls-absorb-standard-boundary-windows
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 8
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
    - title: Jeffrey L. Tollefson, Normal surface Q-theory, Pacific Journal of Mathematics 183 (1998), 359–374
      url: https://msp.org/pjm/1998/183-2/pjm-v183-n2-p07-p.pdf
      locator: §4, printed pp.366–369, exchange-patch comparison baseline only. Its irreducible/boundary-irreducible hypotheses are not transferred to this local disk-product/exchange formulation; the accepted local proof remains the argument.
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

Two embedded normal surfaces with the same normal vector in a finite simplicial triangulation are carried to one another by a finite PL homeomorphism of the ambient manifold preserving every simplex setwise.

Consequently, if $D_0,D_1$ are disjoint connected normal disks with the same vector, they cobound a parametrized PL product $D^2\times[0,1]$. Its two end disks are $D_0,D_1$, its vertical boundary is in $\partial M$, and it contains no original triangulation vertex. Its interval fibers remain in their original ambient simplex. The assertion concerns the supplied PL triangulation, not an arbitrary topological marking or a smooth extension problem.

## Statement references

[[thm-finite-pl-schoenflies-in-dimension-three]] — finite sphere parameters supply the two balls cut off by a proper disk in a parametrized ball.

[[lem-parametrized-pl-balls-absorb-standard-boundary-windows]] — marked disk complements and finite boundary-map extensions of parametrized balls.

## Facts & Assumptions

**Given:** The finite triangulation and the two equal-vector normal surfaces, or the two disks in the consequence.

[F1] Equal vectors determine the same ordered edge-point counts, the same face-arc pairings after matching those points, and the same tetrahedral boundary circles and disk types. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F2] Finite simple polygonal curves in a polygonal disk or standard polyhedral sphere separate it into the stated disk regions, and prescribed PL boundary maps extend over parametrized polygonal disks. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]], [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]])

[F3] A finite PL embedding of a parametrized sphere in standard $\mathbb R^3$ bounds a parametrized PL ball. Prescribed maps of parametrized ball boundaries extend over the balls by coning compatible boundary triangulations in their convex models. ([[thm-finite-pl-schoenflies-in-dimension-three]], [[lem-parametrized-pl-balls-absorb-standard-boundary-windows]])

## Proof

1.1 First note the proper-disk cutting fact. Transfer a parametrized three-ball $B$ to a convex model, and let $A$ be a properly embedded PL disk in it. Its boundary separates $\partial B$ into two parametrized disk caps $C_0,C_1$ by [F2]. Each $A\cup C_i$ is a parametrized PL sphere: glue two disk parameters along their specified boundary identification and cone compatible boundary subdivisions. By [F3] it bounds a parametrized ball $B_i$. The bounded side is contained in $B$, since the connected exterior of the convex ball $B$ is disjoint from that sphere and is on its unbounded side. Moreover $B_i\cap\partial B=C_i$: points of the other open cap are not on its sphere and have neighbors in the exterior of $B$, so lie on its exterior side. The two balls have disjoint interiors. Indeed the interior of $B_0$ is connected and misses $\partial B_1=A\cup C_1$; near the open cap $C_0$ it lies outside $B_1$, so it lies outside throughout. Finally they fill $B$: local half-ball charts along $C_0,C_1$ and the two opposite sides of $A$ show that their union is a neighborhood of its points relative to $B$; any omitted component would be open and closed in the connected ball. The local charts here are finite PL charts, obtained by coning the polygonal link arcs or circles and their complementary disks, as in [F2]. Thus cutting $B$ along $A$ gives these two supplied balls. Iterating proves that a disjoint finite proper-disk arrangement cuts $B$ into parametrized balls. [F2, F3, construct]

1.2 Match the two surfaces' points in each edge in their linear order [F1], and extend the match to an increasing PL self-homeomorphism of that edge fixing its endpoints. On each triangular face choose the arc correspondence of [F1]. The disjoint proper arcs cut the face into polygonal disks. Map corresponding arcs by PL interval maps matching their prescribed endpoints; these maps and the edge maps prescribe each complementary disk's boundary homeomorphism. Extend it by [F2] and paste. The result is a PL self-homeomorphism of every face, carrying the arc system to its counterpart and agreeing on shared edges. [F1, F2, construct]

2.1 Fix a tetrahedron. Its prescribed boundary homeomorphism in step 1.2 matches its normal-disk boundary circles. Choose a PL map of each disk to its counterpart extending that boundary map, by [F2]. Cut each of the two disk arrangements into parametrized balls by step 1.1. Their incidence trees correspond: on the boundary sphere the same matched circles have the same complementary regions, and cutting off one disk splits one region into two. The already prescribed boundary and disk maps therefore give a PL homeomorphism of each cut ball's entire boundary to that of its counterpart. Use their ball parameters and [F3] to extend across each cut ball. These extensions agree along the disk sheets and give a PL homeomorphism of the tetrahedron carrying its disk arrangement to the other and realizing its prescribed face map. [F1, F2, F3, step 1.1, step 1.2, construct]

3.1 Do this in every tetrahedron. Their face maps were already identical on identified faces, so the resulting maps and their inverses paste to a finite PL homeomorphism of $M$ preserving every simplex and carrying the first normal surface to the second. All constructions used only finite subdivisions and conings of supplied disks and balls. In particular step 2.1 did not presume that arbitrary PL disk replacements were ambient isotopies; their required ambient ball maps were actually constructed using [F3]. [given, step 1.2, step 2.1, construct]

4.1 For the consequence, take one normal disk $D$ with the common vector. It has a finite normal product collar. To construct it, first choose sufficiently small parallel face-arc families with their matching edge intervals. Extend these prescribed boundaries over the parallel standard disk prisms in each tetrahedron; the preceding relative disk, face and ball extension constructions make the finitely many prism parameters agree with the face parameters. Their transverse interval labels can be chosen consistently on $D$: choose one sign in one chart and propagate through a finite disk triangulation; the only possible inconsistency would reverse the sign around a loop, whereas every loop on the disk contracts through its triangles, on each of which the local product labels agree. This gives the product of that disk with the common labeled interval, including the boundary half-space charts, where its vertical boundary stays in $\partial M$. Its width can be chosen smaller than the positive separation from the finite vertex set. Its fibers stay in the ambient simplex of their central point. Denote its two end disks by $D^-,D^+$. Their union has vector $2v(D)$, as does $D_0\cup D_1$. By step 3.1 an ambient simplex-preserving PL homeomorphism carries one union to the other, matching its connected components up to permutation. Transport the supplied product by that map or its inverse. It is the asserted vertex-free finite PL product between $D_0,D_1$, with the required vertical boundary and fiber incidence. [given, F1, step 1.1, step 1.2, step 2.1, step 3.1, construct] ∎
