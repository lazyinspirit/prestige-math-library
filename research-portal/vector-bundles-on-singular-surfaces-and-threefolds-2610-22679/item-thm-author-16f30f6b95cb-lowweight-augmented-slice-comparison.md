---
title: External actual augmented EM and smooth slice tower comparison
status: published
research_item: thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
dependency_level: 14
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Sections 2.1–2.2, pp.11–12; Section 3.1, (3.2), pp.12–13; Theorem
        3.5(1),(8) and Remark 3.6, pp.14–16; Constructions 4.34 (4.8)–(4.9),
        4.36 and Remark 4.37, pp.31–32; Lemma 5.1 and Definition 5.2, pp.33–34;
        Construction 5.5, p.34; Lemma 5.10, Construction 5.11 and Lemma 5.12,
        p.36; Theorem 6.1(2), Remark 6.3, Corollary 6.4 with proof and footnote
        12, pp.44–45.
      statement: The canonical classical-to-EM filtered comparison is an equivalence
        on smooth prime-field schemes and is the identity at stage zero. The
        canonical EM-to-cdh comparison is an augmented filtered equivalence on
        regular Noetherian schemes over the prime field. The cdh filtration is
        identified with the KGL slice filtration, with classical coefficients on
        smooth schemes over extension fields. The first-Chern map is defined
        from the weight-one classical comparison; the canonically lifted reduced
        class 1-[O(-1)] gives +c1(O(1)) in the projective-line calculation.
      hypotheses: F is Q or F_p. All evaluations lie in the qcqs F-scheme domain.
        Theorem 6.1(2)/Remark 6.3 requires regular Noetherian X, with no
        finite-generation condition on an extension field k/F. Corollary 6.4
        itself applies on smooth F-schemes, not automatically on smooth
        k-schemes. Lemmas 5.1 and 5.12 use the specified EM comparison and
        filtered module lift, not a chosen abstract Picard-group isomorphism.
      reading_limits: This repair read the primary v1 PDF text at the listed
        comparison statements and constructions, including the full Lemma 5.1
        and Lemma 5.12 arguments, Construction 5.11, Corollary 6.4 proof and
        footnote 12. The local cached v1 PDF was additionally read at printed
        pp.33–34 and 36 to check the normalization formulas. The deep
        regular-comparison proof is imported, not reconstructed. Theorem 3.5 and
        Remark 3.6 attribute their cdh/classical and cdh/slice foundations to
        then-in-preparation [7]; no proof of [7] in EM v1 was read or supplied.
        This source-version qualification is retained. No full-paper reading or
        separate arbitrary-field Picard-map compatibility proof is claimed.
---

PDF p. 9: Actual low-weight motivic projections and their normalization

## Prerequisites

