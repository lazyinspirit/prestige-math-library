---
title: Smooth motivic comparison
status: published
research_item: prop-smooth-motivic-comparison
dependency_level: 15
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 4, property (4); p. 13, Proposition 6.1 discussion
      statement: Property (4) records the smooth Bloch-complex and classical motivic
        comparisons and agreement of the motivic and slice filtrations. The
        proof of Proposition 6.1 uses the diagonal Chow identification and
        degree-seven, weight-three vanishing on a smooth threefold.
      hypotheses: "Property (4): X is smooth over a field and j is nonnegative, within
        the article qcqs conventions. The cited part of Proposition 6.1 uses a
        smooth scheme of dimension three. The local proposition below uses
        smooth finite-type schemes and states the foundational assumptions of
        its selected suppliers explicitly."
      reading_limits: Read the frozen article text at property (4), printed p. 4, and
        the opening proof of Proposition 6.1, printed p. 13. These passages
        support statement provenance; no fresh PDF image inspection is claimed.
        Also checked the primary Elmanto–Morrow v1 PDF extraction at Theorem
        1.1(9) and Section 3.1, including the classical cycle and slice
        definitions. The substantial comparison is used through the declared
        smooth-comparison input, without reconstructing its proof. The
        all-integer translation, dimension-independent vanishing, constant
        negative-stage extension and selected-realization size premises are
        local supplier applications, not verbatim article assertions.
---

PDF p. 4: Property (4); PDF p. 13: Smooth groups in Proposition 6.1

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)
- [lem-author-91088613574d-quasi-isomorphism](item-lem-author-91088613574d-quasi-isomorphism)
- [lem-author-91088613574d-cycle-reindex](item-lem-author-91088613574d-cycle-reindex)
- [lem-author-91088613574d-filtered-images](item-lem-author-91088613574d-filtered-images)
- [thm-author-91088613574d-smooth-comparison-input](item-thm-author-91088613574d-smooth-comparison-input)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [lem-adjudicate-d6ce097ccb62-finite-type-qcqs](item-lem-adjudicate-d6ce097ccb62-finite-type-qcqs)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension)
- [` Vector bundles on singular surfaces and threefolds · PDF p. 4, property (4); p. 13, Proposition 6.1 discussion `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied motivic and cycle constructions. Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, $j\geq0$ and $i\in\mathbb Z$. The Elmanto–Morrow complex $\mathbb Z(j)_{\mathrm{mot}}(X)$ is equivalent in the derived category of abelian groups to $z^j(X,\bullet)[-2j]$, where homological degree $n$ is placed in cochain degree $-n$. Hence $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^j(X,2j-i)$, and these groups agree with classical Voevodsky motivic cohomology. In particular $H^{2r,r}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^r(X)$ for every integer $r\geq0$, and $H^{7,3}_{\mathrm{mot}}(X,\mathbb Z)=0$, including the case of a smooth threefold.

For the filtration assertion in the selected local perfect-$K$-theory realization, additionally fix compatible nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, large enough for the schemes, sheaf complexes and coherent diagrams used by the supplied constructions, with each category being localized small in the next universe. Small spaces and spectral indexing diagrams are $U$-small, their infinity-categories are formed in $V$, and the infinity-category of those categories in $W$; enlarge this fixed hierarchy if required by the perfect-complex realization. Existence of these universes is an additional size assumption, not a consequence of Choice. Under these conventions, the motivic filtration of $K(X)$ agrees, by a natural multiplicative filtered equivalence, with the filtration arising from Voevodsky's slice filtration. Their image filtrations agree after the stage-zero identifications with $K(X)$ are transported along this equivalence. Both towers use the same constant extension below stage zero when integer filtration indices are compared.

Here smoothness and finite type concern the structure morphism $X\to\operatorname{Spec}k$. The group $CH^j(X,n)$ is degree-$n$ homology of Bloch's cycle complex, with negative degrees zero, and $CH^r(X)$ is codimension-$r$ cycles modulo principal-divisor rational equivalence. The spectrum $K(X)$ is nonconnective $K$-theory of perfect complexes, with $K_i(X)=\pi_iK(X)$ for every integer $i$. The motivic tower is decreasing; its image filtration uses transition-to-zero maps at nonnegative stages and the identity augmentations of the constant extension at negative stages. The classical complex and slice filtration are the constructions specified by the imported smooth-comparison input. Multiplicative filtered equivalence means equivalence of coherent towers preserving transitions, units, products and their higher compatibilities.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-motivic-filtration](item-def-motivic-filtration)

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[thm-author-91088613574d-smooth-comparison-input](item-thm-author-91088613574d-smooth-comparison-input)

[lem-author-91088613574d-cycle-reindex](item-lem-author-91088613574d-cycle-reindex)

[lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)

## Facts & Assumptions
**Given:** The Axiom of Choice, the compatible motivic and cycle size bounds, the field $k$, smooth finite-type $k$-scheme $X$, nonnegative integer $j$ and integer $i$ above; for the filtered assertion, also the compatible perfect-$K$ universe hierarchy and size bounds specified in the Statement.

**Goal:** Establish both comparisons under their respective hypotheses, the stated cohomological consequences and the image-filtration agreement.

[A1] For the complex comparison as well as the filtered comparison, use the fixed nested universes and scheme, site and coefficient bounds of [def-motivic-cohomology](item-def-motivic-cohomology), with $\omega$ in its scheme-data universe. These additional size assumptions, together with [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharge the premises of the selected local motivic functor. They are retained when [F1] and [F2] are used in steps 1.1 and 2.1; the more detailed perfect-$K$ bounds in the Statement are retained for the filtered assertion.

[F1] The imported Elmanto–Morrow input supplies the smooth derived equivalence and classical identification; its filtered comparison is invoked with its additional Choice and fixed-universe premises. It also specifies the classical complex and slice tower. [thm-author-91088613574d-smooth-comparison-input](item-thm-author-91088613574d-smooth-comparison-input)

[F2] Motivic cohomology is cohomology of the Elmanto–Morrow complex on qcqs field-schemes. [def-motivic-cohomology](item-def-motivic-cohomology)

[F3] Equivalent derived complexes have isomorphic cohomology; the cohomology of the shifted cycle complex is higher Chow homology in degree $2j-i$. [lem-author-91088613574d-quasi-isomorphism](item-lem-author-91088613574d-quasi-isomorphism), [lem-author-91088613574d-cycle-reindex](item-lem-author-91088613574d-cycle-reindex), [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[F4] Degree-zero cycle homology is the ordinary Chow group, and negative cycle homology vanishes. [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range)

[F5] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the Choice hypotheses of the selected local Bloch model in [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) and [lem-bloch-chow-and-negative-range](item-lem-bloch-chow-and-negative-range). For the filtered assertion, retain both Choice and the fixed nested-universe size assumptions of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), as required by [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) and [def-motivic-filtration](item-def-motivic-filtration). This invokes their selected perfect-complex realization and tower under all their foundational hypotheses. The universe definition specifies closure conditions; it does not assert existence. No foundational necessity for the published comparison theorem is inferred.

[F6] The field, scheme-over-base, finite-type and smoothness conditions are those of [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) and [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). The existing local result [lem-adjudicate-d6ce097ccb62-finite-type-qcqs](item-lem-adjudicate-d6ce097ccb62-finite-type-qcqs) proves that every finite-type scheme over a field is quasi-compact and quasi-separated, in the sense of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme). It applies to the given structure morphism without a separatedness hypothesis and checks the qcqs domain of the motivic and perfect-$K$ interfaces.

[F7] Abelian groups form an abelian category, so the cochain and derived-category conventions apply. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). Use $C^q=C_{-q}$ and $d^q=\partial_{-q}$, and $C[m]^q=C^{q+m}$ with differential $(-1)^m d_C^{q+m}$. Here $m=-2j$. Use the supplied derived-category size convention; no additional general Hom-set assertion is made.

