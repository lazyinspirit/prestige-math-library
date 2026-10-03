---
id: lem-a-positive-height-diagram-has-a-defect-region
kind: lemma
title: "A positive-height diagram has a defect region"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-reducing-arc-and-yamada-vogel-reducing-move,
       def-coherence-of-seifert-circles-and-the-height-of-a-diagram,
       lem-two-disjoint-circles-in-s-two-cobound-an-annulus, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Lemma 2.2, printed pp. 16-17"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Assume the Axiom of Choice. If $h(D)>0$ for an oriented diagram $D$, then the
Seifert picture $S$ of $D$ contains a defect region, that is, a component of
$S^2\setminus S$ supporting a reducing arc joining an incoherent pair of
Seifert circles.

## Facts & Assumptions

**Given:** AC, an oriented diagram $D$ with Seifert picture $S$ and Seifert circles $C_1,\dots,C_m$, and height $h(D)>0$ ([[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

[F1] A defect region is a component of $S^2\setminus S$ in which an incoherent pair of Seifert circles is exposed, and a reducing arc is an arc in such a region joining the pair and meeting the circles only at its endpoints ([[def-reducing-arc-and-yamada-vogel-reducing-move]]).

[F2] Coherence of two disjoint circles uses the annulus they cobound, whose existence and three-region structure is the content of [[lem-two-disjoint-circles-in-s-two-cobound-an-annulus]]; AC is consumed there and inherited here.

[F3] Each complementary region $R$ of $S$ is an open surface of genus zero with $k\ge1$ boundary circles, each boundary circle a union of subarcs of Seifert circles and of signed arcs; the **exposed circles** of $R$ are the Seifert circles occurring in its boundary ([[def-reducing-arc-and-yamada-vogel-reducing-move]], [[def-coherence-of-seifert-circles-and-the-height-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 **Classification of regions by exposed circles.** Let $R$ be a region and let $e$ be its number of exposed circles. If $e=1$, then $R$ is a disk whose single exposed circle bounds it and there is no pair, so $R$ is not a defect region. If $e=2$, the two exposed circles $C_p,C_q$ are disjoint and both occur in the boundary of the genus-zero region $R$; the three-region structure of [F2] shows that $R$ is either a disk, in which case the two circles are joined in its boundary by at least one signed arc, whence they are coherent, or an annulus cobounded by $C_p,C_q$, in which case $R$ is a defect region exactly when the two circles are incoherent and is not one when they are coherent. If $e\ge3$, then among the exposed circles there is an incoherent pair, so $R$ is a defect region. [F1, F2, F3, algebra]

2.1 **Assuming no defect region.** Suppose no region of $S$ is a defect region. By step 1.1 each region is of one of the non-defect types: one exposed circle, two coherent circles joined by a signed arc, or two nested coherent circles. If every region had at most one exposed circle, then no signed arc would join two distinct circles, so every crossing of $D$ would be a self-crossing of a single Seifert circle and all pairs of distinct circles would be trivially coherent, giving $h(D)=0$; since $h(D)>0$, at least one region has two exposed circles, and those are coherent, so it is a region between two nested coherent circles joined by at least one signed arc. [F3, step 1.1, given]

3.1 **Building from the nested pair.** Start from such a region between two nested coherent circles $C_p,C_q$ joined by a signed arc, and try to construct a picture with no defect region. Any additional Seifert circle lying inside the annulus cobounded by $C_p$ and $C_q$ must be disjoint from both and, by the region classification, coherent with each of them and joined to them only through non-defect regions; iterating this argument, every circle lies in one of the finitely many annuli determined by the nested chain and is coherent with every circle it can meet in a region, so all pairs of Seifert circles are coherent and $h(D)=0$, a contradiction. Hence at least one region is a defect region. [F2, F3, step 1.1, step 2.1, algebra]

4.1 **Conclusion.** Steps 1.1-3.1 show that $h(D)>0$ forces a defect region, and a defect region supports a reducing arc by [F1]. AC is inherited exactly from the annulus lemma [F2], used to define coherence and the region structure. ∎ [F1, F2, step 3.1]
