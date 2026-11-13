---
title: Deligne-to-ribbon functor is a covering
status: draft
research_item: lem-deligne-ribbon-cover-artin-tits-normalisers
dependency_level: 21
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 23–24, Lemma 6.2 and its proof
      statement: In spherical type the Deligne-to-ribbon functor is a groupoid
        covering; elementary ribbons lift to wall crossings and the two sides of
        each defining ribbon-lcm relation lift to equal positive paths from a
        fixed chamber.
      hypotheses: A spherical Coxeter diagram and a fixed subset J, with the relative
        chamber, Deligne groupoid and reduced ribbon groupoid constructions of
        the article.
      reading_limits: Read the frozen extracted text of Lemma 6.2 and its proof. This
        citation attributes the article claim and method; it is not a proof
        premise.
---

PDF p. 23: ` Lemma 6.2 `; PDF p. 24: ` Lemma 6.2 `

## Prerequisites

- [lem-deligne-ribbon-functor-artin-tits-normalisers](item-lem-deligne-ribbon-functor-artin-tits-normalisers)
- [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)
- [prop-ribbon-lcm-relations-artin-tits-normalisers](item-prop-ribbon-lcm-relations-artin-tits-normalisers)
- [lem-ribbon-lcm-lift-artin-tits-normalisers](item-lem-ribbon-lcm-lift-artin-tits-normalisers)
- [prop-geodesic-additivity-artin-tits-normalisers](item-prop-geodesic-additivity-artin-tits-normalisers)
- [def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)
- [thm-finite-wall-crossing-input-artin-tits-prerequisites](item-thm-finite-wall-crossing-input-artin-tits-prerequisites)
- [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)
- [def-deligne-ribbon-mapping-artin-tits-normalisers](item-def-deligne-ribbon-mapping-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers)
- [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)
- [lem-finite-wall-path-artin-tits-normalisers](item-lem-finite-wall-path-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a finite-rank spherical Coxeter system, so $W$ is finite, and fix $J\subseteq S$. Let $\mathcal D^+(J)$ be the positive category of the relative chamber arrangement and $\mathcal D(J)$ its groupoid completion. Let $\mathcal R(J)$ be the reduced ribbon groupoid and $\mathcal G:\mathcal D(J)\to\mathcal R(J)$ the functor sending a chamber label $(x,I)$ to $I$ and a simple crossing with index $a\notin I$ to the elementary ribbon $\mu_{a,I}$.

The functor $\mathcal G$ is a groupoid covering: for every chamber $C$ and every arrow of $\mathcal R(J)$ with source $\mathcal G(C)$, there is exactly one arrow of $\mathcal D(J)$ with source $C$ and that image. Each elementary ribbon lifts from $(x,I)$ to the corresponding simple wall crossing. The two sides of each defining ribbon-lcm relation lift from a fixed source chamber to equal morphisms of $\mathcal D^+(J)$.

## Statement references

[lem-deligne-ribbon-functor-artin-tits-normalisers](item-lem-deligne-ribbon-functor-artin-tits-normalisers)

[def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)

[def-deligne-ribbon-mapping-artin-tits-normalisers](item-def-deligne-ribbon-mapping-artin-tits-normalisers)

[prop-ribbon-lcm-relations-artin-tits-normalisers](item-prop-ribbon-lcm-relations-artin-tits-normalisers)

## Facts & Assumptions

[F1] The stated assignment extends to the functor $\mathcal G$. Chamber objects are labelled by pairs $(x,I)$, and a crossing with index $a$ has image $\mu_{a,I}$ and target $(xv_{a,I},K)$, where $K$ is the target of that ribbon. [lem-deligne-ribbon-functor-artin-tits-normalisers](item-lem-deligne-ribbon-functor-artin-tits-normalisers) [def-deligne-ribbon-mapping-artin-tits-normalisers](item-def-deligne-ribbon-mapping-artin-tits-normalisers)

[F2] For every chamber label $(x,I)$ and every $a\notin I$, the spherical hypothesis makes $W_{I\cup\{a\}}$ finite. The simple crossing with index $a$ exists, is adjacent to $(x,I)$ and has a reverse crossing. Each directed adjacency has a unique crossing index at its source. Consequently each elementary ribbon has exactly one positive crossing lift at each chamber over its source, and its crossing endpoint map between the relevant chamber fibres is a bijection. [thm-finite-wall-crossing-input-artin-tits-prerequisites](item-thm-finite-wall-crossing-input-artin-tits-prerequisites) [prop-adjacent-wall-formula-artin-tits-normalisers](item-prop-adjacent-wall-formula-artin-tits-normalisers)

[F3] The reduced ribbon groupoid is presented by elementary ribbons and their formal inverses, with groupoid cancellation and the pairwise lcm relations for distinct indices as defining relations. Both sides of each such relation have the same source and target. [prop-ribbon-lcm-relations-artin-tits-normalisers](item-prop-ribbon-lcm-relations-artin-tits-normalisers)

[F4] For distinct $a,b\notin I$, the two elementary-ribbon paths in their lcm relation are the factorwise positive lifts of two standard expressions of the same element $q\in W$. A standard expression is a composable sequence of crossing elements whose product has length equal to the sum of their lengths. [lem-ribbon-lcm-lift-artin-tits-normalisers](item-lem-ribbon-lcm-lift-artin-tits-normalisers) [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[F5] A chamber path is geodesic precisely when the length of the product of its successive crossing elements equals the sum of their lengths. In $\mathcal D^+(J)$, geodesic paths with the same source and target represent the same morphism. The groupoid $\mathcal D(J)$ is generated by directed chamber crossings and their formal inverses. [prop-geodesic-additivity-artin-tits-normalisers](item-prop-geodesic-additivity-artin-tits-normalisers) [def-arrangement-groupoids-artin-tits-normalisers](item-def-arrangement-groupoids-artin-tits-normalisers)

[F6] For small, nonempty connected groupoids, a groupoid covering is a functor bijective on the set of arrows with each prescribed source. [def-groupoid-cover-artin-tits-normalisers](item-def-groupoid-cover-artin-tits-normalisers)

[F7] A chamber label is a pair $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum Coxeter length in $xW_I$; these labels are exactly the chamber objects of $\mathcal D(J)$. The objects of $\mathcal R(J)$ are the associates of $J$, namely the subsets $I$ with $W_I$ conjugate to $W_J$ in $W$, and its arrows form a set of finite products of elementary ribbons and their inverses. Every right coset of a standard parabolic subgroup has a minimum-length representative. [def-deligne-ribbon-mapping-artin-tits-normalisers](item-def-deligne-ribbon-mapping-artin-tits-normalisers) [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers) [prop-parabolic-minimum-interface-artin-tits-prerequisites](item-prop-parabolic-minimum-interface-artin-tits-prerequisites)

[F8] For every subset $J$ of a finite-rank Coxeter system, any two relative chambers are joined by a finite sequence of simple wall crossings. The empty sequence is allowed when the chambers coincide. [lem-finite-wall-path-artin-tits-normalisers](item-lem-finite-wall-path-artin-tits-normalisers)

## Proof
**Given:** The spherical system and fixed subset $J$ in the Statement. Composition of paths and arrows is read from left to right. The length $\ell(w)$ is the Coxeter word length of $w\in W$.


**Proof technique:** direct.

**Goal:** Verify smallness, nonemptiness and connectedness, and establish equality of lifted defining relations and the unique lifting property for every ribbon-groupoid arrow.

1.1 The identity has length zero, so $(e,J)$ satisfies the label conditions in [F7]. Thus $\mathcal D(J)$ is nonempty and $\mathcal R(J)$ contains its image $J$ by [F1]. Both groupoids are small. Indeed, the labels form a subset of the finite set $W\times\mathcal P(S)$; directed chamber crossings and finite words in them and their formal inverses form sets, and the morphisms of $\mathcal D(J)$ are a quotient of such a set by [F5]. The ribbon objects form a subset of $\mathcal P(S)$, and their morphisms form a set by [F7]. [F1, F5, F7, given]

1.2 Let $I$ be any object of $\mathcal R(J)$. By [F7], choose $y\in W$ with $y^{-1}W_Jy=W_I$, and let $x$ be the minimum-length element of $yW_I$. Write $x=yu$ with $u\in W_I$. Conjugation by $u$ preserves $W_I$, so $x^{-1}W_Jx=u^{-1}W_Iu=W_I$, equivalently $W_Jx=xW_I$. Hence $(x,I)$ is a chamber label and $\mathcal G(x,I)=I$. Thus $\mathcal G$ is surjective on objects, independently of the covering conclusion. [F1, F7, choose]

1.3 Fix a chamber $(x,I)$. By [F2], each elementary ribbon $\mu_{a,I}$ has a unique positive crossing lift from this chamber. A formal inverse ribbon also has a unique lift from a chamber over its source: use the inverse of the unique positive crossing whose endpoint is that chamber, which exists and is unique because the endpoint map in [F2] is bijective. The lift of an inverse letter is therefore the inverse of the corresponding positive lift at the appropriate source. Successive lifting gives a unique lifted arrow in $\mathcal D(J)$ for every word in elementary ribbons and their formal inverses, once its starting chamber is fixed. [F1, F2, given]

2.1 By [F8], any two objects of $\mathcal D(J)$ are joined by finitely many simple crossings, whose composite is an arrow of $\mathcal D(J)$ by [F5]. This supplier applies to every $J\subseteq S$, including $J=S$, so $\mathcal D(J)$ is connected. For any two objects $I,K$ of $\mathcal R(J)$, step 1.2 supplies chamber objects above them. An arrow between these chambers has image under $\mathcal G$ an arrow $I\to K$. Thus $\mathcal R(J)$ is connected as well. Together with step 1.1, both groupoids satisfy the domain hypotheses of [F6]. [F1, F5, F6, F8, step 1.1, step 1.2]

2.2 Consider a defining lcm relation for distinct $a,b\notin I$ and lift both positive sides from $(x,I)$. By [F4], their crossing-element sequences are standard expressions for the same $q$, so their products both equal $q$ and their lengths are additive. By [F1], both lifted paths end at the same first coordinate $xq$; their second coordinates agree because the two ribbon paths have the same target by [F3]. Thus their endpoint labels agree. By [F5] both paths are geodesic, and the defining relations of $\mathcal D^+(J)$ identify them. This proves the asserted equality of the two positive lifts. [F1, F3, F4, F5, step 1.3]

3.1 If a ribbon word is changed by a defining lcm relation inside a longer word, the lifted prefixes have the same endpoint, step 2.2 identifies the lifted relation segments, and the lifted suffixes consequently agree. The same holds for a relation used in reverse. Inserting or deleting an adjacent formal inverse pair leaves the lifted composite unchanged, because the two lifted arrows are inverses by step 1.3. Thus any two words representing the same ribbon arrow have equal lifts from a fixed starting chamber. By the presentation in [F3], every ribbon arrow therefore has a well-defined lift, and functoriality in [F1] shows that its image is the prescribed arrow. [F1, F3, step 1.3, step 2.2]

4.1 Conversely, every arrow of $\mathcal D(J)$ is represented by a word in directed chamber crossings and their formal inverses by [F5]. At each letter, its image is an elementary ribbon or its inverse. Uniqueness of the corresponding letter lift in step 1.3 shows inductively that the original word is the lift of its image word from its original source. If two arrows with that source have the same image, step 3.1 makes their lifted image words equal; hence the two arrows are equal. Existence and uniqueness hold for every prescribed source. Since step 2.1 verifies the domain hypotheses of [F6], that definition makes $\mathcal G$ a covering. [F1, F5, F6, step 1.3, step 2.1, step 3.1] ∎

## Source notes

The article citation attributes the statement and its geodesic-lift method. The argument above uses the declared suppliers, including the distinct-index qualification for nontrivial lcm relations; it does not assume the covering claim as a premise.
