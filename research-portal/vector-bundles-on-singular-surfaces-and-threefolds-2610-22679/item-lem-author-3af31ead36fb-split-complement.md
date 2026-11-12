---
title: Projectivity and rank of a free-summand complement
status: published
research_item: lem-author-3af31ead36fb-split-complement
dependency_level: 1
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)
- [math:thm-nonzero-commutative-rings-have-invariant-basis-number](https://alphabetamath.cc/item/thm-nonzero-commutative-rings-have-invariant-basis-number)
- [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)
- [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)
- [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

## Statement
Assume the Axiom of Choice. Let $P$ be a finite projective module of constant rank $r\geq1$ over a nonzero commutative ring $A$. If $P\cong A\oplus Q$, then $Q$ is finite projective of constant rank $r-1$, and the associated bundles satisfy $\widetilde P\cong\mathcal O_{\operatorname{Spec}A}\oplus\widetilde Q$. Constant rank means that every prime localization is free of the specified rank.

## Facts & Assumptions

**Given:** $A$, $P$, $Q$, $r$, the decomposition, and the Axiom of Choice as in the statement.

**Goal:** Establish finite projectivity, rank, and the associated bundle decomposition.

[A1] The Axiom of Choice is assumed for the affine bundle–module correspondence [F1]; the explicit projection and fraction arguments below introduce no additional choice use. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under Choice, finite projective modules correspond to finite locally free sheaves, and this correspondence preserves rank and finite direct sums. A finite projective module is finitely generated and has the lifting property through surjective module maps; its localization at any prime is finite free, with rank equal to the associated bundle rank. Write $\widetilde M$ for the associated sheaf of $M$, and $\widetilde A=\mathcal O_{\operatorname{Spec}A}$. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] For $S=A\setminus\mathfrak p$, write $A_{\mathfrak p}=S^{-1}A$ and $M_{\mathfrak p}=S^{-1}M$. A multiplicative subset contains $1$ and is closed under products. Ring localization has fractions with $(a/s)(b/t)=ab/(st)$ and $a/s+b/t=(ta+sb)/(st)$. Module fractions satisfy $m/s=n/t$ exactly when $u(tm-sn)=0$ for some $u\in S$, with $(m/s)+(n/t)=(tm+sn)/(st)$ and $(a/u)(m/s)=am/(us)$. The same fraction relation for $M=A$ is the ring fraction relation. [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation) [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)

[F3] Over a nonzero commutative unital ring $R$, an isomorphism $R^a\cong R^b$ for finite nonnegative integers $a,b$ forces $a=b$, including zero-sized bases. [math:thm-nonzero-commutative-rings-have-invariant-basis-number](https://alphabetamath.cc/item/thm-nonzero-commutative-rings-have-invariant-basis-number)

[F4] For two modules, $M\oplus N$ is the module of pairs with componentwise operations; its coordinate inclusions and projections give the two summands. The notation $A^n$ means a sum of $n$ copies of $A$, including $A^0=0$. [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)

[F5] Points of $X=\operatorname{Spec}A$ are the proper prime ideals $\mathfrak p$ of $A$. A proper ideal is prime when $ab\in\mathfrak p$ implies $a\in\mathfrak p$ or $b\in\mathfrak p$; hence $A\setminus\mathfrak p$ contains $1$, is closed under products, and does not contain zero. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[F6] Rings and modules are unital; commutativity means $ab=ba$. A module is an abelian group with a distributive, associative scalar action satisfying $1m=m$. Module homomorphisms preserve addition and scalar multiplication, and module isomorphisms are bijective module homomorphisms. All maps in the proof are module maps over the indicated ring. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

[F7] The submodule generated by a subset is the smallest submodule containing it; finite generation means generation by a finite subset. Equivalently, the generated submodule consists of finite linear combinations: these combinations form a submodule containing the subset and belong to every submodule containing it. A basis means unique finite linear expressions, and a free module is one admitting a basis. The coordinate vectors of $A^n$ give such expressions, including the empty basis for $A^0=0$. [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

## Proof

1.1 Use the given isomorphism and the coordinate maps of [F4] to obtain $i:Q\to P$ and $\pi:P\to Q$ with $\pi i=\operatorname{id}_Q$. For a finite generating list $p_1,\ldots,p_k$ of $P$ and $q\in Q$, write $i(q)=\sum_j a_jp_j$; then $q=\pi i(q)=\sum_j a_j\pi(p_j)$ by [F6]–[F7]. Thus the images of this list generate $Q$. For a surjection $u:M\to N$ and a map $f:Q\to N$, projectivity of $P$ gives $h:P\to M$ with $uh=f\pi$. Then $u(hi)=f$, proving the lifting property for $Q$. Thus $Q$ is finite projective by [F1]. [F1, F4, F6, F7, given, construct]

2.1 Fix any point $\mathfrak p$ of $X$ as in [F5] and put $R=A_{\mathfrak p}$. The fraction relation [F2] shows $R\ne0$: equality $1/1=0/1$ would force an element of $A\setminus\mathfrak p$ to be zero. Localizing a module map $f$ sends $m/s$ to $f(m)/s$; this is well-defined and linear because applying $f$ to $u(tm-sn)=0$ preserves that equality by [F6] and respects the formulas in [F2]. Localizing the given isomorphism and its inverse gives $P_{\mathfrak p}\cong(A\oplus Q)_{\mathfrak p}$. The maps $(a,q)/s\mapsto(a/s,q/s)$ and $(a/s,q/t)\mapsto(ta,sq)/(st)$ identify the latter module with $R\oplus Q_{\mathfrak p}$: the fraction relation makes these maps independent of representatives (multiply the finitely many witnessing denominators for the two coordinates), linear, and inverse. By step 1.1 and [F1], $Q_{\mathfrak p}\cong R^n$ for some finite $n\geq0$; the hypothesis gives $P_{\mathfrak p}\cong R^r$. Concatenating the standard coordinate bases therefore gives $R^r\cong R^{1+n}$, so [F3] implies $n=r-1$. This holds at every prime, establishing constant rank. Finally [F1] carries the original module decomposition to $\widetilde P\cong\mathcal O_X\oplus\widetilde Q$ and identifies these module ranks with bundle ranks, including rank zero when $r=1$. [A1, F1, F2, F3, F4, F5, F6, F7, given, step 1.1, construct] ∎
