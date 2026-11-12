---
title: Rational third-edge comparison
status: published
research_item: prop-rational-motivic-degeneration
dependency_level: 24
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 14, proof of Proposition 6.2 and Remark 6.3; p. 13, Proposition 6.1
      statement: The proof uses rational degeneration to identify the rational third
        edge with the third image-filtration group; the subsequent remark
        applies the comparison to a curve complement.
      hypotheses: The proposition concerns a normal affine threefold over an
        algebraically closed field; the remark uses the hypotheses of
        Proposition 6.1, an affine threefold and an integral curve in its smooth
        locus.
      reading_limits: Freshly read the supplied article extraction at PDF pp. 13–14,
        including the third-edge construction, Propositions 6.1–6.2, the proof
        of Proposition 6.2 and Remark 6.3. These motivate the applications; the
        broader Noetherian assertion is a local consequence of the declared
        current interfaces. No fresh visual PDF inspection, reconstruction of
        the rational splitting, or article-author defect is claimed.
    - title: The Stacks Project, dimension of nonempty opens in irreducible field
        schemes
      url: https://stacks.math.columbia.edu/tag/06LF
      locator: Definition 33.20.1; Lemma 33.20.3(3), statement and proof of (3).
      statement: For an irreducible scheme locally of finite type over a field, each
        nonempty open subscheme has the same dimension.
      hypotheses: A field k; an irreducible locally finite-type k-scheme C; a nonempty
        open V in C. Applied only to a reduced closed component C of an affine
        finite-type scheme and V=C intersect U.
      reading_limits: Freshly read Definition 33.20.1, Lemma 33.20.3(3) and its proof
        on the primary Stacks page. Import only the scheme open-dimension
        assertion. Its Jacobson and commutative-algebra antecedents were not
        reconstructed. Applied to a reduced closed component C of an affine
        finite-type field scheme and its nonempty open C intersect U.
    - title: The Stacks Project, Noetherian topology and locally closed subschemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Lemmas 28.5.5 and 28.5.6, including the displayed proof of 28.5.5 and
        the hint following 28.5.6.
      statement: The underlying space of a Noetherian scheme is Noetherian; every
        locally closed subscheme of a Noetherian scheme is Noetherian.
      hypotheses: X is a Noetherian scheme; the subscheme is locally closed in X.
        Applied to the open complement U and to the closed reduced components.
      reading_limits: Freshly read Lemmas 28.5.5 and 28.5.6 on the primary Stacks
        page, including the proof of 28.5.5 and the omitted-proof notice and
        hint for 28.5.6. Import the two statements; no reconstruction of their
        antecedents or local proof of 28.5.6 is claimed.
---

PDF p. 14: Proof of Proposition 6.2, rational degeneration; PDF p. 14: Remark 6.3

## Prerequisites

- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [def-third-edge-map](item-def-third-edge-map)
- [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism)
- [prop-rational-weight-splitting-input](item-prop-rational-weight-splitting-input)
- [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration)
- [thm-author-14463ef2f4e5-finite-valuative-dimension](item-thm-author-14463ef2f4e5-finite-valuative-dimension)
- [def-article-conventions](item-def-article-conventions)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension)
- [math:thm-localisations-are-flat](https://alphabetamath.cc/item/thm-localisations-are-flat)
- [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)
- [math:lem-dimension-finite-union-components](https://alphabetamath.cc/item/lem-dimension-finite-union-components)
- [math:lem-chain-dimension-open-cover](https://alphabetamath.cc/item/lem-chain-dimension-open-cover)
- [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-flat-and-faithfully-flat-modules-and-ring-maps](https://alphabetamath.cc/item/def-flat-and-faithfully-flat-modules-and-ring-maps)
- [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)
- [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)
- [math:thm-module-kernel-image-and-injectivity](https://alphabetamath.cc/item/thm-module-kernel-image-and-injectivity)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · p. 14, proof of Proposition 6.2 and Remark 6.3; p. 13, Proposition 6.1 `](https://arxiv.org/abs/2610.22679v1)
- [` The Stacks Project, dimension of nonempty opens in irreducible field schemes · Definition 33.20.1; Lemma 33.20.3(3), statement and proof of (3). `](https://stacks.math.columbia.edu/tag/06LF)
- [` The Stacks Project, Noetherian topology and locally closed subschemes · Lemmas 28.5.5 and 28.5.6, including the displayed proof of 28.5.5 and the hint following 28.5.6. `](https://stacks.math.columbia.edu/tag/01OU)



## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, with the field and scheme data in $\mathcal U$. Use the unbounded derived enhancement of $\mathcal V$-small abelian groups in $\mathcal W$, with compatible universe enlargements and the smallness and pointed-space conventions of the supplied motivic, stable-spectra and shift-index constructions. These size assumptions are additional to Choice. Let $X$ be a Noetherian scheme of Krull dimension $3$ over a field $k$. Let $F^q_{\mathrm{mot}}K(X)$ denote stage $q$ of the Elmanto–Morrow motivic filtration of nonconnective $K$-theory and put
$$F^q_{\mathrm{mot}}K_0(X)=\operatorname{im}\bigl(\pi_0F^q_{\mathrm{mot}}K(X)\to K_0(X)\bigr).$$
The associated motivic spectral sequence degenerates after tensoring its terms and differentials with $\mathbb Q$. Moreover its actual third edge homomorphism induces an isomorphism
$$\epsilon_3\otimes\mathbb Q:\ H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\otimes_{\mathbb Z}\mathbb Q\xrightarrow{\ \cong\ }F^3_{\mathrm{mot}}K_0(X)\otimes_{\mathbb Z}\mathbb Q.$$
Here $K(X)$ is the nonconnective $K$-theory spectrum of perfect complexes, $K_0(X)=\pi_0K(X)$, and $\pi_i$ denotes integer stable homotopy. A $k$-scheme is a scheme with a structure morphism to $\operatorname{Spec}k$. Noetherian means admitting a finite affine open cover by spectra of Noetherian rings. Krull dimension is the supremum of lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of the underlying space; a one-member chain has length zero, and irreducible means not a union of two proper closed subsets. Here $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex; $\epsilon_3$ is the inverse of the actual third-stage projection followed by the stage-to-$K_0$ map restricted to its image. Rational degeneration means that every differential on every page from $E_2$ onward becomes zero after tensoring with $\mathbb Q$.

In particular, this applies to the normal affine threefolds over algebraically closed fields in Proposition 6.2 of the article. It also applies to $X\setminus T$ under Proposition 6.1's hypotheses: $X$ is an affine finite-type threefold over an algebraically closed field and $T$ is a closed integral curve contained in its smooth locus. No normality assumption is needed for this rational comparison on the complement.

An affine scheme is a scheme isomorphic to the prime spectrum $\operatorname{Spec}A$ of a commutative ring with its structure sheaf. An integral curve is a nonempty reduced irreducible scheme of dimension one, and the smooth locus is the set of points where the structure morphism to $\operatorname{Spec}k$ is smooth. Normality in the first application means that each local ring is a domain integrally closed in its fraction field: an element of that field satisfying a monic polynomial over the local ring already belongs to the local ring.

## Facts & Assumptions

**Given:** Choice and the nested-universe, enlargement, smallness and pointed-space assumptions of the Statement, a Noetherian dimension-three scheme $X$ over a specified field $k$, and the actual motivic tower and third edge map described above. The specified field overrides the default algebraic-closedness convention.

**Goal:** Prove rational degeneration and that the rationalization of the actual edge map is an isomorphism, including the two article applications.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed in the perfect-complex and stable-spectra models, the supplied valuation result and the Noetherian topological results. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe closure conditions. Adopt exactly the nested-universe, derived-enhancement and enlargement assumptions of [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism), in addition to Choice. Use them compatibly with [def-third-edge-map](item-def-third-edge-map), [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence), [prop-rational-weight-splitting-input](item-prop-rational-weight-splitting-input) and [def-stable-spectra-interface](item-def-stable-spectra-interface), including their pointed-space conventions. All weight-indexed coproducts below are small in these universes. No new arbitrary-index selection is made in the proof.

[F1] [math:def-field](https://alphabetamath.cc/item/def-field) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) specify the field and structure morphism; [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) supplies the finite Noetherian affine-cover convention. [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space) gives chain dimension. [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) gives a unital embedding $F\hookrightarrow k$, where $F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$, and [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) gives $\operatorname{Spec}k\to\operatorname{Spec}F$. After composing the structure map, [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope) gives qcqs; [thm-author-14463ef2f4e5-finite-valuative-dimension](item-thm-author-14463ef2f4e5-finite-valuative-dimension) gives finite valuative dimension. Dimension three ensures nonemptiness for the former supplier. The arbitrary-field restriction convention of [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) identifies the actual tower with the source tower evaluated on this prime-field scheme.

[F2] Under the qcqs, prime-field and finite-valuative-dimension hypotheses, [prop-rational-weight-splitting-input](item-prop-rational-weight-splitting-input) supplies an equivalence of the actual rationalized augmented tower with a coproduct tail tower and degeneration of its spectral sequence. Its deep splitting is not reconstructed here. [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration) identifies the actual images under an augmented tower equivalence and their successive quotients; it does not state a spectral retraction. We construct the needed retraction in step 2.1 from the zero spectrum and the small coproduct universal property of [def-stable-spectra-interface](item-def-stable-spectra-interface).

[F3] [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism) identifies the actual third-stage-to-cofiber map, followed by the specified graded comparison, with an isomorphism $p_3:\pi_0F^3_{\mathrm{mot}}K(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [def-third-edge-map](item-def-third-edge-map) defines $\epsilon_3$ as $p_3^{-1}$ followed by the actual map to the image subgroup, and supplies its formulation, $K_0$ indexing and cohomology notation. [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) supplies the actual graded and spectral-sequence identifications over the specified field.

[F4] [prop-rational-weight-splitting-input](item-prop-rational-weight-splitting-input) supplies exact rationalization of spectra and the natural isomorphism $\pi_i(E_{\mathbb Q})\cong\pi_i(E)\otimes_{\mathbb Z}\mathbb Q$, identifying the homomorphism of every spectral map with its tensor product. In particular this applies simultaneously to a stage, the augmented abutment and the stage-to-abutment map.

[F5] Tensor products of abelian groups use [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) with $R=\mathbb Z$. For a homomorphism $f$, the induced map sends $a\otimes q$ to $f(a)\otimes q$; additivity respects the defining relations, and these maps preserve identities and composition on the generators. Identify $\mathbb Q=S^{-1}\mathbb Z$ for the multiplicative set of nonzero integers $S$, by the usual fraction map $a/s\mapsto a/s$. [math:thm-localisations-are-flat](https://alphabetamath.cc/item/thm-localisations-are-flat) makes this a flat $\mathbb Z$-algebra, so tensoring preserves exact sequences in the sense of [math:def-flat-and-faithfully-flat-modules-and-ring-maps](https://alphabetamath.cc/item/def-flat-and-faithfully-flat-modules-and-ring-maps). Kernels and images have their set-theoretic module meanings from [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel), applied to abelian groups as $\mathbb Z$-modules. [math:thm-module-kernel-image-and-injectivity](https://alphabetamath.cc/item/thm-module-kernel-image-and-injectivity) makes them submodules. Exactness means equality of the image with the next kernel, as in [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules).

[F6] [def-article-conventions](item-def-article-conventions) fixes the affine finite-type and algebraically closed field conventions of the two article applications, as well as chain dimension. [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension) gives Noetherianity of a finitely generated field algebra under Choice; the finite affine-cover definition in [F1] then gives Noetherianity of an affine finite-type field scheme. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) supplies the affine presentation, [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme) supplies the integral-curve notion, and [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) supplies smoothness at a point for the stated smooth locus. Normality is defined inline in the Statement. Only the closedness and dimension one of the article's integral curve are needed below; its smooth-locus restriction and the first application's normality impose no extra step in this rational argument.

[F7] Reference 1 imports dimension preservation for nonempty opens of irreducible locally finite-type field schemes. A component is taken with its reduced induced closed-scheme structure, as in [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme); [math:thm-affine-closed-immersions-quotient-rings](https://alphabetamath.cc/item/thm-affine-closed-immersions-quotient-rings) realizes a closed subscheme of an affine scheme as a quotient spectrum. [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components) gives the finite component cover; [math:lem-dimension-finite-union-components](https://alphabetamath.cc/item/lem-dimension-finite-union-components) makes the dimension of the union its maximum component dimension. [math:lem-chain-dimension-open-cover](https://alphabetamath.cc/item/lem-chain-dimension-open-cover) implies $\dim V\leq\dim Y$ for an open $V$ of a Noetherian space $Y$, by applying it to the cover $Y=Y\cup V$.

[F8] Reference 2 imports that the underlying space of a Noetherian scheme is Noetherian and that its locally closed subschemes, in particular its open complement and closed reduced components, are Noetherian. This supplies the topological hypotheses in [F1] and [F7] and the Noetherianity of the complement.

## External input
Reference 1 supplies precisely the scheme-theoretic open-dimension assertion of [F7]; reference 2 supplies the Noetherian assertions of [F8]. Their hypotheses and reading limits are recorded in the source records. The argument below locally combines them with the declared suppliers and the rational splitting of [F2]; it does not reconstruct the splitting or the cited Stacks foundations. Reference 0 records the original article applications, not a separate assumption of the claimed edge isomorphism.

## Proof

1.1 Compose $X\to\operatorname{Spec}k$ with the prime-field morphism of [F1]. The underlying scheme, its affine rings and hence its valuative dimension are unchanged. Under [A1], [F1] gives qcqs and finite valuative dimension; its arbitrary-field restriction convention identifies the actual local tower with the source tower on this prime-field scheme. Thus [F2] applies to this augmented tower. Its spectral-sequence consequence, with the actual page identifications in [F3], proves that all differentials from $E_2$ onward vanish after tensoring with $\mathbb Q$. [A1, F1, F2, F3, given]

2.1 Let $A=\pi_0F^3_{\mathrm{mot}}K(X)$, $B=K_0(X)$ and $u:A\to B$ be the actual stage homomorphism. Write the rational split tower of [F2] as $T^q=\bigoplus_{j\geq q}G_j$ and let $i_3:T^3\to T^0$ be its tail inclusion and augmentation. By the coproduct universal property in [F2], define $r:T^0\to T^3$ to be the canonical inclusion on $G_j$ for $j\geq3$ and the zero map for $j<3$. For each $j\geq3$, the restriction of $r\circ i_3$ to $G_j$ is the canonical inclusion $G_j\to T^3$, just as for the identity of $T^3$. The coproduct mapping-space universal property therefore identifies $r\circ i_3$, up to homotopy, with that identity. Applying $\pi_0$ makes $\pi_0(i_3)$ a split injection. The augmented tower equivalence carries the rationalized stage-to-$K$ map to $i_3$; by the natural comparison of [F4] on both source and target, this identifies $u\otimes\mathbb Q$ with $\pi_0(i_3)$ up to the specified vertical isomorphisms. Thus $u\otimes\mathbb Q$ is injective. The image identification of [F2] refers to this actual augmentation, with no infinite-coproduct homotopy calculation required. [A1, F2, F3, F4, step 1.1, construct]

3.1 Put $I=\operatorname{im}u=F^3_{\mathrm{mot}}K_0(X)$ and $N=\ker u$. Factor $u$ as $A\xrightarrow{v}I\xrightarrow{i}B$, where $v$ is surjective and $i$ is the subgroup inclusion. By [F5], $N$ and $I$ are submodules and $0\to N\to A\xrightarrow{v}I\to0$ is exact: $v$ is onto by the definition of image and has kernel $N$. Flatness makes its tensor product with $\mathbb Q$ exact. Since $(i\otimes\mathbb Q)(v\otimes\mathbb Q)=u\otimes\mathbb Q$ is injective by step 2.1, $v\otimes\mathbb Q$ is injective as well; it is surjective by exactness. Thus $A\otimes\mathbb Q\to I\otimes\mathbb Q$ is an isomorphism, identifying the rationalization of the actual image subgroup. [F3, F5, step 2.1, algebra]

4.1 By [F3], $\epsilon_3=v\circ p_3^{-1}$ and $p_3$ is an isomorphism. Its tensor product has inverse the tensor product of $p_3^{-1}$, since their two composites remain identities. Tensoring the displayed composite and applying step 3.1 therefore proves the stated rational third-edge isomorphism. [F3, F5, step 3.1, algebra]

5.1 For the article applications, the affine finite-type threefold is Noetherian by [F6] and has dimension three by hypothesis; thus steps 1.1–4.1 apply to it. For its complement $U=X\setminus T$, [F8] gives Noetherianity and [F7] gives $\dim U\leq3$. By [F7] and [F8], $X$ has finitely many irreducible components and their maximum dimension is three, so choose a component $C$ of dimension three with the reduced closed-scheme structure. It is a finite-type field scheme: in the given affine presentation its coordinate ring is a quotient of the finitely generated coordinate algebra, generated by the images of the same finite generators. Since $T$ is closed of dimension one, it cannot contain $C$: every chain in the closed subset $C$ would then be a chain in $T$. Hence $C\cap U$ is a nonempty open in the irreducible finite-type field scheme $C$. The scheme input in [F7] gives $\dim(C\cap U)=3$. It is closed in $U$, so its irreducible closed chains are also such chains in $U$; thus $\dim U\geq3$ and equality follows. The restricted structure morphism makes $U$ a scheme over the same field. With the same Choice and size conventions, steps 1.1–4.1 apply to $U$. This proves both applications, without using normality for the complement. [A1, F1, F6, F7, F8, given, step 4.1, choose] ∎
