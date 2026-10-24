---
id: lem-minimum-boundary-exchange-cycles-force-an-impossible-zero-edge-normal-component
kind: lemma
title: Minimum boundary exchange cycles force an impossible zero-edge normal component
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction
  - lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts
  - lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors
  - lem-boundary-exchange-middle-disks-have-positive-original-edge-weight
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 9
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
    - title: "Wolfgang Haken, Theorie der Normalflächen: Ein Isotopiekriterium für den Kreisknoten, Acta Mathematica105 (1961),245–375"
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Complete Chapter5, printed pp.360–374, fundamental normal-surface construction in adapted coordinates; normal-surface/exchange context for the local formulation here. The source has additional separation/adapted-coordinate hypotheses and is not attributed the present original-coordinate refinement.
  attribution_boundary: Existing authoritative subject baseline and local formulation/proof refinement, not a verbatim external theorem; the actual accepted local argument and exact hypotheses remain unchanged.
  reading_limits: URL and locator drawn from existing canonical source metadata/Statement-reference bibliography only. No source was fetched or newly read for this metadata repair; retained author reading limits remain unchanged and are not transferred into a new whole-source reading claim.
---

## Statement

The reduced boundary pair in the pure boundary-obstruction lemma cannot occur for a least-weight, lexicographically least essential normal disk. The contradiction is in the original triangulation: a finite cycle of minimum leaf patches would give a nonempty zero-edge normalization component of a partial regular resolution, whose tetrahedral pieces are all genuine normal disks.

## Statement references

[[lem-nonfundamental-least-weight-essential-disks-have-a-pure-boundary-obstruction]]

[[lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors]] — the unique minimum leaf in each opposite cap.

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]] — every partial regular resolution retains the original normal tetrahedral pieces.

## Facts & Assumptions

**Given:** A hypothetical reduced pair $P,H$ as stated, its retained face braids and all original switching neighborhoods, and the full-resolution disk $F$.

[F1] A minimum original leaf $E\subset P$ has positive weight $m$. Its opposite cap $B=E'$ has the same edge counts and weight, is disjoint from $E$, and contains exactly one minimum original leaf $L\subset P$. Either it equals $L$ or it differs from $L$ by a zero-edge rectangular corridor. ([[lem-boundary-exchange-leaf-caps-for-a-least-weight-disk-have-rigid-edge-counts]], [[lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors]])

[F2] The middle disk of every such exchange has positive edge weight, and hence $w(F)>2m$. ([[lem-boundary-exchange-middle-disks-have-positive-original-edge-weight]])

[F3] Each exchange arc has a small rectangular exchange surface between its two full-resolution traces. Its interior misses $F$, its end intervals lie in the original boundary faces, and the rectangles for different arcs are disjoint. Cutting the two traces restores the four original rays. The original unswitched continuation pairs opposite rays, while the two uncrossings pair adjacent rays. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F4] Resolving any subset of original double arcs regularly leaves, in every tetrahedron, embedded normal triangle or quadrilateral disks, possibly forming an immersed global normalization along the remaining unswitched arcs. Every nonempty normalization component therefore meets the original one-skeleton: any one of its tetrahedral disks has normal vertices on that one-skeleton. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F5] The retained trace arcs on $F$ are disjoint proper arcs. Two disk caps cut off by two such arcs are either disjoint, nested, or have union $F$. This follows by cutting the disk along the two arcs into three disks in a path and considering which side of each arc is the chosen cap. ([[thm-polygonal-jordan-curve]], [[thm-simple-polygon-admits-a-triangulation]])

## Proof

1.1 There are finitely many original $P$ leaves of minimum positive weight $m$. Map each to the unique minimum leaf contained in its opposite cap, as in [F1]. It cannot map to itself, because the two end caps are disjoint. Iterating this finite function gives a cycle of distinct leaves $E_1,\ldots,E_r$ with $r\ge2$, with indices read modulo $r$. Write $B_i$ for the opposite cap of $E_i$ and $\alpha_i$ for its original exchange arc. Then $B_i$ contains precisely the original minimum leaf $E_{i+1}$ and has weight $m$. The arcs $\alpha_i$ are distinct: one original double arc cuts off only one leaf of $P$ when there are at least two double arcs. Otherwise it would cut $P$ into its two leaves with no room for another cut arc. [given, F1, construct]

