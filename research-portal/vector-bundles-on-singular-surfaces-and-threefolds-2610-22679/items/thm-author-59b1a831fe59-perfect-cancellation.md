---
id: thm-author-59b1a831fe59-perfect-cancellation
kind: theorem
title: External perfect-field Tate cancellation
status: published
domain: mathematics
deps:
  - math:def-perfect-field
  - math:def-derived-category-of-an-abelian-category
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:def-thick-subcategory
  - math:def-symmetric-monoidal-category
  - math:def-axiom-of-choice
dependency_roles:
  math:def-perfect-field: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:def-thick-subcategory: mathematical-premise
  math:def-symmetric-monoidal-category: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Vladimir Voevodsky, Cancellation Theorem, Documenta Mathematica, Extra
        Volume Suslin (2010), 671–685
      url: https://www.math.ias.edu/Voevodsky/files/files-original/Dropbox/Published%20versions/cancellation_published.pdf
      locator: Introduction, printed pp.671–672 (PDF pp.1–2); Corollaries 4.9–4.10 and
        their complete printed proofs, p.684 (PDF p.14, one-based).
      statement: For perfect k and arbitrary K,L in integral DM_eff_-(k), the
        canonical map Hom(K,L) to Hom(K(1),L(1)) is bijective.
      hypotheses: Perfect field; bounded-above effective Nisnevich motives with
        integral coefficients. No characteristic-zero or
        resolution-of-singularities hypothesis.
      reading_limits: In this assignment read the introduction through its scope
        discussion and both corollaries with their complete displayed proofs.
        Theorem 4.6, correspondence constructions, the cited cohomology
        comparison and cited Proposition 4.34 are imported foundations, not
        reconstructed or independently proved here.
    - title: "Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology
        (published 2006 edition): effective category and Tate construction"
      url: https://www.claymath.org/wp-content/uploads/2022/03/Motivic-Cohomology.pdf
      locator: Definitions 1.1/1.5 and composition, pp.3–5; Definitions 2.1/2.8 and
        pointed cokernel, pp.13/15; Definition 3.1, p.21; opening of Lecture 12,
        p.89; Theorem 13.1, p.99; Definitions 14.1–14.2, following tensor
        discussion and Lemma 14.4, pp.109–110; Theorem 15.15, p.124. PDF page =
        printed page + 15 (one-based).
      statement: The sheaf-with-transfers construction, A1-localization of its
        bounded-above derived category, descended derived tensor and reduced G_m
        Tate object define the integral effective Nisnevich category and twist
        used also by the source Gysin theorem.
      hypotheses: Smooth separated finite-type k-schemes; integral coefficients;
        bounded-above complexes. Perfect k for the Gysin and cancellation
        applications. Local foundational convention retains AC and fixed
        universes for resolutions and size; these are not extra geometric
        hypotheses attributed to the cited theorem.
      reading_limits: Read the specified definitions, composition paragraph,
        Nisnevich-cover definition, Theorem 13.1 statement and its short proof
        by reference, Definitions 14.1–14.2 with the surrounding
        localization/tensor discussion, Lemma 14.4 with its proof by reference,
        and Theorem 15.15 statement and displayed proof. This checks the precise
        category, tensor, Tate and Gysin notation; proofs in the referenced
        earlier lectures, intersection theory, existence of resolutions and
        localization foundations are imported rather than reconstructed.
    - title: "Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology
        (published 2006 edition): cancellation hypothesis comparison"
      url: https://www.claymath.org/wp-content/uploads/2022/03/Motivic-Cohomology.pdf
      locator: Theorem 16.25, its printed proof, and Remark 16.26, printed p.131 (PDF
        p.146, one-based); the older xprova edition numbers this page 137.
      statement: Theorem 16.25 is stated under resolution of singularities; Remark
        16.26 separately records validity over perfect fields.
      hypotheses: Resolution of singularities for the printed theorem; perfectness for
        the separate remark. This comparison is contextual and is not the proof
        supplier for the present import.
      reading_limits: Read both complete statements and the displayed proof on this
        page. The comparison uses only their stated hypotheses and attribution.
        No reliance on that older proof or new audit of its underlying arguments
        is claimed.
dependency_level: 0
---

