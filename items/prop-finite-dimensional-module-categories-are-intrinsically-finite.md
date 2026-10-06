---
id: prop-finite-dimensional-module-categories-are-intrinsically-finite
kind: proposition
title: "Finite-dimensional module categories satisfy the intrinsic finiteness conditions"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [cor-dimension-of-a-direct-sum, cor-dimensions-of-matrix-and-linear-map-spaces, def-abelian-category, def-abelian-subcategory-and-exact-embedding, def-composition-series-and-composition-factors-of-an-object, def-dimension, def-finite-k-linear-abelian-category, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-k-linear-category-and-k-linear-functor, def-locally-finite-k-linear-abelian-category, def-module-homomorphism-kernel-image-and-cokernel, def-object-of-finite-length, def-projective-module, def-quotient-module, def-simple-module, def-subcategory-and-full-subcategory, def-submodule, def-superfluous-subobject-and-projective-cover-in-an-abelian-category, thm-dimension-of-a-linear-subspace, thm-length-is-additive-along-a-subobject, thm-modules-over-a-ring-form-an-abelian-category, thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, thm-quotient-module-universal-property, thm-rank-nullity, thm-well-ordering-principle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3, equation (2.1)) and §§3.1–3.2 (Definition 3.1, Theorem 3.2)"
      url: "https://arxiv.org/pdf/1612.04561v3"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft), Chapter 7 (projective covers of finite-dimensional modules)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A$ be a finite-dimensional unital algebra over a field $k$, and let
$A\text{-}\mathrm{mod}$ denote the category of finite-dimensional left
$A$-modules with $A$-linear maps. Then $A\text{-}\mathrm{mod}$ is a finite
$k$-linear abelian category in the intrinsic sense of
[[def-finite-k-linear-abelian-category]]: it is a locally finite $k$-linear
abelian category ([[def-locally-finite-k-linear-abelian-category]]); every
simple object has a projective cover, namely the cover supplied by
[[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]
and identified with the general notion by
[[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]]; and
there are finitely many isomorphism classes of simple objects. Moreover every
simple left $A$-module is isomorphic to a composition factor of the regular
module ${}_AA$, and every finite-dimensional module has length at most its
$k$-dimension. No choice is used.

## Facts & Assumptions

**Given:** A field $k$ and a finite-dimensional unital $k$-algebra $A$, with $A\text{-}\mathbf{Mod}$ the category of all left $A$-modules and $A\text{-}\mathrm{mod}$ the full subcategory of finite-dimensional left $A$-modules.

[F1] For every ring $R$ the category $R\text{-}\mathbf{Mod}$ of left $R$-modules is abelian, with zero object, finite biproducts, kernels and cokernels given by the usual module constructions ([[thm-modules-over-a-ring-form-an-abelian-category]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[F2] Dimension facts over $k$: a linear subspace of a finite-dimensional space is finite-dimensional and has dimension at most that of the ambient space, with equality exactly for $U=V$; the dimension of a finite direct sum is the sum of the dimensions; and rank-nullity gives $\dim_k(M/N)=\dim_kM-\dim_kN$ for a subspace $N\subseteq M$ of a finite-dimensional space, in particular quotients of finite-dimensional spaces by subspaces are finite-dimensional ([[thm-dimension-of-a-linear-subspace]], [[cor-dimension-of-a-direct-sum]], [[thm-rank-nullity]]).

[F3] For left $A$-modules $M,N$ the set $\operatorname{Hom}_A(M,N)$ is a $k$-vector subspace of the space $\mathcal L(M,N)$ of $k$-linear maps, with pointwise addition and scalar multiplication, and composition of $A$-linear maps is $k$-bilinear; moreover, if $M,N$ are finite-dimensional over $k$, then $\dim_k\mathcal L(M,N)=(\dim_kM)(\dim_kN)$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-k-linear-category-and-k-linear-functor]], [[cor-dimensions-of-matrix-and-linear-map-spaces]]).

