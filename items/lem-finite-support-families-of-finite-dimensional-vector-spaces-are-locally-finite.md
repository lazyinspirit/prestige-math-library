---
id: lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite
kind: lemma
title: "Finite-support families of finite-dimensional vector spaces are locally finite but not finite"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero, cor-dimension-of-a-direct-sum, cor-dimensions-of-matrix-and-linear-map-spaces, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension, def-abelian-category, def-abelian-subcategory-and-exact-embedding, def-additive-category, def-biproduct, def-dimension, def-finite-k-linear-abelian-category, def-generator-and-cogenerator-of-a-category, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-k-linear-category-and-k-linear-functor, def-linear-map, def-locally-finite-k-linear-abelian-category, def-module-homomorphism-kernel-image-and-cokernel, def-object-of-finite-length, def-product-category, def-projective-object, def-separating-set-and-coseparating-set, def-simple-object, def-subcategory-and-full-subcategory, def-subobject-and-quotient-object, def-superfluous-subobject-and-projective-cover-in-an-abelian-category, def-the-quotient-of-an-object-by-a-subobject, thm-a-small-product-of-abelian-categories-is-abelian, thm-dimension-formula, thm-dimension-of-a-linear-subspace, thm-length-is-additive-along-a-subobject, thm-module-kernel-image-and-injectivity, thm-modules-over-a-ring-form-an-abelian-category, thm-rank-nullity, thm-unique-coordinates-with-respect-to-an-ordered-basis]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3, equation (2.1)) and §§3.1–3.2 (Definition 3.1, Theorem 3.2)"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $k$ be a field and let $\mathcal C$ be the category whose objects are the
families $(V_n)_{n\in\mathbb N}$ of finite-dimensional $k$-vector spaces with
$V_n=0$ for all but finitely many $n$, and whose morphisms $(V_n)\to(W_n)$ are
the families $(f_n:V_n\to W_n)$ of $k$-linear maps, with componentwise
identities and composition. Then $\mathcal C$ is a $k$-linear abelian category
in which kernels, cokernels and finite biproducts are computed componentwise;
every hom-space is finite-dimensional over $k$; every object has finite length;
every object is projective, hence every simple object has a projective cover;
and the objects $S_m$ with $(S_m)_m=k$ and $(S_m)_n=0$ for $n\ne m$ are
pairwise non-isomorphic simple objects. Consequently $\mathcal C$ is locally
finite and has enough projectives, but it has infinitely many isomorphism
classes of simple objects and no object of $\mathcal C$ is a generator, so
$\mathcal C$ is not a finite $k$-linear abelian category. No choice is used.

## Facts & Assumptions

**Given:** A field $k$, the category $k\text{-}\mathbf{Mod}$ of $k$-vector spaces, the product category $\mathcal P=\prod_{n\in\mathbb N}k\text{-}\mathbf{Mod}$ ([[def-product-category]]), and its full subcategory $\mathcal C$ on the families $(V_n)$ with every $V_n$ finite-dimensional and $V_n=0$ for all but finitely many $n$. For an object $V$ write $\operatorname{supp}V=\{n:V_n\ne0\}$, a finite set by hypothesis, and write $d(V)=\sum_n\dim_kV_n$.

[F1] $k\text{-}\mathbf{Mod}$ is the category of modules over the field $k$ and is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F2] Every set-indexed product of abelian categories is abelian, with the zero object, finite biproducts, kernels and cokernels computed componentwise ([[thm-a-small-product-of-abelian-categories-is-abelian]], [[def-product-category]]).

[F3] For a homomorphism $f:M\to N$ of $k$-modules, $\ker f$ is a submodule of $M$, $\operatorname{im}f$ is a submodule of $N$, and $f$ is injective if and only if $\ker f=\{0_M\}$; the cokernel is $\operatorname{coker}f=N/\operatorname{im}f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[thm-module-kernel-image-and-injectivity]]).

[F4] In an abelian category a morphism is monic exactly when its kernel is zero, and epic exactly when its cokernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[F5] A linear subspace of a finite-dimensional space is finite-dimensional, and $\dim_FV=\dim_F(\ker T)+\dim_F(\operatorname{im}T)$ for a linear $T$ on a finite-dimensional $V$ ([[thm-dimension-of-a-linear-subspace]], [[thm-rank-nullity]]).

