---
title: Every actual motivic stage on the empty scheme is zero
status: published
research_item: lem-adjudicate-5eb16844831b-empty-motivic-stages
dependency_level: 14
sources:
  references:
    - title: Kasprowski–Winges, Algebraic K-theory of stable infinity-categories via
        binary complexes
      url: https://arxiv.org/pdf/1805.06175v2
      locator: Section 2.1, formula (2.6), p.3; Section 2.2, paragraph immediately
        before Lemma 2.12, p.4
      statement: The cofiber Grothendieck group of the idempotent completion of a
        small stable infinity-category is pi_0 of its nonconnective BGT
        K-theory.
      hypotheses: A small stable infinity-category; for an idempotent-complete
        category the completion is unnecessary.
      reading_limits: Freshly read the primary arXiv v2 extracted PDF text at Section
        2.1 (printed pp. 2–3), especially formula (2.6), and the opening
        paragraph of Section 2.2 (printed p. 4) immediately before Lemma 2.12.
        Use only the recalled nonconnective functor and cofiber-group comparison
        for the small zero stable category. Their foundational proofs are
        imported through the declared supplier, not reconstructed. No fresh
        reading of the earlier carrier’s inaccessible MPG mirror is claimed.
---

PDF p. 9: Lemma 4.2 proof: empty-scheme case of eventual stage vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)
- [` Kasprowski–Winges, Algebraic K-theory of stable infinity-categories via binary complexes · Section 2.1, formula (2.6), p.3; Section 2.2, paragraph immediately before Lemma 2.12, p.4 `](https://arxiv.org/pdf/1805.06175v2)


## Statement
Assume the Axiom of Choice and the fixed universes of the selected perfect-complex realization. For the empty scheme over any field, every integer stage of the actual motivic filtration is a zero spectrum:
$$F^r_{\mathrm{mot}}K(\varnothing)\simeq0\qquad(r\in\mathbb Z).$$
This includes the source filtration over either prime field and its restriction to any standing field, and is independent of any empty-dimension convention.

## Facts & Assumptions
**Given:** The empty scheme, the actual unital multiplicative filtration, Choice, and fixed universes.

**Goal:** Prove zero stage spectra before invoking any nonempty-scheme dimension result.

[F1] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) identify the enhanced perfect category and its nonconnective K-theory. The selected realization is used under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies its degree-zero homotopy with the cofiber Grothendieck group for an essentially small idempotent-complete stable category, computed using an equivalent small presentation.

[F2] [def-motivic-filtration](item-def-motivic-filtration) identifies stage zero with $K$ and supplies the integer-indexed actual tower. [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies the unit $\eta:\mathbb S\to F^0$ and the unital action $F^0\wedge F^r\to F^r$. [def-stable-spectra-interface](item-def-stable-spectra-interface) identifies $\pi_0E$ with homotopy classes of maps $\mathbb S\to E$ and supplies smash, its zero object and unit constraints.

[F3] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) includes the empty scheme. Under [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme), it is qcqs: its underlying space and all intersections of affine opens are empty, and every open cover of the empty space admits the empty finite subcover. [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) specifies module sheaves and their morphisms, and [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) specifies the complexes used in [F1]. The sheaf axiom in [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space) applies also to the empty cover: every compatible family of local sections, including the empty family, has a unique glued section.

## External input
Reference 0 records the comparison used through [F1]: the cofiber Grothendieck group of the idempotent completion of a small stable infinity-category is its degree-zero nonconnective K-group. We apply it only to the one-object zero stable category, which is already idempotent complete. The actual perfect-complex realization and invariance under its equivalent small presentation come from the declared nonconnective K-theory interface; the comparison is imported, while its application and the unital argument below are local.

## Proof
1.1 The empty scheme lies in the qcqs domain by [F3]. Apply the sheaf axiom to the empty cover of its only open set, the empty set: the empty compatible family glues uniquely. Thus a module sheaf has exactly one section there, necessarily its zero section. Every module sheaf is therefore zero, and there is a unique module-sheaf morphism between any two. The cochain-complex category and its derived localization in [F1] are consequently equivalent to the one-object zero category. Every complex is perfect since the local condition is vacuous. Use the one-object small presentation of this zero stable category; it is idempotent complete. Its cofiber Grothendieck group has only the generator $[0]$, and the cofiber sequence $0\to0\to0$ imposes $[0]=[0]+[0]$, so this group is zero. Applying [F1] under Choice gives $\pi_0K(\varnothing)=0$. [F1, F3, given]

2.1 By [F2], $\pi_0F^0=0$, so the unit $\eta:\mathbb S\to F^0$ is nullhomotopic. For any integer $r$, the unit law identifies the composite $F^r\simeq\mathbb S\wedge F^r\xrightarrow{\eta\wedge1}F^0\wedge F^r\to F^r$ with $1_{F^r}$. The composite is nullhomotopic: the zero map smashed with $F^r$ factors through $0\wedge F^r\simeq0$, since smash preserves the zero object. Hence $1_{F^r}=0$ in the homotopy category, so the zero maps between $F^r$ and the zero spectrum are inverse there, and $F^r\simeq0$. This holds for all integers $r$. [F2, step 1.1] ∎