[F8] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies coherent decreasing towers, their augmentations and image groups; [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies their coherent multiplicative structure under the fixed Choice and universe assumptions. At nonnegative stages the image filtration uses transitions to stage zero. An equivalence, with stage-zero identifications transported so its zeroth component becomes the identity on $K(X)$, identifies these images by [lem-author-91088613574d-filtered-images](item-lem-author-91088613574d-filtered-images). The integer-indexed convention of [def-motivic-filtration](item-def-motivic-filtration) uses the canonical extension in [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension): precompose the tower and its category-of-operators map with $r(a)=\max(a,0)$ and the induced operator functor. This construction retains all products and their coherences. The same precomposition carries a multiplicative equivalence to an equivalence of the extensions. Apply it to both towers. Below zero they have stage $K(X)$ with identity augmentation, so both image groups are $K_i(X)$. A decreasing tower has no transition from a negative stage to zero.

## Proof
1.1 By the finite-type field-scheme result in [F6], $X$ is in the qcqs domain; its smoothness and nonnegative weight meet [F1]. Under the Choice premise for the local cycle model in [F5], apply [F1] to obtain the asserted derived equivalence and classical identification. Apply cohomology using [F2], [F3] and the conventions in [F7]: degree $i$ of the shift is degree $i-2j$ of the reindexed complex, hence homological degree $2j-i$. This gives $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)\cong CH^j(X,2j-i)$ for every integer $i$, with the same classical identification. Taking $i=2r$ and $j=r$ gives index zero and hence $CH^r(X)$ by [F4]. Taking $i=7$ and $j=3$ gives index $-1$, hence zero by [F4], independently of dimension. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 For the filtration assertion, invoke the selected perfect-$K$ realization, motivic tower and coherent multiplicative interface under both Choice and the additional fixed-universe assumptions of [F5] and [F8]. The filtered comparison of [F1] applies by [F6] and yields the natural multiplicative equivalence on the nonnegative towers. Transport the classical stage-zero identification with $K(X)$ along its zeroth component. For each nonnegative stage, compatibility with the transition to zero gives the commuting square of [F8], so the images in $K_i(X)$ agree. Apply the operator precomposition in [F8] to the two towers and their multiplicative equivalence. Functors preserve equivalences, so the resulting equivalence retains all filtered multiplicative coherences. Its components below zero are the zeroth component, under the transported stage-zero identification. Both negative-stage augmentations are identities on $K(X)$ and have image $K_i(X)$. This compares all integer-indexed image groups without a nonexistent negative-stage transition to zero. Together with step 1.1 it proves every assertion under its stated hypotheses. [given, F1, F5, F6, F8, step 1.1] ∎
