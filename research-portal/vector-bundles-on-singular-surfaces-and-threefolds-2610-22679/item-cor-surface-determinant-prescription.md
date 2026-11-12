---
title: Independent determinant and second-Chern prescription
status: published
research_item: cor-surface-determinant-prescription
dependency_level: 34
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 2, paragraph following Theorem A; p. 3, Notation and conventions
      statement: A rank-two bundle is uniquely determined by its determinant and
        second motivic Chern class, and these invariants can be prescribed
        independently.
      hypotheses: A normal affine surface over the standing algebraically closed
        field; the article conventions take affine schemes to be of finite type.
      reading_limits: Read the statement and immediate context in the supplied
        extracted article text, PDF pp. 2–3, including the finite-type
        convention. Read the local classification supplier and the four
        published formulation definitions. The classification is used through
        its stated interface; the underlying motivic, prescription and
        cancellation arguments are not reconstructed or independently certified
        here.
---

PDF p. 2: Paragraph following Theorem A

## Prerequisites

- [thm-normal-surface-classification](item-thm-normal-surface-classification)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 2, paragraph following Theorem A; p. 3, Notation and conventions `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the site-size and universe bounds required for the motivic and perfect K-theory constructions in [thm-normal-surface-classification](item-thm-normal-surface-classification). Let $k$ be an algebraically closed field and $X$ a normal affine finite-type $k$-scheme of Krull dimension two. Then
$$E\longmapsto (\det E,c_2(E))$$
induces a bijection from $\mathrm{Vect}_2(X)$ to $\operatorname{Pic}(X)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$. Thus two rank-two bundles with the same determinant and second motivic Chern class are isomorphic, and every pair of such invariants occurs.

A vector bundle is a finite locally free $\mathcal O_X$-module; rank two means locally isomorphic to $\mathcal O_X^2$. The set $\mathrm{Vect}_2(X)$ consists of their isomorphism classes. A line bundle is a rank-one vector bundle, $\det E=\bigwedge^2 E$, and $\operatorname{Pic}(X)$ is the group of line-bundle isomorphism classes under tensor product. Normal means that every local ring is an integrally closed domain; Krull dimension is the supremum of lengths of chains of irreducible closed subsets. The displayed motivic group and $c_2$ are the integral weight-two motivic cohomology group and the second motivic Chern class used in the supplier. Choice means that every family of nonempty sets has a choice function; the size bounds fix the sites and ambient universes used in those constructions.

## Facts & Assumptions

**Given:** $k$, $X$, Choice and the site-size and universe bounds in the statement.

**Goal:** Prove that determinant and the second motivic Chern class give the stated bijection.

[F1] Under these hypotheses, the map $(c_1,c_2)$ from $\mathrm{Vect}_2(X)$ to $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ is bijective. The same supplier identifies $\operatorname{Pic}(X)$ with $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ by first Chern class and identifies $c_1(E)$ with the image of $\det E$. [thm-normal-surface-classification](item-thm-normal-surface-classification)

[F2] Algebraic closedness is understood as in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), affineness as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), and a $k$-scheme as a scheme with structure morphism $X\to\operatorname{Spec}k$ as in [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Finite type means that this structure morphism is locally of finite type and quasi-compact, as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism).

[F3] Choice is assumed as a hypothesis of [F1], with the meaning in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). The coordinate transport below requires no additional choice.

## Proof

**Proof technique:** Transport the first coordinate of the supplied classification along the Picard isomorphism.

1.1 Let $\gamma:\operatorname{Pic}(X)\to H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ be the isomorphism in [F1]. For every rank-two bundle $E$, [F1] gives $\gamma([\det E])=c_1(E)$. Consequently the map in the statement is the composite of the bijection $(c_1,c_2)$ with $(\gamma^{-1},\mathrm{id})$. In particular it is well-defined on isomorphism classes. [F1, F2, F3, given]

2.1 Both maps in this composite are bijections, so their composite is a bijection. Its injectivity gives uniqueness up to isomorphism, and its surjectivity gives a bundle for every prescribed pair. This proves the stated classification and independent prescription. [F1, step 1.1] ∎
