---
id: lem-separating-spherical-normal-pairs-reduce-to-zero-edge-annular-patches
kind: lemma
title: "A separating spherical normal pair reduces to zero-edge annular patches"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
  - lem-essential-pl-disks-admit-normal-replacements
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105 (1961),245–375"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf"
      locator: "Chapter5§3, complete proof of Satz9, printed pp.366–369, the boundary-carrying region cut off by a separating spherical summand. The original-triangulation edge-weight reduction used here is proved locally."
---

## Statement

Let $T$ triangulate a compact PL three-manifold $M$. Let $S\subset\operatorname{int}M$ be a connected normal two-sphere that separates its ambient connected component, with a supplied PL product neighborhood. Let $Y$ be a connected proper normal surface with $\chi(Y)=-1$ and one essential boundary circle $C$. Suppose $S,Y$ are transverse, their intersection is a nonempty finite family of circles missing $T^{(1)}$, and every intersection circle is nonseparating in $Y$.

Cutting $Y$ along all intersection circles gives one pair of pants $K$ containing $C$ and a nonempty family of annuli $A_1,\ldots,A_r$. The other two boundary circles $a,b$ of $K$ are distinct intersection circles. On $S$ choose the two disjoint disks $E_a,E_b$ bounded by $a,b$ whose interiors do not contain the other boundary circle. The remaining region $B=\overline{S\setminus(E_a\cup E_b)}$ is an annulus. There is a proper PL disk $D_0$ with boundary $C$ and

$$w(D_0)=w(Y)+w(S)-w(B)-\sum_{j=1}^r w(A_j),$$

where $w$ counts intersections with the original triangulation edges. It has an essential normal disk replacement of no larger weight.

In particular, if the regular sum of $S,Y$, with switches missing $T^{(1)}$, is an essential normal disk $D$ of least edge weight, then every $A_j$ and $B$ has zero edge weight. This conclusion is a reduction to zero-edge annular patches; it does not assert their geometric cancellation. No ambient irreducibility, orientability or choice hypothesis is imposed.

## Statement references

[[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]] — the finite graph-neighborhood construction used below.

[[lem-essential-pl-disks-admit-normal-replacements]] — essential normal replacement with no increase of edge weight.

## Facts & Assumptions

**Given:** The normal pair, separating sphere, product neighborhood and boundary hypotheses in the Statement.

[F1] The finite graph-neighborhood construction of [[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]], steps 1.1–3.1, gives any connected finite triangulated surface with boundary as a disk with $h=1-\chi$ rectangular bands attached on disjoint boundary intervals: collapse the graph's spanning-tree neighborhood to one disk, retaining the bands for its $h$ remaining edges. Attaching a band changes the boundary count by at most one. If the final boundary count is $1+h$, every attachment must increase it by one. Such an attachment cuts one boundary circle into two and removes one disk from the planar model. Consequently a surface with $\chi=-1$ and three boundary circles is a pair of pants. The finite band argument includes the nonorientable possibilities: a twisted band cannot increase the boundary count, so none occurs in this equality case.

[F2] Polygonal separation on a sphere, and finite triangulations of polygonal disk regions, are available. In particular, cutting a pair of pants along a simple closed curve either cuts off a disk or an annulus containing one of its boundary circles. To verify this, cap the three boundary circles by disks on a sphere and apply separation to the curve. Of the two sides, one contains at most one of those three capped disks; with zero caps it is a disk, with one cap it becomes an annulus after removing that cap. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

[F3] The local replacement moves of [[lem-essential-pl-disks-admit-normal-replacements]] preserve or decrease each original edge count, as their cap moves fix edge intersections, edge bigons remove two intersections, and retained components discard intersections. Thus its normal essential disk has weight no larger than the input disk.

## Proof

