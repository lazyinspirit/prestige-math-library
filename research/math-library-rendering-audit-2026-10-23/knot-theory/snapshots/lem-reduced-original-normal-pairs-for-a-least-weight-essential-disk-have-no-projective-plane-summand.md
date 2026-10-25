---
id: lem-reduced-original-normal-pairs-for-a-least-weight-essential-disk-have-no-projective-plane-summand
kind: lemma
title: A reduced original normal pair for a least-weight essential disk has no projective-plane summand
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-regular-normal-sum-diagrams-have-reduced-connected-pairs
  - lem-connected-normal-surface-chi-one-is-disk
  - lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes
  - ex-projective-plane-polygonal-schema
  - lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 5
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

Let $F$ be a least-edge-weight essential normal disk in a compact PL three-manifold with a finite simplicial triangulation. Suppose a nontrivial decomposition of its normal vector has been put into the original-triangulation regular diagram of the original-triangulation regular-sum construction, and partial regular switches have produced a reduced connected pair $G,H$ as in the reduced-connected-pair lemma. Retain the face braids and switch neighborhoods.

Neither $G$ nor $H$ is a projective plane. The ambient manifold is allowed to contain projective planes; no orientability, irreducibility or choice hypothesis is used.

## Statement references

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]]

[[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]] — the finite boundary-surface forms.

[[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]] — strict improvement after an irregular resolution containing an essential disk.

## Facts & Assumptions

**Given:** The least-weight essential disk, retained original diagram and its reduced connected pair.

[F1] Every remaining regular pairing continues consistently around its double curve. No remaining circle separates both summands. Every nonempty partial regular resolution has connected normalization, and the weights of the two summands add to $w(F)$. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]], [[lem-regular-normal-sum-diagrams-have-reduced-connected-pairs]])

[F2] A connected finite triangulated surface with boundary and Euler characteristic $1$ is a disk. If instead its Euler characteristic is zero, it is an annulus with two boundary circles or a Mobius band with one. The finite proofs add no choice assumption. ([[lem-connected-normal-surface-chi-one-is-disk]], [[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]])

[F3] A projective plane has Euler characteristic $1$, as is seen from its finite one-vertex, one-edge, one-face model. ([[ex-projective-plane-polygonal-schema]])

[F4] A small intrinsic neighborhood of a simple circle in a finite PL surface is an annulus or a Mobius band, obtained by following its finite rectangular arc charts around the circle. The two possibilities are distinguished by whether its transverse interval returns without reversal or with reversal. Removing either neighborhood preserves Euler characteristic, since both and their attaching boundary circles have Euler characteristic zero.

## Proof

1.1 Suppose $G=Q$ is a projective plane and put $Y=H$. Their remaining intersection is nonempty, since the full resolution is connected and both summands are nonempty. It consists of circles, since $Q$ is closed. The full resolution has boundary $\partial Y$, namely the one essential boundary circle $C$ of $F$. Cutting out the annular or Mobius neighborhoods [F4] and inserting the switching strips preserves total Euler characteristic: the removed pieces, their boundary circles and the inserted interval-bundle switching pieces have Euler characteristic zero. For the latter, the finite rectangular charts glue around a circle, so their face and side counts cancel just as for an annulus or Mobius band. Hence $1=\chi(F)=\chi(Q)+\chi(Y)$ and $\chi(Y)=0$ by [F3]. By [F2], the connected surface $Y$ with its one boundary circle is a Mobius band. [given, F1, F2, F3, F4, construct, algebra]

2.1 An intersection circle is two-sided in $Q$ exactly when it is two-sided in $Y$. In a transverse cross-section there are two rays of each surface. A regular uncrossing pairs each $Q$ ray with one $Y$ ray. Following the rays once around the circle preserves this pairing by [F1]. Reversing the two rays of only one surface interchanges the two possible uncrossings, whereas reversing both, or neither, preserves the pairing. Thus the two surfaces' transverse intervals have the same reversal sign. This is the claimed equivalence by [F4]. [F1, F4, step 1.1, construct]

3.1 Every two-sided simple circle separates $Q$. Otherwise cutting out its annular neighborhood would leave a connected boundary surface with Euler characteristic $1$ and two boundary circles. It would be a disk by [F2], a contradiction. Likewise every two-sided circle separates the Mobius band $Y$: a nonseparating annular cut would leave a connected Euler-zero surface with the three boundary circles consisting of $C$ and the two new ones, contrary to [F2]. Hence a two-sided intersection circle would separate both summands by step 2.1, contradicting reducedness [F1]. All remaining circles are one-sided in both surfaces. [F1, F2, F3, F4, step 1.1, step 2.1, contradiction]

4.1 A one-sided circle in $Q$ has a Mobius neighborhood with one boundary circle. Its complement is connected: only one component can meet that boundary circle, while any other component would be an open and closed component of the original connected surface. The complement has Euler characteristic $1$ and one boundary circle, so is a disk by [F2]. The neighborhood can be chosen disjoint from all other intersection circles. Any further circle would lie in that complementary disk and would be two-sided there, contradicting step 3.1. Thus there is exactly one intersection circle $c$. The same one-boundary-neighborhood argument makes the complement of its Mobius neighborhood in $Y$ connected. It has Euler characteristic zero and two boundary circles, $C$ and the new circle, so is an annulus by [F2]. [F1, F2, F3, F4, step 3.1, construct]

5.1 Either switch along $c$ replaces the two crossing Mobius strips by one annulus connecting their boundary circles. Here is the finite local calculation. Follow the transverse cross-section once around $c$. Both labeled surface axes reverse by step 3.1. For either smoothing, its two interval pieces in opposite quadrants are therefore exchanged after one turn. After two turns each interval returns, with its endpoints still labeled $Q$ and $Y$ respectively. The two rectangles consequently glue in series into an interval product over the double circle, namely an annulus, with one boundary from $Q$ and one from $Y$. No interval reversal is possible after the two turns because its two endpoint labels are fixed. Attaching the disk remainder from $Q$ and the annulus remainder from $Y$ in step 4.1 gives a connected disk whose boundary is $C$. Since this is the only double curve, either fully resolved image is embedded. [F1, F4, step 2.1, step 3.1, step 4.1, construct]

6.1 Choose the irregular switch. Step 5.1 gives an embedded proper disk with essential boundary as a parametrizing component. The strict improvement supplier [[lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement]] applies to the retained original braid, after its preliminary regular switches. It gives an essential normal disk of weight strictly below $w(Q)+w(Y)=w(F)$, contradicting minimality. This excludes a projective-plane $G$, and exchanging names excludes a projective-plane $H$. The argument excluded a summand using the actual switching data; it did not exclude projective planes from the ambient manifold. [given, F1, step 5.1, contradiction] ∎