- [def-motivic-filtration](item-def-motivic-filtration)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Sections 2.1–2.2, pp.11–12; Section 3.1, (3.2), pp.12–13; Theorem 3.5(1),(8) and Remark 3.6, pp.14–16; Constructions 4.34 (4.8)–(4.9), 4.36 and Remark 4.37, pp.31–32; Lemma 5.1 and Definition 5.2, pp.33–34; Construction 5.5, p.34; Lemma 5.10, Construction 5.11 and Lemma 5.12, p.36; Theorem 6.1(2), Remark 6.3, Corollary 6.4 with proof and footnote 12, pp.44–45. `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds for the selected perfect-complex nonconnective $K$-theory and motivic-filtration realizations. Let $F$ be a prime field, meaning $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. Use the nonnegative convention $F^jE=E$ with identity transitions for $j\leq0$. On smooth $F$-schemes in the qcqs domain, the actual natural augmented filtered comparison is
$$\alpha_X:F^\bullet_{\mathrm{cla}}K(X)\longrightarrow F^\bullet_{\mathrm{mot}}K(X).$$
It is an equivalence, its stage-zero map is the identity of $K(X)$, and its graded maps are exactly EM (4.9). Thus it commutes with the actual stage-to-layer maps.

For $X$ smooth of finite type over an arbitrary extension field $k/F$, $X$ is regular Noetherian and qcqs. The actual natural comparison
$$\beta_X:F^\bullet_{\mathrm{mot}}K(X)\longrightarrow F^\bullet_{\mathrm{cdh}}KH(X)$$
is an augmented filtered equivalence over $K(X)\to KH(X)$. Here $KH$ is homotopy invariant $K$-theory. EM Remark 3.6 identifies the target with the tower obtained from the slice filtration of the representing motivic spectrum $KGL$. The comparison therefore identifies augmentations and induced cofibers, rather than only cohomology groups. The source-version qualification in External input is part of this contract.

A supported pair here is an open immersion $U\hookrightarrow X$, with closed complement $T=X\setminus U$, for which both $X$ and $U$ belong to the common qcqs domain of the selected comparison. For either tower $F^\bullet E$, with $E=K$ or $KH$ as appropriate, define
$$F^j_TE(X)=\operatorname{fib}(F^jE(X)\to F^jE(U)),\qquad E_T(X)=\operatorname{fib}(E(X)\to E(U)).$$
For every integer $j$ these form an augmented tower on $E_T(X)$, with $F^0_TE(X)\simeq E_T(X)$ and
$$\operatorname{gr}^j_TE(X):=\operatorname{cofib}(F^{j+1}_TE(X)\to F^j_TE(X))\simeq\operatorname{fib}(\operatorname{gr}^jE(X)\to\operatorname{gr}^jE(U)).$$
The natural comparison induces this supported tower map, commuting with augmentations, transitions and layer projections. It is an equivalence when the comparison is an equivalence at both $X$ and $U$: for $\alpha$, both are smooth $F$-schemes; for $\beta$, both are regular Noetherian $F$-schemes. In particular the latter applies when both are smooth finite-type $k$-schemes for any $k/F$. The notation $K_T$ in this statement means the restriction fiber; identification with $K$-theory of supported perfect complexes requires a separate localization theorem.

The EM first-Chern class is precisely the natural map of Lemma 5.1/Definition 5.2
$$c_1:R\Gamma_{\mathrm{Nis}}(-,\mathbb G_m)[-1]\longrightarrow\mathbb Z(1)_{\mathrm{mot}},$$
defined by the weight-one map (4.9) on smooth $F$-schemes. In the projective-line calculation, the canonical filtered lift of $1-[\mathcal O(-1)]$ has graded image $+c_1(\mathcal O(1))$, as in Construction 5.11/Lemma 5.12. The brackets denote the $K_0$ class of the tautological line. Supported comparison maps are the fibers of the specified natural maps with the same triangle convention; no extra sign is inserted. Compatibility with another theory's independently presented Picard map is a separate assertion.

## Facts & Assumptions
**Given:** The fields, schemes and open pair in the Statement, AC and the fixed compatible site and universe bounds.

**Goal:** Apply the precise imported tower maps on their actual domains and construct their supported comparisons with the specified normalization.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the inherited realization premises of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) and [def-motivic-filtration](item-def-motivic-filtration). The same fixed universes and site bounds are used for every restriction diagram. These are local construction premises, not additional geometric hypotheses attributed to EM.

[F1] Reference 0 imports the actual maps $\alpha$ and $\beta$, their augmentations, graded maps and equivalence loci. The classical tower, cdh tower and slice identification are the specific constructions named there; none is replaced by an arbitrary graded-group identification.

[F2] [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical) gives regular local rings on a smooth finite-type $k$-scheme by applying its geometric-regularity criterion to the trivial extension $k/k$. Here regular means regularity of all local rings. [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) supplies an affine cover by finite-type $k$-algebras. [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian) and [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) make those algebras Noetherian. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) defines a Noetherian scheme as a quasi-compact scheme with such a cover. [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) makes $X$ quasi-compact by evaluating the quasi-compact structure morphism over the one-point affine base. Under AC, [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) and [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) make every open in each Noetherian affine chart quasi-compact. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs by quasi-compactness of $X$ and of intersections of affine opens; separatedness is not required.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines the coherent fibers and cofibers in a stable infinity-category. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines augmented decreasing towers and the cofiber convention for graded pieces. [lem-filtered-support-exactness](item-lem-filtered-support-exactness) supplies the natural supported tower and its graded restriction-fiber sequence, without any descent or support-category localization assumption.

[F4] Reference 0 also imports the actual first-Chern map and canonical reduced-line lift in the Statement. In this notation $\mathbb G_m$ is the units sheaf, $R\Gamma_{\mathrm{Nis}}$ means derived sections for the Nisnevich topology, and $\mathbb Z(j)_{\mathrm{mot}}[2j]=\operatorname{gr}^j_{\mathrm{mot}}K$. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) supplies the Nisnevich topology: covers are étale families lifting points with their residue fields. [def-derived-sections-on-sites](item-def-derived-sections-on-sites) supplies derived sections on the chosen bounded sites, using the stated AC and universe premises. The imported map uses the site convention of EM Section 2.1; no identification of different sites is inferred from their names. The induced $H^2$ map is defined on the group of isomorphism classes of line bundles.

## External input
Reference 0 supplies the classical slice tower of Section 3.1, the cdh $KH$ tower of Theorem 3.5, the comparison maps of Constructions 4.34 and 4.36, and their equivalence assertions in Theorem 6.1(2)/Remark 6.3 and Corollary 6.4. Here the $KGL$ slice tower is the tower of effective covers of the motivic spectrum representing $KH$, evaluated as in Remark 3.6. Its existence and identification with the cdh tower are imported, rather than derived from the abstract stable-spectra interface. The first-Chern construction and reduced-line normalization are imported from Lemma 5.1/Definition 5.2 and Lemmas 5.10–5.12.

EM v1 states the cdh/slice identification in Remark 3.6 and attributes its proof to then-in-preparation [7]; that proof is not supplied or reconstructed here. Corollary 6.4 alone is not asserted over arbitrary $k$. The arbitrary-field application uses the regular-Noetherian EM-to-cdh map and the stated slice identification. The following local proof establishes the geometric application and support-fiber consequences of these precise external premises, without claiming a new foundational tower comparison.

## Proof
1.1 By [A1], interpret [F1] in the chosen coherent $K$ and motivic models. On the smooth prime-field domain, [F1] gives $\alpha$, its identity at stage zero, its equivalence and its precise graded maps. For a smooth finite-type $k$-scheme, [F2] gives regularity by taking $k/k$ in the smoothness criterion. Its finite-type affine cover consists of spectra of Noetherian rings, and it is quasi-compact, so it is a Noetherian scheme by [F2]. To check quasi-separatedness, take a finite subcover $V_1,\ldots,V_m$ of these affine charts using quasi-compactness (the empty case has the empty cover). For any open $W\subseteq X$, each $W\cap V_a$ is quasi-compact by the Noetherian-spectrum and open-compactness inputs of [F2]. An open cover of $W$ therefore has a finite subfamily covering each $W\cap V_a$; their finite union covers $W$. Thus every open of $X$ is quasi-compact, in particular each intersection of affine opens, and $X$ is qcqs by [F2]. Viewing it over $F$ changes no local ring or underlying scheme. Therefore [F1] applies to $\beta$ without any finite-generation assumption on $k/F$, giving the augmented filtered equivalence and the stated source-qualified slice identification. The imported normalization [F4] fixes the reduced-line sign before any support construction. [given, A1, F1, F2, F4]

2.1 Apply [F3] to each coherent restriction arrow on the supported pair. It produces exactly the displayed supported tower and graded fiber sequence, including their natural augmentation and layer projections. Naturality of $\alpha$ or $\beta$ gives a map between these restriction diagrams. If its maps at $X$ and $U$ are equivalences at every stage and at the augmentation, the diagrams defining their fibers are equivalent; the universal property of a limit then gives equivalences of their supported fibers. Applying the same cofiber construction identifies the supported layers and the actual stage-to-layer squares. Stage zero follows by taking the fibers of the stage-zero identifications on both terms. This uses equivalence at both terms, including in the smooth finite-type $k$ case of step 1.1. The construction retains the specified natural maps and the cofiber convention in [F3], so it introduces no independent sign choice into [F4]'s normalization and makes no support-category localization assertion. [F1, F3, F4, step 1.1] ∎
