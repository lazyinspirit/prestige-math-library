---
title: External full-subcategory localization criterion
status: published
research_item: thm-author-c5bc2838d897-kflat-addendum-verdier-criterion
dependency_level: 0
---

PDF p. 3: K-flat localization fiber comparison: focused authoring addendum

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and suitable universes. Let D be a pretriangulated category, D′⊆D a full pretriangulated subcategory, and S a saturated multiplicative system compatible with the triangulated structure. If every X∈D receives s:X′→X in S with X′∈D′, then S′=S∩Arrows(D′) is a saturated compatible multiplicative system and (S′)⁻¹D′→S⁻¹D is an exact equivalence. This conclusion includes full faithfulness, not merely essential surjectivity.

For the intended application, if A is any abelian category, S=Qis(A) in K(A) is a saturated compatible multiplicative system and S⁻¹K(A)=D(A). For a right multiplicative system, roofs and their common-refinement equivalence compute the localization; equivalently Hom in the localization is the filtered colimit over denominators into the source.

## Source contract
**Given:** D,D′,S with exactly the hypotheses in the Statement.

**Goal:** Import the precise localization criterion and the actual Hom-set/equality description used in its application.

[F1] Stacks Lemma 13.5.8, tag 0GSL, gives the exact equivalence after verifying those hypotheses.

[F2] Stacks Lemma 13.11.2 and Definition 13.11.3, tags 05RT and 05RU, give the quasi-isomorphism system and the classical derived localization.

[F3] Stacks Categories §4.27 right calculus, Lemmas 4.27.11–14 and Remark 4.27.15, gives roofs, common-refinement equality and the Hom-colimit formula.

[F4] HTT Proposition 1.2.3.1 states that the homotopy-category functor h is left adjoint to ordinary nerve. Its formal application to the localization universal property is made explicitly in the local lemma; it is not attributed verbatim as an additional source theorem.

## External input
Import [F1]–[F4] with the exact reading limits in the frontmatter. The proof of [F1] explicitly uses the denominator-colimit formula to prove full faithfulness. It requires a full pretriangulated subcategory with enough S-replacements, not a subcategory of K-projective objects. No K-flat object is being asserted K-projective.
