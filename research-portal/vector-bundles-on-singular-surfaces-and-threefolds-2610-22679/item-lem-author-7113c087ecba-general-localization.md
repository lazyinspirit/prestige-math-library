---
title: The hypercomplete derived-localization model on the actual general site
status: draft
research_item: lem-author-7113c087ecba-general-localization
dependency_level: 12
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input)


## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the derived-sections suppliers. Fix the completed qcqs prime-field cdh site $\mathcal C_F$. Let $a$ be its abelian sheafification and $i$ its inclusion of abelian sheaves into presheaves. For a presheaf complex $C$ define $L^F_{\mathrm{cdh}}C=Ri\,aC$: choose a K-injective sheaf complex $aC\to I$ and evaluate $I$ as a presheaf. This is localization at maps inducing isomorphisms on all associated cohomology sheaves; a complex is local precisely when its unit to this localization is an equivalence. By the exact linear input, hypercover-descent complexes are local in this same model. This defines the general-site version without modifying the completed narrower finite-type definition.

## Localization convention
In comparisons using both reflectors, write $L^{h,F}_{\mathrm{cdh}}=L^F_{\mathrm{cdh}}=Ri\,a$ for the hypercomplete reflector constructed in this item. Write $L^{o,F}_{\mathrm{cdh}}$ for ordinary covering-family/Čech sheafification of $D(\mathbb Z)$-valued presheaves, as in the source comparisons. These notations do not identify the two reflectors on arbitrary unbounded inputs. The hypercover criterion used here concerns $L^{h,F}_{\mathrm{cdh}}$; the particular ordinary-locality consequences used by consumers are separate arguments.

## Facts & Assumptions

[A1] Choice and the stated bounds are used for the K-injective sheaf resolution and the derived inclusion/evaluation model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site), [def-derived-sections-on-sites](item-def-derived-sections-on-sites), [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input).

[F2] [thm-author-7113c087ecba-linear-input](item-thm-author-7113c087ecba-linear-input).

## Proof
1.1 The site in [F1] is explicitly small after the fixed universe choice, so the completed arbitrary-site supplier gives K-injective resolutions. Abelian sheafification is exact: matching families preserve kernels, filtered refinements commute with finite limits of groups, and sheaf epimorphisms are locally surjective. Hence degreewise sheafification preserves quasi-isomorphisms. Its adjunction with inclusion yields $a\dashv Ri$ on derived categories, and $aRi\simeq\mathrm{id}$ by the sheaf resolution. Thus $Ri$ is fully faithful and $Ri\,a$ is the stated localization. [F1, construct, A1]

2.1 Its local equivalences are exactly the sheafified-cohomology equivalences, since $a$ is exact; the unit becomes a quasi-isomorphism under $a$. The linear source criterion [F2] identifies objects satisfying every hypercover descent with the local objects of this localization. These constructions apply to this actual site, independently of the narrower completed finite-type site. [F1, F2, step 1.1] ∎