[F4] An object has finite length exactly when it admits a composition series with simple factors; the length is the number of factors; and if any two of $N$, $M$, $M/N$ (for a submodule $N\le M$) have finite length then so does the third, with $\ell(M)=\ell(N)+\ell(M/N)$ ([[def-composition-series-and-composition-factors-of-an-object]], [[def-object-of-finite-length]], [[thm-length-is-additive-along-a-subobject]]).

[F5] Every finite-dimensional left module over a finite-dimensional algebra has a projective cover in the module sense: there is an epimorphism $\pi:Q\twoheadrightarrow S$ with $Q$ projective and $Q$ finite-dimensional ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]], [[def-projective-module]]).

[F6] In a module category the general notion of a projective cover agrees with the module notion: joins of submodules are sums, so the general superfluity condition is the superfluous-kernel condition of the module definition ([[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]]).

[F7] A module $S$ is simple when $S\ne0$ and its only submodules are $0$ and $S$; if $N\le M$ is a submodule contained in the kernel of an $A$-linear map $M\to P$, then the map factors uniquely through the quotient module $M/N$ ([[def-simple-module]], [[def-quotient-module]], [[thm-quotient-module-universal-property]]).

[F8] A full subcategory of an abelian category containing the zero object and closed under finite biproducts, kernels and cokernels computed in the ambient category is an abelian subcategory there; the ambient abelian structure then makes it abelian, since kernels, cokernels and their images and coimages are those of the ambient category and the inverse of the image-coimage comparison again lies in the full subcategory ([[def-abelian-subcategory-and-exact-embedding]], [[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]], [[def-abelian-category]], [[def-subcategory-and-full-subcategory]]).

[L1] Every nonempty set of natural numbers has a least element ([[thm-well-ordering-principle]]).



## Proof

**Proof technique:** direct.

1.1 The full subcategory $A\text{-}\mathrm{mod}$ of $A\text{-}\mathbf{Mod}$ contains the zero module, and it is closed in $A\text{-}\mathbf{Mod}$ under finite biproducts, kernels and cokernels: direct sums of finite-dimensional modules are finite-dimensional with dimensions adding, by [F2]; the kernel of an $A$-linear map $M\to N$ is a $k$-subspace of the finite-dimensional $M$, hence finite-dimensional; and the cokernel $N/\operatorname{im}f$ is a quotient of the finite-dimensional $N$ by a subspace, hence finite-dimensional with $\dim_k(N/\operatorname{im}f)=\dim_kN-\dim_k(\operatorname{im}f)$ by [F2]. [F1, F2, given]

1.2 Every simple object $S$ of $A\text{-}\mathrm{mod}$ has a projective cover in the sense of [[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]]: by the cover theorem [F5] there is a finite-dimensional projective module $Q$ and an epimorphism $\pi:Q\twoheadrightarrow S$ whose kernel is superfluous in the module sense, and by [F6] this is exactly a superfluous subobject of $Q$ in the general sense, so $\pi$ is an essential epimorphism with projective source, that is, a projective cover of $S$. [F5, F6, given]

2.1 Because $A\text{-}\mathbf{Mod}$ is abelian by [F1] and $A\text{-}\mathrm{mod}$ is a full subcategory containing the zero object and closed under finite biproducts, kernels and cokernels computed there, step 1.1 makes $A\text{-}\mathrm{mod}$ an abelian subcategory of $A\text{-}\mathbf{Mod}$; by [F8] it is therefore itself abelian. [F1, F8, step 1.1]

