---
title: Unique divisibility of the smooth-point subgroup
status: published
research_item: prop-smooth-cycle-unique-divisibility
dependency_level: 26
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 17, proof of Corollary 6.9; p. 14, Definition 6.5
      reading_limits: For this repair, read the supplied article extraction at
        Definition 6.5 and the proof of Corollary 6.9 on printed pp. 14 and 17.
        No fresh visual PDF inspection, reconstruction of the article proof, or
        author-defect attribution is claimed.
      statement: Definition 6.5 defines the pure-dimensional smooth-point subgroup
        inside the top motivic image piece. The proof of Corollary 6.9 invokes
        Krishna Corollary 1.5 for its unique divisibility. The componentwise
        extension in this item is a local consequence, not a separate statement
        attributed to the article.
      hypotheses: Definition 6.5 assumes qcqs X of pure dimension d over a perfect
        field. Corollary 6.9 assumes a normal affine threefold over an
        algebraically closed field; the article uses finite-type affine schemes.
        The present item explicitly retains finite type, Choice and size
        conventions.
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles
      url: https://arxiv.org/html/1511.04221v3
      locator: v3, Theorems 1.3–1.4, Corollary 1.5; §1.9 finite-type convention; §2.1,
        equations (2.1)–(2.2) and following K-theory convention
      reading_limits: Read the versioned HTML theorem statements, Corollary 1.5, §1.9,
        and §2.1 through (2.2) and the following K-theory paragraph. No
        reconstruction of the deep proofs or Levine–Weibel Proposition 2.1 is
        claimed; perfect-K-zero transport is used through the declared Krishna
        input.
      statement: For reduced affine algebras, CH^d is uniquely divisible when d >= 2;
        the cycle-map kernel is annihilated by (d-1)! when d >= 1. Its image is
        the smooth-point K-zero subgroup. Here d=3 gives annihilator 2.
      hypotheses: An algebraically closed field, a reduced finite-type affine algebra,
        and the stated dimension bounds. Section 2.1 uses reduced
        quasi-projective schemes over a perfect field and top-dimensional
        regular points; normal components are disjoint in this application.
---

PDF p. 17: Proof of Corollary 6.9, Kri19 Corollary 1.5

## Prerequisites

