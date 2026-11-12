---
title: Smooth critical-rank splitting criterion
status: published
research_item: thm-smooth-top-chern-splitting
dependency_level: 18
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Introduction, printed p. 1 / PDF p. 1, paragraph beginning “We note
        that the above cases”; citation [Mur94, Remark 3.6 and Theorem 3.7]
      statement: On a smooth affine variety over an algebraically closed field, a
        rank-d vector bundle splits off the trivial line if and only if its
        ordinary top Chow Chern class c_d vanishes, where d is the dimension.
      hypotheses: Smooth affine variety over an algebraically closed field; bundle
        rank equals the variety dimension. The cited introduction imposes no
        characteristic restriction. The nonempty rank-zero boundary,
        disconnected componentwise grading, and explicit AC and universe
        conventions in this generated formulation are checked by the declared
        local suppliers rather than attributed to additional wording in this
        paragraph.
      reading_limits: This repair read the frozen article text on PDF p. 1 and
        visually checked its page-1 image against that text. Only this
        attribution and criterion are used from the article. No fresh inspection
        of the Murthy scan, final Annals version, Weibel, or the deep results
        behind the imported supplier Statements is claimed. Their existing
        source qualifications remain with those suppliers. The proof below is a
        local composition of the declared interfaces, not a reconstruction of
        the imported theorems.
---

PDF p. 1: Mur94 Remark 3.6 and Theorem 3.7

## Prerequisites

