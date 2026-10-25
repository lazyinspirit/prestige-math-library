---
id: lem-satellite-connected-sum-substitution
kind: lemma
title: "Satellite substitution across connected sum"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-satellite-induced-concordance-operator
  - def-satellite-pattern-companion-and-winding-number
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: 'Tim D. Cochran, Christopher W. Davis, and Arunima Ray, "Injectivity of satellite operators in knot concordance"'
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "Lemma 2.4, satellite of a connected sum"
    - title: 'Charles Livingston, "A Survey of Classical Knot Concordance"'
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§9, satellite conventions"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let P be a pattern and let K be a knot. Choose a transverse meridional disk for P and a short product slab about it. Form a pattern P_K by replacing all strands of P across that slab by parallel untwisted copies of a long-knot representative of K, with the individual strand orientations inherited from P; this is simultaneous companion insertion, rather than tying K into just one arc. For every knot J, the satellite P(K#J) is isotopic as an oriented knot to P_K(J). The pattern P_K has the same winding number as P.

## Statement references

[CDR, Lemma 2.4](https://arxiv.org/pdf/1205.5058v3)

[Livingston, §9](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf)

## Facts & Assumptions

**Given:** The pattern $P$, knots $K,J$, the transverse meridional disk and product slab specified in the Statement, and the preferred zero framings.

[F1] A satellite inserts the complete pattern into the companion's zero-framed tubular neighborhood, matching its meridian and preferred longitude. [[def-satellite-induced-concordance-operator]], [[def-satellite-pattern-companion-and-winding-number]]

[F2] Connected sum joins two long-knot representatives end to end with their endpoint product coordinates matched. [[def-knot-connected-sum-and-prime-knot]]

[F3] Coordinate disks have smooth cutoffs; a smooth Euclidean map with invertible derivative has a smooth local inverse, without a choice axiom. [[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

## Proof

1.1 A transverse meridional disk exists for every smooth pattern, without a selection axiom. Parametrize $P$ by its supplied circle embedding and compose with the angular projection of the solid torus to obtain a smooth circle map $f$. Its angular derivative is a continuous real function on the parameter circle. For $0<\delta<1/2$, uniform continuity allows a partition into finitely many equal short intervals such that on any interval meeting the zero set of $f'$ one has $|f'|<\delta$. Make the intervals short enough to lift the map to real angular coordinates there. The images of these intervals have total arc length at most $\delta$, by integrating this derivative bound over intervals of total length at most one. Those finitely many image arcs cannot cover the target circle of length one: cutting at their finitely many endpoints and adding the lengths proves this finite covering inequality directly. Choose an angle outside them. Every preimage is regular, so its meridional disk is transverse; the case of empty preimage is allowed. Only one angle and finitely many intervals are selected. The specified transverse disk in the Statement may be any such disk. [given, construct, algebra]

1.2 Represent $K\#J$ by concatenating long representatives of $K$ and $J$, each constant in its endpoint product collars, and then closing by the fixed trivial outside arc. Use their zero-framed tubular products, glued by the identity on the two normal disk coordinates. This is the zero-framed product of the connected sum: a longitude and the core have linking zero on each of the two separated summand portions, their connecting parallel arcs are untwisted, and cross linking vanishes because those portions lie in disjoint balls. Their total linking is therefore zero. This checks the framing rather than introducing an unspecified meridional twist at the concatenation. [F1, F2, given, construct, algebra]

2.1 Let the disk meet $P$ in the finite transverse set $p_1,\ldots,p_m$. Finiteness follows because this inverse image is a compact discrete subset of the compact knot. Shrink the slab so that its intersection with $P$ consists of exactly $m$ arcs crossing from one disk face to the other. Indeed transversality gives each intersection a local graph over the slab coordinate; finitely many disjoint such neighborhoods suffice, and the compact remaining part of $P$ is disjoint from the central disk and hence from a sufficiently short slab. Straighten the graph arcs in disjoint small disks about the $p_j$. Explicitly, if the $j$th graph has disk coordinate $p_j(t)$, use $(q,t)\mapsto(q+\chi_j(q)(p_j(0)-p_j(t)),t)$, with $\chi_j=1$ near that graph and zero outside its disk. Work first in a slightly larger slab and multiply the displacement by a smooth time-coordinate cutoff $\tau(t)$ equal to one on the inner slab and zero near the larger slab faces. Thus the isotopy is the identity at the outside faces and glues to the identity off the larger slab. After shortening the slab its derivative in $q$ differs from the identity by norm less than $1/2$; the straight-line interpolation has the same bound and is an isotopy. Each disk map is a diffeomorphism: solve its inverse by the uniformly contracting iteration $q_{k+1}=z-\tau(t)\chi_j(q_k)(p_j(0)-p_j(t))$, and use [F3] at its everywhere invertible derivative to obtain smooth local inverses, which agree with this unique inverse. Thus the pattern can be represented as one remaining tangle joined to $m$ straight parallel strands across the chosen slab, with some of their orientations possibly reversed. [F3, step 1.1, given, construct, algebra]

3.1 Cut a small standard arc from $K$, leaving a long knot in a product ball whose two end neighborhoods are straight. Its zero-framed normal product yields $m$ disjoint parallel copies, one for each supplied point $p_j$ after a disk-coordinate rescaling. The product is constant at the ends and its framing has no full twist. Insert this whole string link in the straight-strand slab and retain the other tangle from step 2.1. All endpoint coordinates agree, so the result is a smooth embedded oriented knot in the original solid torus, denoted $P_K$. Negative-oriented strands follow the same geometric parallel copy with the opposite orientation; they are not omitted or replaced by a differently framed tangle. [F1, step 2.1, construct]

4.1 Insert the tangle description of $P$ from step 2.1 into the product of step 1.2. Across the long $K$ portion it has exactly the $m$ parallel strands constructed in step 3.1. Across the long $J$ portion it has the corresponding parallel strands of $J$, and the remainder is the unchanged tangle of $P$. One may now absorb the $K$ portion into that remainder, leaving $J$ as the sole companion portion. The resulting tangle is precisely $P_K$ inserted into the zero-framed neighborhood of $J$. The disk products agree on every common face, so these are the same glued oriented embedding after the chosen product reparametrizations; smoothing the matching straight collars gives an oriented isotopy. Hence $P(K\#J)$ is isotopic to $P_K(J)$. No step replaces all $m$ strands by a local knot in one strand. [F1, step 2.1, step 3.1, step 1.2, construct, algebra]

5.1 Both the original straight $m$-strand tangle and its replacement lie in a product ball inside a slightly smaller meridional-disk slab containing all $p_j$, and they agree on its boundary. Their oriented difference is a one-cycle in that ball, hence bounds there (contract the ball linearly). They therefore represent the same class in the homology of the solid torus. Their algebraic coefficient of its core, namely the winding number, is unchanged. This proves the second conclusion as well, including winding zero and mixed strand orientations. [F1, step 3.1, step 4.1, construct, algebra] ∎
