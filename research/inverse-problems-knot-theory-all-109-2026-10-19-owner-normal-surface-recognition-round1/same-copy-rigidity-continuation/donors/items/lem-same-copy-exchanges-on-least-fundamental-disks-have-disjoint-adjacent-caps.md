---
id: lem-same-copy-exchanges-on-least-fundamental-disks-have-disjoint-adjacent-caps
kind: lemma
title: "Same-copy exchanges on least fundamental disks have disjoint adjacent caps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Chan-Ho Suh, The unknotting problem and normal surface Q-theory"
      url: "https://arxiv.org/pdf/1009.1500"
      locator: "Theorem3.12 preliminary annular and proper-arc cases. The proof below instead uses fundamentalness and the original retained-diagram irregular improvement, so does not assume irreducibility or annular patch positivity."
---

## Statement

Let an actual original-triangulation regular normal diagram have full embedded resolution $F$. Suppose a component $D$ of $F$ is an essential normal disk, is fundamental, and has least weight among all essential normal disks in that triangulation.

Choose one original double circle or proper double arc whose two trace curves in the full resolution both lie on $D$. Assume its exchange surface is respectively an annulus or a disk with its usual rectangular switching neighborhood. Then the traces bound disjoint adjacent disk caps on $D$. For a proper exchange disk these are the two outer caps cut off by the two trace arcs. For an exchange annulus the unique two caps bounded by the trace circles are disjoint and adjacent.

Here adjacency means that the two cap germs occupy the same side of the exchange surface in its switching neighborhood. The result concerns these actual original-diagram exchanges, not an arbitrary separately supplied spanning annulus. No irreducibility, orientability or sphere-separation assumption is required.

## Statement references

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]] — all partial regular resolutions have the actual original normal tetrahedral disk pieces.

[[lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement]] — strict improvement relative to the weight of one closed immersed parametrizing component.

## Facts & Assumptions

**Given:** The actual original face-braid diagram, the least-weight fundamental essential disk component and the selected annular or disk exchange with both traces on that component.

[F1] Switch every other original curve regularly and leave the selected curve unswitched. This partial diagram has embedded normal tetrahedral parametrizing disks and only that one remaining double curve. Full regular resolution recovers $F$. All changes miss the original edges. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]])

[F2] If a closed union of parametrizing components of a retained diagram has edge weight $W$, an irregular resolution producing an embedded proper essential disk gives an essential normal disk of weight less than $W$, even when that retained union is one immersed component. ([[lem-closed-normal-subdiagrams-inherit-strict-irregular-disk-improvement]])

[F3] A fundamental admissible vector has no decomposition into two nonzero admissible integer vectors. Every nonempty embedded normal component has a nonzero such vector. ([[def-normal-surface-coordinate-box]])

## Proof

1.1 Isolate the selected curve as in [F1]. Outside its switching neighborhood all components of $F$ other than $D$ remain unchanged. Inside it both resolved trace germs belonged to $D$, so only the part assembled from $D$ can be affected. If that part's parametrizing normalization has more than one component, it has exactly two, and the remaining double curve joins them. Indeed changing a single crossing pairing changes the number of components by at most one; moreover the full regular resolution joins the affected components into the one connected disk $D$. A component not incident to that crossing would survive as a separate component after full resolution. Each of the two components is embedded: the only remaining double points have one branch on each of them, and each tetrahedral parametrizing disk is embedded by [F1]. They are therefore two nonempty embedded normal surfaces, with vectors summing to $v(D)$ because all the selected tetrahedral pieces and edge points came from $D$. This contradicts [F3]. Consequently the affected normalization must be connected. It has edge weight exactly $w(D)$ and is closed under its sole remaining double curve; its image is disjoint from the unchanged components of $F$. [given, F1, F3, construct, contradiction]

1.2 We specify the local pairing used in the topology below. In a transverse rectangle to the exchange core, regard the exchange interval as horizontal, with its two frontier points at the left and right. Label the upper rays at these points $0,1$, and the lower rays $2,3$. The resolved surface joins the two rays at each frontier point. A cap at the left and a cap at the right are adjacent precisely when their selected rays are both upper or both lower. The unswitched crossing pairs the opposite diagonal rays $0$ with $3$, and $1$ with $2$; the opposite, irregular resolution pairs $0$ with $1$, and $2$ with $3$. This description propagates along the annulus or disk because its given rectangular switching neighborhood is a product. Thus the following component counts can be checked by tracing the cut disk pieces through these two pairs, without using a picture or an ambient sphere theorem. [given, F1, construct]

2.1 For a proper exchange disk the two disjoint proper trace arcs cut $D$ into three disks in a path: two outer caps and one middle disk. If the outer caps are nonadjacent, their two rays are a diagonal pair in step 1.2. Undoing the exchange consequently joins those two caps to each other, and joins the two remaining sides of the middle disk to each other. These are separate nonempty parametrizing components. Their possible boundary twisting does not affect their being separate: one contains the two outer caps, the other the middle disk. This contradicts step 1.1. The outer caps must be adjacent. [step 1.1, step 1.2, construct, contradiction]

2.2 For an exchange annulus first suppose the two trace circles bound disjoint caps. Cutting them off leaves a disk with two holes. If the caps were nonadjacent, the diagonal pairing of step 1.2 would join the two caps to each other, and separately join the two inner boundary circles of the complementary disk with two holes. Again this gives two nonempty parametrizing components, contradicting step 1.1. Thus disjoint caps are adjacent. [step 1.1, step 1.2, construct, contradiction]

2.3 It remains to exclude nested trace circles. Write the three cut pieces of $D$ as the inner disk $E$, the intervening annulus $R$, and the outer annulus $Q$ carrying $\partial D$. At the inner trace the two germs belong to $E,R$; at the outer trace they belong to $R,Q$. There are two cases for the diagonal pairing. If it pairs $E$ to $Q$, its other pair joins the two sides of $R$, giving two components; step 1.1 excludes this. Otherwise it pairs $E$ to one side of $R$ and the other side of $R$ to $Q$, so the affected normalization is one immersed component. In this second case the opposite, irregular pairing joins $E$ directly to $Q$ and the two sides of $R$ to each other. The first of these resolved components is a properly embedded disk: an annulus joins the disk $E$ to the inner boundary of $Q$, and its remaining boundary is exactly $\partial D$. The other is a closed component formed from $R$. These are embedded because the sole remaining double curve has now been resolved and the original construction creates no new intersections. [F1, step 1.1, step 1.2, construct, cases]

3.1 The connected immersed component in the second case has weight $w(D)$ by step 1.1 and is closed under its remaining self-double curve. Its irregular resolution in step 2.3 has an embedded proper disk with the same essential boundary as $D$. Apply [F2] to that component alone. It supplies an essential normal disk of weight strictly smaller than $w(D)$, contradicting the assumed least weight. This does not require the intervening annulus $R$ to have positive edge weight: the retained-subdiagram first-turnback argument also applies when the closed output has weight zero. Both nested cases are therefore excluded. Together with steps 2.1 and 2.2 this proves all asserted disjointness and adjacency clauses. [given, F2, step 1.1, step 2.1, step 2.2, step 2.3, construct, contradiction] ∎
