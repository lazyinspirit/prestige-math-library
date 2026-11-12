---
title: The actual EM comparison commutes with the Picard first-Chern map
status: published
research_item: lem-adjudicate-6e70d30b9793-em-picard-square
dependency_level: 18
sources:
  references:
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes
        (primary arXiv HTML)
      url: https://arxiv.org/html/2508.09915v1
      locator: Corollary 6.26 (weight-one clause), statement and proof; Construction
        4.35/(4.36); Remark 4.37; Theorem 4.39(4) and Remark 4.45
      statement: "For X smooth over a field, the actual first-Chern map c1^A:
        RΓ_Nis(X,G_m)[-1] → Z(1)^A(X) is a natural equivalence of complexes. It
        is Construction 4.35 on this locus and the restriction of the qcqs map
        in Remark 4.45. Remark 4.37 supplies the complex-valued refinement."
      hypotheses: Apply only to smooth finite-type schemes over the prime field F, in
        the fixed qcqs domain and compatible universe-bounded Nisnevich sites.
        Corollary 6.26 allows any field; neither characteristic nor primes are
        inverted. No equivalence on singular schemes, or mixed-characteristic
        extension of the present application, is imported.
      reading_limits: In adjudication adjudicate-48f0a0ead6bc, opened the primary HTML
        and read Corollary 6.26 with its printed proof, Construction 4.35 and
        (4.36), Remark 4.37, Theorem 4.39(4) with the left-Kan explanation of
        (3)–(4), and Remark 4.45. The HTML displays August 24, 2026 despite the
        v1 URL. The rational and Beilinson–Lichtenbaum comparisons invoked by
        the corollary are imported, not reconstructed. No unread PDF identity,
        full-paper review, or fresh acceptance is claimed. Separately read the
        supplied EM-primary-extract.txt at original PDF pp.31–34 and 36 to check
        the actual comparison, source left-Kan construction and reduced-line
        normalization; this does not reprove the imported foundational
        comparisons. This consumer-maintenance pass read the current declared
        supplier interfaces, including the general linear derived-inclusion
        input, and claims no new primary-source reading or independent
        acceptance.
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
- [lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space](item-lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [math:thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category](https://alphabetamath.cc/item/thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category)
- [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input)
- [` Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes (primary arXiv HTML) · Corollary 6.26 (weight-one clause), statement and proof; Construction 4.35/(4.36); Remark 4.37; Theorem 4.39(4) and Remark 4.45 `](https://arxiv.org/html/2508.09915v1)


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

## Definition
Use the same compatible universe-bounded Nisnevich sites as the supplied constructions, on qcqs $F$-schemes and their smooth finite-type subsites. Retain the fixed nested Grothendieck universes with $\omega$ in the smaller universe required by the smooth-comparison supplier; their existence is a standing size assumption, independent of Choice. A perfect field means one whose nonconstant irreducible polynomials are separable. Write $\mathrm{Sm}_k$ for smooth finite-type $k$-schemes. The prime subfield $F$ is the intersection of the subfields of $k$; its classification identifies it with $\mathbb Q$ or $\mathbb F_p$ by a map preserving $1$.

Here $\mathrm{Pic}(X)$ is the nerve of the groupoid of invertible $\mathcal O_X$-modules and their isomorphisms, pointed by $\mathcal O_X$, and $\mathbb G_m(X)=\Gamma(X,\mathcal O_X)^\times$ is the units sheaf. Derived sections, cochain shifts and their Eilenberg–Mac Lane realization use the supplied conventions; in particular $\pi_n(HC)=H^{-n}(C)$. The natural pointed equivalence $\mathrm{Pic}(X)\simeq\Omega^\infty H(R\Gamma_{\rm Nis}(X,\mathbb G_m)[1])$ identifies the loop sheaf with $\mathbb G_m$ by the identity. The displayed square uses this equivalence and suppresses $H$ on coefficient complexes.

## Definition references

[math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

[lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space](item-lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

## Facts & Assumptions
[A8] The current smooth comparison fixes the ordinary Voevodsky/Bloch model and the actual augmented EM comparison, with its AC premise. [prop-smooth-motivic-comparison](item-prop-smooth-motivic-comparison), [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input) supplies the actual EM graded products and complex Picard map. [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input) specifies the actual multiplicative maps, their naturality and regular-Noetherian equivalence hypotheses. EM Lemma 5.1/Definition 5.2 fixes its Picard map by (4.9), and the proof describes its Nisnevich-local left-Kan construction. Lemma 5.12, with Construction 5.11, identifies its normalized reduced line class as the actual edge image of $1-[\mathcal O(-1)]$. BEM's Picard map is the actual determinant/edge square (4.36), extended by (4.42).

[F2] [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag) and [lem-adjudicate-6e70d30b9793-picard-map-detection](item-lem-adjudicate-6e70d30b9793-picard-map-detection) supply the unit-induced ring zigzag and actual Picard-map detection; the completed EM Picard supplier identifies the actual normalized first class, not an independently chosen Picard-group isomorphism.

[F3] BEM Corollary 6.26, imported in reference 0, supplies the actual natural equivalence $c_1^{\mathbb A}:R\Gamma_{\rm Nis}(-,\mathbb G_m)[-1]\simeq\mathbb Z(1)_{\mathbb A}$ on smooth schemes over a field, specifically on $\mathrm{Sm}_F$. This is the map of BEM Construction 4.35, extended as in Remark 4.45, with the complex-valued refinement of Remark 4.37. [BEM primary source](https://arxiv.org/html/2508.09915v1)

[F4] [def-derived-sections-on-sites](item-def-derived-sections-on-sites) supplies the derived category of abelian sheaves on each fixed site and its derived evaluation. In this sheaf-derived category, [math:thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category](https://alphabetamath.cc/item/thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category) gives $\operatorname{Hom}_{D(\operatorname{Ab}_{\rm Nis})}(A[-1],B[-1])=\operatorname{Hom}_{\operatorname{Ab}_{\rm Nis}}(A,B)$ for abelian sheaves $A,B$. [lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space](item-lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space) identifies $\mathrm{Pic}$ with the shifted derived units space and its loop sheaf with $\mathbb G_m$. Thus the homomorphism of sheaves underlying such a complex map is read on the loop sheaf after shifting by two. The passage from the actual derived-presheaf maps to this Hom formula uses the fully faithful derived inclusion in [F6], rather than sheafification alone. The formula is used for these single-sheaf complexes only.

[F5] [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield) defines the smallest subfield $F\subseteq k$, and [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) identifies it with one of the prime fields allowed by the EM supplier. The regular-Noetherian and qcqs conditions for smooth finite-type $k$-schemes, even for an arbitrary extension $k/F$, are established by [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison).

[F6] Apply [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input) with $\Lambda=\mathbb Z$ to the same bounded smooth prime-field Nisnevich site $\mathcal C=\mathrm{Sm}_F$. Use its site-and-coefficient universe and its next category universe from the already stipulated compatible hierarchy, retaining AC and $\omega$ in the smaller universe. Write $\mathcal P$ for abelian presheaves on $\mathcal C$ and $\mathcal S$ for abelian sheaves. For sheafification $a$ and inclusion $i$, the supplier gives $a\dashv Ri$, $aRi\simeq\mathrm{id}$, and fully faithful $Ri:D(\mathcal S)\to D(\mathcal P)$. A K-injective sheaf resolution $B\to I$ represents $RiB$ by the single presheaf complex $U\mapsto I(U)$, whose evaluations are exactly $R\Gamma_{\rm Nis}(U,B)$ in [F4]. Shifting that same resolution models the shifted derived-sections presheaf. This identifies morphisms between these derived-evaluation objects with sheaf-derived morphisms, including their common-site naturality. It does not identify ordinary and hypercomplete localization on arbitrary complexes.

## External input
Reference 0 imports the actual represented weight-one equivalence in [F3], on smooth field schemes only, with its complex-valued refinement. Its deeper rational and Beilinson–Lichtenbaum inputs remain external. The structured comparisons, their base independence and equivalence loci, the source left-Kan construction, and the normalized reduced-line identification are supplied by [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input) and [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison). The following composition and shifted-heart application are locally authored; this item is not a claimed local proof of the imported comparisons.

## Proof
**Given:** $F\subseteq k$, smooth schemes, the specified coefficient maps, AC and the stated universe bounds.

**Goal:** Prove compatibility of the actual first-Chern maps before using it to identify higher operations.

1.1 On smooth $F$-schemes, EM defines its spectral first class using the actual graded map (4.9). Remark 4.37 identifies its composite with $\eta$ as the canonical classical-to-cdh counit. The classical filtration here is the KGL slice filtration. BEM Theorem 7.5 and Remark 7.6 identify its prime-field cdh-local Kan extension with the restriction of BEM's cdh construction, including the filtered augmentation, not just its graded groups. The map (7.14) is induced from the inverse of (4.19) on smooth $\mathbb Z$-schemes; after the canonical base-identification counit, its composite back to the represented filtration is the classical slice comparison. EM Lemma 5.12 identifies its reduced line class with the graded image of $1-[\mathcal O(-1)]$. Since these are maps of augmented filtered objects, the structured comparison takes this to the edge image of the same virtual line class in the represented slice tower. By BEM Construction 4.35 and its determinant square (4.36), this is exactly the unit-normalized class $c_1^{\mathbb A}(\mathcal O(1))$: $\det(1-[L^\vee])=L$. Apply Picard-map detection in [F2] to $\mathbb Z(\star)_{\mathbb A}[2\star]$, whose negative weights vanish and whose normalized class gives PBF. The resulting homotopy identifies the full Picard-space maps. The two first-class composites are the actual complex maps with common source $S=R\Gamma_{\rm Nis}(-,\mathbb G_m)[-1]$ and target $T=\mathbb Z(1)_{\mathbb A}$. On the smooth prime-field site, [F6] realizes $S$ as $Ri(\mathbb G_m[-1])$ using the same K-injective derived evaluation as [F4]. The actual equivalence in [F3] places $T$ in this same fully faithful image. Consequently the two actual derived-presheaf morphisms are identified, by [F6], with morphisms between these shifted sheaf objects in $D(\mathcal S)$. Apply the shifted-heart Hom formula in [F4]. The preceding homotopy of Picard-space maps gives the same homomorphism of loop sheaves $\mathbb G_m\to\mathbb G_m$ after shifting by two, using the fixed loop identification of [F4]. Hence the corresponding sheaf-derived morphisms are equal. Full faithfulness in [F6] then identifies the original two complex maps as a single homotopy class in the common derived-presheaf model. Realizing this equality gives the asserted homotopy of natural spectral maps, retaining the smooth restriction diagrams. Equality after sheafification alone has not been used to infer equality of arbitrary presheaf maps. This uses the single-sheaf calculation, rather than a faithfulness assertion for underlying spaces of arbitrary spectra. [F1, F2, F3, F4, F5, F6, A8, A9]

2.1 This square extends as a square of presheaf maps on all qcqs $F$-schemes. Explicitly, the proof of EM Lemma5.1 identifies the source Picard coefficient presheaf as the Nisnevich sheafification of the left Kan extension of its restriction to smooth $F$-algebras (before sheafification the source is $(\tau^{\leq1}R\Gamma_{\rm Zar}(-,\mathbb G_m))[-1]$). Both targets are Nisnevich local. By the left-Kan/sheafification adjunction, maps out of that source are determined by the actual smooth-affine maps. Step 1.1 therefore identifies the composites as maps after this construction. BEM constructs its natural first-class map on all qcqs schemes by cdh-local left Kan extension over $\mathbb Z$, followed by the Nisnevich-to-cdh source map (Theorem 4.39(4) and Remark 4.45). Restrict this natural transformation to $F$-schemes. Since its target is Nisnevich local, the same source adjunction determines it from its restriction to smooth $F$-algebras. Thus the equality in step 1.1 extends to this particular BEM map, without assuming that extension over $\mathbb Z$ and extension over $F$ are literally the same construction. No comparison of affine Picard groups is being used. [F1, F4, step 1.1]

3.1 Restrict step 2.1 along $\mathrm{Sch}_k\to\mathrm{Sch}_F$. Smooth finite-type $k$-schemes are regular Noetherian as absolute $F$-schemes, irrespective of finite generation of $k/F$. EM Theorem6.1(2) makes $\eta$ an equivalence on them, and BEM Corollary1.11 makes $\gamma$ an equivalence in equal characteristic, with the canonical field identification of Theorem7.5/Remark7.9. Thus the claimed square and equivalence hold for every fixed perfect $k$. Multiplication and units are those of the structured graded maps in [F1]. Inverting these equivalences in the functor category retains the square and all restriction coherences. [F1, F2, F5, step 1.1, step 2.1]

4.1 Transport the actual Spitzweck Picard-space map along the unital field zigzag of [F2]. By [F1], its reduced projective-line class is the unit-adjoint class in the matched Tate-coordinate convention; these unital maps preserve it. The represented theory has zero negative weights and PBF with its actual first class, so the Picard-map detector of [F2] identifies this transported full Picard-space map with $c_1^{\mathbb A}$. Combine this homotopy with the EM square from step 3.1 and invert the equivalences as natural transformations. This gives the claimed orientation-preserving Spitzweck/classical-to-EM comparison. [F1, F2, A9, step 3.1] ∎
