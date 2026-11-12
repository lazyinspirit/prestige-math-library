---
title: A coherent comparison of the particular open restriction
status: published
research_item: lem-author-149a02132c3b-restriction-diagram
dependency_level: 16
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [thm-author-149a02132c3b-em-regular-input](item-thm-author-149a02132c3b-em-regular-input)
- [thm-author-149a02132c3b-open-natural-classical-input](item-thm-author-149a02132c3b-open-natural-classical-input)
- [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)
- [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [def-article-conventions](item-def-article-conventions)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the support and comparison constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and let $T\subset X$ be a closed subset contained in the smooth locus $U=X_{\mathrm{smooth}}$ of $X\to\operatorname{Spec}k$. Equip $T$ with its reduced induced structure, and put $V=U\setminus T$ and $W=X\setminus T$.

Use the enhanced derived category $\mathcal D_\infty(\mathbb Z)$ of unbounded cochain complexes and the stable category of spectra $\mathrm{Sp}$. Let $\mathsf E:\mathcal D_\infty(\mathbb Z)\to\mathrm{Sp}$ be the ordinary Eilenberg–MacLane realization in the classical comparison interface, with $\pi_{-a}\mathsf E(K)=H^a(K)$ for every integer $a$. Write $\mathbb Z(3)_{\mathrm{mot}}$ for the weight-three motivic complex functor and $z^3(-,\bullet)$ for Bloch's unnormalized admissible-cycle complex. Reindex homological degree $n$ as cochain degree $-n$ before shifting; cochain shifts mean $K[b]^m=K^{m+b}$ with differential multiplied by $(-1)^b$.

For the actual arrow $V\hookrightarrow U$, there is an equivalence of coherent arrow diagrams in spectra
$$[\mathsf E(\mathbb Z(3)_{\mathrm{mot}}(U))\to\mathsf E(\mathbb Z(3)_{\mathrm{mot}}(V))]\simeq[\mathsf E(z^3(U,\bullet)[-6])\to\mathsf E(z^3(V,\bullet)[-6])].$$
Here an arrow diagram is a coherent functor from the category with two objects and one nonidentity arrow to $\mathrm{Sp}$; equivalence means an equivalence in that functor category, allowing a zigzag of natural equivalences. The right-hand arrow is the realization of actual cycle restriction. The comparison square is supplied before taking homotopy groups. For every integer $a$, its $\pi_{-a}$ arrow identifies motivic restriction $H^{a,3}_{\mathrm{mot}}(U,\mathbb Z)\to H^{a,3}_{\mathrm{mot}}(V,\mathbb Z)$ with $H_{6-a}z^3(U,\bullet)\to H_{6-a}z^3(V,\bullet)$. In particular, the $H^6$ arrow on the underlying complexes is ordinary Chow restriction $\mathrm{CH}^3(U)\to\mathrm{CH}^3(V)$. A compatible $\mathbb Z$-linear refinement of the entire comparison is not supplied by these interfaces.

## Statement references

[math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[def-article-conventions](item-def-article-conventions)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

## Facts & Assumptions
**Given:** The hypotheses in the Statement, including Choice and the fixed compatible universe bounds.

**Goal:** Compare the actual coherent restriction arrows in spectra and deduce their cohomology-group arrows.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) supplies the actual open pair, its reduced support convention, and the fact that $U,V$ are regular Noetherian qcqs schemes and smooth separated finite type over the perfect field $k$. [thm-author-149a02132c3b-em-regular-input](item-thm-author-149a02132c3b-em-regular-input) supplies the coherent regular comparison from the motivic arrow to the particular cdh arrow, without finite type over the prime field.

[F2] [thm-author-149a02132c3b-open-natural-classical-input](item-thm-author-149a02132c3b-open-natural-classical-input) supplies the ordinary realization $\mathsf E$ and the equivalence of spectrum-valued functors on smooth separated finite-type $k$-schemes and open immersions. Its cycle arrow is the realization of actual open restriction, with $\pi_{-a}\mathsf E(z^3(Y,\bullet)[-6])=H_{6-a}z^3(Y,\bullet)$. [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range) identifies $H_0z^3(Y,\bullet)$ with ordinary $\mathrm{CH}^3(Y)$ compatibly with open restriction.

[F3] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the nested universe bounds of [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), using [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). The universes contain the fields and scheme data; their existence is a separate size assumption. These discharge the inherited foundational hypotheses of the geometry and comparison constructions. No additional choice of pointwise comparison maps is made.

[F4] [def-article-conventions](item-def-article-conventions) supplies algebraically closed fields, $k$-schemes, the affine finite-type convention and chain dimension. [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism) defines the smooth locus as the points of smoothness of a locally finitely presented morphism; [F1] verifies local finite presentation and supplies its open scheme structure here.

[F5] [def-motivic-cohomology](item-def-motivic-cohomology) fixes $\mathbb Z(3)_{\mathrm{mot}}$ and $H^{a,3}_{\mathrm{mot}}=H^a(\mathbb Z(3)_{\mathrm{mot}})$. Its coherent enhancement and actual restriction maps are supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) defines the admissible-cycle complex, its differential and homology. The Statement explicitly fixes the reindexing and signed cochain shift.

[F6] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the coherent stable category $\mathrm{Sp}$ and its integer homotopy groups. The arrow-category meaning of the comparison and the realization's cohomological indexing are fixed in the Statement and [F2].

## Proof
1.1 Under [F3], apply the geometry assertion of [F1] to the stated $X,T,U,V,W$, with the conventions of [F4]. It makes $U,V$ regular Noetherian qcqs schemes, smooth separated finite type over the perfect field $k$, and gives their actual open arrow. The motivic functor and its enhancement are those of [F5]. Apply the regular comparison of [F1] at weight three to this arrow; it gives an equivalence of coherent complex-valued arrow diagrams from the motivic arrow to the particular cdh arrow. Apply the functor $\mathsf E$ of [F2] to obtain an equivalence of arrow diagrams in the category of [F6]. The regular comparison requires no finite generation over the prime field. [F1, F2, F3, F4, F5, F6, given]

2.1 Restrict the open-natural equivalence of [F2] over this fixed perfect $k$ to $V\hookrightarrow U$, at weight three. Compose it with step 1.1, inverting only equivalences of coherent spectrum-valued diagrams. This gives the displayed arrow equivalence, whose cycle arrow is actual restriction after realization. Apply $\pi_{-a}$: by [F2] and [F5] its two rows become the stated motivic and cycle-homology arrows. Explicitly, reindexing the cycle differential gives $H^a(z^3(Y,\bullet)[-6])=H^{a-6}(z^3(Y,\bullet))=H_{6-a}z^3(Y,\bullet)$ for $Y=U,V$; the even shift introduces no differential sign, and the equality respects the restriction chain maps. At $a=6$, the open-compatible degree-zero identification of [F2] gives ordinary Chow restriction. The coherent diagram comparison precedes all these group identifications; no $\mathbb Z$-linear lift or surjectivity is inferred. [F1, F2, F5, F6, step 1.1] ∎