1.1 Each intersection circle $c$ has an annular neighborhood in $Y$. The signed normal coordinate of the supplied product neighborhood of $S$ restricts to a transverse signed coordinate on $Y$ along $c$, trivializing its normal line there. Cut $Y$ along one of these circles $c_0$. It remains connected by the nonseparation hypothesis, retains Euler characteristic $-1$, and has three boundary circles, namely $C,c_0^+,c_0^-$. By [F1] it is a pair of pants $P$. These cuts and identifications are finite PL constructions. [given, F1, construct]

2.1 Any other intersection circle lies in the interior of $P$. By [F2], it bounds a disk in $P$ or is parallel to one of $C,c_0^+,c_0^-$. A circle bounding a disk would separate $Y$. One parallel to $C$ would also separate $Y$, since the annulus between it and $C$ persists when $c_0^+,c_0^-$ are reglued. Both contradict the hypotheses. Every remaining circle is therefore parallel to $c_0^+$ or $c_0^-$. For a finite disjoint family of such circles, the annuli between them are nested at the corresponding ends of $P$; cutting them off leaves a single pair of pants containing $C$. Regluing the two original boundary copies of $c_0$ joins the annular chains into the successive annuli between the intersection circles in $Y$. Thus cutting $Y$ along the entire family gives exactly one pair of pants $K$ containing $C$ and otherwise annuli. [given, F2, step 1.1, construct]

3.1 There are at least two intersection circles. Indeed, if there were only $c_0$, the connected surface $Y\setminus c_0$ would meet both complementary sides of $S$, by transversality near $c_0$, while missing $S$. A connected set missing $S$ must lie in one component of its complement, a contradiction. Since all the circles are parallel as described in step 2.1, at least two imply at least one intervening annulus. They also make the two internal boundary circles $a,b$ of $K$ distinct members of the intersection family. The interior of $K$ is connected and misses $S$, so lies in one complementary side of $S$. [given, step 1.1, step 2.1, contradiction, construct]

4.1 On the sphere, the disjoint circles $a,b$ bound disjoint disk regions $E_a,E_b$, choosing in each case the disk not containing the other circle. Their complement is an annulus $B$, by [F2]. Attach two small parallel copies of these disks to the corresponding cut collars of $K$, pushing their interiors into the side of $S$ opposite to the interior of $K$. The supplied product neighborhood permits both displacements consistently. The cap disks are disjoint from one another because $E_a,E_b$ are disjoint, and miss $K$ because its interior lies in the other side. The joining collars are embedded transverse product charts along $a,b$. The resulting surface $D_0$ is a proper embedded PL disk with boundary exactly $C$: it is a pair of pants with two boundary circles capped. Other parts of $Y$ may meet those caps, but they have been discarded and are not part of $D_0$. [given, F2, step 2.1, step 3.1, construct]

5.1 Every cut circle misses $T^{(1)}$, so the edge intersections partition without overlap among the indicated cut pieces. Hence $$w(Y)=w(K)+\sum_jw(A_j),\qquad w(S)=w(E_a)+w(E_b)+w(B).$$ Small parallel cap displacements can preserve exactly their edge intersections: use the finitely many transverse edge charts, and outside these charts choose the displacement small enough to miss all edges by compactness. The joining collars miss the edges. Therefore $$w(D_0)=w(K)+w(E_a)+w(E_b)=w(Y)+w(S)-w(B)-\sum_jw(A_j).$$ Since $C$ is essential, apply [F3] to obtain the claimed normal essential disk. [given, F3, step 4.1, construct, algebra]

6.1 In the regular-sum application, switches miss the original edges, so $w(D)=w(S)+w(Y)$. If any of the nonnegative terms $w(B),w(A_j)$ were positive, step 5.1 and [F3] would produce an essential normal disk of weight strictly less than $w(D)$, contradicting its assumed least weight. All those terms must therefore be zero. This argument uses separation only for the supplied sphere $S$, not a hypothesis that every sphere in $M$ separates. The zero-weight annular cancellation itself is not asserted. [given, F3, step 5.1, algebra, contradiction] ∎
