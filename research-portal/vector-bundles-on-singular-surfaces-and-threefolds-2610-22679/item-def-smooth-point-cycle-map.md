---
title: Smooth-point K theory class map
status: published
research_item: def-smooth-point-cycle-map
dependency_level: 18
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 7, the purity display and equation (2.8)
      reading_limits: Read the supplied article text at printed PDF p. 7, the
        paragraph and displays preceding equation (2.8), and equation (2.8). The
        local purity and image-group suppliers supply the justification and the
        positive residue-class normalization. The affine-line noninjectivity
        example is proved by the new local helper, not attributed to this
        passage. No original-PDF defect review or reconstruction of the
        substantial upstream K-theory inputs is claimed.
      statement: The paragraph preceding equation (2.8) identifies the degree-zero
        K-theory restriction fiber at a smooth closed point with the integers by
        Zariski excision and purity, then defines a homomorphism from the
        integers to its image K_0({x};X) inside K_0(X).
      hypotheses: X is a quasi-compact quasi-separated scheme over a perfect field k;
        x is a closed point in the smooth locus of X over k. The generated item
        additionally assumes inherited Choice and suitable universe bounds.
---

PDF p. 7: Equation (2.8)

## Prerequisites

- [prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity)
- [def-support-image-groups](item-def-support-image-groups)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-article-conventions](item-def-article-conventions)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)
- [lem-adjudicate-7a5c49c4e930-affine-line-point-class](item-lem-adjudicate-7a5c49c4e930-affine-line-point-class)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 7, the purity display and equation (2.8) `](https://arxiv.org/abs/2610.22679v1)


## Definition
Assume the Axiom of Choice and the size conventions of the support construction. Let $k$ be a perfect field, $X$ a quasi-compact quasi-separated $k$-scheme, and $x$ a closed point at which $X\to\operatorname{Spec}k$ is smooth. A perfect field is a field all of whose algebraic extensions are separable; smooth at $x$ means that $x$ has an open neighbourhood on which the structure morphism is smooth. Put $U=X\setminus\{x\}$.

On qcqs schemes, $K$ denotes nonconnective K-theory of perfect complexes. On an arbitrary open $W\subseteq X$, use $K(W)=\operatorname*{holim}_{V\in\mathcal Q(W)^{\mathrm{op}}}K(V)$, where $\mathcal Q(W)$ is the poset of quasi-compact opens of $W$ and arrows in the diagram are restrictions, with the inherited size bounds. This recovers the supplied value when $W$ is quasi-compact. Write $K(X/U)=\operatorname{fib}(K(X)\to K(U))$, where a fiber is the homotopy pullback along the zero spectrum, and $K_0(X)=\pi_0K(X)$, with $\pi_0$ the degree-zero stable homotopy group. The support-image group $K_0(\{x\};X)$ is the image of $\pi_0K(X/U)\to K_0(X)$.

Let $p_x:\pi_0K(X/U)\xrightarrow{\sim}\mathbb Z$ be the canonical purity isomorphism, normalized so that the supported class of the residue sheaf $i_*\kappa(x)$ maps to $1$, where $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ is the residue field and $i:\operatorname{Spec}\kappa(x)\hookrightarrow X$ is the closed immersion. A closed immersion is a scheme morphism that is a homeomorphism onto a closed subset with surjective structure-sheaf map. Here $i_*\kappa(x)$ has sections $\kappa(x)$ on opens containing $x$ and zero on opens avoiding $x$, with scalar action through the residue map at $x$. A perfect complex is locally represented by a bounded complex of finite locally free modules. Define

$$\varphi_x:\mathbb Z\longrightarrow K_0(\{x\};X)\subseteq K_0(X)$$

as $p_x^{-1}$ followed by the support-to-global homomorphism, with its codomain restricted to its image. In particular, $\varphi_x(n)=n[i_*\kappa(x)]$ in $K_0(X)$, where the bracket is the class of the perfect residue sheaf placed in degree zero. The map need not be injective; for the origin in $\operatorname{Spec}k[t]$ it is zero.

## Definition references
[def-article-conventions](item-def-article-conventions)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-cohomology-with-support](item-def-cohomology-with-support)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity)

[def-support-image-groups](item-def-support-image-groups)

[lem-adjudicate-7a5c49c4e930-affine-line-point-class](item-lem-adjudicate-7a5c49c4e930-affine-line-point-class)

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and compatible size conventions discharge the inherited premises of the supported purity, support-image and perfect K-theory constructions, and the affine-line helper below. They are retained in steps 1.1 and 2.1. Taking an inverse isomorphism and composing the given homomorphisms adds no choice requirement.

**Given:** The field, scheme, point, choice and size conventions in the definition.

**Goal:** Establish that $\varphi_x$ is a well-defined homomorphism with the stated target and normalization, and justify its possible failure of injectivity.

[F1] [prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity) gives the canonical isomorphism $p_x$ under these hypotheses and identifies the inverse image of $1$ with the supported residue-sheaf class; its support-to-global image is the class of the perfect sheaf $i_*\kappa(x)$ in $K_0(X)$.

[F2] [def-support-image-groups](item-def-support-image-groups) defines $K_0(\{x\};X)$ as the image of the support-to-global homomorphism and hence as a subgroup of $K_0(X)$, without asserting injectivity.

[F3] [def-article-conventions](item-def-article-conventions) supplies the qcqs scheme-over-field and residue-field conventions; the perfect-field hypothesis here explicitly replaces the default algebraically closed field. The inline perfect-field definition uses separable extensions as defined in [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions). [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) defines smoothness, [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) defines closed immersions, and [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfectness and degree-zero sheaf objects.

[F4] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) defines $K$ on qcqs schemes with coherent restrictions. [def-cohomology-with-support](item-def-cohomology-with-support) specifies its quasi-compact-open extension, restriction fiber and support-to-global map, with the same size conventions. [def-stable-spectra-interface](item-def-stable-spectra-interface) defines coherent limits, fibers and the abelian stable homotopy groups used here.

[F5] [lem-adjudicate-7a5c49c4e930-affine-line-point-class](item-lem-adjudicate-7a5c49c4e930-affine-line-point-class) proves, under AC and compatible universes, that the affine line is qcqs and smooth over any field, that its origin is a closed point with residue field $k$, and that its perfect residue-sheaf class vanishes in $K_0$.

## Justification
1.1 The objects, maps and homotopy groups are defined by [F3] and [F4]. By [F1], $p_x$ is an isomorphism of abelian groups, so its inverse is a well-defined homomorphism from $\mathbb Z$ to $\pi_0K(X/U)$. Composing with support-to-global gives a homomorphism to $K_0(X)$ whose values lie in the image subgroup of [F2]. Restricting its codomain therefore defines $\varphi_x$. Since $p_x^{-1}$ is surjective, the composite has image exactly $K_0(\{x\};X)$. [A1, F1, F2, F3, F4, given]

2.1 By [F1], the value at $1$ is $[i_*\kappa(x)]$, and additivity gives $\varphi_x(n)=n[i_*\kappa(x)]$ for every integer $n$. To establish the noninjectivity assertion, take $X=\operatorname{Spec}k[t]$ and its origin over the given perfect field $k$. By [F5] these data satisfy all hypotheses and their residue-sheaf class is zero. The formula just proved makes $\varphi_x$ the zero homomorphism from $\mathbb Z$, so the nonzero integer $1$ is in its kernel. This proves the asserted possibility without requiring an injective support-to-global map. [A1, F1, F5, step 1.1] ∎

## Source context
The paragraph preceding equation (2.8) on PDF p. 7 supplies the purity identification and the homomorphism into the support-image subgroup. The positive residue-class normalization is supplied by the local purity proposition. The affine-line example is a local consequence, not an additional claim attributed to that article passage.