## Statement
Let $k$ be perfect. For any $K,L\in DM^{\mathrm{eff}}_-(k)$, tensoring with $\mathbb Z(1)$ induces the natural bijection
$$\operatorname{Hom}(K,L)\xrightarrow{\sim}\operatorname{Hom}(K(1),L(1)).$$
The effective category and integral coefficients are the classical category used by the completed Gysin input. This is valid in every characteristic without a resolution-of-singularities hypothesis.

## Facts & Assumptions
**Given:** A perfect field and objects of the stated effective motive category, with the foundational conventions in [A1].

**Goal:** Import precisely the full faithfulness needed for coefficient cancellation.

[A1] Work with the Axiom of Choice and fixed nested universes for sites, sheaves and Hom sets. AC is retained for the resolutions in the imported derived tensor construction, not asserted necessary for the geometric conclusion. [[math:def-axiom-of-choice]]

[F1] Voevodsky 2010, Corollary 4.10, supplies the canonical map and its bijectivity (source reference 0).

[F2] A perfect field means one whose nonconstant irreducible polynomials are separable. [[math:def-perfect-field]]

[F3] Import the following formulation package from MVW (source reference 1). $\operatorname{Cor}_k$ has smooth separated finite-type $k$-schemes as objects; its morphisms are integral finite correspondences, freely generated by integral closed subschemes of $X\times_kY$ finite and surjective over a connected component of $X$, with the source's intersection-and-pushforward composition. A presheaf with transfers is an additive contravariant functor $\operatorname{Cor}_k\to\mathbf{Ab}$. It is a Nisnevich sheaf when its underlying presheaf on smooth schemes satisfies sheaf descent for étale covers with residue-field lifts at every point. Write $\mathcal A=\operatorname{Sh}_{\mathrm{Nis}}(\operatorname{Cor}_k,\mathbb Z)$ and $\mathbb Z_{\mathrm{tr}}(X)=\operatorname{Cor}_k(-,X)$. The source supplies the abelian sheaf category and its exact sheafification with transfers.

[F4] Put $D^-=D^-(\mathcal A)$, using the bounded-above cochain derived category and its cone/shift convention. [[math:def-derived-category-of-an-abelian-category]] Let $\mathcal E_{\mathbb A^1}$ be the smallest thick triangulated subcategory containing the cones of all projection maps $\mathbb Z_{\mathrm{tr}}(X\times\mathbb A^1)\to\mathbb Z_{\mathrm{tr}}(X)$ and closed under direct sums that exist in $D^-$. Here thick includes closure under direct summands. [[math:def-thick-subcategory]] Set $W=\{f:\operatorname{Cone}(f)\in\mathcal E_{\mathbb A^1}\}$. The imported localization is
$$DM^{\mathrm{eff}}_-(k)=DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)=D^-[W^{-1}],\qquad q:D^-\longrightarrow D^-[W^{-1}].$$
Localization has its categorical universal-property meaning; existence of this motivic model and its Hom sets is part of the MVW import, not inferred from the abstract definition alone. [[math:def-localization-of-a-category-at-a-class-of-morphisms]]

[F5] The imported derived transfer tensor, followed by Nisnevich sheafification, descends to the symmetric monoidal tensor on this localization, with $M(X)=q\mathbb Z_{\mathrm{tr}}(X)$ and $M(X)\otimes M(Y)\cong M(X\times_kY)$. [[math:def-symmetric-monoidal-category]] For $\mathbb G_m=\mathbb A^1\setminus\{0\}$ put $T=\operatorname{coker}(\mathbb Z_{\mathrm{tr}}(\operatorname{Spec}k)\xrightarrow{1_*}\mathbb Z_{\mathrm{tr}}(\mathbb G_m))$; the point $1$ splits the structure map. The Tate object is $\mathbb Z(1)=q(T[-1])$ and $K(1)=K\otimes\mathbb Z(1)$. MVW Definition 3.1 and Lemma 14.4 identify this with its singular-complex representative. This fixes the same integral Nisnevich category and Tate object as the completed classical Gysin input; it asserts no comparison to a different motivic theory. For a morphism $f$, the map in the Statement is $f\mapsto f\otimes\mathrm{id}_{\mathbb Z(1)}$.

## External input
Import [F1] and the formulation and well-definedness package [F3]–[F5]. Their substantial proofs are not locally reconstructed. MVW Theorem 16.25 assumes resolution of singularities; Remark 16.26 records perfect-field validity (source reference 2). The present bijection is imported from Voevodsky's published Corollary 4.10, with that corollary's exact perfect-field scope.
