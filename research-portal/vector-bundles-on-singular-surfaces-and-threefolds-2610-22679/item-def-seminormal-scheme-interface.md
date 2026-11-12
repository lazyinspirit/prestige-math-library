---
title: Seminormality and seminormalization
status: published
research_item: def-seminormal-scheme-interface
dependency_level: 2
sources:
  references:
    - title: "The Stacks Project, Lemma 29.46.5: universal homeomorphisms"
      url: https://stacks.math.columbia.edu/tag/04DF
      locator: Lemma 29.46.5, conditions (1)–(2) and both directions of the displayed
        proof
      statement: A morphism of schemes is a universal homeomorphism if and only if it
        is integral, universally injective and surjective.
      hypotheses: An arbitrary morphism of schemes; no finiteness, reducedness or
        field-base hypothesis.
      reading_limits: Read the complete statement and both displayed proof paragraphs.
        The proof invokes affineness of universal homeomorphisms and the affine
        universally closed criterion for integrality; those cited proofs were
        not reconstructed. The equivalence is imported as a premise.
    - title: "The Stacks Project, Lemma 29.10.2: the residue-field criterion for
        universal injectivity"
      url: https://stacks.math.columbia.edu/tag/01S4
      locator: Lemma 29.10.2, equivalence of (2) and (3), with radicial as defined in
        Definition 29.10.1(2) (tag 01S3)
      statement: In particular, a morphism of schemes that is injective on points and
        induces isomorphisms on residue fields is universally injective.
      hypotheses: An arbitrary morphism of schemes, injective on underlying points,
        with every induced residue-field map an isomorphism. This is the
        isomorphism special case of the radicial criterion.
      reading_limits: Read Definition 29.10.1 at
        https://stacks.math.columbia.edu/tag/01S3 and the entire statement and
        displayed proof of Lemma 29.10.2. Only the stated special case is used.
        The field-valued point and field-extension results cited in the proof
        were not independently reconstructed.
    - title: "The Stacks Project, Lemma 29.48.4: affine locality of seminormality"
      url: https://stacks.math.columbia.edu/tag/0EUK
      locator: Definitions 29.48.1(1) and 29.48.3(1), and Lemma 29.48.4, equivalence
        of (1), (2) and (3)
      statement: For the unique square-cube root definition, seminormality on affine
        neighbourhoods is equivalent to seminormality of the coordinate ring of
        every affine open.
      hypotheses: An arbitrary scheme and commutative coordinate rings; no noetherian
        or finite-type hypothesis.
      reading_limits: Read the two definitions, the complete statement of Lemma
        29.48.4 and its proof by reference to Lemmas 28.4.3 and 29.48.2; also
        read the displayed proof of 29.48.2. The referenced general
        local-property machinery was not reconstructed. Later construction
        results in this section are supplied by the existing seminormalization
        item rather than reimported here.
    - title: The Stacks Project, reduced schemes and affine reducedness
      url: https://stacks.math.columbia.edu/tag/01IZ
      locator: Definition 26.12.1 and Lemmas 26.12.2–26.12.3 with displayed proofs
      statement: A scheme has reduced local rings exactly when its rings of sections
        on all opens are reduced. An affine scheme is reduced exactly when its
        coordinate ring is reduced; consequently reducedness can be checked on
        an affine open cover.
      hypotheses: An arbitrary scheme; for the affine assertion an arbitrary
        commutative coordinate ring.
      reading_limits: Read Definition 26.12.1, Lemmas 26.12.2–26.12.3 and their
        complete displayed proofs. The proofs use detection of a zero section on
        stalks and preservation of reducedness under localization, which are
        imported through these statements rather than reconstructed. Reduction
        factorization is taken from the declared library theorem, not from
        additional claims on this section page.
---

PDF p. 5: Seminormalization in Lemma 2.4

## Prerequisites

