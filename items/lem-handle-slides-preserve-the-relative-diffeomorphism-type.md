---
id: lem-handle-slides-preserve-the-relative-diffeomorphism-type
kind: lemma
title: "Handle slides preserve the relative diffeomorphism type"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: [def-handle-slide-of-one-k-handle-over-another, lem-embedded-bands-joining-two-framed-spheres-exist, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, lem-handles-of-equal-index-can-be-attached-on-one-level, def-attaching-a-smooth-handle-with-corner-rounding, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.5 (Handle Addition Theorem) and its proof, §5.4, printed pp. 147-148, with Figure 5.9"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Isotopy Lemma 1.8 and Lemma 1.10 (reordering handles), Ch. 1 §1.1, printed pp. 5-6"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $h_1,h_2$ be $k$-handles attached to $M\subseteq\partial_+W$ as in the slide definition, with $1\le k\le n-2$, and let $h_1'$ be a slide of $h_1$ over $h_2$ (the slid handle attached to $M$ by the band move). Then $W\cup_{f_1}h_1\cup_{f_2}h_2$ and $W\cup_{f_1'}h_1'\cup_{f_2}h_2$ are diffeomorphic relative to $\partial_0W$; more precisely there is a diffeomorphism supported in a neighbourhood of the two handles and the band region carrying the first presentation to the second. Consequently a handle slide does not change the diffeomorphism type of the presented manifold and may be performed on any of two equal-index handles.

## Facts & Assumptions

**Given:** $k$-handles $h_1,h_2$ attached to $M\subseteq\partial_+W$ by embeddings $f_1,f_2$ with disjoint images, $1\le k\le n-2$, and a slide $h_1'$ of $h_1$ over $h_2$ with attaching embedding $f_1'$, attached to $M$ by the band move.

[F1] [[def-handle-slide-of-one-k-handle-over-another]] and [[lem-embedded-bands-joining-two-framed-spheres-exist]]: a slide is determined by a band datum; the slid attaching sphere is obtained from the old one and a framed parallel copy of the other attaching sphere along the band, and the attaching embedding $f_1'$ extends to the attaching region with the framing built from the band framing.

[F2] [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; if two attaching embeddings are joined by a smooth isotopy through embeddings, stationary near the time endpoints, then the two attachments are diffeomorphic by a diffeomorphism supported in a collar of the swept attaching regions.

[F3] [[lem-handles-of-equal-index-can-be-attached-on-one-level]]: assume $\mathrm{AC}_\omega$; handles of equal index attached at one level may be regarded as attached successively in any order, the result being the same up to diffeomorphism relative to the lower stage.

[F4] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; attachments are formed with corners rounded, and rounding choices do not change the diffeomorphism class.

## Proof

**Proof technique:** direct.

1.1 Since the original attaching regions are disjoint, their quotient gluings commute: attach $h_2$ first and regard $h_1$ as attached to $N=\partial_+(W\cup h_2)$. This reordering fixes the lower stage. A framed parallel of the second attaching sphere bounds the parallel core disk $D^k\times\{z\}$ in the outgoing region of $h_2$, for a chosen $z\in S^{n-k-1}$. [F1, F3, F4, given]

2.1 Extend the slide band into that parallel core disk. A collar of the band and disk provides an embedded strip $\Phi:[0,2]\times D^{k-1}\to N$, starting with a disk on the first attaching sphere. Choose a smooth function $b$ on $D^{k-1}$, equal to one on a smaller disk and zero on a neighbourhood of its boundary. Replace the first attaching-sphere disk $\Phi(0,y)$ by $\Phi(2t b(y),y)$, leaving the rest of the sphere fixed. This is an isotopy: each moving patch is a graph in the strip, and the cutoff makes it match the fixed patch smoothly. Its image misses the fixed rest after the strip is chosen thin. At the final time the patch has traversed the parallel core; the final sphere can be chosen disjoint from the belt sphere of $h_2$. Shrink its normal disk neighbourhood to retain that disjointness. A radial diffeotopy in $D^k\times S^{n-k-1}$, fixed on a smaller belt neighbourhood and extended across the seam collar, then carries this compact attaching region back into the old-boundary summand. This gives the band sum with the framed parallel sphere, with the framing transported by the same diffeotopy. In the case $k=1$ this moves one attaching point across the interval core to a parallel of its other endpoint. This is Wall's disk push, Handle Addition Theorem, printed p. 148. [F1, step 1.1, construct]

3.1 The normal framing travels in the strip coordinates. Shrink the normal disk radius uniformly along the compact isotopy; its normal thickening is then an isotopy of the full attaching-region embeddings, with the band-sum framing at the endpoint. Smoothly reparametrize it to be stationary near the time endpoints. It takes place in $N$, after $h_2$ has been attached; a slide need not be an isotopy in the original boundary $M$. [F1, F2, step 2.1, construct]

4.1 Apply [F2] to the base $W\cup h_2$ and the isotopy in step 3.1. The resulting attachments of $h_1$ and $h_1'$ are diffeomorphic relative to the incoming boundary, supported near the swept strip and the two handles, and later attaching data are transported by this diffeomorphism. Reorder the disjoint original attachments as in step 1.1 to obtain the asserted comparison. [F2, F3, F4, step 1.1, step 3.1] ∎
