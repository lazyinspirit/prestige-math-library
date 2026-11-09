---
title: External matrix, exact and bounded-projective K-theory comparisons
status: published
research_item: thm-author-da44cda020c0-units-k1-classical-comparisons
dependency_level: 0
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC. For every commutative unital ring A, let P(A) be the exact category of finite projective modules and let C(A)=Chᵇ(P(A)) be bounded cochain complexes, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical matrix-automorphism maps and degree-zero inclusion give natural isomorphisms

$$GL(A)_{ab}\xrightarrow{\sim}\pi_1 K^Q(P(A))\xrightarrow{\sim}\pi_1 K^W(C(A)).$$

The first is the classical matrix/Quillen comparison; the second includes the canonical exact-category S/Q comparison and Gillet–Waldhausen inclusion. The image of M∈$GL_n$(A) is the standard automorphism class of M acting on Aⁿ in degree zero. In particular the one-by-one unit u maps to the class of multiplication by u on A. These comparisons are natural for extension of scalars along unital ring maps.

## Source contract
**Given:** A commutative unital ring, AC, and the exact/Waldhausen structures specified above.

**Goal:** Import the actual classical comparison maps with their matrix-loop normalization.

[F1] Weibel III.1.1 identifies matrix K₁ with GL(A)_ab. IV.1.1, IV.4.9/4.11.1 and IV.7.1–7.2 identify its canonical automorphism maps with exact-category Quillen K-theory.

[F2] Weibel Exercise IV.7.9(c) matches the Quillen automorphism class with its group-completion class. IV.8.3.2/8.5 and Exercises IV.8.5–8.7 supply the canonical S/Q comparison and its automorphism-class normalization. V.2.2 supplies the K-theory equivalence induced by P(A)→C(A).

## External input
Import [F1] and [F2] with the precise reading limits in the frontmatter. These are comparisons induced by actual categorical constructions, not an unqualified existence of abstract π₁ isomorphisms. The elementary checks that P(A) is closed under kernels of its surjections and that base change is weakly exact on C(A) are given in the target’s application. The local helpers independently prove determinant and its unit calculation; no determinant compatibility is inferred from a π₀ comparison.

Source correction: Exercise IV.8.7 cites IV.7.8 for the automorphism class; the intended reference is IV.7.9. This source cross-reference error does not change the imported comparison.