- [lem-author-394a5b71198d-components](item-lem-author-394a5b71198d-components)
- [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)
- [lem-author-394a5b71198d-split-vanishing](item-lem-author-394a5b71198d-split-vanishing)
- [lem-author-394a5b71198d-line-determinant](item-lem-author-394a5b71198d-line-determinant)
- [lem-author-394a5b71198d-curve-picard](item-lem-author-394a5b71198d-curve-picard)
- [lem-author-394a5b71198d-zero-boundary](item-lem-author-394a5b71198d-zero-boundary)
- [thm-author-394a5b71198d-murthy-chow-to-k-input](item-thm-author-394a5b71198d-murthy-chow-to-k-input)
- [thm-author-394a5b71198d-murthy-module-splitting-input](item-thm-author-394a5b71198d-murthy-module-splitting-input)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [def-unimodular-sections](item-def-unimodular-sections)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-regular-noetherian-ring](https://alphabetamath.cc/item/def-regular-noetherian-ring)
- [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)
- [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Fasel–Yakerson, Vector bundles on singular surfaces and threefolds · Introduction, printed p. 1 / PDF p. 1, paragraph beginning “We note that the above cases”; citation [Mur94, Remark 3.6 and Theorem 3.7] `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume AC and the article\'s universe bounds. Let $X$ be a nonempty smooth affine variety of dimension $d\geq0$ over an algebraically closed field of arbitrary characteristic, and let $E$ be a vector bundle of constant rank $d$. Then there exists a vector bundle $E\prime$ with $E\cong E\prime\oplus\mathcal O_X$ if and only if $c_d(E)=0$ in the ordinary integral Chow group $\mathrm{CH}^d(X)$. For $d\geq1$ the complement necessarily has rank $d-1$. For $d=0$, the convention is $c_0(E)=1$, and both splitting and vanishing are false. Chern classes are the usual quotient-projective-bundle classes; on a possibly disconnected smooth variety the codimension Chow grading and classes are understood componentwise. Splitting off a trivial line is equivalently the existence of a unimodular global section on this affine scheme.

## Facts & Assumptions
**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] Smooth affine schemes have the finite integral clopen decomposition, lower-dimensional components split by Serre, and componentwise splittings glue. [lem-author-394a5b71198d-components](item-lem-author-394a5b71198d-components)

[F2] The actual module exterior-dual class maps to the spectral bundle class epsilon. [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)

[F3] An actual split trivial line gives zero top Chow class in positive rank. [lem-author-394a5b71198d-split-vanishing](item-lem-author-394a5b71198d-split-vanishing)

[F4] The dimension-one actual first Chern map is Picard/divisor class and detects trivial line bundles; its exterior-dual K-class is detected by determinants. [lem-author-394a5b71198d-curve-picard](item-lem-author-394a5b71198d-curve-picard), [lem-author-394a5b71198d-line-determinant](item-lem-author-394a5b71198d-line-determinant)

[F5] The dimension-zero boundary is explicit. [lem-author-394a5b71198d-zero-boundary](item-lem-author-394a5b71198d-zero-boundary)

[F6] For a regular integral affine $k$-algebra $A$ of dimension $n\geq2$, the supplier states an isomorphism $\phi:\mathrm{CH}^n(\operatorname{Spec}A)\to F^nK_0^{\mathrm{proj}}(A)$ with $\phi(c_n(\widetilde P))=C^K_n(P)$ for every rank-$n$ finite projective $P$. Its target subgroup has no $(n-1)!$ torsion: $(n-1)!x=0$ implies $x=0$. Here $K_0^{\mathrm{proj}}$ is the finite-projective Grothendieck group with short-exact-sequence relations, and $F^n$ is its subgroup generated by finite-resolution classes of residue fields at height-$n$ smooth closed points. [thm-author-394a5b71198d-murthy-chow-to-k-input](item-thm-author-394a5b71198d-murthy-chow-to-k-input)

[F7] For a reduced affine $k$-algebra of dimension $n\geq2$ with this same subgroup $F^nK_0^{\mathrm{proj}}$ having no $(n-1)!$ torsion, the supplier states $C^K_n(P)=0$ if and only if $P\cong A\oplus Q$, where $Q$ is finite projective of constant rank $n-1$. Its convention is exactly $P^*=\operatorname{Hom}_A(P,A)$ and $C^K_n(P)=\sum_{i=0}^n(-1)^i[\Lambda^iP^*]$ in that projective group. The field is algebraically closed of arbitrary characteristic. The exact-sequence and direct-sum presentations of the finite-projective group agree: lift the identity of a projective quotient through the surjection in a short exact sequence to split it, identifying the middle module with the sum of its ends. The lifting-property convention is supplied by [F8]. [thm-author-394a5b71198d-murthy-module-splitting-input](item-thm-author-394a5b71198d-murthy-module-splitting-input)

[F8] The affine module/bundle equivalence preserves rank and direct sums, and a free line summand corresponds to a unimodular section. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface), [def-unimodular-sections](item-def-unimodular-sections)

[F9] Formulation: a $k$-scheme has a specified structure map to $\operatorname{Spec}k$; here variety means a finite-type $k$-scheme, with the possibly disconnected component convention of [F1]. Affine means isomorphic to a ring spectrum with its structure sheaf and coordinate ring its global sections. Finite type means locally of finite type and quasi-compact. Smooth means locally of finite presentation, flat, and with geometrically regular fibres at every point; in particular each fibre local ring stays regular after every extension of its residue field. Algebraically closed means every nonconstant polynomial over $k$ has a root in $k$. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)

[F10] Under AC an affine finite-type $k$-scheme has a finitely generated coordinate $k$-algebra. A field is Noetherian, and an algebra of finite type over a Noetherian ring is Noetherian. In this commutative setting Noetherian means that every ideal has a finite generating list. A regular ring means a commutative Noetherian ring whose prime localizations are all regular local. The affine local-ring identification is $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$. [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated), [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), [math:def-regular-noetherian-ring](https://alphabetamath.cc/item/def-regular-noetherian-ring), [math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)

[F11] The fibre of $f:Y\to S$ at $s$ is $Y\times_S\operatorname{Spec}\kappa(s)$. For $S=\operatorname{Spec}k$ its unique point has residue field $k$, so this is base change along the identity. The fibre-product universal property identifies it with $Y$: the projections are $\operatorname{id}_Y$ and $f$, and a compatible pair of test maps has its unique induced map equal to the first test map. Thus, taking the unchanged field extension $k/k$ in the smoothness definition of [F9], every local ring of a smooth $k$-scheme is regular local. This implication uses the geometric-fibre convention directly. [math:def-scheme-theoretic-fibre](https://alphabetamath.cc/item/def-scheme-theoretic-fibre), [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[F12] For an affine scheme, integrality is equivalent to its coordinate ring being a nonzero domain, hence reduced. Krull dimension counts strict chains of prime ideals. The irreducible-closed-subset/prime-ideal correspondence, with $\mathfrak p\mapsto V(\mathfrak p)$ reversing inclusion, identifies those chain lengths with scheme dimension. Ordinary integral Chow groups are cycle groups modulo divisors of rational functions on integral closed subschemes; for a pure-dimensional component of dimension $e$, $\mathrm{CH}^i=A_{e-i}$. Use the componentwise groups and classes of [F1] and the quotient-projective-bundle Chern convention, including $c_0=1$ and the zero bundle. [math:def-integral-affine-scheme](https://alphabetamath.cc/item/def-integral-affine-scheme), [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring), [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals), [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)

[A1] Assume AC and compatible Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, the scheme data in $\mathcal U$, and the supplied sites and perfect K-theory categories in the compatible larger universes. Universe existence is a separate assumption, using the closure convention below. These are the bounds in the Statement and the exterior-dual interface [F2]. AC is inherited through the component/Serre, affine correspondence, Chow and Chern, and imported Murthy interfaces; the finite component assembly adds no further infinite choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)

## Proof
1.1 If $d=0$, [F5] proves that both conditions are false, so their equivalence holds with the stated convention. Assume $d\geq1$ henceforth. By [F1], [F9] and [F10], the coordinate rings of $X$ and all its affine components are Noetherian. If $E$ splits off a trivial line, its restriction to each component has rank-$d-1$ complement. By [F3] its degree-$d$ Chern class vanishes on every component, so it vanishes globally under [F1]. [A1, F1, F3, F5, F9, F10, given]

1.2 For the converse suppose $c_d(E)=0$. Use the finite integral clopen decomposition $X=\coprod_jX_j$ from [F1] and set $d_j=\dim X_j$. If $d_j<d$, Serre splitting in [F1] gives a trivial line summand of $E|_{X_j}$. It remains to treat the components of dimension exactly $d$. [F1, given]

2.1 If $d=1$, the restriction to each dimension-one component is a line bundle. Its actual first Chern class is zero, so [F4] makes it trivial. This is $E|_{X_j}\cong\mathcal O_{X_j}\oplus0$. The same local result also identifies vanishing of the actual exterior-dual K-class via the determinant, without invoking the dimension-at-least-two comparison. [F4, step 1.2]

2.2 If $d\geq2$, write a dimension-$d$ component as $X_j=\operatorname{Spec}A_j$. It is smooth integral affine and finite type by [F1] and [F9]. By [F10], $A_j$ is a finitely generated Noetherian $k$-algebra. By [F11] every $\mathcal O_{X_j,x}$ is regular local; the stalk identification and regular-ring definition in [F10] therefore make $A_j$ regular. Integrality and the dimension correspondence in [F12] give a nonzero reduced domain of Krull dimension $d$. Let $P_j=\Gamma(X_j,E|_{X_j})$; [F8] makes it finite projective of constant rank $d$. Thus both the regular integral affine hypotheses of [F6] and the reduced affine hypotheses of [F7] hold, with [A1] carrying their inherited Choice and universe bounds. [A1, F1, F8, F9, F10, F11, F12, step 1.2]

3.1 The component restriction of $c_d(E)$ is zero by [F1]. Apply the stated cycle map of [F6] directly: $\phi(c_d(E|_{X_j}))=C^K_d(P_j)=0$, and $F^dK_0^{\mathrm{proj}}(A_j)$ has no $(d-1)!$ torsion. This is exactly the projective group, point subgroup and exterior-dual expression specified in [F7]. Under [F2], this actual module expression also maps to the spectral class $\varepsilon(E|_{X_j})$; this supplementary identification is compatible with the obstruction just used. [F1, F2, F6, F7, step 1.2, step 2.2]

4.1 By steps 2.2 and 3.1, all the hypotheses of [F7] hold for $A_j,P_j$ with the identical exterior-dual obstruction and point subgroup, so $P_j\cong A_j\oplus Q_j$ with $Q_j$ finite projective of rank $d-1$. By [F8] this sheafifies to a trivial line summand of $E|_{X_j}$. Together with steps 1.2 and 2.1 every component has such a splitting. By [F1] they glue to $E\cong\mathcal O_X\oplus E\prime$. [F1, F7, F8, step 1.2, step 2.1, step 2.2, step 3.1]

5.1 The necessary direction in step 1.1 and sufficient direction in step 4.1 establish the equivalence for all $d\geq1$, while step 1.1 covers $d=0$. Local ranks add, so the positive-dimensional complement has rank $d-1$. Finally [F8] gives exactly the unimodular-section formulation. [F8, step 1.1, step 4.1] ∎

## Source notes
The article's Introduction, PDF p. 1, attributes the smooth-affine critical-rank criterion to Mur94 Remark 3.6 and Theorem 3.7. This repair checked that paragraph in the frozen extracted text and page image. The article citation documents that criterion; the rank-zero boundary, curve argument, and componentwise extension are justified by the declared local suppliers.

The higher-dimensional proof is a locally authored composition of the two declared Murthy supplier Statements, already formulated in the same projective $K_0$ group. The resolution comparisons belong to those suppliers and are not additional conclusions asserted or needed here. Their imported theorem and source-reading qualifications remain in force. This repair did not freshly inspect the Murthy scan, final Annals bytes, or Weibel, and supplies no reconstruction or independent acceptance of the imported results. The local regularity deduction instead uses the published geometric-fibre smoothness definition directly, so no perfect-field inference or classical/scheme smoothness comparison is invoked here.
