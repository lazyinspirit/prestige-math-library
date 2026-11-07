---
id: lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting
kind: lemma
title: "Finite diagrammatic prime splitting of a reduced alternating diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-alternating-link-diagram
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - thm-induction-principle
justified_by: []
aliases: []
proof_strategy: induction
axiom_use: "Choice-free: induction is bounded by the supplied finite crossing count; all capping arcs and separating spheres are constructed in planar disks and their product collars."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, proof of Theorem 1.1, manuscript pp. 8–9; annular connected sum, p. 2"
      url: "https://arxiv.org/pdf/2210.03218v2"
---

## Statement

Let $D$ be a connected reduced alternating diagram on a projection sphere, with $n>0$ crossings. Call such a diagram **diagrammatically prime** if every simple closed curve transverse to it in exactly two noncrossing points has a complementary disk containing no crossings. Then $D$ has a finite binary splitting tree whose leaves are connected reduced alternating diagrammatically prime diagrams with positive crossing counts. Each split cuts along a two-point curve having crossings on both sides and caps the two resulting diagram arcs by crossingless arcs in disks. The leaf crossing counts sum to $n$, so there are at most $n$ leaves. For either checkerboard color, the checkerboard surface of each parent is a geometric boundary connected sum of its two children's checkerboard surfaces: an explicitly constructed sphere meets the link twice and the surface in one arc, and closing the pieces by a standard disk in either capping ball gives the two child surfaces. A crossingless connected diagram instead has its single spanning disk and needs no splitting.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, proof of Theorem 1.1](https://arxiv.org/pdf/2210.03218v2)

## Facts & Assumptions

**Given:** The finite spherical diagram $D$, including its cyclic strand visits, over-under data and a checkerboard coloring.

[F1] Connectedness, reducedness and alternation have their usual diagrammatic meanings. Reducedness says that no region has a crossing more than once on its boundary. ([[def-reduced-alternating-link-diagram]])

[F2] The checkerboard surface is the finite region-disk and half-twisted crossing-band construction, with boundary the represented link. ([[lem-alternating-checkerboard-normal-pairing-is-definite]])

[F3] A property holding at $0$ and inherited from $m$ to $m+1$ holds for every natural number $m$. ([[thm-induction-principle]])

## Proof

1.1 Let $P(m)$ assert the result for every connected reduced alternating diagram having at most $m$ crossings, including the stated disk convention at zero crossings. A crossingless connected diagram is one embedded circle, with two checkerboard disks, so $P(0)$ holds. [given, F1, F2, base]

1.2 Fix $m$ and assume $P(m)$. A diagram with at most $m+1$ crossings is already covered if it has at most $m$. Otherwise it has $n=m+1>0$ crossings. [given, ih]

1.3 Consider a simple closed curve $C$ meeting $D$ transversely twice, away from crossings. The two closed complementary disks $U,V$ contain the two portions of the diagram. Cap each disk by a new disk containing one simple arc joining its two marked boundary points. Each capped diagram is connected: a component of its projection graph not meeting the new arc would already be a component of $D$, disjoint from the part on the other side of $C$. Both capped diagrams therefore have just one strand arc meeting their cap, together with any closed strands in their original disk. The original crossings partition between the two factors, and the caps introduce none. Orient the capping arc to continue the strand orientation if orientations have been specified. [given, F1, construct]

2.1 Each factor remains alternating. Only the transition through the new cap needs checking. In either disk the strand joining the two boundary points has an even number of crossing visits: each self-crossing contributes two visits, and the total number of intersections with each closed strand is even. For the latter assertion, resolve that closed immersed strand at its finitely many double points, preserving its mod-two chain; the resulting simple circles each meet a proper arc in a disk an even number of times, by successive entry and exit. Thus, if the proper strand has any crossing visits, its first and last visits have opposite over-under status, and joining them through the cap preserves alternation. If it has no visits, closing it imposes no new alternating condition. All other cyclic crossing lists are unchanged. [F1, step 1.3, construct]

2.2 Each factor is reduced. Indeed, the two arcs of $C$ between its marked points lie in two distinct regions of opposite checkerboard colors. In a capped factor its new arc likewise has two distinct adjacent regions, one of each color. Recovering the original diagram by removing the caps identifies the first factor's region on one side of that arc with the corresponding region of the second factor, and does the same on the other side. These are the only region identifications: outside small strips around the removed cap arcs the complementary regions retain all their old connections, and the two strips attach only to their corresponding sides. In particular, two distinct regions of one factor are never identified with each other. If a factor region had two sectors at one of its crossings, those sectors would still belong to a single original region. This contradicts original reducedness. [given, F1, step 1.3, construct]

2.3 To check the surface assertion, first take the usual height realization of the diagram, with every crossing band in a small neighborhood disjoint from $C$, and all link strands and checkerboard surfaces in a thin product collar of the projection sphere. One can use the boundary of a slightly rounded product $U\times[-h,h]$ in this collar, where the top and bottom disks lie beyond the link and both checkerboard surfaces. Its annular side is $C\times[-h,h]$. It meets the link in the two strands above the two marked points. For either chosen color, the intersection with its checkerboard surface is one arc: it follows the portion of $C$ lying in that color, with its endpoints on those two strands. This follows directly from the region-disk construction away from the crossing bands; small rounding preserves these intersections. The product is an explicitly parametrized ball. Capping either side in a copy of this product model, with a crossingless link arc and its adjacent checkerboard half-disk, gives exactly the capped diagram's region disks and crossing bands. Thus cutting and capping the parent surface gives the two child surfaces, and reversing that operation is their geometric boundary connected sum. This construction is performed separately for each color; it makes no assertion about uniqueness of splitting spheres. [F2, step 1.3, construct]

3.1 If no two-point curve has crossings on both sides, this diagram is a leaf. Otherwise select one such curve and perform steps 1.3–2.3. The two child crossing counts are positive and strictly smaller than $n$, with sum $n$, so $P(m)$ supplies their finite splitting trees. Attach these below the parent. The crossing counts sum to $n$ at the leaves, each positive, so there are at most $n$ leaves; step 2.3 supplies the surface realization at the new split. This proves $P(m+1)$ and uses only finitely many selections of witnesses. [step 1.3, step 2.1, step 2.2, step 2.3, step 1.2, construct]

4.1 Apply [F3] to steps 1.1, 1.2 and 3.1. Then $P(m)$ holds for every $m$, hence for the crossing count of the given diagram. This proves all the assertions. [F3, step 1.1, step 1.2, step 3.1, discharge-induction] ∎


## Remarks

Diagrammatic primeness here is a condition on two-point curves in the projection sphere. The lemma does not identify the leaf links as topologically prime, compare decompositions of an isotopic link, or realize changes of decomposition by flypes. Those are additional geometric obligations in a proof of the full flyping theorem.