- [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)
- [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube)
- [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced)
- [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness)
- [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module)
- [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)
- [math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme)
- [math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property)
- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)
- [math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [` The Stacks Project, Lemma 29.46.5: universal homeomorphisms · Lemma 29.46.5, conditions (1)–(2) and both directions of the displayed proof `](https://stacks.math.columbia.edu/tag/04DF)
- [` The Stacks Project, Lemma 29.10.2: the residue-field criterion for universal injectivity · Lemma 29.10.2, equivalence of (2) and (3), with radicial as defined in Definition 29.10.1(2) (tag 01S3) `](https://stacks.math.columbia.edu/tag/01S4)
- [` The Stacks Project, Lemma 29.48.4: affine locality of seminormality · Definitions 29.48.1(1) and 29.48.3(1), and Lemma 29.48.4, equivalence of (1), (2) and (3) `](https://stacks.math.columbia.edu/tag/0EUK)
- [` The Stacks Project, reduced schemes and affine reducedness · Definition 26.12.1 and Lemmas 26.12.2–26.12.3 with displayed proofs `](https://stacks.math.columbia.edu/tag/01IZ)


## Definition
A commutative ring $A$ is **seminormal** if, whenever $x^3=y^2$ in $A$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal if every point has an affine open neighbourhood whose coordinate ring is seminormal. In particular it is reduced: its affine coordinate rings have no nonzero nilpotents. Here a nilpotent element is one whose positive integer power is zero; equivalently, reducedness of a scheme means that every local ring is reduced.

A morphism $f:Y\to X$ is **subintegral** if it is integral, is bijective on underlying points, and induces an isomorphism $\kappa(x)\to\kappa(y)$ at every point $y$ over $x$. Integral means affine and given on affine inverse images by integral ring maps; an element is integral when it satisfies a monic polynomial over the base ring. Affine means that the inverse image of every affine open is affine. A universal homeomorphism is a morphism whose pullback along every scheme morphism is a homeomorphism on underlying spaces. Integral, bijective morphisms inducing residue-field isomorphisms are universal homeomorphisms, and conversely a universal homeomorphism with residue-field isomorphisms is integral and bijective.

For a scheme $X$, its **seminormalization** $X^{\mathrm{sn}}\to X$ is the initial object in the category of subintegral morphisms to $X$: it has a unique $X$-morphism to every object of that category. The arrows in this category are morphisms over $X$, with identities and composition inherited from schemes. Its source is seminormal. The construction is functorial: every morphism $h:Y\to X$ induces a unique compatible $h^{\mathrm{sn}}:Y^{\mathrm{sn}}\to X^{\mathrm{sn}}$. These maps respect identities and compositions. The map factors through the reduction $X_{\mathrm{red}}$, which has the same underlying space and the structure sheaf obtained by quotienting by the ideal sheaf of locally nilpotent sections. When $X$ is locally of finite type over a field, the resulting map $X^{\mathrm{sn}}\to X_{\mathrm{red}}$ is finite. Here finite means affine with coordinate algebras finite as modules over the corresponding base coordinate rings. In this scope a normal scheme is seminormal, and a reduced scheme is seminormal exactly when every finite subintegral morphism to it from a reduced scheme is an isomorphism. Normal here means that every local ring is an integrally closed domain.

## Definition references

[lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness)

[lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube)

[lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced)

[lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness)

[lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module)

[thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

[math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme)

[math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category)

[math:def-integral-closure-and-integrally-closed-domain](https://alphabetamath.cc/item/def-integral-closure-and-integrally-closed-domain)

[math:def-field](https://alphabetamath.cc/item/def-field)

## Justification
The scheme, morphism, affine-open and residue-field interfaces are the declared mathematical definitions; pullbacks mean fibre products, whose existence is supplied by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist). The subintegral category uses the ordinary category interface [math:def-category](https://alphabetamath.cc/item/def-category) and categorical isomorphisms as in [math:def-isomorphism-groupoid-and-connected-category](https://alphabetamath.cc/item/def-isomorphism-groupoid-and-connected-category). Initiality is defined explicitly above.

The bridge uses two precise imported premises [E1] and [E2] below. Universally injective means that every base change is injective on underlying points. If a morphism is subintegral, it is injective on points with residue-field isomorphisms, so [E2] makes it universally injective; its integrality and surjectivity then give a universal homeomorphism by [E1]. Conversely, [E1] makes a universal homeomorphism integral, universally injective and surjective, hence bijective on points; with the assumed residue-field isomorphisms this is subintegral. Thus these are the same objects, with the same arrows over $X$, in the two categories.

The initial object, its seminormal source and functoriality are the established input [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input), now applicable to the subintegral category by this bridge; [lem-author-30ec96de6e59-initial-object-uniqueness](item-lem-author-30ec96de6e59-initial-object-uniqueness) proves uniqueness up to unique isomorphism. The precise reduction is [math:def-reduction-of-scheme](https://alphabetamath.cc/item/def-reduction-of-scheme), using the sheaf of locally nilpotent sections rather than a uniform nilpotence exponent on an arbitrary open. Every map from a reduced scheme factors uniquely through it by [math:thm-reduction-universal-property](https://alphabetamath.cc/item/thm-reduction-universal-property).

By [E3], every affine coordinate ring of a seminormal scheme satisfies the square-cube condition. Applying [lem-author-30ec96de6e59-seminormal-ring-reduced](item-lem-author-30ec96de6e59-seminormal-ring-reduced) to each one proves that all are reduced; [E4] identifies this with reducedness of the scheme. The ring-level nilpotence convention is [math:def-nilradical-and-reduced-ring](https://alphabetamath.cc/item/def-nilradical-and-reduced-ring), and [lem-author-30ec96de6e59-square-cube-uniqueness](item-lem-author-30ec96de6e59-square-cube-uniqueness) explains uniqueness in any reduced ring. As a local illustration, every integrally closed domain satisfies the condition by [lem-author-30ec96de6e59-normal-domain-square-cube](item-lem-author-30ec96de6e59-normal-domain-square-cube). The scheme-level normality implication, in the stated locally finite type scope, is supplied by [thm-author-30ec96de6e59-seminormalization-input](item-thm-author-30ec96de6e59-seminormalization-input).

The same input supplies finiteness over the reduction for $X$ locally of finite type over a field. Its noetherian intermediate-ring finiteness calculation is [lem-author-30ec96de6e59-finite-intermediate-module](item-lem-author-30ec96de6e59-finite-intermediate-module); this definition does not repeat the normalization construction. If such an $X$ is reduced, its nilradical sheaf is zero and $X_{\mathrm{red}}=X$. Its seminormalization is therefore a finite subintegral morphism with reduced source. If $X$ passes the finite-morphism test, applying that test to this morphism gives an isomorphism, hence $X$ is seminormal. Conversely, if $X$ is seminormal, the established input and the bridge prove the stronger test for every subintegral morphism to $X$ with reduced source, so in particular for finite ones.

## External input
[E1] A morphism of schemes is a universal homeomorphism exactly when it is integral, universally injective and surjective. This is the imported equivalence in [Stacks, Lemma 29.46.5](https://stacks.math.columbia.edu/tag/04DF).

[E2] An injective morphism of schemes inducing isomorphisms on all residue fields is universally injective. This is the isomorphism special case of the radicial criterion in [Stacks, Lemma 29.10.2](https://stacks.math.columbia.edu/tag/01S4), with radicial defined in Definition 29.10.1.

[E3] Seminormality on affine neighbourhoods is equivalent to seminormality of every affine coordinate ring, for the unique square-cube root definition. This is [Stacks, Lemma 29.48.4](https://stacks.math.columbia.edu/tag/0EUK).

[E4] Reducedness of all local rings is equivalent to reducedness on an affine open cover, and then every open ring of sections is reduced. This is the affine-local consequence of [Stacks, Definition 26.12.1 and Lemmas 26.12.2–26.12.3](https://stacks.math.columbia.edu/tag/01IZ).

These four premises are imported with the exact hypotheses and reading limits in sources.references. Their literature arguments are not claimed as local proofs. The Justification composes them with the declared mathematical suppliers; it does not reconstruct seminormalization.
