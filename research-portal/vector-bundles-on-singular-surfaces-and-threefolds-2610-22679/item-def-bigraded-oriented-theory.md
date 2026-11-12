---
title: Bigraded cohomology and the projective bundle contract
status: published
research_item: def-bigraded-oriented-theory
dependency_level: 0
---

PDF p. 8: Projective bundle construction of Chern classes

## Prerequisites

- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-ring](https://alphabetamath.cc/item/def-ring)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-inverse-image-presheaf-and-sheaf](https://alphabetamath.cc/item/def-inverse-image-presheaf-and-sheaf)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)
- [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)


## Definition
Assume the Axiom of Choice. Fix a category $\mathcal C$ of schemes and scheme morphisms that is closed under the following operations: for every $X$ in $\mathcal C$, every finite locally free $\mathcal O_X$-module $E$ of constant positive rank, and every morphism $f:Y\to X$ in $\mathcal C$, the projective bundle $\pi:\mathbb P_X(E)\to X$, its base change $\mathbb P_Y(f^*E)\to Y$, and the induced base-change morphism are in $\mathcal C$. A finite locally free module of rank $r$ is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X^r$; a line bundle is one of rank one.

Here $f^*E$ and $f^*L$ mean pullback of sheaves of modules; the maps on cohomology denoted $f^*$ below are separate specified data. Direct sums of abelian groups mean tuples with finitely many nonzero coordinates and componentwise addition; this convention applies both to $H^{*,*}(X)=\bigoplus_{(a,b)\in\mathbb Z^2}H^{a,b}(X)$ and to the finite direct sum in clause 4. An isomorphism of abelian groups means a bijective group homomorphism. Bilinear means additive in each argument. A homogeneous element lies in a single bidegree, and a degree-preserving map carries each bidegree group to the group of the same bidegree. Rings are unital, and the zero ring with $1=0$ is allowed.

An **additively oriented bigraded theory with the projective bundle contract** on $\mathcal C$ consists of the following data and axioms.

1. For each $X$ and each $(a,b)\in\mathbb Z^2$, an abelian group $H^{a,b}(X)$. Their direct sum $H^{*,*}(X)$ is an associative unital ring, with unit $1_X\in H^{0,0}(X)$ and bilinear multiplication sending $H^{a,b}(X)\times H^{c,d}(X)$ to $H^{a+c,b+d}(X)$. It is graded-commutative in the first degree: $xy=(-1)^{ac}yx$ for homogeneous $x$ and $y$ of first degrees $a$ and $c$.

2. For every morphism $f:Y\to X$ in $\mathcal C$, a degree-preserving unital ring homomorphism $f^*:H^{*,*}(X)\to H^{*,*}(Y)$. Pullback is contravariantly functorial: $(\operatorname{id}_X)^*=\operatorname{id}$ and $(f\circ g)^*=g^*f^*$.

3. A natural group homomorphism $c_1:\operatorname{Pic}(X)\to H^{2,1}(X)$ for every $X$. Here $\operatorname{Pic}(X)$ is the group of isomorphism classes of line bundles under tensor product, and the target uses addition. Naturality means $f^*c_1(L)=c_1(f^*L)$. Thus $c_1(L\otimes M)=c_1(L)+c_1(M)$ and $c_1(\mathcal O_X)=0$.

4. For every rank-$r>0$ bundle $E$ on $X$, use the quotient convention $\mathbb P_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$, with tautological quotient line bundle $\mathcal O_{\mathbb P_X(E)}(1)$. Put $\xi=c_1(\mathcal O_{\mathbb P_X(E)}(1))$. For every $(a,b)$, the homomorphism
$$\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\longrightarrow H^{a,b}(\mathbb P_X(E)),\qquad (x_m)_m\longmapsto\sum_{m=0}^{r-1}\pi^*(x_m)\xi^m$$
is an isomorphism. This is the **projective bundle contract**. The rank-zero case is not included in this isomorphism.

The contract is an abstract set of data and axioms. It does not itself assert that motivic cohomology satisfies them; that assertion requires the separate motivic projective-bundle input.

## Definition references
[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-ring](https://alphabetamath.cc/item/def-ring)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-inverse-image-presheaf-and-sheaf](https://alphabetamath.cc/item/def-inverse-image-presheaf-and-sheaf)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)

[math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

## Justification
The category and scheme-morphism definitions specify the objects, morphisms, identities and composition used here. The finite-locally-free definition supplies the sheaf type, local trivializations and well-defined rank; the rank-one case agrees with the line bundles in the Picard definition. The published projective-bundle definition supplies the quotient construction, its tautological quotient and base change under the stated choice assumption. Choice is inherited from that construction; no additional choice of cohomology classes is made in this definition.

Module pullback is the tensor-product construction of [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces). To check its rank condition, trivialize $E$ on an open $U\subseteq X$ and put $V=f^{-1}(U)$. Write $\mathcal A=(f|_V)^{-1}\mathcal O_U$ and $\varphi:\mathcal A\to\mathcal O_V$ for the structure map. Inverse image commutes with restriction to these opens. Applying the coordinate projections and insertions of $\mathcal O_U^r$ to neighbourhood representatives gives inverse maps between $(f|_V)^{-1}(\mathcal O_U^r)$ and $\mathcal A^r$: a finite tuple of representatives can be represented on their common neighbourhood, obtained by finite intersection. These maps respect restriction and pass uniquely to sheafification. Thus on $V$ the construction identifies $(f^*E)|_V$ with $\mathcal O_V\otimes_{\mathcal A}\mathcal A^r$. The maps $a\otimes(b_i)_i\mapsto(a\varphi(b_i))_i$ and $(a_i)_i\mapsto\sum_i a_i\otimes e_i$, where $e_i$ are the standard coordinate vectors, are inverse $\mathcal O_V$-linear morphisms by additivity and the balancing relation $(ac)\otimes v=a\otimes cv$; their composites fix the coordinate vectors and elementary tensors, which generate. The formulas commute with restriction, so the sheaf tensor construction and sheafification universal property give inverse morphisms of sheaves. Thus $(f^*E)|_V\cong\mathcal O_V^r$. The sets $V$ cover $Y$, so pullback preserves finite local freeness of constant rank $r$, including rank one. Pullback carries isomorphisms to isomorphisms by applying inverse image and tensoring to a map and its inverse. Consequently $c_1(f^*L)$ is defined and depends only on the class of $L$. For line bundles the canonical comparison $(a\otimes\ell)\otimes(b\otimes m)\mapsto ab\otimes(\ell\otimes m)$ gives $f^*L\otimes f^*M\cong f^*(L\otimes M)$: on common trivializing opens it is the invertible multiplication map $\mathcal O_V\otimes_{\mathcal O_V}\mathcal O_V\to\mathcal O_V$, and the formulas agree on overlaps, so the sheaf gluing and locality axioms give inverse global maps. The rank-one calculation also gives $f^*\mathcal O_X\cong\mathcal O_Y$. For composable $Z\xrightarrow{g}Y\xrightarrow{f}X$, a trivialization of $L$ on $U$ gives trivializations of $g^*f^*L$ and $(f\circ g)^*L$ on $g^{-1}f^{-1}U$; identify their frames. On an overlap the transition unit for either is the image of the original unit under the composite structure-sheaf map, so these identifications glue. The identity morphism gives the identity identification in the same way. Hence module pullback induces the contravariantly functorial group maps on Picard classes used by the naturality condition. These local sheaf calculations do not require the trivializing opens to be objects of $\mathcal C$.

The group, ring and homomorphism definitions supply the additive groups, associative unital rings, group homomorphisms and unital ring homomorphisms in clauses 1–4. The inline direct-sum construction is an abelian group: the support of a sum is contained in the union of the two finite supports, and negation preserves support. The published Picard definition supplies the group of line-bundle classes, so the domain of $c_1$ and its additivity condition are well-defined. By clause 2, $\pi^*$ is additive; by clause 1, multiplication by the fixed class $\xi^m$ is additive. Therefore each displayed summand is a homomorphism of abelian groups; its bidegree is $(a,b)$ because $\xi$ has degree $(2,1)$ and $\pi^*$ preserves degrees. The sum is finite, and requiring the resulting map to be an isomorphism is a coherent condition on the specified data.

The conditions are consistent: taking every $H^{a,b}(X)$ to be the zero group, with its zero ring multiplication and unit $0$, every pullback and every $c_1$ to be the unique map, makes both sides of the contract zero. All identities, products, naturality equations and the required isomorphisms then hold between one-element groups. This example establishes only consistency of the abstract contract, not its realization by motivic cohomology.
