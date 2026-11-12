---
title: Stable triviality as the kernel of a right-invertible matrix
status: published
research_item: lem-author-b02e51f9da03-matrix-kernel
dependency_level: 1
---

## Prerequisites

- [def-stably-free-bundles](item-def-stably-free-bundles)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations)
- [math:thm-nonzero-commutative-rings-have-invariant-basis-number](https://alphabetamath.cc/item/thm-nonzero-commutative-rings-have-invariant-basis-number)
- [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis)
- [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)
- [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)
- [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme)
- [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation)
- [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)


## Statement
Assume AC. Let $X=\operatorname{Spec}A$, and let $E$ be a bundle of constant rank $r$. Then $E$ is stably trivial if and only if, for some $N\geq0$, it is the bundle associated to $\ker q$ for an $A$-linear map $q:A^{r+N}\to A^N$ admitting a right inverse $j:A^N\to A^{r+N}$, $qj=\operatorname{id}$. Such a map is a **right-invertible matrix** after the standard free bases are fixed. Its kernel $P$ is finite projective of rank $r$, with actual splitting $P\oplus A^N\xrightarrow{\sim}A^{r+N}$ given by $(v,w)\mapsto v+j(w)$.

## Facts & Assumptions

**Given:** The data in the statement, with $A$ a commutative unital ring and $r,N$ nonnegative integers. Assume AC as in the affine equivalence and projective-module characterization below; no K-theory or universe hypothesis is used here.

**Goal:** Establish both directions and the stated actual splitting, finite projectivity and rank.

[F1] Stable triviality means an actual isomorphism $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$ for some $N\geq0$. [def-stably-free-bundles](item-def-stably-free-bundles)

[F2] Under AC, associated sheaf and global sections give quasi-inverse equivalences between finite projective modules and finite locally free sheaves on $X$. They preserve rank, finite direct sums and isomorphisms; a finite projective module has a free localization at every prime, whose rank is the associated bundle rank. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) Taking $f=1$ in [math:thm-sections-basic-open-affine-scheme](https://alphabetamath.cc/item/thm-sections-basic-open-affine-scheme) gives $\Gamma(X,\mathcal O_X)=A_1\cong A$: here $D(1)=X$ by [F7], and $a/1^k\mapsto a$ is inverse to $a\mapsto a/1$ by the fraction formulas in [F7]. Applying the associated-sheaf functor and the quasi-inverse isomorphism at $\mathcal O_X$ gives $\widetilde A\cong\mathcal O_X$. Preservation of finite direct sums then gives $\widetilde{A^m}\cong\mathcal O_X^m$ and $\Gamma(X,\mathcal O_X^m)\cong A^m$ for every integer $m\geq0$, including the zero objects.

[F3] Under AC, a direct summand of a free module is projective. Finite projective means finitely generated and projective. [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F4] For a nonzero commutative unital ring $R$, an isomorphism $R^a\cong R^b$ with $a,b$ finite implies $a=b$, including zero-sized ranks. [math:thm-nonzero-commutative-rings-have-invariant-basis-number](https://alphabetamath.cc/item/thm-nonzero-commutative-rings-have-invariant-basis-number)

[F5] The module $A^m$ consists of finite coordinate tuples with standard coordinate vectors $e_i$, and $A^0=0$. Finite direct sums have componentwise operations, coordinate inclusions and projections. [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis), [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)

[F6] An $A$-linear map preserves addition and scalar multiplication, and $\ker q=\{z:q(z)=0\}$. An $m\times n$ matrix over $A$ is a function $m\times n\to A$, with entry $a_{ij}$ at $(i,j)$ and column $j$ the coordinate vector $(a_{ij})_{i<m}$; this includes empty index sets. Its matrix in the standard free bases has columns $q(e_i)$, since $q(\sum_i a_i e_i)=\sum_i a_i q(e_i)$. A right inverse is a linear map $j$ with $qj=\operatorname{id}$. [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel), [math:def-free-module-on-a-set-and-standard-basis](https://alphabetamath.cc/item/def-free-module-on-a-set-and-standard-basis), [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)

[F7] Points of $\operatorname{Spec}A$ are proper prime ideals. For $S=A\setminus\mathfrak p$, write $M_{\mathfrak p}=S^{-1}M$ and $A_{\mathfrak p}=S^{-1}A$. This $S$ contains $1$, excludes $0$, and is closed under multiplication: $st\in\mathfrak p$ would imply $s\in\mathfrak p$ or $t\in\mathfrak p$. For any multiplicative subset $S\subseteq A$, the localization $S^{-1}A$ is a commutative unital ring with product $(a/s)(b/t)=ab/(st)$ and identity $1/1$. Module fractions satisfy $m/s=n/t$ if and only if $u(tm-sn)=0$ for some $u\in S$, with the usual fraction addition and scalar action. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:def-multiplicative-subset-and-localisation](https://alphabetamath.cc/item/def-multiplicative-subset-and-localisation), [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)

## Proof

1.1 If $E$ is stably trivial, use [F1] and [F2], with its explicit identifications $\Gamma(X,\mathcal O_X^m)\cong A^m$, to obtain an isomorphism $\alpha:P\oplus A^N\to A^{r+N}$, where $P=\Gamma(X,E)$. Write $\operatorname{pr}_2(v,w)=w$. Transport this projection and its section $w\mapsto(0,w)$ through $\alpha$: set $q=\operatorname{pr}_2\alpha^{-1}$ and $j(w)=\alpha(0,w)$. These are linear, $qj=\operatorname{id}$, and $\alpha(P\oplus0)=\ker q$. The matrix of $q$ is specified by its columns as in [F6]. For $z=\alpha(v,w)$, $q(z)=w$ and $z-jq(z)=\alpha(v,0)$, so the claimed splitting is exactly $\alpha$ after identifying $P$ with its image. [F1, F2, F5, F6, construct]

2.1 Conversely, let $qj=\operatorname{id}$ and put $P=\ker q$; linearity makes $P$ a submodule. The map $T:P\oplus A^N\to A^{r+N}$, $T(v,w)=v+j(w)$, is linear and has inverse $z\mapsto(z-jq(z),q(z))$: its first coordinate lies in $P$, and both composites are identities. Thus $P$ is a direct summand of the finite free module. It is generated by the finite list $e_i-jq(e_i)$, because $z-jq(z)$ is the corresponding linear combination of these vectors and equals $z$ for $z\in P$. By [F3] it is projective, hence finite projective. For a prime $\mathfrak p$, localize the inverse maps by $f_{\mathfrak p}(z/s)=f(z)/s$; the fraction relation in [F7] shows well-definedness and preserves their composites. Localization of a pair is identified with the pair of its fractions, with inverse $(v/s,w/t)\mapsto(tv,sw)/(st)$; finite free tuples are identified coordinatewise. Consequently $P_{\mathfrak p}\oplus A_{\mathfrak p}^N\cong A_{\mathfrak p}^{r+N}$. By [F2], $P_{\mathfrak p}\cong A_{\mathfrak p}^{d_{\mathfrak p}}$ for some finite $d_{\mathfrak p}$. The ring $A_{\mathfrak p}$ is nonzero: $1/1=0/1$ would force some $s\notin\mathfrak p$ to be zero by [F7], contrary to $0\in\mathfrak p$. Applying [F4] gives $d_{\mathfrak p}+N=r+N$, so $d_{\mathfrak p}=r$. Rank is pointwise, so if the spectrum is empty there is no additional rank condition. Finally [F2], using $\widetilde{A^m}\cong\mathcal O_X^m$, transports $T$ to $\widetilde P\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, proving stable triviality by [F1]. All formulas also hold for $N=0$ or $r=0$. [F1, F2, F3, F4, F5, F6, F7, algebra, construct] ∎