[F6] A finite-dimensional $k$-vector space has a finite ordered basis, and a $k$-linear map on such a space is uniquely determined by, and may be prescribed arbitrarily on, the elements of an ordered basis ([[def-dimension]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F7] For finite-dimensional $k$-vector spaces $V,W$ one has $\dim_k\mathcal L(V,W)=(\dim_kV)(\dim_kW)$, and the dimension of a finite internal direct sum is the sum of the dimensions of its summands ([[cor-dimensions-of-matrix-and-linear-map-spaces]], [[cor-dimension-of-a-direct-sum]]).

[F8] A subcategory is full when it contains every morphism between its objects that exists in the ambient category ([[def-subcategory-and-full-subcategory]]).



## Proof

**Proof technique:** direct.

1.1 The category $k\text{-}\mathbf{Mod}$ is abelian by [F1], so the product category $\mathcal P=\prod_{n\in\mathbb N}k\text{-}\mathbf{Mod}$ is abelian by [F2], with zero object, finite biproducts, kernels and cokernels computed componentwise; $\mathcal C$ is by definition the full subcategory of $\mathcal P$ on the families that are finite-dimensional in every degree and zero in all but finitely many degrees. [F1, F2, F8, given]

1.2 The family of zero spaces is an object of $\mathcal C$ and is the zero object of $\mathcal P$, and if $V,W\in\mathcal C$ then the componentwise family $(V_n\oplus W_n)$ lies in $\mathcal C$, because $\operatorname{supp}(V\oplus W)\subseteq\operatorname{supp}V\cup\operatorname{supp}W$ is finite and $\dim_k(V_n\oplus W_n)=\dim_kV_n+\dim_kW_n$ by [F7] is finite in every degree; the biproduct morphisms of $\mathcal P$ are the componentwise ones, so $\mathcal C$ contains the zero object and is closed under finite biproducts computed in $\mathcal P$. [F7, given, algebra]

1.3 Let $f:V\to W$ be a morphism in $\mathcal C$. Its kernel in $\mathcal P$ is the family $(\ker f_n)$ of [F3] with the canonical inclusions, whose support lies in the finite set $\operatorname{supp}V$, and $\ker f_n$ is a subspace of the finite-dimensional space $V_n$, hence finite-dimensional by [F5]; its cokernel in $\mathcal P$ is the family $(\operatorname{coker}f_n)=(W_n/\operatorname{im}f_n)$ of [F3], whose support lies in the finite set $\operatorname{supp}W$, and $\dim_k(W_n/\operatorname{im}f_n)=\dim_kW_n-\dim_k(\operatorname{im}f_n)<\infty$ by rank-nullity [F5]. Hence both the kernel and the cokernel in $\mathcal P$ of a morphism of $\mathcal C$ are objects of $\mathcal C$ with their canonical maps, so $\mathcal C$ is closed under kernels and cokernels of its morphisms computed in $\mathcal P$. [F2, F3, F5, given, algebra]

1.4 For $V,W\in\mathcal C$ the set $\operatorname{Hom}_{\mathcal C}(V,W)$ is the product $\prod_{n\in\mathbb N}\mathcal L(V_n,W_n)$, which is a finite product over the finite set $\operatorname{supp}V\cup\operatorname{supp}W$ because $\mathcal L(0,X)$ and $\mathcal L(X,0)$ are the zero space; identified with the finite direct sum $\bigoplus_{n\in\operatorname{supp}V\cup\operatorname{supp}W}\mathcal L(V_n,W_n)$ it is a finite-dimensional $k$-vector space with $\dim_k\operatorname{Hom}_{\mathcal C}(V,W)=\sum_n(\dim_kV_n)(\dim_kW_n)$ by [F7]. Composition is componentwise, hence $k$-bilinear, so $\mathcal C$ is a locally small $k$-linear category in which every hom-space is finite-dimensional over $k$. [F7, given]

1.5 A family $(u_n):(V_n)\to(W_n)$ of linear maps is an isomorphism in $\mathcal C$ exactly when every $u_n$ is a linear isomorphism, and then $(u_n^{-1})$ is its inverse; for $m\in\mathbb N$ let $S_m$ be the object with $(S_m)_m=k$ and $(S_m)_n=0$ for $n\ne m$, so that $S_m\ne0$. [F8, given, construct]

2.1 By steps 1.1, 1.2 and 1.3 the full subcategory $\mathcal C$ of the abelian category $\mathcal P$ contains the zero object and is closed under finite biproducts, kernels and cokernels computed in $\mathcal P$, so it is an abelian subcategory of $\mathcal P$ in the sense of [[def-abelian-subcategory-and-exact-embedding]]. Consequently it is itself abelian: hom-sets are abelian groups with bilinear composition inherited from $\mathcal P$, the zero object and finite biproducts of $\mathcal C$ are those of $\mathcal P$, every morphism of $\mathcal C$ has its $\mathcal P$-kernel and $\mathcal P$-cokernel in $\mathcal C$, and its image and coimage, being built from those kernels and cokernels ([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]), are also objects of $\mathcal C$, with the canonical comparison an isomorphism in $\mathcal P$ whose inverse is a morphism of $\mathcal C$ by fullness [F8]; this is exactly additivity with invertible image-coimage comparison, so $\mathcal C$ is abelian ([[def-abelian-category]]). [F8, step 1.1, step 1.2, step 1.3, algebra]

3.1 In the abelian category $\mathcal C$ the kernel and cokernel of a morphism are computed componentwise, as in step 1.3; by [F4] a morphism $u:V\to W$ of $\mathcal C$ is monic if and only if $\ker u=0$, that is if and only if $\ker u_n=0$ for every $n$, which by [F3] holds exactly when every $u_n$ is injective; and $u$ is epic if and only if $\operatorname{coker}u=0$, that is if and only if $W_n=\operatorname{im}u_n$ for every $n$, which holds exactly when every $u_n$ is surjective. [F3, F4, step 2.1, algebra]

4.1 Every object $V$ of $\mathcal C$ is projective ([[def-projective-object]]): let $q:E\to M$ be an epimorphism and $f:V\to M$ a morphism in $\mathcal C$; by step 3.1 each $q_n:E_n\to M_n$ is surjective. For each $n\in\operatorname{supp}V$ choose an ordered basis $(v_{n,1},\dots,v_{n,d_n})$ of $V_n$ (possible since $V_n$ is finite-dimensional) and for each $j\le d_n$ choose $e_{n,j}\in E_n$ with $q_n(e_{n,j})=f_n(v_{n,j})$; finitely many such choices are made. By [F6] there is for each such $n$ a unique linear $g_n:V_n\to E_n$ with $g_n(v_{n,j})=e_{n,j}$, and set $g_n=0$ for the remaining $n$; then $q_ng_n=f_n$ for $n\in\operatorname{supp}V$ because both sides agree on the basis $(v_{n,j})$, and for the remaining $n$ both sides are zero, so the family $(g_n)$ is a morphism of $\mathcal C$ with $q\circ g=f$. Thus every morphism into $M$ lifts along every epimorphism $q$, so $V$ is projective. [F6, step 3.1, choose, construct, algebra]

4.2 For every $m$ the object $S_m$ of step 1.5 is simple ([[def-simple-object]]): it is nonzero, and if $u:T\to S_m$ is a monomorphism in $\mathcal C$ then every $u_n$ is injective by step 3.1; for $n\ne m$ the target $(S_m)_n$ is zero, so an injective map into it has zero domain and $T_n=0$, while a nonzero subobject has $T\ne0$, hence $T_m\ne0$; then $u_m:T_m\to k$ is an injective linear map with nonzero finite-dimensional domain, so $\dim_kT_m\le1$ and $\dim_kT_m\ge1$, whence $u_m$ is an isomorphism and so is $u$ by step 1.5. Therefore the only subobjects of $S_m$ are the zero subobject and $1_{S_m}$, so $S_m$ is simple. [F5, step 1.5, step 3.1, algebra]

5.1 Conversely, if $V\in\mathcal C$ is simple, then $V\ne0$ gives $V_m\ne0$ for some $m$, and a nonzero vector of $V_m$ spans a line $L\subseteq V_m$; the object $S$ with $S_m=L$ and $S_n=0$ for $n\ne m$ is a nonzero subobject of $V$ isomorphic to $S_m$, so by simplicity the subobject $S$ equals $V$ and $V\cong S_m$. Moreover $S_m\cong S_n$ forces $k=(S_m)_m\cong(S_n)_m$, so $(S_n)_m\ne0$ and $m=n$. Hence the objects $S_m$, $m\in\mathbb N$, form a complete set of pairwise non-isomorphic simple objects, so $\mathcal C$ has infinitely many isomorphism classes of simple objects. [step 4.2, algebra]

5.2 Every object $V$ of $\mathcal C$ has finite length ([[def-object-of-finite-length]]): induct on the natural number $d(V)=\sum_n\dim_kV_n$ from step 1.4. If $d(V)=0$ then every $V_n=0$, so $V=0$ and the empty composition series exhibits finite length. If $d(V)>0$, choose $n\in\operatorname{supp}V$ and a line $L\subseteq V_n$; the object $S$ with $S_n=L$ and $S_k=0$ for $k\ne n$ is a simple subobject of $V$, and the quotient $V/S$ ([[def-the-quotient-of-an-object-by-a-subobject]]) is the family with $(V/S)_n=V_n/L$ and $(V/S)_j=V_j$ for $j\ne n$, of total dimension $d(V)-1$; by the induction hypothesis $V/S$ has finite length, and $S\cong S_n$ has the one-step composition series $0<S$ because it is simple by step 4.2, so the additivity theorem for lengths along a subobject ([[thm-length-is-additive-along-a-subobject]]) gives that $V$ has finite length and $\ell(V)=1+\ell(V/S)$. [F5, step 2.1, step 4.2, induction]

5.3 Every simple object of $\mathcal C$ has a projective cover ([[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]]): if $S$ is simple then its identity $1_S:S\to S$ is an epimorphism whose source $S$ is projective by step 4.1, and its kernel is the zero subobject, which is superfluous because $[0]\vee[m]=[m]$ for every subobject $[m]$, so the condition $[0]\vee[m]=[1_S]$ forces $[m]=[1_S]$; hence $1_S$ is essential and is a projective cover of $S$. [step 4.1, algebra]

5.4 No object $P$ of $\mathcal C$ is a generator ([[def-generator-and-cogenerator-of-a-category]]): choose $m\notin\operatorname{supp}P$, possible because $\operatorname{supp}P$ is finite; then $\operatorname{Hom}_{\mathcal C}(P,S_m)=\prod_n\mathcal L(P_n,(S_m)_n)=0$ by step 1.4, since the $m$-th factor is $\mathcal L(0,k)=0$. The two distinct parallel morphisms $1_{S_m},0:S_m\to S_m$ therefore cannot be separated by any morphism $P\to S_m$, so the singleton $\{P\}$ is not separating in the sense of [[def-separating-set-and-coseparating-set]], and $P$ is not a generator. [step 1.4, step 4.2, algebra]

6.1 By step 2.1 the category $\mathcal C$ is abelian, by step 1.4 it is locally small, $k$-linear with finite-dimensional hom-spaces, and by step 5.2 every object has finite length; hence $\mathcal C$ is a locally finite $k$-linear abelian category ([[def-locally-finite-k-linear-abelian-category]]). By step 4.1 every object is projective, hence by step 5.3 every simple object has a projective cover, so $\mathcal C$ has enough projectives; by step 5.1 it has infinitely many isomorphism classes of simple objects and by step 5.4 no object is a generator, so the finiteness conditions of [[def-finite-k-linear-abelian-category]] fail and $\mathcal C$ is not a finite $k$-linear abelian category. All bases chosen lie in finite-dimensional spaces, the hom-space products and objectwise sums reduce to finite ones; the ambient countable product uses the explicit componentwise module constructions, and no element is selected from an infinite family, so no choice is used. [step 1.4, step 2.1, step 4.1, step 5.1, step 5.2, step 5.3, step 5.4, given] ∎
