---
title: Purity twists and cohomological shifts with explicit premises
status: published
research_item: lem-author-9415fc97ee80-purity-shift-index
dependency_level: 0
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:def-category-with-translation](https://alphabetamath.cc/item/def-category-with-translation)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)
- [math:def-opposite-category](https://alphabetamath.cc/item/def-opposite-category)
- [math:def-product-category](https://alphabetamath.cc/item/def-product-category)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-natural-isomorphism](https://alphabetamath.cc/item/def-natural-isomorphism)


## Statement
Let $\mathcal T$ be a locally small triangulated category with its specified translation $[1]$ and inverse $[-1]$. Let $\Lambda\subseteq\mathbb Z$ be a specified set of weights and let $(E_r)_{r\in\Lambda}$ be objects of $\mathcal T$. Fix $A\in\mathcal T$, $c\in\mathbb Z_{\geq0}$, $a\in\mathbb Z$ and $j\in\Lambda$ with $j-c\in\Lambda$. The notation $A(c)$ denotes a specified object of $\mathcal T$; no twist functor or invertibility is presupposed. Suppose that supplied isomorphisms, natural in the object variables wherever those variables vary, identify
$$\operatorname{Hom}_{\mathcal T}(A(c),E_j[n])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[n])$$
for every $n\in\mathbb Z$. Then
$$\operatorname{Hom}_{\mathcal T}(A(c)[2c],E_j[a])\cong\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[a-2c]).$$

For the mapping-complex assertion additionally fix an abelian category $\mathcal B$ and a supplied bifunctor $\mathcal R:\mathcal T^{\mathrm{op}}\times\mathcal T\to D(\mathcal B)$, under the standing size bounds of this derived-category notation. Write $R\operatorname{Hom}(V,W)=\mathcal R(V,W)$ for this supplied cochain-model mapping construction. Assume specified natural isomorphisms for all $V,W\in\mathcal T$
$$\mathcal R(V[s],W)\cong\mathcal R(V,W)[-s]\qquad(s\in\mathbb Z),$$
and a supplied twist comparison $\mathcal R(A(c),E_j)\cong\mathcal R(A,E_{j-c})$. These are additional data, not consequences asserted for an arbitrary stable enhancement. Then, with $\simeq$ denoting isomorphism in $D(\mathcal B)$,
$$R\operatorname{Hom}(A(c)[2c],E_j)\simeq R\operatorname{Hom}(A,E_{j-c})[-2c],$$
and its degree-$a$ cohomology is naturally isomorphic to $H^{a-2c}R\operatorname{Hom}(A,E_{j-c})$. The usual abelian-group-valued case takes $\mathcal B=\mathbf{Ab}$, the category of abelian groups. No cancellation, invertibility of twists, or definition of negative-weight coefficients is inferred without the supplied comparison. In particular the indexing rule applies only within the stated weight range.

## Facts & Assumptions

**Given:** The locally small triangulated category, the integer indices $c,a,j$, the weight set $\Lambda$, the objects and the displayed Hom comparisons in the Statement. Only for the mapping-complex conclusion, also assume the specified $\mathcal R$ with its source-shift and twist-comparison isomorphisms. These comparisons are hypotheses of this conditional lemma, not imported purity or cancellation results.

**Goal:** Compute the shift without concealing the required twist comparison.

[F1] In the cochain convention, $C[s]^n=C^{n+s}$ with differential $d_{C[s]}^n=(-1)^s d_C^{n+s}$, and $H^a(C[s])=H^{a+s}(C)$. This convention is used in the supplied target $D(\mathcal B)$. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F2] Translation in $\mathcal T$ is an additive autoequivalence with specified inverse and coherent iterates. Applying $[-s]$ to both arguments therefore gives $\operatorname{Hom}_{\mathcal T}(V[s],W[a])\cong\operatorname{Hom}_{\mathcal T}(V,W[a-s])$. This Hom-set calculation uses no distinguished-triangle axiom. [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category), [math:def-category-with-translation](https://alphabetamath.cc/item/def-category-with-translation)

[F3] For the mapping-complex conclusion, $\mathcal R(V[s],W)\cong\mathcal R(V,W)[-s]$ and $\mathcal R(A(c),E_j)\cong\mathcal R(A,E_{j-c})$ are exactly the supplied isomorphisms of the Statement. Here their cochain target and its shift convention have the meaning in [F1]; existence of these data is assumed, not established by [F1] or [F2].

[F4] The additional category $\mathcal B$ is assumed abelian in the sense of the published definition. The example $\mathbf{Ab}$ satisfies that definition by the published theorem. These inputs specify the target setting; they do not construct the supplied mapping bifunctor. [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category), [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[F5] For each integer $a$, cohomology factors through the derived localization as a functor $H^a:D(\mathcal B)\to\mathcal B$, under the standing size hypotheses of [F1]. It therefore sends a derived-category isomorphism and its inverse to inverse morphisms in $\mathcal B$. [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)

[F6] A bifunctor here means a functor from the product category $\mathcal T^{\mathrm{op}}\times\mathcal T$. Thus morphisms $f:V'\to V$ and $g:W\to W'$ give $\mathcal R(f,g):\mathcal R(V,W)\to\mathcal R(V',W')$, obeying the functor identity and composition laws. A supplied natural isomorphism has a natural inverse and commuting naturality squares; applying a functor or composing such comparisons preserves those squares. These definitions specify the meaning of the assumed data without asserting their existence. [math:def-opposite-category](https://alphabetamath.cc/item/def-opposite-category), [math:def-product-category](https://alphabetamath.cc/item/def-product-category), [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor), [math:def-natural-isomorphism](https://alphabetamath.cc/item/def-natural-isomorphism)

## Proof

1.1 Set $s=2c$ in [F2]. Applying the chosen inverse translation $[-2c]$ is fully faithful, and the coherence isomorphisms identify its two arguments with $A(c)$ and $E_j[a-2c]$. Hence $\operatorname{Hom}_{\mathcal T}(A(c)[2c],E_j[a])\cong\operatorname{Hom}_{\mathcal T}(A(c),E_j[a-2c])$. Apply the supplied Hom twist comparison at the integer $n=a-2c$ to obtain $\operatorname{Hom}_{\mathcal T}(A,E_{j-c}[a-2c])$. This proves the group assertion within the specified weight range. [F2, given]

2.1 Under the additional mapping-complex premises [F3], first apply its source-shift isomorphism with $V=A(c)$, $W=E_j$ and $s=2c$, obtaining $\mathcal R(A(c)[2c],E_j)\cong\mathcal R(A(c),E_j)[-2c]$. Apply the shifted twist-comparison isomorphism to obtain $\mathcal R(A,E_{j-c})[-2c]$. By [F5], applying the cohomology functor $H^a$ preserves this derived-category isomorphism; [F1] then identifies the cohomology of the shifted target with $H^{a-2c}\mathcal R(A,E_{j-c})$. Both computations require the already supplied object $E_{j-c}$ and the respective twist comparison. They construct neither an object outside the weight set nor a twist-adjunction or purity theorem. Thus both conclusions retain exactly the stated coefficient range. In both computations, naturality wherever the supplied comparisons are natural follows by composing their commuting naturality squares and applying the shift and cohomology functors as appropriate. [F1, F3, F5, F6, given, step 1.1] ∎
