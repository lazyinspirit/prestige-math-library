---
title: Total Chern series for actual and virtual bundles
status: published
research_item: def-total-chern-class
dependency_level: 23
sources:
  references:
    - title: Fasel and Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Section 3, p. 8; Lemma 5.3 proof, p. 11
      reading_limits: "Historical inherited reading record (not fresh reading in this
        assignment): Read the original article PDF at pp. 3, 7, 8 and 11. The
        virtual extension here is on the vector-bundle presentation; no general
        perfect-K0 representation is inferred. Current assignment: Freshly read
        the frozen original PDF at printed pp. 3, 7, 8 and 11 for the standing
        conventions, classes and formal-inverse calculation. This record does
        not attribute the any-field nilpotence or dimension-free
        polynomial-value consequence to the article. The extension here is on
        the vector-bundle presentation, with no general perfect-K0
        representation inferred."
      statement: Section 3 introduces motivic Chern classes via the projective bundle
        formula. Lemma 5.3 uses the Whitney identity and formal inversion for a
        bundle difference and computes the first two inverse coefficients; that
        passage describes polynomiality in its stated finite-dimensional
        context.
      hypotheses: The article assumes an algebraically closed base field and qcqs
        schemes, with affine schemes of finite type. Lemma 5.3 assumes X normal.
        Its asserted bundle-difference representation and finite-dimensional
        wording are not imported as general hypotheses or conclusions here; the
        local suppliers govern the any-field qcqs vector-bundle presentation.
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated 14 April 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3(i), pp. 30–31; Lemma 3.1.8, p. 22
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
      reading_limits: "Historical inherited reading record (not fresh reading in this
        assignment): Read the dated title page; sections 0.4 and 2.1;
        orientation conventions and Lemma 3.1.8; section 3.2; the section 4
        opening correction footnote; Definition 4.4.1 and Lemma 4.4.3 with its
        complete proof. Imported geometric splitting and upstream spectrum
        machinery are not reconstructed. The local model, orientation and
        relation-comparison arguments were inspected for this application,
        without an independent acceptance claim. Current assignment: This
        assignment read the dated cached primary PDF at p. 14 and pp. 30–31,
        including Definition 4.4.1 and the complete proof of Lemma 4.4.3, and
        opened the live dated primary PDF to check the nilpotence statement.
        Earlier broader reading is historical, not fresh reading here. The
        imported theorem supplies Lemma 3.1.8 and foundational derived/splitting
        inputs; they are not reconstructed. Current model, orientation and
        relation-comparison interfaces were inspected for this application; no
        independent acceptance of their upstream constructions is claimed."
      statement: Definition 4.4.1 defines positive-rank projective-relation Chern
        coefficients and their total polynomial. Lemma 4.4.3(i) states
        nilpotence of the positive coefficients; its proof uses filtered line
        quotients and first-class nilpotence from Lemma 3.1.8.
      hypotheses: A qcqs derived base S; a homotopy-commutative linearly oriented
        motivic ring spectrum satisfying the source projective bundle formula; a
        constant-positive-rank bundle on a smooth qcqs S-scheme. Rank zero and
        varying-rank gluing are supplied locally. No A1-invariance or finite
        dimension is assumed.
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-author-4f94f7982b0d-virtual-independence](item-lem-author-4f94f7982b0d-virtual-independence)
- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory)
- [math:def-formal-power-series-and-coefficient-extraction](https://alphabetamath.cc/item/def-formal-power-series-and-coefficient-extraction)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input](item-thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input)
- [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model)
- [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation)
- [lem-author-4f94f7982b0d-relation-comparison](item-lem-author-4f94f7982b0d-relation-comparison)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)
- [lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction](item-lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism)
- [` Fasel and Yakerson, Vector bundles on singular surfaces and threefolds · Section 3, p. 8; Lemma 5.3 proof, p. 11 `](https://arxiv.org/abs/2610.22679v1)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory, author PDF dated 14 April 2025 · Definition 4.4.1 and Lemma 4.4.3(i), pp. 30–31; Lemma 3.1.8, p. 22 `](https://ryomei.com/papers/MotSp.pdf)





## Definition
Assume AC and the supplied universe conventions. Let $k$ be a field and $X$ any qcqs $k$-scheme. For an actual finite locally free bundle $V$, put
$$c_t(V)=1+\sum_{i\geq1}c_i(V)t^i,$$
using the supplied projective-relation classes on constant-rank clopen components and their unique gluing for varying rank. This is a polynomial, with $c_i(V)\in H^{2i,i}_{\rm mot}(X,\mathbb Z)$; it is $1$ in rank zero.
Let $K^0_{\rm vb}(X)$ be the group on finite locally free bundles modulo the exact-sequence relations. Define its **total virtual Chern series** to be the unique natural homomorphism to the multiplicative group of formal series with constant coefficient $1$ and coefficient of $t^i$ in $H^{2i,i}(X)$ extending the actual series. Equivalently,
$$c_t([V]-[W])=c_t(V)c_t(W)^{-1}.$$
Inverses are formal, computed recursively coefficient by coefficient; no convergence or dimension truncation is assumed. For this actual motivic theory, however, each positive Chern coefficient of a bundle is nilpotent. Consequently the formal inverse of any actual bundle polynomial, and hence the value on every virtual bundle class, is itself a polynomial. Its finite degree follows from nilpotence for the chosen bundles, without any finite-dimensionality assumption on $X$. The formal-series target and coefficient formulas remain valid. This uses only nonnegative weights (the theory’s explicit negative-zero extension is unchanged).
For locally Noetherian $X$, the group is the published vector-bundle $K^0(X)$. On affines it may also be identified with the supplied spectral $K_0$ through its completed affine comparison. No general equality with perfect $K_0$ or coherent G-theory is asserted.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe bounds. These are the foundational hypotheses of the model, comparison and virtual-extension suppliers used below; the finite nilpotent-ideal argument uses no additional arbitrary choice.

[F0] The formulation types are [math:def-field](https://alphabetamath.cc/item/def-field), [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). Fix compatible universes $U\in V\in W$ with $\omega\in U$ and scheme data in $U$, as in [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); their existence is a separate standing assumption. The bigraded ring and contravariant ring-pullback conventions are [def-bigraded-oriented-theory](item-def-bigraded-oriented-theory); formal series are coefficient functions with the Cauchy product as in [math:def-formal-power-series-and-coefficient-extraction](https://alphabetamath.cc/item/def-formal-power-series-and-coefficient-extraction). The final interpretations use [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) and [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). The relative smoothness condition is [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes); the classical identity is smooth by [math:thm-jacobian-criterion-smooth-morphism](https://alphabetamath.cc/item/thm-jacobian-criterion-smooth-morphism), using on each affine open the identity algebra presentation with no variables or equations and unit empty Jacobian minor. The nilpotence input already supplies the passage from classical to derived smoothness.

[F1] [lem-author-4f94f7982b0d-virtual-independence](item-lem-author-4f94f7982b0d-virtual-independence) supplies the actual Whitney identity, clopen extension and unique natural virtual extension, using [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) only after the actual identity. [def-motivic-chern-classes](item-def-motivic-chern-classes) gives the constant-rank coefficients and their bidegrees.

[F2] [thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input](item-thm-adjudicate-9c15b20e1f5d-oriented-chern-nilpotence-input) imports positive Chern-coefficient nilpotence for an oriented homotopy-commutative motivic ring spectrum with PBF over a qcqs derived base $S$, on smooth qcqs $S$-schemes.

[F3] [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model) gives the actual non-$\mathbb A^1$ homotopy-commutative EM ring spectrum over every qcqs field-base $S$. [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation) supplies its actual orientation and PBF. [lem-author-4f94f7982b0d-relation-comparison](item-lem-author-4f94f7982b0d-relation-comparison) identifies the source Chern coefficients with the supplied motivic classes. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata) supplies finite qcqs clopen rank strata. [lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction](item-lem-adjudicate-e61a86f4a27f-all-field-clopen-restriction) supplies their finite-clopen motivic restriction isomorphism over every field, including the empty scheme.

[F4] [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface) identifies the locally Noetherian vector-bundle presentation; [def-vector-bundle-classes](item-def-vector-bundle-classes) supplies the affine identification with the specified spectral perfect $K_0$.


**Given:** $k,X$, actual bundles or an element of $K^0_{\rm vb}(X)$, AC and the stated universe bounds.

**Goal:** Justify the representative-independent definition and polynomiality of its actual virtual values in the full qcqs scope.

## Justification
1.1 Apply [F1] to define the actual polynomial with its unit and zero conventions and natural coefficients. Its exact-sequence Whitney identity has been established for the actual projective-relation classes before virtual extension. [A1, F1, given]

2.1 The extension in [F1] is defined on the generator-and-relation group itself, kills all defining relations, and is unique on the bundle generators. Its difference formula therefore has the same value for every representative of a virtual class. Its formal inverse and coefficient bidegrees are those verified in the extension supplier. [A1, F1, step 1.1]

2.2 To apply [F2], first take a constant-rank bundle on a qcqs $k$-scheme and set $S=X$, regarded as a classical derived scheme, with $Y=X$ via the smooth identity, justified in [F0]. By [F3] the actual EM model is homotopy-commutative, oriented and satisfies the source PBF; its product-preserving coefficient identifications carry the source projective-relation coefficients to our $c_i$. Thus [F2] makes every positive $c_i$ nilpotent. For a varying-rank bundle, [F3] gives finitely many qcqs clopen rank strata. On each nonempty stratum the same application with that stratum as base gives a nilpotence exponent. For each fixed $i$, take the maximum of these finitely many exponents; the corresponding power vanishes globally by the joint restriction isomorphism in [F3]. Rank zero and coefficients above rank are zero. On the empty scheme the same restriction isomorphism has empty product target, so all coefficient groups are zero and the conclusion holds as well. [A1, F0, F1, F2, F3, step 1.1]

3.1 For a bundle $W$, write $c_t(W)=1+q(t)$ with $q(t)=\sum_{i=1}^m a_i t^i$, where $m$ bounds its rank and $a_i=c_i(W)$. If $q=0$, its inverse is $1$. Otherwise choose positive integers $n_i$ with $a_i^{n_i}=0$, using step 2.2. In the commutative diagonal ring $R_X=\bigoplus_{i\geq0}H^{2i,i}(X)$ from [F0], put $I=(a_1,\ldots,a_m)=\{\sum_{i=1}^m r_i a_i:r_i\in R_X\}$ and $N=1+\sum_{i=1}^m(n_i-1)$. Here $I^N$ consists of finite sums of products of $N$ elements of $I$. Every monomial of degree $N$ in these generators contains some $a_i^{n_i}$, so $I^N=0$ and $q(t)^N=0$ in $R_X[t]$. Hence $(1+q(t))^{-1}=\sum_{j=0}^{N-1}(-q(t))^j$ is a polynomial. Multiplying by $c_t(V)$ proves polynomiality for every difference $[V]-[W]$, and every class has such a representative by [F1]. Each coefficient retains its required bidegree. This finite formula is the same as the unique formal inverse of step 2.1. [A1, F0, F1, step 2.1, step 2.2, algebra]

4.1 The locally Noetherian and affine interpretations are exactly [F4]. None of the preceding steps identifies the bundle presentation with perfect $K_0$ on general schemes or with coherent G-theory. All original coefficient formulas and naturality survive in the formal-series target, while step 3.1 gives the stronger polynomial-value assertion without a dimension restriction. [A1, F0, F1, F4, step 2.1, step 3.1] ∎
