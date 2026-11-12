---
title: Bloch cycle complexes and higher Chow groups
status: published
research_item: def-bloch-higher-cycle-complex
dependency_level: 4
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)
- [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)
- [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)
- [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)
- [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)



## Definition
Assume the Axiom of Choice. Let $k$ be a field, $X$ smooth of finite type over $k$, and $r\geq0$. For $n\geq0$ put $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$. A nonempty coordinate face is obtained by setting a proper subset of the coordinates to zero. An integral closed subscheme $W\subset X\times\Delta^n$ of codimension $r$ is **admissible** if every component of its intersection with every such face has codimension $r$ in that face; empty intersections are allowed. Codimension is measured on the ambient irreducible component containing the generic point. Define $z^r(X,n)$ as the free abelian group on the admissible subschemes.

All indices $r,n$ are integers. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; smoothness and finite type refer to this morphism, and all products are fibre products over $\operatorname{Spec}k$. For a coordinate face $F\subset\Delta^n$, its ambient face above means $X\times_k F$, and intersections with $W$ are scheme-theoretic. An integral scheme is nonempty, reduced and irreducible. Components used as cycle generators have their reduced induced closed structures. More explicitly, for an integral closed subscheme $T\subset Y$ the codimension convention is $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, where $\mathcal O_{Y,y}$ is the stalk of the structure sheaf and dimension is Krull dimension, defined by chains of prime ideals. This is the codimension convention in the admissible face supplier. In the coefficient formula below, $t_i$ is pulled back to $W$, and $\ell_R(M)$ is the number of simple factors in a finite composition series of the $R$-module $M$, independent of the series, with $\ell_R(0)=0$.

For $n\geq1$, identify $\{t_i=0\}$ with $\Delta^{n-1}$ by retaining the remaining coordinates in increasing order and set
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ ranges over the components of $W\cap\{t_i=0\}$ and $\eta_T$ is its generic point. The empty sum is zero. Extend by integral linearity and set $\partial_n=\sum_{i=0}^n(-1)^i d_i^n$. Put $z^r(X,n)=0$ for $n<0$ and $\partial_n=0:z^r(X,n)\to z^r(X,n-1)$ for every $n\leq0$. The resulting homological complex is **Bloch's cycle complex** $z^r(X,\bullet)$, and its **higher Chow groups** are
$$\mathrm{CH}^r(X,n)=H_n(z^r(X,\bullet))=\ker\partial_n/\operatorname{im}\partial_{n+1}.$$
In particular they vanish for $n<0$. This is the unnormalized complex; no quotient by degenerate simplices is taken.

## Definition references

[lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-field](https://alphabetamath.cc/item/def-field)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

## Facts & Assumptions

**Given:** The Axiom of Choice and $k,X,r$ as above.

**Goal:** Justify the coefficients, differential and homology quotient.

[A1] The Axiom of Choice discharges the hypothesis of the admissible face supplier, including its smooth affine cover and Choice-conditional algebraic inputs. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The admissible face lemma supplies finite coefficients, admissible face images and the identities $d_i d_j=d_{j-1}d_i$ for $i<j$. [lem-author-89250b1d710c-admissible-face-identities](item-lem-author-89250b1d710c-admissible-face-identities)

[F2] Alternating face sums form a chain complex, whose homology is the displayed quotient and vanishes in negative degrees. [lem-author-89250b1d710c-alternating-face-boundary](item-lem-author-89250b1d710c-alternating-face-boundary), [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category), [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex), [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)

[F3] The simplex, coordinate faces, affine product charts and ordered face identifications are supplied by [lem-author-89250b1d710c-face-coordinate-geometry](item-lem-author-89250b1d710c-face-coordinate-geometry). Scheme fibre products exist and scheme-theoretic intersections are cut out by sums of ideal sheaves. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[F4] A map on generators extends uniquely to a homomorphism from the free abelian group. Module length is composition-series length, independent of the chosen series by Jordan–Hölder. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

## Justification
Under [A1], the field, smooth finite-type scheme, integral cycles and stalk-dimension codimension convention in the Definition meet the hypotheses of [F1]; [F3] supplies the coordinate-face constructions and identifications. The local rings in the coefficient formula need not be discrete valuation rings and the cycles need not be smooth. The proper single-face calculation in [F1] supplies exactly the finite lengths shown. The cycle-level compatibility in [F1] uses the explicitly imported simplicial-cycle input locally on integral smooth affine opens; no quotient by rational equivalence is used. By [F4] the lengths are independent of composition series and the generator formulas extend uniquely to homomorphisms. Thus all face maps are defined, and [F2] gives $\partial^2=0$ and makes the homology quotient well-defined. This definition does not assert the separate comparison with motivic cohomology or the identification of degree zero with the classical Chow group.
