---
title: The hypercomplete derived-localization model on the actual general site
status: published
research_item: lem-author-7113c087ecba-general-localization
dependency_level: 11
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv:2309.08463v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.1, printed p. 11, opening and item 1; Section 3.3, printed p.
        14, opening through (3.4) and the following topology paragraph.
      statement: Section 2.1 specifies stable presentable derived targets and the
        sheaf reflector. Section 3.3 fixes the qcqs prime-field cdh site.
      hypotheses: A site and stable presentable coefficient infinity-category; here
        unbounded integer complexes. The cdh site uses qcqs schemes over a prime
        field and both finite-presentation conditions in (3.4). Retain the local
        U-in-V-in-W bounds. No weight or invertibility hypothesis is needed for
        the framework.
      reading_limits: Checked these primary PDF-text passages in this assignment.
        Sheafification foundations are imported through the declared
        ordinary-source supplier. No reconstruction, page-image reading, check
        of its motivic comparisons, or PDF-byte pinning is claimed.
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-integers](https://alphabetamath.cc/item/def-integers)
- [math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)
- [math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules)
- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv:2309.08463v1) · Section 2.1, printed p. 11, opening and item 1; Section 3.3, printed p. 14, opening through (3.4) and the following topology paragraph. `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice. Retain the qcqs-site supplier's Grothendieck universes $U\in V$, with $\omega\in U$ and $F\in U$, and assume a further Grothendieck universe $W$ with $V\in W$. Fix the same qcqs prime-field cdh site $\mathcal C_F$ built from scheme data in $U$, with its chosen skeleton and topology; it is $V$-small. Use abelian groups whose underlying sets belong to $V$ and unbounded cochain complexes. Hypercover coproduct index sets belong to $V$, and products of values, including the countable products in product totalizations, are formed in $V$. Form the presheaf, sheaf and complex categories and their localizations in $W$, and use these same bounds for derived sections. Apply the linear supplier with its universe pair $(U,V)$ renamed $(V,W)$, its site equal to $\mathcal C_F$, and its coefficient ring equal to the integer ring $\mathbb Z$. These are size hypotheses, not assertions of universe existence.

Let $\mathcal P$ be abelian-group presheaves on this site and $\mathcal S$ its abelian sheaves, with natural transformations as morphisms. Let $a:\mathcal P\to\mathcal S$ be abelian sheafification and $i:\mathcal S\to\mathcal P$ inclusion. Use the cochain, cohomology, quasi-isomorphism, K-injectivity and derived-category conventions of the linear and derived-sections suppliers. For a presheaf complex $C$ define $L^F_{\mathrm{cdh}}C=Ri\,aC$: choose a K-injective sheaf resolution $aC\to I$ and regard $I$ as a presheaf complex. This defines a resolution-independent reflector on $D(\mathcal P)$, with $a\dashv Ri$ and $Ri$ fully faithful. It localizes at the maps inducing isomorphisms on all associated cohomology sheaves; a complex is local precisely when its unit to this localization is an equivalence. Its local objects are exactly the hypercover-descent complexes, using the linear supplier's matching-map and product-totalization conventions at the stated bounds. This defines the general-site version without modifying the completed narrower finite-type definition.

## Localization convention
In comparisons using both reflectors, write $L^{h,F}_{\mathrm{cdh}}=L^F_{\mathrm{cdh}}=Ri\,a$ for the hypercomplete reflector constructed in this item.

For the ordinary convention, use the ordinary-source supplier's stable derived infinity-category $\mathcal D_V(\mathbb Z)$ of unbounded complexes of $V$-small abelian groups, with quasi-isomorphisms inverted and standard cohomological grading. Set $\mathcal P^o=\operatorname{Fun}(\mathcal C_F^{\mathrm{op}},\mathcal D_V(\mathbb Z))$, formed in $W$; its diagrams and natural transformations are homotopy coherent. Let $\mathcal S^o\subseteq\mathcal P^o$ be the full subcategory satisfying ordinary covering-family/Čech cdh descent: values on formal families are products, covering-family Čech comparisons are equivalences to the corresponding cosimplicial limits, and the empty-cover comparison requires value zero on the empty scheme. The ordinary-source supplier supplies the sheafification adjunction $a^o:\mathcal P^o\rightleftarrows\mathcal S^o:i^o$, with $i^o$ the fully faithful inclusion. Write $L^{o,F}_{\mathrm{cdh}}=i^o a^o$. Its unit $P\to i^o a^oP$ is universal for maps from $P$ to ordinary sheaves, with the adjunction understood on coherent mapping spaces. This is the ordinary source reflector on the same site and within the same bounds.

These notations do not identify the two reflectors on arbitrary unbounded inputs. In the ordinary convention, the source notation $D(\mathbb Z)$ denotes the enhanced target $\mathcal D_V(\mathbb Z)$, rather than only its homotopy category. No lift of an arbitrary homotopy-category-valued diagram to a coherent diagram is asserted here. The hypercover criterion proved below concerns $L^{h,F}_{\mathrm{cdh}}$ on strict presheaf complexes; the particular ordinary-locality consequences and compatible models used by consumers remain their separate arguments.

## Facts & Assumptions
[A1] Choice is retained for the chosen site skeleton and the imported K-injective resolution and derived inclusion/evaluation constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[A2] Grothendieck universes have the transitivity, pairing, power-set and indexed-union closure properties of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). The extra bound $V\in W$ is assumed; $U$ continues to bound scheme data. The smaller universe of the linear supplier is instantiated by $V$, not by $U$.

**Given:** The fixed site, Choice and the enlarged universe, value, hypercover-index and product bounds in the Statement.

**Goal:** Construct the reflector and prove its local-equivalence, unit and hypercover-descent criteria on this same site.

[F1] [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies the $V$-small qcqs prime-field site, skeleton, topology and representative-based evaluation convention. [def-derived-sections-on-sites](item-def-derived-sections-on-sites) and [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supply abelian sheaves, unbounded cochain complexes, K-injective resolutions and their choice-independent derived evaluation. The latter's External input also identifies abelian sheaves with modules over the sheaf associated to the constant integer presheaf, preserving evaluation.

[F2] [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input) supplies exact sheafification, the derived adjunction $a\dashv Ri$, full faithfulness of $Ri$, the resolution model for $Ri\,a$, its local-equivalence and unit criteria, and its unbounded hypercover characterization. It specifies representables, augmented matching maps, products on formal families and product totalization. Its universe pair, site and coefficient ring are instantiated as in the Statement.

[F3] [math:def-integers](https://alphabetamath.cc/item/def-integers) defines $\mathbb Z$ as equivalence classes of pairs of natural numbers. [math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring) supplies its commutative unital ring structure. [math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules) identifies abelian groups and integer modules, including their morphisms, by the unique integer-multiplication action.

[F4] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies the ordinary source's stable derived target, coherent presheaf framework and ordinary cdh sheafification adjunction, on precisely the qcqs prime-field site and with scheme-data universe $U$, coefficient universe $V$ and ambient universe $W$. Only this foundational interface is used, independently of its weight, finite-coefficient and motivic comparison data. The covering-family interpretation uses products on formal families and coherent limits. Reference 0 documents the source target and reflector convention (§2.1) and the site (§3.3); the existing supplier, rather than [F2], supplies this ordinary reflector.

## External input
Reference 0 records the ordinary framework used through [F4]. Its stable-derived target and sheafification existence are imported; they are not proved by the strict-complex hypercover model in [F2]. The two-step argument below specializes the supplied interfaces at the stated bounds. It makes no comparison equivalence between their ambient categories or reflectors.

## Proof
1.1 By [F1], the object and total arrow sets of $\mathcal C_F$ belong to $V$. Sieves are subsets of the arrow set; the topology is a subset of the set of object-sieve pairs, so also belongs to $V$ by [A2]. Transitivity gives $\omega\in V$. Finite-product and power-set closure put $\mathbb Z\subseteq\mathcal P(\omega\times\omega)$ from [F3] in $V$; [F3] supplies its commutative unital ring laws. Universe closure also bounds representable values, matching families and the products of $V$-indexed families of $V$-small sets: the indexed union of their underlying sets belongs to $V$, and each product is a subset of the set of functions into that union. This includes countable totalization products. Since $V\in W$, collections of $V$-small algebraic structures, presheaves, sheaves and cochain complexes, and their structure maps, can be encoded by sets in $W$; their localizations are formed there as in [F2]. Thus all size and ring hypotheses of [F2] hold for $(V,W)$, $\mathcal C_F$ and $\mathbb Z$. Applying [F3] objectwise identifies abelian presheaves with integer-module presheaves, compatibly with restrictions and morphisms; the corresponding sheaf identification is also recorded in [F1]. Under [A1], [F2] therefore gives exact abelian sheafification, K-injective sheaf resolutions, $a\dashv Ri$ and $aRi\simeq\mathrm{id}$, hence full faithfulness. Its resolution model represents $Ri\,aC$ by $iI$, compatibly with the derived evaluation of [F1], and is independent of the chosen resolution. [A1, A2, F1, F2, F3, construct]

2.1 By [F2], exactness gives $H^n(aC)\cong aH^n(C)$, so the inverted maps are precisely the sheafified-cohomology equivalences. The unit is represented by $C\to iaC\to iI$; applying $a$ gives the resolution $aC\to I$, a quasi-isomorphism. The localization and unit criteria of [F2] now identify the local objects exactly as stated. Its hypercover criterion applies to this same site by step 1.1 and identifies these local objects with complexes satisfying every hypercover comparison, with the specified $V$-small formal families and product totalizations. This retains the unbounded claim and the entire qcqs prime-field site, without a dimension, enough-points or separated finite-type restriction. For the separate ordinary convention, [F4] applies with the same $U\in V\in W$, prime field, qcqs scheme data and topology of [F1]. Use its supplied coherent limits at these same bounds; its coefficient values and covering-family index sets are $V$-small, and its presheaf categories are formed in $W$. Its supplied left adjoint and fully faithful inclusion therefore give $L^{o,F}_{\mathrm{cdh}}=i^o a^o$ with the stated unit universal property on $\mathcal P^o$. This uses only its ordinary framework; no motivic comparison, finite coefficient or invertibility condition is applied. The hypercover result above remains in the strict presheaf-complex model, and no identification of the two reflectors on arbitrary inputs is inferred. [A1, A2, F1, F2, F4, step 1.1] ∎
