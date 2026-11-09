---
title: Full projective Quillen–Waldhausen comparison and the local free-class map
status: draft
research_item: thm-adjudicate-9ead0798f06a-projective-q-w-comparison
dependency_level: 0
---

PDF p. 14: Lemma6.4; scheme conventions p3

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC and fixed universe bounds. For every commutative unital ring $A$, let $P(A)$ be finite projective modules with their split exact structure, and let $C(A)$ be bounded cochain complexes in $P(A)$, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical exact-category S/Q comparison followed by degree-zero inclusion gives a natural equivalence of full K-spaces
$$K^Q(P(A))=\Omega BQ(P(A))\simeq K^W(C(A)).$$
It sends a projective object to the same object in degree zero and is natural for extension of scalars. No noetherian or regularity hypothesis is required. For every commutative local ring $R$, the stable free-class map $\mathbb Z\times BGL(R)\to K^Q(P(R))$ is, component by component, the integral-homology-acyclic plus map. This includes Zariski local rings.

## External input
This is an explicitly imported established external input: the comparisons and plus theorems of [Weibel, The K-book, Chapter IV](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf), IV.1.1.1–1.1.2, IV.1.4–1.6, IV.4.9–4.11.1, IV.7.1–7.2, IV.8.3.2–8.6 and Exercises 8.5–8.7, and the Gillet–Waldhausen theorem of [Weibel, The K-book, Chapter V](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf), V.2.2 and V.2.7.2, with the hypotheses and reading limits recorded in the source metadata. The imported proof foundations are literature-derived; the numbered argument below is a local application check and does not reconstruct those foundations. The comparison with the enhanced perfect category and nonconnective degree zero is supplied separately in the consumer.

## Facts & Assumptions
[A1] AC is assumed for small presentations in the fixed universes. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Import the canonical plus/group-completion/Q and exact-category S/Q comparisons from the Chapter IV source record. They concern full spaces and their actual object maps.

[F2] Import Gillet–Waldhausen from the Chapter V source record, with its ambient-kernel hypothesis.


**Given:** The exact and Waldhausen structures in the statement and [A1].

**Goal:** Check the imported comparisons' hypotheses and their local application.

## Proof
1.1 A surjection between finite projectives splits, and its kernel is a finite projective summand. Thus [F2] applies inside all $A$-modules; combining it with [F1] gives the full-space comparison. Its object map is the degree-zero inclusion. Tensor extension preserves projectives and split sequences. A bounded acyclic projective complex splits recursively from its highest nonzero degree and is contractible, so tensor extension also preserves the indicated quasi-isomorphisms. The comparisons are consequently natural for these functors. [A1, F1, F2, given]

2.1 Over a commutative local ring all finite projectives are free and their Grothendieck group is $\mathbb Z$ by rank. The free-object group-completion/Q comparison in [F1] therefore identifies the stable free-class map on every component with the plus map; its integral homology acyclicity gives the asserted homology isomorphism. No henselian hypothesis or global free-rank description for nonlocal rings is used. [F1, step 1.1] ∎
