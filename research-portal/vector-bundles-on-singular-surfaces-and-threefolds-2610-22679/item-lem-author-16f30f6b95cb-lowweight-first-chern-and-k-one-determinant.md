---
title: Actual first-Chern and determinant maps of the first EM layer
status: draft
research_item: lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant
dependency_level: 17
---

PDF p. 9: Actual low-weight motivic projections and their normalization

## Prerequisites

- [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations)
- [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input)
- [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank)
- [lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard](item-lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard)
- [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and fixed universe bounds for the supplied perfect K-model and derived sections. For each scheme use the small Nisnevich site specified by the torsor comparison: a sufficiently small full subcategory of étale schemes containing the terminal scheme and closed under the fibre products and Zariski refinements used in descent. Work on a compatible universe-bounded smooth big Nisnevich site when comparing stack maps, and restrict to these small sites for derived sections.

Let X be smooth of finite type over any field k. Under the canonical weight-one comparison, the actual first-stage projection induces

$$\widetilde K_0(X)=\pi_0Fil^1K(X)\longrightarrow H^{2,1}_{mot}(X)=\operatorname{Pic}(X),\qquad x\longmapsto c_1(x)=\det(x),$$

and

$$K_1(X)=\pi_1Fil^1K(X)\longrightarrow H^{1,1}_{mot}(X)=\Gamma(X,\mathcal O_X)^\times,\qquad z\longmapsto\det(z).$$

The first determinant/Pic map is the actual natural perfect-complex determinant map, with the alternating graded-line convention, and on [E]−rank(E) it is the determinant line of E. It is not inferred by comparing Picard groups only on affine trivializations. No smooth projection is identified here with a singular motivic projection without a separate functorial comparison.

## Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. They enter through the supplied enhanced perfect K-model in [F2] at step 1.1 and through the unit-section and frame-torsor/derived-sections constructions in [F3] at steps 2.1–3.1. In particular the torsor supplier uses Choice to select local torsor sections. Stack comparison uses the compatible universe-bounded smooth big Nisnevich site; evaluation and derived sections use the specified small sites.

**Given:** Choice, the stated universe and site-size bounds, the smooth scheme, the actual EM projection and its canonical gr¹ comparison.

**Goal:** Identify both homotopy-group maps with the fixed first-Chern/determinant operations.

[F1] [lem-author-16f30f6b95cb-lowweight-zero-projection-rank](item-lem-author-16f30f6b95cb-lowweight-zero-projection-rank) identifies the first-stage groups. [thm-author-16f30f6b95cb-lowweight-em-map-normalizations](item-thm-author-16f30f6b95cb-lowweight-em-map-normalizations) identifies Ω∞gr¹K with the actual line-bundle stack $BG_m$ via c₁.

[F2] [thm-author-16f30f6b95cb-lowweight-determinant-one-type-input](item-thm-author-16f30f6b95cb-lowweight-determinant-one-type-input) supplies the canonical perfect-complex determinant/Pic map and its first-Postnikov description, with local $\pi_0K=\mathbb Z$ and π₁K=$G_m$ through the actual rank/determinant maps.

[F3] [lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard](item-lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard) proves q₁κ=id as a stack map under [A1]. Under the same assumptions, [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant) supplies the actual K₁ determinant and its section through the specified enhanced realizations. [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors) fixes the frame-torsor conventions for Pic and units on the specified small Nisnevich sites; its inverse uses Choice to select a set-indexed family of local torsor sections, followed by effective descent. These inherited uses enter steps 2.1–3.1.

## Proof
1.1 Work in Nisnevich sheaves of spaces on Sm_k. The rank-zero K-space S=Ω∞Fil¹K is connected as a SHEAF, even though S(X) may have many components: at a henselian local stalk the rank map K₀→Z is an isomorphism by [F2]. Its sheaf of fundamental groups is $G_m$ by determinant, since the positive-degree first-stage map is an isomorphism by [F1]. Thus τ≤1S is $BG_m$ with its identification fixed by the actual determinant map in [F2]. A map from S to $BG_m$ factors uniquely through this pointed one-type. [F1, F2, A1]

2.1 The map on fundamental-group sheaves induced by κ is the unit section, hence is an isomorphism at local stalks by [F2] and [F3]. Since q₁κ=id by [F3], the fundamental-group map of q₁ is its inverse, namely determinant. Full faithfulness of the pointed one-type classification in [F2] therefore identifies q₁:S→$BG_m$ with the actual determinant/Pic map itself, as a map of Nisnevich stacks after the canonical truncation. This retains all descent morphisms and thus determines global Picard classes; the fact that an invertible sheaf is locally trivial has not been used to erase its global class. [F2, F3, step 1.1, A1]

3.1 Evaluate this equality of actual maps at X and take π₀ and π₁. By [F1] their source groups are reduced K₀ and K₁, and their target groups, under [F3], are Pic(X) and Γ(X,$O_X$)×. By the determinant construction [F2], its π₀ is the class of the determinant graded line after passing to rank zero, which is the usual first Chern class and is det(E) on a vector bundle; its π₁ is the matrix-compatible determinant characterized in [F3]. These are exactly the two formulas, with positive sign fixed in [F3]. [F1, F2, F3, step 2.1, A1] ∎
