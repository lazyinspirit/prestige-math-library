---
title: External EM multiplicative motivic complexes and actual Chern map
status: published
research_item: thm-author-79117e1d72ed-em-multiplication-c1
dependency_level: 12
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.2, printed pp. 11–12; Definition 4.9 and Theorem 4.10(1), pp.
        21–22; Definition 4.23 and Theorem 4.24(1), pp. 27–28; Lemma 5.1
        (including proof), Definition 5.2 and (5.2), pp. 33–34; component maps
        and line-subbundle convention preceding Theorem 5.24, p. 43.
      hypotheses: F is the prime field Q or F_p, with p prime; X is a quasi-compact
        quasi-separated F-scheme. All integer weights are allowed in the
        construction, with negative pieces zero. The projectivization convention
        concerns a finite locally free sheaf of positive constant rank. No
        Noetherianity, finite dimension, regularity, reducedness or algebraic
        closure is assumed.
      statement: The specified motivic filtration is a filtered commutative algebra
        and its shifted graded pieces carry the induced coherent unital
        products. Negative weights vanish. Lemma 5.1 and Definition 5.2 supply
        the natural complex-valued first Chern map, its comparison with the
        classical class on smooth F-schemes, and its Picard-group map. The
        projective-bundle components use this map and multiplication. The
        convention preceding Theorem 5.24 uses the scheme classifying rank-one
        subbundles, its tautological O(-1), and its dual O(1).
      reading_limits: Freshly read the versioned primary PDF text at Section 2.2,
        Definitions 4.9/4.23, the negative-weight assertions and corresponding
        proof paragraphs of Theorems 4.10/4.24, the full Lemma 5.1 proof and
        Definition 5.2, (5.2) and its negative-weight convention, and the
        component maps and line convention before Theorem 5.24. These checks
        used the PDF text extraction, not page images. The trace filtrations,
        higher-categorical foundations, classical comparison foundations, and
        construction of projective bundles are imported, not reconstructed. No
        fresh reading of the complete projective-bundle theorem proof is
        claimed.
external_input: true
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [def-derived-sections-on-sites](item-def-derived-sections-on-sites)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv v1) · Section 2.2, printed pp. 11–12; Definition 4.9 and Theorem 4.10(1), pp. 21–22; Definition 4.23 and Theorem 4.24(1), pp. 27–28; Lemma 5.1 (including proof), Definition 5.2 and (5.2), pp. 33–34; component maps and line-subbundle convention preceding Theorem 5.24, p. 43. `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Work in ZFC and the fixed universe bounds of the supplied multiplicative-filtration and derived-sections interfaces. Let $F=\mathbb Q$ or $\mathbb F_p$, with $p$ prime, and let $X$ be a quasi-compact quasi-separated $F$-scheme. The supplied EM complexes $C_b(X)=\mathbb Z(b)_{\rm mot}(X)$ are the shifted graded pieces of the EM motivic filtration of Definitions 4.9/4.23. For every integer $b$, the underlying spectrum of $C_b(X)[2b]$ is denoted by $G_b(X)$. In the terminology of EM §2.2, these spectra form a natural commutative algebra object for graded Day convolution: there are coherent associative symmetric unital products $G_b\wedge G_d\to G_{b+d}$ and unit $\mathbb S\to G_0$, and pullbacks preserve this data. Equivalently these induce the usual motivic cup products, with even weight shifts. The negative graded pieces vanish, so $C_b=0$ for $b<0$; the nonnegative complexes are exactly the supplied ones.

On the small Nisnevich site of $X$, let $\mathbb G_m$ be the abelian sheaf $U\mapsto\Gamma(U,\mathcal O_U)^\times$, and let $R\Gamma_{\rm Nis}$ denote derived global sections on that site. The cochain shift is $A[n]^q=A^{q+n}$ with differential $(-1)^n d_A$, so $H^q(A[n])=H^{q+n}(A)$. There is the actual natural map of complex-valued presheaves
$$c_1:R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\longrightarrow C_1(X)$$
of Lemma 5.1/Definition 5.2. Here $\operatorname{Pic}(X)$ is the group of isomorphism classes of invertible $\mathcal O_X$-modules, with tensor-product group law, identity $[\mathcal O_X]$ and inverse given by the dual line bundle. The source in degree two is identified with this group by $H^2(R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1])=H^1_{\rm Nis}(X,\mathbb G_m)\cong\operatorname{Pic}(X)$. Thus the induced first Chern map has target $H^2(C_1(X))$. On smooth $F$-schemes it agrees with the classical class through the comparison of Lemma 5.1.

For a finite locally free $\mathcal O_X$-module $V$ of constant rank $r>0$, EM writes $\pi:P_X^{\rm lin}(V)\to X$ for the projectivization classifying rank-one subbundles of $V$. Explicitly, over a test scheme $g:T\to X$ a subbundle is an inclusion of an invertible $\mathcal O_T$-module $L\hookrightarrow g^*V$ whose cokernel is locally free, taken up to isomorphism of inclusions. The universal inclusion is $\mathcal O(-1)\hookrightarrow\pi^*V$, and $\mathcal O(1)=\mathcal O(-1)^\vee$. The maps denoted $c_1(\mathcal O(1))^m\pi^*$ in EM §5, for nonnegative integers $m$, are pullback followed by multiplication by the $m$-th power of this class, using the multiplication just specified.

## Statement references

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[def-derived-sections-on-sites](item-def-derived-sections-on-sites)

[lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## External input
Reference 0 imports the specified EM construction: Definitions 4.9/4.23 take pullbacks in filtered E∞-algebras, and §2.2 supplies the symmetric monoidal associated-graded construction. The definitions identify the complexes with the shifted graded pieces, and Theorems 4.10(1)/4.24(1) give negative-weight vanishing. The supplied motivic-complex interface fixes the nonnegative pieces; no replacement of that theory or its K-theory model is made.

Reference 0 also imports the actual complex map of Lemma 5.1/Definition 5.2 and its smooth-scheme comparison, together with the component maps of (5.2) and the paragraph before Theorem 5.24. This includes the line-subbundle projectivization and its tautological line convention. The derived-sections and Nisnevich line-bundle suppliers fix the meaning of $R\Gamma_{\rm Nis}(X,\mathbb G_m)$ and its degree-one Picard identification. The Picard and finite-local-freeness definitions fix the group law and bundle types. The stated ZFC and size conventions retain the assumptions of these suppliers; no further choice of Chern class is made.

Restriction along the forgetful functor from schemes over a field to schemes over its prime subfield supplies the same natural interface on quasi-compact quasi-separated schemes over any field. This is restriction of the specified functors and maps, not a new motivic theory. The substantial cited constructions are imported with the reading limits in Reference 0; no local reconstruction of their proofs is claimed.
