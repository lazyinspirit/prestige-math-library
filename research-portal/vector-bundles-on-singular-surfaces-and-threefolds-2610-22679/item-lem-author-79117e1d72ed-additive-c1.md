---
title: The actual EM first Chern class is additive and natural
status: published
research_item: lem-author-79117e1d72ed-additive-c1
dependency_level: 13
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv:2309.08463v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction, printed p. 2, prime-field convention; Section 5.1, Lemma
        5.1 and Definition 5.2, printed pp. 33–34 (PDF page indices 32–33),
        especially the induced natural map immediately after (5.1).
      statement: Definition 5.2 explicitly specifies the induced natural map on
        degree-two cohomology, with source Pic(X) and target H^2_mot(X,Z(1)),
        for the first Chern map of Lemma 5.1.
      hypotheses: F is Q or F_p for a prime p; X is any quasi-compact quasi-separated
        F-scheme, with naturality for morphisms of these schemes. The source
        Pic(X) uses line bundles and their usual pullback. No smoothness,
        Noetherianity, reducedness or dimension hypothesis is imposed. The
        declared construction supplier retains the Choice and compatible size
        assumptions.
      reading_limits: Read the prime-field convention, Lemma 5.1 with its short proof,
        and Definition 5.2 in the versioned primary PDF text extraction in this
        repair. Import only the explicit naturality of the induced Picard-group
        map; the underlying complex map and Picard-group identification are used
        through the declared construction supplier. No reconstruction of Kan
        extension, sheafification or classical comparison is claimed; no
        page-image review is claimed.
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)
- [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv:2309.08463v1) · Introduction, printed p. 2, prime-field convention; Section 5.1, Lemma 5.1 and Definition 5.2, printed pp. 33–34 (PDF page indices 32–33), especially the induced natural map immediately after (5.1). `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and the compatible nested-universe and site-size bounds of the supplied motivic-complex and EM first-Chern constructions.

For every qcqs scheme $X$ over a field, define $c_1$ to be the degree-two map of EM Definition5.2. Then $c_1:\operatorname{Pic}(X)\to H^{2,1}(X)$ is a natural group homomorphism. In particular $c_1(L\otimes M)=c_1(L)+c_1(M)$, $c_1(\mathcal O_X)=0$, and $c_1(L^\vee)=-c_1(L)$.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size bounds retain the construction premises of [def-motivic-cohomology](item-def-motivic-cohomology) and [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1). They are used when invoking the actual derived first-Chern map in step 1.1 and its natural Picard map in step 2.1. Taking cohomology, restricting along the prime-field inclusion, and the finite group calculations introduce no additional choice.

[F1] [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1) supplies the actual natural map $R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\to C_1(X)$ for qcqs schemes over $F=\mathbb Q$ or $\mathbb F_p$. Its cochain-shift convention identifies source degree two with $H^1_{\rm Nis}(X,\mathbb G_m)$, and its Picard identification is a group isomorphism for tensor product. Here $C_1(X)=\mathbb Z(1)_{\rm mot}(X)$ and $H^{2,1}(X)=H^2(C_1(X))$, using [def-motivic-cohomology](item-def-motivic-cohomology). The site is the same small Nisnevich site specified by the EM supplier, not a newly substituted big site.

[F2] [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme) defines the group of line-bundle isomorphism classes, its tensor product, its identity $[\mathcal O_X]$ and its inverse $[L^\vee]$.

[F3] [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category) supplies the functor $H^n:D(\mathrm{Ab})\to\mathrm{Ab}$ for every integer $n$. In particular, it sends a derived-category morphism to an abelian-group homomorphism and preserves commuting squares.

[F4] [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield) defines the smallest subfield $k_0\subset k$, and [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) identifies it with $F=\mathbb Q$ or $\mathbb F_p$. The resulting unital ring inclusion $F\to k$ induces $\operatorname{Spec}k\to\operatorname{Spec}F$ by [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence). Schemes and morphisms over a base mean the structure maps and commuting triangles of [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The qcqs conditions of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) concern the underlying scheme, so composing its structure map does not change them. The restriction in [def-motivic-cohomology](item-def-motivic-cohomology) retains the values and pullbacks of the same prime-field motivic complexes.

[F5] Reference 0, Definition 5.2, explicitly supplies naturality of the induced Picard-group first Chern map, with the same complex map and source identification as [F1]. Thus its pullback is the ordinary pullback of line bundles, not merely an unspecified map on an abstract group identified with $\operatorname{Pic}(X)$. Module pullback means $f^*L=\mathcal O_Y\otimes_{f^{-1}\mathcal O_X}f^{-1}L$ for $f:Y\to X$, as in [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces); the imported naturality assertion is for line-bundle classes with this pullback.

## External input
Reference 0 imports only the explicit assertion in EM Definition 5.2 that the map on $H^2$ induced by (5.1), written there as $\operatorname{Pic}(X)\to H^2_{\rm mot}(X,\mathbb Z(1))$, is natural. Its domain is the qcqs schemes over the prime field. This supplies exactly the compatibility needed in [F5] on the small-Nisnevich-derived-sections conventions already fixed by [F1]. Naturality on Picard groups is used as this cited premise; it is not inferred here from an arbitrary degreewise group identification. The additivity and field-restriction arguments below are local deductions from the declared inputs.

## Proof
**Given:** A field $k$, a qcqs $k$-scheme $X$, line bundles $L,M$ on $X$, and the Choice and compatible size assumptions in [A1]. For naturality let $f:Y\to X$ be a morphism of qcqs $k$-schemes.

**Goal:** Justify this definition, additivity and naturality over every field.

1.1 Use [F4] to identify the prime subfield of $k$ with $F=\mathbb Q$ or $\mathbb F_p$. Compose $X\to\operatorname{Spec}k$ with $\operatorname{Spec}k\to\operatorname{Spec}F$; the underlying scheme remains qcqs. A $k$-morphism remains an $F$-morphism, because composing its commuting structure-map triangle gives the required triangle over $F$. Restrict the actual map of [F1] to these objects and arrows, under [A1]. Its target is the same $C_1(X)$ used by [F4], and its small Nisnevich site and units are unchanged because the scheme $X$ is unchanged. Apply $H^2$ using [F3], and precompose with the inverse of the group identification $\operatorname{Pic}(X)\cong H^2(R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1])$ in [F1]. This gives an abelian-group homomorphism for the tensor-product law of [F2], well-defined on line-bundle isomorphism classes. It is precisely the degree-two EM class, without replacing it by a K-zero line-class map. [A1, F1, F2, F3, F4, construct]

2.1 The homomorphism of step 1.1 gives $c_1(L\otimes M)=c_1(L)+c_1(M)$. Its value on the identity is zero, since that value equals its sum with itself; applying it to $[L]+[L^\vee]=0$ gives $c_1(L^\vee)=-c_1(L)$, using [F2]. By step 1.1, $f$ is also a morphism in the prime-field category where [F5] applies. The cited naturality of this very Picard-group map therefore gives $f^*c_1(L)=c_1(f^*L)$, with target pullback from [F1] and [F4] and line-bundle pullback from [F5]. This imports the stated compatibility rather than inferring it from the commuting derived square alone. Restriction leaves the maps unchanged, proving naturality on qcqs schemes over every field. [A1, F1, F2, F4, F5, step 1.1] ∎