2.2 For finite-dimensional modules $M,N$ the hom-set $\operatorname{Hom}_A(M,N)$ is a $k$-subspace of $\mathcal L(M,N)$ by [F3], and $\mathcal L(M,N)$ is finite-dimensional with $\dim_k\mathcal L(M,N)=(\dim_kM)(\dim_kN)$; a subspace of a finite-dimensional space is finite-dimensional by [F2], and composition is $k$-bilinear by [F3], so $A\text{-}\mathrm{mod}$ is a locally small $k$-linear category with finite-dimensional hom-spaces. [F2, F3, step 1.1]

3.1 Every object $M$ of $A\text{-}\mathrm{mod}$ has finite length and $\ell(M)\le\dim_kM$. Induct on $d=\dim_kM$. If $d=0$ then $M=0$ and the empty composition series witnesses finite length with $\ell(M)=0$. If $d>0$, the set of dimensions of nonzero submodules of $M$ is a nonempty set of natural numbers, so by [L1] it has a least element $d_0\ge1$, and some nonzero submodule $N\le M$ has $\dim_kN=d_0$; such an $N$ is simple, because for any nonzero $N'\le N$ the submodule $N'$ is also a nonzero submodule of $M$ with $\dim_kN'\ge d_0$ and $\dim_kN'\le\dim_kN=d_0$ by [F2], so $\dim_kN'=d_0$ and $N'=N$ by the equality case of [F2]. By [F2] the quotient $M/N$ has $\dim_k(M/N)=d-d_0<d$, so by the induction hypothesis $M/N$ has finite length with $\ell(M/N)\le\dim_k(M/N)$; the simple module $N$ has finite length with $\ell(N)=1$, so the additivity theorem [F4] gives that $M$ has finite length and $\ell(M)=\ell(N)+\ell(M/N)=1+\ell(M/N)\le1+(d-d_0)\le d$. [F2, F4, L1, step 2.1, induction]

4.1 Every simple left $A$-module is isomorphic to a composition factor of the regular module ${}_AA$, and there are finitely many isomorphism classes of simple modules. The algebra $A$ is a finite-dimensional left $A$-module, so by step 3.1 it has a composition series $0=A_0<A_1<\cdots<A_m=A$. Let $S$ be a simple left $A$-module and $0\ne s\in S$; the map $\varphi:A\to S$, $\varphi(a)=as$, is $A$-linear with $\varphi(1)=s\ne0$, so its image is a nonzero submodule of the simple module $S$ and $\varphi$ is surjective. Let $j\in\{1,\dots,m\}$ be least with $\varphi(A_j)\ne0$, which exists because $\varphi(A_m)=S\ne0$ and the set is finite; then $\varphi(A_{j-1})=0$, and $\varphi(A_j)$ is a nonzero submodule of $S$, hence equals $S$, so the restriction of $\varphi$ to $A_j$ is surjective with kernel containing $A_{j-1}$ and therefore factors through the quotient $A_j/A_{j-1}$ by [F7], giving a nonzero surjection $A_j/A_{j-1}\to S$; the source is simple, so this surjection is an isomorphism, whence $S\cong A_j/A_{j-1}$. Thus every simple module is isomorphic to one of the $m$ composition factors of ${}_AA$, so there are at most $m$ isomorphism classes of simple modules. [F4, F7, step 3.1, construct, given]

5.1 Steps 2.1, 2.2 and 3.1 make $A\text{-}\mathrm{mod}$ a locally small $k$-linear abelian category in which every object has finite length and every hom-space is finite-dimensional over $k$, that is, a locally finite $k$-linear abelian category; step 1.2 gives every simple object a projective cover, and step 4.1 shows that there are finitely many isomorphism classes of simple objects; hence $A\text{-}\mathrm{mod}$ is a finite $k$-linear abelian category in the intrinsic sense of [[def-finite-k-linear-abelian-category]]. The further claims are steps 4.1 and 3.1. All selections in the proof are made inside finite-dimensional objects (a nonzero submodule of least dimension and a composition series of the finite-dimensional algebra), so no choice principle is used. [step 2.1, step 2.2, step 3.1, step 4.1, step 1.2, given] ∎
