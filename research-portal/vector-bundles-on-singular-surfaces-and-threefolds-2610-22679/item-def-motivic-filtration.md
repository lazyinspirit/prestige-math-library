---
title: Motivic filtration and image groups
status: published
research_item: def-motivic-filtration
dependency_level: 13
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 2, introductory discussion; p. 3, Section 2 opening; p. 8,
        Section 4 opening
      statement: The article describes a functorial multiplicative motivic filtration
        on nonconnective algebraic K-theory, with zeroth stage K, and defines
        its image filtration groups for every homotopy degree and nonnegative
        filtration index. Section 4 records surjections from stage homotopy
        groups onto the images.
      hypotheses: Qcqs schemes over the standing algebraically closed base field k,
        unless a statement specifies otherwise; homotopy degree is any integer,
        and the Section 2 image definition uses nonnegative filtration indices.
      reading_limits: Read the frozen article text at printed pp. 2, 3 and 8 and
        inspected the supplied PDF page images for pp. 3 and 8. These passages
        support the filtration notation, products, stage zero, image definition
        and surjectivity. The negative-index convention is implemented by the
        declared local extension lemma; prime-field restriction and the local
        justification below are not attributed to the article. The
        Elmanto-Morrow construction is used through its declared imported
        interface; no fresh reading or reconstruction of its deep proof is
        claimed here.
---

PDF p. 2: Introductory filtration; PDF p. 3: Section 2 opening; PDF p. 8: Section 4 opening

## Prerequisites

- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input)
- [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension)
- [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image)
- [lem-author-98a750efd0cc-filtration-nesting](item-lem-author-98a750efd0cc-filtration-nesting)
- [lem-author-98a750efd0cc-filtration-naturality](item-lem-author-98a750efd0cc-filtration-naturality)
- [lem-author-98a750efd0cc-filtration-products](item-lem-author-98a750efd0cc-filtration-products)
- [` Vector bundles on singular surfaces and threefolds · PDF p. 2, introductory discussion; p. 3, Section 2 opening; p. 8, Section 4 opening `](https://arxiv.org/abs/2610.22679v1)


## Definition
Assume the Axiom of Choice and fix a field $k$, algebraically closed under the article convention unless otherwise specified. Write $\mathrm{Sch}_k$ for the category of quasi-compact quasi-separated $k$-schemes and $k$-morphisms, as in [def-article-conventions](item-def-article-conventions). For $X$ in this category, let $K(X)$ be the nonconnective $K$-theory spectrum of perfect complexes, and let $K_i(X)=\pi_iK(X)$ for every integer $i$, as in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

The **motivic filtration** $F^\bullet_{\mathrm{mot}}K$ is the Elmanto–Morrow functorial multiplicative nonnegative filtration supplied by [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input), restricted from the prime field of $k$ to $k$-schemes. Extend it to integer indices by the construction of [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension). Thus it is a functor

$$F^\bullet_{\mathrm{mot}}K:\mathrm{Sch}_k^{\mathrm{op}}\longrightarrow\operatorname{CAlg}(\operatorname{FilSp}),$$

where $\operatorname{FilSp}$ is the category of integer-indexed decreasing spectra with coherent transitions and $\operatorname{CAlg}$ denotes its coherently commutative, associative and unital algebra objects, as specified in [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). Its zeroth stage is naturally equivalent to $K(X)$; we use that equivalence to write $F^0_{\mathrm{mot}}K(X)=K(X)$. Its multiplication includes maps

$$F^a_{\mathrm{mot}}K(X)\wedge F^b_{\mathrm{mot}}K(X)\longrightarrow F^{a+b}_{\mathrm{mot}}K(X)$$

for all integers $a,b$, coherently compatible with transitions, pullback and the multiplication on $K(X)$.

For $i\in\mathbb Z$ and $j\geq0$, define the **image filtration group**

$$F^j_{\mathrm{mot}}K_i(X)=\operatorname{im}\bigl(\pi_iF^j_{\mathrm{mot}}K(X)\longrightarrow K_i(X)\bigr).$$

The arrow is induced by the transition to stage zero and its identification with $K(X)$. Its image is a subgroup, and the induced map onto that subgroup is surjective. The same formula also makes sense for negative $j$ under the stated extension, in which case it gives all of $K_i(X)$.

## Facts & Assumptions
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice, the fixed compatible universes of the supplied spectral interfaces, and the integer indices specified above.

**Goal:** Justify the functor, its augmentation and multiplication, and the image-group definition without reconstructing the external filtration.

[F1] [def-article-conventions](item-def-article-conventions) defines the scheme category. By [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification), the prime subfield $k_0$ of $k$ admits a unit-preserving isomorphism from $\mathbb F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$. Composing this isomorphism with $k_0\hookrightarrow k$ gives a unit-preserving embedding $\iota:\mathbb F\hookrightarrow k$.

[F2] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the explicit AC hypothesis of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family perfect-complex realization and essentially small nonconnective-functor domain are invoked. That interface supplies contravariant nonconnective $K$, all integer homotopy groups and the ambient ring structure. [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) imports the nonnegative filtration, functoriality, multiplication and zeroth-stage equivalence on qcqs schemes over the prime field.

[F3] [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension) supplies the integer-indexed extension; [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specify its augmentation and coherent algebra-object notation. All diagrams and algebra objects use the fixed compatible universes required by these interfaces.

[F4] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image), [lem-author-98a750efd0cc-filtration-nesting](item-lem-author-98a750efd0cc-filtration-nesting), [lem-author-98a750efd0cc-filtration-naturality](item-lem-author-98a750efd0cc-filtration-naturality) and [lem-author-98a750efd0cc-filtration-products](item-lem-author-98a750efd0cc-filtration-products) establish, respectively, subgroup and surjectivity, nesting, naturality and compatibility of products for such images.

[F5] [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) sends a unit-preserving map of commutative rings $A\to B$ contravariantly to a morphism of affine schemes $\operatorname{Spec}B\to\operatorname{Spec}A$. It applies to the embedding $\iota$ in [F1].

## Justification
1.1 Invoke the perfect-complex $K$-theory interface in [F2] under the assumed Choice premise and compatible universes. By [F1], use the unit-preserving embedding $\iota:\mathbb F\hookrightarrow k$ from the appropriate standard prime field. By [F5] it induces $\operatorname{Spec}k\to\operatorname{Spec}\mathbb F$. Compose each $k$-scheme structure morphism with this map. The underlying scheme remains qcqs; a $k$-morphism commutes with the composite structure maps, so is an $\mathbb F$-morphism. Leaving underlying morphisms unchanged preserves identities and composition and gives a forgetful functor $\mathrm{Sch}_k\to\mathrm{Sch}_{\mathbb F}$. Restrict the filtration functor in [F2] along its opposite. No finite-type, regularity or finite-dimensional assumption is needed. [F1, F2, F5, given]

2.1 Use the natural zeroth-stage equivalence in [F2] to identify stage zero with the commutative ring spectrum $K$, and apply the extension in [F3] to the restricted nonnegative tower. Its coherent products give the displayed maps. The extension and all maps are functorial because they are built from the original transitions and products; the equality at stage zero denotes the supplied natural equivalence. Apply the image lemma in [F4] to each stage-to-$K$ map to obtain the subgroup and surjectivity statements. The remaining lemmas in [F4] give nesting, pullback compatibility and product containment. If $j<0$, the extended stage and its map to $K$ are identified with $K$ and its identity, so the image is the whole group. This justifies the definition and its stated properties. [F2, F3, F4, step 1.1] ∎

## Scope
The external construction is not reconstructed here. No completeness, boundedness, associated-graded identification or injectivity of a stage-to-$K$ map is asserted by this definition.
