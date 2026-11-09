---
id: thm-author-c5bc2838d897-kflat-addendum-verdier-criterion
kind: theorem
title: External full-subcategory localization criterion
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
sources:
  references:
    - title: The Stacks Project, Localization of triangulated categories
      url: https://stacks.math.columbia.edu/tag/0GSL
      locator: Lemma 13.5.8, full statement and proof
      statement: If D′⊆D is full pretriangulated, S is a saturated multiplicative
        system compatible with the triangulated structure, and every X∈D
        receives s:X′→X in S with X′∈D′, then S′=S∩Arrows(D′) is such a
        multiplicative system and (S′)⁻¹D′→S⁻¹D is an exact equivalence,
        including full faithfulness.
      hypotheses: "Exactly the three conditions stated: full pretriangulated
        subcategory, saturated compatible S, and a replacement arrow from that
        subcategory for EVERY ambient object. No orthogonality or projectivity
        condition."
      reading_limits: Read the full HTML statement and proof and the corresponding
        complete passage in the Derived Categories chapter PDF. The proof uses
        the explicit filtered-colimit formula for localized Hom sets from
        Categories Remark 4.27.15; that formula and its common-roof
        interpretation were also read. Earlier triangulated localization
        construction is imported, not reconstructed.
    - title: The Stacks Project, Derived categories
      url: https://stacks.math.columbia.edu/tag/05RT
      locator: Lemma 13.11.2; Definition 13.11.3, tag 05RU
      statement: For any abelian category A, quasi-isomorphisms in K(A) form the
        saturated multiplicative system associated with the acyclic full
        triangulated subcategory; D(A)=Qis(A)⁻¹K(A).
      hypotheses: A an abelian category, with categories and localization formed in
        sufficiently large universes. Use A=Mod(O_X), all module sheaves, not
        only quasi-coherent sheaves.
      reading_limits: Read full HTML Lemma 13.11.2 and Definition 13.11.3, including
        the lemma proof reducing to Lemma 13.6.11. Did not reconstruct that
        earlier general kernel theorem.
    - title: The Stacks Project, Categories, Localization
      url: https://stacks.math.columbia.edu/tag/05Q4
      locator: Remark 4.27.15; right calculus of fractions preceding Lemma 4.27.11
        (04VH), and Lemmas 4.27.13–14 (04VI,04VJ)
      statement: For a right multiplicative system S, morphisms are roofs X←Q→Y, and
        equality is characterized by a common refining roof. The denominator
        category S/X is cofiltered, and localized Hom(X,Y) is the filtered
        colimit of Hom(Q,Y) over its opposite.
      hypotheses: An ordinary category with a right multiplicative system. A saturated
        multiplicative system compatible with a triangulated structure satisfies
        the required condition.
      reading_limits: Read the full right-calculus definition, common-refinement
        equivalence relation, Lemmas 4.27.11–14 and their displayed duality
        proofs, and Remark 4.27.15 in the Categories PDF; also read the exact
        HTML Remark 4.27.15. General existence of the left/right fraction
        calculus is imported rather than reconstructed.
    - title: The Stacks Project, Flat resolutions
      url: https://stacks.math.columbia.edu/tag/06YF
      locator: Lemma 20.26.12; Lemma 20.26.6, tag 079S
      statement: Every complex of sheaf modules on a ringed space receives a K-flat
        quasi-isomorphism; K-flat complexes satisfy two-out-of-three in
        distinguished triangles of the chain homotopy category.
      hypotheses: Any ringed space, arbitrary unbounded complexes. AC and suitable
        universes as in the existing proposal. No quasi-compactness,
        quasi-separatedness, field or noetherian hypothesis.
      reading_limits: Read both full HTML statements/proofs and their complete
        chapter-PDF passages. The existence proof reduces to the earlier
        resolution system and filtered-colimit lemmas; those substantial inputs
        remain imported as recorded in the existing K-flat external input. The
        unused Lemma 20.26.7 is not invoked.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 1.2.3.1, statement and displayed proof
      statement: The homotopy-category functor h is left adjoint to ordinary nerve.
        Combined with the defining infinity-localization universal property,
        passage to homotopy categories identifies infinity-localization with
        ordinary localization of its homotopy category.
      hypotheses: Simplicial sets/infinity-categories and ordinary categories in
        appropriate universes. This is used only for the universal property, not
        for an unspecified equivalence.
      reading_limits: Read Proposition 1.2.3.1 and its full displayed proof. The
        identification for localization is the formal application spelled out in
        the local lemma, not an extra theorem claimed verbatim from the source.
dependency_level: 0
---

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
