---
title: Finite derived products and motivic coefficient operations
status: published
research_item: lem-author-ab0a6fc202cb-finite-derived-products
dependency_level: 5
---

PDF p. 8: Computations after the splitting principle

## Prerequisites

- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)
- [math:prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive](https://alphabetamath.cc/item/prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive)
- [math:lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category](https://alphabetamath.cc/item/lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category)
- [math:lem-addition-of-roofs-makes-an-additive-localization](https://alphabetamath.cc/item/lem-addition-of-roofs-makes-an-additive-localization)


## Statement
For a finite family $C_\alpha\in D(\mathbb Z)$ and $i\in\mathbb Z$,
$$H^i\!\left(\prod_\alpha C_\alpha\right)\cong\prod_\alpha H^i(C_\alpha).$$
For every positive integer $n$, writing $C/n=C\otimes^{\mathbf L}\mathbb Z/n$, one also has
$$\left(\prod_\alpha C_\alpha\right)/n\simeq\prod_\alpha(C_\alpha/n).$$
These equivalences are induced by the coordinate projections. Consequently a finite-product decomposition of derived complexes induces the corresponding decomposition on integral and finite-coefficient cohomology, and each such joint restriction map is injective. The empty product is zero throughout.

## Facts & Assumptions

**Given:** A finite index set $A$, a family $(C_\alpha)_{\alpha\in A}$ of objects of $D(\mathbb Z)$, an integer $i$, and $n>0$.

**Goal:** Prove the two projection-induced comparisons and joint injectivity, including $A=\varnothing$.

[F1] Cohomology is functorial on $D(\mathbb Z)$. [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)

[F2] The functor $C\mapsto C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ is computed on any cochain representative by the cone of multiplication by $n$, without boundedness assumptions. [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)

[F3] Use the same-object localization $D(\mathbb Z)=K(\operatorname{Ab})[\mathrm{qis}^{-1}]$ and its standing size conventions. The category $\operatorname{Ab}$ is abelian. A cochain complex has groups $C^d$ and homomorphisms $d^d:C^d\to C^{d+1}$ with $d^{d+1}d^d=0$. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[F4] The canonical functor from complexes to their homotopy category is additive, under the cochain reindexing $C^\sharp_d=C^{-d}$. Quasi-isomorphisms in $K(\operatorname{Ab})$ form a two-sided multiplicative system. With the size conventions in [F3], addition of roofs makes its localization additive; localization preserves zero objects and finite biproducts. A finite biproduct has inclusions $j_\alpha$ and projections $p_\alpha$ satisfying $p_\alpha j_\beta=\delta_{\alpha\beta}$ and $\sum_\alpha j_\alpha p_\alpha=1$, where the first right-hand side is the identity for equal indices and the zero morphism otherwise. [math:prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive](https://alphabetamath.cc/item/prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive), [math:lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category](https://alphabetamath.cc/item/lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category), [math:lem-addition-of-roofs-makes-an-additive-localization](https://alphabetamath.cc/item/lem-addition-of-roofs-makes-an-additive-localization)

[F5] Write $Z^d(C)=\ker d^d$, $B^d(C)=\operatorname{im}d^{d-1}$ and $H^d(C)=Z^d(C)/B^d(C)$. [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[F6] For a cochain map $f:C\to D$, use $\operatorname{Cone}(f)^d=D^d\oplus C^{d+1}$ with differential $(y,x)\mapsto(d_Dy+f x,-d_Cx)$. This is the chain-cone convention reindexed by $C^\sharp_d=C^{-d}$; the cochain-map condition makes its differential square zero. [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

## Proof

1.1 In the same-object model [F3], choose cochain representatives and set $P^d=\prod_{\alpha\in A}C_\alpha^d$ with coordinatewise differential. Finite direct sums and products of abelian groups coincide, so the coordinate inclusions and projections are cochain maps satisfying the identities in [F4]. Those identities persist under the two additive functors from complexes through $K(\operatorname{Ab})$ to $D(\mathbb Z)$. For every object $T$ and tuple of derived morphisms $f_\alpha:T\to C_\alpha$, the morphism $f=\sum_\alpha j_\alpha f_\alpha:T\to P$ satisfies $p_\alpha f=f_\alpha$. If $g$ has these same coordinates, then $g=(\sum_\alpha j_\alpha p_\alpha)g=\sum_\alpha j_\alpha f_\alpha=f$. This is exactly the categorical product universal property in the derived category. By [F5], $Z^d(P)=\prod_\alpha Z^d(C_\alpha)$ and $B^d(P)=\prod_\alpha B^d(C_\alpha)$: the boundary equality follows by lifting finitely many image elements to preimages. The map from $Z^d(P)$ to $\prod_\alpha(Z^d(C_\alpha)/B^d(C_\alpha))$ is surjective by finitely many choices of representatives and has kernel $B^d(P)$. It therefore induces the first displayed isomorphism, with components $H^d(p_\alpha)$ by [F1]. This also shows that finite degreewise products preserve quasi-isomorphisms. If $A$ is empty, $P$ is the zero complex; the functors in [F4] preserve its zero-object property, so it is terminal and represents the empty product, with zero cohomology. All selections here are finite. [given, F1, F3, F4, F5, construct, algebra]

2.1 Multiplication by $n$ on $P$ is coordinatewise. By [F6], the map $\operatorname{Cone}(n:P\to P)^d\to\prod_\alpha\operatorname{Cone}(n:C_\alpha\to C_\alpha)^d$ sends $((y_\alpha)_\alpha,(x_\alpha)_\alpha)$ to $((y_\alpha,x_\alpha))_\alpha$. It is an isomorphism in each degree and respects the differentials $(y,x)\mapsto(dy+nx,-dx)$, so it is an isomorphism of cochain complexes. By [F2] and the product universal property in step 1.1, this is the second displayed equivalence in $D(\mathbb Z)$; its components are precisely the coefficient functor applied to $p_\alpha$. Applying [F1] and the first comparison of step 1.1 gives the corresponding finite-coefficient cohomology isomorphism. If $C\xrightarrow{\sim}\prod_\alpha C_\alpha$ is a finite-product decomposition, functoriality transports both comparisons to the joint maps from $C$, integrally and after applying $-/n$. A tuple is zero exactly when every coordinate is zero, so those joint cohomology maps are injective. For the empty family the cone and all cohomology groups are zero, and these conclusions still hold. [F1, F2, F6, step 1.1, algebra] ∎
