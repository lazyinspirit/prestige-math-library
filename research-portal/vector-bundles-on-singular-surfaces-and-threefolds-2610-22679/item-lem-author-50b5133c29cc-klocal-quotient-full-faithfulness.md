---
title: Full faithfulness of the perfect triangulated quotient
status: published
research_item: lem-author-50b5133c29cc-klocal-quotient-full-faithfulness
dependency_level: 13
sources:
  references:
    - title: The Stacks Project, Quotients of triangulated categories
      url: https://stacks.math.columbia.edu/tag/05RA
      locator: Section 13.6, Lemma 13.6.6, Definition 13.6.7 (05RI), and Lemma 13.6.8.
      statement: For a full triangulated subcategory A of a triangulated category C,
        maps with cone in A form a two-sided multiplicative system. The Verdier
        quotient C/A is its localization, with an exact quotient functor. An
        exact functor annihilating A factors through it as an exact functor.
      hypotheses: C is triangulated and A is a full triangulated subcategory with
        inherited triangles. Apply to the ordinary homotopy categories of
        perfect complexes and the full supported subcategory. Use the supplied
        small equivalent models when invoking the library calculus-of-fractions
        theorem; no local-smallness-only assertion is used.
      reading_limits: Read the statement and displayed proof of Lemma 13.6.6,
        Definition 13.6.7, and the statement and short proof of Lemma 13.6.8 at
        the linked section. These categorical facts are imported; their
        underlying localization and triangulated-structure machinery is not
        reconstructed here. The separate Math Library theorem supplies the roof
        construction. No scheme-localization or K-theory theorem is imported
        from this Stacks section.
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel)
- [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories)
- [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)
- [math:def-multiplicative-system-in-a-category](https://alphabetamath.cc/item/def-multiplicative-system-in-a-category)
- [math:thm-the-calculus-of-fractions-constructs-the-localization](https://alphabetamath.cc/item/thm-the-calculus-of-fractions-constructs-the-localization)
- [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness)
- [` The Stacks Project, Quotients of triangulated categories · Section 13.6, Lemma 13.6.6, Definition 13.6.7 (05RI), and Lemma 13.6.8. `](https://stacks.math.columbia.edu/tag/05RA)


## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and $T=X\setminus U$, the actual restriction induces a fully faithful triangulated functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U).$$
The quotient inverts precisely maps whose restriction to $U$ is invertible.

## Facts & Assumptions
**Given:** The actual enhanced restriction and its ordinary homotopy functor. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Verify fullness and faithfulness, without assuming essential surjectivity.

[A1] Choice is inherited when invoking the actual restriction and kernel interface in [F1], the supplied enhanced perfect categories, and the choice of small models in [F4]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) identifies the exact restriction kernel and the denominator class $S$ consisting of maps whose cone is supported on $T$. By [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), its ordinary homotopy category is a full subcategory closed under both shifts and cones, with the inherited distinguished triangles. Thus it is a full triangulated subcategory of $h\mathrm{Perf}(X)$.

[F2] Clauses (a) and (b) of [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) supply roofs for morphisms between restricted perfect objects and the equalizer property for maps with identical restriction. These are assertions in the ordinary sheaf-derived categories identified with the homotopy categories in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes).

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs: the underlying space is quasi-compact, and intersections of two affine opens are quasi-compact. Quasi-compactness of the open $U$ means quasi-compactness of its underlying space. Write $j:U\hookrightarrow X$. The notation $h$ means the ordinary homotopy category of the supplied perfect category, with the shifts and distinguished triangles specified in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). Fully faithful means bijective on every Hom set. A triangulated functor means an exact functor in the sense of [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories), including its natural shift comparison.

[F4] [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small equivalent models of $\mathrm{Perf}(X)$ and its full supported subcategory under the stated AC and universe assumptions. Passing to ordinary homotopy categories gives models with sets of objects and arrows. Transport their triangles, support subcategory and restriction along these equivalences. This satisfies the smallness alternative in the calculus theorem used in [F5].

[F5] The imported Stacks input recorded below states that cone denominators for a full triangulated subcategory form a two-sided multiplicative system, in the sense of [math:def-multiplicative-system-in-a-category](https://alphabetamath.cc/item/def-multiplicative-system-in-a-category). It identifies the Verdier quotient as the localization in [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms) and gives exact factorization of an exact functor killing the subcategory. For the small models in [F4], [math:thm-the-calculus-of-fractions-constructs-the-localization](https://alphabetamath.cc/item/thm-the-calculus-of-fractions-constructs-the-localization) supplies single roofs $E\xleftarrow{c}Q\xrightarrow{a}F$, representing $q(a)q(c)^{-1}$, where $q$ is the quotient functor and $c\in S$. Refining by a denominator gives the same quotient morphism.

## Proof
1.1 Use the small models of [F4]; equivalence transports the following argument back to the actual categories. Since restriction kills the kernel, [F5] factors it as an exact functor through the Verdier quotient. Given a morphism $b:j^*E\to j^*F$, [F2] gives perfect $Q$ and $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b=(j^*a)(j^*c)^{-1}$. By [F1], $c\in S$. Thus the quotient roof $E\xleftarrow{c}Q\xrightarrow{a}F$ maps to $b$, proving fullness on all object pairs. [A1, F1, F2, F3, F4, F5]

2.1 Every quotient morphism is a single roof $(c,a)$ by [F5], whose multiplicative-system and smallness hypotheses were supplied in [F1] and [F4]. If its restriction is zero, then $j^*a=0$ because $j^*c$ is invertible. The equalizer property in [F2], applied to $a$ and the zero map, gives $d:Q'\to Q$ with $j^*d$ invertible and $ad=0$. By [F1], $d\in S$; refining the roof by $d$ gives $(cd,ad)=(cd,0)$, which represents zero by [F5]. The exact induced functor is additive, so its map on each abelian Hom group has zero kernel and is injective. Together with step 1.1 this proves full faithfulness. Finally, $q(f)$ invertible implies $j^*f$ invertible by functoriality; conversely $j^*f$ invertible implies $f\in S$ by [F1], so $q(f)$ is invertible. This proves the asserted precise denominator class. [F1, F2, F3, F4, F5, step 1.1] ∎

## External input
The cone-denominator multiplicative-system assertion and exact Verdier factorization in [F5] are imported from [The Stacks Project, Lemma 13.6.6, Definition 13.6.7 and Lemma 13.6.8](https://stacks.math.columbia.edu/tag/05RA), with the hypotheses and reading limits in the reference contract. The roof construction is the declared Math Library theorem. The two-step proof of full faithfulness is a local composition of these facts with the restriction-kernel and perfect-morphism inputs; this item does not claim to reprove the imported categorical machinery.
