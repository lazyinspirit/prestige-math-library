---
title: Additivity of the supported coherent Euler class
status: published
research_item: lem-author-7ef3227685d9-supported-k0-euler
dependency_level: 11
---

PDF p. 15: Supported degree-zero dévissage

## Prerequisites

- [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart)
- [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed suitable universes of the supplied supported perfect category. Let $U,T,\mathcal C_T,\mathcal A_T$ be as in the preceding construction. The formula
$$\chi_T(E)=\sum_{n\in\mathbb Z}(-1)^n[H^n(E)]$$
defines a homomorphism from the triangle Grothendieck group of $h\mathcal C_T$ to $G_0(\mathcal A_T)$. The sum is finite. It sends a sheaf in degree zero to its sheaf class, and is compatible with forgetting support into the corresponding unsuppported groups on $U$.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed universes discharge the supported-heart construction in [F1] when using its actual bounded t-structure in steps 1.1–2.1. The finite alternating-sum argument requires no additional choice.

**Given:** The Axiom of Choice, the fixed suitable universes, and the supported perfect category with its bounded t-structure and coherent supported heart.

**Goal:** Verify the Euler assignment on every relation, not merely on terms of a locally free resolution.

[F1] [lem-author-7ef3227685d9-supported-k0-heart](item-lem-author-7ef3227685d9-supported-k0-heart) supplies finite coherent supported cohomology and the usual long exact cohomology sequence of a triangle.

[F2] [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation) identifies the triangle group with the cofiber presentation. The abelian Grothendieck group is defined by short exact relations.

## Proof
1.1 Cohomology is invariant under equivalence, and boundedness in [F1] makes the displayed assignment a finite sum on every object. For a triangle $E\to F\to G\to E[1]$, the long exact sequence of cohomology is finite after deleting zero terms and consists of objects in $\mathcal A_T$. In any finite exact sequence of an abelian category, breaking at images gives short exact sequences; summing their Grothendieck relations makes its alternating sum zero, since each image occurs twice with opposite signs. Applying this to the cohomology sequence gives $\chi_T(F)=\chi_T(E)+\chi_T(G)$. [A1, F1, F2]

2.1 The assignment therefore descends to the triangle group. For $M[0]$ it is $[M]$, because the only nonzero cohomology is $H^0=M$. Forgetting support changes neither the underlying sheaves nor their cohomology; it sends each short exact relation to the same relation. Thus the Euler homomorphisms commute with forgetting support. [A1, F1, F2, step 1.1] ∎
