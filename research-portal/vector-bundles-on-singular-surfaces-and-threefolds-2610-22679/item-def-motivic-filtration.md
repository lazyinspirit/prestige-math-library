---
title: Motivic filtration and image groups
status: draft
research_item: def-motivic-filtration
dependency_level: 11
---

PDF p. 2: Introductory filtration; PDF p. 3: Section 2 opening; PDF p. 8: Section 4 opening

## Prerequisites

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
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice, and the integer indices specified above.

**Goal:** Justify the functor, its augmentation and multiplication, and the image-group definition without reconstructing the external filtration.

[F1] [def-article-conventions](item-def-article-conventions) defines the scheme category; every field contains its prime field, either $\mathbb Q$ or $\mathbb F_p$.

[F2] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the explicit AC hypothesis of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family perfect-complex realization and essentially small nonconnective-functor domain are invoked. That interface supplies contravariant nonconnective $K$, all integer homotopy groups and the ambient ring structure. [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) imports the nonnegative filtration, functoriality, multiplication and zeroth-stage equivalence on qcqs schemes over the prime field.

[F3] [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension) supplies the integer-indexed extension; [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specify its augmentation and coherent algebra-object notation.

[F4] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image), [lem-author-98a750efd0cc-filtration-nesting](item-lem-author-98a750efd0cc-filtration-nesting), [lem-author-98a750efd0cc-filtration-naturality](item-lem-author-98a750efd0cc-filtration-naturality) and [lem-author-98a750efd0cc-filtration-products](item-lem-author-98a750efd0cc-filtration-products) establish, respectively, subgroup and surjectivity, nesting, naturality and compatibility of products for such images.

## Justification
1.1 Invoke the perfect-complex $K$-theory interface in [F2] under the assumed Choice premise. The structure morphism of each $k$-scheme composes with $\operatorname{Spec}k\to\operatorname{Spec}\mathbb F$ for its prime field $\mathbb F$. Its underlying scheme remains qcqs, and every $k$-morphism is an $\mathbb F$-morphism. Restrict the functor in [F2] along this forgetful functor; no finite-type, regularity or finite-dimensional assumption is needed. [F1, F2, given]

2.1 Apply the extension in [F3] to the restricted nonnegative tower. Its stage zero is naturally equivalent to $K$, and its coherent products give the displayed maps. The extension and all maps are functorial because they are built from the original transitions and products. The equality at stage zero is notation for the supplied natural equivalence. [F2, F3, step 1.1]

3.1 Apply the image lemma in [F4] to each stage-to-$K$ map. The subgroup and surjectivity statements follow. Nesting, pullback compatibility and product containment follow from the remaining lemmas in [F4]. If $j<0$, the extended stage and its map to $K$ are identified with $K$ and its identity, so the image is the whole group. This justifies the definition and its stated properties. [F3, F4, step 2.1] ∎

## Scope
The external construction is not reconstructed here. No completeness, boundedness, associated-graded identification or injectivity of a stage-to-$K$ map is asserted by this definition.
