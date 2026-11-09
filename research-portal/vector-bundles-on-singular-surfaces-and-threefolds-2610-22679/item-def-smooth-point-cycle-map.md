---
title: Smooth-point K theory class map
status: draft
research_item: def-smooth-point-cycle-map
dependency_level: 16
---

PDF p. 7: Equation (2.8)

## Prerequisites

- [prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity)
- [def-support-image-groups](item-def-support-image-groups)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Definition
Assume the Axiom of Choice and the size conventions of the support construction. Let $k$ be a perfect field, $X$ a quasi-compact quasi-separated $k$-scheme, and $x$ a closed point at which $X\to\operatorname{Spec}k$ is smooth. A perfect field is a field all of whose algebraic extensions are separable; smooth at $x$ means that $x$ has an open neighbourhood on which the structure morphism is smooth. Put $U=X\setminus\{x\}$.

Write $K(X/U)$ for the fiber of the restriction map $K(X)\to K(U)$, and $K_0(X)=\pi_0K(X)$. The support-image group $K_0(\{x\};X)$ is the image of $\pi_0K(X/U)\to K_0(X)$. Let $p_x:\pi_0K(X/U)\xrightarrow{\sim}\mathbb Z$ be the canonical isomorphism of [prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity), normalized so that the supported class of the residue sheaf $i_*\kappa(x)$ maps to $1$, where $i:\operatorname{Spec}\kappa(x)\hookrightarrow X$ is the closed immersion. Define

$$\varphi_x:\mathbb Z\longrightarrow K_0(\{x\};X)\subseteq K_0(X)$$

as $p_x^{-1}$ followed by the support-to-global homomorphism, with its codomain restricted to its image. In particular, $\varphi_x(n)=n[i_*\kappa(x)]$ in $K_0(X)$, where the bracket is the class of the perfect residue sheaf. The map need not be injective.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and size conventions discharge the inherited premises of the supported purity isomorphism [F1] and the support-image definition [F2] in steps 1.1–3.1. Taking an inverse isomorphism and composing the given homomorphisms adds no choice requirement.

**Given:** The field, scheme, point, choice and size conventions in the definition.

**Goal:** Establish that $\varphi_x$ is a well-defined homomorphism with the stated target and normalization.

[F1] [prop-smooth-point-excision-purity](item-prop-smooth-point-excision-purity) gives the canonical isomorphism $p_x$ under these hypotheses and identifies the inverse image of $1$ with the supported residue-sheaf class; its support-to-global image is the class of the perfect sheaf $i_*\kappa(x)$ in $K_0(X)$.

[F2] [def-support-image-groups](item-def-support-image-groups) defines $K_0(\{x\};X)$ as the image of the support-to-global homomorphism and hence as a subgroup of $K_0(X)$, without asserting injectivity.

## Justification
1.1 By [F1], $p_x$ is an isomorphism of abelian groups, so its inverse is a well-defined homomorphism from $\mathbb Z$ to $\pi_0K(X/U)$. Composing it with support-to-global gives a homomorphism to $K_0(X)$. [A1, F1, given]

2.1 By [F2], every value of this composite lies in $K_0(\{x\};X)$, so restricting its codomain defines the displayed homomorphism. Since $p_x^{-1}$ is surjective, its composite has image exactly $K_0(\{x\};X)$. [A1, F2, step 1.1]

3.1 By [F1], the value at $1$ is $[i_*\kappa(x)]$. Additivity gives the formula for every integer $n$. The construction makes no injectivity assertion about support-to-global; thus it does not assert that $\varphi_x$ is injective. This establishes the definition and its stated properties. [A1, F1, F2, step 2.1] ∎
