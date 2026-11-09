---
id: thm-adjudicate-9ead0798f06a-projective-q-w-comparison
kind: theorem
title: Full projective Quillen–Waldhausen comparison and the local free-class map
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
proof_strategy: direct
sources:
  references:
    - title: Charles Weibel, The K-book, author-hosted standalone Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: IV.1.1.1–1.1.2 pp.3; IV.1.4–1.6 pp.4–5; IV.4.9–4.11.1 pp.42–45;
        IV.7.1–7.2 pp.61–62; IV.8.3.2–8.6 pp.68–70; Exercises 8.5–8.7 pp.74–75
      statement: The canonical plus, group-completion, Q and exact-category S
        comparisons agree on free-object maps; S/Q is a natural equivalence.
      hypotheses: Small exact categories; split exactness for the group-completion/Q
        comparison. Arbitrary rings for the free-module construction.
      reading_limits: Read these passages in the primary cached PDF text, including
        the displayed plus and group-completion arguments and exercise
        construction. Independently opened the hosted PDF and checked IV.8.6.
        Cache SHA256
        9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248. No
        scan review, completion of the exercises, or reconstruction of the
        foundational comparison theorems is claimed. Accessed 2026-11-09.
    - title: Charles Weibel, The K-book, author-hosted standalone Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: Theorem V.2.2 and its displayed proof pp.13–14; V.2.7.2 p.18
      statement: Degree-zero inclusion into bounded complexes induces a K-space
        equivalence for an exact category closed under kernels of surjections in
        its ambient abelian category.
      hypotheses: Use finite projectives in all modules, split cofibrations, and
        ambient quasi-isomorphisms.
      reading_limits: Read the full theorem, displayed proof and V.2.7.2 in the
        primary cached PDF text; independently opened the hosted theorem. Cache
        SHA256 52dcc8ee3a1764e5ea309c59f093ac8e2a1ea64f3b94bacc05e6a2b6125b1da8.
        Localization and additivity foundations are imported. No scan review is
        claimed. Accessed 2026-11-09.
dependency_level: 0
---

## Statement
Assume AC and fixed universe bounds. For every commutative unital ring $A$, let $P(A)$ be finite projective modules with their split exact structure, and let $C(A)$ be bounded cochain complexes in $P(A)$, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical exact-category S/Q comparison followed by degree-zero inclusion gives a natural equivalence of full K-spaces
$$K^Q(P(A))=\Omega BQ(P(A))\simeq K^W(C(A)).$$
It sends a projective object to the same object in degree zero and is natural for extension of scalars. No noetherian or regularity hypothesis is required. For every commutative local ring $R$, the stable free-class map $\mathbb Z\times BGL(R)\to K^Q(P(R))$ is, component by component, the integral-homology-acyclic plus map. This includes Zariski local rings.

## External input
This is an explicitly imported established external input: the comparisons and plus theorems of [Weibel, The K-book, Chapter IV](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf), IV.1.1.1–1.1.2, IV.1.4–1.6, IV.4.9–4.11.1, IV.7.1–7.2, IV.8.3.2–8.6 and Exercises 8.5–8.7, and the Gillet–Waldhausen theorem of [Weibel, The K-book, Chapter V](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf), V.2.2 and V.2.7.2, with the hypotheses and reading limits recorded in the source metadata. The imported proof foundations are literature-derived; the numbered argument below is a local application check and does not reconstruct those foundations. The comparison with the enhanced perfect category and nonconnective degree zero is supplied separately in the consumer.

## Facts & Assumptions
[A1] AC is assumed for small presentations in the fixed universes. [[math:def-axiom-of-choice]]

[F1] Import the canonical plus/group-completion/Q and exact-category S/Q comparisons from the Chapter IV source record. They concern full spaces and their actual object maps.

[F2] Import Gillet–Waldhausen from the Chapter V source record, with its ambient-kernel hypothesis.


**Given:** The exact and Waldhausen structures in the statement and [A1].

**Goal:** Check the imported comparisons' hypotheses and their local application.

## Proof
1.1 A surjection between finite projectives splits, and its kernel is a finite projective summand. Thus [F2] applies inside all $A$-modules; combining it with [F1] gives the full-space comparison. Its object map is the degree-zero inclusion. Tensor extension preserves projectives and split sequences. A bounded acyclic projective complex splits recursively from its highest nonzero degree and is contractible, so tensor extension also preserves the indicated quasi-isomorphisms. The comparisons are consequently natural for these functors. [A1, F1, F2, given]

2.1 Over a commutative local ring all finite projectives are free and their Grothendieck group is $\mathbb Z$ by rank. The free-object group-completion/Q comparison in [F1] therefore identifies the stable free-class map on every component with the plus map; its integral homology acyclicity gives the asserted homology isomorphism. No henselian hypothesis or global free-rank description for nonlocal rings is used. [F1, step 1.1] ∎
