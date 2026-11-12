---
title: The divisor presentation and actual Picard surjection
status: published
research_item: lem-author-149a02132c3b-normalization-surjection
dependency_level: 18
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry)
- [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber)
- [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface)
- [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex)
- [prop-affine-curve-picard-divisible](item-prop-affine-curve-picard-divisible)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex)
- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be an arbitrary algebraically closed field, let $X$ be an affine finite-type $k$-scheme of Krull dimension three, and put $U=X_{\mathrm{smooth}}$. Let $T\subset X$ be a closed integral curve contained in $U$, with normalization $\nu:\widetilde T\to T$. Let $U_d\subset U$ be the open-and-closed relative-dimension stratum containing $T$. If $d=3$, the fixed-support group is the actual divisor quotient
$$\mathrm{CH}^3_T(U)=\operatorname{coker}(k(T)^\times\xrightarrow{\operatorname{div}_T}\bigoplus_{x\in T\ \mathrm{closed}}\mathbb Z[x]),$$
and normalization gives the surjection $q:\operatorname{Pic}(\widetilde T)\twoheadrightarrow\mathrm{CH}^3_T(U)$ induced by $[y]\mapsto[\nu(y)]$. If $d<3$, this supported group is zero. Thus the support-fiber identification gives an actual surjection from a divisible group onto $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$.

## Facts & Assumptions
**Given:** The algebraically closed field $k$, affine finite-type threefold $X$, smooth locus $U$, closed integral curve $T\subset U$, normalization and stratum specified in the statement, the Axiom of Choice, and the fixed site and universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[F1] [lem-author-149a02132c3b-geometry](item-lem-author-149a02132c3b-geometry) supplies the smooth separated finite-type open $U$, the affine integral curve $T$, and its unique open-and-closed relative-dimension stratum $U_d$. It also shows that $k$ is perfect. [lem-author-149a02132c3b-support-fiber](item-lem-author-149a02132c3b-support-fiber) supplies the actual isomorphism $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)\cong H_0z_T^3(U,\bullet)$ with the stated Choice, site, universe and cohomological indexing conventions.

[F2] [lem-affine-curve-normalization-interface](item-lem-affine-curve-normalization-interface) constructs the finite normalization $\nu:\widetilde T\to T$, with $\widetilde T$ a smooth affine integral curve and all closed residue fields equal to $k$. [lem-curve-support-divisor-complex](item-lem-curve-support-divisor-complex) supplies the divisor quotient and its surjection from $\operatorname{Pic}(\widetilde T)$ for a pure three-dimensional smooth ambient scheme. Here $k(T)$ is the function field of the integral curve; $\operatorname{div}_T$ uses length orders at its closed points, and the displayed direct sum consists of finite formal integer combinations of those points. The cokernel is the quotient by these principal divisors. The normalization pushforward preserves principal divisors, with residue degrees one. [prop-affine-curve-picard-divisible](item-prop-affine-curve-picard-divisible) makes the Picard group of a smooth affine curve over $k$ divisible by every nonzero integer, including the characteristic in positive characteristic. The Picard group consists of line-bundle isomorphism classes under tensor product; divisibility means surjectivity of multiplication by each nonzero integer. AC is inherited from these suppliers and [F1], as recorded by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); the local quotient and zero-map arguments add no choice assumption.

[F3] [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) defines $z^3(U,n)$ by admissible integral closed codimension-three subschemes of $U\times_k\Delta^n$, with codimension measured by the dimension of the ambient local ring at the generic point of a generator. [def-supported-higher-cycle-complex](item-def-supported-higher-cycle-complex) restricts to generators supported in $T\times_k\Delta^n$ and defines $\mathrm{CH}^3_T(U)=H_0z_T^3(U,\bullet)$ as cycles modulo boundaries, with zero outgoing differential in degree zero. In degree zero, $\Delta^0=\operatorname{Spec}k$. [math:def-relative-dimension-smooth-morphism](https://alphabetamath.cc/item/def-relative-dimension-smooth-morphism) identifies local dimension over a field with the largest dimension of an irreducible component through the point for finite-type schemes. Thus $U_d$ has pure dimension $d$; codimension of a nonempty integral closed subscheme cannot exceed $d$, since its local-ring prime chains are chains in an ambient component. As $U$ is open in the three-dimensional $X$, $d\leq3$.

[F4] The formulation uses the following defining interfaces. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$, as in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field). Affine means isomorphic as a locally ringed space to the spectrum of a ring, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). Finite type refers to the structure morphism to $\operatorname{Spec}k$, with the affine-chart finite-generation and quasi-compactness conditions of [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Smoothness at a point is the local finite-presentation, flatness and geometric-regularity condition of [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes); the smooth locus consists of those points, with its open scheme structure supplied by [F1]. A closed subscheme inclusion is a closed immersion in the sense of [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes). These conventions apply to the given $X,T$ and the smooth schemes used in the argument.

## Proof
1.1 By [F1] and [F2], $T$ is affine and its normalization $\widetilde T$ is a smooth affine curve with closed residue fields $k$. By [F3], $U_d$ is smooth of pure dimension $d\leq3$. An integral supported cycle generator lies in $U_d\times_k\Delta^n$: its support is in $T\times_k\Delta^n$, and this stratum is open and closed. Its codimension and face intersections are unchanged on passing to that open stratum. Consequently $z_T^3(U,\bullet)=z_T^3(U_d,\bullet)$, with no supported generators on the other strata. If $d=3$, apply the divisor supplier in [F2] to $U_d,T$. Its quotient and the preceding equality give the displayed presentation of $\mathrm{CH}^3_T(U)$. Its normalization pushforward sends $[y]$ to $[\nu(y)]$ and principal divisors to the length-order divisors downstairs, with residue degrees one. It therefore descends to the stated surjective homomorphism $q$, even when $T$ is singular. [F1, F2, F3, given]

2.1 If $d<3$, [F3] shows that $U_d\times_k\Delta^0=U_d$ has no nonempty codimension-three integral closed subschemes. Hence $z_T^3(U,0)=0$ by step 1.1, so its zeroth homology, a quotient of its degree-zero cycles, is zero. In this case take $q:\operatorname{Pic}(\widetilde T)\to\mathrm{CH}^3_T(U)=0$ to be the zero homomorphism, which is surjective. In the case $d=3$ use $q$ from step 1.1. In both cases [F2] makes its source divisible by every nonzero integer, without a characteristic restriction. Composing $q$ with the inverse of the actual isomorphism in [F1] gives an actual surjection from this divisible Picard group onto $H^{6,3}_{\mathrm{mot},T}(X,\mathbb Z)$, as required. [F1, F2, F3, step 1.1] ∎