2.1 The caps $B_i$ are pairwise disjoint. By [F5], non-disjoint caps must be nested or cover $F$ in a pair. Nesting $B_i\subset B_j$ puts the minimum leaf $E_{i+1}$ inside $B_j$, so uniqueness in [F1] forces $E_{i+1}=E_{j+1}$, contrary to distinct cycle indices. A pair covering $F$ gives $w(F)\le w(B_i)+w(B_j)=2m$, contrary to [F2]. Thus neither overlap is possible. [F1, F2, F5, step 1.1, contradiction]

3.1 Put $R_i=\overline{B_i\setminus E_{i+1}}$, with closure in $F$. This is the zero-edge corridor of [F1]. It is nonempty. Its outer trace is the opposite-cap trace of $\alpha_i$, while its inner trace is the original leaf trace of the distinct arc $\alpha_{i+1}$. These are disjoint distinct traces by [F3] and [F5], so the two caps cannot be equal. The corridors $R_i$ have pairwise disjoint interiors by step 2.1. Their union carries no original edge point. [F1, F3, F5, step 1.1, step 2.1, construct]

4.1 Remove the caps $B_i$ from $F$ and retain the closure $F_0$ of their complement. It is a disk with the outer trace of each $B_i$ as a boundary interval: successively removing disjoint end caps from a disk has this effect. All original $E_i$ lie in the removed caps, since $E_i\subset B_{i-1}$. Across the rectangular exchange surface for $\alpha_i$, join $E_i$ to $F_0$ at the outer trace of $B_i$. These attachments are disjoint by [F3]. Attaching each disk along its one interval, with its rectangular collar, gives an embedded disk made of $F_0$, the $E_i$ and the attaching rectangles. Its discarded complementary pieces are precisely the corridors $R_i$, with the other local continuations at these exchange arcs. The next step identifies both continuations in the original diagram. [F1, F3, F5, step 1.1, step 2.1, step 3.1, construct]

5.1 Fix $i$. Label the original rays in cyclic order $0,1,2,3$ so that $0$ is $E_i$'s $P$ ray and $1$ is $B_i$'s $H$ ray. These are adjacent, as proved by the leaf/opposite-cap supplier in [F1]. The other $P$ ray is $2$, and the other $H$ ray is $3$. The regular full resolution pairs $0$ with $3$ and $1$ with $2$: the other adjacent pairing would join the two end caps and is irregular. The trace between $0,3$ is the boundary of $E_i$, and that between $1,2$ is the boundary of $B_i$. Near the first trace, ray $3$ lies in $R_{i-1}$; near the second, ray $1$ lies in $R_i$ and ray $2$ lies in $F_0$. Thus the attachment of step 4.1 pairs retained rays $0,2$, while the discarded corridors pair rays $1,3$. These are exactly the two original unswitched continuations. There is no irregular switch in this construction. [F1, F3, step 1.1, step 3.1, step 4.1, construct]

6.1 At every arc outside the cycle retain the original regular resolution. Neither the retained/discarded division nor its frontier crosses either trace of such an arc, because its frontier consists solely of the cycle traces used in step 5.1. Thus each local regular output has both of its incident parts retained or both discarded. At every cycle arc, use the two unswitched continuations of step 5.1. Hence this is precisely the original partial regular resolution that leaves the cycle arcs unswitched and resolves all others regularly. Its normalization splits into a retained union containing the disk in step 4.1 and a discarded union consisting of the nonempty $R_i$ with their indicated continuations. The local pairing check ensures neither union has a frontier in that normalization; intersections of their images along an unswitched arc do not identify their parametrizing sheets. [F3, F4, step 3.1, step 4.1, step 5.1, construct]

7.1 Every discarded piece and its short continuing strip misses $T^{(1)}$, by step 3.1 and [F3]. Their union is nonempty and is a union of normalization components by step 6.1. Choose one such component. It is a nonempty zero-edge component of an actual partial regular resolution, contradicting [F4]. This contradiction also covers the case where the cycle contains every arc: that partial resolution is just the original unswitched pair, whose tetrahedral disks still have normal vertices. Therefore the hypothetical reduced boundary pair does not occur. [F3, F4, step 3.1, step 6.1, contradiction] ∎
