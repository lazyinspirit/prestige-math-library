---
id: lem-between-copy-annular-exchanges-on-least-disks-have-adjacent-caps
kind: lemma
title: Between-copy annular exchanges on least disks have adjacent caps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts
  - lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical
  - lem-closed-pl-surfaces-with-even-original-edge-counts-separate
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 11
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

Use the least-weight, lexicographically least essential disk $D$, distinct full-resolution copies $D_0,D_1$, actual annular exchange $A$, and disk caps $E_0,E_1$ of the between-copy annular cap-rigidity lemma. Supply a cellwise normal product $P$ between $D_0,D_1$, with vertical boundary in $\partial M$.

Then $E_0,E_1$ are adjacent along $A$: their germs occupy the same side of its rectangular switching neighborhood. This holds without irreducibility or orientability. It does not assert normal parallelism of these caps when $A$ lies outside $P$.

## Statement references

[[lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts]]

## Facts & Assumptions

**Given:** The actual original diagram, the least disk, its two copies, the between-copy exchange and the cellwise product in the Statement.

[F1] The caps have equal counts on every original edge. [[lem-between-copy-annular-exchange-caps-have-rigid-original-edge-counts]]

[F2] If the actual exchange is contained in $P$, it is vertical for a cellwise parametrization and its two disk caps cobound its cap subproduct. [[lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical]]

[F3] A connected closed locally flat PL surface with even intersection number on each original edge separates its connected ambient component. [[lem-closed-pl-surfaces-with-even-original-edge-counts-separate]]

## Proof

1.1 The union $S=E_0\cup A\cup E_1$ is an embedded PL two-sphere in the interior of the ambient component containing $P$. Its abstract surface is a capped annulus, and its pieces have disjoint interiors. Keep this union as a PL surface without moving its points. It is locally flat: off the attaching circles it inherits the normal disk and exchange-rectangle product charts; along them a transverse switching rectangle contains two incident rays, which straighten by a finite sector map to a line. These are charts for the unchanged subset, so no rounding moves it into the interior of $P$. Its original-edge counts are $N(S)=N(E_0)+N(E_1)=2N(E_0)$ by [F1]. All are even, so [F3] makes $S$ separating. [given, F1, F3, construct]

2.1 If the interior of $A$ meets the interior of $P$, it is wholly inside it. Indeed it is connected and misses the horizontal disks $D_0,D_1$ and the vertical boundary in $\partial M$, hence cannot cross $\partial P$. In that case $A\subset P$, and [F2] gives a cap product with vertical annulus $A$. Its caps occupy the same side of that annulus, proving adjacency. It remains to consider the case that the interior of $A$ lies outside $P$. Then $S$ misses $\operatorname{int}P$, since its other two pieces lie on the horizontal ends. [given, F2, step 1.1, construct]

3.1 In the remaining case suppose the caps were nonadjacent. Put $K_i=\overline{D_i\setminus E_i}$. Along each frontier circle the cap germ and the remainder germ are opposite rays of the resolved sheet. Hence nonadjacency of the two cap germs means that the two remainder germs also occupy opposite sides of $A$. Choose points $q_i$ in these remainder germs, sufficiently near the frontier, and use the two side collars of the interior of $A$ to compare their sides of $S$. They approach opposite local sides of $S$ at one common interior point of $A$. Each $q_i$ can also be pushed slightly into $\operatorname{int}P$ without crossing $S$, because it belongs to the open remainder, not to its cap or frontier. The interior of the disk product is connected and disjoint from $S$ by step 2.1, so these pushed points can be joined there. Together with the short pushes and side-collar paths, this joins the two local sides of $S$ without crossing it. Closing that path by one short transverse interval produces a loop crossing $S$ once, contradicting the separating conclusion in step 1.1 (or its parity proof [F3]). Thus nonadjacency is impossible. This argument fills no sphere by a ball and proves only the stated adjacency. [given, F3, step 1.1, step 2.1, construct, contradiction] ∎
