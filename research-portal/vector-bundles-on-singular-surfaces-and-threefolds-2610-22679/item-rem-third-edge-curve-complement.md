---
title: Third edge on a curve complement
status: published
research_item: rem-third-edge-curve-complement
dependency_level: 25
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 14, Remark 6.3 and proof of Proposition 6.2; p. 13, Proposition
        6.1
      statement: For the curve complement in Proposition 6.1, the third edge map is an
        isomorphism and the third-stage map to K_0 is injective.
      hypotheses: An affine threefold over an algebraically closed field and an
        integral curve in its smooth locus, with the article’s standing
        conventions.
      reading_limits: For this repair, read Proposition 6.1, the opening edge-map
        construction, Proposition 6.2 and its proof, and Remark 6.3 in the
        frozen article extraction at printed pp. 13–14; visually inspected
        supplied PDF image page-14.png. The local proof composes the current
        declared torsion-freeness, rational-comparison, third-projection and
        edge-map contracts. Their upstream external proofs were not
        reconstructed or independently source-audited here; no acceptance is
        asserted.
---

PDF p. 14: Remark 6.3

## Prerequisites

- [prop-curve-complement-torsion-free](item-prop-curve-complement-torsion-free)
- [prop-rational-motivic-degeneration](item-prop-rational-motivic-degeneration)
- [lem-rational-injection-detection](item-lem-rational-injection-detection)
- [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism)
- [def-third-edge-map](item-def-third-edge-map)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 14, Remark 6.3 and proof of Proposition 6.2; p. 13, Proposition 6.1 `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the size conventions used for motivic cohomology with support. Let $X$ be an affine finite-type scheme of Krull dimension three over an algebraically closed field $k$, and let $T\subset X$ be a closed integral curve contained in the smooth locus of $X\to\operatorname{Spec}k$. Put $U=X\setminus T$. Then the third edge homomorphism
$$\epsilon_3:H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)\longrightarrow F^3_{\mathrm{mot}}K_0(U)$$
is an isomorphism, and the stage-to-$K$ homomorphism
$$\pi_0F^3_{\mathrm{mot}}K(U)\longrightarrow K_0(U)$$
is injective. No normality assumption on $X$ is made.

An integral curve is a reduced irreducible scheme of dimension one; the smooth locus consists of the points where the structure morphism to $\operatorname{Spec}k$ is smooth. The spectrum $F^3_{\mathrm{mot}}K(U)$ is the third stage of the decreasing motivic filtration of nonconnective $K$-theory, and $\pi_0$ denotes its zeroth stable homotopy group. The group $K_0(U)=\pi_0K(U)$ is the zeroth homotopy group of the $K$-theory spectrum. The image-filtration group $F^3_{\mathrm{mot}}K_0(U)$ is the image of the displayed stage-to-$K$ map. Finally, $H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex on $U$; the third edge map is the inverse of the third-stage graded projection followed by the stage map with codomain restricted to its image.

## Statement references
[prop-curve-complement-torsion-free](item-prop-curve-complement-torsion-free)

[prop-rational-motivic-degeneration](item-prop-rational-motivic-degeneration)

[def-third-edge-map](item-def-third-edge-map)

[def-article-conventions](item-def-article-conventions)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[def-motivic-filtration](item-def-motivic-filtration)

[def-motivic-cohomology](item-def-motivic-cohomology)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

## Facts & Assumptions

**Given:** The field $k$, scheme $X$, curve $T$, complement $U$, Axiom of Choice, and size conventions in the statement.

**Goal:** Prove that the actual third edge is an isomorphism and that the actual third-stage map to $K_0(U)$ is injective.

[F0] [def-article-conventions](item-def-article-conventions) supplies the algebraically closed base-field, finite-type affine and chain-dimension conventions, including the structure morphism of a $k$-scheme. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) defines an affine scheme by a spectrum with its structure sheaf. [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme) supplies the nonempty reduced irreducible scheme notion used for $T$. The smooth locus in the statement is the set of points where the structure morphism is smooth in the pointwise sense of [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes). The open complement $U$ has the restricted structure sheaf as in [def-cohomology-with-support](item-def-cohomology-with-support); its Noetherian dimension-three scope is supplied by [F2].

[F1] Under exactly these geometry, choice and size hypotheses, [prop-curve-complement-torsion-free](item-prop-curve-complement-torsion-free) gives that $H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)$ is torsion-free: an element killed by a positive integer is zero. The size conventions are those of [def-cohomology-with-support](item-def-cohomology-with-support). The assumed Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the Choice premise of this supplier and its support constructions, and the Choice premises of the rational comparison in [F2] and the third-stage projection in [F4].

[F2] [prop-rational-motivic-degeneration](item-prop-rational-motivic-degeneration) applies to this complement without normality: it establishes that $U$ is Noetherian of dimension three over $k$ and that the actual third edge becomes an isomorphism after tensoring with $\mathbb Q$.

[F3] For a homomorphism of abelian groups with torsion-free domain, [lem-rational-injection-detection](item-lem-rational-injection-detection) gives injectivity when its rationalization is injective; if the homomorphism is also surjective, it is an isomorphism.

[F4] Under Choice for a Noetherian three-dimensional scheme over a field, [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism) gives the actual projection $p_3:\pi_0F^3_{\mathrm{mot}}K(U)\xrightarrow{\cong}H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)$. By [def-third-edge-map](item-def-third-edge-map), the edge is $p_3^{-1}$ followed by the stage map to its image, and is surjective.

[F5] [def-motivic-filtration](item-def-motivic-filtration) supplies the actual decreasing filtration of nonconnective perfect-complex $K$-theory, its stage-to-$K$ map and its image subgroup. [def-motivic-cohomology](item-def-motivic-cohomology) supplies the evaluated weight-three complex and its degree-six cohomology. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra and the abelian stable homotopy groups $\pi_0$ used in these maps. Use the compatible universe, smallness and pointed-space conventions shared by these constructions and [def-cohomology-with-support](item-def-cohomology-with-support), including their required universe enlargements. These are the size conventions assumed in the statement, not a consequence of Choice. Together with [F2], they discharge the scope and size premises of [F4]. No comparison with an independently constructed support or edge map is assumed.

## Proof

1.1 The given $X$, $k$ and $T$ satisfy the hypotheses of [F1] and the complement application of [F2]. Hence the domain of $\epsilon_3$ is torsion-free and $\epsilon_3\otimes_{\mathbb Z}\mathbb Q$ is an isomorphism, in particular injective. [F1, F2, given]

2.1 The edge map is surjective by [F4]. Applying [F3] to it and the two facts in step 1.1 shows that $\epsilon_3$ is an isomorphism. [F3, F4, step 1.1]

3.1 Let $u:\pi_0F^3_{\mathrm{mot}}K(U)\to K_0(U)$ be the stage map. By [F4], $p_3$ is an isomorphism and $u$ is the composite of $p_3$, $\epsilon_3$, and the inclusion of the image subgroup $F^3_{\mathrm{mot}}K_0(U)$ into $K_0(U)$. Each factor is injective, using step 2.1 for the middle factor. Therefore $u$ is injective, proving both assertions. [F4, step 2.1] ∎
