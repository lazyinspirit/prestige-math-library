---
title: Bounded finite-projective complexes and affine chain models
status: draft
research_item: lem-author-4f716d60801a-finite-projective-model
dependency_level: 1
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. For a commutative unital ring $A$, degreewise associated sheaf and global sections give inverse equivalences between bounded complexes of finitely generated projective $A$-modules and bounded complexes of finite locally free sheaves on $\operatorname{Spec}A$, preserving chain maps, homotopies, shifts and cones. A bounded complex $P$ of projective modules is K-projective: every map from $P$ to an acyclic complex is nullhomotopic, including after any shift of the target. Thus its derived morphisms are chain maps modulo homotopy, and the differential graded category of bounded finite-projective complexes models the full enhanced ring-perfect subcategory.

## Facts & Assumptions
**Given:** $A$, $P$ and an acyclic complex $N$ as in the statement.

**Goal:** Establish the affine chain model and its derived mapping property.

[F1] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) gives the additive termwise equivalence under Choice.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the derived localization, and [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) supplies exactness of associated sheaf.

[F3] [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) defines ring-perfect objects by bounded finite-projective representatives.

## Proof
1.1 Apply [F1] termwise. Naturality of the unit and counit makes them commute with differentials, while additivity preserves the equations for chain maps and homotopies and the signed matrices for shifts and cones. Exactness in [F2] also preserves quasi-isomorphisms. [F1, F2]

1.2 For a chain map $f:P\to N$, construct a homotopy downward from the largest degree in which $P$ is nonzero. At each degree, after the next homotopy component is chosen, the remaining map from $P^n$ lands in the cycles of $N^n$; acyclicity makes $N^{n-1}\to Z^n(N)$ surjective, and projectivity lifts it. The finite downward construction gives $f=dh+hd$. The same argument applies to every shift of $N$, so the Hom complex $\operatorname{Hom}_A(P,N)$ is acyclic. [given, construct]

2.1 The cone of a quasi-isomorphism is acyclic. Step 1.2 therefore shows that $\operatorname{Hom}_A(P,-)$ sends quasi-isomorphisms to quasi-isomorphisms. Consequently its Hom complex computes derived maps from $P$; its zeroth cohomology is chain maps modulo homotopy. By [F3], every ring-perfect object has such a representative, so these complexes and their Hom complexes give the stated full enhanced model. [F2, F3, step 1.2] ∎
