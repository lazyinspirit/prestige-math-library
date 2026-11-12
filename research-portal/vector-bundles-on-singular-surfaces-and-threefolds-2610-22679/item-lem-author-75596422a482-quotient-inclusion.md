---
title: Restriction modulo its kernel
status: published
research_item: lem-author-75596422a482-quotient-inclusion
dependency_level: 7
---

PDF p. 13: Supported Chow group

## Prerequisites

- [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)
- [math:def-quotient-complex](https://alphabetamath.cc/item/def-quotient-complex)
- [math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups](https://alphabetamath.cc/item/ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice. Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $T\subset U$ a closed subset, $V=U\setminus T$ with its open-subscheme structure, and $r\geq0$ an integer. Write $C=z^r(U,\bullet)$, $D=z^r(V,\bullet)$, $j^*:C\to D$ for restriction, and $K=\ker j^*$ for its kernel subcomplex. The induced map $\bar j:C/K\to D$, given in degree $n$ by $\bar j_n(a+K_n)=j_n^*(a)$, is a degreewise injective chain map. It has the same cokernel complex as $j^*$: both have degree-$n$ term $D_n/\operatorname{im}(j_n^*)$ and differential induced by that of $D$.

## Statement references

[lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[math:def-quotient-complex](https://alphabetamath.cc/item/def-quotient-complex)

[math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

[math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)

[math:ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups](https://alphabetamath.cc/item/ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

**Given:** The Axiom of Choice and $k,U,T,V,r,C,D,j^*,K$ as stated. Write $d_C,d_D$ for the differentials of $C,D$.

**Goal:** Construct the induced chain map, prove degreewise injectivity, and identify its cokernel.

[A1] Choice is inherited from the supplied Bloch-complex and restriction construction through the kernel lemma. The quotient and cokernel argument below uses no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F1] $C,D$ are complexes of abelian groups, $j^*$ is their restriction chain map, and $K$ is its kernel subcomplex, with $K_n=\ker(j_n^*)$. [lem-author-75596422a482-restriction-kernel](item-lem-author-75596422a482-restriction-kernel)

[F2] For a subcomplex $K\subset C$, the quotient complex $C/K$ has degree-$n$ term $C_n/K_n$ and differential $\bar d_C(a+K_n)=d_Ca+K_{n-1}$. Its quotient projection is a chain map. [math:def-quotient-complex](https://alphabetamath.cc/item/def-quotient-complex)

[F3] Abelian groups form an abelian category. For an abelian-group homomorphism $f:G\to H$, the quotient $G/\ker f$ consists of additive cosets, the canonical map to the image is $a+\ker f\mapsto f(a)$, and a cokernel is $H/\operatorname{im}f$. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), [math:ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups](https://alphabetamath.cc/item/ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups)

[F4] The cokernel of a chain map in an abelian category is computed degreewise, with the differential induced from the target complex. [math:lem-the-cokernel-of-a-chain-map-is-computed-degreewise](https://alphabetamath.cc/item/lem-the-cokernel-of-a-chain-map-is-computed-degreewise)

## Proof

1.1 Use the supplied construction under [A1] and the quotient complex in [F2]. For every integer $n$, define $\bar j_n(a+K_n)=j_n^*(a)$. If $a+K_n=a'+K_n$, then $a-a'\in K_n=\ker(j_n^*)$, so $j_n^*(a)=j_n^*(a')$; hence the rule is well-defined and is a homomorphism by additivity. Moreover, equality $\bar j_n(a+K_n)=\bar j_n(b+K_n)$ implies $j_n^*(a-b)=0$, so $a-b\in K_n$ and the two cosets are equal. Thus $\bar j_n$ is injective. Every $j_n^*(a)$ is the image of $a+K_n$, so $\operatorname{im}(\bar j_n)=\operatorname{im}(j_n^*)$. [A1, F1, F2, F3, algebra]

2.1 For every coset $a+K_n$, the chain-map identity for $j^*$ and the quotient differential give $d_D\bar j_n(a+K_n)=d_Dj_n^*(a)=j_{n-1}^*(d_Ca)=\bar j_{n-1}\bar d_C(a+K_n)$. Thus $\bar j$ is a chain map. By [F3] and [F4], the cokernel complexes of $j^*$ and $\bar j$ have terms $D_n/\operatorname{im}(j_n^*)$ and $D_n/\operatorname{im}(\bar j_n)$, respectively. Their images agree by step 1.1, and both differentials send the class of $b$ to the class of $d_Db$. These chosen cokernel models are therefore the same complex, proving the claim. [F1, F2, F3, F4, step 1.1] ∎
