---
title: The actual EM comparison commutes with the Picard first-Chern map
status: published
research_item: lem-adjudicate-6e70d30b9793-em-picard-square
dependency_level: 15
---

PDF p. 17: Corollary 6.9; integral Chern and support comparison

## Prerequisites

- [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)
- [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)
- [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)
- [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)
- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

## Statement
Assume the Axiom of Choice and the existing universe bounds. Let $F$ be the prime subfield of a perfect field $k$. Denote by $\eta:\mathbb Z(\star)_{\rm mot}\to\mathbb Z(\star)_{\rm cdh}$ the actual EM graded comparison, and by $\gamma:\mathbb Z(\star)_{\rm cdh}\to\mathbb Z(\star)_{\mathbb A}$ the canonical structured comparison to the represented slice theory. The canonical base-independent cdh identification is understood in this notation. On smooth finite-type $k$-schemes, the natural graded map $\theta=\gamma\eta$ is an equivalence and satisfies the actual Picard-space square
$$\theta_1[2]\,c_1^{\rm EM}\simeq c_1^{\mathbb A}:\mathrm{Pic}\longrightarrow\Omega^\infty\mathbb Z(1)_{\mathbb A}[2].$$
Together with the unit-induced field zigzag, this supplies an actual orientation-preserving comparison between Spitzweck/classical and EM coefficients. The assertion is integral, also in characteristic $p$.

## Statement references

[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection)

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

[thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input)

[prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison)

[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

## Facts & Assumptions
[A8] The current smooth comparison fixes the ordinary Voevodsky/Bloch model and the actual augmented EM comparison, with its AC premise. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input) specifies the actual multiplicative maps, their naturality and regular-Noetherian equivalence hypotheses. EM Lemma 5.1/Definition 5.2 fixes its Picard map by (4.9), and the proof describes its Nisnevich-local left-Kan construction. Lemma 5.12, with Construction 5.11, identifies its normalized reduced line class as the actual edge image of $1-[\mathcal O(-1)]$. BEM's Picard map is the actual determinant/edge square (4.36), extended by (4.42).

[F2] [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag) and [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection) supply the unit-induced ring zigzag and actual Picard-map detection; the completed EM Picard supplier identifies the actual normalized first class, not an independently chosen Picard-group isomorphism.

## Proof
**Given:** $F\subseteq k$, smooth schemes, the specified coefficient maps, AC and the stated universe bounds.

**Goal:** Prove compatibility of the actual first-Chern maps before using it to identify higher operations.

1.1 On smooth $F$-schemes, EM defines its spectral first class using the actual graded map (4.9). Remark 4.37 identifies its composite with $\eta$ as the canonical classical-to-cdh counit. The classical filtration here is the KGL slice filtration. BEM Theorem 7.5 and Remark 7.6 identify its prime-field cdh-local Kan extension with the restriction of BEM's cdh construction, including the filtered augmentation, not just its graded groups. The map (7.14) is induced from the inverse of (4.19) on smooth $\mathbb Z$-schemes; after the canonical base-identification counit, its composite back to the represented filtration is the classical slice comparison. EM Lemma 5.12 identifies its reduced line class with the graded image of $1-[\mathcal O(-1)]$. Since these are maps of augmented filtered objects, the structured comparison takes this to the edge image of the same virtual line class in the represented slice tower. By BEM Construction 4.35 and its determinant square (4.36), this is exactly the unit-normalized class $c_1^{\mathbb A}(\mathcal O(1))$: $\det(1-[L^\vee])=L$. Apply Picard-map detection in [F2] to $\mathbb Z(\star)_{\mathbb A}[2\star]$, whose negative weights vanish and whose normalized class gives PBF. The resulting homotopy identifies the full Picard-space maps. After Nisnevich sheafification on the smooth prime-field site, the source and target weight-one sheaves are both equivalent to $\mathbb G_m[-1]$ (classically and by BEM Corollary 6.26). A degree-zero map between two objects of the same shifted heart is determined by its homomorphism of abelian sheaves. That homomorphism is detected by $\pi_1$ after shifting by two and passing to the associated Picard-space map. The preceding homotopy in the functor category therefore identifies the spectral first-class maps on this site. This uses the single-sheaf calculation; it does not infer equality of arbitrary spectral maps from their underlying spaces. [F1, F2, A8, A9]

2.1 This square extends as a square of presheaf maps on all qcqs $F$-schemes. Explicitly, the proof of EM Lemma5.1 identifies the source Picard coefficient presheaf as the Nisnevich sheafification of the left Kan extension of its restriction to smooth $F$-algebras (before sheafification the source is $(\tau^{\leq1}R\Gamma_{\rm Zar}(-,\mathbb G_m))[-1]$). Both targets are Nisnevich local. By the left-Kan/sheafification adjunction, maps out of that source are determined by the actual smooth-affine maps. Step 1.1 therefore identifies the composites as maps after this construction. BEM constructs its natural first-class map on all qcqs schemes by cdh-local left Kan extension over $\mathbb Z$, followed by the Nisnevich-to-cdh source map (Theorem 4.39(4) and Remark 4.45). Restrict this natural transformation to $F$-schemes. Since its target is Nisnevich local, the same source adjunction determines it from its restriction to smooth $F$-algebras. Thus the equality in step 1.1 extends to this particular BEM map, without assuming that extension over $\mathbb Z$ and extension over $F$ are literally the same construction. No comparison of affine Picard groups is being used. [F1, step 1.1]

3.1 Restrict step 2.1 along $\mathrm{Sch}_k\to\mathrm{Sch}_F$. Smooth finite-type $k$-schemes are regular Noetherian as absolute $F$-schemes, irrespective of finite generation of $k/F$. EM Theorem6.1(2) makes $\eta$ an equivalence on them, and BEM Corollary1.11 makes $\gamma$ an equivalence in equal characteristic, with the canonical field identification of Theorem7.5/Remark7.9. Thus the claimed square and equivalence hold for every fixed perfect $k$. Multiplication and units are those of the structured graded maps in [F1]. Inverting these equivalences in the functor category retains the square and all restriction coherences. [F1, F2, step 1.1, step 2.1]

4.1 Transport the actual Spitzweck Picard-space map along the unital field zigzag of [F2]. By [F1], its reduced projective-line class is the unit-adjoint class in the matched Tate-coordinate convention; these unital maps preserve it. The represented theory has zero negative weights and PBF with its actual first class, so the Picard-map detector of [F2] identifies this transported full Picard-space map with $c_1^{\mathbb A}$. Combine this homotopy with the EM square from step 3.1 and invert the equivalences as natural transformations. This gives the claimed orientation-preserving Spitzweck/classical-to-EM comparison. [F1, F2, A9, step 3.1] ∎