- [def-smooth-point-filtration](item-def-smooth-point-filtration)
- [rem-levine-weibel-cycle-image](item-rem-levine-weibel-cycle-image)
- [lem-author-80f982ded420-dimension-weight-scope](item-lem-author-80f982ded420-dimension-weight-scope)
- [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products)
- [lem-author-b87d598e83f3-cycle-image-roots](item-lem-author-b87d598e83f3-cycle-image-roots)
- [lem-author-b87d598e83f3-isomorphism-transfers-roots](item-lem-author-b87d598e83f3-isomorphism-transfers-roots)
- [thm-author-b87d598e83f3-krishna-cycle-input](item-thm-author-b87d598e83f3-krishna-cycle-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect)
- [lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:lem-clopen-subset-gives-idempotent-decomposition](https://alphabetamath.cc/item/lem-clopen-subset-gives-idempotent-decomposition)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-principal-localisation](https://alphabetamath.cc/item/def-principal-localisation)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · p. 17, proof of Corollary 6.9; p. 14, Definition 6.5 `](https://arxiv.org/abs/2610.22679v1)
- [` Amalendu Krishna, Murthy’s conjecture on 0-cycles · v3, Theorems 1.3–1.4, Corollary 1.5; §1.9 finite-type convention; §2.1, equations (2.1)–(2.2) and following K-theory convention `](https://arxiv.org/html/1511.04221v3)


## Statement
Assume the Axiom of Choice and the size conventions of the smooth-point construction. Let $k$ be an algebraically closed field and $X$ a normal, pure-dimensional affine $k$-scheme of finite type and dimension $3$. The smooth-point subgroup $F^3_{\mathrm{sm}}K_0(X)$, generated by the perfect residue-sheaf classes of smooth closed points, is uniquely divisible: multiplication by every positive integer is an isomorphism. In particular multiplication by $2$ is an isomorphism.

More generally, if normal affine $X$ has dimension $3$ but has lower-dimensional components, let $X_3$ be the union of its three-dimensional components. Its zero-extended subgroup $F^3_{\mathrm{sm,top}}K_0(X)=(i_3)_*F^3_{\mathrm{sm}}K_0(X_3)$ is uniquely divisible. This assertion does not include smooth points on lower-dimensional components in fixed weight $3$.

## Facts & Assumptions
**Given:** The field and scheme hypotheses, choice and size conventions in the statement. The more general case retains the same field and finite-type hypotheses, dropping only purity.

**Goal:** Prove unique divisibility in the pure case and for the stated zero-extended subgroup, including the multiplier $2$.

[F1] [thm-author-b87d598e83f3-krishna-cycle-input](item-thm-author-b87d598e83f3-krishna-cycle-input) gives unique divisibility of the Levine–Weibel group and a kernel killed by $2$ for its actual cycle map on a reduced pure affine threefold over $k$. Its map is already transported to the perfect $K_0$ used here.

[F2] [rem-levine-weibel-cycle-image](item-rem-levine-weibel-cycle-image) identifies the actual cycle-map image with the smooth-point subgroup, using the residue-sheaf point classes. [def-smooth-point-filtration](item-def-smooth-point-filtration) defines the latter for pure qcqs schemes over a perfect field, including its perfect-residue-sheaf interpretation and the ambient perfect $K_0$ group.

[F3] [lem-author-b87d598e83f3-cycle-image-roots](item-lem-author-b87d598e83f3-cycle-image-roots) gives unique divisibility of an image when its domain is uniquely divisible and its kernel is torsion. Here $ng$ means the sum of $n$ copies of $g$, torsion means killed by some positive integer, and unique divisibility means bijectivity of every positive multiplication map, as in that supplier.

[F4] [lem-author-80f982ded420-normal-point-strata](item-lem-author-80f982ded420-normal-point-strata) supplies the finite clopen dimension partition; each nonempty stratum $X_e$ is pure of dimension $e$. The normal affine finite-type hypotheses for $X_3$ will be checked locally using [F8]. [lem-author-80f982ded420-dimension-weight-scope](item-lem-author-80f982ded420-dimension-weight-scope) defines its zero-extended top-dimensional subgroup and excludes lower-dimensional point classes in fixed weight $3$. [lem-author-80f982ded420-clopen-filtered-products](item-lem-author-80f982ded420-clopen-filtered-products) makes zero extension an injective coordinate inclusion in the actual image filtration. [lem-author-b87d598e83f3-isomorphism-transfers-roots](item-lem-author-b87d598e83f3-isomorphism-transfers-roots) transports unique divisibility across an isomorphism.

[F5] An algebraically closed field has a root for every nonconstant polynomial, as in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). By [math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect](https://alphabetamath.cc/item/cor-fields-of-characteristic-zero-and-finite-fields-are-perfect), $k$ is perfect in every characteristic. An affine scheme has a spectrum presentation by [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), and a $k$-scheme is equipped with a morphism to $\operatorname{Spec}k$ by [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). Finite type refers to this morphism, in the sense of [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Pure dimension $3$ means that every irreducible component has dimension $3$; dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets.

[F6] Under the assumed Choice, [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated) makes the coordinate algebra $A$ of $X$ finitely generated over $k$. By [math:lem-field-is-noetherian](https://alphabetamath.cc/item/lem-field-is-noetherian), $k$ is noetherian, so [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) makes $A$ noetherian. The one-chart affine cover makes $X$ a noetherian scheme. Normal means that each local ring is an integrally closed domain. [lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction) supplies these conventions and decomposes a normal noetherian scheme into integral clopen components; in particular it is reduced, meaning that nilpotent local sections vanish.

[F7] [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) make $X$ qcqs, as required in [F2] and [F4]. These apply to every affine scheme, hence also to $X_3$ once its affine presentation is established using [F8] in step 2.1. Here qcqs means quasi-compact and quasi-separated, with the finite-cover and affine-intersection meaning recorded in [def-smooth-point-filtration](item-def-smooth-point-filtration).

[F8] Under Choice, [math:lem-clopen-subset-gives-idempotent-decomposition](https://alphabetamath.cc/item/lem-clopen-subset-gives-idempotent-decomposition) writes a clopen subset of $\operatorname{Spec}A$ as $D(1-a)$ for an idempotent $a\in A$, meaning $a^2=a$. [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) identifies this open subscheme with $\operatorname{Spec}A_{1-a}$, compatibly with its map to $\operatorname{Spec}A$. By [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme), an open subscheme carries the restricted structure sheaf. By [math:def-principal-localisation](https://alphabetamath.cc/item/def-principal-localisation), elements of $A_f$ have the form $b/f^n$; thus the images of $A$ and $f^{-1}$ generate it as an algebra over $A$. Finite generation over $k$ means generation by polynomial expressions in a finite list, as in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras). These are the interfaces for the local inheritance argument below; no inheritance assertion is taken from an unstated part of [F4].

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site and universe bounds of the supplied constructions, using [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) for universes. Existence of the required universes is a separate size assumption. Choice and these bounds discharge the inherited premises of [F1], [F2] and [F4]; Choice also discharges the affine-coordinate, normal-component, affine quasi-compactness and clopen-idempotent premises in [F6]–[F8]. The local image and isomorphism arguments in [F3] and [F4] add no choice principle.

## External input
The article's Definition 6.5 fixes the pure-dimensional subgroup; its proof of Corollary 6.9 invokes Krishna's Corollary 1.5 for unique divisibility. Krishna's Theorems 1.3 and 1.4 supply the divisibility and factorial kernel bound used through [F1]. The two references record their exact hypotheses and reading limits. The local proof below composes the declared cycle-map, hypothesis-conversion and clopen interfaces; it does not reconstruct those imported theorems.

## Proof
1.1 By [F5], $k$ is perfect. By [F6], the finite-type affine $X$ is noetherian, and its normality therefore makes it reduced; by [F7] it is qcqs. Thus in the pure case all hypotheses of [F1] and [F2] hold, with Choice and size bounds from [A1]. The kernel killed by $2$ in [F1] is torsion in the sense of [F3]. Applying [F3] to that actual cycle map yields unique divisibility of its image. By [F2] the image is exactly $F^3_{\mathrm{sm}}K_0(X)$ with the stated point-class normalization. Hence multiplication by every positive integer, in particular $2$, is an isomorphism on that subgroup. [A1, F1, F2, F3, F5, F6, F7, given]

2.1 In the dimension-only case, [F5]–[F7] make $k$ perfect and $X$ noetherian and qcqs, so [F4] applies under [A1]. Since an irreducible subset lies in one piece of a finite disjoint clopen cover, chains of irreducible closed subsets lie in one component. Thus the dimension of $X$ is the maximum component dimension, and its dimension $3$ makes $X_3$ nonempty and pure of dimension $3$ by [F4]. Write $X=\operatorname{Spec}A$. By [F8], $X_3=D(1-a)\cong\operatorname{Spec}A_{1-a}$ over $X$ for an idempotent $a$. Choose a finite $k$-algebra generating list $b_1,\ldots,b_r$ for $A$ using [F6]. Every fraction $b/(1-a)^n$ is a polynomial expression in the images of $b_1,\ldots,b_r$ and $(1-a)^{-1}$. Hence $A_{1-a}$ is finitely generated over the same $k$. Its one affine chart gives a locally finite-type structure morphism by [F5], and it is quasi-compact by [F7]. As $\operatorname{Spec}k$ has only one point (its only prime ideal is zero), this structure morphism is quasi-compact, so it is of finite type by [F5]. Finally the restricted structure sheaf in [F8] has the same germs at every $x\in X_3$ as on $X$: neighbourhoods contained in the open $X_3$ are cofinal among neighbourhoods of $x$. Its local rings are therefore the same integrally closed domains, proving normality. The resulting normal pure affine finite-type threefold is qcqs by [F7], so step 1.1 applies with the same Choice and size bounds. By [F4], its zero-extension map is an injective coordinate inclusion and is an isomorphism onto the subgroup in the statement. The transport result in [F4] gives unique divisibility there. This selects only top-dimensional components and makes no fixed-weight assertion about points on smaller components. [A1, F4, F5, F6, F7, F8, step 1.1, construct, algebra] ∎
